import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, FileText, BarChart3, HelpCircle, Users, Building2, Heart, UserCheck, Scale, Clock, Calculator, Receipt, Calendar, Mic, Briefcase, Brain, Search, GraduationCap, Quote, Target, Layers, Globe, PenTool, Award, DollarSign, Network, Newspaper, Factory, MapPin, BookMarked, Edit3, GanttChart, Wrench, Shield, PieChart, Combine, Download, ListTree, Home } from "lucide-react";
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
import { motion, AnimatePresence } from "framer-motion";

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

const technicalDeepDives = [
  { title: "AI in Academia", href: "/ai-academia", description: "Ethical AI use & policies", icon: Brain, isNew: true },
  { title: "SPSS Tutorial", href: "/spss-tutorial", description: "Quantitative data analysis", icon: BarChart3 },
  { title: "NVivo Tutorial", href: "/nvivo-tutorial", description: "Qualitative software guide", icon: Brain },
  { title: "Systematic Review", href: "/systematic-literature-review", description: "PRISMA methodology", icon: Search },
  { title: "Mixed Methods", href: "/mixed-methods-research", description: "Combining qual + quant", icon: Combine },
  { title: "IRB/Ethics Guide", href: "/irb-ethics-guide", description: "Ethics approval steps", icon: Shield },
  { title: "Data Visualization", href: "/data-visualization", description: "Charts, figures & tables", icon: PieChart },
  { title: "Research Methodology", href: "/research-methodology", description: "Qual, quant & mixed", icon: Brain },
  { title: "Literature Review", href: "/literature-review-guide", description: "Search & synthesize", icon: BookOpen },
  { title: "Free Templates", href: "/templates", description: "Proposal & chapter templates", icon: Download },
];

const resourceLinks = [
  { title: "Supervisor Guide", href: "/supervisor-guide", description: "Navigate advisor relationships", icon: UserCheck },
  { title: "PhD Mental Health", href: "/phd-mental-health", description: "Wellness resources for researchers", icon: Heart },
  { title: "Committee Conflicts", href: "/committee-conflicts", description: "Resolve academic disputes", icon: Scale },
  { title: "Deadlines & Deferrals", href: "/deadlines-deferrals", description: "Extension strategies that work", icon: Calendar },
  { title: "Viva Preparation", href: "/viva-preparation", description: "Ace your oral examination", icon: Mic },
  { title: "Part-Time PhD", href: "/part-time-phd", description: "Balance work and research", icon: Briefcase },
  { title: "Candidacy Exams", href: "/candidacy-exams", description: "Comprehensive exam strategies", icon: Award },
  { title: "PhD Funding", href: "/phd-funding", description: "Grants, fellowships & stipends", icon: DollarSign },
  { title: "Academic Networking", href: "/academic-networking", description: "Build your research network", icon: Network },
  { title: "PhD Publishing", href: "/phd-publishing", description: "Journal publication guide", icon: Newspaper },
  { title: "PhD to Industry", href: "/phd-industry", description: "Non-academic career paths", icon: Factory },
  { title: "International PhD", href: "/international-phd", description: "Global doctoral programs", icon: MapPin },
  { title: "Dissertation Structure", href: "/dissertation-structure", description: "Chapter-by-chapter blueprint", icon: BookMarked },
  { title: "Dissertation Writing", href: "/dissertation-writing", description: "Writing strategies & tips", icon: Edit3 },
  { title: "View All PhD Resources", href: "/phd-resources", description: "20+ guides for doctoral students", icon: GraduationCap },
];

const mastersResourceLinks = [
  { title: "Master's Thesis Guide", href: "/masters-thesis-guide", description: "Complete A-Z thesis roadmap", icon: GraduationCap },
  { title: "Dissertation vs Thesis", href: "/dissertation-vs-thesis", description: "Key differences explained", icon: Scale },
  { title: "Career-Boosting Topics", href: "/thesis-topic-selection", description: "Strategic topic selection", icon: Briefcase },
  { title: "Research Questions", href: "/research-questions", description: "PICO framework & feasibility", icon: Target },
  { title: "Thesis Structure", href: "/thesis-structure", description: "Chapter-by-chapter blueprint", icon: Layers },
  { title: "Accelerated Master's", href: "/accelerated-masters", description: "Complete in 12-18 months", icon: Clock },
  { title: "Coursework to Thesis", href: "/coursework-to-thesis", description: "Convert course papers", icon: FileText },
  { title: "Limited Supervision", href: "/limited-supervision", description: "Thrive with absent advisors", icon: Users },
  { title: "International Students", href: "/international-students", description: "ESL thesis writing guide", icon: Globe },
  { title: "Committee Communication", href: "/committee-communication", description: "Email templates & protocols", icon: Users },
  { title: "Academic Writing", href: "/academic-writing", description: "Master thesis-level writing", icon: PenTool },
  { title: "Qualitative Analysis", href: "/qualitative-analysis", description: "Coding & thematic analysis", icon: Brain },
  { title: "Master's Defense Prep", href: "/masters-defense", description: "Ace your oral exam", icon: Mic },
  { title: "Citation Mastery", href: "/citation-mastery", description: "APA, MLA, Chicago styles", icon: Quote },
  { title: "View All Master's Resources", href: "/masters-resources", description: "20+ guides for master's students", icon: GraduationCap },
];

