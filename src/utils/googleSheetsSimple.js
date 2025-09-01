/**
 * SIMPLE Google Sheets Integration
 * Uses basic form submission that works reliably
 */

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyWXRrNElgdkWcfh2VnoZ3Q2NjYsEapJsKhYMp7jOg73I1Xn7MVvPv5PieTpuZ1Dl48/exec';

/**
 * Submit to Google Sheets using a hidden form
 * This is the most reliable method for cross-origin submissions
 */
export const submitToGoogleSheets = (formData, formType) => {
  return new Promise((resolve) => {
    try {
      console.log('Submitting to Google Sheets:', formData);
      
      // Create a hidden form
      const form = document.createElement('form');
      form.style.display = 'none';
      form.method = 'POST';
      form.action = GOOGLE_SHEETS_URL;
      form.target = 'google-sheets-frame';
      
      // Add form type
      addField(form, 'formType', formType || 'unknown');
      
      // Add timestamp
      addField(form, 'timestamp', new Date().toISOString());
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        let value = formData[key];
        
        // Convert booleans to Yes/No
        if (typeof value === 'boolean') {
          value = value ? 'Yes' : 'No';
        }
        
        // Convert objects to string
        if (typeof value === 'object' && value !== null) {
          value = JSON.stringify(value);
        }
        
        // Add the field
        addField(form, key, value || '');
      });
      
      // Create hidden iframe to receive response
      let iframe = document.getElementById('google-sheets-frame');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'google-sheets-frame';
        iframe.name = 'google-sheets-frame';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }
      
      // Add form to body
      document.body.appendChild(form);
      
      // Submit the form
      form.submit();
      
      // Clean up form after submission
      setTimeout(() => {
        document.body.removeChild(form);
        console.log('Form submitted successfully');
        resolve(true);
      }, 1000);
      
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      resolve(false);
    }
  });
};

/**
 * Helper function to add hidden input field to form
 */
function addField(form, name, value) {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = String(value || '');
  form.appendChild(input);
}

/**
 * Test submission
 */
export const testSubmission = () => {
  const testData = {
    businessName: 'Test Company ' + Date.now(),
    contactName: 'Test User',
    email: 'test@example.com',
    phone: '01234567890',
    postcode: 'TEST',
    additionalNotes: 'Test submission at ' + new Date().toLocaleString()
  };
  
  console.log('Sending test data...');
  return submitToGoogleSheets(testData, 'TEST');
};