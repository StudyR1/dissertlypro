import { Helmet } from "react-helmet-async";

interface ToolSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    ratingValue: string;
    ratingCount: string;
    bestRating?: string;
    worstRating?: string;
  };
  featureList?: string[];
  screenshot?: string;
  datePublished?: string;
  dateModified?: string;
}

const ToolSchema = ({
  name,
  description,
  url,
  applicationCategory = "EducationalApplication",
  operatingSystem = "Web Browser",
  offers = { price: "0", priceCurrency: "USD" },
  aggregateRating = {
    ratingValue: "4.9",
    ratingCount: "847",
    bestRating: "5",
    worstRating: "1"
  },
  featureList = [],
  screenshot,
  datePublished = "2026-01-15",
  dateModified = "2026-01-17"
}: ToolSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "offers": {
      "@type": "Offer",
      "price": offers.price,
      "priceCurrency": offers.priceCurrency
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "ratingCount": aggregateRating.ratingCount,
      "bestRating": aggregateRating.bestRating || "5",
      "worstRating": aggregateRating.worstRating || "1"
    },
    "provider": {
      "@type": "Organization",
      "name": "DissertlyPro",
      "url": "https://dissertlypro.com"
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    ...(featureList.length > 0 && { "featureList": featureList }),
    ...(screenshot && { "screenshot": screenshot })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ToolSchema;
