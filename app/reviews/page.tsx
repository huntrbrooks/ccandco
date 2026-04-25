import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ButtonLink } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";
import { getInstagramUrl } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = createMetadata({
  title: "Reviews | CC & CO. Elwood",
  description:
    "Read client reviews for CC & CO., a boutique Elwood beauty studio for lashes, teeth whitening and beauty treatments.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
            variant="subtle"
          >
            <SectionHeading
              eyebrow="Reviews"
              title="Client words that mean everything."
              description="A growing collection of testimonials from clients who trust CC & CO. with their lashes, smiles and beauty routine."
              as="h1"
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={getInstagramUrl()} target="_blank" variant="outline">
                Leave a Review
              </ButtonLink>
              <ButtonLink href="/book">Book Now</ButtonLink>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.04} variant="subtle">
                <TestimonialCard testimonial={testimonial} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
