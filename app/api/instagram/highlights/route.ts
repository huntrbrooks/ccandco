import { NextResponse } from "next/server";
import { normalizeHighlightResponse } from "@/lib/instagram-highlights";
import { siteConfig } from "@/lib/site";

const REQUEST_TIMEOUT_MS = 8000;

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const handle =
    requestUrl.searchParams.get("handle")?.replace(/^@/, "").trim() ||
    siteConfig.instagramHandle;
  const providerUrl = process.env.INSTAGRAM_HIGHLIGHTS_API_URL;
  const apiKey = process.env.INSTAGRAM_HIGHLIGHTS_API_KEY;

  if (!providerUrl || !apiKey) {
    return NextResponse.json({
      highlights: [],
      providerConfigured: false,
      message:
        "Instagram highlight provider credentials are not configured yet.",
    });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(buildProviderUrl(providerUrl, handle), {
      cache: "no-store",
      headers: buildProviderHeaders(apiKey),
      signal: controller.signal,
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          highlights: [],
          providerConfigured: true,
          message: `Instagram highlight provider returned ${response.status}.`,
        },
        { status: 502 },
      );
    }

    const payload: unknown = await response.json();

    return NextResponse.json({
      highlights: normalizeHighlightResponse(payload),
      providerConfigured: true,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error && error.name === "AbortError"
        ? "Instagram highlight provider timed out."
        : "Instagram highlight provider could not be reached.";

    return NextResponse.json(
      {
        highlights: [],
        providerConfigured: true,
        message,
      },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeout);
  }
}

function buildProviderUrl(providerUrl: string, handle: string) {
  if (providerUrl.includes("{handle}")) {
    return providerUrl.replaceAll("{handle}", encodeURIComponent(handle));
  }

  const url = new URL(providerUrl);
  if (!url.searchParams.has("username") && !url.searchParams.has("handle")) {
    url.searchParams.set("username", handle);
  }

  return url.toString();
}

function buildProviderHeaders(apiKey: string) {
  const headerName =
    process.env.INSTAGRAM_HIGHLIGHTS_API_KEY_HEADER || "Authorization";

  if (headerName.toLowerCase() === "authorization") {
    return {
      Authorization: `Bearer ${apiKey}`,
    };
  }

  return {
    [headerName]: apiKey,
  };
}
