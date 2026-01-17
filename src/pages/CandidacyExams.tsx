import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, HowToSchema, AggregateRatingSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Award,
  BookOpen,
  Clock,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Target,
  Brain,
  FileText,
  Users,
  Calendar,
  Lightbulb,
  Zap,
  Shield
} from "lucide-react";

const CandidacyExams = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "PhD Resources", url: "/phd-resources" },
    { name: "Candidacy Exams", url: "/candidacy-exams" }
  ];

  const howToSteps = [
    { name: "Understand exam format", text: "Learn your program's specific requirements, format, and evaluation criteria for comprehensive exams." },
    { name: "Create reading list", text: "Compile and organize core texts, seminal papers, and key theorists in your field." },
    { name: "Develop study schedule", text: "Create a realistic timeline working backwards from your exam date with weekly milestones." },
    { name: "Practice writing responses", text: "Write timed practice essays and seek feedback from committee members or peers." },
    { name: "Prepare for oral defense", text: "Practice presenting your ideas verbally and anticipate potential questions." }
  ];

  const examTypes = [
    {
      title: "Written Comprehensive Exams",
      description: "Multi-day written examinations testing breadth of field knowledge",
      icon: FileText,
      features: ["Timed essays", "Take-home options", "Field-specific questions"]
    },
    {
      title: "Oral Qualifying Exams",
      description: "Live examination with committee questioning your expertise",
      icon: Users,
      features: ["Committee present", "2-3 hour duration", "Defense format"]
    },
    {
      title: "Portfolio Defense",
      description: "Presentation of scholarly work demonstrating readiness",
      icon: BookOpen,
      features: ["Research papers", "Teaching philosophy", "Research proposal"]
    },
    {
      title: "Prospectus Defense",
      description: "Defending your dissertation proposal and methodology",
      icon: Target,
      features: ["Research questions", "Methodology", "Timeline"]
    }
  ];

  const studyStrategies = [
    {
      title: "Spaced Repetition",
      description: "Review material at increasing intervals to improve long-term retention",
      icon: Brain
    },
    {
      title: "Active Recall",
      description: "Test yourself regularly rather than passive re-reading",
      icon: Zap
    },
    {
      title: "Conceptual Mapping",
      description: "Create visual connections between theories and theorists",
      icon: Lightbulb
    },
    {
      title: "Study Groups",
      description: "Collaborate with peers preparing for similar exams",
      icon: Users
    }
  ];

  const commonMistakes = [
    "Starting preparation too late (start 3-6 months ahead)",
    "Memorizing without understanding theoretical connections",
    "Neglecting your committee's specific research interests",
    "Failing to practice under timed conditions",
    "Not seeking feedback on practice essays",
    "Ignoring the oral component preparation"
  ];

  return (
    <Layout>
      <SEO 
        title="PhD Candidacy & Qualifying Exams Guide | Comprehensive Exam Prep | DissertlyPro"
        description="Master your PhD comprehensive exams and candidacy milestones. Expert strategies for written and oral qualifying exams, study techniques, and timeline planning."
        keywords={["PhD candidacy exams", "qualifying exams", "comprehensive exams", "PhD milestones", "doctoral qualifying examination", "candidacy preparation"]}
        canonical="https://dissertlypro.com/candidacy-exams"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <HowToSchema 
        name="How to Prepare for PhD Candidacy Exams"
        description="Step-by-step guide to preparing for and passing your doctoral comprehensive or qualifying examinations."
        steps={howToSteps}
        totalTime="P3M"
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={1456}
        itemName="DissertlyPro Candidacy Exam Guide"
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
              <Award className="w-4 h-4" />
              Essential PhD Milestone
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              PhD Candidacy &
              <span className="block text-copper mt-2">Qualifying Exams</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guidance for preparing and passing your doctoral comprehensive exams. 
              From study strategies to oral defense techniques—your complete exam preparation resource.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-copper" />
                <span>45 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-copper" />
                <span>Study Templates Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-copper" />
                <span>Practice Questions</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Expert Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/consultation">Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exam Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Types of Doctoral Examinations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding your specific exam format is the first step to successful preparation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {examTypes.map((exam, index) => (
                <motion.div
                  key={exam.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center flex-shrink-0">
                          <exam.icon className="w-6 h-6 text-copper" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{exam.title}</CardTitle>
                          <p className="text-muted-foreground mt-1">{exam.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {exam.features.map((feature) => (
                          <span key={feature} className="text-xs bg-muted px-3 py-1 rounded-full">
                            {feature}
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

      {/* Study Strategies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Proven Study Strategies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Research-backed techniques for comprehensive exam preparation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studyStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:border-copper/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-full bg-copper/10 flex items-center justify-center mx-auto mb-4">
                        <strategy.icon className="w-7 h-7 text-copper" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{strategy.title}</h3>
                      <p className="text-sm text-muted-foreground">{strategy.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Preparation Timeline</h2>
              <p className="text-muted-foreground">
                A strategic approach to comprehensive exam preparation.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { months: "6 months before", tasks: "Compile reading list, identify key theorists, create study schedule" },
                { months: "4 months before", tasks: "Begin systematic reading, create concept maps, join study group" },
                { months: "2 months before", tasks: "Start practice essays, meet with committee, refine focus areas" },
                { months: "1 month before", tasks: "Intensive review, timed practice tests, oral presentation prep" },
                { months: "1 week before", tasks: "Light review, rest, logistics planning, mental preparation" }
              ].map((item, index) => (
                <motion.div
                  key={item.months}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-32 text-right">
                    <span className="font-semibold text-copper">{item.months}</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-copper mt-1 flex-shrink-0" />
                  <div className="flex-1 bg-background rounded-lg p-4 shadow-sm">
                    <p className="text-muted-foreground">{item.tasks}</p>
                  </div>
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
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  <CardTitle className="text-xl">Common Mistakes to Avoid</CardTitle>
                </div>
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
            <h2 className="text-2xl font-bold text-foreground mb-6">Related PhD Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/viva-preparation" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <Users className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Viva Preparation</h3>
                    <p className="text-sm text-muted-foreground">Ace your oral defense</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/phd-funding" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <Target className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">PhD Funding</h3>
                    <p className="text-sm text-muted-foreground">Grants & fellowships</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/supervisor-guide" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <Users className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Supervisor Guide</h3>
                    <p className="text-sm text-muted-foreground">Navigate advisor relationships</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/dissertation-structure" className="group">
                <Card className="border-border hover:border-copper/30 transition-all h-full">
                  <CardContent className="p-5">
                    <FileText className="w-6 h-6 text-copper mb-3" />
                    <h3 className="font-medium text-foreground group-hover:text-copper transition-colors">Dissertation Structure</h3>
                    <p className="text-sm text-muted-foreground">Chapter-by-chapter blueprint</p>
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
              Need Expert Exam Preparation Support?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our PhD-qualified experts can help you prepare reading lists, practice responses, 
              and develop strategies tailored to your specific exam format.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90">
                <Link to="/order">Get Exam Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

export default CandidacyExams;
