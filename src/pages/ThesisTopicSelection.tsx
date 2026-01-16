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
  Users,
  Target,
  CheckCircle,
  XCircle,
  Lightbulb,
  Briefcase,
  TrendingUp,
  Search,
  Award,
  Building,
  Globe,
  Zap,
  Heart,
  Star,
  AlertTriangle,
  CheckSquare,
  Compass,
  Rocket,
  BadgeCheck,
  MessageSquare
} from "lucide-react";

const ThesisTopicSelection = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Career-Boosting Thesis Topics", url: "/thesis-topic-selection" }
  ];

  const topicCriteria = [
    {
      criterion: "Personal Interest",
      weight: "25%",
      icon: Heart,
      description: "You'll spend months with this topic. Genuine curiosity sustains motivation when challenges arise.",
      questions: [
        "Does this topic excite you when you think about it?",
        "Would you read about this in your free time?",
        "Can you see yourself discussing this passionately at a conference?"
      ],
      redFlag: "If you're only choosing a topic because it seems 'easy' or 'expected'—reconsider."
    },
    {
      criterion: "Career Alignment",
      weight: "30%",
      icon: Briefcase,
      description: "Your thesis is a professional asset. Strategic topic choice opens doors to specific industries or roles.",
      questions: [
        "What job do you want after graduation?",
        "What skills would that employer value from your thesis?",
        "Could this research become a talking point in interviews?"
      ],
      redFlag: "A topic disconnected from career goals wastes an opportunity for strategic positioning."
    },
    {
      criterion: "Research Feasibility",
      weight: "25%",
      icon: Target,
      description: "Can you actually complete this research within your timeline and resource constraints?",
      questions: [
        "Do you have access to required data or participants?",
        "Is the scope achievable in 6-12 months?",
        "Do you have (or can you develop) the necessary skills?"
      ],
      redFlag: "Overly ambitious topics are the #1 cause of thesis delays and failures."
    },
    {
      criterion: "Supervisor Expertise",
      weight: "20%",
      icon: Users,
      description: "A supervisor with relevant expertise makes everything easier—better guidance, stronger networks, more credibility.",
      questions: [
        "Is there a faculty member who works in this area?",
        "Have they supervised similar projects successfully?",
        "Are they available and willing to supervise you?"
      ],
      redFlag: "Choosing a topic with no suitable supervisor is a recipe for frustration."
    }
  ];

  const industryAlignedTopics = [
    {
      industry: "Technology & Digital",
      icon: Zap,
      hotTopics: [
        "AI ethics and governance in enterprise applications",
        "Cybersecurity culture change in remote organizations",
        "User experience of AI-powered tools in professional settings",
        "Digital transformation barriers in traditional industries",
        "Privacy-preserving technologies and user trust"
      ],
      careerPaths: ["Product Management", "UX Research", "Tech Consulting", "Digital Strategy"],
      whyHot: "Tech companies value graduates who understand both technical and human dimensions of technology."
    },
    {
      industry: "Healthcare & Life Sciences",
      icon: Heart,
      hotTopics: [
        "Patient experience in telehealth vs in-person care",
        "Healthcare worker burnout intervention effectiveness",
        "Health equity in digital health access",
        "Medication adherence behavioral interventions",
        "AI diagnostic tools: clinician acceptance and trust"
      ],
      careerPaths: ["Healthcare Administration", "Health Policy", "Pharma/Biotech", "Health Tech"],
      whyHot: "Post-pandemic healthcare transformation has created massive demand for research-informed professionals."
    },
    {
      industry: "Business & Finance",
      icon: Building,
      hotTopics: [
        "ESG investing and corporate behavior change",
        "Remote work productivity and organizational culture",
        "Consumer behavior shifts in subscription economies",
        "Fintech adoption among underserved populations",
        "Supply chain resilience strategies post-COVID"
      ],
      careerPaths: ["Management Consulting", "Corporate Strategy", "Investment Analysis", "Entrepreneurship"],
      whyHot: "Business schools and employers value research that addresses real organizational challenges."
    },
    {
      industry: "Education & Training",
      icon: GraduationCap,
      hotTopics: [
        "Hybrid learning effectiveness across student populations",
        "Microlearning and skill development in workplaces",
        "AI tutoring systems and learning outcomes",
        "Teacher professional development in digital skills",
        "Student mental health interventions in higher education"
      ],
      careerPaths: ["EdTech", "Corporate Training", "Higher Education Administration", "Policy"],
      whyHot: "Education is being transformed—research that bridges theory and practice is highly valued."
    },
    {
      industry: "Sustainability & Environment",
      icon: Globe,
      hotTopics: [
        "Corporate sustainability reporting and actual behavior",
        "Consumer willingness to pay for sustainable products",
        "Circular economy implementation challenges",
        "Climate change communication effectiveness",
        "Renewable energy adoption barriers in developing markets"
      ],
      careerPaths: ["Sustainability Consulting", "ESG Analysis", "NGO Leadership", "Green Tech"],
      whyHot: "Every organization needs sustainability expertise—this is one of the fastest-growing career areas."
    },
    {
      industry: "Public Policy & Government",
      icon: Building,
      hotTopics: [
        "Policy implementation barriers at local government level",
        "Public trust in institutions and civic engagement",
        "Evidence-based policymaking adoption",
        "Digital government services accessibility",
        "Crisis communication effectiveness in public emergencies"
      ],
      careerPaths: ["Government", "Think Tanks", "International Organizations", "Political Consulting"],
      whyHot: "Policy-relevant research opens doors to government and international organization careers."
    }
  ];

  const narrowingProcess = [
    {
      step: 1,
      title: "Start with a Broad Area of Interest",
      description: "Identify 2-3 general topics that genuinely interest you within your discipline.",
      example: "Broad interest: 'Leadership in organizations'",
      tools: ["Review course materials that engaged you", "Browse recent industry publications", "Talk to professionals in fields you admire"]
    },
    {
      step: 2,
      title: "Identify Current Debates and Gaps",
      description: "What's being discussed in academic and industry literature? Where are the unresolved questions?",
      example: "Current debate: 'How should leadership styles adapt to remote/hybrid work?'",
      tools: ["Scan recent journal abstracts (last 2-3 years)", "Read industry reports (McKinsey, Deloitte, etc.)", "Follow relevant thought leaders on LinkedIn"]
    },
    {
      step: 3,
      title: "Apply Career Lens",
      description: "Filter remaining ideas through your career goals. Which would make the best interview story?",
      example: "Career alignment: 'I want to work in HR consulting—hybrid leadership research is directly relevant'",
      tools: ["Research job postings in your target field", "Talk to people in your desired role", "Consider what makes you unique as a candidate"]
    },
    {
      step: 4,
      title: "Test Feasibility",
      description: "Can you actually research this? Do you have access to data, participants, and time?",
      example: "Feasibility check: 'I can survey remote employees through my internship network'",
      tools: ["Estimate data collection time realistically", "Identify potential obstacles", "Consult with your potential supervisor"]
    },
    {
      step: 5,
      title: "Craft Your Research Question",
      description: "Transform your narrowed topic into a specific, answerable question.",
      example: "Final question: 'How do middle managers adapt their leadership communication styles in hybrid work environments?'",
      tools: ["Use the PICO or PICOT framework", "Ensure the question is neither too broad nor too narrow", "Get supervisor feedback before committing"]
    }
  ];

  const topicMistakes = [
    {
      mistake: "Choosing Based on Perceived 'Ease'",
      description: "Picking a topic because it seems simple or familiar, rather than challenging and valuable.",
      consequence: "Boredom, weak motivation, and a thesis that doesn't differentiate you professionally.",
      solution: "Choose something that stretches you slightly. Growth happens at the edge of your comfort zone."
    },
    {
      mistake: "Ignoring Supervisor Availability",
      description: "Falling in love with a topic before confirming suitable supervision is available.",
      consequence: "Mismatched expertise, poor guidance, or having to significantly modify your topic.",
      solution: "Research potential supervisors early. Your topic should align with available expertise."
    },
    {
      mistake: "Scope Creep from Day One",
      description: "Choosing a topic that's really a PhD-sized project crammed into a Master's timeline.",
      consequence: "Impossible to complete properly, leading to superficial treatment or deadline failures.",
      solution: "Be ruthlessly realistic. A focused, well-executed small study beats an ambitious, incomplete one."
    },
    {
      mistake: "Following Trends Blindly",
      description: "Choosing a 'hot topic' without genuine interest or understanding of why it matters.",
      consequence: "Lack of depth, obvious to examiners, and a poor foundation for professional discussions.",
      solution: "Hot topics work only if you genuinely care about them. Authenticity shows."
    },
    {
      mistake: "Ignoring Career Implications",
      description: "Treating your thesis as purely academic, disconnected from professional goals.",
      consequence: "Missing an opportunity to build expertise, portfolio, and talking points for your career.",
      solution: "Every thesis hour is an investment. Make it work for your future, not just your degree."
    },
    {
      mistake: "Failing to Test Feasibility",
      description: "Assuming data, participants, or resources will be available without verification.",
      consequence: "Hitting walls mid-project, requiring major pivots that waste months of work.",
      solution: "Conduct pilot feasibility checks before committing. Talk to gatekeepers early."
    }
  ];

  const topicFrameworks = [
    {
      name: "The 'Problem-Solution' Framework",
      description: "Start with a real-world problem that matters to employers, then design research to address it.",
      steps: ["Identify a problem your target industry faces", "Research what's been tried", "Propose a research-based approach to understanding or solving it"],
      bestFor: "Applied fields: Business, Healthcare, Education, Public Policy"
    },
    {
      name: "The 'Gap-Filler' Framework",
      description: "Find an understudied area in existing research and design a study to address it.",
      steps: ["Read recent literature reviews in your area", "Identify explicitly stated 'future research' recommendations", "Design a study that addresses one gap"],
      bestFor: "Academic paths or fields with strong research traditions"
    },
    {
      name: "The 'Cross-Pollination' Framework",
      description: "Apply methods or theories from one field to questions in another.",
      steps: ["Identify an interesting methodology or theory from another discipline", "Find a question in your field where it hasn't been applied", "Design a study that bridges the two"],
      bestFor: "Interdisciplinary programs, innovation-focused careers"
    },
    {
      name: "The 'Future-Proofing' Framework",
      description: "Research emerging topics that will become increasingly important in coming years.",
      steps: ["Scan trend reports for your industry", "Identify topics with growing but limited research", "Position yourself as an early expert"],
      bestFor: "Ambitious students targeting emerging industries or roles"
    }
  ];

  const faqs = [
    {
      question: "How specific should my thesis topic be?",
      answer: "Specific enough to be answered thoroughly within your word limit and timeline, but broad enough to have sufficient literature and data sources. A good rule: If you can describe your research question in one clear sentence that a non-expert understands, you're in the right zone. If you need a paragraph, it's too broad. If it sounds like a single survey question, it's too narrow."
    },
    {
      question: "Should I choose a topic my supervisor suggests or one I'm passionate about?",
      answer: "Ideally, both—find the overlap. If forced to choose, lean toward passion with supervisor acceptance rather than supervisor's preference with your indifference. You'll spend months on this; intrinsic motivation matters. However, completely ignoring supervisor expertise limits the quality of guidance you'll receive. The sweet spot is a topic you care about that your supervisor can support."
    },
    {
      question: "Can I change my thesis topic after I start?",
      answer: "Minor adjustments are normal and expected as you learn more through research. Major pivots are possible but costly—they waste time and may require new ethics approval, literature review, and supervisor negotiations. Choose carefully upfront. If a significant change becomes necessary, address it early rather than late."
    },
    {
      question: "How do I know if there's enough literature on my topic?",
      answer: "Conduct a preliminary search in academic databases (Google Scholar, your university library). You should find at least 20-30 relevant sources. Too few sources suggests the topic is too niche or your search terms need adjustment. Too many (hundreds) suggests you need to narrow your focus. The ideal is a manageable body of work with clear gaps for you to address."
    },
    {
      question: "What if my dream topic doesn't align with any supervisor's expertise?",
      answer: "Three options: (1) Modify your topic toward available expertise—often possible without losing what excites you. (2) Propose external co-supervision from another department or institution. (3) Look for supervisors open to learning alongside you in emerging areas. Most important: don't proceed with a topic and no suitable supervision—this rarely ends well."
    },
    {
      question: "How do employers actually view thesis topics?",
      answer: "Most employers care more about your skills and process than the specific topic. They'll look for: research design abilities, analytical thinking, written communication, project management, and subject matter knowledge relevant to their work. The topic is a vehicle for demonstrating these competencies. That said, a strategically chosen topic that aligns with your target industry makes for a compelling interview narrative."
    },
    {
      question: "Should I avoid controversial or sensitive topics?",
      answer: "Not necessarily—some of the most impactful research addresses difficult questions. However, consider: (1) Ethical implications and IRB requirements. (2) Personal emotional impact of immersing yourself in difficult material. (3) Professional implications in conservative industries. (4) Access to participants willing to discuss sensitive topics. If you proceed, ensure strong ethical grounding and appropriate support."
    },
    {
      question: "Can I use my thesis topic for career pivoting?",
      answer: "Absolutely—this is one of the most strategic uses of thesis research. Your thesis lets you build credible expertise in a new area without job experience. Choose a topic in your target field, read extensively, conduct rigorous research, and emerge as someone with demonstrated knowledge and commitment to that domain. Many successful career changers use graduate research this way."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Career-Boosting Thesis Topics: Strategic Selection Guide | DissertlyPro"
        description="Choose a Master's thesis topic that advances your career. Strategic topic selection frameworks, industry-aligned ideas, and expert guidance for maximum professional impact."
        keywords={["thesis topic selection", "Master's thesis ideas", "research topic ideas", "career-aligned thesis", "how to choose thesis topic", "thesis topic examples", "graduate research topics", "thesis career impact"]}
        canonical="https://dissertlypro.com/thesis-topic-selection"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Choose a Career-Boosting Thesis Topic"
        description="Step-by-step guide to selecting a Master's thesis topic that advances your career goals while remaining feasible and engaging."
        totalTime="PT30M"
        steps={[
          { name: "Assess Personal Interest", text: "Identify topics that genuinely excite you. Sustained motivation requires authentic curiosity about your research subject." },
          { name: "Align with Career Goals", text: "Consider your target industry and role. Choose a topic that builds relevant expertise and provides compelling talking points for interviews." },
          { name: "Evaluate Feasibility", text: "Ensure you have access to necessary data, participants, and resources. Confirm the scope is achievable within your timeline." },
          { name: "Identify Suitable Supervision", text: "Find faculty members with relevant expertise who are available and willing to supervise your research." },
          { name: "Narrow Your Focus", text: "Start broad and progressively narrow through literature review and career analysis until you have a specific, answerable research question." },
          { name: "Validate and Commit", text: "Get supervisor approval, conduct preliminary feasibility checks, and finalize your topic before beginning formal research." }
        ]}
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2891}
        itemName="Career-Boosting Thesis Topic Selection Guide"
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
              <Rocket className="w-4 h-4" />
              Strategic Career Development
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Career-Boosting Thesis Topics
              <span className="block text-copper mt-2">Strategic Selection for Maximum Impact</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Your thesis isn't just an academic exercise—it's a professional asset. Learn to choose a topic 
              that advances your career while fulfilling academic requirements.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-copper" />
                <span>30 min strategic read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase className="w-4 h-4 text-copper" />
                <span>Industry-aligned frameworks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="w-4 h-4 text-copper" />
                <span>50+ topic examples</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Topic Selection Matters More Than You Think</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most students approach thesis topic selection backwards. They browse abstract ideas, pick something 
                that sounds academic, and hope for the best. But your thesis represents 500-1000 hours of focused 
                work—arguably the most concentrated professional development opportunity in your Master's program.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                The right topic doesn't just satisfy degree requirements. It builds expertise that employers value, 
                creates talking points for interviews, demonstrates your thinking to future colleagues, and positions 
                you as someone who tackles meaningful problems.
              </p>

              <div className="bg-copper/5 border border-copper/20 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-copper" />
                  The Strategic Mindset Shift
                </h3>
                <p className="text-muted-foreground mb-4">
                  Instead of asking "What can I research?" ask:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span><strong>"What expertise do I want to build for my career?"</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span><strong>"What problems matter to my target industry?"</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span><strong>"What would I be proud to discuss in a job interview?"</strong></span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topic Selection Criteria */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Four Pillars of Topic Selection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Balance these four criteria to find your optimal thesis topic.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {topicCriteria.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-7 h-7 text-copper" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-foreground">{item.criterion}</h3>
                          <span className="text-sm bg-copper/10 text-copper px-2 py-0.5 rounded">
                            {item.weight}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Ask Yourself:</h4>
                      <ul className="space-y-1">
                        {item.questions.map((q, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckSquare className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                        <p className="text-sm text-muted-foreground">{item.redFlag}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Aligned Topics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industry-Aligned Topic Ideas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hot topics by industry that can enhance your employability in specific sectors.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {industryAlignedTopics.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-card border-border hover:border-copper/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-copper/10 flex items-center justify-center">
                          <industry.icon className="w-8 h-8 text-copper" />
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-2">{industry.industry}</h3>
                        <p className="text-sm text-copper mb-4">{industry.whyHot}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Hot Research Topics:</h4>
                            <ul className="space-y-1">
                              {industry.hotTopics.map((topic, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <Lightbulb className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-foreground mb-2">Career Paths:</h4>
                            <div className="flex flex-wrap gap-2">
                              {industry.careerPaths.map((path, i) => (
                                <span key={i} className="text-xs bg-copper/10 text-copper px-2 py-1 rounded">
                                  {path}
                                </span>
                              ))}
                            </div>
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

      {/* Topic Narrowing Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The 5-Step Topic Narrowing Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform broad interests into a focused, feasible research question.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {narrowingProcess.map((step, index) => (
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
                    {index < narrowingProcess.length - 1 && (
                      <div className="w-0.5 h-full bg-copper/30 mx-auto mt-2" />
                    )}
                  </div>
                  
                  <Card className="flex-grow bg-card border-border">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      <div className="bg-copper/5 rounded-lg p-4 mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-1">Example:</h4>
                        <p className="text-sm text-copper italic">{step.example}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Helpful Tools:</h4>
                        <ul className="space-y-1">
                          {step.tools.map((tool, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                              <span>{tool}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Topic Selection Mistakes to Avoid
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from others' errors—these are the most common pitfalls.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {topicMistakes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full bg-card border-l-4 border-l-destructive">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
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

      {/* Topic Frameworks */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Topic Generation Frameworks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four proven approaches to generating compelling research topics.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {topicFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                        <Compass className="w-5 h-5 text-copper" />
                      </div>
                      <h3 className="font-bold text-foreground">{framework.name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{framework.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">How It Works:</h4>
                      <ol className="space-y-1">
                        {framework.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-5 h-5 rounded-full bg-copper/10 flex items-center justify-center text-xs text-copper flex-shrink-0">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="bg-copper/5 rounded-lg p-3">
                      <span className="text-sm font-medium text-foreground">Best For: </span>
                      <span className="text-sm text-copper">{framework.bestFor}</span>
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
              Need Help Refining Your Topic?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert consultants can help you transform vague interests into focused, 
              career-aligned research topics. Get personalized guidance from scholars in your field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                <Link to="/consultation">
                  Get Topic Consultation
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
            <Link to="/dissertation-vs-thesis" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-6">
                  <BookOpen className="w-8 h-8 text-copper mb-4" />
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-copper transition-colors">
                    Dissertation vs Thesis
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Understand the key differences.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/literature-review-guide" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-6">
                  <Search className="w-8 h-8 text-copper mb-4" />
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-copper transition-colors">
                    Literature Review Guide
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Master the art of reviewing research.
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

export default ThesisTopicSelection;
