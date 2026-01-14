import { Link } from "react-router-dom";
import { FileText, AlertCircle, CheckCircle, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const Terms = () => {
  const lastUpdated = "January 1, 2025";

  return (
    <Layout>
      <SEO 
        title="Terms of Service"
        description="Review DissertlyPro's terms of service governing the use of our academic support platform. Understand your rights and responsibilities as a user."
        canonical="/terms"
        keywords={['terms of service', 'user agreement', 'academic support terms']}
      />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-midnight-rich to-midnight relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6">
              <FileText className="h-4 w-4 text-copper-light" />
              <span className="text-sm font-sans text-white/80">Legal Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Terms of Service
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
            {/* Important Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-amber-100">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-lg font-serif font-bold text-amber-900 mb-2">Important Notice</h2>
                  <p className="text-amber-800 font-sans text-sm leading-relaxed">
                    By using DissertlyPro's services, you agree to these Terms of Service. Please read them carefully before proceeding. If you do not agree with any part of these terms, you may not use our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Content */}
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  By accessing or using the DissertlyPro website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. These terms constitute a legally binding agreement between you and DissertlyPro.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  DissertlyPro provides academic support services exclusively for postgraduate students, including but not limited to:
                </p>
                <ul className="space-y-2 text-muted-foreground font-sans">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-copper mt-1 shrink-0" />
                    <span>Research guidance and methodology consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-copper mt-1 shrink-0" />
                    <span>Dissertation and thesis development support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-copper mt-1 shrink-0" />
                    <span>Data analysis and statistical consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-copper mt-1 shrink-0" />
                    <span>Editing and proofreading services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-copper mt-1 shrink-0" />
                    <span>Literature review assistance</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">As a user of our services, you agree to:</p>
                <ul className="space-y-2 text-muted-foreground font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>Provide accurate and complete information about yourself and your academic requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>Use our services for legitimate educational purposes only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>Maintain the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>Comply with your institution's academic integrity policies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>Communicate respectfully with our team and experts</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Academic Integrity</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  DissertlyPro is committed to supporting academic integrity. Our services are designed to provide guidance, feedback, and educational support to help you develop your research skills. The work produced with our assistance should be used as a learning tool and reference material. You are responsible for ensuring that your use of our services complies with your institution's academic policies and honor codes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">Payment terms include:</p>
                <ul className="space-y-2 text-muted-foreground font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>All prices are quoted in USD unless otherwise specified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>Payment is due according to the agreed-upon schedule (upfront or milestone-based)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>Refunds are subject to our refund policy detailed below</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper mt-1">•</span>
                    <span>Late payments may result in service suspension</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">6. Refund Policy</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  We offer refunds under the following conditions: full refund if you cancel before work begins; partial refund based on work completed if you cancel mid-project; and full refund if we fail to deliver according to agreed specifications. Refund requests must be submitted within 14 days of service completion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Upon full payment, you receive full ownership rights to the work produced for you. However, we retain the right to use anonymized examples for training and quality assurance purposes. You may not resell or redistribute the work to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  DissertlyPro shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">9. Modifications to Terms</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to the website. Your continued use of our services after any changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-copper/10">
                      <Mail className="h-5 w-5 text-copper" />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-foreground">Legal Team</p>
                      <a href="mailto:legal@dissertlypro.com" className="text-copper hover:underline font-sans">
                        legal@dissertlypro.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Related Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground font-sans mb-4">Related policies:</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/privacy" className="text-copper hover:underline font-sans text-sm">Privacy Policy</Link>
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

export default Terms;
