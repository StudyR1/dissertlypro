import { Helmet } from 'react-helmet-async';

interface MobileOptimizedSEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  noindex?: boolean;
}

/**
 * Mobile-optimized SEO component with enhanced mobile meta tags
 */
const MobileOptimizedSEO = ({
  title,
  description,
  url,
  image = 'https://dissertlypro.com/og-image.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  noindex = false,
}: MobileOptimizedSEOProps) => {
  // Truncate description for mobile SERP (120 chars optimal)
  const mobileDescription = description.length > 120 
    ? description.substring(0, 117) + '...' 
    : description;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Mobile-specific Meta */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="DissertlyPro" />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="DissertlyPro" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article-specific OG */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={mobileDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@DissertlyPro" />
      
      {/* Mobile Alternate for internationalization */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="en-GB" href={url.replace('.com', '.com/uk')} />
      <link rel="alternate" hrefLang="en-US" href={url.replace('.com', '.com/us')} />
      <link rel="alternate" hrefLang="en-AU" href={url.replace('.com', '.com/au')} />
      <link rel="alternate" hrefLang="en-CA" href={url.replace('.com', '.com/ca')} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </Helmet>
  );
};

export default MobileOptimizedSEO;
