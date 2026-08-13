<p align="center">
  <img src="./assets/antislop-banner.png" alt="antislop" width="100%" />
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-2ea44f?style=for-the-badge" alt="License: MIT"></a>
  <a href="https://github.com/miqdadbadjuber/anti-slop/releases"><img src="https://img.shields.io/github/v/release/miqdadbadjuber/anti-slop?label=version&style=for-the-badge&color=1f6feb" alt="Version"></a>
</p>

# antislop

> **Anti AI Slop: Design & Copy Rules.** Design rules to stop AI coding agents from generating generic UI ("AI slop") without becoming sterile. Includes a mandatory rules core (R-01 to R-38), a Liveliness Toolkit, a delivery gate, and additive skills per concern.

> **Coming soon:** antislop v3.0.0, an installable skill/plugin for your agent CLI (Claude Code, Codex, Cursor, etc.). Target release: end of Q3 2026.

---

## What Is This?

`antislop.md` is a specialist rules document for UI/UX design work, designed to be **read on-demand** by AI coding agents, not force-loaded into every session regardless of the task.

antislop is a **family**: a lean, always-loaded **core** plus optional **skill files**, one per concern. The core holds everything you need to filter AI slop:

- **Part 1:** Warning signs of AI slop (generic blue-purple gradients, excessive glassmorphism, marketing buzzwords, etc.); a diagnostic scan, not a ban list
- **Part 2:** 38 mandatory rules (R-01 to R-38) grouped into three tiers: Hard Gate (absolute), Purpose-Gate (technique allowed, reason required), Quality Locks (consistency)
- **Part 3:** Liveliness Toolkit with three dials (ENERGY / RHYTHM / MOTION), positive levers, and a Design Read to set direction before generating
- **Craftsmanship Standard:** five preference-agnostic quality criteria (intentionality, functional completeness, content-driven composition, resilience, evidence over claims)
- **Functional Patterns:** concrete meanings of "a working button" for static landing pages
- **Delivery Gate:** a mandatory PASS/FAIL report in four blocks, run before delivering

Skills are **additive files** that go deeper into one concern and reference the core rules, never duplicating them. The first skill, `antislop-ui`, ships in v2.2.0; more follow one per version. See [ROADMAP.md](ROADMAP.md).

> `antislop.md` is a **filter, not a style guide**. It does not impose an aesthetic: no prescribed colors, fonts, or layouts. It does not ban visual techniques; it rejects technique without purpose and requires liveliness (Part 3). Design preferences and brand direction are yours.
>
> `antislop.md` is the **filter** in a 3-file setup: `DESIGN.md` (yours) supplies direction, the entry file (`AGENTS.md` / `CLAUDE.md` / etc.) routes the agent, `antislop.md` filters. This file alone prevents slop but cannot invent direction; a sterile result means the direction was missing or liveliness was not added, not that the filter failed.

---

## Install: The Easy Way (Wizard)

Download the core once, then let your agent do the rest.

**1. Download `antislop.md`** and place it in your project, level with your other agent files:

```bash
curl -o antislop.md https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/main/antislop.md
```

**2. Tell your agent to read it** (one time):

> "Read `antislop.md` and follow its install instructions. I want the UI skill."

For a permanent setup that works every session, instead add one line to your entry file (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, etc.): "For UI/design work, read `antislop.md`."

**3. Let the wizard run.** On first read, `antislop.md` walks the agent through:

- Choosing which skills to install (multi-select; "All" is recommended). Say "core only" to skip skills entirely and use `antislop.md` alone.
- Downloading the chosen skill files into the same folder as `antislop.md`.
- Appending a managed antislop pointer block at the end of your entry file, never modifying your existing content.
- Asking which usage mode you want (During or After).

That's it. The pointer block is the source of truth: every later session loads `antislop.md` plus only the skills you installed. To add or remove a skill later, say so and the pointer updates.

> The wizard needs download and file-write access once (you approve). The entry file is read at the start of a session, so a freshly written pointer takes effect from the next session. You can skip the wizard at any time and use `antislop.md` alone as a complete filter.

---

## Install: Manual (The 3-File System)

Prefer to set things up yourself? The manual path is the same as always:

```
Project root/
├── AGENTS.md (or CLAUDE.md, GEMINI.md, etc.)    # router: tells the agent what to read
├── DESIGN.md                                    # direction: the soul of your UI (yours)
└── antislop.md + the skill files you want       # filter: from this repo
```

- **Entry file** (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, etc.) is what the agent always reads at the start of a session. It routes the agent to the files it needs per task.
- **`DESIGN.md`** is your style direction: identity, personality, palette, typography, mood. It is what makes a result feel alive and specific. How you fill it is your business: write it yourself, or build it from visual references you like.
- **`antislop.md`** is the filter. It stops slop on top of whatever direction `DESIGN.md` sets.

Get the files:

