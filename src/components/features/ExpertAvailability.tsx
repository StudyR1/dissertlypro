import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Circle, Clock, MessageSquare, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export type AvailabilityStatus = "online" | "busy" | "away" | "offline";

interface ExpertAvailabilityBadgeProps {
  expertName: string;
  specialty?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

// Simulate realistic availability based on time and expert index
const getSimulatedStatus = (expertIndex: number): AvailabilityStatus => {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  
  // Create variety based on expert index and time
  const seed = (expertIndex * 17 + hour * 3 + Math.floor(minute / 15)) % 10;
  
  // More experts online during business hours (9 AM - 6 PM)
  const isBusinessHours = hour >= 9 && hour < 18;
  
  if (isBusinessHours) {
    if (seed < 5) return "online";
    if (seed < 7) return "busy";
    if (seed < 9) return "away";
    return "offline";
  } else {
    // Evening/night - fewer online
    if (seed < 2) return "online";
    if (seed < 4) return "busy";
    if (seed < 6) return "away";
    return "offline";
  }
};

const statusConfig: Record<AvailabilityStatus, { 
  color: string; 
  bgColor: string;
  label: string;
  pulse: boolean;
}> = {
  online: { 
    color: "bg-green-500", 
    bgColor: "bg-green-500/10 border-green-500/30",
    label: "Available Now", 
    pulse: true 
  },
  busy: { 
    color: "bg-amber-500", 
    bgColor: "bg-amber-500/10 border-amber-500/30",
    label: "In Session", 
    pulse: false 
  },
  away: { 
    color: "bg-blue-400", 
    bgColor: "bg-blue-400/10 border-blue-400/30",
    label: "Away", 
    pulse: false 
  },
  offline: { 
    color: "bg-gray-400", 
    bgColor: "bg-gray-400/10 border-gray-400/30",
    label: "Offline", 
    pulse: false 
  },
};

export const ExpertAvailabilityBadge = ({ 
  expertName,
  specialty,
  size = "md",
  showLabel = true,
  className
}: ExpertAvailabilityBadgeProps) => {
  const [status, setStatus] = useState<AvailabilityStatus>("offline");
  const expertIndex = expertName.length % 6; // Use name length as pseudo-random seed

  useEffect(() => {
    // Initial status
    setStatus(getSimulatedStatus(expertIndex));

    // Update every 30 seconds for realistic feel
    const interval = setInterval(() => {
      setStatus(getSimulatedStatus(expertIndex));
    }, 30000);

    return () => clearInterval(interval);
  }, [expertIndex]);

  const config = statusConfig[status];
  const dotSize = size === "sm" ? "w-2 h-2" : size === "lg" ? "w-3.5 h-3.5" : "w-2.5 h-2.5";
  const textSize = size === "sm" ? "text-[10px]" : size === "lg" ? "text-sm" : "text-xs";

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <span className="relative flex">
        <span className={cn(dotSize, "rounded-full", config.color)} />
        {config.pulse && (
          <span className={cn(
            "absolute inset-0 rounded-full animate-ping",
            config.color,
            "opacity-75"
          )} />
        )}
      </span>
      {showLabel && (
        <span className={cn(textSize, "font-medium", {
          "text-green-600": status === "online",
          "text-amber-600": status === "busy",
          "text-blue-500": status === "away",
          "text-gray-500": status === "offline",
        })}>
          {config.label}
        </span>
      )}
    </div>
  );
};

// Live availability strip showing all online experts
interface LiveAvailabilityStripProps {
  experts: Array<{
    name: string;
    title: string;
    image: string;
    expertise: string[];
  }>;
}

export const LiveAvailabilityStrip = ({ experts }: LiveAvailabilityStripProps) => {
  const [onlineExperts, setOnlineExperts] = useState<typeof experts>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateOnline = () => {
      const online = experts.filter((_, index) => {
        const status = getSimulatedStatus(index);
        return status === "online" || status === "busy";
      });
      setOnlineExperts(online);
      setCurrentTime(new Date());
    };

    updateOnline();
    const interval = setInterval(updateOnline, 30000);
    return () => clearInterval(interval);
  }, [experts]);

  if (onlineExperts.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-green-500/10 border border-green-500/20 rounded-xl p-4 mb-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-green-500" />
            </div>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
              {onlineExperts.length}
            </span>
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm sm:text-base">
              {onlineExperts.length} Expert{onlineExperts.length !== 1 ? 's' : ''} Available Now
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Live as of {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Stacked avatars */}
          <div className="flex -space-x-2" role="group" aria-label={`${onlineExperts.length} experts currently available`}>
            {onlineExperts.slice(0, 4).map((expert, index) => (
              <motion.img
                key={expert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                src={expert.image}
                alt={`${expert.name} - ${expert.title}`}
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
                title={expert.name}
              />
            ))}
            {onlineExperts.length > 4 && (
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border-2 border-background text-xs font-medium" aria-label={`${onlineExperts.length - 4} more experts available`}>
                +{onlineExperts.length - 4}
              </div>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            aria-label="Connect with an available expert now"
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Connect Now</span>
          </motion.button>
        </div>
      </div>

      {/* Specialty tags of online experts */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {Array.from(new Set(onlineExperts.flatMap(e => e.expertise.slice(0, 2)))).slice(0, 6).map((specialty) => (
          <span
            key={specialty}
            className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] text-green-700 dark:text-green-400"
          >
            {specialty}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExpertAvailabilityBadge;
