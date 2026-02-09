import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Quote,
  Copy,
  CheckCircle,
  ArrowRight,
  BookOpen,
  FileText,
  AlertCircle,
  Lightbulb,
  Code,
  Bot
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/schemas/FAQSchema";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { SeeAlso } from "@/components/ui/see-also";

const faqs = [
  {
    question: "Do I need to cite AI if I only used it for grammar checking?",
    answer: "Generally, basic grammar and spelling checkers don't require citation. However, if you used AI-powered tools that suggested substantial rewrites or content changes, disclosure is recommended. Check your institution's specific requirements."
  },
  {
    question: "How do I cite a conversation with ChatGPT?",
    answer: "Include the AI tool name, version if known, the date of the conversation, and ideally the prompt you used. Some style guides recommend including the full prompt in an appendix for transparency."
  },
  {
    question: "Should I include the AI's response in my citation?",
    answer: "For APA and Chicago, you typically include the prompt you used. The response itself is what you're citing, similar to citing a personal communication. Some institutions require appendices with full conversation logs."
  },
  {
    question: "What if I used AI for multiple tasks in my dissertation?",
    answer: "Create separate citations for distinct uses (e.g., literature searching vs. writing assistance) or provide a comprehensive methodology section describing all AI tool usage with appropriate citations for each."
  },
  {
    question: "Are there discipline-specific requirements for citing AI?",
    answer: "Yes, some fields have developed specific guidelines. For example, computer science may have different norms than humanities. Always check your department's and journal's specific requirements."
  },
  {
    question: "What if my citation style doesn't have official AI guidelines yet?",
    answer: "Adapt the principles from a similar citation type (software, personal communication, or online tool) and be transparent about your methodology. Document your reasoning for the approach you chose."
  }
];

interface CitationExample {
  tool: string;
  purpose: string;
  prompt: string;
  apa: string;
  mla: string;
  chicago: string;
  harvard: string;
}

const citationExamples: CitationExample[] = [
  {
    tool: "ChatGPT",
    purpose: "General AI Assistant",
    prompt: 'Explain the key differences between qualitative and quantitative research methodologies',
    apa: 'OpenAI. (2024). ChatGPT (Jan 15 version) [Large language model]. https://chat.openai.com',
    mla: '"Explain the key differences between qualitative and quantitative research methodologies" prompt. ChatGPT, 15 Jan. 2024, chat.openai.com.',
    chicago: 'OpenAI, ChatGPT, response to "Explain the key differences between qualitative and quantitative research methodologies," January 15, 2024, https://chat.openai.com.',
    harvard: 'OpenAI (2024) ChatGPT (Jan 15 version) [Large language model]. Available at: https://chat.openai.com (Accessed: 15 January 2024).'
  },
  {
    tool: "Claude",
    purpose: "AI Research Assistant",
    prompt: 'Summarize recent literature on remote work productivity',
    apa: 'Anthropic. (2024). Claude (Version 3) [Large language model]. https://claude.ai',
    mla: '"Summarize recent literature on remote work productivity" prompt. Claude, version 3, Anthropic, 15 Jan. 2024, claude.ai.',
    chicago: 'Anthropic, Claude, version 3, response to "Summarize recent literature on remote work productivity," January 15, 2024, https://claude.ai.',
    harvard: 'Anthropic (2024) Claude (Version 3) [Large language model]. Available at: https://claude.ai (Accessed: 15 January 2024).'
  },
  {
    tool: "Grammarly",
    purpose: "Writing Assistant",
    prompt: 'Grammar and style corrections for dissertation chapter',
    apa: 'Grammarly. (2024). Grammarly (Premium version) [Writing assistance software]. https://www.grammarly.com',
    mla: 'Grammarly Premium. Grammarly, Inc., 2024, www.grammarly.com.',
    chicago: 'Grammarly, Inc. Grammarly Premium. 2024. https://www.grammarly.com.',
    harvard: 'Grammarly Inc. (2024) Grammarly Premium [Writing assistance software]. Available at: https://www.grammarly.com (Accessed: 15 January 2024).'
  },
  {
    tool: "Elicit",
    purpose: "Research Discovery",
    prompt: 'Find papers on dissertation completion rates among PhD students',
    apa: 'Elicit. (2024). Elicit: The AI Research Assistant [Research tool]. https://elicit.org',
    mla: '"Find papers on dissertation completion rates among PhD students" search. Elicit, 15 Jan. 2024, elicit.org.',
    chicago: 'Elicit, "Find papers on dissertation completion rates among PhD students" search, January 15, 2024, https://elicit.org.',
    harvard: 'Elicit (2024) Elicit: The AI Research Assistant [Research tool]. Available at: https://elicit.org (Accessed: 15 January 2024).'
  }
];

