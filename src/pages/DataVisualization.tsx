import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, AggregateRatingSchema } from "@/components/schemas";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  PieChart,
  TrendingUp,
  ArrowRight,
  CheckCircle, 
  Clock, 
  Table,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Target,
  GraduationCap,
  Palette,
  Grid3X3,
  LineChart,
  ScatterChart
} from "lucide-react";

const DataVisualization = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Data Visualization Best Practices", url: "/data-visualization" }
  ];

  const chartTypes = [
    {
      type: "Bar Charts",
      icon: BarChart3,
      bestFor: "Comparing categories or groups",
      examples: ["Comparing means across groups", "Frequency distributions", "Likert scale responses"],
      tips: [
        "Start y-axis at zero for honest comparison",
        "Order bars logically (alphabetically, by value, or conceptually)",
        "Use horizontal bars for many categories or long labels"
      ]
    },
    {
      type: "Line Charts",
      icon: LineChart,
      bestFor: "Showing trends over time or continuous relationships",
      examples: ["Longitudinal data", "Time series", "Pre-post comparisons across groups"],
      tips: [
        "Reserve for truly continuous data or time series",
        "Don't connect categorical data with lines",
        "Limit to 4-5 lines for readability"
      ]
    },
    {
      type: "Scatter Plots",
      icon: ScatterChart,
      bestFor: "Showing relationships between two continuous variables",
      examples: ["Correlation visualization", "Regression analysis", "Identifying outliers"],
      tips: [
        "Add regression line when appropriate",
        "Use jittering for overlapping points",
        "Consider adding marginal distributions"
      ]
    },
    {
      type: "Pie/Donut Charts",
      icon: PieChart,
      bestFor: "Showing parts of a whole (use sparingly)",
      examples: ["Demographic composition", "Budget allocation", "Simple proportions"],
      tips: [
        "Use only for parts that sum to 100%",
        "Limit to 5-6 slices maximum",
        "Consider bar charts for easier comparison",
        "Start at 12 o'clock, largest slice first"
      ]
    },
    {
      type: "Box Plots",
      icon: Grid3X3,
      bestFor: "Showing distribution characteristics and outliers",
      examples: ["Comparing distributions across groups", "Identifying outliers", "Showing variance"],
      tips: [
        "Excellent for comparing multiple groups",
        "Always explain components to readers",
        "Consider violin plots for more detail"
      ]
    },
    {
      type: "Heat Maps",
      icon: Grid3X3,
      bestFor: "Showing patterns in matrices or correlations",
      examples: ["Correlation matrices", "Cross-tabulations", "Temporal patterns"],
      tips: [
        "Use colorblind-friendly palettes",
        "Order rows/columns meaningfully",
        "Include numerical values for precision"
      ]
    }
  ];

  const tableGuidelines = [
    {
      principle: "Purpose",
      guideline: "Every table should answer a specific question. If it doesn't serve analysis or support arguments, remove it.",
      example: "Bad: 'Table of all variables'. Good: 'Descriptive Statistics for Key Study Variables'"
    },
    {
      principle: "Structure",
      guideline: "Organize rows and columns logically. Group related items. Use clear, concise headers.",
      example: "Put dependent variables in rows, groups/conditions in columns for easy comparison"
    },
    {
      principle: "Formatting",
      guideline: "Align numbers by decimal point. Use consistent decimal places. Minimize lines and borders.",
      example: "Use 2 decimal places for most statistics, 3 for p-values. No vertical lines."
    },
    {
      principle: "Labeling",
      guideline: "Include descriptive title, clear labels, units of measurement, and notes for abbreviations.",
      example: "Note: *p < .05, **p < .01, ***p < .001. CI = confidence interval."
    }
  ];

  const apaGuidelines = [
    { element: "Figure number", description: "Bold, flush left above figure (e.g., 'Figure 1')" },
    { element: "Figure title", description: "Italic, title case, double-spaced below number" },
    { element: "Image", description: "Clear, high-resolution, black and white for print" },
    { element: "Legend", description: "Within figure boundaries, explaining symbols/colors" },
    { element: "Note", description: "Below figure, explains abbreviations, significance levels" },
    { element: "Table number", description: "Bold, flush left above table (e.g., 'Table 1')" },
    { element: "Table title", description: "Italic, title case, double-spaced below number" },
    { element: "Column headers", description: "Centered, title case, with units in parentheses" },
    { element: "Table body", description: "Aligned by decimal, single or 1.5 spacing allowed" },
    { element: "Table notes", description: "General, specific, and probability notes below" }
  ];

  const faqs = [
    {
      question: "When should I use a figure vs. a table?",
      answer: "Use figures to show patterns, trends, and relationships—they're better for visual impact. Use tables when readers need precise values or when you're presenting many exact numbers. If readers need to look up specific values, use a table; if they need to see the overall picture, use a figure."
    },
    {
      question: "How many figures and tables should a dissertation have?",
      answer: "There's no fixed number, but every visual should earn its place. A typical empirical dissertation might have 3-8 tables and 2-5 figures per study. Quality over quantity—one clear, well-designed figure beats three mediocre ones."
    },
    {
      question: "Should I use color in my dissertation figures?",
      answer: "Check your institution's requirements. If printing in black and white, design for grayscale. If color is allowed, use colorblind-friendly palettes. Always ensure figures are interpretable without color (use patterns, labels, or shapes as backup)."
    },
    {
      question: "What software should I use for dissertation figures?",
      answer: "R (ggplot2) and Python (matplotlib, seaborn) offer publication-quality figures with full customization. Excel is acceptable for simpler figures. SPSS charts often need editing. Avoid 3D effects, shadows, and other chartjunk regardless of software."
    },
    {
      question: "How do I report statistical results in figures?",
      answer: "Include error bars (SE or 95% CI) for means. Report effect sizes in figure notes when possible. Use asterisks for significance levels with a clear legend. Never rely on figures alone—describe key findings in text too."
    },
    {
      question: "What's the difference between APA 6th and 7th edition for figures?",
      answer: "APA 7th simplified formatting: figure numbers and titles go above figures (not below), notes go below. Titles are in italic title case. The overall look is cleaner with less bold text and simpler formatting."
    }
  ];

  const howToSteps = [
    { name: "Identify the Message", text: "Before creating any visualization, clarify what specific insight or comparison you want readers to understand." },
    { name: "Choose the Right Type", text: "Select chart type based on your data and message: bar for comparison, line for trends, scatter for relationships." },
    { name: "Design for Clarity", text: "Maximize data-ink ratio. Remove gridlines, backgrounds, and decorations that don't convey information." },
    { name: "Use Color Purposefully", text: "Apply color to highlight key findings or distinguish groups. Ensure colorblind accessibility and grayscale readability." },
    { name: "Label Effectively", text: "Add clear titles, axis labels, and legends. Explain abbreviations. Include units of measurement." },
    { name: "Format for Style Guide", text: "Apply APA, Chicago, or your required style guide formatting for numbers, titles, and notes." },
    { name: "Test with Readers", text: "Show visualizations to colleagues. If they can't quickly understand the message, revise." }
  ];

  return (
    <Layout>
      <SEO
        title="Data Visualization Best Practices | Charts, Figures, Tables | DissertlyPro"
        description="Create effective dissertation visualizations with our comprehensive guide. Learn when to use charts vs tables, APA formatting, and principles of clear academic data presentation."
        canonical="https://dissertlypro.com/data-visualization"
        keywords={["data visualization", "dissertation figures", "academic charts", "APA tables", "research visualization", "scientific figures", "chart design", "academic writing"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Create Effective Dissertation Visualizations"
        description="A comprehensive guide to designing clear, effective figures and tables for academic research and dissertation presentation."
        steps={howToSteps}
        totalTime="PT4H"
      />
      <FAQSchema faqs={faqs} />
      <AggregateRatingSchema
        itemName="Data Visualization Best Practices"
        ratingValue={4.8}
        reviewCount={1432}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              Technical Deep-Dive
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-navy bg-clip-text text-transparent">
              Data Visualization Best Practices
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Create clear, effective figures and tables for your dissertation. 
              From chart selection to APA formatting—elevate your visual communication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Palette className="w-4 h-4 text-primary" />
                <span>Design principles</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Table className="w-4 h-4 text-primary" />
                <span>Table formatting</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>APA 7th edition</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Principle */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <blockquote className="text-xl italic text-center">
                "Above all else, show the data."
                <footer className="text-sm text-muted-foreground mt-2">— Edward Tufte</footer>
              </blockquote>
              <p className="text-center mt-4 text-muted-foreground">
                The goal of every visualization is to communicate data clearly. 
                Everything else—colors, gridlines, decorations—should serve that purpose or be removed.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Chart Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Choosing the Right Chart Type</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Match your visualization to your data and message. Each chart type serves specific purposes.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chartTypes.map((chart, index) => {
              const Icon = chart.icon;
              return (
                <motion.div
                  key={chart.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{chart.type}</CardTitle>
                      </div>
                      <p className="text-sm text-primary font-medium">{chart.bestFor}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">Examples:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {chart.examples.map((ex, i) => (
                            <li key={i}>• {ex}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-primary mb-2">Tips:</p>
                        <ul className="space-y-1">
                          {chart.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-green-500 mt-1 shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Table Guidelines */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Table Design Principles</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Well-designed tables communicate complex information efficiently. Follow these principles for clarity.
          </p>
          
          <div className="space-y-6">
            {tableGuidelines.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.principle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{item.guideline}</p>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm">
                      <span className="font-medium">Example: </span>
                      <span className="text-muted-foreground">{item.example}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* APA Formatting */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">APA 7th Edition Formatting</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Follow these formatting requirements for figures and tables in APA style.
          </p>
          
          <Tabs defaultValue="figures" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="figures">Figures</TabsTrigger>
              <TabsTrigger value="tables">Tables</TabsTrigger>
            </TabsList>
            
            <TabsContent value="figures" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {apaGuidelines.slice(0, 5).map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                        <div className="w-32 shrink-0 font-medium text-sm">{item.element}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tables" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {apaGuidelines.slice(5).map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                        <div className="w-32 shrink-0 font-medium text-sm">{item.element}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Common Visualization Mistakes</h2>
          
          <div className="space-y-4">
            {[
              {
                mistake: "Using 3D effects on charts",
                solution: "3D distorts proportions and hinders comparison. Always use 2D charts—they're clearer and more honest."
              },
              {
                mistake: "Truncating the y-axis to exaggerate differences",
                solution: "Start bar charts at zero. If differences are meaningful, they'll be visible. Break the axis only when necessary and clearly indicate the break."
              },
              {
                mistake: "Using pie charts for comparisons",
                solution: "Humans compare lengths better than angles. Use bar charts when comparing categories. Reserve pie charts for simple part-to-whole relationships."
              },
              {
                mistake: "Too much color without purpose",
                solution: "Use color to encode meaning (groups, values, emphasis). Gray is your friend—use it for secondary information."
              },
              {
                mistake: "Insufficient labels or missing legends",
                solution: "Every axis needs a label with units. Every figure needs a clear legend. Readers shouldn't have to guess what symbols mean."
              },
              {
                mistake: "Low-resolution or pixelated images",
                solution: "Export at 300+ DPI for print. Use vector formats (PDF, SVG) when possible. Test figures at actual print size."
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-destructive/10 shrink-0">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.mistake}</h3>
                      <p className="text-sm text-muted-foreground">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/spss-tutorial" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    SPSS Tutorial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Create charts and tables directly from SPSS analysis.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/academic-writing" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Academic Writing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Integrate figures and tables effectively into your prose.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/dissertation-structure" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Dissertation Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Place figures and tables strategically in your chapters.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-navy/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Data Presentation?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our data analysis experts can help you create publication-quality figures and tables 
            that clearly communicate your research findings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services/data-analysis">Data Analysis Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DataVisualization;
