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
    // Strict singleton — block any duplicate registration (HMR, double-mount, race)
    if (window.__tawkLoaded || scriptLoadedRef.current || document.querySelector('script[src*="embed.tawk.to"]')) {
      window.__tawkLoaded = true;
      scriptLoadedRef.current = true;
      setIsTawkLoaded(true);
      return;
    }

    // Reserve the slot SYNCHRONOUSLY before any async work to prevent a second
    // visitor session being registered if the effect ever runs concurrently.
    window.__tawkLoaded = true;
    scriptLoadedRef.current = true;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Auto-open the chat panel once per browser session.
    const autoOpenIfFirstVisit = () => {
      try {
        const alreadyOpened = sessionStorage.getItem('tawk_auto_opened');
        if (alreadyOpened) {
          window.Tawk_API?.showWidget?.();
          return;
        }
        sessionStorage.setItem('tawk_auto_opened', '1');

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        window.Tawk_API?.showWidget?.();

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

    window.Tawk_API.onLoad = () => {
      setIsTawkLoaded(true);
      autoOpenIfFirstVisit();
    };

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/696896ba7c9eed197f687351/1jf08piv9';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    script.setAttribute('data-tawk-singleton', '1');

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);

    const timeout = setTimeout(() => {
      setIsTawkLoaded(true);
      autoOpenIfFirstVisit();
    }, 3500);

    return () => {
      clearTimeout(timeout);
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

  // Native Tawk.to widget is the sole floating chat launcher (no custom overlay button).
  void openChat;
  return null;
});

FloatingCTA.displayName = 'FloatingCTA';

export default FloatingCTA;
