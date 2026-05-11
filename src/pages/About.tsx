import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { SITE } from "../data/site";

export default function About() {
  return (
    <>
      <Seo title="About TPS Supply" path="/about" schema={localBusinessSchema()}
        description="Family-owned plumbing supply counter in Morristown, NJ. 40+ years serving Morris County's trade." />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">About</span>
          <h1 className="h-display text-white mt-3 max-w-3xl">Three Generations Behind the Counter.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">{SITE.tagline}. We started as a small counter on Ridgedale Avenue and we've stayed there ever since — because the trade told us what they needed and we kept showing up with it.</p>
        </div>
      </section>

      <section className="container-x py-20 grid lg:grid-cols-2 gap-12">
        <div className="prose-trade">
          <h2 className="h-section text-brand-blue-dark mb-5">Built for the Trade — Open to Everyone.</h2>
          <p>TPS Supply is a plumbing supply house with deep roots in the trade. We sell to plumbers, builders, GCs, property managers, masons, and restaurant operators across Morris County — and we welcome homeowners tackling their own projects. Trade accounts get trade pricing; everyone else gets fair retail and the same straight answers at the counter.</p>
          <p>Our counter opens at 7am Monday through Friday because that's when you start your day. Saturday we open at 8 because we know the small jobs don't wait. We answer the phone — usually on the second ring — because the parts you need don't help you if you can't get a human on the line.</p>
          <p>We carry premium fixture brands like Brizo, Kohler, Rohl, Toto and Moen for finish work, and the commodity rough-in lines you actually need on the truck — Charlotte Pipe, Watts, Viega, Sharkbite, Apollo, Nibco, Wirsbo. If we don't stock it, we'll usually have it next-day from one of our suppliers.</p>
          <p>And then there's the sister side of the business: <a href="https://yourshowroomattps.com" className="text-brand-blue underline">Your Showroom at TPS</a> — the design showroom your clients walk into when they need to pick fixtures. Same family, same building, two doors. You handle the install. We handle the parts.</p>
        </div>
        <div className="space-y-6">
          <div className="bg-brand-cream p-8 border-l-4 border-brand-accent">
            <h3 className="font-serif text-2xl font-bold text-brand-blue-dark">Our Promise</h3>
            <p className="mt-3 text-brand-charcoal">If we said it's in stock, it's in stock. If we promised 90 minutes, your driver is rolling. If we got it wrong, we make it right today — not tomorrow.</p>
          </div>
          <div className="bg-white p-8 border">
            <h3 className="font-serif text-2xl font-bold text-brand-blue-dark">Counter</h3>
            <address className="not-italic text-brand-charcoal mt-3 leading-relaxed">
              {SITE.address}<br/>{SITE.city}, {SITE.state} {SITE.zip}<br/>
              <a href={`tel:${SITE.phoneRaw}`} className="text-brand-blue font-semibold mt-2 inline-block">{SITE.phone}</a>
            </address>
            <ul className="mt-4 text-sm text-brand-charcoal space-y-1">
              {SITE.hours.map(h => <li key={h.d}><span className="font-semibold">{h.d}:</span> {h.h}</li>)}
            </ul>
            <p className="text-sm italic text-brand-accent mt-3">{SITE.hoursNote}</p>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
