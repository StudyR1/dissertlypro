import type { LongFormBlock, LongFormFaq } from "./LongFormSection";

export const indexLongForm: { blocks: LongFormBlock[]; faqs: LongFormFaq[] } = {
  blocks: [
    {
      heading: "Why postgraduate students choose DissertlyPro",
      body:
        "DissertlyPro is a research-coaching practice built specifically for Master's and PhD candidates who need rigorous, defensible academic work — not generic essay-mill output. Every project is led by a PhD-qualified expert in your discipline who acts as a methodological partner, helping you sharpen research questions, design defensible methodology, and produce chapters that hold up under examiner scrutiny.\n\nOur clients tend to come to us at three pivot points: when a proposal has been returned for major revisions, when data analysis stalls because a method does not fit the data, or when a viva is approaching and the argument structure still feels uncertain. In each case, our role is to bring senior research expertise to the table and to translate that expertise into work you can own, defend, and publish.",
    },
    {
      heading: "Five steps from first email to final submission",
      body:
        "1. Free 30-minute scoping call. You walk us through your topic, deadline, and what your supervisor has asked for. We tell you honestly whether we can help and at what scope.\n\n2. Written scoping document and expert match. Within 24 hours we send a research plan, milestone schedule, and the name and credentials of the PhD expert who will lead your project.\n\n3. Milestone drafting. Each milestone is delivered as a tracked-changes Word file with references in your required style and a written cover note explaining methodological decisions.\n\n4. Revision loops. You return inline comments; your expert revises within 48–72 hours. The cycle repeats until you sign off the milestone.\n\n5. Final QA and handover. The final draft passes Turnitin and AI-detection checks, is formatted to your university's submission template, and is delivered with a research handover document so you can defend every decision in a viva.",
    },
    {
      heading: "Built for confidentiality and academic integrity",
      body:
        "Confidentiality is non-negotiable. Your name, university, and topic are never disclosed externally, reused, or stored beyond the engagement. Files live on GDPR-compliant infrastructure, every expert signs an NDA, and we maintain a strict no-resale policy on every deliverable.\n\nWe also publish a clear academic integrity framework: we provide research coaching, model work, and methodology rationale — the same kind of structured guidance a methodology consultant or research tutor provides. We decline projects that would breach institutional honour codes, and we will always tell you when the right answer is to speak to your supervisor instead.",
    },
  ],
  faqs: [
    {
      question: "Who is DissertlyPro for?",
      answer:
        "Master's and PhD candidates worldwide who need senior research expertise — typically at proposal, methodology, analysis, or viva stages. We also support working professionals balancing part-time research with full-time roles.",
    },
    {
      question: "How quickly can I get matched with an expert?",
      answer:
        "Most clients receive a written scoping document and a named expert within 24 hours of the free consultation.",
    },
    {
      question: "Do you support every discipline?",
      answer:
        "We cover 50+ subjects across the social sciences, business, education, health and medical research, computing, and engineering. If we cannot staff a project to a high standard, we will tell you up front.",
    },
    {
      question: "Will the work pass Turnitin and AI detectors?",
      answer:
        "Yes — every deliverable is original, written by human PhD experts, and scanned with Turnitin-compatible tools and AI-content detectors before release.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "Pricing is milestone-based and quoted transparently in the scoping document. You only pay for the milestone you've approved, never upfront for the full project.",
    },
    {
      question: "Can I speak to my expert directly?",
      answer:
        "Yes. You're matched with one named PhD expert who handles your project end-to-end. You can message, schedule video calls, and request voice-note walkthroughs.",
    },
  ],
};

