export const SITE = {
  name: "TPS Supply",
  tagline: "Morris County's Plumbing Supply Counter Since 1983",
  yearsInBusiness: "40+",
  phone: "973-538-3662",
  phoneRaw: "+19735383662",
  email: "anthony@tpssupply.com",
  address: "108 Ridgedale Avenue, Bldg 4",
  city: "Morristown",
  state: "NJ",
  zip: "07960",
  hours: [
    { d: "Monday – Friday", h: "7:00 AM – 4:00 PM" },
    { d: "Saturday", h: "8:00 AM – 1:00 PM" },
    { d: "Sunday", h: "Closed" },
  ],
  hoursNote: "Closed Saturdays Memorial Day – Labor Day",
  domain: "www.tpssupply.com",
  geo: { lat: 40.798, lng: -74.4774 },
};

export const PREMIUM_BRANDS = [
  "Moen", "Rohl", "Toto", "Gerber", "Brizo", "Delta", "Kohler",
];
export const ROUGH_BRANDS = [
  "Watts", "Sharkbite", "Viega", "Charlotte Pipe", "Apollo", "Nibco", "Wirsbo", "Omega Flex",
];

export interface City {
  slug: string;
  name: string;
  /** Driving distance from the Morristown counter; "0" means the counter is in town. */
  miles: string;
  note: string;
}

export const CITIES: City[] = [
  { slug: "morristown", name: "Morristown", miles: "0", note: "Counter is right in town." },
  { slug: "morris-plains", name: "Morris Plains", miles: "3", note: "Just north up Speedwell Ave." },
  { slug: "denville", name: "Denville", miles: "6", note: "Quick run up Route 10." },
  { slug: "madison", name: "Madison", miles: "5", note: "Easy hop down Madison Ave." },
  { slug: "chatham", name: "Chatham", miles: "7", note: "Short drive east." },
  { slug: "mendham", name: "Mendham", miles: "5", note: "West on Route 24." },
  { slug: "chester", name: "Chester", miles: "11", note: "Quick run on Route 24." },
  { slug: "boonton", name: "Boonton", miles: "9", note: "Quick run up 287." },
  { slug: "randolph", name: "Randolph", miles: "6", note: "Just up the road." },
  { slug: "parsippany", name: "Parsippany", miles: "7", note: "Easy from 287/80." },
  { slug: "florham-park", name: "Florham Park", miles: "5", note: "Right next door." },
  { slug: "dover", name: "Dover", miles: "11", note: "Straight shot Route 10." },
  { slug: "rockaway", name: "Rockaway", miles: "10", note: "Up 80 west." },
  { slug: "wharton", name: "Wharton", miles: "12", note: "Off 80 west." },
  { slug: "stanhope", name: "Stanhope", miles: "17", note: "West on 80." },
  { slug: "mountain-lakes", name: "Mountain Lakes", miles: "9", note: "Up 287 north." },
  { slug: "bernardsville", name: "Bernardsville", miles: "10", note: "South on 287." },
];

export const CATEGORIES = [
  { slug: "rough-plumbing", title: "Rough Plumbing",
    desc: "Pipe, fittings, valves, hangers and supports for new construction and renovations." },
  { slug: "finish-plumbing", title: "Finish Plumbing",
    desc: "Faucets, trim, toilets and accessories from premium and commodity brands." },
  { slug: "water-heaters", title: "Water Heaters",
    desc: "Tank, tankless, indirect, and replacement parts — gas and electric." },
  { slug: "commercial-plumbing", title: "Commercial Plumbing",
    desc: "Floor drains, grease traps, pre-rinse units, backflow and commercial fittings." },
  { slug: "tools-accessories", title: "Tools & Accessories",
    desc: "Press tools, threaders, torches, solder, flux, sealants and consumables." },
  { slug: "pipe-supply", title: "Pipe Supply", featured: true,
    desc: "Copper, PEX, PVC, CPVC, ABS, cast iron, black iron, brass, stainless. Most in stock." },
];

export const TRADES = [
  { slug: "plumbers", title: "Plumbers" },
  { slug: "builders-contractors", title: "Builders & Contractors" },
  { slug: "property-managers", title: "Property Managers" },
  { slug: "masons", title: "Masons" },
  { slug: "restaurants-bars", title: "Restaurants & Bars" },
];
