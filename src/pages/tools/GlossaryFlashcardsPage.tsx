import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  RotateCcw, 
  ThumbsUp, 
  ThumbsDown, 
  Shuffle, 
  BookOpen, 
  Brain, 
  ChevronLeft, 
  ChevronRight,
  Flame,
  Trophy,
  Clock,
  Trash2,
  Home
} from "lucide-react";
import { glossaryTerms, GlossaryTerm } from "@/data/glossaryTerms";
import { BreadcrumbSchema } from "@/components/schemas";
import SoftwareApplicationSchema from "@/components/schemas/SoftwareApplicationSchema";
import SEO from "@/components/SEO";

interface CardProgress {
  termId: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReview: number;
  lastReview: number;
}

interface FlashcardState {
  cards: CardProgress[];
  streak: number;
  totalReviews: number;
  masteredCount: number;
}

const INITIAL_EASE_FACTOR = 2.5;
const MIN_EASE_FACTOR = 1.3;

const categoryMap: Record<GlossaryTerm["category"], string> = {
  degrees: "Degrees & Structure",
  research: "Research Design",
  writing: "Academic Writing",
  defense: "Defense & Viva",
  methodology: "Methodology",
  analysis: "Analysis"
};

const getInitialState = (): FlashcardState => {
  const saved = localStorage.getItem('glossary-flashcards-progress');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return { cards: [], streak: 0, totalReviews: 0, masteredCount: 0 };
    }
  }
  return { cards: [], streak: 0, totalReviews: 0, masteredCount: 0 };
};

const saveState = (state: FlashcardState) => {
  localStorage.setItem('glossary-flashcards-progress', JSON.stringify(state));
};

