import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import { SITE } from "../data/site";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/categories", label: "Categories" },
  { to: "/brands", label: "Brands" },
  { to: "/trade", label: "Trade" },
  { to: "/locations", label: "Locations" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="bg-brand-blue text-white text-xs">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">📍 {SITE.address}, {SITE.city}, {SITE.state}</span>
            <a href={`tel:${SITE.phoneRaw}`} className="font-semibold hover:underline">📞 {SITE.phone}</a>
          </div>
          <span className="hidden md:inline">Open Mon–Fri 7am · Sat 8am</span>
        </div>
      </div>
      {/* Main bar */}
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="text-brand-blue"><Logo /></Link>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to}
              className={({isActive}) => `text-sm font-semibold uppercase tracking-wider hover:text-brand-blue ${isActive ? "text-brand-blue" : "text-brand-charcoal"}`}>
              {n.label}
            </NavLink>
          ))}
          <Link to="/credit-application" className="btn-primary !py-2 !px-4 !text-xs">Apply for Account</Link>
        </nav>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6"/> : <path d="M4 7h16M4 12h16M4 17h16"/>}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t bg-white">
          <div className="container-x flex flex-col py-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                className="py-3 border-b text-brand-charcoal font-semibold uppercase text-sm tracking-wider">{n.label}</Link>
            ))}
            <Link to="/credit-application" onClick={() => setOpen(false)} className="btn-primary mt-4">Apply for Trade Account</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
