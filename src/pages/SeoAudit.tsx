import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Severity = "ok" | "warn" | "fail";
interface Check { id: string; label: string; severity: Severity; detail?: string; route?: string }
interface Report {
  generatedAt: string;
  totals: { ok: number; warn: number; fail: number };
  routes: Record<string, number>;
  checks: Check[];
}

interface LiveResult {
  route: string;
  status: "pending" | "ok" | "fail";
  httpStatus?: number;
  hasNoscript?: boolean;
  hasJsonLd?: boolean;
  hasTitle?: boolean;
  inSitemap?: boolean;
  error?: string;
}

const tagColor: Record<Severity, string> = {
  ok: "bg-success/15 text-success border-success/40",
  warn: "bg-warning/15 text-warning border-warning/40",
  fail: "bg-destructive/15 text-destructive border-destructive/40",
};

export default function SeoAudit() {
  const [report, setReport] = useState<Report | null>(null);
  const [reportError, setReportError] = useState<string | null>(null);
  const [sitemapPaths, setSitemapPaths] = useState<Set<string>>(new Set());
  const [robots, setRobots] = useState<string>("");
  const [liveResults, setLiveResults] = useState<LiveResult[]>([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    fetch("/seo-report.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then(setReport)
      .catch((e) => setReportError(`Report not found. Run \`bun run seo:validate\`. (${e.message})`));

    fetch("/sitemap.xml")
      .then((r) => r.text())
      .then((xml) => {
        const set = new Set<string>();
        for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
          set.add(m[1].replace(/^https?:\/\/[^/]+/, ""));
        }
        setSitemapPaths(set);
      })
      .catch(() => {});

    fetch("/robots.txt").then((r) => r.text()).then(setRobots).catch(() => {});
  }, []);

  const routesToCheck = useMemo(() => Array.from(sitemapPaths).sort(), [sitemapPaths]);

  async function runLiveAudit() {
    if (!routesToCheck.length) return;
    setRunning(true);
    setLiveResults(routesToCheck.map((r) => ({ route: r, status: "pending" })));

    const concurrency = 4;
    const queue = [...routesToCheck];
    const results: LiveResult[] = [];

    async function worker() {
      while (queue.length) {
        const route = queue.shift();
        if (!route) return;
        try {
          const res = await fetch(route, { headers: { Accept: "text/html" } });
          const html = await res.text();
          const hasNoscript = /<noscript>[\s\S]{200,}?<\/noscript>/i.test(html);
          const hasJsonLd = /<script[^>]+application\/ld\+json/i.test(html);
          const hasTitle = /<title>[^<]{3,}<\/title>/i.test(html);
          const r: LiveResult = {
            route,
            status: res.ok && hasJsonLd && hasTitle ? "ok" : "fail",
            httpStatus: res.status,
            hasNoscript, hasJsonLd, hasTitle,
            inSitemap: sitemapPaths.has(route),
          };
          results.push(r);
          setLiveResults((prev) => prev.map((p) => (p.route === route ? r : p)));
        } catch (e) {
          const r: LiveResult = { route, status: "fail", error: (e as Error).message, inSitemap: sitemapPaths.has(route) };
          results.push(r);
          setLiveResults((prev) => prev.map((p) => (p.route === route ? r : p)));
        }
      }
    }
    await Promise.all(Array.from({ length: concurrency }, worker));
    setRunning(false);
  }

  const liveTotals = liveResults.reduce(
    (acc, r) => {
      if (r.status === "ok") acc.ok++;
      else if (r.status === "fail") acc.fail++;
      else acc.pending++;
      return acc;
    },
    { ok: 0, fail: 0, pending: 0 }
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Helmet>
        <title>SEO Audit · DissertlyPro</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <header className="mb-8">
        <h1 className="font-serif text-4xl text-foreground mb-2">SEO &amp; Crawler Audit</h1>
        <p className="text-muted-foreground">
          Verifies noscript fallback, JSON-LD, sitemap and robots coverage for every route. Build-time report comes from
          <code className="mx-1 px-1.5 py-0.5 bg-muted rounded text-xs">scripts/seo-validate.ts</code>; live audit fetches each
          sitemap URL and inspects the served HTML.
        </p>
      </header>

      {/* Build-time report */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl mb-4">Build-time report</h2>
        {reportError && (
          <Card className="p-6 border-warning/40 bg-warning/5">
            <p className="text-sm text-warning-foreground">{reportError}</p>
          </Card>
        )}
        {report && (
          <>
            <div className="flex gap-3 mb-4 text-sm">
              <Badge className={tagColor.ok}>{report.totals.ok} ok</Badge>
              <Badge className={tagColor.warn}>{report.totals.warn} warn</Badge>
              <Badge className={tagColor.fail}>{report.totals.fail} fail</Badge>
              <span className="text-muted-foreground self-center">
                generated {new Date(report.generatedAt).toLocaleString()}
              </span>
            </div>
            <Card className="divide-y">
              {report.checks.map((c) => (
                <div key={c.id} className="p-4 flex items-start gap-3">
                  <Badge className={tagColor[c.severity]}>{c.severity.toUpperCase()}</Badge>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">{c.label}</div>
                    {c.detail && <div className="text-xs text-muted-foreground mt-1 break-words">{c.detail}</div>}
                  </div>
                </div>
              ))}
            </Card>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-sm">
              {Object.entries(report.routes).map(([k, v]) => (
                <Card key={k} className="p-3">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{k}</div>
                  <div className="text-2xl font-serif text-foreground">{v}</div>
                </Card>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Live HTTP audit */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-2xl">Live HTTP audit ({routesToCheck.length} routes)</h2>
          <Button onClick={runLiveAudit} disabled={running || !routesToCheck.length} variant="copper">
            {running ? "Running…" : liveResults.length ? "Re-run audit" : "Run audit"}
          </Button>
        </div>
        {liveResults.length > 0 && (
          <div className="flex gap-3 mb-4 text-sm">
            <Badge className={tagColor.ok}>{liveTotals.ok} ok</Badge>
            <Badge className={tagColor.fail}>{liveTotals.fail} fail</Badge>
            {liveTotals.pending > 0 && <Badge className="bg-muted">{liveTotals.pending} pending</Badge>}
          </div>
        )}
        {liveResults.length > 0 && (
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="p-3">Route</th>
                    <th className="p-3">HTTP</th>
                    <th className="p-3">Noscript</th>
                    <th className="p-3">JSON-LD</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">In sitemap</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {liveResults.map((r) => (
                    <tr key={r.route} className="border-t">
                      <td className="p-3 font-mono text-xs break-all">{r.route}</td>
                      <td className="p-3">{r.httpStatus ?? "—"}</td>
                      <td className="p-3">{r.hasNoscript === undefined ? "—" : r.hasNoscript ? "✓" : "✗"}</td>
                      <td className="p-3">{r.hasJsonLd === undefined ? "—" : r.hasJsonLd ? "✓" : "✗"}</td>
                      <td className="p-3">{r.hasTitle === undefined ? "—" : r.hasTitle ? "✓" : "✗"}</td>
                      <td className="p-3">{r.inSitemap ? "✓" : "✗"}</td>
                      <td className="p-3">
                        <Badge className={r.status === "ok" ? tagColor.ok : r.status === "fail" ? tagColor.fail : "bg-muted"}>
                          {r.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
        <p className="text-xs text-muted-foreground mt-3">
          The live audit fetches each URL from the current origin. In dev mode, all routes serve the SPA shell so noscript and
          JSON-LD reflect <code>index.html</code>. After running <code>bun run prerender:cpanel</code>, each route serves its own
          prerendered HTML with route-specific meta.
        </p>
      </section>

      {/* robots.txt */}
      <section>
        <h2 className="font-serif text-2xl mb-4">robots.txt</h2>
        <Card className="p-4">
          <pre className="text-xs whitespace-pre-wrap font-mono text-foreground/80 max-h-80 overflow-auto">{robots || "—"}</pre>
        </Card>
      </section>
    </div>
  );
}
