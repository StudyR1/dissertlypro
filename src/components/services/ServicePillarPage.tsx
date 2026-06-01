import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, AggregateRatingSchema } from "@/components/schemas";
import ServiceSchema from "@/components/schemas/ServiceSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FloatingOrderButton } from "@/components/cro";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Clock,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

export interface ServicePillarConfig {
  /** URL path, e.g. "/phd-dissertation-writing-services" */
  path: string;
  /** Exact-match H1 keyword */
  h1: string;
  /** Hero subtitle / lead */
  lead: string;
  /** SEO title (under 60 chars) */
  seoTitle: string;
  /** Meta description (under 160 chars) */
  seoDescription: string;
  /** Short label for breadcrumb */
  breadcrumbLabel: string;
  /** Keyword list for SEO meta */
  keywords: string[];
  /** TL;DR copy — one or two paragraphs (~120 words) */
  tldr: string;
  /** "Who this is for" bullets */
  whoFor: string[];
  /** What's included bullets */
  whatsIncluded: { title: string; description: string }[];
  /** Process steps (4–6) */
  process: { title: string; description: string }[];
  /** Deliverables bullets */
  deliverables: string[];
  /** Long-form body paragraphs (each ~150–200 words) keyed by H2 */
  sections: { heading: string; body: string }[];
  /** Pricing summary blurb */
  pricingBlurb: string;
  /** FAQs — at least 8 */
  faqs: { question: string; answer: string }[];
  /** Cross-links to sibling pages */
  related: { label: string; href: string }[];
}

interface Props {
  config: ServicePillarConfig;
}

const ServicePillarPage = ({ config }: Props) => {
  return (
    <Layout>
      <SEO
        title={config.seoTitle}
        description={config.seoDescription}
        canonical={config.path}
        keywords={config.keywords}
        ogCategory="services"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          {
            name: "Dissertation Writing Services",
            url: "/dissertation-writing-services",
          },
          {
            name: config.breadcrumbLabel,
            url: config.path,
          },
        ]}
      />
      <ServiceSchema
        name={config.h1}
        description={config.seoDescription}
        url={config.path}
      />
      <FAQSchema faqs={config.faqs} />
      <AggregateRatingSchema ratingValue={4.9} reviewCount={2847} />

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-midnight via-midnight to-midnight-soft py-20 md:py-28 text-cream">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm uppercase tracking-widest text-copper mb-4">
            Premium Academic Support
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            {config.h1}
          </h1>
          <p className="text-lg md:text-xl text-cream/85 max-w-3xl mx-auto mb-8">
            {config.lead}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
              <Link to="/order">
                Start Your Order <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream/40 text-cream hover:bg-cream/10"
            >
              <Link to="/consultation">Free Consultation</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-cream/70">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-copper text-copper" /> 4.9/5 from 2,847 students
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-copper" /> 100% confidential
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-copper" /> PhD-qualified experts only
            </span>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-12 bg-cream-warm">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-l-4 border-l-copper bg-white">
            <CardContent className="p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-copper mb-3">
                TL;DR
              </p>
              <p className="text-lg leading-relaxed text-midnight">{config.tldr}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-8 text-center">
            Who this service is for
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {config.whoFor.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-lg bg-cream-warm border border-cream-rich/30"
              >
                <CheckCircle className="h-5 w-5 text-copper mt-1 flex-shrink-0" />
                <p className="text-midnight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-cream-warm">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-4 text-center">
            What's included in every engagement
          </h2>
          <p className="text-center text-midnight/70 mb-12 max-w-2xl mx-auto">
            Every project is led by a PhD-qualified expert and covers the full research arc — not just writing.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.whatsIncluded.map((item, i) => (
              <Card key={i} className="bg-white hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-midnight mb-2">{item.title}</h3>
                  <p className="text-midnight/75 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-FORM SECTIONS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {config.sections.map((s, i) => (
            <article key={i} className="mb-12 last:mb-0">
              <h2 className="font-serif text-3xl text-midnight mb-4">{s.heading}</h2>
              <div className="prose prose-lg max-w-none text-midnight/85 leading-relaxed">
                {s.body.split("\n\n").map((para, j) => (
                  <p key={j} className="mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-midnight text-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">
            Our process, step by step
          </h2>
          <ol className="space-y-6">
            {config.process.map((p, i) => (
              <li
                key={i}
                className="flex gap-5 p-6 rounded-lg bg-midnight-soft/50 border border-cream/10"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-copper text-white flex items-center justify-center font-serif text-xl">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl mb-2">{p.title}</h3>
                  <p className="text-cream/80">{p.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-16 bg-cream-warm">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-8 text-center">
            What you receive
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {config.deliverables.map((d, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-copper mt-0.5 flex-shrink-0" />
                <p className="text-midnight">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-4">
            Pricing & turnaround
          </h2>
          <p className="text-midnight/80 text-lg leading-relaxed mb-8">
            {config.pricingBlurb}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-white">
              <Link to="/pricing">
                See Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/order">Start Your Order</Link>
            </Button>
          </div>
          <div className="mt-6 flex justify-center gap-6 text-sm text-midnight/70">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 24-hour expert match
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> Unlimited revisions
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream-warm">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-8 text-center">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {config.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-lg border border-cream-rich/30 px-5"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-midnight hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-midnight/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* RELATED */}
      {config.related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-serif text-2xl md:text-3xl text-midnight mb-8 text-center">
              Related dissertation services
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {config.related.map((r, i) => (
                <Link
                  key={i}
                  to={r.href}
                  className="block p-5 bg-cream-warm hover:bg-cream rounded-lg border border-cream-rich/30 transition-colors text-midnight font-medium"
                >
                  {r.label} <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-copper to-copper-dark text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Ready to move your dissertation forward?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Talk to a PhD-qualified expert in your field within 24 hours.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-copper-dark hover:bg-cream-warm"
          >
            <Link to="/consultation">
              Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <FloatingOrderButton />
    </Layout>
  );
};

export default ServicePillarPage;
