import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, GanttChart, Calculator, FileText, Sparkles, ArrowRight, CheckCircle, Star, Users, Zap, Lightbulb, HelpCircle, Brain, Scale, ListTree, FlaskConical, Search, GitBranch, Library, Layers } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/schemas/FAQSchema";
import { ItemListSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tools = [
  {
    id: "citation-generator",
    title: "Citation Generator",
    description: "Generate accurate academic citations instantly in APA 7th, MLA 9th, Chicago, and Harvard styles. Perfect for dissertations, theses, and research papers.",
    icon: BookOpen,
    href: "/tools/citation-generator",
    features: ["6 source types", "4 citation styles", "One-click copy"],
    badge: "Most Popular",
    badgeVariant: "default" as const,
  },
  {
    id: "thesis-builder",
    title: "Thesis Statement Builder",
    description: "Craft a compelling thesis statement in 5 simple steps. Our wizard guides you through building a strong foundation for your dissertation.",
    icon: Lightbulb,
    href: "/tools/thesis-builder",
    features: ["5-step wizard", "4 thesis types", "Instant generation"],
    badge: null,
    badgeVariant: "secondary" as const,
  },
  {
    id: "chapter-planner",
    title: "Dissertation Timeline Planner",
    description: "Plan your dissertation journey with a visual Gantt-style timeline. Calculate chapter deadlines, track progress, and stay on schedule.",
    icon: GanttChart,
    href: "/tools/chapter-planner",
    features: ["Visual timeline", "Progress tracking", "Deadline alerts"],
    badge: null,
    badgeVariant: "secondary" as const,
  },
  {
    id: "deadline-checker",
    title: "Deadline Risk Checker",
    description: "Assess your dissertation timeline risk level. Get actionable recommendations based on your deadline and word count target.",
    icon: Zap,
    href: "/tools/deadline-checker",
    features: ["Risk assessment", "Action items", "Timeline analysis"],
    badge: "New",
    badgeVariant: "secondary" as const,
  },
  {
    id: "word-counter",
    title: "Word Count Calculator",
    description: "Calculate reading time, page counts, and character counts for your dissertation. Supports multiple academic formats.",
    icon: Calculator,
    href: "/tools/word-counter",
    features: ["Pages calculator", "Reading time", "Multiple formats"],
    badge: null,
    badgeVariant: "secondary" as const,
  },
  {
    id: "quote-calculator",
    title: "Quote Calculator",
    description: "Get an instant price estimate for dissertation support services. Transparent pricing with no hidden fees.",
    icon: FileText,
    href: "/tools/quote-calculator",
    features: ["Instant quotes", "Multiple services", "Flexible timelines"],
    badge: null,
    badgeVariant: "secondary" as const,
  },
  {
    id: "research-question-validator",
    title: "Research Question Validator",
    description: "Assess if your research questions are well-formed using PICO and SPIDER frameworks. Get instant scoring and improvement suggestions.",
    icon: HelpCircle,
    href: "/tools/research-question-validator",
    features: ["PICO framework", "SPIDER framework", "Instant scoring"],
    badge: "New",
    badgeVariant: "secondary" as const,
  },
  {
    id: "personalization-quiz",
    title: "Personalization Quiz",
    description: "Discover personalized resources and recommendations based on your degree type, stage, challenges, and timeline. Get a tailored action plan in 2 minutes.",
    icon: Brain,
    href: "/tools/personalization-quiz",
    features: ["5 quick questions", "Personalized plan", "Tailored resources"],
    badge: "New",
    badgeVariant: "default" as const,
  },
  {
    id: "diy-comparison",
    title: "DIY vs Expert Calculator",
    description: "Compare the true cost of completing your dissertation yourself vs. getting professional help. Includes time, opportunity cost, and success probability analysis.",
    icon: Scale,
    href: "/tools/diy-comparison",
    features: ["Time breakdown", "Cost analysis", "Success probability"],
    badge: "New",
    badgeVariant: "secondary" as const,
  },
  {
    id: "outline-generator",
    title: "Outline Generator",
    description: "Create structured dissertation chapter outlines based on your research question and methodology. Get detailed section breakdowns for each chapter.",
    icon: ListTree,
    href: "/tools/outline-generator",
    features: ["6 chapter structure", "Section breakdowns", "Word count targets"],
    badge: "New",
    badgeVariant: "default" as const,
  },
  {
    id: "methodology-selector",
    title: "Methodology Selector Quiz",
    description: "Discover whether quantitative, qualitative, or mixed methods is best for your research. Answer 7 questions for personalized methodology recommendations.",
    icon: FlaskConical,
    href: "/tools/methodology-selector",
    features: ["7 questions", "Personalized result", "Method suggestions"],
    badge: "New",
    badgeVariant: "default" as const,
  },
  {
    id: "literature-search",
    title: "Literature Search Builder",
    description: "Build systematic database search queries with Boolean operators (AND, OR, NOT). Generate optimized searches for PubMed, Scopus, Web of Science, and more.",
    icon: Search,
    href: "/tools/literature-search",
    features: ["Boolean builder", "6 database formats", "Synonym suggestions"],
    badge: "New",
    badgeVariant: "default" as const,
  },
  {
    id: "prisma-flow",
    title: "PRISMA Flow Diagram",
    description: "Create professional PRISMA 2020 flow diagrams for systematic reviews. Visualize study identification, screening, eligibility, and inclusion stages.",
    icon: GitBranch,
    href: "/tools/prisma-flow",
    features: ["PRISMA 2020 format", "Visual flowchart", "Copy as text"],
    badge: "New",
    badgeVariant: "default" as const,
  },
  {
    id: "reference-manager",
    title: "Reference Manager",
    description: "Save, organize, tag, and export your citations. Build your dissertation bibliography with BibTeX and RIS export support.",
    icon: Library,
    href: "/tools/reference-manager",
    features: ["Tag organization", "BibTeX export", "RIS export"],
    badge: "New",
    badgeVariant: "default" as const,
  },
  {
    id: "ai-policy-checker",
    title: "AI Policy Checker",
    description: "Check your university's AI policy for dissertations. Find out what's allowed and get disclosure templates for 50+ universities.",
    icon: Brain,
    href: "/tools/ai-policy-checker",
    features: ["50+ universities", "Disclosure templates", "Use analysis"],
    badge: null,
    badgeVariant: "secondary" as const,
  },
  {
    id: "glossary-quiz",
    title: "Glossary Quiz",
    description: "Test your knowledge of academic terminology with interactive multiple-choice questions. Track your score and learn key research terms.",
    icon: Brain,
    href: "/tools/glossary-quiz",
    features: ["38+ terms", "Category filters", "Score tracking"],
    badge: "New",
    badgeVariant: "default" as const,
  },
  {
    id: "glossary-flashcards",
    title: "Glossary Flashcards",
    description: "Master academic terminology with spaced repetition flashcards. Flip cards, track progress, and reinforce learning with science-based intervals.",
    icon: Layers,
    href: "/tools/glossary-flashcards",
    features: ["Spaced repetition", "Progress tracking", "Flip animations"],
    badge: "New",
    badgeVariant: "default" as const,
  },
];

const upcomingTools: { title: string; description: string; icon: React.ElementType }[] = [];

const toolsFAQs = [
  {
    question: "Are these dissertation tools really free?",
    answer: "Yes, all tools on this page are completely free to use with no sign-up required. We created them to help students succeed in their academic journey."
  },
  {
    question: "Who are these tools designed for?",
    answer: "Our free academic tools are designed specifically for Master's and PhD students working on dissertations, theses, and research papers. They're also useful for undergraduate students and academic professionals."
  },
  {
    question: "Do I need to create an account to use the tools?",
    answer: "No account is required. Simply visit the tool page and start using it immediately. Your data stays in your browser for privacy."
  },
  {
    question: "Are the citation formats accurate?",
    answer: "Our citation generator follows the latest style guide specifications (APA 7th, MLA 9th, Chicago 17th, Harvard). We recommend verifying against your institution's specific requirements."
  },
  {
    question: "Can I use these tools on mobile devices?",
    answer: "Yes, all our tools are fully responsive and work on smartphones, tablets, and desktop computers."
  },
  {
    question: "Will you add more free tools?",
    answer: "Yes! We're constantly developing new tools to help students. Upcoming tools include an Outline Generator and more."
  }
];

const ToolsHub = () => {
  return (
    <Layout>
      <SEO
        title="Free Dissertation Tools | Citation Generator, Timeline Planner | DissertlyPro"
        description="Free academic tools for dissertation and thesis students. Generate citations in APA, MLA, Chicago, Harvard. Plan your dissertation timeline. No sign-up required."
        canonical="https://dissertlypro.com/tools"
        keywords={["free dissertation tools", "academic tools", "citation generator", "dissertation planner", "thesis tools", "research tools", "free academic resources", "PhD tools", "Masters thesis tools"]}
      />
      <FAQSchema faqs={toolsFAQs} />
      <ItemListSchema
        name="Free Academic Dissertation Tools"
        description="Free online tools for dissertation and thesis students including citation generators, planners, and research aids"
        items={tools.map(t => ({
          name: t.title,
          url: t.href,
          description: t.description,
        }))}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-5xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              100% Free • No Sign-up Required
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-navy to-primary bg-clip-text text-transparent">
              Free Dissertation Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Powerful academic tools designed to help Master's and PhD students succeed. 
              Generate citations, plan your timeline, and streamline your research—all for free.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>15,000+ students helped</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                <span>4.9/5 average rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-green-500" />
                <span>Instant results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Available Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click on any tool to start using it immediately. No account or payment required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={tool.href} className="block h-full">
                    <Card className="h-full border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon className="w-6 h-6" />
                          </div>
                          {tool.badge && <Badge variant={tool.badgeVariant}>{tool.badge}</Badge>}
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {tool.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tool.features.map((feature) => (
                            <span 
                              key={feature}
                              className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                          Use Tool Free
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Coming Soon */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
            <p className="text-muted-foreground">More free tools in development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="border-dashed opacity-75">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-muted text-muted-foreground">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-muted-foreground">{tool.title}</CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Use Our Free Tools?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built by academics, for academics. Our tools are designed specifically for dissertation and thesis students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Always Free",
                description: "No hidden fees, no premium tiers. All tools are completely free to use forever.",
                icon: "💰"
              },
              {
                title: "No Sign-up",
                description: "Start using any tool immediately. No account creation or email verification required.",
                icon: "🚀"
              },
              {
                title: "Privacy First",
                description: "Your data stays in your browser. We don't store or track your academic work.",
                icon: "🔒"
              },
              {
                title: "Mobile Friendly",
                description: "All tools work perfectly on phones, tablets, and desktops.",
                icon: "📱"
              },
              {
                title: "Academically Accurate",
                description: "Tools follow the latest style guides and academic standards.",
                icon: "✅"
              },
              {
                title: "Regular Updates",
                description: "We continuously improve our tools based on student feedback.",
                icon: "🔄"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-md text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">{benefit.icon}</div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Common questions about our free dissertation tools
            </p>
          </div>

          <div className="space-y-4">
            {toolsFAQs.map((faq, index) => (
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
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Than Free Tools?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert consultants provide personalized dissertation support, from proposal development to final submission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToolsHub;
