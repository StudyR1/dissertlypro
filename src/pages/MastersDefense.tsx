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
  Mic, 
  Target,
  CheckCircle, 
  Clock, 
  FileText, 
  Users,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  MessageSquare,
  Eye,
  Calendar,
  GraduationCap,
  Briefcase,
  Brain,
  Shield,
  Zap,
  Heart
} from "lucide-react";

const MastersDefense = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Master's Thesis Defense Preparation", url: "/masters-defense" }
  ];

  const defenseModules = [
    {
      module: "Understanding Defense Formats",
      icon: Users,
      topics: [
        "Traditional oral examination structure",
        "Presentation + Q&A hybrid formats",
        "Remote/virtual defense protocols",
        "Public vs. closed defense sessions",
        "Committee composition and roles"
      ],
      estimatedTime: "30 min"
    },
    {
      module: "Presentation Mastery",
      icon: Mic,
      topics: [
        "Structuring your 15-20 minute presentation",
        "Creating effective defense slides",
        "Balancing detail with clarity",
        "Visual aids and data presentation",
        "Managing presentation nerves"
      ],
      estimatedTime: "60 min"
    },
    {
      module: "Anticipating Questions",
      icon: MessageSquare,
      topics: [
        "Common question categories by chapter",
        "Methodology defense strategies",
        "Handling 'so what?' questions",
        "Limitations and future research queries",
        "Preparing for unexpected questions"
      ],
      estimatedTime: "90 min"
    },
    {
      module: "Response Techniques",
      icon: Target,
      topics: [
        "The pause-think-respond framework",
        "Acknowledging valid criticisms gracefully",
        "Redirecting to your strengths",
        "Using your thesis as a reference",
        "When to say 'I don't know'"
      ],
      estimatedTime: "45 min"
    },
    {
      module: "Mock Defense Practice",
      icon: Brain,
      topics: [
        "Organizing mock defense sessions",
        "Choosing effective mock examiners",
        "Recording and reviewing your performance",
        "Iterating based on feedback",
        "Final week preparation rituals"
      ],
      estimatedTime: "60 min"
    },
    {
      module: "Day-Of Strategies",
      icon: Calendar,
      topics: [
        "Pre-defense checklist and setup",
        "Managing anxiety techniques",
        "Professional dress and presence",
        "Technical backup plans",
        "Post-defense procedures and revisions"
      ],
      estimatedTime: "30 min"
    }
  ];

  const commonQuestions = [
    {
      category: "Research Foundation",
      questions: [
        "What motivated you to choose this topic?",
        "How does your research address a gap in the literature?",
        "What is the theoretical framework underpinning your study?",
        "How did you refine your research questions during the process?"
      ]
    },
    {
      category: "Methodology",
      questions: [
        "Why did you choose this methodology over alternatives?",
        "How did you ensure validity and reliability?",
        "What sampling strategy did you use and why?",
        "What ethical considerations did you address?"
      ]
    },
    {
      category: "Findings & Analysis",
      questions: [
        "What were your most significant findings?",
        "Did any findings surprise you? How did you handle them?",
        "How do your findings relate to existing literature?",
        "What alternative interpretations of your data are possible?"
      ]
    },
    {
      category: "Contributions & Implications",
      questions: [
        "What is the original contribution of your thesis?",
        "What are the practical implications of your findings?",
        "How might your findings influence policy or practice?",
        "If you had unlimited resources, how would you extend this research?"
      ]
    },
    {
      category: "Limitations & Reflection",
      questions: [
        "What are the main limitations of your study?",
        "What would you do differently if starting over?",
        "How generalizable are your findings?",
        "What did you learn about yourself as a researcher?"
      ]
    }
  ];

  const responseStrategies = [
    {
      scenario: "When You Know the Answer",
      icon: CheckCircle,
      strategy: "Pause briefly (2-3 seconds) to organize thoughts, then provide a structured response. Reference specific thesis sections when relevant. End with a clear conclusion.",
      example: "That's an important question about my sampling approach. As I discuss in Chapter 3, Section 3.2, I chose purposive sampling because..."
    },
    {
      scenario: "When You Need Time to Think",
      icon: Clock,
      strategy: "Acknowledge the question's depth, ask for clarification if genuinely needed, or reframe the question aloud while formulating your response.",
      example: "That's a thought-provoking question. Let me make sure I understand—you're asking about the relationship between X and Y? Let me consider that..."
    },
    {
      scenario: "When You Don't Know",
      icon: AlertTriangle,
      strategy: "Be honest but constructive. Acknowledge the gap, explain why it's outside your scope, and suggest how you might approach it in future research.",
      example: "I didn't explore that specific aspect in my study. Given my focus on X, I prioritized Y. However, that would be a valuable direction for future research..."
    },
    {
      scenario: "When Facing Criticism",
      icon: Shield,
      strategy: "Stay calm and non-defensive. Acknowledge valid points, explain your reasoning, and demonstrate you've thought critically about limitations.",
      example: "That's a valid concern. I recognize that limitation in my methodology. I addressed it by... and in hindsight, an alternative approach could have been..."
    },
    {
      scenario: "When Asked About Future Research",
      icon: Zap,
      strategy: "Show enthusiasm for the field's potential. Connect to your findings' implications and demonstrate ongoing scholarly thinking.",
      example: "My findings open several exciting avenues. Building on the unexpected result in Chapter 4, I would next explore..."
    }
  ];

  const presentationStructure = [
    {
      section: "Opening (1-2 min)",
      content: "Thank committee, state thesis title, preview presentation structure",
      tips: ["Memorize your opening to start confidently", "Make eye contact with each committee member"]
    },
    {
      section: "Context & Problem (2-3 min)",
      content: "Research background, problem statement, significance of study",
      tips: ["Don't assume committee remembers all details", "Clearly articulate the 'so what?' factor"]
    },
    {
      section: "Literature & Gap (2-3 min)",
      content: "Key theoretical foundations, research gap your study addresses",
      tips: ["Highlight 3-5 key sources only", "Show how gap leads to your questions"]
    },
    {
      section: "Methodology (3-4 min)",
      content: "Research design, data collection, analysis approach",
      tips: ["Justify key choices briefly", "Prepare for detailed follow-up questions"]
    },
    {
      section: "Key Findings (4-5 min)",
      content: "Major findings organized by research question or theme",
      tips: ["Use clear visuals for data", "Connect findings to research questions"]
    },
    {
      section: "Discussion & Implications (2-3 min)",
      content: "Interpretation, contributions, practical implications",
      tips: ["Highlight original contributions", "Connect to broader field impact"]
    },
    {
      section: "Limitations & Future Research (1-2 min)",
      content: "Honest assessment of limitations, next steps",
      tips: ["Show self-awareness without undermining work", "Demonstrate ongoing scholarly interest"]
    },
    {
      section: "Conclusion (1 min)",
      content: "Summary of contribution, thank committee, invite questions",
      tips: ["End strong with your key takeaway", "Transition smoothly to Q&A"]
    }
  ];

  const anxietyTechniques = [
    {
      technique: "4-7-8 Breathing",
      description: "Inhale for 4 seconds, hold for 7, exhale for 8. Repeat 3-4 times before entering the room.",
      icon: Heart
    },
    {
      technique: "Power Posing",
      description: "Spend 2 minutes in an expansive pose (hands on hips, chest open) before your defense to boost confidence.",
      icon: Zap
    },
    {
      technique: "Reframe Anxiety",
      description: "Tell yourself 'I'm excited' rather than 'I'm nervous.' Research shows this improves performance.",
      icon: Brain
    },
    {
      technique: "Visualization",
      description: "Mentally rehearse walking in, presenting confidently, and answering questions successfully.",
      icon: Eye
    },
    {
      technique: "Grounding Technique",
      description: "Name 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste to center yourself.",
      icon: Target
    },
    {
      technique: "Prepared Safety Statement",
      description: "Have a go-to phrase for difficult moments: 'Let me take a moment to consider that carefully.'",
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: "How long is a typical master's thesis defense?",
      answer: "Most master's defenses last 60-90 minutes total. Typically, you'll present for 15-25 minutes, followed by 30-60 minutes of questions from your committee. Some institutions include a brief private deliberation period. Check your specific program requirements, as formats vary by institution and discipline."
    },
    {
      question: "What should I wear to my thesis defense?",
      answer: "Dress professionally—business casual to business formal depending on your field. The goal is to look polished without being uncomfortable. For STEM fields, business casual is usually fine. For humanities or professional programs, lean toward business formal. Avoid anything distracting or uncomfortable that might affect your concentration."
    },
    {
      question: "Can I bring notes to my thesis defense?",
      answer: "Yes, most committees allow notes, though you shouldn't read from them extensively. Bring a copy of your thesis (tabbed for quick reference), your presentation notes, and a one-page summary of key points you want to emphasize. Having your thesis accessible helps you reference specific sections when answering questions."
    },
    {
      question: "What happens if I fail my thesis defense?",
      answer: "Outright failure is rare at the master's level since supervisors typically don't allow students to defend until ready. More commonly, you might pass with revisions (minor or major) or be asked to re-defend after significant changes. Minor revisions are very common and don't indicate failure—they're a normal part of the process."
    },
    {
      question: "How do I handle hostile or aggressive questioning?",
      answer: "Stay calm and professional. Avoid becoming defensive. Acknowledge the question's validity ('That's an important consideration...'), then provide your reasoned response. If a question feels unfair, you can politely ask for clarification or acknowledge it's outside your study's scope. Your supervisor should intervene if questioning becomes genuinely inappropriate."
    },
    {
      question: "Should I memorize my defense presentation?",
      answer: "Memorize your opening and closing, but aim for fluent familiarity with the rest rather than word-for-word memorization. This prevents sounding robotic and allows natural adaptation to committee reactions. Practice until you can present comfortably without reading slides, but maintain flexibility to skip or expand sections as needed."
    }
  ];

  const howToSteps = [
    {
      name: "Review Your Thesis Thoroughly",
      text: "Re-read your entire thesis multiple times. Create a one-page summary of each chapter. Identify your key contributions, methodology choices, and limitations."
    },
    {
      name: "Anticipate Questions",
      text: "List potential questions for each chapter. Research common defense questions in your field. Prepare responses to questions about limitations and alternative approaches."
    },
    {
      name: "Create Your Presentation",
      text: "Develop a 15-20 minute presentation covering context, methods, findings, and contributions. Design clear slides with minimal text and effective visuals."
    },
    {
      name: "Conduct Mock Defenses",
      text: "Practice with peers, advisors, or family members. Request challenging questions. Record sessions to review your body language and response quality."
    },
    {
      name: "Prepare Logistics",
      text: "Confirm date, time, location, and format. Test all technology. Prepare backup copies of your presentation. Plan your outfit and route."
    },
    {
      name: "Execute Day-Of Strategies",
      text: "Use anxiety management techniques. Arrive early. Start strong with your practiced opening. Listen carefully to questions before responding thoughtfully."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Master's Thesis Defense Preparation | Complete Guide | DissertlyPro"
        description="Prepare for your master's thesis defense with confidence. Presentation strategies, common questions, response techniques, and anxiety management for oral examinations."
        keywords={["master's defense", "thesis defense", "oral examination", "viva", "defense presentation", "thesis questions", "defense preparation"]}
        canonical="https://dissertlypro.com/masters-defense"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Prepare for Your Master's Thesis Defense"
        description="A comprehensive guide to preparing for and excelling in your master's thesis oral examination, from presentation creation to response strategies."
        steps={howToSteps}
        totalTime="PT6H"
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2134}
        itemName="Master's Thesis Defense Preparation Guide"
        itemType="Service"
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
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mic className="w-4 h-4" />
              Technical Deep-Dive: Defense Mastery
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Master's Defense
              <span className="block text-copper mt-2">Preparation Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform defense anxiety into confident presentation. Master the art of presenting 
              your research and responding to committee questions with poise.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>6+ Hours of Content</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-copper" />
                <span>50+ Practice Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-copper" />
                <span>Master's Focused</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                <Link to="/consultation">
                  Get Defense Coaching
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Defense Preparation Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your thesis defense is the culmination of months—often years—of hard work. It's your 
                opportunity to showcase not just what you've learned, but how you think as a scholar. 
                Yet many master's students approach their defense with more anxiety than preparation, 
                hoping their deep knowledge of the material will carry them through.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Effective defense preparation is a skill distinct from thesis writing. It requires 
                translating dense written work into clear verbal communication, anticipating questions 
                from multiple disciplinary perspectives, and managing the psychological pressure of 
                academic evaluation. This guide provides systematic strategies for each dimension.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether your defense is a formal viva voce or a presentation-based examination, the 
                principles remain consistent: know your work deeply, anticipate challenges, practice 
                extensively, and develop techniques for managing anxiety. With proper preparation, 
                your defense becomes less an ordeal to survive and more an opportunity to shine.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Defense Modules */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Complete Defense Curriculum
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master these six modules to approach your defense with confidence and competence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {defenseModules.map((module, index) => (
                <motion.div
                  key={module.module}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border hover:border-copper/50 transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                          <module.icon className="w-6 h-6 text-copper" />
                        </div>
                        <span className="text-xs font-medium text-purple-600 bg-purple-500/10 px-2 py-1 rounded">
                          {module.estimatedTime}
                        </span>
                      </div>
                      <CardTitle className="text-lg mt-4">{module.module}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span>{topic}</span>
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

      {/* Presentation Structure */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Defense Presentation Structure
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven 15-20 minute presentation framework for master's thesis defenses.
              </p>
            </motion.div>

            <div className="space-y-4">
              {presentationStructure.map((section, index) => (
                <motion.div
                  key={section.section}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="border-border">
                    <CardContent className="p-5">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex items-center gap-3 md:w-48 shrink-0">
                          <div className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center text-copper font-bold text-sm">
                            {index + 1}
                          </div>
                          <span className="font-semibold text-foreground">{section.section}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-muted-foreground mb-2">{section.content}</p>
                          <div className="flex flex-wrap gap-2">
                            {section.tips.map((tip, i) => (
                              <span key={i} className="text-xs bg-green-500/10 text-green-700 px-2 py-1 rounded">
                                💡 {tip}
                              </span>
                            ))}
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

      {/* Common Questions */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                50+ Common Defense Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Prepare responses for these frequently asked questions organized by category.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonQuestions.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base text-copper">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.questions.map((question, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <MessageSquare className="w-3 h-3 mt-1 text-copper shrink-0" />
                            <span>{question}</span>
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

      {/* Response Strategies */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Response Strategies for Any Situation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master these techniques to handle any question with confidence.
              </p>
            </motion.div>

            <div className="space-y-6">
              {responseStrategies.map((item, index) => (
                <motion.div
                  key={item.scenario}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-6 h-6 text-copper" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{item.scenario}</h3>
                          <p className="text-muted-foreground mb-3">{item.strategy}</p>
                          <div className="bg-muted/50 p-3 rounded-lg border-l-4 border-copper">
                            <p className="text-sm italic text-muted-foreground">
                              <span className="font-medium text-foreground">Example: </span>
                              "{item.example}"
                            </p>
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

      {/* Anxiety Management */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Anxiety Management Toolkit
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Manage Defense Nerves
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Evidence-based techniques to transform anxiety into focused energy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {anxietyTechniques.map((item, index) => (
                <motion.div
                  key={item.technique}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border hover:border-green-500/50 transition-all">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.technique}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
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
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Defense FAQs
              </h2>
              <p className="text-lg text-muted-foreground">
                Answers to the most common defense preparation questions.
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-copper/10 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Ace Your Defense?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our defense coaching includes mock examinations, presentation feedback, 
                and personalized strategies for your specific thesis and committee.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
                  <Link to="/consultation">
                    Book Defense Coaching
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/viva-preparation">
                    PhD Viva Guide
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Related Resources</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/masters-thesis-guide" className="group">
                <Card className="border-border hover:border-copper/50 transition-all h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-copper" />
                    <div>
                      <h4 className="font-medium group-hover:text-copper transition-colors">Master's Thesis Guide</h4>
                      <p className="text-xs text-muted-foreground">Complete A-Z roadmap</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/qualitative-analysis" className="group">
                <Card className="border-border hover:border-copper/50 transition-all h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Brain className="w-8 h-8 text-copper" />
                    <div>
                      <h4 className="font-medium group-hover:text-copper transition-colors">Qualitative Analysis</h4>
                      <p className="text-xs text-muted-foreground">Data analysis methods</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/viva-preparation" className="group">
                <Card className="border-border hover:border-copper/50 transition-all h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Mic className="w-8 h-8 text-copper" />
                    <div>
                      <h4 className="font-medium group-hover:text-copper transition-colors">PhD Viva Guide</h4>
                      <p className="text-xs text-muted-foreground">Doctoral oral exam prep</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MastersDefense;
