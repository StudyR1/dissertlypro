import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, AggregateRatingSchema } from "@/components/schemas";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  GraduationCap, 
  MessageSquare, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Shield,
  Users,
  Heart,
  Target,
  Lightbulb,
  Calendar,
  BookOpen,
  Mic,
  Brain,
  Award,
  FileQuestion,
  Sparkles,
  Briefcase,
  Scale
} from "lucide-react";

const VivaPreparation = () => {
  const [selectedOutcome, setSelectedOutcome] = useState<string | null>(null);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/blog" },
    { name: "Viva Preparation Guide", url: "/viva-preparation" }
  ];

  const vivaTimeline = [
    {
      period: "3-6 Months Before",
      tasks: [
        "Complete thesis draft and submit for examination",
        "Understand your institution's viva procedures",
        "Research your examiners' work and perspectives",
        "Begin regular re-reading of your thesis"
      ],
      priority: "Setup"
    },
    {
      period: "1-2 Months Before",
      tasks: [
        "Conduct mock viva with supervisor/colleagues",
        "Create thesis summary document (key arguments per chapter)",
        "Prepare answers to predictable questions",
        "Practice articulating your contribution to knowledge"
      ],
      priority: "Preparation"
    },
    {
      period: "2 Weeks Before",
      tasks: [
        "Final read-through with annotations",
        "Prepare opening statement (2-3 minutes)",
        "Review examiner publications relevant to your work",
        "Practice with non-experts to check clarity"
      ],
      priority: "Refinement"
    },
    {
      period: "Week Of",
      tasks: [
        "Light review only - don't cram",
        "Prepare physically: sleep, nutrition, exercise",
        "Logistics: know the room, timing, format",
        "Prepare materials to bring: annotated thesis, notes, water"
      ],
      priority: "Wellness"
    },
    {
      period: "Day Before",
      tasks: [
        "No intensive preparation - trust your knowledge",
        "Relaxation activities: walk, watch something light",
        "Prepare clothes, bag, documents",
        "Early, quality sleep"
      ],
      priority: "Rest"
    }
  ];

  const questionCategories = [
    {
      category: "Opening & Overview",
      icon: Mic,
      questions: [
        { q: "Can you summarize your thesis in 5 minutes?", tip: "Practice this repeatedly. It's almost always asked." },
        { q: "What is your original contribution to knowledge?", tip: "Be able to state this clearly and confidently." },
        { q: "Why did you choose this topic?", tip: "Connect personal motivation to academic significance." },
        { q: "What would you do differently if starting again?", tip: "Shows reflection. Acknowledge limitations constructively." }
      ]
    },
    {
      category: "Literature & Theory",
      icon: BookOpen,
      questions: [
        { q: "How does your work relate to [key scholar's] theory?", tip: "Know the major figures and your position relative to them." },
        { q: "Why didn't you engage more with [alternative approach]?", tip: "Justify your choices; acknowledge alternatives respectfully." },
        { q: "Your literature review doesn't include [X]. Why?", tip: "Either explain inclusion criteria or acknowledge the gap." },
        { q: "What's your theoretical framework and why?", tip: "Be able to explain it to someone outside your field." }
      ]
    },
    {
      category: "Methodology",
      icon: Target,
      questions: [
        { q: "Why this methodology over alternatives?", tip: "Show you considered options and chose deliberately." },
        { q: "How did you ensure validity/reliability/rigor?", tip: "Know the quality criteria for your paradigm." },
        { q: "What were the limitations of your method?", tip: "Acknowledge honestly; explain mitigation strategies." },
        { q: "How did you handle [specific methodological challenge]?", tip: "Be ready to discuss difficulties you actually encountered." },
        { q: "Would your findings be different with a larger sample?", tip: "Understand generalizability claims you can/cannot make." }
      ]
    },
    {
      category: "Findings & Analysis",
      icon: Brain,
      questions: [
        { q: "What was your most surprising finding?", tip: "Shows depth of engagement with your data." },
        { q: "How do you explain [specific finding]?", tip: "Be ready to discuss each major finding in depth." },
        { q: "Couldn't this be interpreted differently?", tip: "Acknowledge alternative interpretations; defend yours." },
        { q: "What about the data that didn't fit your argument?", tip: "Show you engaged with disconfirming evidence." }
      ]
    },
    {
      category: "Implications & Future",
      icon: Sparkles,
      questions: [
        { q: "What are the practical implications of your findings?", tip: "Connect research to real-world impact." },
        { q: "What would you recommend for future research?", tip: "Show you understand where the field should go next." },
        { q: "How would you develop this into a book/publication?", tip: "Demonstrates you see beyond the thesis." },
        { q: "Where do you position yourself in current debates?", tip: "Shows confidence in your scholarly identity." }
      ]
    },
    {
      category: "Challenging Questions",
      icon: AlertTriangle,
      questions: [
        { q: "I'm not convinced by your argument in Chapter X.", tip: "Don't be defensive. Ask for specific concerns, then respond." },
        { q: "This has already been done by [scholar].", tip: "Know your distinction. If genuine overlap, acknowledge and differentiate." },
        { q: "Your conclusions don't seem supported by your evidence.", tip: "Walk through your reasoning step by step." },
        { q: "What would disprove your thesis?", tip: "Shows you understand falsifiability and scholarly humility." }
      ]
    }
  ];

  const vivaOutcomes = [
    {
      id: "pass",
      outcome: "Pass (No Corrections)",
      likelihood: "Rare (5-10%)",
      meaning: "Thesis is accepted as submitted. You're done!",
      icon: Award,
      color: "green",
      whatNext: "Celebrate. Submit any paperwork for conferral. You've finished."
    },
    {
      id: "minor",
      outcome: "Minor Corrections",
      likelihood: "Most Common (60-70%)",
      meaning: "Small changes required: typos, clarifications, minor additions. Typically 1-3 months to complete.",
      icon: CheckCircle,
      color: "blue",
      whatNext: "Review correction list carefully. Complete methodically. Submit to internal examiner for sign-off."
    },
    {
      id: "major",
      outcome: "Major Corrections",
      likelihood: "Common (15-25%)",
      meaning: "Significant revisions required: rewriting sections, additional analysis, strengthening arguments. Usually 6-12 months.",
      icon: AlertTriangle,
      color: "amber",
      whatNext: "Meet with supervisor to plan revisions. Create timeline. May require resubmission fee. Typically no second viva."
    },
    {
      id: "revise",
      outcome: "Revise and Resubmit",
      likelihood: "Less Common (5-10%)",
      meaning: "Major work needed. Full thesis resubmission with second viva. 12-18 months typical.",
      icon: FileQuestion,
      color: "orange",
      whatNext: "Serious situation but not failure. Assess if revisions are feasible. Consider supervisor support. Create detailed plan."
    },
    {
      id: "mphil",
      outcome: "MPhil Award",
      likelihood: "Rare (1-3%)",
      meaning: "Work doesn't meet PhD standard but merits Master's. No resubmission option for PhD.",
      icon: GraduationCap,
      color: "purple",
      whatNext: "Understand your options. You may appeal if you believe the decision was unfair. Seek advice before deciding."
    },
    {
      id: "fail",
      outcome: "Fail",
      likelihood: "Very Rare (<1%)",
      meaning: "Thesis fails to meet requirements with no opportunity for revision.",
      icon: AlertTriangle,
      color: "red",
      whatNext: "Extremely rare. Usually only for academic misconduct or fundamental unsuitability. Appeals process exists."
    }
  ];

  const mockVivaGuide = [
    {
      step: "Arrange Mock Viva",
      details: "Schedule 2-3 weeks before actual viva. Ask supervisor plus one other academic (ideally from different field). Allow 1.5-2 hours.",
      tip: "An external perspective often reveals blind spots your supervisor misses."
    },
    {
      step: "Prepare Materials",
      details: "Give mock examiners your thesis at least 1 week before. Provide examiner names/backgrounds if known. Prepare as you would for real viva.",
      tip: "Treat it seriously. Dress as you would for the real thing."
    },
    {
      step: "Simulate Conditions",
      details: "Use a formal setting. No interruptions. Practice opening statement. Have examiners role-play challenging questions.",
      tip: "Ask one examiner to be deliberately difficult. You want to practice handling pressure."
    },
    {
      step: "Get Feedback",
      details: "After the mock, get detailed feedback on: content, presentation style, handling difficult questions, areas of weakness.",
      tip: "Ask specifically: 'Where did I seem least confident? What would you probe further?'"
    },
    {
      step: "Review and Adjust",
      details: "Identify gaps in your preparation. Practice weak areas. Don't just practice answers—practice thinking on your feet.",
      tip: "If you don't know an answer, practice saying 'That's a great question. Let me think about that...'"
    }
  ];

  const dayOfAdvice = [
    { title: "Arrive Early", description: "15-20 minutes minimum. Use waiting time to settle, not panic." },
    { title: "Bring Essentials", description: "Annotated thesis, summary notes, water, tissues, any medication you need." },
    { title: "Opening Mindset", description: "You are the world expert on your thesis. The examiners want to have an intellectual discussion, not an interrogation." },
    { title: "Listen Carefully", description: "Make sure you understand each question before answering. It's okay to ask for clarification." },
    { title: "Think Before Speaking", description: "Silence while you gather thoughts is better than rambling. Take your time." },
    { title: "Acknowledge Limits", description: "It's fine to say 'I hadn't considered that, but my instinct is...' or 'That's beyond the scope of this study, but...'" },
    { title: "If You Don't Know", description: "Say so honestly. 'I don't have a definitive answer to that, but here's how I might approach it...'" },
    { title: "Stay Composed", description: "Challenging questions are normal and expected. They're not attacks; they're intellectual engagement." }
  ];

  const faqs = [
    {
      question: "How long does a viva usually last?",
      answer: "Typically 1.5 to 3 hours, though some can be shorter or longer. UK vivas tend to be 1.5-2 hours; some US and European defenses can be longer. The length isn't an indicator of outcome—a long viva can mean engaged discussion, not problems."
    },
    {
      question: "What should I wear to my viva?",
      answer: "Dress professionally but comfortably. Most candidates wear smart business attire (suit or equivalent). Avoid anything new or uncomfortable. You want to feel confident and able to focus entirely on the discussion, not your clothes."
    },
    {
      question: "Can I bring notes into the viva?",
      answer: "Yes, in most cases. You can usually bring your annotated thesis, summary notes, and any preparation materials. Check with your institution, but examiners generally expect you to reference your work. Don't read from scripts, but having notes for reference is fine."
    },
    {
      question: "What if I disagree with an examiner's criticism?",
      answer: "It's okay—and sometimes appropriate—to respectfully disagree. Say something like: 'I see your point, but I would argue that...' or 'That's a valid perspective; my reasoning was...' The key is to defend your work with evidence, not become defensive emotionally."
    },
    {
      question: "Is it normal to get corrections?",
      answer: "Yes! Minor corrections are the most common outcome (60-70% of candidates). Even major corrections are not a failure—they're an opportunity to strengthen your work. A pass with no corrections is actually quite rare. Don't view corrections negatively."
    },
    {
      question: "What happens immediately after the viva?",
      answer: "Usually, you'll be asked to leave the room while examiners deliberate (5-20 minutes). You'll then be invited back and told the outcome, often with verbal feedback. Formal written feedback follows. Some candidates report the wait being the hardest part!"
    },
    {
      question: "Can I fail my viva if my thesis is already submitted?",
      answer: "Outright failure is extremely rare (<1%). If your supervisor allowed submission, your work has already been deemed viva-ready. However, significant revisions (major corrections or resubmit) are possible. The viva is not just a formality, but catastrophic failure is very uncommon."
    }
  ];

  return (
    <Layout>
      <SEO
        title="Viva & Thesis Defense Preparation Guide | Mock Viva Questions & Tips"
        description="Complete viva voce preparation guide with common examiner questions, mock viva advice, outcome explanations, and expert tips for a successful doctoral defense."
        keywords={["viva preparation", "thesis defense", "PhD viva", "viva questions", "mock viva", "doctoral examination", "viva tips", "dissertation defense"]}
        canonical="/viva-preparation"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to Prepare for Your Viva Voce (Thesis Defense)"
        description="Complete guide to viva preparation covering timeline planning, mock vivas, common questions, handling different outcomes, and day-of strategies for oral defense success."
        totalTime="PT45M"
        steps={[
          { name: "Understand the Timeline", text: "Begin preparation 3-6 months before by researching examiners and re-reading your thesis. 1-2 months before, conduct mock vivas and prepare answers to predictable questions. 2 weeks before, do final read-through with annotations." },
          { name: "Research Your Examiners", text: "Study your examiners' published work, theoretical positions, and research interests. Understand how their perspectives might shape their questions about your methodology and conclusions." },
          { name: "Prepare for Common Questions", text: "Master responses to universal questions: thesis summary, contribution to knowledge, methodology justification, and what you'd do differently. Practice articulating complex ideas clearly." },
          { name: "Conduct Mock Vivas", text: "Schedule 2-3 weeks before actual viva with supervisor plus another academic. Simulate formal conditions, practice your opening statement, and get detailed feedback on weak areas." },
          { name: "Prepare for All Outcomes", text: "Understand possible results: pass, minor corrections, major corrections, revise and resubmit, or fail. Know that most outcomes involve some corrections—this is normal and expected." },
          { name: "Master Day-Of Strategies", text: "Arrive 15-20 minutes early. Bring annotated thesis, summary notes, and water. Remember you're the world expert on your research. Listen carefully, think before speaking, and acknowledge limits honestly." }
        ]}
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2847}
        itemName="Viva Preparation Guide"
        itemType="EducationalOrganization"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-midnight via-midnight-rich to-midnight overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Tier 2 Resource</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
              Viva & Thesis Defense <span className="text-gradient-copper">Preparation Hub</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              The viva voce is your chance to demonstrate mastery of your research. 
              This comprehensive guide covers everything from timeline planning and common questions 
              to mock viva strategies and handling every possible outcome.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                <a href="#questions">
                  View Common Questions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <a href="#outcomes">Understand Outcomes</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preparation Timeline */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Viva Preparation Timeline
            </h2>
            <p className="text-lg text-muted-foreground">
              Strategic preparation over time is more effective than last-minute cramming.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {vivaTimeline.map((period, index) => (
                <motion.div
                  key={period.period}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-muted/50 py-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-copper" />
                          {period.period}
                        </CardTitle>
                        <span className="text-xs px-3 py-1 rounded-full bg-copper/10 text-copper font-medium">
                          {period.priority}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {period.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span>{task}</span>
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

      {/* Common Questions */}
      <section id="questions" className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Common Viva Questions by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              You can't predict every question, but you can prepare for the types of questions that almost always come up.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {questionCategories.map((category, index) => (
                <AccordionItem 
                  key={index} 
                  value={`category-${index}`}
                  className="border rounded-xl overflow-hidden bg-card"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                    <div className="flex items-center gap-3 text-left">
                      <div className="p-2 rounded-lg bg-copper/10">
                        <category.icon className="w-5 h-5 text-copper" />
                      </div>
                      <span className="font-semibold text-lg">{category.category}</span>
                      <span className="text-sm text-muted-foreground ml-auto mr-4">
                        {category.questions.length} questions
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4">
                      {category.questions.map((q, i) => (
                        <div key={i} className="p-4 rounded-lg bg-muted/50">
                          <p className="font-medium text-foreground mb-2">"{q.q}"</p>
                          <div className="flex items-start gap-2 text-sm">
                            <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{q.tip}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Mock Viva Guide */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How to Conduct a Mock Viva
            </h2>
            <p className="text-lg text-muted-foreground">
              A well-run mock viva is the single best preparation strategy. Here's how to do it right.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {mockVivaGuide.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6 pb-8"
                >
                  {index < mockVivaGuide.length - 1 && (
                    <div className="absolute left-[19px] top-10 w-0.5 h-full bg-border" />
                  )}
                  
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-copper text-white flex items-center justify-center font-bold text-sm relative z-10">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
                    <p className="text-muted-foreground mb-3">{step.details}</p>
                    <div className="flex items-start gap-2 text-sm bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3">
                      <Lightbulb className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-emerald-700 dark:text-emerald-300">{step.tip}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Viva Outcomes */}
      <section id="outcomes" className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Understanding Viva Outcomes
            </h2>
            <p className="text-lg text-muted-foreground">
              Know what each possible outcome means and how to respond. Click each card to learn more.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vivaOutcomes.map((outcome, index) => (
              <motion.div
                key={outcome.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className={`cursor-pointer transition-all h-full ${
                    selectedOutcome === outcome.id ? 'ring-2 ring-copper shadow-lg' : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedOutcome(selectedOutcome === outcome.id ? null : outcome.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${outcome.color}-500/10`}>
                        <outcome.icon className={`w-5 h-5 text-${outcome.color}-500`} />
                      </div>
                      <div>
                        <CardTitle className="text-base">{outcome.outcome}</CardTitle>
                        <span className={`text-xs text-${outcome.color}-600`}>{outcome.likelihood}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{outcome.meaning}</p>
                    {selectedOutcome === outcome.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pt-3 border-t border-border"
                      >
                        <p className="text-sm font-medium text-foreground mb-1">What to do next:</p>
                        <p className="text-sm text-muted-foreground">{outcome.whatNext}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-Of Tips */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              On the Day: Essential Advice
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {dayOfAdvice.map((advice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{advice.title}</h3>
                    <p className="text-sm text-muted-foreground">{advice.description}</p>
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
                      <p className="text-sm text-muted-foreground">Manage viva anxiety and stress.</p>
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
                <Link to="/supervisor-guide" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors w-fit mb-4">
                        <Users className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">Supervisor Guide</h3>
                      <p className="text-sm text-muted-foreground">Get your supervisor's support for viva.</p>
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
                <Link to="/committee-conflicts" className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors w-fit mb-4">
                        <Shield className="w-6 h-6 text-amber-500" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-copper transition-colors">Committee Conflicts</h3>
                      <p className="text-sm text-muted-foreground">Handle examiner disagreements.</p>
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
                Want Expert Viva Coaching?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our academic advisors offer personalized mock viva sessions with detailed feedback, 
                helping you build confidence and identify areas for improvement before the real thing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                  <Link to="/consultation">
                    Book Mock Viva Session
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/editing">
                    Thesis Polishing Services
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

export default VivaPreparation;