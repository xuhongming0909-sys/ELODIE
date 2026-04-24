# Workflow Module Spec

## Goal

- Provide a stable, reusable AI workflow for this repository and for future projects that copy this template.

## User Value

- Humans can quickly find project truth and current state.
- AI can reliably decide what to read, what to update, and how to leave handoff records.

## In Scope

- `README.md`
- `AGENT.md`
- `MEMORY.md`
- `specs/`
- `missions/`
- `config/`
- `templates/`
- cleanup scripts

## Out of Scope

- source-code architecture
- technology-stack selection
- deployment strategy
- CI layout

## Input

- user requests
- formal requirements under `specs/`
- non-sensitive configuration from `config/config.yaml`
- recent project memory

## Core Rules

- `AGENT.md` contains only two top-level sections: `Workflow` and `Constitution`.
- Every non-chat task creates a mission with `spec.md` and `plan.md`.
- Mission folder names use `MMDD-short-name`.
- `missions/` keeps only the latest 30 missions.
- If a mission changes formal requirements, `specs/` must be updated before implementation.
- `AGENT.md` is immutable to AI and does not use a template.
- Existing templates are immutable to AI.
- Subagent templates live in `templates/subagents/`; AI may add new ones but may not modify existing ones.
- Templates are reference material, not mandatory literal text; AI should adapt them to the task.
- Any document generated inside this workflow must stay under 500 lines. If it approaches the limit, split or compress it.
- Subagent rules are split into two layers: `Constitution` defines long-term consolidation principles, while `Workflow` defines when to use subagents in a current task.
- Parallel subtasks, specialized verification, read-only exploration, and independent validation are good subagent candidates.
- Tiny tasks, blocking critical-path tasks, unclear tasks, or tasks that write into the same responsibility area should not use subagents.
- If a task type repeats at least twice and its input/output are stable, it should be consolidated into a reusable subagent template.
- Review is treated as a mission type rather than a separate file system.
- Non-code documentation in this repository should be written in English.
- `Constitution` uses clear numbered headings.
- `Constitution` contains generic architectural guidance: separated responsibilities, centralized shared capabilities, and clear boundaries.
- Think Before Coding, Simplicity First, Surgical Changes, and Goal-Driven Execution are inherited from the Codex global rules.

## Output

- a consistent project entrypoint
- a stable formal spec structure
- traceable recent task records
- rolling handoff memory

## Acceptance

- AI can follow the read order without ambiguity.
- Humans can quickly find the project overview and formal requirements.
- Missions can record task type, goal, steps, validation, results, and risks.
- Markdown must not contain real sensitive information.

## Open Questions

- The user may continue refining `AGENT.md` wording and the template catalog later.
