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
  BookOpen, 
  CheckCircle, 
  Clock, 
  FileText, 
  Search,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  Layers,
  Target,
  Filter,
  GitMerge,
  FileQuestion,
  Sparkles,
  Database,
  ListTree,
  Users,
  Calendar,
  GraduationCap,
  Briefcase,
  Heart,
  BarChart3,
  Brain
} from "lucide-react";

const LiteratureReviewGuide = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/blog" },
    { name: "Literature Review Techniques", url: "/literature-review-guide" }
  ];

  const reviewTypes = [
    {
      type: "Narrative/Traditional Review",
      icon: BookOpen,
      description: "Comprehensive, critical summary of literature without strict protocol. Common in dissertations.",
      whenToUse: "When exploring a broad topic or providing context for your study",
      strengths: ["Flexible approach", "Can cover diverse topics", "Good for theory building"],
      limitations: ["May be biased", "Not replicable", "Subjective source selection"],
      structure: "Thematic, conceptual, or chronological organization"
    },
    {
      type: "Systematic Review",
      icon: Filter,
      description: "Rigorous, protocol-driven synthesis of all available evidence on a specific question.",
      whenToUse: "When you need comprehensive, unbiased synthesis of empirical evidence",
      strengths: ["Minimizes bias", "Replicable", "Comprehensive coverage"],
      limitations: ["Time-intensive", "Narrow focus", "May miss qualitative nuances"],
      structure: "Follows PRISMA guidelines with explicit search and selection criteria"
    },
    {
      type: "Scoping Review",
      icon: Search,
      description: "Maps the breadth of literature on a topic without synthesizing findings.",
      whenToUse: "When exploring the scope of a research area or identifying gaps",
      strengths: ["Broad overview", "Identifies research gaps", "Less time than systematic"],
      limitations: ["No quality assessment", "No synthesis", "May lack depth"],
      structure: "Follows Arksey & O'Malley or JBI framework"
    },
    {
      type: "Meta-Analysis",
      icon: BarChart3,
      description: "Statistical synthesis of quantitative findings from multiple studies.",
      whenToUse: "When combining numerical results to estimate overall effect size",
      strengths: ["Increased statistical power", "Precise effect estimates", "Identifies moderators"],
      limitations: ["Requires sufficient similar studies", "Garbage in = garbage out", "Complex methodology"],
      structure: "Systematic review with statistical pooling of effect sizes"
    },
    {
      type: "Critical Review",
      icon: Target,
      description: "Evaluates and critiques literature to propose new frameworks or perspectives.",
      whenToUse: "When developing theoretical contributions or challenging existing assumptions",
      strengths: ["Theory development", "Critical perspective", "Can reshape thinking"],
      limitations: ["Highly subjective", "Requires expertise", "May be controversial"],
      structure: "Organized around central argument or theoretical proposition"
    }
  ];

  const searchStrategies = [
    {
      step: 1,
      title: "Define Your Research Question",
      description: "Use frameworks like PICO (Population, Intervention, Comparison, Outcome) or PEO (Population, Exposure, Outcome) to structure your question.",
      tips: [
        "Be specific but not too narrow",
        "Identify key concepts in your question",
        "Consider synonyms and related terms",
        "Consult with a librarian"
      ]
    },
    {
      step: 2,
      title: "Identify Search Terms",
      description: "Develop comprehensive search terms including synonyms, related concepts, and controlled vocabulary.",
      tips: [
        "Use subject headings (MeSH, ERIC descriptors)",
        "Include British and American spellings",
        "Consider truncation (e.g., educat* for education, educational, educator)",
        "Map concepts to database-specific terms"
      ]
    },
    {
      step: 3,
      title: "Select Databases",
      description: "Choose databases appropriate to your discipline and research question.",
      tips: [
        "Use multiple databases to ensure coverage",
        "Include discipline-specific databases",
        "Don't forget grey literature sources",
        "Set up alerts for new publications"
      ]
    },
    {
      step: 4,
      title: "Construct Search Strings",
      description: "Combine search terms using Boolean operators (AND, OR, NOT) and other search features.",
      tips: [
        "Use OR between synonyms",
        "Use AND between different concepts",
        "Use parentheses to group terms",
        "Test and refine iteratively"
      ]
    },
    {
      step: 5,
      title: "Execute and Document",
      description: "Run searches systematically and maintain detailed records for reproducibility.",
      tips: [
        "Record date, database, and exact search string",
        "Note number of results per search",
        "Use reference management software",
        "Export results consistently"
      ]
    }
  ];

  const databases = [
    {
      category: "Multidisciplinary",
      sources: [
        { name: "Google Scholar", note: "Broad coverage but less precise; good for citation tracking" },
        { name: "Web of Science", note: "High-quality journals; excellent citation analysis" },
        { name: "Scopus", note: "Broader than WoS; good for STEM and social sciences" },
        { name: "ProQuest", note: "Strong for dissertations and theses" }
      ]
    },
    {
      category: "Social Sciences",
      sources: [
        { name: "PsycINFO", note: "Psychology and behavioral sciences" },
        { name: "ERIC", note: "Education research" },
        { name: "Sociological Abstracts", note: "Sociology and related fields" },
        { name: "Social Sciences Citation Index", note: "Part of Web of Science" }
      ]
    },
    {
      category: "Health & Medicine",
      sources: [
        { name: "PubMed/MEDLINE", note: "Biomedical and life sciences" },
        { name: "CINAHL", note: "Nursing and allied health" },
        { name: "Cochrane Library", note: "Systematic reviews and clinical trials" },
        { name: "Embase", note: "Pharmacology and biomedical" }
      ]
    },
    {
      category: "Business & Management",
      sources: [
        { name: "Business Source Complete", note: "Comprehensive business coverage" },
        { name: "ABI/INFORM", note: "Business and management" },
        { name: "Emerald Insight", note: "Management and social sciences" },
        { name: "JSTOR", note: "Historical and current scholarship" }
      ]
    }
  ];

  const synthesisStrategies = [
    {
      strategy: "Thematic Synthesis",
      icon: Layers,
      description: "Organize findings around central themes that emerge across studies.",
      steps: [
        "Code findings from individual studies",
        "Develop descriptive themes from codes",
        "Generate analytical themes that go beyond original studies",
        "Present themes with supporting evidence"
      ],
      bestFor: "Qualitative synthesis, social science research"
    },
    {
      strategy: "Conceptual Mapping",
      icon: GitMerge,
      description: "Create visual representations of relationships between concepts in the literature.",
      steps: [
        "Identify key concepts across studies",
        "Map relationships between concepts",
        "Identify gaps and contradictions",
        "Develop integrative framework"
      ],
      bestFor: "Theory development, complex topics"
    },
    {
      strategy: "Vote Counting",
      icon: ListTree,
      description: "Categorize studies by their findings (positive, negative, null) and count.",
      steps: [
        "Classify each study's main finding",
        "Tally results across categories",
        "Consider quality and sample size",
        "Report proportions with caveats"
      ],
      bestFor: "Quick overview when meta-analysis isn't possible"
    },
    {
      strategy: "Narrative Synthesis",
      icon: FileText,
      description: "Tell the story of the literature, highlighting key developments and debates.",
      steps: [
        "Develop preliminary synthesis",
        "Explore relationships within and between studies",
        "Assess robustness of synthesis",
        "Present integrated narrative"
      ],
      bestFor: "Heterogeneous studies, theory building"
    },
    {
      strategy: "Framework Synthesis",
      icon: Target,
      description: "Use an a priori framework to organize and analyze literature.",
      steps: [
        "Select or develop conceptual framework",
        "Map studies onto framework components",
        "Identify gaps and tensions",
        "Refine or extend framework"
      ],
      bestFor: "Policy research, testing theoretical frameworks"
    }
  ];

  const gapIdentification = [
    {
      gapType: "Methodological Gaps",
      description: "Limitations in how research has been conducted",
      examples: [
        "Lack of longitudinal studies in a predominantly cross-sectional field",
        "Over-reliance on self-report measures",
        "Absence of experimental designs in exploratory areas",
        "Limited use of mixed methods"
      ],
      question: "How could the topic be studied differently or better?"
    },
    {
      gapType: "Population Gaps",
      description: "Underrepresented groups or contexts in the literature",
      examples: [
        "Research conducted only in Western contexts",
        "Specific demographic groups understudied",
        "Organizational sizes or types not examined",
        "Age groups or life stages neglected"
      ],
      question: "Who or what contexts have been overlooked?"
    },
    {
      gapType: "Theoretical Gaps",
      description: "Underdeveloped or untested theoretical perspectives",
      examples: [
        "Theories from other fields not yet applied",
        "Existing theories untested in new contexts",
        "Contradictions between theoretical predictions and findings",
        "Lack of integrated theoretical frameworks"
      ],
      question: "What theories could explain this phenomenon better?"
    },
    {
      gapType: "Empirical Gaps",
      description: "Questions that remain unanswered by existing evidence",
      examples: [
        "Contradictory findings requiring resolution",
        "Mechanisms or mediators unexplored",
        "Boundary conditions undefined",
        "Long-term outcomes unknown"
      ],
      question: "What do we still not know about this topic?"
    },
    {
      gapType: "Practical Gaps",
      description: "Disconnect between research and real-world application",
      examples: [
        "Interventions not tested in practice",
        "Recommendations lacking implementation guidance",
        "Practitioner perspectives not incorporated",
        "Impact assessments missing"
      ],
      question: "How can research better inform practice?"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Summarizing instead of synthesizing",
      consequence: "Your review reads like a list of study summaries rather than an integrated analysis",
      fix: "Focus on themes and arguments. Ask: 'What do these studies say to each other?' Compare, contrast, and integrate findings."
    },
    {
      mistake: "Including everything you read",
      consequence: "Review becomes unfocused and overwhelming; key arguments get lost",
      fix: "Be selective. Only include sources that directly contribute to your argument. Quality over quantity."
    },
    {
      mistake: "Organizing by author or chronology",
      consequence: "Obscures the conceptual structure and makes synthesis difficult",
      fix: "Organize thematically or conceptually. Authors and dates belong in citations, not in your structure."
    },
    {
      mistake: "Failing to justify scope and boundaries",
      consequence: "Reviewers question why you included or excluded certain literature",
      fix: "Explicitly state your inclusion/exclusion criteria and justify your scope decisions."
    },
    {
      mistake: "Not connecting to your research",
      consequence: "Review feels disconnected from your study; doesn't establish rationale",
      fix: "End each section by connecting back to your research questions. Build toward your gap."
    },
    {
      mistake: "Treating all sources as equal",
      consequence: "Weak studies carry same weight as rigorous ones; undermines credibility",
      fix: "Critically evaluate source quality. Note methodological limitations and strength of evidence."
    },
    {
      mistake: "Missing key sources",
      consequence: "Demonstrates incomplete understanding; invites criticism",
      fix: "Use citation tracking (who cites whom). Ask experts. Check reference lists of key papers."
    },
    {
      mistake: "Outdated literature",
      consequence: "Review doesn't reflect current state of knowledge",
      fix: "Set date limits appropriate to your field. Ensure recent sources are included. Update before submission."
    }
  ];

  const writingStructure = [
    {
      section: "Introduction",
      purpose: "Frame the review and orient readers",
      content: [
        "Define the topic and its significance",
        "State the scope and boundaries",
        "Explain organizational structure",
        "Preview main arguments or themes"
      ],
      length: "1-2 paragraphs"
    },
    {
      section: "Main Body (Themes/Sections)",
      purpose: "Present your synthesis of the literature",
      content: [
        "Each section addresses one theme or concept",
        "Begin with topic sentence stating main argument",
        "Integrate multiple sources per paragraph",
        "Use comparison and contrast",
        "Connect to your research questions"
      ],
      length: "Varies by topic complexity"
    },
    {
      section: "Critical Analysis",
      purpose: "Evaluate the state of knowledge",
      content: [
        "Assess methodological quality across studies",
        "Identify contradictions and debates",
        "Note limitations of existing research",
        "Highlight emerging directions"
      ],
      length: "1-2 paragraphs per major theme"
    },
    {
      section: "Research Gap & Rationale",
      purpose: "Establish the need for your study",
      content: [
        "Synthesize identified gaps",
        "Explain why this gap matters",
        "Connect directly to your research questions",
        "Set up your contribution"
      ],
      length: "2-3 paragraphs"
    },
    {
      section: "Conclusion",
      purpose: "Summarize and transition",
      content: [
        "Recap key findings from review",
        "Restate the gap your study addresses",
        "Preview how your methodology addresses the gap",
        "Transition to next chapter"
      ],
      length: "1-2 paragraphs"
    }
  ];

  const faqs = [
    {
      question: "How many sources should my literature review include?",
      answer: "There's no magic number—quality and relevance matter more than quantity. A Master's dissertation might cite 50-80 sources, while a doctoral thesis could have 150-300+. Focus on comprehensively covering your specific topic rather than hitting a number. Every source should serve a purpose."
    },
    {
      question: "How far back should I search for literature?",
      answer: "This depends on your field and topic. Fast-moving fields (technology, medicine) may prioritize last 5-10 years. Fields with strong theoretical traditions may go back further. Always include seminal works regardless of age. State and justify your date parameters explicitly."
    },
    {
      question: "Should I include grey literature?",
      answer: "For comprehensive reviews (especially systematic), yes—grey literature (reports, theses, conference papers) reduces publication bias. For traditional reviews, include grey literature when it offers unique insights not in peer-reviewed sources. Always assess quality critically."
    },
    {
      question: "How do I avoid plagiarism in my literature review?",
      answer: "Paraphrase rather than quote (except for precise definitions). Focus on synthesis—your voice interpreting sources. Use citation management software. Don't copy sentence structures. When in doubt, cite. Run plagiarism checks before submission."
    },
    {
      question: "What if I find contradictory findings in the literature?",
      answer: "Contradictions are valuable—they indicate areas needing further research. Present both sides fairly, then analyze why contradictions exist (different methods, populations, contexts?). This can become part of your gap identification."
    },
    {
      question: "How do I know when I've read enough?",
      answer: "You've reached saturation when you stop finding new themes or perspectives—the same ideas and sources keep appearing. Key works are cited repeatedly. You can predict what sources will say. This is your signal to stop searching and start writing."
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
      title: "Research Methodology Masterclass",
      description: "Comprehensive guide to qualitative, quantitative, and mixed methods.",
      icon: Brain,
      link: "/research-methodology",
      color: "text-purple-500"
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
      color: "text-green-500"
    },
    {
      title: "Part-Time PhD Guide",
      description: "Strategies for balancing doctoral study with other commitments.",
      icon: Briefcase,
      link: "/part-time-phd",
      color: "text-copper"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Literature Review Techniques | Synthesis, Gap Analysis & Writing | DissertlyPro"
        description="Master literature review techniques for your dissertation. Learn systematic search strategies, synthesis methods, gap identification, and writing structure. Comprehensive guide for Master's and PhD students."
        keywords={["literature review", "systematic review", "research synthesis", "gap analysis", "literature review writing", "dissertation literature review", "how to write literature review", "literature search"]}
        canonical="https://dissertlypro.com/literature-review-guide"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to Write a Dissertation Literature Review"
        description="Complete guide to conducting and writing literature reviews including search strategies, synthesis methods, gap identification, and proper structure for Master's and PhD dissertations."
        totalTime="PT50M"
        steps={[
          { name: "Choose Your Review Type", text: "Select the appropriate approach: narrative/traditional for broad topics, systematic for comprehensive evidence synthesis, scoping for mapping research areas, or critical review for theory development." },
          { name: "Develop Search Strategy", text: "Define your research question using PICO or PEO frameworks. Identify key concepts, synonyms, and Boolean operators. Use multiple databases and document your search protocol." },
          { name: "Screen and Select Sources", text: "Apply inclusion/exclusion criteria consistently. Use reference management software. Read strategically—abstracts first, then full papers. Organize sources thematically." },
          { name: "Synthesize the Literature", text: "Move beyond summarizing to synthesis. Use thematic synthesis, vote counting, narrative synthesis, or framework synthesis depending on your review type and research goals." },
          { name: "Identify Research Gaps", text: "Look for methodological gaps, population gaps, contextual gaps, temporal gaps, and theoretical gaps. Document how your study addresses these gaps." },
          { name: "Write with Proper Structure", text: "Begin with introduction and scope, organize body sections thematically, include critical evaluation of sources, establish the gap your study addresses, and conclude with transition to your methodology." }
        ]}
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2847}
        itemName="Literature Review Mastery Guide"
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
              <BookOpen className="w-4 h-4" />
              Technical Deep-Dive
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Literature Review
              <span className="block text-copper mt-2">Mastery Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From comprehensive search strategies to powerful synthesis techniques. 
              Learn to write literature reviews that establish your expertise and justify your research.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-copper" />
                <span>6+ hours of comprehensive content</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Database className="w-4 h-4 text-copper" />
                <span>Database guides included</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-copper" />
                <span>Synthesis frameworks</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">More Than a Summary of Sources</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                A literature review is your opportunity to demonstrate <strong>scholarly expertise</strong> and 
                establish the foundation for your research. It's not a list of what others have written—it's your 
                critical analysis that synthesizes existing knowledge, identifies gaps, and positions your study 
                within the broader academic conversation.
              </p>
              
              <div className="bg-copper/5 border-l-4 border-copper p-6 rounded-r-lg my-8">
                <p className="text-foreground font-medium mb-2">This Guide Will Help You:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Conduct systematic, comprehensive literature searches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Synthesize sources instead of summarizing them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Identify meaningful gaps that justify your research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Write reviews that impress committees and reviewers</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Reviews */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Types of Literature Reviews</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Different review types serve different purposes. Choose based on your research goals.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewTypes.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                        <review.icon className="w-5 h-5 text-copper" />
                      </div>
                      <CardTitle className="text-base">{review.type}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs font-medium text-copper mb-1">When to use:</p>
                      <p className="text-xs text-muted-foreground">{review.whenToUse}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-green-500 mb-1">Strengths:</p>
                      <ul className="text-xs text-muted-foreground space-y-0.5">
                        {review.strengths.map((s, i) => (
                          <li key={i}>• {s}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Strategies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Systematic Search Strategy</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A rigorous, documented search process that ensures comprehensive coverage.
              </p>
            </div>
            
            <div className="space-y-4">
              {searchStrategies.map((step, index) => (
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
                        <div className="w-10 h-10 rounded-full bg-copper text-white flex items-center justify-center font-bold flex-shrink-0">
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

      {/* Databases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Key Databases by Discipline</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use multiple databases to ensure comprehensive coverage of your topic.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {databases.map((category, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-copper" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.sources.map((source, sourceIndex) => (
                        <div key={sourceIndex} className="p-3 bg-muted/50 rounded-lg">
                          <p className="font-medium text-foreground text-sm">{source.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{source.note}</p>
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

      {/* Synthesis Strategies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Synthesis Strategies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Move beyond summarizing to truly synthesizing—integrating insights across sources.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {synthesisStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                          <strategy.icon className="w-5 h-5 text-copper" />
                        </div>
                        <CardTitle className="text-base">{strategy.strategy}</CardTitle>
                      </div>
                      <p className="text-sm text-muted-foreground">{strategy.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs font-medium text-copper mb-2">Steps:</p>
                        <ol className="text-xs text-muted-foreground space-y-1">
                          {strategy.steps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Best for:</span> {strategy.bestFor}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gap Identification */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Identifying Research Gaps</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Finding the gap that justifies your study—the most critical function of your literature review.
              </p>
            </div>
            
            <div className="space-y-4">
              {gapIdentification.map((gap, index) => (
                <Card key={index} className="border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileQuestion className="w-5 h-5 text-copper" />
                      {gap.gapType}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{gap.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-2">
                      {gap.examples.map((example, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="text-copper">•</span>
                          {example}
                        </div>
                      ))}
                    </div>
                    <div className="p-3 bg-copper/5 rounded-lg">
                      <p className="text-sm text-foreground font-medium">Key Question:</p>
                      <p className="text-sm text-muted-foreground">{gap.question}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Writing Structure */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Literature Review Structure</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A proven structure for organizing your literature review chapter.
              </p>
            </div>
            
            <div className="space-y-4">
              {writingStructure.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{section.section}</CardTitle>
                        <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                          {section.length}
                        </span>
                      </div>
                      <p className="text-sm text-copper">{section.purpose}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-copper flex-shrink-0" />
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

      {/* Common Mistakes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Common Mistakes to Avoid</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These errors weaken literature reviews and frustrate committees. Learn to avoid them.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {commonMistakes.map((item, index) => (
                <Card key={index} className="border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-start gap-2 text-red-500">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      {item.mistake}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Consequence:</span>
                      <p className="text-sm text-muted-foreground">{item.consequence}</p>
                    </div>
                    <div className="p-3 bg-copper/5 rounded-lg">
                      <span className="text-sm font-medium text-copper">Solution:</span>
                      <p className="text-sm text-muted-foreground">{item.fix}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
              Need Expert Help With Your Literature Review?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our researchers can help you search, synthesize, and write a literature review 
              that demonstrates your expertise and justifies your study.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                <Link to="/consultation">
                  Book Literature Review Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services/literature-review">
                  View Literature Review Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LiteratureReviewGuide;
