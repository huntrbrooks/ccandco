import { describe, expect, it } from "vitest";
import { readJsonRequest } from "../../lib/request-guards";

describe("readJsonRequest", () => {
  it("rejects requests over the configured content length", async () => {
    const request = new Request("https://example.test/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "content-length": "1001",
      },
      body: JSON.stringify({ message: "hello" }),
    });

    const result = await readJsonRequest(request, { maxBytes: 1000 });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.status).toBe(413);
      expect(result.message).toBe("Request is too large.");
    }
  });

  it("rejects oversized json bodies when content length is missing", async () => {
    const request = new Request("https://example.test/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message: "x".repeat(1100) }),
    });

    const result = await readJsonRequest(request, { maxBytes: 1000 });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.status).toBe(413);
      expect(result.message).toBe("Request is too large.");
    }
  });

  it("rejects non-json requests", async () => {
    const request = new Request("https://example.test/api/contact", {
      method: "POST",
      headers: {
        "content-type": "text/plain",
      },
      body: "name=CC",
    });

    const result = await readJsonRequest(request, { maxBytes: 1000 });

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.status).toBe(415);
      expect(result.message).toBe("Please send a JSON request.");
    }
  });

  it("parses valid json bodies under the limit", async () => {
    const body = { name: "CC & CO.", message: "Hello there" };
    const request = new Request("https://example.test/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
        "content-length": String(JSON.stringify(body).length),
      },
      body: JSON.stringify(body),
    });

    const result = await readJsonRequest(request, { maxBytes: 1000 });

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.body).toEqual(body);
    }
  });
});
