import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Shield,
  Eye,
  FileText,
  Brain,
  Lightbulb,
  Scale,
  HelpCircle,
  ChevronRight,
  Target,
  Percent
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
    question: "How accurate are AI detection tools like Turnitin?",
    answer: "AI detection tools typically claim 95-99% accuracy, but independent studies suggest real-world accuracy is lower—around 70-85%. False positives (flagging human-written text as AI) occur in 1-15% of cases, especially with non-native English speakers and technical writing."
  },
  {
    question: "Can AI detection be fooled by paraphrasing?",
    answer: "Paraphrasing AI-generated content may reduce detection rates, but this practice is ethically problematic and may still be detected. Modern detectors analyze writing patterns beyond word choice, including sentence structure, coherence, and stylistic consistency."
  },
  {
    question: "What happens if I'm falsely flagged for AI use?",
    answer: "Most universities have appeal processes. You can provide evidence such as drafts, revision history, research notes, and writing samples that demonstrate your authentic authorship. Document your writing process to protect yourself."
  },
  {
    question: "Do Grammarly and other grammar tools trigger AI detection?",
    answer: "Grammar checkers like Grammarly typically don't trigger AI detection because they correct existing text rather than generate new content. However, using AI-powered paraphrasing features might be flagged."
  },
  {
    question: "Should I run my dissertation through an AI detector before submitting?",
    answer: "This can be useful for peace of mind, but be aware that different tools give different results. Your university's detector may differ from public ones. Focus on authentic writing practices rather than trying to 'beat' detectors."
  },
  {
    question: "Can professors detect AI without using tools?",
    answer: "Experienced supervisors often notice AI-generated content through stylistic inconsistencies, unusually 'perfect' prose, lack of personal voice, or content that doesn't match your previous writing style and knowledge level."
  }
];

const detectionTools = [
  {
    name: "Turnitin AI Detection",
    usage: "Most universities",
    accuracy: "~95% claimed",
    notes: "Integrated into existing plagiarism workflow",
    color: "blue"
  },
  {
    name: "GPTZero",
    usage: "Popular standalone",
    accuracy: "~85% claimed",
    notes: "Free tier available for testing",
    color: "green"
  },
  {
    name: "Originality.AI",
    usage: "Academic & publishing",
    accuracy: "~94% claimed",
    notes: "Strong focus on ChatGPT detection",
    color: "purple"
  },
  {
    name: "Copyleaks",
    usage: "Enterprise & education",
    accuracy: "~99% claimed",
    notes: "Multi-language support",
    color: "orange"
  }
];

const detectionIndicators = [
  {
    indicator: "Perplexity Score",
    description: "Measures how 'surprising' the text is. AI text tends to be more predictable with lower perplexity.",
    humanRange: "Higher (more varied)",
    aiRange: "Lower (more predictable)"
  },
  {
    indicator: "Burstiness",
    description: "Measures variation in sentence length and complexity. Humans write with more natural variation.",
    humanRange: "Higher (varied sentences)",
    aiRange: "Lower (consistent length)"
  },
  {
    indicator: "Token Probability",
    description: "Analyzes likelihood of word sequences. AI tends to choose statistically probable words.",
    humanRange: "More unpredictable",
    aiRange: "Higher probability patterns"
  },
  {
    indicator: "Stylometric Analysis",
    description: "Examines writing style fingerprints like vocabulary richness and syntactic patterns.",
    humanRange: "Unique personal style",
    aiRange: "Generic, averaged style"
  }
];

const protectionStrategies = [
  {
    title: "Document Your Process",
    description: "Keep drafts, notes, and revision history to prove authentic authorship",
    icon: FileText,
    tips: [
      "Save multiple dated drafts",
      "Use track changes or version control",
      "Keep research notes and outlines",
      "Screenshot your writing sessions"
    ]
  },
  {
    title: "Maintain Your Voice",
    description: "Write authentically in your own style, even when using AI for editing",
    icon: Brain,
    tips: [
      "Don't over-polish to perfection",
      "Keep discipline-specific terminology",
      "Include personal reflections where appropriate",
      "Let your expertise show through"
    ]
  },
  {
    title: "Use AI Transparently",
    description: "If you use AI tools, disclose them properly in your methodology",
    icon: Shield,
    tips: [
      "Document which tools you used",
      "Explain how you used them",
      "Distinguish AI assistance from your original work",
      "Follow your institution's disclosure requirements"
    ]
  },
  {
    title: "Know Your Rights",
    description: "Understand the appeal process if falsely flagged",
    icon: Scale,
    tips: [
      "Read your university's AI policy",
      "Know the academic integrity process",
      "Prepare evidence of authentic work",
      "Seek support from your supervisor"
    ]
  }
];

