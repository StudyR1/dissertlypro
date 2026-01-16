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
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  FileText, 
  Calendar,
  Target,
  BookOpen,
  ArrowRight,
  Lightbulb,
  GraduationCap,
  Briefcase,
  Users,
  Shield,
  RefreshCw,
  Zap,
  TrendingUp,
  PenTool,
  Search,
  Database,
  BarChart3,
  Edit3,
  CheckSquare,
  Award,
  MessageSquare,
  Layers
} from "lucide-react";

const MastersThesisGuide = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Master's Thesis Survival Guide", url: "/masters-thesis-guide" }
  ];

  const timelinePhases = [
    {
      phase: "Phase 1: Foundation",
      weeks: "Weeks 1-4",
      title: "Topic Selection & Proposal",
      description: "Identify your research gap, secure supervisor approval, and develop a compelling proposal that will guide your entire project.",
      tasks: [
        "Conduct preliminary literature review",
        "Identify 3-5 potential research topics",
        "Meet with potential supervisors",
        "Develop research questions",
        "Draft and submit proposal"
      ],
      tips: "Start broad, then narrow. Your topic should excite you—you'll spend months with it.",
      icon: Target
    },
    {
      phase: "Phase 2: Research Design",
      weeks: "Weeks 5-8",
      title: "Methodology & Planning",
      description: "Design your research approach, plan data collection, and get ethics approval if needed.",
      tasks: [
        "Finalize research methodology",
        "Design data collection instruments",
        "Apply for ethics approval (if required)",
        "Create detailed research timeline",
        "Begin comprehensive literature review"
      ],
      tips: "Your methodology chapter is often the most scrutinized. Justify every choice.",
      icon: Search
    },
    {
      phase: "Phase 3: Data Collection",
      weeks: "Weeks 9-16",
      title: "Gathering Evidence",
      description: "Execute your research plan, collect data, and maintain meticulous records.",
      tasks: [
        "Conduct interviews, surveys, or experiments",
        "Manage and organize raw data",
        "Keep detailed research journal",
        "Begin preliminary analysis",
        "Continue writing literature review"
      ],
      tips: "Data collection always takes longer than expected. Build in buffer time.",
      icon: Database
    },
    {
      phase: "Phase 4: Analysis",
      weeks: "Weeks 17-22",
      title: "Making Sense of Data",
      description: "Analyze your findings, identify patterns, and connect results to your research questions.",
      tasks: [
        "Complete data analysis (qualitative/quantitative)",
        "Develop themes or test hypotheses",
        "Create visualizations and tables",
        "Draft findings chapter",
        "Begin discussion chapter"
      ],
      tips: "Let the data speak. Don't force findings to match your expectations.",
      icon: BarChart3
    },
    {
      phase: "Phase 5: Writing",
      weeks: "Weeks 23-30",
      title: "Drafting Your Thesis",
      description: "Transform your research into a cohesive, well-argued academic document.",
      tasks: [
        "Complete all thesis chapters",
        "Integrate supervisor feedback",
        "Polish academic writing style",
        "Ensure consistency throughout",
        "Create preliminary reference list"
      ],
      tips: "Write imperfectly, then revise. Perfectionism is the enemy of progress.",
      icon: PenTool
    },
    {
      phase: "Phase 6: Refinement",
      weeks: "Weeks 31-36",
      title: "Editing & Submission",
      description: "Refine every detail, format properly, and prepare for your final submission.",
      tasks: [
        "Complete multiple editing passes",
        "Format according to guidelines",
        "Finalize citations and references",
        "Create abstract, acknowledgments, appendices",
        "Proofread and submit"
      ],
      tips: "Fresh eyes catch more errors. Step away before final proofreading.",
      icon: Edit3
    }
  ];

  const commonMistakes = [
    {
      mistake: "Topic Too Broad",
      description: "Trying to solve world hunger in 15,000 words. Your scope exceeds what's achievable in a Master's thesis.",
      consequence: "Superficial analysis, overwhelming workload, unfocused arguments that fail to impress examiners.",
      solution: "Narrow ruthlessly. A deep analysis of one aspect beats a shallow survey of many. Ask: 'What can I realistically investigate in 6-9 months?'",
      severity: "critical"
    },
    {
      mistake: "Ignoring the Literature Review",
      description: "Treating the lit review as a formality rather than the foundation of your research.",
      consequence: "Weak theoretical framework, reinventing the wheel, missing critical studies that undermine your arguments.",
      solution: "Spend 20-25% of your time on literature review. Map the scholarly conversation. Know who said what, when, and why it matters.",
      severity: "high"
    },
    {
      mistake: "Methodology Mismatch",
      description: "Choosing a methodology because it seems easier, not because it fits your research questions.",
      consequence: "Results that don't answer your questions. Examiners see through misaligned methods immediately.",
      solution: "Start with research questions, then select appropriate methods. Justify every methodological choice in your thesis.",
      severity: "high"
    },
    {
      mistake: "Starting Writing Too Late",
      description: "Waiting until 'all the research is done' before writing a single word.",
      consequence: "Massive time crunch, poor quality writing, insufficient revision time, missed deadlines.",
      solution: "Write from Day 1. Start with your literature review. Writing clarifies thinking—you'll discover gaps in your research while writing.",
      severity: "critical"
    },
    {
      mistake: "Supervisor Avoidance",
      description: "Not meeting regularly with your supervisor, especially when struggling.",
      consequence: "Going down wrong paths for months, missing critical feedback, supervisors unable to help when it matters.",
      solution: "Schedule regular meetings (every 2-3 weeks minimum). Send work in advance. Supervisors can't help if they don't know you're struggling.",
      severity: "medium"
    },
    {
      mistake: "Citation Chaos",
      description: "Inconsistent referencing, last-minute citation panic, or inadequate source documentation.",
      consequence: "Accusations of poor scholarship or unintentional plagiarism. Hours wasted before submission fixing references.",
      solution: "Use reference management software (Zotero, Mendeley) from Day 1. Cite as you write. Never 'add references later.'",
      severity: "medium"
    }
  ];

  const weeklyChecklist = [
    { task: "Review and update research timeline", frequency: "Weekly" },
    { task: "Log progress in research journal", frequency: "Daily" },
    { task: "Backup all files (3 locations minimum)", frequency: "Daily" },
    { task: "Meet with supervisor or send progress update", frequency: "Bi-weekly" },
    { task: "Read and annotate at least 3 new sources", frequency: "Weekly" },
    { task: "Write at least 500 words of thesis content", frequency: "Weekly" },
    { task: "Review and organize research notes", frequency: "Weekly" },
    { task: "Check upcoming deadlines and milestones", frequency: "Weekly" }
  ];

  const defensePreparationTips = [
    {
      title: "Know Your Thesis Inside Out",
      description: "Reread your entire thesis multiple times. Know where every argument is located. Be able to navigate quickly to any section.",
      icon: BookOpen
    },
    {
      title: "Anticipate Questions",
      description: "What are the weakest parts of your argument? What would you challenge? Prepare responses for likely criticisms.",
      icon: Target
    },
    {
      title: "Practice Out Loud",
      description: "Present your thesis to friends, family, or study groups. Speaking about your research builds confidence and reveals gaps.",
      icon: Users
    },
    {
      title: "Prepare Your Presentation",
      description: "Create clear, concise slides (10-15 max). Focus on research questions, methodology, key findings, and implications.",
      icon: FileText
    },
    {
      title: "Manage Nerves",
      description: "Defense nerves are normal. Get good sleep, arrive early, and remember: you are the expert on your research.",
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: "How long should a Master's thesis be?",
      answer: "Length varies by discipline and institution, typically ranging from 15,000-25,000 words for UK/Australian programs and 60-100 pages for North American programs. Always check your specific program guidelines. Quality matters more than length—a focused, well-argued 18,000-word thesis beats a padded 25,000-word one."
    },
    {
      question: "How is a Master's thesis different from a PhD dissertation?",
      answer: "Master's theses are shorter, completed in 1-2 years, and demonstrate competence in research methods. PhD dissertations require original contribution to knowledge, take 3-7 years, and are significantly more comprehensive. Master's research applies existing methodologies; PhDs often develop new ones."
    },
    {
      question: "Can I work while writing my Master's thesis?",
      answer: "Yes, many students do. Part-time work (under 20 hours/week) is generally manageable with good time management. Full-time work is challenging but possible for part-time programs. Key is realistic timeline adjustments and communication with your supervisor about your constraints."
    },
    {
      question: "What if I don't finish my thesis on time?",
      answer: "Most programs offer extensions for valid reasons (health, family emergencies, data collection delays). Some allow deferral to the next submission period. Consequences vary—some programs charge fees for extensions, others affect funding. Contact your graduate office early if you're falling behind."
    },
    {
      question: "How do I choose between qualitative and quantitative methods?",
      answer: "Let your research questions guide you. 'How' and 'why' questions often suit qualitative methods. 'How many' and 'what relationship' questions suit quantitative methods. Many Master's theses use mixed methods. Discuss options with your supervisor based on your specific research goals."
    },
    {
      question: "Is it normal to feel lost during my thesis?",
      answer: "Absolutely. Nearly every Master's student experiences periods of confusion, self-doubt, or feeling overwhelmed. These feelings often peak during data analysis and early writing phases. Maintain regular supervisor contact, connect with peers, and remember that confusion is part of the learning process."
    },
    {
      question: "What happens if my thesis fails?",
      answer: "Outright failure is rare if you've been meeting with your supervisor and addressing feedback. Most programs allow resubmission with major revisions. Some require additional coursework. In extreme cases, students may exit with a Postgraduate Diploma instead of a Master's degree. Early intervention prevents most failures."
    },
    {
      question: "Should I publish my Master's thesis?",
      answer: "Publishing depends on your career goals and research quality. If pursuing academia, publication strengthens your CV significantly. Strong Master's theses can be adapted into journal articles or conference papers. Discuss publication potential with your supervisor—they can guide you toward appropriate outlets."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Master's Thesis Survival Guide: Complete A-Z Roadmap | DissertlyPro"
        description="Navigate your Master's thesis from topic selection to successful defense. Proven strategies, timeline templates, and expert tips for completing your thesis on time. Free resources included."
        keywords={["Master's thesis guide", "how to write a thesis", "Master's dissertation help", "thesis writing tips", "graduate thesis", "thesis timeline", "thesis defense preparation", "Master's degree completion"]}
        canonical="https://dissertlypro.com/masters-thesis-guide"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Complete Your Master's Thesis Successfully"
        description="Step-by-step guide to navigating your Master's thesis from initial topic selection through successful defense, with timeline management and writing strategies."
        totalTime="PT45M"
        steps={[
          { name: "Select Your Topic", text: "Identify a focused, manageable research topic that aligns with your interests and career goals. Conduct preliminary research to ensure adequate sources exist." },
          { name: "Develop Your Proposal", text: "Create a compelling research proposal outlining your questions, methodology, and timeline. Secure supervisor approval before proceeding." },
          { name: "Design Your Research", text: "Finalize your methodology, design data collection instruments, and obtain ethics approval if required. Plan your research timeline in detail." },
          { name: "Conduct Your Research", text: "Collect data systematically, maintain detailed records, and begin preliminary analysis. Continue building your literature review throughout this phase." },
          { name: "Analyze Your Findings", text: "Apply appropriate analytical methods to your data. Identify patterns, develop themes, and connect findings to your research questions." },
          { name: "Write and Revise", text: "Draft all thesis chapters, integrate supervisor feedback, and polish your academic writing. Ensure consistency and coherence throughout the document." },
          { name: "Prepare for Defense", text: "Create your presentation, anticipate examiner questions, and practice explaining your research. Submit your thesis and prepare for your oral defense." }
        ]}
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={3156}
        itemName="Master's Thesis Survival Guide"
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
              <GraduationCap className="w-4 h-4" />
              Essential Guide for Master's Students
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Master's Thesis Survival Guide
              <span className="block text-copper mt-2">Your Complete A-Z Roadmap</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From your first research question to your final defense—everything you need to complete your 
              Master's thesis successfully, on time, and with your sanity intact.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-copper" />
                <span>45 min comprehensive read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4 text-copper" />
                <span>Free timeline templates included</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-copper" />
                <span>Based on 3,000+ student experiences</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">The Master's Thesis Challenge</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your Master's thesis is likely the most significant academic project you've undertaken. Unlike coursework with 
                its structured deadlines and clear expectations, thesis work demands independence, self-direction, and sustained 
                effort over months. It's simultaneously exciting and terrifying.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                The good news? Thousands of students complete successful theses every year, and with the right approach, you 
                will too. This guide distills the collective wisdom of academic advisors, successful graduates, and research 
                on thesis completion into actionable strategies you can apply immediately.
              </p>

              <div className="bg-copper/5 border border-copper/20 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-copper" />
                  What This Guide Covers
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Complete 36-week timeline with phase-by-phase guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Critical mistakes that derail theses—and how to avoid them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Defense preparation strategies and common examiner questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Weekly checklists and progress tracking tools</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The 36-Week Master's Thesis Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A realistic roadmap for completing your thesis. Adjust timelines based on your program requirements 
              and research complexity.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {timelinePhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-copper/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-copper/10 flex items-center justify-center">
                          <phase.icon className="w-8 h-8 text-copper" />
                        </div>
                        <div className="mt-2 text-center">
                          <span className="text-xs font-medium text-copper">{phase.weeks}</span>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-copper">{phase.phase}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                        <p className="text-muted-foreground mb-4">{phase.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Key Tasks:</h4>
                            <ul className="space-y-1">
                              {phase.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckSquare className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-copper/5 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                              <Lightbulb className="w-4 h-4 text-copper" />
                              Pro Tip
                            </h4>
                            <p className="text-sm text-muted-foreground">{phase.tips}</p>
                          </div>
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

      {/* Common Mistakes Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Critical Mistakes That Derail Master's Theses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from others' experiences. These are the most common pitfalls and how to avoid them.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {commonMistakes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className={`h-full bg-card border-l-4 ${
                  item.severity === 'critical' ? 'border-l-destructive' : 
                  item.severity === 'high' ? 'border-l-orange-500' : 'border-l-yellow-500'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${
                        item.severity === 'critical' ? 'text-destructive' : 
                        item.severity === 'high' ? 'text-orange-500' : 'text-yellow-500'
                      }`} />
                      <h3 className="font-bold text-foreground">{item.mistake}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="text-sm mb-3">
                      <span className="font-medium text-destructive">Consequence: </span>
                      <span className="text-muted-foreground">{item.consequence}</span>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <span className="font-medium text-copper text-sm">Solution: </span>
                      <span className="text-sm text-muted-foreground">{item.solution}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Checklist Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Weekly Thesis Progress Checklist
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Consistent progress beats sporadic intensity. Use this checklist to stay on track.
              </p>
            </motion.div>

            <Card className="bg-card border-border">
              <CardContent className="p-6 md:p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {weeklyChecklist.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <CheckSquare className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-foreground font-medium">{item.task}</p>
                        <span className="text-xs text-copper">{item.frequency}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Defense Preparation Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preparing for Your Defense
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your oral defense is the final hurdle. Here's how to cross it with confidence.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defensePreparationTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                      <tip.icon className="w-6 h-6 text-copper" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <Card className="bg-copper/5 border-copper/20">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-copper" />
                  Common Defense Questions to Prepare For
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">• Why did you choose this topic?</p>
                    <p className="text-sm text-muted-foreground">• What is your main contribution?</p>
                    <p className="text-sm text-muted-foreground">• What are the limitations of your study?</p>
                    <p className="text-sm text-muted-foreground">• How does your work fit into existing literature?</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">• Why did you choose this methodology?</p>
                    <p className="text-sm text-muted-foreground">• What would you do differently?</p>
                    <p className="text-sm text-muted-foreground">• What are the implications of your findings?</p>
                    <p className="text-sm text-muted-foreground">• Where do you see future research going?</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-muted/30">
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answers to the questions every Master's student asks.
            </p>
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
              Need Expert Thesis Support?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our PhD-qualified experts have helped thousands of Master's students complete successful theses. 
              From proposal development to final editing, we're here to help.
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
            <Link to="/dissertation-vs-thesis" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <BookOpen className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Dissertation vs Thesis
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Key differences explained
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
            <Link to="/qualitative-analysis" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <Search className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Qualitative Analysis
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Coding & thematic methods
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
            <Link to="/citation-mastery" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <FileText className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Citation Mastery
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    APA, MLA, Chicago styles
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/accelerated-masters" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <Clock className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Accelerated Programs
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Complete in 12-18 months
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/coursework-to-thesis" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <Layers className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Coursework to Thesis
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Convert course papers
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/limited-supervision" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <Users className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Limited Supervision
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Thrive with absent advisors
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

export default MastersThesisGuide;
