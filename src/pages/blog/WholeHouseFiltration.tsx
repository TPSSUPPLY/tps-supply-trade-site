import BlogPostLayout from "../../components/BlogPostLayout";
import { POSTS } from "../../data/posts";

const meta = POSTS.find(p => p.slug === "whole-house-water-filtration-morris-county")!;

export default function WholeHouseFiltration() {
  return (
    <BlogPostLayout
      title={meta.title}
      slug={meta.slug}
      category={meta.category}
      date={meta.date}
      description={meta.excerpt}
      heroImage={meta.image}
    >
      <p className="text-lg leading-relaxed">
        Water filtration is one of the fastest-growing service categories in our region. Hard water on municipal supply, well systems with iron and manganese, and the new statewide attention on PFAS have all pushed homeowners and commercial property managers to ask harder questions. Here's what we tell plumbers spec'ing systems in Morris County.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Know the water before you spec the system</h2>
      <p>
        The single biggest mistake we see is plumbers spec'ing a softener-only or a carbon-only system without a water test. Two homes on the same street can have wildly different needs — especially in this region, where you have a mix of municipal supply (Morristown, Madison, Chatham) and private wells (much of Mendham, Chester, parts of Randolph and Mountain Lakes).
      </p>
      <p>
        For a residential install, a basic water test should cover:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li>Hardness (grains per gallon)</li>
        <li>Iron and manganese (especially on wells)</li>
        <li>pH</li>
        <li>Total dissolved solids (TDS)</li>
        <li>Bacteria (well only)</li>
        <li>PFAS — increasingly relevant under NJ DEP guidance</li>
      </ul>
      <p>
        We can hand a homeowner a simple test kit at the counter, or refer them to a state-certified lab for a more detailed panel.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Residential whole-house systems — the typical stack</h2>
      <p>
        For a typical Morris County single-family home with municipal water, the standard stack is:
      </p>
      <ol className="list-decimal pl-6 space-y-1 text-brand-charcoal">
        <li><strong>Sediment pre-filter</strong> — 5-micron spin-down or pleated cartridge</li>
        <li><strong>Carbon block</strong> for chlorine, chloramine, and basic taste/odor</li>
        <li><strong>Water softener</strong> if hardness is above 7 gpg — saves the water heater, dishwasher, and fixtures</li>
        <li><strong>Optional UV</strong> at point of use for well systems</li>
        <li><strong>RO at the kitchen sink</strong> for drinking water, especially if PFAS is a concern</li>
      </ol>
      <p>
        Top brands we stock and recommend: Pentair (formerly Pentek/EcoWater), Aquasana, Watts, 3M, and the GE/Whirlpool branded equivalents that homeowners often request because they recognize the name.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Commercial systems — different problem, different sizing</h2>
      <p>
        Commercial water filtration is rarely about taste — it's about equipment protection. A restaurant losing an ice machine to scale costs them $4,000 in service plus revenue. A coin laundry with hard water is wearing out solenoid valves three times faster than it should. Common commercial scenarios:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li><strong>Restaurants:</strong> Combination scale-control + carbon for ice machines, espresso, and steamers — usually 3M or Everpure cartridge systems</li>
        <li><strong>Apartment buildings:</strong> Building-wide softening with twin-tank systems for continuous flow, plus a circulating loop with carbon</li>
        <li><strong>Light industrial:</strong> Multi-stage with backwashing media filters, often manganese greensand for iron-heavy well systems</li>
      </ul>
      <p>
        Sizing is the other big difference. Residential sizing is by gpg and household size; commercial sizing is by peak flow rate, and getting it wrong leads to a system that channels and stops working in year two.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Replacement filters — the long-term service relationship</h2>
      <p>
        A new system install is one transaction. The 12-year service relationship lives in replacement cartridges, salt deliveries, and UV bulb swaps. We stock common replacement filters in:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li>Standard 10" and 20" Big Blue housings (sediment, carbon, KDF)</li>
        <li>3M and Everpure cartridge bodies for foodservice</li>
        <li>RO membranes — Pentair, Watts, Hydronix</li>
        <li>UV bulbs and quartz sleeves — Sterilight, Pura, Viqua</li>
        <li>Water softener salt (solar, pellet, potassium chloride)</li>
      </ul>
      <p>
        Set up a recurring schedule with the customer at install. The plumber who shows up before the cartridge fails wins the next system replacement, too.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">PFAS and what it means for spec sheets</h2>
      <p>
        New Jersey's MCL for PFOA and PFOS is among the strictest in the country, and homeowners are starting to ask. Most municipal supplies in our region test below MCL, but well systems are a wildcard. The short answer: standard carbon block won't reliably remove PFAS to non-detect levels. For removal, plan on either a high-grade activated carbon system rated for PFAS (specific cartridges from Pentair and 3M now exist) or a point-of-use RO at the kitchen sink. Document the spec for the homeowner — it matters in resale.
      </p>
    </BlogPostLayout>
  );
}
