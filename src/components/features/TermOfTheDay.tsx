import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, BookOpen } from "lucide-react";
import { glossaryTerms, categoryLabels } from "@/data/glossaryTerms";

const TermOfTheDay = () => {
  // Select a term based on the day of the year for consistency
  const todaysTerm = useMemo(() => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const termIndex = dayOfYear % glossaryTerms.length;
    return glossaryTerms[termIndex];
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
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-midnight-soft/50 via-midnight/30 to-midnight-rich/50 backdrop-blur-sm p-6 md:p-8"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-copper/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
      
      {/* Header */}
      <div className="relative flex items-center gap-3 mb-4">
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
      <div className="relative space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h4 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            {todaysTerm.term}
          </h4>
          <span className={`text-xs px-2.5 py-1 rounded-full border ${getCategoryColor(todaysTerm.category)}`}>
            {categoryLabels[todaysTerm.category]}
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm md:text-base line-clamp-3">
          {todaysTerm.definition}
        </p>

        {todaysTerm.relatedTerms && (
          <div className="flex flex-wrap gap-2">
            {todaysTerm.relatedTerms.slice(0, 3).map((term) => (
              <span 
                key={term}
                className="text-xs px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5"
              >
                {term}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {todaysTerm.seeAlso && (
            <Link 
              to={todaysTerm.seeAlso.href}
              className="inline-flex items-center gap-1.5 text-sm text-copper hover:text-copper-light transition-colors group"
            >
              <span>{todaysTerm.seeAlso.title}</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
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
    </motion.div>
  );
};

export default TermOfTheDay;
