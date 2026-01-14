import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logoIcon from "/logo-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { title: "Dissertation Proposals", href: "/services/dissertation-proposal" },
      { title: "Thesis Writing", href: "/services/thesis-writing" },
      { title: "Research Methodology", href: "/services/methodology" },
      { title: "Data Analysis", href: "/services/data-analysis" },
      { title: "Literature Reviews", href: "/services/literature-review" },
      { title: "Editing & Proofreading", href: "/services/editing" },
    ],
    company: [
      { title: "About Us", href: "/about" },
      { title: "Our Experts", href: "/experts" },
      { title: "Blog & Resources", href: "/blog" },
      { title: "Pricing", href: "/pricing" },
      { title: "Contact", href: "/contact" },
    ],
    support: [
      { title: "Working Professionals", href: "/working-professionals" },
      { title: "Subjects Covered", href: "/subjects" },
      { title: "Ethics & Integrity", href: "/ethics" },
      { title: "FAQs", href: "/faq" },
      { title: "Free Consultation", href: "/consultation" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Academic Integrity", href: "/ethics" },
      { title: "GDPR Compliance", href: "/gdpr" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-midnight-rich to-midnight text-primary-foreground relative overflow-hidden pb-20 md:pb-0">
      {/* Decorative elements */}
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
      
      {/* Main Footer */}
      <div className="container py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 group">
              <img 
                src={logoIcon} 
                alt="DissertlyPro Logo" 
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl shadow-copper group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-serif font-bold tracking-tight">
                  Dissertly<span className="text-copper-light">Pro</span>
                </span>
                <span className="text-[9px] sm:text-[10px] text-primary-foreground/50 font-sans tracking-widest uppercase">
                  Master's & PhD Support
                </span>
              </div>
            </Link>
            <p className="text-ivory font-sans text-sm leading-relaxed mb-6 sm:mb-8 max-w-sm">
              Premium academic support for postgraduate students worldwide. Expert guidance with complete confidentiality.
            </p>
            <div className="space-y-2.5 sm:space-y-3.5 text-sm font-sans">
              <a href="mailto:support@dissertlypro.com" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/60 hover:text-copper transition-colors group">
                <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-copper/10 transition-colors">
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="text-xs sm:text-sm">support@dissertlypro.com</span>
              </a>
              <a href="tel:+1-800-555-0199" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/60 hover:text-copper transition-colors group">
                <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-copper/10 transition-colors">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="text-xs sm:text-sm">+1 (800) 555-0199</span>
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-primary-foreground/60">
                <div className="p-1.5 sm:p-2 rounded-lg bg-white/5">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="text-xs sm:text-sm">Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-sm sm:text-base mb-4 sm:mb-5 text-primary-foreground">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.slice(0, 4).map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm font-sans text-primary-foreground/60 hover:text-copper transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif font-semibold text-sm sm:text-base mb-4 sm:mb-5 text-primary-foreground">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm font-sans text-primary-foreground/60 hover:text-copper transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block">
            <h4 className="font-serif font-semibold text-base mb-5 text-primary-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm font-sans text-primary-foreground/60 hover:text-copper transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container py-4 sm:py-6 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-sans text-primary-foreground/40 text-center sm:text-left">
            © {currentYear} DissertlyPro. All rights reserved.
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
              { icon: Facebook, label: "Facebook" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 text-primary-foreground/50 hover:text-copper hover:bg-copper/10 transition-all touch-manipulation active:scale-95"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
