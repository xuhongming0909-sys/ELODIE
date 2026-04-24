# Project Spec: [Project Name]

> Usage Rules:
> 1. This file contains project-level truth only. Do not put single-task steps here.
> 2. Delete example content that does not apply. Do not keep empty headings.
> 3. Keep the default length within 80 lines unless the project is truly complex.
> 4. A single file must stay under 500 lines. If it approaches the limit, split modules or compress content.

**Created**: `[YYYY-MM-DD]`  
**Last Updated**: `[YYYY-MM-DD]`  
**Current Status**: `[draft | active | paused | archived]`  
**Input Source**: `[long-term user description / historical decisions / confirmed requirements]`

## Document Role

- This file defines: [project-level goals, boundaries, module map, global rules]
- This file does not define: [single-task steps, temporary implementation process, historical discussion]

## Project Goals

- [what this project ultimately solves]
- [the most important goal in the current stage]

## Current Stage

- Current stage: [prototype / MVP / expansion / maintenance]
- Current focus: [the most important work right now]
- Current non-goals: [what is explicitly out of scope right now]

## Module Map

| Module | Role | Formal Spec | Real Entry Point |
| --- | --- | --- | --- |
| [module] | [module responsibility] | `specs/[module].md` | [directory / file / service] |

## Global Rules

- [project-level rule]
- [cross-module rule]
- [real-data / config / verification related rule]

## Sub Spec Index

- `specs/[module].md`: [what the module owns]

## Success Criteria

- **SC-001**: [project-level measurable outcome]
- **SC-002**: [project-level checkable outcome]

## Current Additions

- [write project-level temporary constraints only; use `none` if there are none]

## Example

### Example: Alpha Monitor

- Project goal: discover arbitrage opportunities from real market data and close the loop through page and push output
- Current stage: React financial-terminal UI rebuild, while keeping the legacy page as a rollback entry
- Module map:
  - `specs/convertible-bond-arbitrage.md`: convertible bond arbitrage
  - `specs/lof-arbitrage.md`: LOF arbitrage
- Global rules:
  - use real data only
  - update formal `specs/` before implementation when requirements change
  - never place sensitive information in markdown
