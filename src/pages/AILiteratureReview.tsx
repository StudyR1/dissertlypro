import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  CheckCircle,
  XCircle,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Database,
  Sparkles,
  Target,
  Layers,
  FileSearch,
  Bot,
  ExternalLink
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/schemas/FAQSchema";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { SeeAlso } from "@/components/ui/see-also";

const faqs = [
  {
    question: "Can I use AI tools for my systematic literature review?",
    answer: "Yes, AI tools can assist with literature searching and screening, but you must document their use in your methodology. Many PRISMA guidelines now include provisions for AI-assisted screening, but human verification remains essential."
  },
  {
    question: "Will using AI for literature search be considered cheating?",
    answer: "No, using AI-powered search tools like Elicit or Semantic Scholar is generally accepted as a legitimate research aid—similar to using Google Scholar. The key is transparency: disclose the tools used in your methodology section."
  },
  {
    question: "How do I cite papers found through AI tools?",
    answer: "Cite the papers themselves normally. You may also mention in your methodology that you used AI tools for discovery, but individual paper citations follow standard formats for their source type."
  },
  {
    question: "Can AI tools replace reading the actual papers?",
    answer: "No. AI can help identify relevant papers and provide summaries, but you must read primary sources to understand nuances, evaluate quality, and synthesize findings authentically. Relying solely on AI summaries is academically problematic."
  },
  {
    question: "Are AI literature tools better than traditional databases?",
    answer: "AI tools complement, not replace, traditional databases. Use PubMed, Web of Science, and Scopus for comprehensive coverage, and AI tools for discovery and connection-finding. Each has strengths for different aspects of the review process."
  },
  {
    question: "How do I ensure reproducibility when using AI search tools?",
    answer: "Document your search strategy thoroughly: record the exact queries, tools used, dates, and any filters applied. Save search results and note which papers were found through which methods. This ensures your review can be replicated."
  }
];

const aiTools = [
  {
    name: "Elicit",
    url: "https://elicit.org",
    description: "AI research assistant that finds papers, extracts claims, and summarizes findings",
    strengths: ["Semantic search", "Claim extraction", "Paper summarization"],
    limitations: ["Limited to academic sources", "May miss recent publications"],
    bestFor: "Initial exploration and finding relevant papers",
    ethical: true
  },
  {
    name: "Semantic Scholar",
    url: "https://www.semanticscholar.org",
    description: "AI-powered academic search engine with citation analysis",
    strengths: ["Huge database", "Citation graphs", "Influence scores"],
    limitations: ["Can be overwhelming", "Varying quality of AI features"],
    bestFor: "Comprehensive literature searching and citation tracking",
    ethical: true
  },
  {
    name: "Connected Papers",
    url: "https://www.connectedpapers.com",
    description: "Visual tool showing paper relationships and connections",
    strengths: ["Visual network graphs", "Find related work", "Identify key papers"],
    limitations: ["Limited free searches", "No full-text access"],
    bestFor: "Discovering connected literature and research trends",
    ethical: true
  },
  {
    name: "Consensus",
    url: "https://consensus.app",
    description: "AI search engine that extracts findings from scientific papers",
    strengths: ["Evidence synthesis", "Yes/No answers to questions", "Source citations"],
    limitations: ["Focused on specific question formats", "May oversimplify"],
    bestFor: "Quick evidence checks and finding consensus in literature",
    ethical: true
  },
  {
    name: "Research Rabbit",
    url: "https://www.researchrabbit.ai",
    description: "Free tool for discovering papers and tracking authors",
    strengths: ["Completely free", "Author tracking", "Collection management"],
    limitations: ["Smaller database than others", "Less AI sophistication"],
    bestFor: "Building reading lists and tracking ongoing research",
    ethical: true
  },
  {
    name: "Inciteful",
    url: "https://inciteful.xyz",
    description: "Citation network analysis tool for discovering important papers",
    strengths: ["Find foundational papers", "Gap analysis", "Free to use"],
    limitations: ["Learning curve", "Best with seed papers"],
    bestFor: "Identifying seminal works and research gaps",
    ethical: true
  }
];

