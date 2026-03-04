import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ToolSchema from "@/components/schemas/ToolSchema";
import SoftwareApplicationSchema from "@/components/schemas/SoftwareApplicationSchema";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Target, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  FileText,
  BarChart3,
  Users,
  Brain,
  Edit3,
  Search,
  Calendar,
  Award,
  Lightbulb,
  RefreshCw
} from "lucide-react";

interface QuizOption {
  id: string;
  label: string;
  description?: string;
  icon?: React.ElementType;
}

interface QuizQuestion {
  id: string;
  question: string;
  subtitle?: string;
  options: QuizOption[];
  multiSelect?: boolean;
}

interface Recommendation {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  priority: "essential" | "recommended" | "helpful";
  type: "resource" | "service" | "tool";
}

const questions: QuizQuestion[] = [
  {
    id: "degree",
    question: "What degree are you pursuing?",
    subtitle: "This helps us tailor recommendations to your specific requirements",
    options: [
      { id: "masters", label: "Master's Degree", description: "MA, MS, MBA, MEd, etc.", icon: GraduationCap },
      { id: "phd", label: "Doctoral Degree", description: "PhD, EdD, DBA, etc.", icon: Award },
      { id: "unsure", label: "Not sure yet", description: "Exploring options", icon: Lightbulb },
    ]
  },
  {
    id: "stage",
    question: "What stage are you at?",
    subtitle: "Different stages require different types of support",
    options: [
      { id: "starting", label: "Just Starting", description: "Topic selection, proposal phase", icon: Lightbulb },
      { id: "literature", label: "Literature Review", description: "Reading and synthesizing sources", icon: Search },
      { id: "methodology", label: "Methodology", description: "Designing research approach", icon: Brain },
      { id: "data", label: "Data Collection/Analysis", description: "Gathering and analyzing data", icon: BarChart3 },
      { id: "writing", label: "Writing Chapters", description: "Drafting dissertation/thesis", icon: Edit3 },
      { id: "revision", label: "Revision & Defense", description: "Final edits, preparing for viva", icon: CheckCircle2 },
    ]
  },
  {
    id: "challenges",
    question: "What are your biggest challenges?",
    subtitle: "Select all that apply",
    multiSelect: true,
    options: [
      { id: "time", label: "Time Management", description: "Balancing work, life, and research", icon: Clock },
      { id: "writing", label: "Academic Writing", description: "Clarity, structure, style", icon: Edit3 },
      { id: "methodology", label: "Research Methods", description: "Choosing and applying methods", icon: Brain },
      { id: "data", label: "Data Analysis", description: "Statistical or qualitative analysis", icon: BarChart3 },
      { id: "motivation", label: "Motivation & Focus", description: "Staying on track", icon: Target },
      { id: "supervisor", label: "Supervisor Issues", description: "Communication, feedback, conflicts", icon: Users },
    ]
  },
  {
    id: "timeline",
    question: "What's your timeline pressure?",
    subtitle: "How urgent is your deadline?",
    options: [
      { id: "relaxed", label: "Comfortable", description: "6+ months to deadline", icon: Calendar },
      { id: "moderate", label: "Moderate", description: "3-6 months to deadline", icon: Clock },
      { id: "urgent", label: "Tight", description: "1-3 months to deadline", icon: Target },
      { id: "critical", label: "Critical", description: "Less than 1 month", icon: Sparkles },
    ]
  },
  {
    id: "support",
    question: "What type of support interests you most?",
    subtitle: "This helps us prioritize recommendations",
    options: [
      { id: "guidance", label: "Self-Guided Resources", description: "Free guides and tutorials", icon: BookOpen },
      { id: "tools", label: "Interactive Tools", description: "Calculators, planners, generators", icon: Target },
      { id: "coaching", label: "Expert Coaching", description: "1-on-1 professional support", icon: Users },
      { id: "writing", label: "Writing Assistance", description: "Editing and feedback services", icon: FileText },
    ]
  }
];

