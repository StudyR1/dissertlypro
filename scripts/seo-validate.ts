/**
 * SEO validation script.
 * Runs after sitemap generation. Checks:
 *   1. Every route in App.tsx is present in public/sitemap.xml
 *   2. public/robots.txt allows crawlers and references the sitemap
 *   3. index.html contains a non-empty <noscript> fallback and JSON-LD
 *   4. Dynamic content (blog, services, universities) is covered
 * Writes a machine-readable report to public/seo-report.json so the
 * runtime /seo-audit page can render it without re-fetching everything.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve } from "path";

type Severity = "ok" | "warn" | "fail";
interface Check { id: string; label: string; severity: Severity; detail?: string; route?: string }

const checks: Check[] = [];
const add = (c: Check) => checks.push(c);

function read(p: string): string | null {
  const f = resolve(p);
  return existsSync(f) ? readFileSync(f, "utf8") : null;
}

// --- Collect routes from App.tsx ---
const app = read("src/App.tsx") || "";
const allPaths = [...app.matchAll(/path="([^"]+)"/g)].map((m) => m[1]);
const staticRoutes = allPaths.filter((p) => !p.includes(":") && p !== "*");
const dynamicRouteTemplates = allPaths.filter((p) => p.includes(":"));

// --- Collect sitemap entries ---
const sitemap = read("public/sitemap.xml") || "";
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace(/^https?:\/\/[^/]+/, "")
);
const sitemapSet = new Set(sitemapUrls);

// --- robots.txt checks ---
const robots = read("public/robots.txt") || "";
if (!robots) add({ id: "robots-missing", label: "robots.txt exists", severity: "fail" });
else {
  add({ id: "robots-exists", label: "robots.txt exists", severity: "ok" });
  if (!/^Sitemap:\s*https?:\/\//mi.test(robots))
    add({ id: "robots-sitemap-ref", label: "robots.txt references sitemap", severity: "warn" });
  else add({ id: "robots-sitemap-ref", label: "robots.txt references sitemap", severity: "ok" });
  if (/^Disallow:\s*\/\s*$/mi.test(robots) && !/^Allow:/mi.test(robots))
    add({ id: "robots-blocks-all", label: "robots.txt is not blocking all crawlers", severity: "fail" });
  else add({ id: "robots-blocks-all", label: "robots.txt is not blocking all crawlers", severity: "ok" });
}

// --- index.html checks ---
const indexHtml = read("index.html") || "";
const noscriptMatch = indexHtml.match(/<noscript>([\s\S]*?)<\/noscript>/g) || [];
const bodyNoscript = noscriptMatch.find((s) => s.length > 300);
add({
  id: "noscript-fallback",
  label: "index.html has a substantive <noscript> fallback (>300 chars)",
  severity: bodyNoscript ? "ok" : "fail",
  detail: bodyNoscript ? `${bodyNoscript.length} chars` : "Missing or too short",
});
const jsonLdCount = (indexHtml.match(/<script[^>]+application\/ld\+json/g) || []).length;
add({
  id: "jsonld-sitewide",
  label: "index.html contains sitewide JSON-LD",
  severity: jsonLdCount > 0 ? "ok" : "fail",
  detail: `${jsonLdCount} JSON-LD block(s)`,
});
add({
  id: "title-tag",
  label: "index.html <title> is set and not the default",
  severity: /<title>(?!Lovable App<).+<\/title>/i.test(indexHtml) ? "ok" : "fail",
});

// --- Static route coverage in sitemap ---
const excluded = new Set([
  "/quick-checkout","/services/academic-editing","/services/proposal-development",
  "/services/dissertation-writing","/services/research-methodology","/refund-policy",
  "/privacy-policy","/terms-and-conditions","/blog/mit-thesis-writing-strategies",
  "/blog/stanford-dissertation-excellence","/search","/seo-audit","*",
]);
const missingFromSitemap = staticRoutes.filter((p) => !excluded.has(p) && !sitemapSet.has(p));
add({
  id: "sitemap-static-coverage",
  label: `Sitemap covers ${staticRoutes.length - missingFromSitemap.length}/${staticRoutes.length - [...excluded].filter(e=>staticRoutes.includes(e)).length} static routes`,
  severity: missingFromSitemap.length === 0 ? "ok" : "fail",
  detail: missingFromSitemap.length ? `Missing: ${missingFromSitemap.join(", ")}` : undefined,
});

// --- Dynamic content coverage ---
function slugsFrom(file: string): string[] {
  const src = read(file) || "";
  return [...src.matchAll(/slug:\s*["'`]([a-z0-9-]+)["'`]/g)].map((m) => m[1]);
}
const blogSlugs = slugsFrom("src/data/blogPosts.ts");
const servSlugs = slugsFrom("src/pages/Services.tsx");
const uniSrc = read("src/data/universityData.ts") || "";
const uniEntries = [...uniSrc.split(/\{\s*\n/).slice(1)].map((o) => {
  const s = o.match(/slug:\s*["']([a-z0-9-]+)["']/)?.[1];
  const r = o.match(/region:\s*["'](uk|us|au|ca)["']/)?.[1];
  return s && r ? `/${r}/${s}` : null;
}).filter(Boolean) as string[];

const dynChecks: Array<[string, string[], (s: string) => string]> = [
  ["blog", blogSlugs, (s) => `/blog/${s}`],
  ["services", servSlugs, (s) => `/services/${s}`],
];
for (const [name, list, mk] of dynChecks) {
  const missing = list.filter((s) => !sitemapSet.has(mk(s)));
  add({
    id: `sitemap-dyn-${name}`,
    label: `Sitemap covers ${list.length - missing.length}/${list.length} ${name} entries`,
    severity: missing.length === 0 ? "ok" : "fail",
    detail: missing.length ? `Missing: ${missing.slice(0, 5).map(mk).join(", ")}${missing.length > 5 ? "…" : ""}` : undefined,
  });
}
const uniMissing = uniEntries.filter((u) => !sitemapSet.has(u));
add({
  id: "sitemap-dyn-universities",
  label: `Sitemap covers ${uniEntries.length - uniMissing.length}/${uniEntries.length} university pages`,
  severity: uniMissing.length === 0 ? "ok" : "fail",
  detail: uniMissing.length ? `Missing: ${uniMissing.slice(0, 5).join(", ")}` : undefined,
});

// --- SEO component / per-route head coverage (heuristic) ---
const usesSeo = /import\s+SEO\s+from|<SEO\b/.test(app);
add({
  id: "seo-component-usage",
  label: "Per-page <SEO /> meta component is used",
  severity: usesSeo ? "ok" : "warn",
});

// --- Prerender output (if present) ---
const prerenderedRoot = existsSync(resolve("dist/index.html"));
add({
  id: "prerender-built",
  label: "Prerendered build output exists (dist/index.html)",
  severity: prerenderedRoot ? "ok" : "warn",
  detail: prerenderedRoot ? undefined : "Run `bun run prerender:cpanel` before deploying to cPanel",
});

// --- Report ---
const summary = {
  generatedAt: new Date().toISOString(),
  totals: {
    ok: checks.filter((c) => c.severity === "ok").length,
    warn: checks.filter((c) => c.severity === "warn").length,
    fail: checks.filter((c) => c.severity === "fail").length,
  },
  routes: {
    static: staticRoutes.length,
    dynamicTemplates: dynamicRouteTemplates.length,
    blog: blogSlugs.length,
    services: servSlugs.length,
    universities: uniEntries.length,
    sitemap: sitemapUrls.length,
  },
  checks,
};

writeFileSync(resolve("public/seo-report.json"), JSON.stringify(summary, null, 2));

const tag = (s: Severity) => (s === "ok" ? "✓" : s === "warn" ? "!" : "✗");
console.log(`\nSEO validation report (public/seo-report.json)`);
console.log(`  ${summary.totals.ok} ok · ${summary.totals.warn} warn · ${summary.totals.fail} fail`);
for (const c of checks) {
  console.log(`  ${tag(c.severity)} ${c.label}${c.detail ? `  — ${c.detail}` : ""}`);
}
if (summary.totals.fail > 0) {
  console.error(`\n${summary.totals.fail} SEO check(s) failed.`);
  process.exit(1);
}
