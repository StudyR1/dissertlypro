import { useState, useEffect, useCallback } from 'react';
import { X, Gift, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ExitIntentPopupProps {
  delay?: number; // Delay in ms before enabling exit intent detection
}

const ExitIntentPopup = ({ delay = 5000 }: ExitIntentPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger when mouse moves to top of viewport (likely leaving)
    if (e.clientY <= 5 && !hasTriggered) {
      // Check if already dismissed in this session
      const dismissed = sessionStorage.getItem('exitPopupDismissed');
      if (!dismissed) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    }
  }, [hasTriggered]);

  useEffect(() => {
    // Don't show on mobile devices
    if (window.innerWidth < 768) return;

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, delay);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [delay, handleMouseLeave]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('exitPopupDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="relative bg-card rounded-2xl shadow-elevated max-w-lg w-full overflow-hidden animate-scale-in">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Decorative top bar */}
        <div className="h-1.5 bg-gradient-to-r from-copper via-copper-light to-copper" />

        <div className="p-8 pt-6">
          {/* Icon */}
          <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-copper/10 text-copper mb-6 mx-auto">
            <Gift className="h-8 w-8" />
          </div>

          {/* Content */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
              Wait! Don't Leave Yet
            </h3>
            <p className="text-muted-foreground font-sans mb-6">
              Get a <span className="text-copper font-semibold">free consultation</span> with one of our PhD experts. 
              No commitment required—just personalized guidance for your research journey.
            </p>

            {/* Urgency */}
            <div className="inline-flex items-center gap-2 text-sm text-copper bg-copper/10 rounded-full px-4 py-2 mb-6">
              <Clock className="h-4 w-4" />
              <span>Limited spots available this week</span>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Button variant="copper" size="lg" className="w-full" asChild>
                <Link to="/consultation" onClick={handleClose}>
                  Claim Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <button
                onClick={handleClose}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                No thanks, I'll figure it out myself
              </button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
            <span>✓ 100% Confidential</span>
            <span>✓ No Obligations</span>
            <span>✓ 24hr Response</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
