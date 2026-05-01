import { Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { TRADES } from "../data/site";

const SUMMARIES: Record<string, string> = {
  "plumbers": "Fast counter pickup, code-compliant parts, daily service items.",
  "builders-contractors": "Project quotes, jobsite delivery, blueprint estimating, new construction packages.",
  "property-managers": "Volume pricing, repeat orders, emergency parts, multifamily focus.",
  "masons": "Coordination on rough-ins, slab/vent/drain placement, cleanouts and specialty fittings.",
  "restaurants-bars": "Floor drains, grease traps, beer line plumbing, ice machine connections, commercial fittings.",
};

export default function Trade() {
  return (
    <>
      <Seo title="For the Trade" path="/trade" schema={localBusinessSchema()}
        description="We sell to plumbers, builders, GCs, property managers, masons, and restaurant operators." />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">For the Trade</span>
          <h1 className="h-display text-white mt-3">Built for Pros. Open to All.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">Different trades have different needs. Whether you're a pro or a homeowner tackling a project — we'll show you how we run for you.</p>
        </div>
      </section>
      <section className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRADES.map(t => (
          <Link key={t.slug} to={`/trade/${t.slug}`}
            className="group p-7 bg-white border border-neutral-200 hover:border-brand-blue transition">
            <h3 className="font-serif text-2xl font-bold text-brand-blue-dark">{t.title}</h3>
            <p className="mt-3 text-brand-charcoal leading-relaxed text-sm">{SUMMARIES[t.slug]}</p>
            <span className="mt-6 inline-block text-xs uppercase tracking-widest font-semibold text-brand-blue group-hover:text-brand-accent">Read More →</span>
          </Link>
        ))}
      </section>
      <CTABand />
    </>
  );
}
