// Server-side <head> injection for the SPA shell.
//
// The app is client-rendered, so <Seo> (react-helmet-async) only sets the title,
// description and JSON-LD after JS executes. Anything reading raw HTML — older
// search bots, SEO audit tools, link unfurlers — saw the static index.html title
// ("...| Morristown, NJ") on every route, including all 17 geo city pages.
//
// This rewrites the head of the shell per route before sending it. Both route
// families here derive their metadata from the same data modules the React pages
// use, so they can't drift as cities are added. Titles are built with the same
// `${title} | TPS Supply` suffix as Seo.tsx so client hydration is a no-op.
//
// Not a rendering pipeline — the body is still the empty #root div and React
// takes over on load. Static pages (/about, /services, ...) still fall back to
// the default shell title; adding them would mean hand-copying titles out of
// each component, which invites drift. See ssrMetaForPath's return of null.

import { CITIES, SITE } from "../src/data/site";
import { FAQS, geoFaqs, faqPageSchema } from "../src/data/faqs";
import { localBusinessSchema } from "../src/data/schema";

const DOMAIN = `https://${SITE.domain}`;

interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  schemas: object[];
  /**
   * Drop the shell's site-wide FAQPage block. Set on every route that ships its
   * own FAQPage, so a URL never carries two competing FAQPage graphs — the raw
   * HTML then matches what Helmet renders after hydration.
   */
  replaceFaqSchema?: boolean;
}

const routes = new Map<string, RouteMeta>();

for (const city of CITIES) {
  const path = `/plumbing-supply-${city.slug}-nj`;
  routes.set(path, {
    title: `Plumbing Supply in ${city.name}, NJ | TPS Supply`,
    description: `Wholesale plumbing supply serving ${city.name}, NJ. 90-minute same-day delivery, large pipe inventory, premium and commodity brands.`,
    canonical: `${DOMAIN}${path}`,
    schemas: [
      localBusinessSchema({
        areaServed: { "@type": "City", name: `${city.name}, NJ` },
        name: `TPS Supply — Plumbing Supply for ${city.name}, NJ`,
      }),
      faqPageSchema(geoFaqs(city)),
    ],
    replaceFaqSchema: true,
  });
}

routes.set("/faq", {
  title: "Plumbing Supply FAQ — Morristown NJ | TPS Supply",
  description:
    "Answers to common questions about plumbing supplies in Morristown NJ. Delivery, hours, brands, trade accounts, and how to buy.",
  canonical: `${DOMAIN}/faq`,
  schemas: [faqPageSchema(FAQS), localBusinessSchema()],
  replaceFaqSchema: true,
});

export function ssrMetaForPath(pathname: string): RouteMeta | null {
  // Tolerate a trailing slash; anything else falls through to the default shell.
  const key = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return routes.get(key) ?? null;
}

function escapeAttr(s: string) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// "<" is escaped so a value can never terminate the inline <script> element.
function jsonLd(schema: object) {
  return `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`;
}

const FAQ_SCHEMA_BLOCK =
  /\s*<!-- FAQPage schema -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/;

/**
 * Rewrite the shell's head for `pathname`. Returns `html` unchanged for routes
 * with no entry, so an unknown path can never produce a broken document.
 */
export function applySsrMeta(html: string, pathname: string): string {
  const meta = ssrMetaForPath(pathname);
  if (!meta) return html;

  let out = html;

  out = out.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeAttr(meta.title)}</title>`);
  out = out.replace(
    /<meta name="description" content="[\s\S]*?"\s*\/?>/,
    () => `<meta name="description" content="${escapeAttr(meta.description)}" />`,
  );

  if (meta.replaceFaqSchema) out = out.replace(FAQ_SCHEMA_BLOCK, "");

  const head = [
    `<link rel="canonical" href="${escapeAttr(meta.canonical)}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:url" content="${escapeAttr(meta.canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="TPS Supply" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    ...meta.schemas.map(jsonLd),
  ].join("\n    ");

  return out.replace("</head>", `  ${head}\n  </head>`);
}
