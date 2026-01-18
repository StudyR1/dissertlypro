/**
 * Topic Clusters - Semantic relationships for SEO authority
 * 
 * Each cluster has:
 * - pillar: The main authoritative page on the topic
 * - spokes: Related content that links to/from the pillar
 * - tools: Interactive tools related to the topic
 * - keywords: Target keywords for the cluster
 */

export interface TopicItem {
  title: string;
  url: string;
  description: string;
  type: "guide" | "tool" | "blog" | "service";
}

export interface TopicCluster {
  id: string;
  name: string;
  pillar: TopicItem;
  spokes: TopicItem[];
  tools: TopicItem[];
  keywords: string[];
}

export const topicClusters: TopicCluster[] = [
  {
    id: "literature-review",
    name: "Literature Review",
    pillar: {
      title: "Literature Review Guide",
      url: "/literature-review-guide",
      description: "Comprehensive guide to writing a literature review",
      type: "guide"
    },
    spokes: [
      { title: "Systematic Literature Review", url: "/systematic-literature-review", description: "PRISMA methodology for systematic reviews", type: "guide" },
      { title: "Citation Mastery", url: "/citation-mastery", description: "Master academic citation styles", type: "guide" },
      { title: "Citation Styles Guide", url: "/blog/citation-styles-guide-apa-mla-chicago-harvard", description: "APA, MLA, Chicago, Harvard formatting", type: "blog" }
    ],
    tools: [
      { title: "Citation Generator", url: "/tools/citation-generator", description: "Generate APA, MLA, Chicago citations", type: "tool" },
      { title: "Literature Search Builder", url: "/tools/literature-search", description: "Build Boolean search queries", type: "tool" },
      { title: "PRISMA Flow Generator", url: "/tools/prisma-flow", description: "Create PRISMA flow diagrams", type: "tool" },
      { title: "Reference Manager", url: "/tools/reference-manager", description: "Organize and export citations", type: "tool" }
    ],
    keywords: ["literature review", "systematic review", "PRISMA", "citation styles", "academic sources"]
  },
  {
    id: "research-methodology",
    name: "Research Methodology",
    pillar: {
      title: "Research Methodology Guide",
      url: "/research-methodology",
      description: "Complete guide to research methodology design",
      type: "guide"
    },
    spokes: [
      { title: "Qualitative Analysis Guide", url: "/qualitative-analysis", description: "Qualitative research methods and coding", type: "guide" },
      { title: "Mixed Methods Research", url: "/mixed-methods-research", description: "Combining quantitative and qualitative methods", type: "guide" },
      { title: "Research Questions Guide", url: "/research-questions", description: "Developing strong research questions", type: "guide" },
      { title: "IRB Ethics Guide", url: "/irb-ethics-guide", description: "Ethics approval and human subjects research", type: "guide" }
    ],
    tools: [
      { title: "Methodology Selector Quiz", url: "/tools/methodology-selector", description: "Find your ideal methodology", type: "tool" },
      { title: "Research Question Validator", url: "/tools/research-question-validator", description: "PICO/SPIDER framework validation", type: "tool" },
      { title: "Outline Generator", url: "/tools/outline-generator", description: "Generate chapter outlines", type: "tool" }
    ],
    keywords: ["research methodology", "qualitative research", "quantitative research", "mixed methods", "research design"]
  },
  {
    id: "dissertation-writing",
    name: "Dissertation Writing",
    pillar: {
      title: "Dissertation Writing Guide",
      url: "/dissertation-writing",
      description: "Complete guide to dissertation writing",
      type: "guide"
    },
    spokes: [
      { title: "Dissertation Structure", url: "/dissertation-structure", description: "Standard dissertation chapter structure", type: "guide" },
      { title: "Thesis Structure", url: "/thesis-structure", description: "Master's thesis structure guide", type: "guide" },
      { title: "Academic Writing Guide", url: "/academic-writing", description: "Academic writing style and tone", type: "guide" },
      { title: "How to Write a Thesis Statement", url: "/blog/how-to-write-thesis-statement-guide", description: "Crafting strong thesis statements", type: "blog" }
    ],
    tools: [
      { title: "Thesis Statement Builder", url: "/tools/thesis-builder", description: "Build thesis statements step-by-step", type: "tool" },
      { title: "Chapter Timeline Planner", url: "/tools/chapter-planner", description: "Plan your dissertation timeline", type: "tool" },
      { title: "Word Counter", url: "/tools/word-counter", description: "Track word count and reading time", type: "tool" },
      { title: "Outline Generator", url: "/tools/outline-generator", description: "Generate chapter outlines", type: "tool" }
    ],
    keywords: ["dissertation writing", "thesis writing", "academic writing", "dissertation structure", "thesis statement"]
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    pillar: {
      title: "Data Analysis Services",
      url: "/services/data-analysis",
      description: "Professional data analysis support",
      type: "service"
    },
    spokes: [
      { title: "SPSS Tutorial", url: "/spss-tutorial", description: "Complete SPSS analysis guide", type: "guide" },
      { title: "NVivo Tutorial", url: "/nvivo-tutorial", description: "Qualitative analysis with NVivo", type: "guide" },
      { title: "Data Visualization", url: "/data-visualization", description: "Creating effective charts and figures", type: "guide" },
      { title: "Qualitative Analysis", url: "/qualitative-analysis", description: "Coding and thematic analysis", type: "guide" }
    ],
    tools: [
      { title: "Methodology Selector", url: "/tools/methodology-selector", description: "Choose the right analysis method", type: "tool" }
    ],
    keywords: ["data analysis", "SPSS", "NVivo", "statistical analysis", "qualitative coding", "data visualization"]
  },
  {
    id: "thesis-defense",
    name: "Thesis Defense & Completion",
    pillar: {
      title: "Viva Preparation Guide",
      url: "/viva-preparation",
      description: "Complete guide to dissertation defense",
      type: "guide"
    },
    spokes: [
      { title: "Master's Defense Guide", url: "/masters-defense", description: "Master's thesis defense preparation", type: "guide" },
      { title: "Committee Communication", url: "/committee-communication", description: "Working with your dissertation committee", type: "guide" },
      { title: "Committee Conflicts", url: "/committee-conflicts", description: "Resolving committee disagreements", type: "guide" },
      { title: "Supervisor Guide", url: "/supervisor-guide", description: "Managing supervisor relationships", type: "guide" }
    ],
    tools: [
      { title: "Deadline Risk Checker", url: "/tools/deadline-checker", description: "Assess your timeline risk", type: "tool" },
      { title: "Chapter Planner", url: "/tools/chapter-planner", description: "Plan completion milestones", type: "tool" }
    ],
    keywords: ["viva voce", "dissertation defense", "thesis defense", "oral examination", "committee"]
  },
  {
    id: "phd-journey",
    name: "PhD Journey",
    pillar: {
      title: "PhD Resources Hub",
      url: "/phd-resources",
      description: "Comprehensive PhD student resources",
      type: "guide"
    },
    spokes: [
      { title: "Candidacy Exams", url: "/candidacy-exams", description: "Preparing for qualifying exams", type: "guide" },
      { title: "PhD Funding Guide", url: "/phd-funding", description: "Funding your doctoral studies", type: "guide" },
      { title: "PhD Publishing", url: "/phd-publishing", description: "Publishing during your PhD", type: "guide" },
      { title: "Mental Health Hub", url: "/mental-health-hub", description: "PhD mental health support", type: "guide" },
      { title: "Part-Time PhD", url: "/part-time-phd", description: "Balancing PhD with work", type: "guide" },
      { title: "International PhD", url: "/international-phd", description: "International doctoral studies", type: "guide" }
    ],
    tools: [
      { title: "Personalization Quiz", url: "/tools/personalization-quiz", description: "Get personalized recommendations", type: "tool" },
      { title: "DIY vs Expert Calculator", url: "/tools/diy-comparison", description: "Compare DIY vs professional help", type: "tool" }
    ],
    keywords: ["PhD", "doctoral studies", "candidacy", "qualifying exams", "PhD funding", "academic career"]
  },
  {
    id: "masters-journey",
    name: "Master's Journey",
    pillar: {
      title: "Master's Resources Hub",
      url: "/masters-resources",
      description: "Comprehensive Master's student resources",
      type: "guide"
    },
    spokes: [
      { title: "Master's Thesis Guide", url: "/masters-thesis-guide", description: "Complete Master's thesis guide", type: "guide" },
      { title: "Master's Defense", url: "/masters-defense", description: "Preparing for your defense", type: "guide" },
      { title: "Accelerated Masters", url: "/accelerated-masters", description: "Fast-track Master's programs", type: "guide" },
      { title: "Coursework to Thesis", url: "/coursework-to-thesis", description: "Transitioning from coursework", type: "guide" },
      { title: "Thesis Topic Selection", url: "/thesis-topic-selection", description: "Choosing your thesis topic", type: "guide" }
    ],
    tools: [
      { title: "Thesis Builder", url: "/tools/thesis-builder", description: "Build your thesis statement", type: "tool" },
      { title: "Quote Calculator", url: "/tools/quote-calculator", description: "Get a support quote", type: "tool" }
    ],
    keywords: ["Master's thesis", "Master's degree", "graduate school", "thesis writing", "Master's defense"]
  },
  {
    id: "ai-academia",
    name: "AI in Academia",
    pillar: {
      title: "AI in Academia Hub",
      url: "/ai-academia",
      description: "Ethical AI use in graduate research",
      type: "guide"
    },
    spokes: [
      { title: "AI Detection Guide", url: "/ai-detection-guide", description: "Understanding AI detection tools", type: "guide" },
      { title: "Citing AI Guide", url: "/citing-ai", description: "How to cite AI tools properly", type: "guide" },
      { title: "AI for Literature Reviews", url: "/ai-literature-review", description: "AI tools for literature search", type: "guide" },
      { title: "IRB Ethics Guide", url: "/irb-ethics-guide", description: "Research ethics and AI considerations", type: "guide" }
    ],
    tools: [
      { title: "AI Policy Checker", url: "/tools/ai-policy-checker", description: "Check university AI policies", type: "tool" }
    ],
    keywords: ["AI in research", "ChatGPT dissertation", "AI disclosure", "AI detection", "ethical AI use", "citing AI", "AI academic policy"]
  }
];