```bash
curl -o antislop.md https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/main/antislop.md
curl -o antislop-ui.md https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/main/antislop-ui.md
```

Add a pointer block to your entry file, listing exactly the skills you installed:

```md
## antislop
For UI/design work, read `antislop.md` (core) and then the skill for the task:
- UI / visual: `antislop-ui.md`
Before starting, ask the user when antislop applies: during the work, or after it is done.
```

Why this pattern beats merging everything in:

- **Saves context:** hundreds of lines of design rules only get loaded when actually relevant, instead of bloating every non-UI/backend task
- **Easier to maintain:** updating the core or a skill never requires touching your project's entry file
- **Portable:** reuse the same setup across projects by copying the files and adding one pointer block

### Direction and liveliness

`DESIGN.md` sets the direction; Part 3 of `antislop.md` sets the liveliness target. You can optionally include a dial line in `DESIGN.md`, for example `Dial: ENERGY 2 / RHYTHM 3 / MOTION 1`, and the agent will design to it. Without a dial line, the agent infers the dials from your brief and asks one question if the direction is ambiguous.

If you have no `DESIGN.md`, antislop handles it honestly (R-37): the agent recommends having direction, and any output built without it is labeled *"draft without direction"* rather than passed off as a deliverable.

### Manual / one-off prompt

Don't want to set up any file? Copy the full contents of `antislop.md` and paste it at the start of your prompt before asking the agent to design something.

> **Warning:** This approach is less reliable than the file setup. When a long block of rules is pasted into a chat rather than loaded as a native context file, agents are more likely to partially ignore or hallucinate past the instructions, especially as the conversation grows longer. Use it as a quick fallback, not a primary setup.

---

## Usage Modes

antislop is used in one of two ways, chosen by the user at the start of a session. When `antislop.md` (or the `AGENTS.md` pointer) loads, the agent asks which mode applies, in the user's chat language, and waits for an answer before doing UI work.

- **Mode 1 (During):** the rules guide the work while the project is being planned and built. This prevents AI slop from the start and ends with the Delivery Gate. Use it when building new UI.
- **Mode 2 (After):** the rules audit a project that is already finished. The agent produces a numbered findings list (violated rule + reason + priority), the user approves specific numbers, only the approved items are fixed, and a follow-up report records the changes. Use it to clean up existing output.

The question the agent asks:

> **When do you want to use antislop?**
> 1. **DURING** the project, while working (planning & execution).
> 2. **AFTER** the project is finished.
>
> Which one, 1 or 2?

---

## The Skills (antislop family)

Each skill is optional and additive: install only the ones you need, or "All" for everything. One skill ships per version.

| Skill | Concern | Ships in |
|-------|---------|----------|
| `antislop-ui` | UI / visual: layout, color, components, decoration, motion, structure | v2.2.0 |
| `antislop-copywriting` | Copy and text: headlines, CTAs, tone, fake stats, markdown hygiene | v2.3.0 (planned) |
| `antislop-a11y` | Accessibility: contrast, keyboard, focus states | v2.4.0 (planned) |
| `antislop-docs` | Documentation: READMEs, API references, changelogs, tutorials | v2.5.0 (planned) |
| `antislop-identity` | Identity and naming: product names, taglines, brand voice | v2.6.0 (planned) |

---

## File Structure

```
Project root/
├── AGENTS.md (or CLAUDE.md, GEMINI.md, etc.)    # router: yours (wizard-managed or manual)
├── DESIGN.md                                    # direction: yours
├── antislop.md                                  # core filter: from this repo
├── antislop-ui.md                               # skill: from this repo (v2.2.0)
└── ...                                          # other skills you install

antislop.md internals:
├── First-Run Install Wizard   # one-time setup: pick skills, download, set pointer
├── What This Is               # a filter, part of the core + skills family
├── Core Principle             # purpose test: technique without purpose is rejected
├── Craftsmanship Standard     # 5 quality criteria (C-1..C-5)
├── Part 1: Slop Patterns      # warning signs (diagnostic scan, not a ban list)
├── Part 2: Mandatory Rules    # R-01 to R-38, in 3 tiers (Hard / Purpose-Gate / Quality)
├── Part 3: Liveliness Toolkit # dials, levers, Design Read
├── Functional Patterns        # what "works" means for interactive elements
└── Delivery Gate              # mandatory PASS/FAIL report, 4 blocks
```

---

## Roadmap

antislop is heading to **v3.0.0**: the whole family packaged as an installable skill/plugin for any agent CLI (Claude Code, Codex, Cursor, etc.), with a `/antislop` router. One skill ships per version until then. See [ROADMAP.md](ROADMAP.md).

---

## Contributing

PRs are welcome for adding new AI slop patterns, clarifying ambiguous rules, or reporting checklist items that are out of sync with their corresponding rule.

---

## License

MIT: [LICENSE](LICENSE)
