import { useState } from "react";
import { Calculator, FileText, Clock, GraduationCap, ArrowRight, Sparkles, Shield, Users, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ToolSchema from "@/components/schemas/ToolSchema";
import FAQSchema from "@/components/schemas/FAQSchema";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";

const academicLevels = [
  { value: "undergraduate", label: "Undergraduate", multiplier: 1, description: "Bachelor's level" },
  { value: "masters", label: "Master's", multiplier: 1.3, description: "Postgraduate level" },
  { value: "phd", label: "PhD / Doctoral", multiplier: 1.6, description: "Doctoral research" },
];

const serviceTypes = [
  { value: "dissertation", label: "Full Dissertation", basePrice: 45, perPage: true, description: "Complete dissertation writing" },
  { value: "chapter", label: "Single Chapter", basePrice: 40, perPage: true, description: "Individual chapter support" },
  { value: "proposal", label: "Research Proposal", basePrice: 42, perPage: true, description: "Proposal development" },
  { value: "editing", label: "Editing & Proofreading", basePrice: 18, perPage: true, description: "Academic editing" },
  { value: "statistics", label: "Statistical Analysis", basePrice: 350, perPage: false, description: "SPSS, R, STATA analysis" },
  { value: "consultation", label: "Consultation (1hr)", basePrice: 85, perPage: false, description: "Expert guidance session" },
];

const urgencyLevels = [
  { value: "standard", label: "Standard", days: "14+ days", multiplier: 1, discount: "Best Value" },
  { value: "priority", label: "Priority", days: "7-13 days", multiplier: 1.25, discount: null },
  { value: "express", label: "Express", days: "3-6 days", multiplier: 1.5, discount: null },
  { value: "urgent", label: "Urgent", days: "1-2 days", multiplier: 2, discount: "Limited Availability" },
];

const faqs = [
  {
    question: "How accurate is this quote estimate?",
    answer: "This calculator provides a range estimate based on typical project parameters. Final pricing depends on specific requirements like topic complexity, research depth, and special formatting needs. Book a free consultation for an exact quote."
  },
  {
    question: "What's included in the price?",
    answer: "All services include unlimited revisions within 30 days, plagiarism checking, proper formatting, and dedicated support. Dissertation writing includes research, drafting, and bibliography preparation."
  },
  {
    question: "Why does urgency affect pricing?",
    answer: "Rush orders require prioritizing your project and often working extended hours. Standard timelines allow for thorough research and multiple revision cycles, resulting in both better value and higher quality."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment options for larger projects. You can pay in installments tied to chapter deliveries or milestone completions. Discuss options during your free consultation."
  }
];

const QuoteCalculatorPage = () => {
  const [academicLevel, setAcademicLevel] = useState("masters");
  const [serviceType, setServiceType] = useState("dissertation");
  const [urgency, setUrgency] = useState("standard");
  const [pageCount, setPageCount] = useState([50]);

  const calculateQuote = () => {
    const level = academicLevels.find(l => l.value === academicLevel);
    const service = serviceTypes.find(s => s.value === serviceType);
    const urg = urgencyLevels.find(u => u.value === urgency);

    if (!level || !service || !urg) return { min: 0, max: 0 };

    let baseTotal = service.perPage 
      ? service.basePrice * pageCount[0] 
      : service.basePrice;
    
    const total = baseTotal * level.multiplier * urg.multiplier;
    
    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.1),
    };
  };

  const quote = calculateQuote();
  const selectedService = serviceTypes.find(s => s.value === serviceType);
  const selectedUrgency = urgencyLevels.find(u => u.value === urgency);

  return (
    <Layout>
      <SEO 
        title="Free Dissertation Quote Calculator | Instant Pricing Estimate"
        description="Get an instant quote for dissertation writing, editing, and research support. Free pricing calculator with no obligation. Transparent academic service pricing."
        keywords={["dissertation quote", "thesis pricing", "dissertation cost calculator", "academic writing prices", "dissertation help cost"]}
        canonical="https://dissertlypro.com/tools/quote-calculator"
      />
      <ToolSchema 
        name="Dissertation Quote Calculator"
        description="Free instant quote calculator for dissertation and thesis services. Get transparent pricing for writing, editing, and research support."
        url="https://dissertlypro.com/tools/quote-calculator"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Free Instant Quote
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Dissertation <span className="text-gradient-copper">Quote Calculator</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get an instant estimate for your dissertation support needs. Transparent pricing with no hidden fees.
            </p>
          </motion.div>

          {/* Main Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6">
                  {/* Academic Level */}
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2 mb-3">
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      Academic Level
                    </Label>
                    <Select value={academicLevel} onValueChange={setAcademicLevel}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {academicLevels.map(level => (
                          <SelectItem key={level.value} value={level.value}>
                            <div className="flex items-center justify-between w-full">
                              <span>{level.label}</span>
                              <span className="text-xs text-muted-foreground ml-2">{level.description}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Service Type */}
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2 mb-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      Service Type
                    </Label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map(service => (
                          <SelectItem key={service.value} value={service.value}>
                            <div>
                              <span>{service.label}</span>
                              <span className="text-xs text-muted-foreground ml-2">— {service.description}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Page Count (if applicable) */}
                  {selectedService?.perPage && (
                    <div>
                      <Label className="text-sm font-medium mb-3 flex items-center justify-between">
                        <span>Estimated Pages</span>
                        <span className="text-primary font-bold text-lg">{pageCount[0]} pages</span>
                      </Label>
                      <Slider
                        value={pageCount}
                        onValueChange={setPageCount}
                        min={10}
                        max={300}
                        step={5}
                        className="mt-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>10 pages</span>
                        <span>~{Math.round(pageCount[0] * 275).toLocaleString()} words</span>
                        <span>300 pages</span>
                      </div>
                    </div>
                  )}

                  {/* Urgency */}
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      Delivery Timeline
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {urgencyLevels.map(urg => (
                        <button
                          key={urg.value}
                          onClick={() => setUrgency(urg.value)}
                          className={`relative p-4 rounded-lg border-2 text-left transition-all ${
                            urgency === urg.value
                              ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <span className="text-sm font-medium block">{urg.label}</span>
                          <span className="text-xs text-muted-foreground">{urg.days}</span>
                          {urg.discount && (
                            <span className={`absolute -top-2 -right-2 text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              urg.discount === "Best Value" 
                                ? "bg-green-500/10 text-green-600 border border-green-500/20" 
                                : "bg-amber-500/10 text-amber-600 border border-amber-500/20"
                            }`}>
                              {urg.discount}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quote Result */}
                  <motion.div
                    key={`${academicLevel}-${serviceType}-${urgency}-${pageCount[0]}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20"
                  >
                    <p className="text-sm text-muted-foreground mb-2">Estimated Investment</p>
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold text-primary">£{quote.min.toLocaleString()}</span>
                      <span className="text-xl text-muted-foreground">–</span>
                      <span className="text-3xl font-semibold text-foreground">£{quote.max.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      Final price depends on specific requirements. No hidden fees.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-primary/20">
                      <div className="text-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mx-auto mb-1" />
                        <span className="text-xs text-muted-foreground">Free Revisions</span>
                      </div>
                      <div className="text-center">
                        <Shield className="w-4 h-4 text-green-500 mx-auto mb-1" />
                        <span className="text-xs text-muted-foreground">Plagiarism Check</span>
                      </div>
                      <div className="text-center">
                        <Users className="w-4 h-4 text-green-500 mx-auto mb-1" />
                        <span className="text-xs text-muted-foreground">Expert Support</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <Button asChild className="w-full group" size="lg">
                    <Link to="/consultation">
                      Get Precise Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Free consultation • No commitment required
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">What's Included in Every Quote</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: CheckCircle, title: "Unlimited Revisions", desc: "30 days of free revisions" },
              { icon: Shield, title: "Plagiarism Report", desc: "Turnitin-compatible check" },
              { icon: Users, title: "Expert Writers", desc: "PhD-qualified specialists" },
              { icon: Star, title: "Quality Guarantee", desc: "Satisfaction assured" },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 text-center">
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Breakdown */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceTypes.map((service) => (
              <Card key={service.value}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{service.label}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-primary">
                    {service.perPage ? (
                      <>From £{service.basePrice}/page</>
                    ) : (
                      <>From £{service.basePrice}</>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Book a free consultation to discuss your project and get an exact quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/consultation">Book Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/tools">Explore More Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuoteCalculatorPage;
