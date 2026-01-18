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
  Globe,
  Sparkles,
  Play,
  MousePointer
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import heroBackground from "@/assets/hero-background.jpg";
import logoIcon from "/logo-icon.png";
import { 
  OrganizationSchema, 
  WebsiteSchema, 
  FAQSchema, 
  ReviewSchema, 
  defaultReviews,
  HowToSchema,
  defaultHowToSteps,
  AggregateRatingSchema,
  defaultAggregateRating,
  ProfessionalServiceSchema
} from "@/components/schemas";
import SpeakableSchema from "@/components/schemas/SpeakableSchema";
import { homepageFAQs } from "@/data/serviceFAQs";
import { AnimatedCounter, TrustBadges, TrustStrip } from "@/components/cro";
import { LiveResearchPulse } from "@/components/features";
import { TLDRBlock, KeyTakeaways } from "@/components/ui/QuickAnswer";

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
    quote: "DissertlyPro helped me transform my scattered ideas into a coherent dissertation proposal. My committee approved it on the first submission.",
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
      <SEO 
        title="Home"
        description="DissertlyPro provides premium dissertation and thesis support for Master's and PhD students. Expert research guidance, data analysis, editing, and academic writing services worldwide."
        canonical="/"
        keywords={['dissertation help', 'thesis support', 'PhD assistance', 'masters thesis', 'academic writing']}
      />
      <OrganizationSchema />
      <WebsiteSchema />
      <FAQSchema faqs={homepageFAQs} />
      <ReviewSchema reviews={defaultReviews} />
      <HowToSchema 
        name="How to Get Dissertation Support from DissertlyPro"
        description="Step-by-step guide to getting expert dissertation and thesis support from DissertlyPro for Master's and PhD students."
        steps={defaultHowToSteps}
        totalTime="P6M"
      />
      <AggregateRatingSchema {...defaultAggregateRating} />
      <ProfessionalServiceSchema />
      <SpeakableSchema 
        name="DissertlyPro - Premium Dissertation Support"
        description="Expert dissertation and thesis support for Master's and PhD students worldwide"
        url="/"
        speakableSelectors={[".tldr-summary", ".key-takeaways"]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Animated Background - GPU accelerated */}
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight-rich to-midnight-soft gpu-accelerated">
          {/* Background image with optimized loading */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url(${heroBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'scroll',
            }}
            aria-hidden="true"
          />
          
          {/* Subtle gradient orbs - GPU accelerated, hidden on mobile for performance */}
          <div className="hidden md:block absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-copper/[0.03] rounded-full blur-[150px] animate-float will-change-transform" />
          <div className="hidden md:block absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-midnight-soft/20 rounded-full blur-[120px] animate-float will-change-transform" style={{ animationDelay: '2s' }} />
          <div className="hidden md:block absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-copper/[0.02] rounded-full blur-[100px] animate-float will-change-transform" style={{ animationDelay: '4s' }} />
          
          {/* Noise texture overlay */}
          <div className="absolute inset-0 noise-overlay opacity-[0.02]" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <div className="max-w-2xl">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 opacity-0 animate-fade-in-up">
                <div className="relative">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-copper-light" />
                  <div className="absolute inset-0 animate-ping hidden sm:block">
                    <Sparkles className="h-4 w-4 text-copper-light opacity-40" />
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-sans font-medium text-white tracking-wide">
                  For Master's & Doctoral Candidates
                </span>
              </div>
              
              {/* Main Headline with animated reveal */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.08] sm:leading-[1.05] mb-6 sm:mb-8">
                <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  Your Research.
                </span>
                <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-light via-copper to-copper-dark">
                      Our Expertise.
                    </span>
                    {/* Decorative underline */}
                    <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }} viewBox="0 0 200 12" fill="none">
                      <path d="M2 10C50 2 150 2 198 10" stroke="url(#copper-gradient)" strokeWidth="3" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="copper-gradient" x1="0" y1="0" x2="200" y2="0">
                          <stop offset="0%" stopColor="#b88960" stopOpacity="0"/>
                          <stop offset="50%" stopColor="#b88960"/>
                          <stop offset="100%" stopColor="#b88960" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-ivory font-sans leading-relaxed mb-8 sm:mb-10 max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                Premium academic support for postgraduate students worldwide. 
                From dissertation proposals to final defense—we're with you every step.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
                <Button variant="copper" size="lg" className="group shadow-copper w-full sm:w-auto h-12 sm:h-14 text-base touch-manipulation" asChild>
                  <Link to="/order">
                    Get Started
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto h-12 sm:h-14 text-base touch-manipulation" asChild>
                  <Link to="/consultation">
                    Free Consultation
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-3 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
                {[
                  { icon: Shield, text: "100% Confidential" },
                  { icon: Award, text: "PhD Experts" },
                  { icon: Clock, text: "Flexible Times" },
                  { icon: Globe, text: "Global Support" },
                ].map(({ icon: Icon, text }, index) => (
                  <div 
                    key={text} 
                    className="flex items-center gap-1.5 sm:gap-2 group cursor-default"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="p-1 sm:p-1.5 rounded-lg bg-copper/10">
                      <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-copper-light" />
                    </div>
                    <span className="text-xs sm:text-sm text-ivory/80 font-sans">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="hidden lg:block relative opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              {/* Main floating card */}
              <div className="relative">
                {/* Subtle backdrop glow */}
                <div className="absolute inset-0 bg-copper/[0.03] rounded-3xl blur-3xl scale-105" />
                
                {/* Main card */}
                <div className="relative bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/[0.08] p-8">
                  {/* Logo */}
                  <div className="flex items-center gap-4 mb-8">
                    <img src={logoIcon} alt="DissertlyPro" className="h-14 w-14 rounded-xl" />
                    <div>
                      <h3 className="text-lg font-serif font-bold text-white/90">DissertlyPro</h3>
                      <p className="text-white/40 text-sm font-sans">Academic Excellence Partner</p>
                    </div>
                  </div>
                  
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { value: "15K+", label: "Students Helped" },
                      { value: "98%", label: "Success Rate" },
                      { value: "500+", label: "PhD Experts" },
                      { value: "50+", label: "Countries" },
                    ].map((stat, i) => (
                      <div 
                        key={i} 
                        className="bg-white/[0.03] rounded-xl p-4 text-center border border-white/[0.05] hover:bg-white/[0.05] transition-colors group"
                      >
                        <div className="text-xl font-serif font-bold text-copper/80 group-hover:text-copper transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/40 font-sans">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Active users indicator */}
                  <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] rounded-xl p-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i} 
                          className="h-7 w-7 rounded-full bg-midnight-soft border-2 border-midnight flex items-center justify-center text-xs font-medium text-white/70"
                        >
                          {['S', 'M', 'P', 'J'][i-1]}
                        </div>
                      ))}
                      <div className="h-7 w-7 rounded-full bg-white/5 border-2 border-midnight flex items-center justify-center text-xs font-medium text-white/50">
                        +
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-white/70 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
                        234 online
                      </div>
                      <div className="text-xs text-white/40">Active researchers</div>
                    </div>
                  </div>
                </div>

                {/* Floating testimonial card */}
                <div className="absolute -bottom-6 -left-6 bg-midnight-rich/90 backdrop-blur-sm rounded-xl border border-white/[0.06] p-4 shadow-lg max-w-[240px] animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-copper/70 text-copper/70" />
                    ))}
                  </div>
                  <p className="text-sm text-ivory/80 font-sans italic leading-relaxed mb-2">
                    "Completed my PhD thesis 3 months early!"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-copper/70 text-xs font-medium">
                      S
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white/70">Dr. Sarah M.</div>
                      <div className="text-xs text-white/30">PhD Education</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-midnight-soft border border-copper/20 rounded-lg px-3 py-2 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-1.5 text-copper/80">
                    <Award className="h-4 w-4" />
                    <span className="text-xs font-medium">Top Rated 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center gap-2 text-white/30 hover:text-white/50 transition-colors cursor-pointer group">
            <span className="text-xs font-sans tracking-wider uppercase">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-current flex items-start justify-center p-1">
              <div className="w-0.5 h-1.5 rounded-full bg-current animate-bounce" />
            </div>
          </div>
        </div>

        {/* Bottom gradient fade - more subtle */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Bar with Animated Counters */}
      <section className="bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="container py-10 sm:py-14 px-4 sm:px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gradient-copper mb-1 sm:mb-2">
                <AnimatedCounter end={15000} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-sans tracking-wide">
                Students Supported
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gradient-copper mb-1 sm:mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-sans tracking-wide">
                Satisfaction Rate
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gradient-copper mb-1 sm:mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-sans tracking-wide">
                PhD Experts
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gradient-copper mb-1 sm:mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-sans tracking-wide">
                Countries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Research Pulse Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Live Pulse Feed */}
            <div>
              <LiveResearchPulse />
            </div>
            
            {/* Social Proof Text */}
            <div className="flex flex-col justify-center">
              <span className="inline-block text-copper font-sans font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3">
                Join Our Community
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                You're Not Alone in This Journey
              </h2>
              <p className="text-muted-foreground font-sans text-base sm:text-lg leading-relaxed mb-6">
                Right now, students and researchers from around the world are making progress 
                on their dissertations with expert support. Watch our live feed to see the 
                global community in action.
              </p>
              <div className="space-y-3">
                {[
                  "Real-time activity from our worldwide community",
                  "Anonymous updates from fellow researchers",
                  "See how many experts are available right now",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-copper shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="copper" size="lg" asChild>
                  <Link to="/consultation">
                    Join the Community
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Content visibility for off-screen optimization */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden content-visibility-auto">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-cream-warm/50 to-transparent pointer-events-none hidden sm:block" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-copper font-sans font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-5">
              Comprehensive Support
            </h2>
            <p className="text-muted-foreground font-sans text-base sm:text-lg leading-relaxed px-4 sm:px-0">
              Expert assistance across every phase of your research journey.
            </p>
          </div>

          {/* TL;DR for AI/Voice Search */}
          <div className="max-w-3xl mx-auto mb-12">
            <TLDRBlock>
              DissertlyPro offers 6 core services: dissertation proposals, thesis writing guidance, 
              research methodology design, data analysis (SPSS, R, NVivo), literature reviews, and 
              academic editing. All services include unlimited revisions and expert matching.
            </TLDRBlock>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group relative p-5 sm:p-7 bg-card rounded-xl sm:rounded-2xl border border-border shadow-subtle hover:shadow-elevated transition-all duration-300 sm:duration-500 active:scale-[0.98] sm:hover:-translate-y-2 overflow-hidden touch-manipulation"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-copper/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block" />
                
                <div className="relative flex sm:block items-start gap-4">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-midnight/5 text-midnight sm:mb-5 group-active:bg-copper/10 sm:group-hover:bg-copper/10 group-active:text-copper sm:group-hover:text-copper transition-all duration-300">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-1 sm:mb-3 group-active:text-copper sm:group-hover:text-copper transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed line-clamp-2 sm:line-clamp-none sm:mb-4">
                      {service.description}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center text-copper font-sans text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ArrowRight className="h-4 w-4 ml-1.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-14">
            <Button variant="midnight-outline" size="lg" className="w-full sm:w-auto h-12 touch-manipulation" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Working Professionals CTA - Content visibility optimization */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream-warm relative overflow-hidden content-visibility-auto">
        <div className="absolute inset-0 pattern-grid opacity-50 sm:opacity-100" />
        <div className="container relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 sm:gap-2.5 text-copper font-sans font-semibold text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-5">
                <Briefcase className="h-4 w-4" />
                For Working Professionals
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Balance Career, Family & Research
              </h2>
              <p className="text-muted-foreground font-sans text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Our flexible support model is designed around your schedule, with evening and weekend consultations 
                and milestone-based progress.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {[
                  "Flexible scheduling",
                  "Evening & weekend availability",
                  "Milestone-based progress",
                  "Long-term partnership model",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-foreground font-sans">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-copper/10">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-copper" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="copper" size="lg" className="w-full sm:w-auto h-12 touch-manipulation" asChild>
                <Link to="/working-professionals">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Stats Card */}
            <div className="relative order-first lg:order-last">
              <div className="aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-midnight-rich via-midnight to-midnight-soft p-6 sm:p-10 flex flex-col justify-center items-center shadow-elevated relative overflow-hidden">
                {/* Glass overlay effect */}
                <div className="absolute inset-0 glass-card opacity-20" />
                
                <div className="relative text-center text-primary-foreground z-10">
                  <Briefcase className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 text-copper opacity-80" />
                  <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2 sm:mb-3">67%</p>
                  <p className="text-sm sm:text-lg text-ivory font-sans max-w-xs px-4">
                    of our clients are working professionals
                  </p>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 lg:bottom-8 lg:-right-8 bg-gradient-to-br from-copper to-copper-dark rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-copper animate-glow-pulse">
                <div className="text-white text-center">
                  <p className="text-2xl sm:text-3xl font-serif font-bold">24/7</p>
                  <p className="text-xs sm:text-sm font-sans opacity-90">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background relative">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-copper font-sans font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-5">
              Simple, Supportive Process
            </h2>
            <p className="text-muted-foreground font-sans text-base sm:text-lg leading-relaxed px-4 sm:px-0">
              From consultation to delivery, we guide you through a streamlined process.
            </p>
          </div>

          {/* Key Takeaways - Featured Snippet Optimized */}
          <div className="max-w-2xl mx-auto mb-12">
            <KeyTakeaways
              title="Getting Started with DissertlyPro"
              items={[
                "Book a free consultation to discuss your research needs and timeline",
                "Get matched with a PhD expert in your specific subject area",
                "Work collaboratively with milestone-based updates and unlimited revisions",
                "Receive polished, publication-ready deliverables on schedule"
              ]}
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step number */}
                <div className="text-5xl sm:text-7xl font-serif font-bold text-copper/10 mb-2 sm:mb-4">
                  {step.step}
                </div>
                <h3 className="text-base sm:text-xl font-serif font-semibold text-foreground mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full px-4">
                    <div className="h-px bg-gradient-to-r from-copper/30 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Content visibility optimization */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-midnight-rich to-midnight relative overflow-hidden content-visibility-auto">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-copper font-sans font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4 sm:mb-5">
              Trusted Worldwide
            </h2>
            <p className="text-ivory font-sans text-base sm:text-lg leading-relaxed px-4 sm:px-0">
              Hear from students who achieved their goals with our support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-5 sm:p-8 active:bg-white/10 sm:hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-copper text-copper" />
                  ))}
                </div>
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-copper/30 mb-3 sm:mb-4" />
                <p className="text-primary-foreground/85 font-sans text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 line-clamp-4 sm:line-clamp-none">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 sm:pt-6 border-t border-white/10">
                  <p className="font-serif font-semibold text-primary-foreground text-base sm:text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-ivory/80 font-sans text-xs sm:text-sm mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Content visibility optimization */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden content-visibility-auto">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container relative px-4 sm:px-6">
          <div className="border-gradient bg-card rounded-2xl sm:rounded-3xl shadow-elevated p-6 sm:p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative elements - hidden on mobile */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-copper/5 rounded-full blur-3xl hidden sm:block" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-midnight/5 rounded-full blur-3xl hidden sm:block" />
            
            <div className="relative">
              <div className="inline-flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-copper/10 text-copper mb-5 sm:mb-8">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-5">
                Ready to Advance Your Research?
              </h2>
              <p className="text-muted-foreground font-sans text-sm sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-10">
                Book a free consultation with our academic advisors. No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button variant="copper" size="lg" className="w-full sm:w-auto h-12 sm:h-14 text-base touch-manipulation" asChild>
                  <Link to="/consultation">
                    Get Expert Help
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="midnight-outline" size="lg" className="w-full sm:w-auto h-12 sm:h-14 text-base touch-manipulation" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
              <TrustStrip className="mt-6 sm:mt-8" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
