export interface AnswerItem {
  q: string;
  a: string;
  link?: { label: string; href: string };
}

export interface AnswerGroup {
  id: string;
  title: string;
  intro: string;
  items: AnswerItem[];
}

// Phase 6 — short, directly-quotable answers. This is the format LLM assistants
// cite from, and each answer is self-contained so it survives being extracted.
export const answerGroups: AnswerGroup[] = [
  {
    id: "structure",
    title: "Structure and word counts",
    intro:
      "Chapter-level structure questions, with the numbers examiners actually work to.",
    items: [
      {
        q: "How long is a PhD thesis?",
        a: "Most PhD theses run 70,000–100,000 words. UK humanities and social science theses are typically capped at 80,000–100,000 words excluding references and appendices; UK STEM theses are often capped at 40,000–60,000. US dissertations average 150–250 pages. Master's dissertations are usually 15,000–25,000 words.",
        link: { label: "PhD thesis length by country", href: "/how-long-is-a-phd-thesis" },
      },
      {
        q: "What are the chapters of a dissertation?",
        a: "The standard five-chapter structure is introduction, literature review, methodology, findings and discussion, followed by a conclusion. Many PhD theses split findings and discussion into separate chapters and add a contribution-focused conclusion.",
        link: { label: "Dissertation structure guide", href: "/dissertation-structure" },
      },
      {
        q: "How should I budget words across chapters?",
        a: "For an 80,000-word thesis: introduction 6,000–8,000; literature review 15,000–20,000; methodology 10,000–12,000; findings 12,000–18,000; discussion 15,000–18,000; conclusion 5,000–7,000. The discussion should never be shorter than the findings.",
      },
      {
        q: "What is the difference between a dissertation and a thesis?",
        a: "In UK usage, a dissertation is usually the Master's-level project and a thesis is the doctoral one. In US usage the terms are reversed: a thesis is the Master's project and a dissertation is the doctoral one. The document requirements matter more than the label.",
        link: { label: "Dissertation vs thesis", href: "/dissertation-vs-thesis" },
      },
      {
        q: "Does the word limit include references and appendices?",
        a: "Usually not. Most regulations count the main body and footnotes and exclude the bibliography, appendices, abstract and front matter. Some institutions do count footnotes, which matters in heavily annotated humanities work, so read the exact clause.",
      },
      {
        q: "How many references should a dissertation have?",
        a: "A 15,000-word Master's dissertation typically cites 50–80 sources; an 80,000-word PhD thesis typically cites 200–400. Recency matters more than volume — examiners look for engagement with work from the last five years.",
      },
    ],
  },
  {
    id: "findings",
    title: "Findings, results and discussion",
    intro: "Where the chapter boundary sits, and how to report evidence so it can be audited.",
    items: [
      {
        q: "How do you present dissertation findings?",
        a: "Report findings in the order your research questions were asked, without interpreting them. For each question: restate it, name the data that answers it, present one table or figure with the statistics or themes, and close with one factual sentence. Interpretation belongs in the discussion.",
        link: { label: "Findings chapter guide", href: "/dissertation-findings-chapter" },
      },
      {
        q: "What is the difference between findings and discussion?",
        a: "Findings report what you observed and can be verified against your dataset. The discussion explains what it means, compares it with prior literature, accounts for why it occurred, and states implications. If a sentence needs a citation or the word 'because', it belongs in the discussion.",
        link: { label: "Findings vs discussion", href: "/findings-vs-discussion-difference" },
      },
      {
        q: "How should statistics be reported in a dissertation?",
        a: "Report four components for every inferential result: the test statistic, the degrees of freedom, the exact p-value, and an effect size with its confidence interval. Missing effect sizes are the most common correction in quantitative dissertations.",
        link: { label: "Presenting quantitative results", href: "/presenting-quantitative-results-tables-figures" },
      },
      {
        q: "How many quotations should each qualitative theme have?",
        a: "Two to three, from different participants, each demonstrating a different facet of the claim. Also state evidence spread — for example 'present in 11 of 18 interviews' — so the examiner can judge whether the theme rests on the whole dataset.",
        link: { label: "Presenting qualitative findings", href: "/presenting-qualitative-findings-themes-quotes" },
      },
      {
        q: "Can I include SPSS output in my dissertation?",
        a: "Not in the chapter itself. Retype the values into a formatted table in your citation style. Full software output can go in an appendix if your department requires evidence of the analysis.",
      },
      {
        q: "Should non-significant results be reported?",
        a: "Yes. Report every analysis you described in the methodology, including null results. Selective reporting is the most serious fault an examiner can find in a results chapter, and a null result is a finding that constrains explanations.",
      },
      {
        q: "How long should a discussion chapter be?",
        a: "Usually 20–25% of the dissertation, and in most PhD theses longer than the findings chapter. If the discussion is shorter than the findings, it is probably summarising rather than arguing.",
        link: { label: "Discussion chapter example", href: "/dissertation-discussion-chapter-example" },
      },
    ],
  },
  {
    id: "methodology",
    title: "Methodology and analysis",
    intro: "Design justification, sample size and the questions that come up at review.",
    items: [
      {
        q: "How do I justify my methodology?",
        a: "Write the justification as a comparison: the research question required X, this design delivers X, the obvious alternative would have delivered Y, and here is the trade-off accepted. Examiners test whether alternatives were considered, not whether your choice was perfect.",
        link: { label: "Research methodology guide", href: "/research-methodology" },
      },
      {
        q: "What sample size does a dissertation need?",
        a: "For quantitative work, run an a priori power analysis and report it: surveys with structural equation modelling generally need 200+ responses, while a simple group comparison may need 60–120. Qualitative interview studies typically use 12–25 participants, or 6–12 for interpretative phenomenological analysis.",
      },
      {
        q: "What is the difference between methodology and methods?",
        a: "Methods are the procedures you used; methodology is the argument for why those procedures answer your question. A methodology chapter that only describes procedures is the most common structural weakness examiners report.",
      },
      {
        q: "How many themes should a qualitative dissertation have?",
        a: "Three to six for most Master's and PhD studies. More than six usually means subthemes have been promoted to themes; fewer than three often means the themes are too broad to be analytic.",
      },
      {
        q: "Do I need to report assumption checks?",
        a: "Yes, briefly. Cover normality, homogeneity of variance, multicollinearity and independence as relevant to your tests, before the tests that depend on them. Omitting them invites the assumption that they were not run.",
      },
      {
        q: "What is triangulation in mixed-methods research?",
        a: "Using two or more data sources, methods or analysts to examine the same phenomenon so that convergence strengthens a claim and divergence is treated as a finding to explain. In mixed-methods theses, integration — not the presence of both strands — is the assessed deliverable.",
        link: { label: "Mixed-methods research", href: "/mixed-methods-research" },
      },
    ],
  },
  {
    id: "viva",
    title: "Viva, defense and corrections",
    intro: "What examiners ask, how long it takes, and what the outcomes mean.",
    items: [
      {
        q: "What questions are asked in a PhD viva?",
        a: "Almost every viva opens with three: summarise your thesis, state your original contribution, and justify your methodology. The rest cluster into contribution and originality, methodological alternatives, interpretation of findings, and limitations.",
        link: { label: "40 defense questions", href: "/dissertation-defense-questions-and-answers" },
      },
      {
        q: "How long does a viva last?",
        a: "UK vivas usually run 1.5–3 hours. US defenses are often 1–2 hours, frequently including a public presentation. Length is not an indicator of outcome.",
      },
      {
        q: "Can you fail a PhD viva?",
        a: "Outright failure is rare. The usual outcomes are pass with minor corrections, pass with major corrections, or revise and resubmit. Preparation mostly determines which of those bands you land in.",
      },
      {
        q: "How should I prepare for a viva in the final two weeks?",
        a: "Re-read the thesis building a page index of claims you would find hard to defend, prepare a short answer for each, run a mock defence with a non-specialist, and read your examiners' recent work so you can anticipate the framework their questions will come from.",
        link: { label: "Viva preparation", href: "/viva-preparation" },
      },
      {
        q: "What counts as an original contribution?",
        a: "Originality can be empirical (new data), theoretical (a new or extended framework), methodological (a new technique or a new application of one), or contextual (an established approach tested in an untested setting). Name which kind yours is in one sentence.",
      },
    ],
  },
  {
    id: "process",
    title: "Timelines, supervision and progress",
    intro: "How long each stage takes and how to keep a project moving.",
    items: [
      {
        q: "How long does it take to write a dissertation?",
        a: "A 15,000-word Master's dissertation typically takes 3–4 months of focused work after ethics approval. PhD write-up alone usually takes 9–18 months full-time once analysis is complete, and considerably longer part-time.",
      },
      {
        q: "How long does ethics approval take?",
        a: "University ethics review commonly takes 2–8 weeks. Health-service governance in addition to university ethics — IRAS in the UK, IRB plus institutional data agreements in the US — routinely takes 8–16 weeks. Map it on a calendar before writing the proposal.",
      },
      {
        q: "What should I do if my supervisor is unresponsive?",
        a: "Move to short written updates with specific decision requests and a deadline, keep a dated record of every attempt, and escalate to the postgraduate research director or graduate school after two documented cycles. Supervision problems are a recognised ground for support, not a personal failing.",
        link: { label: "Limited supervision guide", href: "/limited-supervision" },
      },
      {
        q: "Can I do a PhD while working full time?",
        a: "Yes — part-time doctorates typically take 5–8 years. The candidates who finish protect two fixed writing blocks per week, negotiate them with their employer in advance, and choose designs that use accessible or secondary data rather than long recruitment cycles.",
        link: { label: "Part-time PhD guide", href: "/part-time-phd" },
      },
      {
        q: "What happens if I miss my submission deadline?",
        a: "Most institutions allow an extension or interruption on documented grounds, requested before the deadline rather than after. Late requests are frequently refused, so raise the case with your graduate school as soon as slippage becomes likely.",
        link: { label: "Deadlines and deferrals", href: "/deadlines-deferrals" },
      },
    ],
  },
  {
    id: "integrity",
    title: "Academic integrity, Turnitin and AI",
    intro: "Similarity, detection and disclosure — answered plainly.",
    items: [
      {
        q: "What Turnitin similarity score is acceptable?",
        a: "There is no universal threshold. Most institutions treat under 15% as unremarkable when matches are references, method boilerplate and correctly cited quotations. A single uncited match of a few hundred words matters far more than a high overall percentage.",
      },
      {
        q: "Does Turnitin detect AI-generated writing?",
        a: "Turnitin operates a separate AI-writing indicator alongside the similarity report. Its output is a probability estimate, not proof, and institutions are advised to treat it as a prompt for enquiry rather than a finding. Keep drafts and notes so you can evidence your writing process.",
        link: { label: "AI detection guide", href: "/ai-detection-guide" },
      },
      {
        q: "Do I need to declare AI use in my dissertation?",
        a: "Most universities now require disclosure of substantive AI assistance, often in a methods or acknowledgements statement, and prohibit AI-generated text presented as your own. Policies differ per institution, so check yours and record what you used and how.",
        link: { label: "AI policy checker", href: "/tools/ai-policy-checker" },
      },
      {
        q: "How do I cite ChatGPT or other AI tools?",
        a: "APA 7 treats generative AI as software: cite the model, version and date, and place the prompt and output in an appendix. Other styles have equivalent provisions. Where the tool shaped your analysis, describe that in the methodology as well.",
        link: { label: "Citing AI guide", href: "/citing-ai-guide" },
      },
      {
        q: "Is using a dissertation writing service allowed?",
        a: "Editing, statistical consultancy, feedback and model or exemplar material are standard academic support that most institutions permit and many provide themselves. Submitting work you did not write as your own is not. Keep support in the first category and disclose it where your institution requires.",
      },
      {
        q: "Is my data kept confidential?",
        a: "It should be covered by a written confidentiality agreement, with your identity and institution never disclosed, data used only for your project, and files deleted on request. Ask any provider for that in writing before sharing a dataset.",
      },
    ],
  },
  {
    id: "services",
    title: "Getting help with a dissertation",
    intro: "How professional support works, what it costs and where the boundaries sit.",
    items: [
      {
        q: "How much does dissertation help cost?",
        a: "At DissertlyPro, pricing is per page and starts at $15, with the final rate depending on academic level, deadline and service type. There is no consultation fee and no minimum project, so a single chapter or a statistics run is a small order.",
        link: { label: "Order a page or a chapter", href: "/order" },
      },
      {
        q: "Can I get help with only one chapter?",
        a: "Yes. Most clients start with one chapter — commonly the methodology or the findings — then extend if the work is useful. You receive a full quote before anything begins.",
        link: { label: "Dissertation help online", href: "/dissertation-help" },
      },
      {
        q: "Who writes the work?",
        a: "Named subject experts holding doctorates in the relevant field, matched to your discipline rather than assigned as general academic writers. You can see profiles and specialisms before work starts.",
        link: { label: "Meet the experts", href: "/experts" },
      },
      {
        q: "What if I need revisions?",
        a: "Revisions are unlimited within the agreed scope and are handled by the same expert. If supervisor feedback changes direction, send it and the work is revised against that feedback.",
      },
      {
        q: "How fast can work be delivered?",
        a: "Standard turnaround for a chapter is 5–7 days, with 24–72 hour options available at a higher rate. Statistical analysis of a clean dataset is typically 48–72 hours.",
      },
      {
        q: "Do you help with statistics as well as writing?",
        a: "Yes. SPSS, R, Stata, AMOS and NVivo work is delivered with the output files, the syntax or coding structure, and a plain-English interpretation you can defend — including what the result does not show.",
        link: { label: "Dissertation statistics help", href: "/dissertation-statistics-help" },
      },
    ],
  },
];

export const allAnswers = answerGroups.flatMap((g) => g.items);
