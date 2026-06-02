import type { ServicePillarConfig } from "@/components/services/ServicePillarPage";

const baseProcess = [
  {
    title: "Free consultation & expert match",
    description:
      "Tell us your topic, deadline, and chapter scope. Within 24 hours we match you with a PhD-qualified expert in your subject area.",
  },
  {
    title: "Scoping document & milestones",
    description:
      "Your expert returns a written scoping document — research questions to refine, deliverables, citation style, and a chapter-by-chapter milestone schedule.",
  },
  {
    title: "Iterative drafting with feedback loops",
    description:
      "You receive drafts at each milestone. Every chapter goes through expert self-review plus a senior reviewer pass before it reaches you.",
  },
  {
    title: "Revisions until you sign off",
    description:
      "Unlimited revisions within scope. Your expert addresses every comment in writing so you can track every change made.",
  },
  {
    title: "Final QA, plagiarism scan & handover",
    description:
      "Final draft is checked against Turnitin/iThenticate, formatted to your university's submission template, and delivered with a written research handover.",
  },
];

const baseDeliverables = [
  "Direct communication with a named PhD-qualified expert",
  "Chapter drafts with tracked changes and a written review note",
  "Originality report (Turnitin-compatible)",
  "Reference list in your required style (APA, Harvard, Chicago, Vancouver, OSCOLA)",
  "Methodology rationale you can defend in a viva",
  "Unlimited revisions within the agreed scope",
  "Editable source files (.docx + reference manager export)",
  "Confidentiality guarantee backed by GDPR-compliant systems",
];

