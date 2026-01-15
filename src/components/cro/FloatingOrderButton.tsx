import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile Bottom Bar */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border safe-area-bottom"
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
                <Link to="/order">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Order Now
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Desktop Floating Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 hidden lg:block"
          >
            <Button
              variant="copper"
              size="lg"
              className="shadow-copper hover:scale-105 transition-transform group"
              asChild
            >
              <Link to="/order">
                <ShoppingCart className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                Order Now
              </Link>
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingOrderButton;
