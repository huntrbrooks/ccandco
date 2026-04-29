"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, PlayCircle, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { InstagramHighlight } from "@/lib/instagram-highlights";
import { trackInstagramHighlightOpened } from "@/lib/tracking";

export type InstagramHighlightCard = {
  id: string;
  title: string;
  src: string;
  alt: string;
};

type InstagramHighlightsProps = {
  cards: InstagramHighlightCard[];
  handle: string;
  instagramUrl: string;
};

type HighlightsApiResponse = {
  highlights?: InstagramHighlight[];
  providerConfigured?: boolean;
  message?: string;
};

export function InstagramHighlights({
  cards,
  handle,
  instagramUrl,
}: InstagramHighlightsProps) {
  const [activeCard, setActiveCard] = useState<InstagramHighlightCard | null>(null);
  const [highlights, setHighlights] = useState<InstagramHighlight[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const shouldReduceMotion = usePrefersReducedMotion();

  const activeHighlight = useMemo(() => {
    if (!activeCard || !highlights) {
      return null;
    }

    return (
      highlights.find(
        (highlight) =>
          highlight.title.toLowerCase() === activeCard.title.toLowerCase(),
      ) ?? highlights[cards.findIndex((card) => card.id === activeCard.id)]
    );
  }, [activeCard, cards, highlights]);

  const mediaItems = activeHighlight?.mediaItems ?? [];

  useEffect(() => {
    if (!activeCard) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveCard(null);
      }
    }

    document.addEventListener("keydown", closeOnEscape);

    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [activeCard]);

  async function openHighlight(card: InstagramHighlightCard) {
    setActiveCard(card);
    trackInstagramHighlightOpened({
      highlight_id: card.id,
      highlight_title: card.title,
      provider_configured: highlights !== null,
    });

    if (highlights || isLoading) {
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch(
        `/api/instagram/highlights?handle=${encodeURIComponent(handle)}`,
      );
      const data = (await response.json()) as HighlightsApiResponse;

      setHighlights(data.highlights ?? []);
      setMessage(data.message ?? null);
    } catch {
      setHighlights([]);
      setMessage("Instagram highlights could not be loaded right now.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => void openHighlight(card)}
            className="group relative overflow-hidden rounded-3xl border border-cream/15 text-left transition duration-300 hover:-translate-y-1 hover:border-champagne/70 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            aria-label={`Play ${card.title} Instagram highlight`}
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={420}
              height={520}
              className="aspect-4/5 w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-charcoal/0 transition group-hover:bg-charcoal/20" />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ivory/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-lg backdrop-blur">
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              {card.title}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeCard ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 px-4 py-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCard.title} Instagram highlight`}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
          >
            <motion.div
              className="relative max-h-full w-full max-w-3xl overflow-hidden rounded-4xl border border-cream/20 bg-charcoal text-cream shadow-2xl"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0, scale: 0.985, y: 8 }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.22,
                ease: "easeOut",
              }}
            >
              <button
                type="button"
                onClick={() => setActiveCard(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-ivory/90 p-2 text-charcoal transition hover:bg-secondary"
                aria-label="Close Instagram highlight"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-96 bg-black">
                  {isLoading ? (
                    <div className="flex h-full min-h-96 items-center justify-center px-8 text-center text-sm uppercase tracking-[0.24em] text-cream/70">
                      Loading highlight reel
                    </div>
                  ) : mediaItems.length > 0 ? (
                    <div className="flex max-h-[80vh] snap-x gap-3 overflow-x-auto p-3">
                      {mediaItems.map((item) =>
                        item.type === "video" ? (
                          <video
                            key={item.id}
                            className="max-h-[76vh] min-w-full snap-center rounded-3xl object-cover"
                            controls
                            autoPlay
                            playsInline
                            poster={item.thumbnailUrl ?? activeCard.src}
                          >
                            <source src={item.url} />
                          </video>
                        ) : (
                          <RemoteOrLocalImage
                            key={item.id}
                            src={item.url}
                            alt={item.caption ?? `${activeCard.title} highlight media`}
                          />
                        ),
                      )}
                    </div>
                  ) : (
                    <Image
                      src={activeCard.src}
                      alt={activeCard.alt}
                      width={720}
                      height={900}
                      className="h-full min-h-96 w-full object-cover"
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.32em] text-champagne">
                    Instagram Highlight
                  </p>
                  <h3 className="mt-4 font-serif text-4xl font-semibold">
                    {activeCard.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-cream/75">
                    {mediaItems.length > 0
                      ? `Playing the latest ${activeCard.title.toLowerCase()} highlight media from @${handle}.`
                      : message ??
                        `Live ${activeCard.title.toLowerCase()} highlight media will appear here once the provider returns reels for @${handle}.`}
                  </p>
                  <ButtonLink
                    href={instagramUrl}
                    target="_blank"
                    className="mt-7 w-fit"
                    variant="secondary"
                  >
                    View On Instagram
                    <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function RemoteOrLocalImage({ src, alt }: { src: string; alt: string }) {
  if (src.startsWith("/")) {
    return (
      <Image
        src={src}
        alt={alt}
        width={720}
        height={900}
        className="max-h-[76vh] min-w-full snap-center rounded-3xl object-cover"
      />
    );
  }

  return (
    // Remote provider media hosts are unknown until credentials are configured.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="max-h-[76vh] min-w-full snap-center rounded-3xl object-cover"
    />
  );
}
