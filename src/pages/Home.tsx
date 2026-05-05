import { Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { SITE, CATEGORIES, PREMIUM_BRANDS, ROUGH_BRANDS } from "../data/site";

const VALUE_PROPS = [
  { kicker: "Headline", title: "90-Minute Same-Day Delivery", body: "Order before noon for delivery by end of day. Most jobs hit the truck within 90 minutes." },
  { kicker: "In stock", title: "Large Variety of Pipe — Same Day or Next Day", body: "Copper, PEX, PVC, CPVC, ABS, cast iron, black iron, brass, stainless. Most pickups walk out today." },
  { kicker: "Trade hours", title: "Open 7am for Will-Call & Counter Pickup", body: "Get parts before the first job. Will-call ready when you pull in." },
  { kicker: "Family-owned", title: `${SITE.yearsInBusiness} Years in Morris County`, body: "Three generations behind the counter. We answer the phone, we know your job." },
];

export default function Home() {
  return (
    <>
      <Seo title="Wholesale Plumbing Supply, Morristown NJ" path="/" schema={localBusinessSchema()} />

      {/* HERO */}
      <section className="relative bg-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, #fff 0, transparent 50%), radial-gradient(circle at 20% 80%, #c89b3c 0, transparent 50%)"
        }} />
        <div className="container-x relative py-20 sm:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow text-brand-accent">Wholesale Plumbing Supply</span>
            <h1 className="h-display text-white mt-4">90-Minute Same-Day Delivery to Your Jobsite.</h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl">Morris County's plumbing supply counter for 40+ years. Pipe, fittings, fixtures and tools — in stock, on the truck, on the job.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">Call {SITE.phone}</a>
              <Link to="/credit-application" className="btn border border-white text-white hover:bg-white hover:text-brand-blue">Apply for Trade Account</Link>
              <Link to="/categories/pipe-supply" className="btn text-white underline underline-offset-4 hover:text-brand-accent">View Pipe Supply →</Link>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-sm">
            {[
              ["7AM", "Mon–Fri counter open"],
              ["NOON", "Cutoff for same-day"],
              ["90 MIN", "Typical delivery time"],
              ["40+ YRS", "Family-owned in Morris County"],
            ].map(([k, v]) => (
              <div key={k} className="bg-white/10 backdrop-blur-sm border border-white/15 p-5">
                <div className="font-serif text-3xl font-bold">{k}</div>
                <div className="text-white/80 mt-1 text-xs uppercase tracking-wider">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-brand-cream">
        <div className="container-x py-20">
          <div className="text-center mb-12">
            <span className="eyebrow">Why the Trade Trusts TPS</span>
            <h2 className="h-section mt-2">Built for the Working Day</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPS.map((v, i) => (
              <div key={i} className={`p-7 border-t-4 bg-white ${i === 0 ? "border-brand-accent shadow-lg" : "border-brand-blue"}`}>
                <div className="text-xs uppercase tracking-widest text-brand-accent font-semibold">{v.kicker}</div>
                <h3 className="font-serif text-xl font-bold mt-2 text-brand-blue-dark">{v.title}</h3>
                <p className="mt-3 text-sm text-brand-charcoal leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-x py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="eyebrow">What We Stock</span>
            <h2 className="h-section mt-2">Categories</h2>
          </div>
          <Link to="/categories" className="text-brand-blue font-semibold uppercase text-sm tracking-wider hover:text-brand-accent">View All →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map(c => (
            <Link key={c.slug} to={`/categories/${c.slug}`}
              className={`group p-7 border ${c.featured ? "bg-brand-blue text-white border-brand-blue" : "bg-white border-neutral-200 hover:border-brand-blue"} transition`}>
              <div className="flex items-start justify-between gap-3">
                <h3 className={`font-serif text-2xl font-bold ${c.featured ? "text-white" : "text-brand-blue-dark"}`}>{c.title}</h3>
                {c.featured && <span className="text-xs uppercase tracking-widest bg-brand-accent text-white px-2 py-1">Emphasis</span>}
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${c.featured ? "text-white/85" : "text-brand-charcoal"}`}>{c.desc}</p>
              <span className={`inline-block mt-5 text-xs uppercase tracking-widest font-semibold ${c.featured ? "text-brand-accent" : "text-brand-blue group-hover:text-brand-accent"}`}>Shop {c.title} →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-neutral-50 border-y">
        <div className="container-x py-16">
          <div className="text-center mb-10">
            <span className="eyebrow">Brands We Carry</span>
            <h2 className="h-section mt-2">From Premium to Commodity</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-brand-charcoal">
            {[...PREMIUM_BRANDS, ...ROUGH_BRANDS].map(b => (
              <span key={b} className="font-serif text-xl font-semibold text-brand-blue-dark">{b}</span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/brands" className="btn-outline">View All Brands</Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-t">
        <div className="container-x py-20">
          <p className="eyebrow text-center text-[#bf9c43]">Visit Our Showroom</p>
          <h2 className="h-section text-center text-[#1c3454]">For Design, Displays &amp; Walk-In Service</h2>
          <p className="max-w-2xl mx-auto text-center text-brand-charcoal mt-4">
            Beyond the wholesale counter, our retail showroom offers in-person consultations, product displays, and design support. Browse curated collections at Your Showroom at TPS.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { label: "Bathroom Showroom", href: "https://www.yourshowroomattps.com/bathroom" },
              { label: "Kitchen Showroom", href: "https://www.yourshowroomattps.com/kitchen" },
              { label: "Lighting Showroom", href: "https://www.yourshowroomattps.com/lighting" },
              { label: "Browse the Full Catalog", href: "https://www.yourshowroomattps.com" },
            ].map(card => (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noopener"
                className="block border-2 border-[#1c3454] rounded-lg p-6 text-center hover:bg-[#1c3454] hover:text-white transition-colors group"
              >
                <span className="block font-serif text-lg font-semibold text-[#1c3454] group-hover:text-white">{card.label}</span>
                <span className="block mt-2 text-sm text-[#bf9c43]">Visit →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
