import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, 
  Users, 
  FileText, 
  BookOpen, 
  BarChart3, 
  Clock,
  Sparkles,
  TrendingUp,
  Globe
} from "lucide-react";

interface PulseEvent {
  id: string;
  type: "research" | "consultation" | "milestone" | "activity";
  message: string;
  icon: React.ReactNode;
  timestamp: Date;
  location?: string;
}

const activityTemplates = [
  { type: "research" as const, messages: [
    "A PhD student started their literature review",
    "Someone began data collection for their thesis",
    "A doctoral candidate submitted their methodology chapter",
    "A researcher started qualitative coding",
    "Someone is working on their theoretical framework",
  ], icon: <BookOpen className="w-4 h-4" /> },
  { type: "consultation" as const, messages: [
    "A student just booked a methodology consultation",
    "Someone scheduled a statistical analysis session",
    "A professional joined an evening support session",
    "A researcher requested expert feedback",
    "Someone started a live chat with an expert",
  ], icon: <Users className="w-4 h-4" /> },
  { type: "milestone" as const, messages: [
    "🎉 A student successfully defended their dissertation!",
    "📚 Someone completed their final chapter",
    "✅ A thesis was submitted for review",
    "🎓 A doctoral candidate passed their viva",
    "🏆 A researcher's paper was accepted for publication",
  ], icon: <Sparkles className="w-4 h-4" /> },
  { type: "activity" as const, messages: [
    "3 students are currently online",
    "Research activity is up 15% this hour",
    "Peak hours: Many students working late tonight",
    "5 dissertations in progress right now",
    "Active support sessions: 8",
  ], icon: <Activity className="w-4 h-4" /> },
];

const locations = [
  "United Kingdom", "United States", "Canada", "Australia", 
  "Germany", "Netherlands", "Singapore", "India", "Nigeria", "UAE"
];

const generateEvent = (): PulseEvent => {
  const template = activityTemplates[Math.floor(Math.random() * activityTemplates.length)];
  const message = template.messages[Math.floor(Math.random() * template.messages.length)];
  const location = Math.random() > 0.6 ? locations[Math.floor(Math.random() * locations.length)] : undefined;
  
  return {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type: template.type,
    message,
    icon: template.icon,
    timestamp: new Date(),
    location,
  };
};

const LiveResearchPulse = () => {
  const [events, setEvents] = useState<PulseEvent[]>([]);
  const [stats, setStats] = useState({
    activeNow: 23,
    todayConsultations: 47,
    weeklyMilestones: 12,
  });

  // Initialize with some events
  useEffect(() => {
    const initial = Array.from({ length: 3 }, () => generateEvent());
    setEvents(initial);
  }, []);

  // Add new events periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent = generateEvent();
      setEvents(prev => [newEvent, ...prev.slice(0, 4)]);
      
      // Randomly update stats
      setStats(prev => ({
        activeNow: Math.max(10, prev.activeNow + Math.floor(Math.random() * 5) - 2),
        todayConsultations: prev.todayConsultations + (Math.random() > 0.7 ? 1 : 0),
        weeklyMilestones: prev.weeklyMilestones + (Math.random() > 0.9 ? 1 : 0),
      }));
    }, 8000 + Math.random() * 7000); // Random interval 8-15 seconds

    return () => clearInterval(interval);
  }, []);

  const getEventColor = (type: PulseEvent["type"]) => {
    switch (type) {
      case "milestone": return "text-green-500 bg-green-500/10 border-green-500/20";
      case "consultation": return "text-blue-500 bg-blue-500/10 border-blue-500/20";
      case "research": return "text-purple-500 bg-purple-500/10 border-purple-500/20";
      default: return "text-amber-500 bg-amber-500/10 border-amber-500/20";
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return `${Math.floor(diff / 3600)}h ago`;
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-midnight-deep via-midnight to-midnight-light border border-white/10 p-6">
      {/* Animated background pulse */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-copper/5"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-blue-500/5"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-copper/20 flex items-center justify-center">
                <Activity className="w-5 h-5 text-copper" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg">Live Research Pulse</h3>
              <p className="text-xs text-white/50">Real-time activity feed</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Globe className="w-3.5 h-3.5" />
            <span>Worldwide</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <motion.div 
            key={stats.activeNow}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Users className="w-3.5 h-3.5 text-green-400" />
              <span className="text-lg font-bold text-white">{stats.activeNow}</span>
            </div>
            <span className="text-[10px] text-white/50 uppercase tracking-wider">Active Now</span>
          </motion.div>
          
          <motion.div 
            key={stats.todayConsultations}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-lg font-bold text-white">{stats.todayConsultations}</span>
            </div>
            <span className="text-[10px] text-white/50 uppercase tracking-wider">Today's Sessions</span>
          </motion.div>
          
          <motion.div 
            key={stats.weeklyMilestones}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-lg font-bold text-white">{stats.weeklyMilestones}</span>
            </div>
            <span className="text-[10px] text-white/50 uppercase tracking-wider">This Week</span>
          </motion.div>
        </div>

        {/* Event Feed */}
        <div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {events.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, x: -20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: "auto" }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`flex items-start gap-3 p-3 rounded-xl border ${getEventColor(event.type)}`}
              >
                <div className="mt-0.5 shrink-0">
                  {event.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white/90 leading-snug">
                    {event.message}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-white/40 flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />
                      {formatTime(event.timestamp)}
                    </span>
                    {event.location && (
                      <span className="text-[10px] text-white/40 flex items-center gap-1">
                        <Globe className="w-2.5 h-2.5" />
                        {event.location}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
          <p className="text-[10px] text-white/30">
            Anonymous activity from our global community
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-white/40">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveResearchPulse;
