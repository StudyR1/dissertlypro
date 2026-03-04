import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, ArrowRight, ArrowLeft, CheckCircle, Copy, Check, RotateCcw, Sparkles, Target, MessageSquare, Scale, Zap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ToolSchema from "@/components/schemas/ToolSchema";
import SoftwareApplicationSchema from "@/components/schemas/SoftwareApplicationSchema";
import FAQSchema from "@/components/schemas/FAQSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface WizardData {
  topic: string;
  researchType: "argumentative" | "analytical" | "expository" | "compare";
  claim: string;
  reason1: string;
  reason2: string;
  reason3: string;
  significance: string;
}

const initialData: WizardData = {
  topic: "",
  researchType: "argumentative",
  claim: "",
  reason1: "",
  reason2: "",
  reason3: "",
  significance: "",
};

const researchTypes = [
  {
    id: "argumentative" as const,
    label: "Argumentative",
    description: "Takes a clear position and argues for it",
    example: "Social media has a negative impact on mental health...",
  },
  {
    id: "analytical" as const,
    label: "Analytical",
    description: "Breaks down a topic to examine its parts",
    example: "An analysis of Shakespeare's use of imagery reveals...",
  },
  {
    id: "expository" as const,
    label: "Expository",
    description: "Explains a topic or process",
    example: "The process of photosynthesis involves...",
  },
  {
    id: "compare" as const,
    label: "Compare & Contrast",
    description: "Examines similarities and differences",
    example: "While both X and Y share similarities, they differ in...",
  },
];

const toolFAQs = [
  {
    question: "What is a thesis statement?",
    answer: "A thesis statement is a concise sentence (usually 1-2 sentences) that summarizes the main argument or claim of your paper. It appears in your introduction and guides the entire structure of your dissertation or essay."
  },
  {
    question: "How does the thesis statement builder work?",
    answer: "Our wizard guides you through 5 simple steps: defining your topic, choosing your thesis type, crafting your main claim, adding supporting reasons, and explaining significance. The tool then combines these elements into a well-structured thesis statement."
  },
  {
    question: "What makes a strong thesis statement?",
    answer: "A strong thesis statement is specific (not vague), arguable (can be debated), focused (addresses one main idea), and provides a roadmap for your paper. It should answer the 'so what?' question for your reader."
  },
  {
    question: "Can I use this for my dissertation?",
    answer: "Yes! This tool is designed for Master's and PhD students. Dissertation thesis statements often need to be more complex and nuanced than essay theses, which is why we include the significance step to strengthen your argument."
  },
  {
    question: "How many supporting reasons should I include?",
    answer: "For most academic papers, 2-3 supporting reasons work well. This provides enough depth without making your thesis unwieldy. You can adjust the number based on your paper's length and complexity."
  }
];

const steps = [
  { id: 1, title: "Topic", description: "What are you writing about?" },
  { id: 2, title: "Type", description: "What kind of thesis?" },
  { id: 3, title: "Claim", description: "What's your main argument?" },
  { id: 4, title: "Reasons", description: "Why should readers believe you?" },
  { id: 5, title: "Significance", description: "Why does this matter?" },
];

const ThesisBuilderPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<WizardData>(initialData);
  const [generatedThesis, setGeneratedThesis] = useState("");
  const [copied, setCopied] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const updateData = (field: keyof WizardData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return data.topic.trim().length >= 3;
      case 2:
        return !!data.researchType;
      case 3:
        return data.claim.trim().length >= 10;
      case 4:
        return data.reason1.trim().length >= 5;
      case 5:
        return data.significance.trim().length >= 5;
      default:
        return false;
    }
  };

  const generateThesis = () => {
    const reasons = [data.reason1, data.reason2, data.reason3].filter(r => r.trim());
    
    let thesis = "";
    
    switch (data.researchType) {
      case "argumentative":
        if (reasons.length === 1) {
          thesis = `${data.claim} because ${reasons[0]}.`;
        } else if (reasons.length === 2) {
          thesis = `${data.claim} because ${reasons[0]} and ${reasons[1]}.`;
        } else {
          thesis = `${data.claim} because ${reasons[0]}, ${reasons[1]}, and ${reasons[2]}.`;
        }
        if (data.significance) {
          thesis += ` ${data.significance}`;
        }
        break;
        
      case "analytical":
        thesis = `An analysis of ${data.topic} reveals that ${data.claim.toLowerCase()}`;
        if (reasons.length > 0) {
          thesis += `, as evidenced by ${reasons.join(", and ")}.`;
        } else {
          thesis += ".";
        }
        if (data.significance) {
          thesis += ` ${data.significance}`;
        }
        break;
        
      case "expository":
        thesis = `${data.topic} ${data.claim.toLowerCase()}`;
        if (reasons.length > 0) {
          thesis += ` through ${reasons.join(", ")}.`;
        } else {
          thesis += ".";
        }
        if (data.significance) {
          thesis += ` ${data.significance}`;
        }
        break;
        
      case "compare":
        thesis = `While ${data.topic} may appear similar, ${data.claim.toLowerCase()}`;
        if (reasons.length > 0) {
          thesis += `, particularly in terms of ${reasons.join(", ")}.`;
        } else {
          thesis += ".";
        }
        if (data.significance) {
          thesis += ` ${data.significance}`;
        }
        break;
    }
    
    setGeneratedThesis(thesis);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    } else {
      generateThesis();
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setData(initialData);
    setCurrentStep(1);
    setGeneratedThesis("");
    setShowResult(false);
    setCopied(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedThesis);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const progress = showResult ? 100 : (currentStep / 5) * 100;

  const features = [
    "5-step guided wizard",
    "4 thesis types supported",
    "Instant thesis generation",
    "One-click copy to clipboard",
    "Perfect for dissertations",
    "Free, no sign-up required"
  ];

  return (
    <Layout>
      <SEO
        title="Free Thesis Statement Builder | Dissertation Thesis Generator | DissertlyPro"
        description="Build a strong thesis statement with our free step-by-step wizard. Perfect for dissertations, theses, and research papers. Supports argumentative, analytical, and expository thesis types."
        canonical="https://dissertlypro.com/tools/thesis-builder"
        keywords={["thesis statement builder", "thesis generator", "dissertation thesis", "thesis statement maker", "how to write thesis statement", "academic thesis builder", "research paper thesis", "argumentative thesis"]}
      />
      <ToolSchema
        name="Thesis Statement Builder"
        description="Build a strong thesis statement with a step-by-step wizard. Guides you through topic, claim, reasons, and significance to generate a well-structured thesis for your dissertation or research paper."
        url="https://dissertlypro.com/tools/thesis-builder"
        applicationCategory="EducationalApplication"
        featureList={features}
        aggregateRating={{
          ratingValue: "4.9",
          ratingCount: "956",
          bestRating: "5",
          worstRating: "1"
        }}
      />
      <SoftwareApplicationSchema
        name="Thesis Statement Builder"
        description="Build a strong thesis statement with a step-by-step wizard."
        url="/tools/thesis-builder"
        featureList={features}
        aggregateRating={{ ratingValue: "4.9", ratingCount: "956" }}
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
                <Lightbulb className="w-4 h-4" />
                Free Academic Tool
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-navy bg-clip-text text-transparent">
                Thesis Statement Builder
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Craft a compelling thesis statement in 5 simple steps. 
                Our wizard guides you through building a strong foundation for your dissertation.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                {["Argumentative", "Analytical", "Expository", "Compare & Contrast"].map((type) => (
                  <span key={type} className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    {type}
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
              {/* Progress Header */}
              <CardHeader className="border-b bg-muted/30">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      {showResult ? "Your Thesis Statement" : `Step ${currentStep} of 5`}
                    </CardTitle>
                    <Button variant="ghost" size="sm" onClick={handleReset}>
                      <RotateCcw className="w-4 h-4 mr-1" />
                      Start Over
                    </Button>
                  </div>
                  <Progress value={progress} className="h-2" />
                  {!showResult && (
                    <div className="flex justify-between">
                      {steps.map((step) => (
                        <div
                          key={step.id}
                          className={cn(
                            "flex flex-col items-center text-xs",
                            step.id <= currentStep ? "text-primary" : "text-muted-foreground"
                          )}
                        >
                          <div
                            className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mb-1",
                              step.id < currentStep
                                ? "bg-primary text-primary-foreground"
                                : step.id === currentStep
                                ? "bg-primary/20 text-primary border-2 border-primary"
                                : "bg-muted text-muted-foreground"
                            )}
                          >
                            {step.id < currentStep ? <CheckCircle className="w-3 h-3" /> : step.id}
                          </div>
                          <span className="hidden sm:block">{step.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <AnimatePresence mode="wait">
                  {showResult ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4">
                          <Sparkles className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold">Your Thesis Statement</h3>
                        <p className="text-muted-foreground">Here's your generated thesis. Feel free to refine it further.</p>
                      </div>

                      <div className="p-6 bg-muted/50 rounded-lg border-2 border-dashed">
                        <p className="text-lg leading-relaxed">{generatedThesis}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button onClick={handleCopy} className="flex-1">
                          {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                          {copied ? "Copied!" : "Copy to Clipboard"}
                        </Button>
                        <Button variant="outline" onClick={handleBack} className="flex-1">
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Edit Answers
                        </Button>
                      </div>

                      <div className="p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-primary" />
                          Pro Tips for Refining Your Thesis
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Make sure it's specific enough to be provable within your paper's scope</li>
                          <li>• Ensure each reason maps to a main section of your paper</li>
                          <li>• Consider if someone could reasonably disagree with your claim</li>
                          <li>• Refine the wording to match your academic voice</li>
                        </ul>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`step-${currentStep}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Step 1: Topic */}
                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <div className="text-center mb-6">
                            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold">What's Your Topic?</h3>
                            <p className="text-muted-foreground">Describe the subject of your research in a few words.</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="topic">Research Topic</Label>
                            <Input
                              id="topic"
                              placeholder="e.g., The impact of social media on adolescent mental health"
                              value={data.topic}
                              onChange={(e) => updateData("topic", e.target.value)}
                              className="text-lg py-6"
                              maxLength={200}
                            />
                            <p className="text-xs text-muted-foreground">
                              Be specific but concise. {data.topic.length}/200 characters
                            </p>
                          </div>
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <p className="text-sm text-muted-foreground">
                              <strong>Good examples:</strong> "Remote work productivity," "Climate change policy effectiveness," 
                              "AI ethics in healthcare"
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Research Type */}
                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <div className="text-center mb-6">
                            <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold">What Type of Thesis?</h3>
                            <p className="text-muted-foreground">Choose the approach that best fits your research.</p>
                          </div>
                          <RadioGroup
                            value={data.researchType}
                            onValueChange={(value) => updateData("researchType", value)}
                            className="space-y-3"
                          >
                            {researchTypes.map((type) => (
                              <label
                                key={type.id}
                                className={cn(
                                  "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all",
                                  data.researchType === type.id
                                    ? "border-primary bg-primary/5"
                                    : "border-muted hover:border-primary/50"
                                )}
                              >
                                <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                                <div className="flex-1">
                                  <div className="font-medium">{type.label}</div>
                                  <div className="text-sm text-muted-foreground">{type.description}</div>
                                  <div className="text-xs text-primary mt-1 italic">"{type.example}"</div>
                                </div>
                              </label>
                            ))}
                          </RadioGroup>
                        </div>
                      )}

                      {/* Step 3: Main Claim */}
                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <div className="text-center mb-6">
                            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold">What's Your Main Claim?</h3>
                            <p className="text-muted-foreground">State your central argument or finding.</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="claim">Your Main Argument</Label>
                            <Textarea
                              id="claim"
                              placeholder={
                                data.researchType === "argumentative"
                                  ? "e.g., Social media use has a significant negative impact on adolescent mental health"
                                  : data.researchType === "analytical"
                                  ? "e.g., three distinct patterns emerge that explain user behavior"
                                  : data.researchType === "expository"
                                  ? "e.g., can be understood through a five-stage process"
                                  : "e.g., the key differences outweigh their superficial similarities"
                              }
                              value={data.claim}
                              onChange={(e) => updateData("claim", e.target.value)}
                              className="min-h-[100px]"
                              maxLength={500}
                            />
                            <p className="text-xs text-muted-foreground">
                              This should be debatable or provable. {data.claim.length}/500 characters
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Supporting Reasons */}
                      {currentStep === 4 && (
                        <div className="space-y-4">
                          <div className="text-center mb-6">
                            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold">What Are Your Reasons?</h3>
                            <p className="text-muted-foreground">List 1-3 key points that support your claim.</p>
                          </div>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="reason1">Reason 1 (Required)</Label>
                              <Input
                                id="reason1"
                                placeholder="e.g., it increases anxiety and depression rates"
                                value={data.reason1}
                                onChange={(e) => updateData("reason1", e.target.value)}
                                maxLength={150}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="reason2">Reason 2 (Optional)</Label>
                              <Input
                                id="reason2"
                                placeholder="e.g., it disrupts sleep patterns"
                                value={data.reason2}
                                onChange={(e) => updateData("reason2", e.target.value)}
                                maxLength={150}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="reason3">Reason 3 (Optional)</Label>
                              <Input
                                id="reason3"
                                placeholder="e.g., it creates unrealistic social comparisons"
                                value={data.reason3}
                                onChange={(e) => updateData("reason3", e.target.value)}
                                maxLength={150}
                              />
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Each reason should map to a main section of your paper.
                          </p>
                        </div>
                      )}

                      {/* Step 5: Significance */}
                      {currentStep === 5 && (
                        <div className="space-y-4">
                          <div className="text-center mb-6">
                            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold">Why Does This Matter?</h3>
                            <p className="text-muted-foreground">Explain the broader significance of your research.</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="significance">Significance Statement</Label>
                            <Textarea
                              id="significance"
                              placeholder="e.g., Understanding this relationship is crucial for developing effective digital wellness policies in schools."
                              value={data.significance}
                              onChange={(e) => updateData("significance", e.target.value)}
                              className="min-h-[100px]"
                              maxLength={300}
                            />
                            <p className="text-xs text-muted-foreground">
                              Answer the "so what?" question. {data.significance.length}/300 characters
                            </p>
                          </div>
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <p className="text-sm text-muted-foreground">
                              <strong>Think about:</strong> What will readers learn? How does this contribute to the field? 
                              What are the practical implications?
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex gap-3 pt-4">
                        {currentStep > 1 && (
                          <Button variant="outline" onClick={handleBack} className="flex-1">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                          </Button>
                        )}
                        <Button
                          onClick={handleNext}
                          disabled={!canProceed()}
                          className="flex-1"
                        >
                          {currentStep === 5 ? "Generate Thesis" : "Continue"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Use Our Thesis Builder?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Step-by-Step Guidance",
                  description: "Our wizard breaks down the thesis-writing process into manageable steps."
                },
                {
                  title: "Multiple Thesis Types",
                  description: "Support for argumentative, analytical, expository, and compare/contrast theses."
                },
                {
                  title: "Instant Generation",
                  description: "Get a well-structured thesis statement in seconds, ready to refine."
                },
                {
                  title: "Dissertation-Ready",
                  description: "Designed specifically for Master's and PhD level academic writing."
                },
                {
                  title: "Built-in Tips",
                  description: "Pro tips and examples at each step to guide your thinking."
                },
                {
                  title: "Always Free",
                  description: "No sign-up, no limits. Use the builder as many times as you need."
                }
              ].map((feature, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {toolFAQs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Developing Your Thesis?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our expert consultants can help refine your thesis statement and develop your entire research proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/consultation">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/tools">View All Tools</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ThesisBuilderPage;
