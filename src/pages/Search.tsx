import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search as SearchIcon, ArrowRight } from "lucide-react";

interface Hit {
  title: string;
  url: string;
  excerpt: string;
}

// Lightweight static search index — keeps /search?q= valid for Google's
// SearchAction template echo without needing a backend.
const INDEX: Hit[] = [
  { title: "Dissertation Writing Services", url: "/dissertation-writing-services", excerpt: "End-to-end PhD & Master's dissertation help from PhD-qualified experts." },
  { title: "PhD Dissertation Writing Services", url: "/phd-dissertation-writing-services", excerpt: "Doctoral-level chapter writing, methodology rationale, viva preparation." },
  { title: "Master's Dissertation Writing Services", url: "/masters-dissertation-writing-services", excerpt: "Master's thesis chapters, literature reviews, data analysis." },
  { title: "MBA Dissertation Writing Services", url: "/mba-dissertation-writing-services", excerpt: "Strategy, finance and management research with industry framing." },
  { title: "Medical Dissertation Writing Services", url: "/medical-dissertation-writing-services", excerpt: "Clinical research, systematic reviews, PRISMA, IRB-aligned methodology." },
  { title: "Cheap Dissertation Writing Services", url: "/cheap-dissertation-writing-services", excerpt: "Affordable, milestone-based dissertation help without quality trade-offs." },
  { title: "Online Dissertation Writing Services", url: "/online-dissertation-writing-services", excerpt: "Fully remote support with PhD experts across every time zone." },
  { title: "Dissertation Proposal Writing Services", url: "/dissertation-proposal-writing-services", excerpt: "Proposal development, problem framing, theoretical framework, methodology." },
  { title: "Capstone Dissertation Writing Services", url: "/capstone-dissertation-writing-services", excerpt: "Applied capstone projects with practical evidence and academic rigour." },
  { title: "Dissertation Writing Services Reviews", url: "/dissertation-writing-services-reviews", excerpt: "Anonymised student reviews and outcomes across disciplines." },
  { title: "Editing & Proofreading", url: "/services/editing", excerpt: "Substantive editing and proofreading by subject-matter experts." },
  { title: "Research Methodology", url: "/services/methodology", excerpt: "Methodology design, rationale, and chapter writing." },
  { title: "Data Analysis", url: "/services/data-analysis", excerpt: "SPSS, R, NVivo, thematic and statistical analysis." },
  { title: "Literature Reviews", url: "/services/literature-review", excerpt: "Structured, systematic and narrative literature reviews." },
  { title: "Dissertation Proposal", url: "/services/dissertation-proposal", excerpt: "Proposal writing and committee-ready framing." },
  { title: "Thesis Writing", url: "/services/thesis-writing", excerpt: "Full thesis support across chapters." },
  { title: "Pricing", url: "/pricing", excerpt: "Transparent pricing and milestone billing." },
  { title: "Free Consultation", url: "/consultation", excerpt: "Talk to a PhD expert in your subject within 24 hours." },
  { title: "Order", url: "/order", excerpt: "Start your project with a guided multi-step order form." },
  { title: "Experts", url: "/experts", excerpt: "Meet our PhD-qualified research and writing experts." },
  { title: "About DissertlyPro", url: "/about", excerpt: "Our methodology, ethics and academic integrity stance." },
  { title: "Ethics & Integrity", url: "/ethics", excerpt: "Our academic integrity framework and acceptable-use policy." },
  { title: "Blog", url: "/blog", excerpt: "Articles on dissertation writing, methodology and academic life." },
  { title: "Glossary", url: "/glossary", excerpt: "Plain-English definitions of academic research terminology." },
  { title: "Free Tools", url: "/tools", excerpt: "Citation generator, deadline checker, outline generator and more." },
  { title: "Universities Hub", url: "/universities", excerpt: "University-specific dissertation guidance." },
  { title: "FAQs", url: "/faq", excerpt: "Common questions about our process, pricing and confidentiality." },
];

const Search = () => {
  const [params, setParams] = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);

  useEffect(() => {
    setQuery(params.get("q") ?? "");
  }, [params]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || q === "{search_term_string}") return [];
    return INDEX.filter(
      (h) =>
        h.title.toLowerCase().includes(q) ||
        h.excerpt.toLowerCase().includes(q) ||
        h.url.toLowerCase().includes(q),
    ).slice(0, 25);
  }, [query]);

  return (
    <Layout>
      <SEO
        title="Search — DissertlyPro"
        description="Search dissertation writing services, guides, tools and resources on DissertlyPro."
        canonical="/search"
        noindex
      />
      <section className="bg-gradient-to-b from-midnight to-midnight-soft text-cream py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Search DissertlyPro</h1>
          <p className="text-cream/80 mb-6">
            Find services, guides, free tools, and university resources.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setParams(query ? { q: query } : {});
            }}
            className="relative"
          >
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-midnight/60" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try 'PhD methodology' or 'literature review'"
              className="pl-12 h-14 text-base bg-white text-midnight"
              autoFocus
            />
          </form>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {query.trim() && results.length === 0 && (
            <p className="text-midnight/70">
              No results for "{query}". Try the{" "}
              <Link to="/" className="text-copper underline">
                homepage
              </Link>{" "}
              or browse our{" "}
              <Link to="/services" className="text-copper underline">
                services
              </Link>
              .
            </p>
          )}
          {!query.trim() && (
            <p className="text-midnight/70">Type a query above to search the site.</p>
          )}
          <ul className="space-y-3">
            {results.map((r) => (
              <li key={r.url}>
                <Card className="hover:shadow-elegant transition-shadow">
                  <CardContent className="p-5">
                    <Link to={r.url} className="block">
                      <h2 className="font-serif text-xl text-midnight mb-1">
                        {r.title}
                      </h2>
                      <p className="text-sm text-copper mb-2">
                        dissertlypro.com{r.url}
                      </p>
                      <p className="text-midnight/75">{r.excerpt}</p>
                      <span className="inline-flex items-center text-copper text-sm mt-2">
                        Open <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Search;
