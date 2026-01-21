import { Helmet } from "react-helmet-async";

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  telephone: string;
  url: string;
  priceRange: string;
  image?: string;
  openingHours?: string[];
  areaServed?: string[];
  sameAs?: string[];
  regionCode?: 'us' | 'uk' | 'au' | 'ca';
}

// Region-specific data for enhanced local SEO
const regionEnhancements = {
  us: {
    currencyAccepted: "USD",
    paymentAccepted: ["Credit Card", "PayPal", "Venmo", "Apple Pay", "Google Pay"],
    additionalTypes: ["EducationalOrganization", "ConsultingBusiness"],
    serviceAreas: [
      { "@type": "State", name: "California" },
      { "@type": "State", name: "New York" },
      { "@type": "State", name: "Massachusetts" },
      { "@type": "State", name: "Texas" },
      { "@type": "State", name: "Illinois" },
      { "@type": "State", name: "Pennsylvania" },
      { "@type": "State", name: "Florida" },
      { "@type": "State", name: "Michigan" },
      { "@type": "State", name: "Ohio" },
      { "@type": "State", name: "Georgia" },
    ],
    universities: [
      "Harvard University", "MIT", "Stanford University", "Yale University",
      "Princeton University", "Columbia University", "University of Chicago",
      "UC Berkeley", "UCLA", "NYU", "University of Michigan", "Duke University"
    ],
    localIdentifiers: {
      isicV4: "8542", // Higher education
      naics: "611310" // Colleges, Universities, and Professional Schools
    }
  },
  uk: {
    currencyAccepted: "GBP",
    paymentAccepted: ["Credit Card", "PayPal", "Bank Transfer", "Apple Pay"],
    additionalTypes: ["EducationalOrganization", "ConsultingBusiness"],
    serviceAreas: [
      { "@type": "City", name: "London" },
      { "@type": "City", name: "Oxford" },
      { "@type": "City", name: "Cambridge" },
      { "@type": "City", name: "Edinburgh" },
      { "@type": "City", name: "Manchester" },
      { "@type": "City", name: "Birmingham" },
      { "@type": "City", name: "Bristol" },
      { "@type": "City", name: "Leeds" },
      { "@type": "City", name: "Glasgow" },
      { "@type": "City", name: "Nottingham" },
    ],
    universities: [
      "University of Oxford", "University of Cambridge", "Imperial College London",
      "UCL", "London School of Economics", "University of Edinburgh",
      "University of Manchester", "King's College London", "University of Bristol",
      "University of Warwick", "Durham University", "University of St Andrews"
    ],
    localIdentifiers: {
      isicV4: "8542",
      ukSic: "85.42" // Higher education
    }
  },
  au: {
    currencyAccepted: "AUD",
    paymentAccepted: ["Credit Card", "PayPal", "Bank Transfer", "Afterpay"],
    additionalTypes: ["EducationalOrganization", "ConsultingBusiness"],
    serviceAreas: [
      { "@type": "City", name: "Sydney" },
      { "@type": "City", name: "Melbourne" },
      { "@type": "City", name: "Brisbane" },
      { "@type": "City", name: "Perth" },
      { "@type": "City", name: "Adelaide" },
      { "@type": "City", name: "Canberra" },
      { "@type": "City", name: "Hobart" },
      { "@type": "City", name: "Darwin" },
    ],
    universities: [
      "University of Melbourne", "University of Sydney", "Australian National University",
      "University of Queensland", "UNSW Sydney", "Monash University",
      "University of Western Australia", "University of Adelaide"
    ],
    localIdentifiers: {
      isicV4: "8542",
      anzsic: "8102" // Higher Education
    }
  },
  ca: {
    currencyAccepted: "CAD",
    paymentAccepted: ["Credit Card", "PayPal", "Interac", "Apple Pay"],
    additionalTypes: ["EducationalOrganization", "ConsultingBusiness"],
    serviceAreas: [
      { "@type": "City", name: "Toronto" },
      { "@type": "City", name: "Vancouver" },
      { "@type": "City", name: "Montreal" },
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Calgary" },
      { "@type": "City", name: "Edmonton" },
      { "@type": "City", name: "Waterloo" },
      { "@type": "City", name: "Halifax" },
    ],
    universities: [
      "University of Toronto", "McGill University", "University of British Columbia",
      "University of Alberta", "McMaster University", "University of Waterloo",
      "Western University", "Queen's University", "University of Montreal"
    ],
    localIdentifiers: {
      isicV4: "8542",
      naics: "611310"
    }
  }
};

const LocalBusinessSchema = ({
  name,
  description,
  address,
  geo,
  telephone,
  url,
  priceRange,
  image = "https://dissertlypro.com/og-image.jpg",
  openingHours = ["Mo-Su 00:00-23:59"],
  areaServed = [],
  sameAs = [],
  regionCode,
}: LocalBusinessSchemaProps) => {
  const regionData = regionCode ? regionEnhancements[regionCode] : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", ...(regionData?.additionalTypes || [])],
    "@id": `${url}#localbusiness`,
    name,
    description,
    image,
    telephone,
    url,
    priceRange,
    
    // Enhanced address with country-specific formatting
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    
    // Geo coordinates with service radius
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
      // Service radius - nationwide coverage
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        geoRadius: "5000km"
      }
    }),
    
    // 24/7 availability for global students
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    },
    
    // Region-specific payment and currency
    ...(regionData && {
      currenciesAccepted: regionData.currencyAccepted,
      paymentAccepted: regionData.paymentAccepted.join(", "),
    }),
    
    // Area served - combine provided and region-specific
    ...(regionData?.serviceAreas && {
      areaServed: [
        ...regionData.serviceAreas,
        ...(areaServed.map(area => ({ "@type": "Place", name: area })))
      ]
    }),
    
    // University affiliations for local relevance
    ...(regionData?.universities && {
      knowsAbout: regionData.universities.map(uni => ({
        "@type": "EducationalOrganization",
        name: uni
      }))
    }),
    
    // Industry classification codes
    ...(regionData?.localIdentifiers && regionData.localIdentifiers),
    
    // Aggregate rating for trust
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "2847",
      ratingCount: "2847"
    },
    
    // Sample reviews for rich snippets
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "Graduate Student"
        },
        reviewBody: "Exceptional dissertation support that helped me complete my PhD on time."
      }
    ],
    
    // Available language
    availableLanguage: {
      "@type": "Language",
      name: "English",
      alternateName: "en"
    },
    
    // Service catalog
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Academic Support Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dissertation Writing Support",
            serviceType: "Academic Consulting"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Research Methodology Design",
            serviceType: "Research Consulting"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Statistical Analysis",
            serviceType: "Data Analysis"
          }
        }
      ]
    },
    
    // Social profiles
    ...(sameAs.length > 0 && { sameAs }),
    
    // Contact point
    contactPoint: {
      "@type": "ContactPoint",
      telephone: telephone,
      contactType: "customer service",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    },
    
    // Founding info for credibility
    foundingDate: "2015",
    
    // Parent organization
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://dissertlypro.com/#organization",
      name: "DissertlyPro"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
