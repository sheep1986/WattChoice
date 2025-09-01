# Google Sheets Form Integration Setup Guide

## Overview
This integration sends all form submissions from your Watt Utilities website to a single Google Sheet, making it easy to track and manage all leads in one place.

## Step-by-Step Setup Instructions

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it: **"Watt Utilities Form Submissions"**

### Step 2: Set Up Headers
In Row 1, add these headers (copy and paste exactly):

```
A1: Timestamp
B1: Form Type
C1: Business Name
D1: Contact Name
E1: Email
F1: Phone
G1: Postcode
H1: Address
I1: Business Type
J1: Business Size
K1: Trading Years
L1: Position
M1: Current Supplier
N1: Current Gas Supplier
O1: Current Electric Supplier
P1: Contract End Date
Q1: Gas Contract End Date
R1: Electric Contract End Date
S1: Annual Spend
T1: Annual Usage
U1: Monthly Spend
V1: Meter Type
W1: Utility Type
X1: Green Energy
Y1: Multi Site
Z1: Number of Sites
AA1: Current Provider
AB1: Service Type
AC1: Preferred Contact Time
AD1: How Did You Hear
AE1: Additional Notes
AF1: Page URL
AG1: User Agent
```

### Step 3: Rename the Sheet Tab
1. Right-click on "Sheet1" tab at the bottom
2. Click "Rename"
3. Change it to: **"Form Submissions"**

### Step 4: Set Up Google Apps Script
1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code
3. Copy ALL the code from the file `GOOGLE_APPS_SCRIPT.gs`
4. Paste it into the Apps Script editor
5. Click the 💾 **Save** button (or press Ctrl+S / Cmd+S)

### Step 5: Configure Email Notifications (Optional)
In the Apps Script editor, find this line (around line 135):
```javascript
const EMAIL_TO = 'hello@wattutilities.co.uk';
```
Change it to your preferred email address for notifications.

### Step 6: Deploy as Web App
1. In Apps Script editor, click **Deploy** → **New Deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure as follows:
   - **Description**: "Watt Utilities Form Handler" (or any description)
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
5. Click **Deploy**
6. You'll get a security warning - click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to Watt Utilities Form Handler (unsafe)**
9. Click **Allow**
10. **IMPORTANT**: Copy the **Web App URL** (looks like: `https://script.google.com/macros/s/AKfycb.../exec`)

### Step 7: Update Your Website Code
1. Open the file: `src/utils/googleSheetsIntegration.js`
2. Find this line (around line 44):
```javascript
const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with your Web App URL from Step 6
4. Save the file

### Step 8: Test the Integration
1. Run the website locally or deploy it
2. Fill out any form on the website
3. Check your Google Sheet - you should see a new row with the submission
4. Check your email (if configured) for a notification

## Form Types in the System

The following forms will send data to your Google Sheet:

1. **business-energy-quote** - Main business energy quote form (multi-step)
2. **simple-water-quote** - Simple water service quote
3. **simple-telecoms-quote** - Simple telecoms service quote
4. **simple-broadband-quote** - Simple broadband service quote
5. **contact-form** - Contact us page form

## Troubleshooting

### If forms aren't appearing in Google Sheets:

1. **Check the Web App URL**: Make sure it's correctly pasted in `googleSheetsIntegration.js`
2. **Check deployment**: In Apps Script, go to **Deploy** → **Manage Deployments** and ensure it shows "Active"
3. **Check permissions**: Make sure the Web App access is set to "Anyone"
4. **Test manually**: In Apps Script, run the `testSetup()` function to test

### If you need to make changes to the Apps Script:

1. Edit the code in Apps Script editor
2. Click **Save**
3. Click **Deploy** → **Manage Deployments**
4. Click **Edit** 🖊️
5. Under **Version**, select **New version**
6. Click **Deploy**
7. The URL stays the same, so no need to update your website

## Data Management Tips

1. **Filtering**: Use Google Sheets filters to view specific form types
2. **Sorting**: Sort by timestamp to see newest submissions first
3. **Conditional Formatting**: Highlight urgent leads (e.g., contract ending soon)
4. **Charts**: Create dashboards to visualize lead sources and types

## Security Notes

- The Web App runs under your Google account but accepts anonymous submissions
- No sensitive API keys are exposed in the frontend code
- Data is only sent to your specific Google Sheet
- Email notifications are optional and configurable

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Check the Apps Script logs: **Apps Script Editor** → **Executions** (left sidebar)
3. Ensure all form fields match the normalization in `googleSheetsIntegration.js`

## Next Steps

After setup, you can:
- Add more sheets for different purposes (e.g., "Processed Leads", "Customers")
- Connect to CRM systems using Zapier or Make
- Set up automated follow-up emails using Apps Script
- Create reports and analytics dashboards