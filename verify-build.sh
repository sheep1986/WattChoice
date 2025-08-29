#!/bin/bash
echo "======================================="
echo "VERIFYING BUILD OUTPUT"
echo "======================================="
echo ""
echo "Checking dist directory:"
ls -la dist/ | head -10
echo ""
echo "Checking for test markers in built files:"
grep -l "DEPLOYMENT TEST" dist/assets/js/*.js 2>/dev/null && echo "✓ Test markers found in JS" || echo "✗ Test markers NOT found"
echo ""
echo "Build verification complete"
echo "======================================="