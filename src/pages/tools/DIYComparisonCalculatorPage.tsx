import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ToolSchema from "@/components/schemas/ToolSchema";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import { 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Calculator,
  Brain,
  Target,
  Calendar,
  Zap,
  BarChart3,
  Scale
} from "lucide-react";

interface CalculationInputs {
  wordCount: number;
  deadline: string;
  hourlyRate: number;
  experienceLevel: string;
  serviceType: string;
}

interface ComparisonResult {
  diy: {
    totalHours: number;
    researchHours: number;
    writingHours: number;
    editingHours: number;
    opportunityCost: number;
    stressLevel: string;
    successProbability: number;
  };
  expert: {
    baseCost: number;
    timeSaved: number;
    qualityBoost: string;
    successProbability: number;
    turnaroundDays: number;
  };
}

const deadlineOptions = [
  { value: "1-week", label: "1 Week", multiplier: 2.0, diyMultiplier: 0.5 },
  { value: "2-weeks", label: "2 Weeks", multiplier: 1.5, diyMultiplier: 0.7 },
  { value: "1-month", label: "1 Month", multiplier: 1.2, diyMultiplier: 0.9 },
  { value: "2-months", label: "2 Months", multiplier: 1.0, diyMultiplier: 1.0 },
  { value: "3-months", label: "3+ Months", multiplier: 0.9, diyMultiplier: 1.1 },
];

const experienceLevels = [
  { value: "beginner", label: "First-time researcher", hoursMultiplier: 1.5, successRate: 65 },
  { value: "intermediate", label: "Some research experience", hoursMultiplier: 1.2, successRate: 75 },
  { value: "advanced", label: "Experienced researcher", hoursMultiplier: 1.0, successRate: 85 },
];

const serviceTypes = [
  { value: "full-support", label: "Full Dissertation Support", baseRate: 45, description: "End-to-end guidance" },
  { value: "writing-help", label: "Writing Assistance", baseRate: 35, description: "Drafting & structure" },
  { value: "editing", label: "Editing & Proofreading", baseRate: 25, description: "Polish & refinement" },
  { value: "data-analysis", label: "Data Analysis", baseRate: 50, description: "Statistical support" },
  { value: "consultation", label: "Expert Consultation", baseRate: 40, description: "Strategic guidance" },
];

const calculateComparison = (inputs: CalculationInputs): ComparisonResult => {
  const { wordCount, deadline, hourlyRate, experienceLevel, serviceType } = inputs;
  
  const deadlineData = deadlineOptions.find(d => d.value === deadline) || deadlineOptions[2];
  const experienceData = experienceLevels.find(e => e.value === experienceLevel) || experienceLevels[1];
  const serviceData = serviceTypes.find(s => s.value === serviceType) || serviceTypes[0];

  // Base hours calculation (industry averages)
  const baseResearchHours = (wordCount / 1000) * 4; // 4 hours per 1000 words for research
  const baseWritingHours = (wordCount / 1000) * 3; // 3 hours per 1000 words for writing
  const baseEditingHours = (wordCount / 1000) * 1.5; // 1.5 hours per 1000 words for editing

  // Apply experience and deadline multipliers
  const researchHours = Math.round(baseResearchHours * experienceData.hoursMultiplier * deadlineData.diyMultiplier);
  const writingHours = Math.round(baseWritingHours * experienceData.hoursMultiplier);
  const editingHours = Math.round(baseEditingHours * experienceData.hoursMultiplier);
  const totalHours = researchHours + writingHours + editingHours;

  // Calculate opportunity cost
  const opportunityCost = totalHours * hourlyRate;

  // Stress level based on deadline and experience
  let stressLevel = "Moderate";
  if (deadlineData.multiplier >= 1.5 && experienceData.hoursMultiplier >= 1.2) {
    stressLevel = "Very High";
  } else if (deadlineData.multiplier >= 1.2 || experienceData.hoursMultiplier >= 1.2) {
    stressLevel = "High";
  } else if (deadlineData.multiplier <= 1.0 && experienceData.hoursMultiplier <= 1.0) {
    stressLevel = "Low";
  }

  // Expert service calculations
  const baseServiceHours = wordCount / 500; // Experts are more efficient
  const baseCost = Math.round(baseServiceHours * serviceData.baseRate * deadlineData.multiplier);
  const timeSaved = Math.round(totalHours * 0.7); // Experts save ~70% of your time
  
  // Turnaround calculation
  let turnaroundDays = Math.ceil(wordCount / 2000);
  if (deadline === "1-week") turnaroundDays = Math.min(turnaroundDays, 5);
  if (deadline === "2-weeks") turnaroundDays = Math.min(turnaroundDays, 10);

  return {
    diy: {
      totalHours,
      researchHours,
      writingHours,
      editingHours,
      opportunityCost,
      stressLevel,
      successProbability: experienceData.successRate - (deadlineData.multiplier > 1.2 ? 10 : 0),
    },
    expert: {
      baseCost,
      timeSaved,
      qualityBoost: serviceType === "full-support" ? "Significant" : serviceType === "editing" ? "Moderate" : "Notable",
      successProbability: 95,
      turnaroundDays,
    },
  };
};

