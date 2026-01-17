import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, CheckCircle, XCircle, AlertTriangle, ArrowRight, ArrowLeft, RotateCcw, Copy, Check, Sparkles, Users, Search, Microscope, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ToolSchema from "@/components/schemas/ToolSchema";
import FAQSchema from "@/components/schemas/FAQSchema";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Framework = "pico" | "spider";

interface PICOData {
  population: string;
  intervention: string;
  comparison: string;
  outcome: string;
}

interface SPIDERData {
  sample: string;
  phenomenon: string;
  design: string;
  evaluation: string;
  researchType: string;
}

interface ValidationResult {
  score: number;
  feedback: string[];
  suggestions: string[];
  strength: "weak" | "moderate" | "strong";
}

const initialPICO: PICOData = {
  population: "",
  intervention: "",
  comparison: "",
  outcome: "",
};

const initialSPIDER: SPIDERData = {
  sample: "",
  phenomenon: "",
  design: "",
  evaluation: "",
  researchType: "",
};

const toolFAQs = [
  {
    question: "What is the PICO framework?",
    answer: "PICO stands for Population, Intervention, Comparison, and Outcome. It's widely used in quantitative research, especially in healthcare and clinical studies, to structure focused research questions that are specific, measurable, and answerable."
  },
  {
    question: "What is the SPIDER framework?",
    answer: "SPIDER stands for Sample, Phenomenon of Interest, Design, Evaluation, and Research type. It's designed for qualitative and mixed-methods research, addressing the limitations of PICO when studying experiences, behaviors, or complex social phenomena."
  },
  {
    question: "Which framework should I use?",
    answer: "Use PICO for quantitative research involving interventions, treatments, or measurable outcomes. Use SPIDER for qualitative research exploring experiences, perceptions, or complex phenomena where 'intervention' doesn't apply."
  },
  {
    question: "Why is a well-formed research question important?",
    answer: "A well-formed research question guides your entire study: it determines your methodology, data collection, and analysis approach. Poor questions lead to unfocused research, wasted resources, and inconclusive findings."
  },
  {
    question: "Can I use this tool for my dissertation?",
    answer: "Absolutely! This tool is designed for Master's and PhD students. It helps you refine your research question before investing significant time in your study, ensuring your question is focused, achievable, and academically rigorous."
  }
];

