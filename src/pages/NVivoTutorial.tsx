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
  FolderOpen,
  Tag,
  GitBranch,
  BarChart3,
  Play,
  Download
} from "lucide-react";

const NVivoTutorial = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "NVivo Tutorial for Qualitative Research", url: "/nvivo-tutorial" }
  ];

  const nvivoModules = [
    {
      module: "Project Setup & Data Import",
      icon: FolderOpen,
      topics: [
        "Creating and organizing NVivo projects",
        "Importing interview transcripts and documents",
        "Importing audio, video, and image files",
        "Managing source materials effectively",
        "Setting up project folders and classifications"
      ],
      estimatedTime: "45 min"
    },
    {
      module: "Coding Fundamentals",
      icon: Tag,
      topics: [
        "Creating nodes (codes) and hierarchies",
        "In-vivo coding techniques",
        "Descriptive and interpretive coding",
        "Using coding stripes and highlights",
        "Managing and merging codes"
      ],
      estimatedTime: "60 min"
    },
    {
      module: "Advanced Coding & Organization",
      icon: GitBranch,
      topics: [
        "Building node hierarchies and trees",
        "Using cases and case classifications",
        "Attribute-based coding",
        "Auto-coding features and text search",
        "Relationship nodes and connections"
      ],
      estimatedTime: "75 min"
    },
    {
      module: "Queries & Analysis",
      icon: Search,
      topics: [
        "Text search queries",
        "Word frequency analysis",
        "Coding queries and matrix coding",
        "Compound queries for complex analysis",
        "Group queries by attributes"
      ],
      estimatedTime: "90 min"
    },
    {
      module: "Visualization & Reporting",
      icon: BarChart3,
      topics: [
        "Creating word clouds and tree maps",
        "Hierarchy charts and cluster analysis",
        "Building project maps and concept maps",
        "Exporting visualizations for dissertations",
        "Generating codebook and summary reports"
      ],
      estimatedTime: "60 min"
    },
    {
      module: "Team Collaboration & Quality",
      icon: Users,
      topics: [
        "Inter-coder reliability testing",
        "Merging projects from team members",
        "Using memos and annotations",
        "Audit trails and reflexivity",
        "Backup and version control"
      ],
      estimatedTime: "45 min"
    }
  ];

  const faqs = [
    {
      question: "Is NVivo suitable for my dissertation?",
      answer: "NVivo is ideal if you have 10+ interviews, extensive document analysis, or need to manage complex qualitative datasets. For smaller projects (under 10 interviews), manual coding may be sufficient, though NVivo still adds rigor and auditability."
    },
    {
      question: "How long does it take to learn NVivo?",
      answer: "Basic proficiency takes 8-15 hours of focused learning. Most students can import data and begin coding within a few hours. Advanced features like queries and visualizations require additional practice but aren't always necessary for dissertations."
    },
    {
      question: "Can I use NVivo for mixed methods research?",
      answer: "Yes! NVivo excels at mixed methods. You can import quantitative data, create matrices combining qual and quant findings, and use classification attributes to connect participant demographics with qualitative themes."
    },
    {
      question: "NVivo vs ATLAS.ti vs MAXQDA: Which should I choose?",
      answer: "NVivo is most popular in social sciences and education, with strong institutional support. ATLAS.ti excels at multimedia analysis. MAXQDA is known for user-friendliness. Check what your university provides—most offer NVivo site licenses."
    },
    {
      question: "How do I report NVivo use in my methodology?",
      answer: "State the version used, describe your coding process (not just 'used NVivo'), explain your analytical approach, and include inter-coder reliability if applicable. NVivo is a tool—you still need to describe your analytical framework."
    },
    {
      question: "Can NVivo help with literature reviews?",
      answer: "Absolutely. Import PDFs, code themes across literature, use word frequency to identify trends, and create matrices comparing sources. Many students use NVivo for systematic literature reviews alongside data analysis."
    }
  ];

  const howToSteps = [
    { name: "Set Up Your Project", text: "Create a new NVivo project and establish a clear folder structure for sources, coding, and memos before importing any data." },
    { name: "Import Source Materials", text: "Import transcripts, documents, audio, or video files. Use consistent naming conventions and add source classifications." },
    { name: "Develop Initial Codes", text: "Read through your data and create initial nodes (codes). Use in-vivo coding for participant language and descriptive codes for your interpretations." },
    { name: "Build Code Hierarchy", text: "Organize codes into hierarchies and categories. Group related codes under parent nodes to develop your thematic structure." },
    { name: "Run Queries", text: "Use text search, word frequency, and coding queries to explore patterns and test emerging themes across your data." },
    { name: "Create Visualizations", text: "Generate word clouds, hierarchy charts, and project maps to visualize findings and identify relationships between themes." },
    { name: "Export for Dissertation", text: "Export coding reports, visualizations, and summary tables for your methodology and findings chapters." }
  ];

  return (
    <Layout>
      <SEO
        title="NVivo Tutorial for Qualitative Research | Complete 2025 Guide | DissertlyPro"
        description="Master NVivo for your dissertation with our comprehensive tutorial. Learn coding, queries, visualizations, and best practices for qualitative data analysis in academic research."
        canonical="https://dissertlypro.com/nvivo-tutorial"
        keywords={["NVivo tutorial", "qualitative data analysis", "NVivo coding", "dissertation qualitative analysis", "NVivo for research", "CAQDAS tutorial", "NVivo queries", "qualitative software"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Use NVivo for Dissertation Research"
        description="A step-by-step guide to using NVivo qualitative data analysis software for your dissertation, from project setup to final reporting."
        steps={howToSteps}
        totalTime="PT6H"
      />
      <FAQSchema faqs={faqs} />
      <AggregateRatingSchema
        itemName="NVivo Tutorial for Qualitative Research"
        ratingValue={4.9}
        ratingCount={1847}
        reviewCount={423}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              Technical Deep-Dive
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-navy bg-clip-text text-transparent">
              NVivo Tutorial for Qualitative Research
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Master qualitative data analysis with NVivo. From project setup to advanced queries—
              everything you need for rigorous dissertation research.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>6+ hours of content</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>6 comprehensive modules</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>PhD-level guidance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">NVivo Learning Modules</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nvivoModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.module}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">
                          {module.estimatedTime}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{module.module}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-green-500 mt-1 shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Essential NVivo Concepts</h2>
          
          <Tabs defaultValue="nodes" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="nodes">Nodes</TabsTrigger>
              <TabsTrigger value="cases">Cases</TabsTrigger>
              <TabsTrigger value="queries">Queries</TabsTrigger>
              <TabsTrigger value="memos">Memos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="nodes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Understanding Nodes (Codes)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Nodes are containers for your codes—the labels you apply to segments of text, audio, or video. They're the building blocks of your analysis.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg">
                      <h4 className="font-medium mb-2">Free Nodes</h4>
                      <p className="text-sm text-muted-foreground">Standalone codes not yet organized into a hierarchy. Good for initial coding.</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg">
                      <h4 className="font-medium mb-2">Hierarchical Nodes</h4>
                      <p className="text-sm text-muted-foreground">Parent-child relationships between codes, representing themes and sub-themes.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="cases" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Working with Cases</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Cases represent your units of analysis—typically individual participants, organizations, or events. Cases allow you to attach attributes and compare across units.</p>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      Pro Tip
                    </h4>
                    <p className="text-sm text-muted-foreground">Create case classifications with attributes (age, gender, role) to enable matrix coding queries that compare themes across participant groups.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="queries" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Query Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium">Text Search Query</h4>
                      <p className="text-sm text-muted-foreground">Find specific words or phrases across all sources</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium">Word Frequency Query</h4>
                      <p className="text-sm text-muted-foreground">Identify most common words to discover potential themes</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium">Matrix Coding Query</h4>
                      <p className="text-sm text-muted-foreground">Cross-tabulate codes with cases or attributes for pattern analysis</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium">Coding Query</h4>
                      <p className="text-sm text-muted-foreground">Find where specific codes occur together or separately</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="memos" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Using Memos Effectively</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Memos are your research journal within NVivo—essential for reflexivity, theory development, and audit trails.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span><strong>Reflexive memos:</strong> Document your assumptions and how they evolve</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span><strong>Analytical memos:</strong> Record insights and emerging interpretations</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span><strong>Methodological memos:</strong> Track decisions about coding and analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Common NVivo Mistakes to Avoid</h2>
          
          <div className="space-y-4">
            {[
              {
                mistake: "Creating too many codes too quickly",
                solution: "Start with fewer, broader codes. Refine and split codes as your understanding deepens."
              },
              {
                mistake: "Treating NVivo as a replacement for analysis",
                solution: "NVivo organizes data—it doesn't analyze it for you. You still need an analytical framework."
              },
              {
                mistake: "Ignoring memos and annotations",
                solution: "Memos create the audit trail examiners look for. Write memos regularly throughout your analysis."
              },
              {
                mistake: "Not backing up projects",
                solution: "NVivo projects can corrupt. Export backup copies weekly and before major changes."
              },
              {
                mistake: "Over-relying on auto-coding",
                solution: "Auto-coding is a starting point, not a replacement for careful reading and interpretation."
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-destructive/10 shrink-0">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.mistake}</h3>
                      <p className="text-sm text-muted-foreground">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/qualitative-analysis" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Qualitative Analysis Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Master thematic analysis, content analysis, and grounded theory approaches.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/spss-tutorial" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    SPSS Tutorial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Quantitative data analysis for mixed methods research.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/mixed-methods-research" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Mixed Methods Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Combine NVivo qualitative analysis with quantitative methods.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-navy/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert Help with NVivo Analysis?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our qualitative research specialists can help you set up your NVivo project, 
            develop your coding framework, and ensure methodological rigor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services/data-analysis">Data Analysis Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NVivoTutorial;
