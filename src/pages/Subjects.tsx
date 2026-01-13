import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { 
  ArrowRight, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  BarChart3, 
  Brain, 
  Users, 
  Building2, 
  Laptop, 
  Globe, 
  Scale, 
  Stethoscope,
  TrendingUp
} from "lucide-react";

const subjects = [
  {
    icon: Briefcase,
    title: "Business & Management",
    disciplines: [
      "Strategic Management",
      "Organizational Behavior",
      "Marketing",
      "Finance",
      "Human Resources",
      "Operations Management",
      "Entrepreneurship",
      "International Business",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    disciplines: [
      "Curriculum & Instruction",
      "Educational Leadership",
      "Higher Education",
      "Special Education",
      "Educational Psychology",
      "Educational Technology",
      "Adult Learning",
      "Teacher Education",
    ],
  },
  {
    icon: Stethoscope,
    title: "Nursing & Healthcare",
    disciplines: [
      "Nursing Practice",
      "Healthcare Administration",
      "Public Health Nursing",
      "Clinical Research",
      "Health Informatics",
      "Patient Safety",
      "Community Health",
      "Gerontology",
    ],
  },
  {
    icon: Brain,
    title: "Psychology",
    disciplines: [
      "Clinical Psychology",
      "Organizational Psychology",
      "Developmental Psychology",
      "Social Psychology",
      "Cognitive Psychology",
      "Counseling Psychology",
      "Health Psychology",
      "Forensic Psychology",
    ],
  },
  {
    icon: Users,
    title: "Sociology",
    disciplines: [
      "Social Theory",
      "Urban Sociology",
      "Criminology",
      "Gender Studies",
      "Race & Ethnicity",
      "Social Movements",
      "Family Studies",
      "Organizational Sociology",
    ],
  },
  {
    icon: Heart,
    title: "Public Health",
    disciplines: [
      "Epidemiology",
      "Health Policy",
      "Global Health",
      "Environmental Health",
      "Health Promotion",
      "Biostatistics",
      "Health Economics",
      "Community Health",
    ],
  },
  {
    icon: Building2,
    title: "Engineering",
    disciplines: [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Chemical Engineering",
      "Environmental Engineering",
      "Industrial Engineering",
      "Systems Engineering",
      "Engineering Management",
    ],
  },
  {
    icon: Laptop,
    title: "IT & Data Science",
    disciplines: [
      "Computer Science",
      "Information Systems",
      "Data Analytics",
      "Cybersecurity",
      "Artificial Intelligence",
      "Software Engineering",
      "Database Management",
      "Cloud Computing",
    ],
  },
  {
    icon: TrendingUp,
    title: "Economics & Finance",
    disciplines: [
      "Macroeconomics",
      "Microeconomics",
      "Financial Economics",
      "Development Economics",
      "International Economics",
      "Behavioral Economics",
      "Econometrics",
      "Banking & Finance",
    ],
  },
  {
    icon: Globe,
    title: "Political Science & IR",
    disciplines: [
      "Comparative Politics",
      "International Relations",
      "Political Theory",
      "Public Policy",
      "Security Studies",
      "Political Economy",
      "Governance",
      "Diplomacy",
    ],
  },
  {
    icon: Scale,
    title: "Law & Legal Studies",
    disciplines: [
      "Constitutional Law",
      "International Law",
      "Criminal Law",
      "Corporate Law",
      "Human Rights",
      "Environmental Law",
      "Intellectual Property",
      "Legal Theory",
    ],
  },
  {
    icon: BarChart3,
    title: "Social Sciences",
    disciplines: [
      "Anthropology",
      "Geography",
      "Communication Studies",
      "Media Studies",
      "History",
      "Philosophy",
      "Religious Studies",
      "Cultural Studies",
    ],
  },
];

const Subjects = () => {
  return (
    <Layout>
      <SEO 
        title="Subjects We Cover"
        description="Expert dissertation support across all academic disciplines including Business, Education, Nursing, Psychology, Engineering, IT, Economics, and more. PhD-qualified subject specialists."
        canonical="/subjects"
        keywords={['dissertation subjects', 'academic disciplines', 'thesis topics', 'research fields', 'subject experts']}
      />
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-sans font-semibold text-sm tracking-wider uppercase mb-4">
              Subjects We Cover
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Expertise Across All Disciplines
            </h1>
            <p className="text-xl text-primary-foreground/80 font-sans leading-relaxed">
              Our network of PhD-qualified experts spans virtually every academic field. 
              Whatever your research focus, we have specialists ready to support your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border shadow-subtle hover:shadow-card transition-all duration-300 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary mb-4">
                  <subject.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  {subject.title}
                </h3>
                <ul className="space-y-1.5">
                  {subject.disciplines.map((discipline, i) => (
                    <li key={i} className="text-sm text-muted-foreground font-sans">
                      • {discipline}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-ivory-warm">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Don't See Your Field?
            </h2>
            <p className="text-muted-foreground font-sans text-lg mb-8">
              Our network is constantly expanding. Contact us with your specific research area, 
              and we'll match you with a qualified expert.
            </p>
            <Button variant="copper" size="xl" asChild>
              <Link to="/consultation">
                Discuss Your Research
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Subjects;
