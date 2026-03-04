import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GitBranch, Download, RotateCcw, ArrowDown, Copy, Check, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ToolSchema from "@/components/schemas/ToolSchema";
import SoftwareApplicationSchema from "@/components/schemas/SoftwareApplicationSchema";
import { motion } from "framer-motion";

interface PRISMAData {
  // Identification
  databaseRecords: number;
  otherRecords: number;
  duplicatesRemoved: number;
  
  // Screening
  recordsScreened: number;
  recordsExcluded: number;
  excludedReasons: string;
  
  // Eligibility
  fullTextAssessed: number;
  fullTextExcluded: number;
  fullTextExcludedReasons: string;
  
  // Included
  studiesIncludedQualitative: number;
  studiesIncludedQuantitative: number;
}

const defaultData: PRISMAData = {
  databaseRecords: 0,
  otherRecords: 0,
  duplicatesRemoved: 0,
  recordsScreened: 0,
  recordsExcluded: 0,
  excludedReasons: "",
  fullTextAssessed: 0,
  fullTextExcluded: 0,
  fullTextExcludedReasons: "",
  studiesIncludedQualitative: 0,
  studiesIncludedQuantitative: 0,
};

const PRISMAFlowPage = () => {
  const [data, setData] = useState<PRISMAData>(defaultData);
  const [showDiagram, setShowDiagram] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const updateField = (field: keyof PRISMAData, value: string | number) => {
    setData(prev => ({
      ...prev,
      [field]: typeof value === 'string' && !isNaN(Number(value)) && field !== 'excludedReasons' && field !== 'fullTextExcludedReasons'
        ? Math.max(0, parseInt(value) || 0)
        : value
    }));
  };

  const calculateTotals = () => {
    const totalIdentified = data.databaseRecords + data.otherRecords;
    const afterDuplicates = totalIdentified - data.duplicatesRemoved;
    return { totalIdentified, afterDuplicates };
  };

  const generateDiagram = () => {
    if (data.databaseRecords === 0 && data.otherRecords === 0) {
      toast({
        title: "Missing Data",
        description: "Please enter at least one source of records.",
        variant: "destructive",
      });
      return;
    }
    setShowDiagram(true);
    toast({
      title: "Diagram Generated!",
      description: "Your PRISMA flow diagram is ready below.",
    });
  };

  const resetForm = () => {
    setData(defaultData);
    setShowDiagram(false);
    toast({
      title: "Form Reset",
      description: "All fields have been cleared.",
    });
  };

  const copyAsText = () => {
    const { totalIdentified, afterDuplicates } = calculateTotals();
    const text = `PRISMA Flow Diagram

IDENTIFICATION
Records identified through database searching: ${data.databaseRecords}
Additional records from other sources: ${data.otherRecords}
Total records identified: ${totalIdentified}
Duplicates removed: ${data.duplicatesRemoved}
Records after duplicates removed: ${afterDuplicates}

SCREENING
Records screened: ${data.recordsScreened}
Records excluded: ${data.recordsExcluded}
${data.excludedReasons ? `Exclusion reasons: ${data.excludedReasons}` : ''}

ELIGIBILITY
Full-text articles assessed: ${data.fullTextAssessed}
Full-text articles excluded: ${data.fullTextExcluded}
${data.fullTextExcludedReasons ? `Exclusion reasons: ${data.fullTextExcludedReasons}` : ''}

INCLUDED
Studies included in qualitative synthesis: ${data.studiesIncludedQualitative}
Studies included in quantitative synthesis (meta-analysis): ${data.studiesIncludedQuantitative}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Copied!",
      description: "PRISMA data copied to clipboard.",
    });
  };

  const { totalIdentified, afterDuplicates } = calculateTotals();

  return (
    <Layout>
      <SEO
        title="PRISMA Flow Diagram Generator | Free Systematic Review Tool"
        description="Create professional PRISMA flow diagrams for your systematic review. Free tool to visualize identification, screening, eligibility, and inclusion stages."
        canonical="/tools/prisma-flow"
        keywords={["PRISMA flow diagram", "systematic review", "meta-analysis", "literature review", "study selection", "PRISMA 2020", "systematic review tool"]}
      />
      
      <ToolSchema
        name="PRISMA Flow Diagram Generator"
        description="Create professional PRISMA flow diagrams for systematic reviews. Visualize study identification, screening, eligibility, and inclusion stages following PRISMA 2020 guidelines."
        url="https://dissertlypro.com/tools/prisma-flow"
        featureList={[
          "PRISMA 2020 compliant format",
          "Visual flowchart generation",
          "Customizable exclusion reasons",
          "Copy as text export",
          "Real-time calculations"
        ]}
      />
      <SoftwareApplicationSchema
        name="PRISMA Flow Diagram Generator"
        description="Create professional PRISMA flow diagrams for systematic reviews."
        url="/tools/prisma-flow"
      />

      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <GitBranch className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              PRISMA Flow Diagram Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create professional PRISMA 2020 flow diagrams for your systematic review.
              Enter your study selection data and generate a visual flowchart.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Enter Your Data
                  </CardTitle>
                  <CardDescription>
                    Fill in the numbers for each stage of your systematic review
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Identification */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary border-b pb-2">Identification</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="databaseRecords">Database Records</Label>
                        <Input
                          id="databaseRecords"
                          type="number"
                          min="0"
                          value={data.databaseRecords || ''}
                          onChange={(e) => updateField('databaseRecords', e.target.value)}
                          placeholder="e.g., 1500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="otherRecords">Other Sources</Label>
                        <Input
                          id="otherRecords"
                          type="number"
                          min="0"
                          value={data.otherRecords || ''}
                          onChange={(e) => updateField('otherRecords', e.target.value)}
                          placeholder="e.g., 50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duplicatesRemoved">Duplicates Removed</Label>
                      <Input
                        id="duplicatesRemoved"
                        type="number"
                        min="0"
                        value={data.duplicatesRemoved || ''}
                        onChange={(e) => updateField('duplicatesRemoved', e.target.value)}
                        placeholder="e.g., 200"
                      />
                    </div>
                  </div>

                  {/* Screening */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary border-b pb-2">Screening</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="recordsScreened">Records Screened</Label>
                        <Input
                          id="recordsScreened"
                          type="number"
                          min="0"
                          value={data.recordsScreened || ''}
                          onChange={(e) => updateField('recordsScreened', e.target.value)}
                          placeholder="e.g., 1350"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="recordsExcluded">Records Excluded</Label>
                        <Input
                          id="recordsExcluded"
                          type="number"
                          min="0"
                          value={data.recordsExcluded || ''}
                          onChange={(e) => updateField('recordsExcluded', e.target.value)}
                          placeholder="e.g., 1200"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="excludedReasons">Exclusion Reasons (optional)</Label>
                      <Textarea
                        id="excludedReasons"
                        value={data.excludedReasons}
                        onChange={(e) => updateField('excludedReasons', e.target.value)}
                        placeholder="e.g., Not relevant to research question, Wrong study type..."
                        rows={2}
                      />
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary border-b pb-2">Eligibility</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullTextAssessed">Full-Text Assessed</Label>
                        <Input
                          id="fullTextAssessed"
                          type="number"
                          min="0"
                          value={data.fullTextAssessed || ''}
                          onChange={(e) => updateField('fullTextAssessed', e.target.value)}
                          placeholder="e.g., 150"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fullTextExcluded">Full-Text Excluded</Label>
                        <Input
                          id="fullTextExcluded"
                          type="number"
                          min="0"
                          value={data.fullTextExcluded || ''}
                          onChange={(e) => updateField('fullTextExcluded', e.target.value)}
                          placeholder="e.g., 120"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fullTextExcludedReasons">Exclusion Reasons (optional)</Label>
                      <Textarea
                        id="fullTextExcludedReasons"
                        value={data.fullTextExcludedReasons}
                        onChange={(e) => updateField('fullTextExcludedReasons', e.target.value)}
                        placeholder="e.g., No full text (n=30), Wrong outcome (n=50)..."
                        rows={2}
                      />
                    </div>
                  </div>

                  {/* Included */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary border-b pb-2">Included</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studiesIncludedQualitative">Qualitative Synthesis</Label>
                        <Input
                          id="studiesIncludedQualitative"
                          type="number"
                          min="0"
                          value={data.studiesIncludedQualitative || ''}
                          onChange={(e) => updateField('studiesIncludedQualitative', e.target.value)}
                          placeholder="e.g., 30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studiesIncludedQuantitative">Meta-Analysis</Label>
                        <Input
                          id="studiesIncludedQuantitative"
                          type="number"
                          min="0"
                          value={data.studiesIncludedQuantitative || ''}
                          onChange={(e) => updateField('studiesIncludedQuantitative', e.target.value)}
                          placeholder="e.g., 25"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button onClick={generateDiagram} className="flex-1">
                      <GitBranch className="w-4 h-4 mr-2" />
                      Generate Diagram
                    </Button>
                    <Button variant="outline" onClick={resetForm}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Diagram Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>PRISMA Flow Diagram</span>
                    {showDiagram && (
                      <Button variant="outline" size="sm" onClick={copyAsText}>
                        {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                        {copied ? 'Copied!' : 'Copy Text'}
                      </Button>
                    )}
                  </CardTitle>
                  <CardDescription>
                    Visual representation of your systematic review process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {showDiagram ? (
                    <div className="space-y-4 text-sm">
                      {/* Identification Stage */}
                      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3 text-center">IDENTIFICATION</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white dark:bg-background border rounded p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Database Records</div>
                            <div className="font-bold text-lg">{data.databaseRecords.toLocaleString()}</div>
                          </div>
                          <div className="bg-white dark:bg-background border rounded p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Other Sources</div>
                            <div className="font-bold text-lg">{data.otherRecords.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="flex justify-center my-2">
                          <ArrowDown className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="bg-white dark:bg-background border rounded p-3 text-center">
                          <div className="text-xs text-muted-foreground mb-1">Total Identified</div>
                          <div className="font-bold text-lg">{totalIdentified.toLocaleString()}</div>
                        </div>
                        <div className="flex justify-center my-2">
                          <ArrowDown className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white dark:bg-background border rounded p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Duplicates Removed</div>
                            <div className="font-bold text-lg text-red-600">{data.duplicatesRemoved.toLocaleString()}</div>
                          </div>
                          <div className="bg-white dark:bg-background border rounded p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">After Duplicates</div>
                            <div className="font-bold text-lg">{afterDuplicates.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ArrowDown className="w-6 h-6 text-primary" />
                      </div>

                      {/* Screening Stage */}
                      <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                        <h4 className="font-bold text-yellow-700 dark:text-yellow-300 mb-3 text-center">SCREENING</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white dark:bg-background border rounded p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Records Screened</div>
                            <div className="font-bold text-lg">{data.recordsScreened.toLocaleString()}</div>
                          </div>
                          <div className="bg-white dark:bg-background border rounded p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Records Excluded</div>
                            <div className="font-bold text-lg text-red-600">{data.recordsExcluded.toLocaleString()}</div>
                          </div>
                        </div>
                        {data.excludedReasons && (
                          <div className="mt-3 bg-white dark:bg-background border rounded p-2 text-xs text-muted-foreground">
                            <span className="font-medium">Reasons:</span> {data.excludedReasons}
                          </div>
                        )}
                      </div>

                      <div className="flex justify-center">
                        <ArrowDown className="w-6 h-6 text-primary" />
                      </div>

                      {/* Eligibility Stage */}
                      <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-4">
                        <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3 text-center">ELIGIBILITY</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white dark:bg-background border rounded p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Full-Text Assessed</div>
                            <div className="font-bold text-lg">{data.fullTextAssessed.toLocaleString()}</div>
                          </div>
                          <div className="bg-white dark:bg-background border rounded p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Full-Text Excluded</div>
                            <div className="font-bold text-lg text-red-600">{data.fullTextExcluded.toLocaleString()}</div>
                          </div>
                        </div>
                        {data.fullTextExcludedReasons && (
                          <div className="mt-3 bg-white dark:bg-background border rounded p-2 text-xs text-muted-foreground">
                            <span className="font-medium">Reasons:</span> {data.fullTextExcludedReasons}
                          </div>
                        )}
                      </div>

                      <div className="flex justify-center">
                        <ArrowDown className="w-6 h-6 text-primary" />
                      </div>

                      {/* Included Stage */}
                      <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
                        <h4 className="font-bold text-green-700 dark:text-green-300 mb-3 text-center">INCLUDED</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white dark:bg-background border rounded p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Qualitative Synthesis</div>
                            <div className="font-bold text-lg text-green-600">{data.studiesIncludedQualitative.toLocaleString()}</div>
                          </div>
                          <div className="bg-white dark:bg-background border rounded p-3 text-center">
                            <div className="text-xs text-muted-foreground mb-1">Meta-Analysis</div>
                            <div className="font-bold text-lg text-green-600">{data.studiesIncludedQuantitative.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                      <GitBranch className="w-16 h-16 mb-4 opacity-20" />
                      <p className="text-center">
                        Enter your data and click "Generate Diagram"<br />
                        to see your PRISMA flow chart
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle>About PRISMA Flow Diagrams</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  The PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) flow diagram 
                  is a standardized way to document the study selection process in systematic reviews. It helps 
                  readers understand how you identified, screened, and selected studies for inclusion.
                </p>
                <h4>The Four Stages:</h4>
                <ul>
                  <li><strong>Identification:</strong> Records found through database searching and other sources</li>
                  <li><strong>Screening:</strong> Title and abstract screening of unique records</li>
                  <li><strong>Eligibility:</strong> Full-text assessment against inclusion/exclusion criteria</li>
                  <li><strong>Included:</strong> Final studies included in the review and/or meta-analysis</li>
                </ul>
                <p>
                  This tool follows the PRISMA 2020 guidelines. For more detailed guidance, consult the 
                  official PRISMA statement and checklist.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PRISMAFlowPage;
