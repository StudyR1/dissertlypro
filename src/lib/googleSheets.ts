/**
 * Google Sheets Order Logging Integration
 * 
 * This utility sends order data to a Google Sheets spreadsheet via Google Apps Script.
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
 *    function doPost(e) {
 *      try {
 *        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *        var data = JSON.parse(e.postData.contents);
 *        
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
 *        return ContentService.createTextOutput(JSON.stringify({ success: true }))
 *          .setMimeType(ContentService.MimeType.JSON);
 *      } catch (error) {
 *        return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
 *          .setMimeType(ContentService.MimeType.JSON);
 *      }
 *    }
 * 
 * 4. Click Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 
 * 5. Copy the Web App URL and paste it below in GOOGLE_SHEETS_WEBHOOK_URL
 */

// Replace with your Google Apps Script Web App URL after setup
const GOOGLE_SHEETS_WEBHOOK_URL = "";

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
  if (!GOOGLE_SHEETS_WEBHOOK_URL) {
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

    await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
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
  if (!GOOGLE_SHEETS_WEBHOOK_URL) {
    console.warn("Google Sheets webhook URL not configured. Order not logged to spreadsheet.");
    return false;
  }

  try {
    const payload = {
      orderNumber: order.orderNumber,
      orderType: "Full Order",
      customerName: `${order.firstName} ${order.lastName}`,
      customerEmail: order.email,
      services: order.serviceType,
      instructions: `${order.projectTitle}: ${order.projectDescription.substring(0, 200)}...`,
      totalAmount: `$${order.depositAmount.toFixed(2)} deposit`,
      paymentId: order.paymentId,
      orderDate: new Date().toISOString(),
      status: "Pending Review",
    };

    await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
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
  return !!GOOGLE_SHEETS_WEBHOOK_URL;
};
