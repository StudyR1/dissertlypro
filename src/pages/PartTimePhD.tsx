import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Clock, 
  Calendar, 
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Home,
  Users,
  Heart,
  Target,
  Lightbulb,
  Scale,
  BookOpen,
  TrendingUp,
  DollarSign,
  Zap,
  Shield,
  Coffee,
  MessageSquare,
  GraduationCap
} from "lucide-react";

const PartTimePhD = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/blog" },
    { name: "Part-Time PhD Guide", url: "/part-time-phd" }
  ];

  const uniqueChallenges = [
    {
      challenge: "Extended Timeline Fatigue",
      icon: Clock,
      description: "6-8 years feels endless. Motivation wanes when peers finish in half the time.",
      impact: "High dropout risk, especially years 3-5",
      solutions: [
        "Set quarterly milestones, not just annual ones",
        "Celebrate small wins publicly (conference papers, chapter drafts)",
        "Connect with other part-time PhDs for mutual support",
        "Visualize progress with tracking tools (words written, hours logged)"
      ]
    },
    {
      challenge: "Employer Relationship Tension",
      icon: Briefcase,
      description: "Bosses may not understand PhD demands. Study leave feels like a favor, not a right.",
      impact: "Career stagnation, resentment, hidden study",
      solutions: [
        "Negotiate study terms before starting (in writing)",
        "Frame PhD benefits for employer (expertise, reputation)",
        "Be transparent about deadlines and critical periods",
        "Consider whether employer support is essential for completion"
      ]
    },
    {
      challenge: "Identity Split",
      icon: Users,
      description: "Neither fully 'professional' nor 'student.' Imposter syndrome in both worlds.",
      impact: "Disconnection from academic and professional communities",
      solutions: [
        "Join professional doctoral networks",
        "Attend conferences to build academic identity",
        "Integrate research into professional work where possible",
        "Accept hybrid identity as a strength, not weakness"
      ]
    },
    {
      challenge: "Family & Relationship Strain",
      icon: Heart,
      description: "Partners and children compete with thesis for evenings and weekends.",
      impact: "Relationship breakdown, guilt, burnout",
      solutions: [
        "Schedule protected study time (agreed with family)",
        "Be present when present—no laptop at dinner",
        "Plan 'milestone celebrations' as family events",
        "Communicate honestly about duration and demands"
      ]
    },
    {
      challenge: "Supervisor Accessibility",
      icon: MessageSquare,
      description: "Can't attend daytime meetings. Feel like a second-class student.",
      impact: "Delayed feedback, weaker relationship, isolation",
      solutions: [
        "Request evening/early morning supervision options",
        "Use asynchronous communication (detailed emails)",
        "Batch questions for efficient meetings",
        "Clarify expectations for response times both ways"
      ]
    },
    {
      challenge: "Financial Complexity",
      icon: DollarSign,
      description: "Self-funded, full fees, no stipend. Every year costs thousands.",
      impact: "Financial stress, pressure to finish, temptation to quit",
      solutions: [
        "Budget for full duration plus contingency",
        "Explore employer fee contributions or tax relief",
        "Consider funding opportunities for part-timers",
        "Factor in opportunity cost of time invested"
      ]
    }
  ];

  const timeManagementStrategies = [
    {
      strategy: "The Protected Block Method",
      description: "Dedicate 2-3 fixed blocks weekly (e.g., Saturday 9am-1pm, Tuesday 6-9pm) that are non-negotiable. Treat them as seriously as work meetings.",
      bestFor: "Those with predictable schedules",
      warning: "Falls apart if you regularly cancel blocks. Protect them fiercely."
    },
    {
      strategy: "The Morning Scholar",
      description: "Write 5-6am before work, even if just 30-60 minutes. Cumulative effect is significant: 5 hours/week adds up to 250+ hours/year.",
      bestFor: "Early risers with demanding jobs",
      warning: "Requires excellent sleep discipline and family cooperation."
    },
    {
      strategy: "The Intensive Burst",
      description: "Save annual leave for writing retreats. A focused week can equal months of fragmented work.",
      bestFor: "Those who can't maintain consistent weekly schedule",
      warning: "Need to stay connected to research between bursts to avoid 'cold start' effect."
    },
    {
      strategy: "The Integration Approach",
      description: "Align PhD with work where possible. Research in your professional field. Use work problems as case studies.",
      bestFor: "Professional doctorates, applied research",
      warning: "Risk of conflict of interest; ensure clear boundaries."
    },
    {
      strategy: "The Semester Sprint",
      description: "Align with academic calendar. Intensive periods during term, lighter touch during teaching-heavy periods.",
      bestFor: "Those in academic or education roles",
      warning: "Progress can feel uneven; track cumulative not weekly output."
    }
  ];

  const employerNegotiationTemplates = [
    {
      scenario: "Initial Study Leave Request",
      template: `Subject: Request for Study Leave Arrangement - Doctoral Programme

Dear [Manager's Name],

I am writing to discuss study leave arrangements for my part-time doctoral programme at [University], which I am undertaking to [brief benefit statement - e.g., deepen expertise in X, bring cutting-edge research to our team].

I would like to propose the following arrangement:
- [X days/hours] study leave per [week/month/term]
- Flexibility to adjust during critical deadlines (thesis submission, examinations)
- [Remote work / flexible hours] options where compatible with role requirements

In return, I commit to:
- Maintaining full performance in my role
- Sharing relevant research insights with the team
- [Specific benefit to employer - e.g., presenting at internal conference, mentoring others]

I believe this arrangement supports both my professional development and [Company's] investment in building [expertise area] capability. I am happy to discuss how we can make this work for both parties.

Could we schedule a meeting to discuss this further?

Best regards,
[Your name]`,
      notes: "Frame it as mutual benefit, not personal request. Be specific about what you're asking and offering."
    },
    {
      scenario: "Deadline Extension Negotiation",
      template: `Subject: Upcoming PhD Milestone - Request for Temporary Schedule Adjustment

Dear [Manager's Name],

I wanted to give you advance notice that I have a significant doctoral deadline approaching: [specific deadline - e.g., thesis chapter submission, annual review].

The deadline is [date], and I would like to request:
- [Specific adjustment - e.g., reduced hours, work from home days, leave]
- Duration: [timeframe]

I have planned my work schedule to ensure minimal disruption:
- [Key deliverables/meetings that will be maintained]
- [Coverage arrangements if applicable]
- [How you'll manage workload]

This is a critical milestone in my doctoral journey, and I am committed to balancing it with my responsibilities here. I appreciate your continued support.

Happy to discuss timing and arrangements that work for the team.

Best regards,
[Your name]`,
      notes: "Give maximum notice. Show you've thought about work impact. Be grateful but not apologetic."
    },
    {
      scenario: "Addressing Workload Conflict",
      template: `Subject: Balancing Work Demands and Doctoral Commitments - Discussion Request

Dear [Manager's Name],

I wanted to have an honest conversation about balancing my current workload with my doctoral commitments. Recently, [specific situation - e.g., increased project demands, additional responsibilities] has made it challenging to maintain progress on my PhD.

I remain fully committed to my role and my research, but I'm concerned that without adjustment, one or both will suffer. I'd like to explore options such as:
- Temporary workload adjustment during [specific period]
- Prioritization of projects during intensive research periods
- Flexibility in how/when I complete certain tasks

I value this role and the support the company has provided for my development. I want to find a sustainable solution rather than risk burnout or underperformance.

Could we schedule a meeting to discuss this openly?

Best regards,
[Your name]`,
      notes: "Be honest early rather than letting performance slip. Most managers prefer proactive conversation."
    }
  ];

  const successStrategies = [
    {
      title: "Ruthless Prioritization",
      description: "You cannot do everything. Cut non-essential commitments. Say no to extras that don't serve work, family, or PhD.",
      icon: Target
    },
    {
      title: "Lowered Perfectionism",
      description: "A finished thesis beats a perfect one. Aim for 'good enough' in iterations. You can refine later.",
      icon: CheckCircle
    },
    {
      title: "Strategic Energy Management",
      description: "Do high-cognition work (writing, analysis) when freshest. Save admin for low-energy periods.",
      icon: Zap
    },
    {
      title: "Visible Progress Tracking",
      description: "Use word counts, chapter percentages, or visual progress bars. Seeing progress maintains motivation.",
      icon: TrendingUp
    },
    {
      title: "Built-In Recovery",
      description: "Schedule breaks between intensive periods. Burnout prevention is part of the plan, not weakness.",
      icon: Coffee
    },
    {
      title: "Exit Strategy Clarity",
      description: "Know your 'minimum viable thesis.' Understand what corners can be cut if life intervenes.",
      icon: Shield
    }
  ];

  const realityChecks = [
    {
      myth: "I can study at night after full work days",
      reality: "Works for some, but cognitive fatigue is real. Morning study often more effective. Evenings might only work for admin tasks.",
      advice: "Experiment with different times. Track when your best work happens."
    },
    {
      myth: "My employer will be supportive",
      reality: "Some are, many aren't. Verbal support doesn't mean practical accommodation. Get agreements in writing.",
      advice: "Clarify expectations before starting. Have backup plan if support evaporates."
    },
    {
      myth: "I'll have more time once [life event] happens",
      reality: "There's always something. Promotions, children, health issues, family needs. The 'right time' rarely arrives.",
      advice: "Start with the time you have. Build systems that work despite life, not around it."
    },
    {
      myth: "Part-time means I can take it slow",
      reality: "Part-time registration doesn't mean part-time standards. The thesis is the same quality; you just have longer to produce it.",
      advice: "Use the time strategically. Don't let extension become procrastination."
    },
    {
      myth: "I can just add an extra year if needed",
      reality: "Extensions have limits and costs. Fees continue. Registration periods expire. Life keeps happening.",
      advice: "Plan to finish within registration. Treat extensions as emergency fallback, not plan A."
    }
  ];

  const faqs = [
    {
      question: "How long does a part-time PhD actually take?",
      answer: "Officially, 5-7 years for most UK programmes, but actual completion often takes 6-8 years. US programs can be longer due to coursework requirements. Plan for the maximum and be pleasantly surprised if you finish early. Factor in at least 6 months contingency for life events."
    },
    {
      question: "Can I switch from part-time to full-time mid-way?",
      answer: "Usually yes, subject to approval and funding availability. This is common when circumstances change (redundancy, sabbatical, research fellowship). Switching the other direction (full-time to part-time) is also typically possible. Discuss options with your graduate school early."
    },
    {
      question: "How many hours per week should I realistically expect to study?",
      answer: "Most successful part-time PhDs commit 15-20 hours per week, including reading, writing, data collection, and administration. Less than 10 hours risks losing momentum; more than 25 risks burnout alongside work. Quality and consistency matter more than raw hours."
    },
    {
      question: "Is it worth doing a PhD part-time if my employer doesn't support it?",
      answer: "It's possible but significantly harder. Without study leave, you're essentially working two jobs. Assess: Can you sustain this for 6+ years? What's the career payoff? Would waiting for a supportive employer or reduced hours be wiser? Some succeed; many burn out."
    },
    {
      question: "How do I stay connected to academia as a part-time student?",
      answer: "Attend conferences (even virtually), join online research communities, participate in departmental seminars when possible, connect with other part-time PhDs. Many institutions have part-time student networks. Twitter/X academic communities can also provide connection."
    },
    {
      question: "What if I need to pause my studies temporarily?",
      answer: "Most institutions offer 'interruption of studies' for valid reasons (health, family, work demands). This pauses your registration clock. Understand the process, maximum duration, and implications for funding/fees. It's better to pause formally than to struggle on ineffectively."
    },
    {
      question: "Will a part-time PhD be viewed differently from a full-time one?",
      answer: "The degree is the same. Examiners judge the thesis, not how long it took. In many fields, part-time PhDs with professional experience are valued for real-world perspective. The mode of study typically isn't even indicated on the certificate."
    }
  ];

  return (
    <Layout>
      <SEO
        title="Part-Time PhD Guide | Work-Life-Research Balance for Doctoral Students"
        description="Comprehensive guide for part-time PhD students: time management strategies, employer negotiation templates, work-life balance tips, and honest advice for completing your doctorate alongside a career."
        keywords={["part-time PhD", "doctoral studies working", "PhD while working", "part-time doctorate", "work life balance PhD", "PhD time management", "employer study support"]}
        canonical="/part-time-phd"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-midnight via-midnight-rich to-midnight overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Tier 2 Resource</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
              The Part-Time PhD <span className="text-gradient-copper">Survival Guide</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Completing a doctorate while holding down a job, maintaining relationships, and staying sane 
              is one of academia's greatest challenges. This guide covers the unique struggles of part-time 
              doctoral students and practical strategies for reaching the finish line.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                <a href="#strategies">
                  Time Management Strategies
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <a href="#employer">Employer Negotiation</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { stat: "40%+", label: "of UK PhDs are part-time" },
              { stat: "6-8 yrs", label: "typical completion time" },
              { stat: "15-20", label: "hours per week needed" },
              { stat: "50%", label: "dropout rate (higher than FT)" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-copper mb-1">{item.stat}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Challenges */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Unique Challenges of Part-Time Doctoral Study
            </h2>
            <p className="text-lg text-muted-foreground">
              Part-time PhDs face challenges full-timers don't. Acknowledging these is the first step to overcoming them.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {uniqueChallenges.map((item, index) => (
              <motion.div
                key={item.challenge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/10">
                        <item.icon className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{item.challenge}</CardTitle>
                        <span className="text-xs text-amber-600">{item.impact}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Solutions</h4>
                      <ul className="space-y-1.5">
                        {item.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                            <span>{solution}</span>
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

      {/* Time Management Strategies */}
      <section id="strategies" className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Time Management Strategies That Actually Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Different approaches suit different lifestyles. Find the one that fits your reality.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {timeManagementStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.strategy}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{strategy.strategy}</h3>
                        <p className="text-muted-foreground mb-3">{strategy.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="flex items-center gap-1.5 text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            Best for: {strategy.bestFor}
                          </span>
                        </div>
                      </div>
                      <div className="md:w-64 shrink-0">
                        <div className="flex items-start gap-2 text-sm bg-amber-500/5 border border-amber-500/20 rounded-lg p-3">
                          <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                          <span className="text-amber-700 dark:text-amber-300">{strategy.warning}</span>
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

      {/* Employer Negotiation */}
      <section id="employer" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Employer Negotiation Templates
            </h2>
            <p className="text-lg text-muted-foreground">
              Getting employer support is crucial. Use these templates to frame requests professionally.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {employerNegotiationTemplates.map((template, index) => (
                <AccordionItem 
                  key={index} 
                  value={`template-${index}`}
                  className="border rounded-xl overflow-hidden bg-card"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                    <div className="flex items-center gap-3 text-left">
                      <Briefcase className="w-5 h-5 text-copper" />
                      <span className="font-semibold">{template.scenario}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap font-mono mb-4">
                      {template.template}
                    </pre>
                    <div className="flex items-start gap-2 text-sm bg-blue-500/5 border border-blue-500/20 rounded-lg p-3">
                      <Lightbulb className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-blue-700 dark:text-blue-300">{template.notes}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Success Strategies */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Six Success Strategies
            </h2>
            <p className="text-lg text-muted-foreground">
              Patterns from those who successfully complete part-time doctorates.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {successStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-xl bg-copper/10 w-fit mx-auto mb-4">
                      <strategy.icon className="w-6 h-6 text-copper" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{strategy.title}</h3>
                    <p className="text-sm text-muted-foreground">{strategy.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reality Checks */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span className="text-amber-600 text-sm font-medium">Honest Truths</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Reality Checks: Myths vs. Truth
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {realityChecks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">The Myth</h4>
                        <p className="text-sm font-medium">"{item.myth}"</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-amber-500 uppercase tracking-wide mb-2">The Reality</h4>
                        <p className="text-sm text-muted-foreground">{item.reality}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-2">The Advice</h4>
                        <p className="text-sm text-muted-foreground">{item.advice}</p>
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
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border rounded-xl overflow-hidden bg-card"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl font-bold text-foreground mb-3">Related Resources</h2>
              <p className="text-muted-foreground">More guides to support your academic journey</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link to="/phd-mental-health" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors w-fit mb-4">
                        <Heart className="w-6 h-6 text-rose-500" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">Mental Health Hub</h3>
                      <p className="text-sm text-muted-foreground">Manage burnout and stress.</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Link to="/deadlines-deferrals" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors w-fit mb-4">
                        <Calendar className="w-6 h-6 text-amber-500" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">Deadlines & Deferrals</h3>
                      <p className="text-sm text-muted-foreground">Navigate extension requests.</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/supervisor-guide" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors w-fit mb-4">
                        <Users className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">Supervisor Guide</h3>
                      <p className="text-sm text-muted-foreground">Manage supervisor relationship.</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Related Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore more guides designed for doctoral students facing common challenges.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Tier 1 Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/supervisor-guide" className="block group h-full">
                <Card className="h-full transition-all hover:shadow-lg hover:border-copper/30">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors shrink-0">
                        <Users className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-copper transition-colors">Supervisor Guide</h3>
                        <p className="text-sm text-muted-foreground">Navigate advisor relationships effectively.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <Link to="/phd-mental-health" className="block group h-full">
                <Card className="h-full transition-all hover:shadow-lg hover:border-copper/30">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors shrink-0">
                        <Heart className="w-5 h-5 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-copper transition-colors">PhD Mental Health</h3>
                        <p className="text-sm text-muted-foreground">Burnout assessment and wellness resources.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/committee-conflicts" className="block group h-full">
                <Card className="h-full transition-all hover:shadow-lg hover:border-copper/30">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors shrink-0">
                        <Scale className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-copper transition-colors">Committee Conflicts</h3>
                        <p className="text-sm text-muted-foreground">Resolve academic disputes professionally.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Tier 2 Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <Link to="/deadlines-deferrals" className="block group h-full">
                <Card className="h-full transition-all hover:shadow-lg hover:border-copper/30">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors shrink-0">
                        <Calendar className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-copper transition-colors">Deadlines & Deferrals</h3>
                        <p className="text-sm text-muted-foreground">Extension request templates and strategies.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/viva-preparation" className="block group h-full">
                <Card className="h-full transition-all hover:shadow-lg hover:border-copper/30">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                        <GraduationCap className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-copper transition-colors">Viva Preparation</h3>
                        <p className="text-sm text-muted-foreground">Mock viva questions and defense tips.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-copper/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Need Support Balancing Work and Research?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our academic advisors specialize in helping part-time students maintain momentum. 
                We can help with writing support, methodology guidance, and strategic planning for your unique situation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                  <Link to="/consultation">
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/working-professionals">
                    Services for Professionals
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartTimePhD;