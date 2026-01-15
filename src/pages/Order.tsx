import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
import { 
  FileText, 
  GraduationCap, 
  Calendar, 
  User, 
  BookOpen,
  CheckCircle,
  AlertCircle,
  Clock,
  Shield,
  ArrowRight,
  ArrowLeft,
  Upload,
  Receipt
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const PAYPAL_CLIENT_ID = "AbqfzvcYIxGrnSHuB9QlTM7bNDxfSVx52sZqAjuuGXqVhmP2bk1ngI37ZoJydg7D7L-5nSBLhh7lzt4M";

// Service types with base price estimates
const serviceTypes = [
  { value: "dissertation-proposal", label: "Dissertation Proposal", priceRange: "$800 - $2,500" },
  { value: "thesis-writing", label: "Full Thesis/Dissertation Writing", priceRange: "$3,000 - $15,000" },
  { value: "literature-review", label: "Literature Review", priceRange: "$500 - $2,000" },
  { value: "methodology", label: "Research Methodology", priceRange: "$600 - $1,800" },
  { value: "data-analysis", label: "Data Analysis", priceRange: "$400 - $2,500" },
  { value: "editing", label: "Editing & Proofreading", priceRange: "$200 - $1,000" },
  { value: "chapter-writing", label: "Individual Chapter Writing", priceRange: "$300 - $1,200" },
  { value: "statistics", label: "Statistical Consulting", priceRange: "$350 - $1,500" },
  { value: "presentation", label: "Defense Presentation", priceRange: "$250 - $800" },
];

const degreeTypes = [
  { value: "masters", label: "Master's Degree" },
  { value: "phd", label: "PhD / Doctoral" },
  { value: "dba", label: "Doctor of Business Administration (DBA)" },
  { value: "edd", label: "Doctor of Education (EdD)" },
  { value: "other", label: "Other Doctoral Degree" },
];

const subjectAreas = [
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

const deadlineOptions = [
  { value: "1-week", label: "1 Week (Rush)", surcharge: "+40%" },
  { value: "2-weeks", label: "2 Weeks (Expedited)", surcharge: "+25%" },
  { value: "1-month", label: "1 Month (Standard)", surcharge: "" },
  { value: "2-months", label: "2 Months", surcharge: "" },
  { value: "3-months", label: "3+ Months (Best Rate)", surcharge: "-10%" },
  { value: "flexible", label: "Flexible / No Rush", surcharge: "" },
];

const referralSources = [
  "Google Search",
  "Referral from Friend/Colleague",
  "Social Media",
  "Academic Forum",
  "University Recommendation",
  "Return Client",
  "Other",
];

interface OrderFormData {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  
  // Academic Info
  degreeType: string;
  university: string;
  department: string;
  subjectArea: string;
  
  // Project Details
  serviceType: string;
  projectTitle: string;
  projectDescription: string;
  wordCount: string;
  pageCount: string;
  deadline: string;
  specificDeadlineDate: string;
  
  // Additional Requirements
  researchMethodology: string;
  citationStyle: string;
  numberOfSources: string;
  specialInstructions: string;
  
  // Files (stored as file names for display)
  uploadedFiles: string[];
  
  // Preferences
  preferredCommunication: string;
  timezone: string;
  referralSource: string;
  
  // Terms
  agreedToTerms: boolean;
  agreedToPrivacy: boolean;
}

const initialFormData: OrderFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  degreeType: "",
  university: "",
  department: "",
  subjectArea: "",
  serviceType: "",
  projectTitle: "",
  projectDescription: "",
  wordCount: "",
  pageCount: "",
  deadline: "",
  specificDeadlineDate: "",
  researchMethodology: "",
  citationStyle: "",
  numberOfSources: "",
  specialInstructions: "",
  uploadedFiles: [],
  preferredCommunication: "",
  timezone: "",
  referralSource: "",
  agreedToTerms: false,
  agreedToPrivacy: false,
};

// Deposit amount (10% of estimated minimum for quote confirmation)
const DEPOSIT_AMOUNT = 50;

const Order = () => {
  const [searchParams] = useSearchParams();
  const previewSuccess = searchParams.get('preview') === 'success';
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OrderFormData>(previewSuccess ? {
    ...initialFormData,
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@university.edu",
    serviceType: "thesis-writing",
    projectTitle: "Impact of AI on Modern Education Systems",
  } : initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(previewSuccess);
  const [orderNumber, setOrderNumber] = useState(previewSuccess ? "DP-PREVIEW-TEST" : "");
  const [paymentApproved, setPaymentApproved] = useState(previewSuccess);

  const totalSteps = 5;

  const updateFormData = (field: keyof OrderFormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone);
      case 2:
        return !!(formData.degreeType && formData.university && formData.subjectArea);
      case 3:
        return !!(formData.serviceType && formData.projectTitle && formData.projectDescription && formData.deadline);
      case 4:
        return !!(formData.citationStyle);
      case 5:
        return formData.agreedToTerms && formData.agreedToPrivacy;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      toast.error("Please fill in all required fields before continuing.");
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `DP-${timestamp}-${random}`;
  };

  const handlePaymentSuccess = (details: Record<string, unknown>) => {
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setPaymentApproved(true);
    
    // Store order in localStorage for receipt retrieval
    const orderData = {
      orderNumber: newOrderNumber,
      ...formData,
      depositPaid: DEPOSIT_AMOUNT,
      paymentId: (details as { id?: string }).id || "PAYPAL_" + Date.now(),
      paymentDate: new Date().toISOString(),
      status: "Pending Review",
    };
    
    localStorage.setItem(`order_${newOrderNumber}`, JSON.stringify(orderData));
    
    setOrderComplete(true);
    toast.success("Payment successful! Your order has been submitted.");
  };

  const getSelectedServicePrice = () => {
    const service = serviceTypes.find(s => s.value === formData.serviceType);
    return service?.priceRange || "Price to be quoted";
  };

  if (orderComplete) {
    return (
      <Layout>
        <SEO 
          title="Order Confirmed"
          description="Your dissertation support order has been submitted successfully."
          canonical="/order"
        />
        <section className="py-20 lg:py-28">
          <div className="container max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-success/30 bg-success/5">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-foreground">Order Submitted Successfully!</CardTitle>
                  <CardDescription className="text-base">
                    Thank you for choosing DissertlyPro. Your order is now being reviewed.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Receipt Card */}
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <Receipt className="h-5 w-5 text-copper" />
                      <h3 className="font-semibold text-foreground">Order Receipt</h3>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Order Number</span>
                        <span className="font-mono font-bold text-copper">{orderNumber}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Service</span>
                        <span className="text-foreground">{serviceTypes.find(s => s.value === formData.serviceType)?.label}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Project</span>
                        <span className="text-foreground truncate max-w-[200px]">{formData.projectTitle}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Deposit Paid</span>
                        <span className="text-success font-semibold">${DEPOSIT_AMOUNT}.00 USD</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Estimated Range</span>
                        <span className="text-foreground">{getSelectedServicePrice()}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Status</span>
                        <span className="inline-flex items-center gap-1.5 text-amber-600 font-medium">
                          <Clock className="h-3.5 w-3.5" />
                          Pending Review
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Important Info */}
                  <div className="bg-cream-warm rounded-xl p-4 border border-copper/20">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-copper" />
                      What Happens Next?
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-copper font-bold">1.</span>
                        Our team will review your requirements within 24 hours
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-copper font-bold">2.</span>
                        You'll receive a detailed quote with timeline via email
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-copper font-bold">3.</span>
                        Your deposit secures your spot and will be applied to the final cost
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-copper font-bold">4.</span>
                        Use your order number <strong className="text-copper">{orderNumber}</strong> to check status
                      </li>
                    </ul>
                  </div>

                  {/* Save Receipt Notice */}
                  <div className="text-center text-sm text-muted-foreground">
                    <p>A confirmation email has been sent to <strong>{formData.email}</strong></p>
                    <p className="mt-1">Please save your order number for future reference.</p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="midnight-outline" className="flex-1" onClick={() => window.print()}>
                      Print Receipt
                    </Button>
                    <Button variant="copper" className="flex-1" asChild>
                      <a href="/">Return Home</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title="Place Your Order"
        description="Submit your dissertation support request. Comprehensive order form for thesis writing, data analysis, editing, and research methodology services."
        canonical="/order"
        keywords={['dissertation order', 'thesis writing order', 'academic support request', 'PhD help order']}
      />
      
      {/* Hero */}
      <section className="bg-hero-gradient py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Submit Your Project Request
            </h1>
            <p className="text-lg text-ivory/90 font-sans">
              Complete the form below to receive a personalized quote. A ${DEPOSIT_AMOUNT} deposit secures your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-cream-warm border-b border-border sticky top-16 sm:top-20 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {[
              { num: 1, label: "Personal Info", icon: User },
              { num: 2, label: "Academic Details", icon: GraduationCap },
              { num: 3, label: "Project", icon: FileText },
              { num: 4, label: "Requirements", icon: BookOpen },
              { num: 5, label: "Review & Pay", icon: Shield },
            ].map((step, idx) => (
              <div key={step.num} className="flex items-center">
                <div 
                  className={`flex items-center gap-2 cursor-pointer transition-all ${
                    currentStep >= step.num ? 'text-copper' : 'text-muted-foreground'
                  }`}
                  onClick={() => currentStep > step.num && setCurrentStep(step.num)}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    currentStep > step.num 
                      ? 'bg-copper text-white' 
                      : currentStep === step.num 
                        ? 'bg-copper/20 text-copper border-2 border-copper' 
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    {currentStep > step.num ? <CheckCircle className="h-4 w-4" /> : step.num}
                  </div>
                  <span className="hidden sm:block text-sm font-medium">{step.label}</span>
                </div>
                {idx < 4 && (
                  <div className={`w-8 sm:w-12 h-0.5 mx-2 ${
                    currentStep > step.num ? 'bg-copper' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-serif font-bold text-foreground mb-2">Personal Information</h2>
                          <p className="text-sm text-muted-foreground">Tell us about yourself so we can contact you.</p>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => updateFormData('firstName', e.target.value)}
                              placeholder="John"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => updateFormData('lastName', e.target.value)}
                              placeholder="Smith"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            placeholder="john.smith@university.edu"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => updateFormData('phone', e.target.value)}
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Input
                              id="country"
                              value={formData.country}
                              onChange={(e) => updateFormData('country', e.target.value)}
                              placeholder="United States"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="timezone">Your Timezone</Label>
                            <Select value={formData.timezone} onValueChange={(v) => updateFormData('timezone', v)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select timezone" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="est">Eastern Time (EST/EDT)</SelectItem>
                                <SelectItem value="cst">Central Time (CST/CDT)</SelectItem>
                                <SelectItem value="mst">Mountain Time (MST/MDT)</SelectItem>
                                <SelectItem value="pst">Pacific Time (PST/PDT)</SelectItem>
                                <SelectItem value="gmt">GMT/UTC</SelectItem>
                                <SelectItem value="cet">Central European (CET)</SelectItem>
                                <SelectItem value="ist">India Standard (IST)</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="communication">Preferred Contact Method</Label>
                            <Select value={formData.preferredCommunication} onValueChange={(v) => updateFormData('preferredCommunication', v)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select method" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="phone">Phone Call</SelectItem>
                                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                <SelectItem value="zoom">Zoom/Video Call</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Academic Information */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-serif font-bold text-foreground mb-2">Academic Information</h2>
                          <p className="text-sm text-muted-foreground">Help us understand your academic context.</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="degreeType">Degree Level *</Label>
                          <Select value={formData.degreeType} onValueChange={(v) => updateFormData('degreeType', v)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your degree" />
                            </SelectTrigger>
                            <SelectContent>
                              {degreeTypes.map((degree) => (
                                <SelectItem key={degree.value} value={degree.value}>
                                  {degree.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="university">University/Institution *</Label>
                          <Input
                            id="university"
                            value={formData.university}
                            onChange={(e) => updateFormData('university', e.target.value)}
                            placeholder="Harvard University"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="department">Department/School</Label>
                          <Input
                            id="department"
                            value={formData.department}
                            onChange={(e) => updateFormData('department', e.target.value)}
                            placeholder="School of Business"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subjectArea">Subject Area *</Label>
                          <Select value={formData.subjectArea} onValueChange={(v) => updateFormData('subjectArea', v)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select subject area" />
                            </SelectTrigger>
                            <SelectContent>
                              {subjectAreas.map((subject) => (
                                <SelectItem key={subject} value={subject}>
                                  {subject}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Project Details */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-serif font-bold text-foreground mb-2">Project Details</h2>
                          <p className="text-sm text-muted-foreground">Describe your project requirements.</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Required *</Label>
                          <Select value={formData.serviceType} onValueChange={(v) => updateFormData('serviceType', v)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceTypes.map((service) => (
                                <SelectItem key={service.value} value={service.value}>
                                  <div className="flex justify-between items-center w-full">
                                    <span>{service.label}</span>
                                    <span className="text-xs text-muted-foreground ml-4">{service.priceRange}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {formData.serviceType && (
                            <p className="text-xs text-copper">Estimated range: {getSelectedServicePrice()}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="projectTitle">Project/Thesis Title *</Label>
                          <Input
                            id="projectTitle"
                            value={formData.projectTitle}
                            onChange={(e) => updateFormData('projectTitle', e.target.value)}
                            placeholder="The Impact of Remote Work on Employee Productivity in..."
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="projectDescription">Project Description *</Label>
                          <Textarea
                            id="projectDescription"
                            value={formData.projectDescription}
                            onChange={(e) => updateFormData('projectDescription', e.target.value)}
                            placeholder="Describe your research topic, objectives, and what you need help with..."
                            rows={5}
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="wordCount">Approximate Word Count</Label>
                            <Input
                              id="wordCount"
                              type="number"
                              value={formData.wordCount}
                              onChange={(e) => updateFormData('wordCount', e.target.value)}
                              placeholder="15000"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pageCount">Or Page Count</Label>
                            <Input
                              id="pageCount"
                              type="number"
                              value={formData.pageCount}
                              onChange={(e) => updateFormData('pageCount', e.target.value)}
                              placeholder="60"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="deadline">Timeline *</Label>
                            <Select value={formData.deadline} onValueChange={(v) => updateFormData('deadline', v)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                {deadlineOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label} {option.surcharge && <span className="text-copper">{option.surcharge}</span>}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="specificDate">Specific Deadline Date</Label>
                            <Input
                              id="specificDate"
                              type="date"
                              value={formData.specificDeadlineDate}
                              onChange={(e) => updateFormData('specificDeadlineDate', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Additional Requirements */}
                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-serif font-bold text-foreground mb-2">Additional Requirements</h2>
                          <p className="text-sm text-muted-foreground">Provide specific academic requirements.</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="methodology">Research Methodology</Label>
                            <Select value={formData.researchMethodology} onValueChange={(v) => updateFormData('researchMethodology', v)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select methodology" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="qualitative">Qualitative</SelectItem>
                                <SelectItem value="quantitative">Quantitative</SelectItem>
                                <SelectItem value="mixed">Mixed Methods</SelectItem>
                                <SelectItem value="undecided">Not Yet Decided</SelectItem>
                                <SelectItem value="na">Not Applicable</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="citationStyle">Citation Style *</Label>
                            <Select value={formData.citationStyle} onValueChange={(v) => updateFormData('citationStyle', v)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select style" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="apa7">APA 7th Edition</SelectItem>
                                <SelectItem value="apa6">APA 6th Edition</SelectItem>
                                <SelectItem value="harvard">Harvard</SelectItem>
                                <SelectItem value="chicago">Chicago/Turabian</SelectItem>
                                <SelectItem value="mla">MLA</SelectItem>
                                <SelectItem value="ieee">IEEE</SelectItem>
                                <SelectItem value="vancouver">Vancouver</SelectItem>
                                <SelectItem value="other">Other (specify below)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="numberOfSources">Minimum Number of Sources</Label>
                          <Input
                            id="numberOfSources"
                            type="number"
                            value={formData.numberOfSources}
                            onChange={(e) => updateFormData('numberOfSources', e.target.value)}
                            placeholder="50"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specialInstructions">Special Instructions or Requirements</Label>
                          <Textarea
                            id="specialInstructions"
                            value={formData.specialInstructions}
                            onChange={(e) => updateFormData('specialInstructions', e.target.value)}
                            placeholder="University-specific guidelines, supervisor preferences, software requirements (SPSS, NVivo, etc.)..."
                            rows={4}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Upload Supporting Documents (Optional)</Label>
                          <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-copper/50 transition-colors cursor-pointer">
                            <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground">
                              Drag & drop files here or click to browse
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Proposal guidelines, sample chapters, rubrics (PDF, DOC, DOCX)
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="referral">How did you hear about us?</Label>
                          <Select value={formData.referralSource} onValueChange={(v) => updateFormData('referralSource', v)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select source" />
                            </SelectTrigger>
                            <SelectContent>
                              {referralSources.map((source) => (
                                <SelectItem key={source} value={source}>
                                  {source}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Review & Payment */}
                    {currentStep === 5 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-serif font-bold text-foreground mb-2">Review & Submit</h2>
                          <p className="text-sm text-muted-foreground">Review your order and submit with a refundable deposit.</p>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-cream-warm rounded-xl p-5 space-y-3">
                          <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <FileText className="h-4 w-4 text-copper" />
                            Order Summary
                          </h3>
                          <div className="grid gap-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Client</span>
                              <span className="text-foreground">{formData.firstName} {formData.lastName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Email</span>
                              <span className="text-foreground">{formData.email}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Service</span>
                              <span className="text-foreground">{serviceTypes.find(s => s.value === formData.serviceType)?.label}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Project</span>
                              <span className="text-foreground truncate max-w-[200px]">{formData.projectTitle}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Degree</span>
                              <span className="text-foreground">{degreeTypes.find(d => d.value === formData.degreeType)?.label}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Timeline</span>
                              <span className="text-foreground">{deadlineOptions.find(d => d.value === formData.deadline)?.label}</span>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Info */}
                        <div className="bg-midnight/5 rounded-xl p-5 border border-midnight/10">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-foreground font-medium">Estimated Price Range</span>
                            <span className="text-lg font-bold text-copper">{getSelectedServicePrice()}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-4">
                            Final pricing will be confirmed within 24 hours after our team reviews your requirements.
                          </p>
                          <div className="flex justify-between items-center pt-3 border-t border-border">
                            <span className="text-foreground font-semibold">Consultation Deposit</span>
                            <span className="text-xl font-bold text-foreground">${DEPOSIT_AMOUNT}.00 USD</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            This deposit is fully refundable if we cannot meet your requirements. It will be credited toward your final payment.
                          </p>
                        </div>

                        {/* Terms */}
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Checkbox 
                              id="terms" 
                              checked={formData.agreedToTerms}
                              onCheckedChange={(checked) => updateFormData('agreedToTerms', checked as boolean)}
                            />
                            <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                              I agree to the <a href="/terms" className="text-copper hover:underline">Terms of Service</a> and understand that DissertlyPro provides academic support and guidance, not plagiarism services.
                            </Label>
                          </div>
                          <div className="flex items-start gap-3">
                            <Checkbox 
                              id="privacy" 
                              checked={formData.agreedToPrivacy}
                              onCheckedChange={(checked) => updateFormData('agreedToPrivacy', checked as boolean)}
                            />
                            <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                              I agree to the <a href="/privacy" className="text-copper hover:underline">Privacy Policy</a> and consent to my data being processed for this order.
                            </Label>
                          </div>
                        </div>

                        {/* PayPal Button */}
                        {formData.agreedToTerms && formData.agreedToPrivacy && PAYPAL_CLIENT_ID && (
                          <div className="pt-4">
                            <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD" }}>
                              <PayPalButtons
                                style={{ layout: "vertical", shape: "rect", label: "pay" }}
                                createOrder={(data, actions) => {
                                  return actions.order.create({
                                    intent: "CAPTURE",
                                    purchase_units: [
                                      {
                                        amount: {
                                          currency_code: "USD",
                                          value: DEPOSIT_AMOUNT.toString(),
                                        },
                                        description: `DissertlyPro - ${serviceTypes.find(s => s.value === formData.serviceType)?.label} Consultation Deposit`,
                                      },
                                    ],
                                  });
                                }}
                                onApprove={async (data, actions) => {
                                  if (actions.order) {
                                    const details = await actions.order.capture();
                                    handlePaymentSuccess(details as Record<string, unknown>);
                                  }
                                }}
                                onError={(err) => {
                                  console.error("PayPal Error:", err);
                                  toast.error("Payment failed. Please try again.");
                                }}
                              />
                            </PayPalScriptProvider>
                          </div>
                        )}

                        {!PAYPAL_CLIENT_ID && (
                          <div className="bg-destructive/10 text-destructive rounded-lg p-4 text-sm">
                            <AlertCircle className="h-4 w-4 inline mr-2" />
                            PayPal is not configured. Please contact support.
                          </div>
                        )}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-8 border-t border-border mt-8">
                      <Button
                        variant="ghost"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className="gap-2"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </Button>
                      
                      {currentStep < totalSteps ? (
                        <Button variant="copper" onClick={nextStep} className="gap-2">
                          Continue
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-copper" />
                <span>256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-copper" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-copper" />
                <span>24-Hour Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
