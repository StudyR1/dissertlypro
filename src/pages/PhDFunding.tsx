import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, HowToSchema, AggregateRatingSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import RelatedContent from "@/components/ui/RelatedContent";
import { motion } from "framer-motion";
import { 
  TrendingUp,
  BookOpen,
  Clock,
  CheckCircle,
  ArrowRight,
  DollarSign,
  FileText,
  Award,
  GraduationCap,
  Globe,
  Calendar,
  Lightbulb,
  Target,
  Shield
} from "lucide-react";

const PhDFunding = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "PhD Resources", url: "/phd-resources" },
    { name: "PhD Funding", url: "/phd-funding" }
  ];

  const howToSteps = [
    { name: "Research funding opportunities", text: "Identify grants, fellowships, and funding sources relevant to your field and research." },
    { name: "Understand eligibility requirements", text: "Carefully review criteria for citizenship, field, stage, and other requirements." },
    { name: "Develop your research proposal", text: "Create a compelling narrative connecting your research to funder priorities." },
    { name: "Write your grant application", text: "Follow guidelines precisely, addressing all required components clearly." },
    { name: "Submit and follow up", text: "Submit before deadlines and prepare for potential interviews or revisions." }
  ];

  const fundingTypes = [
    {
      title: "Institutional Fellowships",
      description: "University-funded positions including tuition waivers and stipends",
      icon: GraduationCap,
      examples: ["Teaching Assistantships", "Research Assistantships", "Departmental Fellowships"]
    },
    {
      title: "External Grants",
      description: "Competitive awards from foundations and funding bodies",
      icon: Award,
      examples: ["NSF Graduate Fellowships", "SSRC Fellowships", "Foundation Grants"]
    },
    {
      title: "Research Council Funding",
      description: "Government-funded research training support",
      icon: Globe,
      examples: ["ESRC/AHRC/EPSRC (UK)", "DAAD (Germany)", "ARC (Australia)"]
    },
    {
      title: "Dissertation Grants",
      description: "Targeted funding for dissertation research and completion",
      icon: FileText,
      examples: ["ACLS Dissertation Fellowships", "Mellon Grants", "Field-specific awards"]
    }
  ];

  const grantWritingTips = [
    {
      title: "Know Your Audience",
      description: "Understand the funder's priorities and align your proposal accordingly",
      icon: Target
    },
    {
      title: "Clear Problem Statement",
      description: "Articulate why your research matters and what gap it addresses",
      icon: Lightbulb
    },
    {
      title: "Realistic Timeline",
      description: "Create achievable milestones and demonstrate project feasibility",
      icon: Calendar
    },
    {
      title: "Strong Methodology",
      description: "Show you have the skills and approach to complete the work",
      icon: CheckCircle
    }
  ];

  const budgetComponents = [
    { item: "Stipend/Living expenses", description: "Monthly support for the duration of the grant" },
    { item: "Tuition and fees", description: "Coverage of academic costs if applicable" },
    { item: "Research expenses", description: "Materials, equipment, software, participant costs" },
    { item: "Travel funding", description: "Conferences, archival research, fieldwork" },
    { item: "Professional development", description: "Training, workshops, language courses" }
  ];

  return (
    <Layout>
      <SEO 
        title="PhD Funding & Grants Guide | Secure Research Funding | DissertlyPro"
        description="Comprehensive guide to funding your PhD research. Grant writing strategies, fellowship applications, funding databases, and expert tips for securing doctoral funding."
        keywords={["PhD funding", "doctoral grants", "research fellowships", "graduate funding", "grant writing", "dissertation funding"]}
        canonical="https://dissertlypro.com/phd-funding"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema 
        name="How to Secure PhD Research Funding"
        description="Step-by-step guide to identifying and winning funding for doctoral research."
        steps={howToSteps}
        totalTime="P6M"
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1234}
        itemName="DissertlyPro PhD Funding Guide"
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
              <TrendingUp className="w-4 h-4" />
              Specialized PhD Guide
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              PhD Funding &
              <span className="block text-copper mt-2">Research Grants</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Master the art of securing funding for your doctoral research. From fellowship applications 
              to grant writing strategies—your complete guide to financing your PhD.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>35 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>Grant Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-copper" />
                <span>Funding Database</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Grant Writing Help <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/consultation">Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Funding Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Types of PhD Funding</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the funding landscape is essential for building a sustainable research career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {fundingTypes.map((type, index) => (
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
                        <div>
                          <CardTitle className="text-xl">{type.title}</CardTitle>
                          <p className="text-muted-foreground mt-1">{type.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example) => (
                          <span key={example} className="text-xs bg-muted px-3 py-1 rounded-full">
                            {example}
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

      {/* Grant Writing Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Grant Writing Essentials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key principles for crafting competitive funding applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {grantWritingTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:border-copper/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-4">
                        <tip.icon className="w-7 h-7 text-copper" />
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

      {/* Budget Components */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Understanding Grant Budgets</h2>
              <p className="text-muted-foreground">
                Common components of doctoral research funding.
              </p>
            </div>

            <div className="space-y-4">
              {budgetComponents.map((component, index) => (
                <motion.div
                  key={component.item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0">
                          <DollarSign className="w-5 h-5 text-copper" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{component.item}</h3>
                          <p className="text-sm text-muted-foreground">{component.description}</p>
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

      {/* Application Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Application Timeline</h2>
              <p className="text-muted-foreground">
                Plan ahead—most major grants have annual deadlines.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { phase: "6+ months before", title: "Research Phase", tasks: "Identify opportunities, review criteria, contact program officers" },
                { phase: "3-6 months before", title: "Development Phase", tasks: "Draft proposal, gather letters, refine budget" },
                { phase: "1-3 months before", title: "Finalization Phase", tasks: "Revise based on feedback, polish application, submit early" }
              ].map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <span className="text-sm text-copper font-medium">{phase.phase}</span>
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{phase.tasks}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related PhD Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/academic-networking" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <Globe className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Academic Networking</h3>
                    <p className="text-sm text-muted-foreground">Build your research network</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/phd-publishing" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <FileText className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">PhD Publishing</h3>
                    <p className="text-sm text-muted-foreground">Journal publication guide</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/international-phd" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <Globe className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">International PhD</h3>
                    <p className="text-sm text-muted-foreground">Global doctoral programs</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/phd-industry" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <Award className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">PhD to Industry</h3>
                    <p className="text-sm text-muted-foreground">Non-academic career paths</p>
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
              Need Help With Your Grant Application?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts can help you craft compelling proposals, develop realistic budgets, 
              and position your research for funding success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Grant Writing Help <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/phd-resources">Explore More PhD Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <RelatedContent currentUrl="/phd-funding" />
    </Layout>
  );
};

export default PhDFunding;
