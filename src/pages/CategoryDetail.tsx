import { useParams, Navigate, Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { CATEGORIES, SITE } from "../data/site";

const COPY: Record<string, { intro: string; bullets: string[] }> = {
  "rough-plumbing": {
    intro: "Everything that goes behind the wall — pipe, fittings, valves, hangers, supports and the small consumables that keep a rough-in moving.",
    bullets: ["DWV systems and fittings", "Pressure pipe and valves", "Hangers and supports", "Sealants, primer, glue, flux", "Insulation and protection", "Backflow preventers"],
  },
  "finish-plumbing": {
    intro: "Trim packages and fixtures from the brands homeowners and designers ask for. Stocked deep on commodity finish; available next-day on premium.",
    bullets: ["Faucets, lavatory and kitchen", "Tubs, showers, valve trim", "Toilets and bidets", "Vanities and accessories", "Garbage disposals", "Repair parts and rebuild kits"],
  },
  "water-heaters": {
    intro: "Tank, tankless, and indirect water heaters from major brands — gas and electric — plus all the parts to install and service them.",
    bullets: ["Tank water heaters (gas/electric)", "Tankless heaters and venting", "Indirect-fired tanks", "Expansion tanks", "T&P valves, anode rods, elements", "Replacement gas controls"],
  },
  "commercial-plumbing": {
    intro: "Floor drains, grease traps, pre-rinse units, backflow assemblies, commercial fittings — sized for restaurants, multifamily and light commercial.",
    bullets: ["Floor drains and grates", "Grease traps and interceptors", "Pre-rinse units", "Commercial flush valves", "Backflow assemblies (RPZ, DCV)", "Commercial faucets"],
  },
  "tools-accessories": {
    intro: "Press tools, threaders, torches, solder, sealants and the consumables that make a service van run.",
    bullets: ["Press tools and jaws", "Pipe threading equipment", "Torches, solder, flux", "Pipe wrenches and tools", "Drain cleaning equipment", "PPE and safety"],
  },
};

const PIPE_INVENTORY = [
  { type: "Copper", items: ["Type L — soft and hard, 1/2\" through 2\"+", "Type M — soft and hard, 1/2\" through 2\"+", "Fittings: 90s, 45s, tees, couplings, adapters", "Press fittings (ProPress / NIBCO Press)"] },
  { type: "PEX", items: ["PEX-A — red, blue, white", "PEX-B — red, blue, white", "PEX-C — red, blue, white", "Wirsbo / Uponor expansion fittings", "Crimp and cinch fittings", "Manifolds and valves"] },
  { type: "PVC + CPVC", items: ["Schedule 40 — pressure", "Schedule 80 — pressure", "DWV", "CPVC hot/cold", "Full fitting selection", "Solvent cement and primer"] },
  { type: "ABS", items: ["DWV pipe — full diameter range", "DWV fittings", "ABS cement"] },
  { type: "Cast Iron", items: ["No-hub pipe and fittings", "Service weight pipe and fittings", "No-hub couplings (heavy-duty and standard)"] },
  { type: "Black Iron / Galvanized", items: ["Black iron — gas line, full size range", "Galvanized — water service", "Nipples, couplings, unions, elbows", "Threaded fittings and bushings"] },
  { type: "Brass", items: ["Brass nipples — full size range", "Brass fittings — threaded and compression", "Brass valves — gate, ball, check"] },
  { type: "Stainless", items: ["Pre-rinse hose and assemblies", "Commercial stainless fittings", "Sanitary tubing and clamps"] },
];

export default function CategoryDetail() {
  const { slug } = useParams();
  const cat = CATEGORIES.find(c => c.slug === slug);
  if (!cat) return <Navigate to="/categories" replace />;

  const isPipe = slug === "pipe-supply";

  return (
    <>
      <Seo title={`${cat.title} — Wholesale Plumbing`} path={`/categories/${cat.slug}`} schema={localBusinessSchema()}
        description={cat.desc} />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <Link to="/categories" className="text-xs uppercase tracking-widest text-white/70 hover:text-brand-accent">← All Categories</Link>
          <h1 className="h-display text-white mt-3">{cat.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">{cat.desc}</p>
          {isPipe && (
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">Call {SITE.phone} for Current Pricing</a>
              <Link to="/credit-application" className="btn border border-white text-white hover:bg-white hover:text-brand-blue">Open a Trade Account</Link>
            </div>
          )}
        </div>
      </section>

      {isPipe ? (
        <>
          <section className="container-x py-16">
            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {[
                ["Most pipe in stock", "for same-day pickup at the counter — walk in, walk out."],
                ["Same-day delivery if ordered before noon", "Order after noon? Next-day on the truck."],
                ["Residential through commercial-grade", "Standard service work to commercial backflow and grease — we stock both."],
              ].map(([t, b], i) => (
                <div key={i} className="bg-brand-cream p-6 border-l-4 border-brand-accent">
                  <h3 className="font-serif text-xl font-bold text-brand-blue-dark">{t}</h3>
                  <p className="mt-2 text-brand-charcoal text-sm">{b}</p>
                </div>
              ))}
            </div>

            <div className="text-center mb-10">
              <span className="eyebrow">Inventory</span>
              <h2 className="h-section mt-2 text-brand-blue-dark">Pipe We Stock</h2>
              <p className="mt-3 text-brand-charcoal max-w-2xl mx-auto text-sm italic">Placeholder inventory — full list pending Anthony's review. Sizes and stock levels vary; call the counter for current availability.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {PIPE_INVENTORY.map(p => (
                <div key={p.type} className="bg-white border p-6">
                  <h3 className="font-serif text-2xl font-bold text-brand-blue-dark border-b border-brand-blue/20 pb-3">{p.type}</h3>
                  <ul className="mt-4 space-y-2 text-brand-charcoal text-sm">
                    {p.items.map(i => <li key={i} className="flex gap-2"><span className="text-brand-accent">▸</span><span>{i}</span></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-brand-blue-dark text-white">
            <div className="container-x py-16 text-center">
              <h2 className="h-section text-white">Call (973) 538-3662 for Current Pricing</h2>
              <p className="mt-4 text-white/85 max-w-2xl mx-auto">Pipe pricing moves with the market. Call the counter for today's number — we'll quote on the phone, hold the price, and have it ready for pickup or rolling on a truck.</p>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-primary mt-8 inline-flex">Call {SITE.phone}</a>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="container-x py-16 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="h-section text-brand-blue-dark mb-5">What We Stock</h2>
              <p className="text-brand-charcoal leading-relaxed">{COPY[slug!]?.intro}</p>
            </div>
            <ul className="space-y-3">
              {COPY[slug!]?.bullets.map(b => (
                <li key={b} className="flex gap-3 p-4 bg-brand-cream">
                  <span className="text-brand-accent font-bold">▸</span>
                  <span className="text-brand-charcoal">{b}</span>
                </li>
              ))}
            </ul>
          </section>
          <CTABand />
        </>
      )}
    </>
  );
}
