import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/schemas";
import { serviceSpecificFAQs } from "@/data/serviceFAQs";
import { FloatingOrderButton } from "@/components/cro";
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
  CheckCircle,
  Clock,
  Shield,
  Users,
  Target
} from "lucide-react";

const servicesData: Record<string, {
  icon: typeof FileText;
  title: string;
  description: string;
  longDescription: string;
  whoFor: string[];
  includes: string[];
  deliverables: string[];
  timeline: string;
}> = {
  "dissertation-proposal": {
    icon: FileText,
    title: "Dissertation Proposal Development",
    description: "Craft compelling research proposals that win approval from your committee on the first submission.",
    longDescription: "Your dissertation proposal is the foundation of your entire research journey. Our expert consultants work with you to develop a compelling, well-structured proposal that clearly articulates your research problem, demonstrates scholarly rigor, and presents a feasible methodology. We help you navigate the complex requirements of proposal writing while ensuring your unique voice and research interests shine through.",
    whoFor: [
      "PhD candidates preparing for proposal defense",
      "Master's students developing thesis proposals",
      "Researchers seeking to strengthen weak proposals",
      "Students who received revision requests from committees",
    ],
    includes: [
      "One-on-one consultation with a subject expert",
      "Problem statement refinement and gap identification",
      "Research question development and alignment",
      "Theoretical/conceptual framework design",
      "Methodology overview and justification",
      "Timeline and feasibility analysis",
      "Literature review integration guidance",
      "Multiple revision rounds with feedback",
    ],
    deliverables: [
      "Complete proposal draft (or revision)",
      "Annotated bibliography of key sources",
      "Research timeline template",
      "Committee presentation outline (if needed)",
    ],
    timeline: "2-4 weeks depending on scope and complexity",
  },
  "thesis-writing": {
    icon: BookOpen,
    title: "Thesis & Dissertation Writing Support",
    description: "Expert guidance through every chapter of your research journey, from introduction to conclusion.",
    longDescription: "Writing a thesis or dissertation is a marathon, not a sprint. Our writing support service provides sustained guidance throughout your entire writing process. Whether you need help with a single chapter or ongoing support for your complete dissertation, our PhD-qualified consultants offer expert feedback, structural guidance, and academic writing coaching to help you produce work that meets the highest scholarly standards.",
    whoFor: [
      "PhD students at any stage of dissertation writing",
      "Master's students working on thesis chapters",
      "Researchers struggling with academic writing",
      "International students needing language support",
    ],
    includes: [
      "Chapter-by-chapter writing consultation",
      "Argument development and logical flow review",
      "Academic writing coaching and feedback",
      "Structure and organization optimization",
      "Draft reviews with detailed annotations",
      "Integration of theoretical frameworks",
      "Findings and discussion development",
      "Conclusion and implications guidance",
    ],
    deliverables: [
      "Detailed feedback on each chapter",
      "Structural outline and chapter maps",
      "Writing improvement recommendations",
      "Final proofreading and polish",
    ],
    timeline: "Ongoing support tailored to your schedule",
  },
  "methodology": {
    icon: Settings,
    title: "Research Methodology Design",
    description: "Design robust qualitative, quantitative, or mixed methods frameworks tailored to your research questions.",
    longDescription: "A well-designed methodology is crucial for producing valid, reliable research findings. Our methodology specialists help you select and justify the most appropriate research design for your questions, develop rigorous data collection instruments, and plan for robust analysis. We support qualitative, quantitative, and mixed methods approaches across all disciplines.",
    whoFor: [
      "Students struggling with methodology selection",
      "Researchers needing design validation",
      "PhD candidates preparing for methods chapters",
      "Those transitioning between research paradigms",
    ],
    includes: [
      "Research paradigm and design selection",
      "Sampling strategy development",
      "Data collection instrument design",
      "Interview/survey protocol development",
      "Validity and reliability planning",
      "Ethics application support",
      "Pilot study design",
      "Methodology chapter drafting support",
    ],
    deliverables: [
      "Complete methodology framework document",
      "Data collection instruments",
      "Sampling plan and justification",
      "Ethics application draft",
    ],
    timeline: "1-3 weeks depending on complexity",
  },
  "data-analysis": {
    icon: BarChart3,
    title: "Data Analysis Services",
    description: "Advanced statistical and qualitative analysis using industry-standard software and methodologies.",
    longDescription: "Data analysis can be the most challenging phase of your research. Our analysis experts provide hands-on support with both statistical and qualitative data analysis, using industry-standard software including SPSS, R, STATA, NVivo, and ATLAS.ti. We don't just run the numbers—we help you understand and interpret your findings to build compelling arguments.",
    whoFor: [
      "Researchers with collected data needing analysis",
      "Students learning statistical techniques",
      "PhD candidates preparing findings chapters",
      "Those needing advanced analytical techniques",
    ],
    includes: [
      "Statistical analysis (descriptive and inferential)",
      "Qualitative coding and thematic analysis",
      "Software training (SPSS, R, NVivo, etc.)",
      "Statistical test selection and justification",
      "Results interpretation and reporting",
      "Visualization and table creation",
      "Analysis validation and verification",
      "Findings chapter support",
    ],
    deliverables: [
      "Complete analysis output files",
      "Formatted tables and figures",
      "Written results narrative",
      "Interpretation guidance document",
    ],
    timeline: "1-4 weeks depending on data volume and complexity",
  },
  "literature-review": {
    icon: Search,
    title: "Literature Review Structuring",
    description: "Comprehensive literature reviews with thematic analysis, synthesis, and critical evaluation.",
    longDescription: "A strong literature review demonstrates your mastery of the field and positions your research within the broader scholarly conversation. Our experts help you develop systematic search strategies, organize sources thematically, identify gaps in the literature, and synthesize findings to build a compelling foundation for your study.",
    whoFor: [
      "Students beginning their literature review",
      "Researchers struggling with synthesis",
      "Those needing to update existing reviews",
      "PhD candidates preparing for comprehensive exams",
    ],
    includes: [
      "Systematic search strategy development",
      "Database search and source identification",
      "Thematic organization framework",
      "Critical analysis and synthesis support",
      "Gap identification and positioning",
      "Citation management setup",
      "Literature matrix development",
      "Chapter drafting support",
    ],
    deliverables: [
      "Annotated bibliography",
      "Literature synthesis matrix",
      "Thematic outline",
      "Draft literature review chapter",
    ],
    timeline: "2-4 weeks depending on scope",
  },
  "editing": {
    icon: PenTool,
    title: "Editing & Proofreading",
    description: "Academic English refinement with APA, MLA, Chicago, and Harvard formatting expertise.",
    longDescription: "Polished writing and perfect formatting are essential for academic success. Our editing team includes native English speakers with doctoral degrees who specialize in academic editing. We refine your writing for clarity, flow, and academic tone while ensuring flawless grammar and formatting compliance.",
    whoFor: [
      "Non-native English speakers",
      "Students preparing final submissions",
      "Researchers targeting publication",
      "Those needing formatting compliance",
    ],
    includes: [
      "Comprehensive grammar and style editing",
      "Academic tone and voice refinement",
      "Citation and reference formatting (APA/MLA/Chicago/Harvard)",
      "Consistency checks throughout",
      "Reference list verification",
      "Table and figure formatting",
      "Clarity and readability improvements",
      "Track changes with explanations",
    ],
    deliverables: [
      "Edited manuscript with track changes",
      "Clean final version",
      "Style guide compliance report",
      "Reference list verification",
    ],
    timeline: "3-7 days depending on length",
  },
  "similarity-reduction": {
    icon: FileCheck,
    title: "Turnitin Similarity Reduction",
    description: "Expert paraphrasing and restructuring to ensure your work meets institutional originality standards.",
    longDescription: "High similarity scores can jeopardize your academic standing, even when the content is properly cited. Our specialists analyze your Turnitin report and strategically revise your work through expert paraphrasing, proper citation integration, and source diversification to reduce similarity while maintaining scholarly integrity.",
    whoFor: [
      "Students with high similarity scores",
      "Those resubmitting after plagiarism flags",
      "Researchers updating previous work",
      "International students needing paraphrasing help",
    ],
    includes: [
      "Turnitin report analysis",
      "Strategic paraphrasing of flagged content",
      "Citation integration improvement",
      "Source diversification recommendations",
      "Self-plagiarism resolution",
      "Quote integration optimization",
      "Original writing enhancement",
      "Final similarity verification",
    ],
    deliverables: [
      "Revised document with reduced similarity",
      "Before/after similarity comparison",
      "Paraphrasing strategy guide",
      "Citation improvement report",
    ],
    timeline: "3-7 days depending on document length",
  },
  "supervisor-revisions": {
    icon: MessageSquare,
    title: "Supervisor Comments Revision",
    description: "Expert assistance in addressing supervisor feedback and implementing required changes effectively.",
    longDescription: "Supervisor feedback can sometimes be overwhelming or unclear. Our consultants help you interpret comments, prioritize revisions, and implement changes systematically. We also help you draft professional responses to supervisor queries and develop strategies for productive supervisor-student communication.",
    whoFor: [
      "Students struggling with supervisor feedback",
      "Those facing major revision requests",
      "Researchers with unclear feedback",
      "PhD candidates navigating committee dynamics",
    ],
    includes: [
      "Feedback interpretation and prioritization",
      "Revision strategy development",
      "Point-by-point response drafting",
      "Implementation support for changes",
      "Multiple revision round management",
      "Communication strategy guidance",
      "Progress tracking and documentation",
      "Final response preparation",
    ],
    deliverables: [
      "Revision action plan",
      "Revised manuscript sections",
      "Response to supervisor document",
      "Change log documentation",
    ],
    timeline: "1-2 weeks per revision round",
  },
  "journal-preparation": {
    icon: FileOutput,
    title: "Journal Article Preparation",
    description: "Transform your research into publication-ready manuscripts for peer-reviewed journals.",
    longDescription: "Publishing in peer-reviewed journals requires a specific approach that differs from thesis writing. Our publication specialists help you select appropriate journals, transform your research into article format, and navigate the submission and peer review process to maximize your chances of acceptance.",
    whoFor: [
      "PhD candidates preparing first publications",
      "Researchers targeting specific journals",
      "Those responding to reviewer comments",
      "Faculty seeking publication support",
    ],
    includes: [
      "Journal selection and fit analysis",
      "Manuscript formatting per journal guidelines",
      "Abstract and keyword optimization",
      "Cover letter drafting",
      "Reviewer response preparation",
      "Revision implementation support",
      "Reference formatting",
      "Submission package preparation",
    ],
    deliverables: [
      "Publication-ready manuscript",
      "Cover letter template",
      "Author biography",
      "Submission checklist",
    ],
    timeline: "2-4 weeks depending on scope",
  },
  "formatting": {
    icon: Layers,
    title: "Formatting & Submission Compliance",
    description: "Ensure your dissertation meets all university formatting requirements and submission guidelines.",
    longDescription: "Every university has specific formatting requirements that must be met exactly. Our formatting specialists ensure your dissertation complies with all institutional guidelines, from margins and spacing to table of contents generation and figure placement. We prepare your document for final submission with confidence.",
    whoFor: [
      "Students preparing final submissions",
      "Those receiving formatting rejection",
      "Researchers unfamiliar with requirements",
      "International students new to US/UK formats",
    ],
    includes: [
      "University template compliance verification",
      "Table of contents automation",
      "List of figures and tables creation",
      "Header and footer formatting",
      "Margin and spacing adjustment",
      "Page numbering setup",
      "Appendix formatting",
      "Final submission file preparation",
    ],
    deliverables: [
      "Fully formatted dissertation",
      "PDF/Word final versions",
      "Compliance checklist",
      "Submission-ready package",
    ],
    timeline: "3-5 days",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-serif font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <>
      <FloatingOrderButton />
      <Layout>
      <SEO 
        title={service.title}
        description={service.description}
        canonical={`/services/${slug}`}
        keywords={[service.title.toLowerCase(), 'dissertation help', 'thesis support', 'academic services']}
      />
      <ServiceSchema 
        name={service.title}
        description={service.description}
        url={`/services/${slug}`}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: service.title, url: `/services/${slug}` }
      ]} />
      {slug && serviceSpecificFAQs[slug] && (
        <FAQSchema faqs={serviceSpecificFAQs[slug]} />
      )}
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="container">
          <div className="flex items-center gap-2 text-ivory text-sm font-sans mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary-foreground">{service.title}</span>
          </div>
          <div className="flex items-start gap-6">
            <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-xl bg-gold/20 text-gold flex-shrink-0">
              <ServiceIcon className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-ivory font-sans leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  About This Service
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Who It's For */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Who Is This For?
                </h2>
                <ul className="space-y-3">
                  {service.whoFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground font-sans">
                      <Target className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  What's Included
                </h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground font-sans">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Deliverables
                </h2>
                <div className="bg-ivory-warm rounded-xl p-6">
                  <ul className="space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground font-sans font-medium">
                        <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-card rounded-xl border border-border shadow-card p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    Get Started Today
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm font-sans font-medium text-foreground">Timeline</p>
                        <p className="text-sm text-muted-foreground">{service.timeline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm font-sans font-medium text-foreground">Confidentiality</p>
                        <p className="text-sm text-muted-foreground">100% guaranteed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm font-sans font-medium text-foreground">Expert Match</p>
                        <p className="text-sm text-muted-foreground">PhD-qualified specialists</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="copper" className="w-full" size="lg" asChild>
                      <Link to="/consultation">
                        Get Expert Help
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="midnight-outline" className="w-full" asChild>
                      <Link to="/contact">Request Free Consultation</Link>
                    </Button>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                  <Shield className="h-8 w-8 text-gold mb-4" />
                  <h4 className="font-serif font-semibold mb-2">Our Guarantee</h4>
                  <p className="text-sm text-primary-foreground/80 font-sans">
                    All work is 100% confidential. We never share your documents or personal 
                    information. Your privacy and academic integrity are our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services CTA */}
      <section className="py-16 bg-ivory-warm">
        <div className="container text-center">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
            Need Additional Support?
          </h2>
          <p className="text-muted-foreground font-sans mb-6 max-w-2xl mx-auto">
            Many of our clients combine multiple services for comprehensive research support. 
            Explore our full range of offerings.
          </p>
          <Button variant="midnight" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default ServiceDetail;
