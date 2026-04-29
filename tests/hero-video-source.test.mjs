import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("hero video uses the original cc and co video asset", () => {
  const heroVideo = readFileSync(
    new URL("../components/HeroVideo.tsx", import.meta.url),
    "utf8",
  );

  expect(heroVideo).toContain('const HERO_VIDEO_SRC = "/videos/cc and co.mp4";');
});

test("hero video always renders an autoplaying muted loop", () => {
  const heroVideo = readFileSync(
    new URL("../components/HeroVideo.tsx", import.meta.url),
    "utf8",
  );

  expect(heroVideo).not.toContain("usePrefersReducedMotion");
  expect(heroVideo).toContain("autoPlay");
  expect(heroVideo).toContain("muted");
  expect(heroVideo).toContain("loop");
  expect(heroVideo).toContain("playsInline");
});
