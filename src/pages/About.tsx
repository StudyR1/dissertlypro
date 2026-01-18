import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Users, 
  Target, 
  Heart, 
  Shield, 
  Award,
  BookOpen,
  Globe,
  Lightbulb,
  GraduationCap,
  CheckCircle,
  Sparkles
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { FAQSchema, BreadcrumbSchema } from "@/components/schemas";
import SpeakableSchema from "@/components/schemas/SpeakableSchema";
import { aboutPageFAQs } from "@/data/serviceFAQs";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TLDRBlock, ExpertInsight } from "@/components/ui/QuickAnswer";

const values = [
  {
    icon: Shield,
    title: "Academic Integrity",
    description: "We uphold the highest ethical standards, providing guidance that helps students develop their own research capabilities while maintaining complete academic honesty."
  },
  {
    icon: Heart,
    title: "Student-Centered Approach",
    description: "Every interaction is tailored to your unique needs. We listen, understand, and adapt our support to help you achieve your specific academic goals."
  },
  {
    icon: Award,
    title: "Excellence in Expertise",
    description: "Our team consists exclusively of PhD-qualified experts with deep subject matter knowledge and proven track records in academic research and publishing."
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "We serve students worldwide, working across time zones and understanding diverse academic systems, citation styles, and institutional requirements."
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "We constantly evolve our methodologies and tools to provide cutting-edge support that addresses the changing landscape of postgraduate research."
  },
  {
    icon: BookOpen,
    title: "Knowledge Empowerment",
    description: "Beyond completing projects, we focus on teaching you the skills and methodologies that will serve you throughout your academic and professional career."
  }
];

const teamMembers = [
  {
    name: "Dr. Elizabeth Chen",
    role: "Founder & CEO",
    bio: "Former Stanford professor with 20+ years in academic research. PhD in Educational Psychology.",
    initials: "EC"
  },
  {
    name: "Dr. Marcus Williams",
    role: "Head of Research Services",
    bio: "Published researcher with expertise in quantitative methodologies. PhD in Statistics from MIT.",
    initials: "MW"
  },
  {
    name: "Dr. Sarah Okonkwo",
    role: "Director of Academic Quality",
    bio: "Former dissertation committee chair with 15 years of graduate education experience. PhD in Higher Education.",
    initials: "SO"
  },
  {
    name: "Dr. James Martinez",
    role: "Head of Data Analysis",
    bio: "Expert in advanced statistical methods and data science. PhD in Applied Mathematics from Berkeley.",
    initials: "JM"
  },
  {
    name: "Dr. Priya Patel",
    role: "Director of Client Success",
    bio: "Dedicated to ensuring every student achieves their academic goals. PhD in Organizational Psychology.",
    initials: "PP"
  },
  {
    name: "Dr. Michael O'Brien",
    role: "Head of Qualitative Research",
    bio: "Specialist in qualitative methodologies and NVivo analysis. PhD in Sociology from Oxford.",
    initials: "MO"
  }
];

const stats = [
  { value: "2015", label: "Founded" },
  { value: "15,000+", label: "Students Helped" },
  { value: "500+", label: "PhD Experts" },
  { value: "50+", label: "Countries Served" }
];

