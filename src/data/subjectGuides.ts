import type { GuideHubConfig } from "@/components/guides/GuideHubPage";

// Phase 5 — subject verticals. Each page maps to "<subject> dissertation help" intent
// and routes to /subjects/<slug>.

interface SubjectSeed {
  slug: string;
  subject: string;
  keyword: string;
  methods: string;
  journals: string;
  topics: string[];
  dataNote: string;
  ethicsNote: string;
  tableRows: string[][];
}

const seeds: SubjectSeed[] = [
  {
    slug: "nursing",
    subject: "Nursing",
    keyword: "nursing dissertation help",
    methods: "systematic and integrative reviews, mixed-methods service evaluation, qualitative interview studies with clinical staff, and quantitative audit of routinely collected patient data",
    journals: "Journal of Advanced Nursing, International Journal of Nursing Studies, Journal of Clinical Nursing, BMJ Quality & Safety",
    topics: [
      "Nurse staffing levels and patient outcomes in acute settings",
      "Barriers to early sepsis recognition on general wards",
      "Experiences of newly qualified nurses during preceptorship",
      "Medication administration error reporting culture",
      "Community nursing caseload management and continuity of care",
      "Nurse-led discharge planning and readmission rates",
    ],
    dataNote:
      "Nursing dissertations frequently rely on secondary clinical data or service-evaluation data, which raises governance questions well before ethics: who owns the dataset, whether the project is research or evaluation, and whether NHS or hospital research governance approval is required in addition to university ethics.",
    ethicsNote:
      "Where patients or clinical records are involved, expect a two-stage process: university ethics plus health-service governance (IRAS in the UK, IRB plus HIPAA considerations in the US). Build eight to twelve weeks into your timeline for this.",
    tableRows: [
      ["Systematic / integrative review", "No primary data access needed", "PRISMA compliance, screening burden"],
      ["Service evaluation", "Fast governance route in many trusts", "Weaker generalisability claims"],
      ["Qualitative interviews with staff", "Rich data, feasible sample sizes", "Recruitment during shift patterns"],
      ["Retrospective audit", "Large samples, no recruitment", "Data quality and missingness"],
    ],
  },
  {
    slug: "business",
    subject: "Business and Management",
    keyword: "business dissertation help",
    methods: "survey-based quantitative studies with structural equation modelling, multiple case studies, qualitative interview studies with managers, and secondary analysis of firm-level financial data",
    journals: "Journal of Management, Academy of Management Journal, British Journal of Management, Journal of Business Research",
    topics: [
      "Hybrid working arrangements and team performance",
      "ESG disclosure quality and cost of capital",
      "Digital transformation in mid-sized family firms",
      "Employer branding and graduate application intention",
      "Supply chain resilience after a demand shock",
      "Leadership style and psychological safety in agile teams",
    ],
    dataNote:
      "Business dissertations are often data-rich but theory-poor. Examiners are far more likely to challenge the theoretical framing — why this construct, why this mediator — than the analysis. Decide your framework before your questionnaire.",
    ethicsNote:
      "Organisational access is the practical constraint. Secure written gatekeeper permission early and design a fallback: a panel-recruited sample or a secondary dataset that answers a slightly narrower version of your question.",
    tableRows: [
      ["Survey + SEM", "Tests a full model, publishable", "Needs 200+ responses, validated scales"],
      ["Multiple case study", "Depth and context", "Access, cross-case analysis discipline"],
      ["Secondary financial data", "Large n, no recruitment", "Limited to available constructs"],
      ["Experiment / vignette", "Causal claims", "External validity questions"],
    ],
  },
  {
    slug: "psychology",
    subject: "Psychology",
    keyword: "psychology dissertation help",
    methods: "experimental designs, validated-scale survey studies, IPA and thematic analysis of interview data, and pre-registered replication work",
    journals: "Journal of Abnormal Psychology, British Journal of Psychology, Psychological Science, Qualitative Research in Psychology",
    topics: [
      "Sleep quality and emotion regulation in undergraduates",
      "Social media use and body image in adolescent girls",
      "Interpretation bias in socially anxious adults",
      "Lived experience of adult ADHD diagnosis",
      "Mindfulness intervention effects on exam anxiety",
      "Attachment style and conflict resolution in couples",
    ],
    dataNote:
      "Psychology examiners scrutinise measurement and power more than any other discipline. Report an a priori power analysis, use validated instruments with reported reliability in your own sample, and state your analysis plan before data collection.",
    ethicsNote:
      "Vulnerable populations, deception, distress and debriefing dominate psychology ethics review. If your study touches on mental health, have a signposting and distress protocol drafted before you apply.",
    tableRows: [
      ["Experiment", "Causal inference", "Power, ecological validity"],
      ["Correlational survey", "Feasible, large samples", "No causal claims"],
      ["IPA / thematic analysis", "Depth on experience", "6–12 participants, reflexivity demands"],
      ["Pre-registered replication", "Strong methodological credit", "Less novelty for some examiners"],
    ],
  },
  {
    slug: "education",
    subject: "Education",
    keyword: "education dissertation help",
    methods: "practitioner action research, mixed-methods case studies of schools or programmes, quantitative analysis of attainment data, and qualitative studies of teacher and learner experience",
    journals: "British Educational Research Journal, Review of Educational Research, Teaching and Teacher Education, Studies in Higher Education",
    topics: [
      "Formative feedback practices and pupil self-efficacy",
      "Teacher retention in the first five years",
      "Implementation of retrieval practice in secondary science",
      "Widening-participation students' sense of belonging",
      "Assessment literacy among early-career lecturers",
      "Parental engagement interventions in primary literacy",
    ],
    dataNote:
      "Education dissertations often study the researcher's own institution, which is legitimate but requires explicit handling of insider positionality, power over participants, and the boundary between professional and research roles.",
    ethicsNote:
      "Working with children requires safeguarding clearance, parental consent plus child assent, and a data-handling plan agreed with the school. Anonymising a single institution is rarely fully possible — say so and manage it.",
    tableRows: [
      ["Action research", "Directly useful to practice", "Insider bias, small scale"],
      ["Mixed-methods case study", "Explains a mechanism in context", "Integration must be genuine"],
      ["Attainment data analysis", "Large n, policy relevance", "Access, confounding"],
      ["Teacher interview study", "Depth on practice", "Recruitment during term"],
    ],
  },
  {
    slug: "law",
    subject: "Law",
    keyword: "law dissertation help",
    methods: "doctrinal analysis, comparative legal analysis, socio-legal empirical work, and critical or theoretical legal scholarship",
    journals: "Modern Law Review, Oxford Journal of Legal Studies, Harvard Law Review, Journal of Law and Society",
    topics: [
      "Regulating algorithmic decision-making under data protection law",
      "Comparative approaches to corporate criminal liability",
      "Access to justice after legal aid reform",
      "Climate litigation and standing doctrine",
      "Modern slavery reporting duties and enforcement gaps",
      "Consent standards in medical negligence after Montgomery",
    ],
    dataNote:
      "A law dissertation is an argument, not a survey of authority. The most common failure is descriptive: three chapters explaining the law followed by a thin critique. Lead with the claim and use authority to build it.",
    ethicsNote:
      "Doctrinal work rarely needs ethics approval; socio-legal work involving interviews with practitioners, litigants or vulnerable groups does — and often requires additional confidentiality safeguards where cases are ongoing.",
    tableRows: [
      ["Doctrinal", "No fieldwork, deep authority engagement", "Risk of description over argument"],
      ["Comparative", "Fresh perspective on a domestic problem", "Language and context competence"],
      ["Socio-legal empirical", "Evidence of law in practice", "Ethics, access to practitioners"],
      ["Theoretical / critical", "Conceptual contribution", "Must still engage doctrine closely"],
    ],
  },
  {
    slug: "engineering",
    subject: "Engineering",
    keyword: "engineering dissertation help",
    methods: "experimental rig work, numerical simulation and finite element modelling, optimisation studies, and design-and-validation projects",
    journals: "Journal of Mechanical Engineering Science, IEEE Transactions, Engineering Structures, Applied Energy",
    topics: [
      "Fatigue behaviour of additively manufactured lattice structures",
      "Model predictive control for building energy demand",
      "CFD analysis of heat exchanger fouling",
      "Structural health monitoring using vibration signatures",
      "Battery thermal management under fast-charge cycles",
      "Topology optimisation for lightweight brackets",
    ],
    dataNote:
      "Engineering theses are judged on validation. A simulation without experimental or analytical validation, or an experiment without uncertainty quantification, is the standard route to major corrections.",
    ethicsNote:
      "Ethics review is usually light, but risk assessment, lab safety approval and equipment scheduling are hard constraints. Build in equipment downtime — it is the most common cause of engineering timeline slippage.",
    tableRows: [
      ["Experimental", "Direct evidence", "Rig time, uncertainty analysis"],
      ["Numerical / FEA / CFD", "Parametric breadth", "Mesh and model validation required"],
      ["Optimisation study", "Clear contribution metric", "Objective-function justification"],
      ["Design and build", "Tangible deliverable", "Validation against specification"],
    ],
  },
  {
    slug: "computer-science",
    subject: "Computer Science",
    keyword: "computer science dissertation help",
    methods: "algorithm design with complexity analysis, empirical machine-learning evaluation, systems implementation with benchmarking, and human–computer interaction user studies",
    journals: "ACM Transactions, IEEE TPAMI, Journal of Machine Learning Research, CHI proceedings",
    topics: [
      "Parameter-efficient fine-tuning under constrained compute",
      "Adversarial robustness of vision transformers",
      "Privacy-preserving federated learning for clinical data",
      "Static analysis for detecting insecure dependency use",
      "Explainability requirements in clinical decision support",
      "Energy-aware scheduling in edge deployments",
    ],
    dataNote:
      "Evaluation design is where computer science dissertations are won. Define baselines, datasets, metrics, ablations and statistical treatment of run-to-run variance before you begin — reporting a single seed is a standard examiner objection.",
    ethicsNote:
      "User studies require full ethics review. Scraped or web-derived datasets require licence and privacy scrutiny, and models trained on personal data raise data-protection questions your methodology should address explicitly.",
    tableRows: [
      ["Algorithmic / theoretical", "Clean contribution", "Needs proof-level rigour"],
      ["Empirical ML", "Publishable, dataset-driven", "Baselines, seeds, ablations"],
      ["Systems implementation", "Demonstrable artefact", "Benchmark design, reproducibility"],
      ["HCI user study", "Human relevance", "Ethics, participant recruitment"],
    ],
  },
  {
    slug: "public-health",
    subject: "Public Health",
    keyword: "public health dissertation help",
    methods: "secondary analysis of national survey data, systematic review and meta-analysis, epidemiological cohort or cross-sectional analysis, and qualitative studies of health behaviour and access",
    journals: "The Lancet Public Health, American Journal of Public Health, BMC Public Health, International Journal of Epidemiology",
    topics: [
      "Socioeconomic gradients in vaccine uptake",
      "Food environment exposure and childhood obesity",
      "Access barriers to sexual health services for young men",
      "Air quality interventions and respiratory admissions",
      "Digital exclusion and remote primary care access",
      "Mental health outcomes among informal carers",
    ],
    dataNote:
      "Public health dissertations frequently use open secondary datasets — national health surveys, census-linked data, surveillance records. Confounding control, missing-data strategy and pre-specified analysis plans matter more than sample acquisition.",
    ethicsNote:
      "Secondary analysis of anonymised open data often needs only a light ethics route, but data-access agreements and safe-haven conditions can take months. Primary work with communities requires full review plus a dissemination plan.",
    tableRows: [
      ["Secondary survey analysis", "Large n, low cost", "Constrained to available variables"],
      ["Systematic review / meta-analysis", "High citation value", "Screening workload, PRISMA"],
      ["Epidemiological cohort analysis", "Strong inference", "Data access, confounding"],
      ["Qualitative access study", "Explains behaviour", "Recruitment in hard-to-reach groups"],
    ],
  },
];

