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

## How to Use

### 1. Stressor Analysis
Add scenarios (stressors) and for each one define:
- **Attractor**: What system configuration this stressor pushes you toward
- **Business Reaction**: How the business will respond
- **Residues**: Technical changes needed to support that reaction

### 2. Contagion Analysis
Build an incidence matrix showing which components are affected by each stressor. Define your architecture components, services, or major functions, then indicate the impact. The matrix reveals:
- **High-impact stressors** - affecting many components
- **Vulnerable components** - affected by many stressors
- **Hyperliminal coupling** - hidden dependencies between components
- **Untouched components** - that may need more testing

### 3. Summary
View your analysis with key metrics:
- **N** - Number of components
- **K** - Average number of stressors per component (measures coupling)
- **Rd** - Average unique residues per stressor (approaches zero at criticality)
- **Distinct Residues** - Total unique residues across all stressors
- **Unique Residues** - Residues used by only one stressor

## Features

- **Persistent storage** - Your work is saved in browser localStorage
- **URL routing** - Bookmark specific tabs with URL fragments
- **Clear button** - Start fresh when needed
- **Responsive design** - Works on desktop and mobile

## Example

The tool includes a canned example based on O'Reilly's worked example of an electric vehicle charging station system. Load it via the "Load Example" button to explore all 14 stressors and their mapped residues.

O'Reilly advises that a comprehensive stressor analysis typically includes a few hundred stressors. As you add more stressors, the number of distinct residues should stabilize, indicating the architecture is approaching criticality.

## Attribution

This tool is based on the residuality framework from [Barry O'Reilly](https://www.linkedin.com/in/barry-o-reilly-b924657/)'s book [Residuality](https://leanpub.com/residuality).

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
