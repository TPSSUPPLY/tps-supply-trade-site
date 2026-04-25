import { useState } from "react";
import Seo, { localBusinessSchema } from "../components/Seo";

const BUSINESS_TYPES = ["Plumber", "GC/Builder", "Property Manager", "Mason", "Restaurant/Bar", "Other"];

export default function CreditApplication() {
  const [status, setStatus] = useState<"idle"|"submitting"|"success"|"error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => { data[k] = String(v); });
    try {
      const r = await fetch("/api/credit-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) {
        const t = await r.text();
        throw new Error(t || `HTTP ${r.status}`);
      }
      setStatus("success");
    } catch (err: any) {
      setErrMsg(err.message || "Submission failed");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <>
        <Seo title="Thanks — Application Received" path="/credit-application" schema={localBusinessSchema()} />
        <section className="container-x py-32 text-center max-w-2xl">
          <div className="text-brand-accent text-6xl mb-6">✓</div>
          <h1 className="h-section text-brand-blue-dark">Thanks, we'll be in touch within 1 business day.</h1>
          <p className="mt-5 text-brand-charcoal">Your application landed in our inbox. We'll review and call you to confirm references and set up your account. If you need parts before then, call the counter at <a href="tel:+19735383662" className="text-brand-blue underline font-semibold">973-538-3662</a>.</p>
        </section>
      </>
    );
  }

  const labelCls = "block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1";
  const inputCls = "w-full px-3 py-2 border border-neutral-300 focus:border-brand-blue focus:outline-none rounded-sm bg-white text-brand-charcoal-dark";

  return (
    <>
      <Seo title="Trade Credit Application" path="/credit-application" schema={localBusinessSchema()}
        description="Apply for a TPS Supply trade account. Net-30 terms for qualified businesses." />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-16">
          <span className="eyebrow text-brand-accent">Trade Account</span>
          <h1 className="h-display text-white mt-3">Credit Application</h1>
          <p className="mt-5 max-w-2xl text-white/85">Net-30 terms for qualified trade businesses. Most applications approved within 1 business day.</p>
        </div>
      </section>

      <section className="container-x py-16 max-w-4xl">
        <form onSubmit={onSubmit} className="space-y-10 bg-white">

          <Section title="Business Information">
            <Field label="Business Name *" name="business_name" required />
            <Field label="DBA (if different)" name="dba" />
            <Field label="Years in Business *" name="years_in_business" required />
            <div>
              <label className={labelCls}>Business Type *</label>
              <select name="business_type" required className={inputCls}>
                <option value="">Select…</option>
                {BUSINESS_TYPES.map(b => <option key={b}>{b}</option>)}
              </select>
            </div>
            <Field label="Trade License # (optional)" name="license" />
            <Field label="Tax ID / EIN *" name="tax_id" required />
          </Section>

          <Section title="Address">
            <Field label="Street Address *" name="address" required />
            <Field label="City *" name="city" required />
            <Field label="State *" name="state" required />
            <Field label="ZIP *" name="zip" required />
          </Section>

          <Section title="Contact">
            <Field label="Contact Name *" name="contact_name" required />
            <Field label="Title *" name="title" required />
            <Field label="Phone *" name="phone" type="tel" required />
            <Field label="Email *" name="email" type="email" required />
          </Section>

          <Section title="Banking">
            <Field label="Bank Name *" name="bank_name" required />
          </Section>

          <Section title="Trade References">
            <Field label="Reference 1 (Name & Phone) *" name="ref_1" required />
            <Field label="Reference 2 (Name & Phone) *" name="ref_2" required />
            <Field label="Reference 3 (Name & Phone) *" name="ref_3" required />
          </Section>

          <Section title="Additional">
            <Field label="Estimated Monthly Spend *" name="monthly_spend" required />
            <Field label="How did you hear about us?" name="referral" />
          </Section>

          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
              {errMsg}. Please call the counter at 973-538-3662 if this continues.
            </div>
          )}

          <div className="flex flex-wrap gap-4 items-center">
            <button type="submit" disabled={status === "submitting"} className="btn-primary disabled:opacity-50">
              {status === "submitting" ? "Submitting…" : "Submit Application"}
            </button>
            <p className="text-xs text-brand-charcoal">By submitting, you authorize TPS Supply to verify the information and contact references.</p>
          </div>
        </form>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="font-serif text-2xl font-bold text-brand-blue-dark border-b border-brand-blue/20 pb-2 mb-5 w-full">{title}</legend>
      <div className="grid sm:grid-cols-2 gap-4">{children}</div>
    </fieldset>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">{label}</label>
      <input type={type} name={name} required={required}
        className="w-full px-3 py-2 border border-neutral-300 focus:border-brand-blue focus:outline-none rounded-sm bg-white text-brand-charcoal-dark" />
    </div>
  );
}
