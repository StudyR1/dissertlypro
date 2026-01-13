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
  image = "https://dissertlypro.com/logo-icon.png"
}: BlogPostSchemaProps) => {
  // Convert date string to ISO format
  const parseDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
  };

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
      "description": authorBio,
      "url": "https://dissertlypro.com/blog"
    },
    "publisher": {
      "@id": "https://dissertlypro.com/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://dissertlypro.com${url}`
    },
    "image": {
      "@type": "ImageObject",
      "url": image
    },
    "articleSection": category,
    "wordCount": readTime ? parseInt(readTime) * 200 : undefined,
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
