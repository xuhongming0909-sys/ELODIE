# MEMORY.md

> Usage Rules:
> 1. A single file must stay under 500 lines.
> 2. When approaching the limit, remove older entries instead of letting the file grow longer.

Keep only the latest 50 entries.  
Keep each entry short and useful for handoff.  
Do not paste full conversations. Keep only conclusions, actions, validation, risks, and next steps.

## YYYY-MM-DD HH:MM - [Title]

- Type: `decision | action | verification | risk | handoff`
- Background: [what happened]
- Conclusion: [the final decision or fact]
- AI Action: [what AI did]
- Verification: [how it was checked and what happened]
- Risk: [remaining issue; write `none` if there is none]
- Next Step: [what should happen next; write `none` if there is none]

## Example

## 2026-04-25 10:30 - Small Redemption Formula Unified

- Type: `decision`
- Background: the page, API, and push output had drifted into different annualized-yield formulas
- Conclusion: unify everything to the formula defined in the formal spec
- AI Action: updated the module spec and the mission plan together
- Verification: manually checked that page fields, API fields, and push field names matched
- Risk: older documents may still contain outdated wording
- Next Step: verify related sub-specs before implementation starts
