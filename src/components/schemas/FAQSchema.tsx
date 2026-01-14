import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default FAQSchema;

// Comprehensive FAQs for featured snippets targeting
export const defaultFAQs: FAQItem[] = [
  // Core Service Questions
  {
    question: "What is DissertlyPro?",
    answer: "DissertlyPro is a premium academic support service that provides dissertation and thesis assistance to Master's and PhD students worldwide. We offer expert guidance in research methodology, data analysis, academic writing, editing, and more."
  },
  {
    question: "Is your service ethical and legitimate?",
    answer: "Absolutely. DissertlyPro operates as an educational support service. We provide guidance, coaching, and tutoring to help students develop their own academic work. We adhere to strict ethical guidelines and help students learn while producing original research."
  },
  {
    question: "Who are your experts?",
    answer: "Our team consists of over 500 PhD-qualified experts across various academic disciplines. Each expert has extensive experience in academic research and writing, and undergoes rigorous vetting before joining our team."
  },
  {
    question: "What subjects do you cover?",
    answer: "We support students across all major academic disciplines including Business & Management, Education, Psychology, Healthcare & Nursing, Law, Engineering, Computer Science, Social Sciences, Humanities, and Natural Sciences."
  },
  
  // Process Questions
  {
    question: "How does your dissertation support service work?",
    answer: "Our process is simple: 1) Submit your request through our free consultation form, 2) We match you with a PhD-qualified subject-matter expert within 24 hours, 3) Work collaboratively with milestone-based progress updates, 4) Receive polished, publication-ready support that meets the highest academic standards."
  },
  {
    question: "How long does it take to complete a dissertation?",
    answer: "Timeline varies based on your specific requirements, dissertation length, and complexity. Typically, full dissertation support ranges from 3-12 months. We also offer expedited services for urgent deadlines. During your free consultation, we'll provide a realistic timeline tailored to your needs."
  },
  {
    question: "Can you help with just one chapter of my dissertation?",
    answer: "Yes! We offer flexible support options including individual chapter assistance. Whether you need help with your literature review, methodology chapter, data analysis, or any other section, our experts can provide targeted support for specific chapters or sections."
  },
  
  // Pricing & Payment
  {
    question: "What is your pricing structure?",
    answer: "Our pricing depends on the scope and complexity of your project, academic level (Master's or PhD), and timeline. We offer transparent, competitive rates with no hidden fees. Payment plans are available for larger projects. Contact us for a free consultation and personalized quote."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans for comprehensive dissertation support packages. You can pay in installments aligned with project milestones, making our services accessible without financial strain. Discuss payment options during your free consultation."
  },
  
  // Quality & Confidentiality
  {
    question: "Do you guarantee confidentiality?",
    answer: "Yes, we maintain 100% confidentiality. All client information is protected with enterprise-grade encryption and security protocols. We never share or disclose any personal or academic details. Your privacy is our priority, and we comply with GDPR and international data protection standards."
  },
  {
    question: "What is your revision policy?",
    answer: "We offer unlimited revisions within the scope of your original requirements at no extra cost. Our goal is your complete satisfaction, and we work closely with you until you're fully happy with the results. Revisions are typically completed within 48-72 hours."
  },
  {
    question: "How do you ensure quality and originality?",
    answer: "Every deliverable undergoes rigorous quality checks including expert review, plagiarism screening using industry-standard tools, and formatting verification. We guarantee 100% original work with proper citations and references. Our 98% client satisfaction rate reflects our commitment to excellence."
  },
  
  // Technical & Methodology
  {
    question: "What research methodologies do you support?",
    answer: "Our experts are proficient in all research methodologies including quantitative research (surveys, experiments, statistical analysis), qualitative research (interviews, focus groups, ethnography), and mixed methods approaches. We also support specialized methods like grounded theory, phenomenology, case studies, and systematic reviews."
  },
  {
    question: "What statistical software can your experts use?",
    answer: "Our data analysis experts are proficient in SPSS, R, STATA, SAS, Python, NVivo, ATLAS.ti, AMOS, LISREL, and Excel. We can help with descriptive statistics, inferential statistics, regression analysis, factor analysis, structural equation modeling (SEM), and more."
  },
  {
    question: "Can you help reduce my Turnitin similarity score?",
    answer: "Yes, we offer expert paraphrasing and citation integration services to help you meet your institution's originality requirements. Our specialists ensure proper academic paraphrasing while maintaining the integrity of your research, typically reducing similarity scores to acceptable levels."
  },
  
  // Working Professionals
  {
    question: "Do you offer support for working professionals?",
    answer: "Absolutely! We specialize in supporting working professionals pursuing Master's or doctoral degrees. We offer flexible scheduling, evening and weekend consultations, and understand the unique challenges of balancing work, life, and academic commitments."
  },
  {
    question: "Can I work with my expert outside regular business hours?",
    answer: "Yes, we offer 24/7 support with experts available across multiple time zones. We can schedule consultations and communications around your work schedule, including evenings and weekends, to accommodate busy professionals."
  },
  
  // Getting Started
  {
    question: "How do I get started with DissertlyPro?",
    answer: "Getting started is easy: 1) Book a free consultation through our website, 2) Discuss your project requirements with our team, 3) Receive a personalized quote and timeline, 4) Get matched with your expert and begin your journey to academic success."
  },
  {
    question: "Is the initial consultation really free?",
    answer: "Yes, your initial consultation is completely free with no obligation. During this 30-minute session, we'll discuss your research needs, answer your questions, provide a quote, and explain how we can support your academic journey."
  }
];
