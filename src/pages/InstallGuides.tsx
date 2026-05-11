import { Helmet } from "react-helmet-async";

const BRANDS = [
  { name: "Brizo", install: "https://www.brizo.com/literature", parts: "https://www.brizo.com/parts", spec: "https://www.brizo.com/literature", warranty: "https://www.brizo.com/customer-care" },
  { name: "Delta", install: "https://www.deltafaucet.com/customer-support/installation-guides", parts: "https://www.deltafaucet.com/customer-support/parts", spec: "https://www.deltafaucet.com/customer-support/specs", warranty: "https://www.deltafaucet.com/customer-support" },
  { name: "Moen", install: "https://www.moen.com/customer-support", parts: "https://www.moen.com/customer-support/parts", spec: "https://www.moen.com/customer-support/installation-instructions", warranty: "https://www.moen.com/customer-support/warranty" },
  { name: "Kohler", install: "https://www.kohler.com/customer-care/parts-warranty/installation-instructions", parts: "https://www.kohler.com/customer-care/parts-warranty/parts", spec: "https://www.kohler.com/customer-care/spec-sheets", warranty: "https://www.kohler.com/customer-care/parts-warranty" },
  { name: "TOTO", install: "https://www.totousa.com/parts", parts: "https://www.totousa.com/parts", spec: "https://www.totousa.com/parts", warranty: "https://www.totousa.com/customer-service" },
  { name: "Hansgrohe", install: "https://www.hansgrohe-usa.com/service", parts: "https://www.hansgrohe-usa.com/service/spare-parts", spec: "https://www.hansgrohe-usa.com/service/operating-manuals", warranty: "https://www.hansgrohe-usa.com/service/warranty" },
  { name: "GRAFF", install: "https://www.graff-faucets.com/", parts: "https://www.graff-faucets.com/", spec: "https://www.graff-faucets.com/", warranty: "https://www.graff-faucets.com/" },
  { name: "American Standard", install: "https://www.americanstandard-us.com/customer-support", parts: "https://www.americanstandard-us.com/customer-support/parts", spec: "https://www.americanstandard-us.com/customer-support/installation", warranty: "https://www.americanstandard-us.com/customer-support" },
  { name: "ROHL", install: "https://www.houseofrohl.com/", parts: "https://www.houseofrohl.com/", spec: "https://www.houseofrohl.com/", warranty: "https://www.houseofrohl.com/" },
  { name: "California Faucets", install: "https://www.calfaucets.com/", parts: "https://www.calfaucets.com/", spec: "https://www.calfaucets.com/", warranty: "https://www.calfaucets.com/" },
  { name: "Newport Brass", install: "https://www.newportbrass.com/", parts: "https://www.newportbrass.com/", spec: "https://www.newportbrass.com/", warranty: "https://www.newportbrass.com/" },
  { name: "Watermark", install: "https://www.watermark-designs.com/", parts: "https://www.watermark-designs.com/", spec: "https://www.watermark-designs.com/", warranty: "https://www.watermark-designs.com/" },
];

const ROUGH_IN = [
  ["Toilet (standard)", "12\" from finished wall", "Some brands offer 10\" or 14\" variants"],
  ["Lavatory faucet (widespread)", "8\" centerset", "4\" minimum, 12\"-16\" supported"],
  ["Lavatory faucet (single hole)", "1.25\"-1.5\" hole", "Most brands"],
  ["Kitchen faucet (single hole)", "1.5\" hole", "Pre-rinse or pull-down adds height"],
  ["Tub valve (standard)", "Floor-to-trim height varies", "Verify per brand spec sheet"],
  ["Shower valve", "30\"-50\" floor-to-handle (typical)", "Brand variation common"],
];

