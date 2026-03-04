import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  Plus, 
  X, 
  Copy, 
  CheckCircle2, 
  Lightbulb,
  Database,
  BookOpen,
  Sparkles,
  ArrowRight,
  Info,
  Trash2
} from "lucide-react";
import { toast } from "sonner";
import ToolSchema from "@/components/schemas/ToolSchema";
import SoftwareApplicationSchema from "@/components/schemas/SoftwareApplicationSchema";

interface Concept {
  id: string;
  mainTerm: string;
  synonyms: string[];
}

const suggestedSynonyms: Record<string, string[]> = {
  // Education
  "student": ["learner", "pupil", "undergraduate", "graduate", "scholar"],
  "teacher": ["educator", "instructor", "professor", "lecturer", "faculty"],
  "learning": ["education", "instruction", "training", "pedagogy", "teaching"],
  "online": ["virtual", "remote", "distance", "e-learning", "digital"],
  "school": ["institution", "university", "college", "academy"],
  
  // Healthcare
  "patient": ["client", "individual", "participant", "subject"],
  "treatment": ["intervention", "therapy", "management", "care"],
  "disease": ["illness", "condition", "disorder", "syndrome"],
  "hospital": ["clinic", "healthcare facility", "medical center"],
  "nurse": ["nursing staff", "RN", "healthcare provider"],
  
  // Psychology
  "anxiety": ["stress", "worry", "nervousness", "apprehension"],
  "depression": ["depressive disorder", "major depression", "mood disorder"],
  "behavior": ["behaviour", "conduct", "action", "response"],
  "mental health": ["psychological health", "emotional wellbeing", "psychiatric"],
  
  // Business
  "employee": ["worker", "staff", "personnel", "workforce"],
  "manager": ["supervisor", "leader", "executive", "administrator"],
  "organization": ["organisation", "company", "firm", "enterprise"],
  "performance": ["productivity", "efficiency", "effectiveness"],
  
  // Technology
  "technology": ["digital technology", "ICT", "information technology"],
  "software": ["application", "program", "system", "platform"],
  "artificial intelligence": ["AI", "machine learning", "ML", "deep learning"],
  "social media": ["social network", "social platform", "SNS"],
};

const databaseFormats = [
  {
    name: "PubMed",
    description: "Medical and life sciences literature",
    format: "Uses MeSH terms. Combine with AND, OR, NOT. Use quotes for phrases.",
    example: '("social media"[Title/Abstract]) AND (adolescent[MeSH Terms])',
    tips: ["Use MeSH terms for precise results", "Add [Title/Abstract] for specific field searches", "Use * for truncation"]
  },
  {
    name: "Web of Science",
    description: "Multidisciplinary research database",
    format: "Uses TS= for topic search. Boolean operators in caps.",
    example: 'TS=("climate change" AND (agriculture OR farming))',
    tips: ["Use TS= for topic searches", "Use $ for truncation", "NEAR/x for proximity searches"]
  },
  {
    name: "Scopus",
    description: "Abstract and citation database",
    format: "Field codes like TITLE-ABS-KEY. Boolean operators.",
    example: 'TITLE-ABS-KEY("machine learning" AND healthcare)',
    tips: ["Use TITLE-ABS-KEY for comprehensive search", "Use {} for exact phrases", "W/n for proximity"]
  },
  {
    name: "PsycINFO",
    description: "Psychology and behavioral sciences",
    format: "Thesaurus terms available. Standard Boolean.",
    example: '(anxiety OR stress) AND (treatment OR therapy)',
    tips: ["Use Thesaurus for controlled vocabulary", "DE for exact descriptors", "Use * for truncation"]
  },
  {
    name: "ERIC",
    description: "Education research and information",
    format: "Descriptors and identifiers. Boolean operators.",
    example: '(online learning OR e-learning) AND (higher education)',
    tips: ["Use ERIC Thesaurus descriptors", "peer reviewed filter available", "Use * for truncation"]
  },
  {
    name: "Google Scholar",
    description: "Broad academic search engine",
    format: "Simple Boolean. Quotes for phrases. Minus for exclusion.",
    example: '"artificial intelligence" education -"K-12"',
    tips: ["Use quotes for exact phrases", "Use - to exclude terms", "allintitle: for title search"]
  }
];

