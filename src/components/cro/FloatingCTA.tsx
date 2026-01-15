import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Sparkles, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <>
      {/* Desktop Floating Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-card rounded-2xl shadow-elevated border border-border overflow-hidden w-80"
            >
              {/* Decorative header */}
              <div className="bg-gradient-to-r from-copper via-copper-light to-copper h-1.5" />
              
              {/* Close button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
                aria-label="Collapse"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-6">
                {/* Icon */}
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-copper/10 text-copper mb-4">
                  <GraduationCap className="h-7 w-7" />
                </div>
                
                <h4 className="font-serif font-bold text-lg text-foreground mb-2">
                  Need Expert Research Help?
                </h4>
                <p className="text-sm text-muted-foreground mb-5">
                  Connect with PhD experts who can guide you through your dissertation journey. Free consultation, no commitment.
                </p>
                
                <Button variant="copper" size="lg" className="w-full group" asChild>
                  <Link to="/consultation">
                    Get Free Consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <button
                  onClick={handleDismiss}
                  className="w-full text-xs text-muted-foreground hover:text-foreground mt-4 transition-colors"
                >
                  Don't show again
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.button
              key="collapsed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => setIsExpanded(true)}
              className="relative flex items-center gap-3 bg-gradient-to-r from-copper to-copper-dark text-white rounded-full pl-5 pr-6 py-4 shadow-copper group overflow-hidden"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <span className="relative flex items-center justify-center h-8 w-8 rounded-full bg-white/20">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="relative font-sans font-semibold">Get Expert Help</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingCTA;
