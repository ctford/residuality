# Residuality Analysis Tool

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

### 2. Components
List your architecture components, services, or major functions.

### 3. Contagion Analysis
Build an incidence matrix showing which components are affected by each stressor. The tool automatically detects:
- **High-impact stressors** affecting many components
- **Vulnerable components** stressed by many scenarios
- **Hyperliminal coupling** (hidden dependencies between components)
- **Untouched components** that may need more testing

### 4. Summary
View your analysis at a glance with component impact metrics.

## Features

- **Persistent storage** - Your work is saved in browser localStorage
- **URL routing** - Bookmark specific tabs with URL fragments
- **Clear button** - Start fresh when needed
- **Responsive design** - Works on desktop and mobile

## Attribution

This tool is based on the residuality framework from Barry O'Reilly's book [Residues](https://leanpub.com/residuality).

## License

MIT - See LICENSE file for details.

## Technical Details

Single HTML file with vanilla JavaScript. No dependencies, no build process. Just open in a modern web browser.

Data is stored in browser localStorage and is not sent anywhere.
