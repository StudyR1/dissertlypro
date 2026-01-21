import { Helmet } from "react-helmet-async";

interface LearningResource {
  name: string;
  description: string;
  url: string;
  educationalLevel?: string;
  learningResourceType?: string;
  timeRequired?: string;
  keywords?: string[];
}

interface LearningResourceSchemaProps {
  name: string;
  description: string;
  url: string;
  educationalLevel: string;
  audience: string;
  resources: LearningResource[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

const LearningResourceSchema = ({
  name,
  description,
  url,
  educationalLevel,
  audience,
  resources,
  aggregateRating
}: LearningResourceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url: `https://dissertlypro.com${url}`,
    numberOfItems: resources.length,
    itemListElement: resources.map((resource, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "LearningResource",
        name: resource.name,
        description: resource.description,
        url: `https://dissertlypro.com${resource.url}`,
        educationalLevel: resource.educationalLevel || educationalLevel,
        learningResourceType: resource.learningResourceType || "Guide",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: audience
        },
        ...(resource.timeRequired && { timeRequired: resource.timeRequired }),
        ...(resource.keywords && { keywords: resource.keywords.join(", ") }),
        provider: {
          "@type": "Organization",
          name: "DissertlyPro",
          url: "https://dissertlypro.com"
        },
        isAccessibleForFree: true,
        inLanguage: "en"
      }
    })),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        bestRating: 5,
        worstRating: 1,
        reviewCount: aggregateRating.reviewCount
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default LearningResourceSchema;
