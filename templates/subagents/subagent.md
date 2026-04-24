# [Subagent Name]

> Usage Rules:
> 1. One subagent should carry only one long-term responsibility.
> 2. The write boundary must be explicit. If the write boundary cannot be stated clearly, do not consolidate it into a template.
> 3. Keep the default length within 60 lines.
> 4. A single file must stay under 500 lines. If it approaches the limit, split it into multiple subagent templates.

**Type**: `[review | analysis | verification | research | transform | other]`  
**Status**: `[draft | active | paused]`  
**Usage Frequency**: `[rare | frequent | high-frequency]`  
**Mode**: `[read_only | write]`  
**Blocking Level**: `[blocking | sidecar]`

## Task Definition

- Core Responsibility: [one sentence that explains what it owns]
- Target Output: [what it must deliver]

## Good Use Cases

- [when it should be used]
- [typical task example]

## Poor Use Cases

- [when it should not be used]
- [when the main thread should do the work directly]

## Input

- Required Input: [documents, files, and context that must be read]
- Optional Input: [additional input if available]

## Output

- Output Format: [the required output structure]
- Required Content: [the findings, conclusions, change suggestions, or verification results that must be included]
- Failure Output: [what must be returned when it fails]

## Allowed Write Scope

- [allowed directories or files; use `none` for read-only mode]

## Forbidden Areas

- [what it must not modify]
- [what it must not process beyond its boundary]
- [what must not overlap with other subagents]

## Execution Steps

1. [what to read first]
2. [what to do next]
3. [what to deliver last]

## Verification Method

- [how to know the result is correct]
- [how to know it did not cross boundaries]

## Parallel Safety

- Parallel Allowed: `[yes | no]`
- Parallel Preconditions: [for example: read-only / no shared file writes / split write scope]
- Parallel Conflict Conditions: [when parallel execution must be avoided]

## Reuse Conditions

- [when this template should continue to be reused later]

## Example

### Example: Document Consistency Reviewer

- Type: `review`
- Mode: `read_only`
- Blocking Level: `sidecar`
- Core Responsibility: verify that spec, plan, and implementation remain aligned
- Input:
  - Required Input: relevant `specs/*.md`, the current mission, and the target code files
- Output:
  - Output Format: issue list
  - Required Content: inconsistencies, missing pieces, and risks
  - Failure Output: blocker reason
- Allowed Write Scope:
  - `none`
- Parallel Safety:
  - Parallel Allowed: `yes`
  - Parallel Preconditions: read-only
  - Parallel Conflict Conditions: `none`
