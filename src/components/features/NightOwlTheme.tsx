import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NightOwlTheme = () => {
  const [isNightOwl, setIsNightOwl] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      // Night owl hours: 10 PM - 6 AM
      const isLateNight = hour >= 22 || hour < 6;
      
      if (isLateNight && !isNightOwl) {
        setIsNightOwl(true);
        document.documentElement.classList.add("night-owl");
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
      } else if (!isLateNight && isNightOwl) {
        setIsNightOwl(false);
        document.documentElement.classList.remove("night-owl");
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute
    
    return () => {
      clearInterval(interval);
      document.documentElement.classList.remove("night-owl");
    };
  }, [isNightOwl]);

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -20, x: "-50%" }}
          className="fixed top-20 left-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/90 backdrop-blur-md text-primary-foreground shadow-2xl"
        >
          <div className="p-2 rounded-full bg-primary-foreground/20">
            <Moon className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium text-sm">Night Owl Mode Activated</p>
            <p className="text-xs opacity-80">Easy on your eyes for late-night research 🦉</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NightOwlTheme;
