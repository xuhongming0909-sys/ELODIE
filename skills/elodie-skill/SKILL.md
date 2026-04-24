---
name: elodie-skill
description: Initialize the ELODIE SKILL workflow in a project. Use when the user wants to set up AI project rules, specs, missions, memory, and templates for Codex or Claude in a code repository.
---

# ELODIE SKILL

Use this skill when a user wants to install the ELODIE SKILL workflow into a project.

## What this skill does

- Adds the ELODIE SKILL workflow files to a target project
- Generates `AGENT.md` for Codex projects
- Generates `CLAUDE.md` for Claude projects
- Copies `specs/`, `missions/`, `config/`, `templates/`, `scripts/`, and `MEMORY.md`
- Merges `.gitignore` with the ELODIE SKILL secrets rule

## When to use

- The user says they want to initialize a new AI coding workflow
- The user wants to add ELODIE SKILL into an existing repository
- The user wants Codex or Claude to start from stable rules instead of chat-only context

## Invocation

Choose the assistant mode first:

- Codex: `codex`
- Claude: `claude`

Then run one of these from the ELODIE SKILL repository root:

```bash
node ./bin/elodie.js init . --assistant codex
```

or

```bash
node ./bin/elodie.js init . --assistant claude
```

To target another directory:

```bash
node ./bin/elodie.js init C:\path\to\project --assistant codex
```

If ELODIE SKILL is installed globally:

```bash
elodie init . --assistant codex
```

## Expected result

The target project should contain:

- `AGENT.md` or `CLAUDE.md`
- `MEMORY.md`
- `config/`
- `missions/`
- `scripts/`
- `specs/`
- `templates/`

## Validation

After running the command, verify that:

1. the assistant rules file exists
2. `specs/spec.md` exists
3. `missions/` exists
4. `.gitignore` contains `config/secrets.yaml`

## Boundaries

- Do not overwrite target files unless the user explicitly asks to use `--force`
- Do not claim npm `npx elodie ...` works unless the package has actually been published
- Prefer local repo execution or local global install when npm publication is not available
