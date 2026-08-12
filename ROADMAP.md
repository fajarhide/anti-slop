# antislop: Roadmap to v3.0.0

> How antislop grows from a single rules file into an installable, cross-agent skill/plugin. See [README.md](README.md) for the product itself.

## Where we are

The latest release is **v2.1.x**. `antislop.md` is a single-file filter for AI agents that design UI. It contains 38 rules across three tiers (Hard Gate, Purpose-Gate, Quality Locks), a Liveliness Toolkit, and a mandatory Delivery Gate. Two usage modes: During (rules guide the build) and After (rules audit finished output).

## Where we are going

antislop becomes a family: a lean, always-loaded **core** (the current rules, unchanged and backward compatible) plus **additive skills**, each covering one concern. Versioning follows a simple rule:

> Each +0.1 version ships exactly one new skill.

This keeps the filter pull-only-what-you-need, and it makes the v3 packaging mechanical rather than a rewrite.

### The skill plan

| Version | Skill | Concern |
|---------|-------|---------|
| v2.2.0 | `antislop-ui` | UI / visual: layout, color, components, motion slop, structural patterns |
| v2.3.0 | `antislop-copywriting` | Copywriting and text: headlines, CTAs, tone, fake stats, markdown hygiene |
| v2.4.0 | `antislop-a11y` | Accessibility: contrast, keyboard, focus states (home of the contrast checker) |
| v2.5.0 | `antislop-docs` | Documentation: READMEs, API references, changelogs, tutorials |
| v2.6.0 | `antislop-identity` | Identity and naming: product names, taglines, brand voice |

### v3.0.0: the skill/plugin

- One `SKILL.md` per skill (open Agent Skills standard)
- A `/antislop` router command that loads only the skill the task needs
- Placement for Claude Code, Codex CLI, Antigravity CLI, Gemini CLI, and Cursor
- An optional MCP server for mechanical checks (e.g. contrast)

Target release: end of Q3 2026.

## Status

- [x] v2.1.0 - usage modes (During / After) and v3.0.0 banner
- [x] v2.1.1 - English only; Indonesian mirrors removed
- [ ] v2.2.0 - core split + `antislop-ui` (next)
- [ ] v2.3.0 - `antislop-copywriting`
- [ ] v2.4.0 - `antislop-a11y`
- [ ] v2.5.0 - `antislop-docs`
- [ ] v2.6.0 - `antislop-identity`
- [ ] v3.0.0 - skill/plugin packaging

## Not in scope

antislop stays a **filter, not a style guide**: no prescribed aesthetics, no per-framework recipes, no trend bans. UX and motion are folded into `antislop-ui` rather than separate skills, and data-integrity rules already live in the core.