export const expertsLongForm: { blocks: LongFormBlock[]; faqs: LongFormFaq[]; bullets: { title: string; description: string }[] } = {
  blocks: [
    {
      heading: "How we vet every expert before they touch a dissertation",
      body:
        "Less than 4% of researchers who apply to write for DissertlyPro pass our vetting process. Every expert holds a doctorate from a recognised research institution, has published in peer-reviewed venues, and has supervised or examined at least one postgraduate research project. Beyond credentials, we test methodological depth (a written methodology brief), writing quality (an academic-prose sample edited by a senior reviewer), and ethics (a structured interview covering institutional honour codes, confidentiality, and the limits of research coaching).\n\nOnce onboarded, every expert is paired with a senior reviewer for the first three projects. We track milestone delivery rates, revision turnaround, and client satisfaction quarterly. Experts who fall below threshold are coached, reassigned, or removed.",
    },
    {
      heading: "Subject coverage by discipline cluster",
      body:
        "We staff projects across four broad clusters: (1) Business, finance, and management — including MBA, DBA, strategy, organisational behaviour, marketing, and quantitative finance. (2) Social sciences, education, and public policy — including qualitative, mixed-methods, and policy-evaluation research. (3) Health and medical research — including clinical research, public health, nursing, systematic reviews, and PRISMA-compliant methodology. (4) STEM, computing, and engineering — including data science, machine learning, computational methods, and applied engineering capstones.\n\nIf your topic sits at the intersection of two clusters, we pair a primary lead with a secondary reviewer so the methodological and disciplinary lenses are both covered.",
    },
  ],
  bullets: [
    { title: "PhD verified", description: "Doctorate from a recognised research institution with a publication record." },
    { title: "Supervision experience", description: "Has supervised or examined at least one postgraduate research project." },
    { title: "Ethics briefed", description: "Signed NDA, structured ethics interview, and institutional integrity training." },
    { title: "Quality reviewed", description: "First three projects paired with a senior reviewer; quarterly performance tracked." },
  ],
  faqs: [
    {
      question: "Can I choose my expert?",
      answer:
        "Yes. After the scoping call we propose one named expert and share their profile. If you'd prefer a different match — different subject angle, supervisory style, or research tradition — we re-match within 24 hours.",
    },
    {
      question: "What if my expert is unavailable mid-project?",
      answer:
        "Every project has a senior reviewer attached from day one. If your lead expert is unavailable, the senior reviewer takes over the milestone or coordinates a like-for-like replacement so your timeline is protected.",
    },
    {
      question: "Are experts based in my country?",
      answer:
        "We staff globally and can match you to experts familiar with UK, US, AU, CA, EU, or Middle-Eastern academic conventions on request. Citation style, spelling variant, and viva conventions are all calibrated to your university.",
    },
    {
      question: "Do experts use generative AI to draft my work?",
      answer:
        "No. Our policy prohibits using generative AI to draft client-facing work. Experts may use AI for literature triage or reference formatting, but every paragraph delivered to you is human-written and passes AI-content detection.",
    },
    {
      question: "Will my expert sign a confidentiality agreement specific to me?",
      answer:
        "Yes, on request. Our standard NDA covers your project by default, and we can countersign a bespoke confidentiality agreement supplied by you or your institution.",
    },
    {
      question: "How do you handle conflicts of interest?",
      answer:
        "Experts disclose institutional affiliations before assignment. We never pair an expert with a candidate from the same department or examination panel.",
    },
  ],
};

