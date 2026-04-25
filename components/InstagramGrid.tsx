import { ButtonLink } from "@/components/ui/button";
import {
  InstagramHighlights,
  type InstagramHighlightCard,
} from "@/components/InstagramHighlights";
import { getInstagramUrl, siteConfig } from "@/lib/site";

const instagramHighlights: InstagramHighlightCard[] = [
  {
    id: "studio",
    title: "Studio",
    src: "/images/logo-reference.jpg",
    alt: "CC & CO. aesthetics logo",
  },
  {
    id: "prices",
    title: "Prices",
    src: "/images/prices-circle-reference.jpg",
    alt: "CC & CO. price highlight graphic",
  },
  {
    id: "aftercare",
    title: "Aftercare",
    src: "/images/aftercare-circle-reference.jpg",
    alt: "CC & CO. aftercare highlight graphic",
  },
  {
    id: "booking",
    title: "Booking",
    src: "/images/booking-circle-reference.jpg",
    alt: "CC & CO. booking highlight graphic",
  },
];

export function InstagramGrid() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-charcoal p-6 text-cream sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-champagne">
              Get Social With Us
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Follow the studio story.
            </h2>
            <p className="mt-5 text-sm leading-7 text-cream/75">
              Connect with @{siteConfig.instagramHandle} for treatment updates,
              aftercare notes and real client results. Tap a highlight to play
              the latest reel when the studio feed is connected.
            </p>
            <ButtonLink
              href={getInstagramUrl()}
              className="mt-7"
              variant="secondary"
              target="_blank"
            >
              Follow Us On Instagram
            </ButtonLink>
          </div>
          <InstagramHighlights
            cards={instagramHighlights}
            handle={siteConfig.instagramHandle}
            instagramUrl={getInstagramUrl()}
          />
        </div>
      </div>
    </section>
  );
}
