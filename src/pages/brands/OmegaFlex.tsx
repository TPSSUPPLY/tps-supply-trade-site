import { Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "../../components/Seo";
import CTABand from "../../components/CTABand";
import { SITE } from "../../data/site";

const PRODUCT_LINES = [
  {
    name: "TracPipe CounterStrike CSST",
    desc: "Yellow-jacketed corrugated stainless steel gas tubing, 3/8\" through 2\". The flexible alternative to rigid black iron for natural gas and propane.",
  },
  {
    name: "AutoFlare Fittings",
    desc: "Single-piece flare fittings — the standard TracPipe termination. Fast, reliable connections from meter to appliance.",
  },
  {
    name: "Striker Plates",
    desc: "Code-required protection where the line passes through framing. Keeps a stray screw or nail off your gas tubing.",
  },
  {
    name: "Bonding Clamps",
    desc: "Code-required grounding for CSST installs. Gets you through inspection without the back-and-forth.",
  },
  {
    name: "Manifolds",
    desc: "For multi-appliance branch runs. Clean distribution from a single point off the main.",
  },
  {
    name: "PSII Tubing",
    desc: "Propane-rated CSST for LP gas applications where natural gas isn't available.",
  },
];

const WHATS_NEW = [
  "Greater installation adaptability — more routing options in tight, congested mechanical rooms",
  "Cleaner, more professional installations — better-looking finished work on visible runs",
  "Simplified accessory integration — manifolds, AutoFlares, striker plates and bonding clamps go together with less fuss",
  "Faster installation of larger commercial fittings — where the labor dollars on 1-1/4\", 1-1/2\" and 2\" runs add up",
];

export default function OmegaFlex() {
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Omega Flex TracPipe",
    "description": "TracPipe CounterStrike CSST flexible gas piping, AutoFlare fittings and accessories, stocked at TPS Supply in Morristown NJ.",
  };

  return (
    <>
      <Seo
        title="Omega Flex TracPipe CSST — Authorized Distributor in Morris County NJ"
        path="/brands/omega-flex"
        description="TracPipe CounterStrike CSST tubing, AutoFlare fittings, striker plates and bonding clamps for gas piping. Stocked deep at TPS Supply in Morristown NJ. Contractor counter open 7 AM."
        schema={[localBusinessSchema(), brandSchema]}
      />

      {/* 1. Hero */}
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">Authorized TracPipe Distributor</span>
          <h1 className="h-display text-white mt-3 max-w-3xl">Omega Flex TracPipe System</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Flexible CSST gas piping for natural gas and propane — stocked deep for Morris County
            plumbers and mechanical contractors. From the meter to the appliance, the system the
            trade already runs.
          </p>
          <span className="inline-block mt-8 border border-white/40 px-4 py-2 font-serif text-lg font-bold tracking-wide text-white/90">
            OMEGA&nbsp;FLEX
          </span>
        </div>
      </section>

      {/* 2. About / overview */}
      <section className="container-x py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Overview</span>
          <h2 className="h-section mt-2 text-brand-blue-dark">What TracPipe Is</h2>
          <div className="mt-6 space-y-4 text-brand-charcoal">
            <p>
              TracPipe is Omega Flex's flexible CSST — corrugated stainless steel tubing — engineered
              for natural gas and propane distribution. Instead of cutting, threading, and doping
              rigid black iron, you pull TracPipe off the coil, route it through joists and walls, and
              terminate with an AutoFlare fitting. It moves gas from the meter to the appliance in a
              fraction of the labor.
            </p>
            <p>
              It's been the contractor standard for residential and light commercial gas piping for
              decades, and it's earned that spot — flexible routing, fewer fittings, faster runs, and
              a code-recognized system that inspectors know on sight. When a job calls for gas line,
              TracPipe is usually the answer.
            </p>
            <p>
              We stock it deep because our contractors run it every week. The CounterStrike tubing,
              the AutoFlare fittings, the striker plates and bonding clamps that pass inspection — it's
              on the rack and will-call ready when you pull in.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What's New */}
      <section className="bg-brand-cream">
        <div className="container-x py-16">
          <div className="max-w-3xl">
            <span className="eyebrow">What's New — 2026</span>
            <h2 className="h-section mt-2 text-brand-blue-dark">A Refined TracPipe Fitting Is Coming</h2>
            <p className="mt-4 text-brand-charcoal">
              In June 2026, Omega Flex announced the next iteration of TracPipe fittings — along with a
              refreshed company logo. The important part for the field: this isn't a new system.
              Contractors aren't relearning anything. It's a set of enhancements to the proven TracPipe
              System already in use, aimed at four things:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-1 text-brand-charcoal">
              {WHATS_NEW.map(item => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-4 text-brand-charcoal">
              Training resources, installation guidance, and launch materials are coming in the weeks
              ahead. We'll stock the new fittings as they become available and keep the current ones on
              the rack as long as you're pulling them.
            </p>
            <Link
              to="/blog/tracpipe-system-update-2026"
              className="inline-block mt-6 font-semibold text-brand-blue underline hover:text-brand-blue-dark"
            >
              Read the full breakdown for contractors →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Product Lines */}
      <section className="container-x py-16">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">What We Stock</span>
          <h2 className="h-section mt-2 text-brand-blue-dark">TracPipe Product Lines</h2>
          <p className="mt-2 text-brand-charcoal">
            The full TracPipe System — tubing, terminations, and the code-required accessories that go
            with them. Call the counter for current sizing and availability.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCT_LINES.map(line => (
            <div key={line.name} className="bg-white border border-neutral-200 p-6 hover:border-brand-blue transition">
              <h3 className="font-serif text-xl font-bold text-brand-blue-dark">{line.name}</h3>
              <p className="mt-2 text-sm text-brand-charcoal leading-relaxed">{line.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Code & Certification */}
      <section className="bg-brand-cream">
        <div className="container-x py-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Code & Certification</span>
            <h2 className="h-section mt-2 text-brand-blue-dark">Installed to Code</h2>
            <div className="mt-6 space-y-4 text-brand-charcoal">
              <p>
                TracPipe CSST is installed under NFPA 54 (the National Fuel Gas Code) and the IFGC
                (International Fuel Gas Code), and the system is listed to ANSI LC-1 / CSA 6.26 — the
                standard for fuel gas piping systems using corrugated stainless steel tubing.
              </p>
              <p>
                That means striker plates where the line passes framing and proper bonding are not
                optional — they're part of a code-compliant install, and they're part of what we stock.
                Always confirm requirements with your local AHJ before you quote a job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Trade callout */}
      <section className="container-x py-16">
        <div className="border-l-4 border-brand-accent bg-white p-8 max-w-3xl">
          <span className="eyebrow">For the Trade</span>
          <h2 className="h-section mt-2 text-brand-blue-dark">Stocked Deep. Will-Call Ready.</h2>
          <p className="mt-4 text-brand-charcoal">
            We open at 7 AM so TracPipe is on the truck before the job starts. We stock the common
            sizes deep, contractor accounts are available, and the counter knows the system. Call
            ahead and we'll have it pulled before you pull in.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">Call {SITE.phone}</a>
            <Link to="/credit-application" className="btn-outline">Apply for Trade Account</Link>
          </div>
          <p className="mt-4 text-sm text-brand-charcoal/80">
            {SITE.address}, {SITE.city} {SITE.state} {SITE.zip} · Mon–Fri 7am–4pm, Sat 8am–1pm
          </p>
        </div>
      </section>

      {/* 7. CTA Band */}
      <CTABand
        title="Running gas line this week?"
        subtitle="TracPipe tubing, AutoFlare fittings and accessories — stocked and will-call ready. Call the counter."
      />
    </>
  );
}
