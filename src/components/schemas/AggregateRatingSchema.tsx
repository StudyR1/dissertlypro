import { Helmet } from 'react-helmet-async';

interface AggregateRatingSchemaProps {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
  itemName?: string;
  itemType?: 'Organization' | 'Product' | 'Service' | 'LocalBusiness' | 'EducationalOrganization';
}

const AggregateRatingSchema = ({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
  itemName = 'DissertlyPro',
  itemType = 'EducationalOrganization'
}: AggregateRatingSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": itemType,
    "name": itemName,
    "url": "https://dissertlypro.com",
    "image": "https://dissertlypro.com/logo-icon.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": String(ratingValue.toFixed(1)),
      "bestRating": String(bestRating),
      "worstRating": String(worstRating),
      "reviewCount": String(reviewCount),
      "ratingCount": String(reviewCount)
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Default aggregate rating based on testimonials
export const defaultAggregateRating = {
  ratingValue: 4.9,
  reviewCount: 2847,
  bestRating: 5,
  worstRating: 1
};

export default AggregateRatingSchema;
