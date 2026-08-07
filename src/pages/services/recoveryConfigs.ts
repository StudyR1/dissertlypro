// Phase 1 — subdomain equity recovery pages.
// These paths previously ranked on us.dissertlypro.com and 301'd into a 404.
// Each now resolves to a full pillar page on the canonical domain.

import type { ServicePillarConfig } from "@/components/services/ServicePillarPage";
import { sharedProcess, sharedDeliverables, sharedFaqs } from "./seoConfigs";

// -------------------- /dissertation-help --------------------
export const dissertationHelpConfig: ServicePillarConfig = {
  path: "/dissertation-help",
  h1: "Dissertation Help Online",
  lead:
    "Online dissertation help from named PhD-qualified experts — topic scoping, chapter drafting, methodology design, statistics, editing and viva preparation for Master's and doctoral candidates worldwide.",
  seoTitle: "Dissertation Help Online",
  seoDescription:
    "Online dissertation help from PhD experts: topic, proposal, methodology, statistics, chapters, editing and viva prep. Per-page pricing from $15. No consultation fee.",
  breadcrumbLabel: "Dissertation Help",
  keywords: [
    "dissertation help online",
    "dissertation help",
    "online dissertation help",
    "help with dissertation",
    "dissertation helper",
    "get dissertation help",
  ],
  tldr:
    "Dissertation help online means one thing at DissertlyPro: you are matched with a single named PhD-qualified expert in your subfield who stays with you from scoping to submission. You can buy help at any granularity — one page, one chapter, one statistical model, or an end-to-end programme. Pricing starts at $15 per page, there is no consultation fee, and you pay per milestone rather than upfront. Every deliverable arrives as a tracked-changes Word file with a written rationale, an originality report, and unlimited revisions inside the agreed scope.",
  whoFor: [
    "Master's students who need help starting or finishing a dissertation",
    "PhD candidates stuck between chapters or after a failed supervisory review",
    "Part-time and working students with limited supervision access",
    "International students writing in English as an additional language",
    "Researchers who need a specific technical gap filled (stats, NVivo, PRISMA)",
    "Anyone facing a submission deadline with an incomplete draft",
  ],
  whatsIncluded: [
    {
      title: "Topic and research-question scoping",
      description:
        "We stress-test your topic for feasibility, data access, novelty and examiner appeal, then convert it into research questions your methodology can actually answer.",
    },
    {
      title: "Proposal and ethics application support",
      description:
        "Full proposal drafting plus IRB/ethics paperwork, participant information sheets, consent forms and risk assessments in your institution's format.",
    },
    {
      title: "Literature review construction",
      description:
        "Systematic search strategy, screening log, synthesis matrix and a written review that argues towards your gap rather than listing studies.",
    },
    {
      title: "Methodology and analysis",
      description:
        "Design justification, sampling and power calculations, instrument validity, plus execution in SPSS, R, Stata, Python or NVivo with annotated output.",
    },
    {
      title: "Chapter drafting and revision",
      description:
        "Introduction, findings, discussion and conclusion drafted or rewritten to your supervisor's comments, chapter by chapter, at your pace.",
    },
    {
      title: "Editing, formatting and viva preparation",
      description:
        "Substantive editing, university template formatting, reference audit, plus a mock viva with likely examiner questions and defensible answers.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "What 'dissertation help' should actually mean",
      body:
        "Most sites selling dissertation help online sell one thing: a finished document. That is rarely what a struggling candidate needs, and it is often what their institution forbids. Real help is diagnostic first. Before we quote, we read what you have and tell you where the actual failure point is — because a candidate who thinks they have a writing problem usually has a research-question problem, and a candidate who thinks they need a new chapter usually needs the previous chapter's argument repaired. Our scoping document names the problem in writing, proposes the smallest intervention that fixes it, and prices only that. If the honest answer is that you do not need us for a given chapter, we say so.",
    },
    {
      heading: "Buy help in the size you need, not in packages",
      body:
        "The reason candidates hesitate is risk: paying a large upfront sum to a service they have never used. We removed that. There is no consultation fee, no minimum order, and no package you have to buy into. You can order a single page of methodology justification, one regression model with interpretation, a 1,500-word sample edit, or a full 80,000-word programme. Pricing starts at $15 per page and every milestone is paid separately after you approve the scope. If the first milestone disappoints, you stop — you have risked one milestone, not a dissertation.",
    },
    {
      heading: "How online help works when your supervisor is unavailable",
      body:
        "Limited supervision is the single most common reason candidates come to us. Supervisors move institutions, go on sabbatical, take on twelve students, or simply return feedback three months late. Online help fills that gap with a predictable rhythm: a written weekly plan, drafts returned in 48–72 hours, and a named expert who actually replies. That does not replace your supervisor — you still submit through them, and we deliberately produce work you can defend in your own words — but it means your progress no longer depends on someone else's inbox.",
    },
    {
      heading: "Confidentiality, originality and academic integrity",
      body:
        "Your name, institution and topic are never disclosed, and you may work under a pseudonym throughout. Storage is encrypted, experts sign NDAs, and nothing you send is ever resold or reused. All work is written by humans; we do not use generative AI to produce deliverables, which is why our outputs do not trigger Turnitin's AI indicator or GPTZero. Every delivery includes an originality report so you can verify similarity before you submit.",
    },
  ],
  pricingBlurb:
    "From $15 per page with no consultation fee. Typical engagements: chapter review from $95, methodology chapter from $340, statistical analysis with interpretation from $180, full Master's dissertation support from $1,150, PhD programme support quoted per milestone. You pay per milestone, never the full project upfront.",
  faqs: [
    {
      question: "Is getting dissertation help online allowed by my university?",
      answer:
        "Research support, editing, coaching, statistical consulting and formatting are permitted at almost every institution, and many universities run their own versions of these services. What is not permitted is submitting work as your own that you did not intellectually author. We structure engagements as support: you retain authorship, you can explain every decision, and we provide the reasoning behind each deliverable so you can defend it.",
    },
    {
      question: "How quickly can I get help?",
      answer:
        "Expert matching takes under 24 hours. Short deliverables (chapter reviews, statistical models, sample edits) return in 48–72 hours. Full chapters typically take 5–10 days depending on length and data availability. Express turnaround is available.",
    },
    {
      question: "Can I get help with only one chapter?",
      answer:
        "Yes. Single-chapter engagements are our most common order. You can also buy help at a smaller granularity again — one section, one model, one page — without committing to anything further.",
    },
    {
      question: "Do you help with Master's dissertations as well as PhDs?",
      answer:
        "Both, plus DBA, EdD, DNP, MBA and capstone projects. Roughly 60% of our work is Master's-level and 40% doctoral.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Dissertation writing services", href: "/dissertation-writing-services" },
    { label: "PhD dissertation help", href: "/phd-dissertation-help" },
    { label: "Dissertation editing services", href: "/dissertation-editing-services" },
    { label: "Dissertation statistics help", href: "/dissertation-statistics-help" },
    { label: "Dissertation assistance", href: "/dissertation-assistance" },
  ],
};

