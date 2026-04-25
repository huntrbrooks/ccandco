import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/Motion";
import { Hero } from "@/components/Hero";
import { InstagramGrid } from "@/components/InstagramGrid";
import { LocationHours } from "@/components/LocationHours";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { featuredServices } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <div className="overflow-hidden rounded-[2.5rem] border border-white/70 shadow-2xl">
              <Image
                src="/images/Lashes 1.png"
                alt="CC & CO. lash treatment in a calm boutique beauty studio"
                width={720}
                height={960}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading
              eyebrow="Our approach"
              title={siteConfig.introTitle}
              description={siteConfig.introCopy}
            />
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              {siteConfig.longCopy}
            </p>
            <p className="mt-5 font-serif text-3xl leading-snug text-primary">
              {siteConfig.confidenceCopy}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Beauty services tailored to your moment."
              description="Choose from signature lashes, professional whitening, brow services and flexible add-ons that can grow with the studio."
            />
            <ButtonLink href="/services" variant="outline">
              Learn More About Our Services
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredServices.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.08}>
                <ServiceCard service={service} compact />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn variant="subtle">
            <SectionHeading
              eyebrow="Why clients love CC & CO."
              title="An elevated studio experience without the fuss."
              description="Every detail is designed to feel calm, considered and confidence-building."
              align="center"
            />
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.values.map((value, index) => (
              <FadeIn key={value} delay={index * 0.05} variant="subtle">
                <Card className="p-6">
                  <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-2xl text-charcoal">
                    {value}
                  </h3>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-cream p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <FadeIn variant="subtle">
              <SectionHeading
                eyebrow="Signature experience"
                title="Precision, calm and care from start to finish."
                description="The CC & CO. service process keeps your appointment clear, relaxing and tailored."
              />
            </FadeIn>
            <FadeIn delay={0.08} variant="subtle">
              <div className="overflow-hidden rounded-4xl border border-white/70 bg-card shadow-xl">
                <Image
                  src="/images/consultation .png"
                  alt="A relaxed CC & CO. boutique studio consultation setting"
                  width={1024}
                  height={576}
                  className="aspect-video w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {siteConfig.process.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.06} variant="subtle">
                <Card className="p-6">
                  <span className="font-serif text-5xl text-champagne">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-3xl text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
            variant="subtle"
          >
            <SectionHeading
              eyebrow="Testimonials"
              title="Kind words from confident clients."
              description="Real feedback and space for more studio reviews as the brand grows."
            />
            <ButtonLink href="/reviews" variant="outline">
              Read More Reviews
            </ButtonLink>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.06} variant="subtle">
                <TestimonialCard testimonial={testimonial} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <InstagramGrid />
      <LocationHours />
      <CTASection />
    </>
  );
}
