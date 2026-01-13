import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
}

const ServiceSchema = ({ 
  name, 
  description, 
  url,
  provider = "DissertlyPro",
  areaServed = "Worldwide",
  serviceType = "Educational Support Service"
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `https://dissertlypro.com${url}`,
    "provider": {
      "@type": "Organization",
      "@id": "https://dissertlypro.com/#organization",
      "name": provider
    },
    "areaServed": {
      "@type": "Place",
      "name": areaServed
    },
    "serviceType": serviceType,
    "termsOfService": "https://dissertlypro.com/ethics",
    "category": "Academic Support Services"
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
