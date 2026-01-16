import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Heart, 
  Brain, 
  AlertCircle, 
  CheckCircle,
  Clock,
  Users,
  Phone,
  ArrowRight,
  Flame,
  Moon,
  Sun,
  Coffee,
  Target,
  Shield,
  MessageCircle,
  BookOpen,
  Activity,
  TrendingDown,
  RefreshCw,
  Sparkles,
  Calendar,
  GraduationCap,
  Briefcase,
  Scale
} from "lucide-react";

const MentalHealthHub = () => {
  const [burnoutScore, setBurnoutScore] = useState<number | null>(null);
  const [burnoutAnswers, setBurnoutAnswers] = useState<Record<number, number>>({});
  
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/blog" },
    { name: "Mental Health Hub", url: "/phd-mental-health" }
  ];

  const burnoutQuestions = [
    { id: 1, question: "I feel emotionally drained by my dissertation work", category: "exhaustion" },
    { id: 2, question: "I feel used up at the end of a working day", category: "exhaustion" },
    { id: 3, question: "I feel tired when I get up and have to face another day of work", category: "exhaustion" },
    { id: 4, question: "I feel like I'm not making meaningful progress", category: "inefficacy" },
    { id: 5, question: "I've become less interested in my research than when I started", category: "cynicism" },
    { id: 6, question: "I doubt the significance of my work", category: "cynicism" },
    { id: 7, question: "I feel I am accomplishing nothing worthwhile in my academic work", category: "inefficacy" },
    { id: 8, question: "I feel disconnected from my academic community", category: "cynicism" },
  ];

  const handleBurnoutAnswer = (questionId: number, score: number) => {
    const newAnswers = { ...burnoutAnswers, [questionId]: score };
    setBurnoutAnswers(newAnswers);
    
    if (Object.keys(newAnswers).length === burnoutQuestions.length) {
      const totalScore = Object.values(newAnswers).reduce((sum, val) => sum + val, 0);
      setBurnoutScore(totalScore);
    }
  };

  const getBurnoutInterpretation = (score: number) => {
    if (score <= 10) return {
      level: "Low Risk",
      color: "text-green-600",
      bgColor: "bg-green-500",
      message: "You're managing well. Keep maintaining healthy boundaries and self-care practices.",
      actions: ["Continue current routines", "Build preventive habits", "Stay connected with support network"]
    };
    if (score <= 20) return {
      level: "Moderate Risk",
      color: "text-yellow-600",
      bgColor: "bg-yellow-500",
      message: "Some warning signs are present. Now is the time to intervene before symptoms escalate.",
      actions: ["Review work-life boundaries", "Schedule regular breaks", "Consider talking to a counselor", "Reconnect with enjoyable activities"]
    };
    if (score <= 28) return {
      level: "High Risk",
      color: "text-amber-600",
      bgColor: "bg-amber-500",
      message: "Significant burnout indicators. Your wellbeing requires immediate attention.",
      actions: ["Seek professional support", "Discuss workload with supervisor", "Take a short break if possible", "Prioritize sleep and basic self-care"]
    };
    return {
      level: "Critical",
      color: "text-red-600",
      bgColor: "bg-red-500",
      message: "Severe burnout symptoms. Please reach out to a mental health professional or your university counseling services.",
      actions: ["Contact university counseling today", "Speak to your GP/doctor", "Consider medical leave options", "Do not make major decisions in this state"]
    };
  };

  const mentalHealthChallenges = [
    {
      icon: Flame,
      title: "Dissertation Burnout",
      prevalence: "70% of PhD students",
      description: "Chronic exhaustion from prolonged academic stress. Unlike regular tiredness, burnout involves emotional depletion, cynicism, and reduced efficacy.",
      signs: ["Constant fatigue despite rest", "Dreading work you once enjoyed", "Difficulty concentrating", "Physical symptoms (headaches, insomnia)", "Emotional numbness"],
      strategies: [
        "Implement strict work-hour boundaries",
        "Schedule non-negotiable rest days",
        "Break work into 25-minute focused sessions",
        "Reconnect with why you started this journey"
      ]
    },
    {
      icon: TrendingDown,
      title: "Imposter Syndrome",
      prevalence: "82% of academics",
      description: "Persistent belief that you're a fraud who doesn't deserve your position, despite evidence of competence. Especially common at advanced academic stages.",
      signs: ["Attributing success to luck", "Fear of being 'found out'", "Overworking to 'prove' yourself", "Difficulty accepting praise", "Comparing yourself unfavorably to peers"],
      strategies: [
        "Document your achievements objectively",
        "Share feelings with trusted peers (you'll find you're not alone)",
        "Reframe internal critic as external voice",
        "Remember: being accepted means you belong"
      ]
    },
    {
      icon: Moon,
      title: "Anxiety & Depression",
      prevalence: "6x higher than general population",
      description: "Graduate students experience anxiety and depression at rates far exceeding the general population. This isn't weakness—it's a predictable response to an intensely stressful environment.",
      signs: ["Persistent worry or dread", "Changes in sleep or appetite", "Loss of interest in activities", "Difficulty with decisions", "Physical symptoms with no clear cause"],
      strategies: [
        "Seek professional support (most universities offer free counseling)",
        "Maintain physical activity—even brief walks help",
        "Limit isolation—schedule social connections",
        "Consider whether medication might help (no shame in this)"
      ]
    },
    {
      icon: Clock,
      title: "ABD Paralysis",
      prevalence: "~50% of ABD students",
      description: "'All But Dissertation'—when all coursework is complete but the dissertation stalls. Often involves avoidance, guilt spirals, and increasing isolation.",
      signs: ["Chronic procrastination", "Avoiding supervisor", "Guilt preventing relaxation", "Elaborate plans without execution", "Considering quitting"],
      strategies: [
        "Start with just 10 minutes of writing—momentum builds",
        "Join a writing group for accountability",
        "Break the dissertation into tiny achievable tasks",
        "Address underlying perfectionism or fear"
      ]
    },
    {
      icon: RefreshCw,
      title: "Post-Submission Void",
      prevalence: "Underreported",
      description: "The unexpected emptiness after submission. Years of identity wrapped in 'PhD student'—then suddenly, it's over. This transition grief is real and valid.",
      signs: ["Feeling lost or purposeless", "Difficulty knowing what to do with time", "Questioning career choices", "Unexpected sadness despite achievement", "Identity confusion"],
      strategies: [
        "Allow yourself to grieve the transition",
        "Plan meaningful activities before submission",
        "Reconnect with hobbies abandoned during PhD",
        "Give yourself permission to rest before 'what's next'"
      ]
    }
  ];

  const crisisResources = [
    {
      region: "International",
      name: "International Association for Suicide Prevention",
      contact: "https://www.iasp.info/resources/Crisis_Centres/",
      description: "Directory of crisis centers worldwide"
    },
    {
      region: "USA",
      name: "988 Suicide & Crisis Lifeline",
      contact: "Call or text 988",
      description: "Free, confidential support 24/7"
    },
    {
      region: "UK",
      name: "Samaritans",
      contact: "116 123 (free)",
      description: "24/7 emotional support"
    },
    {
      region: "Australia",
      name: "Lifeline Australia",
      contact: "13 11 14",
      description: "24/7 crisis support"
    },
    {
      region: "Canada",
      name: "Crisis Services Canada",
      contact: "1-833-456-4566",
      description: "24/7 support line"
    }
  ];

  const dailyPractices = [
    {
      time: "Morning",
      icon: Sun,
      practices: [
        "5-minute stretching before checking email",
        "Set 3 priorities (not 10) for the day",
        "Eat breakfast before diving into work",
        "10 minutes of daylight exposure"
      ]
    },
    {
      time: "During Work",
      icon: Coffee,
      practices: [
        "Pomodoro technique: 25 min work, 5 min break",
        "Step outside between major tasks",
        "Stay hydrated (cognitive function depends on it)",
        "One social interaction—even brief"
      ]
    },
    {
      time: "Evening",
      icon: Moon,
      practices: [
        "Hard stop time for work (protect it fiercely)",
        "Activity unrelated to academia",
        "Limit screens 1 hour before bed",
        "Brief gratitude practice or journaling"
      ]
    }
  ];

  const faqs = [
    {
      question: "Is it normal to feel depressed during a PhD?",
      answer: "Unfortunately, yes—rates of depression among PhD students are 6x higher than the general population. But 'normal' doesn't mean acceptable or inevitable. These feelings are a signal that something in your environment or coping needs to change. The academic system often normalizes suffering, but you don't have to accept that framing. Seek support, adjust expectations, and remember that completing your PhD is not worth destroying your mental health."
    },
    {
      question: "Should I tell my supervisor about mental health struggles?",
      answer: "This depends on your relationship and institutional culture. You don't owe anyone details about your mental health. However, if struggles are affecting your work, a brief, professional disclosure (e.g., 'I'm dealing with some health issues that may affect my timeline') can be protective. Some supervisors are wonderfully supportive; others are not. Trust your instincts, and consider consulting your university counseling service for advice on disclosure before deciding."
    },
    {
      question: "Can I take a leave of absence for mental health?",
      answer: "Most universities have policies allowing medical leave for mental health reasons. This is often underutilized because of stigma. Taking time to recover is not failure—it's strategic. Many students who take leave return with renewed focus and finish successfully. Contact your graduate school to understand your specific options, including how leave affects funding, visa status (if applicable), and timeline."
    },
    {
      question: "How do I know if I need professional help?",
      answer: "Consider professional help if: symptoms persist for more than two weeks; they're affecting your ability to function; you're using unhealthy coping (alcohol, isolation, self-harm); or you're having thoughts of suicide. You don't need to be 'bad enough'—early intervention is more effective. Most universities offer free counseling. Start there, or see your GP/doctor for a referral."
    },
    {
      question: "What if I can't afford therapy?",
      answer: "Many options exist: University counseling services are typically free. Community mental health centers offer sliding-scale fees. Online platforms like BetterHelp or Talkspace offer reduced rates for students. Support groups (many free) provide peer connection. Some therapists reserve low-cost spots for students. Apps like Headspace or Calm offer free student subscriptions. Don't let cost be a barrier to getting help."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="PhD Mental Health Hub: Burnout, Anxiety & Depression Support | DissertlyPro"
        description="Comprehensive mental health resources for doctoral students. Self-assessment tools, coping strategies, and crisis resources for dissertation burnout, anxiety, imposter syndrome, and more."
        keywords={["PhD depression", "dissertation anxiety", "PhD burnout", "graduate student mental health", "imposter syndrome PhD", "ABD depression", "doctoral student stress", "academic mental health"]}
        canonical="https://dissertlypro.com/phd-mental-health"
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
              <Heart className="w-4 h-4" />
              Mental Health Resources for Graduate Students
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your PhD Doesn't Have to
              <span className="block text-copper mt-2">Break You</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The unspoken mental health crisis in academia. Self-assessment tools, evidence-based strategies, 
              and resources that understand what doctoral students actually experience.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Activity className="w-4 h-4 text-copper" />
                <span>Self-assessment tools</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-copper" />
                <span>Evidence-based strategies</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-copper" />
                <span>Crisis resources</span>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { stat: "6x", label: "Higher depression rates in PhDs" },
                { stat: "70%", label: "Experience significant stress" },
                { stat: "50%", label: "ABD students consider quitting" },
                { stat: "82%", label: "Report imposter syndrome" }
              ].map((item, idx) => (
                <div key={idx} className="bg-background/80 backdrop-blur-sm border border-copper/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-copper">{item.stat}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Burnout Self-Assessment Tool */}
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
                <Flame className="inline-block w-8 h-8 text-amber-500 mr-3" />
                Dissertation Burnout Assessment
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A quick, evidence-informed assessment based on the Maslach Burnout Inventory dimensions. 
                Answer honestly—this is for your awareness only.
              </p>
            </motion.div>
            
            <Card className="border-2 border-copper/20">
              <CardContent className="p-8">
                {burnoutScore === null ? (
                  <div className="space-y-6">
                    {burnoutQuestions.map((q) => (
                      <div key={q.id} className="border-b border-muted pb-6 last:border-b-0 last:pb-0">
                        <p className="font-medium text-foreground mb-4">{q.id}. {q.question}</p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { label: "Never", value: 0 },
                            { label: "Rarely", value: 1 },
                            { label: "Sometimes", value: 2 },
                            { label: "Often", value: 3 },
                            { label: "Always", value: 4 }
                          ].map((option) => (
                            <button
                              key={option.value}
                              onClick={() => handleBurnoutAnswer(q.id, option.value)}
                              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                                burnoutAnswers[q.id] === option.value
                                  ? 'bg-copper text-white'
                                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <div className="text-center pt-4">
                      <p className="text-sm text-muted-foreground">
                        Answer all {burnoutQuestions.length} questions to see your results
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Progress: {Object.keys(burnoutAnswers).length} / {burnoutQuestions.length}
                      </p>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    {(() => {
                      const interpretation = getBurnoutInterpretation(burnoutScore);
                      return (
                        <>
                          <div className={`text-4xl font-bold ${interpretation.color} mb-2`}>
                            {interpretation.level}
                          </div>
                          <div className="mb-6">
                            <Progress value={(burnoutScore / 32) * 100} className="h-3" />
                            <p className="text-sm text-muted-foreground mt-2">
                              Score: {burnoutScore} / 32
                            </p>
                          </div>
                          <p className="text-muted-foreground mb-6">{interpretation.message}</p>
                          <div className="bg-muted/30 p-4 rounded-lg text-left mb-6">
                            <p className="font-medium text-foreground mb-3">Recommended Actions:</p>
                            <ul className="space-y-2">
                              {interpretation.actions.map((action, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 text-copper mt-0.5 shrink-0" />
                                  {action}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button 
                            variant="outline" 
                            onClick={() => {
                              setBurnoutScore(null);
                              setBurnoutAnswers({});
                            }}
                          >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Retake Assessment
                          </Button>
                        </>
                      );
                    })()}
                  </motion.div>
                )}
              </CardContent>
            </Card>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              Note: This assessment is for educational purposes only and does not constitute a clinical diagnosis. 
              If you're struggling, please consult a mental health professional.
            </p>
          </div>
        </div>
      </section>

      {/* Mental Health Challenges */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <Brain className="inline-block w-8 h-8 text-copper mr-3" />
                Understanding What You're Experiencing
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These challenges are not character flaws. They're predictable responses to an intensely demanding environment. 
                Recognition is the first step toward addressing them.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {mentalHealthChallenges.map((challenge, index) => (
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
                              <challenge.icon className="w-6 h-6 text-copper" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-foreground">{challenge.title}</h3>
                              <p className="text-sm text-copper font-medium">{challenge.prevalence}</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm">{challenge.description}</p>
                        </div>
                        
                        <div className="md:w-1/3">
                          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-amber-500" />
                            Warning Signs
                          </h4>
                          <ul className="space-y-2">
                            {challenge.signs.map((sign, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                                {sign}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="md:w-1/3">
                          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-copper" />
                            Coping Strategies
                          </h4>
                          <ul className="space-y-2">
                            {challenge.strategies.map((strategy, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-copper mt-0.5 shrink-0" />
                                {strategy}
                              </li>
                            ))}
                          </ul>
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

      {/* Daily Wellbeing Practices */}
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
                <Target className="inline-block w-8 h-8 text-copper mr-3" />
                Daily Wellbeing Framework
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Small, consistent practices compound into significant protection against burnout. 
                You don't need hours—just intentional moments.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {dailyPractices.map((period, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-copper/20">
                    <CardHeader>
                      <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center mb-3">
                        <period.icon className="w-6 h-6 text-copper" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{period.time}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {period.practices.map((practice, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-copper mt-0.5 shrink-0" />
                            {practice}
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

      {/* Crisis Resources */}
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
                <Phone className="inline-block w-8 h-8 text-red-500 mr-3" />
                Crisis Resources
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you're in crisis or having thoughts of self-harm, please reach out immediately. 
                These services are free, confidential, and available 24/7.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {crisisResources.map((resource, index) => (
                <Card key={index} className="border-red-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs bg-red-500/10 text-red-600 px-2 py-1 rounded-full font-medium">
                        {resource.region}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{resource.name}</h3>
                    <p className="text-copper font-medium mb-1">{resource.contact}</p>
                    <p className="text-xs text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-background border border-red-500/20 rounded-lg text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">University Resources:</strong> Most universities offer free, confidential counseling services. 
                Contact your student health center or graduate school for information specific to your institution.
              </p>
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
                <MessageCircle className="inline-block w-8 h-8 text-copper mr-3" />
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
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl font-bold text-foreground mb-3">Related Resources</h2>
              <p className="text-muted-foreground">More guides to support your academic journey</p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Tier 1 Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Link to="/supervisor-guide" className="group block h-full">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
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
                <Link to="/committee-conflicts" className="group block h-full">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
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
                transition={{ delay: 0.2 }}
              >
                <Link to="/deadlines-deferrals" className="group block h-full">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
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
                transition={{ delay: 0.25 }}
              >
                <Link to="/viva-preparation" className="group block h-full">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
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
                <Link to="/part-time-phd" className="group block h-full">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-copper/50">
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
                You Don't Have to Do This Alone
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Beyond mental health support, we can help reduce the academic stressors contributing to your struggles. 
                Expert guidance on your dissertation can lighten the load.
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

export default MentalHealthHub;
