import { Helmet } from "react-helmet-async";

interface SoftwareApplicationSchemaProps {
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
  };
  featureList?: string[];
  datePublished?: string;
  dateModified?: string;
}

const SoftwareApplicationSchema = ({
  name,
  description,
  url,
  applicationCategory = "EducationalApplication",
  operatingSystem = "Web Browser",
  offers = { price: "0", priceCurrency: "USD" },
  aggregateRating,
  featureList = [],
  datePublished = "2026-01-15",
  dateModified = "2026-02-09",
}: SoftwareApplicationSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: url.startsWith("http") ? url : `https://dissertlypro.com${url}`,
    applicationCategory,
    operatingSystem,
    offers: {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
    },
    provider: {
      "@type": "Organization",
      name: "DissertlyPro",
      url: "https://dissertlypro.com",
    },
    datePublished,
    dateModified,
  };

  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.ratingCount,
      bestRating: "5",
      worstRating: "1",
    };
  }

  if (featureList.length > 0) {
    schema.featureList = featureList;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SoftwareApplicationSchema;
