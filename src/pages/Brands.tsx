import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { PREMIUM_BRANDS, ROUGH_BRANDS } from "../data/site";

function BrandTile({ name }: { name: string }) {
  return (
    <div className="aspect-[3/2] bg-white border border-neutral-200 flex items-center justify-center hover:border-brand-blue transition group">
      <span className="font-serif text-2xl font-bold text-brand-blue-dark group-hover:text-brand-blue text-center px-3">{name}</span>
    </div>
  );
}

export default function Brands() {
  return (
    <>
      <Seo title="Brands We Carry" path="/brands" schema={localBusinessSchema()}
        description="Premium fixtures: Moen, Rohl, Toto, Gerber, Brizo, Delta, Kohler. Commodity rough-in: Watts, Sharkbite, Viega, Charlotte Pipe, Apollo, Nibco, Wirsbo." />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">Brands</span>
          <h1 className="h-display text-white mt-3">Premium Fixtures. Workhorse Rough-In.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">Stocked deep on what you need every day. Available next-day on what you need this week.</p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="mb-12">
          <span className="eyebrow">Finish & Fixtures</span>
          <h2 className="h-section mt-2 text-brand-blue-dark">Premium Brands</h2>
          <p className="mt-2 text-brand-charcoal max-w-2xl">For trim packages, vanities, faucets, tubs, toilets and finish work — full lines from the brands homeowners and designers ask for by name.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {PREMIUM_BRANDS.map(b => <BrandTile key={b} name={b} />)}
        </div>

        <div className="mt-16 mb-12">
          <span className="eyebrow">Rough-In & Commodity</span>
          <h2 className="h-section mt-2 text-brand-blue-dark">Workhorse Lines</h2>
          <p className="mt-2 text-brand-charcoal max-w-2xl">The lines you actually use on the job — pipe, fittings, valves, controls, PEX systems and beyond. Stocked deep so you don't go searching.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {ROUGH_BRANDS.map(b => <BrandTile key={b} name={b} />)}
        </div>
      </section>
      <CTABand title="Need a brand we didn't list?" subtitle="If we can source it, we will. Call the counter and ask." />
    </>
  );
}
