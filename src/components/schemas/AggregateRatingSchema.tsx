import { Helmet } from 'react-helmet-async';

interface AggregateRatingSchemaProps {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
  itemName?: string;
  itemType?: 'Organization' | 'Product' | 'Service' | 'LocalBusiness';
}

const AggregateRatingSchema = ({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
  itemName = 'DissertlyPro',
  itemType = 'Organization'
}: AggregateRatingSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": itemType,
    "name": itemName,
    "url": "https://dissertlypro.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toFixed(1),
      "bestRating": bestRating,
      "worstRating": worstRating,
      "reviewCount": reviewCount,
      "ratingCount": reviewCount
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
  reviewCount: 15000,
  bestRating: 5,
  worstRating: 1
};

export default AggregateRatingSchema;
