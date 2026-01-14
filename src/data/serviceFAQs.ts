// Service-specific FAQs for enhanced rich snippets on service pages

export interface FAQItem {
  question: string;
  answer: string;
}

// Services overview page FAQs
export const servicesPageFAQs: FAQItem[] = [
  {
    question: "What dissertation services does DissertlyPro offer?",
    answer: "DissertlyPro offers comprehensive dissertation support including proposal development, thesis writing guidance, research methodology design, data analysis (SPSS, R, NVivo), literature review structuring, editing & proofreading, Turnitin similarity reduction, supervisor revision assistance, journal article preparation, and formatting compliance services."
  },
  {
    question: "How do I know which dissertation service is right for me?",
    answer: "Book a free consultation with our academic advisors who will assess your current progress, challenges, and goals. We'll recommend the most appropriate service or combination of services based on your specific needs, timeline, and budget."
  },
  {
    question: "Can I use multiple dissertation services together?",
    answer: "Absolutely! Many students combine services for comprehensive support. For example, you might use methodology design, data analysis, and editing services together. We offer bundled packages at discounted rates for students needing multiple services."
  },
  {
    question: "How much do your dissertation services cost?",
    answer: "Pricing varies based on the specific service, project scope, academic level (Master's or PhD), and timeline. We provide transparent quotes during your free consultation. Payment plans are available for larger projects."
  }
];

