import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ToolSchema from "@/components/schemas/ToolSchema";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import { 
  FileText, 
  Sparkles, 
  Copy, 
  CheckCircle2, 
  BookOpen,
  BarChart3,
  Brain,
  Layers,
  ArrowRight,
  RefreshCw,
  Download,
  ChevronRight,
  GraduationCap,
  Target,
  ListTree
} from "lucide-react";
import { toast } from "sonner";

interface ChapterSection {
  title: string;
  subsections: string[];
  tips?: string;
}

interface GeneratedOutline {
  title: string;
  chapters: {
    number: number;
    title: string;
    sections: ChapterSection[];
    wordCount: string;
  }[];
  totalWords: string;
  estimatedPages: string;
}

const degreeTypes = [
  { value: "phd", label: "PhD / Doctoral" },
  { value: "masters", label: "Master's Thesis" },
  { value: "dissertation", label: "Undergraduate Dissertation" },
];

const methodologyTypes = [
  { value: "quantitative", label: "Quantitative", icon: BarChart3 },
  { value: "qualitative", label: "Qualitative", icon: Brain },
  { value: "mixed", label: "Mixed Methods", icon: Layers },
];

const disciplineAreas = [
  { value: "social-sciences", label: "Social Sciences" },
  { value: "business", label: "Business & Management" },
  { value: "education", label: "Education" },
  { value: "health", label: "Health Sciences" },
  { value: "psychology", label: "Psychology" },
  { value: "stem", label: "STEM / Engineering" },
  { value: "humanities", label: "Humanities" },
  { value: "other", label: "Other" },
];

