import { Helmet } from "react-helmet-async";

interface EducationalCredentialSchemaProps {
  name: string;
  description: string;
  url: string;
  credentialCategory: "degree" | "certificate" | "diploma" | "badge";
  educationalLevel: string;
  competencyRequired?: string[];
  timeToComplete?: string;
  numberOfCredits?: number;
  occupationalCredentialAwarded?: string;
  programPrerequisites?: string[];
  offers?: {
    category: string;
    price?: string;
    priceCurrency?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

const EducationalCredentialSchema = ({
  name,
  description,
  url,
  credentialCategory,
  educationalLevel,
  competencyRequired,
  timeToComplete,
  numberOfCredits,
  occupationalCredentialAwarded,
  programPrerequisites,
  offers,
  aggregateRating
}: EducationalCredentialSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name,
    description,
    url: `https://dissertlypro.com${url}`,
    provider: {
      "@type": "Organization",
      name: "DissertlyPro",
      url: "https://dissertlypro.com"
    },
    educationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory,
      name: occupationalCredentialAwarded || name,
      educationalLevel
    },
    educationalLevel,
    ...(timeToComplete && { timeToComplete }),
    ...(numberOfCredits && { numberOfCredits }),
    ...(competencyRequired && competencyRequired.length > 0 && {
      competencyRequired: competencyRequired.map(comp => ({
        "@type": "DefinedTerm",
        name: comp
      }))
    }),
    ...(programPrerequisites && programPrerequisites.length > 0 && {
      programPrerequisites: programPrerequisites.map(prereq => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: prereq
      }))
    }),
    ...(offers && {
      offers: {
        "@type": "Offer",
        category: offers.category,
        ...(offers.price && { price: offers.price }),
        ...(offers.priceCurrency && { priceCurrency: offers.priceCurrency })
      }
    }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        bestRating: 5,
        worstRating: 1,
        reviewCount: aggregateRating.reviewCount
      }
    }),
    inLanguage: "en"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default EducationalCredentialSchema;
