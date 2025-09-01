# UPDATE YOUR GOOGLE SCRIPT URL

## After deploying your Google Apps Script, you need to update the URL in these files:

### Files to update:
1. `/src/utils/googleSheetsSimple.js` - Line 6
2. `/src/utils/googleSheetsIntegration.js` - Line 51  
3. `/src/utils/googleSheetsIntegrationV2.js` - Line 7
4. `/src/utils/googleSheetsIntegrationV3.js` - Line 7
5. `/public/simple-test.html` - Line 69 and 73
6. `/public/debug-sheets.html` - Line 136 and 179

### Current URL:
```
https://script.google.com/macros/s/AKfycbyWXRrNElgdkWcfh2VnoZ3Q2NjYsEapJsKhYMp7jOg73I1Xn7MVvPv5PieTpuZ1Dl48/exec
```

### Replace with your NEW deployment URL:
```
https://script.google.com/macros/s/[YOUR_NEW_DEPLOYMENT_ID]/exec
```

## How to find your deployment URL:
1. In Google Apps Script, click **Deploy** → **Manage deployments**
2. Look for the "Web app" URL under your active deployment
3. Copy this URL and replace it in all the files above

## Quick command to update all files (after you have the new URL):
Run this in your terminal (replace NEW_URL with your actual URL):
```bash
cd /Users/seanwentz/Desktop/WATT\ UTILITIES\ WEB\ SITE\ 1
find . -type f \( -name "*.js" -o -name "*.html" \) -exec grep -l "AKfycby" {} \; | xargs sed -i '' 's|https://script.google.com/macros/s/AKfycbyWXRrNElgdkWcfh2VnoZ3Q2NjYsEapJsKhYMp7jOg73I1Xn7MVvPv5PieTpuZ1Dl48/exec|YOUR_NEW_URL_HERE|g'
```