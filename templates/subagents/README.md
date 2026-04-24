# Subagent Templates

This directory is for reusable subagent templates.  
The goal is not to store every idea. The goal is to consolidate tasks that repeat, have clear boundaries, and can be verified independently.

## Good Candidates for Subagent Templates

- a task repeats at least 2 times
- inputs and outputs are already stable
- responsibility boundaries are clear
- correctness can be verified independently
- the task does not fight other subagents for the same write area

## Poor Candidates for Subagent Templates

- one-off tasks
- tasks so small that the main thread can do them faster
- broad tasks with blurry boundaries
- tasks that would rewrite across multiple responsibility areas at once

## Usage Rules

- Store template documents only. Do not store executable agent configurations here.
- Reuse `subagent.md` when adding a new subagent template.
- Existing subagent templates must not be modified. If the shape changes, add a new template or let the user update it.
- One template should carry one long-term responsibility only.
- Templates are reference material, not text that must be copied literally.
- A single template file must stay under 500 lines.

## Naming Suggestions

- Use lowercase English filenames with `-` between words.
- The name should describe responsibility directly. Avoid generic names like `helper`, `worker`, or `agent`.
- Prefer task-type names such as `doc-reviewer.md`, `spec-checker.md`, or `test-verifier.md`.

## Example

- `doc-reviewer.md`: read-only consistency review across spec / plan / implementation
- `test-verifier.md`: read-only check that verification steps and results are complete and credible
