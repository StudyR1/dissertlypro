import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Loader2, Send, AlertCircle } from "lucide-react";
import { logFullOrder, FullOrderData } from "@/lib/googleSheets";

const TestOrder = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [orderNumber, setOrderNumber] = useState("");

  // Generate realistic order number
  const generateOrderNumber = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `DE-${timestamp}-${random}`;
  };

  // Realistic test order data - mimics a real client submission
  const createTestOrder = (): FullOrderData => {
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    
    return {
      orderNumber: newOrderNumber,
      firstName: "Sarah",
      lastName: "Mitchell",
      email: "sarah.mitchell.phd@gmail.com",
      phone: "+1 (416) 555-0192",
      university: "University of Toronto",
      degreeType: "PhD",
      subjectArea: "Psychology",
      serviceType: "Full Dissertation Support",
      projectTitle: "The Impact of Social Media Usage on Adolescent Mental Health: A Mixed-Methods Investigation",
      projectDescription: `I am a third-year PhD candidate in Clinical Psychology at the University of Toronto. My research focuses on understanding how social media consumption patterns affect mental health outcomes in adolescents aged 13-18.

I have completed my coursework and passed my comprehensive exams. I need support with:

1. **Literature Review** - I have identified approximately 150 sources but need help synthesizing them into a coherent narrative that establishes the theoretical framework.

2. **Methodology Chapter** - I am using a sequential explanatory mixed-methods design. I need assistance with:
   - Justifying my methodological choices
   - Describing the quantitative survey (n=400) and qualitative interview (n=25) components
   - Addressing validity and reliability concerns

3. **Data Analysis Plan** - I will be using SPSS for quantitative analysis (regression, ANOVA) and NVivo for thematic analysis. I need guidance on presenting my analysis strategy.

4. **Results and Discussion** - I have collected my data and need support interpreting findings and connecting them back to the literature.

My supervisor is generally supportive but has limited availability due to sabbatical preparations. I have ethical approval from the university REB (Protocol #2024-0892).

I am aiming to defend by December 2025 and would like to submit my first complete draft to my committee by September 2025.`,
      deadline: "3-4 months",
      citationStyle: "APA 7th Edition",
      specialInstructions: `Please note:
- I prefer track changes for all edits
- I would like weekly progress updates via email
- I am in the Eastern Time Zone (Toronto)
- My committee has specifically asked for a strong theoretical grounding in Social Comparison Theory and Uses & Gratifications Theory
- Word count target: 80,000-100,000 words
- I have a strict university formatting template that must be followed`,
      depositAmount: 50,
      paymentId: `TEST-PAYPAL-${Date.now()}`,
    };
  };

  const handleSendTestOrder = async () => {
    setStatus("sending");
    
    try {
      const testOrder = createTestOrder();
      
      console.log("Sending test order:", testOrder);
      
      const success = await logFullOrder(testOrder);
      
      if (success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Test order failed:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="text-center border-b border-white/10">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-3">
              🧪 Full Order Webhook Test
            </CardTitle>
            <p className="text-slate-400 mt-2">
              Sends a realistic test order to your Google Sheets webhook
            </p>
          </CardHeader>
          
          <CardContent className="p-8">
            {/* Webhook URL Confirmation */}
            <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
              <p className="text-emerald-400 text-sm font-medium mb-1">✅ Active Webhook URL:</p>
              <code className="text-xs text-emerald-300 break-all">
                https://script.google.com/macros/s/AKfycbwvgWB5j6Kt0XkiUlz5MSIDBpWQ77FZLHb2-qXpDHNdHbsAgmPcSq83tkcKXByBQuS7/exec
              </code>
            </div>

            {/* Test Order Preview */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">📋 Test Order Preview</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-slate-500 text-xs uppercase tracking-wide">Customer</p>
                    <p className="text-white font-medium">Sarah Mitchell</p>
                    <p className="text-slate-400 text-sm">sarah.mitchell.phd@gmail.com</p>
                    <p className="text-slate-400 text-sm">+1 (416) 555-0192</p>
                  </div>
                  
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-slate-500 text-xs uppercase tracking-wide">University</p>
                    <p className="text-white font-medium">University of Toronto</p>
                  </div>
                  
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-slate-500 text-xs uppercase tracking-wide">Degree</p>
                    <p className="text-white font-medium">PhD in Psychology</p>
                  </div>
                  
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-slate-500 text-xs uppercase tracking-wide">Service</p>
                    <p className="text-white font-medium">Full Dissertation Support</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-slate-500 text-xs uppercase tracking-wide">Project Title</p>
                    <p className="text-white font-medium text-sm leading-relaxed">
                      The Impact of Social Media Usage on Adolescent Mental Health: A Mixed-Methods Investigation
                    </p>
                  </div>
                  
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-slate-500 text-xs uppercase tracking-wide">Deadline</p>
                    <p className="text-amber-400 font-medium">3-4 months</p>
                  </div>
                  
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-slate-500 text-xs uppercase tracking-wide">Citation Style</p>
                    <p className="text-white font-medium">APA 7th Edition</p>
                  </div>
                  
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-slate-500 text-xs uppercase tracking-wide">Deposit</p>
                    <p className="text-emerald-400 font-bold text-xl">$50.00</p>
                  </div>
                </div>
              </div>
              
              {/* Project Description Preview */}
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 text-xs uppercase tracking-wide mb-2">Project Description (truncated)</p>
                <p className="text-blue-200 text-sm leading-relaxed">
                  I am a third-year PhD candidate in Clinical Psychology at the University of Toronto. 
                  My research focuses on understanding how social media consumption patterns affect mental 
                  health outcomes in adolescents aged 13-18. I have completed my coursework and passed my 
                  comprehensive exams...
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex flex-col items-center gap-4">
              {status === "idle" && (
                <Button 
                  onClick={handleSendTestOrder}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Test Order to Google Sheets
                </Button>
              )}
              
              {status === "sending" && (
                <div className="flex items-center gap-3 text-blue-400">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span className="text-lg">Sending order to webhook...</span>
                </div>
              )}
              
              {status === "success" && (
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-3 text-emerald-400">
                    <CheckCircle className="h-8 w-8" />
                    <span className="text-xl font-semibold">Test Order Sent Successfully!</span>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <p className="text-emerald-300 text-sm">Order Number:</p>
                    <p className="text-emerald-400 font-mono text-xl font-bold">{orderNumber}</p>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Check your Google Sheet and email inbox for the order notification.
                  </p>
                  <Button 
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Send Another Test
                  </Button>
                </div>
              )}
              
              {status === "error" && (
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-3 text-red-400">
                    <AlertCircle className="h-8 w-8" />
                    <span className="text-xl font-semibold">Failed to Send</span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Note: Due to no-cors mode, this may still have worked. Check your Google Sheet.
                  </p>
                  <Button 
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Try Again
                  </Button>
                </div>
              )}
            </div>

            {/* Payload Info */}
            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-white/10">
              <p className="text-slate-400 text-xs mb-2">Fields being sent:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "orderNumber", "firstName", "lastName", "email", "phone",
                  "university", "degreeType", "subjectArea", "serviceType",
                  "projectTitle", "projectDescription", "deadline", 
                  "citationStyle", "specialInstructions", "depositAmount", "paymentId"
                ].map((field) => (
                  <span key={field} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <p className="text-center text-slate-500 text-sm mt-6">
          ⚠️ This page is for testing only. Remove before production.
        </p>
      </div>
    </div>
  );
};

export default TestOrder;
