import { Helmet } from 'react-helmet-async';

interface ProfessionalServiceSchemaProps {
  serviceName?: string;
  description?: string;
}

const ProfessionalServiceSchema = ({
  serviceName = "Dissertation & Thesis Support Services",
  description = "Premium academic support for Master's and PhD students including dissertation writing guidance, research methodology design, data analysis, literature reviews, and academic editing services."
}: ProfessionalServiceSchemaProps) => {
  // Target high-value geographic markets
  const targetAreas = [
    // United States - Major academic hubs
    { "@type": "Country", "name": "United States" },
    { "@type": "State", "name": "California", "containedInPlace": { "@type": "Country", "name": "United States" } },
    { "@type": "State", "name": "New York", "containedInPlace": { "@type": "Country", "name": "United States" } },
    { "@type": "State", "name": "Massachusetts", "containedInPlace": { "@type": "Country", "name": "United States" } },
    { "@type": "State", "name": "Texas", "containedInPlace": { "@type": "Country", "name": "United States" } },
    { "@type": "State", "name": "Illinois", "containedInPlace": { "@type": "Country", "name": "United States" } },
    { "@type": "State", "name": "Pennsylvania", "containedInPlace": { "@type": "Country", "name": "United States" } },
    
    // United Kingdom
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "City", "name": "London", "containedInPlace": { "@type": "Country", "name": "United Kingdom" } },
    { "@type": "City", "name": "Oxford", "containedInPlace": { "@type": "Country", "name": "United Kingdom" } },
    { "@type": "City", "name": "Cambridge", "containedInPlace": { "@type": "Country", "name": "United Kingdom" } },
    { "@type": "City", "name": "Edinburgh", "containedInPlace": { "@type": "Country", "name": "United Kingdom" } },
    { "@type": "City", "name": "Manchester", "containedInPlace": { "@type": "Country", "name": "United Kingdom" } },
    
    // Canada
    { "@type": "Country", "name": "Canada" },
    { "@type": "City", "name": "Toronto", "containedInPlace": { "@type": "Country", "name": "Canada" } },
    { "@type": "City", "name": "Vancouver", "containedInPlace": { "@type": "Country", "name": "Canada" } },
    
    // Australia
    { "@type": "Country", "name": "Australia" },
    { "@type": "City", "name": "Sydney", "containedInPlace": { "@type": "Country", "name": "Australia" } },
    { "@type": "City", "name": "Melbourne", "containedInPlace": { "@type": "Country", "name": "Australia" } },
    
    // European high-value markets
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "Netherlands" },
    { "@type": "Country", "name": "Switzerland" },
    { "@type": "Country", "name": "Ireland" },
    { "@type": "Country", "name": "Sweden" },
    { "@type": "Country", "name": "Denmark" },
    { "@type": "Country", "name": "Norway" },
    { "@type": "Country", "name": "France" },
    
    // Middle East high-value markets
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "City", "name": "Dubai", "containedInPlace": { "@type": "Country", "name": "United Arab Emirates" } },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Qatar" },
    { "@type": "Country", "name": "Kuwait" },
    
    // Asia-Pacific high-value markets
    { "@type": "Country", "name": "Singapore" },
    { "@type": "Country", "name": "Hong Kong" },
    { "@type": "Country", "name": "Japan" },
    { "@type": "Country", "name": "South Korea" },
    { "@type": "Country", "name": "New Zealand" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://dissertlypro.com/#professionalservice",
    "name": serviceName,
    "alternateName": "DissertlyPro",
    "description": description,
    "url": "https://dissertlypro.com",
    "logo": "https://dissertlypro.com/logo-icon.png",
    "image": "https://dissertlypro.com/og-image.jpg",
    "telephone": "+1-800-DISSERT",
    "email": "support@dissertlypro.com",
    "foundingDate": "2015",
    "priceRange": "$$$",
    "currenciesAccepted": "USD, GBP, EUR, CAD, AUD",
    "paymentAccepted": "Credit Card, PayPal, Bank Transfer",
    
    // Service area - geographic targeting
    "areaServed": targetAreas,
    
    // Available languages
    "availableLanguage": ["English"],
    
    // Service hours - 24/7 global support
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    
    // Aggregate rating
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "2847",
      "ratingCount": "2847"
    },
    
    // Services offered
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dissertation Support Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dissertation Proposal Development",
            "description": "Expert guidance to craft compelling research proposals that win committee approval."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Thesis & Dissertation Writing Support",
            "description": "Chapter-by-chapter guidance through your complete research journey."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Research Methodology Design",
            "description": "Robust qualitative, quantitative, and mixed methods framework development."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Analysis Services",
            "description": "Advanced statistical and qualitative analysis using SPSS, R, STATA, NVivo."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Literature Review Structuring",
            "description": "Comprehensive reviews with thematic analysis, synthesis, and gap identification."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Academic Editing & Proofreading",
            "description": "Professional editing with APA, MLA, Chicago, and Harvard formatting expertise."
          }
        }
      ]
    },
    
    // Keywords for search
    "keywords": [
      "dissertation help",
      "thesis support",
      "PhD assistance",
      "masters thesis writing",
      "dissertation consulting",
      "academic writing services",
      "research methodology",
      "data analysis",
      "literature review",
      "dissertation editing"
    ],
    
    // Same as organization
    "sameAs": [
      "https://www.linkedin.com/company/dissertlypro",
      "https://twitter.com/dissertlypro"
    ],
    
    // Parent organization reference
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "@id": "https://dissertlypro.com/#organization",
      "name": "DissertlyPro"
    },
    
    // Contact points for different regions
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": ["US", "CA"],
        "telephone": "+1-800-DISSERT"
      },
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": ["GB", "IE"],
        "telephone": "+44-800-DISSERT"
      },
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": ["AU", "NZ"],
        "telephone": "+61-1800-DISSERT"
      }
    ],
    
    // Knows about (expertise areas)
    "knowsAbout": [
      "Dissertation Writing",
      "Thesis Research",
      "Academic Research Methodology",
      "Statistical Analysis",
      "Qualitative Research",
      "Quantitative Research",
      "Mixed Methods Research",
      "Literature Review",
      "Academic Writing",
      "Citation Styles",
      "APA Format",
      "Research Ethics"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ProfessionalServiceSchema;
