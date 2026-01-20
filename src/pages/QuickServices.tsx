import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BreadcrumbSchema } from "@/components/schemas";
import { FloatingOrderButton } from "@/components/cro";
import {
  FileEdit,
  Quote,
  FileText,
  Clock,
  Mail,
  Settings,
  FileSearch,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
  Timer,
  Star
} from "lucide-react";

interface QuickService {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  turnaround: string;
  category: "document" | "consultation" | "template" | "ai-assisted";
  icon: React.ElementType;
  features: string[];
  popular?: boolean;
  wordLimit?: string;
}

const quickServices: QuickService[] = [
  // Document Services
  {
    id: "express-proofreading",
    name: "Express Proofreading",
    description: "Professional grammar, spelling, and punctuation check for your academic document.",
    price: 25,
    originalPrice: 40,
    turnaround: "24 hours",
    category: "document",
    icon: FileEdit,
    features: ["Grammar & spelling check", "Punctuation correction", "Consistency review", "Track changes included"],
    wordLimit: "Up to 3,000 words",
    popular: true
  },
  {
    id: "citation-formatting",
    name: "Citation Formatting",
    description: "Format your references in APA 7th, MLA, Chicago, Harvard, or any style required.",
    price: 30,
    turnaround: "48 hours",
    category: "document",
    icon: Quote,
    features: ["Any citation style", "In-text citations", "Reference list formatting", "Cross-reference verification"],
    wordLimit: "Up to 50 references"
  },
  {
    id: "abstract-polishing",
    name: "Abstract Polishing",
    description: "Expert refinement of your abstract to meet journal or university standards.",
    price: 35,
    turnaround: "24 hours",
    category: "document",
    icon: FileText,
    features: ["Structure optimization", "Word count compliance", "Keyword integration", "Academic tone refinement"],
    wordLimit: "Up to 350 words"
  },
  // Quick Consultations
  {
    id: "clarity-call",
    name: "15-Minute Clarity Call",
    description: "Quick video call to discuss your research questions, methodology, or stuck points.",
    price: 35,
    turnaround: "Book within 48 hours",
    category: "consultation",
    icon: Clock,
    features: ["1-on-1 expert session", "Screen sharing available", "Recording provided", "Follow-up notes included"],
    popular: true
  },
  {
    id: "email-review",
    name: "Supervisor Email Review",
    description: "Professional review and refinement of your email drafts to supervisors or committee.",
    price: 20,
    turnaround: "12 hours",
    category: "consultation",
    icon: Mail,
    features: ["Tone optimization", "Academic etiquette", "Clear messaging", "3 email limit per order"]
  },
  {
    id: "methodology-check",
    name: "Methodology Sanity Check",
    description: "Quick expert review to validate your research design and identify potential issues.",
    price: 50,
    originalPrice: 75,
    turnaround: "48 hours",
    category: "consultation",
    icon: Settings,
    features: ["Design validation", "Gap identification", "Improvement suggestions", "Written feedback report"]
  },
  // Template Customization
  {
    id: "chapter-outline",
    name: "Personalized Chapter Outline",
    description: "Custom-built outline for any chapter based on your specific topic and methodology.",
    price: 40,
    turnaround: "72 hours",
    category: "template",
    icon: FileText,
    features: ["Topic-specific structure", "Section headings", "Key points per section", "Word count guidance"]
  },
  {
    id: "bibliography-starter",
    name: "Bibliography Starter Pack",
    description: "Curated list of 20 highly relevant sources for your research topic.",
    price: 45,
    turnaround: "72 hours",
    category: "template",
    icon: FileSearch,
    features: ["20 vetted sources", "Annotated summaries", "Formatted citations", "Search strategy included"],
    popular: true
  },
  // AI-Assisted Services
  {
    id: "ai-detection-report",
    name: "AI Detection Report",
    description: "Comprehensive analysis of your document for AI-generated content patterns.",
    price: 15,
    turnaround: "6 hours",
    category: "ai-assisted",
    icon: Sparkles,
    features: ["Multi-tool detection", "Section-by-section analysis", "Risk score breakdown", "Humanization tips"],
    wordLimit: "Up to 10,000 words"
  },
  {
    id: "paraphrase-audit",
    name: "Paraphrase Audit",
    description: "Expert review of paraphrased sections to ensure academic integrity and proper attribution.",
    price: 25,
    turnaround: "24 hours",
    category: "ai-assisted",
    icon: ShieldCheck,
    features: ["Source comparison", "Citation verification", "Originality check", "Revision suggestions"],
    wordLimit: "Up to 2,000 words"
  }
];

