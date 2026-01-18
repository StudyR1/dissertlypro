import SEO from "@/components/SEO";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Users, 
  Star,
  CheckCircle,
  ArrowRight,
  Briefcase,
  FileText,
  BarChart3,
  Quote
} from "lucide-react";
import { ExpertAvailabilityBadge, LiveAvailabilityStrip } from "@/components/features";
import PersonSchema, { expertPersonData } from "@/components/schemas/PersonSchema";

const experts = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Senior Research Methodologist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    credentials: ["Ph.D. in Research Methods, Stanford University", "15+ years academic experience", "200+ dissertations guided"],
    expertise: ["Qualitative Research", "Mixed Methods", "Grounded Theory", "Phenomenology"],
    publications: 45,
    studentsHelped: 200
  },
  {
    name: "Dr. Michael Chen",
    title: "Statistical Analysis Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    credentials: ["Ph.D. in Statistics, MIT", "Former Research Director, Harvard Medical School", "Expert in advanced statistical modeling"],
    expertise: ["SPSS & R Programming", "Structural Equation Modeling", "Multivariate Analysis", "Machine Learning"],
    publications: 62,
    studentsHelped: 350
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Academic Writing Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    credentials: ["Ph.D. in English Literature, Yale University", "Published author and editor", "APA & Chicago style expert"],
    expertise: ["Dissertation Structure", "Academic Tone", "Literature Reviews", "Citation Management"],
    publications: 28,
    studentsHelped: 450
  },
  {
    name: "Dr. James Thompson",
    title: "Business & Management Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    credentials: ["DBA from London Business School", "20+ years industry experience", "Former Fortune 500 consultant"],
    expertise: ["Organizational Behavior", "Strategic Management", "Case Study Research", "Business Analytics"],
    publications: 38,
    studentsHelped: 280
  },
  {
    name: "Dr. Priya Sharma",
    title: "Healthcare Research Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    credentials: ["Ph.D. in Public Health, Johns Hopkins", "NIH research fellow", "Clinical trial design expert"],
    expertise: ["Epidemiology", "Health Policy", "Clinical Research", "Systematic Reviews"],
    publications: 55,
    studentsHelped: 175
  },
  {
    name: "Dr. Robert Williams",
    title: "Social Sciences Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    credentials: ["Ph.D. in Sociology, UC Berkeley", "Fulbright Scholar", "Expert in social research methods"],
    expertise: ["Ethnography", "Survey Design", "Content Analysis", "Critical Theory"],
    publications: 42,
    studentsHelped: 220
  }
];

const expertiseAreas = [
  { 
    icon: GraduationCap, 
    title: "Academic Disciplines",
    areas: ["Business & Management", "Psychology", "Education", "Healthcare & Nursing", "Social Sciences", "Engineering", "Computer Science", "Economics"]
  },
  { 
    icon: BarChart3, 
    title: "Research Methods",
    areas: ["Quantitative Analysis", "Qualitative Research", "Mixed Methods", "Action Research", "Case Studies", "Systematic Reviews", "Meta-Analysis", "Grounded Theory"]
  },
  { 
    icon: FileText, 
    title: "Statistical Tools",
    areas: ["SPSS", "R & RStudio", "STATA", "NVivo", "ATLAS.ti", "AMOS", "Python", "SAS"]
  }
];

