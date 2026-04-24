# Project Spec

## Goal

- Maintain a compact, reusable AI-assisted development workflow in this repository.
- Keep formal requirements, recent task records, templates, and configuration in clear, separate places.

## Current Stage

- The workflow scaffold has been initialized.
- No business source-code structure is enforced.
- There are no business-module specs yet beyond the workflow module.

## Module Map

| Module | Role | Source of Truth |
| --- | --- | --- |
| Workflow Rules | Stable AI behavior and read order | assistant rules file (`AGENT.md` or `CLAUDE.md`) |
| Human Entry | Project introduction and navigation | `README.md` |
| Project Spec | Project map and formal spec index | `specs/spec.md` |
| Sub Specs | Long-lived detailed requirements | `specs/*.md` |
| Mission Records | Recent non-chat AI task records | `missions/` |
| Rolling Memory | Recent decisions and handoff context | `MEMORY.md` |
| Non-sensitive Config | Reusable real configuration | `config/config.yaml` |
| Sensitive Config | Local secrets | `config/secrets.yaml` |
| Templates | User-maintained template source | `templates/` |

## Global Rules

- AI reads the assistant rules file, then `README.md`, then this file, then relevant sub-specs.
- Every non-chat AI task creates a mission under `missions/`.
- If a task changes formal requirements, formal specs must be updated before implementation.
- Existing templates and the assistant rules file are immutable to AI.
- This workflow does not define a source-code directory structure.
- Secrets may only exist in `config/secrets.yaml`.
- Non-code documentation in this repository should be written in English.

## Sub Spec Index

- `workflow.md`: detailed workflow requirements
- Future business modules should be added to `specs/*.md` as needed

## Acceptance

- A new AI can enter the project by following the defined read order.
- Formal specs and short-term mission records stay separated.
- `missions/` keeps at most 30 directories.
- `MEMORY.md` keeps at most 50 entries.
- Markdown does not contain real sensitive information.
