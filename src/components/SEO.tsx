import { Helmet } from 'react-helmet-async';
import { getOGImageForPath, OGImageCategory, getOGImageByCategory } from '@/lib/ogImages';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  ogCategory?: OGImageCategory;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  noindex?: boolean;
  articleTags?: string[];
  articleSection?: string;
}

const SITE_NAME = 'DissertlyPro';
const SITE_URL = 'https://dissertlypro.com';
const DEFAULT_IMAGE = '/og-image.jpg';

const SEO = ({
  title,
  description,
  canonical,
  type = 'website',
  image,
  ogCategory,
  publishedTime,
  modifiedTime,
  author,
  keywords = [],
  noindex = false,
  articleTags = [],
  articleSection,
}: SEOProps) => {
  const fullTitle = title === 'Home' 
    ? `${SITE_NAME} - Premium Master's & PhD Dissertation Support`
    : `${title} | ${SITE_NAME}`;
  
  const fullUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  
  // Determine OG image: explicit image > category-based > path-based > default
  const resolvedImage = image 
    ? image 
    : ogCategory 
      ? getOGImageByCategory(ogCategory)
      : canonical 
        ? getOGImageForPath(canonical)
        : DEFAULT_IMAGE;
  const fullImage = resolvedImage.startsWith('http') ? resolvedImage : `${SITE_URL}${resolvedImage}`;

  const defaultKeywords = [
    'dissertation help',
    'PhD thesis support',
    'masters dissertation',
    'academic writing services',
    'research methodology',
    'data analysis services',
    'dissertation editing',
    'thesis writing help',
    'postgraduate support',
    'doctoral research assistance',
  ];

  const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

  // Regional landing pages (standalone, not variants of every page)
  const regionalLandingPages = [
    { lang: 'en-US', path: '/us' },
    { lang: 'en-GB', path: '/uk' },
    { lang: 'en-AU', path: '/au' },
    { lang: 'en-CA', path: '/ca' },
  ];

  // Check if current page is homepage or a regional landing
  const isHomepage = !canonical || canonical === '/';
  const isRegionalPage = canonical && ['/us', '/uk', '/au', '/ca'].includes(canonical);
  
  // Determine which hreflang tags to include
  const getHreflangTags = () => {
    if (isHomepage || isRegionalPage) {
      // Homepage and regional pages link to each other
      return regionalLandingPages;
    }
    // Other pages just declare their own language
    return [];
  };

  const hreflangTags = getHreflangTags();

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author || SITE_NAME} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={fullUrl} />

      {/* Hreflang tags - regional landing pages link to each other */}
      {hreflangTags.map(({ lang, path }) => (
        <link 
          key={lang}
          rel="alternate" 
          hrefLang={lang} 
          href={`${SITE_URL}${path}`} 
        />
      ))}
      {/* x-default points to main homepage */}
      {(isHomepage || isRegionalPage) && (
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
      )}
      {/* Default English for all pages */}
      <link rel="alternate" hrefLang="en" href={fullUrl} />

      {/* Geographic targeting meta tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.region" content="AU" />
      <meta name="geo.region" content="CA" />
      <meta name="ICBM" content="51.5074, -0.1278" />
      <meta name="geo.position" content="51.5074;-0.1278" />
      <meta name="geo.placename" content="London, United Kingdom" />

      {/* Language and content targeting */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="language" content="English" />
      <meta name="audience" content="Graduate Students, PhD Candidates, Masters Students, Working Professionals" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_AU" />
      <meta property="og:locale:alternate" content="en_CA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@DissertlyPro" />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      {type === 'article' && articleTags.map((tag, index) => (
        <meta key={`article-tag-${index}`} property="article:tag" content={tag} />
      ))}

      {/* Additional SEO */}
      <meta name="theme-color" content="#0f1629" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    </Helmet>
  );
};

export default SEO;