import { useState } from "react";
import Seo, { localBusinessSchema } from "../components/Seo";
import { SITE } from "../data/site";

const ROLES = [
  "Plumber",
  "Contractor",
  "Builder",
  "Property Manager",
  "Restaurant",
  "Homeowner",
  "Other",
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setErrorMsg("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => { data[k] = String(v); });
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await r.json().catch(() => ({}));
      if (r.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please call the counter.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Network error. Please call the counter.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Seo title="Contact" path="/contact" schema={localBusinessSchema()}
        description="Call the counter, visit us in Morristown, or send us a message. Pros and homeowners welcome." />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">Contact</span>
          <h1 className="h-display text-white mt-3">Call the Counter.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">Real people, second ring, since 1983. Pros and homeowners welcome.</p>
        </div>
      </section>
      <section className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 border-t-4 border-brand-accent">
          <h3 className="font-serif text-2xl font-bold text-brand-blue-dark">Phone</h3>
          <a href={`tel:${SITE.phoneRaw}`} className="block mt-4 text-3xl font-bold text-brand-blue">{SITE.phone}</a>
          <p className="mt-3 text-brand-charcoal text-sm">Counter & dispatch. Ask for parts, pricing, deliveries, anything.</p>
        </div>
        <div className="bg-white p-8 border-t-4 border-brand-blue">
          <h3 className="font-serif text-2xl font-bold text-brand-blue-dark">Visit</h3>
          <address className="not-italic mt-4 text-brand-charcoal leading-relaxed">
            {SITE.address}<br/>{SITE.city}, {SITE.state} {SITE.zip}
          </address>
          <ul className="mt-4 text-sm text-brand-charcoal space-y-1">
            {SITE.hours.map(h => <li key={h.d}><span className="font-semibold">{h.d}:</span> {h.h}</li>)}
          </ul>
          <p className="text-sm italic text-brand-accent mt-3">{SITE.hoursNote}</p>
        </div>
        <div className="bg-white p-8 border-t-4 border-brand-blue">
          <h3 className="font-serif text-2xl font-bold text-brand-blue-dark">Email</h3>
          <a href={`mailto:${SITE.email}`} className="block mt-4 text-brand-blue font-semibold">{SITE.email}</a>
          <p className="mt-3 text-brand-charcoal text-sm">For account questions, AP/AR, and project quoting.</p>
        </div>
      </section>

      <section className="bg-brand-cream">
        <div className="container-x py-16 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="eyebrow text-brand-accent">Send a Message</span>
            <h2 className="h-section text-brand-blue-dark mt-2">Tell us what you need.</h2>
            <p className="mt-4 text-brand-charcoal leading-relaxed">
              Pricing, project quotes, delivery questions, parts you can't find — we'll get back to you the same business day. If it's urgent, just call the counter at <a className="text-brand-blue font-semibold" href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white p-8 border border-neutral-200 space-y-5">
            {/* Honeypot — hidden from humans, irresistible to bots. Server discards
                any submission where this field is non-empty. */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: "none" }}
            />
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-blue-dark">Name *</span>
                <input required name="name" type="text" className="mt-2 w-full border border-neutral-300 px-3 py-2 focus:border-brand-blue outline-none" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-blue-dark">Email *</span>
                <input required name="email" type="email" className="mt-2 w-full border border-neutral-300 px-3 py-2 focus:border-brand-blue outline-none" />
              </label>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-blue-dark">Phone</span>
                <input name="phone" type="tel" className="mt-2 w-full border border-neutral-300 px-3 py-2 focus:border-brand-blue outline-none" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-blue-dark">I am a *</span>
                <select required name="role" defaultValue="" className="mt-2 w-full border border-neutral-300 px-3 py-2 bg-white focus:border-brand-blue outline-none">
                  <option value="" disabled>Select one…</option>
                  {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </label>
            </div>
            <label className="block">
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-blue-dark">Message *</span>
              <textarea required name="message" rows={6} className="mt-2 w-full border border-neutral-300 px-3 py-2 focus:border-brand-blue outline-none" />
            </label>
            <div className="flex items-center gap-4">
              <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
                {submitting ? "Sending…" : "Send Message"}
              </button>
              {status === "success" && (
                <span className="text-sm text-green-700 font-semibold">Thanks — we got it. We'll be in touch.</span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-700 font-semibold">{errorMsg}</span>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="aspect-[16/7] bg-neutral-200 overflow-hidden">
          <iframe
            title="TPS Supply Counter Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${SITE.address}, ${SITE.city}, ${SITE.state} ${SITE.zip}`)}&output=embed`}
            width="100%" height="100%" loading="lazy" style={{ border: 0 }} />
        </div>
      </section>
    </>
  );
}
