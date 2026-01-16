import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, AggregateRatingSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
  X
} from "lucide-react";

type ResourceCategory = "all" | "technical" | "academic";

interface Resource {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  category: "technical" | "academic";
  tier: 1 | 2 | 3;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

const resources: Resource[] = [
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
    tags: ["Methodology", "Research Design", "Qualitative", "Quantitative"],
    featured: true
  },
  {
    title: "Literature Review Mastery Guide",
    description: "From systematic search strategies to powerful synthesis techniques. Learn to write reviews that establish expertise and justify research.",
    href: "/literature-review-guide",
    icon: BookOpen,
    category: "technical",
    tier: 3,
    readTime: "6+ hours",
    tags: ["Literature Review", "Synthesis", "Research Gap", "Academic Writing"],
    featured: true
  },
  // Tier 1: High-Impact Rare Content (PhD)
  {
    title: "Surviving Your PhD Supervisor",
    description: "Navigate difficult supervisor relationships with confidence. Expert strategies for communication, conflict resolution, and protecting your progress.",
    href: "/supervisor-guide",
    icon: Users,
    category: "academic",
    tier: 1,
    readTime: "35 min",
    tags: ["Supervisor", "Communication", "Conflict Resolution", "PhD Life"]
  },
  {
    title: "PhD Mental Health Hub",
    description: "Comprehensive wellness resources for doctoral researchers. Recognize burnout, manage anxiety, and build sustainable research practices.",
    href: "/phd-mental-health",
    icon: Heart,
    category: "academic",
    tier: 1,
    readTime: "40 min",
    tags: ["Mental Health", "Wellbeing", "Burnout", "Self-Care"]
  },
  {
    title: "Committee Conflict Resolution",
    description: "Expert strategies for handling disagreements with dissertation committees. Navigate academic politics while protecting your research.",
    href: "/committee-conflicts",
    icon: Scale,
    category: "academic",
    tier: 1,
    readTime: "30 min",
    tags: ["Committee", "Conflict", "Academic Politics", "Dissertation Defense"]
  },
  // Tier 1: Master's Thesis Resources
  {
    title: "Master's Thesis Survival Guide",
    description: "Complete A-Z roadmap for thesis success. 36-week timeline, common mistakes to avoid, and defense preparation strategies.",
    href: "/masters-thesis-guide",
    icon: GraduationCap,
    category: "academic",
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
    category: "academic",
    tier: 1,
    readTime: "25 min",
    tags: ["Dissertation", "Thesis", "Academic Terminology", "Degree Differences"]
  },
  {
    title: "Career-Boosting Thesis Topics",
    description: "Choose a thesis topic that advances your career. Industry-aligned ideas, selection frameworks, and strategic positioning guidance.",
    href: "/thesis-topic-selection",
    icon: Briefcase,
    category: "academic",
    tier: 1,
    readTime: "30 min",
    tags: ["Topic Selection", "Career Alignment", "Research Ideas", "Industry Focus"]
  },
  // Tier 2: Master's Underserved Niches
  {
    title: "Accelerated Master's Programs",
    description: "Complete your master's degree in 12-18 months. Strategic planning, intensive scheduling, and success strategies for fast-track programs.",
    href: "/accelerated-masters",
    icon: Clock,
    category: "academic",
    tier: 2,
    readTime: "30 min",
    tags: ["Accelerated", "Fast-Track", "Master's", "Time Management"]
  },
  {
    title: "Coursework to Thesis Conversion",
    description: "Transform your best course papers into thesis chapters. Strategic repurposing, expansion techniques, and committee negotiation strategies.",
    href: "/coursework-to-thesis",
    icon: BookOpen,
    category: "academic",
    tier: 2,
    readTime: "25 min",
    tags: ["Coursework", "Thesis", "Conversion", "Academic Writing"]
  },
  {
    title: "Limited Supervision Success",
    description: "Thrive despite an absent or overwhelmed thesis advisor. Self-direction strategies, alternative support networks, and progress maintenance.",
    href: "/limited-supervision",
    icon: Users,
    category: "academic",
    tier: 2,
    readTime: "30 min",
    tags: ["Supervision", "Self-Directed", "Independence", "Master's"]
  },
  // Tier 2: Underserved Niches
  {
    title: "Deadlines & Deferrals Guide",
    description: "Navigate extensions, interruptions, and timeline management. Strategic approaches to requesting deferrals and managing academic deadlines.",
    href: "/deadlines-deferrals",
    icon: Calendar,
    category: "academic",
    tier: 2,
    readTime: "25 min",
    tags: ["Deadlines", "Extensions", "Time Management", "Deferrals"]
  },
  {
    title: "Viva Preparation Masterclass",
    description: "Prepare for your oral defense with confidence. Mock viva questions, examiner psychology, and strategies for a successful defense.",
    href: "/viva-preparation",
    icon: GraduationCap,
    category: "academic",
    tier: 2,
    readTime: "45 min",
    tags: ["Viva", "Oral Defense", "Examination", "PhD Completion"]
  },
  {
    title: "Part-Time PhD Success Guide",
    description: "Balance doctoral study with career and life commitments. Strategies for working professionals pursuing advanced degrees.",
    href: "/part-time-phd",
    icon: Briefcase,
    category: "academic",
    tier: 2,
    readTime: "30 min",
    tags: ["Part-Time", "Work-Life Balance", "Professional Development", "Time Management"]
  }
];

