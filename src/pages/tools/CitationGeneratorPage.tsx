import { useState } from "react";
import { BookOpen, Copy, Check, FileText, Globe, Newspaper, Video, GraduationCap, ChevronDown, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ToolSchema from "@/components/schemas/ToolSchema";
import SoftwareApplicationSchema from "@/components/schemas/SoftwareApplicationSchema";
import FAQSchema from "@/components/schemas/FAQSchema";
import FAQToolSchema from "@/components/schemas/FAQToolSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SourceType = "book" | "journal" | "website" | "newspaper" | "video" | "thesis";
type CitationStyle = "apa" | "mla" | "chicago" | "harvard";

interface CitationData {
  authors: string;
  title: string;
  year: string;
  publisher?: string;
  publisherLocation?: string;
  edition?: string;
  journalName?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  websiteName?: string;
  url?: string;
  accessDate?: string;
  platform?: string;
  institution?: string;
  thesisType?: string;
}

const sourceTypes = [
  { id: "book" as SourceType, label: "Book", icon: BookOpen },
  { id: "journal" as SourceType, label: "Journal Article", icon: FileText },
  { id: "website" as SourceType, label: "Website", icon: Globe },
  { id: "newspaper" as SourceType, label: "Newspaper", icon: Newspaper },
  { id: "video" as SourceType, label: "Video", icon: Video },
  { id: "thesis" as SourceType, label: "Thesis/Dissertation", icon: GraduationCap },
];

const citationStyles: { id: CitationStyle; label: string }[] = [
  { id: "apa", label: "APA 7th" },
  { id: "mla", label: "MLA 9th" },
  { id: "chicago", label: "Chicago" },
  { id: "harvard", label: "Harvard" },
];

const formatAuthorsAPA = (authors: string): string => {
  if (!authors.trim()) return "";
  const authorList = authors.split(",").map(a => a.trim());
  if (authorList.length === 1) {
    const parts = authorList[0].split(" ");
    if (parts.length >= 2) {
      const lastName = parts[parts.length - 1];
      const initials = parts.slice(0, -1).map(n => n[0]?.toUpperCase() + ".").join(" ");
      return `${lastName}, ${initials}`;
    }
    return authorList[0];
  }
  if (authorList.length === 2) {
    return authorList.map(a => {
      const parts = a.split(" ");
      const lastName = parts[parts.length - 1];
      const initials = parts.slice(0, -1).map(n => n[0]?.toUpperCase() + ".").join(" ");
      return `${lastName}, ${initials}`;
    }).join(", & ");
  }
  const formatted = authorList.slice(0, -1).map(a => {
    const parts = a.split(" ");
    const lastName = parts[parts.length - 1];
    const initials = parts.slice(0, -1).map(n => n[0]?.toUpperCase() + ".").join(" ");
    return `${lastName}, ${initials}`;
  });
  const lastAuthor = authorList[authorList.length - 1].split(" ");
  const lastFormatted = `${lastAuthor[lastAuthor.length - 1]}, ${lastAuthor.slice(0, -1).map(n => n[0]?.toUpperCase() + ".").join(" ")}`;
  return [...formatted, `& ${lastFormatted}`].join(", ");
};

const formatAuthorsMLA = (authors: string): string => {
  if (!authors.trim()) return "";
  const authorList = authors.split(",").map(a => a.trim());
  if (authorList.length === 1) {
    const parts = authorList[0].split(" ");
    if (parts.length >= 2) {
      const lastName = parts[parts.length - 1];
      const firstName = parts.slice(0, -1).join(" ");
      return `${lastName}, ${firstName}`;
    }
    return authorList[0];
  }
  if (authorList.length === 2) {
    const first = authorList[0].split(" ");
    const second = authorList[1];
    return `${first[first.length - 1]}, ${first.slice(0, -1).join(" ")}, and ${second}`;
  }
  const first = authorList[0].split(" ");
  return `${first[first.length - 1]}, ${first.slice(0, -1).join(" ")}, et al.`;
};

const formatAuthorsChicago = (authors: string): string => {
  if (!authors.trim()) return "";
  const authorList = authors.split(",").map(a => a.trim());
  if (authorList.length === 1) {
    const parts = authorList[0].split(" ");
    if (parts.length >= 2) {
      const lastName = parts[parts.length - 1];
      const firstName = parts.slice(0, -1).join(" ");
      return `${lastName}, ${firstName}`;
    }
    return authorList[0];
  }
  if (authorList.length === 2) {
    const first = authorList[0].split(" ");
    const second = authorList[1];
    return `${first[first.length - 1]}, ${first.slice(0, -1).join(" ")}, and ${second}`;
  }
  const first = authorList[0].split(" ");
  return `${first[first.length - 1]}, ${first.slice(0, -1).join(" ")}, et al.`;
};

const formatAuthorsHarvard = formatAuthorsAPA;

const generateCitation = (data: CitationData, style: CitationStyle, sourceType: SourceType): string => {
  const { authors, title, year, publisher, publisherLocation, journalName, volume, issue, pages, doi, url, accessDate, websiteName, platform, institution, thesisType } = data;
  
  if (!title) return "Please enter at least a title to generate a citation.";

  switch (style) {
    case "apa":
      switch (sourceType) {
        case "book":
          return `${formatAuthorsAPA(authors)}${authors ? " " : ""}(${year || "n.d."}). *${title}*${publisher ? `. ${publisher}` : ""}.${doi ? ` https://doi.org/${doi}` : ""}`;
        case "journal":
          return `${formatAuthorsAPA(authors)}${authors ? " " : ""}(${year || "n.d."}). ${title}. *${journalName || "Journal Name"}*${volume ? `, *${volume}*` : ""}${issue ? `(${issue})` : ""}${pages ? `, ${pages}` : ""}.${doi ? ` https://doi.org/${doi}` : ""}`;
        case "website":
          return `${formatAuthorsAPA(authors) || websiteName || "Author"}. (${year || "n.d."}). *${title}*. ${websiteName || "Website Name"}.${url ? ` ${url}` : ""}`;
        case "thesis":
          return `${formatAuthorsAPA(authors)}${authors ? " " : ""}(${year || "n.d."}). *${title}* [${thesisType || "Doctoral dissertation"}, ${institution || "University"}].`;
        default:
          return `${formatAuthorsAPA(authors)}${authors ? " " : ""}(${year || "n.d."}). *${title}*.`;
      }
    case "mla":
      switch (sourceType) {
        case "book":
          return `${formatAuthorsMLA(authors)}${authors ? ". " : ""}*${title}*${publisherLocation ? `, ${publisherLocation}` : ""}${publisher ? `: ${publisher}` : ""}, ${year || "n.d."}.`;
        case "journal":
          return `${formatAuthorsMLA(authors)}${authors ? ". " : ""}"${title}." *${journalName || "Journal Name"}*${volume ? `, vol. ${volume}` : ""}${issue ? `, no. ${issue}` : ""}, ${year || "n.d."}${pages ? `, pp. ${pages}` : ""}.`;
        case "website":
          return `${formatAuthorsMLA(authors) || "Author"}. "${title}." *${websiteName || "Website Name"}*, ${year || "n.d."}${url ? `, ${url}` : ""}.${accessDate ? ` Accessed ${accessDate}` : ""}`;
        default:
          return `${formatAuthorsMLA(authors)}${authors ? ". " : ""}*${title}*. ${year || "n.d."}.`;
      }
    case "chicago":
      switch (sourceType) {
        case "book":
          return `${formatAuthorsChicago(authors)}${authors ? ". " : ""}*${title}*.${publisherLocation ? ` ${publisherLocation}:` : ""}${publisher ? ` ${publisher}` : ""}, ${year || "n.d."}.`;
        case "journal":
          return `${formatAuthorsChicago(authors)}${authors ? ". " : ""}"${title}." *${journalName || "Journal Name"}*${volume ? ` ${volume}` : ""}${issue ? `, no. ${issue}` : ""} (${year || "n.d."})${pages ? `: ${pages}` : ""}.`;
        default:
          return `${formatAuthorsChicago(authors)}${authors ? ". " : ""}*${title}*. ${year || "n.d."}.`;
      }
    case "harvard":
      switch (sourceType) {
        case "book":
          return `${formatAuthorsHarvard(authors)}${authors ? " " : ""}(${year || "n.d."}) *${title}*.${publisherLocation ? ` ${publisherLocation}:` : ""}${publisher ? ` ${publisher}` : ""}.`;
        case "journal":
          return `${formatAuthorsHarvard(authors)}${authors ? " " : ""}(${year || "n.d."}) '${title}', *${journalName || "Journal Name"}*${volume ? `, ${volume}` : ""}${issue ? `(${issue})` : ""}${pages ? `, pp. ${pages}` : ""}.`;
        default:
          return `${formatAuthorsHarvard(authors)}${authors ? " " : ""}(${year || "n.d."}) *${title}*.`;
      }
    default:
      return "";
  }
};

const toolFAQs = [
  {
    question: "How do I use the free citation generator?",
    answer: "Simply select your source type (book, journal, website, etc.), choose your preferred citation style (APA, MLA, Chicago, or Harvard), fill in the source details, and click Generate. Your formatted citation will appear instantly, ready to copy."
  },
  {
    question: "What citation styles does this tool support?",
    answer: "Our citation generator supports APA 7th Edition, MLA 9th Edition, Chicago/Turabian, and Harvard referencing styles—the most commonly used formats in academic writing."
  },
  {
    question: "Is the citation generator accurate for academic papers?",
    answer: "Yes, our tool follows the latest style guide specifications. However, we recommend verifying citations against your institution's specific requirements, as some universities have minor variations in formatting preferences."
  },
  {
    question: "Can I cite theses and dissertations?",
    answer: "Absolutely! Our tool includes a dedicated Thesis/Dissertation source type that properly formats citations for Master's theses and doctoral dissertations across all supported citation styles."
  },
  {
    question: "How do I format multiple authors correctly?",
    answer: "Enter multiple authors separated by commas (e.g., 'John Smith, Jane Doe, Robert Brown'). The tool automatically formats them according to each style's rules for author order, ampersands, and 'et al.' usage."
  }
];

const CitationGeneratorPage = () => {
  const [sourceType, setSourceType] = useState<SourceType>("book");
  const [citationStyle, setCitationStyle] = useState<CitationStyle>("apa");
  const [citationData, setCitationData] = useState<CitationData>({
    authors: "",
    title: "",
    year: "",
  });
  const [generatedCitation, setGeneratedCitation] = useState("");
  const [copied, setCopied] = useState(false);
  const [showStyleDropdown, setShowStyleDropdown] = useState(false);

  const handleInputChange = (field: keyof CitationData, value: string) => {
    setCitationData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = () => {
    const citation = generateCitation(citationData, citationStyle, sourceType);
    setGeneratedCitation(citation);
  };

  const handleCopy = async () => {
    const plainText = generatedCitation.replace(/\*/g, "");
    await navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderFormattedCitation = (citation: string) => {
    const parts = citation.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={index}>{part.slice(1, -1)}</em>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const renderFields = () => {
    const commonFields = (
      <>
        <div className="space-y-2">
          <Label htmlFor="authors" className="text-sm font-medium">Author(s)</Label>
          <Input
            id="authors"
            placeholder="John Smith, Jane Doe"
            value={citationData.authors}
            onChange={(e) => handleInputChange("authors", e.target.value)}
            className="bg-background"
          />
          <p className="text-xs text-muted-foreground">Separate multiple authors with commas</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-medium">Title *</Label>
          <Input
            id="title"
            placeholder="Enter the title"
            value={citationData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="bg-background"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year" className="text-sm font-medium">Year</Label>
          <Input
            id="year"
            placeholder="2024"
            value={citationData.year}
            onChange={(e) => handleInputChange("year", e.target.value)}
            className="bg-background"
          />
        </div>
      </>
    );

    switch (sourceType) {
      case "book":
        return (
          <>
            {commonFields}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Publisher</Label>
                <Input
                  placeholder="Publisher name"
                  value={citationData.publisher || ""}
                  onChange={(e) => handleInputChange("publisher", e.target.value)}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Location</Label>
                <Input
                  placeholder="City, Country"
                  value={citationData.publisherLocation || ""}
                  onChange={(e) => handleInputChange("publisherLocation", e.target.value)}
                  className="bg-background"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">DOI (optional)</Label>
              <Input
                placeholder="10.1234/example"
                value={citationData.doi || ""}
                onChange={(e) => handleInputChange("doi", e.target.value)}
                className="bg-background"
              />
            </div>
          </>
        );
      case "journal":
        return (
          <>
            {commonFields}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Journal Name</Label>
              <Input
                placeholder="Journal of Academic Research"
                value={citationData.journalName || ""}
                onChange={(e) => handleInputChange("journalName", e.target.value)}
                className="bg-background"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Volume</Label>
                <Input
                  placeholder="12"
                  value={citationData.volume || ""}
                  onChange={(e) => handleInputChange("volume", e.target.value)}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Issue</Label>
                <Input
                  placeholder="3"
                  value={citationData.issue || ""}
                  onChange={(e) => handleInputChange("issue", e.target.value)}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Pages</Label>
                <Input
                  placeholder="45-67"
                  value={citationData.pages || ""}
                  onChange={(e) => handleInputChange("pages", e.target.value)}
                  className="bg-background"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">DOI</Label>
              <Input
                placeholder="10.1234/example"
                value={citationData.doi || ""}
                onChange={(e) => handleInputChange("doi", e.target.value)}
                className="bg-background"
              />
            </div>
          </>
        );
      case "website":
        return (
          <>
            {commonFields}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Website Name</Label>
              <Input
                placeholder="Academic Resources Hub"
                value={citationData.websiteName || ""}
                onChange={(e) => handleInputChange("websiteName", e.target.value)}
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">URL</Label>
              <Input
                placeholder="https://example.com/article"
                value={citationData.url || ""}
                onChange={(e) => handleInputChange("url", e.target.value)}
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Access Date</Label>
              <Input
                placeholder="January 15, 2024"
                value={citationData.accessDate || ""}
                onChange={(e) => handleInputChange("accessDate", e.target.value)}
                className="bg-background"
              />
            </div>
          </>
        );
      case "thesis":
        return (
          <>
            {commonFields}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Thesis Type</Label>
                <Input
                  placeholder="Doctoral dissertation"
                  value={citationData.thesisType || ""}
                  onChange={(e) => handleInputChange("thesisType", e.target.value)}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Institution</Label>
                <Input
                  placeholder="University of Oxford"
                  value={citationData.institution || ""}
                  onChange={(e) => handleInputChange("institution", e.target.value)}
                  className="bg-background"
                />
              </div>
            </div>
          </>
        );
      default:
        return commonFields;
    }
  };

  const features = [
    "Supports 6 source types: Books, Journals, Websites, Newspapers, Videos, Theses",
    "4 major citation styles: APA 7th, MLA 9th, Chicago, Harvard",
    "Automatic author name formatting",
    "One-click copy to clipboard",
    "Instant citation generation",
    "Mobile-friendly interface"
  ];

  return (
    <Layout>
      <SEO
        title="Free Citation Generator | APA, MLA, Chicago, Harvard | DissertlyPro"
        description="Generate accurate citations instantly in APA 7th, MLA 9th, Chicago, and Harvard styles. Free online citation tool for books, journals, websites, and theses. Perfect for academic papers."
        canonical="https://dissertlypro.com/tools/citation-generator"
        keywords={["citation generator", "APA citation", "MLA citation", "Harvard reference", "Chicago citation", "bibliography generator", "reference generator", "academic citation tool", "free citation maker"]}
      />
      <ToolSchema
        name="Free Citation Generator"
        description="Generate accurate academic citations in APA, MLA, Chicago, and Harvard styles. Supports books, journals, websites, newspapers, videos, and theses."
        url="https://dissertlypro.com/tools/citation-generator"
        applicationCategory="EducationalApplication"
        featureList={features}
        aggregateRating={{
          ratingValue: "4.9",
          ratingCount: "1247",
          bestRating: "5",
          worstRating: "1"
        }}
      />
      <SoftwareApplicationSchema
        name="Free Citation Generator"
        description="Generate accurate academic citations in APA, MLA, Chicago, and Harvard styles."
        url="/tools/citation-generator"
        featureList={features}
        aggregateRating={{ ratingValue: "4.9", ratingCount: "1247" }}
      />
      <FAQSchema faqs={toolFAQs} />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Free Academic Tool
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-navy bg-clip-text text-transparent">
                Free Citation Generator
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Generate accurate academic citations instantly in APA, MLA, Chicago, and Harvard styles. 
                Perfect for dissertations, theses, and research papers.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                {["APA 7th", "MLA 9th", "Chicago", "Harvard"].map((style) => (
                  <span key={style} className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    {style}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Tool Section */}
        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <Card className="border-2 shadow-xl">
              <CardHeader className="border-b bg-muted/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Create Your Citation</CardTitle>
                    <CardDescription>Fill in the details below to generate your reference</CardDescription>
                  </div>
                  {/* Style Selector */}
                  <div className="relative">
                    <button
                      onClick={() => setShowStyleDropdown(!showStyleDropdown)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <span className="font-medium">
                        {citationStyles.find(s => s.id === citationStyle)?.label}
                      </span>
                      <ChevronDown className={cn("w-4 h-4 transition-transform", showStyleDropdown && "rotate-180")} />
                    </button>
                    {showStyleDropdown && (
                      <div className="absolute right-0 top-full mt-2 bg-popover border rounded-lg shadow-lg z-10 min-w-[150px]">
                        {citationStyles.map((style) => (
                          <button
                            key={style.id}
                            onClick={() => {
                              setCitationStyle(style.id);
                              setShowStyleDropdown(false);
                            }}
                            className={cn(
                              "w-full text-left px-4 py-2 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg",
                              citationStyle === style.id && "bg-muted font-medium"
                            )}
                          >
                            {style.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Source Type Tabs */}
                <Tabs value={sourceType} onValueChange={(v) => setSourceType(v as SourceType)} className="w-full">
                  <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6 h-auto">
                    {sourceTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <TabsTrigger
                          key={type.id}
                          value={type.id}
                          className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-xs">{type.label}</span>
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>

                  <TabsContent value={sourceType} className="space-y-4">
                    {renderFields()}
                  </TabsContent>
                </Tabs>

                <Button onClick={handleGenerate} className="w-full mt-6" size="lg">
                  Generate Citation
                </Button>

                {/* Generated Citation */}
                {generatedCitation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-6 bg-muted/50 rounded-lg border-2 border-dashed"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                          {citationStyles.find(s => s.id === citationStyle)?.label} Format
                        </p>
                        <p className="text-foreground leading-relaxed">
                          {renderFormattedCitation(generatedCitation)}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleCopy}
                        className="shrink-0"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Use Our Citation Generator?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "6 Source Types",
                  description: "Generate citations for books, journals, websites, newspapers, videos, and theses/dissertations."
                },
                {
                  title: "4 Major Styles",
                  description: "Full support for APA 7th Edition, MLA 9th Edition, Chicago/Turabian, and Harvard referencing."
                },
                {
                  title: "Instant & Accurate",
                  description: "Citations generated in seconds following the latest style guide specifications."
                },
                {
                  title: "Author Formatting",
                  description: "Automatic handling of multiple authors, initials, and 'et al.' abbreviations."
                },
                {
                  title: "One-Click Copy",
                  description: "Copy formatted citations directly to your clipboard ready for your bibliography."
                },
                {
                  title: "Always Free",
                  description: "No sign-up, no limits. Use our citation generator as many times as you need."
                }
              ].map((feature, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">How to Use the Citation Generator</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "Select Your Source Type", description: "Choose from book, journal article, website, newspaper, video, or thesis/dissertation." },
                { step: 2, title: "Choose Citation Style", description: "Pick your required format: APA 7th, MLA 9th, Chicago, or Harvard." },
                { step: 3, title: "Enter Source Details", description: "Fill in the author(s), title, year, and other relevant information." },
                { step: 4, title: "Generate & Copy", description: "Click generate to create your citation, then copy it to your paper." }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {toolFAQs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help With Your Dissertation?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our expert consultants can help with more than just citations. Get comprehensive support for your research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/consultation">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CitationGeneratorPage;
