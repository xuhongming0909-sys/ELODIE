# Mission Spec: [Task Name]

> Usage Rules:
> 1. This file defines task boundaries only. Do not put detailed steps here.
> 2. Keep the default length within 60 lines.
> 3. Do not repeat content that belongs in `plan.md`.
> 4. A single file must stay under 500 lines. If it approaches the limit, delete low-value background and compress the wording.

**Mission**: `[MMDD-short-name]`  
**Type**: `[implement | review | analysis | requirements-update]`  
**Created**: `[YYYY-MM-DD]`  
**Status**: `[draft | in_progress | completed | blocked]`  
**Input Source**: `[user request / specs/... / historical issue / review result]`

## Background

- [why this task exists]

## Goal

- [what this task must achieve]

## Deliverables

- [what this task should produce]

## In Scope

- [what this task explicitly includes]

## Out of Scope

- [what this task explicitly excludes]

## Constraints

- [hard requirement]
- [boundary that must not be broken]

## Impact on Formal Specs

- Changes formal requirements: `[yes | no]`
- If yes, update these files first: `[specs/spec.md, specs/xxx.md]`
- If no, explain why: [why this task closes entirely within the mission]

## Assumptions

- [default assumption; use `none` if there are none]

## Example

### Example: Fix Small Redemption Push Fields

- Background: the page had already switched to "total annualized yield" while push output still said "small redemption yield"
- Goal: unify the page, API, and push wording
- Deliverables:
  - push-related code change
  - synced spec update
- In Scope:
  - push-field adjustment in the convertible-bond-arbitrage module
- Out of Scope:
  - AH / AB / LOF modules
- Constraints:
  - do not change the API path
  - change only the current field wording
- Impact on Formal Specs:
  - Changes formal requirements: `yes`
  - If yes, update these files first: `specs/convertible-bond-arbitrage.md`
