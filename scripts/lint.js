const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');

// Simple linting checks for index.html JavaScript
function lint() {
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  // Extract JavaScript from script tags
  const scriptRegex = /<script>([\s\S]*?)<\/script>/g;
  let match;
  let jsCode = '';
  
  while ((match = scriptRegex.exec(htmlContent)) !== null) {
    jsCode += match[1] + '\n';
  }

  const lines = jsCode.split('\n');
  let issues = 0;

  // Simple linting rules
  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    
    // Check for unused variables (basic check)
    if (line.match(/^\s*var\s+/)) {
      console.log(`${lineNum}: warning - Use const/let instead of var`);
      issues++;
    }
    
    // Check for console.log (warning, not error)
    if (line.includes('console.log') && !line.includes('//')) {
      // This is OK for now - just informational
    }
  });

  if (issues === 0) {
    console.log('✓ No linting issues found');
    process.exit(0);
  } else {
    console.log(`\n${issues} issue(s) found`);
    process.exit(0); // Don't fail on warnings
  }
}

lint();