const GlossaryFlashcardsPage = () => {
  const [state, setState] = useState<FlashcardState>(getInitialState);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [sessionCards, setSessionCards] = useState<GlossaryTerm[]>([]);
  const [showOnlyDue, setShowOnlyDue] = useState(true);

  const categories = useMemo(() => {
    const cats = [...new Set(glossaryTerms.map(term => term.category))];
    return cats.sort();
  }, []);

  const filteredTerms = useMemo(() => {
    if (selectedCategory === "all") return glossaryTerms;
    return glossaryTerms.filter(term => term.category === selectedCategory);
  }, [selectedCategory]);

  const dueCards = useMemo(() => {
    const now = Date.now();
    return filteredTerms.filter(term => {
      const progress = state.cards.find(c => c.termId === term.term);
      if (!progress) return true;
      return progress.nextReview <= now;
    });
  }, [filteredTerms, state.cards]);

  const masteredCards = useMemo(() => {
    return filteredTerms.filter(term => {
      const progress = state.cards.find(c => c.termId === term.term);
      return progress && progress.repetitions >= 5;
    });
  }, [filteredTerms, state.cards]);

  const currentCard = sessionCards[currentIndex];

  const startSession = (shuffle = true) => {
    const cardsToStudy = showOnlyDue ? dueCards : filteredTerms;
    const cards = shuffle 
      ? [...cardsToStudy].sort(() => Math.random() - 0.5)
      : cardsToStudy;
    setSessionCards(cards.slice(0, 20));
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionStarted(true);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleResponse = (quality: number) => {
    if (!currentCard) return;

    const now = Date.now();
    const existingProgress = state.cards.find(c => c.termId === currentCard.term);
    
    let newProgress: CardProgress;
    
    if (!existingProgress) {
      const interval = quality >= 3 ? 1 : 0;
      newProgress = {
        termId: currentCard.term,
        easeFactor: INITIAL_EASE_FACTOR,
        interval,
        repetitions: quality >= 3 ? 1 : 0,
        nextReview: now + (interval * 24 * 60 * 60 * 1000),
        lastReview: now
      };
    } else {
      let { easeFactor, interval, repetitions } = existingProgress;
      
      if (quality >= 3) {
        if (repetitions === 0) {
          interval = 1;
        } else if (repetitions === 1) {
          interval = 6;
        } else {
          interval = Math.round(interval * easeFactor);
        }
        repetitions++;
      } else {
        repetitions = 0;
        interval = 1;
      }
      
      easeFactor = Math.max(
        MIN_EASE_FACTOR,
        easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
      );
      
      newProgress = {
        termId: currentCard.term,
        easeFactor,
        interval,
        repetitions,
        nextReview: now + (interval * 24 * 60 * 60 * 1000),
        lastReview: now
      };
    }

    const newCards = state.cards.filter(c => c.termId !== currentCard.term);
    newCards.push(newProgress);
    
    const newStreak = quality >= 3 ? state.streak + 1 : 0;
    const newMastered = newCards.filter(c => c.repetitions >= 5).length;

    const newState = {
      cards: newCards,
      streak: newStreak,
      totalReviews: state.totalReviews + 1,
      masteredCount: newMastered
    };

    setState(newState);
    saveState(newState);

    if (currentIndex < sessionCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      setSessionStarted(false);
    }
  };

  const resetProgress = () => {
    const newState = { cards: [], streak: 0, totalReviews: 0, masteredCount: 0 };
    setState(newState);
    saveState(newState);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Research Design": "bg-blue-500/10 text-blue-600 border-blue-200",
      "Statistical Analysis": "bg-emerald-500/10 text-emerald-600 border-emerald-200",
      "Academic Writing": "bg-purple-500/10 text-purple-600 border-purple-200",
      "Qualitative Research": "bg-amber-500/10 text-amber-600 border-amber-200",
      "Ethics": "bg-rose-500/10 text-rose-600 border-rose-200",
      "Literature Review": "bg-cyan-500/10 text-cyan-600 border-cyan-200",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  const getProgressForTerm = (term: string) => {
    return state.cards.find(c => c.termId === term);
  };

  return (
    <Layout>
      <SEO
        title="Glossary Flashcards | Spaced Repetition Learning"
        description="Master academic terminology with interactive flashcards using spaced repetition. Track your progress and improve retention with our science-based learning system."
        keywords={["flashcards", "spaced repetition", "academic terms", "learning", "study tool", "dissertation vocabulary"]}
        canonical="/tools/glossary-flashcards"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dissertlypro.com" },
          { name: "Tools", url: "https://dissertlypro.com/tools" },
          { name: "Glossary Flashcards", url: "https://dissertlypro.com/tools/glossary-flashcards" },
        ]}
      />
      <SoftwareApplicationSchema
        name="Academic Glossary Flashcards"
        description="Master academic terminology with interactive flashcards using spaced repetition."
        url="/tools/glossary-flashcards"
      />

      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Link to="/" className="hover:text-copper transition-colors flex items-center gap-1">
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/tools" className="hover:text-copper transition-colors">Tools</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">Flashcards</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              Glossary Flashcards
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Master academic terminology with spaced repetition. Cards you find difficult appear more often until you've mastered them.
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/glossary">
              <Button variant="outline" size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Full Glossary
              </Button>
            </Link>
            <Link to="/tools/glossary-quiz">
              <Button variant="outline" size="sm">
                <Brain className="h-4 w-4 mr-2" />
                Take Quiz
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100/50 border-amber-200">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <Flame className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-700">{state.streak}</p>
                <p className="text-xs text-amber-600/80">Current Streak</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <Trophy className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-700">{masteredCards.length}</p>
                <p className="text-xs text-emerald-600/80">Mastered</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-700">{dueCards.length}</p>
                <p className="text-xs text-blue-600/80">Due for Review</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <RotateCcw className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-700">{state.totalReviews}</p>
                <p className="text-xs text-purple-600/80">Total Reviews</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {!sessionStarted ? (
          /* Session Setup */
          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-copper/10 mb-4">
                    <Brain className="h-8 w-8 text-copper" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold mb-2">Ready to Study?</h2>
                  <p className="text-muted-foreground">
                    {dueCards.length > 0 
                      ? `You have ${dueCards.length} cards due for review`
                      : "All caught up! Review any cards to reinforce your knowledge."}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category Filter</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories ({glossaryTerms.length} terms)</SelectItem>
                        {categories.map(cat => (
                          <SelectItem key={cat} value={cat}>
                            {cat} ({glossaryTerms.filter(t => t.category === cat).length})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">Show only due cards</span>
                    <Button
                      variant={showOnlyDue ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowOnlyDue(!showOnlyDue)}
                    >
                      {showOnlyDue ? "On" : "Off"}
                    </Button>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    {showOnlyDue 
                      ? `${dueCards.length} cards ready to study`
                      : `${filteredTerms.length} total cards available`}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1" 
                    size="lg"
                    onClick={() => startSession(true)}
                    disabled={showOnlyDue && dueCards.length === 0}
                  >
                    <Shuffle className="h-4 w-4 mr-2" />
                    Start Shuffled
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1" 
                    size="lg"
                    onClick={() => startSession(false)}
                    disabled={showOnlyDue && dueCards.length === 0}
                  >
                    Start In Order
                  </Button>
                </div>

                {state.cards.length > 0 && (
                  <div className="mt-6 pt-6 border-t">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-destructive hover:text-destructive"
                      onClick={resetProgress}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Reset All Progress
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
              <div className="space-y-2">
                {categories.map(category => {
                  const categoryTerms = glossaryTerms.filter(t => t.category === category);
                  const masteredInCategory = categoryTerms.filter(t => {
                    const p = getProgressForTerm(t.term);
                    return p && p.repetitions >= 5;
                  }).length;
                  const progress = (masteredInCategory / categoryTerms.length) * 100;
                  
                  return (
                    <div key={category} className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground w-40 truncate">{category}</span>
                      <Progress value={progress} className="flex-1 h-2" />
                      <span className="text-xs text-muted-foreground w-16 text-right">
                        {masteredInCategory}/{categoryTerms.length}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Active Session */
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Card {currentIndex + 1} of {sessionCards.length}
                </span>
                <Button variant="ghost" size="sm" onClick={() => setSessionStarted(false)}>
                  End Session
                </Button>
              </div>
              <Progress value={((currentIndex + 1) / sessionCards.length) * 100} className="h-2" />
            </div>

            {currentCard && (
              <div className="perspective-1000">
                <motion.div
                  className="relative w-full cursor-pointer"
                  onClick={handleFlip}
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                >
                  {/* Front of card */}
                  <Card 
                    className={`min-h-[300px] md:min-h-[350px] border-2 ${!isFlipped ? '' : 'invisible absolute inset-0'}`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                      <Badge className={`mb-4 ${getCategoryColor(currentCard.category)}`}>
                        {currentCard.category}
                      </Badge>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                        {currentCard.term}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Tap to reveal definition
                      </p>
                      {(() => {
                        const progress = getProgressForTerm(currentCard.term);
                        if (progress && progress.repetitions > 0) {
                          return (
                            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                              <span>Reviewed {progress.repetitions}x</span>
                              {progress.repetitions >= 5 && (
                                <Badge variant="outline" className="text-emerald-600 border-emerald-300">
                                  <Trophy className="h-3 w-3 mr-1" />
                                  Mastered
                                </Badge>
                              )}
                            </div>
                          );
                        }
                        return null;
                      })()}
                    </CardContent>
                  </Card>

                  {/* Back of card */}
                  <Card 
                    className={`min-h-[300px] md:min-h-[350px] border-2 border-copper/30 bg-gradient-to-br from-copper/5 to-transparent ${isFlipped ? '' : 'invisible absolute inset-0'}`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                      <Badge className={`mb-4 ${getCategoryColor(currentCard.category)}`}>
                        {currentCard.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-copper mb-3">{currentCard.term}</h3>
                      <p className="text-foreground text-lg leading-relaxed">
                        {currentCard.definition}
                      </p>
                      {currentCard.seeAlso && (
                        <div className="mt-4 text-sm text-muted-foreground">
                          <span>Related: </span>
                          <Link 
                            to={currentCard.seeAlso.href} 
                            className="text-copper hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {currentCard.seeAlso.title}
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            )}

            {/* Response Buttons */}
            <AnimatePresence>
              {isFlipped && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-6"
                >
                  <p className="text-center text-sm text-muted-foreground mb-4">
                    How well did you know this?
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    <Button
                      variant="outline"
                      className="flex-col h-auto py-3 border-red-200 hover:bg-red-50 hover:border-red-300"
                      onClick={() => handleResponse(1)}
                    >
                      <ThumbsDown className="h-5 w-5 text-red-500 mb-1" />
                      <span className="text-xs text-red-600">Again</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-col h-auto py-3 border-orange-200 hover:bg-orange-50 hover:border-orange-300"
                      onClick={() => handleResponse(2)}
                    >
                      <span className="text-lg mb-1">😕</span>
                      <span className="text-xs text-orange-600">Hard</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-col h-auto py-3 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                      onClick={() => handleResponse(3)}
                    >
                      <span className="text-lg mb-1">🙂</span>
                      <span className="text-xs text-blue-600">Good</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-col h-auto py-3 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300"
                      onClick={() => handleResponse(5)}
                    >
                      <ThumbsUp className="h-5 w-5 text-emerald-500 mb-1" />
                      <span className="text-xs text-emerald-600">Easy</span>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation hint */}
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" />
                Click card to flip
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        )}

        {/* Session Complete */}
        {!sessionStarted && sessionCards.length > 0 && currentIndex >= sessionCards.length - 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto mt-8"
          >
            <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-transparent">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <Trophy className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold mb-2">Session Complete!</h2>
                <p className="text-muted-foreground mb-6">
                  Great job! You reviewed {sessionCards.length} cards.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button onClick={() => startSession(true)}>
                    Study More
                  </Button>
                  <Link to="/tools/glossary-quiz">
                    <Button variant="outline">
                      Take Quiz
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </Layout>
  );
};

export default GlossaryFlashcardsPage;