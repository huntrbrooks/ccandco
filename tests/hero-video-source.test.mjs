import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("hero video uses the original cc and co video asset", () => {
  const heroVideo = readFileSync(
    new URL("../components/HeroVideo.tsx", import.meta.url),
    "utf8",
  );

  expect(heroVideo).toContain('const HERO_VIDEO_SRC = "/videos/cc and co.mp4";');
});
