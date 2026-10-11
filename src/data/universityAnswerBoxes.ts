// High-CTR answer boxes for top-impression university guides (from GSC data).
// Figures summarise publicly available regulations; students should confirm with their faculty.
export interface AnswerBox {
  seoTitle: string;
  seoDescription: string;
  answer: string;
  rows: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

const yr = 2026;

export const universityAnswerBoxes: Record<string, AnswerBox> = {
  ucl: {
    seoTitle: `UCL PhD Thesis Word Count & Guidelines (${yr})`,
    seoDescription: "UCL PhD thesis word limit (100,000 words), MPhil (60,000), upgrade timing, viva format and submission rules — summarised in one table.",
    answer: "A UCL PhD thesis must not exceed 100,000 words, excluding appendices, bibliography and footnotes used for referencing. MPhil theses are capped at 60,000 words. Students normally upgrade from MPhil to PhD within 9–18 months (full-time) and are examined by viva with one internal and one external examiner.",
    rows: [
      { label: "PhD word limit", value: "100,000 words (excl. bibliography & appendices)" },
      { label: "MPhil word limit", value: "60,000 words" },
      { label: "Upgrade (MPhil → PhD)", value: "9–18 months full-time" },
      { label: "Standard duration", value: "3–4 years full-time" },
      { label: "Examination", value: "Viva voce: 1 internal + 1 external examiner" },
      { label: "Submission", value: "Electronic via UCL Research Degrees portal" },
    ],
    faqs: [
      { question: "What is the UCL PhD thesis word count?", answer: "The maximum is 100,000 words, excluding the bibliography, appendices and referencing footnotes. MPhil theses are limited to 60,000 words." },
      { question: "When do UCL PhD students upgrade?", answer: "Full-time students usually complete the MPhil-to-PhD upgrade between 9 and 18 months after registration, with a written report and panel meeting." },
    ],
  },
  cambridge: {
    seoTitle: `Cambridge PhD Guide (${yr}): Word Count, Milestones & Viva`,
    seoDescription: "Cambridge PhD word limit (typically 80,000 words), first-year registration assessment, submission and viva requirements in one quick table.",
    answer: "Most Cambridge PhD theses are limited to 80,000 words including footnotes and tables but excluding the bibliography; some science degree committees set 60,000 words. Students pass a first-year registration assessment, submit within 3–4 years, and are examined by viva with an internal and external examiner.",
    rows: [
      { label: "PhD word limit", value: "80,000 words (60,000 in some sciences)" },
      { label: "Key milestone", value: "First-year registration assessment" },
      { label: "Standard duration", value: "3–4 years full-time" },
      { label: "Examination", value: "Viva: internal + external examiner" },
      { label: "Includes in count", value: "Footnotes, tables, captions" },
      { label: "Excludes", value: "Bibliography; often appendices" },
    ],
    faqs: [
      { question: "How long is a Cambridge PhD thesis?", answer: "Typically up to 80,000 words, though some degree committees in the sciences set 60,000. Always check your department's limit." },
      { question: "What are Cambridge PhD milestones?", answer: "A first-year registration assessment (report plus interview), annual progress reviews, submission within the funded period, then a viva." },
    ],
  },
  imperial: {
    seoTitle: `Imperial College PhD Thesis Length & Rules (${yr})`,
    seoDescription: "Imperial PhD thesis length guidance, early-stage and late-stage reviews, viva format and submission requirements summarised.",
    answer: "Imperial College London recommends a PhD thesis of around 100,000 words maximum, excluding appendices and references. Students pass an Early Stage Assessment (around 9 months) and a Late Stage Review (around 24 months) before submitting, and are examined by oral viva with two examiners.",
    rows: [
      { label: "PhD length", value: "≤ 100,000 words (excl. appendices & references)" },
      { label: "Early Stage Assessment", value: "~9 months (full-time)" },
      { label: "Late Stage Review", value: "~24 months" },
      { label: "Standard duration", value: "3–4 years" },
      { label: "Examination", value: "Viva: internal + external examiner" },
    ],
    faqs: [
      { question: "What is the Imperial PhD word limit?", answer: "Imperial advises a maximum of about 100,000 words excluding appendices and references, with many STEM theses being shorter." },
    ],
  },
  lse: {
    seoTitle: `LSE PhD Thesis Word Limit & Requirements (${yr})`,
    seoDescription: "LSE PhD thesis limit (100,000 words), MRes/PhD upgrade, paper-based thesis options and viva rules in one table.",
    answer: "An LSE PhD thesis must not exceed 100,000 words, including footnotes but excluding the bibliography and appendices. Most programmes require an MRes/PhD upgrade review in years 1–2, and several departments allow a paper-based thesis of three publishable-quality papers. Examination is by viva.",
    rows: [
      { label: "PhD word limit", value: "100,000 words (incl. footnotes)" },
      { label: "Upgrade", value: "MRes/PhD review, years 1–2" },
      { label: "Format options", value: "Monograph or three-paper thesis" },
      { label: "Examination", value: "Viva: two examiners" },
    ],
    faqs: [
      { question: "Can an LSE PhD be paper-based?", answer: "Yes — many departments accept a thesis of three publishable papers plus an introduction and conclusion, within the 100,000-word limit." },
    ],
  },
  oxford: {
    seoTitle: `Oxford DPhil Thesis Word Limit & Milestones (${yr})`,
    seoDescription: "Oxford DPhil word limits by division, Transfer and Confirmation of Status milestones, and viva requirements summarised.",
    answer: "Oxford DPhil word limits are set by division, commonly 100,000 words in the humanities and social sciences and shorter in sciences. Students move from Probationer Research Student through Transfer of Status (around year 1) and Confirmation of Status (around year 2–3) before a viva with two examiners.",
    rows: [
      { label: "DPhil word limit", value: "Typically up to 100,000 (varies by division)" },
      { label: "Transfer of Status", value: "~3rd–4th term" },
      { label: "Confirmation of Status", value: "~6th–9th term" },
      { label: "Examination", value: "Viva: internal + external examiner" },
    ],
    faqs: [
      { question: "What is Transfer of Status at Oxford?", answer: "It is the first formal DPhil milestone, usually in the first year, where you submit written work and are interviewed by two assessors." },
    ],
  },
  harvard: {
    seoTitle: `Harvard PhD Dissertation Requirements & Format (${yr})`,
    seoDescription: "Harvard GSAS dissertation requirements: prospectus, qualifying exams, formatting, length expectations and defense — summarised.",
    answer: "Harvard GSAS does not set a single dissertation word limit; length is determined by department, with most humanities and social-science dissertations running 200–300 pages. Students pass general/qualifying exams, have a prospectus approved, then submit electronically following GSAS formatting rules and defend before their committee.",
    rows: [
      { label: "Word limit", value: "Set by department (often 200–300 pages)" },
      { label: "Key milestones", value: "Qualifying exams → prospectus → defense" },
      { label: "Committee", value: "Advisor + typically 2 readers" },
      { label: "Submission", value: "Electronic via ProQuest ETD, GSAS format" },
      { label: "Typical duration", value: "5–7 years" },
    ],
    faqs: [
      { question: "How long is a Harvard dissertation?", answer: "There is no university-wide limit; departments set expectations, and many dissertations run roughly 200–300 pages." },
    ],
  },
  mit: {
    seoTitle: `MIT Thesis Specifications & PhD Requirements (${yr})`,
    seoDescription: "MIT thesis specifications, qualifying exams, committee structure and submission to DSpace summarised in one quick table.",
    answer: "MIT follows the Institute's Specifications for Thesis Preparation rather than a fixed word limit. Doctoral students pass departmental qualifying exams, form a thesis committee of at least three members, defend the thesis, and submit a PDF/A copy to the MIT Libraries for DSpace archiving.",
    rows: [
      { label: "Word limit", value: "None institute-wide; department norms" },
      { label: "Committee", value: "Minimum 3 members" },
      { label: "Milestones", value: "Quals → proposal → defense" },
      { label: "Submission", value: "PDF/A to MIT Libraries (DSpace)" },
    ],
    faqs: [
      { question: "Does MIT have a thesis word limit?", answer: "No institute-wide limit exists; formatting follows MIT's Thesis Specifications and length follows departmental norms." },
    ],
  },
  monash: {
    seoTitle: `Monash PhD Thesis Word Count & Milestones (${yr})`,
    seoDescription: "Monash PhD thesis word limit (80,000 words), milestone reviews, thesis-by-publication option and examination format.",
    answer: "A Monash PhD thesis is normally up to 80,000 words excluding references and appendices, and a thesis including published works is permitted. Candidates complete three milestones — confirmation (~12 months), mid-candidature (~24 months) and pre-submission (~36 months) — and are examined by two external examiners without a compulsory viva.",
    rows: [
      { label: "PhD word limit", value: "≤ 80,000 words" },
      { label: "Confirmation", value: "~12 months" },
      { label: "Mid-candidature review", value: "~24 months" },
      { label: "Pre-submission", value: "~36 months" },
      { label: "Examination", value: "2 external examiners (written)" },
    ],
    faqs: [
      { question: "What is the Monash PhD word limit?", answer: "Normally up to 80,000 words excluding references and appendices; theses including published works follow the same overall guidance." },
    ],
  },
  sydney: {
    seoTitle: `University of Sydney PhD Thesis Length & Rules (${yr})`,
    seoDescription: "Sydney PhD thesis word limit (80,000 words), annual progress reviews, thesis by publication and examination process.",
    answer: "The University of Sydney generally limits a PhD thesis to 80,000 words excluding footnotes, references and appendices. Candidates pass annual progress evaluations, may submit a thesis including publications, and are examined by at least two external examiners in writing.",
    rows: [
      { label: "PhD word limit", value: "≤ 80,000 words" },
      { label: "Progress", value: "Annual progress evaluation" },
      { label: "Format", value: "Traditional or thesis by publication" },
      { label: "Examination", value: "≥ 2 external examiners" },
    ],
    faqs: [
      { question: "How long is a Sydney PhD thesis?", answer: "Up to 80,000 words, excluding footnotes, references and appendices, unless your faculty specifies otherwise." },
    ],
  },
  yale: {
    seoTitle: `Yale PhD Dissertation Requirements & Timeline (${yr})`,
    seoDescription: "Yale GSAS dissertation prospectus, admission to candidacy, length expectations and submission rules summarised.",
    answer: "Yale GSAS sets no universal dissertation length. Students are admitted to candidacy after coursework, qualifying exams and an approved prospectus, typically by the end of year three, then submit the dissertation electronically for review by at least three readers.",
    rows: [
      { label: "Length", value: "Department-determined" },
      { label: "Candidacy", value: "By end of year 3 (prospectus approved)" },
      { label: "Readers", value: "Minimum 3" },
      { label: "Typical duration", value: "5–6 years" },
    ],
    faqs: [
      { question: "When is Yale PhD candidacy?", answer: "Usually by the end of the third year, after coursework, qualifying exams and approval of the dissertation prospectus." },
    ],
  },
  stanford: {
    seoTitle: `Stanford PhD Dissertation Requirements (${yr})`,
    seoDescription: "Stanford dissertation reading committee, oral exam, length norms and electronic submission summarised.",
    answer: "Stanford does not fix a dissertation word count. Doctoral candidates form a reading committee of at least three faculty, pass the University Oral Examination, and submit the dissertation electronically through Stanford's online submission system.",
    rows: [
      { label: "Length", value: "Department norms" },
      { label: "Reading committee", value: "≥ 3 faculty" },
      { label: "Oral exam", value: "University Oral Examination" },
      { label: "Submission", value: "Electronic" },
    ],
    faqs: [
      { question: "Does Stanford have a dissertation word limit?", answer: "No university-wide limit; expectations are set by your department and reading committee." },
    ],
  },
  melbourne: {
    seoTitle: `University of Melbourne PhD Thesis Word Limit (${yr})`,
    seoDescription: "Melbourne PhD thesis limit (80,000–100,000 words), confirmation milestone and examination rules.",
    answer: "A University of Melbourne PhD thesis is normally 80,000–100,000 words excluding bibliography and appendices. Candidates complete confirmation within the first 12 months and are examined by two external examiners.",
    rows: [
      { label: "PhD word limit", value: "80,000–100,000 words" },
      { label: "Confirmation", value: "Within 12 months" },
      { label: "Examination", value: "2 external examiners" },
    ],
    faqs: [
      { question: "What is the Melbourne PhD word limit?", answer: "Generally 80,000 to 100,000 words, excluding the bibliography and appendices." },
    ],
  },
};

export const getAnswerBox = (slug?: string) => (slug ? universityAnswerBoxes[slug] : undefined);
