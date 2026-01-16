import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Users, 
  AlertTriangle, 
  CheckCircle,
  MessageSquare,
  FileText,
  ArrowRight,
  Scale,
  Lightbulb,
  Target,
  Shield,
  XCircle,
  RefreshCw,
  Zap,
  Clock,
  BookOpen
} from "lucide-react";

const CommitteeConflicts = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/blog" },
    { name: "Committee Conflict Resolution", url: "/committee-conflicts" }
  ];

  const conflictTypes = [
    {
      type: "Contradictory Feedback",
      icon: RefreshCw,
      description: "Committee members give you opposing directions. One wants more theory; another says cut theory. One loves your methodology; another thinks it's flawed.",
      frequency: "Very Common",
      impact: "Paralysis, wasted work, extended timeline",
      example: "Professor A says your literature review needs to be more focused on recent work. Professor B says you're ignoring foundational texts. You're stuck in the middle."
    },
    {
      type: "Power Struggles Between Members",
      icon: Zap,
      description: "Committee members use your dissertation as a battleground for their own academic disagreements or interpersonal conflicts.",
      frequency: "Common",
      impact: "Caught in crossfire, political navigation required",
      example: "Two faculty members disagree about a theoretical approach in the field. Your committee meetings become debates between them, with you as collateral damage."
    },
    {
      type: "Absentee Committee Members",
      icon: Clock,
      description: "One or more members are chronically unavailable, miss meetings, don't read drafts, or delay responses for months.",
      frequency: "Very Common",
      impact: "Delayed feedback, incomplete guidance, frustrated student",
      example: "Your external committee member hasn't responded to emails in 3 months. Your defense is approaching and you need their approval."
    },
    {
      type: "Scope Disagreements",
      icon: Target,
      description: "Members have fundamentally different views about what your dissertation should accomplish or how ambitious it should be.",
      frequency: "Common",
      impact: "Unclear expectations, scope creep or restrictions",
      example: "Your advisor thinks a three-paper dissertation is fine. Your committee member insists on five chapters with a unified argument. Who's right?"
    },
    {
      type: "Methodological Disputes",
      icon: Scale,
      description: "Committee members from different methodological traditions challenge your approach based on their own preferences, not your research questions.",
      frequency: "Common",
      impact: "Fundamental questioning of your approach mid-stream",
      example: "Your qualitative study is critiqued by a quantitative committee member who keeps asking for larger samples and statistical tests."
    }
  ];

  const resolutionStrategies = [
    {
      strategy: "Document Everything in Writing",
      description: "After every meeting, send a summary email to all committee members. 'To summarize today's discussion, I understand I should [specific actions].' This creates accountability and reveals contradictions early.",
      steps: [
        "Send meeting summary within 24 hours",
        "Be specific: quote decisions, not vibes",
        "CC all committee members on summaries",
        "Request corrections within one week",
        "Reference past summaries when contradictions arise"
      ],
      template: `Subject: Summary: Committee Meeting [Date]

Dear Committee Members,

Thank you for meeting with me today. To ensure I correctly understood our discussion, here's my summary of key decisions and next steps:

**Key Decisions:**
1. [Decision 1]
2. [Decision 2]

**Feedback to Address:**
- [Specific feedback point 1]
- [Specific feedback point 2]

**Next Steps & Timeline:**
- [Action item with deadline]

Please let me know by [date] if I've misunderstood anything. I'll proceed with this plan unless I hear otherwise.

Thank you,
[Your name]`
    },
    {
      strategy: "Request a Synthesis Meeting",
      description: "When contradictions become unworkable, request a meeting with all committee members present specifically to align on direction. Frame it as seeking clarity, not complaining about confusion.",
      steps: [
        "Prepare a one-page summary of the conflicting guidance",
        "Present it neutrally: 'I want to ensure I understand the different perspectives'",
        "Ask committee to discuss and reach consensus",
        "Document the agreed direction",
        "Follow up in writing immediately"
      ],
      template: `Subject: Request: Brief Alignment Meeting on [Specific Issue]

Dear [Committee Members],

As I work on [chapter/section], I've received thoughtful feedback that I'd like to synthesize effectively. I believe a brief meeting with all members present would help me understand how to best integrate everyone's input.

**The Core Question:**
[Frame the conflicting guidance as a question, not a complaint]

**Perspectives I've Received:**
- [Member A's view, neutrally stated]
- [Member B's view, neutrally stated]

I'm not asking you to resolve a conflict—I simply want to understand how to honor both perspectives in my work, or whether one approach should take priority given my research questions.

Would [time options] work for a 30-minute discussion?

Thank you,
[Your name]`
    },
    {
      strategy: "Leverage Your Chair's Authority",
      description: "Your dissertation chair/advisor typically has final authority. When conflicts are unresolvable, respectfully ask your chair to make the call. Frame it as seeking their guidance as primary mentor.",
      steps: [
        "Meet privately with your chair first",
        "Explain the conflicting feedback neutrally",
        "Ask how they recommend you proceed",
        "Request they communicate the decision to the committee",
        "Document the decision in writing"
      ],
      template: `Subject: Seeking Your Guidance: Conflicting Committee Feedback

Dear [Chair/Advisor],

I'm writing to seek your guidance as my primary mentor. I've received some conflicting direction on [issue] and want to ensure I proceed in a way you support.

**The situation:**
[Describe neutrally]

**My inclination:**
I'm leaning toward [approach], because [reasoning]. However, I want to defer to your judgment on how to navigate this with the committee.

Would you be willing to advise me on this? I can also follow up with a meeting if helpful.

Thank you,
[Your name]`
    },
    {
      strategy: "Propose a Third Way",
      description: "Sometimes the best resolution is a creative synthesis that addresses everyone's concerns without fully adopting either position. Show intellectual leadership by proposing a novel approach.",
      steps: [
        "Analyze what each committee member actually wants",
        "Identify underlying concerns, not just stated preferences",
        "Propose an approach that addresses both concerns",
        "Present it as building on their feedback",
        "Be prepared to justify with scholarly precedent"
      ],
      template: `Subject: Proposal: Integrating Committee Feedback on [Topic]

Dear Committee,

Thank you for the rich feedback on [section]. I've developed an approach that I believe addresses the key concerns raised:

**My Proposed Approach:**
[Describe your synthesis]

**How This Addresses Concerns:**
- Regarding [Member A's concern]: [How your approach addresses it]
- Regarding [Member B's concern]: [How your approach addresses it]

**Scholarly Precedent:**
[Citation or example of similar approach]

I'd welcome your thoughts before I proceed. Please let me know if this direction works, or if you'd like to discuss further.

Thank you,
[Your name]`
    }
  ];

  const redFlags = [
    {
      flag: "Personal Attacks or Unprofessional Behavior",
      description: "Committee members insult you, each other, or engage in behavior that crosses professional lines.",
      action: "This is an ethics issue. Document and consult your graduate school's student advocacy or ombudsman office."
    },
    {
      flag: "Fundamental Disagreement About Your Entire Project",
      description: "A committee member thinks your dissertation shouldn't exist or has been withholding objections until late in the process.",
      action: "Request a formal meeting with your chair and graduate coordinator. This may require committee restructuring."
    },
    {
      flag: "Committee Member Blocking Progress Intentionally",
      description: "A member seems to be sabotaging your progress—refusing to meet, delaying feedback, or raising new objections at every stage.",
      action: "Document the pattern meticulously. Escalate to your chair, then graduate director if needed. Explore committee changes."
    },
    {
      flag: "Conflicts of Interest",
      description: "Personal or professional conflicts between committee members (or with you) that compromise objectivity.",
      action: "This may require mediation or committee restructuring. Consult your graduate school."
    }
  ];

  const preventionStrategies = [
    {
      title: "Choose Committee Members Strategically",
      description: "Research potential members' relationships with each other, their methodological preferences, and their track record with students. A dream team on paper can be dysfunctional in practice.",
      tips: [
        "Ask current/former students about their experiences",
        "Consider methodological compatibility",
        "Beware of known interpersonal conflicts",
        "Balance expertise with availability"
      ]
    },
    {
      title: "Establish Expectations Early",
      description: "At your first full committee meeting, explicitly discuss how feedback will work, how disagreements will be resolved, and what your timeline looks like.",
      tips: [
        "Ask about preferred communication methods",
        "Clarify turnaround expectations for feedback",
        "Discuss how conflicts will be handled",
        "Set meeting frequency expectations"
      ]
    },
    {
      title: "Share Drafts Strategically",
      description: "Consider sharing work with your chair first, getting their approval, then sharing with the full committee. This creates a unified front and catches issues early.",
      tips: [
        "Get chair approval before committee distribution",
        "Be clear about what stage the draft represents",
        "Set specific questions for feedback",
        "Give adequate time for review (3+ weeks)"
      ]
    }
  ];

  const faqs = [
    {
      question: "What if my committee members genuinely hate each other?",
      answer: "This is more common than you'd think. Your role is not to fix their relationship. Focus on extracting useful feedback from each, documenting decisions carefully, and relying on your chair to manage committee dynamics. If the conflict is so severe it's affecting your progress, this is grounds for discussing committee restructuring with your graduate director."
    },
    {
      question: "Can I remove a problematic committee member?",
      answer: "Yes, though the process varies by institution. Common approaches include: adding a new member to dilute the problematic one's influence, or formally requesting a change through your graduate school. Frame changes around 'research direction evolution' rather than personal conflict when possible. Your chair can often initiate this process with less drama than if it comes from you."
    },
    {
      question: "How do I push back on feedback I disagree with?",
      answer: "You have more agency than you might think. Frame disagreements as scholarly discussions: 'I considered that approach, but chose X because [cite scholars, methodological reasoning].' Provide evidence. If you can justify your choice with solid scholarship, most committee members will respect that. Remember: your dissertation is your work—you don't have to accept every suggestion."
    },
    {
      question: "What if my advisor is the problem?",
      answer: "This is the hardest situation because your advisor holds the most power. Options include: adding a co-advisor who can provide balance, building relationships with other committee members as alternative support, documenting issues carefully, and if necessary, exploring advisor changes (difficult but possible). See our Supervisor Survival Guide for detailed strategies."
    },
    {
      question: "How do I handle a committee member who never reads my work?",
      answer: "Be direct but diplomatic: 'I want to make sure my draft addresses your concerns. Could we schedule a 30-minute call to discuss the key sections?' Give them an easy out that still provides feedback. If the pattern persists, speak with your chair about whether this member is fulfilling their responsibilities. Some programs have formal procedures for addressing non-participating committee members."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Navigating Dissertation Committee Conflicts: Resolution Strategies | DissertlyPro"
        description="Expert guide to resolving contradictory feedback, managing committee disagreements, and navigating academic politics in your dissertation process. Templates and strategies included."
        keywords={["dissertation committee conflicts", "contradictory feedback dissertation", "committee disagreement", "dissertation advisor conflict", "PhD committee problems", "academic committee politics"]}
        canonical="https://dissertlypro.com/committee-conflicts"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

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
              <Users className="w-4 h-4" />
              Committee Navigation Guide
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              When Your Committee
              <span className="block text-copper mt-2">Can't Agree</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Contradictory feedback. Power struggles. Methodological battles. 
              The guide to resolving conflicts that no one talks about—but everyone experiences.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4 text-copper" />
                <span>Email templates included</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Scale className="w-4 h-4 text-copper" />
                <span>Escalation frameworks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-copper" />
                <span>Self-protection strategies</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">The Reality No One Prepares You For</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                You've assembled your dissertation committee: respected scholars in your field who agreed to guide your research. 
                What could go wrong?
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Everything.</strong>
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professor A tells you to cut your literature review by half. Professor B says it needs to be twice as comprehensive. 
                Your advisor loves your methodology; your external member thinks it's fundamentally flawed. 
                And somehow, you're expected to make everyone happy while producing original scholarship.
              </p>
              
              <div className="bg-copper/5 border-l-4 border-copper p-6 rounded-r-lg my-8">
                <p className="text-foreground font-medium mb-2">What Graduate Programs Don't Tell You:</p>
                <ul className="space-y-2 text-muted-foreground mb-0">
                  <li>• Committee members often have unresolved disagreements with each other</li>
                  <li>• Your dissertation may become a proxy for larger theoretical battles</li>
                  <li>• There's rarely a formal process for resolving contradictory feedback</li>
                  <li>• Students are expected to "manage up" without any training in how to do so</li>
                </ul>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                This guide gives you the tools to navigate these conflicts professionally—protecting your progress, your relationships, 
                and your sanity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Conflicts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <AlertTriangle className="inline-block w-8 h-8 text-amber-500 mr-3" />
                Common Conflict Patterns
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Recognizing the type of conflict you're facing is the first step to resolving it. 
                Here are the patterns that derail dissertations.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {conflictTypes.map((conflict, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-copper/20 hover:border-copper/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center">
                              <conflict.icon className="w-6 h-6 text-copper" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">{conflict.type}</h3>
                              <span className="text-xs text-copper font-medium">{conflict.frequency}</span>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <p className="text-muted-foreground text-sm mb-3">{conflict.description}</p>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="text-xs font-medium text-foreground mb-1">Example:</p>
                            <p className="text-xs text-muted-foreground italic">{conflict.example}</p>
                          </div>
                          <p className="text-xs text-amber-600 mt-2">
                            <strong>Impact:</strong> {conflict.impact}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resolution Strategies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <Lightbulb className="inline-block w-8 h-8 text-copper mr-3" />
                Resolution Strategies That Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tested approaches for navigating disagreements while maintaining professional relationships. 
                Each includes email templates you can adapt.
              </p>
            </motion.div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {resolutionStrategies.map((strategy, index) => (
                <AccordionItem 
                  key={index} 
                  value={`strategy-${index}`}
                  className="bg-muted/30 border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground py-6">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-copper text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      {strategy.strategy}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground mb-4">{strategy.description}</p>
                    
                    <div className="bg-background p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-foreground mb-2">Implementation Steps:</h4>
                      <ul className="space-y-2">
                        {strategy.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-copper mt-0.5 shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-copper/5 p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-copper" />
                        Email Template
                      </h4>
                      <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-mono bg-background p-3 rounded-lg overflow-x-auto">
                        {strategy.template}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16 bg-red-500/5 border-y border-red-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <XCircle className="inline-block w-8 h-8 text-red-500 mr-3" />
                Red Flags: When to Escalate
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Some situations can't be resolved through normal channels. 
                Recognize when you need institutional support.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {redFlags.map((flag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-red-500/20 bg-background">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                        {flag.flag}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{flag.description}</p>
                      <div className="bg-red-500/10 p-3 rounded-lg">
                        <p className="text-sm text-red-700 dark:text-red-400">
                          <strong>Action:</strong> {flag.action}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Strategies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <Shield className="inline-block w-8 h-8 text-copper mr-3" />
                Prevention: Building a Functional Committee
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you're early in your dissertation journey, these strategies can prevent many conflicts before they start.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {preventionStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-copper/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{strategy.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{strategy.description}</p>
                      <ul className="space-y-2">
                        {strategy.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-copper mt-0.5 shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <BookOpen className="inline-block w-8 h-8 text-copper mr-3" />
                Frequently Asked Questions
              </h2>
            </motion.div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-muted/30 border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
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
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Link to="/supervisor-guide" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                          <Users className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">Supervisor Survival Guide</h3>
                          <p className="text-sm text-muted-foreground">Navigate difficult advisor relationships, communication strategies, and professional email templates.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Link to="/phd-mental-health" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors">
                          <Shield className="w-6 h-6 text-rose-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">PhD Mental Health Hub</h3>
                          <p className="text-sm text-muted-foreground">Burnout assessment, coping strategies, and wellness resources for doctoral students.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
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
                Need Help Navigating Your Committee?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our academic advisors have helped hundreds of students navigate difficult committee dynamics. 
                We can help you develop a strategy that protects your progress and your relationships.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                  <Link to="/consultation">
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/supervisor-guide">
                    Read Supervisor Guide
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

export default CommitteeConflicts;
