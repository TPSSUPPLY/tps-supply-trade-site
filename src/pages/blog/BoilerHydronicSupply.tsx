import BlogPostLayout from "../../components/BlogPostLayout";
import { POSTS } from "../../data/posts";

const meta = POSTS.find(p => p.slug === "boiler-hydronic-heating-supply-northern-nj")!;

export default function BoilerHydronicSupply() {
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
        In Northern New Jersey, heating season runs hard. November through March, our counter sees a steady flow of mechanical contractors, oil-to-gas conversion specialists, and service plumbers chasing no-heat calls at 6:45 AM. Here's what we stock, what we hear most often, and where we point people when they're spec'ing a new boiler or hydronic system.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Brands we carry</h2>
      <p>
        We stock parts and components for all three of the dominant residential and light-commercial boiler brands in our region:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li><strong>Burnham (U.S. Boiler):</strong> ESC, Series 3, MegaSteam, and Aspen condensing — gaskets, sections, controls and burner parts in stock for the most-installed residential models</li>
        <li><strong>Weil-McLain:</strong> Gold Plus oil, CGa-25 gas, Ultra and ECO Tec condensing — full circulator, control and sealing parts coverage</li>
        <li><strong>Slant/Fin:</strong> Galaxy gas, TR oil, and the ubiquitous baseboard line that's in half the houses in Morris County</li>
      </ul>
      <p>
        For accessories — circulators, expansion tanks, air separators, zone valves — we stock Taco, Grundfos, Watts, Webstone, Honeywell and Caleffi.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Cast iron vs cast aluminum: still a real argument</h2>
      <p>
        We get the question every week. The honest answer hasn't changed much:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li><strong>Cast iron:</strong> Heavier, longer-lived (40+ years isn't unusual), more forgiving of poor water chemistry. The right call for most residential replacements where the customer plans to stay 15+ years.</li>
        <li><strong>Cast aluminum:</strong> Higher efficiency, faster recovery, lighter for retrofit installs in tight basements. Sensitive to pH — if your fill water is acidic well water, you need to test and treat or you'll regret the warranty conversation in year seven.</li>
      </ul>
      <p>
        Stainless heat exchangers (the high-end mod-cons) get their own conversation. They're the right call for a high-mass radiant system or a multi-zone home with big load swings.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Hydronic accessories — the parts you forget</h2>
      <p>
        Boilers don't fail. Boiler accessories fail. Almost every no-heat call we see in February is one of:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-brand-charcoal">
        <li>Failed circulator (Taco 007, Grundfos UPS15, the usual suspects) — keep at least one on the truck, you will need it</li>
        <li>Stuck zone valve (Honeywell V8043, Taco 571) — the powerhead is the usual culprit, the body almost never</li>
        <li>Expansion tank waterlogged or punctured</li>
        <li>Auto-fill valve stuck open or closed</li>
        <li>Air-bound system from a fill that wasn't purged properly</li>
      </ul>
      <p>
        We stock all of these in the common sizes. We also stock backup glycol (50/50 propylene), boiler treatment, and Fernox/Rhomar cleaning chemicals — the stuff a service tech needs at hour 12 of a Saturday.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Common replacement headaches</h2>
      <p>
        Two situations we see all the time:
      </p>
      <p>
        <strong>The 1985 cast-iron section that's leaking.</strong> Replacing the section is technically possible — Burnham still makes parts for some of these — but the labor cost is usually higher than half the price of a new boiler. Have the conversation with the homeowner about a replacement quote before you start ordering sections.
      </p>
      <p>
        <strong>The combi-boiler that's short-cycling.</strong> Almost always either an oversized boiler relative to the actual heat load, or a missing low-loss header/buffer tank in a multi-zone setup. We can spec the buffer tank and the right Caleffi separator for the install.
      </p>

      <h2 className="font-serif text-2xl font-bold text-brand-blue-dark mt-10 mb-4">Need it before the truck leaves the shop?</h2>
      <p>
        Heating season starts at 7 AM, not 8. We open at 7 Monday through Friday and 8 on Saturday so the truck can leave loaded. If you're running a no-heat call and need a circulator, zone valve, or a section gasket today, call the counter — we can usually have it on a delivery or pulled for will-call before you've finished your coffee.
      </p>
    </BlogPostLayout>
  );
}
