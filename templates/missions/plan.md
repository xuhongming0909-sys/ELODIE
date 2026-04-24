# Mission Plan: [Task Name]

> Usage Rules:
> 1. This file defines how to execute and how to validate. Do not repeat task background here.
> 2. Keep the default length within 50 lines.
> 3. Steps must be executable and validation must be checkable.
> 4. A single file must stay under 500 lines. If it approaches the limit, compress step descriptions instead of adding long explanations.

**Mission**: `[MMDD-short-name]` | **Date**: `[YYYY-MM-DD]` | **Spec**: `missions/[MMDD-short-name]/spec.md`

## Summary

- [one-sentence explanation of how this task will be done]

## Constitution Check

- [ ] assumptions, ambiguity, and boundaries are already explicit
- [ ] the plan is simple enough and avoids unnecessary expansion
- [ ] the change scope is controlled and touches only necessary areas
- [ ] the validation method is clear
- [ ] real-data / real-file / real-result requirements are satisfied, or the limitation is already stated

## Execution Steps

1. [step one]
2. [step two]
3. [step three]

## Validation Plan

- [ ] [validation item 1]
- [ ] [validation item 2]

## Completion Result

- Status: `[not_started | in_progress | completed | blocked | partial]`
- Result Summary: [fill this after completion]

## Risks and Follow-up

- [remaining risk; use `none` if there is none]
- [next recommended step; use `none` if there is none]

## Example

### Example: Fix Small Redemption Push Fields

- Summary: sync the formal spec first, then update push-field wording and validation wording
- Execution Steps:
  1. update the small-redemption push contract in the formal spec
  2. update the push-text generation logic
  3. verify that page, API, and push output now share the same wording
- Validation Plan:
  - [ ] push output no longer contains "small redemption yield"
  - [ ] push output now contains "total annualized yield"
- Completion Result:
  - Status: `completed`
  - Result Summary: the wording is now unified across all three surfaces
