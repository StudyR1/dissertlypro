import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, AggregateRatingSchema, HowToSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import RelatedContent from "@/components/ui/RelatedContent";
import { motion } from "framer-motion";
import { 
  Users,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  GraduationCap,
  Clock,
  Mail,
  MessageSquare,
  Calendar,
  FileText,
  Lightbulb,
  Target,
  Shield,
  BookOpen
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CommitteeCommunication = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Master's Resources", url: "/masters-resources" },
    { name: "Committee Communication", url: "/committee-communication" }
  ];

  const howToSteps = [
    { name: "Establish Communication Preferences", text: "Ask each committee member their preferred communication method, response time expectations, and meeting availability." },
    { name: "Set Clear Meeting Agendas", text: "Send agendas 48 hours before meetings with specific questions and materials for review." },
    { name: "Document All Feedback", text: "Take detailed notes during meetings and send summary emails to confirm understanding." },
    { name: "Provide Regular Progress Updates", text: "Send brief monthly updates on your progress, challenges, and upcoming milestones." },
    { name: "Manage Conflicting Feedback", text: "When committee members disagree, seek clarification and propose solutions for resolution." },
    { name: "Maintain Professional Boundaries", text: "Keep communication professional, timely, and focused on your research goals." }
  ];

  const emailTemplates = [
    {
      title: "Initial Meeting Request",
      context: "When scheduling your first committee meeting",
      template: `Subject: [Your Name] - Thesis Committee Meeting Request

Dear Professor [Name],

I hope this message finds you well. I am writing to schedule our first thesis committee meeting to discuss my research progress and receive feedback on my proposal.

I am available on [list 3-4 options]. The meeting would require approximately [60-90] minutes.

I will circulate my proposal draft and a meeting agenda [X days] before our meeting.

Please let me know your availability and preferred meeting format.

Thank you for your guidance and support.

Best regards,
[Your Name]`
    },
    {
      title: "Progress Update",
      context: "Monthly or milestone updates",
      template: `Subject: Thesis Progress Update - [Month/Year]

Dear Committee Members,

I wanted to provide a brief update on my thesis progress:

COMPLETED SINCE LAST UPDATE:
• [Milestone 1]
• [Milestone 2]

CURRENT FOCUS:
• [Current work]

UPCOMING MILESTONES:
• [Next milestone with date]

QUESTIONS/SUPPORT NEEDED:
• [Specific question if any]

I will send a more detailed update before our next scheduled meeting on [date].

Best regards,
[Your Name]`
    },
    {
      title: "Feedback Response",
      context: "After receiving committee feedback",
      template: `Subject: RE: Thesis Feedback - Response and Action Plan

Dear Professor [Name],

Thank you for your detailed feedback on [chapter/section]. I appreciate your insights and have developed the following action plan:

FEEDBACK RECEIVED:
1. [Summary of feedback point 1]
2. [Summary of feedback point 2]

PROPOSED ACTIONS:
1. [How you will address point 1]
2. [How you will address point 2]

CLARIFICATION NEEDED:
• [Any points requiring further discussion]

I plan to implement these revisions by [date] and would welcome a brief check-in if you have concerns about my approach.

Thank you again for your guidance.

Best regards,
[Your Name]`
    }
  ];

  const meetingProtocols = [
    {
      title: "Before the Meeting",
      items: [
        "Send agenda and materials 48-72 hours in advance",
        "Prepare specific questions rather than general inquiries",
        "Review feedback from previous meetings",
        "Prepare a brief progress summary (5 minutes max)",
        "Test technology if meeting virtually"
      ]
    },
    {
      title: "During the Meeting",
      items: [
        "Start with a brief overview of your progress",
        "Take detailed notes (or ask permission to record)",
        "Ask clarifying questions when feedback is unclear",
        "Summarize key decisions and action items",
        "Confirm next steps and timeline"
      ]
    },
    {
      title: "After the Meeting",
      items: [
        "Send thank you email within 24 hours",
        "Include summary of decisions and action items",
        "Request clarification on any unclear points",
        "Set reminders for action item deadlines",
        "Schedule follow-up if needed"
      ]
    }
  ];

  const conflictStrategies = [
    {
      scenario: "Committee members give contradictory feedback",
      strategy: "Document both perspectives and schedule a brief meeting to discuss: 'Dr. X suggested A while Dr. Y recommended B. Could we discuss which approach aligns best with my research goals?'",
      tip: "Frame it as seeking alignment, not choosing sides."
    },
    {
      scenario: "Advisor is unresponsive to emails",
      strategy: "Try different communication channels, set deadlines in your requests ('I'll proceed with X unless I hear otherwise by Friday'), and consider involving the graduate coordinator if persistent.",
      tip: "Document communication attempts in case escalation is needed."
    },
    {
      scenario: "Committee member requests major changes late in process",
      strategy: "Acknowledge the feedback, assess feasibility, and propose alternatives: 'I appreciate this perspective. Given my timeline, would a modified approach of X be acceptable?'",
      tip: "Involve your primary advisor in negotiating scope changes."
    },
    {
      scenario: "Personality conflict with committee member",
      strategy: "Keep communication strictly professional and task-focused. Document all interactions. Seek mediation through your primary advisor if needed.",
      tip: "Focus on shared goals: your successful thesis completion."
    }
  ];

  const faqs = [
    {
      question: "How often should I contact my committee members?",
      answer: "Beyond your primary advisor (who you may meet regularly), committee members typically expect updates every 4-6 weeks or at major milestones. More frequent contact may be needed before proposal defense or final submission."
    },
    {
      question: "What should I do if my advisor doesn't respond to emails?",
      answer: "Wait 5-7 business days, then send a polite follow-up. Try alternative methods (office hours, phone). If unresponsive for 2+ weeks, consider involving your graduate program coordinator."
    },
    {
      question: "How do I handle feedback I disagree with?",
      answer: "Approach it professionally: acknowledge the feedback, explain your perspective with evidence, and propose a solution. Often disagreements stem from miscommunication about your intentions or approach."
    },
    {
      question: "Should I CC all committee members on emails?",
      answer: "Generally no. Direct individual communications unless the matter affects everyone. Do CC all on meeting logistics, major updates, and final documents for review."
    },
    {
      question: "How formal should my emails be?",
      answer: "Maintain professional formality (Dear Professor X, not 'Hey'). As relationships develop, some informality is fine, but always err on the side of professionalism, especially for important requests."
    }
  ];

  const relatedResources = [
    { title: "Limited Supervision Success", href: "/limited-supervision", icon: Users, description: "Navigate advisor challenges" },
    { title: "Master's Thesis Guide", href: "/masters-thesis-guide", icon: GraduationCap, description: "Complete A-Z thesis roadmap" },
    { title: "Master's Defense Prep", href: "/masters-defense", icon: Target, description: "Ace your oral exam" },
    { title: "Supervisor Guide", href: "/supervisor-guide", icon: Users, description: "Navigate advisor relationships" }
  ];

  return (
    <Layout>
      <SEO 
        title="Committee Communication Mastery | Email Templates & Meeting Protocols | DissertlyPro"
        description="Manage thesis committee expectations effectively. Email templates, meeting protocols, feedback integration strategies, and conflict resolution for master's students."
        keywords={["committee communication", "thesis committee", "advisor communication", "email templates thesis", "committee meeting", "academic communication", "feedback management"]}
        canonical="https://dissertlypro.com/committee-communication"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1689}
        itemName="Committee Communication Mastery Guide"
        itemType="Service"
      />
      <HowToSchema
        name="How to Communicate Effectively with Your Thesis Committee"
        description="A comprehensive guide to managing committee relationships and communication"
        steps={howToSteps}
        totalTime="P1M"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-copper/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-copper/10 text-copper px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Specialized Master's Guide
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Committee Communication
              <span className="block text-copper mt-2">Mastery</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Manage advisor and committee expectations effectively. Email templates, meeting protocols, 
              and feedback integration strategies for successful thesis completion.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>25 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-copper" />
                <span>Email Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-copper" />
                <span>Meeting Protocols</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-copper/20">
                <CardContent className="p-6 text-center">
                  <Shield className="w-10 h-10 text-copper mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Be Proactive</h3>
                  <p className="text-sm text-muted-foreground">
                    Don't wait for committee to reach out. Regular updates build trust and prevent surprises.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-copper/20">
                <CardContent className="p-6 text-center">
                  <FileText className="w-10 h-10 text-copper mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Document Everything</h3>
                  <p className="text-sm text-muted-foreground">
                    Written records of feedback and decisions protect you and ensure alignment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-copper/20">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="w-10 h-10 text-copper mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Be Specific</h3>
                  <p className="text-sm text-muted-foreground">
                    Vague questions get vague answers. Prepare specific, actionable questions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Email Templates */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Email Templates</h2>
              <p className="text-lg text-muted-foreground">
                Professional templates for common committee communications:
              </p>
            </motion.div>

            <div className="space-y-6">
              {emailTemplates.map((template, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Mail className="w-5 h-5 text-copper" />
                        <div>
                          <h3 className="font-semibold text-foreground">{template.title}</h3>
                          <p className="text-sm text-muted-foreground">{template.context}</p>
                        </div>
                      </div>
                      <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm text-muted-foreground whitespace-pre-wrap font-mono">
                        {template.template}
                      </pre>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Protocols */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Meeting Protocols</h2>
              <p className="text-lg text-muted-foreground">
                Maximize the value of every committee interaction:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {meetingProtocols.map((protocol, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-5 h-5 text-copper" />
                        <h3 className="font-semibold text-foreground">{protocol.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {protocol.items.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
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

      {/* Conflict Resolution */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Handling Difficult Situations</h2>
              <p className="text-lg text-muted-foreground">
                Strategies for navigating common challenges:
              </p>
            </motion.div>

            <div className="space-y-6">
              {conflictStrategies.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{item.scenario}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{item.strategy}</p>
                          <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">Pro Tip: </span>
                                {item.tip}
                              </p>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            </motion.div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedResources.map((resource) => (
                <Link key={resource.href} to={resource.href}>
                  <Card className="border-border hover:border-copper/30 transition-all h-full group">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-copper/10 transition-colors">
                        <resource.icon className="w-5 h-5 text-muted-foreground group-hover:text-copper" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-copper/10 to-transparent rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Help with Committee Dynamics?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our advisors can help you navigate complex committee relationships and 
                develop communication strategies tailored to your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consultation">
                  <Button size="lg" className="bg-copper hover:bg-copper-dark text-white">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/masters-resources">
                  <Button size="lg" variant="outline">
                    Explore More Resources
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <RelatedContent currentUrl="/committee-communication" />
    </Layout>
  );
};

export default CommitteeCommunication;