const AIDetectionGuide = () => {
  return (
    <Layout>
      <SEO
        title="AI Detection Guide | How Turnitin & GPTZero Work | DissertlyPro"
        description="Understand how AI detection tools like Turnitin work. Learn what triggers detection, how to protect yourself from false positives, and navigate the appeal process."
        canonical="https://dissertlypro.com/ai-detection-guide"
        keywords={["AI detection", "Turnitin AI", "GPTZero", "AI writing detection", "false positive AI", "AI academic integrity"]}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dissertlypro.com" },
          { name: "AI in Academia", url: "https://dissertlypro.com/ai-academia" },
          { name: "AI Detection Guide", url: "https://dissertlypro.com/ai-detection-guide" }
        ]}
      />
      <HowToSchema
        name="How to Protect Yourself from AI Detection False Positives"
        description="Steps to ensure your authentic dissertation work isn't falsely flagged by AI detection tools"
        steps={[
          { name: "Document your writing process", text: "Save drafts, notes, and revision history to prove authentic authorship" },
          { name: "Maintain your authentic voice", text: "Write in your own style without over-polishing" },
          { name: "Disclose any AI tool usage", text: "Be transparent about grammar checkers or research tools" },
          { name: "Know the appeal process", text: "Understand your university's procedures for contesting AI flags" }
        ]}
        totalTime="P1D"
      />

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container mx-auto max-w-4xl px-4 relative">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "AI in Academia", href: "/ai-academia" },
              { label: "AI Detection Guide" }
            ]}
            className="mb-6"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4" variant="secondary">
              <Eye className="w-3 h-3 mr-1" />
              Understanding AI Detection
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Detection: What You <span className="text-gradient-copper">Need to Know</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How Turnitin, GPTZero, and other AI detection tools work—and how to 
              protect your authentic dissertation from false positives.
            </p>
          </motion.div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">85%+</div>
                <div className="text-sm text-muted-foreground">Universities use AI detection</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">1-15%</div>
                <div className="text-sm text-muted-foreground">False positive rate</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">70-95%</div>
                <div className="text-sm text-muted-foreground">Real-world accuracy</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert className="border-yellow-500/50 bg-yellow-500/10">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <AlertTitle>Important Disclaimer</AlertTitle>
            <AlertDescription>
              This guide is educational. We do not endorse using AI to generate dissertation content 
              or attempting to evade detection. Always follow your institution's academic integrity policies.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* How Detection Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How AI Detection Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI detectors analyze text using multiple signals to distinguish human from machine writing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {detectionIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.indicator}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      {indicator.indicator}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{indicator.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <div className="font-medium text-green-700 dark:text-green-400 mb-1">Human Writing</div>
                        <div className="text-muted-foreground">{indicator.humanRange}</div>
                      </div>
                      <div className="bg-red-500/10 p-3 rounded-lg">
                        <div className="font-medium text-red-700 dark:text-red-400 mb-1">AI Writing</div>
                        <div className="text-muted-foreground">{indicator.aiRange}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <SeeAlso
            links={[
              { title: "AI in Academia Hub", href: "/ai-academia" },
              { title: "How to Cite AI", href: "/citing-ai-guide" }
            ]}
            variant="highlight"
          />
        </div>
      </section>

      {/* Detection Tools Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Major AI Detection Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These are the primary tools universities use to detect AI-generated content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {detectionTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <Badge variant="outline">{tool.accuracy}</Badge>
                    </div>
                    <CardDescription>{tool.usage}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tool.notes}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* False Positives */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="destructive">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Critical Issue
            </Badge>
            <h2 className="text-3xl font-bold mb-4">The False Positive Problem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI detection isn't perfect. Here's what can trigger false positives.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Higher Risk of False Positives
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Non-native English speakers",
                      "Highly technical or formulaic writing",
                      "Common academic phrases and structures",
                      "Heavily edited or polished text",
                      "Text on widely-discussed topics",
                      "Short text samples (<250 words)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Lower Risk of False Positives
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Unique personal voice and style",
                      "Domain-specific terminology",
                      "Complex, nuanced arguments",
                      "Personal anecdotes and reflections",
                      "Inconsistent writing quality (human!)",
                      "Longer text samples (1000+ words)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert className="border-primary/50 bg-primary/5">
            <Lightbulb className="h-5 w-5 text-primary" />
            <AlertTitle>Key Insight</AlertTitle>
            <AlertDescription>
              Ironically, trying too hard to "sound academic" or over-polishing your writing can 
              make it more likely to be flagged as AI-generated. Authentic human writing has 
              natural imperfections that detectors recognize.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Protection Strategies */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Protecting Your Authentic Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategies to ensure your genuine dissertation isn't falsely flagged.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {protectionStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <strategy.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{strategy.title}</CardTitle>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appeal Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">If You're Falsely Flagged</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Steps to take if your authentic work is incorrectly identified as AI-generated.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Don't panic",
                description: "False positives happen. An initial flag doesn't mean you're guilty of misconduct."
              },
              {
                step: 2,
                title: "Gather evidence",
                description: "Collect drafts, notes, browser history, writing session timestamps, and any other proof of your writing process."
              },
              {
                step: 3,
                title: "Request the full report",
                description: "Ask to see the complete AI detection report, including confidence scores and flagged sections."
              },
              {
                step: 4,
                title: "Prepare your explanation",
                description: "Document your writing process, explain your research methodology, and show how your expertise shaped the content."
              },
              {
                step: 5,
                title: "Engage with the process",
                description: "Meet with the academic integrity committee. Be calm, factual, and prepared to demonstrate your authentic authorship."
              },
              {
                step: 6,
                title: "Know your rights",
                description: "Understand your institution's appeals process and seek support from your supervisor, student union, or academic support services."
              }
            ].map((item) => (
              <Card key={item.step}>
                <CardContent className="flex items-start gap-4 py-6">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Check Your University's AI Policy</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Use our AI Policy Checker to understand exactly what your institution requires.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/tools/ai-policy-checker">
                    <Shield className="w-4 h-4 mr-2" />
                    Check Your Policy
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

export default AIDetectionGuide;
