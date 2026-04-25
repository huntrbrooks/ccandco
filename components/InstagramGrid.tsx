import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { getInstagramUrl, siteConfig } from "@/lib/site";

const instagramImages = [
  {
    src: "/images/logo-reference.jpg",
    alt: "CC & CO. aesthetics logo",
  },
  {
    src: "/images/prices-circle-reference.jpg",
    alt: "CC & CO. price highlight graphic",
  },
  {
    src: "/images/aftercare-circle-reference.jpg",
    alt: "CC & CO. aftercare highlight graphic",
  },
  {
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
              aftercare notes and real client results. A live feed can be
              connected later with an Instagram API token.
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
          <div className="grid grid-cols-2 gap-4">
            {instagramImages.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-[1.5rem] border border-cream/15"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={420}
                  height={520}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
