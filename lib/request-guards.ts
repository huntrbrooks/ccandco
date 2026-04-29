type ReadJsonRequestOptions = {
  maxBytes: number;
};

type ReadJsonRequestResult =
  | {
      ok: true;
      body: unknown;
    }
  | {
      ok: false;
      status: 400 | 413 | 415;
      message: string;
    };

export async function readJsonRequest(
  request: Request,
  { maxBytes }: ReadJsonRequestOptions,
): Promise<ReadJsonRequestResult> {
  const contentLength = request.headers.get("content-length");

  if (contentLength && Number(contentLength) > maxBytes) {
    return {
      ok: false,
      status: 413,
      message: "Request is too large.",
    };
  }

  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return {
      ok: false,
      status: 415,
      message: "Please send a JSON request.",
    };
  }

  try {
    const body = await readLimitedRequestBody(request, maxBytes);

    if (!body.ok) {
      return body;
    }

    return {
      ok: true,
      body: JSON.parse(body.text),
    };
  } catch {
    return {
      ok: false,
      status: 400,
      message: "Please send a valid JSON request.",
    };
  }
}

async function readLimitedRequestBody(
  request: Request,
  maxBytes: number,
): Promise<
  | {
      ok: true;
      text: string;
    }
  | {
      ok: false;
      status: 413;
      message: string;
    }
> {
  const reader = request.body?.getReader();

  if (!reader) {
    return {
      ok: true,
      text: "",
    };
  }

  const chunks: Uint8Array[] = [];
  let bytesRead = 0;

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    bytesRead += value.byteLength;

    if (bytesRead > maxBytes) {
      await reader.cancel();

      return {
        ok: false,
        status: 413,
        message: "Request is too large.",
      };
    }

    chunks.push(value);
  }

  return {
    ok: true,
    text: new TextDecoder().decode(concatenateChunks(chunks, bytesRead)),
  };
}

function concatenateChunks(chunks: Uint8Array[], length: number) {
  const body = new Uint8Array(length);
  let offset = 0;

  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return body;
}
