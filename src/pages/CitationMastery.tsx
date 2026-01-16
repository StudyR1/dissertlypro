import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, AggregateRatingSchema } from "@/components/schemas";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Quote,
  CheckCircle, 
  Clock, 
  FileText, 
  Search,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  Layers,
  Target,
  Calendar,
  GraduationCap,
  Briefcase,
  Brain,
  Shield,
  Copy,
  List,
  ExternalLink
} from "lucide-react";

const CitationMastery = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Citation Mastery for Master's Thesis", url: "/citation-mastery" }
  ];

  const citationModules = [
    {
      module: "Citation Style Fundamentals",
      icon: BookOpen,
      topics: [
        "APA 7th Edition comprehensive guide",
        "MLA 9th Edition essentials",
        "Chicago/Turabian author-date and notes-bibliography",
        "Harvard referencing conventions",
        "IEEE and discipline-specific styles"
      ],
      estimatedTime: "90 min"
    },
    {
      module: "In-Text Citation Mastery",
      icon: Quote,
      topics: [
        "Paraphrasing vs. direct quotation decisions",
        "Signal phrases and author integration",
        "Multiple authors and corporate sources",
        "Secondary sources and citing citations",
        "Avoiding over-citation and under-citation"
      ],
      estimatedTime: "60 min"
    },
    {
      module: "Reference List Excellence",
      icon: List,
      topics: [
        "Journal articles: print and electronic",
        "Books, chapters, and edited volumes",
        "Theses, dissertations, and grey literature",
        "Websites, reports, and organizational sources",
        "DOIs, URLs, and access dates"
      ],
      estimatedTime: "75 min"
    },
    {
      module: "Reference Management Tools",
      icon: Layers,
      topics: [
        "Zotero setup and workflow optimization",
        "Mendeley features and cloud sync",
        "EndNote for institutional users",
        "Browser extensions and PDF organization",
        "Generating bibliographies automatically"
      ],
      estimatedTime: "60 min"
    },
    {
      module: "Avoiding Plagiarism",
      icon: Shield,
      topics: [
        "Understanding plagiarism types",
        "Self-plagiarism considerations",
        "Paraphrasing techniques that work",
        "Using plagiarism detection tools",
        "Documentation as evidence of integrity"
      ],
      estimatedTime: "45 min"
    },
    {
      module: "Advanced Citation Strategies",
      icon: Target,
      topics: [
        "Building citation narratives",
        "Synthesizing sources effectively",
        "Citation as scholarly conversation",
        "Strategic source positioning",
        "Citation metrics and impact awareness"
      ],
      estimatedTime: "60 min"
    }
  ];

  const styleComparisons = [
    {
      style: "APA 7th",
      inText: "(Smith, 2023, p. 45)",
      inTextNarrative: "Smith (2023) argued that...",
      multipleAuthors: "(Smith & Jones, 2023) or (Smith et al., 2023)",
      journalArticle: "Smith, J. A., & Jones, B. C. (2023). Title of article. Journal Name, 45(2), 123-145. https://doi.org/10.xxxx",
      usedIn: "Psychology, Education, Social Sciences, Nursing"
    },
    {
      style: "MLA 9th",
      inText: "(Smith 45)",
      inTextNarrative: "Smith argues that...",
      multipleAuthors: "(Smith and Jones 45) or (Smith et al. 45)",
      journalArticle: "Smith, John A., and Beth C. Jones. \"Title of Article.\" Journal Name, vol. 45, no. 2, 2023, pp. 123-145.",
      usedIn: "Humanities, Literature, Languages, Cultural Studies"
    },
    {
      style: "Chicago (Author-Date)",
      inText: "(Smith 2023, 45)",
      inTextNarrative: "Smith (2023) contends that...",
      multipleAuthors: "(Smith and Jones 2023) or (Smith et al. 2023)",
      journalArticle: "Smith, John A., and Beth C. Jones. 2023. \"Title of Article.\" Journal Name 45 (2): 123–145. https://doi.org/10.xxxx",
      usedIn: "History, Anthropology, some Social Sciences"
    },
    {
      style: "Harvard",
      inText: "(Smith 2023, p. 45)",
      inTextNarrative: "Smith (2023) stated that...",
      multipleAuthors: "(Smith and Jones 2023) or (Smith et al. 2023)",
      journalArticle: "Smith, J.A. and Jones, B.C. (2023) 'Title of Article', Journal Name, 45(2), pp. 123-145. doi:10.xxxx",
      usedIn: "Business, Economics, many UK/Australian universities"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Missing Page Numbers for Direct Quotes",
      description: "Forgetting to include page numbers when directly quoting sources",
      correct: "(Smith, 2023, p. 45) or (Smith, 2023, para. 7) for online sources",
      impact: "High - can be flagged as incomplete citation"
    },
    {
      mistake: "Inconsistent Author Format",
      description: "Mixing 'Smith & Jones' with 'Smith and Jones' within the same document",
      correct: "Follow your style guide consistently (APA uses &, MLA uses 'and')",
      impact: "Medium - affects professional appearance"
    },
    {
      mistake: "Using 'et al.' Too Early",
      description: "Using 'et al.' on first citation when style requires all authors listed first",
      correct: "APA: 3+ authors use et al. from first citation; other styles may differ",
      impact: "Medium - shows unfamiliarity with style"
    },
    {
      mistake: "Incorrect DOI/URL Formatting",
      description: "Using 'Retrieved from' before DOIs or incorrect URL formatting",
      correct: "APA 7: https://doi.org/10.xxxx (no 'Retrieved from' for DOIs)",
      impact: "Low-Medium - outdated practice"
    },
    {
      mistake: "Reference List Sorting Errors",
      description: "Not alphabetizing or incorrectly handling multiple works by same author",
      correct: "Alphabetize by surname; same author works chronologically",
      impact: "Medium - complicates reader navigation"
    },
    {
      mistake: "Orphan Citations",
      description: "Citations in text that don't appear in references, or vice versa",
      correct: "Every in-text citation must have a reference entry, and vice versa",
      impact: "High - indicates sloppy scholarship"
    }
  ];

  const paraphrasingTechniques = [
    {
      technique: "Change Sentence Structure",
      original: "The study revealed that students who engaged in active learning performed significantly better on assessments.",
      paraphrased: "Students using active learning strategies demonstrated notably higher assessment performance in the research (Smith, 2023).",
      tip: "Restructure from active to passive voice or vice versa"
    },
    {
      technique: "Use Synonyms Thoughtfully",
      original: "The researchers concluded that intrinsic motivation is crucial for academic success.",
      paraphrased: "According to the investigators, internal drive plays an essential role in scholarly achievement (Jones et al., 2023).",
      tip: "Replace key terms but preserve technical vocabulary"
    },
    {
      technique: "Change Focus/Emphasis",
      original: "Climate change has led to rising sea levels, threatening coastal communities worldwide.",
      paraphrased: "Coastal communities globally face threats from sea level increases driven by climate change (Brown, 2023).",
      tip: "Shift what appears at the beginning of the sentence"
    },
    {
      technique: "Combine Multiple Sources",
      original: "Smith (2023) found X. Jones (2022) also noted X.",
      paraphrased: "Multiple studies have confirmed X (Jones, 2022; Smith, 2023).",
      tip: "Synthesize related findings into unified statements"
    }
  ];

  const referenceManagerComparison = [
    {
      tool: "Zotero",
      pros: ["Free and open-source", "Excellent browser extension", "Group libraries for collaboration", "Wide style support", "Active community"],
      cons: ["Limited cloud storage (free tier)", "Learning curve for advanced features"],
      bestFor: "Students and researchers who want a free, flexible solution"
    },
    {
      tool: "Mendeley",
      pros: ["Free with generous storage", "Good PDF annotation", "Academic social network", "Owned by Elsevier"],
      cons: ["Privacy concerns", "Some sync issues reported", "Desktop app discontinuing features"],
      bestFor: "Researchers who want integrated PDF reading and annotation"
    },
    {
      tool: "EndNote",
      pros: ["Institutional support common", "Powerful features", "Excellent Word integration", "Large style library"],
      cons: ["Expensive if not institutional", "Steeper learning curve", "Can feel dated"],
      bestFor: "Users whose institution provides access; complex reference management needs"
    }
  ];

  const faqs = [
    {
      question: "How many sources should a master's thesis have?",
      answer: "There's no universal number, but master's theses typically include 40-100 sources, with literature reviews being source-heavy (potentially 50+ sources in that chapter alone). Quality matters more than quantity—your sources should be relevant, current, and from peer-reviewed or authoritative sources. Discuss expectations with your supervisor, as requirements vary by discipline and institution."
    },
    {
      question: "Should I use primary or secondary sources?",
      answer: "Prioritize primary sources whenever possible—they provide direct evidence and demonstrate rigorous scholarship. However, secondary sources are valuable for theoretical frameworks, literature reviews, and understanding how others have interpreted primary sources. Always cite the original source if you can access it; use secondary citations only when the original is truly unavailable."
    },
    {
      question: "How do I cite sources I found through another source?",
      answer: "These are called secondary citations. In APA: (Original Author, year, as cited in Secondary Author, year). Only the secondary source appears in your reference list. Use sparingly—secondary citations suggest you haven't read the original. Always try to locate and read the original source, as the secondary source may have misinterpreted it."
    },
    {
      question: "Can I cite Wikipedia in my thesis?",
      answer: "Generally, no—Wikipedia shouldn't appear as a cited source in academic work because it's not peer-reviewed and content can change. However, Wikipedia can be useful for initial exploration and finding primary sources cited in articles. Cite those original sources instead. Some instructors accept Wikipedia citations for uncontroversial facts, but check with your supervisor."
    },
    {
      question: "How do I handle sources with no author or date?",
      answer: "No author: Use the organization name or, as last resort, the title in shortened form. No date: Use (n.d.) for 'no date' in most styles. No author AND no date: Combine both approaches—Title of Work (n.d.). These situations often indicate lower-quality sources; consider whether more authoritative alternatives exist."
    },
    {
      question: "What's the difference between a bibliography and a reference list?",
      answer: "A reference list (APA, MLA, Harvard) includes only sources you cited in your text. A bibliography (some Chicago styles) may include sources you consulted but didn't cite directly. Some theses require both—a reference list of cited works plus an additional bibliography of background reading. Check your institution's requirements."
    }
  ];

  const howToSteps = [
    {
      name: "Choose and Learn Your Citation Style",
      text: "Confirm the required citation style with your supervisor. Obtain the official style manual or a comprehensive guide. Note key formatting rules for your most common source types."
    },
    {
      name: "Set Up Reference Management",
      text: "Install a reference manager (Zotero, Mendeley, or EndNote). Configure your citation style. Install browser extensions and word processor plugins for seamless workflow."
    },
    {
      name: "Capture Sources Systematically",
      text: "Save sources to your reference manager as you find them. Verify imported metadata for accuracy. Organize sources into folders/collections by thesis chapter or theme."
    },
    {
      name: "Cite As You Write",
      text: "Insert citations through your reference manager as you draft. Don't leave 'insert citation later' notes—cite immediately. Keep track of page numbers for quotes."
    },
    {
      name: "Review and Verify",
      text: "Cross-check every in-text citation against your reference list. Verify formatting details against your style guide. Run your reference list through style-specific checkers."
    },
    {
      name: "Final Polish",
      text: "Check for consistency in formatting throughout. Ensure DOIs and URLs are live and accessible. Have a colleague review a sample of your citations for accuracy."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Citation Mastery for Master's Thesis | APA, MLA, Chicago Guide | DissertlyPro"
        description="Master academic citation for your thesis. Comprehensive guides to APA 7, MLA 9, Chicago, and Harvard styles. Reference management, plagiarism prevention, and citation strategies."
        keywords={["citation guide", "APA 7th edition", "MLA format", "master's thesis", "reference management", "Zotero", "academic writing", "plagiarism prevention"]}
        canonical="https://dissertlypro.com/citation-mastery"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Master Citations for Your Master's Thesis"
        description="A comprehensive guide to academic citation, from choosing your style to managing references and avoiding plagiarism."
        steps={howToSteps}
        totalTime="PT7H"
      />
      <AggregateRatingSchema 
        ratingValue={4.8}
        reviewCount={1956}
        itemName="Citation Mastery Guide for Master's Thesis"
        itemType="Service"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-copper/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Quote className="w-4 h-4" />
              Technical Deep-Dive: Citation Excellence
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Citation Mastery
              <span className="block text-copper mt-2">For Master's Thesis</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Master APA, MLA, Chicago, and Harvard citation styles. Learn reference management, 
              plagiarism prevention, and advanced citation strategies for academic excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>7+ Hours of Content</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>4 Major Styles Covered</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-copper" />
                <span>Master's Focused</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                <Link to="/consultation">
                  Get Citation Help
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services/editing">
                  Editing Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Citation Mastery Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Citation isn't merely a mechanical requirement—it's the foundation of academic integrity and 
                scholarly conversation. Every citation acknowledges intellectual debts, positions your work 
                within disciplinary traditions, and enables readers to verify and extend your research. 
                Yet many master's students struggle with the precise formatting requirements that vary across 
                styles and source types.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This comprehensive guide transforms citation from a frustrating chore into a mastered skill. 
                You'll learn not just the mechanics of APA, MLA, Chicago, and Harvard styles, but also the 
                strategic thinking behind effective citation—when to quote versus paraphrase, how to build 
                citation narratives that strengthen arguments, and how to use reference management tools 
                to save hours of formatting work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond technical accuracy, we address plagiarism prevention and academic integrity. 
                Understanding what constitutes proper attribution protects your academic standing and 
                develops habits that will serve you throughout your scholarly career.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Citation Modules */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Complete Citation Curriculum
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master these six modules for comprehensive citation competence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {citationModules.map((module, index) => (
                <motion.div
                  key={module.module}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border hover:border-copper/50 transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                          <module.icon className="w-6 h-6 text-copper" />
                        </div>
                        <span className="text-xs font-medium text-purple-600 bg-purple-500/10 px-2 py-1 rounded">
                          {module.estimatedTime}
                        </span>
                      </div>
                      <CardTitle className="text-lg mt-4">{module.module}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Style Comparison */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Citation Style Comparison
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quick reference for the four most common academic citation styles.
              </p>
            </motion.div>

            <Tabs defaultValue="apa" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="apa">APA 7th</TabsTrigger>
                <TabsTrigger value="mla">MLA 9th</TabsTrigger>
                <TabsTrigger value="chicago">Chicago</TabsTrigger>
                <TabsTrigger value="harvard">Harvard</TabsTrigger>
              </TabsList>

              {styleComparisons.map((style) => (
                <TabsContent key={style.style} value={style.style.toLowerCase().split(' ')[0]}>
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Quote className="w-4 h-4 text-copper" />
                            In-Text Citations
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-muted/50 p-3 rounded-lg">
                              <p className="text-xs text-muted-foreground mb-1">Parenthetical:</p>
                              <code className="text-sm text-copper">{style.inText}</code>
                            </div>
                            <div className="bg-muted/50 p-3 rounded-lg">
                              <p className="text-xs text-muted-foreground mb-1">Narrative:</p>
                              <code className="text-sm text-copper">{style.inTextNarrative}</code>
                            </div>
                            <div className="bg-muted/50 p-3 rounded-lg">
                              <p className="text-xs text-muted-foreground mb-1">Multiple Authors:</p>
                              <code className="text-sm text-copper">{style.multipleAuthors}</code>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                            <List className="w-4 h-4 text-copper" />
                            Reference Entry (Journal Article)
                          </h4>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <code className="text-sm text-muted-foreground leading-relaxed block">
                              {style.journalArticle}
                            </code>
                          </div>
                          <div className="mt-4 bg-copper/10 p-3 rounded-lg">
                            <p className="text-sm text-copper">
                              <strong>Used in:</strong> {style.usedIn}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4" />
                Common Citation Errors
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mistakes to Avoid
              </h2>
              <p className="text-lg text-muted-foreground">
                These citation errors commonly cost marks and credibility.
              </p>
            </motion.div>

            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <motion.div
                  key={item.mistake}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                          <AlertTriangle className="w-5 h-5 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground">{item.mistake}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              item.impact === 'High' ? 'bg-red-500/10 text-red-600' :
                              item.impact === 'Medium' ? 'bg-yellow-500/10 text-yellow-600' :
                              'bg-blue-500/10 text-blue-600'
                            }`}>
                              {item.impact} Impact
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                          <div className="flex items-start gap-2 bg-green-500/10 p-2 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <p className="text-sm text-green-700">{item.correct}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Paraphrasing Techniques */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Paraphrasing Techniques
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform source material ethically while maintaining meaning.
              </p>
            </motion.div>

            <div className="space-y-6">
              {paraphrasingTechniques.map((item, index) => (
                <motion.div
                  key={item.technique}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Copy className="w-5 h-5 text-copper" />
                        {item.technique}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-lg">
                          <p className="text-xs text-red-600 font-medium mb-2">Original:</p>
                          <p className="text-sm text-muted-foreground italic">"{item.original}"</p>
                        </div>
                        <div className="bg-green-500/5 border border-green-500/20 p-4 rounded-lg">
                          <p className="text-xs text-green-600 font-medium mb-2">Paraphrased:</p>
                          <p className="text-sm text-muted-foreground italic">"{item.paraphrased}"</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 bg-copper/10 p-3 rounded-lg">
                        <Lightbulb className="w-4 h-4 text-copper mt-0.5 shrink-0" />
                        <p className="text-sm text-copper">{item.tip}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reference Manager Comparison */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Reference Management Tools
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the right tool to streamline your citation workflow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {referenceManagerComparison.map((tool, index) => (
                <motion.div
                  key={tool.tool}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border hover:border-copper/50 transition-all">
                    <CardHeader>
                      <CardTitle className="text-xl text-center">{tool.tool}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-green-600 mb-2">Pros</h4>
                          <ul className="space-y-1">
                            {tool.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-3 h-3 text-green-500 mt-1 shrink-0" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-red-600 mb-2">Cons</h4>
                          <ul className="space-y-1">
                            {tool.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <AlertTriangle className="w-3 h-3 text-red-500 mt-1 shrink-0" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-copper/10 p-3 rounded-lg">
                          <p className="text-sm text-copper">
                            <strong>Best for:</strong> {tool.bestFor}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Citation FAQs
              </h2>
              <p className="text-lg text-muted-foreground">
                Answers to the most common citation questions.
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-copper/10 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Need Professional Citation Review?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our editors specialize in academic citation and can review your entire thesis 
                for formatting consistency, accuracy, and style compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                  <Link to="/consultation">
                    Book Citation Review
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/editing">
                    Editing Services
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Related Resources</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/literature-review-guide" className="group">
                <Card className="border-border hover:border-copper/50 transition-all h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Search className="w-8 h-8 text-copper" />
                    <div>
                      <h4 className="font-medium group-hover:text-copper transition-colors">Literature Review</h4>
                      <p className="text-xs text-muted-foreground">Search & synthesis guide</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/masters-thesis-guide" className="group">
                <Card className="border-border hover:border-copper/50 transition-all h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-copper" />
                    <div>
                      <h4 className="font-medium group-hover:text-copper transition-colors">Master's Thesis Guide</h4>
                      <p className="text-xs text-muted-foreground">Complete A-Z roadmap</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/qualitative-analysis" className="group">
                <Card className="border-border hover:border-copper/50 transition-all h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Brain className="w-8 h-8 text-copper" />
                    <div>
                      <h4 className="font-medium group-hover:text-copper transition-colors">Qualitative Analysis</h4>
                      <p className="text-xs text-muted-foreground">Data analysis methods</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CitationMastery;
