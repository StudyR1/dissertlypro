import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <SEO 
        title="Contact Us"
        description="Get in touch with DissertlyPro for dissertation and thesis support. Available worldwide with 24/7 email support and flexible consultation scheduling."
        canonical="/contact"
        keywords={['contact dissertation help', 'thesis support contact', 'academic help inquiry', 'dissertation consultation', 'PhD support contact', 'research assistance contact']}
      />

      {/* Breadcrumbs */}
      <div className="bg-midnight-rich">
        <div className="container px-4 sm:px-6">
          <Breadcrumbs className="text-white/60" />
        </div>
      </div>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-12 sm:py-16 lg:py-28">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4 sm:mb-6">
              Let's Discuss Your Research
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-ivory font-sans leading-relaxed">
              Have questions about our services? Ready to get started? We're here to help you 
              navigate your postgraduate journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-28 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl border border-border p-5 sm:p-6 lg:p-8 shadow-card order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-4 sm:mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold text-base"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold text-base"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-gold text-base">
                    <option value="">Select a topic</option>
                    <option value="services">Question about services</option>
                    <option value="pricing">Pricing inquiry</option>
                    <option value="partnership">Partnership opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none text-base"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button variant="copper" size="lg" className="w-full h-12 touch-manipulation">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-4 sm:mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground font-sans text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  Our academic advisors are available to answer your questions and provide guidance 
                  on the best support options for your research needs.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Email</h3>
                    <a href="mailto:support@dissertlypro.com" className="text-muted-foreground hover:text-copper transition-colors font-sans text-xs sm:text-sm truncate block">
                      support@dissertlypro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Phone</h3>
                    <a href="tel:+18126905122" className="text-muted-foreground hover:text-gold transition-colors font-sans text-xs sm:text-sm">
                      +1 (812) 690-5122
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">WhatsApp</h3>
                    <a href="https://wa.me/18126905122" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors font-sans text-xs sm:text-sm">
                      +1 (812) 690-5122
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Hours</h3>
                    <p className="text-muted-foreground font-sans text-xs sm:text-sm">
                      24/7 Support Available
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Location</h3>
                    <p className="text-muted-foreground font-sans text-xs sm:text-sm">
                      Available Worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-primary rounded-xl p-5 sm:p-6 text-primary-foreground">
                <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-gold mb-3 sm:mb-4" />
                <h3 className="font-serif font-semibold text-base sm:text-lg mb-2">
                  Ready for a Consultation?
                </h3>
                <p className="text-ivory font-sans text-xs sm:text-sm mb-4">
                  Book a free consultation to discuss your specific research needs with an academic advisor.
                </p>
                <Button variant="hero" size="sm" className="touch-manipulation" asChild>
                  <Link to="/consultation">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
