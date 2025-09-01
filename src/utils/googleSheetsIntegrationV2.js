/**
 * Google Sheets Form Submission Integration V2
 * This version uses URL parameters instead of JSON body for better compatibility
 */

// IMPORTANT: Your Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbym0tckE5vCEDnF4GfDfBh3LG_Mv0SAJEhGOCdqXevV1x7Jh7OQH0PXTw8rWRLTNWaAXQ/exec';

/**
 * Submit form data to Google Sheets using URL parameters
 * This method works better with no-cors mode
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

    // Clean and prepare data
    const params = new URLSearchParams();
    
    Object.keys(submissionData).forEach(key => {
      let value = submissionData[key];
      
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
      
      // Add to params if not empty
      if (value) {
        params.append(key, value);
      }
    });

    console.log('Submitting to Google Sheets with params:', params.toString());

    // Send as POST with URL parameters
    const fullUrl = `${GOOGLE_SHEETS_URL}?${params.toString()}`;
    
    // Use Image trick for cross-origin requests (works better than fetch with no-cors)
    const img = new Image();
    img.src = fullUrl;
    
    // Also try fetch as backup
    fetch(fullUrl, {
      method: 'POST',
      mode: 'no-cors'
    }).catch(err => console.log('Fetch attempt completed'));

    console.log('Form submitted to Google Sheets');
    console.log('Check your sheet for:', submissionData.businessName || submissionData.contactName || submissionData.email);
    
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
};

/**
 * Alternative method using hidden iframe (most reliable for cross-origin)
 */
export const submitToGoogleSheetsIframe = async (formData, formType) => {
  try {
    // Prepare data
    const submissionData = {
      ...formData,
      formType: formType,
      timestamp: new Date().toISOString()
    };

    // Create form element
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_SHEETS_URL;
    form.target = 'hidden_iframe';
    form.style.display = 'none';

    // Add all data as hidden inputs
    Object.keys(submissionData).forEach(key => {
      let value = submissionData[key];
      
      if (value === undefined || value === null) {
        value = '';
      } else if (typeof value === 'boolean') {
        value = value ? 'Yes' : 'No';
      } else if (typeof value === 'object') {
        value = JSON.stringify(value);
      }
      
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    });

    // Create hidden iframe
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden_iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Add form to body and submit
    document.body.appendChild(form);
    form.submit();

    // Clean up after 2 seconds
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 2000);

    console.log('Form submitted via iframe to Google Sheets');
    return true;
  } catch (error) {
    console.error('Error with iframe submission:', error);
    return false;
  }
};

/**
 * Normalize form data to match Google Sheets columns
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