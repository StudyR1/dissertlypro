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
  Clock,
  FileText,
  GraduationCap,
  Users,
  Target,
  CheckCircle,
  XCircle,
  Lightbulb,
  RefreshCw,
  BookOpen,
  Layers,
  PenTool,
  Search,
  Puzzle,
  Sparkles,
  AlertTriangle,
  CheckSquare,
  ArrowUpRight,
  Maximize2,
  Link2,
  Edit3
} from "lucide-react";

const CourseworkToThesis = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Converting Coursework to Thesis", url: "/coursework-to-thesis" }
  ];

  const conversionPrinciples = [
    {
      principle: "Strategic Course Selection",
      description: "Choose electives and assignment topics that directly align with your thesis direction.",
      icon: Target,
      keyInsight: "Every course can contribute to your thesis if you approach it strategically."
    },
    {
      principle: "Topic Continuity",
      description: "Maintain thematic threads across courses, building depth rather than breadth.",
      icon: Link2,
      keyInsight: "Professors often appreciate when students show sustained scholarly interest."
    },
    {
      principle: "Methodological Consistency",
      description: "Use similar methods across assignments to develop expertise applicable to your thesis.",
      icon: Layers,
      keyInsight: "Deep methodological skill beats shallow familiarity with many approaches."
    },
    {
      principle: "Expandable Writing",
      description: "Write assignments as expandable modules—clear structure, thorough citations, room to grow.",
      icon: Maximize2,
      keyInsight: "A well-structured 3,000-word paper can become a 10,000-word chapter."
    }
  ];

  const conversionProcess = [
    {
      step: 1,
      title: "Audit Your Coursework",
      description: "Review all completed and planned assignments. Identify which align with potential thesis topics.",
      actions: [
        "List all assignments with topics and word counts",
        "Rate each on thesis relevance (1-5)",
        "Identify methodological approaches used",
        "Note feedback received and grades earned"
      ],
      timeframe: "Week 1",
      output: "Coursework inventory matrix"
    },
    {
      step: 2,
      title: "Identify Thesis Seeds",
      description: "Find papers that could form the foundation of thesis chapters or inform your research question.",
      actions: [
        "Select top 3-5 most thesis-relevant assignments",
        "Analyze how they connect to each other",
        "Identify gaps that new research could fill",
        "Consider how arguments could be expanded"
      ],
      timeframe: "Week 1-2",
      output: "Thesis seed analysis document"
    },
    {
      step: 3,
      title: "Map to Thesis Structure",
      description: "Determine how existing work fits into a thesis framework and what new research is needed.",
      actions: [
        "Draft preliminary thesis outline",
        "Assign existing papers to potential chapters",
        "Identify chapters requiring new research",
        "Plan how to expand each seed paper"
      ],
      timeframe: "Week 2-3",
      output: "Thesis mapping document"
    },
    {
      step: 4,
      title: "Expand and Connect",
      description: "Transform individual papers into integrated thesis sections with consistent voice and argument.",
      actions: [
        "Expand literature reviews comprehensively",
        "Deepen analysis with additional evidence",
        "Create transitions between sections",
        "Ensure methodological consistency"
      ],
      timeframe: "Ongoing",
      output: "Draft thesis chapters"
    },
    {
      step: 5,
      title: "Integrate and Synthesize",
      description: "Weave expanded sections into a cohesive thesis with unified argument and contribution.",
      actions: [
        "Write introduction framing all sections",
        "Develop overarching theoretical framework",
        "Create conclusion synthesizing findings",
        "Ensure consistent tone and terminology"
      ],
      timeframe: "Final months",
      output: "Complete thesis draft"
    }
  ];

  const chapterMappingExamples = [
    {
      courseworkType: "Literature Review Essay",
      thesisChapter: "Chapter 2: Literature Review",
      conversionSteps: [
        "Expand scope to cover all relevant literature",
        "Add critical analysis of research gaps",
        "Develop theoretical framework",
        "Update with most recent publications",
        "Connect explicitly to your research questions"
      ],
      expansionRatio: "3,000 → 8,000-12,000 words"
    },
    {
      courseworkType: "Methodology Assignment",
      thesisChapter: "Chapter 3: Methodology",
      conversionSteps: [
        "Expand philosophical justifications",
        "Add detailed procedural descriptions",
        "Include ethics considerations",
        "Develop sampling and validity discussions",
        "Add pilot study results if applicable"
      ],
      expansionRatio: "2,500 → 6,000-8,000 words"
    },
    {
      courseworkType: "Case Study Analysis",
      thesisChapter: "Chapter 4/5: Findings",
      conversionSteps: [
        "Add additional cases for comparison",
        "Deepen analytical framework",
        "Include raw data excerpts",
        "Develop thematic analysis",
        "Connect findings to literature"
      ],
      expansionRatio: "4,000 → 10,000-15,000 words"
    },
    {
      courseworkType: "Critical Essay on Theory",
      thesisChapter: "Chapter 2: Theoretical Framework",
      conversionSteps: [
        "Position within broader theoretical landscape",
        "Develop application to your context",
        "Add comparative theoretical perspectives",
        "Connect to methodology choices",
        "Build argument for your theoretical approach"
      ],
      expansionRatio: "3,500 → 5,000-8,000 words"
    },
    {
      courseworkType: "Research Proposal",
      thesisChapter: "Chapter 1: Introduction + Proposal",
      conversionSteps: [
        "Expand problem statement",
        "Develop significance argument",
        "Refine research questions",
        "Add structural overview",
        "Update based on actual research"
      ],
      expansionRatio: "3,000 → 4,000-6,000 words"
    }
  ];

  const commonPitfalls = [
    {
      pitfall: "Patchwork Thesis",
      description: "Simply cutting and pasting papers together without integration, resulting in disjointed arguments.",
      signs: ["Sudden shifts in writing style", "Repeated introductions of concepts", "Contradictory arguments", "No overarching narrative"],
      solution: "Rewrite with unified voice. Use coursework as source material, not final text."
    },
    {
      pitfall: "Scope Mismatch",
      description: "Coursework focused on different scope than thesis requires—either too narrow or too broad.",
      signs: ["Sections feel tangential", "Forced connections", "Uneven depth across chapters", "Difficulty writing transitions"],
      solution: "Adjust thesis scope to fit existing work, or treat coursework as preliminary exploration only."
    },
    {
      pitfall: "Outdated Literature",
      description: "Relying on literature reviews from early coursework without updating for recent publications.",
      signs: ["No citations from past 2 years", "Missing key recent debates", "Outdated theoretical frameworks"],
      solution: "Systematically update literature before submission. Set alerts for new publications."
    },
    {
      pitfall: "Methodological Inconsistency",
      description: "Using different methods across papers that don't integrate into coherent thesis methodology.",
      signs: ["Conflicting epistemological positions", "Mixed methods without justification", "Inconsistent analytical approaches"],
      solution: "Choose one methodological approach and reanalyze existing data consistently."
    },
    {
      pitfall: "Self-Plagiarism Issues",
      description: "Submitting previously graded work without proper acknowledgment or integration.",
      signs: ["Identical paragraphs in multiple submissions", "No indication of prior submission", "Ethical review concerns"],
      solution: "Always disclose prior submissions. Substantially revise and expand—don't just resubmit."
    }
  ];

  const negotiationTemplates = [
    {
      situation: "Requesting Thesis-Aligned Assignment Topic",
      template: `Subject: Assignment Topic Proposal for [Course Name]

Dear Professor [Name],

I'm writing to discuss the upcoming [assignment name] for [course]. I'm particularly interested in exploring [specific topic] as it directly relates to my thesis research on [thesis topic].

I believe this approach would:
1. Allow me to develop deeper expertise in [area]
2. Contribute meaningfully to my thesis literature review/methodology
3. Still fulfill all assignment learning objectives

Would you be open to discussing this possibility? I'm happy to provide a brief proposal showing how my topic meets the assignment criteria.

Thank you for considering this request.

Best regards,
[Your name]`,
      notes: "Send early in the semester. Be specific about how your topic meets learning objectives."
    },
    {
      situation: "Requesting Extension to Develop Thesis-Quality Work",
      template: `Subject: Extension Request for [Assignment] - Enhanced Thesis Integration

Dear Professor [Name],

I'm working on the [assignment] and have realized an opportunity to develop it into a substantial contribution to my thesis research. With additional time, I could:

• Expand the literature review to thesis-chapter scope
• Conduct deeper analysis using [specific method]
• Develop findings that directly inform my thesis contribution

I'm requesting a [X-day] extension to produce work of this enhanced quality. I understand this is discretionary and appreciate any consideration.

Current progress: [Brief status update]
Proposed new deadline: [Specific date]

Thank you for your time.

Best regards,
[Your name]`,
      notes: "Only use when you genuinely plan enhanced work. Don't abuse this approach."
    },
    {
      situation: "Asking Professor to Serve on Thesis Committee",
      template: `Subject: Invitation to Join My Thesis Committee

Dear Professor [Name],

Your course [course name] significantly shaped my thesis direction, particularly regarding [specific concepts/methods]. My thesis explores [brief description], building directly on work I developed in your class.

I would be honored if you would consider joining my thesis committee. Your expertise in [specific area] would strengthen my research on [aspect]. My primary supervisor is [Name], and I'm aiming to defend in [timeframe].

Would you have 15-20 minutes to discuss this possibility?

Thank you for your mentorship this year.

Best regards,
[Your name]`,
      notes: "Leverage the relationship built through coursework. Be specific about their contribution."
    }
  ];

  const faqs = [
    {
      question: "Is using coursework in my thesis considered self-plagiarism?",
      answer: "Not if handled properly. Most institutions allow you to build on your own previous work with appropriate disclosure. Key requirements: (1) Disclose to your supervisor and committee that sections originated as coursework, (2) Substantially revise and expand—don't just copy-paste, (3) Follow your institution's specific policies on prior work, (4) Cite yourself if directly quoting previous submissions. The goal is integration and development, not recycling."
    },
    {
      question: "What if my coursework was in different areas than my thesis topic?",
      answer: "This is common, especially if you discovered your thesis interest mid-program. Options: (1) Look for transferable methodological skills that apply to your thesis, (2) Identify tangential connections that might inform your background chapters, (3) Accept that some coursework won't transfer and focus forward, (4) Use remaining courses strategically for thesis-aligned work. Not all coursework needs to convert—focus on what genuinely fits."
    },
    {
      question: "How much of my thesis can realistically come from coursework?",
      answer: "Typically 15-30% of final thesis content can trace origins to coursework, with substantial revision. The literature review and theoretical framework chapters are most commonly adapted. However, your original research contribution—data collection, analysis, and primary findings—must be new work. Think of coursework as providing foundations, not final content."
    },
    {
      question: "Can I use the same data for coursework and thesis?",
      answer: "Yes, with care. Pilot data collected for coursework can inform thesis methodology. Data analyzed superficially for an assignment can be reanalyzed more deeply for your thesis. Key is ensuring your thesis analysis goes substantially beyond coursework treatment. Some students collect preliminary data for coursework, then expand data collection for their thesis."
    },
    {
      question: "How do I maintain consistency when integrating multiple papers?",
      answer: "Create a style guide before integration: consistent terminology, citation format, heading structure, and argumentative voice. Write transitions that explicitly connect sections. Have someone unfamiliar with your coursework read for coherence. Plan to rewrite substantially—copying and pasting rarely produces consistent prose."
    },
    {
      question: "What if my coursework received poor grades—can I still use it?",
      answer: "Yes, especially if the issues were about depth rather than direction. Address the feedback received: expand underdeveloped arguments, add missing literature, strengthen methodology. A B-grade paper that received constructive feedback can become an A-grade thesis chapter with revision. Use professor comments as revision guides."
    },
    {
      question: "Should I tell my supervisor which parts came from coursework?",
      answer: "Yes, transparency is essential. Share which papers you're building on, what feedback you received, and how you plan to expand them. Good supervisors will appreciate your strategic thinking and may have specific advice on integration. This also protects you from any plagiarism concerns later."
    },
    {
      question: "How do I expand a 3,000-word paper to a 10,000-word chapter?",
      answer: "Expansion strategies: (1) Deepen literature review to cover all relevant scholarship, (2) Add theoretical framework development, (3) Expand methodology justifications, (4) Include more detailed analysis with additional examples, (5) Develop implications and connections to other chapters, (6) Add appropriate appendices. The key is genuine development, not padding."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Converting Coursework to Thesis Research | DissertlyPro"
        description="Transform your Master's coursework into thesis chapters. Strategic approaches to repurposing assignments, expanding papers, and building your thesis efficiently."
        keywords={["coursework to thesis", "thesis from assignments", "repurpose coursework", "Master's thesis strategy", "thesis chapters", "academic writing efficiency", "thesis planning"]}
        canonical="https://dissertlypro.com/coursework-to-thesis"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Convert Coursework into Thesis Research"
        description="Step-by-step guide to strategically repurposing Master's coursework assignments into thesis chapters and research foundations."
        totalTime="PT25M"
        steps={[
          { name: "Audit Your Coursework", text: "Review all completed and planned assignments. Identify which align with potential thesis topics and rate each on thesis relevance." },
          { name: "Identify Thesis Seeds", text: "Select top papers that could form the foundation of thesis chapters. Analyze how they connect to each other and identify gaps." },
          { name: "Map to Thesis Structure", text: "Draft preliminary thesis outline and assign existing papers to potential chapters. Identify chapters requiring new research." },
          { name: "Expand and Connect", text: "Transform individual papers into integrated thesis sections with expanded literature reviews, deeper analysis, and consistent voice." },
          { name: "Integrate and Synthesize", text: "Weave expanded sections into a cohesive thesis with unified argument, introduction, theoretical framework, and conclusion." }
        ]}
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1567}
        itemName="Coursework to Thesis Conversion Guide"
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
              <RefreshCw className="w-4 h-4" />
              Strategic Thesis Building
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Converting Coursework
              <span className="block text-copper mt-2">Into Thesis Research</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Your coursework isn't separate from your thesis—it's the foundation. Learn to strategically 
              transform assignments into thesis chapters and maximize your academic investment.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-copper" />
                <span>25 min strategic read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4 text-copper" />
                <span>Chapter mapping templates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <PenTool className="w-4 h-4 text-copper" />
                <span>Email templates included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">The Hidden Opportunity</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most Master's students treat coursework and thesis as separate phases: complete courses, then 
                start thesis from scratch. This approach wastes months of work. The students who finish faster 
                and produce stronger theses recognize that strategic coursework IS thesis preparation.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every essay, literature review, and methodology assignment is a potential thesis building block. 
                The key is intentional alignment: choosing topics, methods, and arguments that contribute to 
                your ultimate thesis goal, not just individual course grades.
              </p>

              <div className="bg-copper/5 border border-copper/20 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-copper" />
                  The Strategic Mindset
                </h3>
                <p className="text-muted-foreground">
                  Stop asking "What does this professor want?" and start asking "How can this assignment 
                  advance my thesis?" Both questions can have the same answer with careful topic selection 
                  and negotiation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conversion Principles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Four Principles of Conversion
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {conversionPrinciples.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">{item.principle}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        <div className="bg-copper/5 rounded-lg p-3">
                          <div className="flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-copper mt-0.5" />
                            <p className="text-sm text-copper">{item.keyInsight}</p>
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

      {/* Conversion Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The 5-Step Conversion Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to transforming coursework into thesis research.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {conversionProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-copper text-white flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    {index < conversionProcess.length - 1 && (
                      <div className="w-0.5 h-full bg-copper/30 mx-auto mt-2" />
                    )}
                  </div>
                  
                  <Card className="flex-grow bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        <span className="text-xs bg-copper/10 text-copper px-2 py-1 rounded">{step.timeframe}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Key Actions:</h4>
                          <ul className="space-y-1">
                            {step.actions.map((action, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckSquare className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                                <span>{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-foreground mb-1">Deliverable:</h4>
                          <p className="text-sm text-copper">{step.output}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Mapping Examples */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Coursework → Chapter Mapping
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How different types of coursework can transform into thesis chapters.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-4">
            {chapterMappingExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-card border-border hover:border-copper/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      <div className="flex items-center gap-3 lg:w-1/3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <FileText className="w-5 h-5 text-muted-foreground" />
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{example.courseworkType}</p>
                          <div className="flex items-center gap-1 text-copper">
                            <ArrowRight className="w-4 h-4" />
                            <span className="text-sm">{example.thesisChapter}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:w-1/2">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Conversion Steps:</h4>
                        <ul className="space-y-1">
                          {example.conversionSteps.map((step, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-copper mt-0.5 flex-shrink-0" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="lg:w-1/6 bg-copper/10 rounded-lg p-3 text-center">
                        <p className="text-xs font-semibold text-copper">Expansion</p>
                        <p className="text-sm text-foreground font-bold">{example.expansionRatio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Pitfalls to Avoid
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {commonPitfalls.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-card border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <h3 className="font-bold text-foreground">{item.pitfall}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Warning Signs:</h4>
                        <ul className="space-y-1">
                          {item.signs.map((sign, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <XCircle className="w-3 h-3 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span>{sign}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-copper/5 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-foreground mb-1">Solution:</h4>
                        <p className="text-sm text-muted-foreground">{item.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Templates */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Negotiation Templates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional email templates for aligning coursework with thesis goals.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {negotiationTemplates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Edit3 className="w-5 h-5 text-copper" />
                      {template.situation}
                    </h3>
                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                      <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans">
                        {template.template}
                      </pre>
                    </div>
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-copper mt-0.5" />
                      <p className="text-sm text-copper">{template.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-copper/10 via-background to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Help Integrating Your Coursework?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our experts can review your coursework portfolio and help you develop a strategic 
              thesis plan that maximizes your existing work.
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

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <Link to="/masters-thesis-guide" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-6">
                  <GraduationCap className="w-8 h-8 text-copper mb-4" />
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-copper transition-colors">
                    Master's Thesis Guide
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete A-Z roadmap for thesis success.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/literature-review-guide" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-6">
                  <BookOpen className="w-8 h-8 text-copper mb-4" />
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-copper transition-colors">
                    Literature Review Guide
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Master the art of reviewing research.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/thesis-topic-selection" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-6">
                  <Target className="w-8 h-8 text-copper mb-4" />
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-copper transition-colors">
                    Career-Boosting Topics
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Choose a thesis topic strategically.
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

export default CourseworkToThesis;
