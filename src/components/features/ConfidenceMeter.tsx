import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Star, TrendingUp, Users, Award, CheckCircle } from "lucide-react";

interface ConfidenceMeterProps {
  planName?: string;
  baseConfidence?: number;
}

const confidenceFactors = [
  { id: "experts", label: "Expert-vetted quality", icon: Award, boost: 15 },
  { id: "revisions", label: "Unlimited revisions", icon: CheckCircle, boost: 12 },
  { id: "guarantee", label: "Satisfaction guarantee", icon: Shield, boost: 18 },
  { id: "support", label: "24/7 dedicated support", icon: Users, boost: 10 },
  { id: "track", label: "95% success rate", icon: TrendingUp, boost: 20 },
];

const ConfidenceMeter = ({ planName = "Premium", baseConfidence = 25 }: ConfidenceMeterProps) => {
  const [hoveredFactor, setHoveredFactor] = useState<string | null>(null);
  const [animatedConfidence, setAnimatedConfidence] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Calculate total confidence
  const totalConfidence = Math.min(
    baseConfidence + confidenceFactors.reduce((sum, f) => sum + f.boost, 0),
    100
  );

  // Animate confidence on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = totalConfidence / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= totalConfidence) {
          setAnimatedConfidence(totalConfidence);
          clearInterval(interval);
        } else {
          setAnimatedConfidence(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }
  }, [isVisible, totalConfidence]);

  const getConfidenceColor = (value: number) => {
    if (value >= 85) return "text-green-500";
    if (value >= 70) return "text-emerald-500";
    if (value >= 50) return "text-amber-500";
    return "text-orange-500";
  };

  const getGradient = (value: number) => {
    if (value >= 85) return "from-green-500 to-emerald-400";
    if (value >= 70) return "from-emerald-500 to-teal-400";
    if (value >= 50) return "from-amber-500 to-yellow-400";
    return "from-orange-500 to-amber-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-card border border-border shadow-card"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold">Success Confidence</h4>
          <p className="text-xs text-muted-foreground">{planName} Plan</p>
        </div>
      </div>

      {/* Circular Meter */}
      <div className="relative w-40 h-40 mx-auto my-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted/20"
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            className={`${getGradient(animatedConfidence).replace('from-', 'text-').split(' ')[0]}`}
            style={{
              stroke: "url(#confidenceGradient)",
            }}
            initial={{ strokeDasharray: "0 264" }}
            animate={{ 
              strokeDasharray: `${(animatedConfidence / 100) * 264} 264` 
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="confidenceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-bold ${getConfidenceColor(animatedConfidence)}`}>
            {animatedConfidence}%
          </span>
          <span className="text-xs text-muted-foreground">Confidence</span>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex justify-center gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.div
            key={star}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + star * 0.1 }}
          >
            <Star
              className={`w-5 h-5 ${
                star <= Math.round(animatedConfidence / 20)
                  ? "text-amber-400 fill-amber-400"
                  : "text-muted/30"
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* Confidence Factors */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground mb-3">What builds your confidence:</p>
        {confidenceFactors.map((factor, index) => (
          <motion.div
            key={factor.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            onMouseEnter={() => setHoveredFactor(factor.id)}
            onMouseLeave={() => setHoveredFactor(null)}
            className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
              hoveredFactor === factor.id ? "bg-primary/5" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <factor.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{factor.label}</span>
            </div>
            <span className="text-xs font-medium text-primary">+{factor.boost}%</span>
          </motion.div>
        ))}
      </div>

      {/* Bottom message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-6 p-3 rounded-lg bg-green-500/10 border border-green-500/20"
      >
        <p className="text-xs text-center text-green-700 dark:text-green-400">
          <strong>High Confidence!</strong> You're covered by our comprehensive guarantee.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ConfidenceMeter;
