import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: "1mb" }));

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

app.get("/healthz", (_req, res) => res.send("ok"));

// Serve built SPA
const distDir = path.resolve(__dirname, "../dist");
app.use(express.static(distDir));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`TPS Supply server listening on :${PORT}`);
});