const disclosureTemplates = {
  methodology: `In the preparation of this dissertation, I used [AI Tool Name] for [specific purpose, e.g., "grammatical editing," "literature discovery," "brainstorming research questions"]. 

Specifically, I used the tool to [detailed description of use]. All AI-generated suggestions were critically reviewed and verified against primary sources. The core arguments, analysis, and conclusions presented in this work represent my original intellectual contribution.

The prompts used and AI responses received are documented in Appendix [X] for transparency.`,

  acknowledgments: `I acknowledge the use of [AI Tool Name] (Version X, Company, Year) in the preparation of this dissertation. This tool was used for [specific purpose]. All content was reviewed, verified, and substantially revised by the author. The use of this tool complies with [University Name]'s academic integrity policy on AI assistance.`,

  appendix: `Appendix X: AI Tool Usage Log

Date: [Date]
Tool: [AI Tool Name and Version]
Purpose: [Reason for use]
Prompt: "[Exact prompt used]"
Use of Output: [How the response was used/modified]

Note: All AI-generated content was critically evaluated and integrated with substantial human authorship.`
};

const CitingAIGuide = () => {
  const { toast } = useToast();
  const [selectedStyle, setSelectedStyle] = useState("apa");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`
    });
  };

  return (
    <Layout>
      <SEO
        title="How to Cite AI (ChatGPT) | APA, MLA, Chicago, Harvard | DissertlyPro"
        description="Complete guide to citing AI tools like ChatGPT in academic work. Includes APA 7th, MLA 9th, Chicago, and Harvard citation formats with examples."
        canonical="https://dissertlypro.com/citing-ai-guide"
        keywords={["cite ChatGPT", "cite AI APA", "cite AI MLA", "ChatGPT citation", "AI academic citation", "cite Claude", "AI reference format"]}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dissertlypro.com" },
          { name: "AI in Academia", url: "https://dissertlypro.com/ai-academia" },
          { name: "Citing AI Guide", url: "https://dissertlypro.com/citing-ai-guide" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container mx-auto max-w-4xl px-4 relative">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "AI in Academia", href: "/ai-academia" },
              { label: "Citing AI Guide" }
            ]}
            className="mb-6"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4" variant="secondary">
              <Quote className="w-3 h-3 mr-1" />
              Citation Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Cite <span className="text-gradient-copper">AI Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete citation formats for ChatGPT, Claude, and other AI tools 
              in APA, MLA, Chicago, and Harvard styles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert className="border-primary/50 bg-primary/5 mb-8">
            <Lightbulb className="h-5 w-5 text-primary" />
            <AlertTitle>Key Principle</AlertTitle>
            <AlertDescription>
              When citing AI, include: the tool name, version/date, your prompt, and how you used the output. 
              Transparency is more important than perfect formatting—document your process clearly.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Citation Formats by Style */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Citation Formats by Style Guide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select your citation style to see examples for different AI tools.
            </p>
          </div>

          <Tabs value={selectedStyle} onValueChange={setSelectedStyle} className="mb-12">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="apa">APA 7th</TabsTrigger>
              <TabsTrigger value="mla">MLA 9th</TabsTrigger>
              <TabsTrigger value="chicago">Chicago</TabsTrigger>
              <TabsTrigger value="harvard">Harvard</TabsTrigger>
            </TabsList>

            {["apa", "mla", "chicago", "harvard"].map((style) => (
              <TabsContent key={style} value={style}>
                <div className="space-y-6">
                  {citationExamples.map((example, index) => (
                    <motion.div
                      key={example.tool}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Bot className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{example.tool}</CardTitle>
                                <CardDescription>{example.purpose}</CardDescription>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyToClipboard(
                                example[style as keyof CitationExample] as string,
                                `${example.tool} ${style.toUpperCase()} citation`
                              )}
                            >
                              <Copy className="w-4 h-4 mr-2" />
                              Copy
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-4">
                            <div className="text-sm font-medium mb-2">Example Prompt:</div>
                            <div className="bg-muted/50 p-3 rounded-lg text-sm italic">
                              "{example.prompt}"
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-2">
                              {style.toUpperCase()} Citation:
                            </div>
                            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                              {example[style as keyof CitationExample]}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <SeeAlso
            links={[
              { title: "Citation Generator Tool", href: "/tools/citation-generator" },
              { title: "Citation Mastery Guide", href: "/citation-mastery" }
            ]}
          />
        </div>
      </section>

      {/* Style-Specific Guidelines */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Style-Specific Guidelines</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key principles for each major citation style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  APA 7th Edition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Cite AI as software with the company as author
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Include version or date accessed in parentheses
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Use square brackets for format description
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Include URL to the tool
                  </li>
                </ul>
                <div className="text-xs text-muted-foreground mt-4">
                  Official guidance: APA Style Blog (2023)
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  MLA 9th Edition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Begin with the prompt in quotation marks
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Italicize the AI tool name
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Include version if known
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    End with date and URL
                  </li>
                </ul>
                <div className="text-xs text-muted-foreground mt-4">
                  Official guidance: MLA Style Center (2023)
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Chicago/Turabian
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Use footnotes/endnotes format
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Include company name, tool, prompt
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Quote the prompt used
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Add date and URL at end
                  </li>
                </ul>
                <div className="text-xs text-muted-foreground mt-4">
                  Official guidance: CMOS 17th (with AI addendum)
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Harvard Style
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Company as author (Year)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Tool name in italics with version
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Format type in square brackets
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    Include "Available at" with URL and access date
                  </li>
                </ul>
                <div className="text-xs text-muted-foreground mt-4">
                  Note: Harvard has many variants; check your institution
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclosure Templates */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Disclosure Templates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use templates for disclosing AI use in your dissertation.
            </p>
          </div>

          <div className="space-y-6">
            {Object.entries(disclosureTemplates).map(([key, template]) => (
              <Card key={key}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="capitalize flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      {key === "methodology" ? "Methodology Section" : 
                       key === "acknowledgments" ? "Acknowledgments" : "Appendix Format"}
                    </CardTitle>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(template, `${key} template`)}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted/50 p-4 rounded-lg text-sm whitespace-pre-wrap font-mono">
                    {template}
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* In-Text Citation Examples */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">In-Text Citation Examples</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How to reference AI tools within your dissertation text.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <div className="font-medium mb-2">APA In-Text:</div>
                  <div className="bg-muted p-4 rounded-lg text-sm">
                    <p className="mb-2">When prompted to explain research methodologies, ChatGPT (OpenAI, 2024) provided a summary that was then verified against primary sources.</p>
                    <p className="text-muted-foreground">OR: (OpenAI, 2024)</p>
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-2">MLA In-Text:</div>
                  <div className="bg-muted p-4 rounded-lg text-sm">
                    <p>The AI assistant suggested that "qualitative methods focus on understanding meaning" ("Explain the key differences" prompt).</p>
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-2">Chicago (Footnote):</div>
                  <div className="bg-muted p-4 rounded-lg text-sm">
                    <p>As noted in recent AI-generated summaries,¹ the field has evolved significantly.</p>
                    <p className="text-muted-foreground mt-2">¹ OpenAI, ChatGPT, response to author's prompt, January 15, 2024.</p>
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-2">Harvard In-Text:</div>
                  <div className="bg-muted p-4 rounded-lg text-sm">
                    <p>According to the analysis generated by ChatGPT (OpenAI, 2024), the research landscape has shifted.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Generate Citations Automatically</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Use our free Citation Generator to create properly formatted citations for all source types.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/tools/citation-generator">
                    <Quote className="w-4 h-4 mr-2" />
                    Citation Generator
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/ai-academia">
                    Back to AI Hub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default CitingAIGuide;
