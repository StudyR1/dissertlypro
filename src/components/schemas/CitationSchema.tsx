import { Helmet } from "react-helmet-async";

interface CitationSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    credentials?: string;
    affiliation?: string;
  };
  keywords?: string[];
  wordCount?: number;
  citation?: {
    doi?: string;
    issn?: string;
    volumeNumber?: string;
    issueNumber?: string;
    pageStart?: string;
    pageEnd?: string;
  };
  references?: string[];
  isPartOf?: {
    name: string;
    issn?: string;
    publisher?: string;
  };
  license?: string;
  copyrightYear?: number;
  copyrightHolder?: string;
}

const CitationSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  keywords,
  wordCount,
  citation,
  references,
  isPartOf,
  license = "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  copyrightYear,
  copyrightHolder = "DissertlyPro"
}: CitationSchemaProps) => {
  const parseDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
  };

  const currentYear = new Date().getFullYear();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": `https://dissertlypro.com${url}#article`,
    name: title,
    headline: title,
    description,
    url: `https://dissertlypro.com${url}`,
    datePublished: parseDate(datePublished),
    dateModified: dateModified ? parseDate(dateModified) : parseDate(datePublished),
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.credentials && { 
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: author.credentials
        }
      }),
      ...(author.affiliation && {
        affiliation: {
          "@type": "Organization",
          name: author.affiliation
        }
      }),
      url: "https://dissertlypro.com/experts"
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://dissertlypro.com/#organization",
      name: "DissertlyPro",
      url: "https://dissertlypro.com",
      logo: {
        "@type": "ImageObject",
        url: "https://dissertlypro.com/logo-icon.png"
      }
    },
    ...(isPartOf && {
      isPartOf: {
        "@type": "Periodical",
        name: isPartOf.name,
        ...(isPartOf.issn && { issn: isPartOf.issn }),
        ...(isPartOf.publisher && {
          publisher: {
            "@type": "Organization",
            name: isPartOf.publisher
          }
        })
      }
    }),
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(", ") }),
    ...(wordCount && { wordCount: String(wordCount) }),
    ...(citation?.doi && { identifier: { "@type": "PropertyValue", propertyID: "DOI", value: citation.doi } }),
    ...(citation?.volumeNumber && { volumeNumber: citation.volumeNumber }),
    ...(citation?.issueNumber && { issueNumber: citation.issueNumber }),
    ...(citation?.pageStart && { pageStart: citation.pageStart }),
    ...(citation?.pageEnd && { pageEnd: citation.pageEnd }),
    ...(references && references.length > 0 && {
      citation: references.map(ref => ({
        "@type": "CreativeWork",
        name: ref
      }))
    }),
    license,
    copyrightYear: copyrightYear || currentYear,
    copyrightHolder: {
      "@type": "Organization",
      name: copyrightHolder
    },
    inLanguage: "en",
    isAccessibleForFree: true,
    creativeWorkStatus: "Published",
    accessMode: ["textual", "visual"],
    accessModeSufficient: {
      "@type": "ItemList",
      itemListElement: ["textual"]
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

export default CitationSchema;
