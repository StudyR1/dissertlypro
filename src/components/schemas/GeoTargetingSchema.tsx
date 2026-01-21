import { Helmet } from 'react-helmet-async';

interface GeoTargetingSchemaProps {
  primaryRegion?: 'us' | 'uk' | 'au' | 'ca' | 'global';
  targetRegions?: ('us' | 'uk' | 'au' | 'ca')[];
}

// Comprehensive geo data for each target market
const geoData = {
  us: {
    countryCode: 'US',
    countryName: 'United States',
    language: 'en-US',
    currency: 'USD',
    timezone: 'America/New_York',
    coordinates: { lat: 39.8283, lng: -98.5795 },
    placename: 'United States of America',
    majorCities: ['New York', 'Los Angeles', 'Chicago', 'Boston', 'San Francisco'],
    dcTerms: 'United States',
  },
  uk: {
    countryCode: 'GB',
    countryName: 'United Kingdom',
    language: 'en-GB',
    currency: 'GBP',
    timezone: 'Europe/London',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    placename: 'London, United Kingdom',
    majorCities: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Oxford'],
    dcTerms: 'United Kingdom',
  },
  au: {
    countryCode: 'AU',
    countryName: 'Australia',
    language: 'en-AU',
    currency: 'AUD',
    timezone: 'Australia/Sydney',
    coordinates: { lat: -33.8688, lng: 151.2093 },
    placename: 'Sydney, Australia',
    majorCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    dcTerms: 'Australia',
  },
  ca: {
    countryCode: 'CA',
    countryName: 'Canada',
    language: 'en-CA',
    currency: 'CAD',
    timezone: 'America/Toronto',
    coordinates: { lat: 43.6532, lng: -79.3832 },
    placename: 'Toronto, Canada',
    majorCities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
    dcTerms: 'Canada',
  },
  global: {
    countryCode: 'US',
    countryName: 'Worldwide',
    language: 'en',
    currency: 'USD',
    timezone: 'UTC',
    coordinates: { lat: 0, lng: 0 },
    placename: 'Worldwide',
    majorCities: [],
    dcTerms: 'Worldwide',
  }
};

const GeoTargetingSchema = ({ 
  primaryRegion = 'global',
  targetRegions = ['us', 'uk', 'au', 'ca']
}: GeoTargetingSchemaProps) => {
  const primary = geoData[primaryRegion];
  const allTargets = targetRegions.map(r => geoData[r]);

  // JSON-LD for geographic targeting (helps LLMs and rich results)
  const geoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "spatialCoverage": targetRegions.map(region => ({
      "@type": "Place",
      "name": geoData[region].countryName,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geoData[region].coordinates.lat,
        "longitude": geoData[region].coordinates.lng
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": geoData[region].countryCode
      }
    })),
    "audience": {
      "@type": "Audience",
      "audienceType": "Graduate Students",
      "geographicArea": targetRegions.map(region => ({
        "@type": "Country",
        "name": geoData[region].countryName,
        "identifier": geoData[region].countryCode
      }))
    },
    "inLanguage": targetRegions.map(region => geoData[region].language),
    "contentLocation": primaryRegion !== 'global' ? {
      "@type": "Place",
      "name": primary.countryName,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": primary.countryCode
      }
    } : undefined
  };

  // AI/LLM context schema for better understanding
  const aiContextSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "DissertlyPro Geographic Service Coverage",
    "description": `Academic dissertation support services available in ${targetRegions.map(r => geoData[r].countryName).join(', ')}`,
    "spatialCoverage": targetRegions.map(region => geoData[region].countryName),
    "temporalCoverage": "2015/..",
    "distribution": targetRegions.map(region => ({
      "@type": "DataDownload",
      "contentLocation": {
        "@type": "Place",
        "name": geoData[region].countryName
      },
      "inLanguage": geoData[region].language
    }))
  };

  return (
    <Helmet>
      {/* Primary geo targeting */}
      <meta name="geo.region" content={primary.countryCode} />
      <meta name="geo.placename" content={primary.placename} />
      <meta name="geo.position" content={`${primary.coordinates.lat};${primary.coordinates.lng}`} />
      <meta name="ICBM" content={`${primary.coordinates.lat}, ${primary.coordinates.lng}`} />
      
      {/* All target regions */}
      {allTargets.map(target => (
        <meta key={target.countryCode} name="geo.country" content={target.countryCode} />
      ))}
      
      {/* Dublin Core geo metadata (recognized by academic crawlers) */}
      <meta name="DC.coverage" content={primary.dcTerms} />
      <meta name="DC.coverage.spatial" content={targetRegions.map(r => geoData[r].dcTerms).join('; ')} />
      
      {/* Language and locale */}
      <meta httpEquiv="content-language" content={targetRegions.map(r => geoData[r].language).join(', ')} />
      <meta name="language" content="English" />
      
      {/* Distribution and audience */}
      <meta name="distribution" content="Global" />
      <meta name="coverage" content={targetRegions.map(r => geoData[r].countryName).join(', ')} />
      <meta name="target" content="Graduate Students, PhD Candidates, Masters Students" />
      <meta name="audience" content="Graduate Students, Academic Researchers, Working Professionals" />
      
      {/* Currency hints for e-commerce crawlers */}
      <meta name="pricing:currency" content={primary.currency} />
      <meta name="pricing:availability" content="in_stock" />
      
      {/* Timezone for scheduling/availability */}
      <meta name="timezone" content={primary.timezone} />
      
      {/* Bing geo targeting */}
      <meta name="geo.a1" content={primary.countryCode} />
      
      {/* Google specific hints */}
      <meta name="google" content="notranslate" />
      
      {/* JSON-LD schemas for crawlers and LLMs */}
      <script type="application/ld+json">
        {JSON.stringify(geoSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(aiContextSchema)}
      </script>
    </Helmet>
  );
};

export default GeoTargetingSchema;

// Export geo data for use in other components
export { geoData };
export type { GeoTargetingSchemaProps };
