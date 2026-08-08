import type { GuideHubConfig } from "@/components/guides/GuideHubPage";

// Phase 3 — "Chapters & Results" cluster.
// Each guide targets a low-difficulty informational query that already earns
// impressions through the findings-chapter hub, and links back into it.

const hubLink = {
  label: "How to Present Dissertation Findings",
  href: "/dissertation-findings-chapter",
  description: "The cluster hub: findings vs discussion, tables, themes and a submission checklist.",
};

const helpLink = {
  label: "Dissertation Help Online",
  href: "/dissertation-help",
  description: "Named PhD experts for chapter drafting, analysis and editing.",
};

const statsLink = {
  label: "Dissertation Statistics Help",
  href: "/dissertation-statistics-help",
  description: "SPSS, R and Stata analysis with plain-English interpretation.",
};

export const resultsSectionExample: GuideHubConfig = {
  path: "/dissertation-results-section-example",
  h1: "Dissertation Results Section Example (Annotated, Quantitative and Qualitative)",
  lead:
    "Two full worked examples of a dissertation results section — one quantitative, one qualitative — annotated line by line so you can see exactly which sentences report, which sentences summarise, and which sentences would cost you marks by interpreting too early.",
  seoTitle: "Dissertation Results Section Example: Annotated Samples",
  seoDescription:
    "Annotated dissertation results section examples for quantitative and qualitative studies: structure, reporting standards, table formatting and the sentences examiners penalise.",
  breadcrumbLabel: "Results Section Example",
  keywords: [
    "dissertation results section example",
    "results chapter example dissertation",
    "how to write results section dissertation",
    "sample results chapter",
  ],
  answerBox:
    "A dissertation results section opens with a short roadmap, describes the sample and any data cleaning, then works through each research question in turn: restate the question, present the evidence in one table or figure, report the statistics in full (test statistic, degrees of freedom, exact p-value, effect size and confidence interval), and close with one factual sentence. Qualitative results follow the same rhythm with themes and two to three participant quotations in place of statistics. No interpretation appears anywhere in the chapter.",
  table: {
    caption: "The four-move pattern each results subsection should follow.",
    headers: ["Move", "What it does", "Typical length"],
    rows: [
      ["Restate", "Repeats the research question as a heading and one sentence", "1 sentence"],
      ["Situate", "Names the data and analysis used to answer it", "1–2 sentences"],
      ["Present", "One table or figure plus prose that reads the key values", "1 exhibit + 1 paragraph"],
      ["Summarise", "States the factual outcome without explaining it", "1 sentence"],
    ],
  },
  sections: [
    {
      heading: "Quantitative results example, annotated",
      body: [
        "\"4.2 Does supervision frequency predict submission delay? Submission delay was regressed on monthly supervision contact, controlling for funding status and mode of study (Table 4.3). The model was significant, F(3, 212) = 9.84, p < .001, explaining 12.2% of variance (adjusted R² = .122). Supervision frequency was a significant negative predictor, β = −.31, 95% CI [−.44, −.18], p < .001. Each additional monthly contact was associated with a 2.4-week reduction in delay.\"",
        "Read what that passage does not do. It does not say supervision 'improves' completion, does not speculate about mechanism, and does not compare the finding to prior literature. Every one of those moves belongs in the discussion chapter, and an examiner who finds them here will note that the candidate cannot distinguish evidence from argument.",
        "Note also what is present that weaker chapters omit: the exact F statistic with both degrees of freedom, an exact p-value, a standardised coefficient with a confidence interval, and a translation of the effect into the unit a reader cares about (weeks). Significance alone would have said almost nothing useful.",
        "Assumption checks precede the model in the real chapter, usually in a short paragraph: normality of residuals, multicollinearity (VIF below 2.1 for all predictors), independence (Durbin–Watson 1.94). Two or three sentences are enough, but leaving them out invites the question of whether they were run.",
      ],
    },
    {
      heading: "Qualitative results example, annotated",
      body: [
        "\"4.3 Theme 2: Supervision as negotiated access. This theme was present in 11 of 18 interviews, including all six participants in their final year. Participants described supervision less as scheduled teaching and more as an access problem to be managed. 'You learn when he answers email. Tuesday morning, always. So Tuesday morning is when my chapter is ready.' (P07, female, part-time, Year 4). 'I stopped asking for meetings and started sending two-page updates. That got replies.' (P12, male, full-time, Year 3). Across accounts, participants described adapting their own working rhythm to a supervisor's availability rather than negotiating a shared schedule.\"",
        "The structure is claim, evidence spread, two quotations from different participants, factual synthesis. That last sentence summarises across the data without saying why participants behaved this way or what it implies for institutional policy — again, discussion material.",
        "Attribution carries the analytic characteristics that matter (mode of study, year, gender) rather than a bare code. Quotations are unedited, with ellipses marking any removal. Where a theme rests on a small number of participants, say so plainly — evidence spread is data, not weakness.",
        "Present the thematic framework once as a table before the prose: theme, subthemes, definition, number of contributing participants. Readers cannot hold six themes in working memory while also parsing extended quotation.",
      ],
    },
    {
      heading: "Formatting the tables and figures",
      body: [
        "Tables must be self-contained: full variable names rather than software labels, units stated, sample size given, abbreviations defined in a note beneath, and significance conventions declared once. A reader who sees only the table should understand it.",
        "Never present the same data as both a table and a figure. Choose the exhibit that makes the pattern visible — figures for trends, interactions and distributions, tables for precise values and multi-statistic comparisons — and delete the other.",
        "Do not paste SPSS, Stata or R output. Retype the values into a table in your citation style's format (APA 7 table conventions are the common default). Full software output belongs in an appendix if your department requires it.",
        "Number exhibits by chapter (Table 4.1, Figure 4.2), reference every one in the prose before it appears, and keep captions above tables and below figures unless your handbook says otherwise.",
      ],
    },
    {
      heading: "Sentences that cost marks",
      body: [
        "'This suggests that…' — interpretation. Move it to the discussion. 'Surprisingly…' — evaluation. Move it. 'This is consistent with Ahmed (2021)…' — comparison with literature. Move it. 'As expected…' — hypothesis confirmation framing, which belongs to the argument rather than the evidence.",
        "'The data shows a slight tendency towards…' — hedged non-reporting. Either the difference is there with an effect size, or it is not. Vague magnitude language in a results chapter reads as an attempt to make a null result sound like something.",
        "Selective reporting is the most serious fault of all: presenting only the tests that worked. Report every analysis you pre-registered or described in the methodology, including the ones that returned nothing. Non-significant results are findings.",
      ],
    },
  ],
  checklist: {
    title: "Results chapter checklist",
    items: [
      "Every research question has its own subsection, in the order they were posed",
      "Sample description, response rate and data cleaning appear before any analysis",
      "Assumption checks reported before the tests that depend on them",
      "Each inferential result reports statistic, df, exact p, effect size and confidence interval",
      "No interpretation, comparison or implication anywhere in the chapter",
      "Every table and figure is referenced in the prose before it appears",
      "No data presented twice in two formats",
      "Non-significant and unexpected results reported alongside the rest",
      "Qualitative themes state evidence spread across participants",
      "Chapter closes with a factual summary table of questions against outcomes",
    ],
  },
  faqs: [
    {
      question: "How long should a dissertation results chapter be?",
      answer:
        "Typically 15–20% of the total word count: roughly 2,500–3,500 words in a 20,000-word Master's dissertation and 8,000–12,000 words in an 80,000-word PhD thesis. Qualitative chapters usually run longer because quotation consumes space.",
    },
    {
      question: "Can I combine results and discussion?",
      answer:
        "Some disciplines and some supervisors prefer it, particularly in qualitative and mixed-methods work where interpretation is inseparable from presentation. Check your handbook, then confirm with your supervisor in writing. If you combine them, signpost clearly within each section which sentences report and which interpret.",
    },
    {
      question: "Should tables go in the chapter or in an appendix?",
      answer:
        "Any table an examiner needs in order to follow your argument goes in the chapter. Supporting material — full software output, complete item-level frequencies, extended coding frames — goes in an appendix and is referenced from the chapter.",
    },
    {
      question: "How many quotations per qualitative theme?",
      answer:
        "Two to three, from different participants, each doing work the others do not. A fourth quotation that repeats the same point adds length without adding evidence.",
    },
  ],
  related: [hubLink, statsLink, helpLink],
  ctaLine:
    "Need a second pair of eyes on your results chapter before it reaches your supervisor? Our statisticians and qualitative analysts review structure, reporting standards and exhibit formatting.",
};

