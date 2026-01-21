import { useEffect, useCallback } from 'react';

/**
 * Mobile optimization hook for Core Web Vitals
 * - Handles touch events efficiently
 * - Debounces scroll handlers
 * - Manages passive event listeners
 */
export function useMobileOptimization() {
  // Detect if device is touch-capable
  const isTouchDevice = typeof window !== 'undefined' && 
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  // Debounced scroll handler for INP optimization
  const createDebouncedHandler = useCallback((fn: () => void, delay: number = 100) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fn, delay);
    };
  }, []);

  // Throttled scroll handler
  const createThrottledHandler = useCallback((fn: () => void, limit: number = 16) => {
    let inThrottle: boolean;
    return () => {
      if (!inThrottle) {
        fn();
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  useEffect(() => {
    // Add font loading optimization
    if (document.fonts) {
      document.documentElement.classList.add('font-loading');
      document.fonts.ready.then(() => {
        document.documentElement.classList.remove('font-loading');
        document.documentElement.classList.add('fonts-loaded');
      });
    }

    // Preload links on hover for faster navigation
    const preloadOnHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link?.href && !link.href.startsWith('#')) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'prefetch';
        preloadLink.href = link.href;
        document.head.appendChild(preloadLink);
      }
    };

    // Only add hover preloading on non-touch devices
    if (!isTouchDevice) {
      document.addEventListener('mouseover', preloadOnHover, { passive: true });
    }

    return () => {
      if (!isTouchDevice) {
        document.removeEventListener('mouseover', preloadOnHover);
      }
    };
  }, [isTouchDevice]);

  return {
    isTouchDevice,
    createDebouncedHandler,
    createThrottledHandler,
  };
}

/**
 * Hook for intersection-based lazy loading
 */
export function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: '100px',
      threshold: 0.1,
      ...options,
    });

    return () => observer.disconnect();
  }, [callback, options]);
}

/**
 * Viewport size hook optimized for SSR
 */
export function useViewportSize() {
  const getSize = () => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 640 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= 640 && window.innerWidth < 1024 : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : true,
  });

  return getSize();
}

export default useMobileOptimization;
