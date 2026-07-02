import { useMemo, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GuaranteeBadge, PaymentLogos } from "@/components/cro";
import {
  FileText,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  ArrowLeft,
  Receipt,
  Minus,
  Plus,
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { logFullOrder } from "@/lib/googleSheets";

const PAYPAL_CLIENT_ID =
  "AbqfzvcYIxGrnSHuB9QlTM7bNDxfSVx52sZqAjuuGXqVhmP2bk1ngI37ZoJydg7D7L-5nSBLhh7lzt4M";

// ============ PRICING MODEL ============
const BASE_PRICE_PER_PAGE = 15; // USD, 275 words / double-spaced

const SERVICE_TYPES = [
  { value: "writing", label: "Writing (chapters, essays, papers)", multiplier: 1.0 },
  { value: "dissertation", label: "Full dissertation / thesis writing", multiplier: 1.1 },
  { value: "proposal", label: "Research proposal", multiplier: 1.0 },
  { value: "literature-review", label: "Literature review", multiplier: 1.0 },
  { value: "methodology", label: "Methodology chapter", multiplier: 1.05 },
  { value: "data-analysis", label: "Data analysis (SPSS/R/NVivo)", multiplier: 1.3 },
  { value: "statistics", label: "Statistics help", multiplier: 1.4 },
  { value: "editing", label: "Editing", multiplier: 0.4 },
  { value: "proofreading", label: "Proofreading", multiplier: 0.3 },
  { value: "formatting", label: "Formatting / APA fix", multiplier: 0.3 },
  { value: "presentation", label: "Defense presentation / slides", multiplier: 0.8 },
] as const;

const LEVELS = [
  { value: "undergrad", label: "Undergraduate", multiplier: 1.0 },
  { value: "masters", label: "Master's", multiplier: 1.4 },
  { value: "phd", label: "PhD / Doctoral", multiplier: 1.8 },
  { value: "professional", label: "DBA / EdD / Professional", multiplier: 2.0 },
] as const;

const DEADLINES = [
  { value: "3mo", label: "3+ months (best rate)", multiplier: 0.9, hours: 2160 },
  { value: "1mo", label: "1 month", multiplier: 1.0, hours: 720 },
  { value: "2wk", label: "2 weeks", multiplier: 1.25, hours: 336 },
  { value: "1wk", label: "1 week", multiplier: 1.4, hours: 168 },
  { value: "3d", label: "3 days", multiplier: 1.7, hours: 72 },
  { value: "24h", label: "24 hours (rush)", multiplier: 2.0, hours: 24 },
] as const;

interface AddOn {
  id: string;
  label: string;
  price: number;
  perPage?: boolean;
  hint?: string;
}

const ADDONS: AddOn[] = [
  { id: "turnitin", label: "Turnitin similarity report", price: 10, hint: "PDF report with score" },
  { id: "plag-cert", label: "Plagiarism-free certificate", price: 5 },
  { id: "ai-report", label: "AI-detection (GPTZero) report", price: 8 },
  { id: "native", label: "Native English writer", price: 3, perPage: true },
  { id: "top-tier", label: "Top-tier PhD expert", price: 4, perPage: true },
  { id: "progressive", label: "Progressive delivery (per chapter)", price: 15 },
  { id: "dataset", label: "SPSS/NVivo dataset + syntax", price: 25 },
  { id: "abstract", label: "Abstract (250 words)", price: 10 },
  { id: "slides", label: "PowerPoint summary (10 slides)", price: 20 },
  { id: "extended-rev", label: "Extended revisions (30 days)", price: 15 },
];

const CITATION_STYLES = ["APA 7", "APA 6", "Harvard", "Chicago/Turabian", "MLA", "IEEE", "Vancouver", "Other"];

const SUBJECTS = [
  "Business & Management",
  "Education",
  "Healthcare & Nursing",
  "Psychology",
  "Social Sciences",
  "Computer Science & IT",
  "Engineering",
  "Law",
  "Economics & Finance",
  "Public Administration",
  "Other",
];

interface FormState {
  serviceType: string;
  level: string;
  deadline: string;
  pages: number;
  subject: string;
  citationStyle: string;
  addons: string[];
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  university: string;
  agreed: boolean;
}

const initial: FormState = {
  serviceType: "writing",
  level: "masters",
  deadline: "1mo",
  pages: 1,
  subject: "",
  citationStyle: "APA 7",
  addons: [],
  description: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  university: "",
  agreed: false,
};

function computePrice(f: FormState) {
  const svc = SERVICE_TYPES.find((s) => s.value === f.serviceType)!;
  const lvl = LEVELS.find((l) => l.value === f.level)!;
  const dl = DEADLINES.find((d) => d.value === f.deadline)!;
  const perPage = BASE_PRICE_PER_PAGE * svc.multiplier * lvl.multiplier * dl.multiplier;
  const pagesSubtotal = perPage * f.pages;

  let addonsTotal = 0;
  const addonBreakdown: { label: string; amount: number }[] = [];
  for (const id of f.addons) {
    const a = ADDONS.find((x) => x.id === id);
    if (!a) continue;
    const amount = a.perPage ? a.price * f.pages : a.price;
    addonsTotal += amount;
    addonBreakdown.push({ label: a.label, amount });
  }
  const total = Math.max(15, Math.round((pagesSubtotal + addonsTotal) * 100) / 100);
  return {
    perPage: Math.round(perPage * 100) / 100,
    pagesSubtotal: Math.round(pagesSubtotal * 100) / 100,
    addonsTotal: Math.round(addonsTotal * 100) / 100,
    total,
    addonBreakdown,
    service: svc,
    level: lvl,
    deadline: dl,
  };
}

const Order = () => {
  const [step, setStep] = useState(1);
  const [f, setF] = useState<FormState>(initial);
  const [complete, setComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const price = useMemo(() => computePrice(f), [f]);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setF((prev) => ({ ...prev, [k]: v }));

  const toggleAddon = (id: string) =>
    setF((prev) => ({
      ...prev,
      addons: prev.addons.includes(id) ? prev.addons.filter((x) => x !== id) : [...prev.addons, id],
    }));

  const validate = (s: number) => {
    if (s === 1) return !!(f.serviceType && f.level && f.deadline && f.pages > 0 && f.description.trim().length >= 20);
    if (s === 2) return !!(f.firstName && f.lastName && f.email && f.phone);
    if (s === 3) return f.agreed;
    return false;
  };

  const next = () => {
    if (!validate(step)) {
      toast.error(
        step === 1
          ? "Please complete the order details (min. 20-character brief)."
          : step === 2
          ? "Please fill in your contact details."
          : "Please agree to the terms."
      );
      return;
    }
    setStep((s) => Math.min(s + 1, 3));
  };

  const gen = () => {
    const t = Date.now().toString(36).toUpperCase();
    const r = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `DP-${t}-${r}`;
  };

  const buildOrderSummary = (num: string, paymentId: string) => {
    const lines: string[] = [];
    lines.push(`Order ${num}`);
    lines.push(`Service: ${price.service.label} (${price.level.label}, ${price.deadline.label})`);
    lines.push(`Pages: ${f.pages} × $${price.perPage.toFixed(2)}/page = $${price.pagesSubtotal.toFixed(2)}`);
    if (price.addonBreakdown.length) {
      lines.push(`Add-ons:`);
      price.addonBreakdown.forEach((a) => lines.push(`  - ${a.label}: $${a.amount.toFixed(2)}`));
    }
    lines.push(`Total paid: $${price.total.toFixed(2)}`);
    lines.push(`Subject: ${f.subject || "—"} · Style: ${f.citationStyle}`);
    lines.push(`Client: ${f.firstName} ${f.lastName} · ${f.email} · ${f.phone}`);
    if (f.university) lines.push(`University: ${f.university}`);
    lines.push(`Payment ID: ${paymentId}`);
    lines.push(``);
    lines.push(`Brief:`);
    lines.push(f.description);
    return lines.join("\n");
  };

  const handlePaymentSuccess = async (details: Record<string, unknown>) => {
    const num = gen();
    const paymentId = (details as { id?: string }).id || `PAYPAL_${Date.now()}`;
    setOrderNumber(num);

    const summary = buildOrderSummary(num, paymentId);
    const projectTitle = f.description.slice(0, 80) + (f.description.length > 80 ? "…" : "");

    // Persist locally
    try {
      localStorage.setItem(
        `order_${num}`,
        JSON.stringify({ orderNumber: num, ...f, price, paymentId, paymentDate: new Date().toISOString() })
      );
    } catch { /* ignore */ }

    // Log to Sheets + email via Apps Script (primary)
    const ok = await logFullOrder({
      orderNumber: num,
      firstName: f.firstName,
      lastName: f.lastName,
      email: f.email,
      phone: f.phone,
      degreeType: price.level.label,
      university: f.university,
      subjectArea: f.subject,
      serviceType: price.service.label,
      projectTitle,
      projectDescription: summary,
      deadline: price.deadline.label,
      citationStyle: f.citationStyle,
      specialInstructions: `Pages: ${f.pages}; Add-ons: ${price.addonBreakdown.map(a => a.label).join(", ") || "none"}`,
      depositAmount: price.total,
      paymentId,
    }).catch(() => false);

    // Mailto fallback (always available as a safety net for the customer if webhook is down)
    if (!ok) {
      const mailto = `mailto:tutorsgallery@gmail.com?subject=${encodeURIComponent(
        `New order ${num} — $${price.total.toFixed(2)}`
      )}&body=${encodeURIComponent(summary)}`;
      // Open silently in a new tab; the client's own mail app will draft it as a backup notification.
      try { window.open(mailto, "_blank"); } catch { /* ignore */ }
    }

    setComplete(true);
    toast.success("Payment received — your order is confirmed.");
  };

  if (complete) {
    return (
      <Layout>
        <SEO title="Order Confirmed" description="Your dissertation order has been submitted." canonical="/order" />
        <section className="py-20 lg:py-28">
          <div className="container max-w-2xl">
            <Card className="border-success/30 bg-success/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <CardTitle className="text-2xl font-serif">Order Confirmed</CardTitle>
                <CardDescription>Your writer will be assigned within the hour.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Receipt className="h-5 w-5 text-copper" />
                    <h2 className="font-semibold">Receipt</h2>
                  </div>
                  <div className="space-y-2 text-sm">
                    <Row k="Order #" v={<span className="font-mono font-bold text-copper">{orderNumber}</span>} />
                    <Row k="Service" v={price.service.label} />
                    <Row k="Level" v={price.level.label} />
                    <Row k="Pages" v={String(f.pages)} />
                    <Row k="Deadline" v={price.deadline.label} />
                    <Row k="Total paid" v={<strong className="text-success">${price.total.toFixed(2)}</strong>} />
                    <Row k="Status" v={<span className="text-amber-600 inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />Writer assignment</span>} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  A confirmation was sent to <strong>{f.email}</strong> and to our team at
                  <strong> tutorsgallery@gmail.com</strong>. Keep your order number handy.
                </p>
                <div className="flex gap-3">
                  <Button variant="hero-outline" className="flex-1" onClick={() => window.print()}>Print</Button>
                  <Button variant="copper" className="flex-1" asChild><a href="/">Return home</a></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title="Order Dissertation Help — from $15/page"
        description="Order dissertation writing, editing, statistics, or chapter help from $15 per page. Configure pages and add-ons, pay directly. No consultation fee."
        canonical="/order"
        keywords={["dissertation order", "dissertation writing price", "PhD help order", "thesis editing per page"]}
      />

      <section className="bg-hero-gradient py-10 lg:py-14">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-3">
              Order in minutes — from $15 / page
            </h1>
            <p className="text-lg text-ivory/90">
              No consultation fee. Configure pages, deadline, and add-ons. Pay only for what you order.
            </p>
          </div>
        </div>
      </section>

      {/* Progress */}
      <div className="bg-cream-warm border-b border-border sticky top-16 sm:top-20 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[
              { n: 1, label: "Configure", icon: FileText },
              { n: 2, label: "Your details", icon: Shield },
              { n: 3, label: "Review & pay", icon: Receipt },
            ].map((s, i) => (
              <div key={s.n} className="flex items-center flex-1">
                <div
                  className={`flex items-center gap-2 cursor-pointer ${step >= s.n ? "text-copper" : "text-muted-foreground"}`}
                  onClick={() => step > s.n && setStep(s.n)}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step > s.n ? "bg-copper text-white" : step === s.n ? "bg-copper/20 text-copper border-2 border-copper" : "bg-muted text-muted-foreground"
                  }`}>
                    {step > s.n ? <CheckCircle className="h-4 w-4" /> : s.n}
                  </div>
                  <span className="hidden sm:block text-sm font-medium">{s.label}</span>
                </div>
                {i < 2 && <div className={`flex-1 h-0.5 mx-2 ${step > s.n ? "bg-copper" : "bg-border"}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-10 lg:py-14">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_360px] gap-8 max-w-6xl mx-auto">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card>
                    <CardContent className="p-6 sm:p-8 space-y-6">
                      {step === 1 && (
                        <>
                          <h2 className="text-xl font-serif font-bold">Configure your order</h2>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="serviceType">Service *</Label>
                              <Select value={f.serviceType} onValueChange={(v) => update("serviceType", v)}>
                                <SelectTrigger id="serviceType"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  {SERVICE_TYPES.map((s) => (
                                    <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="level">Academic level *</Label>
                              <Select value={f.level} onValueChange={(v) => update("level", v)}>
                                <SelectTrigger id="level"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  {LEVELS.map((l) => (
                                    <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="deadline">Deadline *</Label>
                              <Select value={f.deadline} onValueChange={(v) => update("deadline", v)}>
                                <SelectTrigger id="deadline"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  {DEADLINES.map((d) => (
                                    <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label>Pages * <span className="text-xs text-muted-foreground">(275 words / page)</span></Label>
                              <div className="flex items-center gap-2">
                                <Button type="button" variant="hero-outline" size="icon" aria-label="Decrease pages" onClick={() => update("pages", Math.max(1, f.pages - 1))}>
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <Input
                                  type="number"
                                  min={1}
                                  value={f.pages}
                                  onChange={(e) => update("pages", Math.max(1, parseInt(e.target.value || "1", 10)))}
                                  className="text-center"
                                />
                                <Button type="button" variant="hero-outline" size="icon" aria-label="Increase pages" onClick={() => update("pages", f.pages + 1)}>
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="subject">Subject area</Label>
                              <Select value={f.subject} onValueChange={(v) => update("subject", v)}>
                                <SelectTrigger id="subject"><SelectValue placeholder="Select subject" /></SelectTrigger>
                                <SelectContent>
                                  {SUBJECTS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="citation">Citation style</Label>
                              <Select value={f.citationStyle} onValueChange={(v) => update("citationStyle", v)}>
                                <SelectTrigger id="citation"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  {CITATION_STYLES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="description">Instructions *</Label>
                            <Textarea
                              id="description"
                              rows={5}
                              value={f.description}
                              onChange={(e) => update("description", e.target.value)}
                              placeholder="Topic, chapter, sources required, formatting notes, files you'll send after checkout…"
                            />
                            <p className="text-xs text-muted-foreground">You can email attachments to tutorsgallery@gmail.com with your order number after payment.</p>
                          </div>

                          <div className="space-y-3">
                            <Label className="text-base">Optional add-ons</Label>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {ADDONS.map((a) => {
                                const checked = f.addons.includes(a.id);
                                const amt = a.perPage ? a.price * f.pages : a.price;
                                return (
                                  <label
                                    key={a.id}
                                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                                      checked ? "border-copper bg-copper/5" : "border-border hover:border-copper/40"
                                    }`}
                                  >
                                    <Checkbox checked={checked} onCheckedChange={() => toggleAddon(a.id)} />
                                    <div className="flex-1 text-sm">
                                      <div className="flex justify-between gap-2">
                                        <span className="font-medium">{a.label}</span>
                                        <span className="text-copper font-semibold">
                                          +${amt.toFixed(2)}{a.perPage && <span className="text-xs text-muted-foreground"> ({f.pages}p)</span>}
                                        </span>
                                      </div>
                                      {a.hint && <p className="text-xs text-muted-foreground mt-0.5">{a.hint}</p>}
                                    </div>
                                  </label>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      )}

                      {step === 2 && (
                        <>
                          <h2 className="text-xl font-serif font-bold">Your details</h2>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First name *</Label>
                              <Input id="firstName" value={f.firstName} onChange={(e) => update("firstName", e.target.value)} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last name *</Label>
                              <Input id="lastName" value={f.lastName} onChange={(e) => update("lastName", e.target.value)} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" type="email" value={f.email} onChange={(e) => update("email", e.target.value)} />
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone / WhatsApp *</Label>
                              <Input id="phone" type="tel" value={f.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+1 555 123 4567" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="university">University (optional)</Label>
                              <Input id="university" value={f.university} onChange={(e) => update("university", e.target.value)} />
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            We use your details only to deliver your order. See our privacy policy.
                          </p>
                        </>
                      )}

                      {step === 3 && (
                        <>
                          <h2 className="text-xl font-serif font-bold">Review &amp; pay</h2>
                          <div className="border rounded-lg p-4 space-y-2 text-sm bg-cream-warm/40">
                            <Row k="Service" v={price.service.label} />
                            <Row k="Level" v={price.level.label} />
                            <Row k="Deadline" v={price.deadline.label} />
                            <Row k="Pages" v={`${f.pages} × $${price.perPage.toFixed(2)} = $${price.pagesSubtotal.toFixed(2)}`} />
                            {price.addonBreakdown.length > 0 && (
                              <div className="pt-2 border-t">
                                {price.addonBreakdown.map((a) => (
                                  <Row key={a.label} k={a.label} v={`$${a.amount.toFixed(2)}`} />
                                ))}
                              </div>
                            )}
                            <div className="flex justify-between pt-3 border-t text-base">
                              <strong>Total</strong>
                              <strong className="text-copper">${price.total.toFixed(2)} USD</strong>
                            </div>
                          </div>

                          <label className="flex items-start gap-3 text-sm">
                            <Checkbox checked={f.agreed} onCheckedChange={(v) => update("agreed", Boolean(v))} />
                            <span>
                              I agree to the <a href="/terms-and-conditions" className="underline text-copper">terms</a> and
                              &nbsp;<a href="/privacy-policy" className="underline text-copper">privacy policy</a>, including confidentiality of my order and files.
                            </span>
                          </label>

                          {f.agreed ? (
                            <div className="pt-2">
                              <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD" }}>
                                <PayPalButtons
                                  style={{ layout: "vertical", color: "gold", shape: "rect", label: "pay" }}
                                  createOrder={(_data, actions) =>
                                    actions.order.create({
                                      intent: "CAPTURE",
                                      purchase_units: [
                                        {
                                          description: `${price.service.label} — ${f.pages} page${f.pages > 1 ? "s" : ""} (${price.level.label}, ${price.deadline.label})`,
                                          amount: { currency_code: "USD", value: price.total.toFixed(2) },
                                        },
                                      ],
                                    })
                                  }
                                  onApprove={async (_data, actions) => {
                                    const details = await actions.order?.capture();
                                    await handlePaymentSuccess((details ?? {}) as Record<string, unknown>);
                                  }}
                                  onError={(err) => {
                                    console.error(err);
                                    toast.error("Payment failed. Please try again or WhatsApp us.");
                                  }}
                                />
                              </PayPalScriptProvider>
                              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                                <PaymentLogos />
                                <GuaranteeBadge />
                              </div>
                            </div>
                          ) : (
                            <p className="text-sm text-muted-foreground">Agree to the terms to enable payment.</p>
                          )}
                        </>
                      )}

                      {/* Navigation */}
                      <div className="flex justify-between pt-2">
                        <Button
                          variant="hero-outline"
                          onClick={() => setStep((s) => Math.max(1, s - 1))}
                          disabled={step === 1}
                        >
                          <ArrowLeft className="h-4 w-4" /> Back
                        </Button>
                        {step < 3 ? (
                          <Button variant="copper" onClick={next}>
                            Continue <ArrowRight className="h-4 w-4" />
                          </Button>
                        ) : (
                          <span />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sticky price summary */}
            <aside className="lg:sticky lg:top-32 self-start">
              <Card className="border-copper/30">
                <CardHeader>
                  <CardTitle className="text-lg font-serif">Live total</CardTitle>
                  <CardDescription>Updates as you configure.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <Row k="Per page" v={`$${price.perPage.toFixed(2)}`} />
                  <Row k={`Pages × ${f.pages}`} v={`$${price.pagesSubtotal.toFixed(2)}`} />
                  {price.addonsTotal > 0 && <Row k="Add-ons" v={`$${price.addonsTotal.toFixed(2)}`} />}
                  <div className="flex justify-between pt-3 border-t text-base">
                    <strong>Total</strong>
                    <strong className="text-copper">${price.total.toFixed(2)}</strong>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    You pay only what's shown. No hidden fees. Refundable per our guarantee.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Row = ({ k, v }: { k: string; v: React.ReactNode }) => (
  <div className="flex justify-between gap-3">
    <span className="text-muted-foreground">{k}</span>
    <span className="text-right">{v}</span>
  </div>
);

export default Order;
