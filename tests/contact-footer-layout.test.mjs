import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("root layout uses a sticky-footer column structure", () => {
  const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");

  const bodyClassName = layout.match(/<body[^>]+className=["']([^"']+)["']/)?.[1] ?? "";
  const mainClassName = layout.match(/<main[^>]+className=["']([^"']+)["']/)?.[1] ?? "";

  assert.ok(bodyClassName.split(/\s+/).includes("min-h-screen"));
  assert.ok(bodyClassName.split(/\s+/).includes("flex"));
  assert.ok(bodyClassName.split(/\s+/).includes("flex-col"));
  assert.ok(mainClassName.split(/\s+/).includes("flex-1"));
});
