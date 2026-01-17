import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, AggregateRatingSchema } from "@/components/schemas";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Layers, 
  ArrowRight,
  CheckCircle, 
  Clock, 
  BarChart3,
  MessageSquare,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Target,
  GraduationCap,
  GitMerge,
  Workflow,
  Scale
} from "lucide-react";

const MixedMethodsResearch = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "Mixed Methods Research Guide", url: "/mixed-methods-research" }
  ];

  const designs = [
    {
      name: "Convergent Design",
      icon: GitMerge,
      description: "Collect quantitative and qualitative data simultaneously, analyze separately, then merge findings.",
      when: "When you want to compare or corroborate findings from different methods",
      example: "Survey measuring teacher burnout + interviews exploring burnout experiences",
      timing: "QUAN + QUAL → Merge",
      complexity: "Moderate"
    },
    {
      name: "Explanatory Sequential",
      icon: Workflow,
      description: "Start with quantitative data collection and analysis, then use qualitative to explain or expand.",
      when: "When quantitative results need deeper explanation or unexpected findings emerge",
      example: "Survey identifies factors → Interviews explore why those factors matter",
      timing: "QUAN → qual",
      complexity: "Lower"
    },
    {
      name: "Exploratory Sequential",
      icon: Workflow,
      description: "Start with qualitative exploration, then use findings to develop quantitative instrument.",
      when: "When developing new instruments or testing emergent theories",
      example: "Interviews identify themes → Survey tests themes across larger population",
      timing: "QUAL → quan",
      complexity: "Moderate"
    },
    {
      name: "Embedded Design",
      icon: Layers,
      description: "One method is embedded within a larger study using a different method.",
      when: "When one method plays a supportive role to the primary approach",
      example: "RCT (quantitative) with qualitative process evaluation",
      timing: "QUAN(qual) or QUAL(quan)",
      complexity: "Higher"
    },
    {
      name: "Transformative Design",
      icon: Scale,
      description: "A theoretical framework (feminist, critical race, disability) guides all design decisions.",
      when: "When research aims to address power imbalances or advocate for change",
      example: "Participatory action research combining surveys and focus groups",
      timing: "Framework-driven",
      complexity: "Higher"
    },
    {
      name: "Multiphase Design",
      icon: GitMerge,
      description: "Multiple sequential phases, each building on previous findings over extended time.",
      when: "For large-scale, multi-year research programs",
      example: "Longitudinal study with annual surveys and periodic interviews",
      timing: "Multiple phases",
      complexity: "Highest"
    }
  ];

  const integrationStrategies = [
    {
      strategy: "Merging",
      description: "Combine quantitative and qualitative databases through side-by-side comparison",
      techniques: ["Joint displays", "Side-by-side tables", "Data transformation matrices"],
      bestFor: "Convergent designs"
    },
    {
      strategy: "Building",
      description: "Results from one phase inform data collection in the next",
      techniques: ["Qualitative themes → survey items", "Statistical results → interview protocols"],
      bestFor: "Sequential designs"
    },
    {
      strategy: "Connecting",
      description: "Link datasets through participant selection or follow-up",
      techniques: ["Purposeful sampling from survey", "Case selection for follow-up interviews"],
      bestFor: "Explanatory sequential"
    },
    {
      strategy: "Embedding",
      description: "Nest one dataset within analysis of the other",
      techniques: ["Qualitative themes within experimental conditions", "Quantitative data within case studies"],
      bestFor: "Embedded designs"
    }
  ];

  const faqs = [
    {
      question: "Is mixed methods harder than single-method research?",
      answer: "It requires competence in both quantitative and qualitative methods and adds complexity of integration. However, it can provide more comprehensive answers. Start with a design that matches your skills—explanatory sequential is often easiest for quantitatively-trained researchers."
    },
    {
      question: "How do I justify using mixed methods in my dissertation?",
      answer: "Justify based on your research questions. If you need both breadth (quant) and depth (qual), if findings need triangulation, or if one method alone can't address the complexity of your phenomenon, mixed methods is warranted."
    },
    {
      question: "What sample sizes do I need for each strand?",
      answer: "Quantitative samples follow statistical requirements (power analysis). Qualitative samples follow saturation principles (typically 12-30 interviews). The relationship between samples varies by design—they can be same, nested, or independent."
    },
    {
      question: "How do I write up a mixed methods dissertation?",
      answer: "Options include: integrated chapters (combining methods throughout), separate strands (quant results, qual results, integration), or by research question. Most dissertations use separate strands with a dedicated integration chapter."
    },
    {
      question: "What if my quantitative and qualitative findings contradict?",
      answer: "Contradiction is valuable, not problematic! Discuss possible reasons: different aspects of phenomenon, different timeframes, sample differences, or genuine complexity. Avoid privileging one method—explore the tension."
    },
    {
      question: "Which analysis software should I use?",
      answer: "Use the standard software for each strand: SPSS/R/Stata for quantitative, NVivo/ATLAS.ti for qualitative. For integration, joint displays can be created in Word/Excel. Some researchers use Dedoose for integrated analysis."
    }
  ];

  const howToSteps = [
    { name: "Develop Mixed Methods Questions", text: "Create overarching mixed methods questions that require integration, plus strand-specific quantitative and qualitative questions." },
    { name: "Select Your Design", text: "Choose a design that matches your questions, timeline, and methodological expertise. Consider timing, priority, and integration points." },
    { name: "Plan Integration Points", text: "Decide where and how you'll integrate data: during collection, analysis, interpretation, or all three." },
    { name: "Collect Quantitative Data", text: "Implement your quantitative strand using appropriate sampling and data collection procedures." },
    { name: "Collect Qualitative Data", text: "Implement your qualitative strand with attention to trustworthiness and saturation." },
    { name: "Analyze Each Strand", text: "Analyze quantitative and qualitative data using appropriate techniques for each tradition." },
    { name: "Integrate Findings", text: "Use joint displays, matrices, or narrative to meaningfully combine findings and generate meta-inferences." },
    { name: "Assess Legitimation", text: "Evaluate mixed methods validity through multiple legitimation types: sample integration, weakness minimization, conversion." }
  ];

  return (
    <Layout>
      <SEO
        title="Mixed Methods Research Guide | Combining Quantitative & Qualitative | DissertlyPro"
        description="Master mixed methods research design for your dissertation. Learn convergent, sequential, and embedded designs with practical integration strategies and examples."
        canonical="https://dissertlypro.com/mixed-methods-research"
        keywords={["mixed methods research", "mixed methods dissertation", "convergent design", "explanatory sequential", "exploratory sequential", "research integration", "quantitative qualitative", "research methodology"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema
        name="How to Conduct Mixed Methods Research"
        description="A comprehensive guide to designing and conducting mixed methods research that effectively integrates quantitative and qualitative approaches."
        steps={howToSteps}
        totalTime="PT480H"
      />
      <FAQSchema faqs={faqs} />
      <AggregateRatingSchema
        itemName="Mixed Methods Research Guide"
        ratingValue={4.8}
        ratingCount={1923}
        reviewCount={467}
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
              <Layers className="w-4 h-4" />
              Technical Deep-Dive
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-navy bg-clip-text text-transparent">
              Mixed Methods Research Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Combine quantitative and qualitative approaches for comprehensive research. 
              Master design selection, integration strategies, and mixed methods legitimation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-sm bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full">
                <BarChart3 className="w-4 h-4" />
                Quantitative
              </div>
              <span className="text-2xl">+</span>
              <div className="flex items-center gap-2 text-sm bg-purple-500/10 text-purple-600 px-3 py-1 rounded-full">
                <MessageSquare className="w-4 h-4" />
                Qualitative
              </div>
              <span className="text-2xl">=</span>
              <div className="flex items-center gap-2 text-sm bg-green-500/10 text-green-600 px-3 py-1 rounded-full">
                <GitMerge className="w-4 h-4" />
                Integration
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Mixed Methods Design Types</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the design that best matches your research questions, timeline, and expertise.
            Capital letters indicate priority (QUAN vs qual).
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {designs.map((design, index) => {
              const Icon = design.icon;
              return (
                <motion.div
                  key={design.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex gap-2">
                          <span className="text-xs bg-muted px-2 py-1 rounded-full">
                            {design.complexity}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{design.name}</CardTitle>
                      <p className="text-sm font-mono text-primary">{design.timing}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{design.description}</p>
                      <div>
                        <p className="text-xs font-medium text-primary mb-1">When to use:</p>
                        <p className="text-sm text-muted-foreground">{design.when}</p>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="text-xs font-medium mb-1">Example:</p>
                        <p className="text-sm text-muted-foreground">{design.example}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Strategies */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Integration Strategies</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Integration is what makes mixed methods more than just "doing both." 
            Choose strategies that meaningfully combine your findings.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {integrationStrategies.map((strat, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{strat.strategy}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{strat.description}</p>
                  <div>
                    <p className="text-xs font-medium text-primary mb-2">Techniques:</p>
                    <ul className="space-y-1">
                      {strat.techniques.map((tech, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Best for:</span> {strat.bestFor}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Joint Display Example */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Creating Joint Displays</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Joint displays are tables or figures that visually integrate quantitative and qualitative findings.
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle>Example: Teacher Burnout Study</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 bg-blue-500/10">Quantitative Finding</th>
                      <th className="text-left p-3 bg-purple-500/10">Qualitative Theme</th>
                      <th className="text-left p-3 bg-green-500/10">Meta-Inference</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">High workload correlated with burnout (r=.67)</td>
                      <td className="p-3">"I never have time to breathe" - administrative burden</td>
                      <td className="p-3">Workload affects burnout through perceived lack of control</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Support predicted lower burnout (β=-.45)</td>
                      <td className="p-3">"My colleagues keep me sane" - informal support networks</td>
                      <td className="p-3">Peer support more protective than formal support structures</td>
                    </tr>
                    <tr>
                      <td className="p-3">Experience not significantly related</td>
                      <td className="p-3">"Experience helps you cope differently, not less"</td>
                      <td className="p-3">Experience changes coping strategies, not burnout levels</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-primary mt-0.5" />
                  <span>The meta-inference column shows how integration creates insights beyond what either method alone could reveal.</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Common Mixed Methods Mistakes</h2>
          
          <div className="space-y-4">
            {[
              {
                mistake: "Treating mixed methods as 'doing both' without integration",
                solution: "Plan integration from the start. Where will data connect? How will findings combine? Without integration, it's two studies, not mixed methods."
              },
              {
                mistake: "Choosing design based on preference, not research questions",
                solution: "Let your questions drive design. Sequential designs answer different questions than convergent designs."
              },
              {
                mistake: "Inadequate sample for one strand",
                solution: "Each strand needs appropriate sampling. Don't sacrifice qualitative depth for quantitative breadth or vice versa."
              },
              {
                mistake: "Privileging one method over the other",
                solution: "Even in priority designs (QUAN→qual), both strands contribute. Report and value findings from each."
              },
              {
                mistake: "Superficial integration in discussion only",
                solution: "Use joint displays, matrices, and visual representations. Integration should be systematic, not an afterthought."
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
                    Quantitative analysis for your mixed methods research.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/nvivo-tutorial" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    NVivo Tutorial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Qualitative analysis for your mixed methods research.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/research-methodology" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Research Methodology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive guide to research design fundamentals.
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
          <h2 className="text-3xl font-bold mb-4">Need Expert Help with Mixed Methods?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our methodology specialists can help you design your mixed methods study, 
            plan integration strategies, and ensure rigorous execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services/methodology">Methodology Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MixedMethodsResearch;
