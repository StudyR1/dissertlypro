import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, AggregateRatingSchema, HowToSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Target,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Clock,
  FileText,
  Search,
  Users,
  Compass,
  Scale,
  Brain
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ResearchQuestions = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Master's Resources", url: "/masters-resources" },
    { name: "Research Question Development", url: "/research-questions" }
  ];

  const howToSteps = [
    { name: "Identify Your Area of Interest", text: "Start with broad topics from your coursework or professional experience that genuinely interest you." },
    { name: "Conduct Preliminary Literature Review", text: "Explore existing research to identify gaps, debates, and understudied areas in your field." },
    { name: "Apply the PICO Framework", text: "Structure your question using Population, Intervention, Comparison, and Outcome components." },
    { name: "Test for Feasibility", text: "Evaluate whether your question can be answered within your time, resource, and access constraints." },
    { name: "Refine Scope and Specificity", text: "Narrow your question to be specific enough for a master's thesis while remaining significant." },
    { name: "Seek Advisor Feedback", text: "Present your refined question to your supervisor for validation and refinement suggestions." }
  ];

  const faqs = [
    {
      question: "What makes a good master's thesis research question?",
      answer: "A strong research question is specific, researchable, significant to your field, and feasible within your constraints. It should address a genuine gap in knowledge and be answerable through systematic investigation."
    },
    {
      question: "How specific should my research question be?",
      answer: "Your question should be narrow enough to investigate thoroughly within your thesis timeline (typically 6-12 months of research) but broad enough to yield meaningful findings. If you can answer it in a few paragraphs, it's too narrow."
    },
    {
      question: "Can I change my research question after starting?",
      answer: "Yes, research questions often evolve during the early stages of research. However, significant changes after data collection may require committee approval and timeline extensions."
    },
    {
      question: "What's the difference between research questions and hypotheses?",
      answer: "Research questions are open-ended inquiries that guide your study. Hypotheses are specific, testable predictions typically used in quantitative research. Qualitative studies usually use research questions rather than hypotheses."
    },
    {
      question: "How many research questions should I have?",
      answer: "Most master's theses have one primary research question with 2-4 sub-questions. Having too many questions can lead to a scattered, unfocused study that's difficult to complete within your timeline."
    }
  ];

  const relatedResources = [
    { title: "Thesis Topic Selection", href: "/thesis-topic-selection", icon: Target, description: "Choose career-boosting thesis topics" },
    { title: "Research Methodology", href: "/research-methodology", icon: Brain, description: "Design your research approach" },
    { title: "Literature Review Guide", href: "/literature-review-guide", icon: BookOpen, description: "Master systematic literature review" },
    { title: "Thesis Structure Blueprint", href: "/thesis-structure", icon: FileText, description: "Chapter-by-chapter guidance" }
  ];

  return (
    <Layout>
      <SEO 
        title="Research Question Development Guide | Master's Thesis | DissertlyPro"
        description="Learn to craft focused, researchable questions that pass committee scrutiny. PICO frameworks, scope refinement, feasibility testing, and expert strategies for master's thesis success."
        keywords={["research question development", "thesis research question", "PICO framework", "master's thesis question", "research question examples", "feasibility testing"]}
        canonical="https://dissertlypro.com/research-questions"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1847}
        itemName="Research Question Development Guide"
        itemType="Service"
      />
      <HowToSchema
        name="How to Develop a Strong Research Question"
        description="A step-by-step guide to crafting focused, researchable thesis questions"
        steps={howToSteps}
        totalTime="P2W"
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
              <Target className="w-4 h-4" />
              Master's Thesis Essential
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Research Question
              <span className="block text-copper mt-2">Development Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Your research question is the foundation of your entire thesis. Learn to craft focused, 
              researchable questions that pass committee scrutiny and guide your investigation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>25 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-copper" />
                <span>Master's Level</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-copper" />
                <span>PICO Framework Included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Why Research Questions Matter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Your Research Question Matters</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your research question isn't just a starting point—it's the compass that guides every decision 
                in your thesis journey. A well-crafted question determines your methodology, literature review 
                scope, data collection approach, and ultimately, your contribution to the field.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-green-500/20 bg-green-500/5">
                  <CardContent className="p-6">
                    <Compass className="w-8 h-8 text-green-600 mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Provides Direction</h3>
                    <p className="text-sm text-muted-foreground">
                      Every methodology choice, source selection, and analysis technique flows from your research question.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-blue-500/20 bg-blue-500/5">
                  <CardContent className="p-6">
                    <Scale className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Defines Scope</h3>
                    <p className="text-sm text-muted-foreground">
                      Prevents scope creep by establishing clear boundaries for what your study will and won't address.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-purple-500/20 bg-purple-500/5">
                  <CardContent className="p-6">
                    <Target className="w-8 h-8 text-purple-600 mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Ensures Contribution</h3>
                    <p className="text-sm text-muted-foreground">
                      A gap-focused question ensures your thesis adds genuine value to existing knowledge.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* The PICO Framework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">The PICO Framework</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Originally developed for clinical research, the PICO framework has been adapted across disciplines 
                as a powerful tool for structuring research questions. Here's how to apply it:
              </p>
              
              <div className="space-y-4">
                <Card className="border-copper/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-copper">P</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Population / Problem</h3>
                        <p className="text-muted-foreground mb-3">
                          Who or what are you studying? Define your target population, context, or phenomenon.
                        </p>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm font-medium text-foreground mb-1">Example:</p>
                          <p className="text-sm text-muted-foreground">
                            "First-generation university students in urban community colleges..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-copper/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-copper">I</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Intervention / Interest</h3>
                        <p className="text-muted-foreground mb-3">
                          What is the main focus of your investigation? The intervention, exposure, or phenomenon of interest.
                        </p>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm font-medium text-foreground mb-1">Example:</p>
                          <p className="text-sm text-muted-foreground">
                            "...who participate in peer mentoring programs..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-copper/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-copper">C</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Comparison (Optional)</h3>
                        <p className="text-muted-foreground mb-3">
                          What are you comparing against? Not all studies require a comparison group.
                        </p>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm font-medium text-foreground mb-1">Example:</p>
                          <p className="text-sm text-muted-foreground">
                            "...compared to those without mentoring support..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-copper/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-copper">O</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Outcome</h3>
                        <p className="text-muted-foreground mb-3">
                          What result, effect, or impact are you measuring or exploring?
                        </p>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm font-medium text-foreground mb-1">Example:</p>
                          <p className="text-sm text-muted-foreground">
                            "...in terms of academic persistence and degree completion rates?"
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8 border-copper/30 bg-copper/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Complete PICO Research Question:</h4>
                  <p className="text-lg text-foreground italic">
                    "How do peer mentoring programs affect academic persistence and degree completion rates 
                    among first-generation university students in urban community colleges compared to 
                    students without mentoring support?"
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feasibility Testing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Feasibility Testing Checklist</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Before committing to a research question, evaluate whether you can realistically investigate 
                it within your constraints:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-copper" />
                      Time Constraints
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Can data collection be completed within your timeline?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Is the scope appropriate for a master's thesis (not PhD-level)?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Does it account for IRB/ethics approval time if needed?</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-copper" />
                      Access & Resources
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Do you have access to your target population/data?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Are required tools/software available and within budget?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Does your advisor have expertise to guide this research?</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Search className="w-5 h-5 text-copper" />
                      Literature Support
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Is there sufficient existing literature to build upon?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Is there a clear gap that your question addresses?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Are established methodologies available for your approach?</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-copper" />
                      Personal Fit
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Are you genuinely interested in this topic for 6-12 months?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Does it align with your career goals and interests?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Do you have relevant background knowledge or skills?</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Common Mistakes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Common Mistakes to Avoid</h2>
              
              <div className="space-y-4">
                <Card className="border-red-500/20 bg-red-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Too Broad</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          <span className="text-red-600 font-medium">❌ "What is the impact of social media on society?"</span>
                        </p>
                        <p className="text-muted-foreground text-sm">
                          <span className="text-green-600 font-medium">✓ "How does Instagram usage affect body image perception among female undergraduate students aged 18-22?"</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-500/20 bg-red-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Yes/No Questions</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          <span className="text-red-600 font-medium">❌ "Does remote work improve productivity?"</span>
                        </p>
                        <p className="text-muted-foreground text-sm">
                          <span className="text-green-600 font-medium">✓ "How do remote work arrangements influence productivity and work-life balance among software developers?"</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-500/20 bg-red-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Value-Laden Questions</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          <span className="text-red-600 font-medium">❌ "Why is traditional education better than online learning?"</span>
                        </p>
                        <p className="text-muted-foreground text-sm">
                          <span className="text-green-600 font-medium">✓ "What are the comparative learning outcomes between traditional and online education formats in undergraduate business courses?"</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              
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
            </motion.div>

            {/* Related Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Related Resources</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedResources.map((resource) => (
                  <Link key={resource.href} to={resource.href}>
                    <Card className="border-border hover:border-copper/30 transition-all h-full group">
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-copper/10 transition-colors">
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
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-copper/10 to-transparent rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Help Developing Your Research Question?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our methodology experts can help you craft a focused, feasible research question 
                that sets your thesis up for success.
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

export default ResearchQuestions;
