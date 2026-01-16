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
  Zap,
  Calendar,
  AlertTriangle,
  BookOpen,
  Brain,
  Coffee,
  Timer,
  TrendingUp,
  Shield,
  Heart,
  RefreshCw,
  CheckSquare,
  Flame,
  MessageSquare
} from "lucide-react";

const AcceleratedMasters = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Accelerated Master's Programs", url: "/accelerated-masters" }
  ];

  const programTypes = [
    {
      type: "12-Month Intensive",
      duration: "12 months",
      structure: "Year-round study with no summer break. Typically 4 terms of intensive coursework plus thesis.",
      workload: "60-70 hours/week during peak periods",
      bestFor: "Career changers, sponsored students, those with strong academic backgrounds",
      challenges: ["No recovery time between terms", "Thesis compressed into 3-4 months", "Limited networking opportunities"],
      icon: Flame
    },
    {
      type: "15-Month Fast-Track",
      duration: "15 months",
      structure: "Three semesters including summer. Often includes integrated internship or practicum.",
      workload: "50-60 hours/week average",
      bestFor: "Working professionals on leave, international students, motivated self-starters",
      challenges: ["Overlap between coursework and thesis", "Fewer elective choices", "Intense peer competition"],
      icon: Zap
    },
    {
      type: "18-Month Accelerated",
      duration: "18 months",
      structure: "Condensed version of 2-year programs. Full curriculum in less time with summer sessions.",
      workload: "45-55 hours/week average",
      bestFor: "Students wanting acceleration without extreme intensity, those needing some work-life balance",
      challenges: ["Still demanding pace", "May miss some networking events", "Limited flexibility for setbacks"],
      icon: Timer
    }
  ];

  const weeklyScheduleTemplate = [
    { day: "Monday", activities: ["9-12: Lectures/Seminars", "12-1: Lunch/Networking", "1-5: Reading & Research", "7-10: Assignment Work"] },
    { day: "Tuesday", activities: ["9-12: Lectures/Seminars", "1-3: Study Group", "3-6: Library Research", "7-9: Thesis Planning"] },
    { day: "Wednesday", activities: ["9-12: Lectures/Seminars", "1-3: Supervisor Meeting (bi-weekly)", "3-7: Deep Work Block", "8-10: Reading"] },
    { day: "Thursday", activities: ["9-12: Lectures/Seminars", "1-5: Assignment Drafting", "6-9: Peer Review/Feedback"] },
    { day: "Friday", activities: ["9-12: Final Lectures", "1-4: Administrative Tasks", "4-6: Weekly Review", "Evening: Rest"] },
    { day: "Weekend", activities: ["Saturday AM: Catch-up Work", "Saturday PM: Complete Rest", "Sunday: Thesis Work (4-6 hrs)", "Sunday PM: Week Planning"] }
  ];

  const survivalStrategies = [
    {
      strategy: "Front-Load Your Thesis",
      description: "Start thesis work from Week 1, not after coursework ends. Identify your topic, begin literature review, and draft your proposal while taking classes.",
      implementation: ["Choose thesis topic by Week 3", "Build literature review bibliography alongside coursework readings", "Draft proposal during first term", "Begin data collection permissions early"],
      impact: "Saves 6-8 weeks when thesis phase officially begins"
    },
    {
      strategy: "Strategic Course Selection",
      description: "Choose courses that directly feed into your thesis. Every assignment becomes potential thesis content.",
      implementation: ["Select methodology course in first term", "Choose electives aligned with thesis topic", "Negotiate assignment topics with professors", "Build thesis chapters through coursework papers"],
      impact: "Transforms coursework from obstacle to thesis building blocks"
    },
    {
      strategy: "Batch Similar Tasks",
      description: "Group reading, writing, and administrative tasks. Context-switching kills productivity in compressed programs.",
      implementation: ["Designate specific days for deep writing", "Batch all emails/admin to two time slots daily", "Schedule back-to-back similar assignments", "Create templates for recurring tasks"],
      impact: "Increases effective work output by 30-40%"
    },
    {
      strategy: "Build Your Support System Early",
      description: "Form study groups, identify mentors, and establish accountability partnerships in Week 1.",
      implementation: ["Form thesis accountability pairs", "Create course-specific study groups", "Identify 2-3 faculty mentors beyond supervisor", "Connect with recent program alumni"],
      impact: "Reduces isolation and provides safety net for challenges"
    },
    {
      strategy: "Protect Recovery Time",
      description: "Sustainable high performance requires strategic rest. Burnout ends more accelerated degrees than academic failure.",
      implementation: ["Schedule one full day off weekly (non-negotiable)", "Build in daily decompression rituals", "Maintain one non-academic activity", "Set hard boundaries on evening work"],
      impact: "Maintains cognitive performance and motivation throughout program"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Underestimating the Pace",
      description: "Assuming accelerated means 'normal program, just faster.' It's a fundamentally different experience requiring different strategies.",
      consequence: "Falling behind by Week 3-4 with no time to catch up. The gap widens exponentially.",
      solution: "Treat Day 1 as Week 3 of a normal program. Hit the ground running with systems already in place."
    },
    {
      mistake: "Perfectionism on Early Assignments",
      description: "Spending excessive time perfecting first assignments at the expense of staying current with new material.",
      consequence: "Cascade effect where you're always behind, increasingly stressed, and producing worse work overall.",
      solution: "Aim for 'good enough' on individual assignments. Save perfectionism for your thesis."
    },
    {
      mistake: "Ignoring Physical Health",
      description: "Skipping exercise, eating poorly, and sacrificing sleep to gain study hours.",
      consequence: "Cognitive decline, illness at critical times, burnout before thesis completion.",
      solution: "Exercise, sleep, and nutrition are productivity investments, not luxuries. Protect them."
    },
    {
      mistake: "Delaying Thesis Until 'Coursework is Done'",
      description: "Treating thesis as a separate phase that begins after classes end.",
      consequence: "Insufficient time for quality thesis. Data collection, analysis, and writing cannot be rushed.",
      solution: "Thesis work runs parallel to coursework from Week 1. Integrate them intentionally."
    },
    {
      mistake: "Social Isolation",
      description: "Cutting off all social connection to maximize study time.",
      consequence: "Loneliness, reduced motivation, loss of perspective. No peer support when challenges arise.",
      solution: "Strategic social time with cohort members. Quality over quantity—meaningful connections fuel motivation."
    }
  ];

  const monthlyMilestones = [
    { month: "Month 1-2", coursework: "Core courses begin, heavy reading load", thesis: "Topic exploration, initial supervisor conversations", wellbeing: "Establish routines, find your rhythm" },
    { month: "Month 3-4", coursework: "First major assignments due", thesis: "Proposal drafted, literature review started", wellbeing: "First adjustment crisis—this is normal" },
    { month: "Month 5-6", coursework: "Mid-program peak workload", thesis: "Proposal approved, methodology finalized", wellbeing: "Reassess strategies, adjust what isn't working" },
    { month: "Month 7-8", coursework: "Final coursework push", thesis: "Data collection begins", wellbeing: "Protect focus, minimize distractions" },
    { month: "Month 9-10", coursework: "Coursework complete or minimal", thesis: "Analysis and initial findings", wellbeing: "Marathon mindset—pace yourself" },
    { month: "Month 11-12", coursework: "N/A", thesis: "Writing, revision, submission", wellbeing: "Final push—prioritize sleep and completion" }
  ];

  const faqs = [
    {
      question: "Can I work while doing an accelerated Master's program?",
      answer: "Extremely difficult and generally not recommended for 12-month programs. Some students manage 5-10 hours/week of flexible work in 15-18 month programs, but this requires exceptional time management and employer flexibility. If you must work, prioritize roles related to your studies or with flexible scheduling. Many students find their performance and wellbeing suffer when trying to combine work with accelerated study."
    },
    {
      question: "How do employers view accelerated vs traditional Master's degrees?",
      answer: "Employers generally don't distinguish between accelerated and traditional programs—your degree is identical. Some employers actually value the demonstrated ability to perform under pressure and manage intense workloads. Focus on articulating what you learned and accomplished, not program duration."
    },
    {
      question: "What if I fall behind in an accelerated program?",
      answer: "Early intervention is critical. Contact your academic advisor immediately—don't wait until you're drowning. Options may include: incomplete grades with extensions, reduced course load (extending program), leave of absence, or targeted support services. The key is acting quickly; small gaps become insurmountable in compressed timelines."
    },
    {
      question: "Is thesis quality compromised in accelerated programs?",
      answer: "It can be, but doesn't have to be. The key is strategic planning from Day 1. Students who treat thesis as a parallel track (not sequential phase) often produce excellent work. Some accelerated students produce stronger theses because they maintain momentum and can't procrastinate. Quality depends on your approach, not program length."
    },
    {
      question: "How do I manage stress in an accelerated program?",
      answer: "Build stress management into your schedule, not around it. Key strategies: regular exercise (even 20 minutes helps), consistent sleep schedule (7-8 hours non-negotiable), weekly complete rest day, connection with cohort peers, professional counseling if needed. Most programs offer mental health support—use it proactively, not just in crisis."
    },
    {
      question: "Should I do an accelerated program if I'm changing fields?",
      answer: "Accelerated programs are particularly challenging for career changers because you're learning new foundational concepts while keeping pace with experienced peers. Consider whether a traditional timeline would better serve your learning goals. If you proceed, invest heavily in prerequisite preparation before the program starts."
    },
    {
      question: "What preparation should I do before an accelerated program starts?",
      answer: "Maximize pre-program preparation: complete any prerequisites with strong foundations, read key texts in your field, develop your thesis topic ideas, meet potential supervisors, set up your study systems (reference manager, note-taking, calendar). The more you front-load, the better your in-program experience."
    },
    {
      question: "Are accelerated online Master's programs as intense as on-campus ones?",
      answer: "Yes, often more so. Online programs require greater self-discipline and time management without the structure of campus life. The content and expectations are equivalent; only the delivery differs. Online accelerated programs also lack in-person peer support, making intentional community-building even more important."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Accelerated Master's Programs: Survival Guide | DissertlyPro"
        description="Thrive in 12-18 month Master's programs with proven strategies. Time management, thesis planning, and wellbeing tips for intensive graduate study."
        keywords={["accelerated Master's", "12-month Master's", "intensive Master's program", "fast-track Master's", "Master's time management", "graduate school survival", "thesis timeline"]}
        canonical="https://dissertlypro.com/accelerated-masters"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Succeed in an Accelerated Master's Program"
        description="Step-by-step guide to thriving in intensive 12-18 month Master's programs with strategies for time management, thesis planning, and maintaining wellbeing."
        totalTime="PT30M"
        steps={[
          { name: "Prepare Before Day 1", text: "Complete prerequisites, research thesis topics, meet potential supervisors, and set up study systems before the program begins." },
          { name: "Establish Intensive Routines", text: "Create structured weekly schedules that allocate specific blocks for coursework, thesis work, and protected rest time." },
          { name: "Start Thesis Work Immediately", text: "Begin thesis planning from Week 1. Identify your topic, start literature review, and draft your proposal while taking courses." },
          { name: "Align Coursework with Thesis", text: "Choose courses that feed into your thesis and negotiate assignment topics to build thesis chapters through coursework." },
          { name: "Build Support Systems", text: "Form study groups, establish accountability partnerships, and connect with mentors and program alumni early." },
          { name: "Protect Your Wellbeing", text: "Schedule non-negotiable rest days, maintain exercise and sleep routines, and use mental health resources proactively." }
        ]}
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1834}
        itemName="Accelerated Master's Program Guide"
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
              <Zap className="w-4 h-4" />
              Intensive Program Survival
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Accelerated Master's Programs
              <span className="block text-copper mt-2">The Survival Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              12-18 months of intensive study requires different strategies than traditional programs. 
              Learn to thrive—not just survive—in compressed timelines.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-copper" />
                <span>30 min strategic read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-copper" />
                <span>Month-by-month milestones</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-copper" />
                <span>Proven survival strategies</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">The Accelerated Reality</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Accelerated Master's programs promise efficiency: same degree, less time. What they don't advertise 
                is that "less time" means fundamentally different challenges. You're not running a slightly faster 
                race—you're playing a different sport entirely.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                The strategies that work for traditional two-year programs often fail in accelerated contexts. 
                There's no time to "find your rhythm" in semester two, no buffer for personal setbacks, no 
                leisurely exploration of thesis topics. Every week matters from Day 1.
              </p>

              <div className="bg-copper/5 border border-copper/20 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-copper" />
                  The Uncomfortable Truth
                </h3>
                <p className="text-muted-foreground">
                  Many students enter accelerated programs believing they'll "figure it out as they go." 
                  This works in traditional programs. In accelerated programs, this approach typically 
                  leads to crisis by Month 3. The students who thrive are those who prepare before Day 1 
                  and execute systematic strategies throughout.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of Accelerated Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not all accelerated programs are created equal. Understand what you're signing up for.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {programTypes.map((program, index) => (
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
                      <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-copper" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{program.type}</h3>
                        <span className="text-sm text-copper">{program.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{program.structure}</p>
                    
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-foreground">Workload: </span>
                      <span className="text-xs text-muted-foreground">{program.workload}</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-foreground">Best For: </span>
                      <span className="text-xs text-muted-foreground">{program.bestFor}</span>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-3">
                      <span className="text-xs font-semibold text-foreground">Key Challenges:</span>
                      <ul className="mt-1 space-y-1">
                        {program.challenges.map((challenge, i) => (
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

      {/* Survival Strategies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Five Survival Strategies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven approaches from students who've thrived in accelerated programs.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {survivalStrategies.map((strategy, index) => (
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
                      <div className="w-10 h-10 rounded-full bg-copper text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-2">{strategy.strategy}</h3>
                        <p className="text-muted-foreground mb-4">{strategy.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Implementation:</h4>
                            <ul className="space-y-1">
                              {strategy.implementation.map((step, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckSquare className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-copper/5 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-copper" />
                              Impact
                            </h4>
                            <p className="text-sm text-copper">{strategy.impact}</p>
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

      {/* Weekly Schedule Template */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sample Weekly Schedule
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A realistic template for managing accelerated program workload.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {weeklyScheduleTemplate.map((day, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-4 rounded-lg ${day.day === 'Weekend' ? 'bg-copper/5 border border-copper/20' : 'bg-muted/50'}`}
                    >
                      <h4 className="font-semibold text-foreground mb-2">{day.day}</h4>
                      <ul className="space-y-1">
                        {day.activities.map((activity, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-copper">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monthly Milestones */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              12-Month Milestone Map
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Where you should be at each stage of an accelerated program.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-foreground">Timeline</th>
                    <th className="text-left p-4 font-semibold text-copper">Coursework</th>
                    <th className="text-left p-4 font-semibold text-copper">Thesis</th>
                    <th className="text-left p-4 font-semibold text-copper">Wellbeing</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyMilestones.map((milestone, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium text-foreground">{milestone.month}</td>
                      <td className="p-4 text-sm text-muted-foreground">{milestone.coursework}</td>
                      <td className="p-4 text-sm text-muted-foreground">{milestone.thesis}</td>
                      <td className="p-4 text-sm text-muted-foreground">{milestone.wellbeing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Critical Mistakes to Avoid
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {commonMistakes.map((item, index) => (
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

      {/* FAQs */}
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
              Need Accelerated Thesis Support?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our experts specialize in helping students in compressed timelines. Get targeted support 
              that respects your schedule constraints.
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
            <Link to="/coursework-to-thesis" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <RefreshCw className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Coursework to Thesis
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Convert course papers
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/limited-supervision" className="group">
              <Card className="h-full bg-card border-border hover:border-copper/30 transition-colors">
                <CardContent className="p-5">
                  <Users className="w-6 h-6 text-copper mb-3" />
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-copper transition-colors text-sm">
                    Limited Supervision
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Thrive with absent advisors
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

export default AcceleratedMasters;
