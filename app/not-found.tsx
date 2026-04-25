import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.32em] text-taupe">
        Page not found
      </p>
      <h1 className="mx-auto mt-4 max-w-2xl font-serif text-5xl font-semibold text-charcoal">
        This page has stepped out of the studio.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
        The page you are looking for may have moved. Explore services or book
        your next appointment.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/services" variant="outline">
          Services
        </ButtonLink>
        <ButtonLink href="/book">Book Now</ButtonLink>
      </div>
    </section>
  );
}
