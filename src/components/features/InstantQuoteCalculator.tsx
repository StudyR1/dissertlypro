import { useState, useEffect } from "react";
import { Calculator, X, FileText, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

const academicLevels = [
  { value: "undergraduate", label: "Undergraduate", multiplier: 1 },
  { value: "masters", label: "Master's", multiplier: 1.3 },
  { value: "phd", label: "PhD / Doctoral", multiplier: 1.6 },
];

const serviceTypes = [
  { value: "dissertation", label: "Full Dissertation", basePrice: 45, perPage: true },
  { value: "chapter", label: "Single Chapter", basePrice: 40, perPage: true },
  { value: "proposal", label: "Research Proposal", basePrice: 42, perPage: true },
  { value: "editing", label: "Editing & Proofreading", basePrice: 18, perPage: true },
  { value: "statistics", label: "Statistical Analysis", basePrice: 350, perPage: false },
  { value: "consultation", label: "Consultation (1hr)", basePrice: 85, perPage: false },
];

const urgencyLevels = [
  { value: "standard", label: "Standard (14+ days)", multiplier: 1, discount: "Best Value" },
  { value: "priority", label: "Priority (7-13 days)", multiplier: 1.25, discount: null },
  { value: "express", label: "Express (3-6 days)", multiplier: 1.5, discount: null },
  { value: "urgent", label: "Urgent (1-2 days)", multiplier: 2, discount: "Limited Availability" },
];

const InstantQuoteCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [academicLevel, setAcademicLevel] = useState("masters");
  const [serviceType, setServiceType] = useState("dissertation");
  const [urgency, setUrgency] = useState("standard");
  const [pageCount, setPageCount] = useState([50]);

  // Listen for navigation menu trigger
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-quote-calculator', handleOpen);
    return () => window.removeEventListener('open-quote-calculator', handleOpen);
  }, []);

  const calculateQuote = () => {
    const level = academicLevels.find(l => l.value === academicLevel);
    const service = serviceTypes.find(s => s.value === serviceType);
    const urg = urgencyLevels.find(u => u.value === urgency);

    if (!level || !service || !urg) return { min: 0, max: 0 };

    let baseTotal = service.perPage 
      ? service.basePrice * pageCount[0] 
      : service.basePrice;
    
    const total = baseTotal * level.multiplier * urg.multiplier;
    
    // Show a range for transparency
    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.1),
    };
  };

  const quote = calculateQuote();
  const selectedService = serviceTypes.find(s => s.value === serviceType);
  const selectedUrgency = urgencyLevels.find(u => u.value === urgency);

  return (
    <>
      {/* Modal - triggered from navigation menu */}
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
              className="fixed left-1/2 top-4 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto p-6 rounded-2xl bg-card border border-border shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-calculator-title"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calculator className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 id="quote-calculator-title" className="text-lg font-semibold">Instant Quote Calculator</h3>
                    <p className="text-xs text-muted-foreground">Get an estimate in seconds</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full" aria-label="Close quote calculator">
                  <X className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>

              <div className="space-y-5">
                {/* Academic Level */}
                <div>
                  <Label className="text-sm font-medium flex items-center gap-2 mb-2">
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                    Academic Level
                  </Label>
                  <Select value={academicLevel} onValueChange={setAcademicLevel}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {academicLevels.map(level => (
                        <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Service Type */}
                <div>
                  <Label className="text-sm font-medium flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    Service Type
                  </Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map(service => (
                        <SelectItem key={service.value} value={service.value}>{service.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Page Count (if applicable) */}
                {selectedService?.perPage && (
                  <div>
                    <Label className="text-sm font-medium mb-2 flex items-center justify-between">
                      <span>Estimated Pages</span>
                      <span className="text-primary font-bold">{pageCount[0]} pages</span>
                    </Label>
                    <Slider
                      value={pageCount}
                      onValueChange={setPageCount}
                      min={10}
                      max={300}
                      step={5}
                      className="mt-3"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>10 pages</span>
                      <span>300 pages</span>
                    </div>
                  </div>
                )}

                {/* Urgency */}
                <div>
                  <Label className="text-sm font-medium flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    Delivery Timeline
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {urgencyLevels.map(urg => (
                      <button
                        key={urg.value}
                        onClick={() => setUrgency(urg.value)}
                        className={`relative p-3 rounded-lg border text-left transition-all ${
                          urgency === urg.value
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="text-sm font-medium">{urg.label}</span>
                        {urg.discount && (
                          <span className={`absolute -top-2 -right-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                            urg.discount === "Best Value" 
                              ? "bg-green-500/10 text-green-600" 
                              : "bg-amber-500/10 text-amber-600"
                          }`}>
                            {urg.discount}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quote Result */}
                <motion.div
                  key={`${academicLevel}-${serviceType}-${urgency}-${pageCount[0]}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-5 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20"
                >
                  <p className="text-sm text-muted-foreground mb-2">Estimated Investment</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">£{quote.min.toLocaleString()}</span>
                    <span className="text-muted-foreground">–</span>
                    <span className="text-2xl font-semibold text-foreground">£{quote.max.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Final price depends on specific requirements. No hidden fees.
                  </p>
                </motion.div>

                {/* CTA */}
                <Button asChild className="w-full mt-4 group" size="lg">
                  <Link to="/consultation" onClick={() => setIsOpen(false)}>
                    Get Precise Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Free consultation • No commitment required
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default InstantQuoteCalculator;