const workflowSteps = [
  {
    step: 1,
    title: "Define Your Research Question",
    description: "Start with a clear, focused research question before using any search tools",
    aiRole: "AI can help refine your question, but the core focus should come from your research goals",
    tools: ["ChatGPT for brainstorming", "Supervisor consultation"]
  },
  {
    step: 2,
    title: "Initial AI-Assisted Discovery",
    description: "Use AI tools for broad exploration and identifying key papers",
    aiRole: "Semantic search helps find relevant papers you might miss with keyword-only searching",
    tools: ["Elicit", "Semantic Scholar", "Research Rabbit"]
  },
  {
    step: 3,
    title: "Traditional Database Search",
    description: "Conduct systematic searches in established academic databases",
    aiRole: "AI complements but doesn't replace systematic database searching",
    tools: ["PubMed", "Web of Science", "Scopus", "Your discipline's key databases"]
  },
  {
    step: 4,
    title: "Citation Network Analysis",
    description: "Explore connections between papers to find related work",
    aiRole: "AI excels at visualizing and navigating citation networks",
    tools: ["Connected Papers", "Inciteful", "Citation tracking in Semantic Scholar"]
  },
  {
    step: 5,
    title: "Screening and Selection",
    description: "Review abstracts and full texts to select papers for inclusion",
    aiRole: "AI can assist with initial screening, but human judgment is essential",
    tools: ["Your brain", "AI summaries for initial triage only"]
  },
  {
    step: 6,
    title: "Full-Text Reading and Analysis",
    description: "Read selected papers thoroughly and extract relevant information",
    aiRole: "AI cannot replace deep reading—this is where your expertise matters",
    tools: ["PDF readers", "Note-taking software", "Your analytical skills"]
  },
  {
    step: 7,
    title: "Synthesis and Writing",
    description: "Synthesize findings into coherent themes and write your review",
    aiRole: "AI can help organize notes, but synthesis must be your original work",
    tools: ["Reference managers", "Writing tools (for editing only)"]
  }
];

const dosAndDonts = {
  dos: [
    "Document all AI tools used in your methodology",
    "Cross-reference AI findings with traditional searches",
    "Read primary sources—don't rely on AI summaries",
    "Verify AI-extracted claims against original papers",
    "Use multiple tools to ensure comprehensive coverage",
    "Keep detailed records of your search process",
    "Discuss AI tool usage with your supervisor",
    "Stay updated on your field's AI use guidelines"
  ],
  donts: [
    "Use AI to write your literature review",
    "Trust AI summaries without verification",
    "Skip traditional database searches entirely",
    "Let AI determine which papers are 'important'",
    "Use AI paraphrasing for source content",
    "Fail to disclose AI tool usage",
    "Assume AI has found all relevant papers",
    "Use AI to avoid actually reading papers"
  ]
};

