import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, AggregateRatingSchema } from "@/components/schemas";
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
  Heart,
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
  Compass,
  Shield,
  TrendingUp,
  BookMarked,
  Presentation,
  Coffee,
  Network
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
    title: "Surviving Your PhD Supervisor",
    description: "Navigate difficult supervisor relationships with confidence. Expert strategies for communication, conflict resolution, and protecting your progress.",
    href: "/supervisor-guide",
    icon: Users,
    category: "core",
    tier: 1,
    readTime: "35 min",
    tags: ["Supervisor", "Communication", "Conflict Resolution", "PhD Life"],
    featured: true
  },
  {
    title: "PhD Mental Health Hub",
    description: "Comprehensive wellness resources for doctoral researchers. Recognize burnout, manage anxiety, and build sustainable research practices.",
    href: "/phd-mental-health",
    icon: Heart,
    category: "core",
    tier: 1,
    readTime: "40 min",
    tags: ["Mental Health", "Wellbeing", "Burnout", "Self-Care"],
    featured: true
  },
  {
    title: "Committee Conflict Resolution",
    description: "Expert strategies for handling disagreements with dissertation committees. Navigate academic politics while protecting your research.",
    href: "/committee-conflicts",
    icon: Scale,
    category: "core",
    tier: 1,
    readTime: "30 min",
    tags: ["Committee", "Conflict", "Academic Politics", "Dissertation Defense"],
    featured: true
  },
  {
    title: "PhD Candidacy & Qualifying Exams",
    description: "Prepare for comprehensive exams and candidacy milestones. Study strategies, reading lists, and oral exam techniques.",
    href: "/candidacy-exams",
    icon: Award,
    category: "core",
    tier: 1,
    readTime: "45 min",
    tags: ["Candidacy", "Qualifying Exams", "Comprehensive Exams", "PhD Milestones"]
  },
  {
    title: "Dissertation Proposal Mastery",
    description: "Craft a compelling dissertation proposal that wins committee approval. Structure, defense strategies, and common pitfalls to avoid.",
    href: "/services/dissertation-proposal",
    icon: FileText,
    category: "core",
    tier: 1,
    readTime: "40 min",
    tags: ["Proposal", "Dissertation", "Defense", "Committee Approval"]
  },
  
  // Tier 2: Specialized Niche Guides
  {
    title: "Part-Time PhD Success Guide",
    description: "Balance doctoral study with career and life commitments. Strategies for working professionals pursuing advanced degrees.",
    href: "/part-time-phd",
    icon: Briefcase,
    category: "specialized",
    tier: 2,
    readTime: "30 min",
    tags: ["Part-Time", "Work-Life Balance", "Professional Development", "Time Management"]
  },
  {
    title: "Deadlines & Deferrals Guide",
    description: "Navigate extensions, interruptions, and timeline management. Strategic approaches to requesting deferrals and managing academic deadlines.",
    href: "/deadlines-deferrals",
    icon: Calendar,
    category: "specialized",
    tier: 2,
    readTime: "25 min",
    tags: ["Deadlines", "Extensions", "Time Management", "Deferrals"]
  },
  {
    title: "Viva Preparation Masterclass",
    description: "Prepare for your oral defense with confidence. Mock viva questions, examiner psychology, and strategies for a successful defense.",
    href: "/viva-preparation",
    icon: Mic,
    category: "specialized",
    tier: 2,
    readTime: "45 min",
    tags: ["Viva", "Oral Defense", "Examination", "PhD Completion"],
    featured: true
  },
  {
    title: "PhD Funding & Grants",
    description: "Secure funding for your doctoral research. Grant writing strategies, fellowship applications, and funding source databases.",
    href: "/phd-funding",
    icon: TrendingUp,
    category: "specialized",
    tier: 2,
    readTime: "35 min",
    tags: ["Funding", "Grants", "Fellowships", "Research Funding"]
  },
  {
    title: "Academic Networking for PhDs",
    description: "Build your academic network strategically. Conference networking, collaboration strategies, and social media for researchers.",
    href: "/academic-networking",
    icon: Network,
    category: "specialized",
    tier: 2,
    readTime: "25 min",
    tags: ["Networking", "Conferences", "Collaboration", "Academic Career"]
  },
  {
    title: "Publishing During Your PhD",
    description: "Navigate academic publishing while completing your dissertation. Journal selection, peer review, and building your publication record.",
    href: "/phd-publishing",
    icon: BookMarked,
    category: "specialized",
    tier: 2,
    readTime: "35 min",
    tags: ["Publishing", "Journals", "Peer Review", "Academic Writing"]
  },
  {
    title: "PhD to Industry Transition",
    description: "Translate your doctoral skills for industry careers. Resume conversion, interview strategies, and non-academic job search.",
    href: "/phd-industry",
    icon: Briefcase,
    category: "specialized",
    tier: 2,
    readTime: "30 min",
    tags: ["Industry", "Career Transition", "Job Search", "Alt-Ac"]
  },
  {
    title: "International PhD Guide",
    description: "Navigate doctoral study in a foreign country. Visa considerations, cultural adaptation, and building support networks abroad.",
    href: "/international-phd",
    icon: Globe,
    category: "specialized",
    tier: 2,
    readTime: "30 min",
    tags: ["International", "Visa", "Cultural Adaptation", "Study Abroad"]
  },
  
  // Tier 3: Technical Deep-Dives
  {
    title: "SPSS Tutorial for Dissertation Analysis",
    description: "Master statistical analysis with step-by-step guidance. Learn data entry, descriptive statistics, inferential tests, regression, and APA reporting.",
    href: "/spss-tutorial",
    icon: BarChart3,
    category: "technical",
    tier: 3,
    readTime: "7+ hours",
    tags: ["SPSS", "Statistics", "Data Analysis", "Quantitative"],
    featured: true
  },
  {
    title: "Research Methodology Masterclass",
    description: "Comprehensive guide to qualitative, quantitative, and mixed methods. Covers sampling, validity, reliability, and data collection strategies.",
    href: "/research-methodology",
    icon: Brain,
    category: "technical",
    tier: 3,
    readTime: "8+ hours",
    tags: ["Methodology", "Research Design", "Qualitative", "Quantitative"]
  },
  {
    title: "Literature Review Mastery Guide",
    description: "From systematic search strategies to powerful synthesis techniques. Learn to write reviews that establish expertise and justify research.",
    href: "/literature-review-guide",
    icon: BookOpen,
    category: "technical",
    tier: 3,
    readTime: "6+ hours",
    tags: ["Literature Review", "Synthesis", "Research Gap", "Academic Writing"]
  },
  {
    title: "Dissertation Writing & Structure",
    description: "Master the five-chapter dissertation format. Chapter templates, word count guides, and strategies for maintaining momentum.",
    href: "/dissertation-structure",
    icon: FileText,
    category: "technical",
    tier: 3,
    readTime: "5+ hours",
    tags: ["Dissertation", "Writing", "Structure", "Chapters"]
  },
  {
    title: "Advanced Qualitative Analysis",
    description: "Deep dive into grounded theory, phenomenology, and narrative analysis. NVivo mastery and establishing research trustworthiness.",
    href: "/qualitative-analysis",
    icon: Brain,
    category: "technical",
    tier: 3,
    readTime: "8+ hours",
    tags: ["Qualitative", "Grounded Theory", "Phenomenology", "NVivo"]
  },
  {
    title: "Academic Writing for Dissertations",
    description: "Develop your scholarly voice. Argumentation, critical analysis, and maintaining consistency across a 80,000+ word document.",
    href: "/dissertation-writing",
    icon: PenTool,
    category: "technical",
    tier: 3,
    readTime: "6+ hours",
    tags: ["Academic Writing", "Dissertation", "Scholarly Voice", "Argumentation"]
  },
  {
    title: "Citation & Reference Management",
    description: "Master citation styles and reference management tools. Zotero, Mendeley, EndNote workflows for large-scale dissertation projects.",
    href: "/citation-mastery",
    icon: Quote,
    category: "technical",
    tier: 3,
    readTime: "7+ hours",
    tags: ["Citation", "References", "Zotero", "Mendeley", "EndNote"]
  }
];