const LiteratureSearchPage = () => {
  const [concepts, setConcepts] = useState<Concept[]>([
    { id: "1", mainTerm: "", synonyms: [] }
  ]);
  const [newSynonym, setNewSynonym] = useState<Record<string, string>>({});
  const [copiedQuery, setCopiedQuery] = useState<string | null>(null);

  const addConcept = () => {
    if (concepts.length < 5) {
      setConcepts([...concepts, { id: Date.now().toString(), mainTerm: "", synonyms: [] }]);
    }
  };

  const removeConcept = (id: string) => {
    if (concepts.length > 1) {
      setConcepts(concepts.filter(c => c.id !== id));
    }
  };

  const updateMainTerm = (id: string, value: string) => {
    setConcepts(concepts.map(c => 
      c.id === id ? { ...c, mainTerm: value } : c
    ));
  };

  const addSynonym = (conceptId: string) => {
    const synonym = newSynonym[conceptId]?.trim();
    if (synonym) {
      setConcepts(concepts.map(c => 
        c.id === conceptId 
          ? { ...c, synonyms: [...c.synonyms, synonym] }
          : c
      ));
      setNewSynonym({ ...newSynonym, [conceptId]: "" });
    }
  };

  const removeSynonym = (conceptId: string, synonym: string) => {
    setConcepts(concepts.map(c => 
      c.id === conceptId 
        ? { ...c, synonyms: c.synonyms.filter(s => s !== synonym) }
        : c
    ));
  };

  const getSuggestions = (term: string): string[] => {
    const lowerTerm = term.toLowerCase();
    return suggestedSynonyms[lowerTerm] || [];
  };

  const addSuggestedSynonym = (conceptId: string, synonym: string) => {
    const concept = concepts.find(c => c.id === conceptId);
    if (concept && !concept.synonyms.includes(synonym)) {
      setConcepts(concepts.map(c => 
        c.id === conceptId 
          ? { ...c, synonyms: [...c.synonyms, synonym] }
          : c
      ));
    }
  };

  const generateSearchQuery = (format: "standard" | "pubmed" | "scopus" = "standard"): string => {
    const validConcepts = concepts.filter(c => c.mainTerm.trim());
    
    if (validConcepts.length === 0) return "";

    const conceptStrings = validConcepts.map(concept => {
      const allTerms = [concept.mainTerm, ...concept.synonyms];
      const formattedTerms = allTerms.map(term => {
        if (term.includes(" ")) {
          return `"${term}"`;
        }
        return term;
      });
      
      if (formattedTerms.length === 1) {
        return formattedTerms[0];
      }
      return `(${formattedTerms.join(" OR ")})`;
    });

    const query = conceptStrings.join(" AND ");

    if (format === "pubmed") {
      return query.replace(/"/g, '"').replace(/\bOR\b/g, 'OR').replace(/\bAND\b/g, 'AND');
    }
    
    if (format === "scopus") {
      return `TITLE-ABS-KEY(${query})`;
    }

    return query;
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedQuery(label);
      toast.success("Search query copied to clipboard!");
      setTimeout(() => setCopiedQuery(null), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  const query = generateSearchQuery();
  const hasValidQuery = concepts.some(c => c.mainTerm.trim());

  return (
    <Layout>
      <SEO
        title="Literature Search Strategy Builder | Boolean Query Generator"
        description="Build systematic literature search queries with Boolean operators (AND, OR, NOT). Generate database-specific searches for PubMed, Scopus, Web of Science, and more. Free tool for systematic reviews."
        canonical="/tools/literature-search"
        keywords={["literature search strategy", "Boolean search", "systematic review search", "database search", "PubMed search", "Scopus query", "research search tool", "Web of Science"]}
      />
      
      <ToolSchema
        name="Literature Search Strategy Builder"
        description="Interactive tool to build systematic database search queries with Boolean operators for comprehensive literature reviews and systematic reviews."
        url="https://dissertlypro.com/tools/literature-search"
        featureList={[
          "Boolean query builder",
          "Synonym suggestions",
          "6 database formats",
          "One-click copy",
          "PubMed, Scopus, Web of Science support"
        ]}
      />
      <SoftwareApplicationSchema
        name="Literature Search Strategy Builder"
        description="Build systematic database search queries with Boolean operators."
        url="/tools/literature-search"
      />

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              <Search className="h-3 w-3 mr-1" />
              Research Tool
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Literature Search Strategy Builder
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build comprehensive database search queries with Boolean operators. 
              Add concepts, synonyms, and generate searches for PubMed, Scopus, Web of Science, and more.
            </p>
          </div>

          {/* Concept Builder */}
          <Card className="border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Step 1: Define Your Concepts
              </CardTitle>
              <CardDescription>
                Enter your main search concepts. Each concept will be combined with AND. 
                Add synonyms to broaden your search within each concept (combined with OR).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {concepts.map((concept, index) => {
                const suggestions = getSuggestions(concept.mainTerm);
                const unusedSuggestions = suggestions.filter(s => !concept.synonyms.includes(s));
                
                return (
                  <div key={concept.id} className="p-4 border rounded-lg bg-muted/30">
                    <div className="flex items-center justify-between mb-4">
                      <Label className="text-base font-medium">
                        Concept {index + 1}
                        {index > 0 && <span className="text-primary ml-2 text-sm">AND</span>}
                      </Label>
                      {concepts.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeConcept(concept.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor={`main-${concept.id}`} className="text-sm text-muted-foreground">
                          Main Term
                        </Label>
                        <Input
                          id={`main-${concept.id}`}
                          placeholder="e.g., social media, anxiety, online learning"
                          value={concept.mainTerm}
                          onChange={(e) => updateMainTerm(concept.id, e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      {/* Synonyms */}
                      <div>
                        <Label className="text-sm text-muted-foreground">
                          Synonyms & Related Terms (OR)
                        </Label>
                        <div className="flex flex-wrap gap-2 mt-2 mb-3">
                          {concept.synonyms.map((syn) => (
                            <Badge key={syn} variant="secondary" className="gap-1 pr-1">
                              {syn}
                              <button
                                onClick={() => removeSynonym(concept.id, syn)}
                                className="ml-1 hover:text-destructive"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Add synonym..."
                            value={newSynonym[concept.id] || ""}
                            onChange={(e) => setNewSynonym({ ...newSynonym, [concept.id]: e.target.value })}
                            onKeyPress={(e) => e.key === "Enter" && addSynonym(concept.id)}
                          />
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => addSynonym(concept.id)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Suggestions */}
                      {unusedSuggestions.length > 0 && (
                        <div>
                          <Label className="text-sm text-muted-foreground flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            Suggested Synonyms
                          </Label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {unusedSuggestions.map((suggestion) => (
                              <Button
                                key={suggestion}
                                variant="outline"
                                size="sm"
                                className="text-xs"
                                onClick={() => addSuggestedSynonym(concept.id, suggestion)}
                              >
                                <Plus className="h-3 w-3 mr-1" />
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {concepts.length < 5 && (
                <Button variant="outline" onClick={addConcept} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Concept (AND)
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Generated Query */}
          <Card className="border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Step 2: Your Search Query
              </CardTitle>
              <CardDescription>
                Copy your Boolean search query and paste it into your preferred database.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {hasValidQuery ? (
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg font-mono text-sm break-all">
                    {query}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      onClick={() => copyToClipboard(query, "standard")}
                      className="gap-2"
                    >
                      {copiedQuery === "standard" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      Copy Standard Query
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => copyToClipboard(generateSearchQuery("scopus"), "scopus")}
                      className="gap-2"
                    >
                      {copiedQuery === "scopus" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      Copy for Scopus
                    </Button>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex gap-2">
                      <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-blue-900 dark:text-blue-100">Search Strategy Tips</p>
                        <ul className="mt-2 space-y-1 text-blue-800 dark:text-blue-200">
                          <li>• Run your search in multiple databases for comprehensive coverage</li>
                          <li>• Apply date filters to focus on recent literature</li>
                          <li>• Use truncation (*) to capture word variations (e.g., learn* = learn, learning, learner)</li>
                          <li>• Document your search strategy for reproducibility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Enter at least one concept above to generate your search query</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Database Reference */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Step 3: Database-Specific Formatting
              </CardTitle>
              <CardDescription>
                Each database has unique syntax. Use these tips to optimize your search.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pubmed">
                <TabsList className="flex flex-wrap h-auto gap-1 mb-4">
                  {databaseFormats.map((db) => (
                    <TabsTrigger key={db.name} value={db.name.toLowerCase().replace(/\s/g, "")} className="text-xs">
                      {db.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {databaseFormats.map((db) => (
                  <TabsContent key={db.name} value={db.name.toLowerCase().replace(/\s/g, "")}>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">{db.name}</h4>
                        <p className="text-sm text-muted-foreground">{db.description}</p>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <Label className="text-xs text-muted-foreground">Example Query</Label>
                        <code className="block mt-1 text-sm font-mono">{db.example}</code>
                      </div>

                      <div>
                        <Label className="text-sm">Quick Tips</Label>
                        <ul className="mt-2 space-y-1">
                          {db.tips.map((tip, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-primary/20 bg-primary/5 mt-8">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Need help with your literature review?</p>
                    <p className="text-sm text-muted-foreground">Our experts can guide your systematic review process</p>
                  </div>
                </div>
                <Button asChild>
                  <a href="/consultation">
                    Book Free Consultation
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default LiteratureSearchPage;