const About = () => {
  return (
    <Layout>
      <SEO 
        title="About Us"
        description="Learn about DissertlyPro's mission to support Master's and PhD students worldwide. Meet our team of PhD experts and discover our commitment to academic excellence."
        canonical="/about"
        keywords={['about DissertlyPro', 'academic support team', 'PhD experts', 'dissertation help company', 'thesis writing experts', 'research support service', 'academic consulting firm']}
      />
      <FAQSchema faqs={aboutPageFAQs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" }
      ]} />
      <SpeakableSchema 
        name="About DissertlyPro"
        description="Learn about DissertlyPro's mission to support Master's and PhD students worldwide"
        url="/about"
        speakableSelectors={[".tldr-summary", ".expert-insight"]}
      />

      {/* Breadcrumbs */}
      <div className="bg-midnight-rich border-b border-white/10">
        <div className="container px-4 sm:px-6">
          <Breadcrumbs className="text-white/60" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-midnight-rich to-midnight relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-copper/[0.03] rounded-full blur-[120px] hidden md:block" />
        
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6">
              <Users className="h-4 w-4 text-copper-light" />
              <span className="text-sm font-sans text-white/80">Our Story</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Empowering the Next Generation of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-light via-copper to-copper-dark">
                Scholars
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-ivory font-sans leading-relaxed max-w-3xl mx-auto">
              Since 2015, DissertlyPro has been the trusted partner for Master's and PhD students 
              navigating the challenges of advanced academic research.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-y border-border relative">
        <div className="container py-10 sm:py-14 px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gradient-copper mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-copper font-sans font-semibold text-sm tracking-widest uppercase mb-4">
                <Target className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Transforming Academic Dreams Into Reality
              </h2>
              
              <TLDRBlock>
                DissertlyPro was founded in 2015 to democratize academic support. We believe every 
                postgraduate student deserves access to PhD-qualified experts. 15,000+ students helped 
                across 50+ countries with 98% satisfaction rate.
              </TLDRBlock>

              <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-6">
                We believe every postgraduate student deserves access to expert guidance. Our mission 
                is to democratize academic support, providing world-class assistance that was once 
                available only to students at elite institutions.
              </p>

              <ExpertInsight
                quote="When I was struggling with my own PhD at Stanford, I wished I had access to the kind of 
                personalized support we now provide. That experience inspired me to build DissertlyPro."
                expertName="Dr. Elizabeth Chen"
                expertTitle="Founder & CEO"
              />
              <ul className="space-y-3">
                {[
                  "Personalized expert matching for every student",
                  "Flexible support that adapts to your timeline",
                  "Skill-building alongside project completion",
                  "Unwavering commitment to academic integrity"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground font-sans">
                    <CheckCircle className="h-5 w-5 text-copper shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual Element */}
            <div className="relative order-first lg:order-last">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-midnight-rich via-midnight to-midnight-soft p-8 sm:p-12 flex flex-col justify-center items-center shadow-elevated relative overflow-hidden">
                <div className="absolute inset-0 glass-card opacity-20" />
                <div className="relative text-center text-primary-foreground z-10">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-copper/20 mb-6">
                    <GraduationCap className="h-10 w-10 text-copper-light" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold mb-3">Our Promise</p>
                  <p className="text-ivory font-sans max-w-xs">
                    Every student who works with us will leave with more than a completed project—they'll 
                    have the skills to succeed independently.
                  </p>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-copper to-copper-dark rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-copper">
                <div className="text-white text-center">
                  <Sparkles className="h-6 w-6 mx-auto mb-1" />
                  <p className="text-xs sm:text-sm font-sans font-medium">Premium Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-cream-warm">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block text-copper font-sans font-semibold text-sm tracking-widest uppercase mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-5">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              Every decision we make is rooted in these core values that define who we are and 
              how we serve our students.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-subtle hover:shadow-card transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper mb-5">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block text-copper font-sans font-semibold text-sm tracking-widest uppercase mb-4">
              Leadership Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-5">
              Meet the Experts Behind DissertlyPro
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              Our leadership team brings together decades of academic experience from the world's 
              top institutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border shadow-subtle hover:shadow-card transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-midnight-rich to-midnight flex items-center justify-center text-copper-light font-serif font-bold text-lg group-hover:scale-105 transition-transform">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-copper font-sans text-sm">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground font-sans mb-6">
              Plus 500+ subject-matter experts across all academic disciplines
            </p>
            <Button variant="midnight-outline" size="lg" className="touch-manipulation" asChild>
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-midnight-rich to-midnight relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-copper/20 text-copper-light mb-6">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-5">
              Ready to Start Your Journey With Us?
            </h2>
            <p className="text-ivory font-sans text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their academic goals with 
              DissertlyPro. Your first consultation is completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="copper" size="lg" className="touch-manipulation" asChild>
                <Link to="/consultation">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" className="border-white/20 text-white hover:bg-white/10 touch-manipulation" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
