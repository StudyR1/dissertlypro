import { Helmet } from "react-helmet-async";

interface DefinedTerm {
  term: string;
  definition: string;
  url?: string;
  relatedTerms?: string[];
}

interface DefinedTermSetSchemaProps {
  name: string;
  description: string;
  url: string;
  terms: DefinedTerm[];
  inDefinedTermSet?: string;
}

const DefinedTermSetSchema = ({
  name,
  description,
  url,
  terms,
  inDefinedTermSet
}: DefinedTermSetSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `https://dissertlypro.com${url}#glossary`,
    name,
    description,
    url: `https://dissertlypro.com${url}`,
    publisher: {
      "@type": "Organization",
      name: "DissertlyPro",
      url: "https://dissertlypro.com"
    },
    inLanguage: "en",
    hasDefinedTerm: terms.map((term, index) => ({
      "@type": "DefinedTerm",
      "@id": `https://dissertlypro.com${url}#term-${index + 1}`,
      name: term.term,
      description: term.definition,
      ...(term.url && { url: `https://dissertlypro.com${term.url}` }),
      ...(inDefinedTermSet && { inDefinedTermSet: inDefinedTermSet }),
      ...(term.relatedTerms && term.relatedTerms.length > 0 && {
        termCode: term.relatedTerms.join(", ")
      })
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default DefinedTermSetSchema;