const studentTestimonials = [
  {
    name: "Alexandra P.",
    role: "PhD in Organizational Psychology, Columbia University",
    consultant: "Dr. Sarah Mitchell",
    consultantTitle: "Senior Research Methodologist",
    testimonial: "Dr. Mitchell transformed my understanding of qualitative research. Her guidance on grounded theory was exceptional—she didn't just help me complete my dissertation, she taught me to think like a researcher. I defended with distinction.",
    rating: 5,
    initials: "AP"
  },
  {
    name: "David K.",
    role: "MBA, Wharton School of Business",
    consultant: "Dr. Michael Chen",
    consultantTitle: "Statistical Analysis Expert",
    testimonial: "I was drowning in data until Dr. Chen stepped in. He broke down complex SEM concepts into digestible pieces and helped me build a model that my committee praised as 'methodologically sophisticated.' His R programming tutorials were invaluable.",
    rating: 5,
    initials: "DK"
  },
  {
    name: "Jennifer M.",
    role: "PhD in Educational Leadership, UCLA",
    consultant: "Dr. Emily Rodriguez",
    consultantTitle: "Academic Writing Specialist",
    testimonial: "My literature review went through 6 drafts before Dr. Rodriguez worked with me. After just two sessions, I finally understood how to synthesize sources and develop my scholarly voice. She's incredibly patient and insightful.",
    rating: 5,
    initials: "JM"
  },
  {
    name: "Marcus R.",
    role: "DBA, London Business School",
    consultant: "Dr. James Thompson",
    consultantTitle: "Business & Management Expert",
    testimonial: "Having a consultant with real Fortune 500 experience made all the difference. Dr. Thompson helped me design a case study methodology that resonated with both academia and industry. His network also helped me secure executive interviews.",
    rating: 5,
    initials: "MR"
  },
  {
    name: "Sophia L.",
    role: "PhD in Public Health, Johns Hopkins",
    consultant: "Dr. Priya Sharma",
    consultantTitle: "Healthcare Research Specialist",
    testimonial: "Dr. Sharma's systematic review expertise is unmatched. She guided me through PRISMA protocols and meta-analysis with such clarity. Thanks to her mentorship, my research has been published in two peer-reviewed journals.",
    rating: 5,
    initials: "SL"
  },
  {
    name: "Thomas W.",
    role: "PhD in Sociology, University of Chicago",
    consultant: "Dr. Robert Williams",
    consultantTitle: "Social Sciences Expert",
    testimonial: "Dr. Williams' ethnographic experience brought depth to my fieldwork that I couldn't have achieved alone. His critical theory insights helped me frame my findings in a way that contributed genuinely to the field. Exceptional mentor.",
    rating: 5,
    initials: "TW"
  }
];

