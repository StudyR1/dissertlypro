import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, AggregateRatingSchema } from "@/components/schemas";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Shield, 
  ArrowRight,
  CheckCircle, 
  Clock, 
  FileText,
  Users,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Target,
  GraduationCap,
  Lock,
  Eye,
  UserCheck,
  FileCheck,
  AlertCircle
} from "lucide-react";

const IRBEthicsGuide = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "IRB/Ethics Application Guide", url: "/irb-ethics-guide" }
  ];

  const reviewCategories = [
    {
      category: "Exempt",
      icon: CheckCircle,
      riskLevel: "Minimal",
      timeline: "1-2 weeks",
      description: "Research involving normal educational practices, surveys/interviews with adults on non-sensitive topics, public observation, or analysis of existing data.",
      examples: [
        "Anonymous surveys of adult professionals",
        "Observation in public spaces",
        "Analysis of de-identified existing datasets",
        "Educational research in normal classroom settings"
      ]
    },
    {
      category: "Expedited",
      icon: Clock,
      riskLevel: "Low",
      timeline: "2-4 weeks",
      description: "Minimal risk research that doesn't qualify for exemption but uses standard procedures like surveys, interviews, or focus groups.",
      examples: [
        "Interviews with adults on moderately sensitive topics",
        "Non-invasive physiological measurements",
        "Research with identifiable but non-sensitive data",
        "Surveys with minor vulnerable population involvement"
      ]
    },
    {
      category: "Full Board Review",
      icon: Shield,
      riskLevel: "Greater than minimal",
      timeline: "4-12 weeks",
      description: "Research involving more than minimal risk, vulnerable populations, or sensitive topics requiring full committee deliberation.",
      examples: [
        "Research with children or prisoners",
        "Sensitive topics (trauma, illegal behavior)",
        "Deception that may cause distress",
        "Collection of sensitive health information"
      ]
    }
  ];

  const applicationComponents = [
    {
      component: "Protocol/Research Plan",
      description: "Detailed description of your study including background, objectives, methods, and timeline",
      tips: [
        "Be specific about procedures—vague descriptions cause delays",
        "Explain why your methods are appropriate for your questions",
        "Include exact scripts for recruitment and data collection",
        "Describe data security measures in detail"
      ]
    },
    {
      component: "Informed Consent Documents",
      description: "Materials explaining the study to participants and documenting their voluntary agreement",
      tips: [
        "Write at 8th grade reading level or below",
        "Clearly state participation is voluntary",
        "Explain risks AND benefits honestly",
        "Include contact information for questions",
        "Consider verbal consent for sensitive populations"
      ]
    },
    {
      component: "Recruitment Materials",
      description: "Flyers, emails, scripts, or social media posts used to invite participants",
      tips: [
        "Don't oversell benefits or minimize risks",
        "Avoid coercive language",
        "Include all materials—even social media posts",
        "Specify where and how you'll recruit"
      ]
    },
    {
      component: "Data Collection Instruments",
      description: "Surveys, interview guides, observation protocols, or other tools",
      tips: [
        "Include every question you plan to ask",
        "Highlight any sensitive questions for reviewers",
        "Cite validated instruments if using them",
        "Explain how you developed new instruments"
      ]
    },
    {
      component: "CITI Training Certificates",
      description: "Proof of research ethics training for all study personnel",
      tips: [
        "Complete before submitting—can't submit without it",
        "Ensure training matches your research type",
        "Training is valid for 3 years typically",
        "All team members need current training"
      ]
    }
  ];

  const faqs = [
    {
      question: "How early should I submit my IRB application?",
      answer: "Submit at least 2-3 months before you need to begin data collection. Expedited reviews take 2-4 weeks, but revisions and resubmissions can add 2-4 more weeks. Full board reviews may take 2-3 months for initial review alone."
    },
    {
      question: "My research is low-risk. Do I still need IRB approval?",
      answer: "Yes. Even exempt research requires IRB determination. 'Exempt' means exempt from ongoing review, not exempt from IRB oversight. Submit your protocol and let the IRB make the exemption determination."
    },
    {
      question: "What's the most common reason for IRB rejection?",
      answer: "Incomplete applications and vague procedures are the most common issues. Specify exactly what participants will experience, how long it takes, what questions you'll ask, and how you'll protect their data."
    },
    {
      question: "Can I collect pilot data before IRB approval?",
      answer: "No. Any data collection involving human subjects—even informal conversations for 'pilot testing'—requires prior IRB approval. You can develop instruments without approval, but testing them on humans requires approval."
    },
    {
      question: "What if I need to change my study after approval?",
      answer: "Submit an amendment before making changes. Minor changes (fixing typos) may be noted rather than formally amended, but substantive changes (new questions, different population) require amendment approval."
    },
    {
      question: "My university uses a different name than 'IRB'—is it the same thing?",
      answer: "Yes. Research Ethics Board (REB), Human Research Ethics Committee (HREC), and Institutional Ethics Committee (IEC) are equivalent bodies. The principles and requirements are similar across institutions and countries."
    }
  ];

  const howToSteps = [
    { name: "Complete CITI Training", text: "Complete required research ethics training modules before preparing your application. Most institutions require Human Subjects Research training." },
    { name: "Determine Review Category", text: "Review your institution's categories to estimate whether your study is exempt, expedited, or full board. The IRB makes the final determination." },
    { name: "Prepare Research Protocol", text: "Write a detailed protocol including background, methods, recruitment procedures, and data management plans." },
    { name: "Develop Consent Documents", text: "Create informed consent forms appropriate for your population. Consider readability, cultural factors, and vulnerability." },
    { name: "Prepare All Study Materials", text: "Finalize surveys, interview guides, recruitment materials, and any other participant-facing documents." },
    { name: "Submit Application", text: "Complete your institution's application form and upload all required documents through their system." },
    { name: "Respond to Feedback", text: "Address reviewer questions and concerns promptly and thoroughly. Multiple rounds of revision are common." },
    { name: "Maintain Approval", text: "Complete annual renewals, submit amendments for changes, and report any adverse events or protocol deviations." }
  ];

  const consentElements = [
    "Purpose of the research",
    "Expected duration of participation",
    "Procedures to be followed",
    "Reasonably foreseeable risks or discomforts",
    "Benefits to participant or others",
    "Alternative procedures or treatments (if applicable)",
    "Confidentiality protections",
    "Compensation (if any)",
    "Contact for questions about research",
    "Contact for questions about rights",
    "Statement that participation is voluntary",
    "Right to withdraw without penalty"
  ];

  return (
    <Layout>
      <SEO
        title="IRB/Ethics Application Guide | Research Ethics Approval | DissertlyPro"
        description="Navigate research ethics approval with our comprehensive IRB application guide. Learn about review categories, consent requirements, and common pitfalls for dissertation research."
        canonical="https://dissertlypro.com/irb-ethics-guide"
        keywords={["IRB application", "ethics approval", "research ethics", "informed consent", "human subjects research", "ethics committee", "dissertation ethics", "CITI training"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Get IRB/Ethics Approval for Research"
        description="A step-by-step guide to preparing and submitting a successful IRB or ethics committee application for dissertation research."
        steps={howToSteps}
        totalTime="PT168H"
      />
      <FAQSchema faqs={faqs} />
      <AggregateRatingSchema
        itemName="IRB/Ethics Application Guide"
        ratingValue={4.9}
        ratingCount={1654}
        reviewCount={389}
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
              <Shield className="w-4 h-4" />
              Technical Deep-Dive
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-navy bg-clip-text text-transparent">
              IRB/Ethics Application Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Navigate research ethics approval with confidence. From protocol development to 
              informed consent—everything you need for a successful application.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>2-12 week timeline</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Step-by-step process</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Dissertation-focused</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Review Categories</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Understanding review categories helps you estimate timeline and prepare appropriate documentation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviewCategories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">
                          {cat.timeline}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{cat.category}</CardTitle>
                      <p className="text-sm text-muted-foreground">Risk Level: {cat.riskLevel}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{cat.description}</p>
                      <div>
                        <p className="text-xs font-medium text-primary mb-2">Examples:</p>
                        <ul className="space-y-1">
                          {cat.examples.map((ex, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-green-500 mt-1 shrink-0" />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Components */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Application Components</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A complete IRB application includes these essential elements. Prepare them carefully to avoid delays.
          </p>
          
          <div className="space-y-6">
            {applicationComponents.map((comp, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-primary" />
                    {comp.component}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{comp.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {comp.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <Lightbulb className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informed Consent Elements */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Required Informed Consent Elements</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Federal regulations require these elements in informed consent documents. Ensure your consent form addresses each one.
          </p>
          
          <Card>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-3">
                {consentElements.map((element, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-sm">{element}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-primary mt-0.5" />
                  <span>Additional elements may be required for specific populations (children, prisoners) or research types (genetic research, sensitive topics).</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Common Application Mistakes</h2>
          
          <div className="space-y-4">
            {[
              {
                mistake: "Vague or incomplete procedure descriptions",
                solution: "Describe exactly what participants will experience, minute by minute. Include time estimates, scripts, and all questions you'll ask."
              },
              {
                mistake: "Consent forms written at too high a reading level",
                solution: "Aim for 6th-8th grade reading level. Avoid jargon, use short sentences, and test readability with online tools."
              },
              {
                mistake: "Claiming 'no risks' when risks exist",
                solution: "All research has some risk, even if minimal. Address potential discomfort, time, privacy concerns. Be honest but not alarming."
              },
              {
                mistake: "Inconsistencies between application and materials",
                solution: "Ensure your protocol, consent form, and instruments all match. If you say 'approximately 30 minutes,' use that phrasing everywhere."
              },
              {
                mistake: "Missing or expired CITI training",
                solution: "Verify all team members have current, appropriate training before submission. Training expires—check dates."
              },
              {
                mistake: "Inadequate data security description",
                solution: "Specify where data will be stored, who has access, how long it's retained, and how it will be destroyed. Be specific about encryption and passwords."
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
            <Link to="/research-methodology" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Research Methodology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Design your study before preparing your ethics application.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/qualitative-analysis" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Qualitative Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ethical considerations for interview and focus group research.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/templates" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Templates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download consent form and protocol templates.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    View Templates <ArrowRight className="w-3 h-3" />
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
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Ethics Application?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our research methodology consultants can review your protocol, 
            help develop consent documents, and prepare you for IRB submission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services/methodology">Methodology Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IRBEthicsGuide;
