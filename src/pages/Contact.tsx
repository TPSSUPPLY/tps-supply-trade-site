import Seo, { localBusinessSchema } from "../components/Seo";
import { SITE } from "../data/site";

export default function Contact() {
  return (
    <>
      <Seo title="Contact" path="/contact" schema={localBusinessSchema()}
        description="Call the counter, visit us in Morristown, or open a trade account." />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">Contact</span>
          <h1 className="h-display text-white mt-3">Call the Counter.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">Real people, second ring, since 1983.</p>
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
        </div>
        <div className="bg-white p-8 border-t-4 border-brand-blue">
          <h3 className="font-serif text-2xl font-bold text-brand-blue-dark">Email</h3>
          <a href={`mailto:${SITE.email}`} className="block mt-4 text-brand-blue font-semibold">{SITE.email}</a>
          <p className="mt-3 text-brand-charcoal text-sm">For account questions, AP/AR, and project quoting.</p>
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
