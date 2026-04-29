import { NextResponse } from "next/server";
import { sendStudioEmail } from "@/lib/email";
import { readJsonRequest } from "@/lib/request-guards";
import { contactSchema } from "@/lib/validations";

const MAX_CONTACT_REQUEST_BYTES = 8_000;

export async function POST(request: Request) {
  const requestBody = await readJsonRequest(request, {
    maxBytes: MAX_CONTACT_REQUEST_BYTES,
  });

  if (!requestBody.ok) {
    return NextResponse.json(
      { message: requestBody.message },
      { status: requestBody.status },
    );
  }

  const result = contactSchema.safeParse(requestBody.body);

  if (!result.success) {
    return NextResponse.json(
      { message: "Please check the contact form and try again." },
      { status: 400 },
    );
  }

  if (result.data.website) {
    return NextResponse.json(
      { message: "Thank you. We will be in touch shortly." },
      { status: 200 },
    );
  }

  const emailResult = await sendStudioEmail({
    to: process.env.CONTACT_TO_EMAIL,
    subject: `New contact enquiry from ${result.data.name}`,
    replyTo: result.data.email,
    source: result.data.source || "Contact page",
    fields: [
      { label: "Name", value: result.data.name },
      { label: "Email", value: result.data.email },
      { label: "Phone", value: result.data.phone },
      { label: "Message", value: result.data.message },
    ],
  });

  if (!emailResult.ok) {
    return NextResponse.json(
      { message: emailResult.message || "Your message could not be sent." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message:
      "Thank you. Your message has been sent and we will be in touch shortly.",
  });
}
