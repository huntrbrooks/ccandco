import { ButtonLink } from "@/components/ui/button";
import { FadeIn } from "@/components/Motion";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function CTASection({
  title = "Ready to feel confident?",
  description = "Book your appointment and experience beauty care tailored with precision, warmth and calm.",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("px-4 py-16 sm:px-6 lg:px-8", className)}>
      <FadeIn variant="subtle">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-primary px-6 py-14 text-center text-primary-foreground shadow-2xl sm:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-champagne">
            CC & CO.
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-primary-foreground/78">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/book" variant="secondary">
              Book Your Appointment
            </ButtonLink>
            <ButtonLink href="/reviews" variant="outline" className="border-cream/40 text-cream hover:bg-cream hover:text-primary">
              Read More Reviews
            </ButtonLink>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
