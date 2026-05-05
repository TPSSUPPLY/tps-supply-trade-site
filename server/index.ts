import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Render terminates TLS at a proxy; trust it so req.ip reflects the real client.
app.set("trust proxy", 1);
app.use(express.json({ limit: "1mb" }));

// --- Spam protection ---
// Disposable / throwaway email domains. Extend as new abuse patterns appear.
const DISPOSABLE_EMAIL_DOMAINS = [
  "mailinator.com",
  "tempmail.com",
  "throwaway.com",
  "guerrillamail.com",
  "10minutemail.com",
  "sharklasers.com",
  "getairmail.com",
  "yopmail.com",
  "dispostable.com",
];

// In-memory rolling rate limiter: 3 submissions per IP per 60 minutes.
// Single-instance server, so a Map is sufficient; swap for Redis if we scale out.
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const contactHits = new Map<string, number[]>();

function rateLimitContact(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const hits = (contactHits.get(ip) || []).filter((t) => t > cutoff);
  if (hits.length >= RATE_LIMIT_MAX) {
    contactHits.set(ip, hits);
    return false;
  }
  hits.push(now);
  contactHits.set(ip, hits);
  return true;
}

// Returns a reason string if the submission looks like spam, otherwise null.
// Layer 3 — silent validation: bot-pattern names, spaceless messages, disposable
// or auto-generated emails. We respond with 200 + the success shape so bots
// can't tell their submission was discarded.
function detectSpam(name: string, email: string, message: string): string | null {
  if (/[BCDFGHJKLMNPQRSTVWXYZ]{3,}/i.test(name)) return "name-consonant-run";
  if (message.length > 0 && !/\s/.test(message)) return "message-no-spaces";
  const domain = email.split("@")[1]?.toLowerCase() || "";
  if (DISPOSABLE_EMAIL_DOMAINS.includes(domain)) return "disposable-email";
  if (/^[a-z]+(\.[a-z])+\.\d+@/i.test(email)) return "auto-generated-email";
  return null;
}

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const TO_EMAIL = process.env.TO_EMAIL || "anthony@tpssupply.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "TPS Supply <onboarding@resend.dev>";

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const FIELD_LABELS: Record<string, string> = {
  business_name: "Business Name",
  dba: "DBA",
  years_in_business: "Years in Business",
  business_type: "Business Type",
  license: "Trade License #",
  tax_id: "Tax ID / EIN",
  address: "Street Address",
  city: "City",
  state: "State",
  zip: "ZIP",
  contact_name: "Contact Name",
  title: "Title",
  phone: "Phone",
  email: "Email",
  bank_name: "Bank Name",
  ref_1: "Reference 1",
  ref_2: "Reference 2",
  ref_3: "Reference 3",
  monthly_spend: "Estimated Monthly Spend",
  referral: "How heard about us",
};

function escape(s: string) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as any)[c]);
}

