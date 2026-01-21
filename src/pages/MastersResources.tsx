import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, AggregateRatingSchema, LearningResourceSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import RelatedContent from "@/components/ui/RelatedContent";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search,
  BookOpen,
  BarChart3,
  Brain,
  Users,
  Scale,
  Calendar,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Clock,
  Sparkles,
  Filter,
  X,
  Mic,
  Quote,
  FileText,
  Target,
  Lightbulb,
  PenTool,
  CheckCircle,
  AlertTriangle,
  Zap,
  Globe,
  Award,
  Compass
} from "lucide-react";

type ResourceCategory = "all" | "core" | "specialized" | "technical";

interface Resource {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  category: "core" | "specialized" | "technical";
  tier: 1 | 2 | 3;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

const resources: Resource[] = [
  // Tier 1: Core Essential Guides
  {
    title: "Master's Thesis Survival Guide",
    description: "Complete A-Z roadmap for thesis success. 36-week timeline, common mistakes to avoid, and defense preparation strategies.",
    href: "/masters-thesis-guide",
    icon: GraduationCap,
    category: "core",
    tier: 1,
    readTime: "45 min",
    tags: ["Master's Thesis", "Timeline", "Thesis Writing", "Defense Prep"],
    featured: true
  },
  {
    title: "Dissertation vs Thesis Explained",
    description: "Understand the key differences between dissertations and theses. Regional variations, structural comparison, and career implications.",
    href: "/dissertation-vs-thesis",
    icon: Scale,
    category: "core",
    tier: 1,
    readTime: "25 min",
    tags: ["Dissertation", "Thesis", "Academic Terminology", "Degree Differences"],
    featured: true
  },
  {
    title: "Career-Boosting Thesis Topics",
    description: "Choose a thesis topic that advances your career. Industry-aligned ideas, selection frameworks, and strategic positioning guidance.",
    href: "/thesis-topic-selection",
    icon: Briefcase,
    category: "core",
    tier: 1,
    readTime: "30 min",
    tags: ["Topic Selection", "Career Alignment", "Research Ideas", "Industry Focus"],
    featured: true
  },
  {
    title: "Research Question Development",
    description: "Craft focused, researchable questions that pass committee scrutiny. PICO frameworks, scope refinement, and feasibility testing.",
    href: "/research-questions",
    icon: Target,
    category: "core",
    tier: 1,
    readTime: "25 min",
    tags: ["Research Questions", "Hypothesis", "Scope", "Feasibility"]
  },
  {
    title: "Thesis Structure Blueprint",
    description: "Chapter-by-chapter breakdown of master's thesis architecture. Templates, word count guides, and formatting standards.",
    href: "/thesis-structure",
    icon: FileText,
    category: "core",
    tier: 1,
    readTime: "30 min",
    tags: ["Thesis Structure", "Chapters", "Formatting", "Templates"]
  },
  
  // Tier 2: Specialized Niche Guides
  {
    title: "Accelerated Master's Programs",
    description: "Complete your master's degree in 12-18 months. Strategic planning, intensive scheduling, and success strategies for fast-track programs.",
    href: "/accelerated-masters",
    icon: Zap,
    category: "specialized",
    tier: 2,
    readTime: "30 min",
    tags: ["Accelerated", "Fast-Track", "Master's", "Time Management"]
  },
  {
    title: "Coursework to Thesis Conversion",
    description: "Transform your best course papers into thesis chapters. Strategic repurposing, expansion techniques, and committee negotiation strategies.",
    href: "/coursework-to-thesis",
    icon: BookOpen,
    category: "specialized",
    tier: 2,
    readTime: "25 min",
    tags: ["Coursework", "Thesis", "Conversion", "Academic Writing"]
  },
  {
    title: "Limited Supervision Success",
    description: "Thrive despite an absent or overwhelmed thesis advisor. Self-direction strategies, alternative support networks, and progress maintenance.",
    href: "/limited-supervision",
    icon: Users,
    category: "specialized",
    tier: 2,
    readTime: "30 min",
    tags: ["Supervision", "Self-Directed", "Independence", "Master's"]
  },
  {
    title: "Working While Writing",
    description: "Balance full-time employment with thesis completion. Evening writing routines, weekend productivity, and employer communication strategies.",
    href: "/working-professionals",
    icon: Briefcase,
    category: "specialized",
    tier: 2,
    readTime: "25 min",
    tags: ["Work-Life Balance", "Part-Time Study", "Time Management", "Professionals"]
  },
  {
    title: "International Student Thesis Guide",
    description: "Navigate thesis writing in a second language. Academic English conventions, cultural expectations, and support resources.",
    href: "/international-students",
    icon: Globe,
    category: "specialized",
    tier: 2,
    readTime: "30 min",
    tags: ["International", "ESL", "Academic English", "Cultural Norms"]
  },
  {
    title: "Thesis Extension & Deferral",
    description: "Navigate deadline extensions strategically. Documentation requirements, communication templates, and timeline renegotiation.",
    href: "/deadlines-deferrals",
    icon: Calendar,
    category: "specialized",
    tier: 2,
    readTime: "20 min",
    tags: ["Extensions", "Deferrals", "Deadlines", "Academic Administration"]
  },
  {
    title: "Committee Communication Mastery",
    description: "Manage advisor and committee expectations effectively. Email templates, meeting protocols, and feedback integration strategies.",
    href: "/committee-communication",
    icon: Users,
    category: "specialized",
    tier: 2,
    readTime: "25 min",
    tags: ["Committee", "Advisor", "Communication", "Academic Politics"]
  },
  {
    title: "Thesis Proposal Essentials",
    description: "Craft a compelling thesis proposal that gets approved. Structure, defense tips, and common revision requests.",
    href: "/services/dissertation-proposal",
    icon: FileText,
    category: "specialized",
    tier: 2,
    readTime: "35 min",
    tags: ["Proposal", "Approval", "Defense", "Planning"]
  },
  
  // Tier 3: Technical Deep-Dives
  {
    title: "Qualitative Analysis Guide",
    description: "Master thematic analysis, coding techniques, NVivo, and research trustworthiness for qualitative master's thesis research.",
    href: "/qualitative-analysis",
    icon: Brain,
    category: "technical",
    tier: 3,
    readTime: "8+ hours",
    tags: ["Qualitative", "Thematic Analysis", "Coding", "NVivo", "Master's"],
    featured: true
  },
  {
    title: "Master's Defense Preparation",
    description: "Presentation strategies, common questions, response techniques, and anxiety management for your thesis oral examination.",
    href: "/masters-defense",
    icon: Mic,
    category: "technical",
    tier: 3,
    readTime: "6+ hours",
    tags: ["Defense", "Oral Exam", "Presentation", "Master's"]
  },
  {
    title: "Citation Mastery Guide",
    description: "Complete guide to APA, MLA, Chicago, and Harvard styles. Reference management, plagiarism prevention, and citation strategies.",
    href: "/citation-mastery",
    icon: Quote,
    category: "technical",
    tier: 3,
    readTime: "7+ hours",
    tags: ["Citation", "APA", "MLA", "References", "Academic Writing"]
  },
  {
    title: "Literature Review Mastery",
    description: "From systematic search strategies to powerful synthesis techniques. Write reviews that establish expertise and justify research.",
    href: "/literature-review-guide",
    icon: BookOpen,
    category: "technical",
    tier: 3,
    readTime: "6+ hours",
    tags: ["Literature Review", "Synthesis", "Research Gap", "Academic Writing"]
  },
  {
    title: "Research Methodology Deep-Dive",
    description: "Comprehensive guide to qualitative, quantitative, and mixed methods. Sampling, validity, reliability, and data collection strategies.",
    href: "/research-methodology",
    icon: BarChart3,
    category: "technical",
    tier: 3,
    readTime: "8+ hours",
    tags: ["Methodology", "Research Design", "Qualitative", "Quantitative"]
  },
  {
    title: "Academic Writing Excellence",
    description: "Master thesis-level writing. Argumentation, paragraph structure, transitions, and academic voice development.",
    href: "/academic-writing",
    icon: PenTool,
    category: "technical",
    tier: 3,
    readTime: "5+ hours",
    tags: ["Academic Writing", "Style", "Voice", "Argumentation"]
  },
  {
    title: "Thesis Revision & Editing",
    description: "Self-editing strategies for polished submissions. Proofreading checklists, feedback integration, and final formatting.",
    href: "/services/editing",
    icon: CheckCircle,
    category: "technical",
    tier: 3,
    readTime: "4+ hours",
    tags: ["Editing", "Proofreading", "Revision", "Polishing"]
  }
];

const categories = [
  { id: "all" as const, label: "All Resources", count: resources.length, icon: Compass },
  { id: "core" as const, label: "Core Essentials", count: resources.filter(r => r.category === "core").length, icon: GraduationCap },
  { id: "specialized" as const, label: "Specialized Guides", count: resources.filter(r => r.category === "specialized").length, icon: Lightbulb },
  { id: "technical" as const, label: "Technical Deep-Dives", count: resources.filter(r => r.category === "technical").length, icon: Brain }
];

const MastersResources = () => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Master's Resources", url: "/masters-resources" }
  ];

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredResources = resources.filter(r => r.featured);

  const getTierLabel = (tier: number) => {
    switch (tier) {
      case 1: return "Essential Guide";
      case 2: return "Specialized Guide";
      case 3: return "Technical Deep-Dive";
      default: return "Guide";
    }
  };

  const getTierColor = (tier: number) => {
    switch (tier) {
      case 1: return "bg-green-500/10 text-green-600";
      case 2: return "bg-blue-500/10 text-blue-600";
      case 3: return "bg-purple-500/10 text-purple-600";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      <SEO 
        title="Master's Thesis Resources | Complete Guide Library | DissertlyPro"
        description="20+ free resources exclusively for master's students. Thesis guides, defense preparation, citation mastery, qualitative analysis, and specialized support for accelerated programs and working professionals."
        keywords={["master's thesis resources", "thesis writing guide", "masters defense preparation", "thesis topic selection", "accelerated masters", "citation styles guide", "qualitative analysis masters"]}
        canonical="https://dissertlypro.com/masters-resources"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={3124}
        itemName="DissertlyPro Master's Resources"
        itemType="EducationalOrganization"
      />
      <LearningResourceSchema
        name="Master's Thesis Resource Hub"
        description="Comprehensive guides, technical tutorials, and expert strategies designed specifically for master's students from topic selection to defense."
        url="/masters-resources"
        educationalLevel="Master's"
        audience="Master's Student"
        resources={resources.map(r => ({
          name: r.title,
          description: r.description,
          url: r.href,
          educationalLevel: "Master's",
          learningResourceType: r.tier === 3 ? "Tutorial" : "Guide",
          timeRequired: `PT${parseInt(r.readTime) || 30}M`,
          keywords: r.tags
        }))}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 3124 }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-copper/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-copper/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-copper/10 text-copper px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Exclusively for Master's Students
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Master's Thesis
              <span className="block text-copper mt-2">Resource Hub</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides, technical tutorials, and expert strategies designed specifically for master's students. 
              From topic selection to defense day—everything you need to succeed.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>{resources.length} In-Depth Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>50+ Hours of Content</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-copper" />
                <span>Master's-Focused</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-copper" />
              <h2 className="text-lg font-semibold text-foreground">Featured Master's Resources</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={resource.href}>
                    <Card className="border-copper/20 bg-gradient-to-br from-copper/5 to-transparent hover:border-copper/40 transition-all h-full hover:shadow-lg group">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center flex-shrink-0 group-hover:bg-copper/20 transition-colors">
                            <resource.icon className="w-6 h-6 text-copper" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-xs font-medium px-2 py-0.5 rounded ${getTierColor(resource.tier)}`}>
                                {resource.readTime}
                              </span>
                            </div>
                            <h3 className="font-semibold text-foreground group-hover:text-copper transition-colors line-clamp-2">
                              {resource.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {resource.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-background sticky top-16 sm:top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search master's resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10"
                  aria-label="Search master's resources"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {/* Category Filters */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category.id
                        ? "bg-copper text-white"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }`}
                    aria-pressed={selectedCategory === category.id}
                  >
                    <category.icon className="w-3.5 h-3.5" />
                    {category.label}
                    <span className="text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredResources.length} of {resources.length} resources
              </p>
            </div>
            
            <AnimatePresence mode="popLayout">
              <motion.div 
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource.href}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.02, duration: 0.2 }}
                  >
                    <Link to={resource.href} className="block h-full">
                      <Card className="border-border hover:border-copper/30 transition-all h-full hover:shadow-lg group bg-card">
                        <CardContent className="p-5 h-full flex flex-col">
                          <div className="flex items-start gap-4 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-copper/10 transition-colors">
                              <resource.icon className="w-5 h-5 text-muted-foreground group-hover:text-copper transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${getTierColor(resource.tier)}`}>
                                  {getTierLabel(resource.tier)}
                                </span>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {resource.readTime}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="font-semibold text-foreground group-hover:text-copper transition-colors mb-2 line-clamp-2">
                            {resource.title}
                          </h3>
                          
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                            {resource.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {resource.tags.slice(0, 3).map((tag) => (
                              <span 
                                key={tag}
                                className="text-[10px] font-medium bg-muted px-2 py-0.5 rounded text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                            {resource.tags.length > 3 && (
                              <span className="text-[10px] font-medium text-muted-foreground">
                                +{resource.tags.length - 3} more
                              </span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {filteredResources.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <AlertTriangle className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No resources found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need More Than Guidance?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our expert team provides personalized thesis support—from methodology design to defense preparation. 
                Get the hands-on help you need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consultation">
                  <Button size="lg" className="bg-copper hover:bg-copper-dark text-white">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Also Explore</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/phd-resources" className="group">
                <Card className="border-border hover:border-copper/30 transition-all">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-copper/10 transition-colors">
                      <GraduationCap className="w-5 h-5 text-muted-foreground group-hover:text-copper" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">PhD Resources</h3>
                      <p className="text-sm text-muted-foreground">20+ doctoral guides</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/resources" className="group">
                <Card className="border-border hover:border-copper/30 transition-all">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-copper/10 transition-colors">
                      <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-copper" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">All Resources</h3>
                      <p className="text-sm text-muted-foreground">PhD & Master's combined</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/blog" className="group">
                <Card className="border-border hover:border-copper/30 transition-all">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-copper/10 transition-colors">
                      <FileText className="w-5 h-5 text-muted-foreground group-hover:text-copper" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Blog</h3>
                      <p className="text-sm text-muted-foreground">Latest articles & tips</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/services" className="group">
                <Card className="border-border hover:border-copper/30 transition-all">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-copper/10 transition-colors">
                      <Briefcase className="w-5 h-5 text-muted-foreground group-hover:text-copper" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Our Services</h3>
                      <p className="text-sm text-muted-foreground">Professional thesis support</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <RelatedContent currentUrl="/masters-resources" />
    </Layout>
  );
};

export default MastersResources;
