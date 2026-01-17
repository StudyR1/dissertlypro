import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import FAQSchema from "@/components/schemas/FAQSchema";
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  Star, 
  Users, 
  BookOpen,
  BarChart3,
  Brain,
  Sparkles,
  Mail,
  Lock,
  ArrowRight,
  FileCheck,
  Clock,
  Award,
  Layers,
  PenTool,
  Target
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  pages: string;
  format: string;
  includes: string[];
  popular?: boolean;
  downloadCount: string;
}

const templates: Template[] = [
  {
    id: "dissertation-proposal",
    title: "Dissertation Proposal Template",
    description: "A comprehensive template covering all essential sections of a doctoral dissertation proposal, including problem statement, literature review outline, methodology framework, and timeline.",
    category: "Proposal",
    icon: FileText,
    pages: "12 pages",
    format: "Word & PDF",
    includes: [
      "Title page formatting",
      "Problem statement framework",
      "Research questions template",
      "Literature review structure",
      "Methodology section outline",
      "Timeline & milestones template",
      "Reference page setup"
    ],
    popular: true,
    downloadCount: "8,400+"
  },
  {
    id: "masters-thesis-proposal",
    title: "Master's Thesis Proposal Template",
    description: "Streamlined proposal template designed for master's level research, with focused sections appropriate for thesis scope and timeline.",
    category: "Proposal",
    icon: FileText,
    pages: "8 pages",
    format: "Word & PDF",
    includes: [
      "Thesis statement section",
      "Research objectives template",
      "Brief literature review format",
      "Methodology overview",
      "Expected outcomes section",
      "Proposed timeline"
    ],
    downloadCount: "6,200+"
  },
  {
    id: "methodology-quantitative",
    title: "Quantitative Methodology Chapter",
    description: "Complete template for writing a rigorous quantitative methodology chapter, including research design, sampling, data collection, and analysis procedures.",
    category: "Methodology",
    icon: BarChart3,
    pages: "15 pages",
    format: "Word & PDF",
    includes: [
      "Research design framework",
      "Population & sampling template",
      "Variables operationalization",
      "Data collection instruments",
      "Statistical analysis plan",
      "Validity & reliability sections",
      "Ethical considerations"
    ],
    popular: true,
    downloadCount: "5,800+"
  },
  {
    id: "methodology-qualitative",
    title: "Qualitative Methodology Chapter",
    description: "In-depth template for qualitative research methodology, covering phenomenological, grounded theory, case study, and ethnographic approaches.",
    category: "Methodology",
    icon: Brain,
    pages: "14 pages",
    format: "Word & PDF",
    includes: [
      "Research paradigm section",
      "Qualitative approach selection",
      "Participant selection criteria",
      "Data collection methods",
      "Interview protocol template",
      "Coding & analysis framework",
      "Trustworthiness criteria"
    ],
    downloadCount: "4,900+"
  },
  {
    id: "methodology-mixed-methods",
    title: "Mixed Methods Methodology Chapter",
    description: "Comprehensive template for mixed methods research design, including integration strategies for combining quantitative and qualitative approaches.",
    category: "Methodology",
    icon: Layers,
    pages: "18 pages",
    format: "Word & PDF",
    includes: [
      "Mixed methods design types",
      "Integration strategy framework",
      "Quantitative strand template",
      "Qualitative strand template",
      "Data mixing procedures",
      "Joint display tables",
      "Quality criteria for both strands"
    ],
    downloadCount: "3,200+"
  },
  {
    id: "results-quantitative",
    title: "Quantitative Results Chapter",
    description: "Structured template for presenting statistical findings, including descriptive statistics, hypothesis testing, and data visualization guidelines.",
    category: "Results",
    icon: BarChart3,
    pages: "12 pages",
    format: "Word & PDF",
    includes: [
      "Descriptive statistics tables",
      "Assumption testing section",
      "Hypothesis results format",
      "Statistical tables (APA)",
      "Figure formatting guide",
      "Effect size reporting",
      "Results narrative template"
    ],
    popular: true,
    downloadCount: "4,500+"
  },
  {
    id: "results-qualitative",
    title: "Qualitative Results/Findings Chapter",
    description: "Template for presenting qualitative findings with themes, participant quotes, and narrative structure that tells your research story.",
    category: "Results",
    icon: PenTool,
    pages: "10 pages",
    format: "Word & PDF",
    includes: [
      "Theme presentation structure",
      "Subtheme organization",
      "Quote integration format",
      "Participant voice balance",
      "Theme connection narrative",
      "Visual theme displays",
      "Summary framework"
    ],
    downloadCount: "3,800+"
  },
  {
    id: "literature-review",
    title: "Literature Review Chapter Template",
    description: "Comprehensive template for organizing and synthesizing sources, with thematic structure and critical analysis frameworks.",
    category: "Chapters",
    icon: BookOpen,
    pages: "14 pages",
    format: "Word & PDF",
    includes: [
      "Search strategy documentation",
      "Thematic organization guide",
      "Source synthesis matrix",
      "Critical analysis framework",
      "Gap identification section",
      "Theoretical framework",
      "Chapter summary template"
    ],
    downloadCount: "7,100+"
  },
  {
    id: "discussion-chapter",
    title: "Discussion Chapter Template",
    description: "Template for interpreting your findings, connecting to literature, addressing implications, and acknowledging limitations.",
    category: "Chapters",
    icon: Target,
    pages: "10 pages",
    format: "Word & PDF",
    includes: [
      "Findings interpretation format",
      "Literature connection structure",
      "Theoretical implications",
      "Practical implications",
      "Limitations section",
      "Future research directions",
      "Conclusion framework"
    ],
    downloadCount: "4,200+"
  },
  {
    id: "research-timeline",
    title: "Research Timeline & Gantt Chart",
    description: "Visual project planning template with Gantt chart format for mapping your entire dissertation or thesis journey.",
    category: "Planning",
    icon: Clock,
    pages: "4 pages",
    format: "Excel & PDF",
    includes: [
      "12-month timeline template",
      "24-month timeline template",
      "Phase-based structure",
      "Milestone markers",
      "Buffer time guidelines",
      "Progress tracking sheet",
      "Customizable Gantt chart"
    ],
    downloadCount: "5,600+"
  }
];