// -------------------- /dissertation-assistance --------------------
export const dissertationAssistanceConfig: ServicePillarConfig = {
  path: "/dissertation-assistance",
  h1: "Dissertation Assistance & Consultants",
  lead:
    "Work with a dissertation consultant who has finished a doctorate themselves — structured assistance across planning, analysis, writing and defence, priced per milestone.",
  seoTitle: "Dissertation Assistance & Consultants",
  seoDescription:
    "Dissertation assistance from PhD-qualified consultants: planning, analysis, writing, defence prep. Milestone pricing, named experts, no consultation fee.",
  breadcrumbLabel: "Dissertation Assistance",
  keywords: [
    "dissertation assistance",
    "dissertation consultant",
    "dissertation consulting services",
    "phd dissertation consultant",
    "academic consultant dissertation",
    "dissertation advisor help",
  ],
  tldr:
    "A dissertation consultant is not a writer — they are the experienced researcher you should have been assigned. DissertlyPro consultants all hold doctorates and have supervised or examined at postgraduate level. Assistance is structured around your calendar: a written milestone plan, scheduled working sessions, drafts reviewed against examiner criteria, and a defence rehearsal at the end. You keep authorship and control; the consultant supplies the judgement, structure and accountability that unsupervised candidates lack.",
  whoFor: [
    "Candidates whose supervisor is absent, overloaded or unresponsive",
    "Part-time and distance students without a research cohort",
    "ABD (all-but-dissertation) candidates who have stalled for a year or more",
    "Professionals returning to study after a long gap",
    "Anyone who has failed a progression review and needs a recovery plan",
    "Candidates preparing for a viva or defence with no rehearsal partner",
  ],
  whatsIncluded: [
    {
      title: "Diagnostic review",
      description:
        "A written assessment of your current draft, data and timeline, naming the specific blockers and ranking them by risk to submission.",
    },
    {
      title: "Milestone plan",
      description:
        "A dated, chapter-by-chapter plan working backwards from your submission deadline, with realistic word targets and buffer for supervisor feedback.",
    },
    {
      title: "Scheduled working sessions",
      description:
        "Recurring video sessions with your consultant — agenda set in advance, written action list after. Recorded on request.",
    },
    {
      title: "Draft review against examiner criteria",
      description:
        "Each chapter reviewed with the marking rubric your institution actually uses, not generic feedback.",
    },
    {
      title: "Analysis and methodology consulting",
      description:
        "Design decisions, test selection, assumption checks and interpretation — explained until you can defend them unaided.",
    },
    {
      title: "Defence and viva rehearsal",
      description:
        "A mock viva with question banks derived from your actual weak points, plus written model answers and a composure plan.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "Consulting versus writing: the distinction that protects you",
      body:
        "The difference matters both ethically and practically. A ghostwriter hands you a document you cannot defend; a consultant hands you the capability to produce and defend it. Every consulting deliverable we issue includes the reasoning behind it — why this sampling frame, why this test, why this framing of the contribution — so that when an examiner asks, the answer is genuinely yours. Candidates who use consulting rather than writing also tend to finish faster on their second and third chapters, because the skill transfers.",
    },
    {
      heading: "Why ABD candidates stall, and what actually restarts them",
      body:
        "Most stalled candidates are not lazy and are not short of ideas. They are missing three things: an externally visible deadline, a next action small enough to start today, and a person who will notice if it does not happen. Consulting supplies all three deliberately. The milestone plan makes deadlines visible, the working session forces the next action to be defined concretely, and the consultant is the person who notices. This is why accountability-based assistance outperforms document delivery for candidates who have been stuck longer than six months.",
    },
    {
      heading: "How we match you to a consultant",
      body:
        "Matching is on subfield and method, not on broad discipline. A mixed-methods health services researcher and a critical discourse analyst are both 'social science' and would be badly served by each other. We match on the intersection of your topic area and your analytical approach, and we confirm the match in writing before any payment. If the fit is wrong after the first session, you are re-matched free within 24 hours.",
    },
    {
      heading: "What assistance costs and how it is scheduled",
      body:
        "Consulting is billed either hourly or by milestone, and most candidates use a mix: hourly for open-ended sessions early on, milestone pricing once the plan is set. There is no retainer and no minimum commitment. Candidates typically start with a diagnostic review plus two working sessions, then decide how much further support they want. Scheduling runs across US, UK, Australian and Canadian time zones.",
    },
  ],
  pricingBlurb:
    "Diagnostic review from $120. Working sessions from $85/hour. Chapter review against examiner criteria from $95. Full milestone-managed programme quoted after the diagnostic. No retainer, no consultation fee, cancel any time.",
  faqs: [
    {
      question: "What is the difference between dissertation assistance and dissertation writing?",
      answer:
        "Assistance builds your capability — planning, feedback, analysis coaching, defence rehearsal — while you author the work. Writing services produce document content. We offer both, but for candidates with supervision problems, assistance produces better outcomes because the skill transfers to the next chapter.",
    },
    {
      question: "How many sessions do most candidates need?",
      answer:
        "A stalled candidate typically uses a diagnostic plus 6–10 working sessions across three months. Candidates using consulting purely for defence preparation usually need two to three.",
    },
    {
      question: "Can a consultant help after a failed progression review?",
      answer:
        "Yes, and this is one of our most common engagements. We read the reviewers' report, translate it into concrete remediation actions, and build a resubmission plan with dates. Most institutions allow one resubmission — the plan is designed for that single attempt.",
    },
    {
      question: "Do consultants work with my supervisor?",
      answer:
        "Only if you want them to, and only with your explicit permission. Most candidates keep the arrangement private, which is entirely normal and permitted.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Dissertation coaching", href: "/dissertation-coaching" },
    { label: "Dissertation help online", href: "/dissertation-help" },
    { label: "PhD dissertation help", href: "/phd-dissertation-help" },
    { label: "Viva preparation", href: "/viva-preparation" },
    { label: "Limited supervision support", href: "/limited-supervision" },
  ],
};

