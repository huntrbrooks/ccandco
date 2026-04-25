import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms and Conditions | CC & CO.",
  description:
    "Terms and conditions for using the CC & CO. website and submitting appointment enquiries.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Legal"
          title="Terms and Conditions"
          description="These terms apply to use of the CC & CO. website and enquiry forms."
        />
        <Card className="mt-10 space-y-8 p-6 text-sm leading-7 text-muted-foreground sm:p-10">
          <section>
            <h2 className="font-serif text-3xl text-charcoal">
              Website information
            </h2>
            <p className="mt-3">
              Website content is provided for general information and may be
              updated as services, pricing and studio policies evolve.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-charcoal">
              Booking requests
            </h2>
            <p className="mt-3">
              Submitting a booking request does not guarantee an appointment.
              The studio will confirm availability, suitability and next steps
              directly.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-charcoal">
              Appointment policy
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {siteConfig.policyHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-charcoal">
              Pricing and services
            </h2>
            <p className="mt-3">
              Prices shown are starting prices and may vary depending on client
              goals, suitability and treatment requirements. Final pricing is
              confirmed by the studio.
            </p>
          </section>
        </Card>
      </div>
    </section>
  );
}
