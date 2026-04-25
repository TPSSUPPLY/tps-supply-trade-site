import { useParams, Navigate, Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { TRADES, SITE } from "../data/site";

const CONTENT: Record<string, { headline: string; lede: string; sections: { h: string; p: string }[]; bullets: string[] }> = {
  "plumbers": {
    headline: "Built Around the Plumber's Day.",
    lede: "From the 6:55am will-call grab to the after-hours emergency call, we run our counter and our trucks around how you actually work.",
    sections: [
      { h: "Fast Counter Pickup", p: "Open at 7am Mon–Fri. Will-call orders pulled before you arrive. Pull in, sign, go." },
      { h: "Code-Compliant Parts", p: "We stock to NJ plumbing code so you're not making a second trip. Backflow assemblies, dielectric unions, traps, vents — what passes inspection." },
      { h: "Daily Service Items", p: "Wax rings, supply lines, angle stops, fill valves, flappers, cartridges. The 50 SKUs you actually grab every week, deep on the shelf." },
    ],
    bullets: ["Net-30 trade accounts", "Same-day delivery before noon", "Counter open 7am Mon–Fri, 8am Saturday", "Press fittings, copper, PEX in stock"],
  },
  "builders-contractors": {
    headline: "Project-Scale Plumbing Supply.",
    lede: "From the slab to the trim package, we quote, stage and deliver to keep your subs moving and your draws on schedule.",
    sections: [
      { h: "Project Quotes", p: "Send us blueprints or a take-off. We'll quote your full plumbing package — rough-in through finish — and hold pricing through your build." },
      { h: "Jobsite Delivery", p: "Pipe staged in the basement. Fixtures dropped in the trim phase. Water heaters delivered the day they're needed. We schedule with your superintendent." },
      { h: "Blueprint Estimating", p: "Plans-in, take-off-out. We work directly from architectural drawings — no need to translate everything to a list." },
      { h: "New Construction Packages", p: "Single-family, townhomes, light multifamily — packaged to your spec, delivered phased." },
    ],
    bullets: ["Project-based quoting and pricing holds", "Phased delivery schedules", "Lift-gate trucks for solo crews", "Direct relationships with major fixture brands"],
  },
  "property-managers": {
    headline: "Multifamily Parts, Without the Headache.",
    lede: "When tenant comp 4B has no hot water at 8am, you don't have time to shop. We stock for the recurring service work that keeps a portfolio running.",
    sections: [
      { h: "Volume Pricing", p: "Net-30 accounts with portfolio pricing on the parts you reorder every month — angle stops, fill valves, water heaters, traps." },
      { h: "Repeat Orders", p: "We keep your par list on file. Call, say 'reorder my standing list,' and it's pulled or rolling." },
      { h: "Emergency Parts", p: "Water heater out at 4:30pm? Burst pipe Saturday morning? We stock the replacement parts your in-house techs and outside contractors actually call for." },
      { h: "Multifamily Focus", p: "Standardized fixtures across a portfolio means we can quote your standard spec once and reorder forever." },
    ],
    bullets: ["Portfolio pricing on standing par lists", "Counter open Saturday mornings", "Same-day delivery to multifamily sites", "Account history accessible by phone"],
  },
  "masons": {
    headline: "Plumbing Coordination for Mason Crews.",
    lede: "Slab pours, foundation drains, vent stacks through stone — when your work and the plumbing have to meet exactly, we stage the parts to match.",
    sections: [
      { h: "Coordination on Rough-Ins", p: "Get the plumber's spec, pour the slab, embed the right cleanouts and sleeves. We stock the cast iron and PVC components masons actually need set in concrete." },
      { h: "Slab / Vent / Drain Placement", p: "Floor drains, area drains, sleeve materials and the firestop / waterproofing details that go with them." },
      { h: "Cleanouts & Specialty Fittings", p: "Brass cleanout plugs, cast iron cleanout tees, deck plates, recessed cleanouts — the small parts that finish the job clean." },
    ],
    bullets: ["Cast iron no-hub and service weight in stock", "Floor drains, area drains, deck drains", "Sleeves and firestop materials", "Pickup or jobsite delivery"],
  },
  "restaurants-bars": {
    headline: "Commercial Plumbing for the Hospitality Trade.",
    lede: "From a new ice machine drop to a full bar build-out, we stock the commercial fittings, drains, and specialty plumbing the hospitality trade runs on.",
    sections: [
      { h: "Floor Drains & Grease Traps", p: "Cast iron and stainless floor drains in commercial sizes. Grease interceptors from countertop to in-ground, sized for your seat count and code requirements." },
      { h: "Beer Line Plumbing", p: "Glycol lines, food-grade tubing, fittings and the specialty parts a draft system actually needs." },
      { h: "Ice Machine Connections", p: "Filtered water lines, drain assemblies, condensate pumps and the small parts that get an ice machine running clean." },
      { h: "Commercial Fittings", p: "Pre-rinse units, commercial faucets, flush valves, backflow assemblies — the brands inspectors recognize." },
    ],
    bullets: ["Pre-rinse units and commercial faucets", "Grease traps and floor drains stocked", "Beer line and food-grade tubing", "Quick service for restaurant emergencies"],
  },
};

export default function TradeDetail() {
  const { slug } = useParams();
  const trade = TRADES.find(t => t.slug === slug);
  const c = slug ? CONTENT[slug] : undefined;
  if (!trade || !c) return <Navigate to="/trade" replace />;
  return (
    <>
      <Seo title={`For ${trade.title}`} path={`/trade/${trade.slug}`} schema={localBusinessSchema()}
        description={c.lede} />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <Link to="/trade" className="text-xs uppercase tracking-widest text-white/70 hover:text-brand-accent">← All Trades</Link>
          <h1 className="h-display text-white mt-3">{c.headline}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">{c.lede}</p>
        </div>
      </section>
      <section className="container-x py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {c.sections.map(s => (
            <div key={s.h}>
              <h2 className="font-serif text-2xl font-bold text-brand-blue-dark">{s.h}</h2>
              <p className="mt-2 text-brand-charcoal leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
        <aside className="bg-brand-cream p-7 border-l-4 border-brand-accent h-fit">
          <h3 className="font-serif text-xl font-bold text-brand-blue-dark">How We Run for {trade.title}</h3>
          <ul className="mt-4 space-y-2 text-brand-charcoal text-sm">
            {c.bullets.map(b => <li key={b} className="flex gap-2"><span className="text-brand-accent">▸</span><span>{b}</span></li>)}
          </ul>
          <div className="mt-6 flex flex-col gap-2">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">Call {SITE.phone}</a>
            <Link to="/credit-application" className="btn-outline">Apply for Account</Link>
          </div>
        </aside>
      </section>
      <CTABand />
    </>
  );
}
