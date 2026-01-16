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
  Brain, 
  MessageSquare,
  CheckCircle, 
  Clock, 
  FileText, 
  Search,
  Users,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Layers,
  Eye,
  Target,
  Calendar,
  GraduationCap,
  Briefcase,
  Mic,
  PenTool,
  Filter
} from "lucide-react";

const QualitativeAnalysis = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Qualitative Analysis for Master's Thesis", url: "/qualitative-analysis" }
  ];

  const analysisModules = [
    {
      module: "Data Collection Methods",
      icon: Mic,
      topics: [
        "Designing effective interview guides",
        "Conducting semi-structured interviews",
        "Focus group facilitation techniques",
        "Participant observation protocols",
        "Document and artifact analysis"
      ],
      estimatedTime: "60 min"
    },
    {
      module: "Thematic Analysis",
      icon: Layers,
      topics: [
        "Braun & Clarke's 6-phase framework",
        "Generating initial codes systematically",
        "Searching for and reviewing themes",
        "Defining and naming themes effectively",
        "Producing the final thematic report"
      ],
      estimatedTime: "90 min"
    },
    {
      module: "Content Analysis",
      icon: FileText,
      topics: [
        "Manifest vs latent content analysis",
        "Developing coding schemes",
        "Frequency and category analysis",
        "Intercoder reliability testing",
        "Reporting content analysis findings"
      ],
      estimatedTime: "75 min"
    },
    {
      module: "Grounded Theory Basics",
      icon: Brain,
      topics: [
        "Open, axial, and selective coding",
        "Constant comparative method",
        "Memo writing and theoretical sampling",
        "Developing emergent theory",
        "When to use grounded theory approach"
      ],
      estimatedTime: "90 min"
    },
    {
      module: "Phenomenological Analysis",
      icon: Eye,
      topics: [
        "Understanding lived experience",
        "Interpretative Phenomenological Analysis (IPA)",
        "Descriptive phenomenology methods",
        "Horizonalization and meaning units",
        "Writing phenomenological findings"
      ],
      estimatedTime: "75 min"
    },
    {
      module: "NVivo & Software Tools",
      icon: Search,
      topics: [
        "Setting up NVivo projects",
        "Importing and organizing data sources",
        "Creating nodes and coding data",
        "Running queries and visualizations",
        "Exporting results for your thesis"
      ],
      estimatedTime: "60 min"
    }
  ];

  const codingExamples = [
    {
      rawData: "I felt completely overwhelmed when I started my thesis. There was so much to read and I didn't know where to begin. My supervisor was helpful but very busy.",
      initialCodes: ["Overwhelm at start", "Information overload", "Uncertainty about process", "Supervisor supportive but unavailable"],
      themes: ["Initial thesis anxiety", "Navigation challenges", "Supervision dynamics"]
    },
    {
      rawData: "The library resources were excellent but I struggled with time management. Working part-time made it hard to dedicate enough hours to research.",
      initialCodes: ["Adequate resources", "Time management difficulty", "Work-study conflict", "Research hour limitations"],
      themes: ["Resource accessibility", "Time constraints", "External commitments"]
    },
    {
      rawData: "Once I found my rhythm, things got easier. Breaking the thesis into smaller chunks helped me feel less anxious about the whole project.",
      initialCodes: ["Finding workflow", "Chunking strategy", "Anxiety reduction", "Project management"],
      themes: ["Adaptation strategies", "Coping mechanisms", "Milestone-based progress"]
    }
  ];

  const trustworthinessStrategies = [
    {
      criterion: "Credibility",
      description: "Ensuring your findings accurately represent participants' views",
      strategies: [
        "Member checking with participants",
        "Prolonged engagement with data",
        "Peer debriefing sessions",
        "Triangulation of data sources"
      ],
      icon: CheckCircle
    },
    {
      criterion: "Transferability",
      description: "Providing enough detail for readers to assess applicability",
      strategies: [
        "Thick, rich descriptions",
        "Clear participant demographics",
        "Detailed context information",
        "Purposive sampling rationale"
      ],
      icon: Target
    },
    {
      criterion: "Dependability",
      description: "Demonstrating a consistent and traceable research process",
      strategies: [
        "Detailed audit trail documentation",
        "Research journal/reflexive diary",
        "Clear coding scheme evolution",
        "External audit by supervisor"
      ],
      icon: FileText
    },
    {
      criterion: "Confirmability",
      description: "Showing findings emerge from data, not researcher bias",
      strategies: [
        "Reflexivity statements",
        "Quote-rich findings chapters",
        "Negative case analysis",
        "Clear researcher positionality"
      ],
      icon: Eye
    }
  ];

  const commonMistakes = [
    {
      mistake: "Summarizing Instead of Analyzing",
      description: "Restating what participants said without interpretation or pattern identification",
      solution: "Move beyond description to explain what the data means and why it matters"
    },
    {
      mistake: "Imposing Preconceived Categories",
      description: "Forcing data into predetermined themes rather than letting themes emerge",
      solution: "Start with open coding and allow themes to develop inductively from the data"
    },
    {
      mistake: "Ignoring Negative Cases",
      description: "Only reporting data that supports your emerging themes",
      solution: "Actively seek and discuss data that contradicts or complicates your themes"
    },
    {
      mistake: "Insufficient Participant Quotes",
      description: "Making claims without evidence from participant voices",
      solution: "Use direct quotes to illustrate each theme and sub-theme"
    },
    {
      mistake: "Weak Theme Development",
      description: "Creating themes that are too broad, too narrow, or overlapping",
      solution: "Refine themes to be distinct, coherent, and comprehensive"
    },
    {
      mistake: "Neglecting Reflexivity",
      description: "Not acknowledging your influence on the research process",
      solution: "Document your positionality, assumptions, and how they shaped analysis"
    }
  ];

  const faqs = [
    {
      question: "How many participants do I need for qualitative research in a master's thesis?",
      answer: "For most master's theses, 8-15 participants is typical for interview-based studies. The key is reaching data saturation—the point where new interviews no longer yield new themes. Focus groups usually need 3-4 groups of 6-8 participants each. Document analysis depends on the scope of available materials. Your methodology chapter should justify your sample size based on your research approach and saturation evidence."
    },
    {
      question: "Which qualitative analysis method should I choose for my master's thesis?",
      answer: "Choose based on your research question: Thematic analysis is versatile and excellent for beginners exploring patterns in data. Content analysis works well for analyzing existing texts or media systematically. Grounded theory suits studies aiming to develop new theoretical frameworks. Phenomenology is ideal for exploring lived experiences of a phenomenon. For most master's students, thematic analysis offers the best balance of rigor and accessibility."
    },
    {
      question: "Do I need to use NVivo or can I analyze qualitative data manually?",
      answer: "You can absolutely analyze data manually using spreadsheets, Word documents, or physical coding with highlighters and post-it notes. NVivo and similar software help organize larger datasets and create visual outputs but aren't required. Many successful master's theses use manual methods. If your dataset is under 20 interviews, manual analysis is often more practical. The key is maintaining systematic, documented procedures regardless of your chosen tool."
    },
    {
      question: "How do I ensure my qualitative research is rigorous?",
      answer: "Demonstrate rigor through Lincoln and Guba's trustworthiness criteria: credibility (member checking, triangulation), transferability (thick descriptions), dependability (audit trail), and confirmability (reflexivity). Document your analysis process thoroughly, include sufficient participant quotes, address negative cases, and maintain a reflexive journal. Your methodology chapter should clearly explain how you addressed each criterion."
    },
    {
      question: "How long should my findings chapter be for qualitative research?",
      answer: "For a master's thesis, qualitative findings typically span 8,000-15,000 words, often the longest chapter. This length accommodates the rich descriptions and participant quotes essential to qualitative work. Structure around your main themes (usually 3-5), with sub-themes nested within. Each theme should include multiple illustrative quotes, analysis of what the data means, and connections to your research questions."
    },
    {
      question: "How do I present themes in my findings chapter?",
      answer: "Present each theme as a distinct section with a clear heading. Begin with an overview of the theme, then present sub-themes with supporting quotes. For each quote, provide context (participant identifier, relevant demographics) and follow with analytical commentary explaining its significance. Use a thematic map or table at the start to orient readers. End each theme section by connecting back to your research questions."
    }
  ];

  const howToSteps = [
    {
      name: "Transcribe and Prepare Data",
      text: "Transcribe interviews verbatim and import data into your chosen analysis tool. Read through all transcripts multiple times to become intimately familiar with your dataset."
    },
    {
      name: "Generate Initial Codes",
      text: "Work through each transcript line by line, creating descriptive codes for meaningful segments. Use in-vivo codes (participant language) where possible for authenticity."
    },
    {
      name: "Search for Themes",
      text: "Collate codes into potential themes by grouping related codes together. Create a preliminary thematic map showing relationships between themes."
    },
    {
      name: "Review and Refine Themes",
      text: "Check themes against coded extracts and the full dataset. Ensure themes are coherent, distinct, and comprehensive. Merge, split, or discard themes as needed."
    },
    {
      name: "Define and Name Themes",
      text: "Write a detailed analysis of each theme, defining its scope, boundaries, and significance. Create concise, compelling theme names that capture the essence."
    },
    {
      name: "Write Up Findings",
      text: "Present themes with rich descriptions and illustrative quotes. Weave analytical commentary throughout, connecting findings to research questions and existing literature."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Qualitative Analysis for Master's Thesis | Complete Guide | DissertlyPro"
        description="Master qualitative data analysis for your thesis. Step-by-step guidance on thematic analysis, content analysis, coding, NVivo, and establishing research trustworthiness."
        keywords={["qualitative analysis", "thematic analysis", "master's thesis", "coding qualitative data", "NVivo tutorial", "research methods", "grounded theory", "phenomenology"]}
        canonical="https://dissertlypro.com/qualitative-analysis"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Conduct Qualitative Analysis for Your Master's Thesis"
        description="A comprehensive guide to analyzing qualitative data for master's level research, from initial coding through theme development and trustworthiness."
        steps={howToSteps}
        totalTime="PT8H"
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1847}
        itemName="Qualitative Analysis Guide for Master's Thesis"
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
              <Brain className="w-4 h-4" />
              Technical Deep-Dive: Qualitative Methods
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Qualitative Analysis
              <span className="block text-copper mt-2">Master's Thesis Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform interviews, focus groups, and documents into compelling thesis findings. 
              Master thematic analysis, coding techniques, and research trustworthiness.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>8+ Hours of Content</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-copper" />
                <span>6 Analysis Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-copper" />
                <span>Master's Focused</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                <Link to="/consultation">
                  Get Expert Analysis Help
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  View All Services
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
                Why Qualitative Analysis Challenges Master's Students
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Qualitative research offers rich, nuanced insights that quantitative methods cannot capture. 
                However, analyzing qualitative data requires a fundamentally different skillset—one that many 
                master's students haven't developed during coursework. The process of transforming hours of 
                interviews or pages of documents into coherent themes can feel overwhelming without clear guidance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This comprehensive guide walks you through every stage of qualitative analysis, from data 
                collection to final write-up. Whether you're conducting thematic analysis, content analysis, 
                or exploring phenomenological approaches, you'll find step-by-step instructions, worked examples, 
                and strategies for demonstrating research rigor.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike generic research methods texts, this guide focuses specifically on master's-level 
                expectations. We address the practical challenges you'll face—limited time, smaller sample 
                sizes, and the need to balance depth with feasibility. By the end, you'll have the skills 
                and confidence to produce findings that genuinely contribute to your field.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analysis Modules */}
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
                Complete Analysis Curriculum
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master these six modules to develop comprehensive qualitative analysis skills for your thesis.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysisModules.map((module, index) => (
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

      {/* Coding Examples */}
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
                Coding in Action: Worked Examples
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how raw interview data transforms into codes and themes through the analysis process.
              </p>
            </motion.div>

            <div className="space-y-8">
              {codingExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-copper" />
                            Raw Data
                          </h4>
                          <p className="text-sm text-muted-foreground italic bg-muted/50 p-3 rounded-lg">
                            "{example.rawData}"
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <PenTool className="w-4 h-4 text-blue-500" />
                            Initial Codes
                          </h4>
                          <ul className="space-y-1">
                            {example.initialCodes.map((code, i) => (
                              <li key={i} className="text-sm text-muted-foreground bg-blue-500/10 px-2 py-1 rounded">
                                {code}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-purple-500" />
                            Emerging Themes
                          </h4>
                          <ul className="space-y-1">
                            {example.themes.map((theme, i) => (
                              <li key={i} className="text-sm font-medium text-purple-600 bg-purple-500/10 px-2 py-1 rounded">
                                {theme}
                              </li>
                            ))}
                          </ul>
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

      {/* Trustworthiness Framework */}
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
                Establishing Research Trustworthiness
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Demonstrate rigor in your qualitative research using Lincoln and Guba's trustworthiness criteria.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {trustworthinessStrategies.map((item, index) => (
                <motion.div
                  key={item.criterion}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border hover:border-copper/50 transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{item.criterion}</CardTitle>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.strategies.map((strategy, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                            <span>{strategy}</span>
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

      {/* Common Mistakes */}
      <section className="py-16 md:py-20 bg-muted/30">
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
                Critical Pitfalls to Avoid
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common Qualitative Analysis Mistakes
              </h2>
              <p className="text-lg text-muted-foreground">
                These errors frequently undermine otherwise strong qualitative research.
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
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                          <AlertTriangle className="w-5 h-5 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{item.mistake}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                          <div className="flex items-start gap-2 bg-green-500/10 p-3 rounded-lg">
                            <Lightbulb className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <p className="text-sm text-green-700">{item.solution}</p>
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

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Qualitative Analysis FAQs
              </h2>
              <p className="text-lg text-muted-foreground">
                Answers to the most common questions from master's students.
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
                Need Expert Qualitative Analysis Support?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our qualitative research specialists can help with coding, theme development, 
                NVivo analysis, and writing compelling findings chapters.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                  <Link to="/consultation">
                    Book Analysis Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/data-analysis">
                    View Analysis Services
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
              <Link to="/research-methodology" className="group">
                <Card className="border-border hover:border-copper/50 transition-all h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Brain className="w-8 h-8 text-copper" />
                    <div>
                      <h4 className="font-medium group-hover:text-copper transition-colors">Research Methodology</h4>
                      <p className="text-xs text-muted-foreground">Complete methods guide</p>
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
              <Link to="/masters-defense" className="group">
                <Card className="border-border hover:border-copper/50 transition-all h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Mic className="w-8 h-8 text-copper" />
                    <div>
                      <h4 className="font-medium group-hover:text-copper transition-colors">Master's Defense Prep</h4>
                      <p className="text-xs text-muted-foreground">Ace your oral exam</p>
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

export default QualitativeAnalysis;