/**
 * Get related content for a given page URL
 */
export function getRelatedContent(currentUrl: string): {
  cluster: TopicCluster | null;
  relatedGuides: TopicItem[];
  relatedTools: TopicItem[];
  pillar: TopicItem | null;
} {
  // Normalize URL
  const normalizedUrl = currentUrl.startsWith("/") ? currentUrl : `/${currentUrl}`;
  
  // Find which cluster this page belongs to
  for (const cluster of topicClusters) {
    const allItems = [cluster.pillar, ...cluster.spokes, ...cluster.tools];
    const isInCluster = allItems.some(item => item.url === normalizedUrl);
    
    if (isInCluster) {
      // Get related content excluding current page
      const isPillar = cluster.pillar.url === normalizedUrl;
      const relatedGuides = [
        ...(isPillar ? [] : [cluster.pillar]),
        ...cluster.spokes.filter(item => item.url !== normalizedUrl)
      ].slice(0, 4);
      
      const relatedTools = cluster.tools
        .filter(item => item.url !== normalizedUrl)
        .slice(0, 4);
      
      return {
        cluster,
        relatedGuides,
        relatedTools,
        pillar: isPillar ? null : cluster.pillar
      };
    }
  }
  
  return {
    cluster: null,
    relatedGuides: [],
    relatedTools: [],
    pillar: null
  };
}

/**
 * Get all clusters a page belongs to (for pages in multiple clusters)
 */
export function getAllClustersForPage(currentUrl: string): TopicCluster[] {
  const normalizedUrl = currentUrl.startsWith("/") ? currentUrl : `/${currentUrl}`;
  
  return topicClusters.filter(cluster => {
    const allItems = [cluster.pillar, ...cluster.spokes, ...cluster.tools];
    return allItems.some(item => item.url === normalizedUrl);
  });
}
