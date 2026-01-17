import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, HowToSchema, AggregateRatingSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  BookMarked,
  BookOpen,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  Target,
  AlertTriangle,
  Send,
  RefreshCw,
  Award,
  Lightbulb,
  Shield
} from "lucide-react";

const PhDPublishing = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "PhD Resources", url: "/phd-resources" },
    { name: "PhD Publishing", url: "/phd-publishing" }
  ];

  const howToSteps = [
    { name: "Identify suitable journals", text: "Research journals that publish work similar to yours and match your target audience." },
    { name: "Prepare manuscript", text: "Format your paper according to journal guidelines with appropriate length and structure." },
    { name: "Submit to journal", text: "Submit through the journal's system with a compelling cover letter." },
    { name: "Respond to peer review", text: "Address reviewer comments thoroughly and professionally in your revision." },
    { name: "Handle publication process", text: "Work through copyediting, proofs, and finally celebrate your publication." }
  ];

  const publicationTypes = [
    {
      title: "Peer-Reviewed Journals",
      description: "The gold standard for academic publishing—essential for your CV",
      icon: Award,
      priority: "High",
      timeframe: "6-18 months"
    },
    {
      title: "Conference Proceedings",
      description: "Published papers from academic conferences—faster turnaround",
      icon: FileText,
      priority: "Medium-High",
      timeframe: "2-6 months"
    },
    {
      title: "Book Chapters",
      description: "Contributions to edited volumes—good for niche topics",
      icon: BookOpen,
      priority: "Medium",
      timeframe: "12-24 months"
    },
    {
      title: "Working Papers/Preprints",
      description: "Share work early while awaiting peer review",
      icon: Send,
      priority: "Supplementary",
      timeframe: "Immediate"
    }
  ];

  const journalSelectionCriteria = [
    { criterion: "Scope & Fit", description: "Does the journal publish work like yours?" },
    { criterion: "Impact Factor", description: "What's the journal's influence in your field?" },
    { criterion: "Turnaround Time", description: "How long from submission to decision?" },
    { criterion: "Open Access Options", description: "What are the access and fee structures?" },
    { criterion: "Acceptance Rate", description: "How competitive is the journal?" },
    { criterion: "Reputation", description: "Is it respected by scholars in your field?" }
  ];

  const peerReviewTips = [
    {
      title: "Read All Comments Carefully",
      description: "Understand what reviewers are really asking before responding"
    },
    {
      title: "Address Every Point",
      description: "Create a detailed response letter addressing each comment systematically"
    },
    {
      title: "Be Professional",
      description: "Thank reviewers, even for critical feedback—stay diplomatic"
    },
    {
      title: "Make Changes Visible",
      description: "Highlight changes in your revised manuscript for easy review"
    }
  ];

  const commonMistakes = [
    "Submitting to journals outside your area without checking fit",
    "Ignoring journal formatting guidelines",
    "Defensive responses to reviewer criticism",
    "Submitting to multiple journals simultaneously (usually forbidden)",
    "Not building publications into your PhD timeline from the start"
  ];

  return (
    <Layout>
      <SEO 
        title="Publishing During Your PhD | Academic Publishing Guide | DissertlyPro"
        description="Navigate academic publishing as a doctoral student. Journal selection, peer review strategies, and building your publication record while completing your dissertation."
        keywords={["PhD publishing", "academic publishing", "peer review", "journal submission", "doctoral publications", "academic writing"]}
        canonical="https://dissertlypro.com/phd-publishing"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema 
        name="How to Publish Academic Papers During Your PhD"
        description="Step-by-step guide to navigating the academic publishing process."
        steps={howToSteps}
        totalTime="P18M"
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1123}
        itemName="DissertlyPro PhD Publishing Guide"
        itemType="EducationalOrganization"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-copper/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-copper/10 text-copper px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookMarked className="w-4 h-4" />
              Academic Career Development
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Publishing During
              <span className="block text-copper mt-2">Your PhD</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Build your academic publication record while completing your dissertation. 
              From journal selection to peer review—master the publishing process.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>35 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>Cover Letter Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-copper" />
                <span>Revision Checklists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Publishing Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/consultation">Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publication Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Types of Academic Publications</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding different publication venues helps you build a strategic portfolio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {publicationTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center flex-shrink-0">
                          <type.icon className="w-6 h-6 text-copper" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{type.title}</CardTitle>
                          <p className="text-muted-foreground mt-1">{type.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-4">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Priority: </span>
                          <span className="font-medium text-foreground">{type.priority}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Timeline: </span>
                          <span className="font-medium text-foreground">{type.timeframe}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journal Selection */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Choosing the Right Journal</h2>
              <p className="text-muted-foreground">
                Strategic journal selection increases your chances of acceptance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {journalSelectionCriteria.map((item, index) => (
                <motion.div
                  key={item.criterion}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                          <Target className="w-4 h-4 text-copper" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.criterion}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Peer Review Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <RefreshCw className="w-10 h-10 text-copper mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Navigating Peer Review</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Responding effectively to reviewers can make the difference between rejection and acceptance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {peerReviewTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:border-copper/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-4">
                        <Lightbulb className="w-5 h-5 text-copper" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
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
                  Publishing Mistakes to Avoid
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

      {/* CTA Section */}
      <section className="py-16 bg-copper/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-12 h-12 text-copper mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Help With Your Manuscript?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our academic writing experts can help you polish your manuscript, 
              navigate peer review, and increase your publication success rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Publishing Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

export default PhDPublishing;
