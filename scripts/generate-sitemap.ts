import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
// Import the real data so adding a city/category/trade in site.ts is enough —
// a hand-maintained copy here silently omits new pages from the sitemap.
import { CITIES, CATEGORIES, TRADES } from "../src/data/site";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = "https://www.tpssupply.com";

const BLOG_POSTS = [
  "tracpipe-system-update-2026",
  "same-day-pipe-delivery-morris-county-nj",
  "press-fittings-vs-sweating-propress-megapress-propex",
  "boiler-hydronic-heating-supply-northern-nj",
  "whole-house-water-filtration-morris-county",
  "why-pros-open-7am-tps-supply-counter",
  "top-10-plumbing-tools-pro-2026",
];

const urls = [
  "/", "/about", "/services", "/brands", "/brands/omega-flex", "/categories", "/trade",
  "/credit-application", "/locations", "/blog", "/contact", "/faq", "/install-guides",
  ...BLOG_POSTS.map(s => `/blog/${s}`),
  ...CATEGORIES.map(c => `/categories/${c.slug}`),
  ...TRADES.map(t => `/trade/${t.slug}`),
  ...CITIES.map(c => `/plumbing-supply-${c.slug}-nj`),
];

const today = new Date().toISOString().split("T")[0];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${DOMAIN}${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u === "/" ? "1.0" : u.startsWith("/plumbing-supply-") ? "0.7" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>`;

const out = path.resolve(__dirname, "../public/sitemap.xml");
fs.writeFileSync(out, xml);
console.log("Wrote", out, "with", urls.length, "URLs");
