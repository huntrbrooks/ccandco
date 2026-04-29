import { NextResponse } from "next/server";
import { getServiceBySlug } from "@/lib/services";
import { sendStudioEmail } from "@/lib/email";
import { readJsonRequest } from "@/lib/request-guards";
import { bookingSchema } from "@/lib/validations";

const MAX_BOOKING_REQUEST_BYTES = 12_000;

export async function POST(request: Request) {
  const requestBody = await readJsonRequest(request, {
    maxBytes: MAX_BOOKING_REQUEST_BYTES,
  });

  if (!requestBody.ok) {
    return NextResponse.json(
      { message: requestBody.message },
      { status: requestBody.status },
    );
  }

  const result = bookingSchema.safeParse(requestBody.body);

  if (!result.success) {
    return NextResponse.json(
      { message: "Please check the booking form and try again." },
      { status: 400 },
    );
  }

  if (result.data.website) {
    return NextResponse.json(
      { message: "Thank you. We will be in touch shortly." },
      { status: 200 },
    );
  }

  const service = getServiceBySlug(result.data.preferredService);
  const emailResult = await sendStudioEmail({
    to: process.env.BOOKING_TO_EMAIL,
    subject: `New booking request: ${service?.name || "Service enquiry"}`,
    replyTo: result.data.email,
    source: result.data.source || "Book Now page",
    fields: [
      { label: "Full name", value: result.data.fullName },
      { label: "Email", value: result.data.email },
      { label: "Phone", value: result.data.phone },
      { label: "Preferred service", value: service?.name || result.data.preferredService },
      { label: "Preferred date", value: result.data.preferredDate },
      { label: "Preferred time", value: result.data.preferredTime },
      { label: "Client type", value: result.data.clientType },
      { label: "Notes", value: result.data.notes },
      { label: "Consent", value: result.data.consent },
    ],
  });

  if (!emailResult.ok) {
    return NextResponse.json(
      { message: emailResult.message || "Your request could not be sent." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message:
      "Thank you. Your booking request has been sent and we will be in touch shortly.",
  });
}
