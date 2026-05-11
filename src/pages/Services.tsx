import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";

const SERVICES = [
  { title: "Counter Pickup", body: "Walk in, grab parts, get back on the road. We open at 7am Mon–Fri and 8am Saturday so you can be on-site early." },
  { title: "90-Minute Same-Day Delivery", body: "Most jobsite deliveries roll within 90 minutes of the order. Order before noon for guaranteed same-day; after noon, next-day." },
  { title: "Special Order", body: "If we don't stock it, we'll get it. Most special orders land within 1–3 business days from our distributor network." },
  { title: "Will-Call", body: "Call ahead, we pull it, you sign and go. Bins ready when you pull in — no waiting at the counter." },
  { title: "Jobsite Delivery", body: "Pipe, fittings, fixtures, water heaters — staged where you want them on-site. Lift-gate trucks for solo crews." },
  { title: "Project Estimating", body: "Send us a blueprint or material list. We'll quote your project, hold pricing, and stage deliveries to match your build schedule." },
];

export default function Services() {
  return (
    <>
      <Seo title="Services — Counter, Delivery, Will-Call" path="/services" schema={localBusinessSchema()}
        description="Counter pickup, 90-minute same-day delivery, special order, will-call, jobsite delivery, project estimating." />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">Services</span>
          <h1 className="h-display text-white mt-3">Built Around the Working Day.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">From a 6:55am will-call grab to a 3:45pm jobsite drop, our service model exists for one reason: keep your crew moving.</p>
        </div>
      </section>
      <section className="container-x py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <div key={i} className="bg-white p-7 border border-neutral-200 hover:border-brand-blue transition">
            <div className="text-xs uppercase tracking-widest text-brand-accent font-bold">0{i+1}</div>
            <h3 className="font-serif text-2xl font-bold text-brand-blue-dark mt-2">{s.title}</h3>
            <p className="mt-3 text-brand-charcoal leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>
      <CTABand />
    </>
  );
}
