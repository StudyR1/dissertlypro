import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { FAQSchema, BreadcrumbSchema, ProfessionalServiceSchema } from "@/components/schemas";
import { homepageFAQs } from "@/data/serviceFAQs";
import { regionData, formatPrice, getRegionByCode } from "@/data/regionData";
import { getUniversitiesByRegion } from "@/data/universityData";
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle,
  Star,
  GraduationCap,
  Globe,
  Phone,
  Award,
  BookOpen,
  BarChart3,
  FileText,
  PenTool,
  Search,
  Settings
} from "lucide-react";

const services = [
  { icon: FileText, title: "Dissertation Proposal", href: "/services/dissertation-proposal" },
  { icon: BookOpen, title: "Thesis Writing", href: "/services/thesis-writing" },
  { icon: Settings, title: "Research Methodology", href: "/services/methodology" },
  { icon: BarChart3, title: "Data Analysis", href: "/services/data-analysis" },
  { icon: Search, title: "Literature Review", href: "/services/literature-review" },
  { icon: PenTool, title: "Editing & Proofreading", href: "/services/editing" },
];

const RegionLanding = () => {
  const { region } = useParams<{ region: string }>();
  const regionInfo = region ? getRegionByCode(region) : undefined;

  if (!regionInfo) {
    return <Navigate to="/" replace />;
  }

  const { currency, pricing, universities, testimonials, stats, supportHours, flagEmoji, heroTitle, heroSubtitle, name, phone } = regionInfo;
  
  // Get detailed university data for this region
  const regionUniversities = getUniversitiesByRegion(region || '');
  return (
    <Layout>
      <SEO 
        title={`Dissertation Help ${name}`}
        description={`Premium dissertation and thesis support for Master's and PhD students in ${name}. Expert guidance from ${stats.experts} PhD-qualified consultants. Prices from ${formatPrice(pricing.chapter, currency)}.`}
        canonical={`/${region}`}
        keywords={[`dissertation help ${name}`, `thesis support ${name}`, `PhD assistance ${name}`, `masters thesis ${name}`]}
      />
      <FAQSchema faqs={homepageFAQs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: `${name}`, url: `/${region}` }
      ]} />
      <ProfessionalServiceSchema 
        serviceName={`DissertlyPro ${name} - Dissertation Support`}
        description={`Premium dissertation and thesis support services for postgraduate students in ${name}.`}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-midnight via-midnight-rich to-midnight-soft overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-copper/[0.03] rounded-full blur-[120px] hidden md:block" />
        
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-4xl">
            {/* Region Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 mb-6">
              <span className="text-xl">{flagEmoji}</span>
              <span className="text-sm font-sans text-white/80">{name} Students</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              {heroTitle}
            </h1>
            
            <p className="text-lg sm:text-xl text-ivory font-sans leading-relaxed mb-8 max-w-3xl">
              {heroSubtitle}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-white/80">
                <Users className="h-5 w-5 text-copper-light" />
                <span className="font-sans">{stats.students} students helped</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Award className="h-5 w-5 text-copper-light" />
                <span className="font-sans">{stats.experts} local experts</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <GraduationCap className="h-5 w-5 text-copper-light" />
                <span className="font-sans">{stats.universities} universities</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="copper" size="lg" className="group shadow-copper" asChild>
                <Link to="/consultation">
                  Free Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href={`tel:${phone.replace(/\s/g, '')}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {phone}
                </a>
              </Button>
            </div>

            {/* Support Hours */}
            <p className="mt-6 text-sm text-white/50 font-sans flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {supportHours}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-copper font-sans font-semibold text-sm tracking-widest uppercase mb-4">
              {name} Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Transparent Pricing in {currency.code}
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              All prices in local currency. No hidden fees or currency conversion charges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Chapter Support */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-subtle hover:shadow-card transition-all">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Chapter Support</h3>
              <p className="text-sm text-muted-foreground font-sans mb-6">Single chapter guidance</p>
              <div className="mb-6">
                <span className="text-4xl font-serif font-bold text-foreground">
                  {formatPrice(pricing.chapter, currency)}
                </span>
                <span className="text-muted-foreground font-sans ml-2">per chapter</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Expert feedback', 'Structural review', 'One revision round', '7-day delivery'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-copper" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="midnight-outline" className="w-full" asChild>
                <Link to="/consultation">Get Quote</Link>
              </Button>
            </div>

            {/* Full Dissertation - Popular */}
            <div className="bg-primary text-primary-foreground rounded-2xl border border-copper p-8 shadow-elevated scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-copper text-white text-sm font-sans font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Full Dissertation</h3>
              <p className="text-sm text-ivory font-sans mb-6">Complete support package</p>
              <div className="mb-6">
                <span className="text-4xl font-serif font-bold">
                  {formatPrice(pricing.dissertation, currency)}
                </span>
                <span className="text-ivory font-sans ml-2">complete</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['All chapters covered', 'Dedicated expert', 'Unlimited revisions', 'Priority support', 'Data analysis', 'Final formatting'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm font-sans text-ivory">
                    <CheckCircle className="h-4 w-4 text-copper-light" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="copper" className="w-full" asChild>
                <Link to="/consultation">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Monthly Partnership */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-subtle hover:shadow-card transition-all">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Monthly Plan</h3>
              <p className="text-sm text-muted-foreground font-sans mb-6">For working professionals</p>
              <div className="mb-6">
                <span className="text-4xl font-serif font-bold text-foreground">
                  {formatPrice(pricing.monthly, currency)}
                </span>
                <span className="text-muted-foreground font-sans ml-2">per month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Flexible scheduling', 'Evening availability', 'Progress tracking', 'Priority access'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-copper" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="midnight-outline" className="w-full" asChild>
                <Link to="/consultation">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 lg:py-24 bg-cream-warm">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-copper font-sans font-semibold text-sm tracking-widest uppercase mb-4">
              Trusted Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Supporting Students at {name}'s Top Universities
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              Our experts have guided students from the leading institutions across {name}. Click to see university-specific support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* Universities with dedicated pages */}
            {regionUniversities.map((uni) => (
              <Link
                key={uni.slug}
                to={`/${region}/${uni.slug}`}
                className="bg-card rounded-xl border border-border p-4 text-center hover:shadow-card hover:border-copper/30 transition-all group"
              >
                <GraduationCap className="h-6 w-6 text-copper mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-sans text-foreground font-medium group-hover:text-copper transition-colors">{uni.shortName}</p>
                <p className="text-xs text-muted-foreground mt-1">{uni.stats.studentsHelped} helped</p>
              </Link>
            ))}
            
            {/* Other universities without dedicated pages */}
            {universities
              .filter(uni => !regionUniversities.some(ru => uni.includes(ru.shortName) || uni.includes(ru.name)))
              .map((uni) => (
                <div 
                  key={uni}
                  className="bg-card rounded-xl border border-border p-4 text-center hover:shadow-card transition-all"
                >
                  <GraduationCap className="h-6 w-6 text-copper mx-auto mb-2" />
                  <p className="text-sm font-sans text-foreground font-medium">{uni}</p>
                </div>
              ))
            }
          </div>
          
          {regionUniversities.length > 0 && (
            <p className="text-center text-sm text-muted-foreground mt-6">
              Click on highlighted universities to see institution-specific support details
            </p>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-copper font-sans font-semibold text-sm tracking-widest uppercase mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              What {name} Students Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl border border-border p-6 shadow-subtle"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-copper text-copper" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground font-sans text-sm leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-midnight flex items-center justify-center text-copper-light font-serif font-bold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground text-sm">{testimonial.author}</p>
                    <p className="font-sans text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-16 lg:py-24 bg-cream-warm">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              Comprehensive support for every stage of your research journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="flex items-center gap-3 bg-card rounded-xl border border-border p-4 hover:shadow-card hover:border-copper/30 transition-all group"
              >
                <div className="h-10 w-10 rounded-lg bg-copper/10 flex items-center justify-center text-copper group-hover:bg-copper group-hover:text-white transition-colors">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="font-sans font-medium text-foreground group-hover:text-copper transition-colors">
                  {service.title}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-copper group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-midnight via-midnight-rich to-midnight-soft relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-copper/20 text-copper-light mb-6">
              <Globe className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-5">
              Ready to Start Your Research Journey?
            </h2>
            <p className="text-ivory font-sans text-lg mb-8">
              Join {stats.students} successful {name} students. Book your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="copper" size="lg" asChild>
                <Link to="/consultation">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/pricing">View All Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RegionLanding;
