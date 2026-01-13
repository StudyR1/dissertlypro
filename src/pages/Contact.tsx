import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Let's Discuss Your Research
            </h1>
            <p className="text-xl text-primary-foreground/80 font-sans leading-relaxed">
              Have questions about our services? Ready to get started? We're here to help you 
              navigate your postgraduate journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl border border-border p-8 shadow-card">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
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
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
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
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-gold">
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
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button variant="copper" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                  Our academic advisors are available to answer your questions and provide guidance 
                  on the best support options for your research needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:support@dissertlypro.com" className="text-muted-foreground hover:text-copper transition-colors font-sans">
                      support@dissertlypro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+1-800-555-0199" className="text-muted-foreground hover:text-gold transition-colors font-sans">
                      +1 (800) 555-0199
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground font-sans">
                      24/7 Support Available<br />
                      <span className="text-sm">Response within 24 hours</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground font-sans">
                      Available Worldwide<br />
                      <span className="text-sm">Serving students in 50+ countries</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <MessageSquare className="h-8 w-8 text-gold mb-4" />
                <h3 className="font-serif font-semibold text-lg mb-2">
                  Ready for a Consultation?
                </h3>
                <p className="text-primary-foreground/80 font-sans text-sm mb-4">
                  Book a free consultation to discuss your specific research needs with an academic advisor.
                </p>
                <Button variant="hero" size="sm" asChild>
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
