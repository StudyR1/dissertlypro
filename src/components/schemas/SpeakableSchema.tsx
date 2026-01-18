import { Helmet } from "react-helmet-async";

interface SpeakableSchemaProps {
  name: string;
  description: string;
  url: string;
  speakableSelectors?: string[]; // CSS selectors for speakable content
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

/**
 * SpeakableSchema - Optimizes content for voice search (Google Assistant, Alexa, Siri)
 * 
 * Best practices for speakable content:
 * - Keep answers between 30-40 words (optimal for voice reading)
 * - Use conversational, natural language
 * - Front-load the key information
 * - Target question-based queries
 */
const SpeakableSchema = ({
  name,
  description,
  url,
  speakableSelectors = [".speakable-content", ".quick-answer"],
  datePublished,
  dateModified
}: SpeakableSchemaProps) => {
  const baseUrl = "https://dissertlypro.com";
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": fullUrl,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": speakableSelectors
    },
    "publisher": {
      "@type": "Organization",
      "name": "DissertlyPro",
      "url": "https://dissertlypro.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dissertlypro.com/logo-icon.png"
      }
    },
    ...(datePublished && { "datePublished": datePublished }),
    ...(dateModified && { "dateModified": dateModified })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SpeakableSchema;
