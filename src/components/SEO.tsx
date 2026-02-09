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
  /** Primary region for geo-targeting (us, uk, au, ca, or global) */
  geoRegion?: 'us' | 'uk' | 'au' | 'ca' | 'global';
}

const SITE_NAME = 'DissertlyPro';
const SITE_URL = 'https://dissertlypro.com';
const DEFAULT_IMAGE = '/og-image.jpg';

// Geo data for regional targeting
const geoData = {
  us: { code: 'US', coords: '39.8283, -98.5795', placename: 'United States', lang: 'en-US' },
  uk: { code: 'GB', coords: '51.5074, -0.1278', placename: 'London, United Kingdom', lang: 'en-GB' },
  au: { code: 'AU', coords: '-33.8688, 151.2093', placename: 'Sydney, Australia', lang: 'en-AU' },
  ca: { code: 'CA', coords: '43.6532, -79.3832', placename: 'Toronto, Canada', lang: 'en-CA' },
  global: { code: 'US', coords: '39.8283, -98.5795', placename: 'Worldwide', lang: 'en' },
};

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
  geoRegion = 'global',
}: SEOProps) => {
  const geo = geoData[geoRegion];
  const fullTitle = title === 'Home' 
    ? `${SITE_NAME} - Premium Master's & PhD Dissertation Support`
    : `${title} | ${SITE_NAME}`;
  
  // Normalize canonical: strip site URL prefix if accidentally passed as full URL
  const normalizedCanonical = canonical?.startsWith(SITE_URL) 
    ? canonical.slice(SITE_URL.length) 
    : canonical;
  const fullUrl = normalizedCanonical ? `${SITE_URL}${normalizedCanonical}` : SITE_URL;
  
  // Determine OG image: explicit image > category-based > path-based > default
  const resolvedImage = image 
    ? image 
    : ogCategory 
      ? getOGImageByCategory(ogCategory)
      : normalizedCanonical 
        ? getOGImageForPath(normalizedCanonical)
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
  const isHomepage = !normalizedCanonical || normalizedCanonical === '/';
  const isRegionalPage = normalizedCanonical && ['/us', '/uk', '/au', '/ca'].includes(normalizedCanonical);
  
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

      {/* Dynamic geographic targeting based on geoRegion prop */}
      <meta name="geo.region" content={geo.code} />
      <meta name="geo.position" content={geo.coords.replace(', ', ';')} />
      <meta name="ICBM" content={geo.coords} />
      <meta name="geo.placename" content={geo.placename} />
      
      {/* All target markets */}
      <meta name="geo.country" content="US" />
      <meta name="geo.country" content="GB" />
      <meta name="geo.country" content="AU" />
      <meta name="geo.country" content="CA" />
      
      {/* Dublin Core for academic crawlers */}
      <meta name="DC.coverage" content={geo.placename} />
      <meta name="DC.coverage.spatial" content="United States; United Kingdom; Australia; Canada" />

      {/* Language and content targeting */}
      <meta httpEquiv="content-language" content={geo.lang} />
      <meta name="language" content="English" />
      <meta name="audience" content="Graduate Students, PhD Candidates, Masters Students, Working Professionals" />
      <meta name="coverage" content="United States, United Kingdom, Australia, Canada" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="Graduate Students" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={fullTitle} />
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