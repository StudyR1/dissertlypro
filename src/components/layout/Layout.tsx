import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileCTA from "./MobileCTA";
import { 
  ExitIntentPopup, 
  FloatingCTA, 
  SocialProofNotification 
} from "@/components/cro";

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
      
      {/* Mobile CTA Bar */}
      <MobileCTA />
    </div>
  );
};

export default Layout;
