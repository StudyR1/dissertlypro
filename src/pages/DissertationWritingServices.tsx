import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, AggregateRatingSchema } from "@/components/schemas";
import ServiceSchema from "@/components/schemas/ServiceSchema";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FloatingOrderButton } from "@/components/cro";
import {
  BookOpen, Shield, Clock, Users, CheckCircle, GraduationCap,
  FileText, Lock, CreditCard, ArrowRight, Star, MessageCircle,
  BadgeCheck, Layers, BarChart3, PenTool
} from "lucide-react";

const faqs = [
  {
    question: "What are dissertation writing services?",
    answer: "Dissertation writing services provide professional academic support for Master's and PhD students. This includes help with topic selection, proposal development, literature reviews, methodology design, data analysis, chapter drafting, editing, and proofreading. A reputable service pairs you with a subject-matter expert who guides you through each stage of your dissertation — not a generic writer producing work on your behalf."
  },
  {
    question: "Is it ethical to use a dissertation writing service?",
    answer: "Yes, when used correctly. Ethical dissertation services function as academic coaching and research support — similar to hiring a tutor or working with an advisor. Our service operates under a clear academic integrity policy. We provide model work, guidance, and feedback that helps you develop your own research skills and produce original scholarship. Learn more on our ethics page."
  },
  {
    question: "Can someone write my dissertation for me?",
    answer: "We provide expert-guided support for every chapter of your dissertation, from proposal to final submission. Rather than producing work for you to submit as your own, our PhD-qualified experts collaborate with you through research guidance, structural feedback, methodology consultation, and iterative drafts. This approach ensures you understand your research deeply and can defend it with confidence."
  },
  {
    question: "How much do dissertation writing services cost?",
    answer: "Pricing depends on your academic level, subject complexity, word count, and timeline. A single-chapter consultation starts from $299, while comprehensive full-dissertation support packages are tailored to your specific needs. We offer transparent pricing with no hidden fees, and flexible payment plans are available. Visit our pricing page for a personalised estimate."
  },
  {
    question: "How do I choose a reliable dissertation writing service?",
    answer: "Look for services that employ verified PhD-qualified experts in your subject area, offer transparent revision policies, provide direct communication with your assigned expert, and publish a clear academic integrity policy. Avoid services that promise unrealistically fast turnarounds or guarantee specific grades. Our team holds advanced degrees from leading universities and we maintain a 4.9/5 client satisfaction rating."
  },
  {
    question: "Will my dissertation pass Turnitin?",
    answer: "All work produced through our service is 100% original and written from scratch. Every deliverable undergoes plagiarism screening before release. Because our experts conduct genuine research and produce original analysis, our work consistently passes institutional plagiarism detection tools including Turnitin, iThenticate, and SafeAssign."
  },
  {
    question: "What subjects do you cover?",
    answer: "We support dissertations across 50+ disciplines including Business & Management, Psychology, Education, Computer Science, Engineering, Nursing & Healthcare, Law, Social Sciences, Humanities, Economics, Political Science, Environmental Science, and more. Each project is matched with an expert holding a relevant advanced degree in your specific field."
  },
  {
    question: "How long does it take to complete a dissertation?",
    answer: "Timelines vary based on scope and complexity. A single chapter typically takes 7–14 days. A full dissertation with comprehensive support generally spans 4–12 weeks depending on your academic level and subject area. We accommodate urgent deadlines when possible, and our project management system keeps you informed at every milestone."
  },
  {
    question: "Can you help with just one chapter?",
    answer: "Absolutely. Many students come to us for support with a specific chapter — whether that's a literature review, methodology section, data analysis, or discussion chapter. We also offer standalone services including dissertation proposal help, editing and proofreading, and statistical analysis. You choose the level of support that fits your needs."
  },
  {
    question: "What guarantees do you offer?",
    answer: "We offer unlimited revisions within your project scope, a full confidentiality guarantee backed by GDPR compliance, plagiarism-free original work verified through screening tools, direct communication with your assigned PhD expert, and milestone-based progress updates. If we cannot match you with a suitable expert in your field, we provide a full refund."
  }
];

const howToSteps = [
  {
    name: "Share Your Requirements",
    text: "Complete our consultation form with your dissertation topic, academic level, subject area, deadline, and any specific challenges you're facing. The more detail you provide, the better we can match you with the right expert."
  },
  {
    name: "Get Matched with a PhD Expert",
    text: "Within 24 hours, we pair you with a verified subject-matter expert who holds an advanced degree in your discipline. Your expert is selected based on their research specialisation, publication record, and availability."
  },
  {
    name: "Collaborate Through Milestones",
    text: "Work directly with your expert through structured milestones. Receive chapter drafts, detailed feedback, methodology guidance, and iterative revisions. You maintain full visibility into progress at every stage."
  },
  {
    name: "Receive Polished, Original Work",
    text: "Your expert delivers thoroughly researched, plagiarism-screened work that meets your university's formatting and academic standards. Post-delivery support and defence preparation are included."
  }
];

