/**
 * UPDATED Google Apps Script for Watt Utilities Form Submissions
 * This version properly handles CORS and POST requests
 * 
 * IMPORTANT: Replace your existing Apps Script code with this updated version
 */

// The name of your Google Sheet tab (must match exactly)
const SHEET_NAME = 'Form Submissions';

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Google Apps Script is working! Use POST to submit data.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Handle POST requests (for form submissions)
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Parse the POST data
    let data;
    try {
      // Try to parse as JSON first
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      // If JSON parsing fails, try to parse as form data
      data = e.parameter;
    }
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      createSheetWithHeaders();
      sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    }
    
    // Check if sheet has headers, if not add them
    const lastColumn = sheet.getLastColumn();
    if (lastColumn === 0) {
      addHeaders(sheet);
    }
    
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
    
    // Log for debugging
    console.log('Data received:', data);
    console.log('Row added:', rowData);
    
    // Send email notification (optional)
    if (data.email) {
      sendEmailNotification(data);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Data added successfully',
        'data': data
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error for debugging
    console.error('Error in doPost:', error);
    console.error('Error stack:', error.stack);
    console.error('Request data:', e.postData?.contents);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'error': error.toString(),
        'stack': error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function createSheetWithHeaders() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.insertSheet(SHEET_NAME);
  addHeaders(sheet);
}

function addHeaders(sheet) {
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
  
  // Auto-resize columns
  for (let i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }
}

function sendEmailNotification(data) {
  try {
    // Configure email settings - CHANGE THIS EMAIL ADDRESS
    const EMAIL_TO = 'hello@wattutilities.co.uk'; 
    const EMAIL_SUBJECT = `New ${data.formType || 'Form'} Submission - ${data.businessName || data.contactName || 'Unknown'}`;
    
    // Create HTML email body for better formatting
    let emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <h2 style="color: #10b981;">New Form Submission Received</h2>
      
      <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Form Type:</strong> ${data.formType || 'N/A'}</p>
        <p><strong>Timestamp:</strong> ${data.timestamp || new Date().toISOString()}</p>
      </div>
      
      <h3 style="color: #1f2937;">Contact Details</h3>
      <ul style="list-style: none; padding: 0;">
        <li>📢 <strong>Business Name:</strong> ${data.businessName || 'N/A'}</li>
        <li>👤 <strong>Contact Name:</strong> ${data.contactName || 'N/A'}</li>
        <li>📧 <strong>Email:</strong> <a href="mailto:${data.email}">${data.email || 'N/A'}</a></li>
        <li>📞 <strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone || 'N/A'}</a></li>
        <li>📍 <strong>Postcode:</strong> ${data.postcode || 'N/A'}</li>
      </ul>
      
      <h3 style="color: #1f2937;">Service Details</h3>
      <ul style="list-style: none; padding: 0;">
        <li>⚡ <strong>Utility Type:</strong> ${data.utilityType || data.serviceType || 'N/A'}</li>
        <li>🏢 <strong>Current Supplier:</strong> ${data.currentSupplier || data.currentProvider || 'N/A'}</li>
        <li>📅 <strong>Contract End Date:</strong> ${data.contractEndDate || 'N/A'}</li>
        <li>💷 <strong>Monthly Spend:</strong> ${data.monthlySpend || 'N/A'}</li>
        <li>💰 <strong>Annual Spend:</strong> ${data.annualSpend || 'N/A'}</li>
      </ul>
      
      ${data.additionalNotes ? `
      <h3 style="color: #1f2937;">Additional Notes</h3>
      <p style="background: #f9fafb; padding: 10px; border-left: 3px solid #10b981;">
        ${data.additionalNotes}
      </p>
      ` : ''}
      
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
      
      <p style="color: #6b7280; font-size: 12px;">
        This is an automated notification from the Watt Utilities website.<br>
        <a href="${data.pageUrl || 'https://wattutilities001.netlify.app'}">View submission page</a>
      </p>
    </div>
    `;
    
    // Send the email with HTML body
    MailApp.sendEmail({
      to: EMAIL_TO,
      subject: EMAIL_SUBJECT,
      htmlBody: emailBody,
      body: emailBody.replace(/<[^>]*>/g, '') // Plain text fallback
    });
    
    console.log('Email sent to:', EMAIL_TO);
    
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
        formType: 'TEST SUBMISSION',
        businessName: 'Test Company Ltd',
        contactName: 'John Doe',
        email: 'test@example.com',
        phone: '01234567890',
        postcode: 'M1 1AA',
        additionalNotes: 'This is a test submission - if you see this in your sheet, the integration is working!'
      })
    }
  };
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
  
  // Also check if the sheet exists and has data
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (sheet) {
    const lastRow = sheet.getLastRow();
    console.log('Sheet has ' + lastRow + ' rows (including header)');
    
    if (lastRow > 1) {
      const lastRowData = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];
      console.log('Last row data:', lastRowData);
    }
  }
  
  return result.getContent();
}