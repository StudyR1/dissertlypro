import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, AggregateRatingSchema } from "@/components/schemas";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import RelatedContent from "@/components/ui/RelatedContent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter,
  CheckCircle, 
  Clock, 
  FileText, 
  Database,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  ListChecks,
  Target,
  GraduationCap,
  FileSpreadsheet,
  GitBranch,
  BarChart3
} from "lucide-react";

const SystematicLiteratureReview = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Systematic Literature Review Guide", url: "/systematic-literature-review" }
  ];

  const prismaSteps = [
    {
      phase: "Identification",
      icon: Search,
      description: "Search databases and other sources to identify potential studies",
      tasks: [
        "Define search terms and Boolean operators",
        "Search multiple databases (PubMed, Scopus, Web of Science, etc.)",
        "Search grey literature and reference lists",
        "Export all records to reference manager",
        "Remove duplicates"
      ],
      timeEstimate: "2-4 weeks"
    },
    {
      phase: "Screening",
      icon: Filter,
      description: "Apply inclusion/exclusion criteria to filter relevant studies",
      tasks: [
        "Screen titles and abstracts",
        "Obtain full-text articles for eligible studies",
        "Screen full-text against inclusion criteria",
        "Document reasons for exclusion",
        "Resolve disagreements between reviewers"
      ],
      timeEstimate: "3-6 weeks"
    },
    {
      phase: "Eligibility",
      icon: ListChecks,
      description: "Assess remaining studies for final inclusion",
      tasks: [
        "Full-text assessment against all criteria",
        "Quality appraisal using appropriate tools",
        "Risk of bias assessment",
        "Document final inclusion decisions",
        "Create PRISMA flow diagram"
      ],
      timeEstimate: "2-4 weeks"
    },
    {
      phase: "Inclusion",
      icon: FileSpreadsheet,
      description: "Extract and synthesize data from included studies",
      tasks: [
        "Design data extraction form",
        "Extract study characteristics",
        "Extract outcome data",
        "Synthesize findings (narrative or meta-analysis)",
        "Assess certainty of evidence"
      ],
      timeEstimate: "3-6 weeks"
    }
  ];

  const qualityTools = [
    {
      name: "Cochrane Risk of Bias (RoB 2)",
      bestFor: "Randomized controlled trials",
      domains: "Randomization, deviations, missing data, measurement, selection"
    },
    {
      name: "ROBINS-I",
      bestFor: "Non-randomized studies of interventions",
      domains: "Confounding, selection, classification, deviations, missing data, measurement, reporting"
    },
    {
      name: "Newcastle-Ottawa Scale",
      bestFor: "Observational studies (cohort, case-control)",
      domains: "Selection, comparability, exposure/outcome"
    },
    {
      name: "CASP Checklists",
      bestFor: "Various study designs including qualitative",
      domains: "Validity, results, relevance"
    },
    {
      name: "JBI Critical Appraisal",
      bestFor: "Multiple study designs",
      domains: "Design-specific criteria for methodological quality"
    }
  ];

  const faqs = [
    {
      question: "What is the difference between a systematic review and a literature review?",
      answer: "A systematic review follows a rigorous, pre-defined protocol to minimize bias, uses explicit search strategies, and aims for reproducibility. A traditional literature review is more narrative and selective, without the same level of methodological rigor or transparency."
    },
    {
      question: "How long does a systematic literature review take?",
      answer: "A full systematic review typically takes 6-18 months. For dissertations, a 'systematic approach' to literature review (following PRISMA principles but with a narrower scope) can be completed in 3-6 months."
    },
    {
      question: "Do I need two reviewers for a dissertation systematic review?",
      answer: "Ideally yes, for title/abstract screening and data extraction. In practice, many dissertation students work alone but demonstrate rigor by having a supervisor verify a sample (e.g., 10-20%) of screening decisions."
    },
    {
      question: "What is PRISMA and why is it important?",
      answer: "PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is a 27-item checklist ensuring transparent reporting. Following PRISMA demonstrates methodological rigor and is often required by journals and examiners."
    },
    {
      question: "Can I do a systematic review without a meta-analysis?",
      answer: "Absolutely. Many systematic reviews use narrative synthesis when studies are too heterogeneous for statistical pooling. What makes it 'systematic' is the rigorous, transparent search and selection process, not the statistical analysis."
    },
    {
      question: "Which databases should I search?",
      answer: "At minimum: 2-3 major databases relevant to your field (e.g., PubMed, PsycINFO, CINAHL for health). Also search grey literature (dissertations, conference proceedings) and hand-search reference lists of included studies."
    }
  ];

  const howToSteps = [
    { name: "Define Your Research Question", text: "Use PICO/SPIDER frameworks to create a focused, answerable question that guides your entire review." },
    { name: "Register Your Protocol", text: "Register on PROSPERO or publish your protocol to demonstrate pre-planning and reduce bias." },
    { name: "Develop Search Strategy", text: "Create comprehensive search strings with subject headings and keywords for each database." },
    { name: "Search Databases", text: "Execute searches across multiple databases and document results for each source." },
    { name: "Screen and Select Studies", text: "Apply inclusion/exclusion criteria systematically to titles, abstracts, then full texts." },
    { name: "Assess Quality", text: "Use appropriate critical appraisal tools to assess risk of bias in included studies." },
    { name: "Extract and Synthesize Data", text: "Systematically extract relevant data and synthesize findings narratively or statistically." },
    { name: "Report Using PRISMA", text: "Complete the PRISMA checklist and create a flow diagram showing your selection process." }
  ];

  return (
    <Layout>
      <SEO
        title="Systematic Literature Review Guide | PRISMA Methodology | DissertlyPro"
        description="Master systematic literature reviews with our comprehensive PRISMA guide. Learn search strategies, quality appraisal, data extraction, and synthesis for rigorous dissertation research."
        canonical="https://dissertlypro.com/systematic-literature-review"
        keywords={["systematic literature review", "PRISMA methodology", "systematic review dissertation", "literature review protocol", "meta-analysis", "quality appraisal", "evidence synthesis", "research methodology"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Conduct a Systematic Literature Review"
        description="A comprehensive guide to conducting rigorous systematic literature reviews using PRISMA methodology for dissertations and academic research."
        steps={howToSteps}
        totalTime="PT720H"
      />
      <FAQSchema faqs={faqs} />
      <AggregateRatingSchema
        itemName="Systematic Literature Review Guide"
        ratingValue={4.9}
        reviewCount={2156}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Technical Deep-Dive
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-navy bg-clip-text text-transparent">
              Systematic Literature Review Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Master PRISMA methodology for rigorous, reproducible literature reviews. 
              From protocol development to synthesis—a complete roadmap.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>6-18 month process</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>PRISMA 2020 compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Dissertation-focused</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRISMA Flow Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">The PRISMA 2020 Framework</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            PRISMA provides a structured approach to conducting and reporting systematic reviews. 
            Follow these four phases for a rigorous literature review.
          </p>
          
          <div className="space-y-6">
            {prismaSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 p-6 bg-primary/5 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-xs bg-muted px-2 py-1 rounded-full">
                            {step.timeEstimate}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Phase {index + 1}: {step.phase}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h4 className="font-medium mb-3">Key Tasks:</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {step.tasks.map((task, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Appraisal Tools */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Quality Appraisal Tools</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Select the appropriate critical appraisal tool based on the study designs in your review.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityTools.map((tool, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-medium text-primary">Best For:</span>
                      <p className="text-sm text-muted-foreground">{tool.bestFor}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary">Domains Assessed:</span>
                      <p className="text-sm text-muted-foreground">{tool.domains}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Strategy Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Building Your Search Strategy</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Step 1: Define Key Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Break your research question into 2-4 key concepts. For each concept, identify:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span><strong>Subject headings</strong> (MeSH, Emtree, PsycINFO thesaurus terms)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span><strong>Keywords</strong> (synonyms, related terms, alternate spellings)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span><strong>Truncation</strong> (e.g., nurs* for nurse, nurses, nursing)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-primary" />
                  Step 2: Combine with Boolean Operators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg font-mono text-sm">
                    <p className="mb-2">(concept1 terms OR synonyms)</p>
                    <p className="mb-2">AND</p>
                    <p className="mb-2">(concept2 terms OR synonyms)</p>
                    <p className="mb-2">AND</p>
                    <p>(concept3 terms OR synonyms)</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm font-medium flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      Pro Tip
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Use OR within concepts (to broaden) and AND between concepts (to narrow). 
                      Save your search strategy in each database—you'll need it for your methods section.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Step 3: Adapt for Each Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Each database has different syntax and subject heading systems. Document your adapted search for each:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {["PubMed/MEDLINE", "Scopus", "Web of Science", "PsycINFO", "CINAHL", "Embase"].map((db) => (
                    <div key={db} className="p-3 border rounded-lg text-sm">
                      {db}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Common Systematic Review Mistakes</h2>
          
          <div className="space-y-4">
            {[
              {
                mistake: "Vague or overly broad research question",
                solution: "Use PICO/SPIDER to focus your question. A focused question leads to a manageable, rigorous review."
              },
              {
                mistake: "Searching only one or two databases",
                solution: "Search at least 3 databases plus grey literature. Different databases index different journals."
              },
              {
                mistake: "Not documenting the search process",
                solution: "Save and date every search. You need exact search strings and result counts for PRISMA reporting."
              },
              {
                mistake: "Inconsistent application of inclusion criteria",
                solution: "Create a detailed eligibility checklist. Pilot test on 10-20 records and refine before full screening."
              },
              {
                mistake: "Skipping quality appraisal",
                solution: "Quality assessment isn't optional. Use appropriate tools and report findings even if all studies are included."
              },
              {
                mistake: "Narrative synthesis without structure",
                solution: "Use frameworks like SWiM (Synthesis Without Meta-analysis) to structure narrative synthesis rigorously."
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
      <section className="py-16 px-4">
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
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/literature-review-guide" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Literature Review Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Traditional literature review approaches for dissertations.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/research-methodology" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Research Methodology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive guide to research design and methods.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/nvivo-tutorial" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    NVivo Tutorial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Use NVivo for systematic review data management.
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
          <h2 className="text-3xl font-bold mb-4">Need Expert Help with Your Systematic Review?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our research methodology specialists can help you design your protocol, 
            develop search strategies, and ensure PRISMA compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services/literature-review">Literature Review Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <RelatedContent currentUrl="/systematic-literature-review" />
    </Layout>
  );
};

export default SystematicLiteratureReview;
