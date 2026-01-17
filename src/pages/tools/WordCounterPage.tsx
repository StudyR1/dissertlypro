import { useState } from "react";
import { FileText, BookOpen, Clock, Type, ArrowRight, Sparkles, CheckCircle, Calculator } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ToolSchema from "@/components/schemas/ToolSchema";
import FAQSchema from "@/components/schemas/FAQSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formatOptions = {
  standard: { name: "Standard (250 words/page)", wordsPerPage: 250 },
  academic: { name: "Academic (275 words/page)", wordsPerPage: 275 },
  singleSpaced: { name: "Single-spaced (500 words/page)", wordsPerPage: 500 },
  doubleSpaced: { name: "Double-spaced (250 words/page)", wordsPerPage: 250 },
};

const dissertationTypes = [
  { name: "Undergraduate Dissertation", minWords: 8000, maxWords: 15000 },
  { name: "Master's Thesis", minWords: 15000, maxWords: 50000 },
  { name: "PhD Dissertation", minWords: 60000, maxWords: 100000 },
  { name: "Journal Article", minWords: 3000, maxWords: 8000 },
  { name: "Literature Review", minWords: 5000, maxWords: 15000 },
  { name: "Research Proposal", minWords: 2000, maxWords: 5000 },
];

const faqs = [
  {
    question: "How many words per page in a dissertation?",
    answer: "For a standard academic dissertation with double-spacing and 12pt font, expect approximately 250-275 words per page. Single-spaced documents contain roughly 500 words per page. These figures can vary based on margins, font size, and whether you include figures or tables."
  },
  {
    question: "What's the average dissertation word count?",
    answer: "Word counts vary significantly by degree level and discipline. Undergraduate dissertations typically range from 8,000-15,000 words, Master's theses from 15,000-50,000 words, and PhD dissertations from 60,000-100,000 words. STEM dissertations are often shorter than humanities dissertations."
  },
  {
    question: "How long does it take to write 10,000 words?",
    answer: "At a sustainable pace of 500 quality academic words per day (including research and revision), 10,000 words takes approximately 20 focused writing days. However, this doesn't include literature review, data collection, or analysis time."
  },
  {
    question: "Does word count include references and appendices?",
    answer: "This depends on your institution's guidelines. Most universities exclude reference lists, appendices, and front matter (title page, abstract, table of contents) from the word count. Always check your specific program requirements."
  }
];

