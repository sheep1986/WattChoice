/**
 * Google Apps Script V3 - Handles both GET and POST requests
 * This version is designed to work with URL parameters for maximum compatibility
 */

// The name of your Google Sheet tab
const SHEET_NAME = 'Form Submissions';

// Handle GET requests (primary method for form submissions)
function doGet(e) {
  try {
    // Extract parameters from the GET request
    const data = e.parameter || {};
    
    // Log what we received
    console.log('GET request received with parameters:', data);
    
    // Process the form submission
    const result = processFormSubmission(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Data received via GET',
        'processed': result
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doGet:', error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle POST requests (fallback method)
function doPost(e) {
  try {
    let data = {};
    
    // Try to get data from various sources
    if (e && e.parameter) {
      // URL parameters
      data = e.parameter;
    } else if (e && e.postData && e.postData.contents) {
      try {
        // JSON body
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        // Form data as string
        console.log('Could not parse JSON, using parameters');
        data = e.parameter || {};
      }
    }
    
    console.log('POST request received with data:', data);
    
    // Process the form submission
    const result = processFormSubmission(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Data received via POST',
        'processed': result
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Process form submission (used by both GET and POST)
function processFormSubmission(data) {
  try {
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
    console.log('Row added successfully:', {
      formType: rowData[1],
      contact: rowData[3],
      email: rowData[4]
    });
    
    // Send email notification if configured
    if (data.email) {
      try {
        sendEmailNotification(data);
      } catch (emailError) {
        console.log('Email notification failed:', emailError);
      }
    }
    
    return {
      success: true,
      rowAdded: true,
      timestamp: rowData[0]
    };
    
  } catch (error) {
    console.error('Error processing submission:', error);
    throw error;
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
    
    // Create HTML email body for better formatting
    let emailBody = `
      <h2>New Form Submission Received</h2>
      
      <p><strong>Form Type:</strong> ${data.formType || 'N/A'}<br>
      <strong>Timestamp:</strong> ${data.timestamp || new Date().toISOString()}</p>
      
      <h3>Contact Details:</h3>
      <ul>
        <li><strong>Business Name:</strong> ${data.businessName || 'N/A'}</li>
        <li><strong>Contact Name:</strong> ${data.contactName || 'N/A'}</li>
        <li><strong>Email:</strong> ${data.email || 'N/A'}</li>
        <li><strong>Phone:</strong> ${data.phone || 'N/A'}</li>
        <li><strong>Postcode:</strong> ${data.postcode || 'N/A'}</li>
      </ul>
      
      <h3>Service Details:</h3>
      <ul>
        <li><strong>Utility Type:</strong> ${data.utilityType || data.serviceType || 'N/A'}</li>
        <li><strong>Current Supplier:</strong> ${data.currentSupplier || data.currentProvider || 'N/A'}</li>
        <li><strong>Contract End Date:</strong> ${data.contractEndDate || 'N/A'}</li>
        <li><strong>Monthly Spend:</strong> ${data.monthlySpend || 'N/A'}</li>
        <li><strong>Annual Spend:</strong> ${data.annualSpend || 'N/A'}</li>
      </ul>
      
      <h3>Additional Notes:</h3>
      <p>${data.additionalNotes || 'None'}</p>
      
      <hr>
      <p style="color: #666; font-size: 12px;">This is an automated notification from the Watt Utilities website.</p>
    `;
    
    // Send the email
    MailApp.sendEmail({
      to: EMAIL_TO,
      subject: EMAIL_SUBJECT,
      htmlBody: emailBody
    });
    
    console.log('Email sent to:', EMAIL_TO);
    
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw - we don't want email failures to break form submission
  }
}

// Test function to verify the script is working
function testSetup() {
  // Test with GET parameters
  const testGetRequest = {
    parameter: {
      timestamp: new Date().toISOString(),
      formType: 'TEST-GET',
      businessName: 'Test Company GET',
      contactName: 'GET Tester',
      email: 'get@test.com',
      phone: '01111111111',
      postcode: 'G1 1ET',
      additionalNotes: 'Test via GET method'
    }
  };
  
  console.log('Testing GET method...');
  const getResult = doGet(testGetRequest);
  console.log('GET result:', getResult.getContent());
  
  // Check the sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (sheet) {
    const lastRow = sheet.getLastRow();
    console.log('Sheet has ' + lastRow + ' rows (including header)');
    
    if (lastRow > 1) {
      const lastRowData = sheet.getRange(lastRow, 1, 1, 5).getValues()[0];
      console.log('Last row data (first 5 columns):', lastRowData);
    }
  }
  
  return 'Test completed - check your sheet for "Test Company GET"';
}

// Manual test to add data directly
function manualTest() {
  const testData = {
    timestamp: new Date().toISOString(),
    formType: 'MANUAL-TEST',
    businessName: 'Manual Test Co',
    contactName: 'Manual Tester',
    email: 'manual@test.com',
    phone: '09999999999',
    postcode: 'M9 9XX',
    additionalNotes: 'Manually added test entry'
  };
  
  const result = processFormSubmission(testData);
  console.log('Manual test result:', result);
  
  return 'Manual test completed - check your sheet';
}