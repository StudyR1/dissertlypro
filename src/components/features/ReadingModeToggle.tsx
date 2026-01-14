import { useState, useEffect } from "react";
import { BookOpen, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const ReadingModeToggle = () => {
  const [isReadingMode, setIsReadingMode] = useState(false);

  useEffect(() => {
    if (isReadingMode) {
      document.documentElement.classList.add("reading-mode");
    } else {
      document.documentElement.classList.remove("reading-mode");
    }
    return () => document.documentElement.classList.remove("reading-mode");
  }, [isReadingMode]);

  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      onClick={() => setIsReadingMode(!isReadingMode)}
      className={cn(
        "fixed right-4 top-1/2 -translate-y-1/2 z-40",
        "flex items-center gap-2 px-3 py-2 rounded-full",
        "bg-background/80 backdrop-blur-md border border-border/50",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "text-sm font-medium text-foreground/80 hover:text-foreground",
        isReadingMode && "bg-primary text-primary-foreground border-primary"
      )}
      aria-label={isReadingMode ? "Exit reading mode" : "Enter reading mode"}
    >
      <AnimatePresence mode="wait">
        {isReadingMode ? (
          <motion.div
            key="grid"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            className="flex items-center gap-2"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden sm:inline">Normal</span>
          </motion.div>
        ) : (
          <motion.div
            key="book"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            className="flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Reading Mode</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ReadingModeToggle;
