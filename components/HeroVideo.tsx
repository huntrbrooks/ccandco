"use client";

import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const HERO_VIDEO_SRC = "/videos/cc and co.mp4";
const HERO_POSTER_SRC = "/images/cc-and-co-hero-video-poster.jpg";

export function HeroVideo() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Image
        src={HERO_POSTER_SRC}
        alt="CC & CO. premium aesthetics studio atmosphere"
        width={900}
        height={1125}
        className="aspect-4/5 w-full object-cover"
        priority
      />
    );
  }

  return (
    <video
      className="aspect-4/5 w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={HERO_POSTER_SRC}
      aria-label="CC & CO. premium aesthetics brand video"
    >
      <source src={HERO_VIDEO_SRC} type="video/mp4" />
    </video>
  );
}
