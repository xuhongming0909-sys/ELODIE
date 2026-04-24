# [Module Name] Spec

> Usage Rules:
> 1. This file is a “requirements + formal implementation contract” document, not a task plan.
> 2. Keep only sections that apply. Delete sections that do not apply and do not leave them empty.
> 3. Keep the default length within 120 lines. If the module is complex, prefer splitting into sub-specs.
> 4. Each second-level section should normally stay within 5 bullets.
> 5. Do not write vague filler such as “maybe” or “we can decide later.” If something is unclear, write it as an assumption or open question.
> 6. A single file must stay under 500 lines. If it approaches the limit, split it into sub-specs.

**Module**: `[module-name]`  
**Created**: `[YYYY-MM-DD]`  
**Last Updated**: `[YYYY-MM-DD]`  
**Status**: `[draft | active | paused | archived]`  
**Input Source**: `[user description / project spec / confirmed decision]`

## Document Role

- This document defines: [the current formal requirements, data contract, API contract, and acceptance contract for this module]
- This document does not define: [single-task steps, implementation schedule, temporary experiments]
- Upstream constraints: [design rules, global rules, external API constraints, if any]

## Scope and Boundaries

### In Scope

- [what this module explicitly owns]

### Out of Scope

- [what this module explicitly does not own]

## Module Structure

- [for page modules: page structure]
- [for flow modules: flow sequence]
- [for capability modules: internal parts]

## Object and List Definitions

- [define the core objects in this module]
- [define the lists, cards, tables, or state sets in this module]
- [for example: monitor list, candidate pool, summary list, push list]

## Filter and Admission Rules

- [conditions for entering a list or candidate pool]
- [conditions for leaving a list or candidate pool]
- [default sorting rule]

## Functional Requirements

- **FR-001**: The system must [one explicit capability]
- **FR-002**: The system must [one explicit capability]
- **FR-003**: The system must [one explicit capability]

## Business Rules

- [filter rule]
- [sorting rule]
- [state transition rule]
- [invariant or limit rule]

## Data and Field Definitions

- Data source: [real source / file / interface / report]
- Null rule: [how missing values are handled]
- Fallback rule: [how the module falls back when real values are missing]
- Key fields:
  - `[field_name]`: [meaning]
  - `[field_name]`: [meaning]

## API / Input / Output Contract

- Path / entrypoint: [API path / file entry / function entry]
- Input: [request parameters / upstream input]
- Output: [response structure / downstream output]
- Compatibility requirement: [which paths, fields, or meanings must not change]

## Formula / Calculation / Decision Rules

- `[field_a] = ...`
- `[field_b] = ...`
- [key decision condition]

## Display / Interaction Rules

- [column order / block order / primary interaction]
- [highlight / sort / pagination / fold rules]
- [how exceptions, nulls, or missing values are shown]

## External Output Rules

- [push / export / log / alert rules]
- [which fields must appear]
- [which fields must no longer appear]

## Acceptance Rules

- Page / structure acceptance: [how to know the structure is correct]
- API / field acceptance: [how to know the API contract is correct]
- Formula / decision acceptance: [how to know the calculation is correct]
- Downstream output acceptance: [how to know push, export, or logs are correct]

## Assumptions

- [default assumption; use `none` if there are none]

## Current Additions

- [write only temporary constraints for the current phase; use `none` if there are none]

## Example

### Example: Small Redemption Module

- In Scope:
  - display convertible bonds where `price < 100`
  - define small-redemption yield, option annualized yield, and total annualized yield
- Object and List Definitions:
  - `smallRedemption.rows`: small-redemption table rows
  - `smallRedemption.summary`: small-redemption summary
- Filter and Admission Rules:
  - enter when `price < 100`
  - leave when `price >= 100` or the bond becomes invalid
- API / Input / Output Contract:
  - path: `GET /api/market/convertible-bond-arbitrage`
  - output includes `smallRedemption.rows`
- Formula / Calculation / Decision Rules:
  - `smallRedemptionYield = 1 - price / 100`
  - `smallRedemptionTotalAnnualizedYield = smallRedemptionAnnualizedYield + smallRedemptionOptionAnnualizedYield`
- External Output Rules:
  - the independent push output must no longer show `smallRedemptionYield`
  - it must show `smallRedemptionTotalAnnualizedYield` instead
