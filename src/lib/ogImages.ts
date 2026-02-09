// Open Graph image mapping for different page categories
// These images are stored in public/og-images/

export type OGImageCategory = 
  | 'default'
  | 'blog'
  | 'services'
  | 'tools'
  | 'resources'
  | 'universities'
  | 'ai-academia';

const ogImagePaths: Record<OGImageCategory, string> = {
  default: '/og-image.jpg',
  blog: '/og-images/og-blog.jpg',
  services: '/og-images/og-services.jpg',
  tools: '/og-images/og-tools.jpg',
  resources: '/og-images/og-resources.jpg',
  universities: '/og-images/og-universities.jpg',
  'ai-academia': '/og-images/og-ai-academia.jpg',
};

/**
 * Get the appropriate OG image based on the page path
 */
export const getOGImageForPath = (path: string): string => {
  // Blog posts and blog listing
  if (path.startsWith('/blog')) {
    return ogImagePaths.blog;
  }
  
  // Tools pages
  if (path.startsWith('/tools')) {
    return ogImagePaths.tools;
  }
  
  // Services pages
  if (path === '/services' || path.startsWith('/services/')) {
    return ogImagePaths.services;
  }
  
  // University guides
  if (path === '/universities' || path.startsWith('/uk/') || path.startsWith('/us/') || path.startsWith('/au/') || path.startsWith('/ca/')) {
    return ogImagePaths.universities;
  }
  
  // AI in Academia section
  if (path.startsWith('/ai-') || path === '/ai-academia' || path === '/citing-ai-guide') {
    return ogImagePaths['ai-academia'];
  }
  
  // Resource pages (PhD, Masters, guides)
  if (
    path.startsWith('/phd-') ||
    path.startsWith('/masters-') ||
    path === '/resources' ||
    path.includes('-guide') ||
    path.includes('-tutorial')
  ) {
    return ogImagePaths.resources;
  }
  
  return ogImagePaths.default;
};

/**
 * Get OG image by explicit category
 */
export const getOGImageByCategory = (category: OGImageCategory): string => {
  return ogImagePaths[category] || ogImagePaths.default;
};
