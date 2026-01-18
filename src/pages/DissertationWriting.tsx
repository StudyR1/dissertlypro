import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, HowToSchema, AggregateRatingSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RelatedContent from "@/components/ui/RelatedContent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  PenTool,
  BookOpen,
  Clock,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Target,
  Lightbulb,
  AlertTriangle,
  RefreshCw,
  Sparkles,
  Shield
} from "lucide-react";

const DissertationWriting = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "PhD Resources", url: "/phd-resources" },
    { name: "Dissertation Writing", url: "/dissertation-writing" }
  ];

  const howToSteps = [
    { name: "Develop your scholarly voice", text: "Find your authentic academic style through reading, writing, and feedback." },
    { name: "Master argumentation", text: "Learn to construct and sustain complex arguments across 80,000+ words." },
    { name: "Practice critical analysis", text: "Move beyond description to genuine scholarly critique and synthesis." },
    { name: "Maintain consistency", text: "Develop systems for terminology, style, and formatting consistency." },
    { name: "Revise strategically", text: "Learn effective revision techniques for long-form academic writing." }
  ];

  const writingPrinciples = [
    {
      title: "Clarity Over Complexity",
      description: "Good academic writing explains complex ideas simply, not simple ideas complexly",
      icon: Lightbulb
    },
    {
      title: "Argument-Driven Structure",
      description: "Every paragraph should advance your overall argument—no filler",
      icon: Target
    },
    {
      title: "Evidence-Based Claims",
      description: "Support assertions with evidence; acknowledge limitations honestly",
      icon: CheckCircle
    },
    {
      title: "Scholarly Conversation",
      description: "Position your work within ongoing academic debates",
      icon: MessageSquare
    }
  ];

  const voiceDevelopment = [
    {
      aspect: "Read Actively",
      description: "Analyze how successful scholars in your field construct arguments and use language",
      tips: ["Note transition phrases", "Study paragraph structure", "Observe hedging language"]
    },
    {
      aspect: "Write Regularly",
      description: "Develop fluency through consistent practice—even 30 minutes daily builds skill",
      tips: ["Daily writing habit", "Low-stakes drafting", "Write before editing"]
    },
    {
      aspect: "Seek Feedback",
      description: "Share work with supervisors, peers, and writing groups for diverse perspectives",
      tips: ["Writing groups", "Supervisor feedback", "Peer review exchange"]
    },
    {
      aspect: "Revise Strategically",
      description: "Develop a multi-pass revision process addressing different elements each time",
      tips: ["Argument pass", "Clarity pass", "Style pass", "Proofreading pass"]
    }
  ];

  const argumentationTips = [
    {
      title: "Topic Sentences",
      description: "Begin each paragraph with a clear claim that the paragraph will support"
    },
    {
      title: "Transition Bridges",
      description: "Connect paragraphs and sections with logical transitions"
    },
    {
      title: "Signposting",
      description: "Tell readers where you're going and why—especially in long documents"
    },
    {
      title: "Hedging Appropriately",
      description: "Use qualifiers to show nuance without undermining your argument"
    },
    {
      title: "Counter-Arguments",
      description: "Acknowledge and address opposing views to strengthen your position"
    },
    {
      title: "Consistent Terminology",
      description: "Define key terms early and use them consistently throughout"
    }
  ];

  const commonMistakes = [
    "Overusing passive voice—active voice is usually clearer and more engaging",
    "Burying the lead—state your argument upfront, don't build to it slowly",
    "Excessive hedging—too many qualifiers weaken your scholarly voice",
    "Describing when you should analyze—move beyond summary to critique",
    "Inconsistent verb tense—establish and maintain a consistent approach",
    "Over-quoting—your voice should dominate, not others'"
  ];

  return (
    <Layout>
      <SEO 
        title="Academic Writing for Dissertations | Scholarly Voice Guide | DissertlyPro"
        description="Develop your scholarly writing voice. Master argumentation, critical analysis, and maintaining consistency across your 80,000+ word doctoral dissertation."
        keywords={["dissertation writing", "academic writing", "scholarly voice", "argumentation", "PhD writing", "critical analysis"]}
        canonical="https://dissertlypro.com/dissertation-writing"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema 
        name="How to Develop Academic Writing Skills for Your Dissertation"
        description="Step-by-step guide to developing a strong scholarly voice for doctoral writing."
        steps={howToSteps}
        totalTime="P2Y"
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1876}
        itemName="DissertlyPro Academic Writing Guide"
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
              <PenTool className="w-4 h-4" />
              Technical Deep-Dive
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Academic Writing
              <span className="block text-copper mt-2">for Dissertations</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Develop your scholarly voice and master the craft of dissertation writing. 
              From argumentation to consistency—write with clarity, authority, and style.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>6+ hours content</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>Writing Exercises</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-copper" />
                <span>Style Examples</span>
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

      {/* Writing Principles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Core Writing Principles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Foundational principles that distinguish excellent academic writing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {writingPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:border-copper/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-4">
                        <principle.icon className="w-6 h-6 text-copper" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voice Development */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Developing Your Scholarly Voice</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your scholarly voice develops through intentional practice across four key areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {voiceDevelopment.map((item, index) => (
                <motion.div
                  key={item.aspect}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-5 h-5 text-copper" />
                        <CardTitle className="text-xl">{item.aspect}</CardTitle>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {item.tips.map((tip) => (
                          <span key={tip} className="text-xs bg-muted px-3 py-1 rounded-full">
                            {tip}
                          </span>
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

      {/* Argumentation Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Argumentation Techniques</h2>
              <p className="text-muted-foreground">
                Build and sustain compelling arguments across your dissertation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {argumentationTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="py-4">
                      <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                        <Target className="w-4 h-4 text-copper" />
                        {tip.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Example */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Writing Transformation</h2>
              <p className="text-muted-foreground">
                See how applying these principles transforms academic writing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">Before: Weak</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "It can be argued that the literature shows that many scholars have studied this topic. 
                    Various different perspectives exist. This research aims to contribute to the field 
                    by looking at this issue."
                  </p>
                  <div className="mt-4 text-xs text-destructive/80">
                    ❌ Passive, vague, no clear argument, excessive hedging
                  </div>
                </CardContent>
              </Card>

              <Card className="border-copper/30">
                <CardHeader>
                  <CardTitle className="text-lg text-copper">After: Strong</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "While Jones (2020) and Smith (2021) demonstrate the link between X and Y, 
                    both studies overlook the mediating role of Z. This dissertation addresses 
                    that gap through a mixed-methods investigation of [specific focus]."
                  </p>
                  <div className="mt-4 text-xs text-copper">
                    ✓ Active voice, specific claims, clear positioning, confident tone
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Common Writing Mistakes to Avoid
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
              <Link to="/dissertation-structure" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <BookOpen className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Dissertation Structure</h3>
                    <p className="text-sm text-muted-foreground">Chapter-by-chapter blueprint</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/literature-review-guide" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <BookOpen className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Literature Review Guide</h3>
                    <p className="text-sm text-muted-foreground">Search, synthesize & analyze</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/citation-mastery" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <PenTool className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Citation Mastery</h3>
                    <p className="text-sm text-muted-foreground">APA, MLA, Chicago styles</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/academic-writing" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <PenTool className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Academic Writing</h3>
                    <p className="text-sm text-muted-foreground">Master thesis-level writing</p>
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
              Need Academic Writing Support?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our PhD-qualified editors can help you develop your scholarly voice, 
              strengthen your argumentation, and polish your dissertation.
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

      {/* Related Content Section */}
      <RelatedContent currentUrl="/dissertation-writing" />
    </Layout>
  );
};

export default DissertationWriting;
