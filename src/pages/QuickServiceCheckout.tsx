import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Shield,
  Receipt,
  MessageCircle,
  Mail,
  Clock,
  Zap,
  Package
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const PAYPAL_CLIENT_ID = "AbqfzvcYIxGrnSHuB9QlTM7bNDxfSVx52sZqAjuuGXqVhmP2bk1ngI37ZoJydg7D7L-5nSBLhh7lzt4M";

// Quick services catalog (same as QuickServices page)
const quickServicesData: Record<string, { name: string; price: number; turnaround: string }> = {
  "express-proofreading": { name: "Express Proofreading", price: 25, turnaround: "24 hours" },
  "citation-formatting": { name: "Citation Formatting", price: 30, turnaround: "48 hours" },
  "abstract-polishing": { name: "Abstract Polishing", price: 35, turnaround: "24 hours" },
  "clarity-call": { name: "15-Minute Clarity Call", price: 35, turnaround: "Book within 48 hours" },
  "email-review": { name: "Supervisor Email Review", price: 20, turnaround: "12 hours" },
  "methodology-check": { name: "Methodology Sanity Check", price: 50, turnaround: "48 hours" },
  "chapter-outline": { name: "Personalized Chapter Outline", price: 40, turnaround: "72 hours" },
  "bibliography-starter": { name: "Bibliography Starter Pack", price: 45, turnaround: "72 hours" },
  "ai-detection-report": { name: "AI Detection Report", price: 15, turnaround: "6 hours" },
  "paraphrase-audit": { name: "Paraphrase Audit", price: 25, turnaround: "24 hours" },
};

interface CheckoutFormData {
  fullName: string;
  email: string;
  instructions: string;
  agreedToTerms: boolean;
}

const initialFormData: CheckoutFormData = {
  fullName: "",
  email: "",
  instructions: "",
  agreedToTerms: false,
};

