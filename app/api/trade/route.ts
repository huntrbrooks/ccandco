import { NextResponse } from "next/server";
import { sendStudioEmail } from "@/lib/email";
import { readJsonRequest } from "@/lib/request-guards";
import { tradeSchema } from "@/lib/validations";

const MAX_TRADE_REQUEST_BYTES = 10_000;

export async function POST(request: Request) {
  const requestBody = await readJsonRequest(request, {
    maxBytes: MAX_TRADE_REQUEST_BYTES,
  });

  if (!requestBody.ok) {
    return NextResponse.json(
      { message: requestBody.message },
      { status: requestBody.status },
    );
  }

  const result = tradeSchema.safeParse(requestBody.body);

  if (!result.success) {
    return NextResponse.json(
      { message: "Please check the trade enquiry form and try again." },
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
    to: process.env.TRADE_TO_EMAIL,
    subject: `New trade enquiry: ${result.data.enquiryType}`,
    replyTo: result.data.email,
    source: result.data.source || "Trade page",
    fields: [
      { label: "Name", value: result.data.name },
      { label: "Business name", value: result.data.businessName },
      { label: "Email", value: result.data.email },
      { label: "Phone", value: result.data.phone },
      { label: "Enquiry type", value: result.data.enquiryType },
      { label: "Message", value: result.data.message },
    ],
  });

  if (!emailResult.ok) {
    return NextResponse.json(
      { message: emailResult.message || "Your enquiry could not be sent." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message:
      "Thank you. Your trade enquiry has been sent and we will be in touch shortly.",
  });
}
