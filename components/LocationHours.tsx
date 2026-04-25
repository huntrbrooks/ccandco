import { MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getAddressLine, siteConfig } from "@/lib/site";

export function LocationHours() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
            <MapPin aria-hidden="true" />
          </div>
          <h2 className="mt-6 font-serif text-4xl font-semibold text-charcoal">
            Visit our Elwood studio
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {getAddressLine()}
          </p>
          <dl className="mt-8 space-y-3">
            {siteConfig.hours.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl bg-muted px-4 py-3 text-sm"
              >
                <dt className="font-semibold text-charcoal">{item.label}</dt>
                <dd className="text-muted-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
          <ButtonLink href="/book" className="mt-8">
            Book Your Appointment
          </ButtonLink>
        </Card>
        <Card className="min-h-[360px] overflow-hidden">
          {siteConfig.googleMapsEmbedUrl ? (
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              title="Google Maps location for CC & CO. in Elwood"
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex h-full min-h-[360px] items-center justify-center bg-[linear-gradient(135deg,#ead8ca,#fbf7f1)] p-8 text-center">
              <div>
                <p className="font-serif text-3xl text-charcoal">
                  Google Maps placeholder
                </p>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                  Add `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` to show the live map
                  embed here.
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
