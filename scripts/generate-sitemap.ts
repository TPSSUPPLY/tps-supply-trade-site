import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = "https://www.tpssupply.com";

const CATEGORIES = ["rough-plumbing","finish-plumbing","water-heaters","commercial-plumbing","tools-accessories","pipe-supply"];
const TRADES = ["plumbers","builders-contractors","property-managers","masons","restaurants-bars"];
const CITIES = ["morristown","denville","madison","chatham","mendham","chester","boonton","randolph","parsippany","florham-park","dover","rockaway","wharton","stanhope","mountain-lakes","bernardsville"];
const BLOG_POSTS = [
  "same-day-pipe-delivery-morris-county-nj",
  "press-fittings-vs-sweating-propress-megapress-propex",
  "boiler-hydronic-heating-supply-northern-nj",
  "whole-house-water-filtration-morris-county",
  "why-pros-open-7am-tps-supply-counter",
  "top-10-plumbing-tools-pro-2026",
];

const urls = [
  "/", "/about", "/services", "/brands", "/categories", "/trade",
  "/credit-application", "/locations", "/blog", "/contact",
  ...BLOG_POSTS.map(s => `/blog/${s}`),
  ...CATEGORIES.map(s => `/categories/${s}`),
  ...TRADES.map(s => `/trade/${s}`),
  ...CITIES.map(s => `/plumbing-supply-${s}-nj`),
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
