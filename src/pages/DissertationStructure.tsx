import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, HowToSchema, AggregateRatingSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SeeAlso } from "@/components/ui/see-also";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FileText,
  BookOpen,
  Clock,
  CheckCircle,
  ArrowRight,
  Layers,
  Target,
  Brain,
  BarChart3,
  MessageSquare,
  AlertTriangle,
  Shield
} from "lucide-react";

const DissertationStructure = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "PhD Resources", url: "/phd-resources" },
    { name: "Dissertation Structure", url: "/dissertation-structure" }
  ];

  const howToSteps = [
    { name: "Understand the five-chapter format", text: "Learn the traditional dissertation structure: Introduction, Literature Review, Methodology, Results, Discussion." },
    { name: "Create chapter outlines", text: "Develop detailed outlines for each chapter before writing." },
    { name: "Set word count targets", text: "Establish realistic targets for each section based on your field's norms." },
    { name: "Write iteratively", text: "Draft, revise, and refine each chapter through multiple passes." },
    { name: "Ensure coherence", text: "Maintain consistency in argument, terminology, and formatting throughout." }
  ];

  const chapters = [
    {
      number: 1,
      title: "Introduction",
      icon: Target,
      wordRange: "8,000-12,000",
      purpose: "Introduce the problem, justify the study, and preview the dissertation",
      sections: [
        "Background and context",
        "Problem statement",
        "Research questions/hypotheses",
        "Significance of the study",
        "Scope and limitations",
        "Definitions of key terms",
        "Chapter overview"
      ]
    },
    {
      number: 2,
      title: "Literature Review",
      icon: BookOpen,
      wordRange: "15,000-25,000",
      purpose: "Situate your research within existing scholarship and identify gaps",
      sections: [
        "Theoretical framework",
        "Thematic review of literature",
        "Critical analysis of sources",
        "Identification of gaps",
        "Conceptual framework",
        "Summary and synthesis"
      ]
    },
    {
      number: 3,
      title: "Methodology",
      icon: Brain,
      wordRange: "10,000-15,000",
      purpose: "Explain and justify your research design and methods",
      sections: [
        "Research philosophy/paradigm",
        "Research design",
        "Sampling strategy",
        "Data collection methods",
        "Data analysis procedures",
        "Validity and reliability",
        "Ethical considerations"
      ]
    },
    {
      number: 4,
      title: "Results/Findings",
      icon: BarChart3,
      wordRange: "15,000-25,000",
      purpose: "Present your findings objectively without interpretation",
      sections: [
        "Presentation of data",
        "Statistical analyses (if quantitative)",
        "Themes/patterns (if qualitative)",
        "Tables, figures, and visuals",
        "Addressing research questions",
        "Summary of findings"
      ]
    },
    {
      number: 5,
      title: "Discussion & Conclusion",
      icon: MessageSquare,
      wordRange: "12,000-18,000",
      purpose: "Interpret findings, address implications, and conclude",
      sections: [
        "Interpretation of results",
        "Connection to literature",
        "Theoretical implications",
        "Practical implications",
        "Limitations",
        "Future research directions",
        "Final conclusions"
      ]
    }
  ];

  const writingTips = [
    {
      title: "Write Out of Order",
      description: "Start with the chapter you're most confident about—often methodology or literature review"
    },
    {
      title: "Use Reverse Outlining",
      description: "After drafting, outline what you wrote to check logical flow"
    },
    {
      title: "Build in Buffer Time",
      description: "Allow 20-30% extra time for each chapter for revisions"
    },
    {
      title: "Create Transition Bridges",
      description: "End each chapter with a preview of the next to maintain coherence"
    }
  ];

  const commonMistakes = [
    "Writing too much in early drafts—aim for concision",
    "Letting the literature review become a summary instead of critique",
    "Mixing results and discussion before you're clear on findings",
    "Inconsistent terminology or formatting across chapters",
    "Neglecting to return to introduction after completing other chapters"
  ];

  return (
    <Layout>
      <SEO 
        title="Dissertation Structure & Writing Guide | PhD Thesis Format | DissertlyPro"
        description="Master the five-chapter dissertation format. Chapter templates, word count guides, writing strategies, and techniques for maintaining momentum throughout your PhD."
        keywords={["dissertation structure", "PhD thesis format", "five chapter dissertation", "dissertation chapters", "thesis writing guide"]}
        canonical="https://dissertlypro.com/dissertation-structure"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema 
        name="How to Structure Your Dissertation"
        description="Step-by-step guide to organizing and writing your doctoral dissertation."
        steps={howToSteps}
        totalTime="P2Y"
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2145}
        itemName="DissertlyPro Dissertation Structure Guide"
        itemType="EducationalOrganization"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-copper/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-copper/10 text-copper px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Technical Deep-Dive
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Dissertation Writing
              <span className="block text-copper mt-2">& Structure Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Master the five-chapter dissertation format. Comprehensive guidance on structure, 
              word counts, and strategies for writing your 80,000+ word doctoral thesis.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>5+ hours content</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>Chapter Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-copper" />
                <span>Outline Examples</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Writing Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/consultation">Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter Breakdown */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Five-Chapter Format</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The traditional doctoral dissertation structure used across most disciplines.
              </p>
            </div>

            <div className="space-y-6">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-copper/5 to-transparent">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-copper/10 flex items-center justify-center flex-shrink-0">
                          <chapter.icon className="w-7 h-7 text-copper" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-copper font-bold">Chapter {chapter.number}</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">{chapter.wordRange} words</span>
                          </div>
                          <CardTitle className="text-2xl">{chapter.title}</CardTitle>
                          <p className="text-muted-foreground mt-1">{chapter.purpose}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm font-medium text-foreground mb-3">Key Sections:</p>
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {chapter.sections.map((section) => (
                          <div key={section} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-copper flex-shrink-0" />
                            {section}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Word Count Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Typical Word Count Distribution</h2>
              <p className="text-muted-foreground">
                For an 80,000-word dissertation (adjust based on your program's requirements)
              </p>
            </div>

            <Card>
              <CardContent className="py-6">
                <div className="space-y-4">
                  {chapters.map((chapter) => (
                    <div key={chapter.number} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground w-32">Ch. {chapter.number}: {chapter.title}</span>
                      <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                        <div 
                          className="bg-copper h-full rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${parseInt(chapter.wordRange.split('-')[1].replace(',', '')) / 250}%` }}
                        >
                          <span className="text-xs text-copper-foreground font-medium">{chapter.wordRange}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6 text-center">
                  * Plus front matter (abstract, TOC, acknowledgments) and back matter (references, appendices)
                </p>
              </CardContent>
            </Card>
            {/* See Also inline callout */}
            <SeeAlso 
              links={[
                { title: "Dissertation Writing Strategies", href: "/dissertation-writing", description: "Develop your scholarly voice" },
                { title: "Literature Review Guide", href: "/literature-review-guide", description: "Master Chapter 2" },
                { title: "Research Methodology", href: "/research-methodology", description: "Design Chapter 3" },
              ]}
              title="Deep-dive into specific chapters"
            />
          </div>
        </div>
      </section>

      {/* Writing Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Strategic Writing Tips</h2>
              <p className="text-muted-foreground">
                Approaches that successful dissertation writers use.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {writingTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-copper/50 transition-colors">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-copper" />
                        {tip.title}
                      </h3>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Common Dissertation Writing Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {commonMistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-destructive font-bold">×</span>
                      <span className="text-muted-foreground">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/dissertation-writing" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <FileText className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Dissertation Writing</h3>
                    <p className="text-sm text-muted-foreground">Writing strategies & tips</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/literature-review-guide" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <BookOpen className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Literature Review</h3>
                    <p className="text-sm text-muted-foreground">Search, synthesize & analyze</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/research-methodology" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <Brain className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Research Methodology</h3>
                    <p className="text-sm text-muted-foreground">Qual, quant & mixed methods</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/thesis-structure" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <Layers className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Thesis Structure</h3>
                    <p className="text-sm text-muted-foreground">Master's thesis blueprint</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-copper/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-12 h-12 text-copper mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Dissertation Writing Support?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our PhD-qualified experts can help you structure, write, and refine 
              your dissertation from proposal to final submission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Writing Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/phd-resources">Explore More PhD Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DissertationStructure;
