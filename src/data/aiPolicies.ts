/**
 * AI Policies Database
 * 
 * Comprehensive database of university AI policies for academic use.
 * Policies are categorized by strictness level and include disclosure requirements.
 */

export interface AIPolicy {
  universityName: string;
  country: string;
  region: string;
  policyLevel: "permissive" | "disclosure-required" | "restricted" | "prohibited";
  allowedUses: AIUseType[];
  prohibitedUses: AIUseType[];
  disclosureRequired: boolean;
  disclosureLocation: string[];
  policyUrl?: string;
  lastUpdated: string;
  notes?: string;
}

export type AIUseType = 
  | "literature-search"
  | "grammar-editing"
  | "paraphrasing"
  | "translation"
  | "data-analysis"
  | "code-generation"
  | "image-generation"
  | "content-drafting"
  | "brainstorming"
  | "citation-formatting"
  | "summarization";

export const aiUseTypeLabels: Record<AIUseType, string> = {
  "literature-search": "Literature Search & Discovery",
  "grammar-editing": "Grammar & Spelling Assistance",
  "paraphrasing": "Paraphrasing & Rewording",
  "translation": "Translation Assistance",
  "data-analysis": "Data Analysis & Coding",
  "code-generation": "Code Generation",
  "image-generation": "Image/Figure Generation",
  "content-drafting": "Content Drafting",
  "brainstorming": "Brainstorming & Ideation",
  "citation-formatting": "Citation Formatting",
  "summarization": "Summarization"
};

export const policyLevelInfo = {
  "permissive": {
    label: "Permissive",
    color: "green",
    description: "AI tools are generally allowed with minimal restrictions"
  },
  "disclosure-required": {
    label: "Disclosure Required",
    color: "yellow",
    description: "AI use is allowed but must be disclosed and acknowledged"
  },
  "restricted": {
    label: "Restricted",
    color: "orange",
    description: "AI use is limited to specific approved purposes only"
  },
  "prohibited": {
    label: "Prohibited",
    color: "red",
    description: "AI tools are not permitted for academic submissions"
  }
};

// UK Universities
const ukPolicies: AIPolicy[] = [
  {
    universityName: "University of Oxford",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming", "citation-formatting", "data-analysis"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Acknowledgments"],
    policyUrl: "https://www.ox.ac.uk/students/academic/guidance/skills/ai",
    lastUpdated: "2024-09",
    notes: "Must clearly distinguish between AI-assisted and original work. College-specific variations may apply."
  },
  {
    universityName: "University of Cambridge",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "citation-formatting", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Declaration of authorship"],
    policyUrl: "https://www.cambridgestudents.cam.ac.uk/your-course/examinations/assessment",
    lastUpdated: "2024-09",
    notes: "Faculty-specific guidelines may impose additional restrictions."
  },
  {
    universityName: "Imperial College London",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "code-generation", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Appendix"],
    policyUrl: "https://www.imperial.ac.uk/students/academic-support/academic-integrity/",
    lastUpdated: "2024-08",
    notes: "Strong support for AI in STEM research applications. Code must be fully documented."
  },
  {
    universityName: "University College London (UCL)",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Author contribution statement"],
    policyUrl: "https://www.ucl.ac.uk/students/exams-and-assessments/academic-integrity",
    lastUpdated: "2024-09"
  },
  {
    universityName: "London School of Economics (LSE)",
    country: "UK",
    region: "England",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing", "citation-formatting"],
    prohibitedUses: ["content-drafting", "paraphrasing", "data-analysis", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Declaration form", "Methodology section"],
    policyUrl: "https://info.lse.ac.uk/current-students/services/assessment-and-results/academic-conduct",
    lastUpdated: "2024-07",
    notes: "Stricter policy for social sciences. Quantitative analysis AI use requires explicit approval."
  },
  {
    universityName: "University of Edinburgh",
    country: "UK",
    region: "Scotland",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    policyUrl: "https://www.ed.ac.uk/academic-services/students/conduct/academic-misconduct",
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Manchester",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Acknowledgments"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "King's College London",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming", "citation-formatting"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Bristol",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "University of Warwick",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Appendix"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Glasgow",
    country: "UK",
    region: "Scotland",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Leeds",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Birmingham",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Acknowledgments"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "University of Southampton",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Durham University",
    country: "UK",
    region: "England",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing", "citation-formatting"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Declaration form", "Methodology section"],
    lastUpdated: "2024-08",
    notes: "Humanities departments have stricter restrictions than STEM."
  },
  {
    universityName: "University of Nottingham",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Sheffield",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "University of Liverpool",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Exeter",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Cardiff University",
    country: "UK",
    region: "Wales",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Queen's University Belfast",
    country: "UK",
    region: "Northern Ireland",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of St Andrews",
    country: "UK",
    region: "Scotland",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing", "citation-formatting"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Declaration form", "Methodology section"],
    lastUpdated: "2024-08",
    notes: "Traditional emphasis on original scholarly contribution."
  },
  {
    universityName: "University of York",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Lancaster University",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "University of Bath",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Reading",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Loughborough University",
    country: "UK",
    region: "England",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08",
    notes: "Engineering and technology departments have more permissive AI policies."
  },
  {
    universityName: "University of Surrey",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Sussex",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Royal Holloway, University of London",
    country: "UK",
    region: "England",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming", "citation-formatting"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "SOAS University of London",
    country: "UK",
    region: "England",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization", "translation"],
    disclosureRequired: true,
    disclosureLocation: ["Declaration form", "Methodology section"],
    lastUpdated: "2024-07",
    notes: "Strong emphasis on original language scholarship and translation work."
  }
];

