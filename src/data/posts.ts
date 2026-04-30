export type Category = "Plumbing" | "Heating" | "Tools" | "Water Filtration";

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: Category;
  image: string;
}

// Hero images — Unsplash stock photos. Swap with real product/jobsite photography later.
export const POSTS: PostMeta[] = [
  {
    slug: "same-day-pipe-delivery-morris-county-nj",
    title: "Same-Day Pipe Delivery in Morris County NJ — How TPS Supply Keeps Contractors Moving",
    excerpt: "Inside the 90-minute window: what's stocked on the racks, who calls it in, and why a 7am open changes the whole day on a job.",
    date: "April 29, 2026",
    category: "Plumbing",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "press-fittings-vs-sweating-propress-megapress-propex",
    title: "Press Fittings vs Sweating: When to Use Pro Press, Mega Press, and ProPex on the Job",
    excerpt: "Field guide to copper, steel, and PEX press systems — labor cost, code-approved uses, where soldering still wins, and which jaws actually live in our counter trade-in box.",
    date: "April 29, 2026",
    category: "Plumbing",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "boiler-hydronic-heating-supply-northern-nj",
    title: "Boiler & Hydronic Heating Supply for Northern NJ Contractors",
    excerpt: "Burnham, Weil-McLain, Slant/Fin and the parts you actually need at 6:45 AM in February. Cast-iron vs cast-aluminum, common replacement headaches, and what we keep on the floor.",
    date: "April 29, 2026",
    category: "Heating",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "whole-house-water-filtration-morris-county",
    title: "Whole-House Water Filtration Systems — What Morris County Plumbers Need to Know",
    excerpt: "Hard water, well systems, and PFAS — what to spec for a residential install, what changes for commercial, and which replacement cartridges we stock for the long-haul service call.",
    date: "April 29, 2026",
    category: "Water Filtration",
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "why-pros-open-7am-tps-supply-counter",
    title: "Why Pros in Morris County Open at 7 AM at TPS Supply Counter",
    excerpt: "Coffee on, doors open, will-call ready. The unglamorous reason your day actually starts well — and what it looks like at the counter most weekday mornings.",
    date: "April 29, 2026",
    category: "Plumbing",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "top-10-plumbing-tools-pro-2026",
    title: "Top 10 Plumbing Tools Every Pro Should Have in 2026",
    excerpt: "Milwaukee, Ridgid, Klein, Reed and the few others that earn the truck space. Press tools, threaders, drain machines and the small stuff that keeps a service van running.",
    date: "April 29, 2026",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1600&q=80",
  },
];
