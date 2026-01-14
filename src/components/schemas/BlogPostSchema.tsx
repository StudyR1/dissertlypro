import { Helmet } from 'react-helmet-async';

interface BlogPostSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  authorBio?: string;
  category: string;
  readTime?: string;
  image?: string;
}

const BlogPostSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  authorBio,
  category,
  readTime,
  image = "https://dissertlypro.com/og-image.jpg"
}: BlogPostSchemaProps) => {
  // Convert date string to ISO format
  const parseDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
  };

  const wordCount = readTime ? parseInt(readTime) * 200 : 1000;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": `https://dissertlypro.com${url}`,
    "datePublished": parseDate(datePublished),
    "dateModified": dateModified ? parseDate(dateModified) : parseDate(datePublished),
    "author": {
      "@type": "Person",
      "name": author,
      ...(authorBio && { "description": authorBio }),
      "url": "https://dissertlypro.com/experts"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://dissertlypro.com/#organization",
      "name": "DissertlyPro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dissertlypro.com/logo-icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://dissertlypro.com${url}`
    },
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": "1200",
      "height": "630"
    },
    "articleSection": category,
    "wordCount": String(wordCount),
    "inLanguage": "en-US",
    "isAccessibleForFree": true
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default BlogPostSchema;
