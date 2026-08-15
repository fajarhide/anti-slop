<p align="center">
  <img src="./assets/antislop-banner.png" alt="antislop" width="100%" />
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-2ea44f?style=for-the-badge" alt="License: MIT"></a>
  <a href="https://github.com/miqdadbadjuber/anti-slop/releases"><img src="https://img.shields.io/github/v/release/miqdadbadjuber/anti-slop?label=version&style=for-the-badge&color=1f6feb" alt="Version"></a>
  <a href="https://skills.sh/miqdadbadjuber/anti-slop"><img src="https://skills.sh/b/miqdadbadjuber/anti-slop" alt="skills.sh"></a>
</p>

# antislop

> **Anti AI Slop: Design & Copy Rules.** A rules file for AI coding agents. It stops them from generating generic "AI slop" UI and copy, without letting the result turn sterile. It is a **filter, not a style guide**: no prescribed colors, fonts, or layouts. It is not only for building pages: it also writes and audits copy, so AI text stops reading like AI. And it never beautifies on its own; `DESIGN.md` (yours) is where beauty and direction come from.

> **New here? Start with the [guide](guide.md).** It explains what antislop is and how to install it, from zero.

## What it does

- **38 mandatory rules** (R-01 to R-38) in three tiers: Hard Gate (absolute), Purpose-Gate (technique allowed, reason required), Quality Locks (consistency)
- **A Liveliness Toolkit** with three dials (ENERGY / RHYTHM / MOTION) and a Design Read, so the result is alive and specific, not just "clean"
- **A Delivery Gate**: a mandatory PASS/FAIL report in four blocks, run before anything ships
- **Additive skills**, one per concern, so an agent only loads what a task needs

The core prevents slop but cannot invent direction. `DESIGN.md` (yours) supplies it; a sterile result means the direction was missing, not that the filter failed (R-37).

## Install

antislop is a set of **standard agent skills** (one folder per skill, `SKILL.md`) you can install as a package. The core is always loaded; the skills load only for the task at hand. Pick one of these three paths.

**1. The picker (recommended).** One command, then choose. It shows the antislop banner, lists the skills with the core locked on, and asks for project or global:

```bash
npx antislop-ai
```

**2. The skills directory.** antislop is listed on [skills.sh](https://skills.sh/miqdadbadjuber/anti-slop), the open directory for agent skills:

```bash
npx skills add miqdadbadjuber/anti-slop
```

Add `--all` for every skill, `-g` for a global install, or `--skill <name>` for a single one. Run `--list` first to see what is available.

skills.sh reads the skill folders straight from this repository, so the listing appears as soon as the repo is live; there is no separate setup step.

**3. The plugin (Claude Code).** Add the marketplace once, then install the plugin:

```text
/plugin marketplace add https://github.com/miqdadbadjuber/anti-slop
/plugin install antislop@anti-slop
```

Every skill is a folder of the open Agent Skills standard (`<name>/SKILL.md`), so it drops into Claude Code (`.claude/skills/`), Codex, Antigravity, and any other agent that reads the standard.

**Manual (single file, no packaging).** The core `antislop.md` alone remains a complete filter you can paste into any chat window. Download it and tell your agent to read it; the First-Run wizard inside it installs skills the manual way:

```bash
curl -o antislop.md https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/main/antislop.md
```

## Skills

| Skill | What it covers | Ships in |
|-------|----------------|----------|
| `antislop` | The core filter: rules, tiers, Delivery Gate, liveliness | v3.0.0 |
| `antislop-ui` | UI / visual: layout, color, components, decoration, motion, structure | v2.2.0 |
| `antislop-copywriting` | Copy & text: headlines, CTAs, tone, fake stats, anti-AI-writing patterns, markdown hygiene | v2.3.0 |
| `antislop-human` | Human: contrast (with the checker), keyboard, focus, states | v2.4.0 |
| `antislop-layoutmobile` | Mobile layout: responsive breakpoints, grids, overflow, tap targets, navigation | v2.5.0 |

Pick what matches the work: UI work → `antislop-ui`, copy work → `antislop-copywriting`, people work → `antislop-human`, mobile layout work → `antislop-layoutmobile`, more than one → install several, or none (the core alone is a complete filter).

## Usage Modes

antislop is used one of two ways, chosen at the start of a session:

- **During** guides the work while it is built, ending with the Delivery Gate. Use it when building new UI.
- **After** audits finished work: a numbered findings list, you approve which to fix, then a follow-up report. Use it to clean up existing output.

## Roadmap

**v3.0.0 shipped**: antislop is packaged as installable skills. See [ROADMAP.md](ROADMAP.md). The skill plan that built toward it (one skill per version) is complete; `antislop-docs` and `antislop-identity` are candidates for after v3.

## FAQ

**Is antislop a style guide?**
No, a filter. It does not prescribe colors, fonts, or layouts. It rejects technique without purpose and requires liveliness; direction is yours.

**Which agents does it work with?**
Any agent that reads plain Markdown: Claude Code, Codex, Cursor, Gemini CLI, and others. The packaged install uses the open Agent Skills standard (folder per skill), so skills drop into any tool that reads it. The single-file `antislop.md` still works everywhere else.

**What is a "skill"?**
A folder that goes deeper into one concern (UI, copywriting, accessibility, and so on), holding a `SKILL.md` with its rules. It references the core rules by number and never duplicates them, so adding a skill does not change the core.

**What are DURING and AFTER?**
The two usage modes: DURING applies the rules while building, AFTER audits finished work. You pick one at the start of a session.

## Contributing

PRs are welcome for new AI slop patterns, clarifications, or checklist items out of sync with their rule.

## License

MIT: [LICENSE](LICENSE)
