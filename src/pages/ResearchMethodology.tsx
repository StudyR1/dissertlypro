import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, AggregateRatingSchema } from "@/components/schemas";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Brain, 
  CheckCircle, 
  Clock, 
  FileText, 
  Users,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Scale,
  Target,
  Microscope,
  MessageSquare,
  BarChart3,
  Shuffle,
  Layers,
  Calendar,
  GraduationCap,
  Briefcase,
  Heart
} from "lucide-react";

const ResearchMethodology = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/blog" },
    { name: "Research Methodology Masterclass", url: "/research-methodology" }
  ];

  const methodologyTypes = [
    {
      type: "Quantitative",
      icon: BarChart3,
      color: "text-blue-500",
      description: "Uses numerical data to test hypotheses and establish generalizable patterns. Best for measuring, comparing, and predicting.",
      whenToUse: [
        "Testing theories or hypotheses",
        "Measuring relationships between variables",
        "Generalizing findings to larger populations",
        "Comparing groups or conditions",
        "Establishing cause-and-effect relationships"
      ],
      strengths: [
        "High reliability and replicability",
        "Statistical analysis enables generalization",
        "Objective measurement reduces bias",
        "Large sample sizes increase validity",
        "Results can be visualized easily"
      ],
      limitations: [
        "May miss contextual nuances",
        "Predetermined categories limit discovery",
        "Requires large sample sizes",
        "Cannot explain 'why' behind numbers",
        "May oversimplify complex phenomena"
      ],
      designs: ["Experimental", "Quasi-experimental", "Survey", "Correlational", "Longitudinal", "Cross-sectional"]
    },
    {
      type: "Qualitative",
      icon: MessageSquare,
      color: "text-green-500",
      description: "Explores meanings, experiences, and social phenomena through rich, detailed data. Best for understanding 'how' and 'why'.",
      whenToUse: [
        "Exploring new or understudied topics",
        "Understanding lived experiences",
        "Examining complex social processes",
        "Developing new theories or concepts",
        "Giving voice to marginalized groups"
      ],
      strengths: [
        "Rich, detailed understanding",
        "Flexible and adaptive approach",
        "Captures participant perspectives",
        "Discovers unexpected themes",
        "Contextually grounded findings"
      ],
      limitations: [
        "Time-intensive data collection",
        "Findings not statistically generalizable",
        "Researcher interpretation affects results",
        "Smaller sample sizes",
        "Difficult to replicate exactly"
      ],
      designs: ["Phenomenology", "Grounded theory", "Ethnography", "Case study", "Narrative inquiry", "Thematic analysis"]
    },
    {
      type: "Mixed Methods",
      icon: Shuffle,
      color: "text-purple-500",
      description: "Combines quantitative and qualitative approaches for comprehensive understanding. Best for complex research problems.",
      whenToUse: [
        "Complex phenomena requiring multiple perspectives",
        "Validating findings through triangulation",
        "Explaining quantitative results in depth",
        "Developing and testing instruments",
        "Policy research requiring both breadth and depth"
      ],
      strengths: [
        "Comprehensive understanding",
        "Triangulation increases validity",
        "Offsets weaknesses of single methods",
        "Addresses complex questions",
        "Practical and pragmatic approach"
      ],
      limitations: [
        "Requires expertise in both approaches",
        "Time and resource intensive",
        "Integration can be challenging",
        "May require larger research teams",
        "Philosophical tensions between paradigms"
      ],
      designs: ["Convergent parallel", "Explanatory sequential", "Exploratory sequential", "Embedded", "Transformative", "Multiphase"]
    }
  ];

  const researchDesignSteps = [
    {
      step: 1,
      title: "Identify Your Research Problem",
      description: "Clearly articulate what you want to investigate. The problem should be significant, researchable, and original.",
      tips: [
        "Review literature to identify gaps",
        "Consider practical and theoretical significance",
        "Ensure the problem is focused and manageable",
        "Articulate both practical and academic relevance"
      ]
    },
    {
      step: 2,
      title: "Formulate Research Questions/Hypotheses",
      description: "Develop clear, focused questions (or testable hypotheses for quantitative work) that guide your study.",
      tips: [
        "Questions should be specific and answerable",
        "Align questions with your methodology",
        "Include main question and sub-questions",
        "Ensure hypotheses are falsifiable"
      ]
    },
    {
      step: 3,
      title: "Select Your Methodology",
      description: "Choose between quantitative, qualitative, or mixed methods based on your research questions and philosophy.",
      tips: [
        "Match methodology to research questions",
        "Consider your ontological and epistemological stance",
        "Assess available resources and timeline",
        "Review what methods your field values"
      ]
    },
    {
      step: 4,
      title: "Design Data Collection Strategy",
      description: "Plan how you will gather data including sampling, instruments, and procedures.",
      tips: [
        "Define your target population",
        "Choose appropriate sampling method",
        "Develop or select validated instruments",
        "Plan for pilot testing"
      ]
    },
    {
      step: 5,
      title: "Plan Data Analysis",
      description: "Determine how you will analyze data to answer your research questions.",
      tips: [
        "Match analysis to data type and questions",
        "Consider software requirements (SPSS, NVivo, etc.)",
        "Plan for validity and reliability checks",
        "Document your analytical procedures"
      ]
    },
    {
      step: 6,
      title: "Address Ethical Considerations",
      description: "Ensure your study protects participants and meets institutional requirements.",
      tips: [
        "Obtain IRB/ethics committee approval",
        "Plan informed consent procedures",
        "Address confidentiality and data security",
        "Consider vulnerable populations carefully"
      ]
    }
  ];

  const samplingStrategies = [
    {
      category: "Probability Sampling",
      description: "Every member of population has known, non-zero chance of selection. Essential for quantitative generalizability.",
      methods: [
        { name: "Simple Random", use: "When population is homogeneous and accessible" },
        { name: "Stratified Random", use: "When population has distinct subgroups to represent" },
        { name: "Cluster", use: "When population is geographically dispersed" },
        { name: "Systematic", use: "When population list exists but random selection is impractical" }
      ]
    },
    {
      category: "Non-Probability Sampling",
      description: "Selection based on criteria other than random chance. Common in qualitative research and exploratory studies.",
      methods: [
        { name: "Purposive/Purposeful", use: "Selecting participants who can best inform research questions" },
        { name: "Snowball", use: "Hard-to-reach populations where participants refer others" },
        { name: "Convenience", use: "Exploratory research with limited resources (acknowledge limitations)" },
        { name: "Theoretical", use: "Grounded theory studies building concepts iteratively" }
      ]
    }
  ];

  const validityReliability = [
    {
      concept: "Internal Validity",
      type: "quantitative",
      description: "The degree to which results can be attributed to the intervention rather than confounding variables.",
      threats: ["History", "Maturation", "Testing effects", "Selection bias", "Attrition"],
      strategies: ["Random assignment", "Control groups", "Blinding", "Pre-registration"]
    },
    {
      concept: "External Validity",
      type: "quantitative",
      description: "The extent to which findings can be generalized to other contexts, populations, or times.",
      threats: ["Sample unrepresentativeness", "Artificial settings", "Time-bound findings"],
      strategies: ["Representative sampling", "Replication studies", "Ecological validity checks"]
    },
    {
      concept: "Reliability",
      type: "quantitative",
      description: "The consistency and stability of measurements over time and across conditions.",
      types: ["Test-retest reliability", "Inter-rater reliability", "Internal consistency (Cronbach's α)"],
      strategies: ["Standardized procedures", "Training for raters", "Using validated instruments"]
    },
    {
      concept: "Credibility",
      type: "qualitative",
      description: "The equivalent of internal validity—confidence in the 'truth' of findings from participants' perspectives.",
      strategies: ["Prolonged engagement", "Persistent observation", "Triangulation", "Member checking", "Peer debriefing"]
    },
    {
      concept: "Transferability",
      type: "qualitative",
      description: "The extent to which findings can be applied to other contexts (reader determines this).",
      strategies: ["Thick description", "Detailed context", "Purposive sampling rationale"]
    },
    {
      concept: "Dependability",
      type: "qualitative",
      description: "Consistency of findings if the study were replicated with same participants and context.",
      strategies: ["Audit trail", "Reflexivity journal", "Detailed methodology documentation"]
    },
    {
      concept: "Confirmability",
      type: "qualitative",
      description: "The degree to which findings are shaped by participants rather than researcher bias.",
      strategies: ["Audit trail", "Triangulation", "Reflexivity", "Raw data availability"]
    }
  ];

  const dataCollectionMethods = {
    quantitative: [
      {
        method: "Surveys/Questionnaires",
        description: "Structured instruments for collecting numerical or categorical data from large samples.",
        considerations: ["Validated scales preferred", "Pilot test for clarity", "Consider response rates", "Online vs paper administration"]
      },
      {
        method: "Experiments",
        description: "Controlled manipulation of variables to establish cause-effect relationships.",
        considerations: ["Random assignment critical", "Control confounding variables", "Ethical manipulation only", "Document procedures precisely"]
      },
      {
        method: "Observations (Structured)",
        description: "Systematic recording of behaviors using predetermined categories.",
        considerations: ["Develop coding scheme", "Train observers", "Calculate inter-rater reliability", "Minimize observer effects"]
      },
      {
        method: "Secondary Data Analysis",
        description: "Analysis of existing datasets collected by others.",
        considerations: ["Verify data quality", "Understand original purpose", "Check for missing data", "Cite sources properly"]
      }
    ],
    qualitative: [
      {
        method: "In-Depth Interviews",
        description: "Extended conversations exploring participant perspectives and experiences.",
        considerations: ["Semi-structured guides flexible", "Active listening essential", "Probe for depth", "Record and transcribe verbatim"]
      },
      {
        method: "Focus Groups",
        description: "Group discussions that reveal shared understandings and group dynamics.",
        considerations: ["6-10 participants optimal", "Skilled moderation required", "Manage dominant voices", "Consider power dynamics"]
      },
      {
        method: "Observations (Participant)",
        description: "Immersion in research setting to understand context and behavior.",
        considerations: ["Define researcher role", "Keep detailed field notes", "Balance participation and observation", "Extended time in field"]
      },
      {
        method: "Document Analysis",
        description: "Systematic analysis of existing texts, documents, or artifacts.",
        considerations: ["Assess authenticity", "Consider original context", "Develop coding framework", "Triangulate with other sources"]
      }
    ]
  };

  const faqs = [
    {
      question: "How do I choose between qualitative and quantitative methods?",
      answer: "Match your methodology to your research questions. If you're asking 'how many' or 'what relationship,' choose quantitative. If you're asking 'how' or 'why' about experiences and meanings, choose qualitative. If your questions require both breadth and depth, consider mixed methods. Also consider your field's conventions and your committee's expertise."
    },
    {
      question: "What's the difference between methodology and methods?",
      answer: "Methodology is your overall approach and philosophical framework—why you're using certain methods and how they connect to your research questions. Methods are the specific techniques you use to collect and analyze data. Your dissertation should explain both: the philosophical rationale (methodology) and the practical procedures (methods)."
    },
    {
      question: "How large should my sample size be?",
      answer: "For quantitative studies, sample size depends on your statistical tests, effect size, and desired power (usually .80). Use G*Power software for calculations. For qualitative studies, sample size depends on reaching data saturation—typically 12-15 interviews for homogeneous groups, more for diverse populations. Justify your sample size based on methodology."
    },
    {
      question: "What is triangulation and why is it important?",
      answer: "Triangulation involves using multiple data sources, methods, investigators, or theories to study the same phenomenon. It strengthens your study by providing multiple perspectives and reducing bias. Types include: data triangulation (multiple sources), methodological triangulation (multiple methods), investigator triangulation (multiple researchers), and theory triangulation (multiple theoretical frameworks)."
    },
    {
      question: "How do I ensure my research is ethical?",
      answer: "Submit to your IRB/ethics committee before data collection. Key principles: informed consent, voluntary participation, right to withdraw, confidentiality, minimizing harm, and data security. For vulnerable populations, additional protections apply. Document your ethical procedures thoroughly in your methodology chapter."
    },
    {
      question: "Can I change my methodology during the research?",
      answer: "Some flexibility exists, especially in qualitative research which is often iterative. However, major methodology changes require committee approval and may require new ethics review. Document any changes and justify them. Unexpected findings that require methodological adjustment should be discussed transparently."
    }
  ];

  const relatedResources = [
    {
      title: "SPSS Data Analysis Tutorial",
      description: "Step-by-step guide for statistical analysis in your dissertation.",
      icon: BarChart3,
      link: "/spss-tutorial",
      color: "text-blue-500"
    },
    {
      title: "Literature Review Techniques",
      description: "Advanced strategies for systematic reviews and research synthesis.",
      icon: BookOpen,
      link: "/literature-review-guide",
      color: "text-green-500"
    },
    {
      title: "Supervisor Survival Guide",
      description: "Navigate supervisor relationships and get the support you need.",
      icon: Users,
      link: "/supervisor-guide",
      color: "text-orange-500"
    },
    {
      title: "Viva Preparation",
      description: "Prepare for your oral defense with confidence.",
      icon: GraduationCap,
      link: "/viva-preparation",
      color: "text-purple-500"
    },
    {
      title: "PhD Mental Health Hub",
      description: "Resources for managing wellbeing during doctoral study.",
      icon: Heart,
      link: "/phd-mental-health",
      color: "text-copper"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Research Methodology Masterclass | Qualitative, Quantitative & Mixed Methods | DissertlyPro"
        description="Comprehensive guide to research methodology for dissertations. Learn qualitative, quantitative, and mixed methods approaches. Sampling strategies, validity, data collection, and analysis explained."
        keywords={["research methodology", "dissertation methodology", "qualitative research", "quantitative research", "mixed methods", "research design", "sampling methods", "research validity"]}
        canonical="https://dissertlypro.com/research-methodology"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to Design Your Dissertation Research Methodology"
        description="Comprehensive guide to selecting and justifying research methodology for your dissertation including qualitative, quantitative, and mixed methods approaches."
        totalTime="PT60M"
        steps={[
          { name: "Understand Methodology Types", text: "Learn the distinctions between quantitative (testing hypotheses, measuring relationships), qualitative (exploring experiences, understanding 'how' and 'why'), and mixed methods (combining both for breadth and depth)." },
          { name: "Match Method to Research Questions", text: "Align your methodology with your research questions. 'How many' and 'what relationship' questions suit quantitative methods; 'how' and 'why' questions suit qualitative approaches." },
          { name: "Select Research Design", text: "Choose specific designs: experimental, survey, or correlational for quantitative; phenomenology, grounded theory, or case study for qualitative; concurrent or sequential for mixed methods." },
          { name: "Plan Your Sampling Strategy", text: "Determine probability sampling (random, stratified, cluster) for generalizability or non-probability sampling (purposive, snowball, theoretical) for specific insights. Calculate required sample size." },
          { name: "Choose Data Collection Methods", text: "Select appropriate methods: surveys, experiments, existing data for quantitative; interviews, focus groups, observations for qualitative. Ensure alignment with research design." },
          { name: "Address Validity and Ethics", text: "Plan for internal and external validity, reliability, and trustworthiness. Obtain IRB approval, design informed consent procedures, and address confidentiality and data security." }
        ]}
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2847}
        itemName="Research Methodology Masterclass"
        itemType="EducationalOrganization"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
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
              <Brain className="w-4 h-4" />
              Technical Deep-Dive
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Research Methodology
              <span className="block text-copper mt-2">Masterclass</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Master the foundations of academic research. Comprehensive coverage of qualitative, quantitative, 
              and mixed methods approaches for Master's and doctoral dissertations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-copper" />
                <span>8+ hours of comprehensive content</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4 text-copper" />
                <span>Decision frameworks included</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Microscope className="w-4 h-4 text-copper" />
                <span>Research design templates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Methodology Matters</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your methodology chapter is where you justify <strong>why your study is designed the way it is</strong>. 
                It's not just a description of what you did—it's an argument for why your approach is the most appropriate 
                way to answer your research questions. A well-crafted methodology demonstrates your scholarly competence 
                and establishes the validity of your findings.
              </p>
              
              <div className="bg-copper/5 border-l-4 border-copper p-6 rounded-r-lg my-8">
                <p className="text-foreground font-medium mb-2">This Masterclass Will Help You:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Choose the right methodology for your research questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Design rigorous studies that withstand committee scrutiny</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Understand validity, reliability, and trustworthiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Select appropriate data collection and analysis methods</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Methodologies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Three Research Approaches</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding the foundations, strengths, and appropriate applications of each approach.
            </p>
          </div>
          
          <Tabs defaultValue="quantitative" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 w-full mb-8">
              {methodologyTypes.map((m) => (
                <TabsTrigger key={m.type} value={m.type.toLowerCase()} className="flex items-center gap-2">
                  <m.icon className={`w-4 h-4 ${m.color}`} />
                  <span className="hidden sm:inline">{m.type}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {methodologyTypes.map((methodology) => (
              <TabsContent key={methodology.type} value={methodology.type.toLowerCase()}>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${methodology.color}`}>
                        <methodology.icon className="w-5 h-5" />
                      </div>
                      {methodology.type} Research
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">{methodology.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-copper" />
                        When to Use
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {methodology.whenToUse.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-copper flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Strengths
                        </h4>
                        <ul className="space-y-2">
                          {methodology.strengths.map((item, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-green-500">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                          Limitations
                        </h4>
                        <ul className="space-y-2">
                          {methodology.limitations.map((item, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-orange-500">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-copper" />
                        Common Designs
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {methodology.designs.map((design, index) => (
                          <span key={index} className="px-3 py-1 bg-copper/10 text-copper rounded-full text-sm">
                            {design}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Research Design Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Designing Your Research</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to creating a rigorous and defensible research design.
              </p>
            </div>
            
            <div className="space-y-6">
              {researchDesignSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-copper text-white flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{step.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="ml-14">
                        <ul className="grid md:grid-cols-2 gap-2">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Lightbulb className="w-4 h-4 text-copper flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sampling Strategies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Sampling Strategies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choosing the right sampling method for your research design and questions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {samplingStrategies.map((strategy, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{strategy.category}</CardTitle>
                    <p className="text-sm text-muted-foreground">{strategy.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {strategy.methods.map((method, methodIndex) => (
                        <div key={methodIndex} className="p-3 bg-muted/50 rounded-lg">
                          <p className="font-medium text-foreground text-sm">{method.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{method.use}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Validity & Reliability */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Validity, Reliability & Trustworthiness</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ensuring your research is rigorous and your findings are credible.
              </p>
            </div>
            
            <Tabs defaultValue="quantitative" className="w-full">
              <TabsList className="grid grid-cols-2 w-full mb-8 max-w-md mx-auto">
                <TabsTrigger value="quantitative">Quantitative</TabsTrigger>
                <TabsTrigger value="qualitative">Qualitative</TabsTrigger>
              </TabsList>
              
              <TabsContent value="quantitative">
                <div className="grid md:grid-cols-3 gap-4">
                  {validityReliability
                    .filter(v => v.type === 'quantitative')
                    .map((item, index) => (
                      <Card key={index} className="border-border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">{item.concept}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          {item.threats && (
                            <div>
                              <p className="text-xs font-medium text-orange-500 mb-1">Threats:</p>
                              <div className="flex flex-wrap gap-1">
                                {item.threats.map((threat, i) => (
                                  <span key={i} className="text-xs bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded">
                                    {threat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {item.types && (
                            <div>
                              <p className="text-xs font-medium text-blue-500 mb-1">Types:</p>
                              <ul className="text-xs text-muted-foreground space-y-1">
                                {item.types.map((type, i) => (
                                  <li key={i}>• {type}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div>
                            <p className="text-xs font-medium text-green-500 mb-1">Strategies:</p>
                            <div className="flex flex-wrap gap-1">
                              {item.strategies.map((strategy, i) => (
                                <span key={i} className="text-xs bg-green-500/10 text-green-500 px-2 py-0.5 rounded">
                                  {strategy}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="qualitative">
                <div className="grid md:grid-cols-2 gap-4">
                  {validityReliability
                    .filter(v => v.type === 'qualitative')
                    .map((item, index) => (
                      <Card key={index} className="border-border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">{item.concept}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          <div>
                            <p className="text-xs font-medium text-green-500 mb-1">Strategies:</p>
                            <div className="flex flex-wrap gap-1">
                              {item.strategies.map((strategy, i) => (
                                <span key={i} className="text-xs bg-green-500/10 text-green-500 px-2 py-0.5 rounded">
                                  {strategy}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Data Collection Methods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Data Collection Methods</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Selecting and implementing appropriate data collection techniques.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                  Quantitative Methods
                </h3>
                <div className="space-y-4">
                  {dataCollectionMethods.quantitative.map((method, index) => (
                    <Card key={index} className="border-border">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{method.method}</CardTitle>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {method.considerations.map((consideration, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                              <span className="text-copper">•</span>
                              {consideration}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  Qualitative Methods
                </h3>
                <div className="space-y-4">
                  {dataCollectionMethods.qualitative.map((method, index) => (
                    <Card key={index} className="border-border">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{method.method}</CardTitle>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {method.considerations.map((consideration, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                              <span className="text-copper">•</span>
                              {consideration}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Related Resources</h2>
              <p className="text-muted-foreground">Continue learning with these comprehensive guides.</p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {relatedResources.map((resource, index) => (
                <Link key={index} to={resource.link}>
                  <Card className="border-border hover:border-copper/50 transition-all h-full hover:shadow-lg">
                    <CardContent className="p-4 text-center">
                      <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center mx-auto mb-3 ${resource.color}`}>
                        <resource.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">{resource.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{resource.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-copper/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need Expert Help With Your Methodology?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our methodologists can help you design rigorous studies, choose appropriate methods, 
              and craft a methodology chapter that will impress your committee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                <Link to="/consultation">
                  Book Methodology Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services/methodology">
                  View Methodology Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResearchMethodology;
