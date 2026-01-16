import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, AggregateRatingSchema } from "@/components/schemas";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  AlertTriangle, 
  CheckCircle,
  FileText,
  Mail,
  ArrowRight,
  Shield,
  Users,
  Heart,
  Scale,
  Lightbulb,
  XCircle,
  RefreshCw,
  Target,
  BookOpen,
  Briefcase,
  GraduationCap
} from "lucide-react";

const DeadlinesDeferrals = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/blog" },
    { name: "Deadlines & Deferrals Guide", url: "/deadlines-deferrals" }
  ];

  const extensionGrounds = [
    {
      category: "Medical & Health",
      grounds: [
        "Physical illness or injury requiring treatment",
        "Mental health conditions (depression, anxiety, burnout)",
        "Long COVID or chronic illness flare-ups",
        "Hospitalization or surgery recovery",
        "Pregnancy complications or difficult postpartum period"
      ],
      evidence: "Medical certificate, GP letter, hospital records, specialist reports",
      successRate: "High",
      icon: Heart
    },
    {
      category: "Personal Circumstances",
      grounds: [
        "Bereavement of close family member",
        "Serious illness of dependent or close relative",
        "Relationship breakdown (divorce, separation)",
        "Victim of crime or domestic violence",
        "Housing crisis or homelessness"
      ],
      evidence: "Death certificate, caring responsibilities documentation, police reports, support service letters",
      successRate: "High",
      icon: Users
    },
    {
      category: "Academic & Supervision",
      grounds: [
        "Supervisor departure or extended absence",
        "Lack of adequate supervision",
        "Major methodology change required",
        "Equipment failure or resource unavailability",
        "Ethical approval delays beyond your control"
      ],
      evidence: "Correspondence records, department acknowledgment, ethics committee documentation",
      successRate: "Medium-High",
      icon: BookOpen
    },
    {
      category: "Employment & Financial",
      grounds: [
        "Unexpected job loss affecting funding",
        "Required increase in work hours to survive",
        "Employer demands conflicting with study (part-time students)",
        "Funding body administrative delays"
      ],
      evidence: "Employment records, financial statements, correspondence with funders",
      successRate: "Medium",
      icon: Target
    },
    {
      category: "External Circumstances",
      grounds: [
        "Natural disasters affecting you or your research",
        "Political instability in fieldwork location",
        "Pandemic-related disruptions",
        "Visa or immigration complications",
        "Military or jury service obligations"
      ],
      evidence: "Official documentation, news reports, government communications",
      successRate: "High",
      icon: Shield
    }
  ];

  const processTimeline = [
    {
      stage: "Recognition",
      timing: "As soon as possible",
      action: "Recognize you need an extension. Don't wait until the deadline passes.",
      tip: "The earlier you apply, the more credible your request. Last-minute applications face more scrutiny."
    },
    {
      stage: "Supervisor Discussion",
      timing: "Within 1-2 days",
      action: "Inform your supervisor. Get their support before formal application.",
      tip: "Most applications require supervisor endorsement. A supportive supervisor letter significantly strengthens your case."
    },
    {
      stage: "Evidence Gathering",
      timing: "1-2 weeks",
      action: "Collect all supporting documentation. Medical certificates, official letters, etc.",
      tip: "Quality matters more than quantity. One strong medical letter beats five vague supporting statements."
    },
    {
      stage: "Application Submission",
      timing: "Before original deadline",
      action: "Submit formal application through your institution's system.",
      tip: "Keep copies of everything. Use tracked email or official portals with timestamps."
    },
    {
      stage: "Review Period",
      timing: "2-6 weeks typically",
      action: "Wait for committee decision. Be available for questions.",
      tip: "Follow up politely after 2 weeks if no response. Don't assume silence means approval."
    },
    {
      stage: "Decision & Next Steps",
      timing: "Upon notification",
      action: "Receive decision. If approved, note new deadline. If rejected, understand appeal options.",
      tip: "Document the outcome. If partial extension granted, assess if it's sufficient."
    }
  ];

  const requestTemplates = [
    {
      scenario: "Medical Extension Request",
      template: `Subject: Request for Dissertation Extension - Medical Circumstances

Dear [Graduate School/Department Contact],

I am writing to formally request an extension to my dissertation submission deadline, currently set for [date]. I am a [Master's/PhD] student in [Department], student ID [number].

Due to [brief description of medical condition], I have been unable to maintain my expected progress over the past [timeframe]. I am currently under the care of [GP/specialist], and my condition has significantly impacted my ability to [specific impacts on research].

I am requesting an extension of [X months] to allow for recovery and completion of my dissertation. I have attached:
- Medical certificate from [Dr. Name]
- Statement from my supervisor, [Supervisor Name], supporting this request
- Revised timeline for completion

I remain committed to completing my research and believe this extension will allow me to submit work of the quality expected. I am happy to provide any additional information required.

Thank you for your consideration.

Sincerely,
[Your name]
[Student ID]
[Programme]`,
      notes: "Be specific but not overly detailed about medical issues. Focus on impact and recovery plan."
    },
    {
      scenario: "Interruption of Studies Request",
      template: `Subject: Application for Interruption of Studies

Dear [Registry/Graduate School],

I am writing to request a formal interruption of studies for my [degree programme] in [Department].

Due to [circumstances - e.g., family emergency, health condition, employment requirement], I am unable to continue my studies at this time. I am requesting an interruption period of [X months/academic year], with an anticipated return date of [date].

Current status:
- I have completed [X chapters/percentage] of my dissertation
- My supervisor, [Name], is aware of this request
- I have attached supporting documentation

During the interruption period, I will:
- [Plans during interruption]
- Maintain contact with my supervisor [frequency]
- Ensure my research materials are properly stored/backed up

I understand that during interruption:
- I will not have access to [facilities/resources - confirm with your institution]
- My funding [will/will not] be affected [confirm your situation]
- I will need to re-register upon return

I have discussed this decision with my supervisor and believe it is the best course of action to ensure I can ultimately complete my degree successfully.

Sincerely,
[Your name]`,
      notes: "Different from extension - this is a complete pause. Understand funding and access implications before applying."
    },
    {
      scenario: "Appeal Against Rejected Extension",
      template: `Subject: Appeal Against Extension Decision - [Your Name, Student ID]

Dear [Appeals Committee/Relevant Body],

I am writing to formally appeal the decision dated [date] to reject my application for an extension to my dissertation deadline.

Original decision: [Briefly state what was decided]
Grounds for appeal: [Choose relevant grounds]
- New evidence has become available
- Procedural irregularity in the original decision
- The original decision was unreasonable given the evidence

I would like to present the following additional information:

[Detail new evidence or arguments not previously considered]

I am requesting that my case be reviewed with consideration of [specific request - e.g., the new medical evidence, the procedural issue identified].

I have attached:
- Copy of original decision
- [New evidence/documentation]
- [Any supporting statements]

I request a meeting to discuss my appeal if that would be helpful to the committee.

Sincerely,
[Your name]`,
      notes: "Appeals have strict deadlines - usually 10-20 working days. Check your institution's regulations carefully."
    }
  ];

  const redFlags = [
    {
      flag: "Waiting Until After Deadline",
      why: "Retrospective extensions are much harder to obtain and viewed more skeptically.",
      instead: "Apply before the deadline, even if you're unsure you'll need it."
    },
    {
      flag: "Vague or Exaggerated Claims",
      why: "Committees are experienced at spotting embellishment. It damages credibility.",
      instead: "Be honest and specific. A genuine minor issue is better than an exaggerated major one."
    },
    {
      flag: "No Supporting Evidence",
      why: "Unsupported claims suggest the situation isn't serious enough to be documented.",
      instead: "Always provide documentation, even if you think your word should be enough."
    },
    {
      flag: "Requesting Excessive Time",
      why: "Asking for 12 months for a minor setback seems disproportionate and raises questions.",
      instead: "Request realistic time. You can always apply for additional extension if needed."
    },
    {
      flag: "Blaming Others Without Evidence",
      why: "Criticizing your supervisor or department without documentation appears defensive.",
      instead: "Focus on impact, not blame. If supervision is the issue, document it objectively."
    },
    {
      flag: "Ignoring Institution Procedures",
      why: "Informal requests to the wrong people waste time and may not be valid.",
      instead: "Follow the official process exactly. Use correct forms and submit to designated contacts."
    }
  ];

  const faqs = [
    {
      question: "How long an extension can I realistically get?",
      answer: "This varies by institution and circumstances. Typically: 1-3 months for minor issues, 3-6 months for significant health/personal circumstances, up to 12 months for major life events. Some institutions have maximum limits (e.g., total registration cannot exceed 7 years). Exceptional circumstances can sometimes exceed these limits."
    },
    {
      question: "Will an extension affect my funding?",
      answer: "It depends on your funding source. Research council funding may be extendable with strong justification. University scholarships often have fixed end dates. Self-funded students have more flexibility but face continued fees. Always check with your funder BEFORE applying for extension."
    },
    {
      question: "Can I take an interruption instead of an extension?",
      answer: "Yes, an interruption (leave of absence) pauses your registration entirely. This is appropriate when you cannot engage with your research at all. Extensions are better when you can work but need more time. Interruptions typically don't count toward maximum registration limits."
    },
    {
      question: "What happens if my extension is rejected?",
      answer: "You typically have the right to appeal within a specified timeframe (usually 10-20 working days). You can also submit on the original deadline with reduced completion, request a meeting to discuss alternatives, or in some cases, withdraw and return later. Don't assume rejection is final."
    },
    {
      question: "Do I need my supervisor's support for an extension?",
      answer: "In most cases, yes. Supervisor endorsement significantly strengthens applications. However, if your supervisor IS the problem (e.g., inadequate supervision), you should document this and may need to go through alternative channels (graduate school, department head, student advocacy)."
    },
    {
      question: "Can I get an extension for poor time management?",
      answer: "Generally, no. 'I underestimated how long it would take' is not usually valid grounds. However, if there are underlying reasons for the poor time management (undiagnosed ADHD, depression, caring responsibilities you didn't disclose), these CAN be grounds with appropriate documentation."
    },
    {
      question: "What's the difference between extension, interruption, and withdrawal?",
      answer: "Extension: You remain registered and continue working, with a later deadline. Interruption: Registration is paused; you cannot access resources or work officially. Withdrawal: You leave the programme entirely, possibly with the option to return later. Extensions preserve momentum; interruptions provide complete breaks; withdrawal is a last resort."
    }
  ];

  return (
    <Layout>
      <SEO
        title="Academic Deadlines & Deferrals Guide | Extension Request Templates"
        description="Complete guide to requesting dissertation deadline extensions, interruptions of study, and managing mitigating circumstances. Includes professional templates and step-by-step process."
        keywords={["dissertation extension", "deadline deferral", "interruption of studies", "mitigating circumstances", "academic extension request", "PhD extension", "thesis deadline"]}
        canonical="/deadlines-deferrals"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to Request a Dissertation Extension or Deferral"
        description="Step-by-step guide to successfully applying for academic deadline extensions, including valid grounds, documentation requirements, and professional request templates."
        totalTime="PT30M"
        steps={[
          { name: "Assess Your Grounds", text: "Determine if your circumstances qualify for extension: medical/health issues, personal circumstances, academic/supervision problems, employment changes, or external factors. Higher success rates come with stronger documentation." },
          { name: "Gather Supporting Documentation", text: "Collect evidence appropriate to your circumstances: medical certificates, death certificates, employment records, correspondence with supervisors, or official communications proving your situation." },
          { name: "Calculate Realistic Timeline", text: "Request realistic extension time. 1-3 months for minor issues, 3-6 months for significant circumstances, up to 12 months for major life events. Don't over-request—you can apply for additional time if needed." },
          { name: "Prepare Your Request", text: "Use professional templates for medical extensions, interruption of studies, or supervisor issues. Be specific about circumstances, impact, and recovery plan. Focus on facts, not emotions." },
          { name: "Follow Official Procedures", text: "Submit to the correct department using required forms. Keep copies of everything. Follow up if you don't receive acknowledgment within stated timeframes." },
          { name: "Avoid Common Red Flags", text: "Don't leave requests until the last minute, use vague claims, provide no evidence, request excessive time, or blame others without documentation." }
        ]}
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2847}
        itemName="Deadlines & Deferrals Guide"
        itemType="EducationalOrganization"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-midnight via-midnight-rich to-midnight overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-medium">Tier 2 Resource</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
              Academic Deadlines & <span className="text-gradient-copper">Deferrals Guide</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Life doesn't pause for dissertations. When circumstances beyond your control threaten your deadline, 
              knowing how to navigate the extension process can save your degree. This guide covers everything 
              from valid grounds to professional request templates.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                <a href="#templates">
                  Get Request Templates
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <a href="#grounds">View Valid Grounds</a>
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
              { stat: "47%", label: "of PhD students request extensions" },
              { stat: "85%", label: "approval rate with documentation" },
              { stat: "3-6mo", label: "average extension granted" },
              { stat: "14 days", label: "typical processing time" }
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

      {/* Valid Grounds Section */}
      <section id="grounds" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Valid Grounds for Extension
            </h2>
            <p className="text-lg text-muted-foreground">
              Not all circumstances qualify for extensions. Here's what institutions typically accept, 
              the evidence required, and realistic success rates.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {extensionGrounds.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-copper/10">
                          <category.icon className="w-5 h-5 text-copper" />
                        </div>
                        <CardTitle className="text-xl">{category.category}</CardTitle>
                      </div>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        category.successRate === "High" ? "bg-green-500/10 text-green-600" :
                        category.successRate === "Medium-High" ? "bg-emerald-500/10 text-emerald-600" :
                        "bg-amber-500/10 text-amber-600"
                      }`}>
                        {category.successRate} Success Rate
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Accepted Grounds</h4>
                        <ul className="space-y-2">
                          {category.grounds.map((ground, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                              <span>{ground}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Evidence Required</h4>
                        <p className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                          {category.evidence}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Extension Process: Step by Step
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding the typical timeline helps you plan and avoid last-minute panic.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {processTimeline.map((step, index) => (
                <motion.div
                  key={step.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6 pb-8"
                >
                  {/* Timeline line */}
                  {index < processTimeline.length - 1 && (
                    <div className="absolute left-[19px] top-10 w-0.5 h-full bg-border" />
                  )}
                  
                  {/* Step number */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-copper text-white flex items-center justify-center font-bold text-sm relative z-10">
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{step.stage}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-copper/10 text-copper">
                        {step.timing}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{step.action}</p>
                    <div className="flex items-start gap-2 text-sm bg-amber-500/5 border border-amber-500/20 rounded-lg p-3">
                      <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-amber-700 dark:text-amber-300">{step.tip}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request Templates */}
      <section id="templates" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Professional Request Templates
            </h2>
            <p className="text-lg text-muted-foreground">
              Adapt these templates for your situation. Personalize the details but maintain the professional structure.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {requestTemplates.map((template, index) => (
                <AccordionItem 
                  key={index} 
                  value={`template-${index}`}
                  className="border rounded-xl overflow-hidden bg-card"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                    <div className="flex items-center gap-3 text-left">
                      <FileText className="w-5 h-5 text-copper" />
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

      {/* Red Flags */}
      <section className="py-16 sm:py-20 bg-red-500/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-red-600 text-sm font-medium">Avoid These Mistakes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Red Flags That Get Applications Rejected
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {redFlags.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-red-200 dark:border-red-900/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                      <h3 className="font-semibold text-red-600 dark:text-red-400">{item.flag}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.why}</p>
                    <div className="flex items-start gap-2 text-sm bg-green-500/5 border border-green-500/20 rounded-lg p-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-green-700 dark:text-green-300"><strong>Instead:</strong> {item.instead}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20">
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
                <Link to="/supervisor-guide" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors w-fit mb-4">
                        <Users className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">Supervisor Guide</h3>
                      <p className="text-sm text-muted-foreground">Navigate difficult advisor relationships.</p>
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
                <Link to="/phd-mental-health" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors w-fit mb-4">
                        <Heart className="w-6 h-6 text-rose-500" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">Mental Health Hub</h3>
                      <p className="text-sm text-muted-foreground">Wellness resources for researchers.</p>
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
                <Link to="/part-time-phd" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors w-fit mb-4">
                        <Clock className="w-6 h-6 text-purple-500" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">Part-Time PhD Guide</h3>
                      <p className="text-sm text-muted-foreground">Balance work, life, and research.</p>
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/part-time-phd" className="block group h-full">
                <Card className="h-full transition-all hover:shadow-lg hover:border-copper/30">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors shrink-0">
                        <Briefcase className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-copper transition-colors">Part-Time PhD Guide</h3>
                        <p className="text-sm text-muted-foreground">Balance work, life, and research.</p>
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
                Need Help With Your Extension Application?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our academic advisors can help you craft compelling extension requests, 
                identify valid grounds, and navigate the appeals process if needed.
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
                    <BookOpen className="mr-2 w-4 h-4" />
                    More Resources
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

export default DeadlinesDeferrals;