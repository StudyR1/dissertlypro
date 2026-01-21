import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, Loader2, Send } from "lucide-react";

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxWOhdXgM3FU9IzxKmc51jKshaB-PrgQTlLSRdql7sOylP0Cgj33APfX1ULogOqFnXGaw/exec";

const TestWebhook = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendTestOrder = async () => {
    setLoading(true);
    
    const testPayload = {
      orderNumber: `TEST-${Date.now()}`,
      orderType: "Quick Service",
      customerName: "Test Customer",
      customerEmail: "test@example.com",
      services: "Express Proofreading, Citation Formatting",
      instructions: "This is a TEST order to verify the webhook and email notifications are working correctly.",
      totalAmount: "$55.00",
      paymentId: "TEST-PAYMENT-ID",
      orderDate: new Date().toISOString(),
      status: "Test Order",
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(testPayload),
      });

      setSent(true);
      toast({
        title: "Test order sent!",
        description: "Check your Google Sheet and email inbox (tutorsgallery@gmail.com)",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send test order",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Webhook Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-center text-sm">
            Click below to send a test order to your Google Sheet and trigger an email notification.
          </p>
          
          <Button 
            onClick={sendTestOrder} 
            disabled={loading}
            className="w-full"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : sent ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Sent! Send Another
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Test Order
              </>
            )}
          </Button>

          {sent && (
            <div className="bg-accent/50 border border-border rounded-lg p-4 text-sm">
              <p className="font-medium text-foreground">✓ Test sent successfully!</p>
              <p className="text-muted-foreground mt-1">
                Check your Google Sheet and email inbox at tutorsgallery@gmail.com
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TestWebhook;
