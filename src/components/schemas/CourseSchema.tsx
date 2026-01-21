import { Helmet } from "react-helmet-async";

interface CourseModule {
  name: string;
  description?: string;
  duration?: string; // ISO 8601 format
}

interface CourseSchemaProps {
  name: string;
  description: string;
  provider?: string;
  providerUrl?: string;
  url: string;
  image?: string;
  courseMode?: "online" | "onsite" | "blended";
  educationalLevel?: string;
  inLanguage?: string;
  isAccessibleForFree?: boolean;
  hasCourseInstance?: {
    startDate?: string;
    endDate?: string;
    courseMode?: string;
  };
  syllabusSections?: CourseModule[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  offers?: {
    price: number;
    priceCurrency: string;
  };
}

const CourseSchema = ({
  name,
  description,
  provider = "DissertlyPro",
  providerUrl = "https://dissertlypro.com",
  url,
  image,
  courseMode = "online",
  educationalLevel = "Advanced",
  inLanguage = "en",
  isAccessibleForFree = true,
  hasCourseInstance,
  syllabusSections,
  aggregateRating,
  offers
}: CourseSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: providerUrl,
      logo: {
        "@type": "ImageObject",
        url: "https://dissertlypro.com/logo-icon.png"
      }
    },
    url: `https://dissertlypro.com${url}`,
    courseMode,
    educationalLevel,
    inLanguage,
    isAccessibleForFree,
    ...(image && { image }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: 5,
        worstRating: 1
      }
    }),
    ...(offers && {
      offers: {
        "@type": "Offer",
        price: offers.price,
        priceCurrency: offers.priceCurrency,
        availability: "https://schema.org/InStock"
      }
    }),
    ...(hasCourseInstance && {
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: hasCourseInstance.courseMode || courseMode,
        ...(hasCourseInstance.startDate && { startDate: hasCourseInstance.startDate }),
        ...(hasCourseInstance.endDate && { endDate: hasCourseInstance.endDate })
      }
    }),
    ...(syllabusSections && syllabusSections.length > 0 && {
      syllabusSections: syllabusSections.map((section, index) => ({
        "@type": "Syllabus",
        name: section.name,
        position: index + 1,
        ...(section.description && { description: section.description }),
        ...(section.duration && { timeRequired: section.duration })
      })),
      // Also add as hasPart for better compatibility
      hasPart: syllabusSections.map((section, index) => ({
        "@type": "Course",
        name: section.name,
        position: index + 1,
        ...(section.description && { description: section.description }),
        ...(section.duration && { timeRequired: section.duration })
      }))
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

export default CourseSchema;
