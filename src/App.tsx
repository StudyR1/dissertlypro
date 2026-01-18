import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import SkeletonPage, { 
  ServicesGridSkeleton, 
  BlogGridSkeleton, 
  ArticleSkeleton,
  ServiceDetailSkeleton,
  ToolPageSkeleton 
} from "@/components/ui/skeleton-page";

// Critical path - load immediately
import Index from "./pages/Index";

// Lazy load non-critical routes
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Subjects = lazy(() => import("./pages/Subjects"));
const WorkingProfessionals = lazy(() => import("./pages/WorkingProfessionals"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Ethics = lazy(() => import("./pages/Ethics"));
const Contact = lazy(() => import("./pages/Contact"));
const Consultation = lazy(() => import("./pages/Consultation"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const GDPR = lazy(() => import("./pages/GDPR"));
const About = lazy(() => import("./pages/About"));
const Experts = lazy(() => import("./pages/Experts"));
const RegionLanding = lazy(() => import("./pages/RegionLanding"));
const Order = lazy(() => import("./pages/Order"));
const Templates = lazy(() => import("./pages/Templates"));
const SupervisorGuide = lazy(() => import("./pages/SupervisorGuide"));
const MentalHealthHub = lazy(() => import("./pages/MentalHealthHub"));
const CommitteeConflicts = lazy(() => import("./pages/CommitteeConflicts"));
const DeadlinesDeferrals = lazy(() => import("./pages/DeadlinesDeferrals"));
const VivaPreparation = lazy(() => import("./pages/VivaPreparation"));
const PartTimePhD = lazy(() => import("./pages/PartTimePhD"));
const SPSSTutorial = lazy(() => import("./pages/SPSSTutorial"));
const ResearchMethodology = lazy(() => import("./pages/ResearchMethodology"));
const LiteratureReviewGuide = lazy(() => import("./pages/LiteratureReviewGuide"));
const Resources = lazy(() => import("./pages/Resources"));
const MastersThesisGuide = lazy(() => import("./pages/MastersThesisGuide"));
const MastersResources = lazy(() => import("./pages/MastersResources"));
const DissertationVsThesis = lazy(() => import("./pages/DissertationVsThesis"));
const ThesisTopicSelection = lazy(() => import("./pages/ThesisTopicSelection"));
const AcceleratedMasters = lazy(() => import("./pages/AcceleratedMasters"));
const CourseworkToThesis = lazy(() => import("./pages/CourseworkToThesis"));
const LimitedSupervision = lazy(() => import("./pages/LimitedSupervision"));
const QualitativeAnalysis = lazy(() => import("./pages/QualitativeAnalysis"));
const MastersDefense = lazy(() => import("./pages/MastersDefense"));
const CitationMastery = lazy(() => import("./pages/CitationMastery"));
const ResearchQuestions = lazy(() => import("./pages/ResearchQuestions"));
const ThesisStructure = lazy(() => import("./pages/ThesisStructure"));
const InternationalStudents = lazy(() => import("./pages/InternationalStudents"));
const CommitteeCommunication = lazy(() => import("./pages/CommitteeCommunication"));
const AcademicWriting = lazy(() => import("./pages/AcademicWriting"));
const PhDResources = lazy(() => import("./pages/PhDResources"));
const CandidacyExams = lazy(() => import("./pages/CandidacyExams"));
const PhDFunding = lazy(() => import("./pages/PhDFunding"));
const AcademicNetworking = lazy(() => import("./pages/AcademicNetworking"));
const PhDPublishing = lazy(() => import("./pages/PhDPublishing"));
const PhDIndustry = lazy(() => import("./pages/PhDIndustry"));
const InternationalPhD = lazy(() => import("./pages/InternationalPhD"));
const DissertationStructure = lazy(() => import("./pages/DissertationStructure"));
const DissertationWriting = lazy(() => import("./pages/DissertationWriting"));
const NVivoTutorial = lazy(() => import("./pages/NVivoTutorial"));
const SystematicLiteratureReview = lazy(() => import("./pages/SystematicLiteratureReview"));
const MixedMethodsResearch = lazy(() => import("./pages/MixedMethodsResearch"));
const IRBEthicsGuide = lazy(() => import("./pages/IRBEthicsGuide"));
const DataVisualization = lazy(() => import("./pages/DataVisualization"));
const CitationGeneratorPage = lazy(() => import("./pages/tools/CitationGeneratorPage"));
const ChapterPlannerPage = lazy(() => import("./pages/tools/ChapterPlannerPage"));
const ToolsHub = lazy(() => import("./pages/tools/ToolsHub"));
const ThesisBuilderPage = lazy(() => import("./pages/tools/ThesisBuilderPage"));
const DeadlineCheckerPage = lazy(() => import("./pages/tools/DeadlineCheckerPage"));
const WordCounterPage = lazy(() => import("./pages/tools/WordCounterPage"));
const QuoteCalculatorPage = lazy(() => import("./pages/tools/QuoteCalculatorPage"));
const ResearchQuestionValidatorPage = lazy(() => import("./pages/tools/ResearchQuestionValidatorPage"));
const PersonalizationQuizPage = lazy(() => import("./pages/tools/PersonalizationQuizPage"));
const DIYComparisonCalculatorPage = lazy(() => import("./pages/tools/DIYComparisonCalculatorPage"));
const OutlineGeneratorPage = lazy(() => import("./pages/tools/OutlineGeneratorPage"));
const MethodologySelectorPage = lazy(() => import("./pages/tools/MethodologySelectorPage"));
const LiteratureSearchPage = lazy(() => import("./pages/tools/LiteratureSearchPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    },
  },
});

// Wrapper components with appropriate skeletons
const ServicesWithSkeleton = () => (
  <Suspense fallback={<ServicesGridSkeleton />}>
    <Services />
  </Suspense>
);

const ServiceDetailWithSkeleton = () => (
  <Suspense fallback={<ServiceDetailSkeleton />}>
    <ServiceDetail />
  </Suspense>
);

const BlogWithSkeleton = () => (
  <Suspense fallback={<BlogGridSkeleton />}>
    <Blog />
  </Suspense>
);

const BlogPostWithSkeleton = () => (
  <Suspense fallback={<ArticleSkeleton />}>
    <BlogPost />
  </Suspense>
);

// Removed unused ResourceWithSkeleton wrapper to prevent potential lazy-loading issues

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ErrorBoundary>
            <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Services routes with grid skeleton */}
            <Route path="/services" element={<ServicesWithSkeleton />} />
            <Route path="/services/:slug" element={<ServiceDetailWithSkeleton />} />
            
            {/* Blog routes with appropriate skeletons */}
            <Route path="/blog" element={<BlogWithSkeleton />} />
            <Route path="/blog/:slug" element={<BlogPostWithSkeleton />} />
            
            {/* Standard pages with generic skeleton */}
            <Route path="/subjects" element={<Suspense fallback={<ServicesGridSkeleton />}><Subjects /></Suspense>} />
            <Route path="/working-professionals" element={<Suspense fallback={<SkeletonPage />}><WorkingProfessionals /></Suspense>} />
            <Route path="/pricing" element={<Suspense fallback={<SkeletonPage />}><Pricing /></Suspense>} />
            <Route path="/ethics" element={<Suspense fallback={<SkeletonPage />}><Ethics /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<SkeletonPage />}><Contact /></Suspense>} />
            <Route path="/consultation" element={<Suspense fallback={<SkeletonPage />}><Consultation /></Suspense>} />
            <Route path="/faq" element={<Suspense fallback={<SkeletonPage />}><FAQ /></Suspense>} />
            <Route path="/privacy" element={<Suspense fallback={<SkeletonPage />}><Privacy /></Suspense>} />
            <Route path="/terms" element={<Suspense fallback={<SkeletonPage />}><Terms /></Suspense>} />
            <Route path="/gdpr" element={<Suspense fallback={<SkeletonPage />}><GDPR /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<SkeletonPage />}><About /></Suspense>} />
            <Route path="/experts" element={<Suspense fallback={<SkeletonPage />}><Experts /></Suspense>} />
            <Route path="/order" element={<Suspense fallback={<SkeletonPage />}><Order /></Suspense>} />
            <Route path="/templates" element={<Suspense fallback={<ServicesGridSkeleton />}><Templates /></Suspense>} />
            
            {/* Resource/Article pages with article skeleton */}
            <Route path="/supervisor-guide" element={<Suspense fallback={<ArticleSkeleton />}><SupervisorGuide /></Suspense>} />
            <Route path="/phd-mental-health" element={<Suspense fallback={<ArticleSkeleton />}><MentalHealthHub /></Suspense>} />
            <Route path="/committee-conflicts" element={<Suspense fallback={<ArticleSkeleton />}><CommitteeConflicts /></Suspense>} />
            <Route path="/deadlines-deferrals" element={<Suspense fallback={<ArticleSkeleton />}><DeadlinesDeferrals /></Suspense>} />
            <Route path="/viva-preparation" element={<Suspense fallback={<ArticleSkeleton />}><VivaPreparation /></Suspense>} />
            <Route path="/part-time-phd" element={<Suspense fallback={<ArticleSkeleton />}><PartTimePhD /></Suspense>} />
            <Route path="/spss-tutorial" element={<Suspense fallback={<ArticleSkeleton />}><SPSSTutorial /></Suspense>} />
            <Route path="/research-methodology" element={<Suspense fallback={<ArticleSkeleton />}><ResearchMethodology /></Suspense>} />
            <Route path="/literature-review-guide" element={<Suspense fallback={<ArticleSkeleton />}><LiteratureReviewGuide /></Suspense>} />
            <Route path="/resources" element={<Suspense fallback={<ServicesGridSkeleton />}><Resources /></Suspense>} />
            <Route path="/phd-resources" element={<Suspense fallback={<ServicesGridSkeleton />}><PhDResources /></Suspense>} />
            <Route path="/candidacy-exams" element={<Suspense fallback={<ArticleSkeleton />}><CandidacyExams /></Suspense>} />
            <Route path="/phd-funding" element={<Suspense fallback={<ArticleSkeleton />}><PhDFunding /></Suspense>} />
            <Route path="/academic-networking" element={<Suspense fallback={<ArticleSkeleton />}><AcademicNetworking /></Suspense>} />
            <Route path="/phd-publishing" element={<Suspense fallback={<ArticleSkeleton />}><PhDPublishing /></Suspense>} />
            <Route path="/phd-industry" element={<Suspense fallback={<ArticleSkeleton />}><PhDIndustry /></Suspense>} />
            <Route path="/international-phd" element={<Suspense fallback={<ArticleSkeleton />}><InternationalPhD /></Suspense>} />
            <Route path="/dissertation-structure" element={<Suspense fallback={<ArticleSkeleton />}><DissertationStructure /></Suspense>} />
            <Route path="/dissertation-writing" element={<Suspense fallback={<ArticleSkeleton />}><DissertationWriting /></Suspense>} />
            
            {/* Technical Deep-Dives */}
            <Route path="/nvivo-tutorial" element={<Suspense fallback={<ArticleSkeleton />}><NVivoTutorial /></Suspense>} />
            <Route path="/systematic-literature-review" element={<Suspense fallback={<ArticleSkeleton />}><SystematicLiteratureReview /></Suspense>} />
            <Route path="/mixed-methods-research" element={<Suspense fallback={<ArticleSkeleton />}><MixedMethodsResearch /></Suspense>} />
            <Route path="/irb-ethics-guide" element={<Suspense fallback={<ArticleSkeleton />}><IRBEthicsGuide /></Suspense>} />
            <Route path="/data-visualization" element={<Suspense fallback={<ArticleSkeleton />}><DataVisualization /></Suspense>} />
            
            {/* Master's Resources */}
            <Route path="/masters-resources" element={<Suspense fallback={<ServicesGridSkeleton />}><MastersResources /></Suspense>} />
            <Route path="/masters-thesis-guide" element={<Suspense fallback={<ArticleSkeleton />}><MastersThesisGuide /></Suspense>} />
            <Route path="/dissertation-vs-thesis" element={<Suspense fallback={<ArticleSkeleton />}><DissertationVsThesis /></Suspense>} />
            <Route path="/thesis-topic-selection" element={<Suspense fallback={<ArticleSkeleton />}><ThesisTopicSelection /></Suspense>} />
            <Route path="/accelerated-masters" element={<Suspense fallback={<ArticleSkeleton />}><AcceleratedMasters /></Suspense>} />
            <Route path="/coursework-to-thesis" element={<Suspense fallback={<ArticleSkeleton />}><CourseworkToThesis /></Suspense>} />
            <Route path="/limited-supervision" element={<Suspense fallback={<ArticleSkeleton />}><LimitedSupervision /></Suspense>} />
            <Route path="/qualitative-analysis" element={<Suspense fallback={<ArticleSkeleton />}><QualitativeAnalysis /></Suspense>} />
            <Route path="/masters-defense" element={<Suspense fallback={<ArticleSkeleton />}><MastersDefense /></Suspense>} />
            <Route path="/citation-mastery" element={<Suspense fallback={<ArticleSkeleton />}><CitationMastery /></Suspense>} />
            <Route path="/research-questions" element={<Suspense fallback={<ArticleSkeleton />}><ResearchQuestions /></Suspense>} />
            <Route path="/thesis-structure" element={<Suspense fallback={<ArticleSkeleton />}><ThesisStructure /></Suspense>} />
            <Route path="/international-students" element={<Suspense fallback={<ArticleSkeleton />}><InternationalStudents /></Suspense>} />
            <Route path="/committee-communication" element={<Suspense fallback={<ArticleSkeleton />}><CommitteeCommunication /></Suspense>} />
            <Route path="/academic-writing" element={<Suspense fallback={<ArticleSkeleton />}><AcademicWriting /></Suspense>} />
            
            {/* Region-specific landing pages */}
            <Route path="/uk" element={<Suspense fallback={<SkeletonPage />}><RegionLanding /></Suspense>} />
            <Route path="/us" element={<Suspense fallback={<SkeletonPage />}><RegionLanding /></Suspense>} />
            <Route path="/au" element={<Suspense fallback={<SkeletonPage />}><RegionLanding /></Suspense>} />
            <Route path="/ca" element={<Suspense fallback={<SkeletonPage />}><RegionLanding /></Suspense>} />
            
            {/* Free Tools */}
            <Route path="/tools" element={<Suspense fallback={<ServicesGridSkeleton />}><ToolsHub /></Suspense>} />
            <Route path="/tools/citation-generator" element={<Suspense fallback={<ToolPageSkeleton />}><CitationGeneratorPage /></Suspense>} />
            <Route path="/tools/chapter-planner" element={<Suspense fallback={<ToolPageSkeleton />}><ChapterPlannerPage /></Suspense>} />
            <Route path="/tools/thesis-builder" element={<Suspense fallback={<ToolPageSkeleton />}><ThesisBuilderPage /></Suspense>} />
            <Route path="/tools/deadline-checker" element={<Suspense fallback={<ToolPageSkeleton />}><DeadlineCheckerPage /></Suspense>} />
            <Route path="/tools/word-counter" element={<Suspense fallback={<ToolPageSkeleton />}><WordCounterPage /></Suspense>} />
            <Route path="/tools/quote-calculator" element={<Suspense fallback={<ToolPageSkeleton />}><QuoteCalculatorPage /></Suspense>} />
            <Route path="/tools/research-question-validator" element={<Suspense fallback={<ToolPageSkeleton />}><ResearchQuestionValidatorPage /></Suspense>} />
            <Route path="/tools/personalization-quiz" element={<Suspense fallback={<ToolPageSkeleton />}><PersonalizationQuizPage /></Suspense>} />
            <Route path="/tools/diy-comparison" element={<Suspense fallback={<ToolPageSkeleton />}><DIYComparisonCalculatorPage /></Suspense>} />
            <Route path="/tools/outline-generator" element={<Suspense fallback={<ToolPageSkeleton />}><OutlineGeneratorPage /></Suspense>} />
            <Route path="/tools/methodology-selector" element={<Suspense fallback={<ToolPageSkeleton />}><MethodologySelectorPage /></Suspense>} />
            <Route path="/tools/literature-search" element={<Suspense fallback={<ToolPageSkeleton />}><LiteratureSearchPage /></Suspense>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Suspense fallback={<SkeletonPage />}><NotFound /></Suspense>} />
          </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