const subjects = [
  "Business & Management", "Psychology", "Education", "Computer Science",
  "Engineering", "Nursing & Healthcare", "Law", "Social Sciences",
  "Economics", "Political Science", "Environmental Science", "Humanities",
  "Biology & Life Sciences", "Marketing", "Public Health", "Sociology"
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const DissertationWritingServices = () => {
  return (
    <Layout>
      <SEO
        title="Dissertation Writing Services | Expert PhD Support"
        description="Professional dissertation writing services for Master's & PhD students. Expert guidance, 100% original work, unlimited revisions. Get matched with a PhD expert today."
        canonical="/dissertation-writing-services"
        keywords={[
          "dissertation writing services", "dissertation writing service",
          "write my dissertation", "do my dissertation", "dissertation help",
          "dissertation proposal help", "literature review support",
          "methodology guidance", "dissertation editing"
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Dissertation Writing Services", url: "/dissertation-writing-services" }
      ]} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        name="Dissertation Writing Services"
        description="Professional dissertation writing services providing expert PhD-level guidance for Master's and doctoral students across 50+ disciplines."
        url="/dissertation-writing-services"
        serviceType="Dissertation Writing Support"
      />
      <AggregateRatingSchema ratingValue={4.9} reviewCount={3247} itemName="DissertlyPro Dissertation Writing Services" />
      <HowToSchema
        name="How to Get Professional Dissertation Writing Support"
        description="A step-by-step guide to working with our dissertation writing service, from initial consultation to final delivery."
        steps={howToSteps}
        totalTime="P8W"
      />
      <FloatingOrderButton />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-midnight via-midnight-rich to-midnight-soft overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-copper/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-copper-light/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-copper/30 bg-copper/10 mb-6">
              <Star className="w-4 h-4 text-copper-light" />
              <span className="text-sm text-copper-light font-medium">Rated 4.9/5 by 3,200+ Students</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight">
              Dissertation Writing Services — Expert Support for Every Chapter
            </h1>
            <p className="text-lg md:text-xl text-ivory/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              From proposal to defence, our PhD-qualified experts provide personalised dissertation writing support 
              that helps you produce rigorous, original research on your timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white px-8 py-6 text-lg">
                <Link to="/consultation">
                  Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-ivory/30 text-ivory hover:bg-ivory/10 px-8 py-6 text-lg">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-cream border-y border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-copper" />
              <span className="text-sm font-medium">PhD-Qualified Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-copper" />
              <span className="text-sm font-medium">100% Original Work</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-copper" />
              <span className="text-sm font-medium">On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-copper" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-copper" />
              <span className="text-sm font-medium">Direct Expert Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Seek Support */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Why Students Seek Professional Dissertation Support
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A dissertation is the most demanding academic project you'll undertake. It's also the one where 
              targeted expert guidance makes the biggest difference.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Clock, title: "Time Pressure and Competing Demands",
                text: "Balancing coursework, teaching responsibilities, employment, and personal commitments leaves limited time for sustained research. A dissertation writing service provides structured support that keeps your project moving without sacrificing other obligations."
              },
              {
                icon: Layers, title: "Methodology Complexity",
                text: "Choosing between qualitative, quantitative, and mixed-methods approaches — then executing them correctly — is where many students struggle. Our experts provide hands-on methodology guidance and data analysis support tailored to your research questions."
              },
              {
                icon: Users, title: "Limited Supervisor Availability",
                text: "Faculty supervisors often manage dozens of students simultaneously, resulting in delayed feedback and infrequent meetings. Our service bridges that gap with responsive, dedicated one-to-one expert support."
              },
              {
                icon: PenTool, title: "Academic Writing Standards",
                text: "Producing 60,000–100,000 words of publication-quality academic prose is a distinct skill. Whether English is your first language or not, our experts help you develop the argumentation, critical analysis, and scholarly voice your committee expects."
              }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { delay: i * 0.1, duration: 0.5 } } }}>
                <Card className="h-full border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 text-copper mb-4" />
                    <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            Whether you need help with a <Link to="/literature-review-guide" className="text-copper hover:underline">literature review</Link>, 
            {" "}<Link to="/research-methodology" className="text-copper hover:underline">research methodology</Link>, 
            or <Link to="/dissertation-structure" className="text-copper hover:underline">dissertation structure</Link>, 
            professional support helps you produce stronger work in less time.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              How Our Dissertation Writing Service Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A transparent, milestone-driven process designed to keep your research on track.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {howToSteps.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { delay: i * 0.15, duration: 0.5 } } }}>
                <Card className="h-full border-border text-center relative">
                  <CardContent className="p-6 pt-8">
                    <div className="w-10 h-10 rounded-full bg-copper text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {i + 1}
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-2">{step.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
              <Link to="/consultation">
                Start Your Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Subjects & Levels */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Subjects and Academic Levels We Cover
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our experts hold Master's and doctoral degrees from leading universities worldwide. We support 
              dissertations at every level — from undergraduate final-year projects to PhD theses.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
            {subjects.map((subject, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { delay: i * 0.03, duration: 0.4 } } }}
                className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border"
              >
                <CheckCircle className="w-4 h-4 text-copper flex-shrink-0" />
                <span className="text-sm text-foreground">{subject}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground">
            Don't see your subject? We cover 50+ disciplines. <Link to="/subjects" className="text-copper hover:underline">Browse all subjects</Link> or{" "}
            <Link to="/consultation" className="text-copper hover:underline">tell us what you need</Link>.
          </p>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Quality Assurance and Revision Policy
              </h2>
              <p className="text-muted-foreground text-lg">
                Every deliverable meets the academic standards your institution expects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BadgeCheck, title: "Expert Verification",
                  text: "Every expert is vetted for academic credentials, subject expertise, and professional experience. We verify degrees, publications, and prior client feedback before any assignment."
                },
                {
                  icon: FileText, title: "Unlimited Revisions",
                  text: "Your satisfaction drives our process. We offer unlimited revisions within your project scope to ensure the final work meets your committee's expectations and your university's guidelines."
                },
                {
                  icon: BarChart3, title: "Plagiarism Screening",
                  text: "All work is screened through industry-standard plagiarism detection tools before delivery. You receive a originality report with every submission, giving you confidence in the integrity of the work."
                }
              ].map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { delay: i * 0.1, duration: 0.5 } } }}>
                  <Card className="h-full border-border">
                    <CardContent className="p-6">
                      <item.icon className="w-8 h-8 text-copper mb-4" />
                      <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              We also offer standalone <Link to="/services/editing" className="text-copper hover:underline">editing and proofreading</Link> and{" "}
              <Link to="/services/data-analysis" className="text-copper hover:underline">data analysis</Link> services 
              for students who need targeted support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Confidentiality & Plagiarism Protection */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Confidentiality and Plagiarism Protection
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-copper" /> Your Privacy Is Non-Negotiable
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All communications and project files are encrypted and stored in compliance with GDPR regulations. 
                  We never share your personal information, academic details, or project content with third parties. 
                  Your engagement with our service remains completely confidential.
                </p>
                <Link to="/privacy" className="text-copper hover:underline text-sm">Read our Privacy Policy →</Link>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-copper" /> Original Work, Every Time
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our experts produce original research and writing from scratch for every project. We do not 
                  recycle content, use AI-generated text, or draw from essay banks. Every deliverable is unique 
                  to your research questions, methodology, and institutional requirements.
                </p>
                <Link to="/ethics" className="text-copper hover:underline text-sm">View our Academic Integrity Policy →</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing & Value */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Transparent Pricing and Value
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              No hidden fees, no surprise charges. You know exactly what you're paying for before work begins.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: CreditCard, title: "Flexible Payment Plans", text: "Split your investment into manageable milestone-based payments aligned with your project timeline." },
                { icon: CheckCircle, title: "No Hidden Costs", text: "Your quoted price includes revisions, plagiarism screening, and direct expert communication. What you see is what you pay." },
                { icon: GraduationCap, title: "Investment in Your Future", text: "A well-executed dissertation opens doors to career advancement, publication opportunities, and academic recognition." }
              ].map((item, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-8 h-8 text-copper mx-auto mb-3" />
                    <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
              <Link to="/pricing">
                Get a Personalised Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions about our dissertation writing services, answered clearly.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-copper py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-midnight via-midnight-rich to-midnight-soft">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-copper-light mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-4">
              Ready to Move Your Dissertation Forward?
            </h2>
            <p className="text-ivory/80 text-lg mb-8 leading-relaxed">
              Schedule a free, no-obligation consultation with our team. We'll discuss your research, 
              match you with the right expert, and create a plan that fits your timeline and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white px-8 py-6 text-lg">
                <Link to="/consultation">
                  Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-ivory/30 text-ivory hover:bg-ivory/10 px-8 py-6 text-lg">
                <Link to="/order">Place an Order</Link>
              </Button>
            </div>
            <p className="text-ivory/60 text-sm mt-6">
              No commitment required · Response within 24 hours · 100% confidential
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DissertationWritingServices;
