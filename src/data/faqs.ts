import { SITE, PREMIUM_BRANDS, ROUGH_BRANDS, type City } from "./site";

// Answers are stored as plain text so the same string feeds both the rendered
// page and the FAQPage JSON-LD. Where an answer points at another page, the
// `link` field renders after the paragraph instead of inlining markup.
export interface Faq {
  q: string;
  a: string;
  link?: { to: string; label: string };
}

const ADDRESS = `${SITE.address}, ${SITE.city}, ${SITE.state} ${SITE.zip}`;
const HOURS = "Monday through Friday 7:00 AM to 4:00 PM, Saturday 8:00 AM to 1:00 PM";

// "Moen, Rohl and Toto" — Oxford-comma list for use inside prose answers.
function sentenceList(items: readonly string[]): string {
  if (items.length < 2) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

// Master set for /faq — written against real "People Also Ask" phrasing for
// plumbing supply in Morristown.
export const FAQS: Faq[] = [
  {
    q: "Where can I buy plumbing supplies in Morristown, NJ?",
    a: `TPS Supply has been serving Morris County contractors for 40+ years from ${ADDRESS}. Our wholesale counter opens at 7:00 AM weekdays and 8:00 AM Saturday, so you can pull pipe and fittings before the first job of the day. Walk-ins are welcome, trade accounts are available, and you can call the counter at ${SITE.phone} to have an order staged before you arrive.`,
  },
  {
    q: "What time does TPS Supply open?",
    a: `${HOURS}. We open at 7 because our customers are contractors — you shouldn't have to wait until nine to get pipe for a job that starts at eight. ${SITE.hoursNote}, and we're closed Sunday.`,
  },
  {
    q: "Does TPS Supply deliver plumbing supplies to Morris County?",
    a: "Yes. Order before noon and most orders go out same day — typically on the truck within 90 minutes. Orders placed after the noon cutoff go next day. Our regular delivery routes cover Morristown, Morris Plains, Denville, Madison, Parsippany, Florham Park, Chester, Randolph, Mendham, Boonton, Rockaway, Dover and the surrounding Morris County towns, and we run into Sussex, Warren, Somerset and Essex as well.",
    link: { to: "/locations", label: "See the full service area" },
  },
  {
    q: "Do you have to be a licensed plumber to buy from TPS Supply?",
    a: "No. Homeowners and DIYers can buy at the counter the same as anyone else, and our counter staff will help you match a part or figure out what a repair actually needs. A trade account with Net 30 terms is the piece that requires a licensed contractor or established business, since it involves a credit approval — but an account isn't required to purchase.",
  },
  {
    q: "What brands of plumbing supplies do you carry?",
    a: `On the finish side we stock ${sentenceList(PREMIUM_BRANDS)}. For rough-in and commodity work we carry ${sentenceList(ROUGH_BRANDS)}. Boilers and hydronics run to Weil-McLain and U.S. Boiler. If we don't stock a line, we can usually source it through our distribution the same day or next day.`,
    link: { to: "/brands", label: "Full brand list" },
  },
  {
    q: "Do you sell copper pipe?",
    a: "Yes — Type L, Type M and DWV copper in the common sizes, stocked at the counter in Morristown rather than ordered in from a warehouse. We also carry copper fittings, valves, solder, flux and press fittings. Copper pricing moves with the commodity market, so give the counter a call for a current quote on the sizes and quantities you need.",
    link: { to: "/categories/pipe-supply", label: "More on pipe supply" },
  },
  {
    q: "Can I open a trade account with TPS Supply?",
    a: "Yes. Net 30 terms are available to qualifying contractors, builders, property managers and other trade businesses pending credit approval. The application takes a couple of minutes online, or you can fill one out at the counter. Once you're set up you get contractor pricing, project pricing on larger jobs, and the ability to order by phone and have material staged or delivered.",
    link: { to: "/credit-application", label: "Apply for a trade account" },
  },
  {
    q: "What's the difference between plumbing supply and a home center like Home Depot?",
    a: "Depth of inventory, professional grades, contractor pricing and time. We stock the sizes and specs pros actually specify — not just the fast-moving retail SKUs — and a counter person who knows the difference between a Type L and a Type M run can hand you the right thing in two minutes. Home centers optimize for retail volume. We optimize for getting a contractor back on the job.",
  },
  {
    q: "Do you offer install guides or reference material?",
    a: "Yes. We keep manufacturer install guides, parts diagrams, spec sheets and a standard rough-in reference table in one place for trade pros. If you can't find a spec for a specific model, the counter team has direct access to manufacturer spec libraries and can pull it while you wait.",
    link: { to: "/install-guides", label: "Install guides and rough-in specs" },
  },
  {
    q: "Where is TPS Supply located?",
    a: `${ADDRESS}. We're on Ridgedale Avenue just outside downtown Morristown, with contractor parking and drive-up access to the will-call counter. Our retail showroom, Your Showroom at TPS, is at the same address if you're specifying fixtures for a homeowner. Call ${SITE.phone} if you need directions or want an order pulled before you get here.`,
    link: { to: "/locations", label: "Counter location and hours" },
  },
];

// Geo pages carry a subset with the city substituted, so each city page has
// locally-relevant Q&A without duplicating the whole master set.
export function geoFaqs(city: City): Faq[] {
  const cityName = city.name;
  const distance =
    city.miles === "0"
      ? "right in town"
      : `about ${city.miles} miles`;
  return [
    {
      q: `Do you deliver plumbing supplies to ${cityName}, NJ?`,
      a: `Yes. ${cityName} is on our regular delivery routes. Order before noon and your material typically leaves the counter within 90 minutes for same-day delivery; anything ordered after the noon cutoff goes out next day. If you'd rather not wait on a truck, will-call pickup at the Morristown counter starts at 7:00 AM.`,
    },
    {
      q: `How far is TPS Supply from ${cityName}?`,
      a: `Our counter is at ${ADDRESS} — ${distance} from ${cityName}. ${city.note} That's close enough for a will-call run before the crew starts, and well inside our same-day delivery radius.`,
    },
    {
      q: `Do I need a trade account to buy for a ${cityName} job?`,
      a: "No. Anyone can buy at the counter, homeowners included. A trade account with Net 30 terms is worth setting up if you're buying regularly — it gets you contractor pricing, project pricing on bigger jobs, and phone ordering with material staged or delivered.",
      link: { to: "/credit-application", label: "Apply for a trade account" },
    },
    {
      q: `What pipe do you stock for ${cityName} jobs?`,
      a: "Copper in Type L, Type M and DWV; PEX in the common sizes with the fittings and manifolds to go with it; PVC, CPVC, ABS, cast iron, black iron and brass. Most of it is on the shelf in Morristown rather than ordered in. Pipe pricing moves with the commodity market, so call the counter for a current quote.",
      link: { to: "/categories/pipe-supply", label: "More on pipe supply" },
    },
  ];
}

export function faqPageSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
