import { Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { SITE, CITIES } from "../data/site";

export default function Locations() {
  return (
    <>
      <Seo title="Locations & Service Area" path="/locations" schema={localBusinessSchema()}
        description="One counter in Morristown serving all of Morris County. 90-minute same-day delivery to surrounding towns." />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">Locations</span>
          <h1 className="h-display text-white mt-3">One Counter. Morris County Coverage.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">Walk in to our Morristown counter, or have it on the truck and rolling to your jobsite within 90 minutes.</p>
        </div>
      </section>
      <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <h2 className="font-serif text-2xl font-bold text-brand-blue-dark">The Counter</h2>
          <address className="not-italic mt-4 text-brand-charcoal leading-relaxed">
            {SITE.address}<br/>{SITE.city}, {SITE.state} {SITE.zip}
          </address>
          <a href={`tel:${SITE.phoneRaw}`} className="text-brand-blue font-bold text-lg mt-3 inline-block">{SITE.phone}</a>
          <ul className="mt-5 text-sm text-brand-charcoal space-y-1 border-t pt-4">
            {SITE.hours.map(h => <li key={h.d}><span className="font-semibold">{h.d}:</span> {h.h}</li>)}
          </ul>
          <p className="text-sm italic text-brand-accent mt-3">{SITE.hoursNote}</p>
        </div>
        <div className="lg:col-span-2">
          <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mb-4">Service Area</h2>
          <p className="text-brand-charcoal mb-6">We deliver across Morris County and into Sussex, Warren, Somerset and Essex on regular routes. Local dedicated pages:</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {CITIES.map(c => (
              <Link key={c.slug} to={`/plumbing-supply-${c.slug}-nj`}
                className="p-4 bg-white border border-neutral-200 hover:border-brand-blue transition">
                <div className="font-semibold text-brand-blue-dark">{c.name}, NJ</div>
                <div className="text-xs text-brand-charcoal mt-1">{c.miles === "0" ? "Counter location" : `~${c.miles} miles`}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