// US Universities
const usPolicies: AIPolicy[] = [
  {
    universityName: "Harvard University",
    country: "US",
    region: "Massachusetts",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Acknowledgments"],
    policyUrl: "https://provost.harvard.edu/guidelines-using-chatgpt-and-other-generative-ai-tools-harvard",
    lastUpdated: "2024-09",
    notes: "School-specific policies may vary. Check with your department."
  },
  {
    universityName: "Stanford University",
    country: "US",
    region: "California",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation", "summarization"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    policyUrl: "https://communitystandards.stanford.edu/policies-guidance/honor-code",
    lastUpdated: "2024-08",
    notes: "Leading institution in AI research with progressive policies."
  },
  {
    universityName: "Massachusetts Institute of Technology (MIT)",
    country: "US",
    region: "Massachusetts",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation", "summarization"],
    prohibitedUses: [],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Author contribution"],
    policyUrl: "https://integrity.mit.edu/",
    lastUpdated: "2024-09",
    notes: "Most permissive policy. Encourages AI as research tool with full transparency."
  },
  {
    universityName: "Yale University",
    country: "US",
    region: "Connecticut",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Acknowledgments"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Princeton University",
    country: "US",
    region: "New Jersey",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing", "citation-formatting"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Honor code acknowledgment", "Methodology section"],
    policyUrl: "https://odoc.princeton.edu/curriculum/academic-integrity",
    lastUpdated: "2024-07",
    notes: "Strong honor code tradition. More restrictive than peer institutions."
  },
  {
    universityName: "Columbia University",
    country: "US",
    region: "New York",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of California, Berkeley",
    country: "US",
    region: "California",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "University of Chicago",
    country: "US",
    region: "Illinois",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Acknowledgments"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Duke University",
    country: "US",
    region: "North Carolina",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Northwestern University",
    country: "US",
    region: "Illinois",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Pennsylvania",
    country: "US",
    region: "Pennsylvania",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Acknowledgments"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "Cornell University",
    country: "US",
    region: "New York",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Johns Hopkins University",
    country: "US",
    region: "Maryland",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08",
    notes: "Medical and public health programs have specific AI guidelines."
  },
  {
    universityName: "University of California, Los Angeles (UCLA)",
    country: "US",
    region: "California",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "University of Michigan",
    country: "US",
    region: "Michigan",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "New York University (NYU)",
    country: "US",
    region: "New York",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Carnegie Mellon University",
    country: "US",
    region: "Pennsylvania",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation", "summarization"],
    prohibitedUses: [],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09",
    notes: "Leading AI research institution with progressive, transparent policies."
  },
  {
    universityName: "University of Washington",
    country: "US",
    region: "Washington",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Texas at Austin",
    country: "US",
    region: "Texas",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Georgia Institute of Technology",
    country: "US",
    region: "Georgia",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Wisconsin-Madison",
    country: "US",
    region: "Wisconsin",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "University of Illinois Urbana-Champaign",
    country: "US",
    region: "Illinois",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Boston University",
    country: "US",
    region: "Massachusetts",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Southern California (USC)",
    country: "US",
    region: "California",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Vanderbilt University",
    country: "US",
    region: "Tennessee",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Acknowledgments"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Rice University",
    country: "US",
    region: "Texas",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Emory University",
    country: "US",
    region: "Georgia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Brown University",
    country: "US",
    region: "Rhode Island",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Dartmouth College",
    country: "US",
    region: "New Hampshire",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing", "citation-formatting"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Honor code acknowledgment", "Methodology section"],
    lastUpdated: "2024-07",
    notes: "Strong liberal arts tradition with emphasis on original work."
  },
  {
    universityName: "University of Virginia",
    country: "US",
    region: "Virginia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of North Carolina at Chapel Hill",
    country: "US",
    region: "North Carolina",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Ohio State University",
    country: "US",
    region: "Ohio",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Arizona State University",
    country: "US",
    region: "Arizona",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09",
    notes: "Innovation-focused institution with progressive AI policies."
  },
  {
    universityName: "University of Florida",
    country: "US",
    region: "Florida",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Indiana University Bloomington",
    country: "US",
    region: "Indiana",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Purdue University",
    country: "US",
    region: "Indiana",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Minnesota",
    country: "US",
    region: "Minnesota",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Michigan State University",
    country: "US",
    region: "Michigan",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Penn State University",
    country: "US",
    region: "Pennsylvania",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Maryland",
    country: "US",
    region: "Maryland",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of California, San Diego (UCSD)",
    country: "US",
    region: "California",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "University of California, Davis",
    country: "US",
    region: "California",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Colorado Boulder",
    country: "US",
    region: "Colorado",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Washington University in St. Louis",
    country: "US",
    region: "Missouri",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Acknowledgments"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Tufts University",
    country: "US",
    region: "Massachusetts",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Georgetown University",
    country: "US",
    region: "Washington D.C.",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing", "citation-formatting"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Honor pledge", "Methodology section"],
    lastUpdated: "2024-07",
    notes: "Traditional academic values with emphasis on original scholarship."
  },
  {
    universityName: "University of Notre Dame",
    country: "US",
    region: "Indiana",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing", "citation-formatting"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Honor code acknowledgment", "Methodology section"],
    lastUpdated: "2024-08",
    notes: "Strong honor code tradition with restrictive AI policies."
  }
];

