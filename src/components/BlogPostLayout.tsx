import { Link } from "react-router-dom";
import Seo, { localBusinessSchema } from "./Seo";
import CTABand from "./CTABand";
import { SITE } from "../data/site";

interface Props {
  title: string;
  slug: string;
  category: string;
  date: string;
  description: string;
  heroImage: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({ title, slug, category, date, description, heroImage, children }: Props) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "datePublished": "2026-04-29",
    "dateModified": "2026-04-29",
    "author": { "@type": "Organization", "name": "TPS Supply Team" },
    "publisher": { "@type": "Organization", "name": "TPS Supply", "logo": { "@type": "ImageObject", "url": `https://${SITE.domain}/favicon.svg` } },
    "image": heroImage,
    "description": description,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://${SITE.domain}/blog/${slug}` },
  };
  return (
    <>
      <Seo title={title} path={`/blog/${slug}`} description={description} schema={[localBusinessSchema(), articleSchema]} />
      <section className="bg-brand-blue text-white">
        <div className="container-x py-16">
          <Link to="/blog" className="text-xs uppercase tracking-widest text-white/70 hover:text-brand-accent">← All Posts</Link>
          <span className="eyebrow text-brand-accent block mt-6">{category}</span>
          <h1 className="h-display text-white mt-3 max-w-3xl">{title}</h1>
          <p className="mt-4 text-white/80 text-sm uppercase tracking-widest">{date} · TPS Supply Team</p>
        </div>
      </section>
      {/* TODO: swap heroImage URL for a real photographed shot when available */}
      <div className="container-x mt-10">
        <div className="aspect-[16/7] w-full overflow-hidden bg-brand-cream">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      <article className="container-x py-12 max-w-3xl prose-trade">
        {children}
        <div className="mt-12 p-6 border-l-4 border-brand-accent bg-brand-cream">
          <h3 className="font-serif text-xl font-bold text-brand-blue-dark mb-2">Need this delivered today?</h3>
          <p className="text-brand-charcoal mb-4">
            Call our counter at <a href={`tel:${SITE.phoneRaw}`} className="text-brand-blue font-semibold underline">{SITE.phone}</a> or visit us at {SITE.address}, {SITE.city} {SITE.state} {SITE.zip}. Mon–Fri 7am–4:30pm, Sat 8am–1pm.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">Call the counter</a>
            <Link to="/blog" className="btn-outline">← Back to blog</Link>
          </div>
        </div>
      </article>
      <CTABand />
    </>
  );
}
