import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, AggregateRatingSchema, DefinedTermSetSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import RelatedContent from "@/components/ui/RelatedContent";
import { glossaryTerms, categoryLabels, type GlossaryTerm } from "@/data/glossaryTerms";
import { 
  Search,
  BookOpen,
  GraduationCap,
  FileText,
  Users,
  BarChart3,
  PenTool,
  Brain,
  Target,
  ArrowRight,
  Filter,
  X,
  Lightbulb
} from "lucide-react";


const categories = [
  { id: "all" as const, label: "All Terms", icon: BookOpen },
  { id: "degrees" as const, label: "Degrees & Structure", icon: GraduationCap },
  { id: "research" as const, label: "Research Concepts", icon: Target },
  { id: "methodology" as const, label: "Methodology", icon: Brain },
  { id: "analysis" as const, label: "Data Analysis", icon: BarChart3 },
  { id: "writing" as const, label: "Academic Writing", icon: PenTool },
  { id: "defense" as const, label: "Defense & Exams", icon: Users }
];

type CategoryFilter = "all" | GlossaryTerm["category"];

const Glossary = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Glossary", url: "/glossary" }
  ];

  const filteredTerms = useMemo(() => {
    return glossaryTerms
      .filter(term => {
        const matchesCategory = selectedCategory === "all" || term.category === selectedCategory;
        const matchesSearch = searchQuery === "" || 
          term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
          term.relatedTerms?.some(rt => rt.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [selectedCategory, searchQuery]);

  const getCategoryColor = (category: GlossaryTerm["category"]) => {
    switch (category) {
      case "degrees": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "research": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "methodology": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "analysis": return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      case "writing": return "bg-pink-500/10 text-pink-600 border-pink-500/20";
      case "defense": return "bg-cyan-500/10 text-cyan-600 border-cyan-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryLabel = (category: GlossaryTerm["category"]) => {
    const cat = categories.find(c => c.id === category);
    return cat?.label || category;
  };

  return (
    <Layout>
      <SEO 
        title="Academic Glossary | Research & Thesis Terminology | DissertlyPro"
        description="Comprehensive glossary of academic research terminology. Definitions for dissertation, thesis, methodology, defense terms and more. Essential reference for Master's and PhD students."
        keywords={["academic glossary", "research terminology", "thesis terms", "dissertation definitions", "PhD glossary", "academic vocabulary", "research methods terminology"]}
        canonical="https://dissertlypro.com/glossary"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1876}
        itemName="DissertlyPro Academic Glossary"
        itemType="EducationalOrganization"
      />
      <DefinedTermSetSchema
        name="Academic Research Terminology Glossary"
        description="Comprehensive definitions of academic research, thesis, dissertation, methodology, and defense terminology for graduate students."
        url="/glossary"
        terms={glossaryTerms.map(t => ({
          term: t.term,
          definition: t.definition,
          url: t.seeAlso?.href,
          relatedTerms: t.relatedTerms
        }))}
        inDefinedTermSet="Academic Research Terminology"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-copper/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-copper/10 text-copper px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Essential Reference
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Academic Research
              <span className="block text-copper mt-2">Glossary</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive definitions of thesis, dissertation, methodology, and research terminology. 
              Your essential reference guide for Master's and PhD studies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-copper" />
                <span>{glossaryTerms.length} Terms Defined</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-copper" />
                <span>{categories.length - 1} Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-copper" />
                <span>Cross-Referenced</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between max-w-6xl mx-auto">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                const count = category.id === "all" 
                  ? glossaryTerms.length 
                  : glossaryTerms.filter(t => t.category === category.id).length;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive 
                        ? "bg-copper text-white" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20" : "bg-background"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredTerms.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16"
                >
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No terms found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your search or filter</p>
                  <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
                    Clear filters
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-4"
                >
                  {filteredTerms.map((term, index) => (
                    <motion.div
                      key={term.term}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ delay: Math.min(index * 0.03, 0.3) }}
                    >
                      <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-xl font-bold text-foreground">{term.term}</h3>
                                <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(term.category)}`}>
                                  {getCategoryLabel(term.category)}
                                </span>
                              </div>
                              
                              <p className="text-muted-foreground leading-relaxed mb-4">
                                {term.definition}
                              </p>
                              
                              <div className="flex flex-wrap items-center gap-4">
                                {term.relatedTerms && term.relatedTerms.length > 0 && (
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-xs text-muted-foreground font-medium">Related:</span>
                                    {term.relatedTerms.map((rt) => (
                                      <button
                                        key={rt}
                                        onClick={() => setSearchQuery(rt)}
                                        className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded transition-colors"
                                      >
                                        {rt}
                                      </button>
                                    ))}
                                  </div>
                                )}
                                
                                {term.seeAlso && (
                                  <Link 
                                    to={term.seeAlso.href}
                                    className="inline-flex items-center gap-1 text-sm text-copper hover:text-copper/80 font-medium transition-colors"
                                  >
                                    Learn more <ArrowRight className="w-3 h-3" />
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Help With Your Research?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Understanding terminology is just the first step. Our expert team can help you 
              apply these concepts to your thesis or dissertation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                <Link to="/consultation">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent currentUrl="/glossary" />
    </Layout>
  );
};

export default Glossary;
