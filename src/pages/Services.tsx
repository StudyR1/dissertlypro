import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { 
  ArrowRight, 
  FileText, 
  BookOpen, 
  Settings, 
  BarChart3, 
  Search, 
  PenTool,
  FileCheck,
  MessageSquare,
  FileOutput,
  Layers,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: FileText,
    slug: "dissertation-proposal",
    title: "Dissertation Proposal Development",
    description: "Craft compelling research proposals that win approval from your committee on the first submission.",
    features: [
      "Problem statement refinement",
      "Research question development",
      "Theoretical framework design",
      "Methodology overview",
      "Timeline and feasibility analysis",
    ],
  },
  {
    icon: BookOpen,
    slug: "thesis-writing",
    title: "Thesis & Dissertation Writing Support",
    description: "Expert guidance through every chapter of your research journey, from introduction to conclusion.",
    features: [
      "Chapter-by-chapter support",
      "Argument development",
      "Academic writing coaching",
      "Structure optimization",
      "Draft reviews and feedback",
    ],
  },
  {
    icon: Settings,
    slug: "methodology",
    title: "Research Methodology Design",
    description: "Design robust qualitative, quantitative, or mixed methods frameworks tailored to your research questions.",
    features: [
      "Research design selection",
      "Sampling strategy development",
      "Data collection instrument design",
      "Validity and reliability planning",
      "Ethics application support",
    ],
  },
  {
    icon: BarChart3,
    slug: "data-analysis",
    title: "Data Analysis Services",
    description: "Advanced statistical and qualitative analysis using industry-standard software and methodologies.",
    features: [
      "SPSS, R, STATA analysis",
      "NVivo & ATLAS.ti coding",
      "Statistical test selection",
      "Results interpretation",
      "Visualization creation",
    ],
  },
  {
    icon: Search,
    slug: "literature-review",
    title: "Literature Review Structuring",
    description: "Comprehensive literature reviews with thematic analysis, synthesis, and critical evaluation.",
    features: [
      "Systematic search strategy",
      "Thematic organization",
      "Gap identification",
      "Critical synthesis",
      "Citation management",
    ],
  },
  {
    icon: PenTool,
    slug: "editing",
    title: "Editing & Proofreading",
    description: "Academic English refinement with APA, MLA, Chicago, and Harvard formatting expertise.",
    features: [
      "Grammar and style editing",
      "Citation formatting",
      "Consistency checks",
      "Academic tone refinement",
      "Reference verification",
    ],
  },
  {
    icon: FileCheck,
    slug: "similarity-reduction",
    title: "Turnitin Similarity Reduction",
    description: "Expert paraphrasing and restructuring to ensure your work meets institutional originality standards.",
    features: [
      "Similarity report analysis",
      "Strategic paraphrasing",
      "Proper citation integration",
      "Source diversification",
      "Originality verification",
    ],
  },
  {
    icon: MessageSquare,
    slug: "supervisor-revisions",
    title: "Supervisor Comments Revision",
    description: "Expert assistance in addressing supervisor feedback and implementing required changes effectively.",
    features: [
      "Feedback interpretation",
      "Revision strategy planning",
      "Response drafting",
      "Multiple revision rounds",
      "Progress tracking",
    ],
  },
  {
    icon: FileOutput,
    slug: "journal-preparation",
    title: "Journal Article Preparation",
    description: "Transform your research into publication-ready manuscripts for peer-reviewed journals.",
    features: [
      "Journal selection guidance",
      "Manuscript formatting",
      "Abstract optimization",
      "Cover letter drafting",
      "Revision response support",
    ],
  },
  {
    icon: Layers,
    slug: "formatting",
    title: "Formatting & Submission Compliance",
    description: "Ensure your dissertation meets all university formatting requirements and submission guidelines.",
    features: [
      "University template compliance",
      "Table of contents automation",
      "Figure and table formatting",
      "Margin and spacing adjustment",
      "Final submission preparation",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Comprehensive Postgraduate Research Support
            </h1>
            <p className="text-xl text-primary-foreground/80 font-sans leading-relaxed">
              Expert assistance across every phase of your Master's or PhD journey. 
              Each service is delivered by specialists with advanced degrees in your field.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl border border-border shadow-subtle hover:shadow-card transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-gold/10 group-hover:text-gold transition-colors flex-shrink-0">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="midnight-outline" size="sm" asChild>
                    <Link to={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-ivory-warm">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-muted-foreground font-sans text-lg mb-8">
              Book a free consultation with our academic advisors. We'll assess your needs and 
              recommend the best support package for your research journey.
            </p>
            <Button variant="copper" size="xl" asChild>
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

export default Services;
