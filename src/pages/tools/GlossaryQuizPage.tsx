import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQToolSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { glossaryTerms, categoryLabels, type GlossaryTerm } from "@/data/glossaryTerms";
import {
  Brain,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  BookOpen,
  Target,
  Sparkles,
  Timer,
  Lightbulb
} from "lucide-react";

type QuizCategory = "all" | GlossaryTerm["category"];

interface QuizQuestion {
  term: GlossaryTerm;
  options: string[];
  correctIndex: number;
}

const QUESTIONS_PER_QUIZ = 10;

const GlossaryQuizPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory>("all");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools" },
    { name: "Glossary Quiz", url: "/tools/glossary-quiz" }
  ];

  // Filter terms by category
  const availableTerms = useMemo(() => {
    if (selectedCategory === "all") return glossaryTerms;
    return glossaryTerms.filter(term => term.category === selectedCategory);
  }, [selectedCategory]);

  // Generate quiz questions
  const quizQuestions = useMemo((): QuizQuestion[] => {
    if (!quizStarted) return [];
    
    // Shuffle and pick terms for questions
    const shuffled = [...availableTerms].sort(() => Math.random() - 0.5);
    const selectedTerms = shuffled.slice(0, Math.min(QUESTIONS_PER_QUIZ, shuffled.length));
    
    return selectedTerms.map(term => {
      // Get 3 wrong definitions from other terms
      const otherTerms = glossaryTerms.filter(t => t.term !== term.term);
      const wrongOptions = otherTerms
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(t => t.definition);
      
      // Create options array with correct answer at random position
      const options = [...wrongOptions, term.definition];
      const correctIndex = Math.floor(Math.random() * 4);
      
      // Swap correct answer to random position
      [options[correctIndex], options[3]] = [options[3], options[correctIndex]];
      
      return { term, options, correctIndex };
    });
  }, [quizStarted, availableTerms]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = quizQuestions.length > 0 
    ? ((currentQuestionIndex + (showResult ? 1 : 0)) / quizQuestions.length) * 100 
    : 0;

  const handleStartQuiz = useCallback(() => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizComplete(false);
  }, []);

  const handleSelectAnswer = useCallback((index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  }, [showResult]);

  const handleSubmitAnswer = useCallback(() => {
    if (selectedAnswer === null || !currentQuestion) return;
    
    const isCorrect = selectedAnswer === currentQuestion.correctIndex;
    if (isCorrect) setScore(prev => prev + 1);
    setAnswers(prev => [...prev, isCorrect]);
    setShowResult(true);
  }, [selectedAnswer, currentQuestion]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  }, [currentQuestionIndex, quizQuestions.length]);

  const handleRestartQuiz = useCallback(() => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizComplete(false);
  }, []);

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return { message: "Perfect Score! 🎉", description: "You're an academic terminology expert!" };
    if (percentage >= 80) return { message: "Excellent! 🌟", description: "You have a strong grasp of academic terms." };
    if (percentage >= 60) return { message: "Good Job! 👍", description: "You're making progress. Keep studying!" };
    if (percentage >= 40) return { message: "Keep Learning! 📚", description: "Review the glossary to improve your knowledge." };
    return { message: "Time to Study! 🔍", description: "Check out our glossary to learn more terms." };
  };

  const categories: { id: QuizCategory; label: string }[] = [
    { id: "all", label: "All Categories" },
    { id: "degrees", label: categoryLabels.degrees },
    { id: "research", label: categoryLabels.research },
    { id: "methodology", label: categoryLabels.methodology },
    { id: "analysis", label: categoryLabels.analysis },
    { id: "writing", label: categoryLabels.writing },
    { id: "defense", label: categoryLabels.defense }
  ];

  const glossaryQuizFAQs = [
    {
      question: "How does the Academic Glossary Quiz work?",
      answer: "The quiz presents 10 multiple-choice questions about academic terminology. For each question, you'll see a term and four possible definitions—select the correct one. You get instant feedback and can track your score throughout."
    },
    {
      question: "Can I filter the quiz by category?",
      answer: "Yes, before starting you can choose to focus on specific categories like Degrees & Structure, Research Concepts, Methodology, Data Analysis, Academic Writing, or Defense & Exams. This helps target your learning."
    },
    {
      question: "Is there a time limit for the quiz?",
      answer: "No, there's no time limit. Take as long as you need to think through each question. The goal is learning, not speed."
    }
  ];

  return (
    <Layout>
      <SEO
        title="Academic Glossary Quiz | Test Your Research Knowledge | DissertlyPro"
        description="Test your knowledge of academic terminology with our interactive glossary quiz. Learn dissertation, thesis, and research terms through practice."
        keywords={["academic quiz", "research terminology test", "thesis terms quiz", "dissertation vocabulary", "academic learning tool"]}
        canonical="https://dissertlypro.com/tools/glossary-quiz"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQToolSchema
        toolName="Academic Glossary Quiz"
        toolUrl="https://dissertlypro.com/tools/glossary-quiz"
        faqs={glossaryQuizFAQs}
      />

      <section className="py-12 md:py-20 bg-gradient-to-b from-midnight via-midnight-rich to-background">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/10 px-4 py-2 mb-6">
              <Brain className="h-4 w-4 text-copper" />
              <span className="text-sm font-medium text-copper">Free Learning Tool</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Academic Glossary Quiz
            </h1>
            <p className="text-lg text-ivory/80 max-w-2xl mx-auto">
              Test your knowledge of dissertation and research terminology. 
              Perfect for Master's and PhD students preparing for their journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {!quizStarted ? (
                <motion.div
                  key="start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Card className="border-border/50">
                    <CardContent className="p-6 md:p-8">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-copper/10 flex items-center justify-center mx-auto mb-4">
                          <Target className="h-8 w-8 text-copper" />
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                          Ready to Test Your Knowledge?
                        </h2>
                        <p className="text-muted-foreground">
                          Answer {QUESTIONS_PER_QUIZ} multiple-choice questions about academic terminology.
                        </p>
                      </div>

                      <div className="mb-8">
                        <label className="block text-sm font-medium text-foreground mb-3">
                          Select Category (Optional)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {categories.map(cat => (
                            <button
                              key={cat.id}
                              onClick={() => setSelectedCategory(cat.id)}
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategory === cat.id
                                  ? "bg-copper text-white"
                                  : "bg-muted text-muted-foreground hover:bg-muted/80"
                              }`}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {availableTerms.length} terms available in this category
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-muted/30 rounded-xl">
                        <div className="text-center">
                          <Timer className="h-5 w-5 text-copper mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">No time limit</p>
                        </div>
                        <div className="text-center">
                          <Lightbulb className="h-5 w-5 text-copper mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">{QUESTIONS_PER_QUIZ} questions</p>
                        </div>
                        <div className="text-center">
                          <Sparkles className="h-5 w-5 text-copper mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">Instant feedback</p>
                        </div>
                      </div>

                      <Button 
                        variant="copper" 
                        size="lg" 
                        className="w-full"
                        onClick={handleStartQuiz}
                        disabled={availableTerms.length < 4}
                      >
                        Start Quiz
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>

                      {availableTerms.length < 4 && (
                        <p className="text-sm text-destructive text-center mt-3">
                          Not enough terms in this category. Please select a different one.
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ) : quizComplete ? (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Card className="border-border/50 overflow-hidden">
                    <div className="bg-gradient-to-r from-copper/20 to-copper/10 p-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-copper/20 flex items-center justify-center mx-auto mb-4">
                        <Trophy className="h-10 w-10 text-copper" />
                      </div>
                      <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
                        {getScoreMessage().message}
                      </h2>
                      <p className="text-muted-foreground">{getScoreMessage().description}</p>
                    </div>
                    
                    <CardContent className="p-6 md:p-8">
                      <div className="text-center mb-8">
                        <div className="text-5xl font-serif font-bold text-copper mb-2">
                          {score}/{quizQuestions.length}
                        </div>
                        <p className="text-muted-foreground">
                          {Math.round((score / quizQuestions.length) * 100)}% correct
                        </p>
                      </div>

                      <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {answers.map((correct, i) => (
                          <div
                            key={i}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              correct ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"
                            }`}
                          >
                            {correct ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          variant="copper" 
                          className="flex-1"
                          onClick={handleRestartQuiz}
                        >
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Try Again
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          asChild
                        >
                          <Link to="/glossary">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Study Glossary
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : currentQuestion ? (
                <motion.div
                  key={`question-${currentQuestionIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Card className="border-border/50">
                    <CardContent className="p-6 md:p-8">
                      {/* Progress bar */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm text-muted-foreground mb-2">
                          <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
                          <span>Score: {score}</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>

                      {/* Question */}
                      <div className="mb-8">
                        <p className="text-sm text-copper font-medium mb-2">
                          What is the definition of:
                        </p>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                          {currentQuestion.term.term}
                        </h2>
                        <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          {categoryLabels[currentQuestion.term.category]}
                        </span>
                      </div>

                      {/* Options */}
                      <div className="space-y-3 mb-6">
                        {currentQuestion.options.map((option, index) => {
                          const isSelected = selectedAnswer === index;
                          const isCorrect = index === currentQuestion.correctIndex;
                          
                          let optionClass = "border-border hover:border-copper/50 hover:bg-muted/30";
                          if (showResult) {
                            if (isCorrect) {
                              optionClass = "border-success bg-success/10";
                            } else if (isSelected && !isCorrect) {
                              optionClass = "border-destructive bg-destructive/10";
                            }
                          } else if (isSelected) {
                            optionClass = "border-copper bg-copper/10";
                          }

                          return (
                            <button
                              key={index}
                              onClick={() => handleSelectAnswer(index)}
                              disabled={showResult}
                              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${optionClass}`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                  showResult && isCorrect
                                    ? "bg-success text-white"
                                    : showResult && isSelected && !isCorrect
                                    ? "bg-destructive text-white"
                                    : isSelected
                                    ? "bg-copper text-white"
                                    : "bg-muted text-muted-foreground"
                                }`}>
                                  {showResult && isCorrect ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : showResult && isSelected && !isCorrect ? (
                                    <XCircle className="h-4 w-4" />
                                  ) : (
                                    <span className="text-xs font-medium">
                                      {String.fromCharCode(65 + index)}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-foreground leading-relaxed line-clamp-3">
                                  {option}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Action buttons */}
                      {!showResult ? (
                        <Button
                          variant="copper"
                          size="lg"
                          className="w-full"
                          onClick={handleSubmitAnswer}
                          disabled={selectedAnswer === null}
                        >
                          Submit Answer
                        </Button>
                      ) : (
                        <div className="space-y-4">
                          {currentQuestion.term.seeAlso && (
                            <div className="p-4 bg-muted/30 rounded-xl">
                              <p className="text-sm text-muted-foreground mb-2">
                                Learn more about this topic:
                              </p>
                              <Link
                                to={currentQuestion.term.seeAlso.href}
                                className="text-sm text-copper hover:underline inline-flex items-center gap-1"
                              >
                                {currentQuestion.term.seeAlso.title}
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          )}
                          <Button
                            variant="copper"
                            size="lg"
                            className="w-full"
                            onClick={handleNextQuestion}
                          >
                            {currentQuestionIndex < quizQuestions.length - 1 ? (
                              <>
                                Next Question
                                <ArrowRight className="h-5 w-5 ml-2" />
                              </>
                            ) : (
                              <>
                                See Results
                                <Trophy className="h-5 w-5 ml-2" />
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* Quick links */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Want to study before taking the quiz?
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/glossary"
                  className="text-sm text-copper hover:underline inline-flex items-center gap-1"
                >
                  <BookOpen className="h-4 w-4" />
                  Browse Glossary
                </Link>
                <Link
                  to="/tools"
                  className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                >
                  More Tools
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GlossaryQuizPage;
