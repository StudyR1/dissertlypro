import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ORDER_URL } from "@/lib/orderLinks";

const split = [
  { name: "Introduction", pct: 10 },
  { name: "Literature Review", pct: 30 },
  { name: "Methodology", pct: 15 },
  { name: "Results / Findings", pct: 25 },
  { name: "Discussion", pct: 15 },
  { name: "Conclusion", pct: 5 },
];

const ChapterEstimator = () => {
  const [total, setTotal] = useState(15000);
  return (
    <section className="py-16 bg-background" aria-labelledby="chapter-estimator">
      <div className="container max-w-4xl">
        <h2 id="chapter-estimator" className="text-3xl font-serif font-bold mb-3">Dissertation Chapter Word Count Estimator</h2>
        <p className="text-muted-foreground mb-6">Enter your total word limit to see the recommended word count for each chapter, based on the standard academic split.</p>
        <Label htmlFor="total-words">Total word limit</Label>
        <Input id="total-words" type="number" min={1000} value={total} onChange={(e) => setTotal(Number(e.target.value) || 0)} className="max-w-xs text-base mt-2 mb-6" />
        <div className="overflow-x-auto rounded-xl border bg-card">
          <table className="w-full text-left">
            <thead><tr className="border-b"><th className="p-3">Chapter</th><th className="p-3">Share</th><th className="p-3">Words</th></tr></thead>
            <tbody>
              {split.map((s) => (
                <tr key={s.name} className="border-b last:border-0">
                  <td className="p-3">{s.name}</td><td className="p-3">{s.pct}%</td>
                  <td className="p-3 font-semibold">{Math.round((total * s.pct) / 100).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-6 rounded-xl bg-primary/5 border flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="font-medium">Need {total.toLocaleString()} words polished, edited or formatted? Get an instant price.</p>
          <Button variant="copper" asChild><a href={ORDER_URL}>Calculate Price & Order</a></Button>
        </div>
      </div>
    </section>
  );
};

export default ChapterEstimator;
