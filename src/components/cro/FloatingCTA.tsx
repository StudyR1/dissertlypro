import { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
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
  }
}

const FloatingCTA = () => {
  const [isTawkLoaded, setIsTawkLoaded] = useState(false);

  useEffect(() => {
    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Set callback for when Tawk loads - hide the default widget
    window.Tawk_API.onLoad = () => {
      setIsTawkLoaded(true);
      // Hide the default Tawk.to widget button
      if (window.Tawk_API?.hideWidget) {
        window.Tawk_API.hideWidget();
      }
    };

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/696896ba7c9eed197f687351/1jf08piv9';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);

    // Fallback: set loaded after timeout and try to hide widget
    const timeout = setTimeout(() => {
      setIsTawkLoaded(true);
      if (window.Tawk_API?.hideWidget) {
        window.Tawk_API.hideWidget();
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
      script.remove();
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

      {/* Hide Tawk.to default button with aggressive CSS */}
      <style>{`
        /* Hide Tawk.to default widget button everywhere */
        iframe[title="chat widget"],
        iframe[src*="tawk.to"]:not(.tawk-chat-panel),
        .widget-visible,
        #tawk-default-container,
        .tawk-min-container,
        .tawk-button-circle,
        div[class*="widget-visible"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        /* But show the chat window when opened */
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
};

export default FloatingCTA;
