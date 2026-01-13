import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

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
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold shadow-gold">
                <GraduationCap className="h-6 w-6 text-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-semibold tracking-tight">
                  Scholarly<span className="text-gold">Edge</span>
                </span>
                <span className="text-xs text-primary-foreground/70 font-sans tracking-wide">
                  Master's & PhD Research Support
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 font-sans text-sm leading-relaxed mb-6 max-w-sm">
              Premium academic support exclusively for postgraduate students. We help Master's and PhD candidates 
              navigate the complexities of advanced research with expert guidance and unwavering confidentiality.
            </p>
            <div className="space-y-3 text-sm font-sans">
              <a href="mailto:support@scholarlyedge.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="h-4 w-4" />
                support@scholarlyedge.com
              </a>
              <a href="tel:+1-800-555-0199" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="h-4 w-4" />
                +1 (800) 555-0199
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                Available Worldwide
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors"
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
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-sans text-primary-foreground/60">
            © {currentYear} ScholarlyEdge. All rights reserved. Committed to academic excellence.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
