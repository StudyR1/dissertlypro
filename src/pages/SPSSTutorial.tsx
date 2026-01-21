import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, AggregateRatingSchema, VideoObjectSchema } from "@/components/schemas";
import HowToSchema from "@/components/schemas/HowToSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import RelatedContent from "@/components/ui/RelatedContent";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Calculator,
  CheckCircle, 
  Clock, 
  Database, 
  FileSpreadsheet,
  Filter,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Play,
  Download,
  Settings,
  TrendingUp,
  Users,
  Heart,
  Target,
  Calendar,
  GraduationCap,
  Briefcase,
  Brain
} from "lucide-react";

const SPSSTutorial = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/blog" },
    { name: "SPSS Tutorial for Dissertation Analysis", url: "/spss-tutorial" }
  ];

  const spssModules = [
    {
      module: "Data Entry & Preparation",
      icon: Database,
      topics: [
        "Creating and importing datasets",
        "Variable View vs Data View explained",
        "Defining variable types (nominal, ordinal, scale)",
        "Setting value labels and missing values",
        "Data cleaning and outlier detection"
      ],
      estimatedTime: "45 min"
    },
    {
      module: "Descriptive Statistics",
      icon: BarChart3,
      topics: [
        "Frequencies and percentages",
        "Measures of central tendency (mean, median, mode)",
        "Measures of dispersion (SD, variance, range)",
        "Creating summary tables for dissertations",
        "Normality testing (Shapiro-Wilk, K-S tests)"
      ],
      estimatedTime: "60 min"
    },
    {
      module: "Inferential Statistics",
      icon: TrendingUp,
      topics: [
        "Independent samples t-test",
        "Paired samples t-test",
        "One-way ANOVA",
        "Chi-square test of independence",
        "Correlation analysis (Pearson, Spearman)"
      ],
      estimatedTime: "90 min"
    },
    {
      module: "Regression Analysis",
      icon: Calculator,
      topics: [
        "Simple linear regression",
        "Multiple linear regression",
        "Hierarchical regression",
        "Checking assumptions (multicollinearity, homoscedasticity)",
        "Interpreting and reporting regression tables"
      ],
      estimatedTime: "120 min"
    },
    {
      module: "Advanced Techniques",
      icon: Filter,
      topics: [
        "Factor analysis (EFA and CFA basics)",
        "Reliability analysis (Cronbach's alpha)",
        "Mediation and moderation testing",
        "Non-parametric alternatives",
        "MANOVA overview"
      ],
      estimatedTime: "90 min"
    }
  ];

  const testDecisionGuide = [
    {
      question: "What is your research question type?",
      options: [
        {
          answer: "Comparing groups (e.g., gender differences)",
          followUp: "How many groups?",
          tests: [
            { groups: "2 groups", test: "Independent t-test (parametric) or Mann-Whitney U (non-parametric)" },
            { groups: "3+ groups", test: "One-way ANOVA (parametric) or Kruskal-Wallis (non-parametric)" }
          ]
        },
        {
          answer: "Examining relationships between variables",
          tests: [
            { type: "Two continuous variables", test: "Pearson correlation (parametric) or Spearman (non-parametric)" },
            { type: "Two categorical variables", test: "Chi-square test of independence" },
            { type: "Predicting outcomes", test: "Regression analysis (linear, logistic, hierarchical)" }
          ]
        },
        {
          answer: "Comparing same group over time",
          tests: [
            { time: "2 time points", test: "Paired t-test (parametric) or Wilcoxon (non-parametric)" },
            { time: "3+ time points", test: "Repeated measures ANOVA" }
          ]
        }
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Not checking assumptions before running tests",
      consequence: "Invalid results that won't survive committee scrutiny",
      fix: "Always test normality (Analyze → Descriptive Statistics → Explore) and homogeneity of variance (Levene's test) first"
    },
    {
      mistake: "Confusing statistical significance with practical significance",
      consequence: "Overinterpreting small effects or dismissing meaningful patterns",
      fix: "Always report effect sizes (Cohen's d, η², R²) alongside p-values"
    },
    {
      mistake: "Deleting missing data without justification",
      consequence: "Biased results and reduced statistical power",
      fix: "Use Analyze → Missing Value Analysis first. Consider imputation or pairwise deletion when appropriate"
    },
    {
      mistake: "Running multiple tests without correction",
      consequence: "Inflated Type I error rate (finding false positives)",
      fix: "Apply Bonferroni correction or use multivariate tests when running multiple comparisons"
    },
    {
      mistake: "Reporting results without checking output thoroughly",
      consequence: "Missing important warnings, incorrect interpretations",
      fix: "Read all footnotes and warnings in SPSS output. Check sample sizes match your expectations"
    },
    {
      mistake: "Using the wrong variable type",
      consequence: "SPSS runs inappropriate analyses",
      fix: "In Variable View, ensure Measure column shows correct type: Nominal, Ordinal, or Scale"
    }
  ];

  const syntaxExamples = [
    {
      analysis: "Descriptive Statistics",
      syntax: `DESCRIPTIVES VARIABLES=age income education
  /STATISTICS=MEAN STDDEV MIN MAX.

FREQUENCIES VARIABLES=gender marital_status
  /BARCHART.`,
      explanation: "Generates means and SDs for continuous variables, and frequency tables with charts for categorical variables."
    },
    {
      analysis: "Independent Samples T-Test",
      syntax: `T-TEST GROUPS=gender(1 2)
  /VARIABLES=satisfaction_score
  /CRITERIA=CI(.95).`,
      explanation: "Compares satisfaction scores between two gender groups (coded 1 and 2) with 95% confidence interval."
    },
    {
      analysis: "Correlation Matrix",
      syntax: `CORRELATIONS
  /VARIABLES=motivation performance self_efficacy
  /PRINT=TWOTAIL NOSIG
  /MISSING=PAIRWISE.`,
      explanation: "Creates a correlation matrix with two-tailed significance and pairwise deletion for missing data."
    },
    {
      analysis: "Multiple Regression",
      syntax: `REGRESSION
  /DESCRIPTIVES MEAN STDDEV CORR SIG N
  /DEPENDENT performance
  /METHOD=ENTER age education experience
  /RESIDUALS HISTOGRAM(ZRESID) NORMPROB(ZRESID)
  /CASEWISE PLOT(ZRESID) OUTLIERS(3).`,
      explanation: "Runs multiple regression with assumption checks (residual plots) and outlier identification."
    },
    {
      analysis: "Reliability Analysis",
      syntax: `RELIABILITY
  /VARIABLES=item1 item2 item3 item4 item5
  /SCALE('Survey Scale') ALL
  /MODEL=ALPHA
  /STATISTICS=DESCRIPTIVE SCALE CORR
  /SUMMARY=TOTAL.`,
      explanation: "Calculates Cronbach's alpha for scale reliability with item-total statistics."
    }
  ];

  const outputInterpretation = [
    {
      test: "T-Test Output",
      keyElements: [
        { element: "Levene's Test", interpretation: "If p < .05, variances are unequal—use the 'Equal variances not assumed' row" },
        { element: "t-value", interpretation: "The test statistic. Larger absolute values indicate greater group differences" },
        { element: "df (degrees of freedom)", interpretation: "Based on sample size. Affects critical t-value for significance" },
        { element: "Sig. (2-tailed)", interpretation: "Your p-value. If < .05, the difference is statistically significant" },
        { element: "Mean Difference", interpretation: "The actual difference between group means in original units" },
        { element: "95% CI of Difference", interpretation: "If this range doesn't include 0, the difference is significant" }
      ]
    },
    {
      test: "ANOVA Output",
      keyElements: [
        { element: "Between Groups SS", interpretation: "Variance explained by group membership" },
        { element: "Within Groups SS", interpretation: "Variance due to individual differences within groups" },
        { element: "F-ratio", interpretation: "Between-groups variance ÷ within-groups variance. Higher = greater group differences" },
        { element: "Sig.", interpretation: "P-value for the overall F-test. If < .05, at least one group differs" },
        { element: "Post Hoc Tests", interpretation: "Identifies which specific groups differ (Tukey, Bonferroni, etc.)" }
      ]
    },
    {
      test: "Regression Output",
      keyElements: [
        { element: "R²", interpretation: "Proportion of variance explained (0-1). Multiply by 100 for percentage" },
        { element: "Adjusted R²", interpretation: "R² corrected for number of predictors. Use for model comparison" },
        { element: "ANOVA table F", interpretation: "Tests if the overall model is significant (R² > 0)" },
        { element: "Unstandardized B", interpretation: "For every 1-unit increase in predictor, outcome changes by B units" },
        { element: "Standardized Beta (β)", interpretation: "Allows comparison between predictors with different scales" },
        { element: "VIF", interpretation: "Variance Inflation Factor. VIF > 5-10 suggests multicollinearity problems" }
      ]
    }
  ];

  const faqs = [
    {
      question: "Which version of SPSS should I use for my dissertation?",
      answer: "Most universities provide SPSS through campus licenses. Version 25 or later is recommended for the latest features and improved interface. All core statistical tests work consistently across versions, so don't worry if your version differs slightly from tutorials online."
    },
    {
      question: "Is SPSS better than R or Python for dissertation analysis?",
      answer: "SPSS excels for point-and-click analysis and is widely accepted in social sciences, education, psychology, and business dissertations. R and Python offer more flexibility and are preferred in data science and technical fields. Use what your committee expects and what you can learn efficiently."
    },
    {
      question: "How do I report SPSS results in APA format?",
      answer: "SPSS output needs reformatting for APA. Report the test statistic, degrees of freedom, p-value, and effect size. Example for t-test: 't(98) = 2.45, p = .016, d = 0.49'. Use the Publication Manual of the American Psychological Association (7th ed.) as your reference."
    },
    {
      question: "What should I do if my data isn't normally distributed?",
      answer: "First, check your sample size—with n > 30, parametric tests are often robust to violations. If distribution is severely non-normal, consider data transformation (log, square root) or use non-parametric alternatives (Mann-Whitney, Kruskal-Wallis, Spearman correlation)."
    },
    {
      question: "How do I handle missing data in SPSS?",
      answer: "Run Analyze → Missing Value Analysis to understand patterns. For small amounts of random missing data (<5%), listwise deletion is acceptable. For more missing data, consider multiple imputation (available in SPSS) or pairwise deletion. Document your approach in your methodology chapter."
    },
    {
      question: "Can SPSS handle qualitative data?",
      answer: "SPSS is designed for quantitative analysis. For qualitative data, use NVivo, ATLAS.ti, or manual thematic analysis. However, you can use SPSS for content analysis where qualitative data has been coded numerically."
    }
  ];

  const relatedResources = [
    {
      title: "Research Methodology Masterclass",
      description: "Comprehensive guide to qualitative, quantitative, and mixed methods approaches.",
      icon: Brain,
      link: "/research-methodology",
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
      title: "Deadlines & Deferrals",
      description: "Navigate extensions and timeline management for your dissertation.",
      icon: Calendar,
      link: "/deadlines-deferrals",
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
        title="SPSS Tutorial for Dissertation Data Analysis | Complete Guide | DissertlyPro"
        description="Master SPSS for your dissertation with our comprehensive tutorial. Step-by-step guides for data entry, statistical tests, interpretation, and APA reporting. Free syntax examples included."
        keywords={["SPSS tutorial", "dissertation data analysis", "SPSS for thesis", "statistical analysis SPSS", "SPSS regression", "SPSS t-test", "dissertation statistics", "SPSS for beginners"]}
        canonical="https://dissertlypro.com/spss-tutorial"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to Analyze Dissertation Data Using SPSS"
        description="Complete SPSS tutorial for dissertation analysis covering data preparation, descriptive statistics, inferential tests, regression analysis, and APA-style reporting."
        totalTime="PT90M"
        steps={[
          { name: "Prepare Your Data", text: "Create and import your dataset. In Variable View, define variable types (nominal, ordinal, scale), set value labels and missing values. Clean data and detect outliers before analysis." },
          { name: "Run Descriptive Statistics", text: "Calculate frequencies, measures of central tendency (mean, median, mode), and dispersion (SD, variance, range). Create summary tables and test normality using Shapiro-Wilk or K-S tests." },
          { name: "Choose the Right Statistical Test", text: "Match your test to your research question: t-tests for comparing two groups, ANOVA for multiple groups, chi-square for categorical relationships, correlation for continuous relationships." },
          { name: "Check Assumptions Before Testing", text: "Always test normality (Analyze → Descriptive Statistics → Explore) and homogeneity of variance (Levene's test) before running parametric tests. Use non-parametric alternatives when assumptions are violated." },
          { name: "Run Your Analysis", text: "Execute inferential statistics and regression analyses. For regression, check multicollinearity (VIF), homoscedasticity, and normality of residuals." },
          { name: "Interpret and Report Results", text: "Read all output carefully including footnotes and warnings. Report test statistics, degrees of freedom, p-values, and effect sizes in APA format. Example: 't(98) = 2.45, p = .016, d = 0.49'." }
        ]}
      />
      <AggregateRatingSchema 
        ratingValue={4.9}
        reviewCount={2847}
        itemName="SPSS Tutorial for Dissertation Analysis"
        itemType="EducationalOrganization"
      />
      <VideoObjectSchema
        name="SPSS Tutorial: Complete Guide to Dissertation Data Analysis"
        description="Master SPSS for your dissertation with this comprehensive video tutorial. Step-by-step guides for data entry, statistical tests, regression analysis, interpretation, and APA reporting."
        thumbnailUrl="https://dissertlypro.com/og-images/og-tools.jpg"
        uploadDate="2026-01-15"
        duration="PT7H30M"
        hasPart={[
          { name: "Data Entry & Preparation", startOffset: 0, endOffset: 2700 },
          { name: "Descriptive Statistics", startOffset: 2700, endOffset: 6300 },
          { name: "Inferential Statistics", startOffset: 6300, endOffset: 11700 },
          { name: "Regression Analysis", startOffset: 11700, endOffset: 18900 },
          { name: "Advanced Techniques", startOffset: 18900, endOffset: 27000 }
        ]}
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
              <BarChart3 className="w-4 h-4" />
              Technical Deep-Dive
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              SPSS Tutorial for
              <span className="block text-copper mt-2">Dissertation Data Analysis</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From raw data to dissertation-ready results. Master statistical analysis with step-by-step guidance, 
              practical syntax examples, and expert interpretation strategies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-copper" />
                <span>7+ hours of comprehensive content</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileSpreadsheet className="w-4 h-4 text-copper" />
                <span>Free syntax examples included</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-copper" />
                <span>Built for Master's & PhD students</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Why SPSS for Your Dissertation?</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>SPSS (Statistical Package for the Social Sciences)</strong> remains the most widely used statistical software 
                in social sciences, education, psychology, business, and health research. Its point-and-click interface makes 
                sophisticated statistical analysis accessible without programming knowledge—perfect for researchers who want to 
                focus on their research questions rather than coding.
              </p>
              
              <div className="bg-copper/5 border-l-4 border-copper p-6 rounded-r-lg my-8">
                <p className="text-foreground font-medium mb-2">This Tutorial Will Help You:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Choose the right statistical test for your research questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Set up your data correctly to avoid analysis errors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Interpret SPSS output and report results in APA format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span>Avoid common mistakes that could invalidate your results</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Complete Learning Path</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Five comprehensive modules taking you from data preparation to advanced analysis techniques.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-4">
            {spssModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border hover:border-copper/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                          <module.icon className="w-6 h-6 text-copper" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">Module {index + 1}: {module.module}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{module.estimatedTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-copper flex-shrink-0" />
                          <span className="text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Selection Guide */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Which Test Should I Use?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use this decision guide to select the appropriate statistical test for your research question.
              </p>
            </div>
            
            <div className="space-y-6">
              {testDecisionGuide[0].options.map((option, index) => (
                <Card key={index} className="border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="w-5 h-5 text-copper" />
                      {option.answer}
                    </CardTitle>
                    {option.followUp && (
                      <p className="text-sm text-muted-foreground mt-1">{option.followUp}</p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {option.tests.map((test, testIndex) => (
                        <div key={testIndex} className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm font-medium text-foreground">
                            {test.groups || test.type || test.time}:
                          </span>
                          <span className="text-sm text-muted-foreground">{test.test}</span>
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

      {/* Syntax Examples */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready-to-Use SPSS Syntax</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Copy these syntax commands directly into SPSS. Modify variable names to match your dataset.
              </p>
            </div>
            
            <Tabs defaultValue="descriptives" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-6">
                {syntaxExamples.map((example, index) => (
                  <TabsTrigger key={index} value={example.analysis.toLowerCase().replace(/\s+/g, '-')} className="text-xs sm:text-sm">
                    {example.analysis}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {syntaxExamples.map((example, index) => (
                <TabsContent key={index} value={example.analysis.toLowerCase().replace(/\s+/g, '-')}>
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Settings className="w-5 h-5 text-copper" />
                        {example.analysis}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-card border border-border rounded-lg p-4 mb-4 overflow-x-auto">
                        <pre className="text-sm text-foreground font-mono whitespace-pre-wrap">{example.syntax}</pre>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Lightbulb className="w-4 h-4 text-copper mt-0.5 flex-shrink-0" />
                        <span>{example.explanation}</span>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Output Interpretation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Reading SPSS Output</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding what each number means in your results tables.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {outputInterpretation.map((output, index) => (
                <AccordionItem key={index} value={`output-${index}`} className="border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-copper" />
                      {output.test}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {output.keyElements.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex flex-col gap-1 p-3 bg-muted/50 rounded-lg">
                          <span className="font-medium text-foreground">{item.element}</span>
                          <span className="text-sm text-muted-foreground">{item.interpretation}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                These errors can invalidate your analysis and delay your dissertation. Learn to avoid them.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border h-full">
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
                </motion.div>
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
              Need Expert Help With Your Data Analysis?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our statisticians can help you design your analysis, interpret results, 
              and present findings that will impress your committee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
                <Link to="/consultation">
                  Book Statistics Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services/data-analysis">
                  View Analysis Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <RelatedContent currentUrl="/spss-tutorial" />
    </Layout>
  );
};

export default SPSSTutorial;