// -------------------- /thesis-writing-services --------------------
export const thesisWritingConfig: ServicePillarConfig = {
  path: "/thesis-writing-services",
  h1: "Custom Thesis Writing Services",
  lead:
    "Custom thesis writing services for Master's and doctoral candidates — chapter-by-chapter support written by subject-matched PhD experts, priced per milestone with no upfront commitment.",
  seoTitle: "Custom Thesis Writing Services",
  seoDescription:
    "Custom thesis writing services by PhD-qualified experts. Chapter-by-chapter support, milestone pricing from $15/page, Turnitin-safe, unlimited in-scope revisions.",
  breadcrumbLabel: "Thesis Writing Services",
  keywords: [
    "custom thesis writing",
    "thesis writing services",
    "custom thesis writing services",
    "thesis writing help",
    "masters thesis writing service",
    "phd thesis writing service",
  ],
  tldr:
    "Thesis writing support at DissertlyPro is built chapter by chapter, never as a single opaque handover. You choose the chapters, the depth and the pace; a subject-matched PhD expert produces each deliverable with a written rationale so you can explain and defend the content. Pricing starts at $15 per page, every milestone is approved and paid separately, and revisions inside the agreed scope are unlimited. Human-written throughout, with a Turnitin-compatible originality report attached to every delivery.",
  whoFor: [
    "Master's students writing a thesis for the first time",
    "Doctoral candidates who need specific chapters strengthened",
    "Students juggling full-time work with a thesis deadline",
    "Non-native English writers who need academic register support",
    "Candidates whose thesis was returned with major corrections",
    "Anyone who needs a defensible structure before they start writing",
  ],
  whatsIncluded: [
    {
      title: "Thesis structure and chapter plan",
      description:
        "A full outline with per-chapter word allocations, argument spine and the specific claim each chapter must land.",
    },
    {
      title: "Introduction and problem statement",
      description:
        "Context, gap, aim, objectives, research questions, scope and significance — written so the rest of the thesis has something to answer to.",
    },
    {
      title: "Literature review",
      description:
        "Search strategy, screening record, thematic synthesis and a critical narrative that ends where your contribution begins.",
    },
    {
      title: "Methodology chapter",
      description:
        "Philosophy, design, sampling, instruments, procedure, analysis plan, validity, reliability, limitations and ethics.",
    },
    {
      title: "Results and discussion",
      description:
        "Clean presentation of findings with correctly formatted tables and figures, then interpretation tied back to your literature and framework.",
    },
    {
      title: "Conclusion, abstract and front matter",
      description:
        "Contribution statement, implications, limitations, future work, abstract, acknowledgements, and full front/back matter to your template.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "Thesis or dissertation? The terminology depends on your country",
      body:
        "In the UK, Australia and most Commonwealth systems, a thesis is the doctoral document and a dissertation is the Master's one. In the United States the labels are usually reversed. We support both conventions and we always work from your institution's own handbook rather than a generic definition, because the word limits, structure and examination process differ far more than the terminology does. If you are unsure which set of rules applies to you, send us your programme handbook and we will tell you in the scoping document.",
    },
    {
      heading: "Why chapter-by-chapter beats a single handover",
      body:
        "A whole-thesis handover concentrates every risk into one moment: you find out whether the work is any good after you have paid for all of it. Chapter-by-chapter inverts that. You see the expert's judgement on chapter one before committing to chapter two, your supervisor's feedback on early chapters shapes later ones, and the writing stays coherent with your own voice because you are in the loop continuously. It also means the thesis stays defensible — you have read, questioned and revised every section as it was produced.",
    },
    {
      heading: "Writing for examiners, not for word count",
      body:
        "Examiners are looking for four things: a clearly stated contribution, a method capable of supporting it, honest engagement with the limitations, and internal consistency between chapters. Padding works against all four. Our drafts are written to the argument rather than to a target length, and every chapter deliverable includes a short note explaining how it services the overall contribution claim. Where a section can be cut without losing the argument, we tell you to cut it.",
    },
    {
      heading: "Originality, AI and what we will not do",
      body:
        "Every deliverable is written by a human PhD expert. We do not use generative AI to produce content, which is why our work does not trigger AI detectors. We will not fabricate data, invent citations, write an exam or assessment on your behalf, or produce work for resale. Where your institution restricts the kind of help you may receive, we will structure the engagement to stay inside those rules — tell us the policy and we will work to it.",
    },
  ],
  pricingBlurb:
    "From $15 per page. Indicative: chapter plan from $85, introduction from $210, literature review from $420, methodology from $340, results and discussion from $460, full Master's thesis support from $1,150. Milestone payments only — nothing upfront for the whole project.",
  faqs: [
    {
      question: "Can you write my whole thesis?",
      answer:
        "We provide end-to-end support, but always as a sequence of approved chapter milestones with your review at each stage — not a single anonymous handover. That structure keeps the work defensible and keeps you in control of scope and cost.",
    },
    {
      question: "How much does a custom thesis cost?",
      answer:
        "Pricing starts at $15 per page and varies with academic level, deadline and technical complexity. A full Master's thesis programme typically runs from $1,150; doctoral work is quoted per milestone after the scoping document.",
    },
    {
      question: "Will the writing match my voice?",
      answer:
        "Send two or three samples of your own writing with the brief and your expert will calibrate register, sentence length and hedging to match. Voice consistency is checked again at the senior review stage.",
    },
    {
      question: "What if my supervisor asks for major changes?",
      answer:
        "Revisions inside the agreed scope are unlimited and free. If your supervisor redirects the research substantially — a new framework or a new dataset — we re-scope and quote the additional work transparently before starting it.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Thesis editing services", href: "/thesis-editing-services" },
    { label: "Dissertation writing services", href: "/dissertation-writing-services" },
    { label: "Master's dissertation writing services", href: "/masters-dissertation-writing-services" },
    { label: "Thesis structure guide", href: "/thesis-structure" },
    { label: "Dissertation help online", href: "/dissertation-help" },
  ],
};

