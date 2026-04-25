import { Navigate, Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { SITE, CITIES, PREMIUM_BRANDS, ROUGH_BRANDS } from "../data/site";

export default function GeoCity({ citySlug }: { citySlug?: string }) {
  const city = CITIES.find(c => c.slug === citySlug);
  if (!city) return <Navigate to="/locations" replace />;

  const path = `/plumbing-supply-${city.slug}-nj`;
  const schema = localBusinessSchema({
    "areaServed": { "@type": "City", "name": `${city.name}, NJ` },
    "name": `TPS Supply — Plumbing Supply for ${city.name}, NJ`,
  });

  return (
    <>
      <Seo
        title={`Plumbing Supply in ${city.name}, NJ`}
        path={path}
        schema={schema}
        description={`Wholesale plumbing supply serving ${city.name}, NJ. 90-minute same-day delivery, large pipe inventory, premium and commodity brands.`}
      />

      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <Link to="/locations" className="text-xs uppercase tracking-widest text-white/70 hover:text-brand-accent">← All Service Areas</Link>
          <h1 className="h-display text-white mt-3">Plumbing Supply in {city.name}, NJ — TPS Supply</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Morris County's wholesale plumbing supply counter, serving {city.name} contractors with same-day delivery and a deep parts inventory.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">Call {SITE.phone}</a>
            <Link to="/credit-application" className="btn border border-white text-white hover:bg-white hover:text-brand-blue">Open a Trade Account</Link>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="h-section text-brand-blue-dark">Pipe Supply Near Me in {city.name}, NJ — Same Day or Next Day Delivery</h2>
        <p className="mt-5 max-w-3xl text-brand-charcoal leading-relaxed">
          When a {city.name} jobsite needs pipe today, we run for it. Order pipe before noon and we'll have it on the truck for same-day delivery to your {city.name} site. Order after noon and you've got it next day. Most copper, PEX, PVC, CPVC, ABS, cast iron, black iron and brass is in stock at our Morristown counter for immediate pickup or quick delivery to {city.name}.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[
            ["Same-Day Delivery", "Order before noon — most pipe and parts hit the truck within 90 minutes for delivery to " + city.name + "."],
            ["In-Stock Inventory", "Standard residential through commercial-grade pipe stocked at our counter — no waiting on a distributor."],
            ["Counter Pickup", "Roll into Morristown at 7am, pull what you need, get back to " + city.name + " before the crew arrives."],
          ].map(([t, b]) => (
            <div key={t} className="bg-brand-cream p-6 border-l-4 border-brand-accent">
              <h3 className="font-serif text-xl font-bold text-brand-blue-dark">{t}</h3>
              <p className="mt-2 text-brand-charcoal text-sm">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 border-y">
        <div className="container-x py-16 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="eyebrow">The Counter</span>
            <h2 className="h-section mt-2 text-brand-blue-dark">{city.miles === "0" ? `Right Here in ${city.name}` : `${city.miles} Miles from ${city.name}`}</h2>
            <p className="mt-4 text-brand-charcoal leading-relaxed">
              {city.note} Our Morristown counter has served Morris County's trade for 40+ years. {city.miles !== "0" && `From ${city.name}, we're a quick drive — close enough for a will-call run before the first job, or for our trucks to hit your site within 90 minutes.`}
            </p>
            <address className="not-italic mt-5 text-brand-charcoal">
              {SITE.address}<br/>{SITE.city}, {SITE.state} {SITE.zip}<br/>
              <a href={`tel:${SITE.phoneRaw}`} className="text-brand-blue font-bold mt-2 inline-block">{SITE.phone}</a>
            </address>
            <ul className="mt-4 text-sm text-brand-charcoal space-y-1">
              {SITE.hours.map(h => <li key={h.d}><span className="font-semibold">{h.d}:</span> {h.h}</li>)}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Brands Carried</span>
            <h3 className="h-section mt-2 text-brand-blue-dark">Premium & Commodity Lines</h3>
            <p className="mt-4 text-brand-charcoal text-sm">Stocked deep on what {city.name} contractors actually use day-to-day.</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {[...PREMIUM_BRANDS, ...ROUGH_BRANDS].map(b => (
                <span key={b} className="font-serif text-lg font-semibold text-brand-blue-dark">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="h-section text-brand-blue-dark">{city.name} Trade Accounts Welcome</h2>
            <p className="mt-4 text-brand-charcoal leading-relaxed">If you're a plumber, GC, builder, property manager, mason or restaurant operator working in {city.name}, open a TPS Supply trade account. Net-30 terms, project pricing, and a counter that knows your business.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/credit-application" className="btn-primary">Apply for Trade Account</Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline">Call {SITE.phone}</a>
          </div>
        </div>
      </section>

      <CTABand title={`Serving ${city.name}, NJ contractors today.`} subtitle="One phone call gets your parts on the truck or pulled at the counter." />
    </>
  );
}
