# ELODIE SKILL

| Language | Link |
| --- | --- |
| English | [Open English](#english) |
| 中文 | [打开中文](#chinese) |

| Item | Value |
| --- | --- |
| Name | `ELODIE SKILL` |
| npm package | `elodie-skill` |
| CLI command | `elodie` |
| Skill name | `elodie-skill` |
| Positioning | A workflow toolkit for AI coding agents |
| Core value | Help non-coders guide AI development with clear rules, specs, and task closure |
| Works with | Codex, Claude |
| Main action | `init` |

| What ELODIE SKILL solves | How it solves it |
| --- | --- |
| AI forgets requirements across sessions | `AGENT.md` / `CLAUDE.md` define stable rules |
| Specs drift across pages, APIs, and formulas | `specs/` keeps formal project truth |
| Tasks start but do not close cleanly | `missions/` creates task-level closure |
| Context is trapped in chat history | `MEMORY.md` stores short handoff memory |
| Repeated subagent work becomes messy | `templates/subagents/` keeps reusable boundaries |

| Important note | Status |
| --- | --- |
| `npx elodie ...` from npm | Not available yet because the package is not published to npm |
| `init` capability | Works locally right now |
| Recommended current usage | Run from the repo itself or install the repo locally |
| Skill install for Codex / Claude | Works locally right now |

## Quick Start

| Goal | Command |
| --- | --- |
| Run directly from this repo | `node ./bin/elodie.js init . --assistant codex` |
| Install this repo locally as a global command | `npm install -g .` |
| Then use the command | `elodie init . --assistant codex` |
| Install into another target directory | `elodie init C:\\path\\to\\project --assistant claude` |
| Install the ELODIE SKILL into Codex | `powershell -ExecutionPolicy Bypass -File .\\scripts\\install-skill.ps1 codex` |
| Install the ELODIE SKILL into Claude | `powershell -ExecutionPolicy Bypass -File .\\scripts\\install-skill.ps1 claude` |

| `init` creates | Purpose |
| --- | --- |
| `AGENT.md` or `CLAUDE.md` | Stable assistant rules |
| `MEMORY.md` | Recent handoff memory |
| `config/` | Shared config and secrets placeholder |
| `missions/` | Short-lived task closure |
| `scripts/` | Maintenance helpers |
| `specs/` | Formal project and module specs |
| `templates/` | Reference templates and examples |

| Skill package | Location |
| --- | --- |
| Shared skill | `skills/elodie-skill/` |
| Codex install target | `%USERPROFILE%\\.codex\\skills\\elodie-skill` |
| Claude install target | `%USERPROFILE%\\.claude\\skills\\elodie-skill` |

---

<a id="english"></a>

## English

### One-line Summary

ELODIE SKILL helps non-coders guide AI coding agents through a clear, reusable workflow.

### What It Is

| Question | Answer |
| --- | --- |
| Is it a prompt pack? | No |
| Is it an app scaffold? | No |
| Is it a workflow layer for AI-built projects? | Yes |
| Is it designed for non-coders? | Yes |

### Core Structure

| Path | Role |
| --- | --- |
| `AGENT.md` / `CLAUDE.md` | Long-term assistant rules |
| `specs/spec.md` | Project-level map and index |
| `specs/*.md` | Detailed formal specs |
| `missions/<name>/spec.md` | Task scope |
| `missions/<name>/plan.md` | Task steps, validation, results, risks |
| `MEMORY.md` | Short handoff memory |
| `config/config.yaml` | Non-sensitive config |
| `config/secrets.yaml` | Sensitive local values |
| `templates/` | Reference templates |

### Why It Fits Complex Projects

| Need | ELODIE SKILL support |
| --- | --- |
| API definitions | Supported in specs |
| Formula definitions | Supported in specs |
| Field definitions | Supported in specs |
| Filter rules | Supported in specs |
| Output rules | Supported in specs |
| Acceptance rules | Supported in specs |

### Current CLI Reality

| Command | Works now | Notes |
| --- | --- | --- |
| `node ./bin/elodie.js init . --assistant codex` | Yes | Works inside this repo |
| `npm install -g .` then `elodie init . --assistant codex` | Yes | Best current experience |
| `npx elodie init . --assistant codex` | No | Not until the package is published to npm |
| `powershell -ExecutionPolicy Bypass -File .\scripts\install-skill.ps1 codex` | Yes | Installs the ELODIE SKILL into Codex |
| `powershell -ExecutionPolicy Bypass -File .\scripts\install-skill.ps1 claude` | Yes | Installs the ELODIE SKILL into Claude |

### Recommended Usage

#### Option 1: use immediately from the repo

```bash
node ./bin/elodie.js init . --assistant codex
```

#### Option 2: install the repo locally, then use `elodie`

```bash
npm install -g .
elodie init . --assistant codex
```

#### Option 3: install into another project path

```bash
elodie init C:\path\to\project --assistant claude
```

#### Option 4: install the skill into Codex or Claude

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install-skill.ps1 codex
powershell -ExecutionPolicy Bypass -File .\scripts\install-skill.ps1 claude
```

### Who It Is For

| Good fit | Bad fit |
| --- | --- |
| Non-coders who still want control | People who want pure chat-only improvisation |
| Teams switching across Codex and Claude | One-off throwaway scripts |
| Projects with formulas, APIs, rules, and outputs | Work that does not need structure or handoff |

### Promise

| Focus | Result |
| --- | --- |
| Clear rules | Less AI drift |
| Formal specs | Better requirement consistency |
| Task closure | Better execution trace |
| Reusable templates | Better repeatability |

---

<a id="chinese"></a>

## 中文

### 一句话

`ELODIE SKILL` 是一套给 AI 写代码使用的工作流，让不会写代码的人也能更清楚地控制项目。

### 它是什么

| 问题 | 回答 |
| --- | --- |
| 它是提示词包吗 | 不是 |
| 它是脚手架吗 | 不是 |
| 它是给 AI 项目的工作流层吗 | 是 |
| 它适合不懂代码的人吗 | 是 |

### 核心结构

| 路径 | 作用 |
| --- | --- |
| `AGENT.md` / `CLAUDE.md` | AI 长期规则 |
| `specs/spec.md` | 项目总览和索引 |
| `specs/*.md` | 详细正式需求 |
| `missions/<name>/spec.md` | 当前任务范围 |
| `missions/<name>/plan.md` | 当前任务步骤、验证、结果、风险 |
| `MEMORY.md` | 最近交接记忆 |
| `config/config.yaml` | 非敏感配置 |
| `config/secrets.yaml` | 敏感本地配置 |
| `templates/` | 模板与案例 |

### 它为什么适合复杂项目

| 需求类型 | ELODIE SKILL 是否支持 |
| --- | --- |
| API 定义 | 支持 |
| 公式定义 | 支持 |
| 字段定义 | 支持 |
| 筛选规则 | 支持 |
| 输出规则 | 支持 |
| 验收标准 | 支持 |

### 当前 CLI 真实情况

| 命令 | 现在能不能用 | 说明 |
| --- | --- | --- |
| `node ./bin/elodie.js init . --assistant codex` | 能 | 在仓库里直接运行 |
| `npm install -g .` 后执行 `elodie init . --assistant codex` | 能 | 当前最好用 |
| `npx elodie init . --assistant codex` | 不能 | 因为还没发布到 npm |
| `powershell -ExecutionPolicy Bypass -File .\scripts\install-skill.ps1 codex` | 能 | 安装到 Codex 技能目录 |
| `powershell -ExecutionPolicy Bypass -File .\scripts\install-skill.ps1 claude` | 能 | 安装到 Claude 技能目录 |

### 推荐用法

#### 方案 1：直接在仓库里运行

```bash
node ./bin/elodie.js init . --assistant codex
```

#### 方案 2：先本地安装，再用 `elodie`

```bash
npm install -g .
elodie init . --assistant codex
```

#### 方案 3：装入其他项目目录

```bash
elodie init C:\path\to\project --assistant claude
```

#### 方案 4：把技能安装到 Codex 或 Claude

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install-skill.ps1 codex
powershell -ExecutionPolicy Bypass -File .\scripts\install-skill.ps1 claude
```

### 适合谁

| 适合 | 不适合 |
| --- | --- |
| 不懂代码但想掌控项目的人 | 只想让 AI 靠聊天自由发挥的人 |
| 需要在 Codex 和 Claude 之间切换的团队 | 一次性小脚本 |
| 需求里有公式、接口、规则、输出定义的项目 | 不需要结构和交接的任务 |

### 核心价值

| 重点 | 结果 |
| --- | --- |
| 规则清晰 | 更少偏航 |
| spec 正式化 | 需求更一致 |
| 任务闭环 | 执行更可追踪 |
| 模板复用 | 更容易复制到别的项目 |
