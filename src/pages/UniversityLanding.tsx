import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { 
  FAQSchema, 
  BreadcrumbSchema, 
  AggregateRatingSchema 
} from "@/components/schemas";
import LocalBusinessSchema from "@/components/schemas/LocalBusinessSchema";
import { getUniversityBySlug, getUniversitiesByRegion } from "@/data/universityData";
import { getRegionByCode, formatPrice } from "@/data/regionData";
import { TLDRBlock, KeyTakeaways } from "@/components/ui/QuickAnswer";
import { 
  ArrowRight, 
  MapPin, 
  Calendar,
  GraduationCap,
  Star,
  CheckCircle,
  Users,
  Award,
  BookOpen,
  Clock,
  Phone,
  FileText,
  Target,
  Building2
} from "lucide-react";

const UniversityLanding = () => {
  const { region, university } = useParams<{ region: string; university: string }>();
  
  const universityInfo = university ? getUniversityBySlug(university) : undefined;
  const regionInfo = region ? getRegionByCode(region) : undefined;

  if (!universityInfo || !regionInfo || universityInfo.region !== region) {
    return <Navigate to={region ? `/${region}` : "/"} replace />;
  }

  const otherUniversities = getUniversitiesByRegion(region).filter(
    (uni) => uni.slug !== university
  ).slice(0, 4);

  const { currency, pricing, phone } = regionInfo;

  return (
    <Layout>
      <SEO 
        title={`Dissertation Help for ${universityInfo.name} Students`}
        description={`Expert dissertation and thesis support for ${universityInfo.name} students. Understand ${universityInfo.shortName} requirements. ${universityInfo.stats.studentsHelped} students helped with ${universityInfo.stats.completionRate} completion rate.`}
        canonical={`/${region}/${university}`}
        keywords={[
          `${universityInfo.name} dissertation help`,
          `${universityInfo.shortName} thesis support`,
          `${universityInfo.name} PhD`,
          `${universityInfo.city} dissertation services`,
          `${universityInfo.shortName} masters thesis`,
        ]}
      />
      
      <FAQSchema faqs={universityInfo.faqs} />
      
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: regionInfo.name, url: `/${region}` },
        { name: universityInfo.name, url: `/${region}/${university}` },
      ]} />
      
      <AggregateRatingSchema 
        ratingValue={universityInfo.stats.avgRating}
        reviewCount={parseInt(universityInfo.stats.studentsHelped.replace(/\D/g, ''))}
        itemName={`DissertlyPro ${universityInfo.name} Support`}
      />
      
      <LocalBusinessSchema
        name={`DissertlyPro - ${universityInfo.name} Dissertation Support`}
        description={`Professional dissertation and thesis support for ${universityInfo.name} students in ${universityInfo.city}. Expert guidance for Master's and PhD programmes.`}
        address={{
          addressLocality: universityInfo.city.split(',')[0],
          addressRegion: universityInfo.city.includes(',') ? universityInfo.city.split(',')[1].trim() : undefined,
          addressCountry: universityInfo.countryCode,
        }}
        geo={universityInfo.geo}
        telephone="+1 (812) 690-5122"
        url={`https://dissertlypro.com/${region}/${university}`}
        priceRange={`${currency.symbol}${pricing.chapter}-${currency.symbol}${pricing.dissertation}`}
        areaServed={[universityInfo.city, universityInfo.country]}
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-28 bg-gradient-to-br from-midnight via-midnight-rich to-midnight-soft overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-copper/[0.03] rounded-full blur-[120px] hidden md:block" />
        
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-4xl">
            {/* University Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 mb-6">
              <GraduationCap className="h-4 w-4 text-copper-light" />
              <span className="text-sm font-sans text-white/80">{universityInfo.name}</span>
              {universityInfo.ranking && (
                <>
                  <span className="text-white/40">•</span>
                  <span className="text-sm font-sans text-copper-light">{universityInfo.ranking}</span>
                </>
              )}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              {universityInfo.heroTitle}
            </h1>
            
            <p className="text-lg sm:text-xl text-ivory font-sans leading-relaxed mb-8 max-w-3xl">
              {universityInfo.heroSubtitle}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-white/80">
                <Users className="h-5 w-5 text-copper-light" />
                <span className="font-sans">{universityInfo.stats.studentsHelped} {universityInfo.shortName} students helped</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Star className="h-5 w-5 text-copper-light fill-copper-light" />
                <span className="font-sans">{universityInfo.stats.avgRating}/5 rating</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Award className="h-5 w-5 text-copper-light" />
                <span className="font-sans">{universityInfo.stats.completionRate} completion rate</span>
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
          </div>
        </div>
      </section>

      {/* TL;DR Section */}
      <section className="py-12 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <TLDRBlock>
              DissertlyPro provides specialized dissertation support for {universityInfo.name} students. 
              We understand {universityInfo.shortName}'s unique requirements, from {universityInfo.dissertationRequirements.masters} for Master's 
              to {universityInfo.dissertationRequirements.phd} for PhD. With {universityInfo.stats.studentsHelped} {universityInfo.shortName} students 
              helped and a {universityInfo.stats.completionRate} completion rate, we're your trusted academic partner.
            </TLDRBlock>
          </div>
        </div>
      </section>

      {/* University Details Section */}
      <section className="py-16 lg:py-24 bg-cream-warm">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* University Info */}
            <div>
              <span className="inline-block text-copper font-sans font-semibold text-sm tracking-widest uppercase mb-4">
                About {universityInfo.shortName}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                Understanding {universityInfo.name} Requirements
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-copper mt-0.5" />
                  <div>
                    <p className="font-sans font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">{universityInfo.city}, {universityInfo.country}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-copper mt-0.5" />
                  <div>
                    <p className="font-sans font-medium text-foreground">Founded</p>
                    <p className="text-muted-foreground">{universityInfo.founded}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-copper mt-0.5" />
                  <div>
                    <p className="font-sans font-medium text-foreground">Student Population</p>
                    <p className="text-muted-foreground">{universityInfo.studentCount}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-copper mt-0.5" />
                  <div>
                    <p className="font-sans font-medium text-foreground">Notable Departments</p>
                    <p className="text-muted-foreground">{universityInfo.notableDepartments.join(", ")}</p>
                  </div>
                </div>
              </div>

              {/* Research Focus */}
              <div className="flex flex-wrap gap-2">
                {universityInfo.researchFocus.map((focus) => (
                  <span 
                    key={focus}
                    className="px-3 py-1 bg-copper/10 text-copper rounded-full text-sm font-sans"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            {/* Requirements Card */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-subtle">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-copper" />
                  Dissertation Requirements
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-sans font-medium text-foreground mb-1">Master's Thesis</p>
                    <p className="text-muted-foreground text-sm">{universityInfo.dissertationRequirements.masters}</p>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground mb-1">PhD Dissertation</p>
                    <p className="text-muted-foreground text-sm">{universityInfo.dissertationRequirements.phd}</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 shadow-subtle">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-copper" />
                  Key Deadlines
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-sans font-medium text-foreground mb-1">Fall/Autumn Entry</p>
                    <p className="text-muted-foreground text-sm">{universityInfo.deadlines.fall}</p>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground mb-1">Spring/Winter Entry</p>
                    <p className="text-muted-foreground text-sm">{universityInfo.deadlines.spring}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Guide Cross-Link */}
      {universityInfo.blogPostSlug && (
        <section className="py-12 bg-gradient-to-r from-copper/10 via-copper/5 to-copper/10">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <Link 
                to={`/blog/${universityInfo.blogPostSlug}`}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-card rounded-2xl border border-copper/20 hover:border-copper/40 hover:shadow-card transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-copper/10 rounded-xl">
                    <BookOpen className="h-6 w-6 text-copper" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-1 group-hover:text-copper transition-colors">
                      {universityInfo.shortName} PhD Guide
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm">
                      Read our comprehensive guide to {universityInfo.shortName}'s doctoral requirements, milestones, and examination process.
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-copper group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          </div>
        </section>
      )}
      {/* Key Takeaways */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <KeyTakeaways 
              title={`Why ${universityInfo.shortName} Students Choose Us`}
              items={[
                `Deep understanding of ${universityInfo.name}'s academic requirements and expectations`,
                `${universityInfo.stats.studentsHelped} ${universityInfo.shortName} students successfully supported`,
                `Experts familiar with ${universityInfo.shortName}'s specific departmental standards`,
                `Support for both Master's and PhD programmes across all faculties`,
                `${universityInfo.stats.completionRate} on-time completion rate with our guidance`,
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-cream-warm">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-copper font-sans font-semibold text-sm tracking-widest uppercase mb-4">
              {universityInfo.shortName} Support Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Transparent Pricing for {universityInfo.shortName} Students
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              All prices in {currency.code}. No hidden fees.
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

            {/* Full Support - Popular */}
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
                {['All chapters covered', 'Dedicated expert', 'Unlimited revisions', 'Priority support'].map((feature) => (
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

            {/* Monthly Plan */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-subtle hover:shadow-card transition-all">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Monthly Plan</h3>
              <p className="text-sm text-muted-foreground font-sans mb-6">Flexible ongoing support</p>
              <div className="mb-6">
                <span className="text-4xl font-serif font-bold text-foreground">
                  {formatPrice(pricing.monthly, currency)}
                </span>
                <span className="text-muted-foreground font-sans ml-2">per month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Flexible scheduling', 'Progress tracking', 'Priority access', 'Cancel anytime'].map((feature) => (
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

      {/* Testimonials */}
      {universityInfo.testimonials.length > 0 && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-copper font-sans font-semibold text-sm tracking-widest uppercase mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                What {universityInfo.shortName} Students Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {universityInfo.testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 shadow-subtle"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-copper text-copper" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground font-sans leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-midnight flex items-center justify-center text-copper-light font-serif font-bold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-sans font-medium text-foreground text-sm">{testimonial.author}</p>
                      <p className="font-sans text-xs text-muted-foreground">{testimonial.program}, {testimonial.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {universityInfo.faqs.length > 0 && (
        <section className="py-16 lg:py-24 bg-cream-warm">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-copper font-sans font-semibold text-sm tracking-widest uppercase mb-4">
                Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                {universityInfo.shortName} Dissertation FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {universityInfo.faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border p-6 shadow-subtle"
                >
                  <h3 className="font-serif font-semibold text-foreground mb-2 flex items-start gap-2">
                    <Target className="h-5 w-5 text-copper mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Universities */}
      {otherUniversities.length > 0 && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                We Also Support Students At
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {otherUniversities.map((uni) => (
                <Link
                  key={uni.slug}
                  to={`/${region}/${uni.slug}`}
                  className="flex items-center gap-3 bg-card rounded-xl border border-border p-4 hover:shadow-card hover:border-copper/30 transition-all group"
                >
                  <div className="h-10 w-10 rounded-lg bg-copper/10 flex items-center justify-center text-copper group-hover:bg-copper group-hover:text-white transition-colors">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-sans font-medium text-foreground group-hover:text-copper transition-colors block truncate">
                      {uni.shortName}
                    </span>
                    <span className="text-xs text-muted-foreground">{uni.city}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-copper group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-midnight via-midnight-rich to-midnight-soft relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container relative px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-copper/20 text-copper-light mb-6">
              <BookOpen className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-5">
              Ready to Excel at {universityInfo.shortName}?
            </h2>
            <p className="text-ivory font-sans text-lg mb-8">
              Join {universityInfo.stats.studentsHelped} successful {universityInfo.shortName} students. Book your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="copper" size="lg" asChild>
                <Link to="/consultation">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to={`/${region}`}>View All {regionInfo.name} Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UniversityLanding;
