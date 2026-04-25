import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/lib/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="p-6">
      <div className="flex gap-1 text-champagne" aria-label="Five star review">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-5 text-base leading-8 text-charcoal">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6">
        <p className="font-semibold text-charcoal">{testimonial.name}</p>
        {testimonial.service ? (
          <p className="text-sm text-muted-foreground">{testimonial.service}</p>
        ) : null}
      </figcaption>
    </Card>
  );
}