const WordCounterPage = () => {
  const [inputMode, setInputMode] = useState<"manual" | "paste">("manual");
  const [wordCount, setWordCount] = useState<string>("");
  const [pastedText, setPastedText] = useState("");
  const [format, setFormat] = useState<keyof typeof formatOptions>("academic");

  const getWordCount = () => {
    if (inputMode === "paste" && pastedText) {
      return pastedText.trim().split(/\s+/).filter(word => word.length > 0).length;
    }
    return parseInt(wordCount) || 0;
  };

  const calculatePages = () => {
    const words = getWordCount();
    const pages = words / formatOptions[format].wordsPerPage;
    return pages.toFixed(1);
  };

  const calculateReadingTime = () => {
    const words = getWordCount();
    return Math.ceil(words / 200);
  };

  const calculateSpeakingTime = () => {
    const words = getWordCount();
    return Math.ceil(words / 150);
  };

  const calculateCharacters = () => {
    if (inputMode === "paste" && pastedText) {
      return pastedText.length;
    }
    return (parseInt(wordCount) || 0) * 5;
  };

  const calculateParagraphs = () => {
    if (inputMode === "paste" && pastedText) {
      return pastedText.split(/\n\n+/).filter(p => p.trim().length > 0).length;
    }
    return Math.ceil(getWordCount() / 150);
  };

  const calculateSentences = () => {
    if (inputMode === "paste" && pastedText) {
      return pastedText.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    }
    return Math.ceil(getWordCount() / 20);
  };

  const currentWords = getWordCount();

  return (
    <Layout>
      <SEO 
        title="Free Word Count Calculator | Pages, Reading Time & More"
        description="Calculate dissertation pages, reading time, and character count instantly. Free word counter tool for academic writing with multiple format options."
        keywords={["word count calculator", "words to pages", "dissertation word count", "thesis word count", "academic word counter", "reading time calculator"]}
        canonical="https://dissertlypro.com/tools/word-counter"
      />
      <ToolSchema 
        name="Word Count Calculator"
        description="Free word count calculator for dissertations and academic writing. Convert words to pages, calculate reading time, and track your progress."
        url="https://dissertlypro.com/tools/word-counter"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Free Academic Tool
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Word Count <span className="text-gradient-copper">Calculator</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Convert words to pages, calculate reading time, and track your dissertation progress. Supports multiple academic formats.
            </p>
          </motion.div>

          {/* Main Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <Tabs value={inputMode} onValueChange={(v) => setInputMode(v as "manual" | "paste")} className="mb-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="manual">Enter Word Count</TabsTrigger>
                    <TabsTrigger value="paste">Paste Text</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="manual" className="mt-6">
                    <div>
                      <Label htmlFor="wordCount" className="text-sm font-medium flex items-center gap-2 mb-3">
                        <Type className="w-4 h-4 text-muted-foreground" />
                        Word Count
                      </Label>
                      <Input
                        id="wordCount"
                        type="number"
                        placeholder="Enter word count..."
                        value={wordCount}
                        onChange={(e) => setWordCount(e.target.value)}
                        className="text-lg h-12"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="paste" className="mt-6">
                    <div>
                      <Label htmlFor="pastedText" className="text-sm font-medium flex items-center gap-2 mb-3">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        Paste Your Text
                      </Label>
                      <Textarea
                        id="pastedText"
                        placeholder="Paste your text here to count words automatically..."
                        value={pastedText}
                        onChange={(e) => setPastedText(e.target.value)}
                        className="min-h-[200px]"
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mb-6">
                  <Label htmlFor="format" className="text-sm font-medium flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    Document Format
                  </Label>
                  <Select value={format} onValueChange={(v) => setFormat(v as keyof typeof formatOptions)}>
                    <SelectTrigger className="h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(formatOptions).map(([key, opt]) => (
                        <SelectItem key={key} value={key}>
                          {opt.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Results Grid */}
                {currentWords > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 rounded-xl bg-muted/50"
                  >
                    <div className="text-center p-4 rounded-lg bg-background">
                      <span className="text-3xl font-bold text-primary">{currentWords.toLocaleString()}</span>
                      <span className="block text-sm text-muted-foreground mt-1">Words</span>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background">
                      <span className="text-3xl font-bold text-primary">{calculatePages()}</span>
                      <span className="block text-sm text-muted-foreground mt-1">Pages</span>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background">
                      <span className="text-3xl font-bold text-primary">{calculateReadingTime()}</span>
                      <span className="block text-sm text-muted-foreground mt-1">Min Read</span>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background">
                      <span className="text-3xl font-bold text-foreground">{calculateCharacters().toLocaleString()}</span>
                      <span className="block text-sm text-muted-foreground mt-1">Characters</span>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background">
                      <span className="text-3xl font-bold text-foreground">{calculateSentences()}</span>
                      <span className="block text-sm text-muted-foreground mt-1">Sentences (est.)</span>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background">
                      <span className="text-3xl font-bold text-foreground">{calculateSpeakingTime()}</span>
                      <span className="block text-sm text-muted-foreground mt-1">Min Speaking</span>
                    </div>
                  </motion.div>
                )}

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Based on {formatOptions[format].wordsPerPage} words per page with standard margins
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Word Count Guidelines */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Dissertation Word Count Guidelines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {dissertationTypes.map((type) => (
              <Card key={type.name} className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{type.name}</h3>
                  <div className="text-2xl font-bold text-primary">
                    {type.minWords.toLocaleString()} - {type.maxWords.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">words typical</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            Word counts vary by institution, discipline, and specific requirements. Always check your program's guidelines.
          </p>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">How to Use This Calculator</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Type className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Enter or Paste</h3>
              <p className="text-sm text-muted-foreground">Type your word count directly or paste text for automatic counting</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Select Format</h3>
              <p className="text-sm text-muted-foreground">Choose your document spacing for accurate page calculations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Get Results</h3>
              <p className="text-sm text-muted-foreground">Instantly see pages, reading time, and more statistics</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Need Help Reaching Your Word Count?</h2>
            <p className="text-muted-foreground mb-8">
              Our expert writers and editors can help you develop your dissertation, expand your arguments, and meet your word count requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/consultation">Get Writing Support</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/tools">Explore More Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WordCounterPage;
