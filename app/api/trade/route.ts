import { NextResponse } from "next/server";
import { sendStudioEmail } from "@/lib/email";
import { tradeSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = tradeSchema.safeParse(body);

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
