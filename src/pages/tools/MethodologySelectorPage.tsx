import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  FlaskConical, 
  MessageSquare, 
  Combine, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw,
  CheckCircle2,
  BookOpen,
  Target,
  Users,
  BarChart3,
  FileText
} from "lucide-react";
import ToolSchema from "@/components/schemas/ToolSchema";
import SoftwareApplicationSchema from "@/components/schemas/SoftwareApplicationSchema";

interface Question {
  id: string;
  question: string;
  description: string;
  options: {
    value: string;
    label: string;
    description: string;
    scores: { quantitative: number; qualitative: number; mixed: number };
  }[];
}

const questions: Question[] = [
  {
    id: "goal",
    question: "What is the primary goal of your research?",
    description: "Consider what you ultimately want to achieve with your study.",
    options: [
      {
        value: "test",
        label: "Test a theory or hypothesis",
        description: "Confirm or refute predictions about relationships between variables",
        scores: { quantitative: 3, qualitative: 0, mixed: 1 }
      },
      {
        value: "explore",
        label: "Explore and understand experiences",
        description: "Gain deep insights into how people perceive or experience phenomena",
        scores: { quantitative: 0, qualitative: 3, mixed: 1 }
      },
      {
        value: "both",
        label: "Both test and explore",
        description: "Combine statistical analysis with in-depth understanding",
        scores: { quantitative: 1, qualitative: 1, mixed: 3 }
      }
    ]
  },
  {
    id: "data",
    question: "What type of data are you most interested in collecting?",
    description: "Think about the nature of evidence you need for your research question.",
    options: [
      {
        value: "numbers",
        label: "Numbers and statistics",
        description: "Surveys, experiments, measurements, existing datasets",
        scores: { quantitative: 3, qualitative: 0, mixed: 1 }
      },
      {
        value: "words",
        label: "Words and narratives",
        description: "Interviews, observations, documents, open-ended responses",
        scores: { quantitative: 0, qualitative: 3, mixed: 1 }
      },
      {
        value: "both",
        label: "Both numbers and words",
        description: "A combination of statistical data and rich descriptions",
        scores: { quantitative: 1, qualitative: 1, mixed: 3 }
      }
    ]
  },
  {
    id: "sample",
    question: "How do you envision your sample size?",
    description: "Consider how many participants or cases you can realistically study.",
    options: [
      {
        value: "large",
        label: "Large sample (100+ participants)",
        description: "Need statistical power for generalizable findings",
        scores: { quantitative: 3, qualitative: 0, mixed: 2 }
      },
      {
        value: "small",
        label: "Small sample (5-30 participants)",
        description: "Deep engagement with fewer cases for rich understanding",
        scores: { quantitative: 0, qualitative: 3, mixed: 1 }
      },
      {
        value: "varied",
        label: "Varied (different sizes for different phases)",
        description: "Large sample for surveys, small sample for interviews",
        scores: { quantitative: 1, qualitative: 1, mixed: 3 }
      }
    ]
  },
  {
    id: "generalize",
    question: "How important is generalizability to your research?",
    description: "Consider whether your findings need to apply to broader populations.",
    options: [
      {
        value: "very",
        label: "Very important",
        description: "Findings should be applicable to larger populations",
        scores: { quantitative: 3, qualitative: 0, mixed: 2 }
      },
      {
        value: "somewhat",
        label: "Somewhat important",
        description: "Some generalizability desired but not the main focus",
        scores: { quantitative: 1, qualitative: 1, mixed: 2 }
      },
      {
        value: "not",
        label: "Not important",
        description: "Focus is on understanding specific contexts in depth",
        scores: { quantitative: 0, qualitative: 3, mixed: 1 }
      }
    ]
  },
  {
    id: "researcher",
    question: "What is your role as a researcher?",
    description: "Think about your relationship with participants and data.",
    options: [
      {
        value: "objective",
        label: "Objective and detached",
        description: "Minimize bias through standardized procedures",
        scores: { quantitative: 3, qualitative: 0, mixed: 1 }
      },
      {
        value: "engaged",
        label: "Engaged and interpretive",
        description: "Actively interpret meaning through close engagement",
        scores: { quantitative: 0, qualitative: 3, mixed: 1 }
      },
      {
        value: "flexible",
        label: "Flexible approach",
        description: "Adapt role based on research phase and needs",
        scores: { quantitative: 1, qualitative: 1, mixed: 3 }
      }
    ]
  },
  {
    id: "question_type",
    question: "How would you describe your research question?",
    description: "The phrasing of your question often indicates the best approach.",
    options: [
      {
        value: "what_extent",
        label: "\"To what extent...\" or \"What is the relationship...\"",
        description: "Questions seeking to measure, compare, or correlate",
        scores: { quantitative: 3, qualitative: 0, mixed: 1 }
      },
      {
        value: "how_why",
        label: "\"How do...\" or \"What is the experience of...\"",
        description: "Questions seeking to understand processes or meanings",
        scores: { quantitative: 0, qualitative: 3, mixed: 1 }
      },
      {
        value: "combined",
        label: "Both measurement and understanding aspects",
        description: "Questions with multiple dimensions requiring different approaches",
        scores: { quantitative: 1, qualitative: 1, mixed: 3 }
      }
    ]
  },
  {
    id: "timeline",
    question: "What is your timeline and resource availability?",
    description: "Consider practical constraints on your research design.",
    options: [
      {
        value: "structured",
        label: "Fixed timeline, need efficient data collection",
        description: "Surveys and experiments can be faster to administer",
        scores: { quantitative: 2, qualitative: 0, mixed: 1 }
      },
      {
        value: "flexible",
        label: "Flexible timeline, can invest in deep exploration",
        description: "Time for extensive interviews and iterative analysis",
        scores: { quantitative: 0, qualitative: 2, mixed: 1 }
      },
      {
        value: "phased",
        label: "Phased approach possible",
        description: "Can allocate different time blocks for different methods",
        scores: { quantitative: 1, qualitative: 1, mixed: 2 }
      }
    ]
  }
];

