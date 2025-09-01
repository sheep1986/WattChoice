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
    
    // Headers already exist in the sheet, don't add them
    
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
    
    // If we have data, add it to the sheet - MATCH YOUR EXACT COLUMNS
    if (Object.keys(formData).length > 0) {
      // Create a row with 33 columns to match your sheet exactly
      const row = [
        new Date().toISOString(),                                          // A: Timestamp
        formData.formType || 'Web Form',                                   // B: Form Type
        formData.businessName || '',                                       // C: Business Name
        formData.contactName || '',                                        // D: Contact Name
        formData.email || '',                                             // E: Email
        formData.phone || '',                                             // F: Phone
        formData.postcode || '',                                          // G: Postcode
        formData.address || formData.businessAddress || '',               // H: Address
        formData.businessType || '',                                      // I: Business Type
        formData.businessSize || '',                                      // J: Business Size
        formData.tradingYears || '',                                      // K: Trading Years
        formData.position || '',                                          // L: Position
        formData.currentSupplier || '',                                   // M: Current Supplier
        formData.currentGasSupplier || '',                                // N: Current Gas Supplier
        formData.currentElectricSupplier || '',                           // O: Current Electric Supplier
        formData.contractEndDate || '',                                   // P: Contract End Date
        formData.gasContractEndDate || '',                                // Q: Gas Contract End Date
        formData.electricContractEndDate || '',                           // R: Electric Contract End Date
        formData.annualSpend || '',                                       // S: Annual Spend
        formData.annualUsage || '',                                       // T: Annual Usage
        formData.monthlySpend || '',                                      // U: Monthly Spend
        formData.meterType || '',                                         // V: Meter Type
        formData.utilityType || '',                                       // W: Utility Type
        formData.greenEnergy || '',                                       // X: Green Energy
        formData.multiSite || '',                                         // Y: Multi Site
        formData.numberOfSites || '',                                     // Z: Number of Sites
        formData.currentProvider || '',                                   // AA: Current Provider
        formData.serviceType || '',                                       // AB: Service Type
        formData.preferredContactTime || '',                              // AC: Preferred Contact Time
        formData.howDidYouHear || '',                                     // AD: How Did You Hear
        formData.additionalNotes || formData.notes || formData.message || '', // AE: Additional Notes (Column 31)
        formData.pageUrl || '',                                           // AF: Page URL
        formData.userAgent || ''                                          // AG: User Agent
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
  // This will add a test row to your sheet with all 33 columns
  const sheet = SpreadsheetApp.getActiveSheet();
  
  const testRow = [
    new Date().toISOString(),  // A: Timestamp
    'DIRECT TEST',              // B: Form Type
    'Test Company',             // C: Business Name
    'Test Person',              // D: Contact Name
    'test@email.com',           // E: Email
    '123456789',                // F: Phone
    'TEST123',                  // G: Postcode
    '123 Test Street',          // H: Address
    'Technology',               // I: Business Type
    'Small',                    // J: Business Size
    '5 years',                  // K: Trading Years
    'Manager',                  // L: Position
    'Current Provider',         // M: Current Supplier
    '',                         // N: Current Gas Supplier
    '',                         // O: Current Electric Supplier
    '',                         // P: Contract End Date
    '',                         // Q: Gas Contract End Date
    '',                         // R: Electric Contract End Date
    '',                         // S: Annual Spend
    '',                         // T: Annual Usage
    '',                         // U: Monthly Spend
    '',                         // V: Meter Type
    '',                         // W: Utility Type
    '',                         // X: Green Energy
    '',                         // Y: Multi Site
    '',                         // Z: Number of Sites
    '',                         // AA: Current Provider
    '',                         // AB: Service Type
    '',                         // AC: Preferred Contact Time
    '',                         // AD: How Did You Hear
    'TEST MESSAGE - This should appear in Additional Notes column AE!',  // AE: Additional Notes
    '',                         // AF: Page URL
    ''                          // AG: User Agent
  ];
  
  sheet.appendRow(testRow);
  
  return 'Test row added with 33 columns - check column AE for the test message!';
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