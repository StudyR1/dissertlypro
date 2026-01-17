import { useState, useEffect } from "react";
import { BookOpen, X, Copy, Check, FileText, Globe, Newspaper, Video, GraduationCap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type SourceType = "book" | "journal" | "website" | "newspaper" | "video" | "thesis";
type CitationStyle = "apa" | "mla" | "chicago" | "harvard";

interface CitationData {
  // Common fields
  authors: string;
  title: string;
  year: string;
  // Book fields
  publisher?: string;
  publisherLocation?: string;
  edition?: string;
  // Journal fields
  journalName?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  // Website fields
  websiteName?: string;
  url?: string;
  accessDate?: string;
  // Video fields
  platform?: string;
  // Thesis fields
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
  // 3+ authors
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

const formatAuthorsHarvard = (authors: string): string => {
  return formatAuthorsAPA(authors); // Harvard is similar to APA
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
    return `${first[first.length - 1]}, ${first.slice(0, -1).join(" ")}, and ${authorList[1]}`;
  }
  const first = authorList[0].split(" ");
  return `${first[first.length - 1]}, ${first.slice(0, -1).join(" ")}, et al.`;
};

const generateCitation = (data: CitationData, sourceType: SourceType, style: CitationStyle): string => {
  const { authors, title, year, publisher, publisherLocation, journalName, volume, issue, pages, doi, url, websiteName, accessDate, platform, institution, thesisType, edition } = data;

  // Book citations
  if (sourceType === "book") {
    switch (style) {
      case "apa":
        const apaEdition = edition ? ` (${edition} ed.)` : "";
        return `${formatAuthorsAPA(authors)} (${year}). <em>${title}</em>${apaEdition}. ${publisher}.`;
      case "mla":
        const mlaEdition = edition ? `, ${edition} ed.` : "";
        return `${formatAuthorsMLA(authors)}. <em>${title}</em>${mlaEdition}, ${publisher}, ${year}.`;
      case "chicago":
        const chicagoEdition = edition ? ` ${edition} ed.` : "";
        return `${formatAuthorsChicago(authors)}. <em>${title}</em>.${chicagoEdition} ${publisherLocation ? publisherLocation + ": " : ""}${publisher}, ${year}.`;
      case "harvard":
        const harvardEdition = edition ? ` ${edition} edn.` : "";
        return `${formatAuthorsHarvard(authors)} (${year}) <em>${title}</em>.${harvardEdition} ${publisherLocation ? publisherLocation + ": " : ""}${publisher}.`;
    }
  }

  // Journal citations
  if (sourceType === "journal") {
    const pageRange = pages ? `, ${pages}` : "";
    const doiStr = doi ? ` https://doi.org/${doi.replace("https://doi.org/", "")}` : "";
    
    switch (style) {
      case "apa":
        return `${formatAuthorsAPA(authors)} (${year}). ${title}. <em>${journalName}, ${volume}</em>(${issue})${pageRange}.${doiStr}`;
      case "mla":
        return `${formatAuthorsMLA(authors)}. "${title}." <em>${journalName}</em>, vol. ${volume}, no. ${issue}, ${year}, pp. ${pages}.`;
      case "chicago":
        return `${formatAuthorsChicago(authors)}. "${title}." <em>${journalName}</em> ${volume}, no. ${issue} (${year}): ${pages}.${doiStr}`;
      case "harvard":
        return `${formatAuthorsHarvard(authors)} (${year}) '${title}', <em>${journalName}</em>, ${volume}(${issue}), pp. ${pages}.${doiStr}`;
    }
  }

  // Website citations
  if (sourceType === "website") {
    const accessed = accessDate ? new Date(accessDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "";
    
    switch (style) {
      case "apa":
        return `${formatAuthorsAPA(authors)} (${year || "n.d."}). ${title}. <em>${websiteName}</em>. ${url}`;
      case "mla":
        return `${formatAuthorsMLA(authors) || `"${title}."`} <em>${websiteName}</em>, ${year}. ${url}. Accessed ${accessed}.`;
      case "chicago":
        return `${formatAuthorsChicago(authors) || websiteName}. "${title}." ${websiteName !== authors ? websiteName + ". " : ""}${accessed ? "Accessed " + accessed + ". " : ""}${url}.`;
      case "harvard":
        return `${formatAuthorsHarvard(authors) || websiteName} (${year || "n.d."}) <em>${title}</em>. Available at: ${url} (Accessed: ${accessed}).`;
    }
  }

  // Newspaper citations
  if (sourceType === "newspaper") {
    const pageStr = pages ? `, p. ${pages}` : "";
    
    switch (style) {
      case "apa":
        return `${formatAuthorsAPA(authors)} (${year}). ${title}. <em>${journalName}</em>${pageStr}. ${url || ""}`;
      case "mla":
        return `${formatAuthorsMLA(authors)}. "${title}." <em>${journalName}</em>, ${year}${pageStr}.`;
      case "chicago":
        return `${formatAuthorsChicago(authors)}. "${title}." <em>${journalName}</em>, ${year}.`;
      case "harvard":
        return `${formatAuthorsHarvard(authors)} (${year}) '${title}', <em>${journalName}</em>${pageStr}.`;
    }
  }

  // Video citations
  if (sourceType === "video") {
    switch (style) {
      case "apa":
        return `${authors || "Unknown"} (${year}). <em>${title}</em> [Video]. ${platform}. ${url}`;
      case "mla":
        return `"${title}." <em>${platform}</em>, uploaded by ${authors}, ${year}, ${url}.`;
      case "chicago":
        return `${authors || platform}. "${title}." ${platform}. Video, ${year}. ${url}.`;
      case "harvard":
        return `${authors || platform} (${year}) <em>${title}</em> [Video]. Available at: ${url}.`;
    }
  }

  // Thesis citations
  if (sourceType === "thesis") {
    const type = thesisType || "Doctoral dissertation";
    
    switch (style) {
      case "apa":
        return `${formatAuthorsAPA(authors)} (${year}). <em>${title}</em> [${type}, ${institution}].`;
      case "mla":
        return `${formatAuthorsMLA(authors)}. "${title}." ${type}, ${institution}, ${year}.`;
      case "chicago":
        return `${formatAuthorsChicago(authors)}. "${title}." ${type}, ${institution}, ${year}.`;
      case "harvard":
        return `${formatAuthorsHarvard(authors)} (${year}) <em>${title}</em>. ${type}. ${institution}.`;
    }
  }

  return "";
};

const CitationGenerator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sourceType, setSourceType] = useState<SourceType>("book");
  const [citationStyle, setCitationStyle] = useState<CitationStyle>("apa");
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState<CitationData>({
    authors: "",
    title: "",
    year: "",
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-citation-generator', handleOpen);
    return () => window.removeEventListener('open-citation-generator', handleOpen);
  }, []);

  const updateField = (field: keyof CitationData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const citation = generateCitation(data, sourceType, citationStyle);

  const copyToClipboard = async () => {
    // Strip HTML tags for plain text copy
    const plainText = citation.replace(/<\/?em>/g, "");
    await navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setData({
      authors: "",
      title: "",
      year: "",
    });
  };

  const renderFields = () => {
    const commonFields = (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="authors" className="text-xs font-medium">
              Author(s) <span className="text-muted-foreground">(comma-separated)</span>
            </Label>
            <Input
              id="authors"
              placeholder="John Smith, Jane Doe"
              value={data.authors}
              onChange={(e) => updateField("authors", e.target.value)}
              className="mt-1 text-sm"
              maxLength={500}
            />
          </div>
          <div>
            <Label htmlFor="year" className="text-xs font-medium">Year</Label>
            <Input
              id="year"
              placeholder="2024"
              value={data.year}
              onChange={(e) => updateField("year", e.target.value.replace(/\D/g, "").slice(0, 4))}
              className="mt-1 text-sm"
              maxLength={4}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="title" className="text-xs font-medium">Title</Label>
          <Input
            id="title"
            placeholder="Enter the title..."
            value={data.title}
            onChange={(e) => updateField("title", e.target.value)}
            className="mt-1 text-sm"
            maxLength={500}
          />
        </div>
      </>
    );

    switch (sourceType) {
      case "book":
        return (
          <>
            {commonFields}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="publisher" className="text-xs font-medium">Publisher</Label>
                <Input
                  id="publisher"
                  placeholder="Oxford University Press"
                  value={data.publisher || ""}
                  onChange={(e) => updateField("publisher", e.target.value)}
                  className="mt-1 text-sm"
                  maxLength={200}
                />
              </div>
              <div>
                <Label htmlFor="publisherLocation" className="text-xs font-medium">Location <span className="text-muted-foreground">(optional)</span></Label>
                <Input
                  id="publisherLocation"
                  placeholder="New York, NY"
                  value={data.publisherLocation || ""}
                  onChange={(e) => updateField("publisherLocation", e.target.value)}
                  className="mt-1 text-sm"
                  maxLength={100}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="edition" className="text-xs font-medium">Edition <span className="text-muted-foreground">(optional)</span></Label>
              <Input
                id="edition"
                placeholder="2nd"
                value={data.edition || ""}
                onChange={(e) => updateField("edition", e.target.value)}
                className="mt-1 text-sm"
                maxLength={20}
              />
            </div>
          </>
        );

      case "journal":
        return (
          <>
            {commonFields}
            <div>
              <Label htmlFor="journalName" className="text-xs font-medium">Journal Name</Label>
              <Input
                id="journalName"
                placeholder="Journal of Academic Research"
                value={data.journalName || ""}
                onChange={(e) => updateField("journalName", e.target.value)}
                className="mt-1 text-sm"
                maxLength={200}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label htmlFor="volume" className="text-xs font-medium">Volume</Label>
                <Input
                  id="volume"
                  placeholder="12"
                  value={data.volume || ""}
                  onChange={(e) => updateField("volume", e.target.value)}
                  className="mt-1 text-sm"
                  maxLength={10}
                />
              </div>
              <div>
                <Label htmlFor="issue" className="text-xs font-medium">Issue</Label>
                <Input
                  id="issue"
                  placeholder="3"
                  value={data.issue || ""}
                  onChange={(e) => updateField("issue", e.target.value)}
                  className="mt-1 text-sm"
                  maxLength={10}
                />
              </div>
              <div>
                <Label htmlFor="pages" className="text-xs font-medium">Pages</Label>
                <Input
                  id="pages"
                  placeholder="45-67"
                  value={data.pages || ""}
                  onChange={(e) => updateField("pages", e.target.value)}
                  className="mt-1 text-sm"
                  maxLength={20}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="doi" className="text-xs font-medium">DOI <span className="text-muted-foreground">(optional)</span></Label>
              <Input
                id="doi"
                placeholder="10.1000/xyz123"
                value={data.doi || ""}
                onChange={(e) => updateField("doi", e.target.value)}
                className="mt-1 text-sm"
                maxLength={100}
              />
            </div>
          </>
        );

      case "website":
        return (
          <>
            {commonFields}
            <div>
              <Label htmlFor="websiteName" className="text-xs font-medium">Website Name</Label>
              <Input
                id="websiteName"
                placeholder="BBC News"
                value={data.websiteName || ""}
                onChange={(e) => updateField("websiteName", e.target.value)}
                className="mt-1 text-sm"
                maxLength={200}
              />
            </div>
            <div>
              <Label htmlFor="url" className="text-xs font-medium">URL</Label>
              <Input
                id="url"
                placeholder="https://example.com/article"
                value={data.url || ""}
                onChange={(e) => updateField("url", e.target.value)}
                className="mt-1 text-sm"
                maxLength={500}
              />
            </div>
            <div>
              <Label htmlFor="accessDate" className="text-xs font-medium">Access Date</Label>
              <Input
                id="accessDate"
                type="date"
                value={data.accessDate || ""}
                onChange={(e) => updateField("accessDate", e.target.value)}
                className="mt-1 text-sm"
              />
            </div>
          </>
        );

      case "newspaper":
        return (
          <>
            {commonFields}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="journalName" className="text-xs font-medium">Newspaper Name</Label>
                <Input
                  id="journalName"
                  placeholder="The New York Times"
                  value={data.journalName || ""}
                  onChange={(e) => updateField("journalName", e.target.value)}
                  className="mt-1 text-sm"
                  maxLength={200}
                />
              </div>
              <div>
                <Label htmlFor="pages" className="text-xs font-medium">Page(s) <span className="text-muted-foreground">(optional)</span></Label>
                <Input
                  id="pages"
                  placeholder="A1"
                  value={data.pages || ""}
                  onChange={(e) => updateField("pages", e.target.value)}
                  className="mt-1 text-sm"
                  maxLength={20}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="url" className="text-xs font-medium">URL <span className="text-muted-foreground">(if online)</span></Label>
              <Input
                id="url"
                placeholder="https://nytimes.com/article"
                value={data.url || ""}
                onChange={(e) => updateField("url", e.target.value)}
                className="mt-1 text-sm"
                maxLength={500}
              />
            </div>
          </>
        );

      case "video":
        return (
          <>
            {commonFields}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="platform" className="text-xs font-medium">Platform</Label>
                <Input
                  id="platform"
                  placeholder="YouTube"
                  value={data.platform || ""}
                  onChange={(e) => updateField("platform", e.target.value)}
                  className="mt-1 text-sm"
                  maxLength={100}
                />
              </div>
              <div>
                <Label htmlFor="url" className="text-xs font-medium">URL</Label>
                <Input
                  id="url"
                  placeholder="https://youtube.com/watch?v=..."
                  value={data.url || ""}
                  onChange={(e) => updateField("url", e.target.value)}
                  className="mt-1 text-sm"
                  maxLength={500}
                />
              </div>
            </div>
          </>
        );

      case "thesis":
        return (
          <>
            {commonFields}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="institution" className="text-xs font-medium">Institution</Label>
                <Input
                  id="institution"
                  placeholder="Harvard University"
                  value={data.institution || ""}
                  onChange={(e) => updateField("institution", e.target.value)}
                  className="mt-1 text-sm"
                  maxLength={200}
                />
              </div>
              <div>
                <Label htmlFor="thesisType" className="text-xs font-medium">Type</Label>
                <Input
                  id="thesisType"
                  placeholder="Doctoral dissertation"
                  value={data.thesisType || ""}
                  onChange={(e) => updateField("thesisType", e.target.value)}
                  className="mt-1 text-sm"
                  maxLength={50}
                />
              </div>
            </div>
          </>
        );
    }
  };

  return (
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
            className="fixed left-1/2 top-4 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto p-6 rounded-2xl bg-card border border-border shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="citation-generator-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 id="citation-generator-title" className="text-lg font-semibold">Citation Generator</h3>
                  <p className="text-xs text-muted-foreground">Create formatted references instantly</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full" aria-label="Close citation generator">
                <X className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="space-y-5">
              {/* Source Type Selection */}
              <div>
                <Label className="text-xs font-medium mb-2 block">Source Type</Label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {sourceTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => {
                        setSourceType(type.id);
                        resetForm();
                      }}
                      className={cn(
                        "flex flex-col items-center gap-1 p-2.5 rounded-lg border transition-all text-center",
                        sourceType === type.id
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <type.icon className="w-4 h-4" />
                      <span className="text-[10px] font-medium leading-tight">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Citation Style */}
              <Tabs value={citationStyle} onValueChange={(v) => setCitationStyle(v as CitationStyle)}>
                <TabsList className="w-full grid grid-cols-4">
                  {citationStyles.map((style) => (
                    <TabsTrigger key={style.id} value={style.id} className="text-xs">
                      {style.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* Input Fields */}
              <div className="space-y-3">
                {renderFields()}
              </div>

              {/* Generated Citation */}
              {(data.authors || data.title) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-muted/50 border border-border"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {citationStyles.find(s => s.id === citationStyle)?.label} Citation
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyToClipboard}
                      className="h-7 text-xs gap-1.5"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-green-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <p 
                    className="text-sm leading-relaxed text-foreground"
                    dangerouslySetInnerHTML={{ __html: citation }}
                  />
                </motion.div>
              )}

              {/* Tips */}
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-primary">Tip:</span> Enter author names as "First Last" separated by commas. 
                  The generator will format them according to each citation style.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CitationGenerator;
