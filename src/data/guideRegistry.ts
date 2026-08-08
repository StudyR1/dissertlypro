import type { GuideHubConfig } from "@/components/guides/GuideHubPage";
import { findingsChapterHub } from "./guideHubs";
import { chapterGuides } from "./chapterGuides";
import { subjectGuides } from "./subjectGuides";

// Single source of truth for every GuideHubPage-driven route.
export const guideRegistry: GuideHubConfig[] = [
  findingsChapterHub,
  ...chapterGuides,
  ...subjectGuides,
];

export const getGuideByPath = (path: string): GuideHubConfig | undefined => {
  const clean = path.replace(/\/+$/, "") || "/";
  return guideRegistry.find((g) => g.path === clean);
};

export const guidePaths = guideRegistry.map((g) => g.path);
