import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
  priority?: boolean;
};

export function ServiceCard({
  service,
  compact = false,
  priority = false,
}: ServiceCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={760}
          height={620}
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-ivory/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
          {service.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-3xl font-semibold text-charcoal">
          {service.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
          {service.shortDescription}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-muted p-4">
            <span className="block text-xs uppercase tracking-[0.18em] text-taupe">
              From
            </span>
            <strong className="mt-1 block text-charcoal">
              {service.startingPrice}
            </strong>
          </div>
          <div className="rounded-2xl bg-muted p-4">
            <span className="block text-xs uppercase tracking-[0.18em] text-taupe">
              Time
            </span>
            <strong className="mt-1 block text-charcoal">
              {service.duration}
            </strong>
          </div>
        </div>
        {!compact ? (
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {service.benefits.slice(0, 3).map((benefit) => (
              <li key={benefit} className="flex gap-2">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-taupe" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/services/${service.slug}`} variant="outline" size="sm">
            Learn More
          </ButtonLink>
          <ButtonLink href={`/book?service=${service.slug}`} size="sm">
            Book Now
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}
