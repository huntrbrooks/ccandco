import { Resend } from "resend";

type EmailField = {
  label: string;
  value: string | boolean | undefined | null;
};

type SendStudioEmailOptions = {
  to: string | undefined;
  subject: string;
  replyTo: string;
  source: string;
  fields: EmailField[];
};

const fromEmail =
  process.env.RESEND_FROM_EMAIL ||
  "CC & CO. Website <cassandra@ccandco.beauty>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderEmailHtml({
  subject,
  source,
  fields,
}: Omit<SendStudioEmailOptions, "to" | "replyTo">) {
  const rows = fields
    .map(({ label, value }) => {
      const safeValue =
        typeof value === "boolean"
          ? value
            ? "Yes"
            : "No"
          : value || "Not supplied";

      return `<tr>
        <th align="left" style="padding:12px 16px;border-bottom:1px solid #ead8ca;color:#5e4638;width:36%;">${escapeHtml(label)}</th>
        <td style="padding:12px 16px;border-bottom:1px solid #ead8ca;color:#2c2622;">${escapeHtml(String(safeValue)).replace(/\n/g, "<br />")}</td>
      </tr>`;
    })
    .join("");

  return `<!doctype html>
  <html>
    <body style="margin:0;background:#fbf7f1;font-family:Arial,sans-serif;color:#2c2622;">
      <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
        <div style="background:#fffdf9;border:1px solid #ead8ca;border-radius:20px;overflow:hidden;">
          <div style="padding:24px 28px;background:#5e4638;color:#fffaf2;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;">CC & CO. Website</p>
            <h1 style="margin:0;font-family:Georgia,serif;font-size:30px;line-height:1.1;">${escapeHtml(subject)}</h1>
          </div>
          <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
            ${rows}
            <tr>
              <th align="left" style="padding:12px 16px;color:#5e4638;width:36%;">Submitted at</th>
              <td style="padding:12px 16px;color:#2c2622;">${escapeHtml(new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" }))}</td>
            </tr>
            <tr>
              <th align="left" style="padding:12px 16px;color:#5e4638;width:36%;">Source page</th>
              <td style="padding:12px 16px;color:#2c2622;">${escapeHtml(source)}</td>
            </tr>
          </table>
        </div>
      </div>
    </body>
  </html>`;
}

export async function sendStudioEmail(options: SendStudioEmailOptions) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Email send skipped: missing RESEND_API_KEY.");
    return { ok: false, message: "Email service is not configured." };
  }

  if (!options.to) {
    console.error("Email send skipped: missing recipient environment variable.");
    return { ok: false, message: "Email recipient is not configured." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const idempotencyKey = `${options.source}/${Date.now()}/${Math.random()
    .toString(36)
    .slice(2)}`;

  try {
    const { data, error } = await resend.emails.send(
      {
        from: fromEmail,
        to: [options.to],
        replyTo: options.replyTo,
        subject: options.subject,
        html: renderEmailHtml(options),
      },
      { idempotencyKey },
    );

    if (error) {
      console.error("Resend email error:", error.message);
      return { ok: false, message: "Email could not be sent." };
    }

    return { ok: true, id: data?.id };
  } catch (error) {
    console.error(
      "Unexpected email error:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return { ok: false, message: "Email could not be sent." };
  }
}