interface MethodologyResult {
  type: "quantitative" | "qualitative" | "mixed";
  title: string;
  description: string;
  icon: React.ReactNode;
  strengths: string[];
  considerations: string[];
  methods: string[];
  color: string;
}

const methodologyResults: Record<string, MethodologyResult> = {
  quantitative: {
    type: "quantitative",
    title: "Quantitative Methodology",
    description: "Your responses indicate that a quantitative approach would best suit your research goals. This methodology uses numerical data and statistical analysis to test hypotheses and identify patterns.",
    icon: <BarChart3 className="h-8 w-8" />,
    strengths: [
      "Produces generalizable, statistically significant findings",
      "Allows for hypothesis testing and causal inferences",
      "Efficient data collection from large samples",
      "Results are objective and replicable",
      "Well-suited for measuring relationships between variables"
    ],
    considerations: [
      "May miss nuanced, contextual understanding",
      "Requires careful instrument design and validation",
      "Statistical expertise needed for analysis",
      "Less flexibility once data collection begins"
    ],
    methods: [
      "Surveys and questionnaires",
      "Experiments and quasi-experiments",
      "Secondary data analysis",
      "Structured observations",
      "Statistical modeling"
    ],
    color: "bg-blue-500"
  },
  qualitative: {
    type: "qualitative",
    title: "Qualitative Methodology",
    description: "Your responses suggest a qualitative approach would be ideal for your research. This methodology explores meanings, experiences, and social phenomena through rich, detailed data.",
    icon: <MessageSquare className="h-8 w-8" />,
    strengths: [
      "Provides deep, contextual understanding",
      "Captures participant perspectives and meanings",
      "Flexible and emergent research design",
      "Ideal for exploring new or complex phenomena",
      "Rich, detailed findings with real-world context"
    ],
    considerations: [
      "Findings may not be generalizable",
      "Time-intensive data collection and analysis",
      "Researcher interpretation plays a significant role",
      "Requires reflexivity and transparency"
    ],
    methods: [
      "In-depth interviews",
      "Focus groups",
      "Ethnography and observation",
      "Case study research",
      "Thematic and content analysis"
    ],
    color: "bg-emerald-500"
  },
  mixed: {
    type: "mixed",
    title: "Mixed Methods Methodology",
    description: "Your responses indicate that a mixed methods approach would serve your research best. This methodology combines quantitative and qualitative data to provide comprehensive insights.",
    icon: <Combine className="h-8 w-8" />,
    strengths: [
      "Combines breadth and depth of understanding",
      "Triangulates findings for stronger validity",
      "Addresses complex research questions comprehensively",
      "Offsets weaknesses of single methods",
      "Provides both statistical and contextual insights"
    ],
    considerations: [
      "Requires expertise in both methodologies",
      "More time and resources needed",
      "Integration of findings can be challenging",
      "Clear rationale for mixing methods essential"
    ],
    methods: [
      "Explanatory sequential (QUAN → qual)",
      "Exploratory sequential (qual → QUAN)",
      "Convergent parallel design",
      "Embedded/nested designs",
      "Multiphase designs"
    ],
    color: "bg-purple-500"
  }
};

const MethodologySelectorPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  const calculateResult = (): MethodologyResult => {
    const scores = { quantitative: 0, qualitative: 0, mixed: 0 };
    
    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const question = questions.find(q => q.id === questionId);
      const option = question?.options.find(o => o.value === answerValue);
      if (option) {
        scores.quantitative += option.scores.quantitative;
        scores.qualitative += option.scores.qualitative;
        scores.mixed += option.scores.mixed;
      }
    });

    const maxScore = Math.max(scores.quantitative, scores.qualitative, scores.mixed);
    
    if (scores.mixed === maxScore) return methodologyResults.mixed;
    if (scores.quantitative === maxScore) return methodologyResults.quantitative;
    return methodologyResults.qualitative;
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const result = showResult ? calculateResult() : null;

  return (
    <Layout>
      <SEO
        title="Methodology Selector Quiz | Choose Quantitative, Qualitative or Mixed Methods"
        description="Take our free methodology selector quiz to determine whether quantitative, qualitative, or mixed methods research is best for your dissertation or thesis."
        canonical="/tools/methodology-selector"
        keywords={["methodology selector", "research methodology quiz", "quantitative vs qualitative", "mixed methods", "dissertation methodology", "thesis research design", "research methods tool"]}
      />
      
      <ToolSchema
        name="Methodology Selector Quiz"
        description="Interactive quiz that helps researchers choose between quantitative, qualitative, and mixed methods based on their research goals and question."
        url="https://dissertlypro.com/tools/methodology-selector"
        featureList={[
          "7 research-focused questions",
          "Personalized methodology recommendation",
          "Detailed strengths and considerations",
          "Suggested research methods",
          "Instant results"
        ]}
      />
      <SoftwareApplicationSchema
        name="Methodology Selector Quiz"
        description="Interactive quiz to choose between quantitative, qualitative, and mixed methods."
        url="/tools/methodology-selector"
      />

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              <FlaskConical className="h-3 w-3 mr-1" />
              Research Tool
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Methodology Selector Quiz
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answer 7 questions about your research to discover whether quantitative, qualitative, or mixed methods is the best fit for your dissertation.
            </p>
          </div>

          {!showResult ? (
            <Card className="border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">
                    Question {currentStep + 1} of {questions.length}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(progress)}% complete
                  </span>
                </div>
                <Progress value={progress} className="h-2 mb-4" />
                <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
                <CardDescription>{currentQuestion.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={answers[currentQuestion.id] || ""}
                  onValueChange={handleAnswer}
                  className="space-y-4"
                >
                  {currentQuestion.options.map((option) => (
                    <div key={option.value} className="relative">
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={option.value}
                        className="flex flex-col p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                      >
                        <span className="font-medium text-foreground">{option.label}</span>
                        <span className="text-sm text-muted-foreground mt-1">{option.description}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!answers[currentQuestion.id]}
                  >
                    {currentStep === questions.length - 1 ? "See Results" : "Next"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : result && (
            <div className="space-y-6">
              <Card className="border-primary/20 overflow-hidden">
                <div className={`${result.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                      {result.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{result.title}</h2>
                      <p className="text-white/90 mt-1">Recommended for your research</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {result.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        Key Strengths
                      </h3>
                      <ul className="space-y-2">
                        {result.strengths.map((strength, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold flex items-center gap-2 mb-3">
                        <Target className="h-5 w-5 text-amber-500" />
                        Considerations
                      </h3>
                      <ul className="space-y-2">
                        {result.considerations.map((consideration, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-amber-500 mt-1">•</span>
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Suggested Research Methods
                  </CardTitle>
                  <CardDescription>
                    Common methods used in {result.title.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {result.methods.map((method, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Ready to design your methodology?</p>
                        <p className="text-sm text-muted-foreground">Our experts can help you develop your research design</p>
                      </div>
                    </div>
                    <Button asChild>
                      <a href="/consultation">Book Free Consultation</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <Button variant="outline" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Take Quiz Again
                </Button>
              </div>
            </div>
          )}

          {/* Educational content */}
          <div className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold text-center">Understanding Research Methodologies</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500 rounded-lg text-white">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Quantitative</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Uses numerical data to test hypotheses, measure variables, and identify patterns. Best for research seeking generalizable, statistical findings.</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500 rounded-lg text-white">
                      <Users className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Qualitative</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Explores meanings, experiences, and social contexts through words and narratives. Ideal for understanding complex phenomena in depth.</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500 rounded-lg text-white">
                      <Combine className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Mixed Methods</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Combines quantitative and qualitative approaches for comprehensive understanding. Best when research questions have multiple dimensions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MethodologySelectorPage;
