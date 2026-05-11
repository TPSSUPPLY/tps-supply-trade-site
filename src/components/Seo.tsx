import { Helmet } from "react-helmet-async";
import { SITE } from "../data/site";

interface Props {
  title: string;
  description?: string;
  path: string;
  schema?: object | object[];
}

export default function Seo({ title, description, path, schema }: Props) {
  const fullTitle = `${title} | TPS Supply`;
  const desc = description || "Morris County's plumbing supply counter. 90-minute same-day delivery. 40+ years family-owned.";
  const url = `https://${SITE.domain}${path}`;
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TPS Supply" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}

export function localBusinessSchema(extra: Partial<Record<string, any>> = {}) {
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
