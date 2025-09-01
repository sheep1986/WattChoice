/**
 * Google Sheets Form Submission Integration
 * 
 * This file handles all form submissions to Google Sheets via Google Apps Script
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to Google Sheets and create a new spreadsheet
 * 2. Name it "Watt Utilities Form Submissions"
 * 3. Add these headers in Row 1:
 *    A: Timestamp
 *    B: Form Type
 *    C: Business Name
 *    D: Contact Name
 *    E: Email
 *    F: Phone
 *    G: Postcode
 *    H: Address
 *    I: Business Type
 *    J: Business Size
 *    K: Trading Years
 *    L: Position
 *    M: Current Supplier
 *    N: Current Gas Supplier
 *    O: Current Electric Supplier
 *    P: Contract End Date
 *    Q: Gas Contract End Date
 *    R: Electric Contract End Date
 *    S: Annual Spend
 *    T: Annual Usage
 *    U: Monthly Spend
 *    V: Meter Type
 *    W: Utility Type
 *    X: Green Energy
 *    Y: Multi Site
 *    Z: Number of Sites
 *    AA: Current Provider
 *    AB: Service Type
 *    AC: Preferred Contact Time
 *    AD: How Did You Hear
 *    AE: Additional Notes
 *    AF: Page URL
 *    AG: User Agent
 * 
 * 4. Go to Extensions > Apps Script
 * 5. Replace the code with the Google Apps Script code below
 * 6. Deploy as Web App with access "Anyone"
 * 7. Copy the Web App URL and update GOOGLE_SHEETS_URL below
 */

// IMPORTANT: Replace this with your actual Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw-aQdI05kYULvX6wO03WnmBDtjuuFpibLIC-f1A8mC1ui9ssd54JHVfhK8PnJOqNDEFA/exec';

/**
 * Submit form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @param {string} formType - Type of form (business-quote, simple-quote, contact, etc.)
 * @returns {Promise<boolean>} - Success status
 */
export const submitToGoogleSheets = async (formData, formType) => {
  try {
    // Add metadata
    const submissionData = {
      ...formData,
      formType: formType,
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent
    };

    // Remove any undefined or null values and convert booleans to strings
    Object.keys(submissionData).forEach(key => {
      if (submissionData[key] === undefined || submissionData[key] === null) {
        submissionData[key] = '';
      } else if (typeof submissionData[key] === 'boolean') {
        submissionData[key] = submissionData[key] ? 'Yes' : 'No';
      }
    });

    console.log('Submitting to Google Sheets:', submissionData);

    // Send to Google Sheets
    // Note: We use 'no-cors' mode which means we can't read the response
    // but it allows cross-origin requests to Google Apps Script
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Apps Script
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(submissionData)
    });

    // Since we're using no-cors, we can't read the response
    // We'll assume success if no error was thrown
    console.log('Form submitted to Google Sheets successfully');
    console.log('Check your Google Sheet for:', submissionData.businessName || submissionData.contactName);
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    // Don't break the user experience if Google Sheets fails
    // You might want to implement a fallback here (e.g., email notification)
    return false;
  }
};

/**
 * Normalize form data to match Google Sheets columns
 * This ensures consistent data structure across all forms
 */
export const normalizeFormData = (rawFormData, formType) => {
  const normalized = {
    // Common fields across all forms
    businessName: rawFormData.businessName || rawFormData.companyName || '',
    contactName: rawFormData.contactName || rawFormData.name || '',
    email: rawFormData.email || '',
    phone: rawFormData.phone || rawFormData.phoneNumber || '',
    postcode: rawFormData.postcode || '',
    address: rawFormData.address || rawFormData.businessAddress || rawFormData.selectedAddress || '',
    
    // Business details
    businessType: rawFormData.businessType || rawFormData.industry || '',
    businessSize: rawFormData.businessSize || rawFormData.companySize || '',
    tradingYears: rawFormData.tradingYears || '',
    position: rawFormData.position || rawFormData.jobTitle || '',
    
    // Energy/Utility specific
    currentSupplier: rawFormData.currentSupplier || rawFormData.currentProvider || '',
    currentGasSupplier: rawFormData.currentGasSupplier || '',
    currentElectricSupplier: rawFormData.currentElectricSupplier || '',
    contractEndDate: rawFormData.contractEndDate || '',
    gasContractEndDate: rawFormData.gasContractEndDate || '',
    electricContractEndDate: rawFormData.electricContractEndDate || '',
    annualSpend: rawFormData.annualSpend || '',
    annualUsage: rawFormData.annualUsage || '',
    monthlySpend: rawFormData.monthlySpend || '',
    meterType: rawFormData.meterType || '',
    utilityType: rawFormData.utilityType || rawFormData.serviceType || '',
    
    // Additional options
    greenEnergy: rawFormData.greenEnergy || false,
    multiSite: rawFormData.multiSite || false,
    numberOfSites: rawFormData.numberOfSites || '',
    
    // Service specific
    currentProvider: rawFormData.currentProvider || '',
    serviceType: rawFormData.serviceType || formType || '',
    
    // Contact preferences
    preferredContactTime: rawFormData.preferredContactTime || '',
    howDidYouHear: rawFormData.howDidYouHear || '',
    additionalNotes: rawFormData.additionalNotes || rawFormData.notes || rawFormData.message || ''
  };

  return normalized;
};