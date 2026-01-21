import { Helmet } from 'react-helmet-async';

interface ProfessionalServiceSchemaProps {
  serviceName?: string;
  description?: string;
  regionCode?: 'us' | 'uk' | 'au' | 'ca';
}

// Comprehensive geographic targeting with GeoCircle for radius-based local SEO
const geoTargets = {
  us: {
    country: { "@type": "Country", name: "United States", identifier: "US" },
    center: { lat: 39.8283, lng: -98.5795 },
    radius: "3000km",
    cities: [
      { name: "New York", lat: 40.7128, lng: -74.0060, population: 8336817 },
      { name: "Los Angeles", lat: 34.0522, lng: -118.2437, population: 3979576 },
      { name: "Chicago", lat: 41.8781, lng: -87.6298, population: 2693976 },
      { name: "Boston", lat: 42.3601, lng: -71.0589, population: 692600 },
      { name: "San Francisco", lat: 37.7749, lng: -122.4194, population: 883305 },
      { name: "Philadelphia", lat: 39.9526, lng: -75.1652, population: 1584064 },
      { name: "Houston", lat: 29.7604, lng: -95.3698, population: 2320268 },
      { name: "Atlanta", lat: 33.7490, lng: -84.3880, population: 498715 },
      { name: "Washington DC", lat: 38.9072, lng: -77.0369, population: 705749 },
      { name: "Miami", lat: 25.7617, lng: -80.1918, population: 467963 },
      { name: "Seattle", lat: 47.6062, lng: -122.3321, population: 753675 },
      { name: "Denver", lat: 39.7392, lng: -104.9903, population: 727211 },
    ],
    states: [
      "California", "New York", "Texas", "Massachusetts", "Illinois", 
      "Pennsylvania", "Florida", "Michigan", "Ohio", "Georgia",
      "North Carolina", "New Jersey", "Virginia", "Washington", "Arizona"
    ],
    universities: [
      { name: "Harvard University", city: "Cambridge", state: "Massachusetts" },
      { name: "MIT", city: "Cambridge", state: "Massachusetts" },
      { name: "Stanford University", city: "Stanford", state: "California" },
      { name: "Yale University", city: "New Haven", state: "Connecticut" },
      { name: "Princeton University", city: "Princeton", state: "New Jersey" },
      { name: "Columbia University", city: "New York", state: "New York" },
      { name: "University of Chicago", city: "Chicago", state: "Illinois" },
      { name: "Duke University", city: "Durham", state: "North Carolina" },
      { name: "University of Pennsylvania", city: "Philadelphia", state: "Pennsylvania" },
      { name: "Northwestern University", city: "Evanston", state: "Illinois" },
      { name: "Johns Hopkins University", city: "Baltimore", state: "Maryland" },
      { name: "UC Berkeley", city: "Berkeley", state: "California" },
      { name: "UCLA", city: "Los Angeles", state: "California" },
      { name: "University of Michigan", city: "Ann Arbor", state: "Michigan" },
      { name: "NYU", city: "New York", state: "New York" },
    ]
  },
  uk: {
    country: { "@type": "Country", name: "United Kingdom", identifier: "GB" },
    center: { lat: 54.0, lng: -2.0 },
    radius: "800km",
    cities: [
      { name: "London", lat: 51.5074, lng: -0.1278, population: 8982000 },
      { name: "Birmingham", lat: 52.4862, lng: -1.8904, population: 1141816 },
      { name: "Manchester", lat: 53.4808, lng: -2.2426, population: 553230 },
      { name: "Leeds", lat: 53.8008, lng: -1.5491, population: 789194 },
      { name: "Glasgow", lat: 55.8642, lng: -4.2518, population: 635640 },
      { name: "Edinburgh", lat: 55.9533, lng: -3.1883, population: 488050 },
      { name: "Bristol", lat: 51.4545, lng: -2.5879, population: 467099 },
      { name: "Liverpool", lat: 53.4084, lng: -2.9916, population: 498042 },
      { name: "Oxford", lat: 51.7520, lng: -1.2577, population: 152450 },
      { name: "Cambridge", lat: 52.2053, lng: 0.1218, population: 145700 },
      { name: "Nottingham", lat: 52.9548, lng: -1.1581, population: 321500 },
      { name: "Sheffield", lat: 53.3811, lng: -1.4701, population: 584853 },
    ],
    regions: [
      "England", "Scotland", "Wales", "Northern Ireland",
      "Greater London", "South East", "North West", "Yorkshire",
      "West Midlands", "East Midlands", "South West", "East of England"
    ],
    universities: [
      { name: "University of Oxford", city: "Oxford" },
      { name: "University of Cambridge", city: "Cambridge" },
      { name: "Imperial College London", city: "London" },
      { name: "UCL", city: "London" },
      { name: "London School of Economics", city: "London" },
      { name: "University of Edinburgh", city: "Edinburgh" },
      { name: "University of Manchester", city: "Manchester" },
      { name: "King's College London", city: "London" },
      { name: "University of Bristol", city: "Bristol" },
      { name: "University of Warwick", city: "Coventry" },
      { name: "University of Glasgow", city: "Glasgow" },
      { name: "Durham University", city: "Durham" },
      { name: "University of St Andrews", city: "St Andrews" },
      { name: "University of Nottingham", city: "Nottingham" },
      { name: "University of Birmingham", city: "Birmingham" },
    ]
  },
  au: {
    country: { "@type": "Country", name: "Australia", identifier: "AU" },
    center: { lat: -25.2744, lng: 133.7751 },
    radius: "2500km",
    cities: [
      { name: "Sydney", lat: -33.8688, lng: 151.2093, population: 5312163 },
      { name: "Melbourne", lat: -37.8136, lng: 144.9631, population: 5078193 },
      { name: "Brisbane", lat: -27.4698, lng: 153.0251, population: 2514184 },
      { name: "Perth", lat: -31.9505, lng: 115.8605, population: 2085973 },
      { name: "Adelaide", lat: -34.9285, lng: 138.6007, population: 1359760 },
      { name: "Canberra", lat: -35.2809, lng: 149.1300, population: 453558 },
      { name: "Hobart", lat: -42.8821, lng: 147.3272, population: 238834 },
      { name: "Darwin", lat: -12.4634, lng: 130.8456, population: 147255 },
    ],
    states: [
      "New South Wales", "Victoria", "Queensland", 
      "Western Australia", "South Australia", "Tasmania",
      "Australian Capital Territory", "Northern Territory"
    ],
    universities: [
      { name: "University of Melbourne", city: "Melbourne" },
      { name: "University of Sydney", city: "Sydney" },
      { name: "Australian National University", city: "Canberra" },
      { name: "University of Queensland", city: "Brisbane" },
      { name: "UNSW Sydney", city: "Sydney" },
      { name: "Monash University", city: "Melbourne" },
      { name: "University of Western Australia", city: "Perth" },
      { name: "University of Adelaide", city: "Adelaide" },
    ]
  },
  ca: {
    country: { "@type": "Country", name: "Canada", identifier: "CA" },
    center: { lat: 56.1304, lng: -106.3468 },
    radius: "3000km",
    cities: [
      { name: "Toronto", lat: 43.6532, lng: -79.3832, population: 2794356 },
      { name: "Montreal", lat: 45.5017, lng: -73.5673, population: 1780000 },
      { name: "Vancouver", lat: 49.2827, lng: -123.1207, population: 675218 },
      { name: "Calgary", lat: 51.0447, lng: -114.0719, population: 1306784 },
      { name: "Edmonton", lat: 53.5461, lng: -113.4938, population: 1010899 },
      { name: "Ottawa", lat: 45.4215, lng: -75.6972, population: 1017449 },
      { name: "Waterloo", lat: 43.4643, lng: -80.5204, population: 113520 },
      { name: "Halifax", lat: 44.6488, lng: -63.5752, population: 439819 },
      { name: "Quebec City", lat: 46.8139, lng: -71.2080, population: 542298 },
      { name: "Winnipeg", lat: 49.8951, lng: -97.1384, population: 749607 },
    ],
    provinces: [
      "Ontario", "Quebec", "British Columbia", "Alberta",
      "Manitoba", "Saskatchewan", "Nova Scotia", "New Brunswick",
      "Newfoundland and Labrador", "Prince Edward Island"
    ],
    universities: [
      { name: "University of Toronto", city: "Toronto" },
      { name: "McGill University", city: "Montreal" },
      { name: "University of British Columbia", city: "Vancouver" },
      { name: "University of Alberta", city: "Edmonton" },
      { name: "McMaster University", city: "Hamilton" },
      { name: "University of Waterloo", city: "Waterloo" },
      { name: "Western University", city: "London" },
      { name: "Queen's University", city: "Kingston" },
      { name: "University of Montreal", city: "Montreal" },
    ]
  }
};

