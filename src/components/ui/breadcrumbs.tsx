import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "@/components/schemas";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Route to label mapping for automatic breadcrumb generation
const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/services': 'Services',
  '/about': 'About Us',
  '/experts': 'Our Experts',
  '/subjects': 'Subjects',
  '/working-professionals': 'Working Professionals',
  '/pricing': 'Pricing',
  '/blog': 'Blog',
  '/faq': 'FAQ',
  '/ethics': 'Ethics',
  '/contact': 'Contact',
  '/consultation': 'Consultation',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
  '/gdpr': 'GDPR',
};

// Service page labels
const serviceLabels: Record<string, string> = {
  'dissertation-proposal': 'Dissertation Proposal',
  'thesis-writing': 'Thesis Writing',
  'methodology': 'Research Methodology',
  'data-analysis': 'Data Analysis',
  'literature-review': 'Literature Review',
  'editing': 'Editing & Proofreading',
};

export const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Generate breadcrumbs automatically if not provided
  const breadcrumbItems: BreadcrumbItem[] = items || (() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const crumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Check if it's a service detail page
      if (pathSegments[0] === 'services' && index === 1) {
        crumbs.push({
          label: serviceLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
          href: isLast ? undefined : currentPath,
        });
      } else if (pathSegments[0] === 'blog' && index === 1) {
        crumbs.push({
          label: segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
          href: isLast ? undefined : currentPath,
        });
      } else {
        crumbs.push({
          label: routeLabels[currentPath] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
          href: isLast ? undefined : currentPath,
        });
      }
    });
    
    return crumbs;
  })();

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  // Prepare schema items
  const schemaItems = breadcrumbItems.map((item, index) => ({
    name: item.label,
    url: item.href ? `https://dissertlypro.com${item.href}` : `https://dissertlypro.com${location.pathname}`,
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav 
        aria-label="Breadcrumb" 
        className={`py-3 sm:py-4 ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground/50 mx-1 sm:mx-2 shrink-0" />
              )}
              {item.href ? (
                <Link
                  to={item.href}
                  className="flex items-center gap-1 text-muted-foreground hover:text-copper transition-colors"
                >
                  {index === 0 && <Home className="h-3.5 w-3.5" />}
                  <span className={index === 0 ? "sr-only sm:not-sr-only" : ""}>{item.label}</span>
                </Link>
              ) : (
                <span className="text-foreground font-medium truncate max-w-[200px]">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
