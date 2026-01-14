import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show after scrolling down 300px
      if (currentScrollY > 300) {
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY < lastScrollY || currentScrollY > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-t border-border safe-area-bottom"
          style={{ boxShadow: "0 -4px 20px -5px hsl(220 25% 18% / 0.1)" }}
        >
          <div className="container px-4 py-3 flex items-center gap-3">
            <Button 
              variant="midnight-outline" 
              size="sm" 
              className="flex-1 h-11 text-sm font-medium touch-manipulation"
              asChild
            >
              <a href="tel:+18005550199">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button 
              variant="copper" 
              size="sm" 
              className="flex-1 h-11 text-sm font-medium touch-manipulation"
              asChild
            >
              <Link to="/consultation">
                <MessageCircle className="h-4 w-4 mr-2" />
                Get Started
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileCTA;
