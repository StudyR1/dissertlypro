import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, HowToSchema, AggregateRatingSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Network,
  BookOpen,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  MessageSquare,
  Globe,
  Calendar,
  Lightbulb,
  Mail,
  Coffee,
  Presentation,
  Shield
} from "lucide-react";

const AcademicNetworking = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "PhD Resources", url: "/phd-resources" },
    { name: "Academic Networking", url: "/academic-networking" }
  ];

  const howToSteps = [
    { name: "Identify key scholars", text: "Research leaders in your field whose work aligns with your interests." },
    { name: "Engage with their work", text: "Read, cite, and engage meaningfully with their publications and ideas." },
    { name: "Attend conferences strategically", text: "Choose events where you can meet relevant scholars and present your work." },
    { name: "Build online presence", text: "Create profiles on academic platforms and share your research appropriately." },
    { name: "Maintain relationships", text: "Follow up after meetings and nurture connections over time." }
  ];

  const networkingChannels = [
    {
      title: "Academic Conferences",
      description: "Present papers, attend sessions, and network at scholarly gatherings",
      icon: Presentation,
      tips: ["Prepare elevator pitch", "Attend social events", "Follow up within 48 hours"]
    },
    {
      title: "Online Platforms",
      description: "Build presence on ResearchGate, Academia.edu, and Twitter/X",
      icon: Globe,
      tips: ["Share preprints", "Engage with discussions", "Keep profiles updated"]
    },
    {
      title: "Email Outreach",
      description: "Reach out to scholars whose work inspires your research",
      icon: Mail,
      tips: ["Be specific about their work", "Keep it brief", "Offer value"]
    },
    {
      title: "Collaborative Projects",
      description: "Join research groups, writing circles, and collaborative initiatives",
      icon: Users,
      tips: ["Start small", "Be reliable", "Celebrate shared successes"]
    }
  ];

  const conferenceStrategies = [
    {
      title: "Before the Conference",
      items: [
        "Review the program and identify key sessions",
        "Prepare business cards or digital contact method",
        "Practice your research elevator pitch",
        "Schedule meetings with contacts in advance"
      ]
    },
    {
      title: "During the Conference",
      items: [
        "Attend sessions outside your immediate specialty",
        "Sit near scholars you want to meet",
        "Ask thoughtful questions in Q&A sessions",
        "Attend social events and receptions"
      ]
    },
    {
      title: "After the Conference",
      items: [
        "Send follow-up emails within 48 hours",
        "Connect on academic social media platforms",
        "Share relevant resources or papers discussed",
        "Maintain contact periodically"
      ]
    }
  ];

  const commonMistakes = [
    "Being transactional rather than building genuine relationships",
    "Only networking when you need something",
    "Ignoring peers—they're future leaders in your field",
    "Failing to follow up after initial meetings",
    "Not reciprocating when others seek your help"
  ];

  return (
    <Layout>
      <SEO 
        title="Academic Networking for PhDs | Build Your Scholarly Network | DissertlyPro"
        description="Master academic networking as a PhD student. Conference strategies, online presence, collaboration tips, and relationship-building for a successful research career."
        keywords={["academic networking", "PhD networking", "conference networking", "research collaboration", "scholarly network", "academic career"]}
        canonical="https://dissertlypro.com/academic-networking"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema 
        name="How to Build Your Academic Network as a PhD Student"
        description="Step-by-step guide to developing professional relationships in academia."
        steps={howToSteps}
        totalTime="P1Y"
      />
      <AggregateRatingSchema 
        ratingValue={4.8}
        reviewCount={987}
        itemName="DissertlyPro Academic Networking Guide"
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
              <Network className="w-4 h-4" />
              Career Development
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Academic Networking
              <span className="block text-copper mt-2">for PhD Students</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Build meaningful professional relationships that support your research and career. 
              From conference networking to online presence—your guide to academic community.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>25 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>Email Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-copper" />
                <span>Conference Checklists</span>
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

      {/* Networking Channels */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Networking Channels</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Effective networking happens through multiple channels—diversify your approach.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {networkingChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center flex-shrink-0">
                          <channel.icon className="w-6 h-6 text-copper" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{channel.title}</CardTitle>
                          <p className="text-muted-foreground mt-1">{channel.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {channel.tips.map((tip) => (
                          <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conference Strategies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Conference Networking Strategies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Maximize your conference experience with strategic preparation and follow-through.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {conferenceStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-copper" />
                        <CardTitle className="text-lg">{strategy.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {strategy.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-5 h-5 rounded-full bg-copper/10 text-copper text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Templates */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cold Email Template</h2>
              <p className="text-muted-foreground">
                A framework for reaching out to scholars you admire.
              </p>
            </div>

            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="font-mono text-sm space-y-4 text-muted-foreground">
                  <p><strong className="text-foreground">Subject:</strong> PhD student, question about [specific paper/work]</p>
                  <hr className="border-border" />
                  <p>Dear Professor [Name],</p>
                  <p>I'm a [year] PhD student at [institution] working on [topic]. I recently read your [specific paper] and was particularly struck by [specific insight/finding].</p>
                  <p>[One sentence connecting their work to yours OR one specific question]</p>
                  <p>I would appreciate any guidance you might offer, or if you have a few minutes to speak, I'd welcome the opportunity.</p>
                  <p>Thank you for your time.</p>
                  <p>Best regards,<br />[Your name]<br />[Your website/profile link]</p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                { title: "Be Specific", description: "Reference specific work—shows you've done your homework" },
                { title: "Keep It Brief", description: "3-4 short paragraphs maximum" },
                { title: "Offer Value", description: "Ask one clear question or offer something useful" }
              ].map((tip) => (
                <Card key={tip.title} className="text-center">
                  <CardContent className="pt-4">
                    <Lightbulb className="w-6 h-6 text-copper mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground text-sm">{tip.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{tip.description}</p>
                  </CardContent>
                </Card>
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
                  <span className="text-destructive">⚠</span> Networking Mistakes to Avoid
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
              Want Personalized Career Guidance?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our academic career experts can help you develop networking strategies, 
              prepare for conferences, and build your scholarly presence.
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

export default AcademicNetworking;