const ProfessionalServiceSchema = ({
  serviceName = "Dissertation & Thesis Support Services",
  description = "Premium academic support for Master's and PhD students including dissertation writing guidance, research methodology design, data analysis, literature reviews, and academic editing services.",
  regionCode
}: ProfessionalServiceSchemaProps) => {
  
  // Build comprehensive area served with GeoCircle for each target region
  const buildAreaServed = () => {
    const areas: any[] = [];
    
    // Add all target countries
    Object.values(geoTargets).forEach(region => {
      // Country level
      areas.push(region.country);
      
      // GeoCircle for radius-based targeting
      areas.push({
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: region.center.lat,
          longitude: region.center.lng
        },
        geoRadius: region.radius
      });
      
      // Major cities with coordinates
      region.cities.forEach(city => {
        areas.push({
          "@type": "City",
          name: city.name,
          geo: {
            "@type": "GeoCoordinates",
            latitude: city.lat,
            longitude: city.lng
          },
          ...(city.population && { population: city.population })
        });
      });
    });
    
    // If specific region, prioritize that region's areas
    if (regionCode && geoTargets[regionCode]) {
      const priorityRegion = geoTargets[regionCode];
      return [
        priorityRegion.country,
        {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: priorityRegion.center.lat,
            longitude: priorityRegion.center.lng
          },
          geoRadius: priorityRegion.radius
        },
        ...priorityRegion.cities.map(city => ({
          "@type": "City",
          name: city.name,
          geo: {
            "@type": "GeoCoordinates",
            latitude: city.lat,
            longitude: city.lng
          }
        })),
        ...areas
      ];
    }
    
    return areas;
  };

  // Build university affiliations
  const buildUniversityAffiliations = () => {
    const allUnis: any[] = [];
    Object.values(geoTargets).forEach(region => {
      region.universities.forEach(uni => {
        allUnis.push({
          "@type": "EducationalOrganization",
          name: uni.name,
          address: {
            "@type": "PostalAddress",
            addressLocality: uni.city
          }
        });
      });
    });
    return allUnis;
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "EducationalOrganization", "LocalBusiness"],
    "@id": "https://dissertlypro.com/#professionalservice",
    name: serviceName,
    alternateName: ["DissertlyPro", "Dissertly Pro", "Dissertly Professional Services"],
    description,
    url: "https://dissertlypro.com",
    logo: {
      "@type": "ImageObject",
      url: "https://dissertlypro.com/logo-icon.png",
      width: 512,
      height: 512
    },
    image: [
      "https://dissertlypro.com/og-image.jpg",
      "https://dissertlypro.com/og-images/og-services.jpg"
    ],
    telephone: "+1-812-690-5122",
    email: "support@dissertlypro.com",
    foundingDate: "2015",
    priceRange: "$$$",
    currenciesAccepted: ["USD", "GBP", "EUR", "CAD", "AUD", "NZD", "SGD", "AED"],
    paymentAccepted: ["Credit Card", "Debit Card", "PayPal", "Bank Transfer", "Apple Pay", "Google Pay"],
    
    // Comprehensive area served with GeoCircle
    areaServed: buildAreaServed(),
    
    // Service area as administrative areas
    serviceArea: [
      { "@type": "AdministrativeArea", name: "United States" },
      { "@type": "AdministrativeArea", name: "United Kingdom" },
      { "@type": "AdministrativeArea", name: "Canada" },
      { "@type": "AdministrativeArea", name: "Australia" },
      { "@type": "AdministrativeArea", name: "New Zealand" },
      { "@type": "AdministrativeArea", name: "Ireland" },
      { "@type": "AdministrativeArea", name: "Singapore" },
      { "@type": "AdministrativeArea", name: "United Arab Emirates" },
    ],
    
    // Languages
    availableLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" }
    ],
    
    // 24/7 global support
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    
    // Enhanced aggregate rating
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      bestRating: 5,
      worstRating: 1,
      reviewCount: 2847,
      ratingCount: 2847
    },
    
    // Sample reviews for local SEO
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        author: { "@type": "Person", name: "PhD Candidate" },
        reviewBody: "Outstanding dissertation support. Their methodology experts helped me design a robust research framework.",
        datePublished: "2024-01-15"
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        author: { "@type": "Person", name: "Master's Student" },
        reviewBody: "The statistical analysis support was invaluable. Highly recommend for any graduate student.",
        datePublished: "2024-02-20"
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        author: { "@type": "Person", name: "DBA Candidate" },
        reviewBody: "Professional, responsive, and knowledgeable. Helped me complete my business dissertation on time.",
        datePublished: "2024-03-10"
      }
    ],
    
    // Comprehensive service catalog
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dissertation Support Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://dissertlypro.com/services/dissertation-writing#service",
            name: "Dissertation Writing Support",
            description: "Chapter-by-chapter guidance through your complete research journey.",
            serviceType: "Academic Consulting",
            provider: { "@id": "https://dissertlypro.com/#organization" },
            areaServed: { "@type": "Country", name: "United States" }
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://dissertlypro.com/services/research-methodology#service",
            name: "Research Methodology Design",
            description: "Robust qualitative, quantitative, and mixed methods framework development.",
            serviceType: "Research Consulting",
            provider: { "@id": "https://dissertlypro.com/#organization" }
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://dissertlypro.com/services/data-analysis#service",
            name: "Statistical & Data Analysis",
            description: "Advanced analysis using SPSS, R, STATA, NVivo, and Python.",
            serviceType: "Data Analysis",
            provider: { "@id": "https://dissertlypro.com/#organization" }
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://dissertlypro.com/services/literature-review#service",
            name: "Literature Review Services",
            description: "Comprehensive reviews with thematic analysis and synthesis.",
            serviceType: "Academic Research",
            provider: { "@id": "https://dissertlypro.com/#organization" }
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://dissertlypro.com/services/academic-editing#service",
            name: "Academic Editing & Proofreading",
            description: "Professional editing with APA, MLA, Chicago, and Harvard formatting.",
            serviceType: "Editing Service",
            provider: { "@id": "https://dissertlypro.com/#organization" }
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://dissertlypro.com/services/proposal-development#service",
            name: "Dissertation Proposal Development",
            description: "Expert guidance to craft compelling research proposals.",
            serviceType: "Academic Consulting",
            provider: { "@id": "https://dissertlypro.com/#organization" }
          }
        }
      ]
    },
    
    // University knowledge/affiliations
    knowsAbout: buildUniversityAffiliations(),
    
    // Keywords for search
    keywords: [
      "dissertation help", "thesis support", "PhD assistance",
      "masters thesis writing", "dissertation consulting",
      "academic writing services", "research methodology",
      "data analysis", "literature review", "dissertation editing",
      "dissertation proposal", "thesis editing", "academic editing",
      "statistical analysis", "qualitative research", "quantitative research"
    ],
    
    // Social profiles
    sameAs: [
      "https://www.linkedin.com/company/dissertlypro",
      "https://twitter.com/dissertlypro",
      "https://www.facebook.com/dissertlypro"
    ],
    
    // Multiple contact points for different regions
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+1-812-690-5122",
        availableLanguage: "English",
        areaServed: ["US", "CA"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+1-812-690-5122",
        availableLanguage: "English",
        areaServed: ["GB", "IE"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+1-812-690-5122",
        availableLanguage: "English",
        areaServed: ["AU", "NZ", "SG"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+1-812-690-5122",
        email: "sales@dissertlypro.com",
        availableLanguage: "English"
      }
    ],
    
    // Expertise areas
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Academic Expertise",
        recognizedBy: { "@type": "Organization", name: "Academic Standards Board" }
      }
    ],
    
    // Parent organization
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://dissertlypro.com/#organization",
      name: "DissertlyPro",
      url: "https://dissertlypro.com",
      logo: "https://dissertlypro.com/logo-icon.png"
    },
    
    // Slogan
    slogan: "Expert Dissertation Support for Graduate Success",
    
    // Brand
    brand: {
      "@type": "Brand",
      name: "DissertlyPro",
      logo: "https://dissertlypro.com/logo-icon.png"
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

export default ProfessionalServiceSchema;
