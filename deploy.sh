#!/bin/bash

echo "🚀 Deploying to Netlify..."
echo ""

# Build the project
echo "📦 Building project..."
npm run build

echo ""
echo "📤 Deploying to Netlify..."
echo ""
echo "Choose an option:"
echo "1) Deploy to existing site (if you've already linked this project)"
echo "2) Create and deploy to a new site"
echo "3) Link to existing site first, then deploy"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
  1)
    npx netlify deploy --prod --dir=dist
    ;;
  2)
    npx netlify deploy --prod --dir=dist --new
    ;;
  3)
    npx netlify link
    npx netlify deploy --prod --dir=dist
    ;;
  *)
    echo "Invalid choice. Exiting."
    exit 1
    ;;
esac

echo ""
echo "✅ Deployment complete!"