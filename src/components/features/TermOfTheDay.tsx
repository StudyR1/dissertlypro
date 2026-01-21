import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, BookOpen, Quote } from "lucide-react";
import { glossaryTerms, categoryLabels } from "@/data/glossaryTerms";

// Academic calendar periods and their date ranges
type AcademicPeriod = 'exam_season' | 'thesis_deadline' | 'semester_start' | 'summer_research' | 'holiday_break' | 'general';

interface SeasonalTip {
  tip: string;
  author: string;
  period?: AcademicPeriod;
}

const getAcademicPeriod = (date: Date): AcademicPeriod => {
  const month = date.getMonth(); // 0-11
  const day = date.getDate();
  
  // Exam seasons: Late April-May, Late November-December
  if ((month === 3 && day >= 15) || month === 4 || (month === 10 && day >= 15) || (month === 11 && day <= 15)) {
    return 'exam_season';
  }
  // Thesis deadline periods: March-April (spring submissions), August-September (fall submissions)
  if ((month === 2 || (month === 3 && day < 15)) || month === 7 || (month === 8 && day <= 15)) {
    return 'thesis_deadline';
  }
  // Semester starts: Late August-September, January
  if ((month === 7 && day >= 15) || (month === 8 && day <= 30) || month === 0) {
    return 'semester_start';
  }
  // Summer research: June-July
  if (month === 5 || month === 6) {
    return 'summer_research';
  }
  // Holiday breaks: Late December, early January handled by semester_start
  if (month === 11 && day >= 16) {
    return 'holiday_break';
  }
  return 'general';
};

const getPeriodLabel = (period: AcademicPeriod): string => {
  const labels: Record<AcademicPeriod, string> = {
    exam_season: 'Exam Season Tips',
    thesis_deadline: 'Deadline Crunch Tips',
    semester_start: 'New Semester Tips',
    summer_research: 'Summer Research Tips',
    holiday_break: 'Holiday Break Tips',
    general: 'Academic success insight',
  };
  return labels[period];
};

const getPeriodEmoji = (period: AcademicPeriod): string => {
  const emojis: Record<AcademicPeriod, string> = {
    exam_season: '📝',
    thesis_deadline: '⏰',
    semester_start: '🚀',
    summer_research: '☀️',
    holiday_break: '🎄',
    general: '💡',
  };
  return emojis[period];
};

