/**
 * SIMPLE Google Apps Script - Direct form submission handler
 * This version uses the simplest possible approach
 */

// The name of your Google Sheet tab
const SHEET_NAME = 'Form Submissions';

// Main entry point for both GET and POST
function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) || createSheet();
    
    // Get data from request
    const data = e ? (e.parameter || e.parameters || {}) : {};
    
    // Log for debugging
    console.log('Request received:', JSON.stringify(data));
    
    // If empty request, just return success
    if (Object.keys(data).length === 0) {
      return HtmlService.createHtmlOutput('Script is working! Ready to receive form submissions.');
    }
    
    // Create row with timestamp
    const row = [
      new Date().toISOString(),
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
    
    // Add the row to the sheet
    sheet.appendRow(row);
    
    // Log success
    console.log('Row added successfully');
    
    // Return success HTML (for iframe compatibility)
    return HtmlService.createHtmlOutput('<html><body>Success</body></html>');
    
  } catch (error) {
    console.error('Error:', error.toString());
    return HtmlService.createHtmlOutput('<html><body>Error: ' + error.toString() + '</body></html>');
  }
}

function createSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.insertSheet(SHEET_NAME);
  
  // Add headers
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
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.setFrozenRows(1);
  
  return sheet;
}

// Test function
function test() {
  const testData = {
    parameter: {
      formType: 'TEST',
      businessName: 'Test Company',
      contactName: 'Test User',
      email: 'test@test.com',
      phone: '123456789',
      additionalNotes: 'Test at ' + new Date()
    }
  };
  
  const result = handleRequest(testData);
  console.log('Test result:', result.getContent());
  return 'Test completed - check your sheet';
}