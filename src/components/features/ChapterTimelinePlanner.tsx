import { useState, useEffect } from "react";
import { Calendar, X, Clock, CheckCircle2, Circle, GanttChart, ChevronRight, AlertTriangle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Chapter {
  id: string;
  name: string;
  duration: number; // percentage of total time
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

const ChapterTimelinePlanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [chapters, setChapters] = useState<Chapter[]>(defaultChapters);
  const [startDate] = useState(new Date());

  // Listen for navigation menu trigger
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-timeline-planner', handleOpen);
    return () => window.removeEventListener('open-timeline-planner', handleOpen);
  }, []);

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
    caution: "text-yellow-500",
    warning: "text-amber-500",
    critical: "text-red-500",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-4 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto p-6 rounded-2xl bg-card border border-border shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="timeline-planner-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GanttChart className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 id="timeline-planner-title" className="text-lg font-semibold">Chapter Timeline Planner</h3>
                  <p className="text-xs text-muted-foreground">Visualize your dissertation schedule</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full" aria-label="Close timeline planner">
                <X className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Deadline Input */}
              <div>
                <Label htmlFor="deadline-input" className="text-sm font-medium flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                  Submission Deadline
                </Label>
                <Input
                  id="deadline-input"
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full"
                />
              </div>

              {/* Summary Stats */}
              {deadline && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                >
                  <div className="p-3 rounded-xl bg-muted/50 text-center">
                    <div className={cn("text-2xl font-bold", urgencyColors[getUrgencyLevel()])}>
                      {daysRemaining}
                    </div>
                    <div className="text-xs text-muted-foreground">Days Left</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/50 text-center">
                    <div className="text-2xl font-bold text-primary">{completedPercentage}%</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/50 text-center col-span-2 sm:col-span-1">
                    <div className="text-2xl font-bold text-foreground">
                      {chapters.filter(c => c.completed).length}/{chapters.length}
                    </div>
                    <div className="text-xs text-muted-foreground">Chapters Done</div>
                  </div>
                </motion.div>
              )}

              {/* Overall Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Overall Progress</span>
                  <span className="text-muted-foreground">{completedPercentage}%</span>
                </div>
                <Progress value={completedPercentage} className="h-2" />
              </div>

              {/* Gantt Chart */}
              {deadline && chapterDates.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Timeline View
                  </div>
                  
                  {/* Timeline Header */}
                  <div className="relative h-6 bg-muted/30 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] text-muted-foreground">
                      <span>{startDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
                      <span>{new Date(deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
                    </div>
                    {/* Today marker */}
                    <div 
                      className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                      style={{ left: '0%' }}
                    />
                  </div>

                  {/* Gantt Bars */}
                  <div className="space-y-2">
                    {chapterDates.map((chapter, index) => (
                      <motion.div
                        key={chapter.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative"
                      >
                        <div className="flex items-center gap-3">
                          {/* Chapter name and toggle */}
                          <button
                            onClick={() => toggleChapter(chapter.id)}
                            className="flex items-center gap-2 min-w-[140px] sm:min-w-[180px] text-left group"
                            aria-label={`Mark ${chapter.name} as ${chapter.completed ? 'incomplete' : 'complete'}`}
                          >
                            {chapter.completed ? (
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
                            )}
                            <span className={cn(
                              "text-xs sm:text-sm truncate transition-all",
                              chapter.completed ? "text-muted-foreground line-through" : "text-foreground"
                            )}>
                              {chapter.name}
                            </span>
                          </button>

                          {/* Gantt bar */}
                          <div className="flex-1 h-7 bg-muted/30 rounded-md relative overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${chapter.widthPercent}%` }}
                              transition={{ delay: index * 0.05 + 0.2, duration: 0.5 }}
                              className={cn(
                                "absolute h-full rounded-md flex items-center justify-end pr-2",
                                chapter.color,
                                chapter.completed && "opacity-50"
                              )}
                              style={{ left: `${chapter.startOffset}%` }}
                            >
                              <span className="text-[10px] text-white font-medium hidden sm:block">
                                {chapter.durationDays}d
                              </span>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Chapter List (without deadline) */}
              {!deadline && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Enter your deadline above to see the visual timeline
                  </p>
                  {chapters.map((chapter, index) => (
                    <motion.button
                      key={chapter.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => toggleChapter(chapter.id)}
                      className="w-full flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 transition-colors text-left group"
                    >
                      <div className="flex items-center gap-3">
                        {chapter.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        )}
                        <span className={cn(
                          "text-sm",
                          chapter.completed && "text-muted-foreground line-through"
                        )}>
                          {chapter.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {chapter.duration}% of time
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Urgency Warning */}
              {daysRemaining !== null && daysRemaining <= 30 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "p-4 rounded-xl border flex items-start gap-3",
                    daysRemaining <= 14 
                      ? "bg-red-500/10 border-red-500/30" 
                      : "bg-amber-500/10 border-amber-500/30"
                  )}
                >
                  <AlertTriangle className={cn(
                    "w-5 h-5 flex-shrink-0 mt-0.5",
                    daysRemaining <= 14 ? "text-red-500" : "text-amber-500"
                  )} />
                  <div>
                    <p className={cn(
                      "text-sm font-medium",
                      daysRemaining <= 14 ? "text-red-500" : "text-amber-500"
                    )}>
                      {daysRemaining <= 14 ? "Critical Timeline!" : "Tight Schedule"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {daysRemaining <= 14 
                        ? "Consider professional support to meet your deadline."
                        : "Stay focused and prioritize your highest-impact chapters."
                      }
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Legend */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {chapters.map(chapter => (
                  <div key={chapter.id} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <div className={cn("w-2 h-2 rounded-full", chapter.color)} />
                    <span>{chapter.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChapterTimelinePlanner;
