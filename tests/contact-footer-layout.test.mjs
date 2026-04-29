import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("root layout uses a sticky-footer column structure", () => {
  const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");

  const bodyClassName = layout.match(/<body[^>]+className=["']([^"']+)["']/)?.[1] ?? "";
  const mainClassName = layout.match(/<main[^>]+className=["']([^"']+)["']/)?.[1] ?? "";

  expect(bodyClassName.split(/\s+/)).toContain("min-h-screen");
  expect(bodyClassName.split(/\s+/)).toContain("flex");
  expect(bodyClassName.split(/\s+/)).toContain("flex-col");
  expect(mainClassName.split(/\s+/)).toContain("flex-1");
});