const categoryInfo = {
  document: {
    label: "Document Services",
    description: "Quick fixes for your academic documents",
    icon: FileEdit
  },
  consultation: {
    label: "Quick Consultations",
    description: "Expert guidance when you need it most",
    icon: Clock
  },
  template: {
    label: "Template Customization",
    description: "Personalized starting points for your work",
    icon: FileText
  },
  "ai-assisted": {
    label: "AI-Assisted Services",
    description: "Modern solutions for academic integrity",
    icon: Sparkles
  }
};

const QuickServices = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices = selectedCategory === "all" 
    ? quickServices 
    : quickServices.filter(s => s.category === selectedCategory);

  const getServicesByCategory = (category: string) => 
    quickServices.filter(s => s.category === category);

  return (
    <Layout>
      <FloatingOrderButton />
      <SEO
        title="Quick Services | Fast Academic Support from $15 | DissertlyPro"
        description="Get fast, affordable academic help. Express proofreading, citation formatting, AI detection reports, and more. Fixed pricing, quick turnaround."
        keywords={["quick academic help", "express proofreading", "citation formatting", "academic editing", "dissertation help", "thesis support"]}
        canonical="/quick-services"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Quick Services", url: "/quick-services" }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight-light to-midnight opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-copper/20 via-transparent to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-6 bg-copper/20 text-copper border-copper/30 hover:bg-copper/30">
            <Zap className="w-3 h-3 mr-1" />
            Fixed Pricing • Fast Turnaround
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Quick Academic Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Small tasks, big impact. Get professional academic help starting at just <span className="text-copper font-semibold">$15</span>. 
            No lengthy consultations—just fast, focused support.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-white/70">
              <Timer className="w-5 h-5 text-copper" />
              <span>6-72 hour turnaround</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <ShieldCheck className="w-5 h-5 text-copper" />
              <span>100% satisfaction guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Star className="w-5 h-5 text-copper" />
              <span>Expert academics only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-2 mb-12">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-copper data-[state=active]:text-white px-6 py-3 rounded-full"
              >
                All Services
              </TabsTrigger>
              {Object.entries(categoryInfo).map(([key, info]) => (
                <TabsTrigger 
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-copper data-[state=active]:text-white px-6 py-3 rounded-full flex items-center gap-2"
                >
                  <info.icon className="w-4 h-4" />
                  {info.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Choose Service", desc: "Pick from our fixed-price offerings" },
              { step: "2", title: "Upload Files", desc: "Share your document or requirements" },
              { step: "3", title: "Pay Securely", desc: "Complete payment via PayPal" },
              { step: "4", title: "Receive Results", desc: "Get polished work in your inbox" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-copper text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-midnight text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Something Bigger?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Our quick services are perfect for small tasks. For comprehensive dissertation support, 
            explore our full service packages.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-copper hover:bg-copper-light text-white">
              <Link to="/services">
                View Full Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/consultation">
                Book Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ServiceCard = ({ service }: { service: QuickService }) => {
  const Icon = service.icon;
  
  return (
    <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-copper/30">
      {service.popular && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-copper text-white">Popular</Badge>
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-4 group-hover:bg-copper/20 transition-colors">
          <Icon className="w-6 h-6 text-copper" />
        </div>
        <CardTitle className="text-xl">{service.name}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">${service.price}</span>
          {service.originalPrice && (
            <span className="text-lg text-muted-foreground line-through">${service.originalPrice}</span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            <Timer className="w-3 h-3 mr-1" />
            {service.turnaround}
          </Badge>
          {service.wordLimit && (
            <Badge variant="outline" className="text-xs">
              {service.wordLimit}
            </Badge>
          )}
        </div>
        
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button asChild className="w-full bg-midnight hover:bg-midnight-light group-hover:bg-copper group-hover:text-white transition-colors">
          <Link to={`/order?service=quick-${service.id}&price=${service.price}`}>
            Order Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickServices;