const generateRecommendations = (answers: Record<string, string | string[]>): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  const degree = answers.degree as string;
  const stage = answers.stage as string;
  const challenges = answers.challenges as string[] || [];
  const timeline = answers.timeline as string;
  const support = answers.support as string;

  // Degree-specific recommendations
  if (degree === "masters") {
    recommendations.push({
      title: "Master's Thesis Survival Guide",
      description: "Complete A-Z roadmap specifically for master's students",
      href: "/masters-thesis-guide",
      icon: GraduationCap,
      priority: "essential",
      type: "resource"
    });
    if (stage === "starting") {
      recommendations.push({
        title: "Thesis Topic Selection",
        description: "Strategic guidance for choosing a career-boosting topic",
        href: "/thesis-topic-selection",
        icon: Lightbulb,
        priority: "essential",
        type: "resource"
      });
    }
  } else if (degree === "phd") {
    recommendations.push({
      title: "PhD Resources Hub",
      description: "20+ guides specifically for doctoral students",
      href: "/phd-resources",
      icon: Award,
      priority: "essential",
      type: "resource"
    });
    if (stage === "starting") {
      recommendations.push({
        title: "Candidacy Exam Strategies",
        description: "Prepare for comprehensive exams with confidence",
        href: "/candidacy-exams",
        icon: Award,
        priority: "recommended",
        type: "resource"
      });
    }
  }

  // Stage-specific recommendations
  if (stage === "literature") {
    recommendations.push({
      title: "Systematic Literature Review Guide",
      description: "PRISMA methodology for rigorous lit reviews",
      href: "/systematic-literature-review",
      icon: Search,
      priority: "essential",
      type: "resource"
    });
    recommendations.push({
      title: "Literature Review Guide",
      description: "Search, synthesize, and analyze sources effectively",
      href: "/literature-review-guide",
      icon: BookOpen,
      priority: "recommended",
      type: "resource"
    });
  }

  if (stage === "methodology") {
    recommendations.push({
      title: "Research Methodology Guide",
      description: "Qualitative, quantitative, and mixed methods explained",
      href: "/research-methodology",
      icon: Brain,
      priority: "essential",
      type: "resource"
    });
    recommendations.push({
      title: "Mixed Methods Research",
      description: "Combining qualitative and quantitative approaches",
      href: "/mixed-methods-research",
      icon: Brain,
      priority: "recommended",
      type: "resource"
    });
    recommendations.push({
      title: "IRB/Ethics Application Guide",
      description: "Step-by-step ethics approval guidance",
      href: "/irb-ethics-guide",
      icon: FileText,
      priority: "recommended",
      type: "resource"
    });
  }

  if (stage === "data") {
    recommendations.push({
      title: "SPSS Tutorial",
      description: "Complete guide to quantitative data analysis",
      href: "/spss-tutorial",
      icon: BarChart3,
      priority: "essential",
      type: "resource"
    });
    recommendations.push({
      title: "NVivo Tutorial",
      description: "Qualitative data analysis software guide",
      href: "/nvivo-tutorial",
      icon: Brain,
      priority: "recommended",
      type: "resource"
    });
    recommendations.push({
      title: "Data Visualization Best Practices",
      description: "Create effective charts, figures, and tables",
      href: "/data-visualization",
      icon: BarChart3,
      priority: "helpful",
      type: "resource"
    });
  }

  if (stage === "writing") {
    recommendations.push({
      title: degree === "phd" ? "Dissertation Writing Guide" : "Thesis Structure Guide",
      description: "Chapter-by-chapter writing strategies",
      href: degree === "phd" ? "/dissertation-writing" : "/thesis-structure",
      icon: Edit3,
      priority: "essential",
      type: "resource"
    });
    recommendations.push({
      title: "Citation Mastery",
      description: "APA, MLA, Chicago, Harvard formats explained",
      href: "/citation-mastery",
      icon: FileText,
      priority: "recommended",
      type: "resource"
    });
    recommendations.push({
      title: "Citation Generator",
      description: "Create perfectly formatted citations instantly",
      href: "/tools/citation-generator",
      icon: FileText,
      priority: "helpful",
      type: "tool"
    });
  }

  if (stage === "revision") {
    recommendations.push({
      title: degree === "phd" ? "Viva Preparation" : "Master's Defense Prep",
      description: "Ace your oral examination with confidence",
      href: degree === "phd" ? "/viva-preparation" : "/masters-defense",
      icon: CheckCircle2,
      priority: "essential",
      type: "resource"
    });
    recommendations.push({
      title: "Editing & Proofreading Service",
      description: "Professional polish for your final submission",
      href: "/services/editing",
      icon: Edit3,
      priority: "recommended",
      type: "service"
    });
  }

  // Challenge-specific recommendations
  if (challenges.includes("time")) {
    recommendations.push({
      title: "Chapter Timeline Planner",
      description: "Create a realistic Gantt-style schedule",
      href: "/tools/chapter-planner",
      icon: Calendar,
      priority: "essential",
      type: "tool"
    });
    recommendations.push({
      title: "Deadline Checker",
      description: "Assess your timeline risk level",
      href: "/tools/deadline-checker",
      icon: Clock,
      priority: "recommended",
      type: "tool"
    });
    if (degree === "masters") {
      recommendations.push({
        title: "Accelerated Master's Guide",
        description: "Complete your thesis in 12-18 months",
        href: "/accelerated-masters",
        icon: Clock,
        priority: "helpful",
        type: "resource"
      });
    }
  }

  if (challenges.includes("writing")) {
    recommendations.push({
      title: "Academic Writing Guide",
      description: "Master thesis-level writing skills",
      href: "/academic-writing",
      icon: Edit3,
      priority: "essential",
      type: "resource"
    });
    recommendations.push({
      title: "Thesis Statement Builder",
      description: "Craft compelling thesis statements",
      href: "/tools/thesis-builder",
      icon: FileText,
      priority: "recommended",
      type: "tool"
    });
  }

  if (challenges.includes("supervisor")) {
    recommendations.push({
      title: "Supervisor Relationship Guide",
      description: "Navigate advisor relationships effectively",
      href: "/supervisor-guide",
      icon: Users,
      priority: "essential",
      type: "resource"
    });
    recommendations.push({
      title: "Committee Communication",
      description: "Email templates and protocols",
      href: "/committee-communication",
      icon: Users,
      priority: "recommended",
      type: "resource"
    });
    if (degree === "masters") {
      recommendations.push({
        title: "Limited Supervision Strategies",
        description: "Thrive with an absent advisor",
        href: "/limited-supervision",
        icon: Users,
        priority: "helpful",
        type: "resource"
      });
    }
  }

  if (challenges.includes("motivation")) {
    recommendations.push({
      title: "PhD Mental Health Hub",
      description: "Wellness resources for researchers",
      href: "/phd-mental-health",
      icon: Target,
      priority: "essential",
      type: "resource"
    });
  }

  if (challenges.includes("methodology")) {
    recommendations.push({
      title: "Research Question Validator",
      description: "Check if your RQ is well-formed using PICO/SPIDER",
      href: "/tools/research-question-validator",
      icon: Target,
      priority: "recommended",
      type: "tool"
    });
  }

  // Timeline-based urgency
  if (timeline === "critical" || timeline === "urgent") {
    recommendations.push({
      title: "Get a Free Consultation",
      description: "Speak with an expert about fast-track options",
      href: "/consultation",
      icon: Users,
      priority: "essential",
      type: "service"
    });
    recommendations.push({
      title: "Quote Calculator",
      description: "Get instant pricing for professional support",
      href: "/tools/quote-calculator",
      icon: FileText,
      priority: "recommended",
      type: "tool"
    });
  }

  // Support preference-based
  if (support === "coaching" || support === "writing") {
    recommendations.push({
      title: "View All Services",
      description: "Explore our full range of professional support",
      href: "/services",
      icon: Sparkles,
      priority: "recommended",
      type: "service"
    });
  }

  // Remove duplicates based on href
  const uniqueRecs = recommendations.filter((rec, index, self) => 
    index === self.findIndex(r => r.href === rec.href)
  );

  // Sort by priority
  const priorityOrder = { essential: 0, recommended: 1, helpful: 2 };
  return uniqueRecs.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]).slice(0, 8);
};

const PersonalizationQuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep) / questions.length) * 100;

  const handleSelect = (optionId: string) => {
    if (currentQuestion.multiSelect) {
      const current = (answers[currentQuestion.id] as string[]) || [];
      if (current.includes(optionId)) {
        setAnswers({ ...answers, [currentQuestion.id]: current.filter(id => id !== optionId) });
      } else {
        setAnswers({ ...answers, [currentQuestion.id]: [...current, optionId] });
      }
    } else {
      setAnswers({ ...answers, [currentQuestion.id]: optionId });
    }
  };

  const isSelected = (optionId: string) => {
    const answer = answers[currentQuestion.id];
    if (Array.isArray(answer)) {
      return answer.includes(optionId);
    }
    return answer === optionId;
  };

  const canProceed = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.multiSelect) {
      return Array.isArray(answer) && answer.length > 0;
    }
    return !!answer;
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const recommendations = showResults ? generateRecommendations(answers) : [];

  const breadcrumbItems = [
    { name: "Home", url: "https://dissertlypro.com" },
    { name: "Tools", url: "https://dissertlypro.com/tools" },
    { name: "Personalization Quiz", url: "https://dissertlypro.com/tools/personalization-quiz" }
  ];

  return (
    <Layout>
      <SEO
        title="Academic Stage Quiz | Personalized Recommendations | DissertlyPro"
        description="Take our free 2-minute quiz to discover personalized resources and tools for your dissertation or thesis journey. Get tailored recommendations based on your degree, stage, and challenges."
        canonical="https://dissertlypro.com/tools/personalization-quiz"
        keywords={["dissertation quiz", "thesis recommendations", "academic stage assessment", "personalized study plan", "PhD resources", "masters thesis help"]}
      />
      <ToolSchema
        name="Academic Stage Personalization Quiz"
        description="Discover personalized resources and recommendations for your dissertation or thesis based on your degree type, current stage, challenges, and timeline."
        url="https://dissertlypro.com/tools/personalization-quiz"
        applicationCategory="EducationalApplication"
        operatingSystem="Web Browser"
        offers={{
          price: "0",
          priceCurrency: "USD"
        }}
        aggregateRating={{
          ratingValue: "4.9",
          ratingCount: "1247",
          bestRating: "5",
          worstRating: "1"
        }}
        featureList={[
          "5 targeted questions about your academic journey",
          "Personalized resource recommendations",
          "Service and tool suggestions",
          "Priority-ranked results",
          "Works for Master's and PhD students"
        ]}
      />
      <SoftwareApplicationSchema
        name="Academic Stage Personalization Quiz"
        description="Discover personalized resources and recommendations for your dissertation or thesis."
        url="/tools/personalization-quiz"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="relative pt-12 pb-16 px-4 overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container relative z-10 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <Badge variant="outline" className="mb-4 border-copper/30 text-copper">
                    <Sparkles className="h-3 w-3 mr-1" />
                    2-Minute Quiz
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                    What Do You Need?
                  </h1>
                  <p className="text-muted-foreground">
                    Answer a few questions to get personalized recommendations
                  </p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Question {currentStep + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% complete</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Question Card */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm mb-6">
                  <CardContent className="p-6 md:p-8">
                    <motion.div
                      key={currentQuestion.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                        {currentQuestion.question}
                      </h2>
                      {currentQuestion.subtitle && (
                        <p className="text-muted-foreground mb-6">{currentQuestion.subtitle}</p>
                      )}
                      {currentQuestion.multiSelect && (
                        <p className="text-sm text-copper mb-4">Select all that apply</p>
                      )}

                      <div className="grid gap-3">
                        {currentQuestion.options.map((option, index) => {
                          const Icon = option.icon;
                          const selected = isSelected(option.id);
                          return (
                            <motion.button
                              key={option.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => handleSelect(option.id)}
                              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                                selected 
                                  ? "border-copper bg-copper/10" 
                                  : "border-border hover:border-copper/50 hover:bg-muted/50"
                              }`}
                            >
                              <div className="flex items-start gap-4">
                                {Icon && (
                                  <div className={`p-2 rounded-lg ${selected ? "bg-copper/20" : "bg-muted"}`}>
                                    <Icon className={`h-5 w-5 ${selected ? "text-copper" : "text-muted-foreground"}`} />
                                  </div>
                                )}
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className={`font-medium ${selected ? "text-copper" : "text-foreground"}`}>
                                      {option.label}
                                    </span>
                                    {selected && (
                                      <CheckCircle2 className="h-4 w-4 text-copper" />
                                    )}
                                  </div>
                                  {option.description && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                      {option.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>

                {/* Navigation */}
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="gap-2 bg-copper hover:bg-copper-dark text-white"
                  >
                    {currentStep === questions.length - 1 ? "See Results" : "Next"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Results Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-copper/20 mb-4"
                  >
                    <Sparkles className="h-8 w-8 text-copper" />
                  </motion.div>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                    Your Personalized Plan
                  </h1>
                  <p className="text-muted-foreground">
                    Based on your responses, here are our top recommendations
                  </p>
                </div>

                {/* Recommendations */}
                <div className="space-y-4 mb-8">
                  {recommendations.map((rec, index) => {
                    const Icon = rec.icon;
                    return (
                      <motion.div
                        key={rec.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link to={rec.href}>
                          <Card className="border-border/50 hover:border-copper/50 transition-all duration-200 hover:shadow-lg group">
                            <CardContent className="p-4 md:p-5">
                              <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-xl shrink-0 ${
                                  rec.priority === "essential" ? "bg-copper/20" : "bg-muted"
                                }`}>
                                  <Icon className={`h-5 w-5 ${
                                    rec.priority === "essential" ? "text-copper" : "text-muted-foreground"
                                  }`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 flex-wrap mb-1">
                                    <h3 className="font-semibold text-foreground group-hover:text-copper transition-colors">
                                      {rec.title}
                                    </h3>
                                    <Badge 
                                      variant="outline" 
                                      className={`text-xs ${
                                        rec.priority === "essential" 
                                          ? "border-copper/50 text-copper" 
                                          : rec.priority === "recommended"
                                          ? "border-primary/50 text-primary"
                                          : "border-muted-foreground/50"
                                      }`}
                                    >
                                      {rec.priority}
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs">
                                      {rec.type}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {rec.description}
                                  </p>
                                </div>
                                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-copper transition-colors shrink-0" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    onClick={handleRestart}
                    className="gap-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Retake Quiz
                  </Button>
                  <Link to="/consultation">
                    <Button className="w-full sm:w-auto gap-2 bg-copper hover:bg-copper-dark text-white">
                      <Users className="h-4 w-4" />
                      Get Expert Guidance
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default PersonalizationQuizPage;