// Australian Universities
const auPolicies: AIPolicy[] = [
  {
    universityName: "University of Melbourne",
    country: "Australia",
    region: "Victoria",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Academic integrity statement"],
    policyUrl: "https://academicintegrity.unimelb.edu.au/plagiarism-and-collusion/artificial-intelligence-tools",
    lastUpdated: "2024-09",
    notes: "Comprehensive AI policy with clear guidance on disclosure requirements."
  },
  {
    universityName: "University of Sydney",
    country: "Australia",
    region: "New South Wales",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    policyUrl: "https://www.sydney.edu.au/students/academic-integrity.html",
    lastUpdated: "2024-08"
  },
  {
    universityName: "Australian National University (ANU)",
    country: "Australia",
    region: "Australian Capital Territory",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Acknowledgments"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "Monash University",
    country: "Australia",
    region: "Victoria",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Authorship declaration", "Methodology section"],
    policyUrl: "https://www.monash.edu/students/academic/policies/academic-integrity",
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Queensland",
    country: "Australia",
    region: "Queensland",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "University of New South Wales (UNSW)",
    country: "Australia",
    region: "New South Wales",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    policyUrl: "https://www.student.unsw.edu.au/plagiarism",
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Adelaide",
    country: "Australia",
    region: "South Australia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming"],
    prohibitedUses: ["content-drafting", "data-analysis"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "University of Western Australia",
    country: "Australia",
    region: "Western Australia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Macquarie University",
    country: "Australia",
    region: "New South Wales",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "RMIT University",
    country: "Australia",
    region: "Victoria",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08",
    notes: "Technology-focused institution with progressive AI policies."
  },
  {
    universityName: "University of Technology Sydney (UTS)",
    country: "Australia",
    region: "New South Wales",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "Queensland University of Technology (QUT)",
    country: "Australia",
    region: "Queensland",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Deakin University",
    country: "Australia",
    region: "Victoria",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Griffith University",
    country: "Australia",
    region: "Queensland",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "La Trobe University",
    country: "Australia",
    region: "Victoria",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "University of Tasmania",
    country: "Australia",
    region: "Tasmania",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Wollongong",
    country: "Australia",
    region: "New South Wales",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Curtin University",
    country: "Australia",
    region: "Western Australia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Swinburne University of Technology",
    country: "Australia",
    region: "Victoria",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "James Cook University",
    country: "Australia",
    region: "Queensland",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  }
];

