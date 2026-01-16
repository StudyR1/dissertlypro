import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/schemas";
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
  Mail, 
  MessageSquare, 
  Shield,
  Users,
  XCircle,
  ArrowRight,
  Lightbulb,
  Scale,
  Heart,
  Target,
  RefreshCw,
  BookOpen
} from "lucide-react";

const SupervisorGuide = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/blog" },
    { name: "Supervisor Survival Guide", url: "/supervisor-guide" }
  ];

  const warningSignsData = [
    {
      sign: "Chronic Unresponsiveness",
      description: "Emails go unanswered for weeks. Meeting requests are repeatedly ignored or postponed indefinitely.",
      severity: "high",
      action: "Document all communication attempts with timestamps. Send a polite follow-up after 7 days, CC your graduate coordinator after 14 days."
    },
    {
      sign: "Vague or Contradictory Feedback",
      description: "Comments like 'this needs work' without specifics, or receiving conflicting direction in consecutive meetings.",
      severity: "medium",
      action: "At meeting end, summarize decisions in writing: 'To confirm, I will focus on X and approach Y.' Email this within 24 hours."
    },
    {
      sign: "Scope Creep Demands",
      description: "Constantly adding new requirements, analyses, or chapters that weren't in your original proposal.",
      severity: "medium",
      action: "Reference your approved proposal. Ask: 'This is interesting—should we discuss modifying the approved scope, or is this for future research?'"
    },
    {
      sign: "Dismissive of Your Ideas",
      description: "Your contributions are consistently minimized, ignored, or later presented as their own ideas.",
      severity: "high",
      action: "Keep dated records of your ideas. Follow up verbal suggestions with emails: 'As I mentioned, my idea for X...' Consider co-supervision."
    },
    {
      sign: "Inappropriate Expectations",
      description: "Demands for work on their projects at expense of your dissertation, after-hours availability, or personal tasks.",
      severity: "critical",
      action: "This crosses ethical boundaries. Consult your graduate school's ombudsman or student advocacy office confidentially."
    },
    {
      sign: "Radio Silence Before Deadlines",
      description: "Supervisor disappears precisely when you need feedback most—before submissions, reviews, or committee meetings.",
      severity: "high",
      action: "Build 3-4 weeks buffer into all deadlines. Provide materials with explicit 'I need feedback by [date]' statements."
    }
  ];

  const communicationTemplates = [
    {
      scenario: "Following Up on Unanswered Email",
      template: `Subject: Following Up: [Original Subject] - Request for Guidance

Dear [Professor/Dr. Surname],

I hope this message finds you well. I'm following up on my email from [date] regarding [specific topic]. I understand you have many demands on your time.

I'm at a point where I need your input to move forward on [specific item]. Would it be possible to schedule a brief 15-minute meeting, or if easier, could you provide written guidance on [specific question]?

My next milestone deadline is [date], so receiving your input by [realistic date] would allow me to stay on track.

Thank you for your continued support.

Best regards,
[Your name]`,
      notes: "Keep it brief, specific, and non-accusatory. Provide a clear timeline and easy options for responding."
    },
    {
      scenario: "Addressing Contradictory Feedback",
      template: `Subject: Clarification Request: Dissertation Chapter [X] Direction

Dear [Professor/Dr. Surname],

Thank you for our meeting on [date]. I want to ensure I correctly understood the direction for Chapter [X].

In our previous meeting ([date]), my understanding was that I should [previous direction]. In our recent discussion, it seemed the preference shifted to [new direction].

Could you clarify which approach you'd like me to prioritize? I want to make the best use of both our time.

I've attached a brief summary of my understanding. Would you mind confirming this is accurate?

Thank you,
[Your name]`,
      notes: "Frame it as seeking clarity, not criticizing inconsistency. Written confirmation protects both parties."
    },
    {
      scenario: "Requesting More Structured Meetings",
      template: `Subject: Proposal: Structured Meeting Format

Dear [Professor/Dr. Surname],

To make our supervision meetings more productive, I'd like to propose a structured format that might help us use our limited time effectively:

- I'll send a one-page progress summary 48 hours before our meeting
- I'll include 2-3 specific questions requiring your input
- I'll take notes and send a follow-up email confirming action items

Would this approach work for you? I'm open to modifications that suit your preferences.

Thank you for considering this,
[Your name]`,
      notes: "Positions the structure as benefiting them. Demonstrates professionalism and initiative."
    },
    {
      scenario: "Raising Concerns About Progress",
      template: `Subject: Discussion Request: Dissertation Timeline Concerns

Dear [Professor/Dr. Surname],

I'm writing to request a meeting to discuss my dissertation progress. I've encountered [specific challenge] that is affecting my timeline, and I'd value your guidance on the best path forward.

I've outlined the issue and some possible solutions in the attached document. I believe [X minutes] would be sufficient to discuss options.

Are you available [provide 2-3 specific time options]? Alternatively, I could meet whenever suits your schedule this week.

Thank you for your support,
[Your name]`,
      notes: "Come prepared with solutions, not just problems. Shows maturity and proactive thinking."
    }
  ];

  const escalationPathway = [
    {
      stage: 1,
      title: "Direct Resolution Attempt",
      description: "Address the issue directly with your supervisor in a non-confrontational way. Use 'I' statements and focus on specific behaviors, not personality.",
      actions: ["Schedule a dedicated meeting to discuss concerns", "Come prepared with specific examples", "Focus on finding solutions, not assigning blame", "Document the conversation afterward"],
      timeframe: "2-4 weeks"
    },
    {
      stage: 2,
      title: "Informal Mediation",
      description: "If direct discussion doesn't resolve the issue, involve a neutral third party who can facilitate dialogue.",
      actions: ["Speak with your graduate program director", "Request a meeting with all parties present", "Consider involving a co-supervisor if you have one", "Keep the focus on academic progress"],
      timeframe: "2-4 weeks"
    },
    {
      stage: 3,
      title: "Formal Graduate School Channels",
      description: "Engage official university processes designed to address student-supervisor issues.",
      actions: ["Meet with the Graduate School Dean or Associate Dean", "Request formal documentation of expectations", "Explore options for supervisor change if necessary", "Consult the university ombudsman"],
      timeframe: "4-8 weeks"
    },
    {
      stage: 4,
      title: "Structural Solutions",
      description: "Implement changes to the supervision arrangement to prevent future issues.",
      actions: ["Add a co-supervisor for additional support", "Establish written supervision agreements", "Set up regular progress review meetings with graduate coordinator", "Consider transferring to a different supervisor if relationship is irreparable"],
      timeframe: "Ongoing"
    }
  ];

  const selfAssessmentQuestions = [
    {
      question: "How often does your supervisor respond to emails within a reasonable timeframe (5-7 business days)?",
      options: [
        { label: "Almost always", score: 0 },
        { label: "Usually, with occasional delays", score: 1 },
        { label: "Rarely—I often wait 2+ weeks", score: 2 },
        { label: "Never—I've stopped expecting responses", score: 3 }
      ]
    },
    {
      question: "When you meet, does your supervisor provide actionable, specific feedback?",
      options: [
        { label: "Yes, always clear and helpful", score: 0 },
        { label: "Sometimes, but often vague", score: 1 },
        { label: "Rarely—feedback is confusing or contradictory", score: 2 },
        { label: "Meetings rarely happen at all", score: 3 }
      ]
    },
    {
      question: "Do you feel your supervisor respects your ideas and contributions?",
      options: [
        { label: "Yes, they encourage my input", score: 0 },
        { label: "Mostly, though they sometimes dismiss ideas", score: 1 },
        { label: "Rarely—I feel my ideas are ignored", score: 2 },
        { label: "Never—they've taken credit for my work", score: 3 }
      ]
    },
    {
      question: "How would you describe your emotional state after supervision meetings?",
      options: [
        { label: "Motivated and clear on next steps", score: 0 },
        { label: "Neutral—neither great nor bad", score: 1 },
        { label: "Often anxious or discouraged", score: 2 },
        { label: "Dreading meetings or avoiding them entirely", score: 3 }
      ]
    },
    {
      question: "Has your supervisor set clear expectations for your progress and timeline?",
      options: [
        { label: "Yes, we have documented milestones", score: 0 },
        { label: "Somewhat—expectations are informal", score: 1 },
        { label: "Unclear—expectations seem to shift", score: 2 },
        { label: "No expectations have ever been discussed", score: 3 }
      ]
    }
  ];

  const faqs = [
    {
      question: "Is it normal to have conflicts with my dissertation supervisor?",
      answer: "Some friction is common—you're both navigating a complex, high-stakes relationship. However, chronic patterns of unresponsiveness, disrespect, or unclear expectations are NOT normal and should be addressed. Research shows that up to 50% of doctoral students report significant supervisor relationship challenges. You're not alone, and solutions exist."
    },
    {
      question: "Can I change my dissertation supervisor?",
      answer: "Yes, though the process varies by institution. Most universities have procedures for supervisor changes when relationships become unworkable. Before initiating a change, consult your graduate program director confidentially. Changes are most successful when you've documented issues and have a potential new supervisor willing to take you on."
    },
    {
      question: "What if my supervisor is a big name in my field—will complaining hurt my career?",
      answer: "This fear is understandable but often overestimated. Academia is larger than any single person. Focus on documenting issues professionally, seeking resolution through proper channels, and building relationships with other faculty. Many successful academics have navigated difficult supervisors. Your career is not dependent on one person's opinion."
    },
    {
      question: "My supervisor seems too busy for me. What can I do?",
      answer: "Busy supervisors often respond well to structure. Send agendas in advance, keep meetings focused, and come prepared with specific questions. Make it easy for them to help you. If busyness is chronic, request adding a co-supervisor who can provide more regular support. Some supervisors take on too many students—this is a systemic issue, not your fault."
    },
    {
      question: "How much contact should I expect from my supervisor?",
      answer: "Norms vary by field and institution. A reasonable baseline: substantive meetings every 2-4 weeks during active phases, feedback on written work within 2-3 weeks, and email responses within one week. Ask your department what's typical. If you're receiving significantly less, you have grounds to request more structured supervision."
    },
    {
      question: "My supervisor gives contradictory feedback. How do I handle this?",
      answer: "Always confirm direction in writing after meetings. Send a brief email: 'To summarize today's discussion, I'll focus on X using approach Y.' This creates a paper trail and gives your supervisor a chance to clarify. If contradictions persist, raise the pattern directly: 'I've noticed our direction has shifted a few times. Can we establish a clear plan moving forward?'"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Surviving Your PhD Supervisor: The Complete Guide | DissertlyPro"
        description="Navigate difficult supervisor relationships with confidence. Expert strategies for communication, conflict resolution, and protecting your dissertation progress. Free templates included."
        keywords={["difficult PhD supervisor", "supervisor not responding", "dissertation supervisor problems", "PhD advisor relationship", "academic supervision issues", "supervisor conflict", "change dissertation supervisor"]}
        canonical="https://dissertlypro.com/supervisor-guide"
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
              <Shield className="w-4 h-4" />
              Essential Resource for Graduate Students
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Surviving Your PhD Supervisor
              <span className="block text-copper mt-2">The Unspoken Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The relationship that can make or break your doctorate. Learn to navigate difficult dynamics, 
              communicate effectively, and protect your research—even when things go wrong.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-copper" />
                <span>35 min comprehensive read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4 text-copper" />
                <span>Free email templates included</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-copper" />
                <span>Based on 500+ student experiences</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Nobody Talks About This</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Here's an uncomfortable truth: <strong>your dissertation supervisor has more power over your academic future than almost anyone else</strong>. 
                They control your timeline, influence your committee, shape your research direction, and write the recommendation letters 
                that determine your career trajectory.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                And yet, when relationships go wrong—as they do for nearly half of all doctoral students—most suffer in silence. 
                There's a pervasive fear that speaking up will damage careers, that problems are individual failures rather than 
                systemic issues, and that complaining makes you "difficult."
              </p>
              
              <div className="bg-copper/5 border-l-4 border-copper p-6 rounded-r-lg my-8">
                <p className="text-foreground font-medium mb-2">The Statistics We Don't Discuss:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>50%</strong> of doctoral students report significant supervisor relationship issues</li>
                  <li>• <strong>30%</strong> consider leaving their program due to supervision problems</li>
                  <li>• <strong>70%</strong> never formally report concerns—even serious ones</li>
                  <li>• Students with supportive supervisors finish <strong>2.5x faster</strong> on average</li>
                </ul>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                This guide exists because <strong>no one else is writing it</strong>. Academic websites publish endless advice about 
                literature reviews and methodology, but the relationship that determines whether you actually finish? 
                That remains taboo. Until now.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
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
                Recognizing Warning Signs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The difference between a tough supervisor and a problematic one isn't always obvious at first. 
                Learn to recognize patterns before they derail your progress.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {warningSignsData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full border-l-4 ${
                    item.severity === 'critical' ? 'border-l-red-500 bg-red-500/5' :
                    item.severity === 'high' ? 'border-l-amber-500 bg-amber-500/5' :
                    'border-l-yellow-500 bg-yellow-500/5'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-foreground">{item.sign}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          item.severity === 'critical' ? 'bg-red-500/20 text-red-700' :
                          item.severity === 'high' ? 'bg-amber-500/20 text-amber-700' :
                          'bg-yellow-500/20 text-yellow-700'
                        }`}>
                          {item.severity} severity
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                      <div className="bg-background/50 p-3 rounded-lg">
                        <p className="text-sm text-foreground">
                          <strong className="text-copper">Action:</strong> {item.action}
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

      {/* Self-Assessment Tool */}
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
                <Target className="inline-block w-8 h-8 text-copper mr-3" />
                Supervisor Relationship Self-Assessment
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Answer these questions honestly to gauge the health of your supervision relationship. 
                This isn't about blame—it's about clarity.
              </p>
            </motion.div>
            
            <Card className="border-2 border-copper/20">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {selfAssessmentQuestions.map((q, idx) => (
                    <div key={idx} className="border-b border-muted pb-6 last:border-b-0 last:pb-0">
                      <h4 className="font-medium text-foreground mb-4">
                        {idx + 1}. {q.question}
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {q.options.map((opt, optIdx) => (
                          <div 
                            key={optIdx}
                            className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors"
                          >
                            <div className={`w-3 h-3 rounded-full ${
                              opt.score === 0 ? 'bg-green-500' :
                              opt.score === 1 ? 'bg-yellow-500' :
                              opt.score === 2 ? 'bg-amber-500' :
                              'bg-red-500'
                            }`} />
                            <span className="text-sm text-muted-foreground">{opt.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Interpreting Your Responses:</h4>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 mt-1 shrink-0" />
                      <p className="text-muted-foreground"><strong>Mostly green:</strong> Healthy relationship—nurture it!</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mt-1 shrink-0" />
                      <p className="text-muted-foreground"><strong>Mixed responses:</strong> Address issues proactively before they escalate</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 mt-1 shrink-0" />
                      <p className="text-muted-foreground"><strong>Mostly red:</strong> Consider escalation or structural changes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Communication Templates */}
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
                <Mail className="inline-block w-8 h-8 text-copper mr-3" />
                Professional Communication Templates
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Copy and customize these templates for common challenging situations. 
                Written by academics who've navigated these waters.
              </p>
            </motion.div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {communicationTemplates.map((template, index) => (
                <AccordionItem 
                  key={index} 
                  value={`template-${index}`}
                  className="bg-background border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground py-6">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-copper shrink-0" />
                      {template.scenario}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="bg-muted/30 p-4 rounded-lg mb-4 font-mono text-sm whitespace-pre-wrap text-muted-foreground">
                      {template.template}
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-copper/5 rounded-lg">
                      <Lightbulb className="w-4 h-4 text-copper mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">{template.notes}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Escalation Pathway */}
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
                <Scale className="inline-block w-8 h-8 text-copper mr-3" />
                The Escalation Pathway
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                When direct communication fails, here's how to escalate professionally—protecting 
                your interests while maintaining relationships where possible.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-copper via-copper/50 to-copper/20 transform -translate-x-1/2" />
              
              <div className="space-y-8">
                {escalationPathway.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                  >
                    {/* Stage number circle */}
                    <div className="hidden md:flex absolute top-6 w-12 h-12 bg-copper text-white rounded-full items-center justify-center font-bold text-lg z-10 shadow-lg"
                      style={{
                        [index % 2 === 0 ? 'right' : 'left']: '-6.5rem'
                      }}
                    >
                      {stage.stage}
                    </div>
                    
                    <Card className="border-copper/20 hover:border-copper/40 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="md:hidden w-8 h-8 bg-copper text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {stage.stage}
                          </span>
                          <h3 className="text-xl font-semibold text-foreground">{stage.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">{stage.description}</p>
                        <div className="bg-muted/30 p-4 rounded-lg mb-4">
                          <p className="text-sm font-medium text-foreground mb-2">Key Actions:</p>
                          <ul className="space-y-2">
                            {stage.actions.map((action, actionIdx) => (
                              <li key={actionIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-copper mt-0.5 shrink-0" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-copper">
                          <Clock className="w-4 h-4" />
                          <span>Typical timeframe: {stage.timeframe}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What To Do If... Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <RefreshCw className="inline-block w-8 h-8 text-copper mr-3" />
                Specific Scenarios & Solutions
              </h2>
            </motion.div>
            
            <div className="grid gap-6">
              <Card className="border-copper/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Your Supervisor Leaves the Institution
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    This happens more often than you'd think, and it's not your fault. Here's your playbook:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Check your university policy</strong>—many allow continued supervision remotely, especially near completion.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Request a transition meeting</strong> with your graduate coordinator immediately.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Get documentation</strong> of your progress and any commitments in writing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Explore co-supervision</strong> with a remaining faculty member to ensure local support.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-copper/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Your Supervisor Takes Credit for Your Ideas
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    One of the most painful situations in academia. Protect yourself without burning bridges:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Date everything</strong>—keep dated notes, emails, and drafts that establish your contribution timeline.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Follow up in writing</strong>—after verbal discussions, email: "As I mentioned in our meeting, my idea for X..."</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Discuss authorship early</strong>—establish contribution expectations before collaborative work begins.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Consult others</strong>—if patterns persist, speak confidentially with the research integrity office.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-copper/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    The Relationship Is Beyond Repair
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Sometimes the healthiest choice is a fresh start. Here's how to navigate a supervisor change:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Line up a new supervisor first</strong>—never leave without having someone willing to take you on.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Frame it positively</strong>—focus on research direction alignment, not personal conflict.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Document everything</strong>—what you've completed, feedback received, and current status.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-copper mt-1 shrink-0" />
                      <span><strong>Accept timeline impact</strong>—changes often add 3-6 months. It's worth it for your wellbeing.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
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
                <Link to="/phd-mental-health" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors">
                          <Heart className="w-6 h-6 text-rose-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">PhD Mental Health Hub</h3>
                          <p className="text-sm text-muted-foreground">Burnout assessment, coping strategies, and wellness resources designed specifically for doctoral students.</p>
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
                <Link to="/committee-conflicts" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                          <Scale className="w-6 h-6 text-amber-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">Committee Conflict Resolution</h3>
                          <p className="text-sm text-muted-foreground">Navigate disagreements, contradictory feedback, and political dynamics within your dissertation committee.</p>
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
                Need Confidential Support?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our academic advisors have helped hundreds of students navigate difficult supervision situations. 
                We offer confidential consultations to help you assess your options and develop a strategy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                  <Link to="/consultation">
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/blog">
                    Explore More Resources
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

export default SupervisorGuide;
