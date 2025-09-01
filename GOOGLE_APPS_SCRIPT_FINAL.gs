/**
 * FINAL WORKING Google Apps Script for Watt Utilities Form Submissions
 * This version correctly handles no-cors POST requests from browsers
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
    // Initialize data object
    let data = {};
    
    // Check if we have postData (from fetch with no-cors)
    if (e && e.postData && e.postData.contents) {
      try {
        // Try to parse the contents as JSON
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        // If JSON parsing fails, log the raw data
        console.log('Raw postData contents:', e.postData.contents);
        // Try to extract data from URL parameters as fallback
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      // Fallback to URL parameters
      data = e.parameter;
    } else {
      // If no data at all, create empty object
      console.log('No data received in request');
      data = {};
    }
    
    // Log what we received for debugging
    console.log('Parsed data:', data);
    
    // Get or create the sheet
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      sheet = createSheetWithHeaders();
    }
    
    // Check if sheet has headers, if not add them
    const lastColumn = sheet.getLastColumn();
    if (lastColumn === 0) {
      addHeaders(sheet);
    }
    
    // Create row data in the exact order of headers
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.formType || 'Unknown',
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
    
    // Log success
    console.log('Row added successfully:', rowData[1], rowData[3], rowData[4]);
    
    // Send email notification if email exists
    if (data.email) {
      try {
        sendEmailNotification(data);
      } catch (emailError) {
        console.log('Email notification failed:', emailError);
      }
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Data added successfully',
        'rowAdded': true
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error for debugging
    console.error('Error in doPost:', error.toString());
    console.error('Error stack:', error.stack);
    
    // Try to log what we received
    try {
      if (e) {
        console.log('Request object:', JSON.stringify(e));
        if (e.postData) {
          console.log('PostData:', e.postData.contents);
        }
      }
    } catch (logError) {
      console.log('Could not log request details');
    }
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function createSheetWithHeaders() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  // If sheet already exists, return it
  if (sheet) {
    return sheet;
  }
  
  // Create new sheet
  sheet = spreadsheet.insertSheet(SHEET_NAME);
  addHeaders(sheet);
  return sheet;
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
    try {
      sheet.autoResizeColumn(i);
    } catch (e) {
      // Some columns might fail to auto-resize, that's ok
    }
  }
}

function sendEmailNotification(data) {
  try {
    // Configure email settings - CHANGE THIS EMAIL ADDRESS
    const EMAIL_TO = 'hello@wattutilities.co.uk'; 
    const EMAIL_SUBJECT = `New ${data.formType || 'Form'} Submission - ${data.businessName || data.contactName || 'Unknown'}`;
    
    // Create simple text email body
    let emailBody = `
New Form Submission Received

Form Type: ${data.formType || 'N/A'}
Timestamp: ${data.timestamp || new Date().toISOString()}

CONTACT DETAILS:
- Business Name: ${data.businessName || 'N/A'}
- Contact Name: ${data.contactName || 'N/A'}
- Email: ${data.email || 'N/A'}
- Phone: ${data.phone || 'N/A'}
- Postcode: ${data.postcode || 'N/A'}

SERVICE DETAILS:
- Utility Type: ${data.utilityType || data.serviceType || 'N/A'}
- Current Supplier: ${data.currentSupplier || data.currentProvider || 'N/A'}
- Contract End Date: ${data.contractEndDate || 'N/A'}
- Monthly Spend: ${data.monthlySpend || 'N/A'}
- Annual Spend: ${data.annualSpend || 'N/A'}

ADDITIONAL NOTES:
${data.additionalNotes || 'None'}

---
This is an automated notification from the Watt Utilities website.
    `;
    
    // Send the email
    MailApp.sendEmail({
      to: EMAIL_TO,
      subject: EMAIL_SUBJECT,
      body: emailBody
    });
    
    console.log('Email sent to:', EMAIL_TO);
    
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw - we don't want email failures to break form submission
  }
}

// Test function to verify the script is working
function testSetup() {
  // Create test data that mimics what would come from the website
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        formType: 'TEST SUBMISSION',
        businessName: 'Test Company Ltd',
        contactName: 'Test User',
        email: 'test@example.com',
        phone: '01234567890',
        postcode: 'M1 1AA',
        additionalNotes: 'This is a test submission - if you see this in your sheet, the integration is working!'
      })
    }
  };
  
  // Call doPost with test data
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
  
  // Check if the sheet has data
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (sheet) {
    const lastRow = sheet.getLastRow();
    console.log('Sheet has ' + lastRow + ' rows (including header)');
    
    if (lastRow > 1) {
      const lastRowData = sheet.getRange(lastRow, 1, 1, 5).getValues()[0];
      console.log('Last row data (first 5 columns):', lastRowData);
    }
  } else {
    console.log('Sheet not found - will be created on first submission');
  }
  
  return 'Test completed - check logs for details';
}

// Alternative test that adds data directly
function directTest() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) || createSheetWithHeaders();
  
  const testRow = [
    new Date().toISOString(),
    'DIRECT TEST',
    'Direct Test Company',
    'Direct Tester',
    'direct@test.com',
    '09999999999',
    'M3 3CC',
    '123 Test Street',
    'Technology',
    'Small',
    '5',
    'Manager',
    'Current Supplier Ltd',
    '',
    '',
    '2024-12-31',
    '',
    '',
    '£5000',
    '50000 kWh',
    '£400',
    'Smart',
    'Electricity',
    'Yes',
    'No',
    '1',
    '',
    '',
    '9am-5pm',
    'Google',
    'Direct test entry',
    'https://test.com',
    'Test Browser'
  ];
  
  sheet.appendRow(testRow);
  console.log('Direct test row added');
  return 'Direct test completed - check your sheet';
}