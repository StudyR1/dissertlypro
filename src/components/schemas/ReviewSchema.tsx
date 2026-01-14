import { Helmet } from 'react-helmet-async';

interface Review {
  author: string;
  reviewBody: string;
  rating: number;
  datePublished?: string;
  role?: string;
}

interface ReviewSchemaProps {
  reviews: Review[];
  itemReviewed?: {
    name: string;
    type: string;
  };
}

const ReviewSchema = ({ 
  reviews,
  itemReviewed = {
    name: "DissertlyPro Academic Support Services",
    type: "EducationalOrganization"
  }
}: ReviewSchemaProps) => {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": itemReviewed.type,
    "@id": "https://dissertlypro.com/#reviews",
    "name": itemReviewed.name,
    "url": "https://dissertlypro.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "reviewCount": String(reviews.length),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": String(review.rating),
        "bestRating": "5",
        "worstRating": "1"
      },
      "datePublished": review.datePublished || new Date().toISOString().split('T')[0],
      "publisher": {
        "@type": "Organization",
        "name": "DissertlyPro"
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ReviewSchema;

// Default reviews for the home page
export const defaultReviews: Review[] = [
  {
    author: "Dr. Sarah M.",
    reviewBody: "DissertlyPro helped me transform my scattered ideas into a coherent dissertation proposal. My committee approved it on the first submission.",
    rating: 5,
    role: "PhD in Education, University of Michigan",
    datePublished: "2024-06-15"
  },
  {
    author: "Michael T.",
    reviewBody: "As a working professional, I needed flexible support. Their team worked around my schedule and helped me complete my MBA thesis while managing my full-time job.",
    rating: 5,
    role: "Master's in Business Administration, NYU",
    datePublished: "2024-05-20"
  },
  {
    author: "Dr. Priya K.",
    reviewBody: "The data analysis support was exceptional. They didn't just run the numbers—they taught me to interpret and present my findings with confidence.",
    rating: 5,
    role: "PhD in Public Health, Johns Hopkins",
    datePublished: "2024-04-10"
  }
];
