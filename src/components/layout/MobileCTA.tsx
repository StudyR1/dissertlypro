import { memo, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileCTA = memo(() => {
  const [isVisible, setIsVisible] = useState(true); // Always visible initially
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Always visible, but change style based on scroll
    if (currentScrollY > 300) {
      if (currentScrollY < lastScrollY || currentScrollY > 500) {
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const openChat = () => {
    // Access the global Tawk_API
    const tawkApi = (window as any).Tawk_API;
    if (tawkApi?.showWidget) {
      tawkApi.showWidget();
    }
    if (tawkApi?.maximize) {
      tawkApi.maximize();
    }
  };

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
          <div className="container px-3 py-2.5 flex items-center gap-1.5">
            <Button 
              variant="midnight-outline" 
              size="sm" 
              className="flex-1 h-10 text-xs font-medium touch-manipulation px-2"
              asChild
            >
              <a href="tel:+18126905122">
                <Phone className="h-3.5 w-3.5 mr-1" />
                Call
              </a>
            </Button>
            <Button 
              size="sm" 
              className="flex-1 h-10 text-xs font-medium touch-manipulation px-2 bg-[#25D366] hover:bg-[#20BD5A] text-white"
              asChild
            >
              <a 
                href="https://wa.me/18126905122?text=Hello!%20I%20need%20help%20with%20my%20dissertation." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-3.5 w-3.5 mr-1" />
                WhatsApp
              </a>
            </Button>
            <Button 
              size="sm" 
              onClick={openChat}
              className="flex-1 h-10 text-xs font-medium touch-manipulation px-2 bg-copper hover:bg-copper-dark text-white"
            >
              <MessageCircle className="h-3.5 w-3.5 mr-1" />
              Chat
            </Button>
            <Button 
              variant="copper" 
              size="sm" 
              className="flex-1 h-10 text-xs font-medium touch-manipulation px-2"
              asChild
            >
              <Link to="/order">
                Order
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

MobileCTA.displayName = 'MobileCTA';

export default MobileCTA;
