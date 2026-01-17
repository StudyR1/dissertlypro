import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, HowToSchema, AggregateRatingSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Globe,
  BookOpen,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  Home,
  Heart,
  MessageSquare,
  AlertTriangle,
  Lightbulb,
  Shield
} from "lucide-react";

const InternationalPhD = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "PhD Resources", url: "/phd-resources" },
    { name: "International PhD", url: "/international-phd" }
  ];

  const howToSteps = [
    { name: "Research visa requirements", text: "Understand student visa processes, timelines, and documentation for your destination country." },
    { name: "Secure funding", text: "Explore scholarships for international students and understand funding implications for visa status." },
    { name: "Plan practical logistics", text: "Arrange housing, banking, healthcare, and other essentials before arrival." },
    { name: "Build support networks", text: "Connect with international student offices, cultural groups, and fellow international students." },
    { name: "Adapt academically", text: "Understand expectations, communication styles, and academic norms in your new environment." }
  ];

  const keyConsiderations = [
    {
      title: "Visa & Immigration",
      description: "Navigate student visas, work permissions, and status maintenance",
      icon: FileText,
      details: ["Student visa types", "Work authorization", "Travel restrictions", "Post-PhD options"]
    },
    {
      title: "Funding & Finances",
      description: "International scholarships, banking, and cost of living",
      icon: Globe,
      details: ["International fellowships", "Currency considerations", "Tax obligations", "Emergency funds"]
    },
    {
      title: "Housing & Living",
      description: "Finding accommodation and settling into a new country",
      icon: Home,
      details: ["University housing", "Rental markets", "Neighborhood selection", "Utilities setup"]
    },
    {
      title: "Support Networks",
      description: "Building community far from home",
      icon: Users,
      details: ["International student offices", "Cultural associations", "Peer support groups", "Online communities"]
    }
  ];

  const academicChallenges = [
    {
      challenge: "Different academic expectations",
      solution: "Ask supervisors directly about norms; observe how peers operate"
    },
    {
      challenge: "Language barriers",
      solution: "Use writing centers; practice presentations with peers; be patient with yourself"
    },
    {
      challenge: "Supervisor communication styles",
      solution: "Clarify preferred communication methods early; schedule regular check-ins"
    },
    {
      challenge: "Unfamiliar citation/writing conventions",
      solution: "Study published work in your program; use style guides; seek writing support"
    },
    {
      challenge: "Imposter syndrome amplified",
      solution: "Remember: you were admitted for a reason; connect with other internationals"
    }
  ];

  const wellbeingTips = [
    {
      title: "Maintain Cultural Connections",
      description: "Stay connected to your culture through food, media, and community",
      icon: Heart
    },
    {
      title: "Build Local Friendships",
      description: "Form relationships with local students and community members",
      icon: Users
    },
    {
      title: "Communicate Home",
      description: "Schedule regular calls with family and friends back home",
      icon: MessageSquare
    },
    {
      title: "Seek Professional Help",
      description: "Use counseling services—many offer culturally sensitive support",
      icon: Shield
    }
  ];

  const commonMistakes = [
    "Not checking visa requirements until the last minute",
    "Underestimating the emotional toll of being far from home",
    "Isolating yourself within only your cultural community",
    "Not seeking help because you fear judgment",
    "Ignoring work authorization rules and limits"
  ];

  return (
    <Layout>
      <SEO 
        title="International PhD Student Guide | Studying Abroad | DissertlyPro"
        description="Navigate doctoral study in a foreign country. Visa guidance, cultural adaptation, building support networks, and thriving as an international PhD student."
        keywords={["international PhD student", "study abroad PhD", "PhD visa", "international doctoral student", "cultural adaptation PhD"]}
        canonical="https://dissertlypro.com/international-phd"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema 
        name="How to Succeed as an International PhD Student"
        description="Step-by-step guide to navigating doctoral study in a foreign country."
        steps={howToSteps}
        totalTime="P4Y"
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1543}
        itemName="DissertlyPro International PhD Guide"
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
              <Globe className="w-4 h-4" />
              Specialized Guide
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              International PhD
              <span className="block text-copper mt-2">Student Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Navigate doctoral study in a foreign country with confidence. 
              From visa requirements to cultural adaptation—everything you need to thrive abroad.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>30 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>Checklist Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-copper" />
                <span>Resource Directory</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/consultation">Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Key Considerations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Essential areas to address when pursuing a PhD abroad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {keyConsiderations.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-copper" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <p className="text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {item.details.map((detail) => (
                          <span key={detail} className="text-xs bg-muted px-3 py-1 rounded-full">
                            {detail}
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

      {/* Academic Challenges */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Common Academic Challenges</h2>
              <p className="text-muted-foreground">
                Anticipate and overcome these common hurdles for international students.
              </p>
            </div>

            <div className="space-y-4">
              {academicChallenges.map((item, index) => (
                <motion.div
                  key={item.challenge}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="py-4">
                      <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <div className="flex items-center gap-2 md:w-1/3">
                          <Lightbulb className="w-5 h-5 text-copper flex-shrink-0" />
                          <span className="font-medium text-foreground">{item.challenge}</span>
                        </div>
                        <div className="md:w-2/3">
                          <span className="text-sm text-muted-foreground">{item.solution}</span>
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

      {/* Wellbeing Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-10 h-10 text-copper mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Wellbeing & Adjustment</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Thriving abroad requires attention to your emotional and social wellbeing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wellbeingTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:border-copper/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-4">
                        <tip.icon className="w-6 h-6 text-copper" />
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
                  Common Mistakes to Avoid
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
              Need Support as an International Student?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts understand the unique challenges international students face. 
              Get personalized support for your doctoral journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

export default InternationalPhD;
