import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { LocationHours } from "@/components/LocationHours";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Book Now | CC & CO. Elwood",
  description:
    "Request an appointment at CC & CO. for lash extensions, teeth whitening, brows and boutique beauty services in Elwood, Melbourne.",
  path: "/book",
});

type BookPageProps = {
  searchParams: Promise<{
    service?: string;
  }>;
};

export default async function BookPage({ searchParams }: BookPageProps) {
  const { service } = await searchParams;

  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Book Now"
              title="Request your appointment."
              description="Tell us your preferred service and timing. We will confirm availability and guide you through the next steps."
              as="h1"
            />
            {siteConfig.bookingUrl ? (
              <Card className="mt-8 p-6">
                <h2 className="font-serif text-3xl text-charcoal">
                  Prefer instant booking?
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Use the external booking link for real-time availability.
                </p>
                <ButtonLink
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  className="mt-5"
                >
                  Book Instantly
                </ButtonLink>
              </Card>
            ) : null}
            <Card className="mt-6 p-6">
              <h2 className="font-serif text-3xl text-charcoal">
                Before you book
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                {siteConfig.policyHighlights.map((policy) => (
                  <li key={policy} className="flex gap-3">
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{policy}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <Card className="p-6 sm:p-8">
            <BookingForm defaultServiceSlug={service} />
          </Card>
        </div>
      </section>
      <LocationHours />
    </>
  );
}
