import { ButtonLink } from "@/components/ui/button";
import { HeroVideo } from "@/components/HeroVideo";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-taupe">
            {siteConfig.heroIntro}
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-charcoal sm:text-7xl lg:text-8xl">
            {siteConfig.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            {siteConfig.introCopy} {siteConfig.confidenceCopy}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book" size="lg">
              Book Now
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" size="lg">
              Learn More About Our Services
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-blush/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-card shadow-[0_30px_90px_rgba(94,70,56,0.16)]">
            <HeroVideo />
            <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/45 bg-ivory/88 p-5 shadow-xl backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-taupe">
                Boutique Elwood Studio
              </p>
              <p className="mt-2 font-serif text-2xl text-charcoal">
                Lashes, whitening and beauty services tailored to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