const categories = ["All", "Proposal", "Methodology", "Results", "Chapters", "Planning"];

const faqs = [
  {
    question: "Are these dissertation templates free to download?",
    answer: "Yes! All templates are completely free. We just ask for your email so we can send you the download link and notify you when we add new templates or resources."
  },
  {
    question: "What format are the templates in?",
    answer: "Most templates are available in both Microsoft Word (.docx) and PDF formats. The Research Timeline template also includes an Excel (.xlsx) version for easy customization."
  },
  {
    question: "Can I customize these templates for my institution?",
    answer: "Absolutely. These templates are designed as starting frameworks. You should customize formatting, sections, and content to meet your specific institution's requirements and your supervisor's preferences."
  },
  {
    question: "Are these templates suitable for UK, US, and Australian universities?",
    answer: "Yes, our templates follow general academic conventions that work across institutions. However, always check your university's specific formatting guidelines (margins, fonts, citation style) and adapt accordingly."
  },
  {
    question: "Do you offer templates for specific disciplines?",
    answer: "Our current templates are designed to work across disciplines. We're developing discipline-specific templates for STEM, Social Sciences, Humanities, and Business. Subscribe to be notified when these are released."
  }
];

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255)
});

const TemplatesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filteredTemplates = selectedCategory === "All" 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  const handleDownloadClick = (template: Template) => {
    setSelectedTemplate(template);
    setDownloadModalOpen(true);
    setDownloadSuccess(false);
    setEmail("");
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = emailSchema.safeParse({ email });
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - in production, this would send to your email service
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setDownloadSuccess(true);
    toast.success("Check your email for the download link!");
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://dissertlypro.com" },
    { name: "Resources", url: "https://dissertlypro.com/resources" },
    { name: "Templates", url: "https://dissertlypro.com/templates" }
  ];

  return (
    <Layout>
      <SEO
        title="Free Dissertation & Thesis Templates | Download Now | DissertlyPro"
        description="Download free dissertation proposal templates, methodology chapter templates, results section templates, and more. Professional academic templates for PhD and Master's students."
        canonical="https://dissertlypro.com/templates"
        keywords={["dissertation template", "thesis template", "proposal template", "methodology chapter template", "results chapter template", "free academic templates"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 border-copper/30 text-copper">
              <Download className="h-3 w-3 mr-1" />
              Free Downloads
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Dissertation & Thesis Templates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional templates to jumpstart your academic writing. Download proposal frameworks, methodology chapters, results sections, and more.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-copper" />
                <span className="text-muted-foreground">10 Professional Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-copper" />
                <span className="text-muted-foreground">Word & PDF Formats</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-copper" />
                <span className="text-muted-foreground">50,000+ Downloads</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 pb-8">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-copper hover:bg-copper-dark text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="px-4 pb-16">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredTemplates.map((template, index) => {
                const Icon = template.icon;
                return (
                  <motion.div
                    key={template.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full border-border/50 hover:border-copper/30 transition-all duration-300 hover:shadow-lg group">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="p-2.5 rounded-xl bg-copper/10 shrink-0">
                              <Icon className="h-5 w-5 text-copper" />
                            </div>
                            <div>
                              <CardTitle className="text-lg font-semibold group-hover:text-copper transition-colors">
                                {template.title}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="secondary" className="text-xs">
                                  {template.category}
                                </Badge>
                                {template.popular && (
                                  <Badge className="text-xs bg-copper/20 text-copper border-copper/30">
                                    <Star className="h-3 w-3 mr-1" />
                                    Popular
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="mt-3">
                          {template.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <FileText className="h-3.5 w-3.5" />
                            {template.pages}
                          </span>
                          <span className="flex items-center gap-1">
                            <FileCheck className="h-3.5 w-3.5" />
                            {template.format}
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="h-3.5 w-3.5" />
                            {template.downloadCount} downloads
                          </span>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-medium text-foreground">Includes:</p>
                          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                            {template.includes.slice(0, 4).map((item, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                                <CheckCircle2 className="h-3 w-3 text-copper shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          {template.includes.length > 4 && (
                            <p className="text-xs text-copper">+{template.includes.length - 4} more sections</p>
                          )}
                        </div>

                        <Button 
                          onClick={() => handleDownloadClick(template)}
                          className="w-full gap-2 bg-copper hover:bg-copper-dark text-white"
                        >
                          <Download className="h-4 w-4" />
                          Download Free Template
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-16">
        <div className="container max-w-4xl mx-auto">
          <Card className="border-copper/30 bg-gradient-to-br from-copper/5 to-transparent">
            <CardContent className="p-8 md:p-12 text-center">
              <Sparkles className="h-10 w-10 text-copper mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                Need More Than Templates?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Templates are a great start, but expert guidance can help you complete your dissertation faster and with higher quality. Get personalized support from PhD specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tools/personalization-quiz">
                  <Button variant="outline" className="gap-2 border-copper/50 text-copper hover:bg-copper/10">
                    <Target className="h-4 w-4" />
                    Take the Quiz
                  </Button>
                </Link>
                <Link to="/consultation">
                  <Button className="gap-2 bg-copper hover:bg-copper-dark text-white">
                    <Users className="h-4 w-4" />
                    Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 pb-16">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-border/50">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      <Dialog open={downloadModalOpen} onOpenChange={setDownloadModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-copper" />
                  Check Your Email!
                </>
              ) : (
                <>
                  <Download className="h-5 w-5 text-copper" />
                  Download {selectedTemplate?.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {downloadSuccess 
                ? "We've sent the download link to your email. Check your inbox (and spam folder) for the template."
                : "Enter your email to receive the download link. We'll also notify you when we release new templates."
              }
            </DialogDescription>
          </DialogHeader>

          {downloadSuccess ? (
            <div className="space-y-4 py-4">
              <div className="bg-copper/10 rounded-lg p-4 text-center">
                <Mail className="h-8 w-8 text-copper mx-auto mb-2" />
                <p className="text-sm text-foreground font-medium">Download link sent!</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Didn't receive it? Check your spam folder or try again.
                </p>
              </div>
              <Button 
                onClick={() => setDownloadModalOpen(false)} 
                className="w-full"
                variant="outline"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmitEmail} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="download-email">Email Address</Label>
                <Input
                  id="download-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={255}
                  className="focus-visible:ring-copper"
                />
              </div>

              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                <span>We respect your privacy. Unsubscribe anytime.</span>
              </div>

              <Button 
                type="submit" 
                className="w-full gap-2 bg-copper hover:bg-copper-dark text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Mail className="h-4 w-4" />
                    Send Download Link
                  </>
                )}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default TemplatesPage;
