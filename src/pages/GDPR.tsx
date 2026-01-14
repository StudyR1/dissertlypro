import { Link } from "react-router-dom";
import { Shield, Globe, UserCheck, Database, Lock, FileText, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const GDPR = () => {
  const lastUpdated = "January 1, 2025";

  const rights = [
    {
      icon: UserCheck,
      title: "Right to Access",
      description: "You can request a copy of all personal data we hold about you."
    },
    {
      icon: FileText,
      title: "Right to Rectification",
      description: "You can request correction of inaccurate or incomplete data."
    },
    {
      icon: Database,
      title: "Right to Erasure",
      description: "You can request deletion of your personal data under certain conditions."
    },
    {
      icon: Lock,
      title: "Right to Restrict Processing",
      description: "You can request limitation of how we process your data."
    },
    {
      icon: Globe,
      title: "Right to Data Portability",
      description: "You can request your data in a structured, machine-readable format."
    },
    {
      icon: Shield,
      title: "Right to Object",
      description: "You can object to processing based on legitimate interests or direct marketing."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="GDPR Compliance"
        description="Learn about DissertlyPro's GDPR compliance measures. We are committed to protecting your data rights under the General Data Protection Regulation."
        canonical="/gdpr"
        keywords={['GDPR', 'data protection', 'EU privacy', 'data rights']}
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-midnight-rich to-midnight relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6">
              <Globe className="h-4 w-4 text-copper-light" />
              <span className="text-sm font-sans text-white/80">EU Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              GDPR Compliance
            </h1>
            <p className="text-lg text-ivory font-sans">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Compliance Badge */}
            <div className="bg-gradient-to-r from-midnight-rich to-midnight rounded-2xl p-6 sm:p-8 mb-12 text-white">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="p-4 rounded-2xl bg-white/10">
                  <Shield className="h-10 w-10 text-copper-light" />
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold mb-2">Fully GDPR Compliant</h2>
                  <p className="text-ivory font-sans">
                    DissertlyPro is committed to protecting the privacy and security of our users in accordance with the General Data Protection Regulation (GDPR).
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Commitment to GDPR</h2>
              <p className="text-muted-foreground font-sans leading-relaxed">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that governs how organizations collect, process, and store personal data of individuals in the European Union. At DissertlyPro, we take GDPR compliance seriously and have implemented robust measures to ensure your data is handled with the utmost care and security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Your Data Rights</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Under GDPR, you have the following rights regarding your personal data:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {rights.map(({ icon: Icon, title, description }, index) => (
                  <div key={index} className="bg-card rounded-xl p-5 border border-border">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-copper/10 shrink-0">
                        <Icon className="h-5 w-5 text-copper" />
                      </div>
                      <div>
                        <h3 className="font-sans font-semibold text-foreground mb-1">{title}</h3>
                        <p className="text-sm text-muted-foreground font-sans">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Processing */}
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Legal Basis for Processing</h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  We process your personal data based on the following legal grounds:
                </p>
                <ul className="space-y-3 text-muted-foreground font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span><strong>Contractual Necessity:</strong> Processing required to fulfill our service agreement with you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span><strong>Consent:</strong> Where you have explicitly agreed to specific processing activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span><strong>Legitimate Interests:</strong> For purposes that are reasonably expected and have minimal privacy impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span><strong>Legal Obligation:</strong> Where we are required by law to process certain data</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Data Protection Measures</h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  We implement comprehensive security measures to protect your data:
                </p>
                <ul className="space-y-3 text-muted-foreground font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>End-to-end encryption for all data transmission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>AES-256 encryption for data at rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>Regular security audits and penetration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>Strict access controls and authentication protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>Employee training on data protection best practices</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Data Retention</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, typically for the duration of our service relationship plus a reasonable period thereafter. Project documents are retained for 12 months after completion unless you request earlier deletion. Account data is retained until you request account closure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">International Data Transfers</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  When we transfer personal data outside the European Economic Area (EEA), we ensure adequate protection through Standard Contractual Clauses approved by the European Commission, data processing agreements with all third-party processors, and verification that recipients maintain equivalent data protection standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Data Protection Officer</h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. You can contact our DPO for any data protection inquiries:
                </p>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-copper/10">
                      <Mail className="h-5 w-5 text-copper" />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-foreground">Data Protection Officer</p>
                      <a href="mailto:dpo@dissertlypro.com" className="text-copper hover:underline font-sans">
                        dpo@dissertlypro.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Exercising Your Rights</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  To exercise any of your GDPR rights, please contact us at privacy@dissertlypro.com. We will respond to your request within 30 days. You also have the right to lodge a complaint with your local supervisory authority if you believe your data protection rights have been violated.
                </p>
              </section>
            </div>

            {/* Related Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground font-sans mb-4">Related policies:</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/privacy" className="text-copper hover:underline font-sans text-sm">Privacy Policy</Link>
                <Link to="/terms" className="text-copper hover:underline font-sans text-sm">Terms of Service</Link>
                <Link to="/ethics" className="text-copper hover:underline font-sans text-sm">Academic Integrity</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GDPR;
