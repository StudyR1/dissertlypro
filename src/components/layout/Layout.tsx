import { ReactNode, memo, Suspense, lazy } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Lazy load non-critical CRO components to prevent blocking page loads
const FloatingCTA = lazy(() => import("@/components/cro/FloatingCTA"));
const FloatingWhatsApp = lazy(() => import("@/components/cro/FloatingWhatsApp"));
const MobileCTA = lazy(() => import("./MobileCTA"));

// Lazy load feature components
const NightOwlTheme = lazy(() => import("@/components/features/NightOwlTheme"));

interface LayoutProps {
  children: ReactNode;
}

// Memoize the Layout to prevent unnecessary re-renders
const Layout = memo(({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col text-size-adjust-none">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      
      {/* Lazy-loaded CRO Components - won't block initial page render */}
      <Suspense fallback={null}>
        <FloatingCTA />
        <FloatingWhatsApp />
      </Suspense>
      
      {/* Lazy-loaded Feature Components */}
      <Suspense fallback={null}>
        <NightOwlTheme />
      </Suspense>
      
      {/* Mobile CTA Bar */}
      <Suspense fallback={null}>
        <MobileCTA />
      </Suspense>
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;
