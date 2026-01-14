import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, FileText, BarChart3, HelpCircle, Users, Building2 } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logoIcon from "/logo-icon.png";

const services = [
  { title: "Dissertation Proposal", href: "/services/dissertation-proposal", description: "Expert guidance on research proposals", icon: FileText },
  { title: "Thesis Writing", href: "/services/thesis-writing", description: "Comprehensive writing support", icon: BookOpen },
  { title: "Research Methodology", href: "/services/methodology", description: "Qualitative & quantitative design", icon: BarChart3 },
  { title: "Data Analysis", href: "/services/data-analysis", description: "SPSS, R, STATA, NVivo experts", icon: BarChart3 },
  { title: "Literature Review", href: "/services/literature-review", description: "Thematic analysis & reviews", icon: BookOpen },
  { title: "Editing & Proofreading", href: "/services/editing", description: "Academic English & citations", icon: FileText },
];

const featuredPosts = [
  { title: "How to Write a Dissertation", href: "/blog/how-to-write-dissertation-complete-guide", tag: "Guide" },
  { title: "SPSS Tutorial for Data Analysis", href: "/blog/spss-tutorial-dissertation-data-analysis", tag: "Tutorial" },
  { title: "Thematic Analysis Guide", href: "/blog/thematic-analysis-dissertation-guide", tag: "Methods" },
];

const aboutLinks = [
  { title: "About Us", href: "/about", description: "Our story and mission", icon: Building2 },
  { title: "Our Experts", href: "/experts", description: "Meet our PhD specialists", icon: Users },
  { title: "FAQs", href: "/faq", description: "Common questions answered", icon: HelpCircle },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: "Services", href: "/services", hasDropdown: "services" },
    { title: "Subjects", href: "/subjects" },
    { title: "Professionals", href: "/working-professionals" },
    { title: "Pricing", href: "/pricing" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about", hasDropdown: "about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <img 
            src={logoIcon} 
            alt="DissertlyPro Logo" 
            width={48}
            height={48}
            loading="eager"
            decoding="async"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl shadow-subtle group-hover:shadow-card transition-all duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-serif font-bold text-foreground tracking-tight">
              Dissertly<span className="text-gradient-copper">Pro</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-muted-foreground font-sans tracking-widest uppercase hidden xs:block">
              Master's & PhD Support
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-0.5">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                {link.hasDropdown === "services" ? (
                    <>
                      <NavigationMenuTrigger className="h-10 px-4 font-sans text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-foreground transition-colors bg-transparent">
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[680px] p-5">
                          <div className="grid grid-cols-5 gap-5">
                            {/* Services Column */}
                            <div className="col-span-3">
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">Our Services</h4>
                              <ul className="grid grid-cols-2 gap-1.5">
                                {services.map((service) => (
                                  <li key={service.title}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={service.href}
                                        className="flex items-start gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-cream-warm group"
                                      >
                                        <service.icon className="h-4 w-4 mt-0.5 text-copper/70 group-hover:text-copper transition-colors shrink-0" />
                                        <div>
                                          <div className="text-sm font-medium leading-none font-sans group-hover:text-copper transition-colors">{service.title}</div>
                                          <p className="text-xs leading-snug text-muted-foreground mt-1">
                                            {service.description}
                                          </p>
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                              <div className="border-t border-border pt-3 mt-3">
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/services"
                                    className="flex items-center gap-2 rounded-lg p-2 text-sm font-medium text-copper hover:bg-cream-warm transition-all"
                                  >
                                    View All Services →
                                  </Link>
                                </NavigationMenuLink>
                              </div>
                            </div>
                            
                            {/* Featured Posts Column */}
                            <div className="col-span-2 bg-cream-warm/50 rounded-xl p-4">
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Featured Articles</h4>
                              <ul className="space-y-2">
                                {featuredPosts.map((post) => (
                                  <li key={post.title}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={post.href}
                                        className="block rounded-lg p-2.5 hover:bg-background transition-all group"
                                      >
                                        <span className="text-[10px] font-semibold text-copper uppercase tracking-wider">{post.tag}</span>
                                        <div className="text-sm font-medium leading-snug font-sans group-hover:text-copper transition-colors mt-0.5">
                                          {post.title}
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/blog"
                                  className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50 text-xs font-medium text-copper hover:text-copper-dark transition-colors"
                                >
                                  Browse All Articles →
                                </Link>
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : link.hasDropdown === "about" ? (
                    <>
                      <NavigationMenuTrigger className="h-10 px-4 font-sans text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-foreground transition-colors bg-transparent">
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-[280px] p-3">
                          {aboutLinks.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.href}
                                  className="flex items-start gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-cream-warm group"
                                >
                                  <item.icon className="h-4 w-4 mt-0.5 text-copper/70 group-hover:text-copper transition-colors shrink-0" />
                                  <div>
                                    <div className="text-sm font-medium leading-none font-sans group-hover:text-copper transition-colors">{item.title}</div>
                                    <p className="text-xs leading-snug text-muted-foreground mt-1">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "flex h-10 items-center px-4 text-sm font-medium font-sans transition-colors rounded-lg hover:bg-cream-warm",
                        location.pathname === link.href
                          ? "text-copper"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.title}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="midnight-outline" size="sm" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
          <Button variant="copper" size="sm" asChild>
            <Link to="/consultation">Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 -mr-2 text-foreground rounded-lg hover:bg-cream-warm transition-colors active:scale-95 touch-manipulation"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-xl animate-fade-in fixed inset-x-0 top-16 sm:top-20 bottom-0 z-50 overflow-y-auto">
          <nav className="container py-4 px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className={cn(
                  "flex items-center py-4 px-4 text-base font-medium font-sans rounded-xl transition-all active:scale-[0.98] touch-manipulation",
                  location.pathname === link.href
                    ? "bg-cream-warm text-copper"
                    : "text-muted-foreground hover:bg-cream-warm hover:text-foreground active:bg-cream-warm"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-border mt-4">
              <Button variant="midnight-outline" className="w-full h-12 text-base touch-manipulation" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </Button>
              <Button variant="copper" className="w-full h-12 text-base touch-manipulation" asChild>
                <Link to="/consultation" onClick={() => setIsOpen(false)}>Free Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
