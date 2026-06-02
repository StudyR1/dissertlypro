import { useState, useEffect, useRef, memo } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
      onLoad?: () => void;
      hideWidget?: () => void;
      showWidget?: () => void;
      isChatMaximized?: () => boolean;
    };
    Tawk_LoadStart?: Date;
    __tawkLoaded?: boolean;
  }
}

const FloatingCTA = memo(() => {
  const [isTawkLoaded, setIsTawkLoaded] = useState(false);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent duplicate script loading across navigations
    if (window.__tawkLoaded || scriptLoadedRef.current) {
      setIsTawkLoaded(true);
      return;
    }

    scriptLoadedRef.current = true;
    
    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Auto-open the chat panel once per browser session.
    // Mobile users get a softer experience: widget appears but we only
    // auto-maximize after 8s of dwell + meaningful scroll, and we bail
    // entirely if they're actively interacting with a form/CTA.
    const autoOpenIfFirstVisit = () => {
      try {
        const alreadyOpened = sessionStorage.getItem('tawk_auto_opened');
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        // Always show the widget so the user can tap it themselves
        window.Tawk_API?.showWidget?.();
        if (alreadyOpened) return;
        sessionStorage.setItem('tawk_auto_opened', '1');

        if (!isMobile) {
          setTimeout(() => window.Tawk_API?.maximize?.(), 400);
          return;
        }

        // Mobile: wait for dwell + scroll, skip if user is typing
        let scrolled = false;
        let cancelled = false;
        const onScroll = () => {
          if (window.scrollY > 400) scrolled = true;
        };
        const onInteract = (e: Event) => {
          const target = e.target as HTMLElement | null;
          if (target && target.closest('input, textarea, select, button, a')) {
            cancelled = true;
          }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('touchstart', onInteract, { passive: true, capture: true });

        setTimeout(() => {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('touchstart', onInteract, { capture: true } as EventListenerOptions);
          if (cancelled || !scrolled) return;
          window.Tawk_API?.maximize?.();
        }, 8000);
      } catch {
        window.Tawk_API?.showWidget?.();
      }
    };

    // Set callback for when Tawk loads
    window.Tawk_API.onLoad = () => {
      window.__tawkLoaded = true;
      setIsTawkLoaded(true);
      autoOpenIfFirstVisit();
    };

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="tawk.to"]');
    if (existingScript) {
      setIsTawkLoaded(true);
      autoOpenIfFirstVisit();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/696896ba7c9eed197f687351/1jf08piv9';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);

    // Fallback: set loaded after timeout and try to auto-open
    const timeout = setTimeout(() => {
      window.__tawkLoaded = true;
      setIsTawkLoaded(true);
      autoOpenIfFirstVisit();
    }, 3500);


    return () => {
      clearTimeout(timeout);
      // Don't remove script on unmount - keep it for subsequent navigations
    };
  }, []);

  const openChat = () => {
    // Show widget first, then maximize
    if (window.Tawk_API?.showWidget) {
      window.Tawk_API.showWidget();
    }
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <>
      {/* Desktop Floating Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 1.5,
          }}
          onClick={openChat}
          className="relative flex items-center gap-3 bg-gradient-to-r from-copper to-copper-dark text-white rounded-full pl-5 pr-6 py-4 shadow-copper group overflow-hidden"
        >
          {/* Shimmer effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-copper/30 opacity-75" style={{ animationDuration: '2s' }} />
          
          <span className="relative flex items-center justify-center h-8 w-8 rounded-full bg-white/20">
            <MessageCircle className="h-5 w-5" />
          </span>
          <span className="relative font-sans font-semibold">Chat with Expert</span>
          
          {/* Online indicator */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </motion.button>
      </div>

      {/* Allow Tawk.to native widget to render so it can auto-open on first visit */}
      <style>{`
        iframe.tawk-chat-panel,
        .tawk-chat-panel {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
        }
      `}</style>

    </>
  );
});

FloatingCTA.displayName = 'FloatingCTA';

export default FloatingCTA;
