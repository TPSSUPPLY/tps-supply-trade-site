import { SITE } from "./site";

// Kept free of React imports so both the client pages and the server's head
// injection (server/ssr-meta.ts) can build the same schema from one definition.
export function localBusinessSchema(extra: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PlumbingSupplyStore", "HardwareStore"],
    "name": "TPS Supply",
    "image": `https://${SITE.domain}/og-image.jpg`,
    "telephone": SITE.phone,
    "email": SITE.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE.address,
      "addressLocality": SITE.city,
      "addressRegion": SITE.state,
      "postalCode": SITE.zip,
      "addressCountry": "US",
    },
    "geo": { "@type": "GeoCoordinates", "latitude": SITE.geo.lat, "longitude": SITE.geo.lng },
    "url": `https://${SITE.domain}`,
    "priceRange": "$$",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "16:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "13:00" },
    ],
    ...extra,
  };
}
