import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Plus, 
  X, 
  Download, 
  Tag, 
  Search,
  Trash2,
  Copy,
  CheckCircle2,
  FileText,
  Filter,
  SortAsc,
  Edit2,
  Save
} from "lucide-react";
import { toast } from "sonner";
import ToolSchema from "@/components/schemas/ToolSchema";
import SoftwareApplicationSchema from "@/components/schemas/SoftwareApplicationSchema";
import { motion } from "framer-motion";

interface Reference {
  id: string;
  type: "journal" | "book" | "website" | "conference" | "thesis" | "other";
  title: string;
  authors: string;
  year: string;
  journal?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  publisher?: string;
  tags: string[];
  notes: string;
  createdAt: number;
}

const sourceTypes = [
  { value: "journal", label: "Journal Article" },
  { value: "book", label: "Book" },
  { value: "website", label: "Website" },
  { value: "conference", label: "Conference Paper" },
  { value: "thesis", label: "Thesis/Dissertation" },
  { value: "other", label: "Other" },
];

const defaultReference: Omit<Reference, "id" | "createdAt"> = {
  type: "journal",
  title: "",
  authors: "",
  year: "",
  journal: "",
  volume: "",
  issue: "",
  pages: "",
  doi: "",
  url: "",
  publisher: "",
  tags: [],
  notes: "",
};

