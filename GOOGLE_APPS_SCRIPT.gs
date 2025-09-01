/**
 * Google Apps Script for Watt Utilities Form Submissions
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet named "Watt Utilities Form Submissions"
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Click "Deploy" > "New Deployment"
 * 5. Choose type: "Web app"
 * 6. Execute as: "Me"
 * 7. Who has access: "Anyone"
 * 8. Click "Deploy"
 * 9. Copy the Web App URL
 * 10. Update the GOOGLE_SHEETS_URL in googleSheetsIntegration.js with this URL
 */

// The name of your Google Sheet (must match exactly)
const SHEET_NAME = 'Form Submissions';

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      spreadsheet.insertSheet(SHEET_NAME);
      sheet = spreadsheet.getSheetByName(SHEET_NAME);
      
      // Add headers if this is a new sheet
      const headers = [
        'Timestamp',
        'Form Type',
        'Business Name',
        'Contact Name',
        'Email',
        'Phone',
        'Postcode',
        'Address',
        'Business Type',
        'Business Size',
        'Trading Years',
        'Position',
        'Current Supplier',
        'Current Gas Supplier',
        'Current Electric Supplier',
        'Contract End Date',
        'Gas Contract End Date',
        'Electric Contract End Date',
        'Annual Spend',
        'Annual Usage',
        'Monthly Spend',
        'Meter Type',
        'Utility Type',
        'Green Energy',
        'Multi Site',
        'Number of Sites',
        'Current Provider',
        'Service Type',
        'Preferred Contact Time',
        'How Did You Hear',
        'Additional Notes',
        'Page URL',
        'User Agent'
      ];
      
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format the header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#10b981');
      headerRange.setFontColor('#ffffff');
      
      // Freeze the header row
      sheet.setFrozenRows(1);
    }
    
    // Parse the POST data
    const data = JSON.parse(e.postData.contents);
    
    // Create row data in the exact order of headers
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.formType || '',
      data.businessName || '',
      data.contactName || '',
      data.email || '',
      data.phone || '',
      data.postcode || '',
      data.address || '',
      data.businessType || '',
      data.businessSize || '',
      data.tradingYears || '',
      data.position || '',
      data.currentSupplier || '',
      data.currentGasSupplier || '',
      data.currentElectricSupplier || '',
      data.contractEndDate || '',
      data.gasContractEndDate || '',
      data.electricContractEndDate || '',
      data.annualSpend || '',
      data.annualUsage || '',
      data.monthlySpend || '',
      data.meterType || '',
      data.utilityType || '',
      data.greenEnergy || '',
      data.multiSite || '',
      data.numberOfSites || '',
      data.currentProvider || '',
      data.serviceType || '',
      data.preferredContactTime || '',
      data.howDidYouHear || '',
      data.additionalNotes || '',
      data.pageUrl || '',
      data.userAgent || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Send email notification (optional)
    sendEmailNotification(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Data added successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error in doPost:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  try {
    // Configure email settings
    const EMAIL_TO = 'hello@wattutilities.co.uk'; // Change this to your email
    const EMAIL_SUBJECT = `New ${data.formType || 'Form'} Submission - ${data.businessName || 'Unknown'}`;
    
    // Create email body
    let emailBody = `
New form submission received:

Form Type: ${data.formType || 'N/A'}
Timestamp: ${data.timestamp || new Date().toISOString()}

CONTACT DETAILS:
- Business Name: ${data.businessName || 'N/A'}
- Contact Name: ${data.contactName || 'N/A'}
- Email: ${data.email || 'N/A'}
- Phone: ${data.phone || 'N/A'}
- Postcode: ${data.postcode || 'N/A'}

SERVICE DETAILS:
- Utility Type: ${data.utilityType || 'N/A'}
- Current Supplier: ${data.currentSupplier || 'N/A'}
- Contract End Date: ${data.contractEndDate || 'N/A'}
- Monthly Spend: ${data.monthlySpend || 'N/A'}
- Annual Spend: ${data.annualSpend || 'N/A'}

ADDITIONAL NOTES:
${data.additionalNotes || 'None'}

Page URL: ${data.pageUrl || 'N/A'}

---
This is an automated email from the Watt Utilities website.
    `;
    
    // Send the email
    MailApp.sendEmail({
      to: EMAIL_TO,
      subject: EMAIL_SUBJECT,
      body: emailBody
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw - we don't want email failures to break form submission
  }
}

// Test function to verify the script is working
function testSetup() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        formType: 'TEST',
        businessName: 'Test Company',
        contactName: 'Test User',
        email: 'test@example.com',
        phone: '0123456789',
        additionalNotes: 'This is a test submission'
      })
    }
  };
  
  const result = doPost(testData);
  console.log(result.getContent());
}