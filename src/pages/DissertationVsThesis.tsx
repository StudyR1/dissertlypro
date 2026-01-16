import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, AggregateRatingSchema, FAQSchema } from "@/components/schemas";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight,
  BookOpen,
  Clock,
  FileText,
  GraduationCap,
  Award,
  Users,
  Target,
  CheckCircle,
  XCircle,
  Scale,
  Lightbulb,
  Globe,
  Building,
  Layers,
  PenTool,
  Search,
  MessageSquare,
  TrendingUp,
  Brain
} from "lucide-react";

const DissertationVsThesis = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Dissertation vs Thesis", url: "/dissertation-vs-thesis" }
  ];

  const comparisonTable = [
    {
      aspect: "Degree Level",
      thesis: "Master's degree (postgraduate)",
      dissertation: "Doctoral degree (PhD, EdD, DBA)",
      notes: "This is the primary distinguishing factor in most contexts"
    },
    {
      aspect: "Typical Length",
      thesis: "15,000-25,000 words (UK/AU) or 60-100 pages (US/CA)",
      dissertation: "80,000-100,000 words (UK/AU) or 150-300+ pages (US/CA)",
      notes: "Dissertations are typically 3-4x longer than theses"
    },
    {
      aspect: "Timeline",
      thesis: "6-18 months (often 1 academic year)",
      dissertation: "3-7 years (often 4-5 years)",
      notes: "PhD timelines vary significantly by discipline and country"
    },
    {
      aspect: "Research Scope",
      thesis: "Applies existing knowledge and methods to a focused question",
      dissertation: "Creates original contribution to knowledge in the field",
      notes: "This is the fundamental academic distinction"
    },
    {
      aspect: "Supervision",
      thesis: "Single supervisor (sometimes with second reader)",
      dissertation: "Primary supervisor + committee (2-4 members)",
      notes: "PhD candidates typically have more extensive oversight"
    },
    {
      aspect: "Defense/Viva",
      thesis: "Oral defense (30-60 minutes) or none at all",
      dissertation: "Formal viva voce (1-3 hours) with external examiners",
      notes: "PhD vivas are more rigorous and consequential"
    },
    {
      aspect: "Publication Expectation",
      thesis: "Publication not typically required",
      dissertation: "Often expected to yield peer-reviewed publications",
      notes: "Many PhD programs require publications before graduation"
    },
    {
      aspect: "Career Impact",
      thesis: "Professional advancement, possible PhD entry",
      dissertation: "Academic positions, research careers, senior leadership",
      notes: "Each serves different career trajectories"
    }
  ];

  const regionalDifferences = [
    {
      region: "United Kingdom & Europe",
      icon: Building,
      thesisDefinition: "Submitted for Master's degrees (MA, MSc, MRes). Typically 15,000-25,000 words.",
      dissertationDefinition: "Submitted for doctoral degrees (PhD, DPhil). Typically 80,000-100,000 words.",
      keyNote: "UK terminology is consistent: thesis = Master's, dissertation = PhD. European countries generally follow this convention."
    },
    {
      region: "United States & Canada",
      icon: Globe,
      thesisDefinition: "Can refer to EITHER Master's or PhD work. Master's thesis: 60-100 pages.",
      dissertationDefinition: "Typically reserved for doctoral work. PhD dissertation: 150-300+ pages.",
      keyNote: "US terminology is less strict. Some institutions use terms interchangeably. Always check your program's specific requirements."
    },
    {
      region: "Australia & New Zealand",
      icon: Globe,
      thesisDefinition: "Master's by Research thesis: 20,000-40,000 words. Coursework Master's may have shorter 'dissertation'.",
      dissertationDefinition: "PhD thesis: 80,000-100,000 words. Note: Australians often call PhD work a 'thesis'.",
      keyNote: "Australia often uses 'thesis' for both Master's and PhD. Context determines meaning."
    }
  ];

  const structuralComparison = {
    thesis: [
      { chapter: "Introduction", pages: "8-12", purpose: "Research problem, questions, significance, structure overview" },
      { chapter: "Literature Review", pages: "20-30", purpose: "Critical analysis of existing research, theoretical framework" },
      { chapter: "Methodology", pages: "15-20", purpose: "Research design, data collection methods, ethical considerations" },
      { chapter: "Findings/Results", pages: "20-30", purpose: "Presentation of data and analysis" },
      { chapter: "Discussion", pages: "15-20", purpose: "Interpretation, implications, connection to literature" },
      { chapter: "Conclusion", pages: "5-8", purpose: "Summary, limitations, recommendations" }
    ],
    dissertation: [
      { chapter: "Introduction", pages: "20-35", purpose: "Comprehensive problem statement, research gap, original contribution claim" },
      { chapter: "Literature Review", pages: "40-80", purpose: "Exhaustive critical review, theoretical framework development" },
      { chapter: "Methodology", pages: "30-50", purpose: "Detailed methodological justification, novel approaches if applicable" },
      { chapter: "Findings (often multiple chapters)", pages: "60-100", purpose: "Comprehensive data presentation across themes or studies" },
      { chapter: "Discussion", pages: "40-60", purpose: "Deep interpretation, theoretical contributions, field implications" },
      { chapter: "Conclusion", pages: "15-25", purpose: "Contribution summary, future research agenda, final reflections" }
    ]
  };

  const defenseComparison = [
    {
      type: "Master's Thesis Defense",
      duration: "30-60 minutes",
      examiners: "1-2 internal examiners (supervisor + reader)",
      format: "Brief presentation (10-15 min) + questions",
      outcomes: ["Pass", "Pass with minor revisions", "Major revisions required", "Fail (rare)"],
      atmosphere: "Generally supportive and formative",
      tips: "Focus on clearly explaining your contribution and methodology. Questions are typically clarifying rather than challenging."
    },
    {
      type: "PhD Dissertation Viva",
      duration: "1-3 hours",
      examiners: "2-3 examiners including external examiner from another institution",
      format: "Extended presentation (20-30 min) + rigorous questioning",
      outcomes: ["Pass", "Minor corrections", "Major corrections", "Revise and resubmit", "Fail"],
      atmosphere: "Rigorous examination, professional but challenging",
      tips: "Know your thesis intimately. Anticipate critiques. Be prepared to defend methodological choices and acknowledge limitations confidently."
    }
  ];

  const whichIsRight = [
    {
      situation: "You want to advance in your current career field",
      recommendation: "Master's Thesis",
      reasoning: "Faster completion (1-2 years) means quicker career benefits. Demonstrates research competence without multi-year commitment."
    },
    {
      situation: "You want to become a university professor or lead researcher",
      recommendation: "PhD Dissertation",
      reasoning: "Academic positions typically require doctoral qualifications. The dissertation demonstrates capacity for independent, original research."
    },
    {
      situation: "You're testing whether research is right for you",
      recommendation: "Master's Thesis",
      reasoning: "Lower risk way to experience academic research. If you love it, you can pursue a PhD afterward."
    },
    {
      situation: "You want to deeply specialize in a narrow topic",
      recommendation: "PhD Dissertation",
      reasoning: "PhDs allow 3-5 years of focused study. Master's timelines limit depth of specialization."
    },
    {
      situation: "You're balancing work and study",
      recommendation: "Master's Thesis (part-time)",
      reasoning: "Many part-time Master's programs exist. Part-time PhDs are possible but significantly extend completion time."
    },
    {
      situation: "You want maximum earning potential quickly",
      recommendation: "Consider your field",
      reasoning: "In some fields (business, tech), Master's ROI is excellent. In academia and research, PhD is often necessary for senior roles."
    }
  ];

  const faqs = [
    {
      question: "Is a dissertation harder than a thesis?",
      answer: "Generally yes, but 'harder' means different things. A PhD dissertation requires original contribution to knowledge, takes 3-7 years, and demands deeper intellectual rigor. However, a Master's thesis can feel intense because of its compressed timeline. Both are challenging relative to their contexts. The dissertation is more intellectually demanding; the thesis often feels more time-pressured."
    },
    {
      question: "Can I use my Master's thesis as a starting point for a PhD?",
      answer: "Absolutely—this is common and encouraged. Many PhD students build on Master's research, either extending it to new contexts, addressing limitations, or pursuing questions that emerged from earlier work. This gives you a head start with existing literature knowledge and refined research skills. Just ensure your PhD proposal demonstrates significant extension beyond the Master's work."
    },
    {
      question: "Why do Americans use 'thesis' and 'dissertation' differently?",
      answer: "Historical convention. American graduate education developed somewhat independently from British traditions. In the US, 'thesis' originally described any substantial argument-based document. Over time, 'dissertation' became associated with doctoral work, but the distinction never became as rigid as in the UK. Always verify your institution's specific terminology."
    },
    {
      question: "How many publications should come from a dissertation vs thesis?",
      answer: "For Master's theses: publication is a bonus, not a requirement. Strong theses might yield one journal article or conference paper. For PhD dissertations: expectations vary by field. STEM fields often expect 2-4 publications before graduation. Humanities may expect fewer. Many programs now require published work as part of the PhD requirements."
    },
    {
      question: "Can you get a PhD without a Master's degree?",
      answer: "Yes, in many countries. The UK, Australia, and increasingly the US allow direct entry to PhD programs from undergraduate degrees. These programs may include a built-in MPhil component or be longer to compensate. However, having a Master's can strengthen PhD applications and provide valuable research experience."
    },
    {
      question: "Which takes longer to write: the writing or the research?",
      answer: "For Master's theses, research and writing are roughly equal in time commitment. For PhD dissertations, research typically dominates (2-4 years) with intensive writing in the final 1-2 years. However, experienced researchers advise writing throughout. Writing clarifies thinking and often reveals gaps in research that need addressing."
    },
    {
      question: "What happens if I don't finish my thesis or dissertation?",
      answer: "Consequences vary. For Master's: some programs allow deferral, others offer alternative credentials (Postgraduate Diploma). For PhDs: ABD (All But Dissertation) status is common but carries no formal recognition. Some programs allow returning to complete after years away. Time limits and financial implications vary by institution—check your program's policies."
    },
    {
      question: "Is online/distance learning possible for thesis and dissertation programs?",
      answer: "Yes, increasingly so. Many reputable universities offer online Master's programs with thesis components. Online PhDs are growing but less common, and some fields (lab sciences) require on-campus presence. Quality varies significantly—ensure any program has proper accreditation and adequate supervision resources for remote students."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Dissertation vs Thesis: Key Differences Explained | DissertlyPro"
        description="Understand the fundamental differences between dissertations and theses. Compare scope, length, defense requirements, and career implications. Regional variations explained."
        keywords={["dissertation vs thesis", "thesis definition", "dissertation definition", "PhD vs Master's", "graduate research differences", "what is a dissertation", "what is a thesis", "academic writing"]}
        canonical="https://dissertlypro.com/dissertation-vs-thesis"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Understand the Difference Between Dissertation and Thesis"
        description="Step-by-step guide to understanding the key distinctions between dissertations and theses, including scope, length, and academic expectations."
        totalTime="PT25M"
        steps={[
          { name: "Understand the Degree Distinction", text: "Recognize that in most contexts, theses are for Master's degrees while dissertations are for doctoral degrees (PhD). This is the primary distinguishing factor." },
          { name: "Compare Scope and Originality", text: "Understand that theses apply existing knowledge to focused questions, while dissertations require original contributions to the field." },
          { name: "Consider Regional Variations", text: "Learn that terminology varies by country—UK uses terms strictly, while US usage is less consistent. Always verify your institution's specific requirements." },
          { name: "Evaluate Timeline Differences", text: "Plan for 6-18 months for a Master's thesis versus 3-7 years for a PhD dissertation. Choose based on your career goals and time availability." },
          { name: "Understand Defense Requirements", text: "Prepare for different examination formats—Master's defenses are typically shorter and less formal than PhD vivas." },
          { name: "Assess Career Implications", text: "Consider which path aligns with your goals—Master's for professional advancement, PhD for academic or research-focused careers." }
        ]}
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2654}
        itemName="Dissertation vs Thesis Guide"
        itemType="EducationalOrganization"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-copper/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-copper/10 text-copper px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Clarifying Academic Terminology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Dissertation vs Thesis
              <span className="block text-copper mt-2">Understanding the Key Differences</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Confused by academic terminology? You're not alone. Learn the crucial differences 
              between dissertations and theses—and why it matters for your academic journey.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-copper" />
                <span>25 min comprehensive read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4 text-copper" />
                <span>Regional variations covered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-copper" />
                <span>Expert academic guidance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Answer Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">The Quick Answer</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-card border-l-4 border-l-copper">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">Thesis</h3>
                        <span className="text-sm text-copper">Master's Degree</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      A substantial research project demonstrating mastery of research methods and 
                      understanding of a specific topic. Applies existing knowledge to answer focused research questions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">Dissertation</h3>
                        <span className="text-sm text-primary">Doctoral Degree (PhD)</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      An extended piece of original research making a significant contribution to knowledge 
                      in your field. Develops new theories, methods, or findings that advance the discipline.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-copper/5 border border-copper/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-copper" />
                  The Fundamental Distinction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The core difference isn't just length—it's about <strong>original contribution</strong>. 
                  A thesis demonstrates you can conduct research competently using established methods. 
                  A dissertation proves you can contribute something new to human knowledge. Both are valuable, 
                  but they represent different levels of scholarly achievement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Side-by-side analysis of the key differences between Master's theses and PhD dissertations.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-card border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-4 font-semibold text-foreground">Aspect</th>
                      <th className="text-left p-4 font-semibold text-copper">Master's Thesis</th>
                      <th className="text-left p-4 font-semibold text-primary">PhD Dissertation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, index) => (
                      <tr key={index} className="border-t border-border hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-medium text-foreground">{row.aspect}</td>
                        <td className="p-4 text-muted-foreground">{row.thesis}</td>
                        <td className="p-4 text-muted-foreground">{row.dissertation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Differences */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Regional Terminology Differences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic terminology varies by country. Here's how different regions use these terms.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {regionalDifferences.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-copper/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <region.icon className="w-6 h-6 text-copper" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-4">{region.region}</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-semibold text-copper mb-2">Thesis</h4>
                            <p className="text-sm text-muted-foreground">{region.thesisDefinition}</p>
                          </div>
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-semibold text-primary mb-2">Dissertation</h4>
                            <p className="text-sm text-muted-foreground">{region.dissertationDefinition}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-copper mt-1 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{region.keyNote}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Structural Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How the chapters and sections differ between thesis and dissertation formats.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card border-copper/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-8 h-8 text-copper" />
                    <h3 className="text-xl font-bold text-foreground">Master's Thesis Structure</h3>
                  </div>
                  <div className="space-y-4">
                    {structuralComparison.thesis.map((chapter, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0 text-sm font-medium text-copper">
                          {index + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{chapter.chapter}</span>
                            <span className="text-xs text-copper">({chapter.pages} pages)</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{chapter.purpose}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">PhD Dissertation Structure</h3>
                  </div>
                  <div className="space-y-4">
                    {structuralComparison.dissertation.map((chapter, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm font-medium text-primary">
                          {index + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{chapter.chapter}</span>
                            <span className="text-xs text-primary">({chapter.pages} pages)</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{chapter.purpose}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Defense Comparison */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Defense & Examination Differences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What to expect when defending your thesis versus your dissertation.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {defenseComparison.map((defense, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">{defense.type}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-copper" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Duration:</span>
                          <span className="text-sm text-muted-foreground ml-2">{defense.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-copper" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Examiners:</span>
                          <span className="text-sm text-muted-foreground ml-2">{defense.examiners}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-copper mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Format:</span>
                          <span className="text-sm text-muted-foreground ml-2">{defense.format}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-copper mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-foreground">Atmosphere:</span>
                          <span className="text-sm text-muted-foreground ml-2">{defense.atmosphere}</span>
                        </div>
                      </div>

                      <div className="bg-muted/30 rounded-lg p-4 mt-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Possible Outcomes:</h4>
                        <div className="flex flex-wrap gap-2">
                          {defense.outcomes.map((outcome, i) => (
                            <span key={i} className="text-xs bg-copper/10 text-copper px-2 py-1 rounded">
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-copper/5 border border-copper/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-copper mt-0.5" />
                          <p className="text-sm text-muted-foreground">{defense.tips}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Which Is Right for You */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Which Path Is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consider these scenarios to help determine whether a Master's thesis or PhD dissertation aligns with your goals.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {whichIsRight.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-card border-border hover:border-copper/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-grow">
                        <h3 className="font-semibold text-foreground mb-2">{item.situation}</h3>
                        <p className="text-sm text-muted-foreground">{item.reasoning}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                          item.recommendation === "Master's Thesis" 
                            ? 'bg-copper/10 text-copper' 
                            : item.recommendation === "PhD Dissertation"
                            ? 'bg-primary/10 text-primary'
                            : 'bg-muted text-foreground'
                        }`}>
                          {item.recommendation === "Master's Thesis" && <GraduationCap className="w-4 h-4" />}
                          {item.recommendation === "PhD Dissertation" && <Award className="w-4 h-4" />}
                          {item.recommendation === "Consider your field" && <Scale className="w-4 h-4" />}
                          {item.recommendation}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-copper py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-copper/10 via-background to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Thesis or Dissertation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're pursuing a Master's or PhD, our expert team can help you succeed. 
              Get personalized guidance from scholars who've been there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                <Link to="/consultation">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-copper text-copper hover:bg-copper/10">
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Related Resources
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/masters-thesis-guide" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <GraduationCap className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Master's Thesis Guide
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Complete A-Z roadmap
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/thesis-topic-selection" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <Target className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Career-Boosting Topics
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Strategic topic selection
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/masters-defense" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <MessageSquare className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Defense Preparation
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Ace your oral exam
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/qualitative-analysis" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <Brain className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Qualitative Analysis
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Coding & thematic methods
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DissertationVsThesis;