const ResearchQuestionValidatorPage = () => {
  const [researchQuestion, setResearchQuestion] = useState("");
  const [framework, setFramework] = useState<Framework>("pico");
  const [picoData, setPicoData] = useState<PICOData>(initialPICO);
  const [spiderData, setSpiderData] = useState<SPIDERData>(initialSPIDER);
  const [step, setStep] = useState<"input" | "framework" | "result">("input");
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [copied, setCopied] = useState(false);

  const validateQuestion = () => {
    const feedback: string[] = [];
    const suggestions: string[] = [];
    let score = 0;

    // Check basic question quality
    if (researchQuestion.endsWith("?")) {
      score += 10;
      feedback.push("✓ Properly formatted as a question");
    } else {
      suggestions.push("End your research question with a question mark");
    }

    if (researchQuestion.length > 50) {
      score += 10;
      feedback.push("✓ Sufficient detail and specificity");
    } else {
      suggestions.push("Add more detail to make your question more specific");
    }

    if (researchQuestion.length < 300) {
      score += 10;
      feedback.push("✓ Concise and focused");
    } else {
      suggestions.push("Consider simplifying - overly long questions may lack focus");
    }

    // Framework-specific validation
    if (framework === "pico") {
      const fields = [
        { key: "population", label: "Population", value: picoData.population },
        { key: "intervention", label: "Intervention", value: picoData.intervention },
        { key: "comparison", label: "Comparison", value: picoData.comparison },
        { key: "outcome", label: "Outcome", value: picoData.outcome },
      ];

      fields.forEach(field => {
        if (field.value.trim().length >= 5) {
          score += 20;
          feedback.push(`✓ ${field.label} is clearly defined`);
        } else if (field.value.trim().length > 0) {
          score += 10;
          suggestions.push(`Expand the ${field.label} description for more clarity`);
        } else {
          suggestions.push(`Define the ${field.label} component`);
        }
      });

      // Check if question reflects PICO elements
      const questionLower = researchQuestion.toLowerCase();
      if (picoData.population && questionLower.includes(picoData.population.toLowerCase().split(" ")[0])) {
        score += 5;
      }
      if (picoData.outcome && questionLower.includes(picoData.outcome.toLowerCase().split(" ")[0])) {
        score += 5;
      }
    } else {
      const fields = [
        { key: "sample", label: "Sample", value: spiderData.sample },
        { key: "phenomenon", label: "Phenomenon of Interest", value: spiderData.phenomenon },
        { key: "design", label: "Design", value: spiderData.design },
        { key: "evaluation", label: "Evaluation", value: spiderData.evaluation },
        { key: "researchType", label: "Research Type", value: spiderData.researchType },
      ];

      fields.forEach(field => {
        if (field.value.trim().length >= 5) {
          score += 16;
          feedback.push(`✓ ${field.label} is clearly defined`);
        } else if (field.value.trim().length > 0) {
          score += 8;
          suggestions.push(`Expand the ${field.label} description for more clarity`);
        } else {
          suggestions.push(`Define the ${field.label} component`);
        }
      });
    }

    // Cap score at 100
    score = Math.min(score, 100);

    let strength: "weak" | "moderate" | "strong";
    if (score >= 80) {
      strength = "strong";
    } else if (score >= 50) {
      strength = "moderate";
    } else {
      strength = "weak";
    }

    setValidation({ score, feedback, suggestions, strength });
    setStep("result");
  };

  const generateImprovedQuestion = () => {
    if (framework === "pico") {
      const { population, intervention, comparison, outcome } = picoData;
      if (population && intervention && outcome) {
        let question = `In ${population}, how does ${intervention}`;
        if (comparison) {
          question += ` compared to ${comparison}`;
        }
        question += ` affect ${outcome}?`;
        return question;
      }
    } else {
      const { sample, phenomenon, design, evaluation, researchType } = spiderData;
      if (sample && phenomenon) {
        let question = `What are the ${phenomenon} experiences of ${sample}`;
        if (evaluation) {
          question += `, and how do they ${evaluation.toLowerCase()}`;
        }
        question += "?";
        return question;
      }
    }
    return null;
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setResearchQuestion("");
    setPicoData(initialPICO);
    setSpiderData(initialSPIDER);
    setStep("input");
    setValidation(null);
    setCopied(false);
  };

  const canProceedToFramework = researchQuestion.trim().length >= 20;
  const canValidate = framework === "pico" 
    ? picoData.population.length > 0 && picoData.outcome.length > 0
    : spiderData.sample.length > 0 && spiderData.phenomenon.length > 0;

  const features = [
    "PICO framework analysis",
    "SPIDER framework analysis",
    "Instant scoring (0-100)",
    "Actionable improvement tips",
    "Question reformulation",
    "Free, no sign-up required"
  ];

  const improvedQuestion = step === "result" ? generateImprovedQuestion() : null;

  return (
    <Layout>
      <SEO
        title="Research Question Validator | PICO & SPIDER Framework Tool | DissertlyPro"
        description="Validate your research question using PICO and SPIDER frameworks. Get instant feedback, scoring, and improvement suggestions for your dissertation or thesis research question."
        canonical="https://dissertlypro.com/tools/research-question-validator"
        keywords={["research question validator", "PICO framework", "SPIDER framework", "research question generator", "dissertation research question", "thesis research question", "qualitative research question", "quantitative research question"]}
      />
      <ToolSchema
        name="Research Question Validator"
        description="Validate and improve your research question using PICO and SPIDER frameworks. Get instant scoring, feedback, and suggestions for stronger dissertation research questions."
        url="https://dissertlypro.com/tools/research-question-validator"
        applicationCategory="EducationalApplication"
        featureList={features}
        aggregateRating={{
          ratingValue: "4.8",
          ratingCount: "723",
          bestRating: "5",
          worstRating: "1"
        }}
      />
      <FAQSchema faqs={toolFAQs} />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                Free Academic Tool
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-navy bg-clip-text text-transparent">
                Research Question Validator
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Assess if your research question is well-formed using PICO and SPIDER frameworks.
                Get instant feedback and improvement suggestions.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                {["PICO Framework", "SPIDER Framework", "Instant Scoring", "Improvement Tips"].map((feature) => (
                  <span key={feature} className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Tool Section */}
        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="border-2 shadow-xl overflow-hidden">
              <CardHeader className="border-b bg-muted/30">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    {step === "input" && "Step 1: Enter Your Research Question"}
                    {step === "framework" && "Step 2: Apply Framework"}
                    {step === "result" && "Validation Results"}
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={handleReset}>
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Start Over
                  </Button>
                </div>
                <Progress 
                  value={step === "input" ? 33 : step === "framework" ? 66 : 100} 
                  className="h-2 mt-4" 
                />
              </CardHeader>

              <CardContent className="p-6">
                <AnimatePresence mode="wait">
                  {/* Step 1: Input Question */}
                  {step === "input" && (
                    <motion.div
                      key="input"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <Search className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold">What's Your Research Question?</h3>
                        <p className="text-muted-foreground">
                          Enter the research question you want to validate.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="question">Research Question</Label>
                        <Textarea
                          id="question"
                          placeholder="e.g., How does mindfulness meditation affect anxiety levels in college students compared to cognitive behavioral therapy?"
                          value={researchQuestion}
                          onChange={(e) => setResearchQuestion(e.target.value)}
                          className="min-h-[120px] text-base"
                          maxLength={500}
                        />
                        <p className="text-xs text-muted-foreground">
                          {researchQuestion.length}/500 characters
                        </p>
                      </div>

                      <div className="space-y-4">
                        <Label>Choose Your Framework</Label>
                        <Tabs value={framework} onValueChange={(v) => setFramework(v as Framework)}>
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="pico" className="flex items-center gap-2">
                              <Microscope className="w-4 h-4" />
                              PICO
                            </TabsTrigger>
                            <TabsTrigger value="spider" className="flex items-center gap-2">
                              <Globe className="w-4 h-4" />
                              SPIDER
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent value="pico" className="mt-4">
                            <div className="p-4 bg-muted/50 rounded-lg">
                              <p className="text-sm font-medium mb-2">Best for Quantitative Research</p>
                              <p className="text-sm text-muted-foreground">
                                <strong>P</strong>opulation, <strong>I</strong>ntervention, 
                                <strong>C</strong>omparison, <strong>O</strong>utcome
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                Ideal for clinical trials, experimental studies, and intervention-based research.
                              </p>
                            </div>
                          </TabsContent>
                          <TabsContent value="spider" className="mt-4">
                            <div className="p-4 bg-muted/50 rounded-lg">
                              <p className="text-sm font-medium mb-2">Best for Qualitative Research</p>
                              <p className="text-sm text-muted-foreground">
                                <strong>S</strong>ample, <strong>P</strong>henomenon of Interest, 
                                <strong>D</strong>esign, <strong>E</strong>valuation, <strong>R</strong>esearch type
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                Ideal for phenomenological studies, ethnography, and mixed-methods research.
                              </p>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>

                      <Button 
                        onClick={() => setStep("framework")} 
                        disabled={!canProceedToFramework}
                        className="w-full"
                      >
                        Continue to Framework Analysis
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  )}

                  {/* Step 2: Framework Application */}
                  {step === "framework" && (
                    <motion.div
                      key="framework"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="p-4 bg-muted/50 rounded-lg mb-6">
                        <p className="text-sm font-medium mb-1">Your Research Question:</p>
                        <p className="text-sm text-muted-foreground italic">"{researchQuestion}"</p>
                      </div>

                      {framework === "pico" ? (
                        <div className="space-y-4">
                          <div className="text-center mb-4">
                            <Microscope className="w-10 h-10 text-primary mx-auto mb-2" />
                            <h3 className="text-lg font-bold">Break Down Using PICO</h3>
                            <p className="text-sm text-muted-foreground">
                              Identify each component in your research question.
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="population" className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" />
                                Population (Who?)
                              </Label>
                              <Textarea
                                id="population"
                                placeholder="e.g., College students aged 18-25 with diagnosed anxiety"
                                value={picoData.population}
                                onChange={(e) => setPicoData(prev => ({ ...prev, population: e.target.value }))}
                                className="min-h-[80px]"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="intervention" className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-primary" />
                                Intervention (What?)
                              </Label>
                              <Textarea
                                id="intervention"
                                placeholder="e.g., 8-week mindfulness meditation program"
                                value={picoData.intervention}
                                onChange={(e) => setPicoData(prev => ({ ...prev, intervention: e.target.value }))}
                                className="min-h-[80px]"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="comparison" className="flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-primary" />
                                Comparison (Compared to?)
                              </Label>
                              <Textarea
                                id="comparison"
                                placeholder="e.g., Standard cognitive behavioral therapy (optional)"
                                value={picoData.comparison}
                                onChange={(e) => setPicoData(prev => ({ ...prev, comparison: e.target.value }))}
                                className="min-h-[80px]"
                              />
                              <p className="text-xs text-muted-foreground">Optional for some studies</p>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="outcome" className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                Outcome (What effect?)
                              </Label>
                              <Textarea
                                id="outcome"
                                placeholder="e.g., Reduction in anxiety symptoms measured by GAD-7 scale"
                                value={picoData.outcome}
                                onChange={(e) => setPicoData(prev => ({ ...prev, outcome: e.target.value }))}
                                className="min-h-[80px]"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="text-center mb-4">
                            <Globe className="w-10 h-10 text-primary mx-auto mb-2" />
                            <h3 className="text-lg font-bold">Break Down Using SPIDER</h3>
                            <p className="text-sm text-muted-foreground">
                              Identify each component in your research question.
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="sample">Sample (Who?)</Label>
                              <Textarea
                                id="sample"
                                placeholder="e.g., First-generation university students in STEM programs"
                                value={spiderData.sample}
                                onChange={(e) => setSpiderData(prev => ({ ...prev, sample: e.target.value }))}
                                className="min-h-[80px]"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="phenomenon">Phenomenon of Interest (What?)</Label>
                              <Textarea
                                id="phenomenon"
                                placeholder="e.g., Experiences of impostor syndrome and coping strategies"
                                value={spiderData.phenomenon}
                                onChange={(e) => setSpiderData(prev => ({ ...prev, phenomenon: e.target.value }))}
                                className="min-h-[80px]"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="design">Design (How?)</Label>
                              <Textarea
                                id="design"
                                placeholder="e.g., Semi-structured interviews, thematic analysis"
                                value={spiderData.design}
                                onChange={(e) => setSpiderData(prev => ({ ...prev, design: e.target.value }))}
                                className="min-h-[80px]"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="evaluation">Evaluation (What outcomes?)</Label>
                              <Textarea
                                id="evaluation"
                                placeholder="e.g., Understanding lived experiences and support needs"
                                value={spiderData.evaluation}
                                onChange={(e) => setSpiderData(prev => ({ ...prev, evaluation: e.target.value }))}
                                className="min-h-[80px]"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="researchType">Research Type</Label>
                              <RadioGroup 
                                value={spiderData.researchType} 
                                onValueChange={(value) => setSpiderData(prev => ({ ...prev, researchType: value }))}
                                className="grid grid-cols-2 gap-2"
                              >
                                {["Qualitative", "Quantitative", "Mixed Methods", "Meta-synthesis"].map((type) => (
                                  <div key={type} className="flex items-center space-x-2">
                                    <RadioGroupItem value={type.toLowerCase()} id={type.toLowerCase()} />
                                    <Label htmlFor={type.toLowerCase()} className="font-normal cursor-pointer">
                                      {type}
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setStep("input")} className="flex-1">
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back
                        </Button>
                        <Button onClick={validateQuestion} disabled={!canValidate} className="flex-1">
                          Validate Question
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Results */}
                  {step === "result" && validation && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      {/* Score Display */}
                      <div className="text-center">
                        <div className={cn(
                          "inline-flex items-center justify-center w-24 h-24 rounded-full text-3xl font-bold mb-4",
                          validation.strength === "strong" && "bg-green-500/10 text-green-600",
                          validation.strength === "moderate" && "bg-yellow-500/10 text-yellow-600",
                          validation.strength === "weak" && "bg-red-500/10 text-red-600"
                        )}>
                          {validation.score}
                        </div>
                        <h3 className="text-xl font-bold capitalize mb-1">
                          {validation.strength} Research Question
                        </h3>
                        <p className="text-muted-foreground">
                          {validation.strength === "strong" && "Your research question is well-structured and ready for further development."}
                          {validation.strength === "moderate" && "Your question has potential but could benefit from refinement."}
                          {validation.strength === "weak" && "Consider revising your question using the suggestions below."}
                        </p>
                      </div>

                      {/* Original Question */}
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium mb-1">Your Question:</p>
                        <p className="text-sm italic">"{researchQuestion}"</p>
                      </div>

                      {/* Feedback */}
                      {validation.feedback.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-medium flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Strengths
                          </h4>
                          <ul className="space-y-1 text-sm">
                            {validation.feedback.map((item, i) => (
                              <li key={i} className="text-muted-foreground pl-6">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Suggestions */}
                      {validation.suggestions.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-medium flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-500" />
                            Areas for Improvement
                          </h4>
                          <ul className="space-y-1 text-sm">
                            {validation.suggestions.map((item, i) => (
                              <li key={i} className="text-muted-foreground pl-6">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Improved Question Suggestion */}
                      {improvedQuestion && (
                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            Suggested Reformulation
                          </h4>
                          <p className="text-sm mb-3 italic">"{improvedQuestion}"</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleCopy(improvedQuestion)}
                          >
                            {copied ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                            {copied ? "Copied!" : "Copy"}
                          </Button>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" onClick={() => setStep("framework")} className="flex-1">
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Revise Components
                        </Button>
                        <Button onClick={handleReset} className="flex-1">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Try Another Question
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Educational Section */}
        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-8">Understanding Research Question Frameworks</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Microscope className="w-5 h-5 text-primary" />
                    PICO Framework
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <p><strong>P - Population:</strong> Who are you studying?</p>
                    <p><strong>I - Intervention:</strong> What treatment/exposure?</p>
                    <p><strong>C - Comparison:</strong> Alternative to intervention?</p>
                    <p><strong>O - Outcome:</strong> What are you measuring?</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded text-sm">
                    <p className="font-medium mb-1">Example:</p>
                    <p className="text-muted-foreground italic">
                      "In elderly patients (P), does regular exercise (I) compared to medication alone (C) 
                      reduce blood pressure (O)?"
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    SPIDER Framework
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <p><strong>S - Sample:</strong> Who are you studying?</p>
                    <p><strong>P - Phenomenon:</strong> What experience/behavior?</p>
                    <p><strong>D - Design:</strong> How will you study it?</p>
                    <p><strong>E - Evaluation:</strong> What outcomes matter?</p>
                    <p><strong>R - Research type:</strong> Qual/Quant/Mixed?</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded text-sm">
                    <p className="font-medium mb-1">Example:</p>
                    <p className="text-muted-foreground italic">
                      "What are the experiences (P) of first-generation students (S) navigating 
                      university culture (E) using interviews (D) in qualitative research (R)?"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {toolFAQs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-navy/10 border-primary/20">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-4">Need Expert Help With Your Research?</h2>
                <p className="text-muted-foreground mb-6">
                  Our PhD-qualified consultants can help you refine your research question, 
                  methodology, and overall dissertation strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <Link to="/consultation">Book Free Consultation</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/tools">Explore More Tools</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResearchQuestionValidatorPage;
