import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import FAQSchema from "@/components/schemas/FAQSchema";
import { answerGroups, allAnswers } from "@/data/answersLibrary";

// Phase 6 — Q&A library. Short, self-contained answers in the format
// search engines and AI assistants quote directly.
const Answers = () => (
  <Layout>
    <SEO
      title="Dissertation Answers Library: 40+ Direct Answers"
      description="Direct answers to the most common dissertation and thesis questions: word counts, findings vs discussion, methodology justification, viva questions, Turnitin and AI policy."
      canonical="/answers"
      keywords={[
        "dissertation questions answered",
        "thesis faq",
        "dissertation word count",
        "viva questions",
        "turnitin similarity score",
      ]}
      type="article"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "/" },
        { name: "Resources", url: "/resources" },
        { name: "Answers Library", url: "/answers" },
      ]}
    />
    <FAQSchema faqs={allAnswers.map((a) => ({ question: a.q, answer: a.a }))} />

    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-5">
          Dissertation Answers Library
        </h1>
        <p className="text-lg text-primary-foreground/90 leading-relaxed">
          {allAnswers.length} direct answers to the questions Master&apos;s and PhD candidates ask most —
          each one written to stand on its own, with a link to the full guide where there is more to say.
        </p>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav aria-label="Answer categories" className="mb-12">
          <ul className="flex flex-wrap gap-3 list-none pl-0">
            {answerGroups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="text-sm text-primary hover:underline">
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-14">
          {answerGroups.map((group) => (
            <section key={group.id} id={group.id}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">{group.title}</h2>
              <p className="text-muted-foreground mb-6">{group.intro}</p>
              <dl className="space-y-7">
                {group.items.map((item) => (
                  <div key={item.q}>
                    <dt className="font-semibold text-lg mb-2">{item.q}</dt>
                    <dd className="text-muted-foreground leading-relaxed m-0">
                      {item.a}
                      {item.link && (
                        <>
                          {" "}
                          <Link to={item.link.href} className="text-primary hover:underline">
                            {item.link.label}
                          </Link>
                          .
                        </>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <div className="mt-16 p-6 bg-secondary/40 rounded-lg">
          <h2 className="font-serif text-2xl font-bold mb-3">Question not answered here?</h2>
          <p className="text-muted-foreground mb-5">
            Send us the research question and the deadline and a subject expert will tell you, free,
            what the work would involve. Pricing starts at $15 per page and there is no consultation fee.
          </p>
          <Button asChild size="lg">
            <Link to="/order">
              Get a free quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Answers;
