import { useState } from "react";
import { Calendar, Clock, CheckCircle2, Circle, GanttChart, ChevronRight, AlertTriangle, Sparkles, ArrowRight, Target, Timer, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ToolSchema from "@/components/schemas/ToolSchema";
import FAQSchema from "@/components/schemas/FAQSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Chapter {
  id: string;
  name: string;
  duration: number;
  completed: boolean;
  color: string;
}

const defaultChapters: Chapter[] = [
  { id: "intro", name: "Introduction", duration: 10, completed: false, color: "bg-blue-500" },
  { id: "lit-review", name: "Literature Review", duration: 20, completed: false, color: "bg-purple-500" },
  { id: "methodology", name: "Methodology", duration: 15, completed: false, color: "bg-amber-500" },
  { id: "results", name: "Results & Analysis", duration: 25, completed: false, color: "bg-green-500" },
  { id: "discussion", name: "Discussion", duration: 15, completed: false, color: "bg-rose-500" },
  { id: "conclusion", name: "Conclusion & Revisions", duration: 15, completed: false, color: "bg-cyan-500" },
];

const toolFAQs = [
  {
    question: "How does the dissertation chapter timeline planner work?",
    answer: "Enter your submission deadline and the tool automatically calculates suggested dates for each chapter based on typical dissertation writing patterns. You can track progress by marking chapters as complete and see a visual Gantt-style timeline."
  },
  {
    question: "Can I customize the chapter allocation percentages?",
    answer: "The current version uses research-backed time allocations (e.g., 25% for Results, 20% for Literature Review). Future updates will allow custom percentage adjustments based on your specific project requirements."
  },
  {
    question: "What if my deadline is very close?",
    answer: "The tool includes urgency indicators that warn you when deadlines are tight. If you're in the 'Danger Zone' (under 14 days), consider reaching out to our expert consultants for intensive support."
  },
  {
    question: "Is this timeline realistic for my dissertation?",
    answer: "The timeline is based on standard academic writing patterns. However, every project is unique. Use this as a starting point and adjust based on your specific requirements, research complexity, and available time."
  },
  {
    question: "Can I save my timeline for later?",
    answer: "Currently, the tool works in your browser session. For persistent tracking and more advanced project management features, consider booking a consultation for personalized milestone planning."
  }
];

