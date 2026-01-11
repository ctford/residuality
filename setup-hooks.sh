#!/bin/bash
# Setup pre-commit hooks for this project

set -e

echo "Installing dependencies..."
npm install

echo "Setting up pre-commit hooks..."
mkdir -p .husky

cat > .husky/pre-commit << 'HOOK'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
HOOK

chmod +x .husky/pre-commit

echo "✓ Pre-commit hook installed"
echo "✓ Hooks will run 'npm run lint' before each commit"
