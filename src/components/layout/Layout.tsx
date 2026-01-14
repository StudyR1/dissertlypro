import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileCTA from "./MobileCTA";
import { 
  ExitIntentPopup, 
  FloatingCTA, 
  SocialProofNotification 
} from "@/components/cro";
import { 
  ReadingModeToggle, 
  NightOwlTheme, 
  WordCountCalculator 
} from "@/components/features";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col text-size-adjust-none">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      
      {/* CRO Components */}
      <ExitIntentPopup />
      <FloatingCTA />
      <SocialProofNotification />
      
      {/* Unique Features */}
      <ReadingModeToggle />
      <NightOwlTheme />
      <WordCountCalculator />
      
      {/* Mobile CTA Bar */}
      <MobileCTA />
    </div>
  );
};

export default Layout;
