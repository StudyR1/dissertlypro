import { useState, useEffect } from "react";
import { AlertTriangle, Calendar, Clock, ArrowRight, Flame, Zap, CheckCircle, BookOpen, Target, Shield, Users, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ToolSchema from "@/components/schemas/ToolSchema";
import SoftwareApplicationSchema from "@/components/schemas/SoftwareApplicationSchema";
import FAQSchema from "@/components/schemas/FAQSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

type DangerLevel = "safe" | "caution" | "warning" | "danger" | "critical";

interface DeadlineAnalysis {
  level: DangerLevel;
  daysLeft: number;
  hoursLeft: number;
  message: string;
  recommendation: string;
  color: string;
  icon: React.ReactNode;
  urgencyMultiplier: number;
  actionItems: string[];
}

const analyzeDeadline = (deadline: Date, wordCount: number): DeadlineAnalysis => {
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();
  const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  const estimatedDaysNeeded = Math.ceil(wordCount / 500);
  const bufferRatio = daysLeft / estimatedDaysNeeded;

  if (daysLeft < 0) {
    return {
      level: "critical",
      daysLeft: 0,
      hoursLeft: 0,
      message: "Deadline has passed!",
      recommendation: "Contact us immediately for emergency assistance options.",
      color: "text-red-500",
      icon: <Flame className="w-8 h-8 text-red-500 animate-pulse" />,
      urgencyMultiplier: 3,
      actionItems: [
        "Contact your supervisor immediately about extension options",
        "Reach out for emergency professional support",
        "Document any extenuating circumstances"
      ]
    };
  }

  if (daysLeft <= 2 || bufferRatio < 0.3) {
    return {
      level: "critical",
      daysLeft,
      hoursLeft,
      message: "CRITICAL: Extreme time pressure!",
      recommendation: "This requires immediate expert intervention. We offer 24-48hr rush services.",
      color: "text-red-500",
      icon: <Flame className="w-8 h-8 text-red-500 animate-pulse" />,
      urgencyMultiplier: 2.5,
      actionItems: [
        "Prioritize essential sections only",
        "Consider professional rush assistance",
        "Work in focused 2-hour blocks without breaks",
        "Eliminate all non-essential commitments"
      ]
    };
  }

  if (daysLeft <= 7 || bufferRatio < 0.5) {
    return {
      level: "danger",
      daysLeft,
      hoursLeft,
      message: "DANGER ZONE: Very limited time",
      recommendation: "Priority support recommended. Every day counts at this stage.",
      color: "text-orange-500",
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      urgencyMultiplier: 1.75,
      actionItems: [
        "Create a day-by-day writing schedule",
        "Focus on completing full chapters, not perfecting",
        "Set daily word count minimums",
        "Consider professional editing support"
      ]
    };
  }

  if (daysLeft <= 14 || bufferRatio < 0.75) {
    return {
      level: "warning",
      daysLeft,
      hoursLeft,
      message: "Warning: Timeline is tight",
      recommendation: "Starting now gives you flexibility. Consider professional guidance.",
      color: "text-amber-500",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      urgencyMultiplier: 1.35,
      actionItems: [
        "Block dedicated writing time each day",
        "Complete literature review first",
        "Draft methodology section this week",
        "Schedule regular check-ins with supervisor"
      ]
    };
  }

  if (daysLeft <= 30 || bufferRatio < 1) {
    return {
      level: "caution",
      daysLeft,
      hoursLeft,
      message: "Caution: Plan carefully",
      recommendation: "Good time to start. Expert consultation can optimize your approach.",
      color: "text-yellow-500",
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      urgencyMultiplier: 1.15,
      actionItems: [
        "Create detailed chapter outline",
        "Set weekly milestones",
        "Build buffer time for revisions",
        "Start data collection if applicable"
      ]
    };
  }

  return {
    level: "safe",
    daysLeft,
    hoursLeft,
    message: "You're in good shape!",
    recommendation: "Excellent planning. Starting early means higher quality outcomes.",
    color: "text-green-500",
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    urgencyMultiplier: 1,
    actionItems: [
      "Take time to explore your topic thoroughly",
      "Build a comprehensive literature base",
      "Consider multiple methodological approaches",
      "Plan for peer feedback cycles"
    ]
  };
};

const faqs = [
  {
    question: "How accurate is this deadline risk assessment?",
    answer: "Our calculator uses a sustainable writing pace of 500 quality academic words per day as its baseline. This accounts for research, writing, and revision. Your actual pace may vary based on experience, subject complexity, and available time."
  },
  {
    question: "What should I do if I'm in the critical zone?",
    answer: "Contact your supervisor immediately to discuss options. Consider focusing only on essential sections, seek professional support for editing or specific chapters, and eliminate all non-essential commitments until submission."
  },
  {
    question: "Can I realistically finish if I'm behind schedule?",
    answer: "Yes, but it requires strategic prioritization. Focus on completing full drafts rather than perfecting individual sections. Many students successfully submit after intensive final pushes, especially with professional support."
  },
  {
    question: "How does word count affect my timeline?",
    answer: "Higher word counts require more research, writing, and revision time. A 10,000-word dissertation needs roughly 20 focused writing days, while an 80,000-word thesis needs 160+ days. Build in additional time for data collection and analysis."
  }
];

const DeadlineCheckerPage = () => {
  const [deadline, setDeadline] = useState("");
  const [wordCount, setWordCount] = useState("10000");
  const [analysis, setAnalysis] = useState<DeadlineAnalysis | null>(null);

  useEffect(() => {
    if (deadline && wordCount) {
      const deadlineDate = new Date(deadline);
      const words = parseInt(wordCount) || 10000;
      if (!isNaN(deadlineDate.getTime())) {
        setAnalysis(analyzeDeadline(deadlineDate, words));
      }
    } else {
      setAnalysis(null);
    }
  }, [deadline, wordCount]);

  const getLevelGradient = (level: DangerLevel) => {
    switch (level) {
      case "critical": return "from-red-500/20 to-red-600/10 border-red-500/50";
      case "danger": return "from-orange-500/20 to-orange-600/10 border-orange-500/50";
      case "warning": return "from-amber-500/20 to-amber-600/10 border-amber-500/50";
      case "caution": return "from-yellow-500/20 to-yellow-600/10 border-yellow-500/50";
      default: return "from-green-500/20 to-green-600/10 border-green-500/50";
    }
  };

  return (
    <Layout>
      <SEO 
        title="Free Dissertation Deadline Checker | Risk Assessment Tool"
        description="Check if you have enough time to finish your dissertation. Our free deadline analyzer calculates your risk level and provides actionable recommendations."
        keywords={["dissertation deadline", "thesis deadline calculator", "dissertation timeline", "academic deadline checker", "dissertation risk assessment"]}
        canonical="https://dissertlypro.com/tools/deadline-checker"
      />
      <ToolSchema 
        name="Dissertation Deadline Checker"
        description="Free deadline risk assessment tool for dissertation and thesis students. Calculates time remaining, risk level, and provides actionable recommendations."
        url="https://dissertlypro.com/tools/deadline-checker"
      />
      <SoftwareApplicationSchema
        name="Dissertation Deadline Checker"
        description="Free deadline risk assessment tool for dissertation and thesis students."
        url="/tools/deadline-checker"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-background to-red-500/5" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Free Deadline Risk Assessment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Dissertation <span className="text-gradient-copper">Deadline Checker</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find out if you have enough time to finish your dissertation. Get a realistic risk assessment and actionable recommendations based on your deadline and word count.
            </p>
          </motion.div>

          {/* Main Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="deadline-date" className="text-sm font-medium flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      Submission Deadline
                    </Label>
                    <Input
                      id="deadline-date"
                      type="date"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full text-lg h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="word-count-input" className="text-sm font-medium flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-muted-foreground" />
                      Target Word Count
                    </Label>
                    <Input
                      id="word-count-input"
                      type="number"
                      value={wordCount}
                      onChange={(e) => setWordCount(e.target.value)}
                      placeholder="e.g., 10000"
                      min="1000"
                      max="150000"
                      className="w-full text-lg h-12"
                    />
                  </div>
                </div>

                {/* Analysis Result */}
                <AnimatePresence mode="wait">
                  {analysis ? (
                    <motion.div
                      key={analysis.level}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-6 rounded-xl bg-gradient-to-br border-2 ${getLevelGradient(analysis.level)}`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="mt-1">{analysis.icon}</div>
                        <div className="flex-1">
                          <p className={`text-xl font-bold ${analysis.color}`}>{analysis.message}</p>
                          
                          <div className="flex gap-6 mt-4">
                            <div className="text-center">
                              <span className="text-4xl font-bold text-foreground">{analysis.daysLeft}</span>
                              <span className="block text-sm text-muted-foreground">days</span>
                            </div>
                            <div className="text-center">
                              <span className="text-4xl font-bold text-foreground">{analysis.hoursLeft}</span>
                              <span className="block text-sm text-muted-foreground">hours</span>
                            </div>
                            <div className="text-center">
                              <span className="text-4xl font-bold text-foreground">{Math.ceil(parseInt(wordCount) / 500)}</span>
                              <span className="block text-sm text-muted-foreground">days needed</span>
                            </div>
                          </div>

                          <p className="text-muted-foreground mt-4">
                            {analysis.recommendation}
                          </p>
                        </div>
                      </div>

                      {/* Action Items */}
                      <div className="mt-6 p-4 rounded-lg bg-background/50">
                        <p className="text-sm font-semibold mb-3">Recommended Actions:</p>
                        <ul className="space-y-2">
                          {analysis.actionItems.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {analysis.level !== "safe" && (
                        <Button asChild className="w-full mt-6 group" size="lg">
                          <Link to="/consultation">
                            Get Expert Help Now
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-8 text-muted-foreground"
                    >
                      <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Enter your deadline and word count to see your risk assessment</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Enter Your Deadline</h3>
              <p className="text-sm text-muted-foreground">Tell us when your dissertation is due</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Set Word Count</h3>
              <p className="text-sm text-muted-foreground">Enter your target dissertation length</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Get Assessment</h3>
              <p className="text-sm text-muted-foreground">Receive your risk level and action plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Levels Explained */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Understanding Risk Levels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { level: "Safe", color: "bg-green-500", desc: "30+ days buffer, excellent planning" },
              { level: "Caution", color: "bg-yellow-500", desc: "Good time to start, plan carefully" },
              { level: "Warning", color: "bg-amber-500", desc: "Timeline is tight, start immediately" },
              { level: "Danger", color: "bg-orange-500", desc: "Very limited time, prioritize ruthlessly" },
              { level: "Critical", color: "bg-red-500", desc: "Emergency mode, seek help now" },
            ].map((item) => (
              <div key={item.level} className="p-4 rounded-lg border bg-card text-center">
                <div className={`w-4 h-4 rounded-full ${item.color} mx-auto mb-3`} />
                <h3 className="font-semibold mb-1">{item.level}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Need Help Meeting Your Deadline?</h2>
            <p className="text-muted-foreground mb-8">
              Our expert team has helped thousands of students complete their dissertations on time. Get personalized support tailored to your timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/consultation">Book Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/tools">Explore More Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DeadlineCheckerPage;
