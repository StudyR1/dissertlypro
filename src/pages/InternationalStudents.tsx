import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, AggregateRatingSchema, HowToSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Globe,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Clock,
  FileText,
  Users,
  MessageSquare,
  Languages,
  HelpCircle,
  Sparkles,
  Quote
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const InternationalStudents = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Master's Resources", url: "/masters-resources" },
    { name: "International Student Guide", url: "/international-students" }
  ];

  const howToSteps = [
    { name: "Understand Academic Conventions", text: "Learn the writing style expectations of your host country's academic culture." },
    { name: "Build Your Academic Vocabulary", text: "Develop discipline-specific terminology and academic phrases through targeted reading." },
    { name: "Master Citation Practices", text: "Learn the specific citation style required and practice implementing it consistently." },
    { name: "Utilize Campus Writing Resources", text: "Take advantage of writing centers, language support, and peer review opportunities." },
    { name: "Develop Your Academic Voice", text: "Learn to balance personal perspective with academic objectivity and critical analysis." },
    { name: "Seek Regular Feedback", text: "Build relationships with advisors who understand ESL challenges and can provide constructive guidance." }
  ];

  const challenges = [
    {
      title: "Academic Writing Conventions",
      description: "Western academic writing often differs significantly from other traditions in structure, argumentation, and citation practices.",
      solution: "Study published theses in your field and institution. Note patterns in introduction structure, paragraph organization, and how arguments are built."
    },
    {
      title: "Language Precision",
      description: "Academic English requires precise vocabulary and complex sentence structures that may differ from conversational English.",
      solution: "Build a personal glossary of discipline-specific terms. Use academic phrase banks for common expressions like hedging, comparing, and concluding."
    },
    {
      title: "Critical Analysis Expectations",
      description: "Some academic cultures emphasize respect for authority, while Western academia often expects critical engagement with sources.",
      solution: "Learn to critique ideas, not authors. Practice using phrases like 'While X argues... this overlooks...' to develop critical voice."
    },
    {
      title: "Time Zone & Communication",
      description: "Coordinating with supervisors, accessing resources, and meeting deadlines across time zones adds complexity.",
      solution: "Set clear communication expectations early. Use scheduling tools and be proactive about planning meetings during overlapping hours."
    }
  ];

  const writingTips = [
    {
      category: "Structure & Organization",
      tips: [
        "Follow the 'one paragraph, one idea' rule",
        "Use explicit signposting: 'This section will discuss...'",
        "Include clear topic sentences at the start of each paragraph",
        "Create logical transitions between paragraphs and sections"
      ]
    },
    {
      category: "Grammar & Style",
      tips: [
        "Use formal academic register (avoid contractions, colloquialisms)",
        "Master passive voice for methodology sections",
        "Learn hedging language: 'may suggest,' 'appears to indicate'",
        "Practice complex sentence structures with proper punctuation"
      ]
    },
    {
      category: "Argumentation",
      tips: [
        "State your position clearly in the introduction",
        "Support claims with evidence and citations",
        "Acknowledge counterarguments before refuting them",
        "Build cumulative arguments across paragraphs"
      ]
    },
    {
      category: "Citation & Integration",
      tips: [
        "Paraphrase more than you quote directly",
        "Integrate sources smoothly into your argument",
        "Use reporting verbs appropriately (argues, claims, demonstrates)",
        "Always connect citations back to your own argument"
      ]
    }
  ];

  const faqs = [
    {
      question: "Will my thesis be judged more harshly because English isn't my first language?",
      answer: "Most institutions evaluate ideas and research quality, not just language. However, clear communication is essential. Many programs offer language support, and working with editors is completely acceptable and often encouraged."
    },
    {
      question: "Should I hire a proofreader or editor for my thesis?",
      answer: "Yes, using a professional editor or proofreader is standard practice and often recommended by supervisors. Focus on editors who specialize in academic writing and understand thesis conventions, not just grammar."
    },
    {
      question: "How do I handle cultural differences with my supervisor?",
      answer: "Communicate openly about expectations. Some cultures expect direct feedback; others are more indirect. Ask your supervisor their preferred communication style and clarify expectations early in your relationship."
    },
    {
      question: "What resources are available for international students?",
      answer: "Most universities offer writing centers, ESL support, academic skills workshops, peer mentoring, and international student services. Your library likely has discipline-specific writing guides and academic phrase resources."
    },
    {
      question: "How can I improve my academic English quickly?",
      answer: "Read extensively in your field, noting how native speakers structure arguments. Use academic writing tools and phrase banks. Write regularly and seek feedback. Consider academic English courses specifically designed for graduate students."
    }
  ];

  const relatedResources = [
    { title: "Academic Writing Excellence", href: "/academic-writing", icon: FileText, description: "Master thesis-level writing" },
    { title: "Citation Mastery", href: "/citation-mastery", icon: Quote, description: "APA, MLA, Chicago styles" },
    { title: "Limited Supervision Success", href: "/limited-supervision", icon: Users, description: "Navigate advisor challenges" },
    { title: "Master's Thesis Guide", href: "/masters-thesis-guide", icon: GraduationCap, description: "Complete A-Z roadmap" }
  ];

  return (
    <Layout>
      <SEO 
        title="International Student Thesis Guide | ESL Academic Writing | DissertlyPro"
        description="Navigate thesis writing in a second language. Academic English conventions, cultural expectations, language support resources, and expert strategies for international master's students."
        keywords={["international student thesis", "ESL academic writing", "thesis writing second language", "academic English", "international master's student", "cross-cultural academia"]}
        canonical="https://dissertlypro.com/international-students"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1523}
        itemName="International Student Thesis Guide"
        itemType="Service"
      />
      <HowToSchema
        name="How to Succeed as an International Thesis Student"
        description="A guide for international students navigating academic writing in a second language"
        steps={howToSteps}
        totalTime="P3M"
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
              <Globe className="w-4 h-4" />
              International Student Support
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              International Student
              <span className="block text-copper mt-2">Thesis Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Navigate thesis writing in a second language with confidence. Academic English conventions, 
              cultural expectations, and essential support resources for international master's students.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>30 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4 text-copper" />
                <span>ESL-Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-copper" />
                <span>Practical Strategies</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* You're Not Alone */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-copper/20 bg-gradient-to-br from-copper/5 to-transparent">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-copper flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">You're Not Alone</h2>
                    <p className="text-muted-foreground mb-4">
                      Over 50% of graduate students in many Western universities are international students. 
                      Writing a thesis in a second language is a remarkable achievement—one that requires not just 
                      academic excellence, but also linguistic and cultural navigation skills.
                    </p>
                    <p className="text-muted-foreground">
                      This guide acknowledges your unique challenges and provides practical strategies to help you 
                      succeed while maintaining your academic voice and perspective.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Common Challenges & Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Recognizing challenges is the first step to overcoming them. Here are the most common 
                hurdles international students face—and how to navigate them:
              </p>
            </motion.div>

            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{challenge.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{challenge.description}</p>
                          <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">Solution: </span>
                                {challenge.solution}
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

      {/* Academic Writing Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Academic Writing Essentials</h2>
              <p className="text-lg text-muted-foreground">
                Master these core elements of academic English writing:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {writingTips.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-copper" />
                        {category.category}
                      </h3>
                      <ul className="space-y-3">
                        {category.tips.map((tip, tIndex) => (
                          <li key={tIndex} className="flex items-start gap-3 text-sm">
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

      {/* Essential Resources */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Essential Resources</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take advantage of these commonly available resources:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-copper/20">
                <CardContent className="p-6">
                  <BookOpen className="w-8 h-8 text-copper mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">University Writing Center</h3>
                  <p className="text-sm text-muted-foreground">
                    Free one-on-one consultations, workshops on academic writing, and feedback on drafts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-copper/20">
                <CardContent className="p-6">
                  <Languages className="w-8 h-8 text-copper mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">ESL/EAP Programs</h3>
                  <p className="text-sm text-muted-foreground">
                    English for Academic Purposes courses specifically designed for graduate-level writing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-copper/20">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-copper mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Writing Groups</h3>
                  <p className="text-sm text-muted-foreground">
                    Peer support groups for accountability, feedback, and shared learning experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
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
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-copper/10 to-transparent rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Specialized Support?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team includes experts experienced in supporting international students. 
                Get personalized guidance on academic writing, structure, and language refinement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consultation">
                  <Button size="lg" className="bg-copper hover:bg-copper-dark text-white">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services/editing">
                  <Button size="lg" variant="outline">
                    Explore Editing Services
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

export default InternationalStudents;
