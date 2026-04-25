import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { LocationHours } from "@/components/LocationHours";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";
import { getInstagramUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact Us | CC & CO. Elwood",
  description:
    "Contact CC & CO., a premium boutique beauty studio in Elwood, Melbourne for lash extensions, teeth whitening and beauty enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeading
              eyebrow="Contact Us"
              title="We would love to hear from you."
              description="Send a message for service questions, appointment help or studio enquiries."
              as="h1"
            />
            <Card className="mt-8 space-y-4 p-6 text-sm leading-7 text-muted-foreground">
              <p>
                Instagram:{" "}
                <a
                  href={getInstagramUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary hover:text-charcoal"
                >
                  @{siteConfig.instagramHandle}
                </a>
              </p>
              <p>Email: {siteConfig.studioEmail}</p>
              <p>Phone: {siteConfig.phone}</p>
            </Card>
          </div>
          <Card className="p-6 sm:p-8">
            <ContactForm />
          </Card>
        </div>
      </section>
      <LocationHours />
    </>
  );
}