// -------------------- /thesis-editing-services --------------------
export const thesisEditingConfig: ServicePillarConfig = {
  path: "/thesis-editing-services",
  h1: "PhD Thesis Editing Services",
  lead:
    "Thesis editing by doctoral-level editors in your own field — developmental, substantive, copy-editing and proofreading, plus full formatting to your university's submission template.",
  seoTitle: "PhD Thesis Editing Services",
  seoDescription:
    "PhD thesis editing services from doctoral editors: developmental, substantive, copy-edit, proofread and formatting. Free 1,500-word sample edit before you commit.",
  breadcrumbLabel: "Thesis Editing Services",
  keywords: [
    "phd thesis editing service",
    "thesis editing services",
    "editor for thesis",
    "thesis proofreading service",
    "academic thesis editor",
    "thesis editing and proofreading",
  ],
  tldr:
    "A thesis editor should catch more than commas. Ours hold doctorates in the field they edit, so they notice when a discussion chapter claims more than the methodology can support, when a 2015 review has been superseded, or when two chapters define the same construct differently. Four levels are available — developmental, substantive, copy-editing and proofreading — plus reference audit and template formatting. Every engagement begins with a free 1,500-word sample edit, and all changes arrive as tracked changes with a written editor's note.",
  whoFor: [
    "Doctoral candidates preparing a complete thesis for examination",
    "Candidates responding to 'major corrections' after a viva",
    "Non-native English speakers who want their voice preserved, not replaced",
    "Researchers converting thesis chapters into journal manuscripts",
    "Anyone whose supervisor flagged structure, argument or consistency issues",
    "Candidates facing a submission deadline with an unpolished draft",
  ],
  whatsIncluded: [
    {
      title: "Developmental editing",
      description:
        "Whole-thesis critique: contribution claim, chapter logic, argument spine, evidence gaps, and cross-chapter consistency, delivered as a written editorial report.",
    },
    {
      title: "Substantive line editing",
      description:
        "Paragraph and sentence rewriting for clarity, transitions and academic register while preserving your reasoning and voice.",
    },
    {
      title: "Copy-editing",
      description:
        "Grammar, syntax, tense, hedging, terminology consistency, citation style and discipline conventions across the full document.",
    },
    {
      title: "Proofreading",
      description:
        "Final pass for typos, numbering, cross-references, table and figure captions, page breaks and reference-list mismatches.",
    },
    {
      title: "Reference and citation audit",
      description:
        "Every in-text citation matched to the reference list and verified against source, with full conversion to APA, Harvard, Chicago, Vancouver or OSCOLA.",
    },
    {
      title: "Submission template formatting",
      description:
        "Margins, fonts, heading styles, contents, lists of tables and figures, pagination and appendices set to your institution's exact requirements.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "Which level of edit does your thesis actually need?",
      body:
        "Paying for a proofread when the argument is broken wastes money; paying for a developmental edit on a clean draft wastes more. We read a 1,500-word sample first and tell you honestly which level fits, and it is common for the answer to be mixed — developmental work on the discussion, a copy-edit everywhere else. That mixed scope is usually the cheapest route to a submittable document, and we will quote it that way rather than pricing a uniform edit across 80,000 words you do not need edited.",
    },
    {
      heading: "Editing after a viva with major corrections",
      body:
        "Major corrections are a common, survivable outcome — but the resubmission window is finite and examiners re-read with their original report in hand. Our correction workflow starts by converting the examiners' report into a numbered action list, mapping each item to a location in the thesis, and tracking completion. You submit with a covering document showing exactly where each requirement was addressed, which is what examiners want and what most candidates forget to provide.",
    },
    {
      heading: "Keeping your voice, especially as a second-language writer",
      body:
        "The most common complaint about academic editing is that the work comes back sounding like a different person. Our protocol treats voice as something to protect: tracked changes make every alteration visible, substantive rewrites carry a written rationale, and you approve or reject each change individually. For writers working in English as an additional language, the target is not native-sounding prose but clear, precise, unambiguous academic English that still reads as yours.",
    },
    {
      heading: "Is thesis editing permitted?",
      body:
        "Editing is explicitly permitted at the overwhelming majority of universities, and many publish editing guidelines rather than banning it. The standard limit is that an editor may improve expression but must not generate new content, change the argument or add sources. We work inside that limit by default, and we can supply a statement of editing scope for your acknowledgements or declaration where your institution requires one.",
    },
  ],
  pricingBlurb:
    "Priced per word: proofreading from $0.018, copy-editing from $0.028, substantive editing from $0.042, developmental editing from $0.058. Full PhD thesis copy-edit from $1,400; Master's thesis from $480. Free 1,500-word sample edit before you commit.",
  faqs: [
    {
      question: "How long does thesis editing take?",
      answer:
        "A copy-edit of an 80,000-word thesis takes 10–14 days; a 15,000-word Master's thesis takes 4–7 days. Developmental editing adds roughly a week. Express turnaround is available subject to editor capacity.",
    },
    {
      question: "Do you provide a free sample edit?",
      answer:
        "Yes. Every engagement starts with a free 1,500-word sample so you can judge the editor's style and confirm the level is right before paying anything.",
    },
    {
      question: "Can you format my thesis to my university's template?",
      answer:
        "Yes. Send the official template or two accepted theses from your department and we will match margins, heading hierarchy, contents, figure and table lists, pagination and appendix structure exactly.",
    },
    {
      question: "Will editing show up as AI-generated?",
      answer:
        "No. All editing is performed by human editors without generative AI, so edited text does not trigger Turnitin's AI indicator or tools such as GPTZero. We include detection reports with delivery.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Dissertation editing services", href: "/dissertation-editing-services" },
    { label: "Thesis writing services", href: "/thesis-writing-services" },
    { label: "Viva preparation", href: "/viva-preparation" },
    { label: "Citation mastery guide", href: "/citation-mastery" },
    { label: "Dissertation help online", href: "/dissertation-help" },
  ],
};

