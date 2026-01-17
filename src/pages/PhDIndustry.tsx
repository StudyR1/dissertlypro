import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, HowToSchema, AggregateRatingSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Briefcase,
  BookOpen,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  MessageSquare,
  Award,
  Shield
} from "lucide-react";

const PhDIndustry = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "PhD Resources", url: "/phd-resources" },
    { name: "PhD to Industry", url: "/phd-industry" }
  ];

  const howToSteps = [
    { name: "Assess your transferable skills", text: "Identify skills from your PhD that apply to industry roles—analysis, project management, communication." },
    { name: "Research target industries", text: "Explore sectors that value doctoral expertise and align with your interests." },
    { name: "Translate your experience", text: "Convert academic achievements into business-relevant language for your resume." },
    { name: "Build your network", text: "Connect with PhDs who've made the transition and industry professionals." },
    { name: "Prepare for interviews", text: "Practice articulating your value in non-academic terms." }
  ];

  const transferableSkills = [
    {
      academic: "Dissertation research",
      industry: "Complex project management, independent problem-solving",
      icon: Target
    },
    {
      academic: "Data analysis",
      industry: "Business analytics, insights generation, evidence-based decisions",
      icon: TrendingUp
    },
    {
      academic: "Teaching & presentations",
      industry: "Training, stakeholder communication, public speaking",
      icon: MessageSquare
    },
    {
      academic: "Literature reviews",
      industry: "Market research, competitive analysis, synthesis",
      icon: BookOpen
    },
    {
      academic: "Grant writing",
      industry: "Proposal development, business case writing, fundraising",
      icon: FileText
    },
    {
      academic: "Peer collaboration",
      industry: "Cross-functional teamwork, stakeholder management",
      icon: Users
    }
  ];

  const industryPaths = [
    {
      sector: "Consulting",
      roles: ["Strategy Consultant", "Research Analyst", "Subject Matter Expert"],
      whyPhDs: "Analytical rigor, problem-solving, quick learning"
    },
    {
      sector: "Technology",
      roles: ["Data Scientist", "UX Researcher", "Product Manager"],
      whyPhDs: "Technical skills, research methodology, complex analysis"
    },
    {
      sector: "Biotech/Pharma",
      roles: ["Research Scientist", "Medical Affairs", "Clinical Research"],
      whyPhDs: "Scientific expertise, regulatory knowledge, research skills"
    },
    {
      sector: "Finance",
      roles: ["Quantitative Analyst", "Risk Manager", "Research Associate"],
      whyPhDs: "Quantitative skills, modeling, systematic analysis"
    },
    {
      sector: "Government/Policy",
      roles: ["Policy Analyst", "Research Director", "Program Manager"],
      whyPhDs: "Evidence synthesis, writing, subject expertise"
    },
    {
      sector: "Non-Profit/NGO",
      roles: ["Research Director", "Program Evaluator", "Grant Manager"],
      whyPhDs: "Research skills, mission alignment, grant experience"
    }
  ];

  const resumeTips = [
    "Lead with impact, not methodology—results over process",
    "Use action verbs: 'Led,' 'Delivered,' 'Achieved,' not 'Studied'",
    "Quantify achievements: publications, grants won, students mentored",
    "Remove academic jargon—translate for general audiences",
    "Keep it to 2 pages maximum—focus on relevant experience",
    "Include a skills section highlighting technical and soft skills"
  ];

  return (
    <Layout>
      <SEO 
        title="PhD to Industry Transition Guide | Alt-Ac Career Paths | DissertlyPro"
        description="Transition from academia to industry with confidence. Translate PhD skills, target the right sectors, and navigate the alt-ac job search successfully."
        keywords={["PhD industry transition", "alt-ac careers", "PhD job search", "leaving academia", "industry PhD", "career change PhD"]}
        canonical="https://dissertlypro.com/phd-industry"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema 
        name="How to Transition from PhD to Industry"
        description="Step-by-step guide to successfully moving from academia to an industry career."
        steps={howToSteps}
        totalTime="P6M"
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={876}
        itemName="DissertlyPro PhD Industry Transition Guide"
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
              <Briefcase className="w-4 h-4" />
              Career Transition
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              PhD to Industry
              <span className="block text-copper mt-2">Transition Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Your doctoral training has prepared you for more than academia. 
              Learn to translate your skills and find fulfilling careers beyond the ivory tower.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>30 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>Resume Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-copper" />
                <span>Interview Prep</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Career Coaching <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/consultation">Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transferable Skills */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Translating Your PhD Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your doctoral experience has built valuable skills—learn to articulate them for industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transferableSkills.map((skill, index) => (
                <motion.div
                  key={skill.academic}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                          <skill.icon className="w-5 h-5 text-copper" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Academic:</p>
                          <p className="font-medium text-foreground mb-2">{skill.academic}</p>
                          <p className="text-sm text-muted-foreground mb-1">Industry translation:</p>
                          <p className="text-sm text-copper">{skill.industry}</p>
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

      {/* Industry Paths */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Industry Paths for PhDs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Many sectors actively seek doctoral expertise—here's where PhDs thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryPaths.map((path, index) => (
                <motion.div
                  key={path.sector}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-copper/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Award className="w-5 h-5 text-copper" />
                        {path.sector}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Sample Roles</p>
                          <div className="flex flex-wrap gap-1">
                            {path.roles.map((role) => (
                              <span key={role} className="text-xs bg-muted px-2 py-1 rounded">
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Why PhDs Excel</p>
                          <p className="text-sm text-foreground">{path.whyPhDs}</p>
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

      {/* Resume Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Industry Resume Tips</h2>
              <p className="text-muted-foreground">
                Your CV needs a complete transformation for industry applications.
              </p>
            </div>

            <Card>
              <CardContent className="py-6">
                <ul className="space-y-4">
                  {resumeTips.map((tip, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-copper" />
                      </div>
                      <span className="text-muted-foreground">{tip}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Lightbulb className="w-10 h-10 text-copper mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Interview Preparation</h2>
              <p className="text-muted-foreground">
                Be ready to answer these common questions for PhDs in industry interviews.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { q: "Why are you leaving academia?", tip: "Focus on what you're moving toward, not away from" },
                { q: "How do you handle tight deadlines?", tip: "Reference grant deadlines, conference submissions, teaching" },
                { q: "Tell me about a time you failed", tip: "Use rejected papers or failed experiments—show resilience" },
                { q: "How do you work in teams?", tip: "Highlight co-authored work, lab collaboration, mentoring" },
                { q: "Can you explain your research simply?", tip: "Practice a 60-second version without jargon" }
              ].map((item, index) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="py-4">
                      <p className="font-medium text-foreground mb-1">"{item.q}"</p>
                      <p className="text-sm text-copper">Tip: {item.tip}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              Ready to Make the Transition?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our career transition experts can help you translate your academic experience, 
              optimize your resume, and prepare for industry interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Career Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

export default PhDIndustry;
