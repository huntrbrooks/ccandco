import { afterEach, describe, expect, it, vi } from "vitest";
import {
  getGoogleMapsSearchUrl,
  getInstagramHighlightsConfig,
  getPostHogClientConfig,
} from "../../lib/integration-config";

const ORIGINAL_ENV = process.env;

afterEach(() => {
  process.env = { ...ORIGINAL_ENV };
  vi.unstubAllEnvs();
});

describe("getPostHogClientConfig", () => {
  it("uses the local ingest proxy by default", () => {
    vi.stubEnv("NEXT_PUBLIC_POSTHOG_KEY", "ph_test");
    vi.stubEnv("NEXT_PUBLIC_POSTHOG_HOST", "");

    expect(getPostHogClientConfig()).toMatchObject({
      key: "ph_test",
      apiHost: "/ingest",
      uiHost: "https://us.posthog.com",
    });
  });

  it("allows an explicit PostHog host when the proxy is not desired", () => {
    vi.stubEnv("NEXT_PUBLIC_POSTHOG_KEY", "ph_test");
    vi.stubEnv("NEXT_PUBLIC_POSTHOG_HOST", "https://eu.i.posthog.com");

    expect(getPostHogClientConfig()).toMatchObject({
      apiHost: "https://eu.i.posthog.com",
      uiHost: "https://eu.posthog.com",
    });
  });
});

describe("getInstagramHighlightsConfig", () => {
  it("requires both provider url and api key", () => {
    vi.stubEnv("INSTAGRAM_HIGHLIGHTS_API_URL", "https://provider.example/{handle}");
    vi.stubEnv("INSTAGRAM_HIGHLIGHTS_API_KEY", "");

    expect(getInstagramHighlightsConfig()).toBeNull();
  });

  it("normalizes custom header configuration", () => {
    vi.stubEnv("INSTAGRAM_HIGHLIGHTS_API_URL", "https://provider.example/{handle}");
    vi.stubEnv("INSTAGRAM_HIGHLIGHTS_API_KEY", "secret");
    vi.stubEnv("INSTAGRAM_HIGHLIGHTS_API_KEY_HEADER", "X-Api-Key");

    expect(getInstagramHighlightsConfig()).toEqual({
      providerUrl: "https://provider.example/{handle}",
      apiKey: "secret",
      apiKeyHeader: "X-Api-Key",
    });
  });
});

describe("getGoogleMapsSearchUrl", () => {
  it("creates a maps search url for a plain address", () => {
    const url = new URL(
      getGoogleMapsSearchUrl("146 Glen Huntly Road, Elwood 3184"),
    );

    expect(url.origin).toBe("https://www.google.com");
    expect(url.pathname).toBe("/maps/search/");
    expect(url.searchParams.get("api")).toBe("1");
    expect(url.searchParams.get("query")).toBe(
      "146 Glen Huntly Road, Elwood 3184",
    );
  });
});
