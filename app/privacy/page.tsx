import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | CC & CO.",
  description:
    "Privacy policy for CC & CO. explaining how booking, contact and trade enquiry information is handled.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          description="This policy explains how CC & CO. collects and handles information submitted through this website."
        />
        <Card className="mt-10 space-y-8 p-6 text-sm leading-7 text-muted-foreground sm:p-10">
          <section>
            <h2 className="font-serif text-3xl text-charcoal">
              Information we collect
            </h2>
            <p className="mt-3">
              We collect information you submit through booking, contact and
              trade enquiry forms, including your name, email, phone number,
              preferred service, appointment preferences and message details.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-charcoal">
              How we use information
            </h2>
            <p className="mt-3">
              Information is used to respond to enquiries, manage appointment
              requests, provide client support and improve the studio
              experience. We do not sell personal information.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-charcoal">
              Email and storage
            </h2>
            <p className="mt-3">
              Form submissions are sent securely to the relevant studio email
              inbox using Resend. Please do not submit sensitive health,
              financial or payment information through website forms.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-charcoal">Contact</h2>
            <p className="mt-3">
              For privacy questions, contact {siteConfig.studioEmail}.
            </p>
          </section>
        </Card>
      </div>
    </section>
  );
}