export const aboutLongForm: { blocks: LongFormBlock[]; faqs: LongFormFaq[] } = {
  blocks: [
    {
      heading: "Our methodology and ethics framework",
      body:
        "DissertlyPro operates as a research-coaching practice, not an essay mill. The distinction matters because it determines the kind of help we provide, the kind we decline, and how we structure deliverables so they help — rather than replace — your scholarly development.\n\nIn practice this means we provide model work, methodology rationale, structured feedback, and worked examples. You retain authorship, you control submissions, and you defend the work. We document every methodological decision in writing so you can explain it in a viva or to your supervisor.",
    },
    {
      heading: "Who we work with",
      body:
        "Three personas account for most of our work. The first is the early-stage candidate whose proposal has been returned for major revisions and who needs senior methodological input fast. The second is the mid-stage candidate stuck on data analysis — usually because the chosen method does not fit the data the field has produced. The third is the late-stage candidate preparing for viva, where the argument structure and committee-anticipation matter more than the prose.\n\nWe also support working professionals balancing part-time research with full-time roles, and international students navigating English-language conventions in UK, US, AU, or CA institutions.",
    },
    {
      heading: "A note from the founding team",
      body:
        "We built DissertlyPro after years of watching capable candidates fail not because they lacked intellect, but because their institutions could not provide the structured, individualised supervision the research process actually requires. Many universities now assign a single supervisor to dozens of students. Methodology training is often a single semester long. Viva preparation is largely self-organised.\n\nOur job is to fill that gap honestly — to bring senior research expertise into the room when it matters, and to help you produce work you are proud to own. We hold ourselves to the standards we ask of our experts: rigour, confidentiality, and a clear line on academic integrity.",
    },
  ],
  faqs: [
    {
      question: "Is DissertlyPro a registered business?",
      answer:
        "Yes. We operate as a registered company with audited financials, contractor-vetted experts, and GDPR-compliant data handling. Invoices and engagement letters are available on request.",
    },
    {
      question: "What is your stance on academic integrity?",
      answer:
        "We provide research coaching and model work. We decline projects that would breach institutional honour codes and we encourage you to declare the support you receive when your university policy requires it.",
    },
    {
      question: "How do you protect my data?",
      answer:
        "Files are stored on GDPR-compliant encrypted infrastructure. Every expert signs an NDA. We never sell, share, or republish your work, and we anonymise internal references.",
    },
    {
      question: "Where are you based?",
      answer:
        "We operate globally, with experts in the UK, US, AU, CA, and EU. The primary contact line is +1 (812) 690-5122 (phone and WhatsApp).",
    },
  ],
};

export const servicesLongForm: { blocks: LongFormBlock[]; faqs: LongFormFaq[] } = {
  blocks: [
    {
      heading: "A decision guide: which service fits which stage of your research",
      body:
        "Choosing the right service depends on the stage you are at, not the deliverable you think you need. Most candidates come to us asking for chapter-writing help when what they actually need is a methodology review or a literature-review restructure.\n\nIf your proposal has been returned for revisions, start with Dissertation Proposal Development. If your supervisor has signed off the proposal but you're unsure how to operationalise the method, start with Research Methodology. If you have data but the analysis chapter feels disconnected, start with Data Analysis. If a draft chapter exists but reads as descriptive rather than analytical, start with Editing & Proofreading at the substantive level. If you need an integrated literature review, start with Literature Reviews.",
    },
    {
      heading: "How services combine across a full project",
      body:
        "Most full-project engagements combine three or four services across milestones. A typical Master's project might be: Proposal Development → Literature Review → Methodology → Data Analysis → Editing. A typical PhD project might be: Proposal Development → Three iterative chapters with Methodology and Data Analysis support → Discussion drafting → Editing → Viva preparation.\n\nWe price each milestone separately so you can stop, start, or scale up at any point. Many clients begin with a single milestone — proposal or methodology — and expand the engagement once they see the quality of work.",
    },
  ],
  faqs: [
    {
      question: "How do I know which service to start with?",
      answer:
        "Book a free 30-minute consultation. We will assess your current draft, supervisor feedback, and deadline, and recommend the smallest service that unblocks you. We do not upsell.",
    },
    {
      question: "Can I combine services?",
      answer:
        "Yes. Most full-project engagements combine three or four services across milestones. Each milestone is priced and signed off independently.",
    },
    {
      question: "What citation styles do you support?",
      answer:
        "APA (6th and 7th), Harvard, Chicago (author-date and notes-bibliography), Vancouver, OSCOLA, MLA, IEEE, and custom university house styles.",
    },
    {
      question: "Can you work to my university's submission template?",
      answer:
        "Yes. Send the template and our expert will format the final draft to match — margins, heading hierarchy, table-of-contents conventions, and front-matter included.",
    },
    {
      question: "Do you support quantitative, qualitative and mixed methods?",
      answer:
        "Yes. We have experts in SPSS, R, Stata, NVivo, ATLAS.ti, MAXQDA, and Python-based analysis as well as qualitative coding traditions including grounded theory, IPA, and thematic analysis.",
    },
    {
      question: "How are revisions handled per service?",
      answer:
        "Every service includes unlimited revisions within the agreed scope of that milestone. Scope is defined in writing in the scoping document so revision requests are predictable, not arbitrary.",
    },
  ],
};
