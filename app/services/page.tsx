import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { getServiceCategories, services } from "@/lib/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services | CC & CO. Elwood Beauty Studio",
  description:
    "Explore CC & CO. services including eyelash extensions, lash lift and tint, teeth whitening, brow sculpting and beauty add-ons in Elwood, Melbourne.",
  path: "/services",
});

export default function ServicesPage() {
  const categories = getServiceCategories();

  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Premium beauty treatments, tailored with care."
            description="Every service includes a personal approach, clear treatment guidance and aftercare designed to protect your result."
            as="h1"
          />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-14">
          {categories.map((category, categoryIndex) => (
            <div key={category}>
              <h2 className="mb-6 font-serif text-4xl font-semibold text-charcoal">
                {category}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((service) => service.category === category)
                  .map((service) => (
                    <ServiceCard
                      key={service.slug}
                      service={service}
                      priority={categoryIndex === 0}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
