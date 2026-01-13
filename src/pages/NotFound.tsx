import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO 
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to DissertlyPro homepage for dissertation and thesis support."
        noindex={true}
      />
      <section className="min-h-[70vh] flex items-center justify-center bg-background">
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <div className="text-8xl font-serif font-bold text-copper/20 mb-4">404</div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Page Not Found</h1>
            <p className="text-muted-foreground font-sans mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="copper" asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Return Home
                </Link>
              </Button>
              <Button variant="midnight-outline" asChild>
                <Link to="/services">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;