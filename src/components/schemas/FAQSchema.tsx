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

// Default FAQs for the main site
export const defaultFAQs: FAQItem[] = [
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
  {
    question: "How does your service work?",
    answer: "Our process is simple: 1) Submit your request through our consultation form, 2) We match you with a subject-matter expert, 3) Work collaboratively with milestone-based progress, 4) Receive polished, publication-ready support that meets academic standards."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing depends on the scope and complexity of your project. We offer transparent, competitive rates with no hidden fees. Contact us for a free consultation and personalized quote."
  },
  {
    question: "Do you guarantee confidentiality?",
    answer: "Yes, we maintain 100% confidentiality. All client information is protected with enterprise-grade security, and we never share or disclose any personal or academic details."
  },
  {
    question: "What is your revision policy?",
    answer: "We offer unlimited revisions within the scope of your original requirements. Our goal is your complete satisfaction, and we work closely with you until you're fully happy with the results."
  }
];