// Service-specific FAQs keyed by service slug
export const serviceSpecificFAQs: Record<string, FAQItem[]> = {
  "dissertation-proposal": [
    {
      question: "What is included in dissertation proposal development?",
      answer: "Our proposal development service includes problem statement refinement, research question development, theoretical framework design, methodology overview, literature review integration, timeline planning, and multiple revision rounds with expert feedback until your committee approves it."
    },
    {
      question: "How long does it take to develop a dissertation proposal?",
      answer: "Typically 2-4 weeks depending on complexity and your existing progress. We can accommodate urgent timelines for an additional fee. The process includes initial consultation, drafting, revisions, and final polish."
    },
    {
      question: "What if my committee rejects my proposal?",
      answer: "We offer unlimited revisions within scope at no extra cost. If your committee requests changes, we'll work with you to address all feedback and resubmit. Our 98% first-submission approval rate reflects our commitment to quality."
    },
    {
      question: "Can you help if my proposal has already been rejected?",
      answer: "Yes! We specialize in revising rejected proposals. We'll analyze the committee feedback, identify weaknesses, and comprehensively restructure your proposal to address all concerns while strengthening your research design."
    }
  ],
  "thesis-writing": [
    {
      question: "How does thesis writing support work?",
      answer: "Our thesis writing support provides chapter-by-chapter guidance from a PhD-qualified expert in your field. We offer draft reviews with detailed feedback, argument development coaching, structure optimization, and academic writing refinement to help you produce publication-quality work."
    },
    {
      question: "Can you help with just one chapter of my thesis?",
      answer: "Yes! We offer flexible support for individual chapters including introduction, literature review, methodology, findings, discussion, or conclusion. Many students need targeted help with their most challenging chapter."
    },
    {
      question: "How do you ensure my thesis maintains my voice and ideas?",
      answer: "Our consultants work collaboratively as coaches and editors, not ghostwriters. We provide guidance, feedback, and suggestions while you retain full ownership of your ideas and writing. All work remains authentically yours."
    },
    {
      question: "What if I'm stuck and don't know how to proceed?",
      answer: "That's exactly what we're here for! Our experts help you overcome writer's block, clarify your arguments, organize your thoughts, and develop a clear path forward. We've helped thousands of stuck students complete their theses."
    }
  ],
  "methodology": [
    {
      question: "What research methodologies do you support?",
      answer: "We support all research methodologies including quantitative (surveys, experiments, statistical analysis), qualitative (interviews, focus groups, ethnography, phenomenology, grounded theory), and mixed methods approaches across all academic disciplines."
    },
    {
      question: "Can you help design my research instruments?",
      answer: "Yes! We help design surveys, interview protocols, observation guides, and other data collection instruments. We ensure validity and reliability while aligning instruments with your research questions and theoretical framework."
    },
    {
      question: "Do you help with ethics applications?",
      answer: "Absolutely. We assist with IRB/ethics committee applications including risk assessment, informed consent forms, participant information sheets, and data management plans to help you gain approval quickly."
    },
    {
      question: "What if I'm unsure which methodology is best for my research?",
      answer: "Our methodology experts will evaluate your research questions, objectives, and practical constraints to recommend the most appropriate approach. We explain the strengths and limitations of different methods to help you make an informed decision."
    }
  ],
  "data-analysis": [
    {
      question: "What statistical software can your experts use?",
      answer: "Our data analysts are proficient in SPSS, R, STATA, SAS, Python, Excel for quantitative analysis, and NVivo, ATLAS.ti, MAXQDA for qualitative analysis. We can work with any standard statistical or qualitative analysis software."
    },
    {
      question: "What types of statistical tests can you perform?",
      answer: "We perform all types of statistical analyses including descriptive statistics, t-tests, ANOVA, regression analysis, correlation, factor analysis, structural equation modeling (SEM), multilevel modeling, and more. We select appropriate tests based on your research design and data."
    },
    {
      question: "Can you teach me to understand my analysis?",
      answer: "Yes! We don't just run the numbers—we explain what every result means. Our experts provide interpretation guidance and can offer training sessions so you can confidently discuss and defend your findings."
    },
    {
      question: "Do you help with qualitative data analysis?",
      answer: "Absolutely. We offer thematic analysis, content analysis, discourse analysis, grounded theory coding, and other qualitative approaches. We can help with NVivo or ATLAS.ti coding and theme development."
    }
  ],
  "literature-review": [
    {
      question: "How do you help structure a literature review?",
      answer: "We help develop a systematic search strategy, organize sources thematically, create synthesis matrices, identify research gaps, and structure your review to build a compelling argument for your study's contribution to the field."
    },
    {
      question: "Can you help me find relevant sources?",
      answer: "Yes! We assist with database searches, develop effective search strings, and help identify seminal works and recent publications in your field. We also help with citation management using tools like Zotero, EndNote, or Mendeley."
    },
    {
      question: "How long should my literature review be?",
      answer: "Length varies by discipline and degree level. PhD literature reviews typically span 8,000-15,000 words, while Master's reviews are usually 4,000-8,000 words. We help you achieve comprehensive coverage within your institution's expectations."
    },
    {
      question: "What's the difference between a literature review and an annotated bibliography?",
      answer: "An annotated bibliography lists sources with brief summaries, while a literature review synthesizes sources thematically to build an argument, identify gaps, and position your research. We help with both, but specialize in the more complex synthesis work."
    }
  ],
  "editing": [
    {
      question: "What citation styles do you support?",
      answer: "We are experts in all major citation styles including APA 7th edition, MLA, Chicago/Turabian, Harvard, IEEE, AMA, Vancouver, and discipline-specific formats. We ensure complete compliance with your required style guide."
    },
    {
      question: "What's included in academic editing?",
      answer: "Our editing includes grammar and punctuation correction, sentence structure improvement, academic tone refinement, clarity enhancement, consistency checks, citation formatting, reference list verification, and overall flow optimization."
    },
    {
      question: "Do you provide developmental editing or just proofreading?",
      answer: "We offer both. Developmental editing addresses structure, argumentation, and content organization, while proofreading focuses on grammar, spelling, and formatting. Most students benefit from our comprehensive editing package that includes both."
    },
    {
      question: "How quickly can you edit my dissertation?",
      answer: "Standard turnaround is 5-7 days for a full dissertation. Rush service (48-72 hours) is available for an additional fee. We provide accurate timelines based on your document length during your initial consultation."
    }
  ],
  "similarity-reduction": [
    {
      question: "Can you guarantee my Turnitin score will be reduced?",
      answer: "While we cannot guarantee specific scores (which vary by institution requirements), we have a 99% success rate in reducing similarity scores to acceptable levels. We strategically paraphrase, integrate citations properly, and diversify sources."
    },
    {
      question: "Is similarity reduction the same as plagiarism?",
      answer: "No. Similarity reduction involves ethical academic practices: proper paraphrasing, correct citation integration, and original writing enhancement. We never engage in or support plagiarism. We help you express ideas in your own words while properly attributing sources."
    },
    {
      question: "What causes high similarity scores?",
      answer: "Common causes include over-reliance on direct quotes, inadequate paraphrasing, missing citations, self-plagiarism from previous work, common phrases in your discipline, and bibliography/reference list matching. We address all these issues systematically."
    },
    {
      question: "Can you help with self-plagiarism?",
      answer: "Yes! If you're building on your own previous work (like using your Master's thesis for PhD research), we help you properly cite, significantly expand, and sufficiently differentiate your new work while maintaining academic integrity."
    }
  ],
  "supervisor-revisions": [
    {
      question: "What if I don't understand my supervisor's feedback?",
      answer: "We specialize in interpreting vague or complex supervisor comments. Our experts translate academic feedback into clear action items, prioritize revisions, and help you understand exactly what changes are needed."
    },
    {
      question: "How many revision rounds do you support?",
      answer: "We support multiple revision rounds as needed. Many students require 2-3 rounds of supervisor feedback before final approval. We help you address each round systematically and efficiently."
    },
    {
      question: "Can you help me communicate better with my supervisor?",
      answer: "Absolutely. We help draft professional emails, prepare meeting agendas, develop progress reports, and create response documents that demonstrate your understanding of feedback and planned revisions."
    },
    {
      question: "What if my supervisor and I disagree on approach?",
      answer: "We help you build evidence-based arguments for your preferred approach while remaining professionally diplomatic. If compromise is needed, we help identify solutions that satisfy both parties while maintaining research quality."
    }
  ],
  "journal-preparation": [
    {
      question: "How do I choose the right journal for my article?",
      answer: "We help you evaluate journals based on impact factor, scope alignment, rejection rates, time to publication, and your career goals. We identify 3-5 target journals ranked by fit and provide submission strategies for each."
    },
    {
      question: "Can you help me respond to peer reviewer comments?",
      answer: "Yes! We help craft point-by-point responses to reviewer feedback, implement required revisions, and diplomatically address comments you disagree with. Our response strategies maximize acceptance probability."
    },
    {
      question: "What's the difference between a thesis chapter and a journal article?",
      answer: "Journal articles are typically more concise (4,000-8,000 words), focused on specific findings, and written for expert audiences. We help restructure your thesis chapters into tight, publishable manuscripts that meet journal requirements."
    },
    {
      question: "How long does the journal publication process take?",
      answer: "From submission to publication typically takes 6-18 months depending on the journal. We help you manage this timeline effectively, including preparing multiple submissions and responding promptly to reviews."
    }
  ],
  "formatting": [
    {
      question: "Do you format according to my university's specific requirements?",
      answer: "Yes! We format according to your institution's exact guidelines. Simply provide your university's formatting manual or template, and we'll ensure complete compliance with margins, fonts, spacing, headings, and all other requirements."
    },
    {
      question: "Can you help with table of contents and lists?",
      answer: "Absolutely. We create automated, linked tables of contents, lists of figures, lists of tables, lists of abbreviations, and appendices that update automatically and meet your university's formatting standards."
    },
    {
      question: "What if my submission is rejected for formatting issues?",
      answer: "We offer free corrections if any formatting issues arise after our work. Our thorough compliance checks catch virtually all issues before submission, but we stand behind our work with revision guarantees."
    },
    {
      question: "Do you prepare the final PDF for electronic submission?",
      answer: "Yes! We prepare submission-ready files in both Word and PDF formats, ensuring fonts are embedded, bookmarks work correctly, and the file meets all electronic submission requirements for ProQuest, ETD, or your institution's system."
    }
  ]
};

