import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, AggregateRatingSchema, HowToSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  PenTool,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  GraduationCap,
  Clock,
  BookOpen,
  MessageSquare,
  Lightbulb,
  FileText,
  Quote,
  Target,
  Layers,
  Sparkles
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AcademicWriting = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Master's Resources", url: "/masters-resources" },
    { name: "Academic Writing Excellence", url: "/academic-writing" }
  ];

  const howToSteps = [
    { name: "Master Paragraph Structure", text: "Learn the topic sentence, evidence, analysis, transition (TEAT) structure for effective academic paragraphs." },
    { name: "Develop Your Academic Voice", text: "Balance authority with appropriate hedging, and maintain objectivity while presenting your argument." },
    { name: "Build Strong Arguments", text: "Structure claims with evidence and warrant, addressing counterarguments before they arise." },
    { name: "Create Effective Transitions", text: "Connect ideas across sentences, paragraphs, and sections for a cohesive narrative." },
    { name: "Master Citation Integration", text: "Weave sources into your argument naturally, balancing summary, paraphrase, and quotation." },
    { name: "Revise Systematically", text: "Move from structural revision to paragraph-level editing to sentence-level polishing." }
  ];

  const writingPrinciples = [
    {
      title: "Clarity Over Complexity",
      description: "Academic writing should be clear and precise, not unnecessarily complicated. Sophistication comes from ideas, not convoluted sentences.",
      tips: [
        "Prefer shorter sentences for complex ideas",
        "Define technical terms when first used",
        "Avoid jargon when simpler words work",
        "One main idea per sentence"
      ]
    },
    {
      title: "Argument-Driven Structure",
      description: "Every section, paragraph, and sentence should advance your argument. Nothing is included just for the sake of inclusion.",
      tips: [
        "Start each chapter by stating its purpose",
        "Begin paragraphs with topic sentences",
        "End paragraphs connecting to broader argument",
        "Cut anything that doesn't serve your thesis"
      ]
    },
    {
      title: "Evidence-Based Claims",
      description: "Claims require support. Every assertion should be backed by evidence, properly cited, and connected to your argument.",
      tips: [
        "Distinguish between claims and evidence",
        "Use 'because' to connect claims to support",
        "Acknowledge limitations of your evidence",
        "Cite sources for all non-original ideas"
      ]
    },
    {
      title: "Critical Engagement",
      description: "Academic writing requires engaging critically with sources—analyzing, synthesizing, and evaluating rather than just summarizing.",
      tips: [
        "Compare and contrast multiple sources",
        "Identify gaps and limitations in research",
        "Position your work within debates",
        "Challenge assumptions with evidence"
      ]
    }
  ];

  const paragraphStructure = {
    name: "TEAT Paragraph Structure",
    elements: [
      { letter: "T", name: "Topic Sentence", description: "State the paragraph's main claim clearly", example: "Remote work significantly impacts employee collaboration patterns." },
      { letter: "E", name: "Evidence", description: "Provide supporting data, quotes, or examples", example: "Smith (2023) found that remote teams held 40% fewer spontaneous meetings..." },
      { letter: "A", name: "Analysis", description: "Explain how evidence supports your claim", example: "This reduction suggests that remote work reduces informal knowledge sharing..." },
      { letter: "T", name: "Transition", description: "Connect to the next paragraph's topic", example: "However, this decrease in synchronous communication may be offset by asynchronous methods..." }
    ]
  };

  const commonMistakes = [
    {
      mistake: "Starting paragraphs with citations",
      wrong: "According to Smith (2023), leadership affects team performance...",
      right: "Effective leadership significantly impacts team performance. Smith (2023) demonstrates that...",
      explanation: "Your voice and argument should lead; sources support your points."
    },
    {
      mistake: "Using 'I think' or 'In my opinion'",
      wrong: "I think this evidence suggests that...",
      right: "This evidence suggests that...",
      explanation: "Academic writing assumes your claims are your perspective. State them with authority."
    },
    {
      mistake: "Overusing passive voice",
      wrong: "The data was collected and analyzed by the researcher...",
      right: "The researcher collected and analyzed the data...",
      explanation: "Active voice is clearer and more direct. Use passive selectively when appropriate."
    },
    {
      mistake: "Vague hedging",
      wrong: "It seems that something might possibly suggest...",
      right: "These findings suggest that...",
      explanation: "Hedge appropriately, but don't undermine your argument with excessive qualification."
    },
    {
      mistake: "Summary without analysis",
      wrong: "Smith (2023) says X. Jones (2022) says Y. Brown (2021) says Z.",
      right: "While Smith (2023) argues X, this overlooks Y, a limitation addressed by Jones (2022) who demonstrates...",
      explanation: "Synthesize sources into a conversation rather than listing them separately."
    }
  ];

  const transitionPhrases = [
    { category: "Addition", phrases: ["Furthermore", "Moreover", "Additionally", "In addition to"] },
    { category: "Contrast", phrases: ["However", "Conversely", "In contrast", "Nevertheless"] },
    { category: "Cause/Effect", phrases: ["Therefore", "Consequently", "As a result", "Thus"] },
    { category: "Example", phrases: ["For instance", "Specifically", "To illustrate", "In particular"] },
    { category: "Conclusion", phrases: ["In conclusion", "Ultimately", "In summary", "To conclude"] },
    { category: "Comparison", phrases: ["Similarly", "Likewise", "In the same way", "Comparably"] }
  ];

  const faqs = [
    {
      question: "How do I develop my academic voice?",
      answer: "Read extensively in your field to absorb disciplinary conventions. Practice writing regularly. Balance confidence with appropriate hedging. Use first person sparingly and purposefully. Get feedback on your writing style from advisors and peers."
    },
    {
      question: "When should I use first person (I/we) in academic writing?",
      answer: "Use first person for methodological decisions ('I selected this approach because...'), positioning within debates, and reflexive statements in qualitative research. Avoid for claims that don't require personal ownership ('This evidence suggests...')."
    },
    {
      question: "How long should my paragraphs be?",
      answer: "Academic paragraphs typically range from 100-250 words. Each should develop one main idea. Very short paragraphs may lack development; very long ones may contain multiple ideas that should be separated."
    },
    {
      question: "How do I avoid plagiarism while using sources?",
      answer: "Cite all ideas that aren't your own. Paraphrase in your own words rather than just swapping synonyms. Use quotation marks for direct quotes. Integrate sources into your argument rather than just copying information."
    },
    {
      question: "How can I make my writing more concise?",
      answer: "Eliminate redundancy ('completely eliminate' → 'eliminate'). Remove filler phrases ('It is important to note that' → just make the point). Prefer strong verbs over noun phrases ('make an examination' → 'examine'). Cut unnecessary qualifiers."
    }
  ];

  const relatedResources = [
    { title: "Citation Mastery", href: "/citation-mastery", icon: Quote, description: "APA, MLA, Chicago styles" },
    { title: "Literature Review Guide", href: "/literature-review-guide", icon: BookOpen, description: "Master systematic reviews" },
    { title: "Thesis Structure", href: "/thesis-structure", icon: FileText, description: "Chapter-by-chapter guidance" },
    { title: "Research Methodology", href: "/research-methodology", icon: Target, description: "Design your research approach" }
  ];

  return (
    <Layout>
      <SEO 
        title="Academic Writing Excellence | Thesis Writing Guide | DissertlyPro"
        description="Master thesis-level writing with our comprehensive guide. Argumentation, paragraph structure, transitions, academic voice development, and revision strategies."
        keywords={["academic writing", "thesis writing", "academic voice", "paragraph structure", "academic argumentation", "scholarly writing", "thesis writing tips"]}
        canonical="https://dissertlypro.com/academic-writing"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2341}
        itemName="Academic Writing Excellence Guide"
        itemType="Service"
      />
      <HowToSchema
        name="How to Master Academic Writing for Your Thesis"
        description="A comprehensive guide to developing excellent thesis-level writing skills"
        steps={howToSteps}
        totalTime="P2M"
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
              <PenTool className="w-4 h-4" />
              Technical Deep-Dive
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Academic Writing
              <span className="block text-copper mt-2">Excellence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Master thesis-level writing. Argumentation, paragraph structure, transitions, 
              and academic voice development for compelling scholarly work.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>5+ hours content</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-copper" />
                <span>Master's Level</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-copper" />
                <span>Examples Included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Core Writing Principles</h2>
              <p className="text-lg text-muted-foreground">
                Master these foundational principles before focusing on specific techniques:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {writingPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-copper" />
                        {principle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{principle.description}</p>
                      <ul className="space-y-2">
                        {principle.tips.map((tip, tIndex) => (
                          <li key={tIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{tip}</span>
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

      {/* TEAT Paragraph Structure */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">{paragraphStructure.name}</h2>
              <p className="text-lg text-muted-foreground">
                Every academic paragraph should follow this proven structure:
              </p>
            </motion.div>

            <div className="space-y-4">
              {paragraphStructure.elements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xl font-bold text-copper">{element.letter}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{element.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{element.description}</p>
                          <div className="bg-background rounded-lg p-3 border border-border">
                            <p className="text-sm text-foreground italic">"{element.example}"</p>
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

      {/* Common Mistakes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Common Mistakes to Avoid</h2>
              <p className="text-lg text-muted-foreground">
                Recognize and correct these frequent academic writing errors:
              </p>
            </motion.div>

            <div className="space-y-6">
              {commonMistakes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-3">{item.mistake}</h3>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3">
                              <p className="text-xs font-medium text-red-600 mb-1">❌ Avoid:</p>
                              <p className="text-sm text-muted-foreground italic">{item.wrong}</p>
                            </div>
                            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
                              <p className="text-xs font-medium text-green-600 mb-1">✓ Better:</p>
                              <p className="text-sm text-muted-foreground italic">{item.right}</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Why: </span>
                            {item.explanation}
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

      {/* Transition Phrases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Transition Phrases</h2>
              <p className="text-lg text-muted-foreground">
                Use these phrases to create cohesion between ideas:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {transitionPhrases.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2">
                        <Layers className="w-4 h-4 text-copper" />
                        {category.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.phrases.map((phrase, pIndex) => (
                          <span key={pIndex} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                            {phrase}
                          </span>
                        ))}
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            </motion.div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
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
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedResources.map((resource) => (
                <Link key={resource.href} to={resource.href}>
                  <Card className="border-border hover:border-copper/30 transition-all h-full group">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 group-hover:bg-copper/10 transition-colors">
                        <resource.icon className="w-5 h-5 text-muted-foreground group-hover:text-copper" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-copper/10 to-transparent rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Professional Writing Support?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our academic editors can help refine your thesis writing—from structural organization 
                to sentence-level polish.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services/editing">
                  <Button size="lg" className="bg-copper hover:bg-copper-dark text-white">
                    Explore Editing Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/masters-resources">
                  <Button size="lg" variant="outline">
                    More Resources
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AcademicWriting;