// Seasonal tips organized by academic period
const seasonalTips: Record<AcademicPeriod, SeasonalTip[]> = {
  exam_season: [
    { tip: "During exam prep, use active recall instead of passive re-reading. Test yourself repeatedly on material.", author: "Memory Science", period: 'exam_season' },
    { tip: "Space your study sessions across multiple days. Cramming produces short-term gains but poor long-term retention.", author: "Spaced Repetition Research", period: 'exam_season' },
    { tip: "Get 7-8 hours of sleep before exams. Sleep consolidates memories and improves problem-solving ability.", author: "Sleep & Learning Studies", period: 'exam_season' },
    { tip: "Practice past exam papers under timed conditions. Familiarity with format reduces anxiety and improves performance.", author: "Test Preparation", period: 'exam_season' },
    { tip: "Take short breaks every 45-50 minutes during study marathons. Cognitive fatigue impairs information processing.", author: "Attention Research", period: 'exam_season' },
    { tip: "Teach concepts to others or explain them aloud. The 'protégé effect' deepens your own understanding.", author: "Learning Science", period: 'exam_season' },
  ],
  thesis_deadline: [
    { tip: "In the final weeks, focus on polishing what you have rather than adding new content. Scope creep kills deadlines.", author: "Thesis Completion", period: 'thesis_deadline' },
    { tip: "Create a detailed day-by-day schedule for your final month. Backward plan from submission date.", author: "Deadline Management", period: 'thesis_deadline' },
    { tip: "Have someone else proofread your work. You've read it too many times to catch remaining errors.", author: "Editing Strategy", period: 'thesis_deadline' },
    { tip: "Submit 24-48 hours early if possible. Technical issues always seem to occur at the worst moments.", author: "Risk Management", period: 'thesis_deadline' },
    { tip: "Check formatting requirements obsessively. Many theses are rejected for margins, fonts, or citation style errors.", author: "Submission Guidelines", period: 'thesis_deadline' },
    { tip: "Prepare your reference list incrementally. Last-minute bibliography formatting is stressful and error-prone.", author: "Citation Practice", period: 'thesis_deadline' },
  ],
  semester_start: [
    { tip: "Set up your research infrastructure now: file organization, reference manager, writing schedule, backup systems.", author: "Academic Setup", period: 'semester_start' },
    { tip: "Meet with your supervisor early to align expectations and establish communication rhythms for the term.", author: "Supervisor Strategy", period: 'semester_start' },
    { tip: "Block out dedicated research time in your calendar before teaching and service commitments fill it.", author: "Time Management", period: 'semester_start' },
    { tip: "Review your progress from last term and set 2-3 concrete, measurable goals for this one.", author: "Goal Setting", period: 'semester_start' },
    { tip: "Join or form a writing group early in the semester. Accountability partners dramatically improve output.", author: "Academic Community", period: 'semester_start' },
    { tip: "Identify which administrative tasks you can batch together to protect larger blocks for deep work.", author: "Productivity Planning", period: 'semester_start' },
  ],
  summer_research: [
    { tip: "Summer is prime research time—protect it fiercely. Say no to obligations that fragment your focus.", author: "Summer Planning", period: 'summer_research' },
    { tip: "Set a summer research goal that would make the season feel successful. Write it down and make it visible.", author: "Goal Clarity", period: 'summer_research' },
    { tip: "Maintain a consistent schedule even without classes. Structure prevents summer from slipping away.", author: "Self-Discipline", period: 'summer_research' },
    { tip: "Use summer for the messy, experimental work that's harder during the teaching term.", author: "Research Strategy", period: 'summer_research' },
    { tip: "Take a real vacation—even a short one. Returning refreshed improves fall productivity.", author: "Recovery Research", period: 'summer_research' },
    { tip: "Summer conferences offer networking opportunities. Prepare your elevator pitch for your current research.", author: "Conference Season", period: 'summer_research' },
  ],
  holiday_break: [
    { tip: "Decide intentionally: is this a work break or a rest break? Trying to do both often achieves neither.", author: "Boundary Setting", period: 'holiday_break' },
    { tip: "If you're taking time off, truly disconnect. Guilt-free rest is more restorative than anxious semi-work.", author: "Mental Health", period: 'holiday_break' },
    { tip: "Use quiet time for reflection: What worked this year? What will you change? Document insights while fresh.", author: "Annual Review", period: 'holiday_break' },
    { tip: "Light planning during breaks can ease January anxiety. Sketch goals, don't execute—preserve rest.", author: "Gentle Planning", period: 'holiday_break' },
    { tip: "Reconnect with why you started this journey. Passion often resurfaces when deadline pressure lifts.", author: "Motivation Research", period: 'holiday_break' },
  ],
  general: [
    // Writing & Productivity
    { tip: "Write for 25 minutes, then take a 5-minute break. The Pomodoro Technique helps maintain focus during long writing sessions.", author: "Productivity Research" },
    { tip: "Read your work aloud—you'll catch awkward phrasing and grammatical errors your eyes miss when reading silently.", author: "Editing Best Practice" },
    { tip: "Keep a 'parking lot' document for ideas that don't fit your current chapter. They may be perfect for later sections.", author: "Writing Strategy" },
    { tip: "Schedule your most challenging writing tasks during your peak energy hours—usually 2-3 hours after waking.", author: "Cognitive Science" },
    { tip: "Back up your work in three places: local, cloud, and external drive. Losing a dissertation chapter is preventable.", author: "Data Safety" },
    { tip: "End each writing session mid-sentence. You'll find it easier to restart the next day with momentum.", author: "Hemingway Technique" },
    { tip: "Your first draft doesn't need to be perfect—it just needs to exist. Edit ruthlessly in subsequent revisions.", author: "Anne Lamott" },
    { tip: "Take a 10-minute walk when stuck. Physical movement activates different brain regions and sparks creativity.", author: "Neuroscience Research" },
    { tip: "Keep your thesis statement visible while writing. Every paragraph should connect back to your central argument.", author: "Academic Writing" },
    { tip: "Read one paper from your field every day, even if just the abstract. Cumulative knowledge compounds rapidly.", author: "Research Habit" },
    // Research & Organization
    { tip: "Use reference management software from day one. Organizing 200+ sources manually is a recipe for citation errors.", author: "Research Organization" },
    { tip: "Celebrate small wins: completed paragraphs, submitted drafts, positive feedback. Dissertation work is a marathon.", author: "Mental Wellness" },
    { tip: "Create a reverse outline of your draft to check logical flow. Summarize each paragraph in one sentence.", author: "Revision Strategy" },
    { tip: "Set 'office hours' for yourself. Consistent writing times train your brain to be productive on schedule.", author: "Habit Formation" },
    { tip: "Don't edit while you write. Drafting and editing use different cognitive processes—keep them separate.", author: "Writing Psychology" },
    { tip: "Use the 'two-minute rule': if a task takes less than two minutes, do it immediately rather than adding it to your list.", author: "David Allen" },
    { tip: "Write your methodology chapter as you conduct research, not after. Fresh details make for better documentation.", author: "Research Practice" },
    { tip: "Keep a research journal. Daily entries about progress, challenges, and insights become valuable reflections.", author: "Reflective Practice" },
    { tip: "Break large chapters into smaller sections. 'Write section 2.3' is less daunting than 'write literature review.'", author: "Task Management" },
    { tip: "Review your notes within 24 hours of taking them. This simple practice dramatically improves retention.", author: "Learning Science" },
    // Supervisor & Communication
    { tip: "Send your supervisor regular updates, even when you feel stuck. Silence often causes more concern than problems.", author: "Supervisor Relations" },
    { tip: "Before meetings with your supervisor, prepare specific questions. Vague check-ins waste both your time.", author: "Meeting Efficiency" },
    { tip: "Learn to accept feedback without becoming defensive. Every critique is an opportunity to strengthen your work.", author: "Growth Mindset" },
    { tip: "Build relationships with peers in your program. They understand your challenges like no one else can.", author: "Academic Community" },
    { tip: "Attend departmental seminars, even outside your specialty. Exposure to diverse methods sparks innovation.", author: "Intellectual Growth" },
    { tip: "Practice explaining your research to non-experts. If you can't simplify it, you may not fully understand it.", author: "Einstein Principle" },
    { tip: "Keep a 'wins' file. When imposter syndrome strikes, review evidence of your genuine accomplishments.", author: "Self-Compassion" },
    { tip: "Your dissertation doesn't need to change the world—it needs to demonstrate your research competence.", author: "Expectations Management" },
    { tip: "Network at conferences by asking questions after talks. Speakers remember engaged audience members.", author: "Academic Networking" },
    { tip: "When receiving conflicting feedback, focus on the underlying concerns rather than surface-level contradictions.", author: "Feedback Navigation" },
    // Wellbeing & Balance
    { tip: "Protect at least one full day per week for rest. Burnout recovery takes far longer than prevention.", author: "Sustainable Productivity" },
    { tip: "Exercise isn't a luxury during dissertation work—it's essential for cognitive function and stress management.", author: "Health Research" },
    { tip: "Set boundaries on your availability. Being always 'on' leads to being always exhausted.", author: "Work-Life Balance" },
    { tip: "Comparison is the thief of joy. Your timeline is valid, regardless of others' seemingly faster progress.", author: "Theodore Roosevelt" },
    { tip: "Sleep deprivation impairs cognitive function more than alcohol intoxication. Prioritize rest.", author: "Sleep Science" },
    { tip: "It's normal to feel like a fraud sometimes. Most successful academics have experienced imposter syndrome.", author: "Psychological Research" },
    { tip: "Find writing accountability partners. Shared commitment increases follow-through significantly.", author: "Behavioral Science" },
    { tip: "Your worth is not determined by your productivity. You are more than your dissertation output.", author: "Self-Worth" },
    { tip: "Take real breaks—scrolling social media doesn't count. Step away from screens to actually recharge.", author: "Digital Wellness" },
    { tip: "Finished is better than perfect. A submitted dissertation opens doors that a perfect unfinished one never will.", author: "Completion Mindset" },
  ],
};

