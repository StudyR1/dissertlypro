import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-lg border-t border-border p-4 animate-slide-up safe-area-bottom">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Need dissertation help?</p>
            <p className="text-xs text-muted-foreground">Free expert consultation</p>
          </div>
          <Button variant="copper" size="sm" asChild>
            <Link to="/consultation">
              Get Help
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Desktop Floating Button */}
      <div 
        className={cn(
          "fixed bottom-6 right-6 z-50 hidden md:block transition-all duration-300",
          isExpanded ? "w-80" : "w-auto"
        )}
      >
        {isExpanded ? (
          <div className="bg-card rounded-2xl shadow-elevated border border-border overflow-hidden animate-scale-in">
            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Collapse"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-5">
              <h4 className="font-serif font-semibold text-foreground mb-2">
                Need Help With Your Research?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Our PhD experts are ready to guide you through your dissertation journey.
              </p>
              <Button variant="copper" size="sm" className="w-full" asChild>
                <Link to="/consultation">
                  Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <button
                onClick={handleDismiss}
                className="w-full text-xs text-muted-foreground hover:text-foreground mt-3 transition-colors"
              >
                Don't show again
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-3 bg-copper hover:bg-copper-dark text-white rounded-full pl-5 pr-6 py-3.5 shadow-copper transition-all duration-300 hover:scale-105 group"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-sans font-medium">Get Expert Help</span>
          </button>
        )}
      </div>
    </>
  );
};

export default FloatingCTA;
