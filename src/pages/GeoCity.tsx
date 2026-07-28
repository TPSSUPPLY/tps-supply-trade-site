import { Navigate, Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { SITE, CITIES, PREMIUM_BRANDS, ROUGH_BRANDS } from "../data/site";
import { geoFaqs, faqPageSchema } from "../data/faqs";

export default function GeoCity({ citySlug }: { citySlug?: string }) {
  const city = CITIES.find(c => c.slug === citySlug);
  if (!city) return <Navigate to="/locations" replace />;

  const path = `/plumbing-supply-${city.slug}-nj`;
  const faqs = geoFaqs(city);
  const schema = [
    localBusinessSchema({
      "areaServed": { "@type": "City", "name": `${city.name}, NJ` },
      "name": `TPS Supply — Plumbing Supply for ${city.name}, NJ`,
    }),
    faqPageSchema(faqs),
  ];

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
            <p className="text-sm italic text-brand-accent mt-2">{SITE.hoursNote}</p>
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
        <span className="eyebrow">Off the Shelf</span>
        <h2 className="h-section mt-2 text-brand-blue-dark">What {city.name} Contractors Buy Most</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-brand-charcoal leading-relaxed">
          <p>
            Morris County housing stock skews old, and that shapes what moves across our counter. A lot of {city.name} work
            happens inside colonials and capes built long before anybody was thinking about a 1/2" PEX manifold — galvanized
            supply that's finally closed up, cast iron stacks with a cracked hub, drain lines that were never vented to
            anything like current code. That means transition fittings, dielectric unions, shielded no-hub couplings and
            closet flange repair kits go out the door constantly, alongside the copper and PEX for the new runs.
          </p>
          <p>
            Hydronic retrofits are the other steady driver. Plenty of {city.name} homes still run on a boiler and cast iron
            radiators, and when one gets replaced the installer needs circulators, zone valves, air separators, expansion
            tanks, backflow preventers and the black iron near-boiler piping to tie it all together. We stock the Weil-McLain
            and U.S. Boiler side of that work along with the Watts and Apollo trim that goes around it. Tank-to-tankless
            conversions land in the same bucket — usually a gas line that needs upsizing, a stainless vent kit, isolation
            valve sets, and a condensate route that has to actually go somewhere.
          </p>
          <p>
            On the commercial side, {city.name} buildouts and tenant fit-outs pull floor drains, carriers, grease
            interceptors, pre-rinse units, mop basins, backflow assemblies and ADA trim. Restaurant and retail spaces turn
            over, and when a GC is holding an inspection date, the difference between a two-day lead time and material on
            the shelf is the whole schedule. That's the inventory bet we make.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream border-y">
        <div className="container-x py-16">
          <span className="eyebrow">Logistics</span>
          <h2 className="h-section mt-2 text-brand-blue-dark">Getting Pipe to Your {city.name} Jobsite</h2>
          <div className="mt-5 grid lg:grid-cols-2 gap-8">
            <div className="space-y-4 text-brand-charcoal leading-relaxed">
              <p>
                The cutoff is noon. Call, email or walk in an order before then and it goes on a truck the same day —
                usually rolling toward {city.name} within about 90 minutes of us pulling it. After noon, it ships next day.
                We'd rather tell you that plainly than promise a same-day run we can't make, because a delivery that shows
                up at 4:30 when the crew left at 3 isn't a delivery.
              </p>
              <p>
                Will-call opens at 7:00 AM, an hour before most jobs start. Call ahead and we'll stage the order so it's
                sitting on the counter with your name on it — back out and be in {city.name} before the crew is unloading.
                Saturday pickup runs 8:00 AM to 1:00 PM, {SITE.hoursNote.toLowerCase()}.
              </p>
            </div>
            <div className="bg-white border-l-4 border-brand-accent p-6">
              <h3 className="font-serif text-xl font-bold text-brand-blue-dark">Stocked for Morris County work</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-charcoal">
                <li><span className="font-semibold">Copper</span> — Type L, Type M and DWV in common sizes, plus fittings, valves and press.</li>
                <li><span className="font-semibold">PEX</span> — tubing, manifolds, expansion and crimp fittings for repipes and radiant.</li>
                <li><span className="font-semibold">DWV</span> — PVC, ABS and cast iron with no-hub couplings and closet hardware.</li>
                <li><span className="font-semibold">Gas</span> — black iron and CSST including Omega Flex TracPipe.</li>
                <li><span className="font-semibold">Hydronic</span> — circulators, zone valves, expansion tanks, boiler trim.</li>
              </ul>
              <p className="mt-4 text-xs italic text-brand-charcoal">
                Pipe pricing tracks the commodity market — call the counter for a current quote on your sizes and quantities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <span className="eyebrow">How It Works</span>
        <h2 className="h-section mt-2 text-brand-blue-dark">Working with TPS Supply from {city.name}</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-brand-charcoal leading-relaxed">
          <p>
            Most {city.name} contractors start with a trade account. It takes a couple of minutes to apply, and once
            you're approved you get Net 30 terms, contractor pricing, and project pricing when a job is big enough to
            warrant a quote. You don't need an account to buy — anyone can walk up to the counter — but if you're buying
            every week, the terms and the pricing are the reason to set one up.
          </p>
          <p>
            Once you're on the books, the fastest way to order is the phone. Call {SITE.phone}, tell us what you need and
            whether it's a will-call or a delivery to {city.name}, and it gets pulled. You'll talk to somebody who knows
            the difference between Type L and Type M without having to look it up, and who can tell you what's actually on
            the shelf right now instead of what a website claims. Bring in a broken part and we'll match it or find the
            current equivalent.
          </p>
          <p>
            Deliveries route off our Morristown counter, so {city.name} sits on a regular run rather than waiting for a
            regional warehouse to schedule it. If you need material staged for a phased job, or a standing order for a
            development, the counter can set that up too.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 border-y">
        <div className="container-x py-16">
          <span className="eyebrow">Questions</span>
          <h2 className="h-section mt-2 text-brand-blue-dark">{city.name} Plumbing Supply — Common Questions</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {faqs.map(({ q, a, link }) => (
              <div key={q} className="border-l-4 border-brand-accent pl-4">
                <h3 className="font-semibold text-brand-blue-dark">{q}</h3>
                <p className="mt-2 text-sm text-brand-charcoal leading-relaxed">{a}</p>
                {link && (
                  <Link to={link.to} className="mt-2 inline-block text-sm font-semibold text-brand-blue hover:text-brand-accent">
                    {link.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-brand-charcoal">
            More answers on our <Link to="/faq" className="font-semibold text-brand-blue hover:text-brand-accent">plumbing supply FAQ</Link>.
          </p>
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