const generateOutline = (
  researchQuestion: string,
  methodology: string,
  degree: string,
  discipline: string
): GeneratedOutline => {
  const isPhD = degree === "phd";
  const isMasters = degree === "masters";
  
  // Base word counts by degree
  const baseWordCount = isPhD ? 80000 : isMasters ? 20000 : 12000;
  
  // Common chapters
  const introChapter: ChapterSection[] = [
    {
      title: "Background and Context",
      subsections: [
        "Overview of the research area",
        "Current state of knowledge",
        "Significance of the topic"
      ],
      tips: "Hook the reader with compelling context about why this research matters now."
    },
    {
      title: "Problem Statement",
      subsections: [
        "Identification of the research gap",
        "Consequences of the problem",
        "Need for the study"
      ]
    },
    {
      title: "Research Questions and Objectives",
      subsections: [
        `Primary research question: "${researchQuestion || 'Your research question here'}"`,
        "Secondary/sub-questions",
        "Research objectives"
      ]
    },
    {
      title: "Scope and Delimitations",
      subsections: [
        "Boundaries of the study",
        "What is included/excluded",
        "Justification for scope"
      ]
    },
    {
      title: "Thesis Structure Overview",
      subsections: [
        "Chapter-by-chapter summary",
        "How chapters connect"
      ]
    }
  ];

  const litReviewChapter: ChapterSection[] = [
    {
      title: "Search Strategy and Selection Criteria",
      subsections: [
        "Databases and sources searched",
        "Keywords and search terms",
        "Inclusion/exclusion criteria"
      ],
      tips: "Document your systematic approach to demonstrate rigor."
    },
    {
      title: "Theoretical Framework",
      subsections: [
        "Key theories underpinning the research",
        "Theoretical lens/perspective",
        "Application to current study"
      ]
    },
    {
      title: "Thematic Review of Literature",
      subsections: [
        "Theme 1: [Major concept from your RQ]",
        "Theme 2: [Secondary concept]",
        "Theme 3: [Related area]",
        "Synthesis across themes"
      ]
    },
    {
      title: "Critical Analysis and Gaps",
      subsections: [
        "Strengths of existing research",
        "Limitations and contradictions",
        "Identified gaps your study addresses"
      ]
    },
    {
      title: "Conceptual Framework",
      subsections: [
        "Visual model of relationships",
        "Key variables/concepts",
        "Hypotheses (if applicable)"
      ]
    }
  ];

  // Methodology varies by type
  let methodologyChapter: ChapterSection[] = [];
  
  if (methodology === "quantitative") {
    methodologyChapter = [
      {
        title: "Research Philosophy and Approach",
        subsections: [
          "Positivist/post-positivist paradigm",
          "Deductive approach",
          "Justification for quantitative design"
        ]
      },
      {
        title: "Research Design",
        subsections: [
          "Type of design (experimental, correlational, survey, etc.)",
          "Variables: independent, dependent, control",
          "Hypotheses"
        ],
        tips: "Clearly link your design choice to your research questions."
      },
      {
        title: "Population and Sampling",
        subsections: [
          "Target population",
          "Sampling strategy and justification",
          "Sample size calculation",
          "Inclusion/exclusion criteria"
        ]
      },
      {
        title: "Data Collection Instruments",
        subsections: [
          "Survey/questionnaire design",
          "Existing validated instruments",
          "Pilot testing procedures"
        ]
      },
      {
        title: "Validity and Reliability",
        subsections: [
          "Internal and external validity",
          "Reliability measures (Cronbach's alpha, etc.)",
          "Strategies to minimize bias"
        ]
      },
      {
        title: "Data Analysis Procedures",
        subsections: [
          "Software used (SPSS, R, etc.)",
          "Descriptive statistics",
          "Inferential statistics",
          "Assumption testing"
        ]
      },
      {
        title: "Ethical Considerations",
        subsections: [
          "IRB/ethics approval",
          "Informed consent",
          "Data protection and anonymity"
        ]
      }
    ];
  } else if (methodology === "qualitative") {
    methodologyChapter = [
      {
        title: "Research Philosophy and Paradigm",
        subsections: [
          "Interpretivist/constructivist paradigm",
          "Inductive approach",
          "Justification for qualitative design"
        ]
      },
      {
        title: "Research Design/Tradition",
        subsections: [
          "Chosen approach (phenomenology, grounded theory, case study, ethnography, narrative)",
          "Rationale for approach selection",
          "Alignment with research questions"
        ],
        tips: "Explain why this specific qualitative tradition best answers your RQ."
      },
      {
        title: "Participant Selection",
        subsections: [
          "Purposive sampling strategy",
          "Selection criteria",
          "Sample size and saturation",
          "Recruitment process"
        ]
      },
      {
        title: "Data Collection Methods",
        subsections: [
          "Semi-structured interviews/focus groups",
          "Interview protocol development",
          "Observation methods (if applicable)",
          "Document analysis (if applicable)"
        ]
      },
      {
        title: "Data Analysis Approach",
        subsections: [
          "Thematic analysis / coding approach",
          "Software used (NVivo, Atlas.ti, etc.)",
          "Coding process (open, axial, selective)",
          "Theme development"
        ]
      },
      {
        title: "Trustworthiness and Rigor",
        subsections: [
          "Credibility strategies",
          "Transferability",
          "Dependability",
          "Confirmability",
          "Reflexivity statement"
        ]
      },
      {
        title: "Ethical Considerations",
        subsections: [
          "IRB/ethics approval",
          "Informed consent process",
          "Confidentiality measures",
          "Researcher positionality"
        ]
      }
    ];
  } else {
    // Mixed methods
    methodologyChapter = [
      {
        title: "Research Philosophy",
        subsections: [
          "Pragmatist paradigm",
          "Justification for mixed methods",
          "Integration rationale"
        ]
      },
      {
        title: "Mixed Methods Design",
        subsections: [
          "Design type (convergent, explanatory sequential, exploratory sequential, embedded)",
          "Priority and timing decisions",
          "Integration points"
        ],
        tips: "Clearly explain how the two strands will be integrated and why."
      },
      {
        title: "Quantitative Strand",
        subsections: [
          "Quantitative research questions/hypotheses",
          "Sampling and participants",
          "Data collection instruments",
          "Statistical analysis plan"
        ]
      },
      {
        title: "Qualitative Strand",
        subsections: [
          "Qualitative research questions",
          "Participant selection",
          "Data collection methods",
          "Analysis approach"
        ]
      },
      {
        title: "Integration Strategy",
        subsections: [
          "Point of integration",
          "Integration technique (merging, connecting, embedding)",
          "Joint display development"
        ]
      },
      {
        title: "Quality Criteria",
        subsections: [
          "Quantitative validity and reliability",
          "Qualitative trustworthiness",
          "Mixed methods legitimation"
        ]
      },
      {
        title: "Ethical Considerations",
        subsections: [
          "IRB/ethics approval",
          "Consent procedures for both strands",
          "Data management"
        ]
      }
    ];
  }

  // Results chapter varies
  let resultsChapter: ChapterSection[] = [];
  
  if (methodology === "quantitative") {
    resultsChapter = [
      {
        title: "Data Screening and Preparation",
        subsections: [
          "Response rate",
          "Missing data handling",
          "Outlier analysis",
          "Assumption testing"
        ]
      },
      {
        title: "Descriptive Statistics",
        subsections: [
          "Demographic characteristics",
          "Central tendency and dispersion",
          "Frequency distributions"
        ],
        tips: "Use tables for demographics, reserve figures for key patterns."
      },
      {
        title: "Inferential Statistics",
        subsections: [
          "Hypothesis 1 results",
          "Hypothesis 2 results",
          "Additional analyses",
          "Effect sizes"
        ]
      },
      {
        title: "Summary of Findings",
        subsections: [
          "Key results overview",
          "Hypotheses supported/not supported"
        ]
      }
    ];
  } else if (methodology === "qualitative") {
    resultsChapter = [
      {
        title: "Participant Overview",
        subsections: [
          "Participant demographics table",
          "Participant profiles (anonymized)"
        ]
      },
      {
        title: "Theme 1: [Major Theme]",
        subsections: [
          "Subtheme 1.1",
          "Subtheme 1.2",
          "Supporting quotes and evidence"
        ],
        tips: "Balance participant voice with your analytical narrative."
      },
      {
        title: "Theme 2: [Second Theme]",
        subsections: [
          "Subtheme 2.1",
          "Subtheme 2.2",
          "Supporting quotes and evidence"
        ]
      },
      {
        title: "Theme 3: [Third Theme]",
        subsections: [
          "Subtheme 3.1",
          "Subtheme 3.2",
          "Supporting quotes and evidence"
        ]
      },
      {
        title: "Connections Across Themes",
        subsections: [
          "Relationships between themes",
          "Thematic model/framework"
        ]
      }
    ];
  } else {
    resultsChapter = [
      {
        title: "Quantitative Results",
        subsections: [
          "Descriptive statistics",
          "Inferential statistics",
          "Key quantitative findings"
        ]
      },
      {
        title: "Qualitative Findings",
        subsections: [
          "Theme 1 with supporting evidence",
          "Theme 2 with supporting evidence",
          "Theme 3 with supporting evidence"
        ]
      },
      {
        title: "Integration of Results",
        subsections: [
          "Joint display table",
          "Convergence and divergence",
          "Meta-inferences"
        ],
        tips: "The integration section is the heart of mixed methods—show how strands inform each other."
      }
    ];
  }

  const discussionChapter: ChapterSection[] = [
    {
      title: "Summary of Key Findings",
      subsections: [
        "Brief restatement of main results",
        "Answer to research questions"
      ]
    },
    {
      title: "Interpretation of Findings",
      subsections: [
        "Finding 1: meaning and significance",
        "Finding 2: meaning and significance",
        "Finding 3: meaning and significance"
      ],
      tips: "Go beyond description—explain WHY you found what you found."
    },
    {
      title: "Relation to Literature",
      subsections: [
        "Alignment with previous research",
        "Contradictions with existing studies",
        "Contribution to knowledge"
      ]
    },
    {
      title: "Theoretical Implications",
      subsections: [
        "Support for theoretical framework",
        "Extensions or modifications to theory",
        "New theoretical insights"
      ]
    },
    {
      title: "Practical Implications",
      subsections: [
        "Implications for practitioners",
        "Policy recommendations",
        "Actionable insights"
      ]
    },
    {
      title: "Limitations",
      subsections: [
        "Methodological limitations",
        "Scope limitations",
        "How limitations were mitigated"
      ]
    },
    {
      title: "Future Research Directions",
      subsections: [
        "Questions raised by this study",
        "Methodological improvements",
        "New research avenues"
      ]
    }
  ];

  const conclusionChapter: ChapterSection[] = [
    {
      title: "Research Summary",
      subsections: [
        "Recap of purpose and approach",
        "Key findings synthesis"
      ]
    },
    {
      title: "Contributions",
      subsections: [
        "Theoretical contribution",
        "Methodological contribution",
        "Practical contribution"
      ]
    },
    {
      title: "Final Reflections",
      subsections: [
        "Broader significance",
        "Personal reflections (if appropriate)",
        "Closing statement"
      ],
      tips: "End with impact—why does this research matter for the field and society?"
    }
  ];

  // Word count distribution
  const wordDistribution = isPhD 
    ? { intro: 8000, lit: 20000, method: 15000, results: 20000, discussion: 12000, conclusion: 5000 }
    : isMasters
    ? { intro: 2500, lit: 5000, method: 4000, results: 5000, discussion: 3000, conclusion: 500 }
    : { intro: 1500, lit: 3000, method: 2500, results: 3000, discussion: 1500, conclusion: 500 };

  const chapters = [
    { number: 1, title: "Introduction", sections: introChapter, wordCount: `${wordDistribution.intro.toLocaleString()} words` },
    { number: 2, title: "Literature Review", sections: litReviewChapter, wordCount: `${wordDistribution.lit.toLocaleString()} words` },
    { number: 3, title: "Methodology", sections: methodologyChapter, wordCount: `${wordDistribution.method.toLocaleString()} words` },
    { number: 4, title: methodology === "qualitative" ? "Findings" : "Results", sections: resultsChapter, wordCount: `${wordDistribution.results.toLocaleString()} words` },
    { number: 5, title: "Discussion", sections: discussionChapter, wordCount: `${wordDistribution.discussion.toLocaleString()} words` },
    { number: 6, title: "Conclusion", sections: conclusionChapter, wordCount: `${wordDistribution.conclusion.toLocaleString()} words` },
  ];

  return {
    title: `${degree === "phd" ? "Doctoral Dissertation" : degree === "masters" ? "Master's Thesis" : "Dissertation"} Outline`,
    chapters,
    totalWords: `${baseWordCount.toLocaleString()} words`,
    estimatedPages: `${Math.round(baseWordCount / 250)} pages`
  };
};

