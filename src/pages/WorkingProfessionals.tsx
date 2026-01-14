import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { 
  ArrowRight, 
  Briefcase, 
  Clock, 
  Calendar, 
  Target, 
  Users, 
  CheckCircle,
  Moon,
  MessageSquare,
  Milestone,
  Heart
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Work with experts who understand your busy schedule. Schedule consultations around your work hours, not the other way around.",
  },
  {
    icon: Moon,
    title: "Evening & Weekend Support",
    description: "Our team is available during evenings and weekends when you have time to focus on your research.",
  },
  {
    icon: Milestone,
    title: "Milestone-Based Progress",
    description: "Break your dissertation into manageable milestones. Achieve small wins while balancing work, family, and study.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description: "Build a lasting relationship with your expert. Consistent support throughout your entire doctoral journey.",
  },
  {
    icon: MessageSquare,
    title: "Asynchronous Communication",
    description: "No need for synchronous meetings. Share work, receive feedback, and communicate on your own schedule.",
  },
  {
    icon: Heart,
    title: "Stress Management Support",
    description: "We understand the mental toll of balancing multiple responsibilities. Our approach minimizes stress while maximizing progress.",
  },
];

const testimonials = [
  {
    quote: "As a hospital administrator working 60-hour weeks, I thought completing my DBA was impossible. DissertlyPro made it manageable with their flexible approach.",
    author: "James R.",
    role: "DBA, Healthcare Management",
  },
  {
    quote: "Being a mother of three while pursuing my EdD required creative time management. The evening consultations and milestone system kept me on track.",
    author: "Dr. Amanda K.",
    role: "EdD, Educational Leadership",
  },
];

const WorkingProfessionals = () => {
  return (
    <Layout>
      <SEO 
        title="Support for Working Professionals"
        description="Flexible dissertation support designed for working professionals. Evening and weekend consultations, milestone-based progress, and long-term research partnerships for busy executives."
        canonical="/working-professionals"
        keywords={['working professional PhD', 'executive dissertation', 'part-time doctoral', 'flexible thesis support', 'career and research']}
      />
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
                <Briefcase className="h-4 w-4" />
                For Working Professionals
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Your Career Shouldn't Pause for Your Research
              </h1>
              <p className="text-xl text-ivory font-sans leading-relaxed mb-8">
                We specialize in supporting professionals who are advancing their careers while pursuing 
                advanced degrees. Our flexible, milestone-based approach is designed for your reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/consultation">
                    Schedule Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="bg-navy-medium/30 backdrop-blur rounded-2xl p-8 border border-primary-foreground/10">
                <div className="text-center">
                  <div className="text-5xl font-serif font-bold text-gold mb-4">67%</div>
                  <p className="text-ivory font-sans">
                    of our doctoral clients are working professionals
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-primary-foreground/10 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-primary-foreground mb-1">4.2</div>
                    <p className="text-sm text-ivory/80">Years avg. to PhD completion</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-primary-foreground mb-1">24/7</div>
                    <p className="text-sm text-ivory/80">Support availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              We Understand
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Balancing Work, Family, and Doctoral Research
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              You're not a traditional student. You're a professional with responsibilities that don't pause 
              for a dissertation. Our approach acknowledges your reality and adapts to your life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6 shadow-subtle">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-ivory-warm">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              A Partnership Model Built for Your Schedule
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {[
                {
                  title: "Initial Assessment",
                  description: "We assess your current progress, upcoming deadlines, and available time to create a realistic roadmap.",
                },
                {
                  title: "Milestone Planning",
                  description: "Break your research into achievable monthly or quarterly milestones that fit your work schedule.",
                },
                {
                  title: "Flexible Support",
                  description: "Receive expert support through asynchronous feedback, evening calls, or weekend sessions—whatever works for you.",
                },
                {
                  title: "Continuous Progress",
                  description: "Make steady progress without sacrificing your career or family time. Celebrate each milestone achieved.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-foreground font-serif font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl border border-border p-8 shadow-card">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Typical Weekly Commitment
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-ivory-warm rounded-lg">
                  <span className="font-sans text-foreground">Minimum recommended</span>
                  <span className="font-serif font-semibold text-gold">5-8 hours</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-ivory-warm rounded-lg">
                  <span className="font-sans text-foreground">Optimal progress</span>
                  <span className="font-serif font-semibold text-gold">10-15 hours</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-ivory-warm rounded-lg">
                  <span className="font-sans text-foreground">Intensive phase</span>
                  <span className="font-serif font-semibold text-gold">15-20 hours</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-sans mt-6">
                We help you make the most of whatever time you have available, adjusting expectations 
                and support intensity as your schedule changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Success Stories from Working Professionals
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-navy-medium/50 backdrop-blur rounded-xl p-6 border border-primary-foreground/10"
              >
                <p className="text-primary-foreground/90 font-sans text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-serif font-semibold text-primary-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-ivory/80 font-sans text-sm">
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
          <div className="bg-card-gradient rounded-2xl border border-border shadow-elevated p-8 md:p-12 text-center max-w-3xl mx-auto">
            <Calendar className="h-12 w-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Make Progress Without Sacrifice?
            </h2>
            <p className="text-muted-foreground font-sans text-lg mb-8">
              Book a free consultation to discuss your situation. We'll create a personalized 
              plan that respects your professional and personal commitments.
            </p>
            <Button variant="copper" size="xl" asChild>
              <Link to="/consultation">
                Book Your Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkingProfessionals;
