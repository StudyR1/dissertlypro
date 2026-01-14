import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Database, Globe, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const Privacy = () => {
  const lastUpdated = "January 1, 2025";

  return (
    <Layout>
      <SEO 
        title="Privacy Policy"
        description="DissertlyPro's privacy policy explains how we collect, use, and protect your personal information. Your privacy and data security are our top priorities."
        canonical="/privacy"
        keywords={['privacy policy', 'data protection', 'confidentiality', 'GDPR']}
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-midnight-rich to-midnight relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-copper-light" />
              <span className="text-sm font-sans text-white/80">Your Privacy Matters</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Privacy Policy
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
            {/* Quick Summary */}
            <div className="bg-cream-warm rounded-2xl p-6 sm:p-8 mb-12">
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Privacy at a Glance</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Lock, text: "Your data is encrypted and secure" },
                  { icon: Eye, text: "We never sell your information" },
                  { icon: Database, text: "Minimal data collection policy" },
                  { icon: Globe, text: "GDPR and CCPA compliant" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-copper/10">
                      <Icon className="h-4 w-4 text-copper" />
                    </div>
                    <span className="text-sm font-sans text-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Policy Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-10">
                <section>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    DissertlyPro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. We understand the sensitive nature of academic work and take additional measures to ensure complete confidentiality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-4">We collect information that you provide directly to us:</p>
                  <ul className="space-y-2 text-muted-foreground font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span><strong>Account Information:</strong> Name, email address, phone number, and academic institution (optional)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span><strong>Project Information:</strong> Research topics, draft documents, and academic requirements you share with us</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span><strong>Payment Information:</strong> Billing details processed securely through our payment providers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span><strong>Communications:</strong> Messages exchanged through our platform with your assigned expert</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-4">We use the information we collect to:</p>
                  <ul className="space-y-2 text-muted-foreground font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Provide, maintain, and improve our services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Match you with appropriate subject-matter experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Process transactions and send related information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Send you technical notices and support messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Respond to your comments and questions</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Information Sharing</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="space-y-2 text-muted-foreground font-sans mt-4">
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span><strong>With Experts:</strong> Only the information necessary to provide your requested services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span><strong>Service Providers:</strong> Trusted third parties who assist in operating our platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span><strong>Legal Requirements:</strong> When required by law or to protect our rights</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits. All research documents and personal communications are stored with enterprise-grade encryption. Access to your data is strictly limited to authorized personnel only.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-4">You have the right to:</p>
                  <ul className="space-y-2 text-muted-foreground font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Access, update, or delete your personal information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Opt out of marketing communications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Request a copy of your data in a portable format</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-copper mt-1">•</span>
                      <span>Withdraw consent at any time</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">7. Cookies</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Essential cookies required for basic functionality cannot be disabled.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">8. Contact Us</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-copper/10">
                        <Mail className="h-5 w-5 text-copper" />
                      </div>
                      <div>
                        <p className="font-sans font-medium text-foreground">Privacy Team</p>
                        <a href="mailto:privacy@dissertlypro.com" className="text-copper hover:underline font-sans">
                          privacy@dissertlypro.com
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground font-sans mb-4">Related policies:</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/terms" className="text-copper hover:underline font-sans text-sm">Terms of Service</Link>
                <Link to="/gdpr" className="text-copper hover:underline font-sans text-sm">GDPR Compliance</Link>
                <Link to="/ethics" className="text-copper hover:underline font-sans text-sm">Academic Integrity</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