const categories = [
  { id: "all" as const, label: "All Resources", count: resources.length },
  { id: "technical" as const, label: "Technical Deep-Dives", count: resources.filter(r => r.category === "technical").length },
  { id: "academic" as const, label: "Academic Guides", count: resources.filter(r => r.category === "academic").length }
];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" }
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
        title="Free PhD & Dissertation Resources | Guides, Tutorials & Tools | DissertlyPro"
        description="Comprehensive free resources for Master's and PhD students. Technical tutorials on SPSS and research methodology, plus guides on supervisor relationships, mental health, viva preparation, and more."
        keywords={["dissertation resources", "PhD guides", "research methodology", "SPSS tutorial", "literature review guide", "supervisor guide", "viva preparation", "academic writing resources"]}
        canonical="https://dissertlypro.com/resources"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2847}
        itemName="DissertlyPro Research Resources"
        itemType="EducationalOrganization"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-copper/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-copper/10 text-copper px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Free Resources for Researchers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Research Resources
              <span className="block text-copper mt-2">Hub</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides, technical tutorials, and expert strategies for Master's and PhD students. 
              Everything you need to navigate your research journey successfully.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>{resources.length} In-Depth Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>30+ Hours of Content</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-copper" />
                <span>100% Free Access</span>
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
              <h2 className="text-lg font-semibold text-foreground">Featured Technical Deep-Dives</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
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
                              <span className="text-xs font-medium text-purple-600 bg-purple-500/10 px-2 py-0.5 rounded">
                                {resource.readTime}
                              </span>
                            </div>
                            <h3 className="font-semibold text-foreground group-hover:text-copper transition-colors line-clamp-1">
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
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10"
                  aria-label="Search resources"
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
                    {category.label}
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      selectedCategory === category.id
                        ? "bg-white/20 text-white"
                        : "bg-background text-muted-foreground"
                    }`}>
                      {category.count}
                    </span>
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
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredResources.length} of {resources.length} resources
                {searchQuery && <span> for "{searchQuery}"</span>}
              </p>
            </div>
            
            {/* Grid */}
            <AnimatePresence mode="popLayout">
              {filteredResources.length > 0 ? (
                <motion.div 
                  layout
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredResources.map((resource, index) => (
                    <motion.div
                      key={resource.href}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link to={resource.href} className="block h-full">
                        <Card className="border-border hover:border-copper/50 transition-all h-full hover:shadow-lg group">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center group-hover:bg-copper/20 transition-colors">
                                <resource.icon className="w-6 h-6 text-copper" />
                              </div>
                              <span className={`text-xs font-medium px-2 py-1 rounded ${getTierColor(resource.tier)}`}>
                                {getTierLabel(resource.tier)}
                              </span>
                            </div>
                            
                            <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-copper transition-colors">
                              {resource.title}
                            </h3>
                            
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                              {resource.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {resource.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Clock className="w-3.5 h-3.5" />
                                {resource.readTime}
                              </div>
                              <span className="text-sm font-medium text-copper group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                Read Guide
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <Search className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No resources found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-copper/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need Personalized Support?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert consultants can provide one-on-one guidance tailored to your specific 
              research challenges and dissertation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                <Link to="/consultation">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
