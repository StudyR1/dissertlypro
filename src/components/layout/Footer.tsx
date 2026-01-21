import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import logoIcon from "/logo-icon.png";

const regions = [
  { code: 'us', name: 'United States', flag: '🇺🇸', path: '/us' },
  { code: 'uk', name: 'United Kingdom', flag: '🇬🇧', path: '/uk' },
  { code: 'au', name: 'Australia', flag: '🇦🇺', path: '/au' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦', path: '/ca' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [regionOpen, setRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setRegionOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRegionSelect = (region: typeof regions[0]) => {
    setSelectedRegion(region.code);
    setRegionOpen(false);
    navigate(region.path);
  };

  const footerLinks = {
    services: [
      { title: "Dissertation Proposals", href: "/services/dissertation-proposal" },
      { title: "Thesis Writing", href: "/services/thesis-writing" },
      { title: "Research Methodology", href: "/services/methodology" },
      { title: "Data Analysis", href: "/services/data-analysis" },
      { title: "Literature Reviews", href: "/services/literature-review" },
      { title: "Editing & Proofreading", href: "/services/editing" },
    ],
    resources: [
      { title: "Supervisor Guide", href: "/supervisor-guide" },
      { title: "Academic Glossary", href: "/glossary" },
      { title: "Glossary Quiz", href: "/tools/glossary-quiz" },
      { title: "Flashcards", href: "/tools/glossary-flashcards" },
      { title: "Free Tools", href: "/tools" },
      { title: "Blog & Articles", href: "/blog" },
    ],
    company: [
      { title: "About Us", href: "/about" },
      { title: "Our Experts", href: "/experts" },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
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
              <a href="tel:+18126905122" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/60 hover:text-copper transition-colors group">
                <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-copper/10 transition-colors">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="text-xs sm:text-sm">+1 (812) 690-5122</span>
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
              {footerLinks.services.slice(0, 5).map((link) => (
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

          {/* Resources - NEW */}
          <div>
            <h4 className="font-serif font-semibold text-sm sm:text-base mb-4 sm:mb-5 text-primary-foreground">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
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

          {/* Legal */}
          <div>
            <h4 className="font-serif font-semibold text-sm sm:text-base mb-4 sm:mb-5 text-primary-foreground">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container py-4 sm:py-6 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-sans text-primary-foreground/40 text-center sm:text-left">
            © {currentYear} DissertlyPro. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Region Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setRegionOpen(!regionOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-primary-foreground/70 hover:text-primary-foreground transition-all text-sm font-sans"
                aria-expanded={regionOpen}
                aria-haspopup="listbox"
                aria-label="Select region"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {selectedRegion 
                    ? regions.find(r => r.code === selectedRegion)?.name 
                    : 'Select Region'}
                </span>
                <span className="sm:hidden">
                  {selectedRegion 
                    ? regions.find(r => r.code === selectedRegion)?.flag 
                    : '🌐'}
                </span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${regionOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {regionOpen && (
                <div 
                  className="absolute bottom-full mb-2 left-0 sm:left-auto sm:right-0 w-48 bg-midnight-rich border border-white/10 rounded-lg shadow-elevated z-50 overflow-hidden"
                  role="listbox"
                >
                  <div className="py-1">
                    {regions.map((region) => (
                      <button
                        key={region.code}
                        onClick={() => handleRegionSelect(region)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-sans transition-colors text-left ${
                          selectedRegion === region.code
                            ? 'bg-copper/10 text-copper'
                            : 'text-primary-foreground/70 hover:bg-white/5 hover:text-primary-foreground'
                        }`}
                        role="option"
                        aria-selected={selectedRegion === region.code}
                      >
                        <span className="text-lg">{region.flag}</span>
                        <span>{region.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Social Links */}
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
      </div>
    </footer>
  );
};

export default Footer;
