import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  noindex?: boolean;
}

const SITE_NAME = 'DissertlyPro';
const SITE_URL = 'https://dissertlypro.com';
const DEFAULT_IMAGE = '/og-image.jpg';

const SEO = ({
  title,
  description,
  canonical,
  type = 'website',
  image = DEFAULT_IMAGE,
  publishedTime,
  modifiedTime,
  author,
  keywords = [],
  noindex = false,
}: SEOProps) => {
  const fullTitle = title === 'Home' 
    ? `${SITE_NAME} - Premium Master's & PhD Dissertation Support`
    : `${title} | ${SITE_NAME}`;
  
  const fullUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

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

  // Generate hreflang URLs for international targeting
  const hreflangRegions = [
    { lang: 'en-US', region: 'us' },
    { lang: 'en-GB', region: 'uk' },
    { lang: 'en-AU', region: 'au' },
    { lang: 'en-CA', region: 'ca' },
    { lang: 'en-NZ', region: 'nz' },
    { lang: 'en-IE', region: 'ie' },
    { lang: 'en-SG', region: 'sg' },
    { lang: 'en', region: null }, // Default English (x-default)
  ];

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

      {/* Hreflang tags for international SEO - UK, US, Australia, Canada + others */}
      {hreflangRegions.map(({ lang, region }) => (
        <link 
          key={lang}
          rel="alternate" 
          hrefLang={lang} 
          href={region ? `${SITE_URL}/${region}${canonical || ''}` : fullUrl} 
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

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

      {/* Additional SEO */}
      <meta name="theme-color" content="#0f1629" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    </Helmet>
  );
};

export default SEO;