import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema } from "@/components/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FloatingOrderButton } from "@/components/cro";
import { ArrowRight, CheckCircle, MessageCircle, BookOpen, Lightbulb } from "lucide-react";

export interface GuideHubConfig {
  /** URL path, e.g. "/dissertation-findings-chapter" */
  path: string;
  h1: string;
  lead: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumbLabel: string;
  keywords: string[];
  /** Direct answer for featured snippets and AI answers (~60-80 words) */
  answerBox: string;
  /** Quick-reference table */
  table?: { caption: string; headers: string[]; rows: string[][] };
  /** Long-form H2 sections */
  sections: { heading: string; body: string[] }[];
  /** Checklist items */
  checklist?: { title: string; items: string[] };
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string; description?: string }[];
  /** Optional soft CTA line */
  ctaLine?: string;
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);

const GuideHubPage = ({ config }: { config: GuideHubConfig }) => {
  const toc = config.sections.map((s) => ({ id: slugify(s.heading), title: s.heading }));

  return (
    <Layout>
      <SEO
        title={config.seoTitle}
        description={config.seoDescription}
        canonical={config.path}
        keywords={config.keywords}
        type="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: config.breadcrumbLabel, url: config.path },
        ]}
      />
      <FAQSchema faqs={config.faqs} />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-5">{config.h1}</h1>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">{config.lead}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg">
              <Link to="/order">
                Get expert help <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <a
                href="https://wa.me/18126905122?text=Hi%2C%20I%20need%20help%20with%20my%20dissertation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Answer box */}
      <section className="py-12 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-accent" />
                <h2 className="font-serif text-xl font-semibold m-0">The short answer</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed m-0">{config.answerBox}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TOC */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav aria-label="On this page" className="mb-12">
            <h2 className="font-serif text-lg font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> On this page
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2 list-none pl-0">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-sm text-primary hover:underline">
                    {t.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Optional table */}
          {config.table && (
            <div className="mb-12 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <caption className="text-left text-muted-foreground mb-3 caption-top">
                  {config.table.caption}
                </caption>
                <thead>
                  <tr className="bg-secondary">
                    {config.table.headers.map((h) => (
                      <th key={h} className="text-left p-3 font-semibold border border-border">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {config.table.rows.map((row, i) => (
                    <tr key={i} className={i % 2 ? "bg-secondary/30" : undefined}>
                      {row.map((cell, j) => (
                        <td key={j} className="p-3 border border-border align-top">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Sections */}
          <div className="space-y-12">
            {config.sections.map((s) => (
              <article key={s.heading} id={slugify(s.heading)}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">{s.heading}</h2>
                <div className="space-y-4">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Checklist */}
          {config.checklist && (
            <div className="mt-14">
              <h2 className="font-serif text-2xl font-bold mb-5">{config.checklist.title}</h2>
              <ul className="space-y-3 list-none pl-0">
                {config.checklist.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQs */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {config.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Related */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-bold mb-5">Related guides and services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {config.related.map((r) => (
                <Card key={r.href} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <Link to={r.href} className="font-semibold text-primary hover:underline">
                      {r.label}
                    </Link>
                    {r.description && (
                      <p className="text-sm text-muted-foreground mt-2 mb-0">{r.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-lg bg-primary text-primary-foreground p-8 text-center">
            <h2 className="font-serif text-2xl font-bold mb-3">Need a human to look at your draft?</h2>
            <p className="text-primary-foreground/90 mb-6">
              {config.ctaLine ||
                "Send us what you have. A PhD-qualified expert in your field will tell you where the real problem is — no consultation fee, no obligation."}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg">
                <Link to="/order">Start an order from $15/page</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/pricing">See transparent pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FloatingOrderButton />
    </Layout>
  );
};

export default GuideHubPage;
