import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getServiceBySlug, services } from "@/lib/services";
import { createBreadcrumbJsonLd, createMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: `${service.name} | CC & CO. Elwood`,
    description: `${service.description} Book ${service.name.toLowerCase()} at CC & CO. in Elwood, Melbourne.`,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumb = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-taupe">
              {service.category}
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-tight text-charcoal sm:text-7xl">
              {service.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {service.description}
            </p>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-4">
              <Card className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-taupe">
                  Time
                </p>
                <p className="mt-2 text-xl font-semibold text-charcoal">
                  {service.duration}
                </p>
              </Card>
              <Card className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-taupe">
                  From
                </p>
                <p className="mt-2 text-xl font-semibold text-charcoal">
                  {service.startingPrice}
                </p>
              </Card>
            </div>
            <ButtonLink href={`/book?service=${service.slug}`} className="mt-8">
              Book Now
            </ButtonLink>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-white/70 shadow-2xl">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={900}
              height={1080}
              className="aspect-[4/5] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <DetailCard title="Who it is for" items={service.whoItIsFor} />
          <DetailCard title="What to expect" items={service.whatToExpect} />
          <DetailCard title="Benefits" items={service.benefits} />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-taupe">
              Aftercare
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-charcoal">
              Keep your result fresh.
            </h2>
          </div>
          <Card className="p-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.aftercare.map((item) => (
                <li key={item} className="rounded-2xl bg-muted p-4 text-sm leading-7 text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl font-semibold text-charcoal">
            FAQ
          </h2>
          <div className="mt-6 space-y-4">
            {service.faq.map((item) => (
              <Card key={item.question} className="p-6">
                <h3 className="font-serif text-2xl text-charcoal">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Book ${service.name}`} />
    </>
  );
}

function DetailCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="p-6">
      <h2 className="font-serif text-3xl font-semibold text-charcoal">
        {title}
      </h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}
