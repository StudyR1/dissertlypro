import type { GuideHubConfig } from "@/components/guides/GuideHubPage";

// Phase 3 hub — targets "how to present dissertation findings" and its variants,
// which already earn ~600 GSC impressions per month with zero clicks.
export const findingsChapterHub: GuideHubConfig = {
  path: "/dissertation-findings-chapter",
  h1: "How to Present Dissertation Findings: The Complete Findings Chapter Guide",
  lead:
    "A practical, examiner-focused guide to writing and presenting the findings chapter of a Master's dissertation or PhD thesis — what belongs in it, what belongs in the discussion, and how to present quantitative and qualitative results so an examiner can follow your evidence.",
  seoTitle: "How to Present Dissertation Findings",
  seoDescription:
    "How to present dissertation findings: what goes in the findings chapter vs discussion, tables and figures rules, qualitative themes, worked examples and a submission checklist.",
  breadcrumbLabel: "Dissertation Findings Chapter",
  keywords: [
    "how to present dissertation findings",
    "dissertation findings chapter",
    "how to write findings chapter in dissertation",
    "presenting research findings dissertation",
    "dissertation results section example",
    "findings vs discussion",
  ],
  answerBox:
    "Present dissertation findings by reporting what you found, in the order your research questions were asked, without interpreting it. Open with a short restatement of each research question, present the evidence that answers it — descriptive statistics then inferential tests for quantitative work, themes with illustrative quotations for qualitative work — and close each subsection with a one-sentence factual summary. Interpretation, comparison to literature, and implications all belong in the discussion chapter, not here.",
  table: {
    caption:
      "What belongs in the findings chapter versus the discussion chapter (the single most common structural error examiners report).",
    headers: ["Element", "Findings chapter", "Discussion chapter"],
    rows: [
      ["Descriptive statistics and demographics", "Yes", "No"],
      ["Test results, p-values, effect sizes, confidence intervals", "Yes", "Only when re-interpreting"],
      ["Themes, categories and illustrative quotations", "Yes", "No"],
      ["Tables and figures of raw results", "Yes", "Rarely"],
      ["Comparison with prior studies", "No", "Yes"],
      ["Explanation of why a result occurred", "No", "Yes"],
      ["Theoretical implications", "No", "Yes"],
      ["Practical or policy recommendations", "No", "Yes"],
      ["Limitations", "No", "Yes"],
      ["Answering the research question in words", "One factual sentence", "Full argued answer"],
    ],
  },
  sections: [
    {
      heading: "What the findings chapter is for",
      body: [
        "The findings chapter has one job: to place your evidence in front of the examiner in a form they can verify. It is the part of the thesis where you are least free to argue and most obliged to report. Everything in it should be traceable back to your data and forward to a research question.",
        "This is why the chapter is easier to write than candidates expect and harder to write well. Easier, because you are not defending anything yet. Harder, because the discipline required — resisting the urge to explain what a number means the moment you present it — runs against every instinct a writer has.",
        "Examiners read the findings chapter looking for three things: that the analysis you promised in the methodology is the analysis you actually performed, that the results are reported completely rather than selectively, and that the presentation is clean enough to audit. A chapter that satisfies those three is a pass, even if the results are unexciting.",
      ],
    },
    {
      heading: "Structuring the chapter around research questions",
      body: [
        "Structure by research question, not by test or by instrument. A chapter organised as 'Section 4.2 Regression results, Section 4.3 ANOVA results' forces the examiner to reassemble your argument themselves. A chapter organised as 'Section 4.2 Does supervisor contact frequency predict completion time?' does the work for them.",
        "A reliable template for each subsection: restate the research question in one sentence; state what data addresses it; present the evidence (table or figure plus the minimum necessary prose); state the factual outcome in one sentence. Four moves, repeated for every question.",
        "Where a research question has sub-questions, nest them at one level only. Three levels of numbered headings inside a findings chapter is almost always a sign that the research questions themselves were never sharpened.",
        "Open the chapter with a short roadmap paragraph and a sample-description section (response rate, demographics, data-cleaning decisions, missing-data handling). Close it with a half-page factual summary — a table of research questions against outcomes is ideal — and nothing else. No interpretation in that summary.",
      ],
    },
    {
      heading: "Presenting quantitative results: tables, figures and reporting standards",
      body: [
        "Report descriptive statistics before inferential ones, and report assumption checks before the tests that depend on them. If you ran Shapiro-Wilk, Levene's test, VIF or Durbin-Watson, those belong here — briefly — because an examiner who cannot see them will assume you did not run them.",
        "Every inferential result needs four components, not one: the test statistic, the degrees of freedom, the exact p-value (not 'p < 0.05' unless below 0.001), and an effect size with its confidence interval. Reporting significance without effect size is the single most common statistical reporting fault in submitted dissertations, and it is trivially avoidable.",
        "Tables and figures should be self-contained. A reader who sees only the table must be able to understand it: full variable names rather than SPSS labels, units stated, sample size given, and every abbreviation defined in a note beneath. Never present the same data as both a table and a figure — choose the one that makes the pattern visible and delete the other.",
        "Do not paste raw software output. SPSS, Stata and R output is a working artefact, not a presentation format; retype the numbers into a properly formatted table in your citation style's conventions (APA 7 table format is the usual default). Full output can go in an appendix if your department requires it.",
        "Round consistently and honestly — usually two decimal places for statistics, three for p-values, and whatever precision your instrument genuinely supports for descriptives. Reporting a mean age as 34.7241 tells the examiner you have not thought about measurement.",
      ],
    },
    {
      heading: "Presenting qualitative findings: themes, quotations and evidence density",
      body: [
        "Qualitative findings chapters fail in two opposite ways: too much quotation with no analytic claim, or too much claim with no quotation to support it. The workable ratio is one clearly stated theme claim, then two to three quotations from different participants that demonstrate it, then a short synthesis sentence — repeated per theme.",
        "State how many participants contributed to each theme. Not as a false quantification ('67% of participants said'), but as transparency about evidence spread: 'This theme was present in 11 of 18 interviews, including all six early-career participants.' Examiners need to know whether a theme rests on one articulate participant or on the whole dataset.",
        "Attribute every quotation with a pseudonym or code plus the participant characteristics that matter analytically (P07, female, 12 years' experience). Use ellipses honestly, indicate where you have removed material, and never edit a quotation into greater fluency than the participant produced.",
        "Present the thematic structure once, visually, before the prose — a table of themes, subthemes and definitions, or a thematic map. Then walk through it. Readers cannot hold a six-theme framework in working memory while also parsing your quotations.",
        "If you used a specific analytic method — Braun and Clarke's thematic analysis, IPA, framework analysis, grounded theory coding — the findings chapter should visibly follow that method's output structure. A framework analysis chapter that reads like generic thematic analysis suggests the method was named but not used.",
      ],
    },
    {
      heading: "Mixed-methods findings: integration is the deliverable",
      body: [
        "A mixed-methods findings chapter that reports quantitative results, then qualitative results, and stops, has not done mixed-methods work — it has done two studies in one document. The integration is the contribution, and it must appear in the findings chapter, not be deferred entirely to the discussion.",
        "Present integration explicitly: a joint display table with quantitative results in one column and the qualitative evidence that converges with, diverges from, or expands on them in the next. Divergence is a finding, not a failure — a survey result that the interviews contradict is often the most interesting thing in the thesis.",
        "Make the integration point match your design. In an explanatory sequential design, the qualitative strand explains a quantitative result and should follow it directly. In a convergent design, both strands are presented and then compared. In an exploratory sequential design, the qualitative strand builds the instrument and should be reported first.",
      ],
    },
    {
      heading: "Common examiner criticisms and how to avoid them",
      body: [
        "'The candidate interprets in the findings chapter.' Fix by moving every sentence containing 'because', 'suggests', 'this is consistent with' or 'implies' into the discussion. Search your draft for those four phrases specifically.",
        "'Results are reported selectively.' Report non-significant results and disconfirming cases. A findings chapter in which every hypothesis was supported and every participant agreed reads as curated, not as research.",
        "'Analysis does not match the stated methodology.' Cross-read your methodology chapter against your findings chapter line by line. If the methodology promised a two-way ANOVA and the findings report t-tests, either the methodology or the analysis must change before submission.",
        "'Tables are unreadable.' Print your chapter in greyscale at actual size and read it. Most table problems — colour-only distinctions, six-point fonts, columns split across pages — are invisible on screen and obvious on paper.",
        "'The chapter does not answer the research questions.' Build the summary table of research questions against factual outcomes first, before writing prose. If any cell cannot be filled from your data, you have found a gap the examiner would have found.",
      ],
    },
    {
      heading: "Word count, length and how long it should take",
      body: [
        "As a proportion, the findings chapter usually runs 15–25% of total word count: roughly 2,500–4,000 words in a 15,000-word Master's dissertation and 8,000–15,000 words in an 80,000-word PhD thesis. Qualitative chapters sit at the upper end because quotations consume space; quantitative chapters sit lower because tables carry the load.",
        "Tables and figures normally sit outside the word count in most institutions, but the rule varies — check your handbook rather than assuming, because a 3,000-word allowance can be consumed entirely by table content in some counting conventions.",
        "Drafting time is short relative to other chapters, provided the analysis is complete. Most candidates draft a findings chapter in one to two weeks. If it is taking longer, the bottleneck is almost always unfinished analysis or unclear research questions rather than writing.",
      ],
    },
  ],
  checklist: {
    title: "Findings chapter submission checklist",
    items: [
      "Every research question has a subsection that visibly answers it",
      "Sample description, response rate and missing-data handling reported before results",
      "Assumption checks reported before the tests that rely on them",
      "Every inferential result reports statistic, df, exact p-value and effect size with CI",
      "No raw software output pasted into the chapter body",
      "Every table and figure is self-contained, numbered, captioned and referenced in the text",
      "No table duplicates a figure showing the same data",
      "Qualitative themes presented visually before being discussed in prose",
      "Every quotation attributed with a pseudonym and analytically relevant characteristics",
      "Evidence spread stated for each theme (how many participants, which subgroups)",
      "Non-significant results and disconfirming cases reported",
      "Mixed-methods work includes an explicit joint display or integration section",
      "No interpretation, literature comparison or implications anywhere in the chapter",
      "Analysis performed matches the methodology chapter exactly",
      "Closing summary is a factual table or half-page, with no interpretation",
      "Chapter read in greyscale print at actual size before submission",
    ],
  },
  faqs: [
    {
      question: "What is the difference between the findings chapter and the discussion chapter?",
      answer:
        "The findings chapter reports what you found; the discussion explains what it means. Findings contain descriptive statistics, test results, themes and quotations. Discussion contains comparison with prior literature, explanation of why results occurred, theoretical and practical implications, and limitations. If a sentence contains 'because', 'suggests' or 'consistent with prior work', it belongs in the discussion.",
    },
    {
      question: "Can I combine findings and discussion into one chapter?",
      answer:
        "Yes, and some disciplines prefer it — particularly qualitative research in education, nursing and management, where separating theme presentation from interpretation creates repetition. Check your department's handbook and look at two or three recently passed theses from your own programme. If you do combine them, signal the shift explicitly in each section so the examiner can still see evidence and interpretation as distinct moves.",
    },
    {
      question: "How long should a dissertation findings chapter be?",
      answer:
        "Typically 15–25% of the total word count: about 2,500–4,000 words for a 15,000-word Master's dissertation, and 8,000–15,000 words for an 80,000-word PhD thesis. Qualitative chapters run longer because quotations take space; quantitative chapters run shorter because tables carry much of the content.",
    },
    {
      question: "How many quotations should I include per theme?",
      answer:
        "Two to three per theme, drawn from different participants, is the usual working range. One quotation makes a theme look like an individual view; more than four starts to substitute evidence for analysis. Always pair quotations with a stated claim and a synthesis sentence.",
    },
    {
      question: "Should I report non-significant results?",
      answer:
        "Yes, always. Omitting non-significant findings is selective reporting, it is detectable when the methodology promised an analysis the findings never mention, and examiners treat it as a serious integrity issue. Non-significant results are also frequently the most defensible part of a discussion.",
    },
    {
      question: "Do tables and figures count towards my word limit?",
      answer:
        "In most institutions they do not, but the convention varies and some count text inside tables. Check your programme handbook. This matters practically: a chapter designed around large tables can either fit comfortably or blow the limit entirely depending on which rule applies.",
    },
    {
      question: "Can I present the same data as both a table and a chart?",
      answer:
        "No. Choose whichever makes the pattern clearest and delete the other. Duplicating data is one of the fastest ways to look like you are padding, and examiners comment on it routinely.",
    },
    {
      question: "How do I present findings when my sample is very small?",
      answer:
        "Report the full sample honestly, avoid percentages on small denominators (three of eleven, not 27%), use exact tests rather than approximations where appropriate, and shift the analytic weight towards depth rather than generalisation. A small-sample findings chapter is entirely defensible when it does not overclaim.",
    },
  ],
  related: [
    {
      label: "Presenting research findings in your dissertation",
      href: "/blog/presenting-research-findings-dissertation",
      description: "The longer worked walkthrough, with annotated examples.",
    },
    {
      label: "Dissertation results section examples",
      href: "/blog/dissertation-results-section-example",
      description: "Annotated quantitative and qualitative results extracts.",
    },
    {
      label: "Dissertation discussion chapter example",
      href: "/blog/dissertation-discussion-chapter-example",
      description: "How to move from reporting to interpretation.",
    },
    {
      label: "Findings vs discussion: the difference",
      href: "/blog/findings-vs-discussion-difference",
      description: "A sentence-level test for which chapter a claim belongs in.",
    },
    {
      label: "Statistical tests: which one to use",
      href: "/blog/statistical-tests-dissertation-which-to-use",
      description: "Match your research question to the right test.",
    },
    {
      label: "Dissertation statistics help",
      href: "/dissertation-statistics-help",
      description: "Analysis run and interpreted by PhD statisticians.",
    },
  ],
  ctaLine:
    "Send us your data and research questions. A PhD-qualified analyst will tell you whether your findings chapter reports what an examiner needs — no consultation fee.",
};
