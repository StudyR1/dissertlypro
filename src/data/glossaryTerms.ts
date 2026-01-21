export interface GlossaryTerm {
  term: string;
  definition: string;
  category: "degrees" | "research" | "writing" | "defense" | "methodology" | "analysis";
  relatedTerms?: string[];
  seeAlso?: { title: string; href: string };
}

export const glossaryTerms: GlossaryTerm[] = [
  // Degrees & Academic Structure
  {
    term: "Dissertation",
    definition: "A substantial written document presenting original research, typically required for doctoral degrees (PhD, EdD, DBA). In the UK/Europe, refers specifically to PhD-level work; in the US, the term is used more broadly for both Master's and doctoral work.",
    category: "degrees",
    relatedTerms: ["Thesis", "PhD", "Doctoral Research"],
    seeAlso: { title: "Dissertation vs Thesis", href: "/dissertation-vs-thesis" }
  },
  {
    term: "Thesis",
    definition: "A research document demonstrating mastery of a subject, typically required for Master's degrees. In the UK/Europe, refers to Master's-level work; in the US, may refer to either Master's or doctoral work. The terminology varies significantly by region.",
    category: "degrees",
    relatedTerms: ["Dissertation", "Master's Degree", "Research Project"],
    seeAlso: { title: "Dissertation vs Thesis", href: "/dissertation-vs-thesis" }
  },
  {
    term: "ABD (All But Dissertation)",
    definition: "A status indicating a doctoral student has completed all program requirements except the dissertation. While not an official credential, it's commonly used in US academic contexts to describe candidates in the final research phase.",
    category: "degrees",
    relatedTerms: ["Doctoral Candidate", "PhD Candidate", "Dissertation Stage"]
  },
  {
    term: "Candidacy",
    definition: "The formal status achieved after passing qualifying or comprehensive exams, indicating a student has advanced to the dissertation phase. Candidacy typically comes with different registration status and expectations.",
    category: "degrees",
    relatedTerms: ["Comprehensive Exams", "Qualifying Exams", "ABD"],
    seeAlso: { title: "Candidacy Exams Guide", href: "/candidacy-exams" }
  },
  {
    term: "DPhil",
    definition: "Doctor of Philosophy—the term used at Oxford and some other UK universities instead of PhD. The qualification is equivalent to a PhD; only the naming convention differs.",
    category: "degrees",
    relatedTerms: ["PhD", "Doctorate", "Doctoral Degree"]
  },
  {
    term: "MPhil",
    definition: "Master of Philosophy—a research-based Master's degree common in the UK, often a stepping stone to PhD. Some programs allow upgrading from MPhil to PhD after demonstrating sufficient progress.",
    category: "degrees",
    relatedTerms: ["Master's Degree", "Research Master's", "PhD Upgrade"]
  },
  
  // Research & Methodology
  {
    term: "Literature Review",
    definition: "A comprehensive survey and synthesis of existing research on a topic. A required chapter in both theses and dissertations, establishing the research context, identifying gaps, and justifying the study's contribution.",
    category: "research",
    relatedTerms: ["Systematic Review", "Research Gap", "Theoretical Framework"],
    seeAlso: { title: "Literature Review Guide", href: "/literature-review-guide" }
  },
  {
    term: "Research Gap",
    definition: "An area where existing literature is insufficient, contradictory, or missing entirely. Identifying a research gap is essential for justifying original research and demonstrating the study's contribution to knowledge.",
    category: "research",
    relatedTerms: ["Literature Review", "Research Contribution", "Originality"]
  },
  {
    term: "Theoretical Framework",
    definition: "The underlying theory or set of theories that guides research design, data collection, and interpretation. It provides the lens through which the research problem is viewed and analyzed.",
    category: "research",
    relatedTerms: ["Conceptual Framework", "Research Design", "Methodology"]
  },
  {
    term: "Conceptual Framework",
    definition: "A visual or written representation of the key concepts, variables, and relationships in a study. Often researcher-developed (unlike theoretical frameworks which draw on established theories).",
    category: "research",
    relatedTerms: ["Theoretical Framework", "Variables", "Research Model"]
  },
  {
    term: "Hypothesis",
    definition: "A testable prediction about the relationship between variables. In quantitative research, hypotheses are typically stated as null (H₀) and alternative (H₁) forms and tested through statistical analysis.",
    category: "methodology",
    relatedTerms: ["Research Question", "Variables", "Statistical Testing"]
  },
  {
    term: "Research Question",
    definition: "The central inquiry that guides a research study. Good research questions are specific, focused, and answerable through the proposed methodology. They drive data collection and analysis decisions.",
    category: "research",
    relatedTerms: ["Hypothesis", "Research Objectives", "Research Aims"],
    seeAlso: { title: "Research Questions Guide", href: "/research-questions" }
  },
  
  // Methodology
  {
    term: "Qualitative Research",
    definition: "Research methodology that explores phenomena through non-numerical data such as interviews, observations, and documents. Seeks to understand meanings, experiences, and perspectives in depth.",
    category: "methodology",
    relatedTerms: ["Quantitative Research", "Mixed Methods", "Thematic Analysis"],
    seeAlso: { title: "Qualitative Analysis Guide", href: "/qualitative-analysis" }
  },
  {
    term: "Quantitative Research",
    definition: "Research methodology that uses numerical data and statistical analysis to test hypotheses and establish relationships between variables. Emphasizes objectivity, generalizability, and replicability.",
    category: "methodology",
    relatedTerms: ["Qualitative Research", "Mixed Methods", "Statistical Analysis"]
  },
  {
    term: "Mixed Methods",
    definition: "Research approach combining qualitative and quantitative methods in a single study. Designs include convergent, explanatory sequential, exploratory sequential, and embedded approaches.",
    category: "methodology",
    relatedTerms: ["Qualitative Research", "Quantitative Research", "Triangulation"],
    seeAlso: { title: "Mixed Methods Guide", href: "/mixed-methods-research" }
  },
  {
    term: "Triangulation",
    definition: "Using multiple data sources, methods, investigators, or theories to cross-verify findings and enhance credibility. A key strategy for establishing validity in qualitative and mixed methods research.",
    category: "methodology",
    relatedTerms: ["Validity", "Reliability", "Mixed Methods"]
  },
  {
    term: "Phenomenology",
    definition: "A qualitative research approach focused on understanding the lived experiences of participants. Seeks to describe the essence of a phenomenon as experienced by those who have lived it.",
    category: "methodology",
    relatedTerms: ["Qualitative Research", "Lived Experience", "Hermeneutics"]
  },
  {
    term: "Grounded Theory",
    definition: "A systematic qualitative methodology that develops theory from data through iterative coding and constant comparison. The theory 'emerges' from the data rather than being predetermined.",
    category: "methodology",
    relatedTerms: ["Coding", "Constant Comparison", "Theoretical Sampling"]
  },
  {
    term: "Case Study",
    definition: "An in-depth investigation of a bounded system (individual, group, organization, event) using multiple data sources. Particularly useful for exploring complex phenomena in real-world contexts.",
    category: "methodology",
    relatedTerms: ["Qualitative Research", "Bounded System", "Multiple Sources"]
  },
  {
    term: "Ethnography",
    definition: "A qualitative methodology involving prolonged immersion in a cultural setting to understand social behaviors, beliefs, and practices from participants' perspectives. Originated in anthropology.",
    category: "methodology",
    relatedTerms: ["Participant Observation", "Field Notes", "Cultural Context"]
  },
  
  // Data Analysis
  {
    term: "Thematic Analysis",
    definition: "A qualitative analysis method for identifying, analyzing, and reporting patterns (themes) within data. Flexible and accessible, it can be applied across various theoretical frameworks.",
    category: "analysis",
    relatedTerms: ["Coding", "Themes", "Qualitative Analysis"]
  },
  {
    term: "Coding",
    definition: "The process of labeling and organizing qualitative data to identify themes, patterns, and categories. Includes open, axial, and selective coding phases in grounded theory approaches.",
    category: "analysis",
    relatedTerms: ["Thematic Analysis", "Categories", "NVivo"]
  },
  {
    term: "Statistical Significance",
    definition: "A measure indicating whether observed results are likely due to chance (p-value typically < 0.05). Does not indicate practical importance—effect size should also be considered.",
    category: "analysis",
    relatedTerms: ["P-value", "Effect Size", "Hypothesis Testing"]
  },
  {
    term: "Effect Size",
    definition: "A quantitative measure of the magnitude of a phenomenon or relationship. Unlike statistical significance, effect size indicates practical importance and is independent of sample size.",
    category: "analysis",
    relatedTerms: ["Statistical Significance", "Cohen's d", "Practical Significance"]
  },
  {
    term: "Regression Analysis",
    definition: "Statistical technique for examining relationships between variables and making predictions. Types include linear, multiple, logistic, and hierarchical regression.",
    category: "analysis",
    relatedTerms: ["Variables", "Prediction", "SPSS"]
  },
  
  // Writing & Structure
  {
    term: "Abstract",
    definition: "A concise summary (typically 150-350 words) of the entire dissertation or thesis. Should include purpose, methodology, key findings, and implications. Often written last.",
    category: "writing",
    relatedTerms: ["Executive Summary", "Dissertation Structure", "Keywords"]
  },
  {
    term: "Acknowledgments",
    definition: "A section thanking individuals and organizations that contributed to the research. Typically includes supervisors, funding bodies, participants, and personal supporters.",
    category: "writing",
    relatedTerms: ["Front Matter", "Dissertation Structure", "Dedication"]
  },
  {
    term: "Appendix",
    definition: "Supplementary material placed at the end of a dissertation, including questionnaires, interview guides, detailed tables, or additional data. Referenced in the main text.",
    category: "writing",
    relatedTerms: ["Supplementary Materials", "Back Matter", "Documentation"]
  },
  {
    term: "Signposting",
    definition: "Writing technique using transitional phrases to guide readers through the argument structure. Examples: 'This chapter examines...', 'Having established...', 'The following section...'",
    category: "writing",
    relatedTerms: ["Academic Writing", "Transitions", "Coherence"]
  },
  {
    term: "Hedging",
    definition: "Academic writing technique using cautious language to acknowledge uncertainty. Words like 'may', 'might', 'suggests', and 'appears to' show appropriate scholarly caution.",
    category: "writing",
    relatedTerms: ["Academic Writing", "Tentative Language", "Scholarly Voice"]
  },
  
  // Defense & Examination
  {
    term: "Viva Voce",
    definition: "The oral defense of a dissertation, common in UK and European systems. Candidates defend their research before examiners (typically one internal, one external) in a formal examination.",
    category: "defense",
    relatedTerms: ["Oral Defense", "Examiners", "Dissertation Defense"],
    seeAlso: { title: "Viva Preparation Guide", href: "/viva-preparation" }
  },
  {
    term: "Oral Defense",
    definition: "A formal examination where candidates present and defend their dissertation before a committee. The US term for what UK institutions call a viva voce.",
    category: "defense",
    relatedTerms: ["Viva Voce", "Committee", "Defense Presentation"],
    seeAlso: { title: "Viva Preparation Guide", href: "/viva-preparation" }
  },
  {
    term: "External Examiner",
    definition: "An expert from outside the candidate's institution appointed to examine the dissertation. Provides independent assessment and ensures standards are met.",
    category: "defense",
    relatedTerms: ["Internal Examiner", "Viva Voce", "Examination Committee"]
  },
  {
    term: "Minor Corrections",
    definition: "Small revisions required after a viva, typically typographical or clarification issues. Usually must be completed within 1-3 months and reviewed by the internal examiner.",
    category: "defense",
    relatedTerms: ["Major Corrections", "Viva Outcome", "Revisions"]
  },
  {
    term: "Major Corrections",
    definition: "Substantial revisions required after a viva, involving significant rewriting or additional analysis. Typically must be completed within 6-12 months and may require re-examination.",
    category: "defense",
    relatedTerms: ["Minor Corrections", "Viva Outcome", "Revisions"]
  },
  {
    term: "IRB (Institutional Review Board)",
    definition: "A committee that reviews research involving human subjects to ensure ethical standards are met. Required approval before data collection in most institutions.",
    category: "research",
    relatedTerms: ["Ethics Approval", "Research Ethics", "Informed Consent"],
    seeAlso: { title: "IRB Ethics Guide", href: "/irb-ethics-guide" }
  },
  {
    term: "Informed Consent",
    definition: "The process of ensuring research participants understand the study's purpose, procedures, risks, and their rights before agreeing to participate. A fundamental ethical requirement.",
    category: "research",
    relatedTerms: ["IRB", "Research Ethics", "Participant Rights"]
  },
  {
    term: "PRISMA",
    definition: "Preferred Reporting Items for Systematic Reviews and Meta-Analyses—a set of guidelines and a flow diagram for transparent reporting of systematic review methodology.",
    category: "methodology",
    relatedTerms: ["Systematic Review", "Meta-Analysis", "Literature Review"],
    seeAlso: { title: "PRISMA Flow Tool", href: "/tools/prisma-flow" }
  }
];

export const categoryLabels: Record<GlossaryTerm["category"], string> = {
  degrees: "Degrees & Structure",
  research: "Research Concepts",
  writing: "Writing & Structure",
  defense: "Defense & Examination",
  methodology: "Methodology",
  analysis: "Data Analysis"
};
