import { useState } from "react";
import { Calculator, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formatOptions = {
  standard: { name: "Standard (250 words/page)", wordsPerPage: 250 },
  academic: { name: "Academic (275 words/page)", wordsPerPage: 275 },
  singleSpaced: { name: "Single-spaced (500 words/page)", wordsPerPage: 500 },
  doubleSpaced: { name: "Double-spaced (250 words/page)", wordsPerPage: 250 },
};

const WordCountCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wordCount, setWordCount] = useState<string>("");
  const [format, setFormat] = useState<keyof typeof formatOptions>("academic");

  const calculatePages = () => {
    const words = parseInt(wordCount) || 0;
    const pages = words / formatOptions[format].wordsPerPage;
    return pages.toFixed(1);
  };

  const calculateReadingTime = () => {
    const words = parseInt(wordCount) || 0;
    const minutes = Math.ceil(words / 200); // Average reading speed
    return minutes;
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-32 z-40 p-3 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Word count calculator"
      >
        <Calculator className="w-5 h-5" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />

            {/* Calculator Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-6 rounded-2xl bg-card border border-border shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Word Count Calculator</h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="wordCount" className="text-sm font-medium">
                    Word Count
                  </Label>
                  <Input
                    id="wordCount"
                    type="number"
                    placeholder="Enter word count..."
                    value={wordCount}
                    onChange={(e) => setWordCount(e.target.value)}
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="format" className="text-sm font-medium">
                    Document Format
                  </Label>
                  <Select value={format} onValueChange={(v) => setFormat(v as keyof typeof formatOptions)}>
                    <SelectTrigger className="mt-1.5">
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

                {/* Results */}
                {wordCount && parseInt(wordCount) > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-xl bg-muted/50 space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Pages</span>
                      <span className="text-2xl font-bold text-primary">{calculatePages()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Reading Time</span>
                      <span className="text-lg font-semibold">{calculateReadingTime()} min</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Characters (approx)</span>
                      <span className="text-lg font-semibold">{(parseInt(wordCount) * 5).toLocaleString()}</span>
                    </div>
                  </motion.div>
                )}

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Based on {formatOptions[format].wordsPerPage} words per page with standard margins
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WordCountCalculator;