const Experts = () => {
  return (
    <Layout>
      <SEO 
        title="Our Expert Team | DissertlyPro"
        description="Meet our team of PhD-qualified experts with decades of combined experience in research methodology, data analysis, and academic writing across all disciplines."
        canonical="/experts"
        keywords={["dissertation experts", "PhD consultants", "academic writing specialists", "research methodology experts", "data analysis experts", "subject matter experts", "thesis consultants"]}
      />
      
      {/* Person Schema for each expert - E-E-A-T signals */}
      {expertPersonData.map((expert, index) => (
        <PersonSchema
          key={index}
          name={expert.name}
          jobTitle={expert.jobTitle}
          description={expert.description}
          image={expert.image}
          expertise={expert.expertise}
          alumniOf={expert.alumniOf}
          publications={expert.publications}
          hasCredential={expert.hasCredential}
          sameAs={expert.sameAs}
        />
      ))}
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,137,96,0.15),transparent_50%)]" />
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper/10 border border-copper/20 text-copper-light text-xs sm:text-sm font-medium mb-6">
              <Award className="h-4 w-4" aria-hidden="true" />
              PhD-Qualified Specialists
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
              Meet Our Expert <span className="text-gradient-copper">Academic Team</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-ivory max-w-3xl mx-auto leading-relaxed">
              Our team comprises distinguished academics and industry professionals with doctoral degrees 
              from world-renowned institutions, bringing unparalleled expertise to your research journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-cream-warm py-8 border-y border-border">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "50+", label: "Expert Consultants" },
              { value: "270+", label: "Combined Publications" },
              { value: "15+", label: "Countries Represented" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-copper">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Profiles */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Featured <span className="text-gradient-copper">Experts</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of our senior consultants who lead research projects and mentor graduate students worldwide.
            </p>
          </div>

          {/* Live Availability Strip */}
          <LiveAvailabilityStrip experts={experts} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {experts.map((expert, index) => (
              <div 
                key={index} 
                className="group bg-card rounded-2xl border border-border p-6 hover:shadow-card transition-all duration-300 relative"
              >
                {/* Availability Badge - Top Right */}
                <div className="absolute top-4 right-4">
                  <ExpertAvailabilityBadge 
                    expertName={expert.name} 
                    specialty={expert.expertise[0]}
                    size="md"
                  />
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2 border-copper/20"
                    />
                    {/* Small indicator dot on avatar */}
                    <ExpertAvailabilityBadge 
                      expertName={expert.name}
                      size="sm"
                      showLabel={false}
                      className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full shadow-sm"
                    />
                  </div>
                  <div className="flex-1 min-w-0 pr-20">
                    <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-copper transition-colors">
                      {expert.name}
                    </h3>
                    <p className="text-sm text-copper font-medium">{expert.title}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {expert.credentials.map((credential, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-copper shrink-0 mt-0.5" />
                      <span>{credential}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-xs font-medium text-foreground mb-2">Expertise Areas:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {expert.expertise.map((area, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-cream-warm text-xs text-muted-foreground rounded-md"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>{expert.publications} publications</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    <span>{expert.studentsHelped}+ students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 sm:py-24 bg-cream-warm">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Areas of <span className="text-gradient-copper">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team covers a comprehensive range of academic disciplines, research methodologies, and analytical tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {expertiseAreas.map((category, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-copper" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.areas.map((area, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-cream-warm text-sm text-muted-foreground rounded-lg"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper/10 border border-copper/20 text-copper text-xs sm:text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              Student Success Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              What Students Say About Our <span className="text-gradient-copper">Experts</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real testimonials from graduate students who achieved their academic goals with guidance from our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {studentTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group bg-card rounded-2xl border border-border p-6 hover:shadow-card transition-all duration-300 flex flex-col"
              >
                <div className="relative mb-4">
                  <Quote className="absolute -top-1 -left-1 h-8 w-8 text-copper/20" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    "{testimonial.testimonial}"
                  </p>
                </div>

                <div className="flex items-center gap-1 mb-4" role="img" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-copper text-copper" aria-hidden="true" />
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center border border-copper/20">
                      <span className="text-sm font-semibold text-copper">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-cream-warm rounded-lg px-3 py-2">
                    <span className="text-xs text-muted-foreground">Worked with:</span>
                    <span className="text-xs font-medium text-copper">{testimonial.consultant}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Experts */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Why Work With Our <span className="text-gradient-copper">Experts?</span>
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Rigorous Vetting Process", desc: "Every expert undergoes a comprehensive evaluation including credential verification, sample work review, and subject matter testing." },
                  { title: "Matched to Your Needs", desc: "We carefully pair you with an expert whose specialization aligns precisely with your research topic and methodology." },
                  { title: "Continuous Training", desc: "Our team participates in ongoing professional development to stay current with the latest research trends and academic standards." },
                  { title: "Collaborative Approach", desc: "Experts work alongside you, teaching and guiding rather than simply completing tasks, ensuring genuine learning." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-cream-warm/50 hover:bg-cream-warm transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-copper/10 flex items-center justify-center shrink-0">
                      <Star className="h-4 w-4 text-copper" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-hero-gradient rounded-2xl p-8 sm:p-10 text-primary-foreground">
                <Briefcase className="h-12 w-12 text-copper mb-6" aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  Join Our Expert Network
                </h3>
                <p className="text-ivory mb-6">
                  Are you a PhD holder with a passion for mentoring? We're always looking for 
                  qualified academics to join our team of expert consultants.
                </p>
                <Button variant="copper" asChild>
                  <Link to="/contact">
                    Apply to Join
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-hero-gradient">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Work With Our <span className="text-gradient-copper">Experts?</span>
            </h2>
            <p className="text-base sm:text-lg text-ivory mb-8">
              Schedule a free consultation to discuss your research needs and get matched 
              with the perfect expert for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="copper" size="lg" asChild>
                <Link to="/consultation">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experts;
