import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie, X, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const rejectOptional = () => {
    const minimal = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('cookie-consent', JSON.stringify(minimal));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
            {/* Main Banner */}
            <div className="p-4 md:p-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Cookie className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        We value your privacy
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                        By clicking "Accept All", you consent to our use of cookies. 
                        Read our{' '}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link to="/gdpr" className="text-primary hover:underline">
                          GDPR Policy
                        </Link>.
                      </p>
                    </div>
                    <button
                      onClick={rejectOptional}
                      className="shrink-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Dismiss"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Preferences Panel */}
                  <AnimatePresence>
                    {showPreferences && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-border space-y-3">
                          <label className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div>
                              <span className="font-medium text-foreground">Necessary</span>
                              <p className="text-xs text-muted-foreground">Required for the site to function</p>
                            </div>
                            <input
                              type="checkbox"
                              checked={preferences.necessary}
                              disabled
                              className="h-5 w-5 rounded accent-primary"
                            />
                          </label>
                          
                          <label className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors">
                            <div>
                              <span className="font-medium text-foreground">Analytics</span>
                              <p className="text-xs text-muted-foreground">Help us improve our website</p>
                            </div>
                            <input
                              type="checkbox"
                              checked={preferences.analytics}
                              onChange={(e) => setPreferences(p => ({ ...p, analytics: e.target.checked }))}
                              className="h-5 w-5 rounded accent-primary cursor-pointer"
                            />
                          </label>
                          
                          <label className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors">
                            <div>
                              <span className="font-medium text-foreground">Marketing</span>
                              <p className="text-xs text-muted-foreground">Personalized offers and content</p>
                            </div>
                            <input
                              type="checkbox"
                              checked={preferences.marketing}
                              onChange={(e) => setPreferences(p => ({ ...p, marketing: e.target.checked }))}
                              className="h-5 w-5 rounded accent-primary cursor-pointer"
                            />
                          </label>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button
                      onClick={acceptAll}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Accept All
                    </Button>
                    
                    {showPreferences ? (
                      <Button
                        onClick={acceptSelected}
                        variant="outline"
                      >
                        Save Preferences
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setShowPreferences(true)}
                        variant="outline"
                        className="gap-2"
                      >
                        <Settings className="h-4 w-4" />
                        Customize
                      </Button>
                    )}
                    
                    <Button
                      onClick={rejectOptional}
                      variant="ghost"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Reject Optional
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
