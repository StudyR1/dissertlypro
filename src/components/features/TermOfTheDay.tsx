import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, BookOpen, Quote } from "lucide-react";
import { glossaryTerms, categoryLabels } from "@/data/glossaryTerms";

// Daily tips for academic success
const dailyTips = [
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
  { tip: "Use reference management software from day one. Organizing 200+ sources manually is a recipe for citation errors.", author: "Research Organization" },
  { tip: "Celebrate small wins: completed paragraphs, submitted drafts, positive feedback. Dissertation work is a marathon.", author: "Mental Wellness" },
];

const TermOfTheDay = () => {
  // Select a term and tip based on the day of the year for consistency
  const { todaysTerm, todaysTip } = useMemo(() => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const termIndex = dayOfYear % glossaryTerms.length;
    const tipIndex = dayOfYear % dailyTips.length;
    return {
      todaysTerm: glossaryTerms[termIndex],
      todaysTip: dailyTips[tipIndex]
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
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <Quote className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-primary tracking-wide uppercase">
                Daily Tip
              </h3>
              <p className="text-xs text-muted-foreground">
                Academic success insight
              </p>
            </div>
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