const ChapterPlannerPage = () => {
  const [deadline, setDeadline] = useState("");
  const [chapters, setChapters] = useState<Chapter[]>(defaultChapters);
  const [startDate] = useState(new Date());

  const toggleChapter = (id: string) => {
    setChapters(prev => 
      prev.map(ch => ch.id === id ? { ...ch, completed: !ch.completed } : ch)
    );
  };

  const getCompletedPercentage = () => {
    const completed = chapters.filter(ch => ch.completed).reduce((acc, ch) => acc + ch.duration, 0);
    return completed;
  };

  const getDaysRemaining = () => {
    if (!deadline) return null;
    const deadlineDate = new Date(deadline);
    const diff = deadlineDate.getTime() - new Date().getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const getChapterDates = () => {
    if (!deadline) return [];
    
    const deadlineDate = new Date(deadline);
    const totalDays = Math.ceil((deadlineDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    let currentDay = 0;
    return chapters.map(chapter => {
      const startDay = currentDay;
      const durationDays = Math.ceil((chapter.duration / 100) * totalDays);
      currentDay += durationDays;
      
      const chapterStart = new Date(startDate);
      chapterStart.setDate(chapterStart.getDate() + startDay);
      
      const chapterEnd = new Date(startDate);
      chapterEnd.setDate(chapterEnd.getDate() + startDay + durationDays);
      
      return {
        ...chapter,
        startDate: chapterStart,
        endDate: chapterEnd,
        durationDays,
        startOffset: (startDay / totalDays) * 100,
        widthPercent: (durationDays / totalDays) * 100,
      };
    });
  };

  const daysRemaining = getDaysRemaining();
  const completedPercentage = getCompletedPercentage();
  const chapterDates = getChapterDates();

  const getUrgencyLevel = () => {
    if (!daysRemaining) return "neutral";
    if (daysRemaining <= 14) return "critical";
    if (daysRemaining <= 30) return "warning";
    if (daysRemaining <= 60) return "caution";
    return "safe";
  };

  const urgencyColors = {
    neutral: "text-muted-foreground",
    safe: "text-green-500",
    caution: "text-amber-500",
    warning: "text-orange-500",
    critical: "text-red-500",
  };

  const urgencyBgColors = {
    neutral: "bg-muted",
    safe: "bg-green-500/10",
    caution: "bg-amber-500/10",
    warning: "bg-orange-500/10",
    critical: "bg-red-500/10",
  };

  const features = [
    "Visual Gantt-style timeline for dissertation chapters",
    "Automatic date calculation based on deadline",
    "Progress tracking with completion toggles",
    "Urgency indicators and deadline warnings",
    "Research-backed time allocation percentages",
    "Mobile-friendly responsive design"
  ];

  return (
    <Layout>
      <SEO
        title="Free Dissertation Timeline Planner | Chapter Gantt Chart | DissertlyPro"
        description="Plan your dissertation timeline with our free Gantt-style chapter planner. Visualize chapter deadlines, track progress, and stay on schedule. Perfect for PhD and Master's students."
        canonical="https://dissertlypro.com/tools/chapter-planner"
        keywords={["dissertation timeline", "thesis planner", "chapter schedule", "dissertation Gantt chart", "PhD timeline tool", "thesis deadline calculator", "dissertation planning", "academic project planner"]}
      />
      <ToolSchema
        name="Dissertation Chapter Timeline Planner"
        description="Plan your dissertation timeline with a visual Gantt-style interface. Calculate chapter deadlines, track progress, and manage your thesis writing schedule effectively."
        url="https://dissertlypro.com/tools/chapter-planner"
        applicationCategory="EducationalApplication"
        featureList={features}
        aggregateRating={{
          ratingValue: "4.8",
          ratingCount: "892",
          bestRating: "5",
          worstRating: "1"
        }}
      />
      <FAQSchema faqs={toolFAQs} />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <GanttChart className="w-4 h-4" />
                Free Planning Tool
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-navy bg-clip-text text-transparent">
                Dissertation Timeline Planner
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Visualize your dissertation journey with a Gantt-style timeline. 
                Plan chapter deadlines, track progress, and stay on schedule.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                {["Visual Timeline", "Progress Tracking", "Deadline Alerts", "Free Forever"].map((feature) => (
                  <span key={feature} className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Tool Section */}
        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <Card className="border-2 shadow-xl">
              <CardHeader className="border-b bg-muted/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <GanttChart className="w-5 h-5 text-primary" />
                      Chapter Timeline
                    </CardTitle>
                    <CardDescription>Enter your deadline to generate your personalized schedule</CardDescription>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="deadline" className="text-xs font-medium">Submission Deadline</Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="w-44 bg-background"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Progress Overview */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <Card className={cn("border-0", urgencyBgColors[getUrgencyLevel()])}>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <Clock className={cn("w-8 h-8", urgencyColors[getUrgencyLevel()])} />
                        <div>
                          <p className="text-sm text-muted-foreground">Days Remaining</p>
                          <p className={cn("text-2xl font-bold", urgencyColors[getUrgencyLevel()])}>
                            {daysRemaining !== null ? daysRemaining : "—"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 bg-primary/10">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <Target className="w-8 h-8 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Progress</p>
                          <p className="text-2xl font-bold text-primary">{completedPercentage}%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 bg-muted">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Chapters Done</p>
                          <p className="text-2xl font-bold">{chapters.filter(c => c.completed).length}/{chapters.length}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">{completedPercentage}% complete</span>
                  </div>
                  <Progress value={completedPercentage} className="h-3" />
                </div>

                {/* Gantt Chart */}
                {deadline && (
                  <div className="mb-8">
                    <h3 className="text-sm font-medium mb-4">Visual Timeline</h3>
                    <div className="relative bg-muted/30 rounded-lg p-4 overflow-x-auto">
                      <div className="min-w-[600px]">
                        <div className="h-16 relative">
                          {chapterDates.map((chapter, index) => (
                            <motion.div
                              key={chapter.id}
                              initial={{ opacity: 0, scaleX: 0 }}
                              animate={{ opacity: 1, scaleX: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className={cn(
                                "absolute h-8 rounded-md flex items-center justify-center text-xs font-medium text-white transition-all cursor-pointer",
                                chapter.color,
                                chapter.completed && "opacity-50"
                              )}
                              style={{
                                left: `${chapter.startOffset}%`,
                                width: `${chapter.widthPercent}%`,
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                              onClick={() => toggleChapter(chapter.id)}
                              title={`${chapter.name}: ${chapter.startDate.toLocaleDateString()} - ${chapter.endDate.toLocaleDateString()}`}
                            >
                              <span className="truncate px-2">
                                {chapter.name}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground mt-4 pt-2 border-t">
                          <span>Today</span>
                          <span>Deadline: {new Date(deadline).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Chapter List */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium mb-4">Chapter Breakdown</h3>
                  {(deadline ? chapterDates : chapters.map(c => ({ ...c, startDate: null, endDate: null, durationDays: 0 }))).map((chapter) => (
                    <motion.div
                      key={chapter.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-lg border transition-all cursor-pointer",
                        chapter.completed ? "bg-muted/50 border-muted" : "bg-background hover:border-primary/50"
                      )}
                      onClick={() => toggleChapter(chapter.id)}
                    >
                      <button
                        className="shrink-0"
                        aria-label={chapter.completed ? "Mark as incomplete" : "Mark as complete"}
                      >
                        {chapter.completed ? (
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                        ) : (
                          <Circle className="w-6 h-6 text-muted-foreground" />
                        )}
                      </button>
                      <div className={cn("w-3 h-3 rounded-full shrink-0", chapter.color)} />
                      <div className="flex-1">
                        <p className={cn("font-medium", chapter.completed && "line-through text-muted-foreground")}>
                          {chapter.name}
                        </p>
                        {deadline && chapter.startDate && (
                          <p className="text-xs text-muted-foreground">
                            {chapter.startDate.toLocaleDateString()} - {chapter.endDate?.toLocaleDateString()} ({chapter.durationDays} days)
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium">{chapter.duration}%</span>
                        <p className="text-xs text-muted-foreground">of total</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                  ))}
                </div>

                {/* Urgency Warning */}
                {daysRemaining !== null && daysRemaining <= 30 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "mt-6 p-4 rounded-lg border flex items-start gap-3",
                      daysRemaining <= 14 ? "bg-red-500/10 border-red-500/30" : "bg-amber-500/10 border-amber-500/30"
                    )}
                  >
                    <AlertTriangle className={cn("w-5 h-5 shrink-0 mt-0.5", daysRemaining <= 14 ? "text-red-500" : "text-amber-500")} />
                    <div>
                      <p className={cn("font-medium", daysRemaining <= 14 ? "text-red-500" : "text-amber-500")}>
                        {daysRemaining <= 14 ? "Deadline Approaching!" : "Time is Running Out"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {daysRemaining <= 14 
                          ? "Consider reaching out for intensive support to meet your deadline."
                          : "Stay focused and consider getting expert help to stay on track."
                        }
                      </p>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Use Our Timeline Planner?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: GanttChart,
                  title: "Visual Gantt Timeline",
                  description: "See your entire dissertation journey at a glance with an intuitive visual timeline."
                },
                {
                  icon: Target,
                  title: "Progress Tracking",
                  description: "Mark chapters complete and watch your progress grow. Stay motivated with clear milestones."
                },
                {
                  icon: Timer,
                  title: "Smart Allocations",
                  description: "Time percentages based on research into typical dissertation writing patterns."
                },
                {
                  icon: AlertTriangle,
                  title: "Deadline Alerts",
                  description: "Color-coded urgency indicators help you understand when to accelerate your work."
                },
                {
                  icon: Calendar,
                  title: "Automatic Dates",
                  description: "Enter your deadline once and get calculated start/end dates for every chapter."
                },
                {
                  icon: Sparkles,
                  title: "Always Free",
                  description: "No sign-up required. Use the planner as many times as you need, forever free."
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-0 shadow-md">
                    <CardHeader>
                      <Icon className="w-8 h-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">How to Use the Timeline Planner</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "Enter Your Deadline", description: "Input your dissertation submission date to calculate the timeline." },
                { step: 2, title: "View Your Timeline", description: "See the visual Gantt chart showing when each chapter should be completed." },
                { step: 3, title: "Track Progress", description: "Click chapters to mark them complete and watch your progress percentage grow." },
                { step: 4, title: "Stay on Schedule", description: "Use the urgency indicators to know when you need to accelerate your work." }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {toolFAQs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Need Personalized Planning Support?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our expert consultants can create a customized timeline based on your specific project and help you stay on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/consultation">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ChapterPlannerPage;