const TermOfTheDay = () => {
  // Select a term and tip based on the day of the year and academic period
  const { todaysTerm, todaysTip, currentPeriod } = useMemo(() => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Get the current academic period
    const period = getAcademicPeriod(today);
    const periodTips = seasonalTips[period];
    
    const termIndex = dayOfYear % glossaryTerms.length;
    const tipIndex = dayOfYear % periodTips.length;
    
    return {
      todaysTerm: glossaryTerms[termIndex],
      todaysTip: periodTips[tipIndex],
      currentPeriod: period
    };
  }, []);

  const getCategoryColor = (category: typeof todaysTerm.category) => {
    const colors: Record<typeof category, string> = {
      degrees: "bg-primary/10 text-primary border-primary/20",
      research: "bg-copper/10 text-copper border-copper/20",
      writing: "bg-success/10 text-success border-success/20",
      defense: "bg-destructive/10 text-destructive border-destructive/20",
      methodology: "bg-accent/20 text-accent-foreground border-accent/30",
      analysis: "bg-secondary/50 text-secondary-foreground border-secondary"
    };
    return colors[category];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-midnight-soft/50 via-midnight/30 to-midnight-rich/50 backdrop-blur-sm"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-copper/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
      
      {/* Two-column layout */}
      <div className="relative grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
        {/* Term of the Day - Left Column */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-copper/10 border border-copper/20">
              <Lightbulb className="h-5 w-5 text-copper" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-copper tracking-wide uppercase">
                Term of the Day
              </h3>
              <p className="text-xs text-muted-foreground">
                Expand your academic vocabulary
              </p>
            </div>
          </div>

          {/* Term content */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                {todaysTerm.term}
              </h4>
              <span className={`text-xs px-2 py-0.5 rounded-full border ${getCategoryColor(todaysTerm.category)}`}>
                {categoryLabels[todaysTerm.category]}
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
              {todaysTerm.definition}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link 
                to="/glossary"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>View all terms</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Daily Tip - Right Column */}
        <div className="p-6 md:p-8 bg-white/[0.02]">
          {/* Header with seasonal indicator */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                <Quote className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-primary tracking-wide uppercase">
                  Daily Tip
                </h3>
                <p className="text-xs text-muted-foreground">
                  {currentPeriod !== 'general' ? getPeriodLabel(currentPeriod) : 'Academic success insight'}
                </p>
              </div>
            </div>
            {currentPeriod !== 'general' && (
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {getPeriodEmoji(currentPeriod)}
              </span>
            )}
          </div>

          {/* Tip content */}
          <div className="space-y-3">
            <blockquote className="text-sm md:text-base text-foreground/90 leading-relaxed italic">
              "{todaysTip.tip}"
            </blockquote>
            <p className="text-xs text-muted-foreground">
              — {todaysTip.author}
            </p>
            
            {/* Quick links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link 
                to="/tools/glossary-quiz"
                className="inline-flex items-center gap-1.5 text-sm text-copper hover:text-copper-light transition-colors group"
              >
                <span>Take Quiz</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link 
                to="/tools/glossary-flashcards"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span>Flashcards</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TermOfTheDay;
