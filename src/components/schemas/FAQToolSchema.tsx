import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQToolSchemaProps {
  toolName: string;
  toolUrl: string;
  faqs: FAQItem[];
}

/**
 * FAQToolSchema - Combined FAQ + Tool schema for enhanced SERP presence
 * 
 * This schema adds FAQ structured data to tool pages, enabling:
 * - FAQ rich snippets below tool listings
 * - Voice search answer eligibility
 * - Improved CTR from expanded SERP presence
 */
const FAQToolSchema = ({ toolName, toolUrl, faqs }: FAQToolSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": `${toolName} - Frequently Asked Questions`,
    "url": toolUrl,
    "mainEntity": faqs.map(faq => ({
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

export default FAQToolSchema;

// Pre-defined FAQs for each tool
export const toolFAQs = {
  citationGenerator: [
    {
      question: "Is the DissertlyPro Citation Generator free?",
      answer: "Yes, our Citation Generator is completely free with no sign-up required. Generate unlimited citations in APA 7th, MLA 9th, Chicago, and Harvard styles."
    },
    {
      question: "What source types can I cite with this tool?",
      answer: "You can cite 6 source types: books, journal articles, websites, newspapers, videos, and theses/dissertations. Each format includes all required fields for accurate citations."
    },
    {
      question: "How accurate are the generated citations?",
      answer: "Our citations follow the latest style guide standards (APA 7th Edition, MLA 9th Edition, Chicago 17th Edition). Always verify against your institution's specific requirements."
    }
  ],
  
  thesisBuilder: [
    {
      question: "What types of thesis statements can I create?",
      answer: "The Thesis Builder supports 4 thesis types: Argumentative (takes a position), Analytical (examines components), Expository (explains a topic), and Compare/Contrast (evaluates similarities/differences)."
    },
    {
      question: "How does the 5-step thesis wizard work?",
      answer: "You'll answer 5 guided prompts about your topic, position, evidence, counterarguments, and significance. The tool then generates a structured thesis statement you can refine."
    },
    {
      question: "Can I edit the generated thesis statement?",
      answer: "Absolutely. The generated thesis is a starting point. You can copy, modify, and refine it to match your research focus and academic voice."
    }
  ],
  
  methodologySelector: [
    {
      question: "How accurate is the methodology recommendation?",
      answer: "The 7-question quiz assesses your research goals, data preferences, question type, and practical constraints. Recommendations are based on established research methodology frameworks and align with 95%+ of academic standards."
    },
    {
      question: "What if mixed methods is recommended but seems complex?",
      answer: "Mixed methods can be simplified using sequential designs—start with one method (e.g., surveys) then follow with another (interviews). Our detailed recommendation explains implementation strategies."
    },
    {
      question: "Should I use this quiz before or after defining my research question?",
      answer: "Ideally, take the quiz after defining your research question but before finalizing your proposal. Your methodology should align with how you've framed your research problem."
    }
  ],
  
  literatureSearch: [
    {
      question: "What databases does the Literature Search Builder support?",
      answer: "We format queries for 6 major databases: PubMed, Scopus, Web of Science, PsycINFO, ERIC, and Google Scholar. Each has slightly different Boolean syntax requirements."
    },
    {
      question: "How do Boolean operators improve my search?",
      answer: "AND narrows results (all terms must appear), OR broadens (any term matches), NOT excludes terms. Combining these strategically helps find relevant papers while filtering noise."
    },
    {
      question: "Can I save my search strategy?",
      answer: "Yes, use the copy function to save your formatted query. We recommend documenting your search strategy in a spreadsheet for PRISMA reporting and reproducibility."
    }
  ],
  
  prismaFlow: [
    {
      question: "What is a PRISMA flow diagram?",
      answer: "PRISMA (Preferred Reporting Items for Systematic Reviews) is a standardized flowchart showing how studies were identified, screened, assessed for eligibility, and included in your review. It's required for systematic reviews and meta-analyses."
    },
    {
      question: "Does this tool follow PRISMA 2020 guidelines?",
      answer: "Yes, our generator follows the PRISMA 2020 statement, including the updated four-phase structure: Identification, Screening, Eligibility, and Included studies with duplicate handling."
    },
    {
      question: "Can I export the PRISMA diagram?",
      answer: "Currently you can copy the diagram as formatted text for inclusion in your methodology chapter. Visual export features (PNG, PDF) are planned for future updates."
    }
  ],
  
  referenceManager: [
    {
      question: "Where are my references stored?",
      answer: "References are saved locally in your browser using localStorage. This means they persist between sessions but are tied to your specific browser—exporting regularly is recommended for backup."
    },
    {
      question: "What export formats are available?",
      answer: "Export your bibliography as BibTeX (.bib) for LaTeX users or RIS format for EndNote, Zotero, and Mendeley. You can also copy individual APA citations to clipboard."
    },
    {
      question: "Can I import references from other managers?",
      answer: "Currently the tool supports manual entry. We're developing import functionality for BibTeX, RIS, and DOI lookup in future updates."
    }
  ],
  
  chapterPlanner: [
    {
      question: "How does the Chapter Timeline Planner calculate deadlines?",
      answer: "Enter your submission deadline and the tool distributes time across standard dissertation chapters: Introduction (10%), Literature Review (20%), Methodology (15%), Results (20%), Discussion (25%), and Conclusion (10%)."
    },
    {
      question: "Can I adjust the chapter time allocations?",
      answer: "Yes, the Gantt-style interface allows you to drag and resize chapter blocks. Adjust based on your methodology complexity—qualitative dissertations often need more time for data collection."
    },
    {
      question: "What if I'm behind schedule?",
      answer: "The planner highlights at-risk chapters. Consider our Deadline Risk Checker tool for actionable recovery strategies, or explore our professional support services for intensive assistance."
    }
  ],
  
  researchQuestionValidator: [
    {
      question: "What frameworks does the validator use?",
      answer: "We assess questions using PICO (Population, Intervention, Comparison, Outcome) for quantitative research and SPIDER (Sample, Phenomenon of Interest, Design, Evaluation, Research type) for qualitative studies."
    },
    {
      question: "What makes a strong research question?",
      answer: "Strong research questions are specific, focused, debatable, and researchable. They identify clear variables/concepts, suggest a methodology, and contribute to existing literature. Our validator scores each element."
    },
    {
      question: "Can I validate multiple research questions?",
      answer: "Yes, validate your main question and sub-questions separately. Most dissertations have 1 primary question with 2-4 supporting sub-questions that guide specific chapters."
    }
  ]
};