const categories = [
  { id: "all" as const, label: "All Resources", count: resources.length, icon: Compass },
  { id: "core" as const, label: "Core Essentials", count: resources.filter(r => r.category === "core").length, icon: GraduationCap },
  { id: "specialized" as const, label: "Specialized Guides", count: resources.filter(r => r.category === "specialized").length, icon: Lightbulb },
  { id: "technical" as const, label: "Technical Deep-Dives", count: resources.filter(r => r.category === "technical").length, icon: Brain }
];

const PhDResources = () => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "PhD Resources", url: "/phd-resources" }
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
        title="PhD & Doctoral Resources | Complete Guide Library | DissertlyPro"
        description="20+ free resources exclusively for PhD and doctoral students. Supervisor guides, viva preparation, mental health support, methodology deep-dives, and specialized guidance for working professionals."
        keywords={["PhD resources", "doctoral dissertation resources", "viva preparation", "PhD supervisor guide", "dissertation methodology", "PhD mental health", "doctoral research guides"]}
        canonical="https://dissertlypro.com/phd-resources"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={3567}
        itemName="DissertlyPro PhD Resources"
        itemType="EducationalOrganization"
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
              Exclusively for Doctoral Students
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              PhD & Doctoral
              <span className="block text-copper mt-2">Resource Hub</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides, technical tutorials, and expert strategies designed specifically for doctoral researchers. 
              From candidacy to viva—everything you need to complete your PhD.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>{resources.length} In-Depth Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>60+ Hours of Content</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-copper" />
                <span>PhD-Focused</span>
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
              <h2 className="text-lg font-semibold text-foreground">Featured PhD Resources</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredResources.slice(0, 4).map((resource, index) => (
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
                  placeholder="Search PhD resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10"
                  aria-label="Search PhD resources"
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
                Need Personalized PhD Support?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our team of PhD-qualified experts provides tailored guidance—from methodology design 
                to viva preparation. Get the specialized support your doctoral journey deserves.
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
              <Link to="/masters-resources" className="group">
                <Card className="border-border hover:border-copper/30 transition-all">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-copper/10 transition-colors">
                      <GraduationCap className="w-5 h-5 text-muted-foreground group-hover:text-copper" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Master's Resources</h3>
                      <p className="text-sm text-muted-foreground">20+ thesis guides</p>
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
                      <p className="text-sm text-muted-foreground">Complete library</p>
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
                      <p className="text-sm text-muted-foreground">Latest articles</p>
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
                      <p className="text-sm text-muted-foreground">Expert support</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <RelatedContent currentUrl="/phd-resources" />
    </Layout>
  );
};

export default PhDResources;