export const discussionChapterExample: GuideHubConfig = {
  path: "/dissertation-discussion-chapter-example",
  h1: "Dissertation Discussion Chapter Example and Structure",
  lead:
    "What a discussion chapter is actually for, the five-move structure examiners expect, and an annotated example showing how to move from a reported result to an argued claim without repeating the findings chapter.",
  seoTitle: "Dissertation Discussion Chapter Example and Structure",
  seoDescription:
    "Dissertation discussion chapter example: the five-move structure, how to interpret results against literature, handling unexpected findings, limitations and implications.",
  breadcrumbLabel: "Discussion Chapter Example",
  keywords: [
    "dissertation discussion chapter example",
    "how to write discussion chapter",
    "discussion section dissertation",
    "phd discussion chapter structure",
  ],
  answerBox:
    "A discussion chapter interprets what the findings mean. For each key result, make five moves: restate the finding in one sentence, explain what it means in the terms of your research question, situate it against the literature (agreement, contradiction or extension), account for why it turned out that way, and state what follows for theory or practice. Limitations and future research close the chapter. Nothing new is reported here — every number in the discussion has already appeared in the findings.",
  table: {
    caption: "The five-move discussion pattern, applied to one finding.",
    headers: ["Move", "Function", "Example opening"],
    rows: [
      ["Restate", "Names the finding without re-reporting statistics", "Supervision frequency predicted shorter delay…"],
      ["Interpret", "Answers the research question in argued form", "This indicates that access, rather than expertise…"],
      ["Situate", "Agreement, contradiction or extension of prior work", "This aligns with Ahmed (2021) but diverges from…"],
      ["Account", "Explains the mechanism or the divergence", "One plausible explanation is that part-time candidates…"],
      ["Implicate", "States the theoretical or practical consequence", "For supervision policy, this suggests…"],
    ],
  },
  sections: [
    {
      heading: "What the discussion chapter is for",
      body: [
        "The findings chapter proves you gathered evidence. The discussion chapter proves you can think with it. It is the chapter examiners read most closely, because it is where a candidate demonstrates the judgement that distinguishes a doctorate from a competent data-collection exercise.",
        "The failure mode is universal and easy to diagnose: a discussion chapter that paraphrases the findings chapter in slightly warmer language. If a paragraph could be deleted without losing an argument, it was summary, not discussion.",
        "A useful test for every paragraph: does it answer 'so what?' If the paragraph tells the reader what happened, it belongs in findings. If it tells the reader what that means, why it means that, or what should change as a result, it belongs here.",
      ],
    },
    {
      heading: "Annotated example of the five moves",
      body: [
        "\"Supervision frequency predicted shorter submission delay, and the association held after controlling for funding and mode of study. [Restate] Read against the research question, this suggests delay is driven less by candidate capability than by the rhythm of access to a supervisor's judgement. [Interpret] Ahmed (2021) reported a comparable association in a single-institution sample, but attributed it to motivational effects; the present finding, where the association survives controlling for funding status, is difficult to reconcile with a purely motivational account. [Situate] A more plausible mechanism is decision latency: candidates who cannot obtain a timely decision on a chapter direction hold work in an unfinished state rather than proceeding. [Account] If that is correct, institutional attention would be better directed at guaranteed response times than at the total volume of supervision hours. [Implicate]\"",
        "Notice that no statistics reappear. The finding is named, not re-reported. Notice also that the literature is used to sharpen a claim rather than to decorate it — the citation exists because the comparison generates a question, not because the paragraph needed a reference.",
        "Where your finding contradicts established work, say so directly and early in the paragraph, then work through the possible explanations in order of plausibility: measurement difference, sample difference, context difference, then genuine theoretical disagreement. Examiners respect a candidate who takes a contradiction seriously far more than one who buries it.",
      ],
    },
    {
      heading: "Handling unexpected and null results",
      body: [
        "A null result is not a failed study; it is a result that constrains the space of viable explanations. Discuss it as such. State what the absence of an effect rules out, whether the design had the power to detect an effect of the size you cared about, and what a better-powered or differently-operationalised study would need to do.",
        "Report a power consideration explicitly if you have one: 'With n = 216 the study had 80% power to detect an effect of d = 0.38; effects smaller than that would not reliably have been observed.' That single sentence converts a weakness into a demonstration of methodological literacy.",
        "Resist retrofitting hypotheses to results. Examiners read the introduction and the discussion together, and a hypothesis that quietly changes shape between them is one of the easiest faults to spot.",
      ],
    },
    {
      heading: "Limitations, implications and future research",
      body: [
        "Limitations should be specific and consequential. 'The sample was limited' is not a limitation; 'the sample was drawn from two research-intensive institutions, so the findings may not transfer to teaching-intensive contexts where supervision loads differ substantially' is. For each limitation, state its likely direction of effect on your conclusions.",
        "Implications must follow from your evidence, not from your enthusiasm. If your study observed an association in one sector, the implication is a testable proposition for that sector, not a national policy recommendation.",
        "Future research suggestions should be things a researcher could actually start on Monday: a named design, a named population, a named measurement improvement. Generic calls for 'further research in this area' are dead text.",
      ],
    },
  ],
  checklist: {
    title: "Discussion chapter checklist",
    items: [
      "Every key finding gets all five moves, in order",
      "No statistics reported for the first time in this chapter",
      "Contradictions with prior literature are addressed directly",
      "Mechanisms are proposed and justified, not asserted",
      "Null and unexpected results are discussed, with a power consideration where relevant",
      "Limitations are specific, with the direction of their effect stated",
      "Implications are proportionate to the evidence",
      "Future research suggestions name a design, population and measure",
      "The chapter answers the research questions explicitly, in words",
    ],
  },
  faqs: [
    {
      question: "How long should the discussion chapter be?",
      answer:
        "Usually 20–25% of the dissertation — longer than the findings chapter in most PhD theses. If your discussion is shorter than your findings, it is likely summarising rather than arguing.",
    },
    {
      question: "Can I cite new literature in the discussion?",
      answer:
        "Yes, and you often should — particularly work that explains an unexpected result. New data may not appear in the discussion, but new sources may.",
    },
    {
      question: "Should conclusions be a separate chapter?",
      answer:
        "In most PhD structures, yes: the discussion interprets, the conclusion states the contribution and closes the thesis. Many Master's dissertations merge them. Check your handbook.",
    },
  ],
  related: [
    hubLink,
    { label: "Findings vs Discussion", href: "/findings-vs-discussion-difference", description: "Which content belongs in which chapter." },
    helpLink,
  ],
};