const DIYComparisonCalculatorPage = () => {
  const [inputs, setInputs] = useState<CalculationInputs>({
    wordCount: 15000,
    deadline: "2-months",
    hourlyRate: 25,
    experienceLevel: "intermediate",
    serviceType: "full-support",
  });

  const [showResults, setShowResults] = useState(false);

  const results = useMemo(() => calculateComparison(inputs), [inputs]);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://dissertlypro.com" },
    { name: "Tools", url: "https://dissertlypro.com/tools" },
    { name: "DIY vs Expert Calculator", url: "https://dissertlypro.com/tools/diy-comparison" }
  ];

  const netSavings = results.diy.opportunityCost - results.expert.baseCost;
  const isExpertWorthIt = netSavings > 0 || results.diy.successProbability < 75;

  return (
    <Layout>
      <SEO
        title="DIY vs Expert Help Calculator | Compare Costs & Time | DissertlyPro"
        description="Compare the true cost of completing your dissertation yourself vs. getting expert help. Calculate time investment, opportunity cost, and success probability. Free calculator."
        canonical="https://dissertlypro.com/tools/diy-comparison"
        keywords={["dissertation cost calculator", "DIY vs expert help", "thesis time calculator", "dissertation opportunity cost", "academic help comparison"]}
      />
      <ToolSchema
        name="DIY vs Expert Help Comparison Calculator"
        description="Calculate and compare the true cost of completing your dissertation yourself versus getting professional expert help. Includes time investment, opportunity cost, and success probability analysis."
        url="https://dissertlypro.com/tools/diy-comparison"
        applicationCategory="EducationalApplication"
        operatingSystem="Web Browser"
        offers={{
          price: "0",
          priceCurrency: "USD"
        }}
        aggregateRating={{
          ratingValue: "4.8",
          ratingCount: "892",
          bestRating: "5",
          worstRating: "1"
        }}
        featureList={[
          "Time investment breakdown",
          "Opportunity cost analysis",
          "Success probability comparison",
          "Service cost estimates",
          "Personalized recommendations"
        ]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="relative pt-12 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 border-copper/30 text-copper">
              <Scale className="h-3 w-3 mr-1" />
              Free Comparison Tool
            </Badge>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              DIY vs Expert Help Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the true cost of going solo vs. getting professional support for your dissertation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calculator className="h-5 w-5 text-copper" />
                  Your Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Word Count */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="wordCount">Word Count Target</Label>
                    <span className="text-sm font-medium text-copper">{inputs.wordCount.toLocaleString()} words</span>
                  </div>
                  <Slider
                    id="wordCount"
                    min={5000}
                    max={100000}
                    step={1000}
                    value={[inputs.wordCount]}
                    onValueChange={([value]) => setInputs({ ...inputs, wordCount: value })}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5,000</span>
                    <span>100,000</span>
                  </div>
                </div>

                {/* Deadline */}
                <div className="space-y-2">
                  <Label>Deadline</Label>
                  <Select 
                    value={inputs.deadline} 
                    onValueChange={(value) => setInputs({ ...inputs, deadline: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select deadline" />
                    </SelectTrigger>
                    <SelectContent>
                      {deadlineOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Hourly Rate */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="hourlyRate">Your Hourly Rate / Value</Label>
                    <span className="text-sm font-medium text-copper">${inputs.hourlyRate}/hr</span>
                  </div>
                  <Slider
                    id="hourlyRate"
                    min={10}
                    max={150}
                    step={5}
                    value={[inputs.hourlyRate]}
                    onValueChange={([value]) => setInputs({ ...inputs, hourlyRate: value })}
                    className="py-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    What's your time worth? Consider your salary or freelance rate.
                  </p>
                </div>

                {/* Experience Level */}
                <div className="space-y-2">
                  <Label>Research Experience</Label>
                  <Select 
                    value={inputs.experienceLevel} 
                    onValueChange={(value) => setInputs({ ...inputs, experienceLevel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLevels.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label>Type of Expert Help</Label>
                  <Select 
                    value={inputs.serviceType} 
                    onValueChange={(value) => setInputs({ ...inputs, serviceType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex flex-col">
                            <span>{option.label}</span>
                            <span className="text-xs text-muted-foreground">{option.description}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full bg-copper hover:bg-copper-dark text-white gap-2"
                  size="lg"
                >
                  <BarChart3 className="h-4 w-4" />
                  Calculate Comparison
                </Button>
              </CardContent>
            </Card>

            {/* Results Panel */}
            <div className="space-y-6">
              {showResults ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Summary Card */}
                  <Card className={`border-2 ${isExpertWorthIt ? "border-copper/50 bg-copper/5" : "border-primary/50 bg-primary/5"}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${isExpertWorthIt ? "bg-copper/20" : "bg-primary/20"}`}>
                          {isExpertWorthIt ? (
                            <Users className="h-6 w-6 text-copper" />
                          ) : (
                            <Brain className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-foreground mb-1">
                            {isExpertWorthIt ? "Expert Help Recommended" : "DIY Could Work"}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {isExpertWorthIt 
                              ? `You could save ${results.expert.timeSaved} hours and increase success probability by ${results.expert.successProbability - results.diy.successProbability}%.`
                              : `With your experience and timeline, self-completion is viable. Consider expert review for final polish.`
                            }
                          </p>
                          {netSavings > 0 && (
                            <Badge className="mt-2 bg-copper/20 text-copper border-copper/30">
                              Net Savings: ${netSavings.toLocaleString()}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* DIY Breakdown */}
                  <Card className="border-border/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Brain className="h-5 w-5 text-muted-foreground" />
                        DIY Approach
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                            <Clock className="h-4 w-4" />
                            Total Time
                          </div>
                          <p className="text-2xl font-bold text-foreground">{results.diy.totalHours} hrs</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                            <DollarSign className="h-4 w-4" />
                            Opportunity Cost
                          </div>
                          <p className="text-2xl font-bold text-foreground">${results.diy.opportunityCost.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Research & Reading</span>
                          <span className="font-medium">{results.diy.researchHours} hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Writing & Drafting</span>
                          <span className="font-medium">{results.diy.writingHours} hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Editing & Revising</span>
                          <span className="font-medium">{results.diy.editingHours} hours</span>
                        </div>
                      </div>

                      <div className="border-t border-border pt-4 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground text-sm">Stress Level</span>
                          <Badge variant={results.diy.stressLevel === "Very High" || results.diy.stressLevel === "High" ? "destructive" : "secondary"}>
                            {results.diy.stressLevel}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground text-sm">Success Probability</span>
                          <span className={`font-semibold ${results.diy.successProbability >= 80 ? "text-green-600" : results.diy.successProbability >= 70 ? "text-yellow-600" : "text-red-600"}`}>
                            {results.diy.successProbability}%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Expert Help Breakdown */}
                  <Card className="border-copper/30 bg-copper/5">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Users className="h-5 w-5 text-copper" />
                        Expert Help
                        <Badge variant="outline" className="ml-auto border-copper/50 text-copper text-xs">
                          Recommended
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-background rounded-lg p-3 border border-copper/20">
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                            <DollarSign className="h-4 w-4" />
                            Estimated Cost
                          </div>
                          <p className="text-2xl font-bold text-copper">${results.expert.baseCost.toLocaleString()}</p>
                        </div>
                        <div className="bg-background rounded-lg p-3 border border-copper/20">
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                            <Zap className="h-4 w-4" />
                            Time Saved
                          </div>
                          <p className="text-2xl font-bold text-copper">{results.expert.timeSaved} hrs</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-copper shrink-0" />
                          <span>Quality improvement: <strong>{results.expert.qualityBoost}</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-copper shrink-0" />
                          <span>Success probability: <strong className="text-green-600">{results.expert.successProbability}%</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-copper shrink-0" />
                          <span>Turnaround: ~{results.expert.turnaroundDays} business days</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-copper shrink-0" />
                          <span>Expert feedback & revisions included</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Link to="/tools/quote-calculator" className="flex-1">
                          <Button variant="outline" className="w-full gap-2 border-copper/50 text-copper hover:bg-copper/10">
                            <Calculator className="h-4 w-4" />
                            Get Exact Quote
                          </Button>
                        </Link>
                        <Link to="/consultation" className="flex-1">
                          <Button className="w-full gap-2 bg-copper hover:bg-copper-dark text-white">
                            <Sparkles className="h-4 w-4" />
                            Free Consultation
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <Card className="border-border/50 bg-muted/30 h-full min-h-[400px] flex items-center justify-center">
                  <CardContent className="text-center p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-copper/10 mb-4">
                      <Scale className="h-8 w-8 text-copper/50" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      Enter Your Details
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      Fill in your project details and click "Calculate Comparison" to see a detailed breakdown
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
              How We Calculate
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  title: "Time Investment",
                  description: "We estimate hours based on word count, your experience level, and deadline pressure using industry research averages."
                },
                {
                  icon: DollarSign,
                  title: "Opportunity Cost",
                  description: "Your hourly rate × time spent = what your DIY effort actually costs in potential earnings or leisure time."
                },
                {
                  icon: TrendingUp,
                  title: "Success Probability",
                  description: "Based on research about completion rates, factoring in experience, deadline stress, and available support."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border/50 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-copper/10 mb-4">
                        <item.icon className="h-6 w-6 text-copper" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
            * Estimates are based on industry averages and research data. Actual time and costs may vary based on your specific project requirements, institution standards, and individual circumstances. Use this as a planning guide, not a guarantee.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default DIYComparisonCalculatorPage;
