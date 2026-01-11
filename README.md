# Residuality Analysis Tool

[![Lint](https://github.com/ctford/residuality/actions/workflows/lint.yml/badge.svg)](https://github.com/ctford/residuality/actions/workflows/lint.yml)

A single-page web application for applying Barry O'Reilly's residuality framework to architectural decision-making.

**Live demo:** https://ctford.github.io/residuality/

## What is Residuality?

Residuality is an approach to software architecture that prepares systems to navigate uncertain futures. Instead of designing for a single predicted future, you:

1. **Define Stressors** - Potential disruptions or changes to your business context
2. **Map to Attractors** - Identify the new system states these stressors would trigger
3. **Plan Residues** - Specify technical changes needed to survive in each attractor
4. **Analyze Contagion** - Detect hidden coupling between components that could cascade failures

This tool supports this workflow by helping you:

- Collect and organize stressors, attractors, business reactions, and technical changes
- Map which architecture components are affected by each stressor
- Identify contagion patterns and hyperliminal coupling
- Find robust measures that work across multiple scenarios

## Features

- **Stressor Analysis** - Define stressors, attractors, business reactions, and technical residues
- **Contagion Matrix** - Visualize component impact across stressors and identify hidden coupling
- **Summary Metrics** - Track reuse and novelty as your architecture approaches criticality
- **Persistent storage** - Your work is saved in browser localStorage
- **URL routing** - Bookmark specific tabs with URL fragments
- **Clear button** - Start fresh when needed
- **Responsive design** - Works on desktop and mobile

## Example

The tool includes a canned example based on O'Reilly's worked example of an electric vehicle charging station system. Load it via the "Load Example" button to explore all 14 stressors and their mapped residues.

O'Reilly advises that a comprehensive stressor analysis typically includes a few hundred stressors. As you add more stressors, the number of distinct residues should stabilize, indicating the architecture is approaching criticality.

## Attribution

This tool is based on the residuality framework from [Barry O'Reilly](https://www.linkedin.com/in/barry-o-reilly-b924657/)'s book [Residues](https://leanpub.com/residuality).

## License

MIT - See LICENSE file for details.

## Development

### Setup

Clone the repo and run the setup script to install git hooks:

```bash
git clone https://github.com/ctford/residuality.git
cd residuality
./setup-hooks.sh
```

### Linting

```bash
npm run lint        # Run ESLint
npm run lint:fix    # Fix linting issues automatically
```

ESLint will run automatically on `git commit` via pre-commit hooks.

## Technical Details

Single HTML file with vanilla JavaScript. Dependencies limited to development tools (ESLint, Husky).

Data is stored in browser localStorage and is not sent anywhere.
