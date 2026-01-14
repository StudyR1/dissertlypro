import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
  image?: string;
}

const ServiceSchema = ({ 
  name, 
  description, 
  url,
  provider = "DissertlyPro",
  areaServed = "Worldwide",
  serviceType = "Educational Support Service",
  image = "https://dissertlypro.com/og-image.jpg"
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `https://dissertlypro.com${url}`,
    "image": image,
    "provider": {
      "@type": "Organization",
      "@id": "https://dissertlypro.com/#organization",
      "name": provider,
      "url": "https://dissertlypro.com"
    },
    "areaServed": areaServed,
    "serviceType": serviceType,
    "termsOfService": "https://dissertlypro.com/ethics",
    "category": "Academic Support Services",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "price": "299",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "url": `https://dissertlypro.com${url}`
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

export default ServiceSchema;
