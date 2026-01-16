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
  Compass,
  Globe,
  BookOpen,
  MessageSquare,
  Search,
  Shield,
  AlertTriangle,
  CheckSquare,
  Video,
  Mail,
  Calendar,
  Laptop,
  UserCheck,
  HelpCircle,
  Network,
  Layers,
  Star,
  Brain
} from "lucide-react";

const LimitedSupervision = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Master's Without Supervisor Access", url: "/limited-supervision" }
  ];

  const limitedSupervisionTypes = [
    {
      type: "Fully Online Programs",
      description: "Distance learning Master's where supervisors are contacted exclusively via email or rare video calls.",
      challenges: ["Delayed feedback (days to weeks)", "No informal guidance", "Difficulty building rapport", "Time zone issues"],
      prevalence: "Growing rapidly—now 20%+ of Master's programs",
      icon: Globe
    },
    {
      type: "Part-Time Professional Programs",
      description: "Programs designed for working professionals with minimal structured supervision time.",
      challenges: ["Competing work demands", "Evening/weekend only access", "Supervisor balancing many students", "Less academic immersion"],
      prevalence: "Common in business, education, and health fields",
      icon: Laptop
    },
    {
      type: "Overwhelmed Supervisors",
      description: "Traditional programs where supervisors are too stretched to provide adequate support.",
      challenges: ["Cancelled meetings", "Superficial feedback", "Unresponsive communication", "Conflicting guidance"],
      prevalence: "Affects 30-40% of students in under-resourced programs",
      icon: Users
    },
    {
      type: "Specialist Topic Mismatch",
      description: "Assigned supervisor lacks expertise in your specific research area.",
      challenges: ["Generic feedback only", "No methodological guidance", "Limited literature recommendations", "Weak committee contributions"],
      prevalence: "Common in interdisciplinary or niche topics",
      icon: Search
    }
  ];

  const selfDirectionStrategies = [
    {
      strategy: "Create Your Own Structure",
      description: "Build the scaffolding that supervision normally provides through self-imposed systems and accountability.",
      tactics: [
        "Set weekly milestones with specific deliverables",
        "Create a thesis timeline with built-in checkpoints",
        "Establish regular writing schedules (daily/weekly)",
        "Use project management tools (Trello, Notion, Asana)"
      ],
      tools: ["Gantt chart template", "Weekly progress tracker", "Writing log spreadsheet"],
      icon: Calendar
    },
    {
      strategy: "Build Your Advisory Network",
      description: "Replace single-supervisor dependence with multiple sources of guidance and feedback.",
      tactics: [
        "Identify 2-3 professors for informal consultation",
        "Join thesis writing groups or cohorts",
        "Connect with alumni who completed similar research",
        "Engage with researchers in your field on Twitter/LinkedIn"
      ],
      tools: ["Academic Twitter", "ResearchGate", "LinkedIn groups", "Thesis writing circles"],
      icon: Network
    },
    {
      strategy: "Maximize Limited Contact",
      description: "Make every supervisor interaction count through strategic preparation and follow-up.",
      tactics: [
        "Send agenda 48 hours before any meeting",
        "Prepare specific, answerable questions (not vague concerns)",
        "Take detailed notes during meetings",
        "Follow up with written summary and next steps"
      ],
      tools: ["Meeting preparation template", "Question prioritization framework", "Follow-up email template"],
      icon: MessageSquare
    },
    {
      strategy: "Leverage External Resources",
      description: "Use freely available academic resources to compensate for missing supervisor guidance.",
      tactics: [
        "Follow methodology YouTube channels",
        "Use university writing center services",
        "Attend free webinars on thesis writing",
        "Read 'how-to' books in your methodology"
      ],
      tools: ["Academic writing courses (free)", "Methodology textbooks", "Statistical consulting services"],
      icon: BookOpen
    },
    {
      strategy: "Create Accountability Systems",
      description: "Replace external accountability from supervisors with peer and self-accountability mechanisms.",
      tactics: [
        "Form or join a thesis accountability group",
        "Find a thesis buddy for weekly check-ins",
        "Share public commitments (blog, social media)",
        "Hire a thesis coach for structured accountability"
      ],
      tools: ["Focusmate", "Thesis accountability groups", "Academic coaching services"],
      icon: UserCheck
    }
  ];

  const feedbackAlternatives = [
    {
      source: "Peer Review Exchanges",
      description: "Trade feedback with fellow thesis students. You review theirs; they review yours.",
      quality: "Good for general clarity and argument flow. Limited for specialist content.",
      howToFind: "Thesis writing groups, cohort members, online communities",
      cost: "Free (time investment)"
    },
    {
      source: "Writing Center Consultations",
      description: "University writing centers offer free sessions on academic writing.",
      quality: "Excellent for writing quality, structure, clarity. Not for content expertise.",
      howToFind: "Your university's student services or library",
      cost: "Free (included in tuition)"
    },
    {
      source: "Professional Editing Services",
      description: "Academic editors who provide feedback on writing, structure, and argument.",
      quality: "High quality for writing and presentation. Variable for content depth.",
      howToFind: "University recommendations, professional editing associations",
      cost: "$50-150 per hour or per chapter"
    },
    {
      source: "Subject Matter Experts",
      description: "Researchers in your field who can comment on content and methodology.",
      quality: "Excellent for content relevance and methodological rigor.",
      howToFind: "Conference connections, LinkedIn outreach, ResearchGate",
      cost: "Free (informal) to paid (consulting)"
    },
    {
      source: "Thesis Coaching Services",
      description: "Professional thesis coaches who provide structured guidance and accountability.",
      quality: "Good for process, motivation, structure. Varies for content expertise.",
      howToFind: "Academic coaching services, recommendations from peers",
      cost: "$75-200 per session"
    },
    {
      source: "Online Thesis Communities",
      description: "Reddit, Facebook groups, and forums where students help each other.",
      quality: "Variable. Good for general advice and moral support.",
      howToFind: "r/GradSchool, PhD forums, discipline-specific groups",
      cost: "Free"
    }
  ];

  const communicationTemplates = [
    {
      situation: "Maximizing a Rare Meeting",
      template: `Subject: Meeting Preparation - [Date]

Dear Professor [Name],

Thank you for making time to meet on [date]. To make the most of our limited time, I've prepared:

PRIORITY QUESTIONS (in order of importance):
1. [Most critical question - needs decision or direction]
2. [Second priority - specific feedback request]
3. [If time permits - broader discussion point]

PROGRESS SUMMARY:
• Completed: [1-2 sentences]
• Currently working on: [1-2 sentences]
• Next steps planned: [1-2 sentences]

MATERIALS ATTACHED:
• [Document name and what feedback you need on it]

If any of these require thought in advance, I'm happy to send more context.

Looking forward to our meeting.

Best,
[Your name]`,
      purpose: "Ensures productive use of limited supervisor time"
    },
    {
      situation: "Requesting Asynchronous Feedback",
      template: `Subject: Feedback Request: [Chapter/Section Name] - Response by [Date]

Dear Professor [Name],

I've completed a draft of [section] and would appreciate your feedback when you have time. I understand your schedule is demanding, so I've prepared this to make review as efficient as possible.

DOCUMENT: [Attached - X pages/X words]

SPECIFIC FEEDBACK NEEDED:
1. Is my argument in Section X clear and well-supported?
2. Does my methodology adequately address [specific concern]?
3. Are there critical sources I'm missing in my literature review?

OPTIONAL (if you have more time):
• Any concerns about the overall direction?
• Suggestions for strengthening the analysis?

Ideal timeline: Feedback by [date] would allow me to incorporate changes before [next milestone].

Thank you for your guidance.

Best,
[Your name]`,
      purpose: "Gets specific feedback without requiring synchronous meeting"
    },
    {
      situation: "Reaching Out to External Expert",
      template: `Subject: Master's Research Inquiry: [Brief Topic Description]

Dear Professor/Dr. [Name],

I'm a Master's student at [University] researching [topic]. I've been reading your work on [specific paper/area], and it's directly relevant to my thesis.

I'm writing to ask if you might be willing to briefly discuss [specific aspect]. I have limited supervision access in my program and am seeking expert guidance on [specific methodological/theoretical question].

I understand you're busy, and I would keep any discussion brief. Even a short email response or pointer to relevant resources would be tremendously helpful.

My thesis explores [1-2 sentence summary]. I've attached a brief overview if helpful.

Thank you for considering my request. Your research has significantly informed my work.

Best regards,
[Your name]
[Program, University]`,
      purpose: "Builds external advisory network professionally"
    }
  ];

  const warningSignsToAddress = [
    {
      sign: "No Substantive Feedback for 4+ Weeks",
      action: "Send polite follow-up. If persistent, escalate to graduate coordinator.",
      urgency: "Medium"
    },
    {
      sign: "Supervisor Doesn't Know Your Topic",
      action: "Request topic refresh meeting. Consider proposing co-supervisor with relevant expertise.",
      urgency: "Medium"
    },
    {
      sign: "Consistently Cancelled Meetings",
      action: "Document pattern. Request email feedback as alternative. Escalate if chronic.",
      urgency: "High"
    },
    {
      sign: "Contradictory Guidance",
      action: "Confirm all direction in writing. Reference previous agreements when contradictions arise.",
      urgency: "Medium"
    },
    {
      sign: "No Response to Urgent Deadline Concerns",
      action: "Contact graduate coordinator immediately. Copy supervisor on escalation.",
      urgency: "Critical"
    },
    {
      sign: "Supervisor Taking Extended Leave",
      action: "Request interim supervision. Clarify expectations during absence in writing.",
      urgency: "High"
    }
  ];

  const successStories = [
    {
      situation: "Fully online MBA thesis with supervisor in different timezone (12 hours ahead)",
      challenge: "Never had synchronous meeting. All guidance via email with 3-5 day delays.",
      solution: "Created detailed written updates every 2 weeks. Built relationship with local industry mentor. Used thesis coaching service for accountability.",
      outcome: "Completed on time with distinction. Supervisor commended self-direction."
    },
    {
      situation: "Part-time MEd with supervisor supervising 20+ students",
      challenge: "Meetings cancelled frequently. Feedback superficial ('looks good, continue').",
      solution: "Formed thesis group with 3 other students. Shared feedback on each other's work. Used writing center extensively.",
      outcome: "Peer group produced 3 distinctions and 1 merit. Still meet as writing group."
    },
    {
      situation: "Specialist topic in emerging field—no faculty expertise",
      challenge: "Assigned supervisor acknowledged limited knowledge of research area.",
      solution: "Reached out to researchers at other universities. Built informal advisory board of 4 external experts via LinkedIn.",
      outcome: "Published thesis chapter in peer-reviewed journal with external collaborator."
    }
  ];

  const faqs = [
    {
      question: "Is it normal to feel abandoned in my Master's program?",
      answer: "Unfortunately, yes—it's increasingly common. Budget cuts, rising student numbers, and administrative burdens mean many supervisors are stretched thin. This doesn't make it acceptable, but knowing you're not alone can help. The key is recognizing the situation early and building alternative support systems rather than suffering in silence."
    },
    {
      question: "Should I complain formally about inadequate supervision?",
      answer: "Formal complaints should be a last resort after other approaches fail. First: document everything, attempt direct resolution, and seek informal mediation through your graduate coordinator. If these fail and the situation significantly impacts your progress, formal channels exist for good reason. Many programs have student advocates or ombudspersons who can advise on appropriate steps."
    },
    {
      question: "Can I succeed without a good supervisor?",
      answer: "Yes, absolutely. Many successful academics completed theses with minimal supervision. The skills you develop—self-direction, resourcefulness, network-building—are valuable beyond your degree. That said, advocating for better support is also valid. You shouldn't have to compensate for institutional failures, even if you can."
    },
    {
      question: "How do I build relationships with external experts?",
      answer: "Start by engaging with their work: cite them, comment thoughtfully on their papers, engage on academic social media. When reaching out, be specific about what you're asking (a single question, a brief email exchange) and make it easy for them to help. Most academics remember their own thesis struggles and are willing to help genuine students."
    },
    {
      question: "What if my supervisor just approves everything without real feedback?",
      answer: "This is surprisingly common and dangerous—you may be heading toward an unsuccessful defense without warning. Build alternative feedback sources immediately: peer review, writing center, external experts. When submitting to your supervisor, ask specific questions that require substantive responses, not just approval."
    },
    {
      question: "How do I manage when my supervisor and I are in very different timezones?",
      answer: "Embrace asynchronous communication. Send detailed written updates with specific questions. Use video recordings (Loom, etc.) to explain complex issues. Schedule live meetings rarely but strategically. Build local support networks for regular interaction. Many successful international collaborations work entirely asynchronously."
    },
    {
      question: "Should I pay for thesis coaching if I'm not getting adequate supervision?",
      answer: "It's worth considering, especially if the cost is manageable and you need accountability. Good thesis coaches provide structure, motivation, and general guidance—though not subject expertise. Some students find the investment pays off in faster completion and reduced stress. Interview potential coaches and check references before committing."
    },
    {
      question: "What documentation should I keep regarding supervision issues?",
      answer: "Document everything: meeting dates (including cancellations), email exchanges, feedback received, and your own progress submissions with timestamps. Keep a log of attempts to schedule meetings and supervisor response times. This protects you if you need to request extensions, change supervisors, or file formal concerns."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Master's Without Supervisor Access: Self-Direction Guide | DissertlyPro"
        description="Succeed in your Master's thesis with limited supervision. Strategies for online students, overwhelmed supervisors, and self-directed research. Build your own support network."
        keywords={["limited supervision", "online Master's thesis", "self-directed research", "thesis without supervisor", "distance learning thesis", "thesis support", "supervisor access"]}
        canonical="https://dissertlypro.com/limited-supervision"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Succeed with Limited Thesis Supervision"
        description="Step-by-step guide to completing your Master's thesis successfully when supervisor access is limited due to distance learning, overloaded advisors, or topic mismatch."
        totalTime="PT30M"
        steps={[
          { name: "Assess Your Situation", text: "Identify the specific type of limited supervision you're experiencing and understand the challenges unique to your situation." },
          { name: "Create Your Own Structure", text: "Build self-imposed systems with weekly milestones, timelines, and project management tools to replace external supervision scaffolding." },
          { name: "Build an Advisory Network", text: "Replace single-supervisor dependence with multiple sources of guidance: faculty, alumni, peers, and external experts." },
          { name: "Maximize Limited Contact", text: "Prepare strategically for every supervisor interaction with agendas, specific questions, and follow-up summaries." },
          { name: "Leverage External Resources", text: "Use writing centers, methodology resources, academic communities, and professional services to fill guidance gaps." },
          { name: "Create Accountability Systems", text: "Establish peer accountability through thesis groups, buddies, or coaching to maintain progress without external oversight." }
        ]}
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1423}
        itemName="Limited Supervision Thesis Guide"
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
              <Compass className="w-4 h-4" />
              Self-Directed Research
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Master's Without
              <span className="block text-copper mt-2">Supervisor Access</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Limited supervision doesn't mean limited success. Learn to build your own support systems, 
              maximize rare contact, and complete your thesis through self-directed excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-copper" />
                <span>30 min strategic read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-copper" />
                <span>Communication templates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Network className="w-4 h-4 text-copper" />
                <span>Alternative support networks</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">The Reality of Modern Supervision</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                The image of a thesis supervisor as a mentor who guides you through regular meetings, 
                provides detailed feedback, and champions your work no longer matches reality for many 
                Master's students. Budget pressures, rising enrollments, and the growth of online education 
                mean supervision is often minimal at best.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                This isn't a guide about complaining—it's about winning anyway. The skills you develop 
                navigating limited supervision—self-direction, resourcefulness, network-building—will 
                serve you throughout your career. Many highly successful researchers completed their 
                theses with minimal support.
              </p>

              <div className="bg-copper/5 border border-copper/20 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-copper" />
                  You're Not Alone
                </h3>
                <p className="text-muted-foreground">
                  Research suggests 30-50% of graduate students report inadequate supervision. 
                  This is a systemic issue, not a personal failing. Your job is to succeed despite 
                  the system's limitations—and this guide will show you how.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Limited Supervision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of Limited Supervision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding your situation helps you choose the right strategies.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {limitedSupervisionTypes.map((type, index) => (
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
                      <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{type.type}</h3>
                        <span className="text-xs text-copper">{type.prevalence}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                    
                    <div className="bg-muted/50 rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-foreground mb-2">Common Challenges:</h4>
                      <ul className="space-y-1">
                        {type.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <AlertTriangle className="w-3 h-3 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Direction Strategies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Five Self-Direction Strategies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How to create your own support systems when supervision is limited.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {selfDirectionStrategies.map((strategy, index) => (
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
                      <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center flex-shrink-0">
                        <strategy.icon className="w-6 h-6 text-copper" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-2">{strategy.strategy}</h3>
                        <p className="text-muted-foreground mb-4">{strategy.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Key Tactics:</h4>
                            <ul className="space-y-1">
                              {strategy.tactics.map((tactic, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckSquare className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                                  <span>{tactic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-copper/5 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-foreground mb-2">Useful Tools:</h4>
                            <div className="flex flex-wrap gap-2">
                              {strategy.tools.map((tool, i) => (
                                <span key={i} className="text-xs bg-copper/10 text-copper px-2 py-1 rounded">
                                  {tool}
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

      {/* Feedback Alternatives */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alternative Feedback Sources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Where to get the feedback your supervisor isn't providing.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {feedbackAlternatives.map((alt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-foreground mb-2">{alt.source}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{alt.description}</p>
                    
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-foreground">Quality: </span>
                        <span className="text-muted-foreground">{alt.quality}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Where: </span>
                        <span className="text-muted-foreground">{alt.howToFind}</span>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <span className="font-semibold text-copper">Cost: </span>
                        <span className="text-copper">{alt.cost}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Templates */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Communication Templates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maximize every interaction with strategic communication.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {communicationTemplates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-copper" />
                      {template.situation}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{template.purpose}</p>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-sans overflow-x-auto">
                        {template.template}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Warning Signs to Address
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When to take action beyond self-direction strategies.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {warningSignsToAddress.map((warning, index) => (
                    <div key={index} className={`flex items-start gap-4 p-4 rounded-lg ${
                      warning.urgency === 'Critical' ? 'bg-destructive/10 border border-destructive/20' :
                      warning.urgency === 'High' ? 'bg-orange-500/10 border border-orange-500/20' :
                      'bg-muted/50'
                    }`}>
                      <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        warning.urgency === 'Critical' ? 'text-destructive' :
                        warning.urgency === 'High' ? 'text-orange-500' :
                        'text-yellow-500'
                      }`} />
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground">{warning.sign}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            warning.urgency === 'Critical' ? 'bg-destructive/20 text-destructive' :
                            warning.urgency === 'High' ? 'bg-orange-500/20 text-orange-600' :
                            'bg-yellow-500/20 text-yellow-600'
                          }`}>{warning.urgency}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{warning.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real examples of students who thrived despite limited supervision.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card border-l-4 border-l-copper">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Star className="w-5 h-5 text-copper flex-shrink-0" />
                      <p className="font-semibold text-foreground">{story.situation}</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Challenge: </span>
                        <span className="text-muted-foreground">{story.challenge}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Solution: </span>
                        <span className="text-muted-foreground">{story.solution}</span>
                      </div>
                      <div className="bg-copper/5 rounded-lg p-3">
                        <span className="font-medium text-copper">Outcome: </span>
                        <span className="text-copper">{story.outcome}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
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
              Need Expert Thesis Support?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our PhD-qualified experts can provide the guidance your program isn't offering. 
              From feedback to coaching to complete thesis support.
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
            <Link to="/accelerated-masters" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <Calendar className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Accelerated Programs
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Complete in 12-18 months
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LimitedSupervision;