app.post("/api/credit-application", async (req, res) => {
  try {
    const data = req.body || {};
    const rows = Object.entries(FIELD_LABELS)
      .map(([k, label]) => `<tr><td style="padding:6px 12px;border:1px solid #e5e5e5;background:#f7f4ee;font-weight:600;width:220px;">${label}</td><td style="padding:6px 12px;border:1px solid #e5e5e5;">${escape(data[k] || "—")}</td></tr>`)
      .join("");
    const html = `
      <div style="font-family:Inter,system-ui,sans-serif;color:#2a2a28;max-width:680px;">
        <h2 style="font-family:'Playfair Display',Georgia,serif;color:#335a8a;border-bottom:3px solid #c89b3c;padding-bottom:8px;">New Trade Credit Application</h2>
        <p>A new credit application was submitted on tpssupply.com.</p>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">${rows}</table>
        <p style="margin-top:24px;font-size:12px;color:#666;">Submitted ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET</p>
      </div>
    `;
    if (!resend) {
      console.log("Resend API key not configured. Application data:", data);
      return res.json({ ok: true, dev: true });
    }
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: data.email,
      subject: `[TPS Supply] New Credit Application — ${data.business_name || "Unknown"}`,
      html,
    });
    if (error) {
      console.error("Resend error:", error);
      return res.status(500).send("Email send failed");
    }
    res.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    res.status(500).send(e?.message || "Server error");
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const data = req.body || {};
    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const role = String(data.role || "").trim();
    const message = String(data.message || "").trim();
    const honeypot = String(data.website || "").trim();
    const ip = req.ip || "unknown";

    // Layer 1 — honeypot. The "website" field is hidden from humans but
    // happily auto-filled by bots. If it's populated we silently 200 and
    // skip the email so the bot believes the submission landed.
    if (honeypot) {
      console.log(`[contact-spam] honeypot tripped ip=${ip} value=${honeypot.slice(0, 80)}`);
      return res.json({ ok: true });
    }

    // Layer 2 — per-IP rate limit (3 / hour rolling).
    if (!rateLimitContact(ip)) {
      console.log(`[contact-spam] rate-limited ip=${ip}`);
      return res.status(429).json({
        ok: false,
        error: "Too many submissions. Please wait an hour and try again, or call us directly at (973) 538-3662.",
      });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "name, email, and message are required" });
    }

    // Layer 3 — silent validation.
    const spamReason = detectSpam(name, email, message);
    if (spamReason) {
      console.log(`[contact-spam] ${spamReason} ip=${ip} name=${name.slice(0, 40)} email=${email.slice(0, 80)}`);
      return res.json({ ok: true });
    }
    const html = `
      <div style="font-family:Inter,system-ui,sans-serif;color:#2a2a28;max-width:680px;">
        <h2 style="font-family:'Playfair Display',Georgia,serif;color:#1c3454;border-bottom:3px solid #bf9c43;padding-bottom:8px;">New Contact Form Submission</h2>
        <p>A new message was submitted from www.tpssupply.com/contact.</p>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">
          <tr><td style="padding:6px 12px;border:1px solid #e5e5e5;background:#f7f4ee;font-weight:600;width:160px;">Name</td><td style="padding:6px 12px;border:1px solid #e5e5e5;">${escape(name)}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #e5e5e5;background:#f7f4ee;font-weight:600;">Email</td><td style="padding:6px 12px;border:1px solid #e5e5e5;">${escape(email)}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #e5e5e5;background:#f7f4ee;font-weight:600;">Phone</td><td style="padding:6px 12px;border:1px solid #e5e5e5;">${escape(phone || "—")}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #e5e5e5;background:#f7f4ee;font-weight:600;">I am a</td><td style="padding:6px 12px;border:1px solid #e5e5e5;">${escape(role || "—")}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #e5e5e5;background:#f7f4ee;font-weight:600;vertical-align:top;">Message</td><td style="padding:6px 12px;border:1px solid #e5e5e5;white-space:pre-wrap;">${escape(message)}</td></tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#666;">Submitted ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET</p>
      </div>
    `;
    if (!resend) {
      console.log("Resend API key not configured. Contact data:", data);
      return res.json({ ok: true, dev: true });
    }
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[TPS Supply] New Contact Form Submission from ${name}`,
      html,
    });
    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ ok: false, error: "Email send failed" });
    }
    res.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ ok: false, error: e?.message || "Server error" });
  }
});

app.get("/healthz", (_req, res) => res.send("ok"));

// Ghost category URL redirects — these paths used to render the SPA homepage shell
// with no real content (Google indexed them and downranked the GBP profile).
// The retail site (yourshowroomattps.com) has real category content; 301 these
// paths there so link equity transfers and the empty pages drop out of the index.
const GHOST_CATEGORY_REDIRECTS: Record<string, string> = {
  "/lighting": "https://www.yourshowroomattps.com/lighting",
  "/bathroom": "https://www.yourshowroomattps.com/bathroom",
  "/kitchen": "https://www.yourshowroomattps.com/kitchen",
  "/plumbing-supply": "https://www.yourshowroomattps.com/plumbing-supply",
};
for (const [from, to] of Object.entries(GHOST_CATEGORY_REDIRECTS)) {
  app.get(from, (_req, res) => res.redirect(301, to));
}

// Serve built SPA
const distDir = path.resolve(__dirname, "../dist");
app.use(express.static(distDir));
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`TPS Supply server listening on :${PORT}`);
});