const QuickServiceCheckout = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  // Parse URL params
  const serviceIds = searchParams.get("services")?.split(",") || searchParams.get("bundle")?.split(",") || [];

  // Calculate order details
  const orderDetails = useMemo(() => {
    const services = serviceIds
      .map(id => ({ id, ...quickServicesData[id] }))
      .filter(s => s.name);
    
    const subtotal = services.reduce((sum, s) => sum + s.price, 0);
    const discountPercent = services.length >= 3 ? 0.15 : services.length >= 2 ? 0.10 : 0;
    const discount = subtotal * discountPercent;
    const total = subtotal - discount;
    
    return { services, subtotal, discount, discountPercent, total };
  }, [serviceIds]);

  const totalSteps = 2;

  const updateFormData = (field: keyof CheckoutFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.fullName.trim() && formData.email.trim() && formData.instructions.trim());
      case 2:
        return formData.agreedToTerms;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      toast.error("Please complete all required fields");
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const generateOrderNumber = () => {
    const prefix = "QS";
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  };

  const handlePaymentSuccess = () => {
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setOrderComplete(true);
    toast.success("Payment successful! Your order has been placed.");
  };

  // Redirect if no services selected
  if (orderDetails.services.length === 0 && !orderComplete) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-4">No Services Selected</h1>
          <p className="text-muted-foreground mb-8">
            Please select services from our Quick Services page to proceed with checkout.
          </p>
          <Button asChild className="bg-copper hover:bg-copper-light text-white">
            <Link to="/quick-services">Browse Quick Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Order Complete Screen
  if (orderComplete) {
    return (
      <Layout>
        <SEO
          title="Order Confirmed | DissertlyPro"
          description="Your quick service order has been confirmed."
          canonical="/quick-checkout"
        />
        <div className="container mx-auto px-4 py-16 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-8">Thank you for your order, {formData.fullName.split(" ")[0]}!</p>

            <Card className="mb-8 text-left">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-copper" />
                  <CardTitle className="text-lg">Order Details</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order Number</span>
                  <span className="font-mono font-semibold">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span>{formData.email}</span>
                </div>
                <div className="border-t pt-3">
                  <p className="text-sm text-muted-foreground mb-2">Services Ordered:</p>
                  <div className="space-y-1">
                    {orderDetails.services.map(service => (
                      <div key={service.id} className="flex justify-between text-sm">
                        <span>{service.name}</span>
                        <span>${service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {orderDetails.discount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Bundle Discount ({Math.round(orderDetails.discountPercent * 100)}%)</span>
                    <span>-${orderDetails.discount.toFixed(0)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold border-t pt-3">
                  <span>Total Paid</span>
                  <span className="text-copper">${orderDetails.total.toFixed(0)}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-copper/5 border-copper/20">
              <CardContent className="py-6">
                <h3 className="font-semibold mb-3">📁 Need to Send Documents?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload your documents by chatting with our support team or emailing them directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="outline" 
                    className="border-copper text-copper hover:bg-copper/10"
                    onClick={() => {
                      if (window.Tawk_API) {
                        window.Tawk_API.maximize();
                      }
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with Support
                  </Button>
                  <Button asChild variant="outline" className="border-copper text-copper hover:bg-copper/10">
                    <a href={`mailto:support@dissertlypro.com?subject=Documents for Order ${orderNumber}&body=Order Number: ${orderNumber}%0D%0A%0D%0APlease attach your documents to this email.`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email Documents
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/quick-services">Order More Services</Link>
              </Button>
              <Button asChild className="bg-copper hover:bg-copper-light text-white">
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title="Quick Checkout | DissertlyPro"
        description="Complete your quick service order with our streamlined checkout."
        canonical="/quick-checkout"
      />

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="py-12 bg-gradient-to-b from-midnight to-midnight-light"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Zap className="w-5 h-5 text-copper" />
            <Badge className="bg-copper/20 text-copper border-copper/30">Express Checkout</Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-2"
          >
            Quick Service Checkout
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-white/70 text-center"
          >
            Complete your order in just 2 simple steps
          </motion.p>
        </div>
      </motion.section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center mb-12"
          >
            {[1, 2].map((step, index) => (
              <motion.div 
                key={`progress-step-${step}`} 
                className="flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                  currentStep >= step 
                    ? 'bg-copper text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                </div>
                {step < 2 && (
                  <div className={`w-24 h-1 mx-2 rounded transition-colors duration-300 ${
                    currentStep > step ? 'bg-copper' : 'bg-muted'
                  }`} />
                )}
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Package className="w-5 h-5 text-copper" />
                          Order Details
                        </CardTitle>
                        <CardDescription>
                          Provide your contact info and instructions for your order
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                              id="fullName"
                              placeholder="John Smith"
                              value={formData.fullName}
                              onChange={(e) => updateFormData("fullName", e.target.value)}
                              maxLength={100}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@university.edu"
                              value={formData.email}
                              onChange={(e) => updateFormData("email", e.target.value)}
                              maxLength={255}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="instructions">Order Instructions *</Label>
                          <Textarea
                            id="instructions"
                            placeholder="Please provide specific instructions for your order. Include any preferences for citation style, methodology, research topic, or special requirements..."
                            value={formData.instructions}
                            onChange={(e) => updateFormData("instructions", e.target.value)}
                            className="min-h-[150px]"
                            maxLength={5000}
                          />
                          <p className="text-xs text-muted-foreground">
                            {formData.instructions.length}/5000 characters
                          </p>
                        </div>

                        <Card className="bg-muted/50 border-dashed">
                          <CardContent className="py-4">
                            <div className="flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 text-copper mt-0.5" />
                              <div>
                                <p className="font-medium text-sm">Need to upload documents?</p>
                                <p className="text-sm text-muted-foreground">
                                  After payment, you can send your documents via live chat or email. 
                                  Our team will confirm receipt within 2 hours.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <div className="flex justify-end">
                          <Button 
                            onClick={nextStep}
                            className="bg-copper hover:bg-copper-light text-white"
                          >
                            Continue to Payment
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-copper" />
                          Secure Payment
                        </CardTitle>
                        <CardDescription>
                          Complete your purchase with PayPal's secure checkout
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                          <Checkbox
                            id="terms"
                            checked={formData.agreedToTerms}
                            onCheckedChange={(checked) => updateFormData("agreedToTerms", !!checked)}
                          />
                          <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                            I agree to the{" "}
                            <Link to="/terms" className="text-copper hover:underline" target="_blank">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link to="/privacy" className="text-copper hover:underline" target="_blank">
                              Privacy Policy
                            </Link>
                          </Label>
                        </div>

                        {formData.agreedToTerms ? (
                          <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD" }}>
                            <PayPalButtons
                              style={{ layout: "vertical", shape: "rect" }}
                              createOrder={(data, actions) => {
                                return actions.order.create({
                                  intent: "CAPTURE",
                                  purchase_units: [
                                    {
                                      amount: {
                                        currency_code: "USD",
                                        value: orderDetails.total.toFixed(2),
                                      },
                                      description: `Quick Services: ${orderDetails.services.map(s => s.name).join(", ")}`,
                                    },
                                  ],
                                });
                              }}
                              onApprove={async (data, actions) => {
                                if (actions.order) {
                                  await actions.order.capture();
                                  handlePaymentSuccess();
                                }
                              }}
                              onError={(err) => {
                                console.error("PayPal Error:", err);
                                toast.error("Payment failed. Please try again.");
                              }}
                            />
                          </PayPalScriptProvider>
                        ) : (
                          <div className="p-8 bg-muted/30 rounded-lg text-center">
                            <Shield className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                            <p className="text-muted-foreground">
                              Please agree to the terms above to proceed with payment
                            </p>
                          </div>
                        )}

                        <div className="flex justify-start">
                          <Button variant="outline" onClick={prevStep}>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Order Summary Sidebar */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Card className="sticky top-24">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {orderDetails.services.map(service => (
                      <div key={service.id} className="flex justify-between text-sm">
                        <div>
                          <p className="font-medium">{service.name}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {service.turnaround}
                          </p>
                        </div>
                        <span>${service.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${orderDetails.subtotal}</span>
                    </div>
                    {orderDetails.discount > 0 && (
                      <div className="flex justify-between text-sm text-emerald-600">
                        <span className="flex items-center gap-1">
                          <Badge variant="outline" className="text-xs border-emerald-500 text-emerald-600">
                            {Math.round(orderDetails.discountPercent * 100)}% OFF
                          </Badge>
                          Bundle Discount
                        </span>
                        <span>-${orderDetails.discount.toFixed(0)}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-copper">${orderDetails.total.toFixed(0)}</span>
                    </div>
                  </div>

                  <div className="pt-3 space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-copper" />
                      <span>100% Satisfaction Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-copper" />
                      <span>Fast Turnaround Times</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuickServiceCheckout;
