import { Button } from "@/components/ui/button";
import { ORDER_URL } from "@/lib/orderLinks";
import type { AnswerBox } from "@/data/universityAnswerBoxes";

const UniversityAnswerBox = ({ box, shortName }: { box: AnswerBox; shortName: string }) => (
  <section className="py-12 bg-background" aria-labelledby="quick-answer">
    <div className="container px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 id="quick-answer" className="text-2xl sm:text-3xl font-serif font-bold mb-4">
          {shortName} Thesis Requirements at a Glance
        </h2>
        <p className="speakable text-lg leading-relaxed mb-6">{box.answer}</p>
        <div className="overflow-x-auto rounded-xl border bg-card mb-6">
          <table className="w-full text-left">
            <caption className="sr-only">{shortName} thesis requirements</caption>
            <tbody>
              {box.rows.map((r) => (
                <tr key={r.label} className="border-b last:border-0">
                  <th scope="row" className="p-3 font-semibold w-1/2">{r.label}</th>
                  <td className="p-3">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Always confirm current limits in your faculty's research degree regulations.</p>
        <div className="rounded-xl border-l-4 border-copper bg-copper/5 p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="font-medium">Preparing your {shortName} proposal, chapter or thesis? Get it reviewed by doctoral-level specialists.</p>
          <Button variant="copper" asChild><a href={ORDER_URL}>Get Expert Help</a></Button>
        </div>
      </div>
    </div>
  </section>
);

export default UniversityAnswerBox;