const AILiteratureReview = () => {
  return (
    <Layout>
      <SEO
        title="AI Tools for Literature Reviews | Ethical Use Guide | DissertlyPro"
        description="How to use AI tools like Elicit, Semantic Scholar, and Connected Papers ethically for dissertation literature reviews. Complete workflow guide with best practices."
        canonical="https://dissertlypro.com/ai-literature-review"
        keywords={["AI literature review", "Elicit research", "Semantic Scholar", "AI research tools", "systematic review AI", "Connected Papers"]}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dissertlypro.com" },
          { name: "AI in Academia", url: "https://dissertlypro.com/ai-academia" },
          { name: "AI for Literature Reviews", url: "https://dissertlypro.com/ai-literature-review" }
        ]}
      />
      <HowToSchema
        name="How to Use AI Tools for Literature Reviews Ethically"
        description="A step-by-step guide to incorporating AI tools into your literature review process while maintaining academic integrity"
        steps={[
          { name: "Define your research question", text: "Start with a clear, focused research question" },
          { name: "Use AI for initial discovery", text: "Use semantic search tools to find relevant papers" },
          { name: "Conduct traditional searches", text: "Search established academic databases systematically" },
          { name: "Analyze citation networks", text: "Use AI to explore connections between papers" },
          { name: "Screen and select papers", text: "Apply inclusion criteria with human judgment" },
          { name: "Read and analyze full texts", text: "Deeply engage with primary sources" },
          { name: "Synthesize and write", text: "Create your original synthesis of the literature" }
        ]}
        totalTime="P30D"
      />

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container mx-auto max-w-4xl px-4 relative">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "AI in Academia", href: "/ai-academia" },
              { label: "AI for Literature Reviews" }
            ]}
            className="mb-6"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4" variant="secondary">
              <FileSearch className="w-3 h-3 mr-1" />
              Research Tools Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Tools for <span className="text-gradient-copper">Literature Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Use AI-powered research tools ethically to discover papers, 
              analyze citations, and build comprehensive literature reviews.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Principle */}
      <section className="py-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert className="border-primary/50 bg-primary/5">
            <Lightbulb className="h-5 w-5 text-primary" />
            <AlertTitle>Key Principle</AlertTitle>
            <AlertDescription>
              AI tools enhance your literature search—they don't replace your critical analysis. 
              Use them for discovery and organization, but the reading, synthesis, and writing must be authentically yours.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* AI Tools Directory */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Tools for Literature Research</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ethically-approved tools that can help you discover and organize academic literature.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Database className="w-5 h-5 text-primary" />
                          {tool.name}
                        </CardTitle>
                        <CardDescription className="mt-2">{tool.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0">
                        <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                        Ethical
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-medium mb-2 text-green-600 dark:text-green-400">Strengths:</div>
                      <div className="flex flex-wrap gap-2">
                        {tool.strengths.map(strength => (
                          <Badge key={strength} variant="secondary" className="text-xs">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2 text-yellow-600 dark:text-yellow-400">Limitations:</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {tool.limitations.map(limit => (
                          <li key={limit} className="flex items-start gap-2">
                            <AlertTriangle className="w-3 h-3 mt-1 shrink-0" />
                            {limit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="text-sm">
                        <span className="font-medium">Best for: </span>
                        <span className="text-muted-foreground">{tool.bestFor}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={tool.url} target="_blank" rel="noopener noreferrer">
                        Visit {tool.name}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <SeeAlso
            links={[
              { title: "Literature Search Builder Tool", href: "/tools/literature-search" },
              { title: "PRISMA Flow Diagram Tool", href: "/tools/prisma-flow" }
            ]}
            variant="highlight"
            className="mt-8"
          />
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI-Assisted Literature Review Workflow</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A step-by-step approach to integrating AI tools ethically into your review process.
            </p>
          </div>

          <div className="space-y-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="py-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
                        <div className="bg-muted/50 p-3 rounded-lg mb-3">
                          <div className="text-sm">
                            <span className="font-medium text-primary">AI Role: </span>
                            <span className="text-muted-foreground">{step.aiRole}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.tools.map(tool => (
                            <Badge key={tool} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dos and Don'ts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Best Practices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential guidelines for ethical AI use in literature reviews.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  Do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {dosAndDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <XCircle className="w-5 h-5" />
                  Don't
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {dosAndDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Disclosure */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Documenting AI Tool Usage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How to disclose AI tool usage in your literature review methodology.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="bg-muted/50 rounded-lg p-6 font-mono text-sm">
                <p className="mb-4 font-semibold text-foreground">Sample Methodology Text:</p>
                <p className="text-muted-foreground leading-relaxed">
                  "The literature search employed a multi-pronged strategy combining traditional database 
                  searching with AI-assisted discovery tools. Initial searches were conducted in PubMed, 
                  Web of Science, and PsycINFO using predetermined search terms (see Appendix A). 
                  <br /><br />
                  To supplement these searches and identify potentially relevant papers not captured by 
                  keyword searching, we used Elicit (elicit.org) for semantic search and Connected Papers 
                  (connectedpapers.com) for citation network analysis. All papers identified through AI 
                  tools were independently verified against inclusion criteria by [author name].
                  <br /><br />
                  AI tools were used solely for paper discovery and initial screening; all included papers 
                  were read in full by the researcher, and synthesis represents original analytical work."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Build Your Search Strategy</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Use our free Literature Search Builder to create systematic database queries with Boolean operators.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/tools/literature-search">
                    <Search className="w-4 h-4 mr-2" />
                    Literature Search Builder
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/ai-academia">
                    Back to AI Hub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default AILiteratureReview;
