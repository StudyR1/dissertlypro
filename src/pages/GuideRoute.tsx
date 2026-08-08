import { useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import GuideHubPage from "@/components/guides/GuideHubPage";
import { getGuideByPath } from "@/data/guideRegistry";

const NotFound = lazy(() => import("@/pages/NotFound"));

/**
 * Renders any registered GuideHubConfig based on the current pathname.
 * Keeps App.tsx free of one wrapper component per guide.
 */
const GuideRoute = () => {
  const { pathname } = useLocation();
  const config = getGuideByPath(pathname);

  if (!config) {
    return (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    );
  }

  return <GuideHubPage config={config} />;
};

export default GuideRoute;
