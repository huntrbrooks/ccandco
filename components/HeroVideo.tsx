"use client";

const HERO_VIDEO_SRC = "/videos/cc and co.mp4";
const HERO_POSTER_SRC = "/images/cc-and-co-hero-video-poster.jpg";

export function HeroVideo() {
  return (
    <video
      className="aspect-4/5 w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={HERO_POSTER_SRC}
      aria-label="CC & CO. premium aesthetics brand video"
    >
      <source src={HERO_VIDEO_SRC} type="video/mp4" />
    </video>
  );
}
