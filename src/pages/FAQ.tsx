import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { FAQSchema } from "@/components/schemas";
import Breadcrumbs from "@/components/ui/breadcrumbs";

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What services does DissertlyPro offer?",
        answer: "We provide comprehensive academic support for Master's and PhD students, including dissertation proposal development, thesis and dissertation writing guidance, research methodology design, data analysis (SPSS, R, STATA, NVivo), literature review support, and editing/proofreading services."
      },
      {
        question: "How do I get started with DissertlyPro?",
        answer: "Simply book a free consultation through our website. During this call, we'll discuss your research needs, timeline, and match you with a subject-matter expert who holds an advanced degree in your field."
      },
      {
        question: "What academic levels do you support?",
        answer: "We exclusively support postgraduate students—specifically Master's and PhD candidates. Our experts understand the rigorous standards required at these advanced academic levels."
      },
      {
        question: "Do you work with students internationally?",
        answer: "Yes! We support students from over 50 countries worldwide. Our team works across time zones and is experienced with various academic systems and citation styles."
      }
    ]
  },
  {
    category: "Services & Process",
    questions: [
      {
        question: "How does the expert matching process work?",
        answer: "After your initial consultation, we analyze your research topic, methodology requirements, and specific needs. We then match you with an expert who holds an advanced degree in your field and has relevant experience with similar projects."
      },
      {
        question: "What is your revision policy?",
        answer: "We offer unlimited revisions within the scope of your original requirements. Your satisfaction is our priority, and we work with you until you're completely satisfied with the deliverables."
      },
      {
        question: "How long does each service typically take?",
        answer: "Timelines vary based on project scope. A literature review might take 2-4 weeks, while comprehensive dissertation support spans several months. During your consultation, we'll establish realistic milestones based on your deadline and requirements."
      },
      {
        question: "Can I communicate directly with my assigned expert?",
        answer: "Yes, you'll have direct access to your expert through our secure communication platform. This ensures clear, efficient collaboration throughout your project."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "How is pricing determined?",
        answer: "Pricing depends on the service type, project complexity, timeline, and academic level. We provide transparent, customized quotes after understanding your specific requirements during the free consultation."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans for larger projects. You can choose milestone-based payments that align with project deliverables, making it easier to manage costs throughout your research journey."
      },
      {
        question: "Is there a free consultation?",
        answer: "Absolutely! We offer a complimentary initial consultation where we discuss your needs, answer questions, and provide a detailed quote—with no obligation to proceed."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers. All transactions are processed through secure, encrypted payment gateways."
      }
    ]
  },
  {
    category: "Quality & Ethics",
    questions: [
      {
        question: "How do you ensure academic integrity?",
        answer: "We provide guidance, feedback, and educational support—not ghostwriting. Our services help you develop your own research skills and produce original work. All deliverables go through plagiarism checks, and we adhere to strict ethical guidelines."
      },
      {
        question: "Is my information kept confidential?",
        answer: "Absolutely. We maintain strict confidentiality protocols. Your personal information, research data, and all communications are protected with enterprise-grade security measures and are never shared with third parties."
      },
      {
        question: "What qualifications do your experts have?",
        answer: "All our experts hold advanced degrees (Master's or PhD) from accredited institutions. They have extensive experience in academic research and publishing within their respective fields."
      },
      {
        question: "Do you guarantee results or grades?",
        answer: "While we cannot guarantee specific grades (as final evaluation is at your institution's discretion), we guarantee high-quality work that meets academic standards and your specified requirements."
      }
    ]
  }
];

// Flatten FAQs for schema
const allFaqs = faqCategories.flatMap(cat => 
  cat.questions.map(q => ({
    question: q.question,
    answer: q.answer
  }))
);

const FAQ = () => {
  return (
    <Layout>
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about DissertlyPro's dissertation and thesis support services. Learn about our process, pricing, and academic integrity standards."
        canonical="/faq"
        keywords={['dissertation FAQ', 'thesis help questions', 'academic support FAQ', 'PhD help questions', 'dissertation service FAQ', 'thesis writing questions', 'research help FAQ']}
      />
      <FAQSchema faqs={allFaqs} />

      {/* Breadcrumbs */}
      <div className="bg-midnight-rich border-b border-white/10">
        <div className="container px-4 sm:px-6">
          <Breadcrumbs className="text-white/60" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-midnight-rich to-midnight relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6">
              <HelpCircle className="h-4 w-4 text-copper-light" />
              <span className="text-sm font-sans text-white/80">Help Center</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/70 font-sans leading-relaxed">
              Find answers to common questions about our services, process, and how we can support your academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-card transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-sans font-medium text-foreground hover:text-copper py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-sans leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 sm:py-24 bg-cream-warm">
        <div className="container px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-copper/10 text-copper mb-6">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground font-sans mb-8">
              Our team is here to help. Book a free consultation or contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="copper" size="lg" className="touch-manipulation" asChild>
                <Link to="/consultation">
                  Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="midnight-outline" size="lg" className="touch-manipulation" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
