// SEO-targeted service pillar configs (Sprint 2 + 3 from SEO plan)
// Each page targets a specific Semrush Quick-Win or Medium-term keyword.

import type { ServicePillarConfig } from "@/components/services/ServicePillarPage";

const sharedProcess = [
  {
    title: "Free 30-minute consultation",
    description:
      "Tell us your topic, chapter scope, deadline, and current draft status. We match you with a PhD-qualified expert in your subfield within 24 hours.",
  },
  {
    title: "Written scoping document",
    description:
      "Your expert returns a milestone-by-milestone schedule, deliverables list, citation style confirmation, and a transparent quote — before any work begins.",
  },
  {
    title: "Iterative drafting with feedback",
    description:
      "Drafts arrive as tracked-changes Word files with a written rationale note. You return inline comments; revised drafts come back in 48–72 hours.",
  },
  {
    title: "Senior reviewer pass",
    description:
      "Every deliverable passes through a second PhD-qualified reviewer in the same discipline before it reaches you, catching weak claims or methodology gaps early.",
  },
  {
    title: "Final QA, originality scan & handover",
    description:
      "Final document is checked with Turnitin/iThenticate, formatted to your university's submission template, and delivered with a written research handover.",
  },
];

const sharedDeliverables = [
  "Direct communication with one named PhD expert",
  "Tracked-changes drafts with a written cover note for each milestone",
  "Originality report (Turnitin/iThenticate-compatible)",
  "Reference list in APA, Harvard, Chicago, Vancouver or OSCOLA",
  "Methodology rationale you can defend in a viva",
  "Unlimited revisions within agreed scope",
  "Editable Word source files and reference-manager export",
  "GDPR-compliant confidentiality + signed expert NDA",
];

const sharedFaqs = [
  {
    question: "Will the work pass Turnitin and AI detectors?",
    answer:
      "Yes. Every deliverable is original, written by a human PhD expert (never AI), and scanned with Turnitin-compatible tools plus GPTZero before release. Similarity scores are typically under 8% and AI-likelihood under 5%. We share both reports with you before delivery.",
  },
  {
    question: "Is my project confidential?",
    answer:
      "Absolutely. Your name, university, and topic are never shared. We operate on GDPR-compliant infrastructure with encrypted storage, signed expert NDAs, and a strict no-resale policy. You can use a pseudonym throughout the engagement.",
  },
  {
    question: "Can I talk directly to my expert?",
    answer:
      "Yes. You're matched with one named PhD-qualified expert end-to-end. You can message them in the portal, schedule video calls, or request voice-note walkthroughs of any decision.",
  },
  {
    question: "How are payments structured?",
    answer:
      "You pay per milestone, never upfront for the full project. Each milestone has a fixed price set in the scoping document. PayPal and major cards accepted with full buyer protection. Refunds available under our money-back guarantee if a milestone is rejected after revision.",
  },
  {
    question: "What if I'm unhappy with the draft?",
    answer:
      "Unlimited revisions are included within agreed scope. If the expert isn't the right fit after week one, we re-match you free of charge within 24 hours.",
  },
];

// -------------------- 1) Dissertation Editing Services (KD 20 / Pos 58 — top priority) --------------------
export const editingConfig: ServicePillarConfig = {
  path: "/dissertation-editing-services",
  h1: "Dissertation Editing Services",
  lead:
    "Professional dissertation editing services delivered by PhD-qualified editors — substantive editing, copy-editing, proofreading, and Turnitin-compliant formatting for Master's and PhD candidates.",
  seoTitle: "Dissertation Editing Services",
  seoDescription:
    "Expert dissertation editing services: substantive editing, copy-editing, proofreading, formatting. PhD editors, 48–72h turnaround, Turnitin-safe. Get a quote.",
  breadcrumbLabel: "Dissertation Editing Services",
  keywords: [
    "dissertation editing services",
    "dissertation editor",
    "phd dissertation editing",
    "thesis editing service",
    "academic editing services",
    "professional dissertation editor",
  ],
  tldr:
    "Our dissertation editing services give doctoral and Master's candidates a PhD-qualified editor in their exact subject area. We offer four levels — developmental editing for argument and structure, substantive editing for chapter logic, copy-editing for sentence clarity, and proofreading for final polish — plus full formatting to your university's submission template. All editors hold doctorates, all edits arrive as tracked-changes Word files with a written editor's note, and every project includes a free sample edit before you commit.",
  whoFor: [
    "PhD candidates polishing a complete draft before submission",
    "Master's students who need chapter-level developmental editing",
    "Non-native English speakers wanting to preserve their academic voice",
    "Researchers preparing manuscripts for journal submission",
    "Candidates whose supervisor has flagged structural or argument issues",
    "Anyone facing a tight deadline with a draft that needs an experienced eye",
  ],
  whatsIncluded: [
    {
      title: "Developmental editing",
      description:
        "Chapter-level critique: argument flow, contribution claim, theoretical framing, evidence gaps. Returned as a written editorial report plus tracked-changes draft.",
    },
    {
      title: "Substantive (line) editing",
      description:
        "Paragraph and sentence-level rewriting for clarity, transition logic, and academic register — keeping your voice and meaning intact.",
    },
    {
      title: "Copy-editing",
      description:
        "Grammar, syntax, punctuation, tense consistency, citation style, hedging language, and discipline-specific conventions.",
    },
    {
      title: "Proofreading",
      description:
        "Final-stage error catch: typos, formatting glitches, reference-list mismatches, table/figure numbering, page break issues.",
    },
    {
      title: "Formatting to university template",
      description:
        "Margins, font, line spacing, heading styles, table of contents, list of figures/tables, page numbering, appendices — to your institution's exact submission template.",
    },
    {
      title: "Reference list audit",
      description:
        "Every citation checked against the reference list, every reference verified against source, full conversion to APA, Harvard, Chicago, Vancouver or OSCOLA.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "What level of dissertation editing do you actually need?",
      body:
        "Most candidates conflate \"editing\" with \"proofreading\" — and end up paying for one when they need the other. A copy-edit will not fix a chapter whose argument doesn't hold together; a developmental edit will not catch the 40 typos in your reference list. Our first job in every engagement is to read a 1,500-word sample and tell you, honestly, which level of edit your draft needs. Sometimes a developmental edit on chapters 4 and 5 plus a proofread on the rest is more cost-effective than a uniform line edit across the whole document. We won't sell you the most expensive option — we'll quote the work the document actually needs.",
    },
    {
      heading: "Why PhD-qualified editors matter for dissertation editing",
      body:
        "Generic academic editors will fix your grammar but won't notice when your discussion chapter makes a contribution claim your methodology can't support. They'll standardise your citation style but miss that you've cited a 2014 review when there's a 2023 systematic review that supersedes it. Our editors hold doctorates in the field they edit — so the feedback you receive is editorial and substantive at the same time. That's the difference between a clean draft and a defensible one.",
    },
    {
      heading: "How we keep your academic voice",
      body:
        "The biggest complaint candidates have about editing services is voice loss — work coming back sounding like \"generic academic English\" with the candidate's reasoning flattened out. Our editing protocol explicitly preserves authorial voice. Tracked changes show every alteration; the written editor's note explains the rationale for any substantive rewrite; and you have final sign-off on every accepted edit. Non-native English speakers in particular tell us our edits make them sound like a better version of themselves, not like someone else.",
    },
    {
      heading: "Turnitin, AI detection, and editing ethics",
      body:
        "Editing is widely accepted by universities as ethical research support — but only within limits. We edit; we do not write new content, change your argument, or insert citations. The final document remains substantively yours. Because all editing is human (no AI tools), it never trips Turnitin AI, GPTZero, or similar detectors. We share originality and AI-detection reports with every delivery so you can submit with full confidence.",
    },
  ],
  pricingBlurb:
    "Editing is priced per 1,000 words. Indicative ranges: proofreading from $0.018/word, copy-editing from $0.028/word, substantive editing from $0.042/word, developmental editing from $0.058/word. Full Master's dissertation copy-edit from $480; full PhD copy-edit from $1,400. Free 1,500-word sample edit before you commit.",
  faqs: [
    {
      question: "How long does dissertation editing take?",
      answer:
        "A standard copy-edit of an 80,000-word PhD takes 10–14 days. A Master's-length copy-edit (15,000 words) takes 4–7 days. Express turnaround (48–72 hours) is available subject to editor capacity and may carry a rush fee.",
    },
    {
      question: "Will I see the editor's changes before they're finalised?",
      answer:
        "Yes — all edits are delivered as tracked changes in Word. You accept, reject, or query every alteration individually. Substantive rewrites also come with a written rationale so you understand why the change was suggested.",
    },
    {
      question: "Can you edit a thesis or just a dissertation?",
      answer:
        "We edit both. The terminology varies by country (UK: thesis = PhD, dissertation = Master's; US: thesis = Master's, dissertation = PhD). We support PhD theses/dissertations, DBA/EdD/DNP capstones, and Master's dissertations of every type.",
    },
    {
      question: "Do you provide a free sample edit?",
      answer:
        "Yes — every engagement starts with a free 1,500-word sample edit so you can see the editor's style and judge whether the level is right for your draft.",
    },
    {
      question: "Can you format my dissertation to my university's template?",
      answer:
        "Yes. Send us your university's submission template (or examples of accepted theses from your department) and we'll format margins, heading styles, table of contents, list of figures, page numbering, and appendices to match exactly.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Dissertation statistics help", href: "/dissertation-statistics-help" },
    { label: "Dissertation consulting & coaching", href: "/dissertation-coaching" },
    { label: "PhD dissertation writing services", href: "/phd-dissertation-writing-services" },
    { label: "Master's dissertation writing services", href: "/masters-dissertation-writing-services" },
    { label: "How to write a literature review", href: "/blog/how-to-write-a-literature-review" },
    { label: "Free quote calculator", href: "/tools/quote-calculator" },
  ],
};

