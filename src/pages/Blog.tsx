import { Link } from "react-router-dom";
import { useState } from "react";
import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";
import { POSTS, type Category } from "../data/posts";

const FILTERS: ("All" | Category)[] = ["All", "Plumbing", "Heating", "Tools", "Water Filtration"];

export default function Blog() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const visible = filter === "All" ? POSTS : POSTS.filter(p => p.category === filter);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "TPS Supply Blog",
    "description": "Trade insights for plumbers and contractors — pipe, fittings, heating, tools, and water filtration.",
    "blogPost": POSTS.map(p => ({
      "@type": "BlogPosting",
      "headline": p.title,
      "datePublished": "2026-04-29",
      "url": `https://tpssupply.com/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <Seo
        title="Blog"
        path="/blog"
        description="TPS Supply blog — pipe, press fittings, hydronic heating, water filtration, and tools for Morris County NJ contractors."
        schema={[localBusinessSchema(), blogSchema]}
      />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">Blog</span>
          <h1 className="h-display text-white mt-3">From the Counter.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Field notes for plumbers and contractors — pipe, press fittings, boilers, water filtration, and the tools that earn truck space. Written by people who've spent decades behind the counter at 108 Ridgedale.
          </p>
        </div>
      </section>

      <section className="container-x py-10 border-b border-neutral-200">
        <div className="flex flex-wrap items-center gap-3">
          <span className="eyebrow mr-2">Filter:</span>
          {FILTERS.map(f => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold border transition rounded-full ${
                filter === f
                  ? "bg-brand-blue text-white border-brand-blue"
                  : "bg-white text-brand-charcoal border-neutral-300 hover:border-brand-blue hover:text-brand-blue"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {visible.map(p => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group flex flex-col border border-neutral-200 hover:border-brand-blue bg-white transition overflow-hidden"
          >
            {/* TODO: swap image URL for real photography when available */}
            <div className="aspect-[16/10] overflow-hidden bg-brand-cream">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest mb-3">
                <span className="px-2 py-1 bg-brand-cream text-brand-blue font-semibold">{p.category}</span>
                <span className="text-neutral-500">{p.date}</span>
              </div>
              <h2 className="font-serif text-xl font-bold text-brand-blue-dark leading-tight">{p.title}</h2>
              <p className="mt-3 text-brand-charcoal text-sm leading-relaxed flex-1">{p.excerpt}</p>
              <span className="mt-5 inline-block text-xs uppercase tracking-widest font-semibold text-brand-blue group-hover:text-brand-accent">
                Read post →
              </span>
            </div>
          </Link>
        ))}
        {visible.length === 0 && (
          <p className="text-brand-charcoal col-span-full">No posts in this category yet — check back soon.</p>
        )}
      </section>

      <CTABand />
    </>
  );
}
