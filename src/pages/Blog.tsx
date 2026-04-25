import { Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "../components/Seo";
import CTABand from "../components/CTABand";

const POSTS = [
  { slug: "welcome", title: "Welcome to the TPS Supply Blog", date: "April 2026",
    excerpt: "Notes from the counter — code updates, product spotlights, and the small stuff plumbers want to know." },
];

export default function Blog() {
  return (
    <>
      <Seo title="Blog" path="/blog" schema={localBusinessSchema()}
        description="Notes from the TPS Supply counter — code updates, new products, and trade insights." />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-20">
          <span className="eyebrow text-brand-accent">Blog</span>
          <h1 className="h-display text-white mt-3">From the Counter.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">Code updates, product spotlights and notes that matter to the working plumber.</p>
        </div>
      </section>
      <section className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS.map(p => (
          <Link key={p.slug} to={`/blog/${p.slug}`}
            className="group p-7 border border-neutral-200 hover:border-brand-blue bg-white transition">
            <div className="text-xs uppercase tracking-widest text-brand-accent">{p.date}</div>
            <h2 className="font-serif text-xl font-bold text-brand-blue-dark mt-2">{p.title}</h2>
            <p className="mt-3 text-brand-charcoal text-sm leading-relaxed">{p.excerpt}</p>
            <span className="mt-5 inline-block text-xs uppercase tracking-widest font-semibold text-brand-blue group-hover:text-brand-accent">Read →</span>
          </Link>
        ))}
      </section>
      <CTABand />
    </>
  );
}

export function BlogPost() {
  return (
    <>
      <Seo title="Welcome to the TPS Supply Blog" path="/blog/welcome" schema={localBusinessSchema()} />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-16">
          <Link to="/blog" className="text-xs uppercase tracking-widest text-white/70 hover:text-brand-accent">← All Posts</Link>
          <h1 className="h-display text-white mt-3 max-w-3xl">Welcome to the TPS Supply Blog</h1>
          <p className="mt-4 text-white/80">April 2026</p>
        </div>
      </section>
      <article className="container-x py-16 max-w-3xl prose-trade">
        <p>Welcome to the new TPS Supply blog. We'll use this space for notes from the counter — what's new on the shelf, what's changing in the NJ plumbing code, what we're shipping out the door this season.</p>
        <p>Expect short, useful posts. No fluff. If you'd like us to cover something — a product comparison, a code question, anything that would actually help your day — call the counter or drop a note through our contact page.</p>
        <p>Thanks for working with us. More soon.</p>
      </article>
      <CTABand />
    </>
  );
}
