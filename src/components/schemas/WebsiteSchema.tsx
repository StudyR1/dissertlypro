import { Helmet } from 'react-helmet-async';

const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://dissertlypro.com/#website",
    "name": "DissertlyPro",
    "url": "https://dissertlypro.com",
    "description": "Premium dissertation and thesis support for Master's and PhD students",
    "publisher": {
      "@type": "Organization",
      "@id": "https://dissertlypro.com/#organization",
      "name": "DissertlyPro"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dissertlypro.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default WebsiteSchema;
