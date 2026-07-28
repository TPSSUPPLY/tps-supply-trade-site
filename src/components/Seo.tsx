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

// Re-exported from ../data/schema so existing `import Seo, { localBusinessSchema }`
// call sites keep working; the definition lives outside this file so the Express
// server can import it without pulling in React.
export { localBusinessSchema } from "../data/schema";
