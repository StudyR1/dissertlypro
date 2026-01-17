import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, AggregateRatingSchema, HowToSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FileText,
  CheckCircle,
  BookOpen,
  GraduationCap,
  Clock,
  ArrowRight,
  Layers,
  Target,
  Brain,
  BarChart3,
  MessageSquare,
  ListChecks,
  Quote
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ThesisStructure = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Master's Resources", url: "/masters-resources" },
    { name: "Thesis Structure Blueprint", url: "/thesis-structure" }
  ];

  const howToSteps = [
    { name: "Create Your Title Page", text: "Include thesis title, your name, degree program, institution, submission date, and supervisor name." },
    { name: "Write the Abstract", text: "Summarize your research in 150-300 words covering purpose, methodology, key findings, and conclusions." },
    { name: "Develop Chapter 1: Introduction", text: "Present background, problem statement, research questions, significance, and thesis structure overview." },
    { name: "Build Chapter 2: Literature Review", text: "Synthesize existing research, identify gaps, and establish theoretical framework." },
    { name: "Design Chapter 3: Methodology", text: "Detail your research design, data collection methods, analysis approach, and ethical considerations." },
    { name: "Present Chapter 4: Results/Findings", text: "Report your data and findings objectively without interpretation." },
    { name: "Analyze in Chapter 5: Discussion", text: "Interpret findings, connect to literature, discuss implications and limitations." },
    { name: "Conclude in Chapter 6", text: "Summarize key findings, contributions, recommendations, and future research directions." }
  ];

  const chapters = [
    {
      number: 1,
      title: "Introduction",
      wordCount: "2,000-3,500",
      percentage: "8-12%",
      sections: [
        "Background and Context",
        "Problem Statement",
        "Research Questions/Objectives",
        "Significance of the Study",
        "Scope and Delimitations",
        "Definition of Key Terms",
        "Thesis Structure Overview"
      ],
      tips: "Hook your reader immediately. Establish why your research matters and what gap you're filling."
    },
    {
      number: 2,
      title: "Literature Review",
      wordCount: "5,000-8,000",
      percentage: "20-30%",
      sections: [
        "Introduction to the Review",
        "Theoretical Framework",
        "Thematic Analysis of Literature",
        "Critical Evaluation of Sources",
        "Research Gap Identification",
        "Conceptual Framework",
        "Chapter Summary"
      ],
      tips: "Don't just summarize sources—synthesize and analyze. Show how your research fits into the broader conversation."
    },
    {
      number: 3,
      title: "Methodology",
      wordCount: "3,000-5,000",
      percentage: "12-18%",
      sections: [
        "Research Philosophy/Paradigm",
        "Research Design and Approach",
        "Population and Sampling",
        "Data Collection Methods",
        "Data Analysis Procedures",
        "Validity and Reliability/Trustworthiness",
        "Ethical Considerations",
        "Limitations"
      ],
      tips: "Be specific enough that someone could replicate your study. Justify every methodological choice."
    },
    {
      number: 4,
      title: "Results/Findings",
      wordCount: "4,000-7,000",
      percentage: "15-25%",
      sections: [
        "Introduction to Findings",
        "Demographic/Descriptive Data",
        "Presentation of Results by Research Question",
        "Tables, Figures, and Charts",
        "Summary of Key Findings"
      ],
      tips: "Present data objectively without interpretation. Use clear headings aligned with your research questions."
    },
    {
      number: 5,
      title: "Discussion",
      wordCount: "4,000-6,000",
      percentage: "15-22%",
      sections: [
        "Interpretation of Findings",
        "Connection to Literature",
        "Theoretical Implications",
        "Practical Implications",
        "Unexpected Findings",
        "Limitations of the Study"
      ],
      tips: "This is where you show your analytical skills. Connect findings back to your research questions and literature."
    },
    {
      number: 6,
      title: "Conclusion",
      wordCount: "1,500-2,500",
      percentage: "5-8%",
      sections: [
        "Summary of Research",
        "Key Contributions",
        "Recommendations",
        "Future Research Directions",
        "Final Reflections"
      ],
      tips: "Don't introduce new information. Synthesize and provide closure while pointing toward future possibilities."
    }
  ];

  const faqs = [
    {
      question: "What is the typical word count for a master's thesis?",
      answer: "Most master's theses range from 15,000-25,000 words (excluding references and appendices), though this varies by discipline and institution. Humanities theses tend to be longer (20,000-30,000), while STEM theses may be shorter (12,000-20,000)."
    },
    {
      question: "Should I combine Results and Discussion chapters?",
      answer: "It depends on your field and advisor preference. Combined chapters work well for qualitative research where interpretation is woven into presentation. Separate chapters are standard in quantitative research and sciences."
    },
    {
      question: "How long should each chapter be?",
      answer: "The Literature Review and Results/Discussion chapters are typically the longest (20-30% each). Introduction and Conclusion are shorter (5-12% each). Methodology varies based on complexity (12-18%)."
    },
    {
      question: "Is a theoretical framework required?",
      answer: "Most theses benefit from a theoretical or conceptual framework, though requirements vary. It provides a lens for analyzing your findings and connects your work to established scholarship."
    },
    {
      question: "Where do appendices go and what should they include?",
      answer: "Appendices follow references and include supplementary materials: survey instruments, interview guides, consent forms, additional data tables, coding schemes, and other materials too detailed for the main text."
    }
  ];

  const relatedResources = [
    { title: "Master's Thesis Guide", href: "/masters-thesis-guide", icon: GraduationCap, description: "Complete A-Z thesis roadmap" },
    { title: "Literature Review Guide", href: "/literature-review-guide", icon: BookOpen, description: "Master systematic reviews" },
    { title: "Research Methodology", href: "/research-methodology", icon: Brain, description: "Design your research approach" },
    { title: "Citation Mastery", href: "/citation-mastery", icon: Quote, description: "Perfect your references" }
  ];

  return (
    <Layout>
      <SEO 
        title="Thesis Structure Blueprint | Chapter-by-Chapter Guide | DissertlyPro"
        description="Master the standard master's thesis structure with our chapter-by-chapter breakdown. Word count guides, section templates, and formatting standards for academic success."
        keywords={["thesis structure", "thesis chapters", "thesis format", "master's thesis outline", "thesis word count", "thesis template", "dissertation structure"]}
        canonical="https://dissertlypro.com/thesis-structure"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2156}
        itemName="Thesis Structure Blueprint"
        itemType="Service"
      />
      <HowToSchema
        name="How to Structure a Master's Thesis"
        description="A comprehensive guide to organizing your thesis chapters and sections"
        steps={howToSteps}
        totalTime="P4W"
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
              <Layers className="w-4 h-4" />
              Master's Thesis Essential
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Thesis Structure
              <span className="block text-copper mt-2">Blueprint</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Chapter-by-chapter breakdown of master's thesis architecture. Word count guides, 
              section templates, and formatting standards for academic success.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>30 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-copper" />
                <span>Master's Level</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-copper" />
                <span>Templates Included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Word Count Overview */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-copper/20 bg-gradient-to-br from-copper/5 to-transparent">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-copper" />
                  Word Count Overview
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-copper mb-1">15,000-25,000</div>
                    <div className="text-sm text-muted-foreground">Total Words (Typical)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-1">6 Chapters</div>
                    <div className="text-sm text-muted-foreground">Standard Structure</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-1">50-80 Pages</div>
                    <div className="text-sm text-muted-foreground">Double-Spaced</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chapter Breakdown */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Chapter-by-Chapter Breakdown</h2>
              <p className="text-lg text-muted-foreground">
                Each chapter serves a specific purpose in your thesis. Here's what goes where and why:
              </p>
            </motion.div>

            <div className="space-y-6">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border hover:border-copper/30 transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                            <span className="text-xl font-bold text-copper">{chapter.number}</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground">{chapter.title}</h3>
                            <div className="text-sm text-muted-foreground">{chapter.wordCount} words</div>
                            <div className="text-xs text-copper font-medium">{chapter.percentage} of thesis</div>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-foreground mb-3">Key Sections:</h4>
                          <div className="grid sm:grid-cols-2 gap-2 mb-4">
                            {chapter.sections.map((section, sIndex) => (
                              <div key={sIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                                {section}
                              </div>
                            ))}
                          </div>
                          
                          <div className="bg-muted/50 rounded-lg p-4">
                            <div className="flex items-start gap-2">
                              <MessageSquare className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">Pro Tip: </span>
                                {chapter.tips}
                              </p>
                            </div>
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

      {/* Front & Back Matter */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Front & Back Matter</h2>
              <p className="text-lg text-muted-foreground">
                Beyond the main chapters, your thesis includes essential supporting elements:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-copper" />
                    Front Matter
                  </h3>
                  <ul className="space-y-3">
                    {["Title Page", "Abstract (150-300 words)", "Acknowledgements", "Table of Contents", "List of Tables/Figures", "List of Abbreviations"].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <ListChecks className="w-5 h-5 text-copper" />
                    Back Matter
                  </h3>
                  <ul className="space-y-3">
                    {["References/Bibliography", "Appendix A: Research Instruments", "Appendix B: Consent Forms", "Appendix C: Additional Data", "Appendix D: Coding Schemes", "Glossary (if needed)"].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
                Need Help Structuring Your Thesis?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our experts can review your thesis outline and provide personalized guidance 
                on structure, flow, and chapter development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consultation">
                  <Button size="lg" className="bg-copper hover:bg-copper-dark text-white">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/masters-resources">
                  <Button size="lg" variant="outline">
                    Explore More Resources
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

export default ThesisStructure;
