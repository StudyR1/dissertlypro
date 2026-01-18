import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Search,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Copy,
  Download,
  ExternalLink,
  Building2,
  Globe,
  FileText,
  Info,
  Sparkles
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ToolSchema from "@/components/schemas/ToolSchema";
import FAQToolSchema, { toolFAQs } from "@/components/schemas/FAQToolSchema";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  aiPolicies,
  defaultPolicies,
  getAllCountries,
  getUniversitiesByCountry,
  getDisclosureTemplate,
  aiUseTypeLabels,
  policyLevelInfo,
  type AIPolicy,
  type AIUseType
} from "@/data/aiPolicies";

const aiUsePolicyFAQs = [
  {
    question: "How accurate is this AI policy checker?",
    answer: "Our database is compiled from publicly available university policies and is updated regularly. However, policies change frequently, so we recommend verifying with your institution's official guidelines."
  },
  {
    question: "What if my university isn't in the database?",
    answer: "We provide regional default policies based on common patterns in that country. These represent typical expectations but may not reflect your specific institution's rules."
  },
  {
    question: "Can I use the disclosure template directly?",
    answer: "The template provides a starting point, but you should customize it based on your specific use case and verify it meets your institution's requirements."
  },
  {
    question: "How often is the policy database updated?",
    answer: "We review and update policies quarterly, with priority updates when major universities announce policy changes."
  },
  {
    question: "What should I do if the policy says AI is prohibited?",
    answer: "If your intended use is prohibited, refrain from using AI for that purpose. You may want to discuss alternatives with your supervisor or consult your institution's academic integrity office."
  }
];