export const findingsVsDiscussion: GuideHubConfig = {
  path: "/findings-vs-discussion-difference",
  h1: "Findings vs Discussion: What Goes Where (With a Decision Table)",
  lead:
    "The single most common structural error in submitted dissertations is putting discussion material in the findings chapter. This guide gives you a sentence-level test and a decision table so you can sort any paragraph in seconds.",
  seoTitle: "Findings vs Discussion: What Goes in Each Chapter",
  seoDescription:
    "Findings vs discussion chapter: a decision table and sentence-level test showing exactly which content belongs in results and which belongs in discussion.",
  breadcrumbLabel: "Findings vs Discussion",
  keywords: [
    "findings vs discussion",
    "difference between findings and discussion",
    "results vs discussion dissertation",
    "what goes in discussion chapter",
  ],
  answerBox:
    "Findings report what you observed; the discussion explains what it means. If a sentence could be checked against your dataset, it belongs in findings. If it requires judgement, comparison with other studies, or reasoning about causes and consequences, it belongs in the discussion. The practical test: delete the literature and the word 'because' — anything that survives is findings.",
  table: {
    caption: "Decision table: where each element belongs.",
    headers: ["Content", "Findings", "Discussion"],
    rows: [
      ["Demographics and response rates", "Yes", "No"],
      ["Statistical tests and effect sizes", "Yes", "Referenced only"],
      ["Themes and participant quotations", "Yes", "Referenced only"],
      ["Comparison with prior studies", "No", "Yes"],
      ["Explanation of why a result occurred", "No", "Yes"],
      ["Alternative explanations", "No", "Yes"],
      ["Theoretical contribution", "No", "Yes"],
      ["Practical recommendations", "No", "Yes"],
      ["Limitations", "No", "Yes"],
      ["Future research", "No", "Yes"],
    ],
  },
  sections: [
    {
      heading: "The sentence-level test",
      body: [
        "Take any sentence and ask whether a sceptical reader could verify it using only your dataset and your analysis output. 'Mean completion time was 47 months (SD = 9.2)' passes: it is checkable. 'Completion time was longer than expected given the funding available' does not: 'expected' is a judgement drawn from outside the data.",
        "Two words reliably mark a sentence as discussion material: 'because' and 'suggests'. A third is any citation. If a findings paragraph contains a citation, it is almost always in the wrong chapter — the exception being a reference to a validated instrument or an established reporting convention.",
        "The reverse error also exists. Discussion chapters that re-report statistics are usually a symptom of a findings chapter the candidate did not trust. Fix the findings chapter, then reference it.",
      ],
    },
    {
      heading: "Why examiners care so much about the boundary",
      body: [
        "A viva is an audit of the chain from data to claim. Keeping evidence and interpretation in separate chapters makes that chain inspectable: the examiner can accept your evidence while contesting your interpretation, or the reverse. When the two are interleaved, every objection becomes an objection to the whole thesis.",
        "There is also a defensive advantage for the candidate. If your interpretation is challenged in the viva, a clean findings chapter lets you concede an interpretation without conceding the study. Candidates who blend the two find themselves defending everything at once.",
        "Journals apply the same convention for the same reason, so a thesis structured this way converts into publishable papers with far less rewriting.",
      ],
    },
    {
      heading: "When merging is acceptable",
      body: [
        "Some qualitative traditions — interpretative phenomenological analysis in particular — treat interpretation as inseparable from presentation, and a combined 'findings and discussion' chapter is standard. Ethnographic and narrative work often does the same.",
        "If you merge, do it deliberately and say so in a short methodological note at the start of the chapter, naming the tradition that licenses it. An unexplained merge reads as a mistake; an explained one reads as a choice.",
        "Even in a merged chapter, keep the moves visible at the paragraph level: evidence, then interpretation, then the next piece of evidence. The reader must always know which they are reading.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can a finding be mentioned in both chapters?",
      answer:
        "Yes — reported with statistics in findings, named without statistics in the discussion. What must not happen is the same numbers appearing twice.",
    },
    {
      question: "Where do limitations go?",
      answer:
        "In the discussion, near the end, unless your handbook specifies a separate chapter. Methodological caveats about data collection can be noted briefly in the methodology as well.",
    },
    {
      question: "Does this differ between Master's and PhD?",
      answer:
        "The boundary is the same; the depth differs. A PhD discussion is expected to make a theoretical contribution, whereas a Master's discussion typically interprets against existing literature without extending it.",
    },
  ],
  related: [hubLink, { label: "Discussion Chapter Example", href: "/dissertation-discussion-chapter-example" }, { label: "Results Section Example", href: "/dissertation-results-section-example" }],
};

export const howLongIsPhDThesis: GuideHubConfig = {
  path: "/how-long-is-a-phd-thesis",
  h1: "How Long Is a PhD Thesis? Word Counts by Country and Discipline",
  lead:
    "Typical and maximum PhD thesis lengths across the UK, US, Australia and Canada, how they vary by discipline, what the word count actually includes, and why the limit matters less than the structure inside it.",
  seoTitle: "How Long Is a PhD Thesis? Word Counts by Country",
  seoDescription:
    "How long is a PhD thesis? Typical word counts by country and discipline, what counts towards the limit, chapter-by-chapter breakdowns and Master's comparisons.",
  breadcrumbLabel: "PhD Thesis Length",
  keywords: [
    "how long is a phd thesis",
    "phd thesis word count",
    "average length of phd dissertation",
    "dissertation word count",
  ],
  answerBox:
    "Most PhD theses run 70,000–100,000 words. UK humanities and social science theses are typically capped at 80,000–100,000 words excluding references and appendices; UK STEM theses are often capped at 40,000–60,000. US dissertations average 150–250 pages (roughly 40,000–70,000 words) with no fixed limit at many institutions. Master's dissertations are usually 15,000–25,000 words. Always check your own institution's handbook — the limit is regulatory, not conventional.",
  table: {
    caption: "Typical PhD thesis lengths by region and discipline group.",
    headers: ["Region", "Humanities / Social Science", "STEM", "Usual limit basis"],
    rows: [
      ["United Kingdom", "80,000–100,000 words", "40,000–60,000 words", "Hard cap in regulations"],
      ["United States", "150–250 pages", "100–200 pages", "Departmental norm, rarely capped"],
      ["Australia", "70,000–100,000 words", "50,000–80,000 words", "Hard cap, extension by permission"],
      ["Canada", "150–300 pages", "100–200 pages", "Departmental norm"],
      ["Master's (all regions)", "15,000–25,000 words", "10,000–20,000 words", "Hard cap"],
    ],
  },
  sections: [
    {
      heading: "What counts towards the limit",
      body: [
        "Most regulations count the main body, footnotes and in-text material, and exclude the bibliography, appendices, tables of contents and abstract. Some institutions count footnotes; a few count tables. The difference between counting footnotes and not counting them is, in a heavily annotated humanities thesis, several thousand words — so read the exact clause rather than the summary.",
        "Where an appendix is excluded, resist the temptation to move argument into it. Examiners read appendices, and material that carries an argument but sits outside the word limit reads as evasion.",
        "Exceeding the limit usually requires written permission before submission, and requests made after submission are frequently refused. If you are heading over, ask early.",
      ],
    },
    {
      heading: "A workable chapter-by-chapter budget",
      body: [
        "For an 80,000-word thesis: introduction 6,000–8,000; literature review 15,000–20,000; methodology 10,000–12,000; findings 12,000–18,000; discussion 15,000–18,000; conclusion 5,000–7,000. Proportions matter more than absolute numbers, and the discussion should not be shorter than the findings.",
        "For a 20,000-word Master's dissertation: introduction 1,500–2,000; literature review 4,500–6,000; methodology 3,000–3,500; findings 3,000–4,000; discussion 4,000–5,000; conclusion 1,500–2,000.",
        "Budget in the plan, not at the end. Candidates who write to a chapter budget from the start rarely face the demoralising exercise of cutting 12,000 words from a finished draft.",
      ],
    },
    {
      heading: "Why length is a weak proxy for quality",
      body: [
        "Examiners do not reward volume. A 65,000-word thesis with a tightly argued contribution passes more comfortably than a 98,000-word thesis with three chapters of undigested literature. Over-length theses are also more likely to receive major corrections, because more text means more surface for objections.",
        "The parts most often overwritten are the literature review and the methodology. A literature review is an argument about a gap, not a catalogue; a methodology is a justification of choices, not a textbook on research design.",
        "If your thesis is over-length, cut description rather than argument: shorten the methodology's textbook passages, move complete instruments to appendices, and delete literature that does not bear on your gap.",
      ],
    },
    {
      heading: "PhD by publication and thesis-by-paper formats",
      body: [
        "Thesis-by-publication formats typically require three to five papers plus a linking narrative of 10,000–20,000 words, giving a lower total word count than a monograph thesis. The regulations for these formats are separate — do not assume the monograph limit applies.",
        "Requirements about publication status vary sharply: some institutions require papers to be published, others accept submitted or ready-to-submit manuscripts, and most specify a minimum first-author share.",
        "The linking narrative is where these theses are won or lost. It must argue that the papers form a single coherent contribution rather than a portfolio of related work.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is there a minimum PhD thesis length?",
      answer:
        "Rarely stated, but in practice a monograph thesis below about 50,000 words in the humanities or social sciences would attract questions about scope. STEM theses can legitimately be much shorter where the contribution sits in the results.",
    },
    {
      question: "How many pages is 80,000 words?",
      answer:
        "Roughly 320 pages double-spaced in 12pt, or about 160 single-spaced, before tables, figures and front matter.",
    },
    {
      question: "How long does it take to write a PhD thesis?",
      answer:
        "Writing up alone typically takes 9–18 months for full-time candidates who have completed analysis, and considerably longer part-time. Candidates who write chapters throughout candidature finish faster than those who leave writing to a final year.",
    },
    {
      question: "Does the word limit include the abstract?",
      answer:
        "Almost never. The abstract is usually capped separately, commonly at 300–500 words.",
    },
  ],
  related: [
    hubLink,
    { label: "Dissertation Structure Guide", href: "/dissertation-structure" },
    helpLink,
  ],
};

export const defenseQuestions: GuideHubConfig = {
  path: "/dissertation-defense-questions-and-answers",
  h1: "Dissertation Defense Questions and Answers (40 Real Viva Questions)",
  lead:
    "The questions examiners actually ask in a viva or defense, grouped by what they are testing, with model answer structures — and the three questions that decide most outcomes.",
  seoTitle: "Dissertation Defense Questions and Answers",
  seoDescription:
    "40 real dissertation defense and viva questions with model answer structures, grouped by contribution, methodology, findings and limitations.",
  breadcrumbLabel: "Defense Questions",
  keywords: [
    "dissertation defense questions",
    "viva questions and answers",
    "phd defense questions",
    "thesis defence preparation",
  ],
  answerBox:
    "Most defenses open with three questions: summarise your thesis in a few minutes, state your original contribution, and explain why you chose your methodology. Prepare rehearsed but unmemorised answers to those three, then prepare for the four categories that follow — contribution and originality, methodological justification, interpretation of findings, and limitations. Examiners are testing whether you can defend choices, not whether the thesis is flawless.",
  sections: [
    {
      heading: "Opening questions (asked in almost every defense)",
      body: [
        "'Summarise your thesis in five minutes.' Answer with: the problem, the gap, what you did, what you found, and why it matters — one or two sentences each. Rehearse this until it is fluent at three, five and ten minutes, because examiners set different limits.",
        "'What is your original contribution?' Name it in a single sentence, then evidence it in three. Originality can be empirical (new data), theoretical (new framework), methodological (new technique or application), or contextual (established method in an untested setting). Say which kind yours is.",
        "'Why this topic?' Examiners are checking motivation and command, not biography. Give a research reason first and a personal reason second, if at all.",
      ],
    },
    {
      heading: "Methodology questions",
      body: [
        "'Why this method rather than the obvious alternative?' Always answer in the same shape: the research question required X, method A delivers X, method B would have delivered Y, and here is the trade-off I accepted. Examiners want to hear that the alternative was considered, not that it was invisible.",
        "Common variants: why this sample size; how you handled non-response; why this instrument rather than a validated alternative; how you established rigour, trustworthiness or reliability; what you did about missing data; how ethical approval shaped the design.",
        "If you would do something differently now, say so plainly and say what you learned. Candidates who defend every decision as optimal look less credible than those who can distinguish a good decision from a constrained one.",
      ],
    },
    {
      heading: "Findings and interpretation questions",
      body: [
        "'Which finding surprised you?' A genuine answer here demonstrates engagement. Follow it with what you did to check that the surprise was real rather than an artefact.",
        "'Could your data support a different interpretation?' The correct answer is yes, followed by the alternative and the reason you find your reading more plausible. Denying that alternatives exist is a reliable way to lose a viva.",
        "'What does this mean for practice?' Keep the claim proportionate to the evidence and name the population it applies to.",
      ],
    },
    {
      heading: "Limitations and future work",
      body: [
        "'What are the weaknesses of your study?' Volunteer two or three real ones with their direction of effect. Examiners will find them regardless; naming them first converts a vulnerability into evidence of judgement.",
        "'What would you do with another two years?' Answer with a specific, designed study — population, method, measure — not with a wish.",
        "'Is your work publishable?' Have a plan: named journals, which chapter becomes which paper, and what needs doing first.",
      ],
    },
    {
      heading: "How to prepare in the final fortnight",
      body: [
        "Re-read the thesis with a page-number index of every claim you would find hard to defend. Prepare a short answer for each. Bring an annotated copy — examiners expect it and it removes the panic of searching.",
        "Run a mock defense with someone outside your project. Supervisors know your thesis too well to ask naive questions, and naive questions are the hardest ones.",
        "Read your examiners' recent work. Not to flatter them, but because their questions will come from the framework they use.",
        "Prepare a corrections mindset. Most candidates pass with minor or major corrections; hearing 'corrections' is a normal outcome, not a failure.",
      ],
    },
  ],
  checklist: {
    title: "Defense preparation checklist",
    items: [
      "Three-, five- and ten-minute thesis summaries rehearsed aloud",
      "Contribution statement written in one sentence",
      "Methodological alternatives named with trade-offs",
      "Two or three limitations volunteered with direction of effect",
      "Annotated thesis copy with a claim index",
      "Examiners' recent publications read",
      "Mock defense completed with a non-specialist",
      "Publication plan drafted",
    ],
  },
  faqs: [
    {
      question: "How long does a viva or defense last?",
      answer:
        "UK vivas typically run 1.5–3 hours; US defenses are often 1–2 hours including a public presentation. Longer does not mean worse.",
    },
    {
      question: "Can you fail a viva?",
      answer:
        "Outright failure is rare. The common outcomes are pass with minor corrections, pass with major corrections, or revise and resubmit. Preparation mostly moves you between those bands.",
    },
    {
      question: "Should I memorise answers?",
      answer:
        "Memorise structures, not sentences. Memorised prose collapses under a follow-up question; a rehearsed structure survives it.",
    },
  ],
  related: [
    hubLink,
    { label: "Viva Preparation Guide", href: "/viva-preparation" },
    helpLink,
  ],
};

export const presentingQuantitative: GuideHubConfig = {
  path: "/presenting-quantitative-results-tables-figures",
  h1: "Presenting Quantitative Results: Tables, Figures and Reporting Standards",
  lead:
    "How to turn statistical output into exhibits an examiner can audit — table conventions, figure choices, APA-style reporting of each common test, and the reporting omissions that draw corrections.",
  seoTitle: "Presenting Quantitative Results: Tables and Figures",
  seoDescription:
    "How to present quantitative dissertation results: APA table and figure conventions, reporting standards for t-tests, ANOVA, regression and chi-square, plus common errors.",
  breadcrumbLabel: "Presenting Quantitative Results",
  keywords: [
    "presenting quantitative results",
    "apa table format dissertation",
    "how to report statistics dissertation",
    "reporting regression results",
  ],
  answerBox:
    "Report every inferential result with four components: the test statistic, degrees of freedom, exact p-value and an effect size with a confidence interval. Present descriptives before inferentials and assumption checks before the tests that rely on them. Use tables for precise multi-statistic values and figures for patterns, never both for the same data, and retype software output into your citation style's table format rather than pasting it.",
  table: {
    caption: "Reporting templates for the most common tests (APA 7 style).",
    headers: ["Test", "Report as", "Effect size"],
    rows: [
      ["Independent t-test", "t(df) = 2.41, p = .017", "Cohen's d with 95% CI"],
      ["Paired t-test", "t(df) = 3.02, p = .004", "Cohen's dz"],
      ["One-way ANOVA", "F(2, 117) = 5.66, p = .004", "η² or ω²"],
      ["Chi-square", "χ²(2, N = 216) = 8.41, p = .015", "Cramér's V"],
      ["Correlation", "r(214) = .32, p < .001", "r is the effect size"],
      ["Multiple regression", "F(3, 212) = 9.84, p < .001", "R², adjusted R², β with CI"],
      ["Logistic regression", "Wald χ²(1) = 6.20, p = .013", "Odds ratio with 95% CI"],
      ["Mann–Whitney U", "U = 3,204, z = −2.11, p = .035", "r = z/√N"],
    ],
  },
  sections: [
    {
      heading: "Order of presentation",
      body: [
        "Sample and response rate first, then data cleaning and missing-data handling, then descriptive statistics, then assumption checks, then inferential tests grouped by research question. Departing from that order forces the examiner to hold unverified information in mind.",
        "Missing data deserves a short paragraph of its own: how much, whether it was missing at random, and what you did about it. 'Listwise deletion' is an acceptable answer when the proportion is small and stated; silence is not.",
        "Where you ran a large number of tests, say how you controlled family-wise error — Bonferroni, Holm, false discovery rate — or explain why no correction was applied.",
      ],
    },
    {
      heading: "Table conventions that examiners check",
      body: [
        "Full variable names, not software labels. Units in the column header. Sample size stated in the caption or a note. Every abbreviation defined beneath the table. Significance convention declared once rather than by scattered asterisks with no key.",
        "Align numbers on the decimal point, use the same number of decimal places within a column, and drop the leading zero on statistics bounded by one (p = .017, r = .32) if you are following APA.",
        "Keep tables to one page where possible. A table that breaks across pages needs repeated headers. A table wider than the page needs to be rotated, split, or reconsidered.",
      ],
    },
    {
      heading: "Choosing and building figures",
      body: [
        "Use figures for what tables cannot show quickly: distributions, trends over time, interactions, and model fit. A bar chart of three means is almost always worse than the sentence that reports them.",
        "Label axes with variable names and units, include error bars and say what they represent (standard error, standard deviation or confidence interval — they are not interchangeable), and avoid truncated y-axes that exaggerate differences.",
        "Design for greyscale and for colour-vision deficiency. If the figure stops working when printed in black and white, add patterns or direct labels.",
      ],
    },
    {
      heading: "Common reporting omissions",
      body: [
        "Missing effect sizes are the most frequent correction in quantitative dissertations. Significance tells the examiner an effect probably exists; effect size tells them whether it matters.",
        "Missing confidence intervals are the second. A point estimate without an interval hides the precision of your evidence.",
        "Reporting 'p = .000' is a software artefact — write p < .001. Reporting only 'p < .05' when the exact value is available loses information for no reason.",
        "Finally, do not report a test you did not describe in the methodology, and do not describe a test you did not report. Examiners cross-check.",
      ],
    },
  ],
  faqs: [
    {
      question: "Should I include SPSS output in my dissertation?",
      answer:
        "Not in the chapter. Retype the values into a formatted table. Full output can go in an appendix if your department requires evidence of the analysis.",
    },
    {
      question: "How many tables and figures is too many?",
      answer:
        "There is no fixed number, but every exhibit should be referenced in the prose and should carry information the prose cannot. Exhibits that are never discussed should be deleted or moved to an appendix.",
    },
    {
      question: "Do I need to report assumption checks?",
      answer:
        "Yes, briefly. Two or three sentences covering normality, homogeneity of variance, multicollinearity and independence as relevant to your tests.",
    },
  ],
  related: [
    hubLink,
    statsLink,
    { label: "Presenting Qualitative Findings", href: "/presenting-qualitative-findings-themes-quotes" },
  ],
};

export const presentingQualitative: GuideHubConfig = {
  path: "/presenting-qualitative-findings-themes-quotes",
  h1: "Presenting Qualitative Findings: Themes, Quotations and Evidence",
  lead:
    "How to structure a qualitative findings chapter that convinces — theme presentation, quotation selection and attribution, evidence spread, and the balance between participant voice and analytic claim.",
  seoTitle: "Presenting Qualitative Findings: Themes and Quotations",
  seoDescription:
    "How to present qualitative dissertation findings: theme structure, selecting and attributing quotations, evidence spread, thematic maps and trustworthiness.",
  breadcrumbLabel: "Presenting Qualitative Findings",
  keywords: [
    "presenting qualitative findings",
    "how to write qualitative results chapter",
    "thematic analysis findings chapter",
    "using quotes in dissertation",
  ],
  answerBox:
    "Present qualitative findings theme by theme. For each: state the analytic claim in one sentence, state how many participants contributed to it, give two or three quotations from different participants that demonstrate different facets of the claim, and close with a factual synthesis sentence. Show the full thematic framework once as a table before the prose. Keep interpretation against literature for the discussion.",
  table: {
    caption: "A theme presentation template.",
    headers: ["Element", "Purpose", "Length"],
    rows: [
      ["Theme statement", "The analytic claim in plain language", "1 sentence"],
      ["Evidence spread", "How many participants, and which subgroups", "1 sentence"],
      ["Quotation set", "2–3 quotations, different participants, different facets", "3–8 lines each"],
      ["Bridging prose", "Names what each quotation demonstrates", "1–2 sentences per quote"],
      ["Synthesis", "Factual summary across the theme", "1 sentence"],
    ],
  },
  sections: [
    {
      heading: "Structuring by theme rather than by question",
      body: [
        "Qualitative chapters usually work better organised by theme, with a mapping table at the start showing which themes address which research questions. Organising strictly by research question tends to fragment themes that cut across several questions.",
        "Order themes by analytic weight, not by frequency. The theme that does most work for your argument goes first, even if a lesser theme appeared in more interviews.",
        "Give each theme a name that states something, not a label that names a topic. 'Supervision as negotiated access' tells the reader your claim; 'Supervision' does not.",
      ],
    },
    {
      heading: "Selecting and attributing quotations",
      body: [
        "Choose quotations that demonstrate rather than decorate. A good quotation contains the phenomenon in the participant's own framing; a weak one restates your claim in worse prose.",
        "Attribute with a pseudonym or code plus the characteristics that matter analytically — role, experience, mode of study, site. Bare codes (P07) leave the reader unable to judge whose voice they are hearing.",
        "Present quotations verbatim, including disfluency where it carries meaning, mark removals with ellipses, and add clarifying words only in square brackets. Never tidy a participant into fluency they did not have.",
        "Vary whose voice appears. A chapter that quotes the same three articulate participants throughout invites the question of what the other fifteen said.",
      ],
    },
    {
      heading: "Evidence spread and transparency",
      body: [
        "State how many participants contributed to each theme, and whether the theme concentrated in a subgroup. This is transparency about your evidence base, not false quantification, and it is what allows an examiner to judge whether a claim is supported.",
        "Avoid percentage claims from small samples. '67% of participants' from eighteen interviews implies a precision qualitative data does not carry; '12 of 18' does the same work honestly.",
        "Where a theme is present in only two or three accounts but analytically important, say so and justify the attention you give it. Deviant and minority cases are often the most informative, provided you flag them as such.",
      ],
    },
    {
      heading: "Showing the analysis was systematic",
      body: [
        "Include the thematic framework as a table: theme, subthemes, definition, contributing participants. If you used NVivo, ATLAS.ti or MAXQDA, say so and give the coding structure; a coding tree in an appendix is strong evidence of systematic work.",
        "Report your trustworthiness procedures where they belong — most in the methodology, but note in the findings where member checking or second coding changed a theme.",
        "If your analytic method has a defined output — Braun and Clarke's six phases, IPA's group experiential themes, framework analysis matrices — the chapter should visibly reflect it. Naming a method the chapter does not follow is a common and easily spotted fault.",
      ],
    },
  ],
  checklist: {
    title: "Qualitative findings checklist",
    items: [
      "Thematic framework presented once as a table before the prose",
      "Each theme named as a claim, not a topic",
      "Evidence spread stated for every theme",
      "Two to three quotations per theme, from different participants",
      "Attribution includes analytically relevant characteristics",
      "Quotations verbatim, with honest ellipses and bracketed clarifications",
      "Voice distributed across the sample",
      "Deviant and minority cases addressed",
      "Coding structure available in an appendix",
      "No comparison with literature in this chapter",
    ],
  },
  faqs: [
    {
      question: "How many themes should a qualitative dissertation have?",
      answer:
        "Three to six for most Master's and PhD studies. More than six usually means subthemes have been promoted; fewer than three often means themes are too broad to be analytic.",
    },
    {
      question: "How much of the chapter should be quotation?",
      answer:
        "Roughly a third is a workable guide. Much more and the chapter becomes a transcript; much less and the claims float free of evidence.",
    },
    {
      question: "Can I use participant numbers instead of pseudonyms?",
      answer:
        "Yes, and many ethics committees prefer it. Add the characteristics that matter analytically alongside the code so the reader can situate the voice.",
    },
  ],
  related: [
    hubLink,
    { label: "Qualitative Analysis Guide", href: "/qualitative-analysis" },
    { label: "NVivo Tutorial", href: "/nvivo-tutorial" },
  ],
};

export const chapterGuides: GuideHubConfig[] = [
  resultsSectionExample,
  discussionChapterExample,
  findingsVsDiscussion,
  howLongIsPhDThesis,
  defenseQuestions,
  presentingQuantitative,
  presentingQualitative,
];