// -------------------- /research-paper-writing-services --------------------
export const researchPaperConfig: ServicePillarConfig = {
  path: "/research-paper-writing-services",
  h1: "Research Paper Writing Services",
  lead:
    "Hire research paper writers with doctorates in your field — conference papers, journal manuscripts, systematic reviews and coursework research papers, produced to publication standard.",
  seoTitle: "Research Paper Writing Services",
  seoDescription:
    "Hire PhD research paper writers for journal manuscripts, conference papers and systematic reviews. Target-journal formatting, human-written, milestone pricing.",
  breadcrumbLabel: "Research Paper Writing",
  keywords: [
    "hire research paper writers",
    "research paper writing services",
    "research paper writer",
    "journal manuscript writing service",
    "academic paper writing service",
    "systematic review writing service",
  ],
  tldr:
    "Research papers are judged by reviewers, not markers, and that changes everything about how they should be written. Our writers hold doctorates and have published in peer-reviewed venues, so manuscripts are built around a defensible contribution, a method reported to reporting-standard level (CONSORT, PRISMA, STROBE or COREQ as appropriate), and a discussion that anticipates reviewer objections. We format to the target journal's guide for authors, prepare cover letters and response-to-reviewer documents, and deliver in the journal's required file structure.",
  whoFor: [
    "Doctoral candidates converting thesis chapters into journal articles",
    "Early-career researchers facing publish-or-perish pressure",
    "Clinicians and practitioners publishing outside their day job",
    "Teams preparing a systematic review or scoping review for submission",
    "Students writing a substantial coursework research paper",
    "Authors handling a revise-and-resubmit with a hostile reviewer report",
  ],
  whatsIncluded: [
    {
      title: "Target-journal selection",
      description:
        "Scope fit, indexing, impact, acceptance rate and turnaround assessed for three candidate journals before a word is written.",
    },
    {
      title: "Manuscript drafting",
      description:
        "Title, abstract, introduction, methods, results, discussion and conclusion written to the journal's structure and word limits.",
    },
    {
      title: "Reporting-standard compliance",
      description:
        "PRISMA, CONSORT, STROBE, COREQ or SRQR checklists completed and referenced, with flow diagrams produced to specification.",
    },
    {
      title: "Tables, figures and supplementary files",
      description:
        "Publication-quality figures, correctly captioned tables, and supplementary material assembled to the journal's file requirements.",
    },
    {
      title: "Cover letter and submission pack",
      description:
        "Editor cover letter, highlights, author contribution statement, conflict-of-interest and data-availability statements.",
    },
    {
      title: "Response to reviewers",
      description:
        "Point-by-point response documents that concede what should be conceded and defend what should be defended, plus a tracked revision.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "Turning a thesis chapter into a publishable paper",
      body:
        "A thesis chapter and a journal article are different genres, and most rejections of thesis-derived manuscripts happen because the author converted the format without converting the argument. A chapter can afford a long literature review, an exhaustive method and a cautious contribution; an article needs a single sharp claim in the first paragraph, a method compressed to reproducibility, and a discussion that says why anyone outside your examination committee should care. Our conversion process rebuilds the argument for a reviewer audience first, then cuts to the word limit second.",
    },
    {
      heading: "Writing for reviewers who are looking for reasons to reject",
      body:
        "Desk rejection and reviewer rejection have different causes. Desk rejection is usually scope mismatch, poor abstract, or ignoring the guide for authors — all preventable. Reviewer rejection is usually an unsupported claim, missing limitation, unaddressed confounder or an outdated literature base. We write with a pre-emptive review pass: before delivery, a second doctoral reviewer reads the manuscript as an adversarial referee and we fix what they find. That step alone measurably reduces revision cycles.",
    },
    {
      heading: "Systematic and scoping reviews",
      body:
        "Reviews are the most method-heavy paper type and the easiest to get rejected for procedural reasons. We run the search across the required databases with a documented, reproducible strategy, maintain a screening log with inter-rater agreement, complete the PRISMA 2020 checklist and flow diagram, and perform risk-of-bias assessment with the appropriate tool. The final manuscript ships with the full search strings and screening records as supplementary material — the evidence reviewers ask for.",
    },
    {
      heading: "Authorship, ethics and what we will not do",
      body:
        "We provide research and writing support; we do not accept authorship, and we do not ghost-author papers for submission under false pretences where the named authors did not contribute intellectually. In practice this means our clients direct the research question, supply or approve the data, and review and approve every claim. We will not fabricate data or citations, and we will not write for paper mills. If a request falls outside these limits we will say so and propose a compliant alternative.",
    },
  ],
  pricingBlurb:
    "Journal manuscript from $640. Systematic review with PRISMA documentation from $1,250. Conference paper from $380. Response-to-reviewers document from $210. Coursework research paper from $15 per page. Milestone-based payment with nothing upfront for the full project.",
  faqs: [
    {
      question: "Can you guarantee my paper will be accepted?",
      answer:
        "No credible service can, and any that does is not being honest with you. Peer review outcomes depend on novelty, fit and reviewer judgement. What we can do is remove the preventable causes of rejection: scope mismatch, guide-for-authors violations, reporting-standard gaps, unsupported claims and weak abstracts.",
    },
    {
      question: "Do you help with revise-and-resubmit?",
      answer:
        "Yes, and it is one of our fastest turnarounds. Send the reviewer reports and the submitted manuscript and we return a point-by-point response document plus a tracked revision, typically within 5–7 days.",
    },
    {
      question: "Which reporting standards do you work with?",
      answer:
        "PRISMA 2020 for systematic and scoping reviews, CONSORT for trials, STROBE for observational studies, COREQ and SRQR for qualitative research, ARRIVE for animal studies, and CHEERS for economic evaluations.",
    },
    {
      question: "Will my paper be original and human-written?",
      answer:
        "Yes. Every manuscript is written by a human PhD-qualified researcher, checked with iThenticate-compatible tools, and delivered with a similarity report. We do not use generative AI to produce manuscript content.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "PhD publishing guide", href: "/phd-publishing" },
    { label: "Systematic literature review", href: "/systematic-literature-review" },
    { label: "Literature review writing service", href: "/services/literature-review-writing-service" },
    { label: "Dissertation statistics help", href: "/dissertation-statistics-help" },
    { label: "Thesis editing services", href: "/thesis-editing-services" },
  ],
};