// Homepage FAQ (general) - optimized subset for homepage rich snippets
export const homepageFAQs: FAQItem[] = [
  {
    question: "What is DissertlyPro and how can it help me?",
    answer: "DissertlyPro is a premium academic support service for Master's and PhD students. We provide expert guidance in dissertation proposals, thesis writing, research methodology, data analysis, literature reviews, editing, and more. Our 500+ PhD-qualified experts have helped 15,000+ graduate students complete their research successfully."
  },
  {
    question: "Is DissertlyPro's dissertation support service ethical?",
    answer: "Absolutely. DissertlyPro operates as an educational support and tutoring service. We provide guidance, coaching, and feedback to help students develop their own academic work. We adhere to strict ethical guidelines and help students learn while producing original research."
  },
  {
    question: "How does the dissertation support process work?",
    answer: "Our process is simple: 1) Book a free consultation to discuss your needs, 2) Get matched with a PhD-qualified subject expert within 24 hours, 3) Work collaboratively with milestone-based progress and feedback, 4) Receive polished support that meets the highest academic standards."
  },
  {
    question: "How much does dissertation help cost?",
    answer: "Pricing depends on the service type, project scope, academic level, and timeline. We offer transparent, competitive rates with payment plans available for larger projects. Book a free consultation for a personalized quote with no obligation."
  },
  {
    question: "Do you guarantee confidentiality?",
    answer: "Yes, we maintain 100% confidentiality with enterprise-grade encryption. We never share or disclose personal or academic details. We comply with GDPR and international data protection standards. Your privacy is our top priority."
  },
  {
    question: "What subjects and disciplines do you cover?",
    answer: "We support all major academic disciplines including Business, Education, Psychology, Healthcare, Nursing, Law, Engineering, Computer Science, Social Sciences, Humanities, and Natural Sciences. Our 500+ experts span virtually every field of study."
  }
];
