import { Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { SITE } from "../data/site";
import { FAQS, faqPageSchema } from "../data/faqs";

export default function Faq() {
  return (
    <>
      <Seo
        title="Plumbing Supply FAQ — Morristown NJ"
        path="/faq"
        description="Answers to common questions about plumbing supplies in Morristown NJ. Delivery, hours, brands, trade accounts, and how to buy."
        schema={[faqPageSchema(FAQS), localBusinessSchema()]}
      />

      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">FAQ</span>
          <h1 className="h-display text-white mt-3">Plumbing Supply Questions, Answered</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            The things people actually call and ask us about — hours, delivery, brands, trade accounts, and how buying from
            a wholesale counter differs from a home center.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">Call {SITE.phone}</a>
            <Link to="/contact" className="btn border border-white text-white hover:bg-white hover:text-brand-blue">Send a Question</Link>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="max-w-3xl space-y-10">
          {FAQS.map(({ q, a, link }) => (
            <div key={q} className="border-l-4 border-brand-accent pl-5">
              <h2 className="font-serif text-2xl font-bold text-brand-blue-dark leading-snug">{q}</h2>
              <p className="mt-3 text-brand-charcoal leading-relaxed">{a}</p>
              {link && (
                <Link to={link.to} className="mt-3 inline-block text-sm font-semibold text-brand-blue hover:text-brand-accent">
                  {link.label} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream border-y">
        <div className="container-x py-16">
          <h2 className="h-section text-brand-blue-dark">Still Need an Answer?</h2>
          <p className="mt-4 max-w-2xl text-brand-charcoal leading-relaxed">
            The counter is the fastest way to get a real answer about stock, a part number or a spec. Call {SITE.phone}
            during counter hours and you'll get somebody who works the shelves, not a call center.
          </p>
          <address className="not-italic mt-6 text-brand-charcoal">
            {SITE.address}<br/>{SITE.city}, {SITE.state} {SITE.zip}
          </address>
          <ul className="mt-4 text-sm text-brand-charcoal space-y-1">
            {SITE.hours.map(h => <li key={h.d}><span className="font-semibold">{h.d}:</span> {h.h}</li>)}
          </ul>
          <p className="text-sm italic text-brand-accent mt-2">{SITE.hoursNote}</p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
