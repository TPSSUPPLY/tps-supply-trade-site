import { Link } from "react-router-dom";
import { SITE } from "../data/site";

export default function CTABand({ title = "Need parts on the truck today?", subtitle = "Call the counter or apply for a trade account in two minutes." }: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-brand-blue text-white">
      <div className="container-x py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="h-section text-white">{title}</h2>
          <p className="mt-3 text-white/85">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">Call {SITE.phone}</a>
          <Link to="/credit-application" className="btn border border-white text-white hover:bg-white hover:text-brand-blue">Apply for Trade Account</Link>
        </div>
      </div>
    </section>
  );
}
