import { Helmet } from 'react-helmet-async';

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://dissertlypro.com/#organization",
    "name": "DissertlyPro",
    "alternateName": "Dissertly Pro",
    "url": "https://dissertlypro.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dissertlypro.com/logo-icon.png",
      "width": "512",
      "height": "512"
    },
    "image": "https://dissertlypro.com/logo-icon.png",
    "description": "Premium dissertation and thesis support services for Master's and PhD students worldwide. Expert research guidance, data analysis, editing, and academic writing services.",
    "foundingDate": "2018",
    "slogan": "Your Research. Our Expertise.",
    "sameAs": [
      "https://twitter.com/DissertlyPro",
      "https://www.linkedin.com/company/dissertlypro",
      "https://www.facebook.com/DissertlyPro"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-812-690-5122",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "Worldwide"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
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

export default OrganizationSchema;