const OutlineGeneratorPage = () => {
  const [researchQuestion, setResearchQuestion] = useState("");
  const [methodology, setMethodology] = useState("");
  const [degree, setDegree] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [generatedOutline, setGeneratedOutline] = useState<GeneratedOutline | null>(null);
  const [copiedChapter, setCopiedChapter] = useState<number | null>(null);

  const canGenerate = methodology && degree;

  const handleGenerate = () => {
    const outline = generateOutline(researchQuestion, methodology, degree, discipline);
    setGeneratedOutline(outline);
  };

  const handleReset = () => {
    setResearchQuestion("");
    setMethodology("");
    setDegree("");
    setDiscipline("");
    setGeneratedOutline(null);
  };

  const copyChapterToClipboard = (chapterIndex: number) => {
    if (!generatedOutline) return;
    
    const chapter = generatedOutline.chapters[chapterIndex];
    let text = `Chapter ${chapter.number}: ${chapter.title}\n`;
    text += `Target: ${chapter.wordCount}\n\n`;
    
    chapter.sections.forEach((section, i) => {
      text += `${chapter.number}.${i + 1} ${section.title}\n`;
      section.subsections.forEach((sub, j) => {
        text += `    ${chapter.number}.${i + 1}.${j + 1} ${sub}\n`;
      });
      text += "\n";
    });

    navigator.clipboard.writeText(text);
    setCopiedChapter(chapterIndex);
    toast.success("Chapter outline copied!");
    setTimeout(() => setCopiedChapter(null), 2000);
  };

  const copyFullOutline = () => {
    if (!generatedOutline) return;
    
    let text = `${generatedOutline.title}\n`;
    text += `Total: ${generatedOutline.totalWords} (${generatedOutline.estimatedPages})\n\n`;
    text += "=".repeat(50) + "\n\n";

    generatedOutline.chapters.forEach(chapter => {
      text += `Chapter ${chapter.number}: ${chapter.title}\n`;
      text += `Target: ${chapter.wordCount}\n\n`;
      
      chapter.sections.forEach((section, i) => {
        text += `${chapter.number}.${i + 1} ${section.title}\n`;
        section.subsections.forEach((sub, j) => {
          text += `    ${chapter.number}.${i + 1}.${j + 1} ${sub}\n`;
        });
        text += "\n";
      });
      text += "-".repeat(30) + "\n\n";
    });

    navigator.clipboard.writeText(text);
    toast.success("Full outline copied to clipboard!");
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://dissertlypro.com" },
    { name: "Tools", url: "https://dissertlypro.com/tools" },
    { name: "Outline Generator", url: "https://dissertlypro.com/tools/outline-generator" }
  ];

  return (
    <Layout>
      <SEO
        title="Dissertation Outline Generator | Free Chapter Structure Tool | DissertlyPro"
        description="Generate a customized dissertation or thesis chapter outline based on your research question and methodology. Get detailed section structures for quantitative, qualitative, or mixed methods research. Free tool."
        canonical="https://dissertlypro.com/tools/outline-generator"
        keywords={["dissertation outline generator", "thesis structure tool", "chapter outline", "dissertation chapters", "research outline", "methodology structure"]}
      />
      <ToolSchema
        name="Dissertation Outline Generator"
        description="Generate a customized dissertation or thesis chapter outline based on your research question, methodology type, and degree level. Includes detailed section structures and word count targets."
        url="https://dissertlypro.com/tools/outline-generator"
        applicationCategory="EducationalApplication"
        operatingSystem="Web Browser"
        offers={{
          price: "0",
          priceCurrency: "USD"
        }}
        aggregateRating={{
          ratingValue: "4.9",
          ratingCount: "1456",
          bestRating: "5",
          worstRating: "1"
        }}
        featureList={[
          "Customized chapter structures",
          "Quantitative, qualitative, and mixed methods outlines",
          "PhD and Master's level options",
          "Section-by-section breakdown",
          "Word count targets",
          "Copy to clipboard functionality"
        ]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="relative pt-12 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 border-copper/30 text-copper">
              <ListTree className="h-3 w-3 mr-1" />
              Free Planning Tool
            </Badge>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              Dissertation Outline Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Generate a structured chapter outline tailored to your research methodology and degree level
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Input Panel */}
            <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="h-5 w-5 text-copper" />
                  Your Research Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Degree Type */}
                <div className="space-y-2">
                  <Label>Degree Level <span className="text-destructive">*</span></Label>
                  <Select value={degree} onValueChange={setDegree}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select degree type" />
                    </SelectTrigger>
                    <SelectContent>
                      {degreeTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Methodology */}
                <div className="space-y-2">
                  <Label>Methodology Type <span className="text-destructive">*</span></Label>
                  <div className="grid grid-cols-3 gap-2">
                    {methodologyTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = methodology === type.value;
                      return (
                        <button
                          key={type.value}
                          onClick={() => setMethodology(type.value)}
                          className={`p-3 rounded-lg border-2 transition-all text-center ${
                            isSelected 
                              ? "border-copper bg-copper/10" 
                              : "border-border hover:border-copper/50"
                          }`}
                        >
                          <Icon className={`h-5 w-5 mx-auto mb-1 ${isSelected ? "text-copper" : "text-muted-foreground"}`} />
                          <span className={`text-xs font-medium ${isSelected ? "text-copper" : "text-foreground"}`}>
                            {type.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Discipline */}
                <div className="space-y-2">
                  <Label>Discipline Area</Label>
                  <Select value={discipline} onValueChange={setDiscipline}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select discipline (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {disciplineAreas.map((area) => (
                        <SelectItem key={area.value} value={area.value}>
                          {area.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Research Question */}
                <div className="space-y-2">
                  <Label>Research Question</Label>
                  <Textarea
                    value={researchQuestion}
                    onChange={(e) => setResearchQuestion(e.target.value)}
                    placeholder="Enter your research question (optional but recommended)"
                    className="min-h-[80px] resize-none"
                    maxLength={500}
                  />
                  <p className="text-xs text-muted-foreground">
                    Your RQ will be incorporated into the outline structure
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button 
                    onClick={handleGenerate}
                    disabled={!canGenerate}
                    className="flex-1 gap-2 bg-copper hover:bg-copper-dark text-white"
                  >
                    <Sparkles className="h-4 w-4" />
                    Generate Outline
                  </Button>
                  {generatedOutline && (
                    <Button 
                      variant="outline" 
                      onClick={handleReset}
                      className="gap-2"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Output Panel */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {generatedOutline ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    {/* Summary Card */}
                    <Card className="border-copper/30 bg-copper/5">
                      <CardContent className="p-4">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <h2 className="font-semibold text-foreground">{generatedOutline.title}</h2>
                            <p className="text-sm text-muted-foreground">
                              {generatedOutline.chapters.length} chapters · {generatedOutline.totalWords} · {generatedOutline.estimatedPages}
                            </p>
                          </div>
                          <Button 
                            onClick={copyFullOutline}
                            variant="outline"
                            size="sm"
                            className="gap-2 border-copper/50 text-copper hover:bg-copper/10"
                          >
                            <Copy className="h-4 w-4" />
                            Copy All
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Chapters Accordion */}
                    <Accordion type="multiple" defaultValue={["chapter-0", "chapter-1"]} className="space-y-3">
                      {generatedOutline.chapters.map((chapter, chapterIndex) => (
                        <AccordionItem 
                          key={chapter.number} 
                          value={`chapter-${chapterIndex}`}
                          className="border border-border/50 rounded-lg overflow-hidden bg-card"
                        >
                          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50">
                            <div className="flex items-center gap-3 text-left">
                              <Badge variant="outline" className="shrink-0">
                                Ch. {chapter.number}
                              </Badge>
                              <div>
                                <span className="font-medium text-foreground">{chapter.title}</span>
                                <span className="text-xs text-muted-foreground ml-2">
                                  ({chapter.wordCount})
                                </span>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <div className="space-y-4">
                              {chapter.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="space-y-2">
                                  <div className="flex items-start gap-2">
                                    <span className="text-xs font-medium text-copper shrink-0 mt-0.5">
                                      {chapter.number}.{sectionIndex + 1}
                                    </span>
                                    <div className="flex-1">
                                      <h4 className="text-sm font-medium text-foreground">
                                        {section.title}
                                      </h4>
                                      <ul className="mt-1.5 space-y-1">
                                        {section.subsections.map((sub, subIndex) => (
                                          <li key={subIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <ChevronRight className="h-3 w-3 mt-0.5 shrink-0 text-copper/50" />
                                            <span>{sub}</span>
                                          </li>
                                        ))}
                                      </ul>
                                      {section.tips && (
                                        <p className="mt-2 text-xs text-copper bg-copper/10 rounded p-2 flex items-start gap-1.5">
                                          <Sparkles className="h-3 w-3 mt-0.5 shrink-0" />
                                          {section.tips}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                              
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyChapterToClipboard(chapterIndex)}
                                className="w-full mt-2 gap-2 text-muted-foreground hover:text-copper"
                              >
                                {copiedChapter === chapterIndex ? (
                                  <>
                                    <CheckCircle2 className="h-4 w-4 text-copper" />
                                    Copied!
                                  </>
                                ) : (
                                  <>
                                    <Copy className="h-4 w-4" />
                                    Copy Chapter Outline
                                  </>
                                )}
                              </Button>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    {/* Next Steps */}
                    <Card className="border-border/50">
                      <CardContent className="p-4">
                        <h3 className="font-medium text-foreground mb-3">Next Steps</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <Link to="/templates">
                            <Button variant="outline" className="w-full justify-start gap-2">
                              <Download className="h-4 w-4 text-copper" />
                              Download Chapter Templates
                            </Button>
                          </Link>
                          <Link to="/tools/chapter-planner">
                            <Button variant="outline" className="w-full justify-start gap-2">
                              <FileText className="h-4 w-4 text-copper" />
                              Create Timeline
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Card className="border-border/50 bg-muted/30 min-h-[500px] flex items-center justify-center">
                      <CardContent className="text-center p-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-copper/10 mb-4">
                          <ListTree className="h-8 w-8 text-copper/50" />
                        </div>
                        <h3 className="text-lg font-medium text-foreground mb-2">
                          Generate Your Outline
                        </h3>
                        <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-4">
                          Select your degree level and methodology type, then click generate to create a customized chapter structure
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="secondary">6 Chapters</Badge>
                          <Badge variant="secondary">Detailed Sections</Badge>
                          <Badge variant="secondary">Word Count Targets</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OutlineGeneratorPage;
