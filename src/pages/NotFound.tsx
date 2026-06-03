import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Home, MessageCircle, Compass, GraduationCap, BookOpen, FileText, Search } from "lucide-react";

const pillarLinks = [
  { to: "/phd-dissertation-writing-services", label: "PhD Dissertation Writing", icon: GraduationCap, desc: "End-to-end PhD support" },
  { to: "/masters-dissertation-writing-services", label: "Master's Dissertation Writing", icon: BookOpen, desc: "Thesis & chapter help" },
  { to: "/dissertation-proposal-writing-services", label: "Proposal Writing", icon: FileText, desc: "Approved-first-time proposals" },
  { to: "/mba-dissertation-writing-services", label: "MBA Dissertation", icon: GraduationCap, desc: "Strategy & business research" },
  { to: "/medical-dissertation-writing-services", label: "Medical Dissertation", icon: BookOpen, desc: "Clinical & nursing topics" },
  { to: "/capstone-dissertation-writing-services", label: "Capstone Projects", icon: FileText, desc: "DNP, EdD & professional doctorates" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const waLink = "https://wa.me/18126905122?text=Hi!%20I%20landed%20on%20a%20missing%20page%20and%20need%20help%20with%20my%20dissertation.";

  return (
    <Layout>
      <SEO
        title="Page Not Found"
        description="That page has moved. Find the dissertation, thesis, or proposal support you need — or talk to a PhD expert in minutes."
        noindex={true}
      />
      <section className="bg-gradient-to-b from-background to-cream-rich/40 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-7xl md:text-8xl font-serif font-bold text-copper/25 mb-3">404</div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              This page wandered off — but your research doesn't have to.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-sans mb-8 max-w-2xl mx-auto">
              The page you're looking for has moved or never existed. If you're a Master's or PhD candidate searching for help,
              jump straight to the resource that fits your stage below, or speak with an expert now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="copper" size="lg" asChild>
                <Link to="/consultation">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Get Expert Help — Free
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp a PhD Expert
                </a>
              </Button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-5 text-sm font-semibold uppercase tracking-wider text-copper">
              <Compass className="h-4 w-4" />
              Popular destinations for postgraduate students
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillarLinks.map(({ to, label, icon: Icon, desc }) => (
                <Link
                  key={to}
                  to={to}
                  className="group rounded-xl border border-border bg-card hover:border-copper hover:shadow-card p-5 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-copper/10 text-copper p-2 group-hover:bg-copper group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-serif font-semibold text-foreground group-hover:text-copper transition-colors">
                        {label}
                      </div>
                      <div className="text-sm text-muted-foreground mt-0.5">{desc}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 rounded-xl bg-card border border-border p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-1">Still can't find it?</h2>
                  <p className="text-sm text-muted-foreground">
                    Browse the full site, search by keyword, or head back home.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="midnight-outline" size="sm" asChild>
                    <Link to="/"><Home className="h-4 w-4 mr-1.5" />Home</Link>
                  </Button>
                  <Button variant="midnight-outline" size="sm" asChild>
                    <Link to="/search"><Search className="h-4 w-4 mr-1.5" />Search</Link>
                  </Button>
                  <Button variant="midnight-outline" size="sm" asChild>
                    <Link to="/services">All Services</Link>
                  </Button>
                  <Button variant="midnight-outline" size="sm" asChild>
                    <Link to="/resources">Resources</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
