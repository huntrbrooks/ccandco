export type PostHogClientConfig = {
  key: string;
  apiHost: string;
  uiHost: string;
};

export type InstagramHighlightsConfig = {
  providerUrl: string;
  apiKey: string;
  apiKeyHeader: string;
};

export function getPostHogClientConfig(): PostHogClientConfig | null {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim();

  if (!key) {
    return null;
  }

  const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() || "/ingest";

  return {
    key,
    apiHost,
    uiHost: getPostHogUiHost(apiHost),
  };
}

export function getInstagramHighlightsConfig(): InstagramHighlightsConfig | null {
  const providerUrl = process.env.INSTAGRAM_HIGHLIGHTS_API_URL?.trim();
  const apiKey = process.env.INSTAGRAM_HIGHLIGHTS_API_KEY?.trim();

  if (!providerUrl || !apiKey) {
    return null;
  }

  return {
    providerUrl,
    apiKey,
    apiKeyHeader:
      process.env.INSTAGRAM_HIGHLIGHTS_API_KEY_HEADER?.trim() || "Authorization",
  };
}

export function getGoogleMapsSearchUrl(address: string) {
  const url = new URL("https://www.google.com/maps/search/");
  url.searchParams.set("api", "1");
  url.searchParams.set("query", address);

  return url.toString();
}

function getPostHogUiHost(apiHost: string) {
  if (apiHost.includes("eu.")) {
    return "https://eu.posthog.com";
  }

  return "https://us.posthog.com";
}