const toolLinks = [
  { title: "Personalization Quiz", href: "/tools/personalization-quiz", description: "Get tailored recommendations", icon: Brain },
  { title: "Outline Generator", href: "/tools/outline-generator", description: "Chapter structure builder", icon: ListTree },
  { title: "DIY vs Expert", href: "/tools/diy-comparison", description: "Compare costs & time", icon: Scale },
  { title: "Deadline Checker", href: "/tools/deadline-checker", description: "Assess your timeline risk", icon: Clock },
  { title: "Word Counter", href: "/tools/word-counter", description: "Calculate your word count", icon: Calculator },
  { title: "Quote Calculator", href: "/tools/quote-calculator", description: "Instant pricing estimate", icon: Receipt },
  { title: "Timeline Planner", href: "/tools/chapter-planner", description: "Gantt-style chapter schedule", icon: GanttChart },
  { title: "Citation Generator", href: "/tools/citation-generator", description: "APA, MLA, Chicago, Harvard", icon: Quote },
  { title: "Thesis Builder", href: "/tools/thesis-builder", description: "Build strong thesis statements", icon: FileText },
  { title: "RQ Validator", href: "/tools/research-question-validator", description: "PICO & SPIDER frameworks", icon: HelpCircle },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services", hasDropdown: "services" },
    { title: "Subjects", href: "/subjects" },
    { title: "Professionals", href: "/working-professionals" },
    { title: "Pricing", href: "/pricing" },
    { title: "Resources", href: "/resources", hasDropdown: "resources" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about", hasDropdown: "about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background backdrop-blur-xl">
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
                      <NavigationMenuContent className="data-[motion=from-start]:animate-none data-[motion=from-end]:animate-none data-[motion=to-start]:animate-none data-[motion=to-end]:animate-none">
                        <motion.div 
                          className="w-[680px] p-5"
                          initial={{ opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <div className="grid grid-cols-5 gap-5">
                            {/* Services Column */}
                            <div className="col-span-3">
                              <motion.h4 
                                className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 }}
                              >
                                Our Services
                              </motion.h4>
                              <ul className="grid grid-cols-2 gap-1.5">
                                {services.map((service, index) => (
                                  <motion.li 
                                    key={service.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.03 * index, duration: 0.15 }}
                                  >
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
                                  </motion.li>
                                ))}
                              </ul>
                              <motion.div 
                                className="border-t border-border pt-3 mt-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                              >
                                <NavigationMenuLink asChild>
                                  <Link
                                    to="/services"
                                    className="flex items-center gap-2 rounded-lg p-2 text-sm font-medium text-copper hover:bg-cream-warm transition-all"
                                  >
                                    View All Services →
                                  </Link>
                                </NavigationMenuLink>
                              </motion.div>
                            </div>
                            
                            {/* Featured Posts Column */}
                            <motion.div 
                              className="col-span-2 bg-cream-warm/50 rounded-xl p-4"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1, duration: 0.2 }}
                            >
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Featured Articles</h4>
                              <ul className="space-y-2">
                                {featuredPosts.map((post, index) => (
                                  <motion.li 
                                    key={post.title}
                                    initial={{ opacity: 0, x: 5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 + 0.05 * index }}
                                  >
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
                                  </motion.li>
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
                            </motion.div>
                          </div>
                        </motion.div>
                      </NavigationMenuContent>
                    </>
                  ) : link.hasDropdown === "resources" ? (
                    <>
                      <NavigationMenuTrigger className="h-10 px-4 font-sans text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-foreground transition-colors bg-transparent">
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="data-[motion=from-start]:animate-none data-[motion=from-end]:animate-none data-[motion=to-start]:animate-none data-[motion=to-end]:animate-none">
                        <motion.div 
                          className="w-[800px] p-5"
                          initial={{ opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <div className="grid grid-cols-4 gap-5">
                            {/* Technical Deep-Dives Column */}
                            <div className="col-span-1">
                              <motion.h4 
                                className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 }}
                              >
                                Technical Deep-Dives
                              </motion.h4>
                              <ul className="space-y-1.5">
                                {technicalDeepDives.slice(0, 4).map((item, index) => (
                                  <motion.li 
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.03 * index, duration: 0.15 }}
                                  >
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={item.href}
                                        className="flex items-start gap-3 select-none rounded-lg p-2.5 leading-none no-underline outline-none transition-all hover:bg-cream-warm group"
                                      >
                                        <item.icon className="h-4 w-4 mt-0.5 text-copper/70 group-hover:text-copper transition-colors shrink-0" />
                                        <div className="flex-1">
                                          <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium leading-none font-sans group-hover:text-copper transition-colors">{item.title}</span>
                                            {'isNew' in item && item.isNew && (
                                              <span className="text-[9px] font-bold uppercase tracking-wider bg-copper text-white px-1.5 py-0.5 rounded-full">
                                                New
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-xs leading-snug text-muted-foreground mt-1">
                                            {item.description}
                                          </p>
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* PhD Academic Guides Column */}
                            <div className="col-span-1">
                              <motion.h4 
                                className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.08 }}
                              >
                                PhD Guides
                              </motion.h4>
                              <ul className="space-y-1">
                                {resourceLinks.map((item, index) => (
                                  <motion.li 
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.03 * (index + 3), duration: 0.15 }}
                                  >
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={item.href}
                                        className="flex items-start gap-2 select-none rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-cream-warm group"
                                      >
                                        <item.icon className="h-3.5 w-3.5 mt-0.5 text-copper/70 group-hover:text-copper transition-colors shrink-0" />
                                        <div>
                                          <div className="text-xs font-medium leading-none font-sans group-hover:text-copper transition-colors">{item.title}</div>
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Master's Thesis Column */}
                            <motion.div 
                              className="col-span-1 bg-copper/5 rounded-xl p-4"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1, duration: 0.2 }}
                            >
                              <h4 className="text-xs font-semibold text-copper uppercase tracking-wider mb-3">Master's Thesis</h4>
                              <ul className="space-y-1.5">
                                {mastersResourceLinks.map((item, index) => (
                                  <motion.li 
                                    key={item.title}
                                    initial={{ opacity: 0, x: 5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.12 + 0.05 * index }}
                                  >
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={item.href}
                                        className="flex items-start gap-2 w-full select-none rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-background group text-left"
                                      >
                                        <item.icon className="h-4 w-4 mt-0.5 text-copper/70 group-hover:text-copper transition-colors shrink-0" />
                                        <div>
                                          <div className="text-xs font-medium leading-none font-sans group-hover:text-copper transition-colors">{item.title}</div>
                                          <p className="text-[10px] leading-snug text-muted-foreground mt-0.5">
                                            {item.description}
                                          </p>
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                            
                            {/* Tools Column */}
                            <motion.div 
                              className="col-span-1 bg-cream-warm/50 rounded-xl p-4"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.15, duration: 0.2 }}
                            >
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Quick Tools</h4>
                              <ul className="space-y-1.5">
                                {toolLinks.map((tool, index) => (
                                  <motion.li 
                                    key={tool.title}
                                    initial={{ opacity: 0, x: 5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.18 + 0.05 * index }}
                                  >
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={tool.href}
                                        className="flex items-start gap-2 w-full select-none rounded-lg p-2 leading-none no-underline outline-none transition-all hover:bg-background group text-left"
                                      >
                                        <tool.icon className="h-4 w-4 mt-0.5 text-copper/70 group-hover:text-copper transition-colors shrink-0" />
                                        <div>
                                          <div className="text-xs font-medium leading-none font-sans group-hover:text-copper transition-colors">{tool.title}</div>
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </motion.li>
                                ))}
                              </ul>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/tools"
                                  className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50 text-xs font-medium text-copper hover:text-copper-dark transition-colors"
                                >
                                  <Wrench className="h-3.5 w-3.5" />
                                  View All Free Tools →
                                </Link>
                              </NavigationMenuLink>
                            </motion.div>
                          </div>
                          <motion.div 
                            className="border-t border-border pt-3 mt-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                to="/resources"
                                className="flex items-center gap-2 rounded-lg p-2 text-sm font-medium text-copper hover:bg-cream-warm transition-all"
                              >
                                View All Resources →
                              </Link>
                            </NavigationMenuLink>
                          </motion.div>
                        </motion.div>
                      </NavigationMenuContent>
                    </>
                  ) : link.hasDropdown === "about" ? (
                    <>
                      <NavigationMenuTrigger className="h-10 px-4 font-sans text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-foreground transition-colors bg-transparent">
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="data-[motion=from-start]:animate-none data-[motion=from-end]:animate-none data-[motion=to-start]:animate-none data-[motion=to-end]:animate-none">
                        <motion.ul 
                          className="w-[280px] p-3"
                          initial={{ opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {aboutLinks.map((item, index) => (
                            <motion.li 
                              key={item.title}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.03 * index, duration: 0.15 }}
                            >
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
                            </motion.li>
                          ))}
                        </motion.ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "flex h-10 items-center gap-1.5 px-4 text-sm font-medium font-sans transition-colors rounded-lg hover:bg-cream-warm",
                        location.pathname === link.href
                          ? "text-copper"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.href === "/" && <Home className="h-4 w-4" />}
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
            <Link to="/order">Order Now</Link>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-background/98 backdrop-blur-xl fixed inset-x-0 top-16 sm:top-20 bottom-0 z-50 overflow-y-auto momentum-scroll"
          >
            <nav className="container py-4 px-4 space-y-1 pb-24">
              {/* Quick Access Section */}
              <div className="grid grid-cols-2 gap-2 mb-4 pb-4 border-b border-border">
                {services.slice(0, 4).map((service) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="flex items-center gap-2 p-3 rounded-xl bg-cream-warm/50 text-sm font-medium text-foreground active:scale-[0.98] touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="h-4 w-4 text-copper" />
                    <span className="truncate">{service.title.split(' ')[0]}</span>
                  </Link>
                ))}
              </div>
              
              {navLinks.filter(link => link.href !== "#").map((link) => (
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
              
              {/* Technical Deep-Dives Section on Mobile */}
              <div className="pt-2 mt-2 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider px-4 py-2">Technical Deep-Dives</p>
                <div className="space-y-1">
                  {resourceLinks.slice(0, 3).map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-center gap-3 py-3 px-4 text-sm font-medium font-sans text-muted-foreground rounded-xl hover:bg-cream-warm hover:text-foreground active:bg-cream-warm touch-manipulation"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-4 w-4 text-copper/70" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* PhD Resources Section on Mobile */}
              <div className="pt-2 mt-2 border-t border-border">
                <p className="text-xs text-copper uppercase tracking-wider px-4 py-2">PhD Resources</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {resourceLinks.slice(3).map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-center gap-2 py-2 px-2.5 text-xs font-medium font-sans text-muted-foreground rounded-lg hover:bg-cream-warm hover:text-foreground active:bg-cream-warm touch-manipulation"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-3.5 w-3.5 text-copper/70 flex-shrink-0" />
                      <span className="truncate text-[11px]">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Master's Thesis Section on Mobile */}
              <div className="pt-2 mt-2 border-t border-border">
                <p className="text-xs text-copper uppercase tracking-wider px-4 py-2">Master's Thesis</p>
                <div className="space-y-1">
                  {mastersResourceLinks.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-center gap-3 py-3 px-4 text-sm font-medium font-sans text-muted-foreground rounded-xl hover:bg-cream-warm hover:text-foreground active:bg-cream-warm touch-manipulation"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-4 w-4 text-copper/70" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Quick Tools Section on Mobile */}
              <div className="pt-2 mt-2 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider px-4 py-2">Quick Tools</p>
                <div className="grid grid-cols-3 gap-2">
                  {toolLinks.map((tool) => (
                    <Link
                      key={tool.title}
                      to={tool.href}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-cream-warm/50 text-sm font-medium text-foreground active:scale-[0.98] touch-manipulation"
                    >
                      <tool.icon className="h-5 w-5 text-copper" />
                      <span className="text-xs text-center">{tool.title.split(' ')[0]}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/tools"
                  className="flex items-center justify-center gap-2 mt-3 py-2.5 px-4 text-sm font-medium text-copper border border-copper/20 rounded-xl hover:bg-copper/5 active:bg-copper/10 touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  <Wrench className="h-4 w-4" />
                  View All Free Tools
                </Link>
              </div>
              
              {/* About Sub-links on Mobile */}
              <div className="pt-2 mt-2 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider px-4 py-2">About Us</p>
                <div className="space-y-1">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-center gap-3 py-3 px-4 text-sm font-medium font-sans text-muted-foreground rounded-xl hover:bg-cream-warm hover:text-foreground active:bg-cream-warm touch-manipulation"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-4 w-4 text-copper/70" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 space-y-3 border-t border-border mt-4">
                <Button variant="midnight-outline" className="w-full h-12 text-base touch-manipulation" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </Button>
                <Button variant="copper" className="w-full h-12 text-base touch-manipulation" asChild>
                  <Link to="/order" onClick={() => setIsOpen(false)}>Order Now</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
