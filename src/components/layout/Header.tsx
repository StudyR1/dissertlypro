import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  { title: "Dissertation Proposal Development", href: "/services/dissertation-proposal", description: "Expert guidance on crafting compelling research proposals" },
  { title: "Thesis & Dissertation Writing", href: "/services/thesis-writing", description: "Comprehensive support throughout your writing journey" },
  { title: "Research Methodology Design", href: "/services/methodology", description: "Qualitative, quantitative, and mixed methods expertise" },
  { title: "Data Analysis Services", href: "/services/data-analysis", description: "SPSS, R, STATA, NVivo, and ATLAS.ti specialists" },
  { title: "Literature Review Support", href: "/services/literature-review", description: "Thematic analysis and comprehensive reviews" },
  { title: "Editing & Proofreading", href: "/services/editing", description: "Academic English and citation formatting" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services", hasDropdown: true },
    { title: "Subjects", href: "/subjects" },
    { title: "Working Professionals", href: "/working-professionals" },
    { title: "Pricing", href: "/pricing" },
    { title: "Blog", href: "/blog" },
    { title: "Ethics", href: "/ethics" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-midnight-rich to-midnight shadow-subtle group-hover:shadow-card transition-all duration-300 group-hover:scale-105">
            <GraduationCap className="h-6 w-6 text-copper" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-foreground tracking-tight">
              Dissertly<span className="text-gradient-copper">Pro</span>
            </span>
            <span className="text-[10px] text-muted-foreground font-sans tracking-widest uppercase">
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
                  {link.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="h-10 px-4 font-sans text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-foreground transition-colors bg-transparent">
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[520px] gap-2 p-4 md:grid-cols-2">
                          {services.map((service) => (
                            <li key={service.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={service.href}
                                  className="block select-none space-y-1 rounded-lg p-3.5 leading-none no-underline outline-none transition-all hover:bg-cream-warm hover:shadow-subtle focus:bg-cream-warm group"
                                >
                                  <div className="text-sm font-medium leading-none font-sans group-hover:text-copper transition-colors">{service.title}</div>
                                  <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1.5">
                                    {service.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                          <li className="col-span-2 border-t border-border pt-3 mt-2">
                            <NavigationMenuLink asChild>
                              <Link
                                to="/services"
                                className="flex items-center justify-center gap-2 rounded-lg p-3 text-sm font-medium text-copper hover:bg-cream-warm transition-all"
                              >
                                View All Services →
                              </Link>
                            </NavigationMenuLink>
                          </li>
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
          className="lg:hidden p-2.5 text-foreground rounded-lg hover:bg-cream-warm transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className={cn(
                  "block py-3.5 px-4 text-base font-medium font-sans rounded-lg transition-all",
                  location.pathname === link.href
                    ? "bg-cream-warm text-copper"
                    : "text-muted-foreground hover:bg-cream-warm hover:text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="pt-6 space-y-3 border-t border-border mt-4">
              <Button variant="midnight-outline" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </Button>
              <Button variant="copper" className="w-full" asChild>
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
