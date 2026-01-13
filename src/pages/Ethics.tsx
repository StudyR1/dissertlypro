import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { 
  ArrowRight, 
  Shield, 
  Lock, 
  FileCheck, 
  Eye, 
  Scale, 
  Heart,
  CheckCircle
} from "lucide-react";

const Ethics = () => {
  return (
    <Layout>
      <SEO 
        title="Ethics & Academic Integrity"
        description="Our commitment to academic integrity and ethical research support. Plagiarism-free guarantee, confidentiality policy, and GDPR-compliant data protection for all students."
        canonical="/ethics"
        keywords={['academic integrity', 'plagiarism free', 'ethical research', 'confidential dissertation help', 'legitimate academic support']}
      />
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Ethics & Integrity
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Our Commitment to Academic Integrity
            </h1>
            <p className="text-xl text-primary-foreground/80 font-sans leading-relaxed">
              We operate with the highest ethical standards, providing legitimate academic support 
              that helps you develop as a researcher while maintaining complete integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                What We Do (And Don't Do)
              </h2>
              <p className="text-muted-foreground font-sans text-lg">
                Understanding the boundaries of academic support services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What We Do */}
              <div className="bg-card rounded-xl border border-border p-8 shadow-subtle">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 text-success mb-6">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  What We Do
                </h3>
                <ul className="space-y-3">
                  {[
                    "Provide expert guidance and mentorship",
                    "Offer feedback on your original work",
                    "Help you understand complex concepts",
                    "Teach research and writing skills",
                    "Assist with editing and proofreading",
                    "Guide you through methodology design",
                    "Support data analysis interpretation",
                    "Help you respond to supervisor feedback",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground font-sans text-sm">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Don't Do */}
              <div className="bg-card rounded-xl border border-border p-8 shadow-subtle">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive mb-6">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Our Boundaries
                </h3>
                <ul className="space-y-3">
                  {[
                    "We don't complete assignments for submission",
                    "We don't guarantee specific grades",
                    "We don't misrepresent our services",
                    "We don't encourage academic dishonesty",
                    "We don't provide work without guidance",
                    "We don't replace the learning process",
                    "We don't bypass institutional requirements",
                    "We don't share client information",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground font-sans text-sm">
                      <div className="h-4 w-4 rounded-full border-2 border-destructive flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-28 bg-ivory-warm">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Our Four Pillars of Integrity
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Plagiarism-Free Guarantee",
                  description: "All work we assist with undergoes rigorous originality checks. We help you develop original ideas and express them in your own voice, never providing pre-written content.",
                },
                {
                  icon: Lock,
                  title: "Complete Confidentiality",
                  description: "Your identity, research topics, and all communications are completely confidential. We use encrypted systems and never share client information with third parties.",
                },
                {
                  icon: Eye,
                  title: "Transparent Processes",
                  description: "We're upfront about what our services include and how they work. There are no hidden terms or surprise limitations. What you see is what you get.",
                },
                {
                  icon: Heart,
                  title: "Your Development First",
                  description: "Our goal is to help you become a better researcher, not to create dependency. We teach skills and provide guidance that will serve you throughout your academic career.",
                },
              ].map((pillar, index) => (
                <div key={index} className="bg-card rounded-xl border border-border p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold mb-4">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Lock className="h-12 w-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Data Protection & Privacy
            </h2>
            <p className="text-muted-foreground font-sans text-lg mb-8">
              We take your privacy seriously. Your personal information and research materials 
              are protected by industry-standard encryption and strict access controls.
            </p>
            <div className="bg-card rounded-xl border border-border p-8 text-left">
              <ul className="space-y-4">
                {[
                  "All data is encrypted in transit and at rest",
                  "We never share your information with third parties",
                  "Your documents are securely deleted upon request",
                  "We comply with GDPR and international privacy standards",
                  "Access to your files is strictly limited to assigned experts",
                  "Regular security audits ensure ongoing protection",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground font-sans">
                    <FileCheck className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Questions About Our Ethics?
            </h2>
            <p className="text-primary-foreground/70 font-sans text-lg mb-8">
              We're happy to discuss our approach to academic integrity and answer any 
              questions you may have about our services.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ethics;