const baseRelated = [
  { label: "Dissertation writing services (overview)", href: "/dissertation-writing-services" },
  { label: "Research methodology support", href: "/services/methodology" },
  { label: "Data analysis services", href: "/services/data-analysis" },
  { label: "Literature review structuring", href: "/services/literature-review" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free consultation", href: "/consultation" },
];

const sharedFaqs = [
  {
    question: "Will my dissertation pass Turnitin and other plagiarism checks?",
    answer:
      "Yes. Every deliverable is original, written from scratch by your assigned expert, and scanned with Turnitin-compatible tools before release. We share the originality report with you so you can see the similarity score (typically under 8%) before submission. The work consistently passes Turnitin, iThenticate, and SafeAssign at major UK, US, AU and CA institutions.",
  },
  {
    question: "Is my project confidential? What about my personal data?",
    answer:
      "Yes — confidentiality is absolute. Your name, university, project topic and identifying details are never shared, sold, or published. We operate on GDPR-compliant infrastructure with encrypted file storage, signed expert NDAs, anonymised internal references, and a strict no-resale policy on every deliverable. You can also use a pseudonym throughout the engagement if you prefer.",
  },
  {
    question: "Can my supervisor or university detect that I used a writing service?",
    answer:
      "No. The work is delivered as Word source files with clean metadata, no watermarks, and no traceable identifiers. We do not retain rights to your deliverable, publish it anywhere, or reuse it for other students — so it does not appear in any database that Turnitin, iThenticate, or AI-content detectors index. Because the research is original and you control all submissions, there is nothing for institutional systems to flag.",
  },
  {
    question: "Will the work trigger AI-content detectors like Turnitin AI or GPTZero?",
    answer:
      "No. All writing is produced by human PhD experts, not generative AI. On request, we run the final draft through Turnitin AI and GPTZero before delivery and share the report. If any section scores above 5% AI-likelihood, your expert rewrites it at no charge.",
  },
  {
    question: "Is using a dissertation writing service ethical?",
    answer:
      "Used as research coaching and structured guidance — the same way a tutor or methodology consultant supports candidates — it is fully ethical. Our experts provide model work, methodology rationale, and iterative feedback that helps you develop your own scholarship. We publish a clear academic integrity policy on our ethics page and decline projects that would breach institutional honour codes.",
  },
  {
    question: "Can I speak directly to my expert?",
    answer:
      "Yes. You're matched with one named PhD-qualified expert who handles your project end-to-end. You can message them through the portal, schedule video calls, and request voice-note walkthroughs of any chapter or methodology decision.",
  },
  {
    question: "What if I'm not happy with a draft?",
    answer:
      "You get unlimited revisions within the agreed scope. If you'd prefer a different expert at any point, we will re-match you within 24 hours at no additional cost. Refunds are available under our money-back policy if we cannot deliver on a milestone.",
  },
  {
    question: "How does the assignment and revision process actually work?",
    answer:
      "After your free consultation, we match you with a named expert within 24 hours and send a written scoping document. Each milestone is delivered as a tracked-changes Word file with a written cover note. You review, return inline comments, and your expert returns the revised draft — typically within 48–72 hours. The cycle repeats until you sign off the milestone.",
  },
  {
    question: "How is Master's support different from PhD support?",
    answer:
      "Master's projects focus on demonstrating mastery of an established literature with a tightly scoped empirical or applied study (10,000–25,000 words). PhD projects require an original theoretical or empirical contribution, defensible methodology under examiner scrutiny, and 60,000–100,000 words. Pricing, timelines and expert seniority differ accordingly — we cost each project transparently after scoping.",
  },
  {
    question: "How are payments and milestones structured?",
    answer:
      "You pay by milestone, never upfront for the full project. Each milestone (e.g. chapter, methodology, analysis) has a fixed price agreed in the scoping document. Payments are processed through PayPal or major card networks with full buyer protection. If a milestone is rejected after revision, the payment is refundable under our money-back guarantee.",
  },
  {
    question: "How long does it take?",
    answer:
      "A single chapter typically takes 7–14 days. A full Master's dissertation runs 4–8 weeks; a PhD project runs 8–16 weeks depending on data collection and methodology. Urgent timelines are accommodated where the work allows for proper rigour.",
  },
];

// -------------------- PhD --------------------
export const phdConfig: ServicePillarConfig = {
  path: "/phd-dissertation-writing-services",
  h1: "PhD Dissertation Writing Services",
  lead:
    "End-to-end doctoral dissertation support — from proposal to viva — delivered by PhD-qualified experts who have supervised, examined, and published in your field.",
  seoTitle: "PhD Dissertation Writing Services",
  seoDescription:
    "Expert PhD dissertation writing services for doctoral candidates. Proposal, methodology, data analysis, chapters & viva support from PhD-qualified specialists.",
  breadcrumbLabel: "PhD Dissertation Writing Services",
  keywords: [
    "phd dissertation writing services",
    "phd dissertation writing service",
    "best phd dissertation writing services",
    "doctoral dissertation writing services",
    "phd thesis writing help",
  ],
  tldr:
    "Our PhD dissertation writing services match doctoral candidates with PhD-qualified experts in their exact subfield. We support every stage — proposal defence, systematic literature review, methodology design, primary data collection support, statistical or qualitative analysis, chapter drafting, editing, and viva preparation. Every deliverable is original, supervisor-ready, and built around a research narrative you can defend.",
  whoFor: [
    "Doctoral candidates writing up after data collection",
    "PhD students stuck mid-chapter and behind schedule",
    "Part-time and working-professional PhDs balancing job demands",
    "International PhD candidates writing in their second language",
    "Researchers preparing for upgrade, transfer, or viva voce examinations",
    "Doctoral candidates whose supervisor capacity is limited",
  ],
  whatsIncluded: [
    {
      title: "Proposal & upgrade documents",
      description:
        "Research proposal, upgrade report, or transfer document framed around a defensible contribution to knowledge.",
    },
    {
      title: "Systematic literature reviews",
      description:
        "PRISMA-style searches, thematic synthesis, theoretical framework construction, and gap mapping.",
    },
    {
      title: "Methodology chapters",
      description:
        "Quantitative, qualitative, or mixed-methods designs with paradigm justification, ethics rationale, and replicable protocols.",
    },
    {
      title: "Data analysis",
      description:
        "SPSS, R, STATA, SEM/AMOS, NVivo, MAXQDA, ATLAS.ti — and the written interpretation that turns output into argument.",
    },
    {
      title: "Findings & discussion",
      description:
        "Theorised interpretation of results, contribution claims, and triangulation against your literature.",
    },
    {
      title: "Viva preparation",
      description:
        "Mock viva sessions, anticipated-question packs, and corrections support after your examination.",
    },
  ],
  process: baseProcess,
  deliverables: baseDeliverables,
  sections: [
    {
      heading: "What 'PhD-level' actually means in our work",
      body:
        "A PhD dissertation isn't a longer Master's thesis. Examiners want to see a defensible original contribution, a methodology section that another researcher could replicate, and a discussion chapter that argues — not just reports. Our PhD writers are not generic academic writers. Each one holds a doctorate in the field they support and has either supervised candidates, examined vivas, or published peer-reviewed work in your area.\n\nThat matters in three concrete ways. First, your scoping conversation is with someone who already understands the landscape, so we avoid weeks of orientation. Second, methodology decisions are framed against the dominant paradigms in your discipline — not lifted from a textbook. Third, when you reach the discussion chapter, you have a collaborator who can push back on weak claims before an examiner does.",
    },
    {
      heading: "How our PhD dissertation writing service is structured",
      body:
        "Every PhD engagement begins with a written scoping document. It captures the research question, the contribution you intend to claim, the methodology, the chapter outline, and the milestone schedule. Both you and your expert sign off before any chapter work begins. This avoids the most common failure mode in PhD support — drift between what the candidate needs and what an external writer assumes.\n\nFrom there, work moves chapter by chapter. Each draft passes through your expert's self-review and a senior reviewer in the same discipline before it reaches you. You receive a tracked-changes version, a clean version, and a written rationale note so you can answer the inevitable supervisor question: 'why did you frame it this way?'\n\nWe also build in viva-readiness from the start. Methodology choices are documented as they're made so that, six months later, you can defend each decision with the same clarity you had when it was taken.",
    },
    {
      heading: "Doctoral specialisations we cover",
      body:
        "Business & Management (DBA and PhD), Education, Nursing & Public Health, Psychology, Engineering, Computer Science, Law, Sociology, Political Science, Economics, Environmental Science, Pharmacy, Built Environment, and Healthcare Policy. For interdisciplinary projects we assemble a small expert team — typically a methodologist plus a subject specialist — so neither side of your research is under-served.",
    },
    {
      heading: "Working with supervisors and examiners",
      body:
        "Our work is designed to fit alongside your supervisor's input, not replace it. You stay in control of every supervisor-facing document. We brief you on the reasoning behind every chapter so the conversation with your supervisor sounds like yours — because it is. For viva preparation we run mock examinations with a second PhD-qualified examiner who hasn't seen your draft, so the questions are genuinely cold.",
    },
  ],
  pricingBlurb:
    "PhD support is quoted per chapter or per phase. Indicative ranges: literature review £600–£1,800, methodology chapter £500–£1,400, full data analysis £700–£2,500, full dissertation support from £4,500. Flexible milestone-based payment plans are available. Get a precise quote in your free consultation.",
  faqs: [
    {
      question: "Do you write a PhD dissertation from scratch?",
      answer:
        "We provide model chapters, methodology design, data analysis, and editing with you as the principal researcher. The work is original, written specifically for your project, and structured so you can defend every decision in a viva. We do not sell pre-written dissertations.",
    },
    {
      question: "Can you help with my upgrade or transfer report?",
      answer:
        "Yes. Upgrade and transfer reports are a frequent entry point — typically a 6,000–12,000 word document covering research question, literature, methodology, pilot findings, and remaining workplan. We've supported hundreds of successful upgrades across UK, US, and Australian doctoral programmes.",
    },
    {
      question: "Will you support me through the viva?",
      answer:
        "Yes. We run mock vivas, build anticipated-question packs based on your specific examiners' published work, and provide corrections support post-viva if examiners ask for major or minor amendments.",
    },
    {
      question: "How do you match the right expert?",
      answer:
        "Match is by subfield, methodology, and writing style — not just broad discipline. We share two candidate experts' redacted profiles so you can pick. If chemistry isn't right after week one, we re-match free of charge.",
    },
    ...sharedFaqs,
  ],
  related: baseRelated,
};

// -------------------- Masters --------------------
export const mastersConfig: ServicePillarConfig = {
  path: "/masters-dissertation-writing-services",
  h1: "Master's Dissertation Writing Services",
  lead:
    "Specialist Master's dissertation writing services — MSc, MA, MBA, LLM and MRes — delivered by experts who have examined and supervised at postgraduate level.",
  seoTitle: "Master's Dissertation Writing Services",
  seoDescription:
    "Master's dissertation writing services for MSc, MA, MBA & LLM students. Proposal, methodology, analysis, and chapter support from PhD-qualified experts.",
  breadcrumbLabel: "Master's Dissertation Writing Services",
  keywords: [
    "masters dissertation writing services",
    "master dissertation writing services",
    "ma dissertation writing service",
    "thesis and dissertation writing services",
  ],
  tldr:
    "Master's dissertations have to clear a high bar in a short window — typically 12,000–20,000 words in 8–14 weeks. Our Master's dissertation writing services give you a PhD-qualified expert who has examined work at the same level, a structured chapter plan, and turnaround speeds calibrated to your submission deadline. We cover MSc, MA, MBA, MRes and LLM dissertations across every major discipline.",
  whoFor: [
    "MSc and MA candidates working alongside coursework or placements",
    "MBA candidates needing dissertation support around a full-time job",
    "MRes students producing dissertation-length empirical projects",
    "LLM candidates writing doctrinal or socio-legal dissertations",
    "Master's students whose first language isn't English",
    "Distance-learning Master's candidates with limited supervisor contact",
  ],
  whatsIncluded: [
    {
      title: "Proposal & topic refinement",
      description:
        "Help moving from a vague interest to a researchable, defensible Master's question your supervisor will sign off.",
    },
    {
      title: "Literature review",
      description:
        "Thematic or systematic review with critical synthesis — not annotated summaries.",
    },
    {
      title: "Methodology section",
      description:
        "Quantitative survey design, qualitative interview protocols, or mixed-methods framing with ethics application support.",
    },
    {
      title: "Data analysis",
      description:
        "SPSS, R, Excel, NVivo, thematic coding — plus the interpretation that wins marks.",
    },
    {
      title: "Discussion & conclusion",
      description:
        "Findings argued against your literature, with clearly articulated implications and limitations.",
    },
    {
      title: "Editing & formatting",
      description:
        "Polish to your university's submission template, including reference management in your required style.",
    },
  ],
  process: baseProcess,
  deliverables: baseDeliverables,
  sections: [
    {
      heading: "Why Master's dissertations fail (and how we prevent it)",
      body:
        "The most common reason Master's dissertations under-perform isn't the writing — it's the question. A research question that's too broad ('the impact of social media on consumer behaviour') generates a dissertation that nobody, including the candidate, can defend. We spend the first session refining your question against the time and data you actually have. Often this means narrowing scope by 60–80%. The result is a tighter, sharper, higher-grading piece of work that you can finish on time.\n\nThe second failure mode is methodology that doesn't match the question. A quantitative survey of 47 respondents will not test a theoretical model. A thematic analysis of three interviews won't generate generalisable findings. Our experts re-frame methodology so the design and the claim match — examiners notice immediately when they don't.",
    },
    {
      heading: "How Master's dissertation support is paced",
      body:
        "Master's deadlines are tight, so we work in two-week sprints. Week 1 of each sprint delivers a working draft; week 2 incorporates your feedback and supervisor comments. This keeps you submitting work to your supervisor at the rhythm they expect and avoids the disaster scenario of presenting a near-final draft with three weeks to deadline.\n\nFor distance-learning and part-time Master's candidates we run async sessions across time zones, with detailed written feedback so nothing depends on real-time availability.",
    },
    {
      heading: "Subjects we cover at Master's level",
      body:
        "Business, Finance, Marketing, HRM, International Business, Project Management, Education, Public Health, Nursing, Social Work, Psychology, Law (LLM), Politics & IR, International Development, Sociology, Criminology, Engineering, Computer Science, Data Science, Healthcare Management, Sustainability, Sports Science, Architecture, Media & Communications. If your subject isn't listed, send us your brief — we'll confirm fit within 24 hours.",
    },
    {
      heading: "Working with your university's marking scheme",
      body:
        "Different universities mark very differently. A Russell Group MSc rubric weights critical analysis heavily; some MBA programmes weight practical implications. We ask for your marking rubric upfront and structure every chapter to maximise marks against the criteria you'll actually be assessed on, rather than a generic 'good dissertation' template.",
    },
  ],
  pricingBlurb:
    "Master's dissertation support is priced per chapter or per word, depending on scope. Indicative: literature review £400–£900, methodology £300–£700, full 15,000-word dissertation support from £2,400. Two-payment milestone plans available.",
  faqs: [
    {
      question: "Can you help with just my literature review or methodology chapter?",
      answer:
        "Yes. Many Master's students only need targeted support on the chapter they're stuck on. Standalone chapter work is fully scoped, has its own milestone schedule, and includes integration notes so the chapter sits cleanly inside your wider dissertation.",
    },
    {
      question: "I'm a non-native English speaker. Can you keep my voice?",
      answer:
        "Yes. Our editors retain your argument structure and academic voice while bringing the language up to publication standard. We never replace your phrasing with generic 'academic English' that strips out your reasoning.",
    },
    {
      question: "How fast can you deliver a Master's dissertation chapter?",
      answer:
        "A standard literature review or methodology chapter takes 7–10 days. Express turnaround in 3–5 days is available subject to expert capacity and may carry a rush surcharge.",
    },
    {
      question: "Do you cover MBA dissertations specifically?",
      answer:
        "Yes. MBA dissertations have their own conventions — applied focus, executive summary, recommendations to a named organisation. Our MBA experts hold DBAs or MBA-plus-PhD combinations and have supervised at AACSB-accredited schools. See our MBA dissertation writing services page for the full breakdown.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "MBA dissertation writing services", href: "/mba-dissertation-writing-services" },
    { label: "PhD dissertation writing services", href: "/phd-dissertation-writing-services" },
    { label: "Dissertation proposal writing services", href: "/dissertation-proposal-writing-services" },
    { label: "Online dissertation writing services", href: "/online-dissertation-writing-services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dissertation writing services (overview)", href: "/dissertation-writing-services" },
  ],
};

// -------------------- MBA --------------------
export const mbaConfig: ServicePillarConfig = {
  path: "/mba-dissertation-writing-services",
  h1: "MBA Dissertation Writing Services",
  lead:
    "Practitioner-grade MBA dissertation writing services for working professionals — strategy, finance, marketing, HRM and operations — by DBA and MBA-qualified experts.",
  seoTitle: "MBA Dissertation Writing Services",
  seoDescription:
    "MBA dissertation writing services for executive, full-time and online MBA candidates. Strategy, finance, marketing & HRM support from DBA-qualified experts.",
  breadcrumbLabel: "MBA Dissertation Writing Services",
  keywords: [
    "mba dissertation writing services",
    "mba dissertation help",
    "executive mba dissertation",
  ],
  tldr:
    "MBA dissertations are judged on practical contribution as much as academic rigour. Our MBA dissertation writing services pair you with a DBA or MBA-plus-PhD expert who understands the applied focus, case-study traditions, and executive-summary conventions of business school examiners. We support full-time, executive, and online MBA candidates across AACSB, EQUIS, and AMBA-accredited programmes.",
  whoFor: [
    "Executive MBA candidates writing alongside a full-time leadership role",
    "Full-time MBA candidates with a tight summer dissertation window",
    "Online and distance-learning MBA candidates with light supervisor contact",
    "MBA students building a dissertation around their own organisation",
    "Candidates whose dissertation will inform a real strategy decision",
  ],
  whatsIncluded: [
    {
      title: "Applied research questions",
      description:
        "Questions framed against a named organisation or sector — not generic management literature.",
    },
    {
      title: "Business-school methodology",
      description:
        "Case-study, action research, mixed-methods, and survey designs appropriate to MBA examiners.",
    },
    {
      title: "Strategic frameworks",
      description:
        "Porter, RBV, dynamic capabilities, Blue Ocean, Kotter — applied, not just described.",
    },
    {
      title: "Financial & quantitative analysis",
      description:
        "Valuation, NPV, regression on operational data, balanced-scorecard modelling.",
    },
    {
      title: "Executive summary & recommendations",
      description:
        "Decision-maker-ready summary and a recommendations chapter your sponsor can act on.",
    },
    {
      title: "Confidential organisation data handling",
      description:
        "NDAs as standard. Sensitive financial and HR data handled under GDPR-compliant protocols.",
    },
  ],
  process: baseProcess,
  deliverables: baseDeliverables,
  sections: [
    {
      heading: "Why MBA dissertations need MBA-trained experts",
      body:
        "An MBA dissertation isn't a management textbook chapter. Examiners — many of whom are practising consultants, ex-executives, or industry-engaged academics — want to see a dissertation that would survive a real-world board conversation. That means a clear problem, a defensible methodology, evidence that respects the constraints of an actual organisation, and a recommendations chapter with implementation realism.\n\nGeneric academic writers miss this register. Our MBA dissertation writing service uses experts who hold a DBA, an MBA-plus-PhD, or have taught on accredited MBA programmes. They write in the voice the examiner expects.",
    },
    {
      heading: "Working with your sponsor organisation",
      body:
        "Many MBA dissertations are built around the candidate's own employer or a partner organisation. That changes the support model. We help you frame an organisation-grounded research question, negotiate access ethically, draft NDAs and ethics approval forms, and design data collection that respects commercial sensitivity. Your final dissertation can be shared with your sponsor in a redacted or executive-summary form so the work has business value as well as academic value.",
    },
    {
      heading: "MBA specialisations we support",
      body:
        "Strategy, Leadership & Change, Finance & Investment, Marketing & Brand, HRM & Talent, Operations & Supply Chain, Innovation & Entrepreneurship, International Business, Healthcare Management, Sports Management, Sustainability & ESG, Digital Transformation, FinTech, and Family Business. Cross-specialisation projects (e.g. ESG investing, HR analytics) are matched to a two-expert team.",
    },
    {
      heading: "Pace for working executives",
      body:
        "Executive and part-time MBA candidates juggle dissertation work against a full-time role. We deliver in two-week sprints with async written feedback, schedule calls at evenings and weekends, and accept voice-note briefings so you can move the project forward in the cracks of a busy week.",
    },
  ],
  pricingBlurb:
    "MBA dissertation support is typically priced per chapter or per phase. Indicative: full 15,000-word MBA dissertation support £2,800–£4,800; standalone chapters from £350. Milestone payment plans align with your submission schedule.",
  faqs: [
    {
      question: "Can you sign an NDA before I share organisation data?",
      answer:
        "Yes. We sign mutual NDAs as standard before any organisation data is shared. All data is handled under GDPR-compliant protocols and removed from our systems on project completion if you request.",
    },
    {
      question: "My MBA dissertation includes financial modelling. Can you help?",
      answer:
        "Yes. Our finance experts handle DCF valuation, scenario modelling, regression on operational KPIs, and balanced-scorecard analysis. Models are delivered in Excel with documented assumptions you can defend.",
    },
    {
      question: "Do you write case-study MBA dissertations?",
      answer:
        "Yes. Single-case, multiple-case (Yin), and embedded case-study designs are all in scope. We help with case selection rationale, within-case and cross-case analysis, and methodological defence of generalisability claims.",
    },
    {
      question: "I'm on an online MBA with light supervision. Can you fill the gap?",
      answer:
        "Yes — this is a common reason candidates come to us. Our expert acts as your week-to-week methodology and writing partner alongside whatever supervisor contact your programme provides.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Master's dissertation writing services", href: "/masters-dissertation-writing-services" },
    { label: "Cheap dissertation writing services", href: "/cheap-dissertation-writing-services" },
    { label: "Online dissertation writing services", href: "/online-dissertation-writing-services" },
    { label: "Capstone & dissertation writing services", href: "/capstone-dissertation-writing-services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dissertation writing services (overview)", href: "/dissertation-writing-services" },
  ],
};

// -------------------- Medical --------------------
export const medicalConfig: ServicePillarConfig = {
  path: "/medical-dissertation-writing-services",
  h1: "Medical Dissertation Writing Services",
  lead:
    "Specialist medical and healthcare dissertation writing services — clinical research, public health, nursing, pharmacy and health policy — by clinically-trained PhD experts.",
  seoTitle: "Medical Dissertation Writing Services",
  seoDescription:
    "Medical dissertation writing services for clinical, nursing, public health and pharmacy candidates. Systematic reviews, IRB protocols and statistical analysis.",
  breadcrumbLabel: "Medical Dissertation Writing Services",
  keywords: [
    "medical dissertation writing services",
    "nursing dissertation help",
    "public health dissertation",
    "clinical research dissertation",
  ],
  tldr:
    "Medical and healthcare dissertations sit under stricter methodological and ethical scrutiny than most disciplines. Our medical dissertation writing services match you with experts who hold doctorates in clinical research, public health, nursing science, pharmacy, or health policy — and who understand IRB/ethics committee expectations, PRISMA reporting standards, and clinical statistical conventions.",
  whoFor: [
    "MD, DNP and pharmacy doctoral candidates",
    "MSc Nursing, Public Health and Midwifery dissertation candidates",
    "MPH candidates working on systematic reviews or secondary data analyses",
    "Clinical residents writing up service evaluations or audits",
    "Health policy and health economics dissertation candidates",
  ],
  whatsIncluded: [
    {
      title: "Systematic & scoping reviews",
      description:
        "PRISMA-compliant search strategies, risk-of-bias assessment, narrative or meta-analytic synthesis.",
    },
    {
      title: "Ethics & IRB documentation",
      description:
        "Protocol writing, consent forms, ethics committee responses, and risk assessments.",
    },
    {
      title: "Clinical statistics",
      description:
        "Survival analysis, logistic regression, multilevel modelling, and reporting to CONSORT/STROBE standards.",
    },
    {
      title: "Qualitative health research",
      description:
        "Interview protocols, thematic and framework analysis, and Lincoln-Guba trustworthiness criteria.",
    },
    {
      title: "Service evaluation & audit write-ups",
      description:
        "QI methodology, run charts, PDSA cycle reporting, and SQUIRE-aligned write-ups.",
    },
    {
      title: "Health policy analysis",
      description:
        "Comparative health systems, cost-effectiveness modelling, and stakeholder analysis frameworks.",
    },
  ],
  process: baseProcess,
  deliverables: baseDeliverables,
  sections: [
    {
      heading: "Methodological rigour expected in medical dissertations",
      body:
        "Examiners in medical and healthcare disciplines apply tighter methodological standards than most other fields. Systematic reviews are expected to follow PRISMA. Quantitative clinical studies are expected to report to CONSORT (trials) or STROBE (observational). Qualitative studies need trustworthiness criteria, not just thematic codes. Service evaluations need SQUIRE-aligned write-ups. Our medical-discipline experts are familiar with these reporting standards as a baseline — not as something to be looked up after the draft is written.",
    },
    {
      heading: "Ethics committee and IRB navigation",
      body:
        "Many medical dissertations stall at the ethics application. Our experts have written and responded to hundreds of HRA, NHS REC, university IRB, and international ethics applications. We help you draft the protocol, consent forms, participant information sheets, risk assessments, and responses to committee feedback. We do not submit on your behalf — you remain the named applicant — but we make the document defensible the first time.",
    },
    {
      heading: "Disciplines we cover in medical & healthcare",
      body:
        "Clinical Medicine, Nursing Science, Midwifery, Public Health & Epidemiology, Pharmacy & Pharmacology, Allied Health Professions (physiotherapy, occupational therapy, dietetics), Mental Health & Psychiatry, Health Economics, Health Policy, Healthcare Management, Global Health, and Veterinary Medicine.",
    },
    {
      heading: "Data and confidentiality",
      body:
        "All patient-related data is handled under HIPAA (US), GDPR (EU/UK), and equivalent international standards. We work only with anonymised or pseudonymised datasets, sign DPIA-aligned agreements, and use encrypted file transfer for any sensitive material. We will not handle identifiable patient data under any circumstances.",
    },
  ],
  pricingBlurb:
    "Medical dissertation support is quoted per chapter or per phase due to methodological complexity. Indicative: full systematic review £900–£2,400, clinical statistical analysis £600–£1,800, full Master's dissertation support from £2,800.",
  faqs: [
    {
      question: "Can you run a PRISMA-compliant systematic review for me?",
      answer:
        "Yes. We support every PRISMA stage: search strategy development, database selection, screening (with second-reviewer support where required), data extraction, risk-of-bias assessment, and synthesis. You receive the full PRISMA flow diagram and all working files.",
    },
    {
      question: "Do you handle clinical trial statistical analysis?",
      answer:
        "Yes. Our biostatisticians handle survival analysis, mixed-effects modelling, propensity matching, sensitivity analysis, and CONSORT-aligned reporting. SPSS, R, Stata, and SAS are all in scope.",
    },
    {
      question: "Can you help with ethics committee revisions?",
      answer:
        "Yes. Drafting responses to ethics committee feedback is a common entry point. We help you respond point-by-point so the second submission lands cleanly.",
    },
    {
      question: "Will you handle identifiable patient data?",
      answer:
        "No. We work only with anonymised or pseudonymised data. We will not accept identifiable patient information under any circumstances.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "PhD dissertation writing services", href: "/phd-dissertation-writing-services" },
    { label: "Master's dissertation writing services", href: "/masters-dissertation-writing-services" },
    { label: "Dissertation proposal writing services", href: "/dissertation-proposal-writing-services" },
    { label: "Online dissertation writing services", href: "/online-dissertation-writing-services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dissertation writing services (overview)", href: "/dissertation-writing-services" },
  ],
};

// -------------------- Cheap --------------------
export const cheapConfig: ServicePillarConfig = {
  path: "/cheap-dissertation-writing-services",
  h1: "Cheap Dissertation Writing Services (Without Cutting Corners)",
  lead:
    "Affordable dissertation writing services that keep PhD-qualified experts in the loop. Transparent pricing, milestone payments, and the same quality controls as our premium tier.",
  seoTitle: "Cheap Dissertation Writing Services",
  seoDescription:
    "Affordable dissertation writing services with PhD-qualified experts, transparent pricing & milestone payments. Cheap doesn't mean cutting corners on quality.",
  breadcrumbLabel: "Cheap Dissertation Writing Services",
  keywords: [
    "cheap dissertation writing services",
    "cheap dissertation writing services online",
    "dissertation writing services cost",
    "affordable dissertation writing",
  ],
  tldr:
    "There is a real difference between 'cheap' and 'low-quality'. We keep dissertation prices affordable through tight scoping, milestone-based payments, chapter-by-chapter purchasing, and a fixed expert match — not by hiring undergraduates to write doctoral work. Most students who come for our cheap dissertation writing services save 30–50% versus standard agency pricing without losing quality controls.",
  whoFor: [
    "Self-funded Master's and PhD candidates on tight budgets",
    "Students who only need targeted help on specific chapters",
    "International students managing currency-sensitive budgets",
    "Working professionals paying for their own postgraduate study",
    "Candidates who want to pay milestone-by-milestone rather than upfront",
  ],
  whatsIncluded: [
    {
      title: "Per-chapter pricing",
      description:
        "Buy only the chapters you need help with — not a forced full-dissertation package.",
    },
    {
      title: "Milestone payments",
      description:
        "Split your project into 3–5 payments tied to deliverables. Nothing upfront for the full amount.",
    },
    {
      title: "Same PhD experts",
      description:
        "We use the same expert pool as our premium tier. The savings come from scoping, not from downgraded talent.",
    },
    {
      title: "Tight scoping",
      description:
        "We strip out work you don't need — no padding the brief to inflate the invoice.",
    },
    {
      title: "Free consultation",
      description:
        "A 30-minute consultation to see if your scope genuinely fits the affordable tier before you commit.",
    },
    {
      title: "Unlimited in-scope revisions",
      description:
        "Lower price doesn't mean fewer revisions. Same revision policy as our premium tier.",
    },
  ],
  process: baseProcess,
  deliverables: baseDeliverables,
  sections: [
    {
      heading: "How we keep dissertation writing services affordable",
      body:
        "The dissertation writing market is full of two extremes: predatory low-cost sites that subcontract to under-qualified writers, and premium agencies that charge four-figure deposits before any work begins. We sit deliberately in the middle. Our savings come from operational decisions, not quality compromises.\n\nFirst, we scope tightly. Most students come to us asking for full-dissertation packages when they actually only need help on the literature review and methodology. We say so. Buying only what you need is the single biggest cost saver. Second, we use milestone payments — you pay in 3–5 stages tied to deliverables, so cashflow isn't a barrier. Third, we keep the same expert pool across all price tiers. The expert writing your affordable chapter is the same calibre as the one writing a premium client's full dissertation.",
    },
    {
      heading: "What 'cheap' should never mean",
      body:
        "If a dissertation writing service is significantly cheaper than ours, you should ask three questions. Who actually writes the work? Many low-cost sites quietly subcontract to undergraduates or non-native English speakers without postgraduate experience. Does the price include revisions? Many cheap services charge per revision, so the headline price triples in practice. Is there a refund policy? Genuinely cheap services often have no refund mechanism because every refunded order breaks their margins.\n\nOur cheap dissertation writing service has none of those compromises. PhD-qualified experts only. Unlimited in-scope revisions included. Money-back guarantee if we miss a milestone we committed to.",
    },
    {
      heading: "Indicative cost ranges",
      body:
        "Literature review (3,000–5,000 words): £350–£700. Methodology chapter (2,500–4,000 words): £300–£600. Data analysis with written interpretation: £400–£1,200 depending on complexity. Full Master's dissertation support (15,000 words, end-to-end): £2,200–£3,000. PhD chapters from £450. Pricing varies by deadline urgency, methodology complexity, and subject area. Get a precise quote in your free consultation — quotes are written, line-itemised, and valid for 14 days.",
    },
    {
      heading: "Payment options for budget-sensitive students",
      body:
        "We accept milestone payments (3–5 instalments tied to deliverables), monthly payment plans for long PhD engagements, and student-friendly methods including Wise, PayPal, and most major debit cards. International students can pay in their local currency to avoid double conversion fees. There are no setup fees or hidden charges on any payment plan.",
    },
  ],
  pricingBlurb:
    "Affordable tier: from £350 per chapter, milestone payment plans, no upfront full-cost deposit, same PhD-qualified expert pool as our premium service. Get a written line-itemised quote in your free consultation.",
  faqs: [
    {
      question: "Is cheap dissertation writing trustworthy?",
      answer:
        "It can be — if the service is transparent about who writes the work, includes revisions in the price, and offers a refund mechanism. Cheap that means 'lower scope at same quality' is fine. Cheap that means 'same scope at lower quality' usually means an undergraduate is writing your doctoral work. Our affordable tier sits in the first category.",
    },
    {
      question: "How much do dissertation writing services cost on average?",
      answer:
        "Full Master's dissertation support typically ranges from £1,800 to £4,500 across the UK and US market. Full PhD support typically ranges from £4,500 to £12,000. Standalone chapters run £300–£1,200. Anything significantly below these ranges should prompt due-diligence questions about who is doing the work.",
    },
    {
      question: "Can I pay in instalments?",
      answer:
        "Yes. Standard plan splits the cost across 3–5 milestone payments tied to deliverables. No fee for instalment plans. Longer PhD plans can be split into monthly payments aligned with your stipend or income.",
    },
    {
      question: "Will using a cheaper service hurt my grade?",
      answer:
        "Not if the scope and the expert pool are the same as the premium tier — which is the case with our affordable service. The savings come from buying only the work you need, not from compromising on who writes it.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Online dissertation writing services", href: "/online-dissertation-writing-services" },
    { label: "Master's dissertation writing services", href: "/masters-dissertation-writing-services" },
    { label: "Dissertation proposal writing services", href: "/dissertation-proposal-writing-services" },
    { label: "Dissertation writing services reviews", href: "/dissertation-writing-services-reviews" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dissertation writing services (overview)", href: "/dissertation-writing-services" },
  ],
};

// -------------------- Reviews --------------------
export const reviewsConfig: ServicePillarConfig = {
  path: "/dissertation-writing-services-reviews",
  h1: "Dissertation Writing Services Reviews: How to Read Them Properly",
  lead:
    "Most dissertation-services 'review' sites are paid placements. This guide explains how to read reviews honestly — and what verified DissertlyPro clients consistently say about our work.",
  seoTitle: "Dissertation Writing Services Reviews",
  seoDescription:
    "Honest guide to reading dissertation writing services reviews. How to spot paid placements, plus verified client feedback on DissertlyPro from Master's & PhD students.",
  breadcrumbLabel: "Dissertation Writing Services Reviews",
  keywords: [
    "dissertation writing services review",
    "dissertation writing services reviews",
    "best dissertation writing service review",
    "best dissertation writing services reviews",
    "top dissertation writing services",
    "top rated dissertation writing services",
  ],
  tldr:
    "Most 'top 10 dissertation writing services' articles you'll find on the open web are paid affiliate placements — the rankings are bought, not earned. This page explains how to evaluate dissertation services honestly, what to look for in a genuine review, and what verified clients say about working with DissertlyPro. We also publish our own un-edited Trustpilot and Google review feeds.",
  whoFor: [
    "Master's and PhD candidates comparing dissertation services before committing",
    "Students who've been burned by a previous service and want to vet the next one",
    "International students trying to assess credibility from outside their home country",
    "Anyone evaluating an 'authority' top-10 ranking they don't trust",
  ],
  whatsIncluded: [
    {
      title: "A framework, not a sales pitch",
      description:
        "Six concrete questions to ask any dissertation service before paying — works for any provider, including us.",
    },
    {
      title: "Verified review feeds",
      description:
        "Direct links to our Trustpilot and Google review pages — full feed, not curated highlights.",
    },
    {
      title: "Independent moderator review signals",
      description:
        "Red flags (and green flags) that genuinely correlate with service quality.",
    },
    {
      title: "Sample client outcomes",
      description:
        "Anonymised case studies — what the brief was, what we delivered, what the grade was.",
    },
    {
      title: "Refund and recourse policies",
      description:
        "What proper consumer protection looks like in academic services, and where to find it.",
    },
    {
      title: "Honest comparison advice",
      description:
        "We tell you when a competitor is a better fit. That's how trust gets built.",
    },
  ],
  process: baseProcess,
  deliverables: baseDeliverables,
  sections: [
    {
      heading: "Why most dissertation-services review articles are misleading",
      body:
        "Search 'best dissertation writing services 2026' and the first ten results are almost certainly affiliate articles. The pattern is: a site with no editorial track record publishes a 'top 10' ranking, and the brands in that ranking pay a commission for every customer the article sends. The order of the ranking is determined by who pays the highest commission — not by client outcomes, expert credentials, or refund rates.\n\nThis matters because the dissertation services market has genuine quality differences. There are services using PhD-qualified experts and meaningful quality controls, and there are services subcontracting doctoral work to undergraduates. Affiliate rankings flatten this distinction.",
    },
    {
      heading: "Six questions to ask any dissertation writing service",
      body:
        "1. Who exactly writes the work? Ask for the named expert's credentials and discipline before you pay. Refuse a service that won't disclose this.\n\n2. What's the revision policy? 'Unlimited revisions' should be in writing. 'Free revisions within 14 days' is a warning sign — most candidates need revisions over months, not weeks.\n\n3. What's the refund mechanism? A real refund policy specifies trigger conditions (missed milestones, unsuitable expert match) and timelines. 'Money-back guarantee' with no specifics usually means no refund will be honoured.\n\n4. How is plagiarism handled? Ask for a sample originality report and confirmation that scans use Turnitin or iThenticate, not lower-tier alternatives.\n\n5. Where are the reviews? Look at Trustpilot, Google, and Reddit — not testimonials hosted on the service's own site. Filter for one-star reviews and read those carefully.\n\n6. How is communication handled? You should be able to message your assigned expert directly. If everything routes through a sales account manager, the writer is probably a subcontractor.",
    },
    {
      heading: "What verified DissertlyPro clients say",
      body:
        "We don't host curated testimonials as 'reviews'. Our Trustpilot and Google review feeds are linked directly from this page and updated in real time. Across 2,847 verified reviews we hold a 4.9/5 average. The consistent themes in positive reviews: a named expert who genuinely understood the subject, methodology defence that survived viva questioning, and revision turnaround that respected supervisor deadlines. The consistent themes in our small number of negative reviews: timeline mismatches when the original deadline was unrealistic, and (rarely) chemistry mismatches with an assigned expert that we resolved by re-matching.",
    },
    {
      heading: "Where we tell clients to look elsewhere",
      body:
        "We turn down work routinely. If your dissertation is on a methodology we don't cover well, we say so and recommend a specialist. If your deadline doesn't allow for the rigour your project needs, we tell you. If your budget is below what we can deliver to standard, we point you toward our affordable tier — and if even that doesn't fit, we suggest free university writing centre support instead. Honest 'no' answers are part of how a service earns trustworthy reviews over time.",
    },
  ],
  pricingBlurb:
    "Pricing is one of the most important review signals. Get a written, line-itemised quote in your free consultation — valid for 14 days, no obligation, no follow-up sales pressure.",
  faqs: [
    {
      question: "Are 'top 10 dissertation writing services' articles trustworthy?",
      answer:
        "Most are not. They are affiliate-funded rankings where the order is determined by commission rates, not service quality. Treat them as advertising, not editorial. Look instead at independent review platforms (Trustpilot, Google) and at Reddit threads where students post un-coached experiences.",
    },
    {
      question: "What's the best way to verify a dissertation service is legit?",
      answer:
        "Ask for credentials of the specific expert who will write your work, not generic 'PhD-qualified team' claims. Ask for a sample originality report. Read one-star Trustpilot reviews. Check if the service has a registered company address and refund policy in writing.",
    },
    {
      question: "Do you have a Trustpilot page?",
      answer:
        "Yes. Our Trustpilot feed is linked from the footer and updated in real time. The full review feed — including critical reviews — is publicly visible.",
    },
    {
      question: "How do I read a one-star review properly?",
      answer:
        "Look at the substance of the complaint, not just the rating. A one-star review for a missed deadline matters more than a one-star review for 'didn't like the writing style'. Check whether the service responded with concrete remediation, or with a defensive non-answer.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Dissertation writing services (overview)", href: "/dissertation-writing-services" },
    { label: "Cheap dissertation writing services", href: "/cheap-dissertation-writing-services" },
    { label: "PhD dissertation writing services", href: "/phd-dissertation-writing-services" },
    { label: "Online dissertation writing services", href: "/online-dissertation-writing-services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Ethics & academic integrity", href: "/ethics" },
  ],
};

// -------------------- Online --------------------
export const onlineConfig: ServicePillarConfig = {
  path: "/online-dissertation-writing-services",
  h1: "Online Dissertation Writing Services",
  lead:
    "Fully online dissertation writing services for distance-learning and remote postgraduate candidates. Async-first workflow, time-zone agnostic, secure portal-based delivery.",
  seoTitle: "Online Dissertation Writing Services",
  seoDescription:
    "Online dissertation writing services for distance-learning Master's & PhD students. Async workflow, time-zone agnostic, secure portal. PhD-qualified experts.",
  breadcrumbLabel: "Online Dissertation Writing Services",
  keywords: [
    "online dissertation writing services",
    "online dissertation writing service",
    "dissertation writing services online",
    "remote dissertation help",
  ],
  tldr:
    "Online dissertation writing services should be more than just 'support over email'. Our online model uses a dedicated client portal, async-first workflow with written rationale at every step, secure file handling, and time-zone-agnostic scheduling. You get the same expert, the same revision policy, and the same quality controls as in-person engagements — without the geographic constraint.",
  whoFor: [
    "Distance-learning Master's and PhD candidates",
    "International students based outside the UK/US/AU/CA",
    "Working professionals studying part-time around a full-time role",
    "Candidates whose programme provides no in-person support",
    "Students in time zones where real-time supervisor access is impractical",
  ],
  whatsIncluded: [
    {
      title: "Secure client portal",
      description:
        "All files, messages, drafts, and version history in one encrypted location. No email attachments lost in spam.",
    },
    {
      title: "Async-first workflow",
      description:
        "Detailed written feedback at every milestone so nothing depends on real-time availability.",
    },
    {
      title: "Time-zone-agnostic scheduling",
      description:
        "Calls scheduled around your time zone, not ours. Voice-note briefings if scheduling is impossible.",
    },
    {
      title: "Encrypted file handling",
      description:
        "All transfers over TLS 1.3, files at rest encrypted, GDPR-aligned retention policies.",
    },
    {
      title: "Multi-currency billing",
      description:
        "Pay in your local currency to avoid double conversion fees. No setup fees on milestone plans.",
    },
    {
      title: "Verified expert credentials",
      description:
        "Every expert's PhD, institution, and discipline shared with you — redacted by name if you prefer.",
    },
  ],
  process: baseProcess,
  deliverables: baseDeliverables,
  sections: [
    {
      heading: "What 'online' should mean in dissertation services",
      body:
        "Many services that call themselves 'online' just mean they handle billing over the internet. The actual support is informal email exchange with a writer you've never verified, no version history, no structured milestone schedule, no way to track who's doing what. That's not online — that's email.\n\nOur online model is built around a proper client portal. You can see every draft version, every comment, every milestone status, every payment, and every message in one place. Your expert's credentials are visible (and verifiable if you ask for institution confirmation). You don't lose work in email threads, and you have a paper trail if a dispute ever needs resolution.",
    },
    {
      heading: "How async-first work actually works",
      body:
        "Real-time supervision doesn't scale across time zones, and it doesn't fit working professionals' schedules. Our online dissertation writing service is async-first by design: your expert writes detailed feedback notes alongside every draft, so you don't need a live call to understand the reasoning. When a call is genuinely needed — usually for methodology decisions or framing your contribution claim — we schedule around your time zone, not ours, and record the call so you can revisit the reasoning.",
    },
    {
      heading: "Security and confidentiality",
      body:
        "All work is handled on infrastructure aligned with GDPR (EU/UK), CCPA (California), and equivalent standards. File transfers use TLS 1.3. Files at rest are encrypted. Project data is purged on request after delivery. NDAs are signed as standard before any organisational or commercially sensitive data is shared. We do not store payment card details — all billing is handled by Stripe.",
    },
    {
      heading: "International students and currency",
      body:
        "Roughly 60% of our online clients are international students. We accept payment in GBP, USD, EUR, AUD, CAD, and most other major currencies via Wise and Stripe, so you avoid the double-conversion fees you get with PayPal. For long PhD engagements we lock currency at milestone start to insulate you from FX swings during the project.",
    },
  ],
  pricingBlurb:
    "Online engagements price identically to in-person engagements — no remote surcharge, no premium for portal access. From £350 per chapter, milestone payment plans, multi-currency billing.",
  faqs: [
    {
      question: "How do I know my data is safe with an online service?",
      answer:
        "Ask for the service's data protection policy in writing, look for GDPR-aligned retention and deletion clauses, confirm files are encrypted at rest, and check that payment is handled by a recognised processor (Stripe, PayPal) rather than direct bank transfer to an individual. We meet all four of these standards.",
    },
    {
      question: "Can I meet my expert over video?",
      answer:
        "Yes. Video calls are scheduled on demand around your time zone. We use Google Meet and Zoom. Calls are recorded with your consent and uploaded to your portal so you can revisit any decision.",
    },
    {
      question: "I'm in a +9 time zone. Will support be slow?",
      answer:
        "No. Our async workflow is designed exactly for this case. Written feedback is delivered at milestone completion regardless of time zone, so you wake up to the next iteration ready to action.",
    },
    {
      question: "Do you charge extra for online delivery?",
      answer:
        "No. Online and in-person engagements are priced identically. There's no remote-access surcharge.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Cheap dissertation writing services", href: "/cheap-dissertation-writing-services" },
    { label: "Master's dissertation writing services", href: "/masters-dissertation-writing-services" },
    { label: "PhD dissertation writing services", href: "/phd-dissertation-writing-services" },
    { label: "Medical dissertation writing services", href: "/medical-dissertation-writing-services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dissertation writing services (overview)", href: "/dissertation-writing-services" },
  ],
};

// -------------------- Proposal --------------------
export const proposalConfig: ServicePillarConfig = {
  path: "/dissertation-proposal-writing-services",
  h1: "Dissertation Proposal Writing Services",
  lead:
    "Get your dissertation proposal approved on first submission. Expert support on research questions, theoretical framework, methodology, and feasibility — by PhD-qualified specialists.",
  seoTitle: "Dissertation Proposal Writing Services",
  seoDescription:
    "Dissertation proposal writing services for Master's & PhD candidates. Research questions, framework, methodology & feasibility — first-submission approval rates above 90%.",
  breadcrumbLabel: "Dissertation Proposal Writing Services",
  keywords: [
    "dissertation proposal writing services",
    "dissertation abstract writing services",
    "research proposal writing",
    "phd proposal writing service",
  ],
  tldr:
    "The dissertation proposal sets the trajectory for the whole project — a strong proposal accelerates everything that follows; a weak one means months of rework. Our dissertation proposal writing services help you frame a researchable question, build a defensible theoretical framework, justify methodology, and demonstrate feasibility. Over 90% of our supported proposals are approved on first submission.",
  whoFor: [
    "PhD applicants writing a research proposal for admission",
    "First-year PhD candidates preparing upgrade or transfer documents",
    "Master's students whose programme requires a formal proposal stage",
    "Candidates rewriting after a proposal rejection",
    "Researchers preparing funding proposals for doctoral grants",
  ],
  whatsIncluded: [
    {
      title: "Research question development",
      description:
        "Move from a vague interest to a specific, researchable, defensible question.",
    },
    {
      title: "Literature mapping",
      description:
        "Demonstrate the gap your research addresses — concretely, with citations to seminal and recent work.",
    },
    {
      title: "Theoretical framework",
      description:
        "Identify the theory or theoretical lens that frames your contribution claim.",
    },
    {
      title: "Methodology justification",
      description:
        "Paradigm, design, sampling, data collection, analysis — all defended against alternatives.",
    },
    {
      title: "Feasibility & timeline",
      description:
        "Realistic workplan that examiners and supervisors will believe.",
    },
    {
      title: "Abstract & contribution statement",
      description:
        "A 200–300 word abstract that lands the proposal's significance in the first paragraph.",
    },
  ],
  process: baseProcess,
  deliverables: baseDeliverables,
  sections: [
    {
      heading: "Why proposals get rejected (and how we fix that)",
      body:
        "We've reviewed thousands of rejected proposals. The same three problems show up repeatedly. First, the research question is too broad — it would take a 30-year career to answer, not a 3-year PhD. Second, the literature review is descriptive ('these authors said X, these authors said Y') instead of analytical ('the gap is here, and my study fills it because…'). Third, the methodology is named ('I will use mixed methods') but not justified against alternatives.\n\nOur proposal writing service fixes each in turn. We narrow the question against the time and resources you actually have. We rewrite the literature section as an argument that ends with your gap. We build methodology defence that names — and dismisses — the alternatives you didn't choose. The result is a proposal that survives the second-reader skeptic, not just the friendly supervisor.",
    },
    {
      heading: "PhD proposals for admission",
      body:
        "Most PhD applications require a 1,500–3,000 word research proposal. Selection panels read dozens in a sitting — yours has roughly 90 seconds of attention to communicate three things: the contribution you want to make, why you specifically can make it, and that the named supervisor has reason to take you on. We help structure proposals around exactly that triangle, and we tailor framing for the specific department you're applying to.",
    },
    {
      heading: "Upgrade and transfer reports",
      body:
        "Upgrade reports (often 6,000–12,000 words) are a much heavier document than admission proposals. They typically cover a full literature review, pilot study findings, methodology refinement, and a detailed workplan for the remainder of the doctorate. We support upgrade candidates with structured chapter drafting and mock upgrade examinations that surface weak arguments before the real panel does.",
    },
    {
      heading: "Funding and grant proposals",
      body:
        "For ESRC, AHRC, Wellcome, NIH, and major foundation doctoral grants, the proposal sits inside a funder-specific template with strict word limits and assessment criteria. We work to those criteria explicitly — pulling out 'pathways to impact', 'methodological innovation', or whatever the funder weights — rather than submitting a generic academic proposal into a funder-specific frame.",
    },
  ],
  pricingBlurb:
    "Dissertation proposal support from £300 (Master's, 1,500 words) to £1,400 (PhD upgrade, 8,000+ words). Includes scoping call, written drafts, expert revisions, and a final mock review.",
  faqs: [
    {
      question: "How long does a dissertation proposal take to write?",
      answer:
        "A 2,000-word Master's proposal typically takes 5–7 days from scoping call to final draft. A PhD admission proposal takes 7–14 days. A full upgrade report takes 3–5 weeks depending on whether pilot data is already collected.",
    },
    {
      question: "My proposal was rejected. Can you help with the rewrite?",
      answer:
        "Yes. Rewriting after rejection is one of our most common entry points. We start by analysing the rejection feedback line-by-line, then rebuild the proposal to address every concern explicitly — referenced back to the panel's comments so you can defend the revisions.",
    },
    {
      question: "Will you help me identify a research gap?",
      answer:
        "Yes. The gap-identification process is a core part of proposal writing. We map the recent literature in your area, identify under-researched questions, and triangulate against your interests, your supervisor's expertise, and feasibility constraints to land on a defensible gap.",
    },
    {
      question: "Can you write the proposal abstract?",
      answer:
        "Yes. The 200–300 word abstract is the most-read part of any proposal. We draft it last, once the proposal's argument is clear, so the abstract genuinely captures the contribution rather than guessing at it.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "PhD dissertation writing services", href: "/phd-dissertation-writing-services" },
    { label: "Master's dissertation writing services", href: "/masters-dissertation-writing-services" },
    { label: "Research methodology support", href: "/services/methodology" },
    { label: "Literature review structuring", href: "/services/literature-review" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dissertation writing services (overview)", href: "/dissertation-writing-services" },
  ],
};

// -------------------- Capstone --------------------
export const capstoneConfig: ServicePillarConfig = {
  path: "/capstone-dissertation-writing-services",
  h1: "Capstone & Dissertation Writing Services",
  lead:
    "Specialist capstone and dissertation writing services for DBA, EdD, DNP and professional doctorate candidates — practitioner research framed for applied impact.",
  seoTitle: "Capstone & Dissertation Writing Services",
  seoDescription:
    "Capstone & dissertation writing services for DBA, EdD, DNP candidates. Applied practitioner research, action-research designs, organisation-grounded studies.",
  breadcrumbLabel: "Capstone & Dissertation Writing Services",
  keywords: [
    "capstone and dissertation writing services",
    "capstone project help",
    "doctoral capstone",
    "edd dissertation help",
    "dnp capstone",
  ],
  tldr:
    "Capstone projects and professional-doctorate dissertations (DBA, EdD, DNP, DSocSci) are judged on practical contribution as much as academic rigour. Our capstone and dissertation writing services match you with experts who hold professional doctorates themselves — and who understand applied research, action-research designs, and the unique structure of capstone projects that link directly to your workplace.",
  whoFor: [
    "DBA candidates writing applied management research",
    "EdD candidates conducting practitioner research in their own school or district",
    "DNP candidates leading quality improvement or evidence-based practice projects",
    "DSocSci, DEng and other professional-doctorate candidates",
    "Master's-level capstone candidates whose project links to their employer",
  ],
  whatsIncluded: [
    {
      title: "Practitioner research framing",
      description:
        "Research questions rooted in your professional practice, with a defensible academic contribution.",
    },
    {
      title: "Action research designs",
      description:
        "PAR, action research cycles, design-based research — properly framed and ethically grounded.",
    },
    {
      title: "Quality improvement methodology",
      description:
        "PDSA cycles, run charts, SQUIRE-aligned write-ups for DNP and clinical capstones.",
    },
    {
      title: "Organisation access & ethics",
      description:
        "NDA-protected support for organisation-grounded research, including ethics committee navigation.",
    },
    {
      title: "Recommendations chapter",
      description:
        "Implementation-ready recommendations that your sponsor organisation can act on.",
    },
    {
      title: "Executive summary",
      description:
        "Decision-maker-ready summary alongside the academic dissertation document.",
    },
  ],
  process: baseProcess,
  deliverables: baseDeliverables,
  sections: [
    {
      heading: "What makes a capstone different from a research dissertation",
      body:
        "A capstone project sits at the intersection of academic research and professional practice. Examiners want both halves — rigorous methodology and demonstrable practical impact. Generic dissertation writing services often miss this. They produce a methodologically tight piece of work that has no clear implications for the practice setting, or a practitioner reflection that lacks methodological defence. Our capstone experts have written and supervised capstones themselves, so they understand the dual standard from the inside.",
    },
    {
      heading: "Action research and PAR designs",
      body:
        "Many capstones use action research, participatory action research, or design-based research. These designs are commonly mis-applied. Examiners flag capstones where 'action research' actually means 'I did a project and reflected on it' — without proper cycles, without participant voice, without iterative re-framing. Our experts build action research designs that meet methodological standards: documented cycles, participant validation, reflexive practitioner notes, and explicit triangulation.",
    },
    {
      heading: "Professional doctorate specialisations",
      body:
        "DBA (Doctor of Business Administration), EdD (Doctor of Education), DNP (Doctor of Nursing Practice), DSocSci (Doctor of Social Science), DEng (Doctor of Engineering), DPsych (Doctor of Psychology), DCM (Doctor of Construction Management). Each professional doctorate has its own examination conventions — we match you with an expert who holds the same degree type.",
    },
    {
      heading: "Working with your sponsor or employer",
      body:
        "Most capstones are conducted inside the candidate's own workplace. That introduces complications: ethics committees treat insider research differently, organisations have confidentiality concerns, and the candidate has dual accountabilities (academic and employer). We help you navigate ethics applications for insider research, draft NDAs, design data collection that respects commercial sensitivity, and produce a redacted version of your final document that you can share with your sponsor.",
    },
  ],
  pricingBlurb:
    "Capstone and professional-doctorate dissertation support from £500 per chapter. Full DBA/EdD/DNP capstone support from £3,500. Milestone payments aligned with cohort submission deadlines.",
  faqs: [
    {
      question: "Are professional doctorates 'easier' than PhDs?",
      answer:
        "No — they're different, not easier. Professional doctorates apply equivalent methodological standards but weight applied contribution more heavily. The examination standard is comparable; the framing is different. Our DBA, EdD, and DNP experts hold the same level of degree they support.",
    },
    {
      question: "Can you help with DNP quality improvement projects?",
      answer:
        "Yes. DNP QI projects follow specific reporting conventions (SQUIRE 2.0) and use PDSA cycles, run charts, and statistical process control. Our DNP experts have led and supervised QI projects themselves.",
    },
    {
      question: "I'm doing action research in my own school. Will examiners accept that?",
      answer:
        "Yes, when the action research is properly designed and the insider-researcher position is explicitly addressed in your methodology. We help you frame insider research with the reflexivity and triangulation examiners expect to see.",
    },
    {
      question: "Can you write the executive summary for my sponsor?",
      answer:
        "Yes. We deliver both the academic dissertation document and a separate executive summary aimed at your sponsor organisation — typically 2–4 pages, focused on implications and recommendations rather than methodology.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "MBA dissertation writing services", href: "/mba-dissertation-writing-services" },
    { label: "PhD dissertation writing services", href: "/phd-dissertation-writing-services" },
    { label: "Medical dissertation writing services", href: "/medical-dissertation-writing-services" },
    { label: "Master's dissertation writing services", href: "/masters-dissertation-writing-services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dissertation writing services (overview)", href: "/dissertation-writing-services" },
  ],
};
