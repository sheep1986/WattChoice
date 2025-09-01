/**
 * Google Sheets Form Submission Integration V3
 * This version uses GET requests with URL parameters for maximum compatibility
 */

// IMPORTANT: Your Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw-aQdI05kYULvX6wO03WnmBDtjuuFpibLIC-f1A8mC1ui9ssd54JHVfhK8PnJOqNDEFA/exec';

/**
 * Submit form data to Google Sheets using GET request with URL parameters
 * This method works reliably across all browsers and bypasses CORS issues
 */
export const submitToGoogleSheets = async (formData, formType) => {
  try {
    // Add metadata
    const submissionData = {
      ...formData,
      formType: formType,
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href.substring(0, 200), // Limit URL length
      userAgent: navigator.userAgent.substring(0, 200) // Limit user agent length
    };

    // Normalize the data
    const normalizedData = normalizeFormData(submissionData, formType);

    // Clean and prepare data for URL parameters
    const params = new URLSearchParams();
    
    Object.keys(normalizedData).forEach(key => {
      let value = normalizedData[key];
      
      // Convert different types to strings
      if (value === undefined || value === null) {
        value = '';
      } else if (typeof value === 'boolean') {
        value = value ? 'Yes' : 'No';
      } else if (typeof value === 'object') {
        value = JSON.stringify(value);
      } else {
        value = String(value);
      }
      
      // Add to params
      params.append(key, value);
    });

    console.log('Submitting to Google Sheets:', normalizedData);

    // Create the full URL with parameters
    const fullUrl = `${GOOGLE_SHEETS_URL}?${params.toString()}`;
    
    // Method 1: Use Image trick (most reliable for cross-origin)
    const img = new Image();
    img.src = fullUrl;
    
    // Method 2: Also try fetch as backup
    fetch(fullUrl, {
      method: 'GET',
      mode: 'no-cors'
    }).catch(err => console.log('Fetch completed'));

    // Method 3: Create hidden iframe for another attempt
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = fullUrl;
    document.body.appendChild(iframe);
    
    // Clean up iframe after 3 seconds
    setTimeout(() => {
      if (iframe.parentNode) {
        document.body.removeChild(iframe);
      }
    }, 3000);

    console.log('Form submitted to Google Sheets successfully');
    console.log('Check your sheet for:', normalizedData.businessName || normalizedData.contactName || normalizedData.email);
    
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
};

/**
 * Normalize form data to match Google Sheets columns
 */
export const normalizeFormData = (rawFormData, formType) => {
  const normalized = {
    // Timestamp and metadata
    timestamp: rawFormData.timestamp || new Date().toISOString(),
    formType: formType || rawFormData.formType || '',
    
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
    additionalNotes: rawFormData.additionalNotes || rawFormData.notes || rawFormData.message || '',
    
    // Page metadata
    pageUrl: rawFormData.pageUrl || '',
    userAgent: rawFormData.userAgent || ''
  };

  return normalized;
};

/**
 * Test function to verify Google Sheets integration
 */
export const testGoogleSheetsSubmission = () => {
  const testData = {
    businessName: 'Test Company ' + Date.now(),
    contactName: 'Test User',
    email: 'test@example.com',
    phone: '01234567890',
    postcode: 'M1 1AA',
    additionalNotes: 'Test submission at ' + new Date().toLocaleString()
  };
  
  console.log('Sending test data:', testData);
  return submitToGoogleSheets(testData, 'TEST-FORM');
};