import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Check, HelpCircle, MessageSquare } from "lucide-react";

const pricingPlans = [
  {
    name: "Chapter Support",
    description: "Focused support for a single chapter or section",
    price: "From $299",
    priceNote: "per chapter",
    features: [
      "Expert feedback on one chapter",
      "Structural recommendations",
      "One round of revisions",
      "7-day delivery",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Dissertation Package",
    description: "Comprehensive support for your complete dissertation",
    price: "From $2,499",
    priceNote: "complete project",
    features: [
      "Full dissertation support (all chapters)",
      "Dedicated expert matching",
      "Unlimited revision rounds",
      "Priority delivery",
      "24/7 messaging support",
      "Methodology consultation",
      "Data analysis guidance",
      "Final formatting & polish",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Ongoing Partnership",
    description: "Long-term support for working professionals",
    price: "From $599",
    priceNote: "per month",
    features: [
      "Monthly milestone planning",
      "Flexible support hours",
      "Evening & weekend availability",
      "Progress tracking dashboard",
      "Priority expert access",
      "Unlimited messaging",
      "Quarterly strategy sessions",
      "Best value for long projects",
    ],
    cta: "Best for Professionals",
    popular: false,
  },
];

const addOns = [
  { name: "Rush Delivery (48-72 hours)", price: "+50%" },
  { name: "Data Analysis (per dataset)", price: "From $399" },
  { name: "Statistical Consultation (hourly)", price: "$99/hour" },
  { name: "Turnitin Similarity Reduction", price: "From $199" },
  { name: "Journal Article Preparation", price: "From $499" },
  { name: "Presentation Coaching", price: "$149/session" },
];

const faqs = [
  {
    question: "How do I get an accurate quote for my project?",
    answer: "Every project is unique. We provide personalized quotes based on your specific requirements, deadline, and complexity. Book a free consultation to discuss your needs and receive a detailed proposal within 24 hours.",
  },
  {
    question: "What payment options are available?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. For larger projects, we offer milestone-based payment plans so you're never paying for work that hasn't been delivered.",
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "Your satisfaction is guaranteed. We offer unlimited revisions within the scope of your original requirements. If we don't meet your expectations, we'll work with you until we do.",
  },
  {
    question: "How quickly can you start?",
    answer: "We typically match you with an expert within 24-48 hours of confirmation. Rush services are available for urgent deadlines at an additional cost.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Investment in Your Academic Success
            </h1>
            <p className="text-xl text-primary-foreground/80 font-sans leading-relaxed">
              Flexible pricing options designed for postgraduate students. 
              Every project receives a personalized quote based on your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground border-gold shadow-elevated scale-105"
                    : "bg-card text-card-foreground border-border shadow-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-foreground text-sm font-sans font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-serif font-semibold mb-2">{plan.name}</h3>
                <p className={`text-sm font-sans mb-6 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-serif font-bold">{plan.price}</span>
                  <span className={`text-sm font-sans ml-2 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.priceNote}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-sans">
                      <Check className={`h-5 w-5 flex-shrink-0 ${plan.popular ? "text-gold" : "text-gold"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "navy-outline"}
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <Link to="/consultation">
                    Get Custom Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 lg:py-28 bg-ivory-warm">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Additional Services
              </h2>
              <p className="text-muted-foreground font-sans">
                Enhance your support package with specialized add-ons
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border shadow-subtle overflow-hidden">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 ${
                    index < addOns.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-sans text-foreground">{addon.name}</span>
                  <span className="font-serif font-semibold text-gold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="h-12 w-12 text-gold mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Pricing FAQs
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <MessageSquare className="h-12 w-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Get Your Personalized Quote
            </h2>
            <p className="text-primary-foreground/70 font-sans text-lg mb-8">
              Every project is unique. Tell us about your research, and we'll provide a detailed 
              proposal with transparent pricing within 24 hours.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/consultation">
                Request Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
