import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import SkeletonPage from "@/components/ui/skeleton-page";

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
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<SkeletonPage />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/working-professionals" element={<WorkingProfessionals />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/ethics" element={<Ethics />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/gdpr" element={<GDPR />} />
              <Route path="/about" element={<About />} />
              <Route path="/experts" element={<Experts />} />
              <Route path="/order" element={<Order />} />
              <Route path="/supervisor-guide" element={<SupervisorGuide />} />
              <Route path="/phd-mental-health" element={<MentalHealthHub />} />
              <Route path="/committee-conflicts" element={<CommitteeConflicts />} />
              <Route path="/deadlines-deferrals" element={<DeadlinesDeferrals />} />
              <Route path="/viva-preparation" element={<VivaPreparation />} />
              <Route path="/part-time-phd" element={<PartTimePhD />} />
              <Route path="/spss-tutorial" element={<SPSSTutorial />} />
              <Route path="/research-methodology" element={<ResearchMethodology />} />
              <Route path="/literature-review-guide" element={<LiteratureReviewGuide />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/phd-resources" element={<PhDResources />} />
              {/* Master's Thesis Resources */}
              <Route path="/masters-resources" element={<MastersResources />} />
              <Route path="/masters-thesis-guide" element={<MastersThesisGuide />} />
              <Route path="/dissertation-vs-thesis" element={<DissertationVsThesis />} />
              <Route path="/thesis-topic-selection" element={<ThesisTopicSelection />} />
              <Route path="/accelerated-masters" element={<AcceleratedMasters />} />
              <Route path="/coursework-to-thesis" element={<CourseworkToThesis />} />
              <Route path="/limited-supervision" element={<LimitedSupervision />} />
              <Route path="/qualitative-analysis" element={<QualitativeAnalysis />} />
              <Route path="/masters-defense" element={<MastersDefense />} />
              <Route path="/citation-mastery" element={<CitationMastery />} />
              <Route path="/research-questions" element={<ResearchQuestions />} />
              <Route path="/thesis-structure" element={<ThesisStructure />} />
              <Route path="/international-students" element={<InternationalStudents />} />
              <Route path="/committee-communication" element={<CommitteeCommunication />} />
              <Route path="/academic-writing" element={<AcademicWriting />} />
              {/* Region-specific landing pages */}
              <Route path="/uk" element={<RegionLanding />} />
              <Route path="/us" element={<RegionLanding />} />
              <Route path="/au" element={<RegionLanding />} />
              <Route path="/ca" element={<RegionLanding />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