const build = (s: SubjectSeed): GuideHubConfig => ({
  path: `/subjects/${s.slug}`,
  h1: `${s.subject} Dissertation Help: Topics, Methods and Expert Support`,
  lead: `Specialist ${s.subject.toLowerCase()} dissertation and thesis support for Master's and PhD candidates — topic scoping, methodology design, analysis, and chapter-level editing from experts who have examined and published in the field.`,
  seoTitle: `${s.subject} Dissertation Help: Topics, Methods, Experts`,
  seoDescription: `${s.subject} dissertation help for Master's and PhD students: viable topics, method selection, data and ethics considerations, and expert chapter support.`,
  breadcrumbLabel: `${s.subject} Dissertations`,
  keywords: [
    s.keyword,
    `${s.subject.toLowerCase()} dissertation topics`,
    `${s.subject.toLowerCase()} thesis help`,
    `${s.subject.toLowerCase()} dissertation methodology`,
  ],
  answerBox: `${s.subject} dissertations are usually built on ${s.methods}. Choose the design your research question actually requires, confirm data access and ethics clearance before you commit, and frame your contribution against the conversation in journals such as ${s.journals}. The most common cause of delay in this field is not writing — it is discovering an access or approval constraint after the proposal is approved.`,
  table: {
    caption: `Common ${s.subject.toLowerCase()} dissertation designs, with their practical trade-offs.`,
    headers: ["Design", "Strength", "Main constraint"],
    rows: s.tableRows,
  },
  sections: [
    {
      heading: `Viable ${s.subject.toLowerCase()} dissertation topics`,
      body: [
        `A viable topic in ${s.subject.toLowerCase()} satisfies three conditions at once: there is a genuine gap in the literature, there is a design that could close it within your timeline, and the data or access that design requires is obtainable by you specifically. Topics fail on the third condition far more often than the first.`,
        `Examples that satisfy all three for current Master's and PhD candidates include: ${s.topics.slice(0, 3).join("; ")}; ${s.topics.slice(3).join("; ")}.`,
        `Narrow before you broaden. A question about a specified population, in a specified setting, over a specified period is examinable; the same question asked generally is a research programme, not a dissertation. If your title has no boundary conditions in it, it is not narrow enough yet.`,
      ],
    },
    {
      heading: "Choosing the method your question requires",
      body: [
        `The design should follow the question, not your software competence. In ${s.subject.toLowerCase()}, the recurring error is selecting a familiar method and then reshaping the question to fit it — a mismatch examiners identify immediately, because the methodology chapter ends up justifying the method rather than the choice.`,
        `Write your methodology justification as a comparison: the question required X, this design delivers X, the obvious alternative would have delivered Y, and here is the trade-off accepted. That paragraph pre-empts the single most common viva question in the field.`,
        s.dataNote,
      ],
    },
    {
      heading: "Data, access and ethics in this field",
      body: [
        s.ethicsNote,
        `Map your approval chain on a calendar before you write the proposal: which committees, in which order, with what documentation, and what the realistic turnaround is at each stage. Candidates who lose a term almost always lose it here rather than in analysis.`,
        `Prepare a documented fallback design. If access to your first-choice population fails, the fallback should answer a slightly narrower version of the same question using data you can definitely obtain. Supervisors respect a candidate who arrives with a plan B; committees approve them faster.`,
      ],
    },
    {
      heading: `How we support ${s.subject.toLowerCase()} candidates`,
      body: [
        `We match each project to a named expert with a doctorate and publication record in the relevant subfield, not to a general academic writer. That matters in ${s.subject.toLowerCase()}, where conventions for reporting, structuring and citing differ sharply from neighbouring disciplines.`,
        `Support is scoped to what you need: a topic and feasibility review, a proposal or methodology chapter, analysis with plain-English interpretation of output, a chapter-level developmental edit, or viva preparation with a mock defence in your subfield. You can start with one chapter — there is no minimum project and no consultation fee.`,
        `Every deliverable arrives with a similarity report on request, your data handled under a confidentiality agreement, and unlimited revisions inside the agreed scope. Work is supplied as a model, reference and teaching resource, and you retain authorship and control of the submitted document.`,
      ],
    },
  ],
  checklist: {
    title: `${s.subject} dissertation readiness checklist`,
    items: [
      "Research question has a named population, setting and period",
      "Gap is evidenced by three to five recent sources, not asserted",
      "Design justified by comparison with the obvious alternative",
      "Data source or participant access confirmed in writing",
      "Ethics and governance route mapped on a calendar",
      "Analysis plan written before data collection begins",
      "Fallback design documented and agreed with supervisor",
      "Target journals identified for post-submission publication",
    ],
  },
  faqs: [
    {
      question: `Can you help me choose a ${s.subject.toLowerCase()} dissertation topic?`,
      answer: `Yes. We run a feasibility review on two or three candidate topics: whether the gap is real against current literature, whether the design is achievable in your timeline, and whether the data or access it needs is obtainable at your institution. You get a short written assessment with a recommended question.`,
    },
    {
      question: "Will my supervisor be able to tell I had support?",
      answer:
        "Support is delivered as feedback, models and analysis you then work from and write in your own voice, which is the same role a writing centre or statistical adviser plays. We do not submit anything on your behalf, and everything is handled confidentially.",
    },
    {
      question: "Do you handle the statistics or qualitative coding as well as the writing?",
      answer:
        "Yes. Analysis is delivered with the output files, the syntax or coding structure, and a plain-English interpretation you can defend in a viva — including what the result does not show.",
    },
    {
      question: "How much does help with one chapter cost?",
      answer:
        "Pricing is per page and starts at $15, so a single chapter is a small order rather than a package commitment. There is no consultation fee and you get a full quote before anything begins.",
    },
    {
      question: "Is my work checked for similarity and AI detection?",
      answer:
        "Every deliverable is written from scratch by a human subject expert and checked for similarity. A Turnitin-style similarity report is available on request with any order.",
    },
  ],
  related: [
    { label: "Dissertation Help Online", href: "/dissertation-help", description: "Named PhD experts across all stages." },
    { label: "Dissertation Statistics Help", href: "/dissertation-statistics-help", description: "SPSS, R and Stata analysis with interpretation." },
    { label: "Research Methodology Guide", href: "/research-methodology", description: "Design selection and justification." },
    { label: "All subject areas", href: "/subjects", description: "Every discipline we cover." },
  ],
  ctaLine: `Tell us your ${s.subject.toLowerCase()} research question and deadline and we will tell you, free, whether it is achievable and what it would take.`,
});

export const subjectGuides: GuideHubConfig[] = seeds.map(build);
export const subjectSlugs = seeds.map((s) => ({ slug: s.slug, subject: s.subject }));