const AIPolicyCheckerPage = () => {
  const { toast } = useToast();
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedUniversity, setSelectedUniversity] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedUses, setSelectedUses] = useState<AIUseType[]>([]);
  const [showResults, setShowResults] = useState(false);

  const countries = getAllCountries();
  
  const universities = useMemo(() => {
    if (!selectedCountry) return [];
    return getUniversitiesByCountry(selectedCountry);
  }, [selectedCountry]);

  const filteredUniversities = useMemo(() => {
    if (!searchQuery) return universities;
    return universities.filter(u => 
      u.universityName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [universities, searchQuery]);

  const selectedPolicy: AIPolicy | null = useMemo(() => {
    if (selectedUniversity) {
      return aiPolicies.find(p => p.universityName === selectedUniversity) || null;
    }
    return null;
  }, [selectedUniversity]);

  const handleUseToggle = (useType: AIUseType) => {
    setSelectedUses(prev => 
      prev.includes(useType) 
        ? prev.filter(u => u !== useType)
        : [...prev, useType]
    );
  };

  const checkPolicy = () => {
    if (!selectedCountry) {
      toast({
        title: "Select a country",
        description: "Please select your country first",
        variant: "destructive"
      });
      return;
    }
    setShowResults(true);
  };

  const copyDisclosure = () => {
    if (!selectedPolicy) return;
    const template = getDisclosureTemplate(selectedPolicy, selectedUses);
    navigator.clipboard.writeText(template);
    toast({
      title: "Copied!",
      description: "Disclosure template copied to clipboard"
    });
  };

  const getUseStatus = (useType: AIUseType) => {
    if (!selectedPolicy) return "unknown";
    if (selectedPolicy.allowedUses.includes(useType)) return "allowed";
    if (selectedPolicy.prohibitedUses.includes(useType)) return "prohibited";
    return "check-required";
  };

  const resetForm = () => {
    setSelectedCountry("");
    setSelectedUniversity("");
    setSearchQuery("");
    setSelectedUses([]);
    setShowResults(false);
  };

  return (
    <Layout>
      <SEO
        title="AI Use Policy Checker | Check University AI Guidelines | DissertlyPro"
        description="Check your university's AI policy for dissertations. Find out what's allowed, required disclosure formats, and get ready-to-use acknowledgment templates for 50+ universities."
        canonical="https://dissertlypro.com/tools/ai-policy-checker"
        keywords={["university AI policy", "ChatGPT dissertation rules", "AI academic integrity", "AI disclosure template", "university AI guidelines"]}
      />
      <ToolSchema
        name="AI Use Policy Checker"
        description="Check your university's AI policy for dissertations. Find out what AI use is allowed, required disclosure formats, and get acknowledgment templates."
        url="https://dissertlypro.com/tools/ai-policy-checker"
        featureList={["50+ university policies", "Disclosure templates", "Use-by-use analysis"]}
      />
      <FAQToolSchema
        toolName="AI Use Policy Checker"
        toolUrl="https://dissertlypro.com/tools/ai-policy-checker"
        faqs={aiUsePolicyFAQs}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dissertlypro.com" },
          { name: "Free Tools", url: "https://dissertlypro.com/tools" },
          { name: "AI Policy Checker", url: "https://dissertlypro.com/tools/ai-policy-checker" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container mx-auto max-w-5xl px-4 relative">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Free Tools", href: "/tools" },
              { label: "AI Policy Checker" }
            ]}
            className="mb-6"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4" variant="secondary">
              <Shield className="w-3 h-3 mr-1" />
              50+ Universities • Updated Quarterly
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Use <span className="text-gradient-copper">Policy Checker</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your university's AI policy, check what's allowed, and generate 
              disclosure templates for your dissertation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Tool Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Find Your Policy
                  </CardTitle>
                  <CardDescription>
                    Select your university to check AI guidelines
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Country Select */}
                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Select value={selectedCountry} onValueChange={(value) => {
                      setSelectedCountry(value);
                      setSelectedUniversity("");
                      setShowResults(false);
                    }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map(country => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* University Search */}
                  {selectedCountry && (
                    <div className="space-y-2">
                      <Label>University</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="Search universities..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Select value={selectedUniversity} onValueChange={(value) => {
                        setSelectedUniversity(value);
                        setShowResults(false);
                      }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select university" />
                        </SelectTrigger>
                        <SelectContent>
                          {filteredUniversities.map(uni => (
                            <SelectItem key={uni.universityName} value={uni.universityName}>
                              {uni.universityName}
                            </SelectItem>
                          ))}
                          {filteredUniversities.length === 0 && (
                            <div className="p-2 text-sm text-muted-foreground text-center">
                              No universities found. We'll use regional defaults.
                            </div>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* AI Uses Selection */}
                  {selectedCountry && (
                    <div className="space-y-3">
                      <Label>What AI uses are you considering?</Label>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {Object.entries(aiUseTypeLabels).map(([key, label]) => (
                          <div key={key} className="flex items-center space-x-2">
                            <Checkbox
                              id={key}
                              checked={selectedUses.includes(key as AIUseType)}
                              onCheckedChange={() => handleUseToggle(key as AIUseType)}
                            />
                            <Label htmlFor={key} className="text-sm cursor-pointer">
                              {label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button onClick={checkPolicy} className="w-full" disabled={!selectedCountry}>
                    <Shield className="w-4 h-4 mr-2" />
                    Check Policy
                  </Button>

                  {showResults && (
                    <Button variant="outline" onClick={resetForm} className="w-full">
                      Start Over
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2">
              {!showResults ? (
                <Card className="h-full flex items-center justify-center min-h-[400px]">
                  <CardContent className="text-center py-12">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Check Your Policy</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                      Select your country and university to see AI policy details and get disclosure templates.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Policy Overview */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {selectedPolicy?.universityName || `${selectedCountry} Regional Default`}
                          </CardTitle>
                          <CardDescription>
                            Policy Level: {" "}
                            <Badge className={`
                              ${selectedPolicy?.policyLevel === "permissive" ? "bg-green-500" : ""}
                              ${selectedPolicy?.policyLevel === "disclosure-required" ? "bg-yellow-500" : ""}
                              ${selectedPolicy?.policyLevel === "restricted" ? "bg-orange-500" : ""}
                              ${selectedPolicy?.policyLevel === "prohibited" ? "bg-red-500" : ""}
                            `}>
                              {selectedPolicy ? policyLevelInfo[selectedPolicy.policyLevel].label : "Check Required"}
                            </Badge>
                          </CardDescription>
                        </div>
                        {selectedPolicy?.policyUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={selectedPolicy.policyUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Official Policy
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      {selectedPolicy && (
                        <p className="text-muted-foreground mb-4">
                          {policyLevelInfo[selectedPolicy.policyLevel].description}
                        </p>
                      )}
                      
                      {selectedPolicy?.disclosureRequired && (
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 flex gap-3">
                          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium text-yellow-700 dark:text-yellow-400">Disclosure Required</div>
                            <div className="text-sm text-muted-foreground">
                              Include in: {selectedPolicy.disclosureLocation.join(", ")}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Use-by-Use Analysis */}
                  {selectedUses.length > 0 && selectedPolicy && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Your Selected Uses</CardTitle>
                        <CardDescription>Analysis based on your intended AI usage</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {selectedUses.map(useType => {
                            const status = getUseStatus(useType);
                            return (
                              <div 
                                key={useType}
                                className={`flex items-center justify-between p-4 rounded-lg border ${
                                  status === "allowed" ? "bg-green-500/5 border-green-500/20" :
                                  status === "prohibited" ? "bg-red-500/5 border-red-500/20" :
                                  "bg-yellow-500/5 border-yellow-500/20"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  {status === "allowed" && <CheckCircle className="w-5 h-5 text-green-500" />}
                                  {status === "prohibited" && <XCircle className="w-5 h-5 text-red-500" />}
                                  {status === "check-required" && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                                  <span className="font-medium">{aiUseTypeLabels[useType]}</span>
                                </div>
                                <Badge variant={
                                  status === "allowed" ? "default" :
                                  status === "prohibited" ? "destructive" : "secondary"
                                }>
                                  {status === "allowed" ? "Allowed" :
                                   status === "prohibited" ? "Prohibited" : "Check Required"}
                                </Badge>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Disclosure Template */}
                  {selectedPolicy && selectedUses.length > 0 && (
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <FileText className="w-5 h-5 text-primary" />
                              Disclosure Template
                            </CardTitle>
                            <CardDescription>Customize and use in your dissertation</CardDescription>
                          </div>
                          <Button size="sm" onClick={copyDisclosure}>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
                          {getDisclosureTemplate(selectedPolicy, selectedUses)}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* All Allowed/Prohibited Uses */}
                  {selectedPolicy && (
                    <Tabs defaultValue="allowed">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="allowed">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Allowed Uses ({selectedPolicy.allowedUses.length})
                        </TabsTrigger>
                        <TabsTrigger value="prohibited">
                          <XCircle className="w-4 h-4 mr-2" />
                          Prohibited Uses ({selectedPolicy.prohibitedUses.length})
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="allowed">
                        <Card>
                          <CardContent className="pt-6">
                            <div className="grid sm:grid-cols-2 gap-3">
                              {selectedPolicy.allowedUses.map(use => (
                                <div key={use} className="flex items-center gap-2 p-3 bg-green-500/5 rounded-lg">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-sm">{aiUseTypeLabels[use]}</span>
                                </div>
                              ))}
                            </div>
                            {selectedPolicy.allowedUses.length === 0 && (
                              <p className="text-center text-muted-foreground py-4">
                                No explicitly allowed uses listed
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="prohibited">
                        <Card>
                          <CardContent className="pt-6">
                            <div className="grid sm:grid-cols-2 gap-3">
                              {selectedPolicy.prohibitedUses.map(use => (
                                <div key={use} className="flex items-center gap-2 p-3 bg-red-500/5 rounded-lg">
                                  <XCircle className="w-4 h-4 text-red-500" />
                                  <span className="text-sm">{aiUseTypeLabels[use]}</span>
                                </div>
                              ))}
                            </div>
                            {selectedPolicy.prohibitedUses.length === 0 && (
                              <p className="text-center text-muted-foreground py-4">
                                No explicitly prohibited uses listed
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  )}

                  {/* Related Resources */}
                  <Card className="bg-muted/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-4">Related Resources</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Link to="/citing-ai" className="flex items-center gap-3 p-3 bg-card rounded-lg border hover:border-primary/50 transition-colors">
                          <FileText className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium text-sm">How to Cite AI</div>
                            <div className="text-xs text-muted-foreground">APA, MLA, Chicago formats</div>
                          </div>
                          <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground" />
                        </Link>
                        <Link to="/ai-detection-guide" className="flex items-center gap-3 p-3 bg-card rounded-lg border hover:border-primary/50 transition-colors">
                          <Search className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium text-sm">AI Detection Guide</div>
                            <div className="text-xs text-muted-foreground">How Turnitin works</div>
                          </div>
                          <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Common questions about the AI Policy Checker
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {aiUsePolicyFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Expert Guidance?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our dissertation experts can help you navigate complex AI policies 
                and ensure your work meets all requirements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/consultation">
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/ai-academia">
                    Back to AI Hub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default AIPolicyCheckerPage;
