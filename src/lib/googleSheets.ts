/**
 * Google Sheets Order Logging Integration with Email Notifications
 * 
 * This utility sends order data to a Google Sheets spreadsheet via Google Apps Script
 * AND sends email notifications to your inbox.
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Create a new Google Sheet with these columns in Row 1:
 *    | Order Number | Order Type | Customer Name | Customer Email | Services | Instructions | 
 *    | Total Amount | Payment ID | Order Date | Status |
 * 
 * 2. Go to Extensions > Apps Script
 * 
 * 3. Replace the code with:
 * 
 *    // Your notification email
 *    var NOTIFICATION_EMAIL = "tutorsgallery@gmail.com";
 *    
 *    function doPost(e) {
 *      try {
 *        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *        var data = JSON.parse(e.postData.contents);
 *        
 *        // Log to spreadsheet
 *        sheet.appendRow([
 *          data.orderNumber,
 *          data.orderType,
 *          data.customerName,
 *          data.customerEmail,
 *          data.services,
 *          data.instructions,
 *          data.totalAmount,
 *          data.paymentId,
 *          data.orderDate,
 *          data.status
 *        ]);
 *        
 *        // Send email notification
 *        sendOrderNotification(data);
 *        
 *        return ContentService.createTextOutput(JSON.stringify({ success: true }))
 *          .setMimeType(ContentService.MimeType.JSON);
 *      } catch (error) {
 *        return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
 *          .setMimeType(ContentService.MimeType.JSON);
 *      }
 *    }
 *    
 *    function sendOrderNotification(data) {
 *      var subject = "🆕 New " + data.orderType + " Order: " + data.orderNumber;
 *      
 *      var body = "NEW ORDER RECEIVED\\n";
 *      body += "========================\\n\\n";
 *      body += "Order Number: " + data.orderNumber + "\\n";
 *      body += "Order Type: " + data.orderType + "\\n";
 *      body += "Date: " + data.orderDate + "\\n\\n";
 *      body += "CUSTOMER DETAILS\\n";
 *      body += "----------------\\n";
 *      body += "Name: " + data.customerName + "\\n";
 *      body += "Email: " + data.customerEmail + "\\n\\n";
 *      body += "ORDER DETAILS\\n";
 *      body += "-------------\\n";
 *      body += "Services: " + data.services + "\\n";
 *      body += "Amount: " + data.totalAmount + "\\n";
 *      body += "Payment ID: " + data.paymentId + "\\n\\n";
 *      body += "INSTRUCTIONS\\n";
 *      body += "------------\\n";
 *      body += data.instructions + "\\n\\n";
 *      body += "========================\\n";
 *      body += "View all orders in Google Sheets";
 *      
 *      MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
 *    }
 * 
 * 4. Click Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 
 * 5. Copy the Web App URL and paste it below in GOOGLE_SHEETS_WEBHOOK_URL
 * 
 * NOTE: When you first deploy, Google will ask you to authorize the script
 *       to send emails on your behalf. Click "Allow" to enable email notifications.
 */

// Quick Service orders webhook
const QUICK_SERVICE_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxWOhdXgM3FU9IzxKmc51jKshaB-PrgQTlLSRdql7sOylP0Cgj33APfX1ULogOqFnXGaw/exec";

// Full orders webhook (separate sheet)
const FULL_ORDER_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwvgWB5j6Kt0XkiUlz5MSIDBpWQ77FZLHb2-qXpDHNdHbsAgmPcSq83tkcKXByBQuS7/exec";

export interface QuickServiceOrderData {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  services: string[];
  instructions: string;
  totalAmount: number;
  paymentId: string;
}

export interface FullOrderData {
  orderNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  degreeType: string;
  university: string;
  subjectArea: string;
  serviceType: string;
  projectTitle: string;
  projectDescription: string;
  deadline: string;
  citationStyle: string;
  specialInstructions: string;
  depositAmount: number;
  paymentId: string;
}

/**
 * Log a quick service order to Google Sheets
 */
export const logQuickServiceOrder = async (order: QuickServiceOrderData): Promise<boolean> => {
  if (!QUICK_SERVICE_WEBHOOK_URL) {
    console.warn("Google Sheets webhook URL not configured. Order not logged to spreadsheet.");
    return false;
  }

  try {
    const payload = {
      orderNumber: order.orderNumber,
      orderType: "Quick Service",
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      services: order.services.join(", "),
      instructions: order.instructions,
      totalAmount: `$${order.totalAmount.toFixed(2)}`,
      paymentId: order.paymentId,
      orderDate: new Date().toISOString(),
      status: "Pending",
    };

    await fetch(QUICK_SERVICE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors", // Required for Google Apps Script
      body: JSON.stringify(payload),
    });

    console.log("Order logged to Google Sheets:", order.orderNumber);
    return true;
  } catch (error) {
    console.error("Failed to log order to Google Sheets:", error);
    return false;
  }
};

/**
 * Log a full dissertation order to Google Sheets
 */
export const logFullOrder = async (order: FullOrderData): Promise<boolean> => {
  if (!FULL_ORDER_WEBHOOK_URL) {
    console.warn("Google Sheets webhook URL not configured. Order not logged to spreadsheet.");
    return false;
  }

  try {
    const payload = {
      orderNumber: order.orderNumber,
      orderType: "Full Order",
      customerName: `${order.firstName} ${order.lastName}`,
      customerEmail: order.email,
      phone: order.phone,
      university: order.university,
      degreeType: order.degreeType,
      subjectArea: order.subjectArea,
      services: order.serviceType,
      projectTitle: order.projectTitle,
      instructions: order.projectDescription.substring(0, 500),
      deadline: order.deadline,
      citationStyle: order.citationStyle,
      specialInstructions: order.specialInstructions,
      totalAmount: `$${order.depositAmount.toFixed(2)} deposit`,
      paymentId: order.paymentId,
      orderDate: new Date().toISOString(),
      status: "Pending Review",
    };

    await fetch(FULL_ORDER_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify(payload),
    });

    console.log("Order logged to Google Sheets:", order.orderNumber);
    return true;
  } catch (error) {
    console.error("Failed to log order to Google Sheets:", error);
    return false;
  }
};

/**
 * Check if Google Sheets integration is configured
 */
export const isGoogleSheetsConfigured = (): boolean => {
  return !!QUICK_SERVICE_WEBHOOK_URL || !!FULL_ORDER_WEBHOOK_URL;
};