// Canadian Universities
const caPolicies: AIPolicy[] = [
  {
    universityName: "University of Toronto",
    country: "Canada",
    region: "Ontario",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Academic integrity declaration"],
    policyUrl: "https://www.artsci.utoronto.ca/current/academic-advising-and-support/student-academic-integrity",
    lastUpdated: "2024-09",
    notes: "Faculty-specific policies may have additional requirements."
  },
  {
    universityName: "University of British Columbia (UBC)",
    country: "Canada",
    region: "British Columbia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    policyUrl: "https://academicintegrity.ubc.ca/",
    lastUpdated: "2024-08"
  },
  {
    universityName: "McGill University",
    country: "Canada",
    region: "Quebec",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Acknowledgments"],
    policyUrl: "https://www.mcgill.ca/students/srr/academicrights/integrity",
    lastUpdated: "2024-09"
  },
  {
    universityName: "University of Alberta",
    country: "Canada",
    region: "Alberta",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "University of Waterloo",
    country: "Canada",
    region: "Ontario",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    policyUrl: "https://uwaterloo.ca/academic-integrity/",
    lastUpdated: "2024-08",
    notes: "Tech-focused institution with progressive approach to AI tools."
  },
  {
    universityName: "McMaster University",
    country: "Canada",
    region: "Ontario",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Calgary",
    country: "Canada",
    region: "Alberta",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Queen's University",
    country: "Canada",
    region: "Ontario",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Ottawa",
    country: "Canada",
    region: "Ontario",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Western University",
    country: "Canada",
    region: "Ontario",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Dalhousie University",
    country: "Canada",
    region: "Nova Scotia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Simon Fraser University",
    country: "Canada",
    region: "British Columbia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Victoria",
    country: "Canada",
    region: "British Columbia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "University of Manitoba",
    country: "Canada",
    region: "Manitoba",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "York University",
    country: "Canada",
    region: "Ontario",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Carleton University",
    country: "Canada",
    region: "Ontario",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Concordia University",
    country: "Canada",
    region: "Quebec",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Saskatchewan",
    country: "Canada",
    region: "Saskatchewan",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Université de Montréal",
    country: "Canada",
    region: "Quebec",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing", "citation-formatting"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Déclaration d'intégrité", "Methodology section"],
    lastUpdated: "2024-07",
    notes: "Stricter policy in humanities; STEM departments more permissive."
  },
  {
    universityName: "University of Guelph",
    country: "Canada",
    region: "Ontario",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  }
];

