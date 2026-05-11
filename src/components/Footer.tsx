import { Link } from "react-router-dom";
import Logo from "./Logo";
import { SITE, CATEGORIES, TRADES } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white mt-20">
      <div className="container-x py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="text-white"><Logo className="h-12 w-auto" /></div>
          <p className="mt-4 text-sm text-white/80">{SITE.tagline}. Family-owned and trade-focused since 1983.</p>
          <a href={`tel:${SITE.phoneRaw}`} className="mt-4 inline-block font-bold text-lg">{SITE.phone}</a>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Categories</h4>
          <ul className="space-y-2 text-sm text-white/85">
            {CATEGORIES.map(c => <li key={c.slug}><Link to={`/categories/${c.slug}`} className="hover:text-brand-accent">{c.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Trade</h4>
          <ul className="space-y-2 text-sm text-white/85">
            {TRADES.map(t => <li key={t.slug}><Link to={`/trade/${t.slug}`} className="hover:text-brand-accent">{t.title}</Link></li>)}
            <li><Link to="/credit-application" className="hover:text-brand-accent">Credit Application</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Counter</h4>
          <address className="not-italic text-sm text-white/85 leading-relaxed">
            {SITE.address}<br/>{SITE.city}, {SITE.state} {SITE.zip}
          </address>
          <ul className="mt-4 space-y-1 text-sm text-white/85">
            {SITE.hours.map(h => <li key={h.d}><span className="font-semibold">{h.d}:</span> {h.h}</li>)}
          </ul>
          <p className="text-xs italic text-brand-accent mt-2">{SITE.hoursNote}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/60 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} TPS Supply. All rights reserved.</span>
          <span>Sister business to <a href="https://yourshowroomattps.com" className="underline hover:text-white">Your Showroom at TPS</a></span>
        </div>
      </div>
    </footer>
  );
}