const FAQS = [
  { q: "Where can I get a Brizo parts diagram?", a: "Brizo publishes parts diagrams and exploded-views in their literature library at brizo.com/literature. If you can't find a specific model, our counter team can pull it for you while you wait — call (973) 538-3662." },
  { q: "What's the standard rough-in for a residential toilet?", a: "Standard residential toilet rough-in is 12 inches from the finished wall to the center of the closet flange. Some brands offer 10\" or 14\" variants for retrofit. Always verify against the specific model's spec sheet." },
  { q: "Does TPS Supply stock common faucet cartridges?", a: "Yes. We stock the most common Delta, Moen, Kohler, and Brizo cartridges at our Morristown counter. For less common cartridges we can usually order same-day or next-day." },
  { q: "What hours is the will-call counter open?", a: "Monday through Friday 7:00 AM to 4:00 PM, Saturday 8:00 AM to 1:00 PM. Saturdays are closed from Memorial Day through Labor Day. Closed Sunday." },
  { q: "Can I bring a part and have someone identify it at the counter?", a: "Yes. Walk-ins are welcome during counter hours. Bring the broken part — we'll match it to a current product or order the equivalent." },
  { q: "Where is TPS Supply located?", a: "108 Ridgedale Avenue, Building 4, Morristown, NJ 07960. Phone (973) 538-3662." },
  { q: "Do you have a delivery service for contractors?", a: "Yes. We offer local delivery within Morris County for trade accounts. Call the counter for same-day or scheduled delivery options." },
  { q: "Where can I get TOTO spec sheets?", a: "TOTO spec sheets are at totousa.com/parts. If you need help finding a specific model spec, call our counter at (973) 538-3662 — we have direct access to manufacturer spec libraries." },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function InstallGuides() {
  return (
    <>
      <Helmet>
        <title>Plumbing Installation Guides, Parts Diagrams & Rough-In Specs | TPS Supply Morristown NJ</title>
        <meta
          name="description"
          content="Quick-reference install guides, parts diagrams, and rough-in specs for plumbing pros. Brizo, Delta, Moen, Kohler, TOTO and 70+ brands. Will-call counter at 108 Ridgedale Ave Morristown NJ. (973) 538-3662."
        />
        <link rel="canonical" href="https://www.tpssupply.com/install-guides" />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-[#1c3454] text-white">
        <div className="container-x py-16">
          <p className="eyebrow text-[#bf9c43]">For trade pros</p>
          <h1 className="h-display mt-2">Installation Guides &amp; Specs for Trade Pros</h1>
          <p className="max-w-3xl mt-4 text-lg opacity-90">
            Quick-reference resources for plumbers, contractors, and installers working with our 70+ brands. Need a part number, rough-in spec, or install diagram? Start here. Can&apos;t find it? Our counter team can pull manufacturer specs while you wait — call <a href="tel:+19735383662" className="underline text-[#bf9c43]">(973) 538-3662</a> or visit our Morristown counter.
          </p>
        </div>
      </section>

      {/* Brand cards */}
      <section className="bg-white">
        <div className="container-x py-16">
          <h2 className="h-section text-[#1c3454]">Brand Install Resources</h2>
          <p className="mt-2 text-brand-charcoal">Direct links to manufacturer install guides, parts portals, spec sheets, and warranty/service.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {BRANDS.map((b) => (
              <div key={b.name} className="border-2 border-[#1c3454] rounded-lg p-5">
                <h3 className="font-serif text-xl font-semibold text-[#1c3454]">{b.name}</h3>
                <ul className="mt-3 space-y-1.5 text-sm">
                  <li><a href={b.install} target="_blank" rel="noopener" className="text-[#1c3454] hover:text-[#bf9c43]">Install Guides →</a></li>
                  <li><a href={b.parts} target="_blank" rel="noopener" className="text-[#1c3454] hover:text-[#bf9c43]">Parts Diagrams →</a></li>
                  <li><a href={b.spec} target="_blank" rel="noopener" className="text-[#1c3454] hover:text-[#bf9c43]">Spec Sheets →</a></li>
                  <li><a href={b.warranty} target="_blank" rel="noopener" className="text-[#1c3454] hover:text-[#bf9c43]">Service / Warranty →</a></li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rough-in table */}
      <section className="bg-[#f5f1ea]">
        <div className="container-x py-16">
          <h2 className="h-section text-[#1c3454]">Standard Rough-In Reference</h2>
          <p className="mt-2 text-brand-charcoal">Industry-standard dimensions for common fixtures. Always verify against manufacturer spec sheet.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full bg-white rounded-lg border-2 border-[#1c3454]">
              <thead className="bg-[#1c3454] text-white">
                <tr>
                  <th className="text-left p-4 font-semibold">Fixture Type</th>
                  <th className="text-left p-4 font-semibold">Standard Rough-In</th>
                  <th className="text-left p-4 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ROUGH_IN.map(([t, d, n], i) => (
                  <tr key={t} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f6f2]"}>
                    <td className="p-4 font-semibold text-[#1c3454] border-t border-[#e0e0e0]">{t}</td>
                    <td className="p-4 border-t border-[#e0e0e0]">{d}</td>
                    <td className="p-4 text-sm text-brand-charcoal border-t border-[#e0e0e0]">{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-brand-charcoal italic">
            ⚠️ Standard reference only — always verify against the manufacturer&apos;s spec sheet for the specific model. Local plumbing code may impose additional requirements.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white">
        <div className="container-x py-16">
          <h2 className="h-section text-[#1c3454]">Frequently Asked Questions</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="border-l-4 border-[#bf9c43] pl-4">
                <h3 className="font-semibold text-[#1c3454]">{q}</h3>
                <p className="mt-2 text-sm text-brand-charcoal">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter callout */}
      <section className="bg-[#1c3454] text-white">
        <div className="container-x py-16 text-center">
          <h2 className="h-section">Need a spec ASAP?</h2>
          <p className="mt-4 max-w-2xl mx-auto opacity-90">
            Our counter is open Mon-Fri 7am-4pm, Sat 8am-1pm (closed Saturdays Memorial Day-Labor Day) at <strong>108 Ridgedale Ave Bldg 4, Morristown NJ</strong>. Call <a href="tel:+19735383662" className="underline text-[#bf9c43]">(973) 538-3662</a> — we can pull spec sheets and parts numbers while you wait.
          </p>
          <p className="mt-6 text-sm opacity-75">
            Need design-side support for the homeowner? Our retail showroom is at the same address: <a href="https://www.yourshowroomattps.com/morristown-showroom" target="_blank" rel="noopener" className="underline text-[#bf9c43]">yourshowroomattps.com/morristown-showroom</a>
          </p>
        </div>
      </section>
    </>
  );
}
