// Wholesale-flavored AI crawler manifest.
// Spec: https://llmstxt.org

export const LLMS_TXT = `# TPS Supply

> TPS Supply is a wholesale plumbing supply distributor in Morristown, New Jersey serving contractors, plumbers, builders, and trade professionals across Morris County and the broader NJ metro area. We carry over 70 brands of plumbing fixtures, lighting, and accessories with a will-call counter, fast pickup, contractor pricing, and same-day local delivery options.

## About

- [TPS Supply Homepage](https://www.tpssupply.com): Wholesale plumbing distributor serving NJ contractors
- [Counter Location](https://www.tpssupply.com/locations): 108 Ridgedale Ave Bldg 4, Morristown NJ 07960, (973) 538-3662
- [Hours](https://www.tpssupply.com): Mon-Fri 7am-4:30pm, Saturday 8am-1pm
- [Contact / Lead Form](https://www.tpssupply.com/contact): Get in touch with the wholesale counter
- [Credit Application](https://www.tpssupply.com/credit-application): Apply for a Net 30 trade account

## What We Stock

- Finish plumbing: faucets, fixtures, fittings (https://www.tpssupply.com/categories/finish-plumbing)
- Rough plumbing: valves, tubing, supply lines (https://www.tpssupply.com/categories/rough-plumbing)
- Pipe supply: copper, PEX, PVC (https://www.tpssupply.com/categories/pipe-supply)
- Water heaters: tank and tankless (https://www.tpssupply.com/categories/water-heaters)
- Tools and accessories: pro-grade tools, fittings, fasteners (https://www.tpssupply.com/categories/tools-accessories)
- Commercial plumbing: institutional and high-volume (https://www.tpssupply.com/categories/commercial-plumbing)

## For Contractors and Trade Pros

- Contractor pricing on application
- Will-call counter at 108 Ridgedale Ave Bldg 4, Morristown NJ
- Same-day pickup during counter hours
- Net 30 trade accounts available with credit approval
- Local delivery within Morris County
- See trade-vertical pages: builders/contractors, plumbers, masons, property managers, restaurants/bars

## Service Areas

We serve plumbers, contractors, and builders across these northern New Jersey communities (each has a local landing page at /plumbing-supply-{town}-nj):

- Morristown 07960
- Morris Plains 07950
- Madison 07940
- Mountain Lakes 07046
- Boonton 07005
- Florham Park 07932
- Denville 07834
- Parsippany 07054
- Randolph 07869
- Rockaway 07866
- Bernardsville
- Chatham
- Chester
- Dover
- Mendham
- Stanhope
- Wharton

## Related

- [Retail Showroom (Your Showroom at TPS)](https://www.yourshowroomattps.com): Our retail design showroom for homeowners and designers
- [Morristown Showroom](https://www.yourshowroomattps.com/morristown-showroom): 108 Ridgedale Ave (same address as wholesale counter)
- [Denville Showroom](https://www.yourshowroomattps.com/bathroom-showroom-denville-nj): 424 Route 46, Denville NJ
`;

