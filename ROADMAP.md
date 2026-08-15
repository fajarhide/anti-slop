# antislop: Roadmap to v3.0.0

> How antislop grows from a single rules file into an installable, cross-agent skill/plugin. New to antislop? Read the [guide](guide.md) first. See [README.md](README.md) for the product.

## Where we are

The latest release is **v2.4.2**. antislop is now a **system**: a lean, always-loaded **core** (`antislop.md`, the complete rules filter, unchanged and backward compatible) plus three **skills**: `antislop-ui` (UI / visual), `antislop-copywriting` (copy & text), and `antislop-human` (human / accessibility). v2.4.2 fixes the skill checklists' polarity so every verdict reads correctly (issue #9) and tidies the docs (PR #8), both merged from [@fajarhide](https://github.com/fajarhide).

The **First-Run Install Wizard** is still the install path: download `antislop.md` once, tell your agent to read it, and the agent walks you through choosing skills, downloads them into the same folder, and sets up the pointer for you. It is an offer, not a requirement: `antislop.md` alone remains a complete filter.

The core still contains 38 rules across three tiers (Hard Gate, Purpose-Gate, Quality Locks), a Liveliness Toolkit, a mandatory Delivery Gate, and the two usage modes (During / After). None of that changed.

## Where we are going

antislop grows toward v3.0.0 by adding one concern per version, each as a separate **skill**. The core stays lean; skills stay additive. Versioning follows a simple rule:

> Each +0.1 version ships exactly one new skill.

This keeps the filter pull-only-what-you-need, and it makes the v3 packaging mechanical rather than a rewrite. Occasional +0.1 patches ship something that is not a skill, like v2.4.1's plain-English `guide.md`; those do not change the skill plan.

### The skill plan

| Version | Skill | Concern |
|---------|-------|---------|
| v2.2.0 | `antislop-ui` | UI / visual: layout, color, components, decoration, motion, structure |
| v2.3.0 | `antislop-copywriting` | Copy and text: headlines, CTAs, tone, fake stats, markdown hygiene |
| v2.4.0 | `antislop-human` | Human: contrast, keyboard, focus, states (home of the contrast checker) |
| v2.5.0 | `antislop-layoutmobile` | Mobile layout: responsive breakpoints, grids, overflow, tap targets |
| v2.6.0 | `antislop-docs` | Documentation: READMEs, API references, changelogs, tutorials |
| v2.7.0 | `antislop-identity` | Identity and naming: product names, taglines, brand voice |

### v3.0.0: the skill/plugin

- One `SKILL.md` per skill (open Agent Skills standard)
- A `/antislop` router command that loads only the skill the task needs
- Placement for Claude Code, Codex CLI, Antigravity CLI, Gemini CLI, and Cursor
- An optional MCP server for mechanical checks (e.g. contrast)

Target release: end of Q3 2026.

## Status

- [x] v2.1.0 - usage modes (During / After) and v3.0.0 banner
- [x] v2.1.1 - English only; Indonesian mirrors removed
- [x] v2.2.0 - core + First-Run Install Wizard + `antislop-ui` skill
- [x] v2.3.0 - `antislop-copywriting` skill
- [x] v2.4.0 - `antislop-human`
- [x] v2.4.1 - `guide.md`: plain-English guide for people new to antislop (not a skill); fixes for issues #1, #2, #3, #6, #7
- [ ] v2.4.2 - skill checklist polarity fix (#9) and docs cleanup, merged from PRs #8 and #10
- [ ] v2.5.0 - `antislop-layoutmobile`
- [ ] v2.6.0 - `antislop-docs`
- [ ] v2.7.0 - `antislop-identity`
- [ ] v3.0.0 - skill/plugin packaging

## Not in scope

antislop stays a **filter, not a style guide**: no prescribed aesthetics, no per-framework recipes, no trend bans. It never beautifies on its own; direction and beauty are yours, in `DESIGN.md`. It is not limited to building pages: the same filter writes and audits copy (`antislop-copywriting`). UX and motion are folded into `antislop-ui` rather than separate skills, and data-integrity rules already live in the core.
