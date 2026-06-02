import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export interface LongFormBlock {
  heading: string;
  body: string;
}

export interface LongFormFaq {
  question: string;
  answer: string;
}

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  blocks: LongFormBlock[];
  bullets?: { title: string; description: string }[];
  faqs?: LongFormFaq[];
  surface?: "white" | "cream";
}

const LongFormSection = ({ eyebrow, title, intro, blocks, bullets, faqs, surface = "white" }: Props) => {
  const bg = surface === "cream" ? "bg-cream-warm" : "bg-white";
  return (
    <section className={`py-16 sm:py-20 ${bg}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        {eyebrow && (
          <p className="text-sm uppercase tracking-widest text-copper mb-3 text-center">{eyebrow}</p>
        )}
        <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-4 text-center">{title}</h2>
        {intro && (
          <p className="text-midnight/75 text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">{intro}</p>
        )}

        <div className="space-y-10">
          {blocks.map((b) => (
            <article key={b.heading}>
              <h3 className="font-serif text-2xl text-midnight mb-3">{b.heading}</h3>
              <div className="prose prose-lg max-w-none text-midnight/85 leading-relaxed">
                {b.body.split("\n\n").map((p, i) => (
                  <p key={i} className="mb-4">{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {bullets && bullets.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            {bullets.map((b) => (
              <Card key={b.title} className="border-cream-rich/30">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-copper mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-lg text-midnight mb-1">{b.title}</h4>
                      <p className="text-sm text-midnight/75 leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {faqs && faqs.length > 0 && (
          <div className="mt-14">
            <h3 className="font-serif text-2xl md:text-3xl text-midnight mb-6 text-center">Frequently asked questions</h3>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-lg border border-cream-rich/30 px-5">
                  <AccordionTrigger className="text-left font-serif text-lg text-midnight hover:no-underline">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-midnight/80 leading-relaxed">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </section>
  );
};

export default LongFormSection;
