import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      
      {/* CRO Components */}
      <ExitIntentPopup />
      <FloatingCTA />
      <SocialProofNotification />
    </div>
  );
};

export default Layout;
