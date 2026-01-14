import { useState, useEffect } from "react";
import { AlertTriangle, Calendar, Clock, X, ArrowRight, Flame, Zap, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

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
}

const analyzeDeadline = (deadline: Date, wordCount: number): DeadlineAnalysis => {
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();
  const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  // Estimate: ~500 words of quality academic writing per day is sustainable
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
      icon: <Flame className="w-6 h-6 text-red-500 animate-pulse" />,
      urgencyMultiplier: 3,
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
      icon: <Flame className="w-6 h-6 text-red-500 animate-pulse" />,
      urgencyMultiplier: 2.5,
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
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      urgencyMultiplier: 1.75,
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
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      urgencyMultiplier: 1.35,
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
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
      urgencyMultiplier: 1.15,
    };
  }

  return {
    level: "safe",
    daysLeft,
    hoursLeft,
    message: "You're in good shape!",
    recommendation: "Excellent planning. Starting early means higher quality outcomes.",
    color: "text-green-500",
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    urgencyMultiplier: 1,
  };
};

const DeadlineDangerZone = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      {/* Trigger in floating tools area */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed left-4 bottom-48 z-40 flex items-center gap-2 px-3 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 hover:bg-amber-500/20 transition-all duration-300 group"
        aria-label="Check deadline danger zone"
      >
        <AlertTriangle className="w-4 h-4" />
        <span className="hidden sm:inline text-sm font-medium">Deadline Check</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-1/2 top-4 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto p-6 rounded-2xl bg-card border border-border shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Deadline Danger Zone</h3>
                    <p className="text-xs text-muted-foreground">Calculate your risk level</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    Submission Deadline
                  </Label>
                  <Input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium mb-2">
                    Target Word Count
                  </Label>
                  <Input
                    type="number"
                    value={wordCount}
                    onChange={(e) => setWordCount(e.target.value)}
                    placeholder="e.g., 10000"
                    min="1000"
                    max="100000"
                  />
                </div>

                {/* Analysis Result */}
                <AnimatePresence mode="wait">
                  {analysis && (
                    <motion.div
                      key={analysis.level}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`mt-6 p-5 rounded-xl bg-gradient-to-br border ${getLevelGradient(analysis.level)}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1">{analysis.icon}</div>
                        <div className="flex-1">
                          <p className={`font-bold ${analysis.color}`}>{analysis.message}</p>
                          
                          <div className="flex gap-4 mt-3 text-sm">
                            <div>
                              <span className="text-2xl font-bold text-foreground">{analysis.daysLeft}</span>
                              <span className="text-muted-foreground ml-1">days</span>
                            </div>
                            <div>
                              <span className="text-2xl font-bold text-foreground">{analysis.hoursLeft}</span>
                              <span className="text-muted-foreground ml-1">hours</span>
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground mt-3">
                            {analysis.recommendation}
                          </p>

                          {analysis.level !== "safe" && (
                            <div className="mt-3 p-2 rounded-lg bg-background/50 text-xs">
                              <span className="text-muted-foreground">Urgency factor: </span>
                              <span className="font-semibold text-foreground">
                                {analysis.urgencyMultiplier}x
                              </span>
                              <span className="text-muted-foreground"> (affects pricing)</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {analysis && analysis.level !== "safe" && (
                  <Button asChild className="w-full mt-4 group" size="lg">
                    <Link to="/consultation" onClick={() => setIsOpen(false)}>
                      Get Expert Help Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                )}

                {!analysis && (
                  <p className="text-sm text-center text-muted-foreground py-4">
                    Enter your deadline to see your risk assessment
                  </p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DeadlineDangerZone;
