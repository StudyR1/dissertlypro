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

interface GlossaryTerm {
  term: string;
  definition: string;
  category: "degrees" | "research" | "writing" | "defense" | "methodology" | "analysis";
  relatedTerms?: string[];
  seeAlso?: { title: string; href: string };
}

const glossaryTerms: GlossaryTerm[] = [
  // Degrees & Academic Structure
  {
    term: "Dissertation",
    definition: "A substantial written document presenting original research, typically required for doctoral degrees (PhD, EdD, DBA). In the UK/Europe, refers specifically to PhD-level work; in the US, the term is used more broadly for both Master's and doctoral work.",
    category: "degrees",
    relatedTerms: ["Thesis", "PhD", "Doctoral Research"],
    seeAlso: { title: "Dissertation vs Thesis", href: "/dissertation-vs-thesis" }
  },
  {
    term: "Thesis",
    definition: "A research document demonstrating mastery of a subject, typically required for Master's degrees. In the UK/Europe, refers to Master's-level work; in the US, may refer to either Master's or doctoral work. The terminology varies significantly by region.",
    category: "degrees",
    relatedTerms: ["Dissertation", "Master's Degree", "Research Project"],
    seeAlso: { title: "Dissertation vs Thesis", href: "/dissertation-vs-thesis" }
  },
  {
    term: "ABD (All But Dissertation)",
    definition: "A status indicating a doctoral student has completed all program requirements except the dissertation. While not an official credential, it's commonly used in US academic contexts to describe candidates in the final research phase.",
    category: "degrees",
    relatedTerms: ["Doctoral Candidate", "PhD Candidate", "Dissertation Stage"]
  },
  {
    term: "Candidacy",
    definition: "The formal status achieved after passing qualifying or comprehensive exams, indicating a student has advanced to the dissertation phase. Candidacy typically comes with different registration status and expectations.",
    category: "degrees",
    relatedTerms: ["Comprehensive Exams", "Qualifying Exams", "ABD"],
    seeAlso: { title: "Candidacy Exams Guide", href: "/candidacy-exams" }
  },
  {
    term: "DPhil",
    definition: "Doctor of Philosophy—the term used at Oxford and some other UK universities instead of PhD. The qualification is equivalent to a PhD; only the naming convention differs.",
    category: "degrees",
    relatedTerms: ["PhD", "Doctorate", "Doctoral Degree"]
  },
  {
    term: "MPhil",
    definition: "Master of Philosophy—a research-based Master's degree common in the UK, often a stepping stone to PhD. Some programs allow upgrading from MPhil to PhD after demonstrating sufficient progress.",
    category: "degrees",
    relatedTerms: ["Master's Degree", "Research Master's", "PhD Upgrade"]
  },
  
  // Research & Methodology
  {
    term: "Literature Review",
    definition: "A comprehensive survey and synthesis of existing research on a topic. A required chapter in both theses and dissertations, establishing the research context, identifying gaps, and justifying the study's contribution.",
    category: "research",
    relatedTerms: ["Systematic Review", "Research Gap", "Theoretical Framework"],
    seeAlso: { title: "Literature Review Guide", href: "/literature-review-guide" }
  },
  {
    term: "Research Gap",
    definition: "An area where existing literature is insufficient, contradictory, or missing entirely. Identifying a research gap is essential for justifying original research and demonstrating the study's contribution to knowledge.",
    category: "research",
    relatedTerms: ["Literature Review", "Research Contribution", "Originality"]
  },
  {
    term: "Theoretical Framework",
    definition: "The underlying theory or set of theories that guides research design, data collection, and interpretation. It provides the lens through which the research problem is viewed and analyzed.",
    category: "research",
    relatedTerms: ["Conceptual Framework", "Research Design", "Methodology"]
  },
  {
    term: "Conceptual Framework",
    definition: "A visual or written representation of the key concepts, variables, and relationships in a study. Often researcher-developed (unlike theoretical frameworks which draw on established theories).",
    category: "research",
    relatedTerms: ["Theoretical Framework", "Research Model", "Variables"]
  },
  {
    term: "Original Contribution",
    definition: "New knowledge, methodology, or theoretical framework that advances the field. Required for doctoral work; Master's theses typically apply existing knowledge rather than generating new theory.",
    category: "research",
    relatedTerms: ["Research Contribution", "Novel Research", "Knowledge Creation"]
  },
  {
    term: "Research Question",
    definition: "A specific, focused question that the research aims to answer. Good research questions are clear, researchable, and significant to the field. They guide methodology and analysis choices.",
    category: "research",
    relatedTerms: ["Hypothesis", "Research Objectives", "Research Aims"],
    seeAlso: { title: "Research Questions Guide", href: "/research-questions" }
  },
  {
    term: "Hypothesis",
    definition: "A testable prediction about the relationship between variables. Used primarily in quantitative research. The null hypothesis states no relationship exists; the alternative hypothesis predicts a specific relationship.",
    category: "research",
    relatedTerms: ["Research Question", "Variables", "Statistical Testing"]
  },
  
  // Methodology
  {
    term: "Qualitative Research",
    definition: "Research methodology focused on understanding meanings, experiences, and perspectives through non-numerical data (interviews, observations, documents). Emphasizes depth over generalizability.",
    category: "methodology",
    relatedTerms: ["Quantitative Research", "Mixed Methods", "Thematic Analysis"],
    seeAlso: { title: "Qualitative Analysis", href: "/qualitative-analysis" }
  },
  {
    term: "Quantitative Research",
    definition: "Research methodology using numerical data and statistical analysis to test hypotheses and establish relationships between variables. Emphasizes objectivity, reliability, and generalizability.",
    category: "methodology",
    relatedTerms: ["Qualitative Research", "Mixed Methods", "Statistical Analysis"],
    seeAlso: { title: "SPSS Tutorial", href: "/spss-tutorial" }
  },
  {
    term: "Mixed Methods",
    definition: "Research approach combining qualitative and quantitative methods in a single study. Can be sequential (one method informs the other) or concurrent (both conducted simultaneously).",
    category: "methodology",
    relatedTerms: ["Qualitative Research", "Quantitative Research", "Triangulation"],
    seeAlso: { title: "Mixed Methods Research", href: "/mixed-methods-research" }
  },
  {
    term: "Triangulation",
    definition: "Using multiple data sources, methods, or theoretical perspectives to enhance the credibility and validity of research findings. Common in mixed methods and qualitative research.",
    category: "methodology",
    relatedTerms: ["Validity", "Mixed Methods", "Data Sources"]
  },
  {
    term: "Sampling",
    definition: "The process of selecting participants or cases for a study. Probability sampling (random) supports generalization; non-probability sampling (purposive, convenience) is common in qualitative research.",
    category: "methodology",
    relatedTerms: ["Population", "Sample Size", "Generalizability"]
  },
  {
    term: "Validity",
    definition: "The extent to which research measures what it claims to measure. Internal validity concerns causal relationships; external validity concerns generalizability; construct validity concerns measurement accuracy.",
    category: "methodology",
    relatedTerms: ["Reliability", "Triangulation", "Research Quality"]
  },
  {
    term: "Reliability",
    definition: "The consistency and reproducibility of research findings. Inter-rater reliability measures agreement between coders; test-retest reliability measures consistency over time.",
    category: "methodology",
    relatedTerms: ["Validity", "Replicability", "Research Quality"]
  },
  {
    term: "IRB (Institutional Review Board)",
    definition: "A committee that reviews and approves research involving human subjects to ensure ethical standards are met. Also known as Ethics Committee or Research Ethics Board in some countries.",
    category: "methodology",
    relatedTerms: ["Ethics Approval", "Informed Consent", "Research Ethics"],
    seeAlso: { title: "IRB Ethics Guide", href: "/irb-ethics-guide" }
  },
  
  // Data Analysis
  {
    term: "Thematic Analysis",
    definition: "A qualitative data analysis method that identifies, analyzes, and reports patterns (themes) within data. Can be inductive (data-driven) or deductive (theory-driven).",
    category: "analysis",
    relatedTerms: ["Coding", "Qualitative Analysis", "NVivo"],
    seeAlso: { title: "NVivo Tutorial", href: "/nvivo-tutorial" }
  },
  {
    term: "Coding (Qualitative)",
    definition: "The process of labeling and organizing qualitative data to identify themes and patterns. Initial coding is exploratory; focused coding refines and consolidates codes into themes.",
    category: "analysis",
    relatedTerms: ["Thematic Analysis", "NVivo", "Grounded Theory"]
  },
  {
    term: "Statistical Significance",
    definition: "A measure indicating whether observed results are likely due to chance. Typically expressed as a p-value; p < 0.05 is the conventional threshold for significance in many fields.",
    category: "analysis",
    relatedTerms: ["P-value", "Hypothesis Testing", "Effect Size"],
    seeAlso: { title: "SPSS Tutorial", href: "/spss-tutorial" }
  },
  {
    term: "Effect Size",
    definition: "A measure of the magnitude or practical significance of a finding, independent of sample size. Common measures include Cohen's d, correlation coefficients, and odds ratios.",
    category: "analysis",
    relatedTerms: ["Statistical Significance", "Practical Significance", "Power Analysis"]
  },
  {
    term: "Regression Analysis",
    definition: "Statistical technique examining relationships between variables. Linear regression predicts continuous outcomes; logistic regression predicts categorical outcomes.",
    category: "analysis",
    relatedTerms: ["Correlation", "Variables", "Prediction"],
    seeAlso: { title: "SPSS Tutorial", href: "/spss-tutorial" }
  },
  
  // Academic Writing
  {
    term: "Hedging Language",
    definition: "Academic writing technique using qualifying words (may, suggests, appears to) to express appropriate uncertainty and avoid overclaiming. Essential for scholarly credibility and intellectual honesty.",
    category: "writing",
    relatedTerms: ["Academic Tone", "Qualifying Statements", "Scholarly Voice"],
    seeAlso: { title: "Academic Writing", href: "/academic-writing" }
  },
  {
    term: "Signposting",
    definition: "Explicit language that guides readers through an argument (e.g., 'First...', 'In contrast...', 'This section examines...'). Improves readability and helps readers follow complex arguments.",
    category: "writing",
    relatedTerms: ["Transitions", "Reader Guidance", "Discourse Markers"]
  },
  {
    term: "Synthesis",
    definition: "Combining multiple sources to create new understanding, rather than simply summarizing each source separately. Critical for literature reviews and theoretical frameworks.",
    category: "writing",
    relatedTerms: ["Literature Review", "Critical Analysis", "Source Integration"]
  },
  {
    term: "Paraphrase",
    definition: "Restating another author's ideas in your own words while maintaining the original meaning. Requires citation but not quotation marks. Demonstrates understanding beyond direct quotation.",
    category: "writing",
    relatedTerms: ["Citation", "Quotation", "Plagiarism"]
  },
  {
    term: "Self-Plagiarism",
    definition: "Reusing one's own previously published work without proper citation or disclosure. Also called 'text recycling.' Policies vary by institution and journal.",
    category: "writing",
    relatedTerms: ["Plagiarism", "Academic Integrity", "Citation"]
  },
  
  // Defense & Examination
  {
    term: "Viva Voce",
    definition: "An oral examination where doctoral candidates defend their dissertation before a panel of experts. Common terminology in UK, Europe, and Australia. Typically 1.5-3 hours with internal and external examiners.",
    category: "defense",
    relatedTerms: ["Defense", "Oral Examination", "Examiners"],
    seeAlso: { title: "Viva Preparation", href: "/viva-preparation" }
  },
  {
    term: "Dissertation Defense",
    definition: "The oral examination of a doctoral dissertation, primarily used in North American contexts. May be public or private depending on institution. Typically involves committee members asking questions.",
    category: "defense",
    relatedTerms: ["Viva Voce", "Committee", "Oral Examination"],
    seeAlso: { title: "Viva Preparation", href: "/viva-preparation" }
  },
  {
    term: "External Examiner",
    definition: "An expert from outside the candidate's institution who evaluates the dissertation and participates in the viva/defense. Provides independent assessment of research quality and contribution.",
    category: "defense",
    relatedTerms: ["Internal Examiner", "Viva", "Examination Committee"]
  },
  {
    term: "Minor Corrections",
    definition: "Small revisions required after a viva/defense, typically typographical errors, clarifications, or additional references. Usually must be completed within 1-3 months.",
    category: "defense",
    relatedTerms: ["Major Corrections", "Revisions", "Viva Outcome"]
  },
  {
    term: "Major Corrections",
    definition: "Substantial revisions required after a viva/defense, involving additional research, rewriting chapters, or addressing methodological concerns. Typically 6-12 months to complete with re-examination.",
    category: "defense",
    relatedTerms: ["Minor Corrections", "Revisions", "Viva Outcome"]
  },
  {
    term: "Thesis Committee",
    definition: "A group of faculty members who guide a student's research and evaluate the final thesis/dissertation. Composition and roles vary by institution and country.",
    category: "defense",
    relatedTerms: ["Supervisor", "Advisor", "Examiners"],
    seeAlso: { title: "Committee Communication", href: "/committee-communication" }
  }
];

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
