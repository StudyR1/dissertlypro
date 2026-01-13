import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle,
  BookOpen,
  BarChart3,
  FileText,
  PenTool,
  Search,
  Settings,
  Award,
  Star,
  Quote,
  GraduationCap,
  Briefcase,
  Globe
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroBackground from "@/assets/hero-background.jpg";

const services = [
  {
    icon: FileText,
    title: "Dissertation Proposal",
    description: "Craft compelling research proposals that win approval from your committee.",
    href: "/services/dissertation-proposal",
  },
  {
    icon: BookOpen,
    title: "Thesis & Dissertation Writing",
    description: "Expert guidance through every chapter of your research journey.",
    href: "/services/thesis-writing",
  },
  {
    icon: Settings,
    title: "Research Methodology",
    description: "Design robust qualitative, quantitative, or mixed methods frameworks.",
    href: "/services/methodology",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Advanced analysis using SPSS, R, STATA, NVivo, and ATLAS.ti.",
    href: "/services/data-analysis",
  },
  {
    icon: Search,
    title: "Literature Review",
    description: "Comprehensive reviews with thematic analysis and synthesis.",
    href: "/services/literature-review",
  },
  {
    icon: PenTool,
    title: "Editing & Proofreading",
    description: "Academic English refinement with APA, MLA, and Chicago formatting.",
    href: "/services/editing",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Submit Your Request",
    description: "Share your research requirements, timeline, and specific needs through our secure consultation form.",
  },
  {
    step: "02",
    title: "Expert Matching",
    description: "We pair you with a subject-matter expert who holds an advanced degree in your field.",
  },
  {
    step: "03",
    title: "Collaborative Review",
    description: "Work directly with your expert through milestone-based progress updates and revisions.",
  },
  {
    step: "04",
    title: "Final Delivery",
    description: "Receive polished, publication-ready work that meets the highest academic standards.",
  },
];

const testimonials = [
  {
    quote: "ScholarlyEdge helped me transform my scattered ideas into a coherent dissertation proposal. My committee approved it on the first submission.",
    author: "Dr. Sarah M.",
    role: "PhD in Education, University of Michigan",
    rating: 5,
  },
  {
    quote: "As a working professional, I needed flexible support. Their team worked around my schedule and helped me complete my MBA thesis while managing my full-time job.",
    author: "Michael T.",
    role: "Master's in Business Administration, NYU",
    rating: 5,
  },
  {
    quote: "The data analysis support was exceptional. They didn't just run the numbers—they taught me to interpret and present my findings with confidence.",
    author: "Dr. Priya K.",
    role: "PhD in Public Health, Johns Hopkins",
    rating: 5,
  },
];

const stats = [
  { value: "15,000+", label: "Graduate Students Supported" },
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "500+", label: "Subject Matter Experts" },
  { value: "50+", label: "Countries Served" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-hero-gradient">
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url(${heroBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/60" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 mb-6 animate-fade-in">
              <GraduationCap className="h-4 w-4 text-gold" />
              <span className="text-sm font-sans font-medium text-gold">
                Exclusively for Master's & Doctoral Candidates
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
              Your Research. <br />
              <span className="text-gold">Our Expertise.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 font-sans leading-relaxed mb-8 max-w-2xl animate-fade-in-up delay-100">
              Premium academic support for postgraduate students worldwide. 
              From dissertation proposals to final defense—we're with you every step of your scholarly journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Button variant="hero" size="xl" asChild>
                <Link to="/consultation">
                  Request Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-in-up delay-300">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-gold" />
                <span className="text-sm text-primary-foreground/70 font-sans">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-gold" />
                <span className="text-sm text-primary-foreground/70 font-sans">PhD-Level Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" />
                <span className="text-sm text-primary-foreground/70 font-sans">Flexible Timelines</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-gold" />
                <span className="text-sm text-primary-foreground/70 font-sans">Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-y border-border">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Comprehensive Postgraduate Support
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              Expert assistance across every phase of your Master's or PhD journey, 
              tailored to your unique research needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group relative p-6 bg-card rounded-xl border border-border shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary mb-4 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-gold font-sans text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="navy-outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Working Professionals CTA */}
      <section className="py-20 lg:py-28 bg-ivory-warm">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
                <Briefcase className="h-4 w-4" />
                For Working Professionals
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Balance Your Career, Family, and Research
              </h2>
              <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-6">
                We understand the unique challenges faced by working professionals pursuing advanced degrees. 
                Our flexible support model is designed around your schedule, with evening and weekend consultations, 
                milestone-based progress, and long-term partnership options.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Flexible scheduling around work commitments",
                  "Evening and weekend consultation availability",
                  "Progress-based milestone system",
                  "Long-term research partnership model",
                  "Stress and deadline management support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground font-sans">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="gold" size="lg" asChild>
                <Link to="/working-professionals">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-navy-medium p-8 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <Briefcase className="h-20 w-20 mx-auto mb-6 opacity-80" />
                  <p className="text-2xl font-serif font-semibold mb-2">67% of our clients</p>
                  <p className="text-primary-foreground/70 font-sans">are working professionals balancing career and research</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold rounded-xl p-4 shadow-gold">
                <div className="text-foreground text-center">
                  <p className="text-2xl font-serif font-bold">24/7</p>
                  <p className="text-sm font-sans">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              A Simple, Supportive Process
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              From initial consultation to final delivery, we guide you through a streamlined process 
              designed for your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-serif font-bold text-gold/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gold/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Trusted by Graduate Students Worldwide
            </h2>
            <p className="text-primary-foreground/70 font-sans text-lg">
              Hear from Master's and PhD candidates who achieved their academic goals with our support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-navy-medium/50 backdrop-blur rounded-xl p-6 border border-primary-foreground/10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-gold/30 mb-4" />
                <p className="text-primary-foreground/90 font-sans text-sm leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-serif font-semibold text-primary-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-primary-foreground/60 font-sans text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="bg-card-gradient rounded-2xl border border-border shadow-elevated p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Ready to Advance Your Research?
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto mb-8">
              Book a free consultation with our academic advisors. No commitment required—just 
              expert guidance tailored to your postgraduate journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/consultation">
                  Get Expert Help
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="navy-outline" size="xl" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="text-muted-foreground font-sans text-sm mt-6">
              100% confidential · No obligations · Response within 24 hours
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