const ReferenceManagerPage = () => {
  const [references, setReferences] = useState<Reference[]>([]);
  const [newRef, setNewRef] = useState(defaultReference);
  const [newTag, setNewTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTag, setFilterTag] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("");
  const [sortBy, setSortBy] = useState<"date" | "title" | "year">("date");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("dissertly-references");
    if (saved) {
      try {
        setReferences(JSON.parse(saved));
      } catch {
        console.error("Failed to load references");
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (references.length > 0) {
      localStorage.setItem("dissertly-references", JSON.stringify(references));
    }
  }, [references]);

  const addTag = () => {
    const tag = newTag.trim().toLowerCase();
    if (tag && !newRef.tags.includes(tag)) {
      setNewRef({ ...newRef, tags: [...newRef.tags, tag] });
      setNewTag("");
    }
  };

  const removeTag = (tag: string) => {
    setNewRef({ ...newRef, tags: newRef.tags.filter(t => t !== tag) });
  };

  const addReference = () => {
    if (!newRef.title.trim() || !newRef.authors.trim()) {
      toast.error("Title and authors are required");
      return;
    }

    const reference: Reference = {
      ...newRef,
      id: Date.now().toString(),
      createdAt: Date.now(),
    };

    setReferences([reference, ...references]);
    setNewRef(defaultReference);
    toast.success("Reference added successfully!");
  };

  const updateReference = (id: string, updates: Partial<Reference>) => {
    setReferences(references.map(ref => 
      ref.id === id ? { ...ref, ...updates } : ref
    ));
  };

  const deleteReference = (id: string) => {
    setReferences(references.filter(ref => ref.id !== id));
    toast.success("Reference deleted");
  };

  const getAllTags = (): string[] => {
    const tags = new Set<string>();
    references.forEach(ref => ref.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  };

  const filteredReferences = references
    .filter(ref => {
      const matchesSearch = !searchQuery || 
        ref.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ref.authors.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !filterTag || ref.tags.includes(filterTag);
      const matchesType = !filterType || ref.type === filterType;
      return matchesSearch && matchesTag && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === "date") return b.createdAt - a.createdAt;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "year") return (b.year || "").localeCompare(a.year || "");
      return 0;
    });

  const formatAPA = (ref: Reference): string => {
    let citation = `${ref.authors} (${ref.year || "n.d."}).`;
    citation += ` ${ref.title}.`;
    if (ref.journal) citation += ` *${ref.journal}*`;
    if (ref.volume) citation += `, ${ref.volume}`;
    if (ref.issue) citation += `(${ref.issue})`;
    if (ref.pages) citation += `, ${ref.pages}`;
    citation += ".";
    if (ref.doi) citation += ` https://doi.org/${ref.doi}`;
    else if (ref.url) citation += ` ${ref.url}`;
    return citation;
  };

  const generateBibTeX = (): string => {
    return filteredReferences.map(ref => {
      const key = `${ref.authors.split(",")[0]?.trim().split(" ").pop() || "unknown"}${ref.year || "nd"}`;
      let entry = ref.type === "journal" ? "@article" : 
                  ref.type === "book" ? "@book" : 
                  ref.type === "conference" ? "@inproceedings" :
                  ref.type === "thesis" ? "@phdthesis" : "@misc";
      
      let bibtex = `${entry}{${key},\n`;
      bibtex += `  title = {${ref.title}},\n`;
      bibtex += `  author = {${ref.authors}},\n`;
      if (ref.year) bibtex += `  year = {${ref.year}},\n`;
      if (ref.journal) bibtex += `  journal = {${ref.journal}},\n`;
      if (ref.volume) bibtex += `  volume = {${ref.volume}},\n`;
      if (ref.issue) bibtex += `  number = {${ref.issue}},\n`;
      if (ref.pages) bibtex += `  pages = {${ref.pages}},\n`;
      if (ref.doi) bibtex += `  doi = {${ref.doi}},\n`;
      if (ref.url) bibtex += `  url = {${ref.url}},\n`;
      if (ref.publisher) bibtex += `  publisher = {${ref.publisher}},\n`;
      bibtex += `}`;
      return bibtex;
    }).join("\n\n");
  };

  const generateRIS = (): string => {
    return filteredReferences.map(ref => {
      const typeMap: Record<string, string> = {
        journal: "JOUR",
        book: "BOOK",
        website: "ELEC",
        conference: "CONF",
        thesis: "THES",
        other: "GEN"
      };
      
      let ris = `TY  - ${typeMap[ref.type] || "GEN"}\n`;
      ris += `TI  - ${ref.title}\n`;
      ref.authors.split(",").forEach(author => {
        ris += `AU  - ${author.trim()}\n`;
      });
      if (ref.year) ris += `PY  - ${ref.year}\n`;
      if (ref.journal) ris += `JO  - ${ref.journal}\n`;
      if (ref.volume) ris += `VL  - ${ref.volume}\n`;
      if (ref.issue) ris += `IS  - ${ref.issue}\n`;
      if (ref.pages) ris += `SP  - ${ref.pages}\n`;
      if (ref.doi) ris += `DO  - ${ref.doi}\n`;
      if (ref.url) ris += `UR  - ${ref.url}\n`;
      if (ref.publisher) ris += `PB  - ${ref.publisher}\n`;
      if (ref.notes) ris += `N1  - ${ref.notes}\n`;
      ris += `ER  - \n`;
      return ris;
    }).join("\n");
  };

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`Downloaded ${filename}`);
  };

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
    toast.success("Citation copied!");
  };

  return (
    <Layout>
      <SEO
        title="Reference Manager | Save, Organize & Export Citations"
        description="Free reference manager tool to save, organize, tag, and export your citations. Generate BibTeX and RIS files for your dissertation bibliography."
        canonical="/tools/reference-manager"
        keywords={["reference manager", "citation manager", "bibliography tool", "BibTeX generator", "RIS export", "citation organizer", "dissertation references"]}
      />
      
      <ToolSchema
        name="Reference Manager"
        description="Save, organize, tag, and export citations from multiple sources. Generate BibTeX and RIS bibliography files for your dissertation or thesis."
        url="https://dissertlypro.com/tools/reference-manager"
        featureList={[
          "Save citations from 6 source types",
          "Tag and organize references",
          "Search and filter library",
          "BibTeX export",
          "RIS export",
          "APA formatted citations"
        ]}
      />
      <SoftwareApplicationSchema
        name="Reference Manager"
        description="Save, organize, tag, and export citations from multiple sources."
        url="/tools/reference-manager"
      />

      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reference Manager
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Save, organize, and export your citations. Build your bibliography with tags, 
              search, and export to BibTeX or RIS format.
            </p>
          </motion.div>

          <Tabs defaultValue="add" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="add" className="gap-2">
                <Plus className="h-4 w-4" />
                Add Reference
              </TabsTrigger>
              <TabsTrigger value="library" className="gap-2">
                <BookOpen className="h-4 w-4" />
                My Library ({references.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="add">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Add New Reference
                  </CardTitle>
                  <CardDescription>
                    Enter the citation details. Title and authors are required.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">Source Type</Label>
                      <Select 
                        value={newRef.type} 
                        onValueChange={(v) => setNewRef({ ...newRef, type: v as Reference["type"] })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {sourceTypes.map(type => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Year</Label>
                      <Input
                        id="year"
                        placeholder="e.g., 2024"
                        value={newRef.year}
                        onChange={(e) => setNewRef({ ...newRef, year: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      placeholder="Enter the full title"
                      value={newRef.title}
                      onChange={(e) => setNewRef({ ...newRef, title: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="authors">Authors * (comma-separated)</Label>
                    <Input
                      id="authors"
                      placeholder="e.g., Smith, J., Johnson, M., Williams, K."
                      value={newRef.authors}
                      onChange={(e) => setNewRef({ ...newRef, authors: e.target.value })}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="journal">Journal / Publisher</Label>
                      <Input
                        id="journal"
                        placeholder="e.g., Journal of Psychology"
                        value={newRef.journal}
                        onChange={(e) => setNewRef({ ...newRef, journal: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="publisher">Publisher</Label>
                      <Input
                        id="publisher"
                        placeholder="e.g., Oxford University Press"
                        value={newRef.publisher}
                        onChange={(e) => setNewRef({ ...newRef, publisher: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="volume">Volume</Label>
                      <Input
                        id="volume"
                        placeholder="e.g., 12"
                        value={newRef.volume}
                        onChange={(e) => setNewRef({ ...newRef, volume: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="issue">Issue</Label>
                      <Input
                        id="issue"
                        placeholder="e.g., 3"
                        value={newRef.issue}
                        onChange={(e) => setNewRef({ ...newRef, issue: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pages">Pages</Label>
                      <Input
                        id="pages"
                        placeholder="e.g., 45-67"
                        value={newRef.pages}
                        onChange={(e) => setNewRef({ ...newRef, pages: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="doi">DOI</Label>
                      <Input
                        id="doi"
                        placeholder="e.g., 10.1000/xyz123"
                        value={newRef.doi}
                        onChange={(e) => setNewRef({ ...newRef, doi: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="url">URL</Label>
                      <Input
                        id="url"
                        placeholder="https://..."
                        value={newRef.url}
                        onChange={(e) => setNewRef({ ...newRef, url: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      Tags
                    </Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {newRef.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="gap-1">
                          {tag}
                          <button onClick={() => removeTag(tag)}>
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a tag..."
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addTag()}
                      />
                      <Button variant="outline" size="icon" onClick={addTag}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Add any notes about this reference..."
                      value={newRef.notes}
                      onChange={(e) => setNewRef({ ...newRef, notes: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <Button onClick={addReference} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Library
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="library">
              <div className="space-y-6">
                {/* Filters and Search */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px]">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            placeholder="Search by title or author..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <Select value={filterTag} onValueChange={setFilterTag}>
                        <SelectTrigger className="w-[150px]">
                          <Filter className="h-4 w-4 mr-2" />
                          <SelectValue placeholder="All Tags" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Tags</SelectItem>
                          {getAllTags().map(tag => (
                            <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select value={filterType} onValueChange={setFilterType}>
                        <SelectTrigger className="w-[150px]">
                          <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Types</SelectItem>
                          {sourceTypes.map(type => (
                            <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select value={sortBy} onValueChange={(v) => setSortBy(v as "date" | "title" | "year")}>
                        <SelectTrigger className="w-[150px]">
                          <SortAsc className="h-4 w-4 mr-2" />
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="date">Date Added</SelectItem>
                          <SelectItem value="title">Title</SelectItem>
                          <SelectItem value="year">Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Export Options */}
                {references.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="outline"
                          onClick={() => downloadFile(generateBibTeX(), "references.bib", "text/plain")}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Export BibTeX ({filteredReferences.length})
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => downloadFile(generateRIS(), "references.ris", "text/plain")}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Export RIS ({filteredReferences.length})
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Reference List */}
                {filteredReferences.length === 0 ? (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">
                        {references.length === 0 
                          ? "No references yet. Add your first citation above!"
                          : "No references match your filters."}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {filteredReferences.map((ref) => (
                      <Card key={ref.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {sourceTypes.find(t => t.value === ref.type)?.label}
                                </Badge>
                                {ref.year && (
                                  <span className="text-sm text-muted-foreground">{ref.year}</span>
                                )}
                              </div>
                              
                              {editingId === ref.id ? (
                                <div className="space-y-3">
                                  <Input
                                    value={ref.title}
                                    onChange={(e) => updateReference(ref.id, { title: e.target.value })}
                                    className="font-medium"
                                  />
                                  <Input
                                    value={ref.authors}
                                    onChange={(e) => updateReference(ref.id, { authors: e.target.value })}
                                    placeholder="Authors"
                                  />
                                  <Button 
                                    size="sm" 
                                    onClick={() => setEditingId(null)}
                                  >
                                    <Save className="h-4 w-4 mr-2" />
                                    Save
                                  </Button>
                                </div>
                              ) : (
                                <>
                                  <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                                    {ref.title}
                                  </h3>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    {ref.authors}
                                  </p>
                                  {ref.journal && (
                                    <p className="text-sm text-muted-foreground italic">
                                      {ref.journal}
                                      {ref.volume && `, ${ref.volume}`}
                                      {ref.issue && `(${ref.issue})`}
                                      {ref.pages && `, pp. ${ref.pages}`}
                                    </p>
                                  )}
                                </>
                              )}

                              {ref.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                  {ref.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              )}

                              {ref.notes && (
                                <p className="text-xs text-muted-foreground mt-2 bg-muted/50 p-2 rounded">
                                  {ref.notes}
                                </p>
                              )}
                            </div>

                            <div className="flex gap-2 shrink-0">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => copyToClipboard(formatAPA(ref), ref.id)}
                                title="Copy APA citation"
                              >
                                {copied === ref.id ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setEditingId(editingId === ref.id ? null : ref.id)}
                                title="Edit"
                              >
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => deleteReference(ref.id)}
                                className="text-destructive hover:text-destructive"
                                title="Delete"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>About This Tool</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                <p>
                  This reference manager helps you organize your dissertation or thesis citations. 
                  Your references are saved locally in your browser, so they persist between sessions.
                </p>
                <h4>Features:</h4>
                <ul>
                  <li><strong>Multiple source types:</strong> Journal articles, books, websites, conference papers, theses</li>
                  <li><strong>Tags:</strong> Organize references by topic, chapter, or any custom category</li>
                  <li><strong>Search & filter:</strong> Find references quickly by title, author, tag, or type</li>
                  <li><strong>Export formats:</strong> Download as BibTeX (.bib) or RIS format for reference managers</li>
                  <li><strong>APA citations:</strong> Copy formatted APA citations with one click</li>
                </ul>
                <p className="text-muted-foreground">
                  <strong>Note:</strong> References are stored in your browser's local storage. 
                  To back up your library, use the export feature regularly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ReferenceManagerPage;