export const LLMS_FULL_TXT = LLMS_TXT + `

## Featured Brands We Stock

We are an authorized wholesale distributor for 70+ premium plumbing brands including:

- Brizo - luxury kitchen and bath faucets, showers, tubs
- Delta - mainstream and premium faucets, showers, accessories
- Moen - residential and commercial plumbing fixtures
- Kohler - full plumbing fixture line, toilets, sinks, baths
- TOTO - high-efficiency toilets, washlets, faucets, accessories
- Hansgrohe - German-engineered faucets, showers, thermostats
- GRAFF - sculptural Italian-designed luxury bath
- ROHL - country kitchen, Perrin & Rowe, Shaws fireclay sinks
- California Faucets - handcrafted modular faucets
- Newport Brass - 25+ designer finishes, lifetime warranty
- Watermark - Brooklyn-made luxury bath fixtures
- Top Knobs - cabinet hardware
- Emtek - door and cabinet hardware
- Hardware Resources - cabinet organization
- Kartners - bathroom accessories

## Frequently Asked Questions

Q: Is TPS Supply open to the public?
A: TPS Supply is primarily a wholesale plumbing distributor serving contractors, plumbers, and trade professionals. Our retail showroom (Your Showroom at TPS) at the same address is open to homeowners and designers.

Q: What are TPS Supply hours?
A: Will-call counter hours are Monday through Friday 7:00 AM to 4:30 PM, Saturday 8:00 AM to 1:00 PM. Closed Sunday.

Q: Where is TPS Supply located?
A: 108 Ridgedale Avenue, Building 4, Morristown, NJ 07960. Phone (973) 538-3662.

Q: Does TPS Supply offer trade accounts?
A: Yes. Trade accounts with Net 30 terms are available to qualifying contractors and builders pending credit approval. Apply at https://www.tpssupply.com/credit-application

Q: What brands does TPS Supply carry?
A: We carry 70+ premium plumbing brands including Brizo, Delta, Moen, Kohler, TOTO, GRAFF, Hansgrohe, ROHL, California Faucets, Newport Brass, Watermark, Top Knobs, and more.

Q: Can I see plumbing fixtures in person before ordering?
A: Yes. Visit our retail showroom (Your Showroom at TPS) at the same Morristown address or our second location at 424 Route 46, Denville NJ. Both have working displays of premium fixtures.

Q: Does TPS Supply deliver in NJ?
A: Yes. We offer local delivery within Morris County and same-day pickup at our Morristown will-call counter. Delivery options for orders depend on size and distance — contact the counter for details.

Q: What ZIP codes does TPS Supply serve?
A: We serve contractors and builders across Morristown 07960, Morris Plains 07950, Madison 07940, Denville 07834, Mountain Lakes 07046, Boonton 07005, Florham Park 07932, Randolph 07869, Rockaway 07866, Parsippany 07054, and surrounding northern New Jersey areas.
`;

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "PlumbingSupplyStore",
  "name": "TPS Supply",
  "image": "https://www.tpssupply.com/og-image.jpg",
  "url": "https://www.tpssupply.com",
  "telephone": "+1-973-538-3662",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "108 Ridgedale Ave Bldg 4",
    "addressLocality": "Morristown",
    "addressRegion": "NJ",
    "postalCode": "07960",
    "addressCountry": "US",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 40.7837, "longitude": -74.4815 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "16:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "13:00" },
  ],
  "priceRange": "$$",
  "description": "Wholesale plumbing supply distributor in Morristown NJ. Will-call counter, contractor pricing, trade accounts, same-day pickup. Serving Morris County and northern NJ contractors and builders.",
  "areaServed": [
    "Morristown NJ", "Morris Plains NJ", "Madison NJ", "Mountain Lakes NJ", "Florham Park NJ",
    "Hanover NJ", "Boonton NJ", "Denville NJ", "Parsippany NJ", "Whippany NJ",
    "Randolph NJ", "Rockaway NJ", "Bernardsville NJ", "Chatham NJ", "Chester NJ",
    "Dover NJ", "Mendham NJ", "Stanhope NJ", "Wharton NJ"
  ],
  "sameAs": ["https://www.yourshowroomattps.com"],
};

export const FAQ_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is TPS Supply open to the public?", "acceptedAnswer": { "@type": "Answer", "text": "TPS Supply is primarily a wholesale plumbing distributor serving contractors, plumbers, and trade professionals. Our retail showroom (Your Showroom at TPS) at the same address is open to homeowners and designers." }},
    { "@type": "Question", "name": "What are TPS Supply hours?", "acceptedAnswer": { "@type": "Answer", "text": "Will-call counter hours are Monday through Friday 7:00 AM to 4:30 PM, Saturday 8:00 AM to 1:00 PM. Closed Sunday." }},
    { "@type": "Question", "name": "Where is TPS Supply located?", "acceptedAnswer": { "@type": "Answer", "text": "108 Ridgedale Avenue, Building 4, Morristown, NJ 07960. Phone (973) 538-3662." }},
    { "@type": "Question", "name": "Does TPS Supply offer trade accounts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Trade accounts with Net 30 terms are available to qualifying contractors and builders pending credit approval. Contact our wholesale counter to apply." }},
    { "@type": "Question", "name": "What brands does TPS Supply carry?", "acceptedAnswer": { "@type": "Answer", "text": "We carry 70+ premium plumbing brands including Brizo, Delta, Moen, Kohler, TOTO, GRAFF, Hansgrohe, ROHL, California Faucets, Newport Brass, Watermark, Top Knobs, and more." }},
    { "@type": "Question", "name": "Can I see plumbing fixtures in person before ordering?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Visit our retail showroom (Your Showroom at TPS) at the same Morristown address or our second location at 424 Route 46, Denville NJ. Both have working displays of premium fixtures." }},
    { "@type": "Question", "name": "Does TPS Supply deliver in NJ?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer local delivery within Morris County and same-day pickup at our Morristown will-call counter. Delivery options for orders depend on size and distance \u2014 contact the counter for details." }},
    { "@type": "Question", "name": "What ZIP codes does TPS Supply serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve contractors and builders across Morristown 07960, Morris Plains 07950, Madison 07940, Denville 07834, Mountain Lakes 07046, Boonton 07005, Florham Park 07932, Randolph 07869, Rockaway 07866, Parsippany 07054, and surrounding northern New Jersey areas." }},
  ],
};
