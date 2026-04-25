import { Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { CATEGORIES } from "../data/site";

export default function Categories() {
  return (
    <>
      <Seo title="Categories" path="/categories" schema={localBusinessSchema()}
        description="Rough plumbing, finish plumbing, water heaters, commercial, tools and our deep pipe inventory." />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">What We Stock</span>
          <h1 className="h-display text-white mt-3">Categories</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">Six categories, deep inventory, real humans who know what's on the shelf.</p>
        </div>
      </section>
      <section className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map(c => (
          <Link key={c.slug} to={`/categories/${c.slug}`}
            className={`group p-8 border transition ${c.featured ? "bg-brand-blue text-white border-brand-blue" : "bg-white border-neutral-200 hover:border-brand-blue"}`}>
            {c.featured && <span className="text-xs uppercase tracking-widest bg-brand-accent text-white px-2 py-1">Emphasis</span>}
            <h3 className={`font-serif text-2xl font-bold mt-3 ${c.featured ? "text-white" : "text-brand-blue-dark"}`}>{c.title}</h3>
            <p className={`mt-3 leading-relaxed ${c.featured ? "text-white/85" : "text-brand-charcoal"}`}>{c.desc}</p>
            <span className={`mt-6 inline-block text-xs uppercase tracking-widest font-semibold ${c.featured ? "text-brand-accent" : "text-brand-blue"}`}>Explore →</span>
          </Link>
        ))}
      </section>
      <CTABand />
    </>
  );
}