// -------------------- 2) Dissertation Statistics Help (KD 18 / Pos 73) --------------------
export const statisticsConfig: ServicePillarConfig = {
  path: "/dissertation-statistics-help",
  h1: "Dissertation Statistics Help",
  lead:
    "Dissertation statistics help from PhD-qualified statisticians — SPSS, R, Stata, SAS, AMOS, and Python. Analysis design, model running, interpretation, and viva-ready writeup.",
  seoTitle: "Dissertation Statistics Help",
  seoDescription:
    "PhD statisticians provide dissertation statistics help: SPSS, R, Stata, AMOS, SEM. Design, analysis, interpretation & viva-ready writeup. Free consultation.",
  breadcrumbLabel: "Dissertation Statistics Help",
  keywords: [
    "dissertation statistics help",
    "spss dissertation help",
    "statistics help for dissertation",
    "phd statistics consultant",
    "thesis statistics help",
    "dissertation data analysis help",
  ],
  tldr:
    "Our dissertation statistics help service pairs you with a PhD-qualified statistician in your exact discipline. We cover analysis design (before you collect data), model selection, software execution in SPSS / R / Stata / SAS / AMOS / Python / Jamovi, results interpretation written in your dissertation's voice, and viva preparation. You get clean output files, annotated syntax/code, and a results chapter that defends every analytical choice.",
  whoFor: [
    "Master's students with survey or experimental data they don't know how to analyse",
    "PhD candidates designing complex SEM, multilevel, or longitudinal analyses",
    "Researchers whose supervisor has flagged statistical errors in their draft",
    "Mixed-methods candidates needing the quantitative half handled properly",
    "Candidates preparing for a viva where statistics will be cross-examined",
    "International students who learned statistics in a different software ecosystem",
  ],
  whatsIncluded: [
    {
      title: "Pre-analysis consultation",
      description:
        "Power analysis, sample size justification, analysis plan, and a pre-registration draft (if appropriate) — done before you collect data, not after.",
    },
    {
      title: "Data cleaning & preparation",
      description:
        "Missing data analysis, outlier handling, transformation choices, scale reliability checks, factor analysis where needed — all documented in a reproducible audit trail.",
    },
    {
      title: "Statistical analysis execution",
      description:
        "Descriptive statistics, t-tests, ANOVA, regression (linear, logistic, multilevel), SEM/CFA, mediation/moderation, survival analysis, time-series — in your preferred software.",
    },
    {
      title: "Interpretation & writeup",
      description:
        "Results chapter written in academic prose, APA-style tables, properly hedged claims, and explicit links back to your research questions and hypotheses.",
    },
    {
      title: "Annotated syntax / code",
      description:
        "Fully commented SPSS syntax, R scripts, Stata do-files, or Python notebooks — so you can re-run analyses yourself and defend every line in your viva.",
    },
    {
      title: "Viva / defence preparation",
      description:
        "Mock viva session focused on statistical methods. Anticipated examiner questions, defensible rationales for every choice, and live re-run rehearsal.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "When to seek dissertation statistics help (and when it's already too late)",
      body:
        "The single biggest mistake we see is candidates approaching a statistician after data collection — at which point design problems are usually unfixable. If your sample is 47 when you needed 200 for adequate power, no analysis will rescue it. If your survey didn't capture the constructs your hypotheses require, no model will compensate. We urge candidates to involve a statistician at the proposal stage: a 90-minute pre-analysis consultation typically saves weeks of doomed analysis later. That said, even post-collection, an experienced statistician can usually find a defensible analytical strategy — and frame the limitations chapter so examiners see the analysis is honest, not lazy.",
    },
    {
      heading: "Which software is right for your dissertation?",
      body:
        "Most candidates use the software their department teaches — usually SPSS or R. Both are fine for the majority of dissertations. SPSS wins on point-and-click accessibility; R wins on advanced models, reproducibility, and free pricing. Stata is the standard in econometrics and epidemiology. SAS dominates pharmaceutical and large-clinical-trial research. AMOS or lavaan in R are needed for SEM. Jamovi and JASP are increasingly popular for Bayesian analyses. We'll match your statistician to your software — and if you want to switch (e.g. from SPSS to R for a publishable thesis), we'll deliver in both with side-by-side syntax.",
    },
    {
      heading: "Analyses we run most often for dissertations",
      body:
        "Multiple regression (linear, logistic, ordinal, multinomial); ANOVA / MANOVA / ANCOVA; multilevel/HLM models for nested data; structural equation modelling (CFA, SEM, mediation/moderation, latent class); survival/time-to-event analysis; longitudinal growth-curve modelling; non-parametric alternatives where assumptions fail; meta-analysis for systematic reviews. For qualitative dissertations we cover NVivo / MAXQDA / ATLAS.ti thematic coding and the writeup that follows.",
    },
    {
      heading: "What a defensible statistics chapter looks like",
      body:
        "Examiners aren't looking for the most sophisticated model — they're looking for the right model, properly justified. Every analytical choice in your results chapter should answer three questions: why this test for this hypothesis, why this software for this analysis, and why this interpretation given these effect sizes and confidence intervals. We write your results chapter to anticipate each of these questions, so when the viva comes, you've already rehearsed the answers.",
    },
  ],
  pricingBlurb:
    "Statistics help is priced per analysis or per chapter. Indicative: full results chapter (Master's) from $390; full results chapter (PhD) from $780; pre-analysis consultation from $120; SEM/CFA model from $290; multilevel model from $250; viva statistics-prep session from $160. Free 30-minute scoping call.",
  faqs: [
    {
      question: "Can you help if I haven't collected data yet?",
      answer:
        "Yes — this is the best time to engage us. A 60–90 minute pre-analysis consultation produces an analysis plan, power calculation, sample size justification, and (if relevant) pre-registration draft. This typically saves 3–5 weeks of failed analysis later.",
    },
    {
      question: "I have SPSS output but don't understand it. Can you help?",
      answer:
        "Yes. We'll review your output, identify what's defensible and what isn't, re-run any models that need it, and write the interpretation in academic prose. Many candidates come to us at exactly this point.",
    },
    {
      question: "Do you cover qualitative analysis too?",
      answer:
        "Yes. We support thematic analysis, framework analysis, IPA (Interpretative Phenomenological Analysis), grounded theory, content analysis, and discourse analysis — in NVivo, MAXQDA, or ATLAS.ti. See our NVivo tutorial for the software side.",
    },
    {
      question: "Will you provide the SPSS syntax or R code?",
      answer:
        "Always. Every analysis comes with fully commented syntax/code so you can re-run it yourself, modify it, and defend it. Your viva examiner will likely ask you to walk through the analysis live — your statistician will rehearse this with you.",
    },
    {
      question: "Is using a statistician ethical for my dissertation?",
      answer:
        "Yes. Statistical consultation is explicitly permitted by virtually every university — academia depends on it. You retain authorship of the dissertation; we provide methodological support and interpretation, which you then learn, write up, and defend. You should disclose statistical consultancy in your acknowledgements (we provide template wording).",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "SPSS tutorial — free guide", href: "/spss-tutorial" },
    { label: "NVivo tutorial — qualitative analysis", href: "/nvivo-tutorial" },
    { label: "Dissertation editing services", href: "/dissertation-editing-services" },
    { label: "Dissertation methodology help", href: "/services/dissertation-methodology-help" },
    { label: "Quantitative vs qualitative analysis", href: "/qualitative-analysis" },
    { label: "Mixed methods research", href: "/mixed-methods-research" },
  ],
};

// -------------------- 3) Dissertation Consulting & Coaching (KD 31–39) --------------------
export const coachingConfig: ServicePillarConfig = {
  path: "/dissertation-coaching",
  h1: "Dissertation Consulting & Coaching",
  lead:
    "Dissertation consulting and one-to-one coaching from PhD-qualified academics. Weekly accountability, structured feedback, viva rehearsal, and the personalised mentorship most supervisors don't have time for.",
  seoTitle: "Dissertation Consulting & Coaching",
  seoDescription:
    "Dissertation consulting & coaching from PhD experts: weekly accountability, structured feedback, viva prep, and the mentorship many supervisors can't provide.",
  breadcrumbLabel: "Dissertation Consulting & Coaching",
  keywords: [
    "dissertation consulting",
    "dissertation coach",
    "phd dissertation coach",
    "thesis coaching",
    "dissertation mentor",
    "academic coach for dissertation",
  ],
  tldr:
    "Our dissertation consulting and coaching gives you a named PhD-qualified academic as a weekly thinking partner — separate from your supervisor. We don't write your dissertation; we help you write it better, faster, and with less anxiety. Coaching engagements include scheduled video calls, structured feedback on every chapter, accountability check-ins between sessions, methodology consulting, and viva rehearsal. Most candidates work with us for 3–9 months across the writing-up phase.",
  whoFor: [
    "PhD candidates whose supervisor is overloaded or absent",
    "Doctoral students stuck on a chapter and losing momentum",
    "Master's candidates who need structured accountability to meet deadlines",
    "International candidates who want a coach in their second language",
    "Researchers preparing for a high-stakes viva or upgrade defence",
    "Anyone who wants the dissertation experience to be less isolating",
  ],
  whatsIncluded: [
    {
      title: "Weekly 1:1 video calls",
      description:
        "Scheduled 50-minute sessions with your named PhD coach. Structured agenda, written notes, and clear action items between sessions.",
    },
    {
      title: "Chapter-by-chapter feedback",
      description:
        "Every chapter you write is read closely by your coach, returned with margin comments, and discussed in your next session.",
    },
    {
      title: "Accountability between sessions",
      description:
        "Mid-week check-ins by message — what you committed to, what got in the way, what you're sending for the next session.",
    },
    {
      title: "Methodology consulting",
      description:
        "Decisions on research design, sampling, analysis approach, and ethics framing — talked through with someone who has examined dissertations.",
    },
    {
      title: "Writing-process coaching",
      description:
        "Practical writing routines, dealing with perfectionism, managing supervisor relationships, recovering from a stuck week.",
    },
    {
      title: "Viva / defence rehearsal",
      description:
        "Mock viva by a PhD-qualified academic who hasn't seen your draft, with anticipated-question packs based on your specific examiners' published work.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "Why a dissertation coach is different from a writer",
      body:
        "When you hire a dissertation writer, you receive text. When you hire a dissertation coach, you build capability. The output of coaching is a better dissertation written by you — plus the skills to publish from it, win a viva, and run your next research project independently. Our coaches don't write your chapters; they read what you write, push back where it's weak, suggest framing where it's missing, and hold you accountable to the schedule you set. For candidates who want to grow as researchers (not just submit), coaching is the higher-leverage option.",
    },
    {
      heading: "Why this works when supervision doesn't",
      body:
        "Most supervisor-candidate relationships are constrained by structural factors no individual can fix: supervisors carry 8–15 candidates, are buried in teaching and admin, and ration their attention to whoever has a deadline that week. Many candidates report supervision meetings every 6–10 weeks — far too infrequent for the writing-up phase. A coach fills that gap without replacing your supervisor. You bring the same draft to both; the coach helps you refine it before you send it to your supervisor, so their (rare) feedback is spent on the right issues.",
    },
    {
      heading: "What a typical coaching engagement looks like",
      body:
        "Engagements run 3–9 months, with weekly or fortnightly 50-minute calls. A typical month: one session on structural feedback for the chapter you've been writing, one session on methodology or analysis decisions for the next chapter, one session on supervisor strategy or stuck-points, and one session reviewing progress against your written milestone schedule. Between sessions, you send drafts; your coach returns them with margin comments before the next call. As you approach submission, the cadence shifts to viva preparation: mock vivas, anticipated-question packs, and rehearsal of the live defence.",
    },
    {
      heading: "What to look for in a dissertation coach",
      body:
        "A good coach must hold a PhD in your field — not just \"academic writing\" credentials. They should have supervised candidates or examined vivas themselves, so they know what the examiner side actually scrutinises. They should be able to push back on weak arguments without crushing your motivation. And they should have a written engagement structure (agenda, notes, action items) — not just open-ended chat. Our coaches meet all four criteria, and you can request a free 30-minute pre-engagement call with any candidate coach before you commit.",
    },
  ],
  pricingBlurb:
    "Coaching is priced per session or per month. Indicative: single 50-minute coaching session from $140; monthly retainer (4 sessions + async feedback) from $480; full submission-to-viva package (6 months) from $2,400. Free 30-minute introductory call before you commit.",
  faqs: [
    {
      question: "How is coaching different from your dissertation writing service?",
      answer:
        "Writing services produce text for you to refine. Coaching helps you produce better text yourself. Many candidates use both — writing support for the chapters they're stuck on, coaching for the chapters they want to grow through. Your coach can advise on which is right for your situation.",
    },
    {
      question: "Will my coach replace my supervisor?",
      answer:
        "No — coaches complement supervisors, never replace them. We strongly encourage you to keep all formal supervision in place. The coach's role is to help you make the most of supervisor time by arriving at meetings with sharper drafts and clearer questions.",
    },
    {
      question: "Can my coach review work I'm planning to send to my supervisor?",
      answer:
        "Yes — this is one of the most popular uses of coaching. Your coach reads your draft, flags issues, and helps you decide what to revise before it reaches your supervisor. Supervisor feedback is then spent on harder questions, not on issues you could have caught yourself.",
    },
    {
      question: "Do you coach Master's students or only PhDs?",
      answer:
        "Both. Master's coaching engagements are typically shorter (8–14 weeks) and more deadline-driven. PhD coaching runs longer (3–12 months) and weights methodology and contribution-claim coaching more heavily.",
    },
    {
      question: "What software do you use for coaching sessions?",
      answer:
        "Zoom by default, with Google Meet, Microsoft Teams, or WhatsApp video on request. All sessions are 50 minutes, scheduled in your time zone, with written notes shared in your project portal within 24 hours.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Dissertation editing services", href: "/dissertation-editing-services" },
    { label: "PhD dissertation writing services", href: "/phd-dissertation-writing-services" },
    { label: "Viva preparation guide", href: "/viva-preparation" },
    { label: "Committee communication strategies", href: "/committee-communication" },
    { label: "Limited supervision — what to do", href: "/limited-supervision" },
    { label: "PhD mental health hub", href: "/phd-mental-health" },
  ],
};

// -------------------- 4) Literature Review Writing Service (KD 31) --------------------
export const literatureReviewConfig: ServicePillarConfig = {
  path: "/services/literature-review-writing-service",
  h1: "Literature Review Writing Service",
  lead:
    "Specialist literature review writing service — systematic, narrative, scoping, and integrative reviews built by PhD-qualified researchers who publish in your field.",
  seoTitle: "Literature Review Writing Service",
  seoDescription:
    "Literature review writing service: systematic, narrative, scoping & integrative reviews by PhD researchers. PRISMA-compliant. Free consultation & sample.",
  breadcrumbLabel: "Literature Review Writing Service",
  keywords: [
    "literature review writing service",
    "literature review help",
    "systematic literature review service",
    "phd literature review writing",
    "narrative review writing",
    "scoping review service",
  ],
  tldr:
    "A literature review is the chapter examiners read first and judge the rest of your dissertation against. Our literature review writing service pairs you with a PhD researcher who has published reviews in your field — covering systematic (PRISMA), narrative, scoping (PRISMA-ScR), integrative, and meta-synthesis methodologies. You receive a defensible search strategy, an audit-traceable screening log, a thematic or framework-based synthesis, and a written chapter that argues — not just summarises.",
  whoFor: [
    "Master's students writing a 4,000–8,000 word literature chapter",
    "PhD candidates producing a 12,000–25,000 word systematic review",
    "Health and social-science researchers needing PRISMA-compliant reviews",
    "Candidates whose first review draft was returned as 'too descriptive'",
    "Researchers preparing systematic reviews for journal publication",
    "Doctoral candidates building a theoretical framework chapter",
  ],
  whatsIncluded: [
    {
      title: "Review-type selection",
      description:
        "Honest advice on whether your research question needs a systematic, scoping, narrative, integrative, or meta-synthesis review — many candidates pick the wrong type and pay for it in revisions.",
    },
    {
      title: "Search strategy & PRISMA flow",
      description:
        "Boolean search strings, database selection (PubMed, Scopus, Web of Science, ERIC, PsycINFO), inclusion/exclusion criteria, full PRISMA 2020 flow diagram.",
    },
    {
      title: "Screening & data extraction",
      description:
        "Title/abstract screening, full-text screening, quality appraisal (CASP, JBI, MMAT), and extraction tables — all in an audit-traceable format your examiner can verify.",
    },
    {
      title: "Thematic / framework synthesis",
      description:
        "Coded synthesis under thematic, framework, or narrative-synthesis approaches; identification of gaps; mapping to theoretical framework where relevant.",
    },
    {
      title: "Written chapter",
      description:
        "Argued, critical literature review chapter — not summarised abstracts. Hedged claims, theoretical framing, and explicit gap identification that motivates your study.",
    },
    {
      title: "Reference management",
      description:
        "Full bibliographic capture in EndNote, Zotero, or Mendeley with shared library access. Reference list in your required style.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "Why most literature reviews fail",
      body:
        "Examiners and journal reviewers see the same problem over and over: literature reviews that summarise instead of argue. A summary lists what 50 papers said. A review identifies what those papers collectively show, where they disagree, what assumptions they share, what they have not yet examined — and uses that synthesis to motivate the study you are doing. Our review writers are trained to produce the second kind. The single most common feedback our drafts receive is \"finally, a literature review that builds an argument.\" That is the standard examiners want.",
    },
    {
      heading: "Systematic vs narrative vs scoping — picking the right type",
      body:
        "Systematic reviews use a pre-registered protocol, exhaustive search, formal screening (typically two reviewers), and quality appraisal. They suit clearly-bounded clinical or social-science questions. Scoping reviews map the breadth of a topic to identify research gaps — appropriate when the literature is emerging. Narrative reviews critically synthesise mature literatures around a theoretical argument — common in humanities and qualitative PhDs. Integrative reviews combine empirical and theoretical work. Picking the wrong type produces a chapter your examiners cannot evaluate fairly. Our first conversation always nails the right type before any searching begins.",
    },
    {
      heading: "How PRISMA-compliant reviews are built",
      body:
        "For systematic and scoping reviews we follow PRISMA 2020 (and PRISMA-ScR for scoping reviews) end-to-end. That means a registered or written protocol, an explicit Boolean search string per database, full screening logs (records identified, screened, full-text assessed, included), and a PRISMA flow diagram in your chapter. We deliver every screening decision as an Excel workbook your examiner could replicate. For Cochrane-style reviews we also produce a risk-of-bias assessment table and, where appropriate, a meta-analysis with forest plots.",
    },
    {
      heading: "Building the theoretical framework from your review",
      body:
        "The literature review chapter usually has a partner chapter — the theoretical or conceptual framework. Our service includes the move from \"what does the literature show\" to \"how does my study sit inside the dominant theoretical frame in this field, and what does that frame predict?\" Examiners are far harder on dissertations that present a literature review and a theoretical framework as unrelated chapters. We build the theoretical framework out of the review's synthesis so the two chapters reinforce each other.",
    },
  ],
  pricingBlurb:
    "Literature review services are priced per word or per review type. Indicative: Master's narrative review (5,000 words) from $380; PhD narrative review (15,000 words) from $1,200; systematic review with PRISMA flow from $1,800; full Cochrane-style meta-analysis from $3,200. Includes free 30-minute scoping call and search-strategy peer review.",
  faqs: [
    {
      question: "Will the systematic review be reproducible?",
      answer:
        "Yes. Every systematic review we deliver includes the search strings used in each database, dates of the search, full screening logs, inclusion/exclusion decisions with reasons, and a PRISMA 2020 flow diagram. Your examiner (or a journal reviewer) could fully replicate the search.",
    },
    {
      question: "Can you do the full PRISMA review including meta-analysis?",
      answer:
        "Yes. Meta-analyses are run in R (meta package) or Stata. We produce forest plots, funnel plots for publication bias, heterogeneity statistics (I², τ²), and subgroup/sensitivity analyses where appropriate. All output is delivered with the underlying script so it is reproducible.",
    },
    {
      question: "How many sources should my literature review include?",
      answer:
        "Depends entirely on the review type and field. A Master's narrative review typically synthesises 40–80 sources; a PhD narrative review 100–250; a systematic review may screen 2,000+ records and include 30–100. The right number is whichever covers the question without padding.",
    },
    {
      question: "Can you update an existing literature review?",
      answer:
        "Yes — many candidates need their review refreshed before submission to add recent (last 12–18 months) literature. We run an update search, screen new records, and integrate accepted studies into your existing chapter with tracked changes.",
    },
    {
      question: "Do you cover qualitative meta-synthesis?",
      answer:
        "Yes. We deliver thematic synthesis (Thomas & Harden), meta-ethnography (Noblit & Hare), and qualitative comparative analysis. Used widely in nursing, education, and policy PhD reviews.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "How to write a literature review — full guide", href: "/blog/how-to-write-a-literature-review" },
    { label: "APA literature review example", href: "/blog/apa-literature-review-example" },
    { label: "Systematic literature review guide", href: "/systematic-literature-review" },
    { label: "PRISMA flow tool", href: "/tools/prisma-flow" },
    { label: "Literature search tool", href: "/tools/literature-search" },
    { label: "Dissertation methodology help", href: "/services/dissertation-methodology-help" },
  ],
};

// -------------------- 5) Dissertation Proposal Help (KD 21) --------------------
export const proposalHelpConfig: ServicePillarConfig = {
  path: "/services/dissertation-proposal-help",
  h1: "Dissertation Proposal Help",
  lead:
    "Dissertation proposal help from PhD-qualified researchers — research question refinement, literature gap mapping, methodology design, and a defensible proposal your committee will approve.",
  seoTitle: "Dissertation Proposal Help",
  seoDescription:
    "Dissertation proposal help: research question, literature gap, methodology, ethics. PhD researchers help you build a proposal your committee approves first time.",
  breadcrumbLabel: "Dissertation Proposal Help",
  keywords: [
    "dissertation proposal help",
    "phd proposal writing help",
    "research proposal help",
    "thesis proposal writing",
    "dissertation proposal writing service",
  ],
  tldr:
    "Your dissertation proposal is the single most important document of your degree — it sets the question, the method, and the scope for everything that follows. Our dissertation proposal help service pairs you with a PhD researcher who has written and examined proposals at your level. We refine your research question, map the literature gap, design a defensible methodology, draft the ethics application, and produce a proposal your committee can approve first time.",
  whoFor: [
    "Master's candidates writing 2,000–4,000 word dissertation proposals",
    "PhD candidates writing upgrade or transfer reports",
    "Doctoral applicants drafting a research proposal for admission",
    "Candidates whose first proposal was rejected and need a structured rewrite",
    "International candidates whose university uses unfamiliar proposal conventions",
    "Anyone whose research question is too broad and needs honest scoping",
  ],
  whatsIncluded: [
    {
      title: "Research question refinement",
      description:
        "Move from a broad topic interest to a tight, researchable, defensible question your supervisor and committee will recognise as scholarly.",
    },
    {
      title: "Literature gap mapping",
      description:
        "Rapid review of the recent literature in your area to identify the under-researched question your study will answer.",
    },
    {
      title: "Theoretical framework",
      description:
        "Selection and justification of the theoretical lens through which your study will be designed and your findings interpreted.",
    },
    {
      title: "Methodology design",
      description:
        "Research design (quantitative, qualitative, mixed-methods), sampling strategy, data collection instruments, analysis plan, and timeline.",
    },
    {
      title: "Ethics application support",
      description:
        "Draft ethics committee application, participant information sheets, consent forms, and risk-assessment documentation aligned to your institution's template.",
    },
    {
      title: "Defence rehearsal",
      description:
        "For PhD proposal defences and upgrade vivas — mock examination with a second PhD researcher and anticipated-question pack.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "Why most rejected proposals fail on the question, not the writing",
      body:
        "When committees reject a proposal, the feedback usually centres on the research question: too broad, not researchable, no clear contribution, already answered. Candidates often respond by polishing the prose — and resubmit the same flawed question wrapped in better English. That gets rejected again. Our proposal help always starts at the question. We spend the first session interrogating the question against four tests: is it answerable with the methods you have access to, is it bounded enough for your time-frame, does it claim a contribution the literature genuinely lacks, and does it sit within your supervisor's expertise? Only when the question passes all four do we move to the methodology and the writing.",
    },
    {
      heading: "Master's, PhD admission, and upgrade proposals — different beasts",
      body:
        "Master's proposals (2,000–4,000 words) are scoping documents — committees expect a tight question, a defensible method, and a realistic timeline. PhD admission proposals (3,000–8,000 words) are about demonstrating you can do independent research and that your project fits the host institution's strengths. PhD upgrade or transfer reports (8,000–15,000 words) are mini-dissertations — they include preliminary findings, a refined literature review, and a clear pathway to completion. Our experts know which conventions apply where and write to the specific genre expected at your stage.",
    },
    {
      heading: "Building the methodology section that survives committee review",
      body:
        "Committees scrutinise the methodology more than any other section. They look for paradigm justification, sampling rationale, instrument validity (or trustworthiness for qualitative work), an ethics-aware data collection plan, and a realistic analysis approach. We write methodologies that anticipate every committee question before it is asked — and where committees have already raised concerns, we map every concern to a paragraph in the revised proposal that addresses it directly.",
    },
    {
      heading: "Working alongside your supervisor and committee",
      body:
        "Supervisors expect to see drafts they can give feedback on. We deliver proposals as supervisor-ready documents — clean drafts you can submit, plus a written rationale for every major decision so when your supervisor asks \"why did you frame it this way?\" you can answer in your own words. We never communicate with your supervisor or committee on your behalf; the proposal remains substantively yours.",
    },
  ],
  pricingBlurb:
    "Proposal help is priced per scope. Indicative: Master's 2,000-word proposal from $260; PhD admission proposal (5,000 words) from $580; PhD upgrade/transfer report (10,000+ words) from $1,200; rejection rewrite from $320; ethics application package from $180. Free 30-minute scoping call.",
  faqs: [
    {
      question: "How long does it take to write a proposal?",
      answer:
        "A 2,000-word Master's proposal typically takes 5–7 days from scoping call to final draft. A 5,000-word PhD admission proposal takes 7–14 days. A full upgrade report takes 3–5 weeks depending on whether preliminary data is already collected.",
    },
    {
      question: "My proposal was rejected — can you help with the rewrite?",
      answer:
        "Yes — rejection rewrites are one of our most common engagements. We start by analysing the rejection feedback line-by-line, then rebuild the proposal to address each concern explicitly. Every revision is mapped back to the committee's comments so you can show, in your covering letter, exactly how each issue was resolved.",
    },
    {
      question: "Will you help me find a research gap?",
      answer:
        "Yes — gap identification is built into the service. We map the recent literature in your area, identify under-researched questions, and triangulate against your interests, supervisor expertise, and feasibility constraints to land on a defensible gap.",
    },
    {
      question: "Do you write the ethics application too?",
      answer:
        "Yes. We draft the ethics application, participant information sheets, consent forms, and risk-assessment documentation. We work with your university's specific ethics template — send it to us in the scoping call.",
    },
    {
      question: "Will the proposal pass plagiarism checks?",
      answer:
        "Yes. Every proposal is written from scratch, scanned with Turnitin-compatible tools (typical similarity under 6%), and accompanied by an originality report you can submit alongside the proposal.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Dissertation proposal writing services", href: "/dissertation-proposal-writing-services" },
    { label: "How to write a dissertation proposal — step by step", href: "/blog/how-to-write-a-dissertation-proposal-step-by-step" },
    { label: "PhD dissertation writing services", href: "/phd-dissertation-writing-services" },
    { label: "Research methodology guide", href: "/research-methodology" },
    { label: "Research question validator", href: "/tools/research-question-validator" },
    { label: "IRB / ethics guide", href: "/irb-ethics-guide" },
  ],
};

// -------------------- 6) Dissertation Methodology Help (KD 30) --------------------
export const methodologyHelpConfig: ServicePillarConfig = {
  path: "/services/dissertation-methodology-help",
  h1: "Dissertation Methodology Help",
  lead:
    "Dissertation methodology help from PhD researchers — quantitative, qualitative, and mixed-methods designs with paradigm justification, sampling strategy, and viva-ready rationale.",
  seoTitle: "Dissertation Methodology Help",
  seoDescription:
    "Dissertation methodology help: quantitative, qualitative, mixed-methods. PhD researchers design paradigm, sampling, instruments & viva-ready justification.",
  breadcrumbLabel: "Dissertation Methodology Help",
  keywords: [
    "dissertation methodology help",
    "research methodology help",
    "phd methodology chapter",
    "thesis methodology writing",
    "qualitative methodology help",
    "quantitative methodology help",
    "mixed methods help",
  ],
  tldr:
    "The methodology chapter is where examiners decide whether your study is rigorous or shaky. Our dissertation methodology help service pairs you with a PhD researcher who has examined methodology chapters at your level. We cover paradigm choice (positivist, interpretivist, pragmatist), research design (quantitative, qualitative, mixed-methods), sampling strategy, data collection instruments, analysis plan, ethics framing, and the written chapter — built to survive cross-examination at the viva.",
  whoFor: [
    "Candidates whose research design isn't matching their research question",
    "Master's and PhD students writing the methodology chapter from scratch",
    "Mixed-methods candidates struggling to integrate qual and quant phases",
    "Researchers whose supervisor flagged paradigm or sampling concerns",
    "Candidates preparing for a viva where methodology will be cross-examined",
    "International students working with methodological conventions new to them",
  ],
  whatsIncluded: [
    {
      title: "Paradigm & approach selection",
      description:
        "Choice and justification of your research paradigm (positivism, interpretivism, pragmatism, critical realism) and broad methodological approach.",
    },
    {
      title: "Research design",
      description:
        "Cross-sectional, longitudinal, experimental, quasi-experimental, case study, ethnography, phenomenology, grounded theory, action research, mixed-methods — designed to fit your question.",
    },
    {
      title: "Sampling strategy",
      description:
        "Probability or non-probability sampling, sample size justification (power analysis for quantitative; saturation logic for qualitative), and recruitment plan.",
    },
    {
      title: "Data collection instruments",
      description:
        "Survey instruments (validated scales or new instrument with pilot testing), interview protocols, observation schedules, document analysis frameworks.",
    },
    {
      title: "Analysis plan",
      description:
        "Statistical analysis plan (with software), thematic / framework / IPA / grounded theory coding plan, or integration strategy for mixed-methods.",
    },
    {
      title: "Methodology chapter",
      description:
        "Written chapter that argues every methodological choice, with explicit references to philosophy of science, methodological literature, and your specific question.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "The methodology question that decides everything",
      body:
        "Every methodology chapter must answer one question first: what kind of knowledge is your research trying to produce? A study that wants to test relationships between variables and generalise across a population needs one methodology. A study that wants to understand how a specific group makes sense of an experience needs a completely different one. A study that wants both needs an integrated mixed-methods design. Most dissertations stumble because the candidate picked a method (often the one their department teaches) before answering this question. Our methodology consultations always start here — the philosophical commitment, then the design that flows from it.",
    },
    {
      heading: "Quantitative methodology — beyond \"I ran a survey\"",
      body:
        "Quantitative methodology chapters fail when they treat the design as procedural rather than argued. Examiners want to see why this design (cross-sectional, longitudinal, experimental), why this sampling frame, why this sample size, why these instruments, why these analyses, and how each choice maps to your hypotheses. We help you write a quantitative methodology chapter that anticipates every methodological question the examiner will ask — and answers it before they have to.",
    },
    {
      heading: "Qualitative methodology — the rigour your examiner is looking for",
      body:
        "Qualitative methodology is where examiners are often most demanding. They look for paradigm clarity (interpretivism is not just \"I did interviews\"), method specificity (IPA, grounded theory, ethnography, phenomenology, narrative inquiry — each has its own conventions), reflexivity (your positioning as researcher), and trustworthiness (credibility, transferability, dependability, confirmability). We write qualitative methodology chapters that meet the rigour standards of leading qualitative journals — and survive examiners who lean quantitative.",
    },
    {
      heading: "Mixed-methods — integration is the hardest part",
      body:
        "Mixed-methods dissertations frequently get marked down not because the qual or quant phases are weak, but because they're not integrated. The classic failure mode: a quantitative chapter, a qualitative chapter, a discussion that summarises both. That is not mixed-methods — it's parallel methods. We design mixed-methods studies with explicit integration: sequential explanatory (quant → qual to explain), sequential exploratory (qual → quant to test), or concurrent (both phases informing a single integrated analysis). The chapter then makes the integration logic explicit so examiners can see the design holds together.",
    },
  ],
  pricingBlurb:
    "Methodology help is priced per chapter or per consultation. Indicative: methodology consultation (2 hours) from $180; full Master's methodology chapter from $340; full PhD methodology chapter from $780; mixed-methods integration consultation from $220; viva methodology rehearsal from $160. Free 30-minute scoping call.",
  faqs: [
    {
      question: "Can you help me choose between qualitative and quantitative?",
      answer:
        "Yes — this is the single most common request. In a 60–90 minute consultation, we'll talk through your research question, your access to data, your time constraints, and your discipline's conventions, then recommend the design that best fits. We will tell you honestly if a mixed-methods approach is overkill for your time-frame.",
    },
    {
      question: "Can you justify a small qualitative sample to an examiner?",
      answer:
        "Yes. Small samples in qualitative research are defensible when justified through information power, saturation, or the depth of analysis the design calls for. We write the rationale so examiners understand why six interviews in IPA can produce more insight than 60 surface-level surveys.",
    },
    {
      question: "Will you support the ethics application that follows from the methodology?",
      answer:
        "Yes. Methodology decisions drive ethics decisions, so we usually write both together. Ethics application package includes participant information sheets, consent forms, risk assessment, and data management plan in your university's template.",
    },
    {
      question: "How do you handle methodology rewrites after supervisor or examiner feedback?",
      answer:
        "Rewrites are mapped to the feedback line-by-line. Every concern raised gets a corresponding paragraph in the revised chapter, plus a covering note documenting exactly how each issue was addressed. This protects you if the same examiner reviews the revised version.",
    },
    {
      question: "Can you write the methodology in qualitative-friendly software like NVivo?",
      answer:
        "Yes. For qualitative methodologies we deliver your codebook in NVivo, MAXQDA, or ATLAS.ti depending on your preference. For quantitative, all syntax is delivered alongside the chapter (SPSS / R / Stata / Python).",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "Research methodology guide", href: "/research-methodology" },
    { label: "Mixed methods research", href: "/mixed-methods-research" },
    { label: "Qualitative analysis guide", href: "/qualitative-analysis" },
    { label: "Dissertation statistics help", href: "/dissertation-statistics-help" },
    { label: "Methodology selector tool", href: "/tools/methodology-selector" },
    { label: "IRB / ethics guide", href: "/irb-ethics-guide" },
  ],
};

// -------------------- 7) PhD Dissertation Help — consolidated hub (KD 39) --------------------
export const phdHelpConfig: ServicePillarConfig = {
  path: "/phd-dissertation-help",
  h1: "PhD Dissertation Help",
  lead:
    "Comprehensive PhD dissertation help — proposal, literature review, methodology, data analysis, chapters, editing, and viva preparation. One named PhD expert for every stage of your doctorate.",
  seoTitle: "PhD Dissertation Help",
  seoDescription:
    "PhD dissertation help across every stage: proposal, literature review, methodology, analysis, chapters, editing, viva. PhD experts in your exact subfield.",
  breadcrumbLabel: "PhD Dissertation Help",
  keywords: [
    "phd dissertation help",
    "doctoral dissertation help",
    "phd thesis help",
    "phd research help",
    "phd writing help",
    "help with phd dissertation",
  ],
  tldr:
    "PhD dissertation help should not mean handing your project to a stranger. It should mean a named PhD-qualified researcher — in your exact subfield — working alongside you from proposal to viva. Our PhD dissertation help service is structured around continuity: one expert match, scoping document, milestone schedule, weekly contact, and senior-reviewer oversight. We cover every stage (proposal, upgrade, literature, methodology, analysis, chapters, editing, viva prep) and every doctoral track (PhD, DPhil, DBA, EdD, DNP, DSocSci, EngD).",
  whoFor: [
    "Doctoral candidates writing-up after data collection",
    "PhDs stuck mid-chapter and falling behind schedule",
    "Part-time and working-professional doctoral candidates",
    "International PhDs writing in a second language",
    "Candidates preparing for upgrade, transfer, or viva voce examinations",
    "Researchers whose supervisor capacity is limited or absent",
  ],
  whatsIncluded: [
    {
      title: "Proposal & upgrade documents",
      description:
        "Research proposal, upgrade report, or transfer document framed around a defensible contribution to knowledge.",
    },
    {
      title: "Systematic & narrative literature reviews",
      description:
        "PRISMA-style or critical reviews, thematic synthesis, theoretical framework construction, and gap mapping.",
    },
    {
      title: "Methodology chapter",
      description:
        "Quantitative, qualitative, or mixed-methods designs with paradigm justification, sampling logic, and replicable protocols.",
    },
    {
      title: "Data analysis",
      description:
        "SPSS, R, Stata, SEM/AMOS, NVivo, MAXQDA, ATLAS.ti — plus the interpretation that turns output into argument.",
    },
    {
      title: "Findings & discussion chapters",
      description:
        "Theorised interpretation of results, contribution claims, and triangulation against your literature.",
    },
    {
      title: "Editing, formatting & viva preparation",
      description:
        "Final substantive edit, university-template formatting, mock viva by a second examiner, anticipated-question pack, and post-viva corrections support.",
    },
  ],
  process: sharedProcess,
  deliverables: sharedDeliverables,
  sections: [
    {
      heading: "What PhD dissertation help should actually look like",
      body:
        "Too much \"PhD help\" is transactional — you send chapter, you receive chapter, repeat. Quality doctoral support is structural. It begins with a written scoping document covering research question, contribution claim, methodology, chapter outline, and milestone schedule. It continues with the same expert across every stage — so by chapter five they know your literature, your methodology choices, and your supervisor's preferences as well as you do. Continuity is the difference between PhD help that costs you confidence and PhD help that builds it.",
    },
    {
      heading: "Common stages where PhD candidates seek help",
      body:
        "The most common entry points are the upgrade or transfer report (a mini-dissertation with high stakes), the methodology chapter (where supervisors often have least time to give detailed feedback), the data-analysis chapter (where most candidates run out of statistical confidence), the discussion chapter (where the contribution claim has to be defended explicitly), and viva preparation (where mock examinations make the difference between minor and major corrections). We support every stage — but most candidates start at one, see the value, and continue into others.",
    },
    {
      heading: "Working alongside supervisors and examiners",
      body:
        "Our work is designed to fit alongside your supervisor's input, not replace it. You stay in control of every supervisor-facing document. We brief you on the reasoning behind every chapter so the conversation with your supervisor sounds like yours — because it is. For viva preparation we run mock examinations with a second PhD-qualified examiner who has not seen your draft, so the questions are genuinely cold.",
    },
    {
      heading: "Doctoral specialisations we cover",
      body:
        "Business & Management (DBA and PhD), Education (EdD and PhD), Nursing & Public Health (DNP and PhD), Psychology, Engineering (EngD and PhD), Computer Science, Law (PhD and SJD), Sociology, Political Science, Economics, Environmental Science, Pharmacy, Built Environment, and Healthcare Policy. For interdisciplinary projects we assemble a small expert team — typically a methodologist plus a subject specialist — so neither side of your research is under-served.",
    },
  ],
  pricingBlurb:
    "PhD dissertation help is quoted per stage or per phase. Indicative ranges: systematic literature review $1,200–$2,200, methodology chapter $780–$1,400, data analysis $900–$2,500, full discussion chapter from $680, full dissertation support from $5,800. Flexible milestone-based payment plans. Free 30-minute scoping call.",
  faqs: [
    {
      question: "Do you write a PhD dissertation from scratch?",
      answer:
        "We provide model chapters, methodology design, data analysis, and editing with you as the principal researcher. The work is original, written specifically for your project, and structured so you can defend every decision in a viva. We do not sell pre-written dissertations.",
    },
    {
      question: "Can you help with my upgrade or transfer report?",
      answer:
        "Yes. Upgrade and transfer reports are a frequent entry point — typically 6,000–12,000 words covering research question, literature, methodology, pilot findings, and remaining workplan. We've supported hundreds of successful upgrades across UK, US, and Australian doctoral programmes.",
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
    {
      question: "Do you support DBAs, EdDs, and DNPs as well as PhDs?",
      answer:
        "Yes. Professional doctorates have their own conventions (applied contribution, action research, capstone framing). Our DBA / EdD / DNP experts hold the same degree type they support. See our capstone & dissertation page for the full professional-doctorate breakdown.",
    },
    ...sharedFaqs,
  ],
  related: [
    { label: "PhD dissertation writing services", href: "/phd-dissertation-writing-services" },
    { label: "Dissertation editing services", href: "/dissertation-editing-services" },
    { label: "Dissertation statistics help", href: "/dissertation-statistics-help" },
    { label: "Dissertation coaching", href: "/dissertation-coaching" },
    { label: "Viva preparation guide", href: "/viva-preparation" },
    { label: "Pricing", href: "/pricing" },
  ],
};