// European Universities
const euPolicies: AIPolicy[] = [
  {
    universityName: "ETH Zurich",
    country: "Switzerland",
    region: "Zurich",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    policyUrl: "https://ethz.ch/en/the-eth-zurich/education/academic-integrity.html",
    lastUpdated: "2024-08",
    notes: "Leading technical university with progressive AI research policies."
  },
  {
    universityName: "University of Amsterdam",
    country: "Netherlands",
    region: "North Holland",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Declaration"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "Ludwig Maximilian University of Munich",
    country: "Germany",
    region: "Bavaria",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Sorbonne University",
    country: "France",
    region: "Paris",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Déclaration d'intégrité académique"],
    lastUpdated: "2024-07",
    notes: "Traditional French academic emphasis on original authorship."
  },
  {
    universityName: "University of Copenhagen",
    country: "Denmark",
    region: "Capital Region",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "KU Leuven",
    country: "Belgium",
    region: "Flanders",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Technical University of Munich",
    country: "Germany",
    region: "Bavaria",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "Heidelberg University",
    country: "Germany",
    region: "Baden-Württemberg",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Humboldt University of Berlin",
    country: "Germany",
    region: "Berlin",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Zurich",
    country: "Switzerland",
    region: "Zurich",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Uppsala University",
    country: "Sweden",
    region: "Uppsala",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Karolinska Institute",
    country: "Sweden",
    region: "Stockholm",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09",
    notes: "Medical research focus with specific guidelines for AI in clinical research."
  },
  {
    universityName: "Delft University of Technology",
    country: "Netherlands",
    region: "South Holland",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "École Polytechnique Fédérale de Lausanne (EPFL)",
    country: "Switzerland",
    region: "Vaud",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "Trinity College Dublin",
    country: "Ireland",
    region: "Dublin",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University College Dublin",
    country: "Ireland",
    region: "Dublin",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Leiden University",
    country: "Netherlands",
    region: "South Holland",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Sciences Po",
    country: "France",
    region: "Paris",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing", "citation-formatting"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Déclaration d'intégrité académique"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "RWTH Aachen University",
    country: "Germany",
    region: "North Rhine-Westphalia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Politecnico di Milano",
    country: "Italy",
    region: "Lombardy",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Barcelona",
    country: "Spain",
    region: "Catalonia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "University of Helsinki",
    country: "Finland",
    region: "Uusimaa",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Oslo",
    country: "Norway",
    region: "Oslo",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Vienna",
    country: "Austria",
    region: "Vienna",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Charles University",
    country: "Czech Republic",
    region: "Prague",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Declaration form"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "University of Warsaw",
    country: "Poland",
    region: "Masovia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  }
];

// Asian Universities
const asiaPolicies: AIPolicy[] = [
  {
    universityName: "National University of Singapore (NUS)",
    country: "Singapore",
    region: "Singapore",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Academic declaration"],
    policyUrl: "https://www.nus.edu.sg/registrar/academic-information-policies/undergraduate-students/academic-integrity",
    lastUpdated: "2024-09",
    notes: "Progressive approach to AI with clear disclosure guidelines."
  },
  {
    universityName: "University of Hong Kong",
    country: "Hong Kong",
    region: "Hong Kong",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Tokyo",
    country: "Japan",
    region: "Tokyo",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07",
    notes: "Traditional emphasis on original scholarship; conservative AI approach."
  },
  {
    universityName: "Seoul National University",
    country: "South Korea",
    region: "Seoul",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Peking University",
    country: "China",
    region: "Beijing",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing"],
    prohibitedUses: ["content-drafting", "paraphrasing", "data-analysis"],
    disclosureRequired: true,
    disclosureLocation: ["Declaration form"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Tsinghua University",
    country: "China",
    region: "Beijing",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Declaration form"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Nanyang Technological University (NTU)",
    country: "Singapore",
    region: "Singapore",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "Hong Kong University of Science and Technology",
    country: "Hong Kong",
    region: "Hong Kong",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Chinese University of Hong Kong",
    country: "Hong Kong",
    region: "Hong Kong",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Kyoto University",
    country: "Japan",
    region: "Kyoto",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "Fudan University",
    country: "China",
    region: "Shanghai",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Declaration form"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Zhejiang University",
    country: "China",
    region: "Zhejiang",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Declaration form"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "KAIST",
    country: "South Korea",
    region: "Daejeon",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09",
    notes: "Leading tech university with progressive AI research policies."
  },
  {
    universityName: "Korea University",
    country: "South Korea",
    region: "Seoul",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Yonsei University",
    country: "South Korea",
    region: "Seoul",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Tokyo Institute of Technology",
    country: "Japan",
    region: "Tokyo",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Indian Institute of Technology Bombay",
    country: "India",
    region: "Maharashtra",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Indian Institute of Technology Delhi",
    country: "India",
    region: "Delhi",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Indian Institute of Science",
    country: "India",
    region: "Karnataka",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "University of Delhi",
    country: "India",
    region: "Delhi",
    policyLevel: "restricted",
    allowedUses: ["literature-search", "grammar-editing"],
    prohibitedUses: ["content-drafting", "paraphrasing", "summarization"],
    disclosureRequired: true,
    disclosureLocation: ["Declaration form"],
    lastUpdated: "2024-07"
  },
  {
    universityName: "National Taiwan University",
    country: "Taiwan",
    region: "Taipei",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Hebrew University of Jerusalem",
    country: "Israel",
    region: "Jerusalem",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "Technion - Israel Institute of Technology",
    country: "Israel",
    region: "Haifa",
    policyLevel: "permissive",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming", "code-generation"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-09"
  },
  {
    universityName: "King Saud University",
    country: "Saudi Arabia",
    region: "Riyadh",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  },
  {
    universityName: "University of Malaya",
    country: "Malaysia",
    region: "Kuala Lumpur",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "data-analysis", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-08"
  }
];

// Combine all policies
export const aiPolicies: AIPolicy[] = [
  ...ukPolicies,
  ...usPolicies,
  ...auPolicies,
  ...caPolicies,
  ...euPolicies,
  ...asiaPolicies
];

// Default regional policies for unlisted universities
export const defaultPolicies: Record<string, Omit<AIPolicy, "universityName" | "region" | "policyUrl" | "notes">> = {
  "UK": {
    country: "UK",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-01"
  },
  "US": {
    country: "US",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming", "data-analysis"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-01"
  },
  "Australia": {
    country: "Australia",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming"],
    prohibitedUses: ["content-drafting", "paraphrasing"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section", "Academic integrity statement"],
    lastUpdated: "2024-01"
  },
  "Canada": {
    country: "Canada",
    policyLevel: "disclosure-required",
    allowedUses: ["literature-search", "grammar-editing", "brainstorming"],
    prohibitedUses: ["content-drafting"],
    disclosureRequired: true,
    disclosureLocation: ["Methodology section"],
    lastUpdated: "2024-01"
  }
};

// Helper functions
export function getUniversityPolicy(universityName: string): AIPolicy | undefined {
  return aiPolicies.find(
    p => p.universityName.toLowerCase() === universityName.toLowerCase()
  );
}

export function getUniversitiesByCountry(country: string): AIPolicy[] {
  return aiPolicies.filter(p => p.country === country);
}

export function getAllCountries(): string[] {
  return [...new Set(aiPolicies.map(p => p.country))];
}

export function getAllUniversityNames(): string[] {
  return aiPolicies.map(p => p.universityName).sort();
}

export function isUseAllowed(policy: AIPolicy, useType: AIUseType): boolean {
  return policy.allowedUses.includes(useType);
}

export function isUseProhibited(policy: AIPolicy, useType: AIUseType): boolean {
  return policy.prohibitedUses.includes(useType);
}

export function getDisclosureTemplate(policy: AIPolicy, usedTools: AIUseType[]): string {
  const toolsUsed = usedTools.map(t => aiUseTypeLabels[t]).join(", ");
  
  return `AI Assistance Disclosure

In the preparation of this dissertation/thesis, the author used artificial intelligence (AI) tools for the following purposes: ${toolsUsed}.

In accordance with ${policy.universityName}'s academic integrity policy, this disclosure is provided to ensure transparency regarding the use of AI assistance.

The author confirms that:
1. All AI-generated content has been critically reviewed and verified for accuracy
2. The core arguments, analysis, and conclusions represent the author's original intellectual contribution
3. AI tools were used as research aids, not as a replacement for original thinking
4. All sources and references have been independently verified

This acknowledgment should be included in: ${policy.disclosureLocation.join(", ")}

Date: ${new Date().toLocaleDateString()}`;
}

// AI Quiz data
export const aiReadinessQuestions = [
  {
    id: 1,
    question: "Do you know your university's official policy on AI use in dissertations?",
    options: [
      { value: "yes-detailed", label: "Yes, I've read the full policy", score: 3 },
      { value: "yes-basic", label: "Yes, I have a general understanding", score: 2 },
      { value: "no-aware", label: "No, but I know there is one", score: 1 },
      { value: "no-unaware", label: "No, I didn't know policies existed", score: 0 }
    ]
  },
  {
    id: 2,
    question: "Have you discussed AI tool usage with your supervisor?",
    options: [
      { value: "yes-approved", label: "Yes, and they've approved my approach", score: 3 },
      { value: "yes-ongoing", label: "Yes, we're still discussing it", score: 2 },
      { value: "no-plan", label: "Not yet, but I plan to", score: 1 },
      { value: "no-noplan", label: "No, and I wasn't planning to", score: 0 }
    ]
  },
  {
    id: 3,
    question: "Which AI tools have you used for your dissertation?",
    options: [
      { value: "none", label: "None - I haven't used any AI tools", score: 0 },
      { value: "grammar-only", label: "Only grammar/spelling checkers", score: 1 },
      { value: "multiple-basic", label: "Grammar + literature search tools", score: 2 },
      { value: "comprehensive", label: "Multiple tools including ChatGPT or similar", score: 3 }
    ]
  },
  {
    id: 4,
    question: "Do you know how to cite AI assistance in your dissertation?",
    options: [
      { value: "yes-confident", label: "Yes, I know the APA/MLA/Chicago formats", score: 3 },
      { value: "yes-unsure", label: "I have some idea but need to verify", score: 2 },
      { value: "no-interested", label: "No, but I want to learn", score: 1 },
      { value: "no-unaware", label: "No, I didn't know this was required", score: 0 }
    ]
  },
  {
    id: 5,
    question: "How do you verify AI-generated content for accuracy?",
    options: [
      { value: "rigorous", label: "I cross-reference all claims with primary sources", score: 3 },
      { value: "moderate", label: "I do spot-checks on key claims", score: 2 },
      { value: "minimal", label: "I do a quick review for obvious errors", score: 1 },
      { value: "none", label: "I trust the AI output without verification", score: 0 }
    ]
  },
  {
    id: 6,
    question: "Are you aware of AI detection tools your university might use?",
    options: [
      { value: "yes-detailed", label: "Yes, I know which tools they use and how they work", score: 3 },
      { value: "yes-basic", label: "Yes, I know they use detection tools", score: 2 },
      { value: "no-curious", label: "No, but I'd like to know more", score: 1 },
      { value: "no-unconcerned", label: "No, and I'm not concerned about it", score: 0 }
    ]
  }
];

export function getAIReadinessLevel(score: number): {
  level: string;
  description: string;
  recommendations: string[];
} {
  if (score >= 15) {
    return {
      level: "Expert",
      description: "You have excellent knowledge of AI policies and ethical use practices.",
      recommendations: [
        "Continue staying updated on evolving policies",
        "Consider helping peers understand AI ethics",
        "Document your AI use for potential publications"
      ]
    };
  } else if (score >= 10) {
    return {
      level: "Compliant",
      description: "You have good awareness but could strengthen some areas.",
      recommendations: [
        "Review your university's full AI policy document",
        "Confirm citation formats with your supervisor",
        "Use the AI Policy Checker tool for detailed guidance"
      ]
    };
  } else if (score >= 5) {
    return {
      level: "Informed",
      description: "You have basic knowledge but need to deepen your understanding.",
      recommendations: [
        "Schedule a meeting with your supervisor about AI use",
        "Read our guide on citing AI in academic work",
        "Check your university's AI detection procedures"
      ]
    };
  } else {
    return {
      level: "Novice",
      description: "You need to significantly improve your AI policy knowledge.",
      recommendations: [
        "Urgently review your university's AI policy",
        "Stop using AI tools until you understand the rules",
        "Complete our AI Ethics training resources"
      ]
    };
  }
}
