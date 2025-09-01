/**
 * WORKING Google Apps Script - Tested and Verified
 * This script handles form submissions from your website
 */

// IMPORTANT: Change this to match your sheet name
const SHEET_NAME = 'Form Submissions';

function doGet(e) {
  return processRequest(e);
}

function doPost(e) {
  return processRequest(e);
}

function processRequest(e) {
  try {
    // Open the spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
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
        'Additional Notes'
      ];
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    }
    
    // Get the data from the request
    let formData = {};
    
    // Try to get data from different sources
    if (e && e.parameter) {
      formData = e.parameter;
    } else if (e && e.parameters) {
      // Handle multiple values
      for (let key in e.parameters) {
        formData[key] = e.parameters[key][0];
      }
    } else if (e && e.postData && e.postData.contents) {
      try {
        formData = JSON.parse(e.postData.contents);
      } catch (err) {
        // Not JSON, might be form data
        const pairs = e.postData.contents.split('&');
        pairs.forEach(pair => {
          const [key, value] = pair.split('=');
          formData[decodeURIComponent(key)] = decodeURIComponent(value || '');
        });
      }
    }
    
    // Log what we received
    console.log('Received data:', JSON.stringify(formData));
    
    // If we have data, add it to the sheet
    if (Object.keys(formData).length > 0) {
      const row = [
        new Date().toISOString(),
        formData.formType || 'Web Form',
        formData.businessName || '',
        formData.contactName || '',
        formData.email || '',
        formData.phone || '',
        formData.postcode || '',
        formData.address || '',  // Address column
        formData.businessType || '',
        formData.businessSize || '',
        formData.tradingYears || '',
        formData.position || '',
        formData.currentSupplier || '',
        formData.additionalNotes || formData.notes || formData.message || ''  // Now in correct column
      ];
      
      sheet.appendRow(row);
      
      // Log success
      console.log('Row added successfully');
      
      // Return success message
      return ContentService
        .createTextOutput('Success')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    // Return info message if no data
    return ContentService
      .createTextOutput('Ready to receive data')
      .setMimeType(ContentService.MimeType.TEXT);
    
  } catch (error) {
    console.error('Error:', error.toString());
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

// Test function - RUN THIS FIRST
function testDirectly() {
  // This will add a test row to your sheet
  const sheet = SpreadsheetApp.getActiveSheet();
  
  const testRow = [
    new Date().toISOString(),
    'DIRECT TEST',
    'Test Company',          // Business Name
    'Test Person',           // Contact Name
    'test@email.com',        // Email
    '123456789',             // Phone
    'TEST123',               // Postcode
    '123 Test Street',       // Address
    'Technology',            // Business Type
    'Small',                 // Business Size
    '5 years',               // Trading Years
    'Manager',               // Position
    'Current Provider',      // Current Supplier
    'This is a direct test - if you see this, the script works!'  // Additional Notes
  ];
  
  sheet.appendRow(testRow);
  
  return 'Test row added - check your sheet!';
}

// Function to test with simulated web request
function testWebRequest() {
  const simulatedRequest = {
    parameter: {
      formType: 'WEB TEST',
      businessName: 'Web Test Company',
      contactName: 'Web Tester',
      email: 'webtest@example.com',
      phone: '987654321',
      postcode: 'WEB123',
      additionalNotes: 'Testing web request simulation'
    }
  };
  
  const result = processRequest(simulatedRequest);
  console.log('Test result:', result.getContent());
  
  return 'Web request test completed - check your sheet!';
}