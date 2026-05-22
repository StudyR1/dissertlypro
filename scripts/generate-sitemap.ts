// Auto-generates public/sitemap.xml from src/App.tsx routes + dynamic data.
// Runs via predev / prebuild npm hooks.

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://dissertlypro.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const today = new Date().toISOString().slice(0, 10);

// ---- 1. Static routes from App.tsx ----
const appSource = readFileSync(resolve("src/App.tsx"), "utf8");
const pathMatches = [...appSource.matchAll(/path="([^"]+)"/g)].map((m) => m[1]);

const EXCLUDE = new Set<string>([
  "*",
  "/order", // keep order page out? leave in
]);
EXCLUDE.delete("/order");

const staticPaths = [...new Set(pathMatches)]
  .filter((p) => !p.includes(":") && !EXCLUDE.has(p));

// Priority/changefreq heuristics
const priorityFor = (p: string): string => {
  if (p === "/") return "1.0";
  if (["/dissertation-writing-services", "/services", "/pricing", "/consultation", "/order"].includes(p)) return "0.95";
  if (["/uk", "/us", "/au", "/ca", "/universities", "/blog", "/tools", "/experts", "/about", "/resources"].includes(p)) return "0.9";
  if (p.startsWith("/tools/")) return "0.7";
  if (p.startsWith("/services/")) return "0.85";
  return "0.7";
};

const staticEntries: SitemapEntry[] = staticPaths.map((p) => ({
  path: p,
  lastmod: today,
  changefreq: p === "/" ? "weekly" : "monthly",
  priority: priorityFor(p),
}));

// ---- 2. Dynamic content ----
async function loadDynamic(): Promise<SitemapEntry[]> {
  const entries: SitemapEntry[] = [];

  // Blog posts
  try {
    const { blogPosts } = await import(resolve("src/data/blogPosts.ts"));
    for (const post of blogPosts as Array<{ slug: string; date?: string; publishedAt?: string }>) {
      entries.push({
        path: `/blog/${post.slug}`,
        lastmod: (post.date || post.publishedAt || today).slice(0, 10),
        changefreq: "monthly",
        priority: "0.8",
      });
    }
  } catch (e) {
    console.warn("sitemap: blogPosts import failed", (e as Error).message);
  }

  // Universities (per region)
  try {
    const { universityData } = await import(resolve("src/data/universityData.ts"));
    for (const uni of universityData as Array<{ slug: string; region: string }>) {
      entries.push({
        path: `/${uni.region}/${uni.slug}`,
        lastmod: today,
        changefreq: "monthly",
        priority: "0.75",
      });
    }
  } catch (e) {
    console.warn("sitemap: universityData import failed", (e as Error).message);
  }

  // Services subroutes — hardcoded slug list (keep in sync with Services.tsx)
  const serviceSlugs = [
    "dissertation-proposal", "thesis-writing", "methodology", "data-analysis",
    "literature-review", "editing", "similarity-reduction",
    "supervisor-revisions", "journal-preparation", "formatting",
  ];
  for (const slug of serviceSlugs) {
    entries.push({
      path: `/services/${slug}`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.85",
    });
  }

  return entries;
}

function buildXml(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ].filter(Boolean).join("\n")
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
    ``,
  ].join("\n");
}

async function main() {
  const dynamicEntries = await loadDynamic();
  const all = [...staticEntries, ...dynamicEntries];

  // De-dupe by path
  const seen = new Set<string>();
  const unique = all.filter((e) => {
    if (seen.has(e.path)) return false;
    seen.add(e.path);
    return true;
  });

  // Sort: home first, then alpha
  unique.sort((a, b) => {
    if (a.path === "/") return -1;
    if (b.path === "/") return 1;
    return a.path.localeCompare(b.path);
  });

  writeFileSync(resolve("public/sitemap.xml"), buildXml(unique));
  console.log(`sitemap.xml generated with ${unique.length} entries → ${BASE_URL}`);

  // Refresh robots.txt Sitemap directive
  const robotsPath = resolve("public/robots.txt");
  try {
    const robots = readFileSync(robotsPath, "utf8");
    const updated = robots
      .replace(/^Sitemap:.*$/m, `Sitemap: ${BASE_URL}/sitemap.xml`)
      .replace(/^# https:\/\/.*$/m, `# ${BASE_URL}`);
    writeFileSync(robotsPath, updated);
    console.log(`robots.txt updated → ${BASE_URL}/sitemap.xml`);
  } catch {
    /* robots optional */
  }
}

main().catch((e) => {
  console.error("sitemap generation failed", e);
  process.exit(1);
});
