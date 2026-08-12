<p align="center">
  <img src="./assets/antislop-banner.png" alt="antislop" width="100%" />
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-2ea44f?style=for-the-badge" alt="License: MIT"></a>
  <a href="https://github.com/miqdadbadjuber/anti-slop/releases"><img src="https://img.shields.io/github/v/release/miqdadbadjuber/anti-slop?label=version&style=for-the-badge&color=1f6feb" alt="Version"></a>
</p>

# antislop

> **Anti AI Slop: Design & Copy Rules.** Design rules to stop AI coding agents from generating generic UI ("AI slop") without becoming sterile. Includes 38 rules across three tiers, a Liveliness Toolkit, and a mandatory delivery gate.

> **Coming soon:** antislop v3.0.0, an installable skill/plugin for your agent CLI (Claude Code, Codex, Cursor, etc.). Target release: end of Q3 2026.

---

## What Is This?

`antislop.md` is a specialist rules document for UI/UX design work, designed to be **read on-demand** by AI coding agents, not force-loaded into every session regardless of the task. The file contains:

- **Part 1:** Warning signs of AI slop (generic blue-purple gradients, excessive glassmorphism, marketing buzzwords, etc.); a diagnostic scan, not a ban list
- **Part 2:** 38 mandatory rules (R-01 to R-38) grouped into three tiers: Hard Gate (absolute), Purpose-Gate (technique allowed, reason required), Quality Locks (consistency)
- **Part 3:** Liveliness Toolkit with three dials (ENERGY / RHYTHM / MOTION), positive levers, and a Design Read to set direction before generating
- **Craftsmanship Standard:** five preference-agnostic quality criteria (intentionality, functional completeness, content-driven composition, resilience, evidence over claims)
- **Functional Patterns:** concrete meanings of "a working button" for static landing pages
- **Checklist:** a mandatory Delivery Gate in four blocks (Hard / Purpose-Gate / Liveliness / Craftsmanship & Quality Locks) reported as a PASS/FAIL status with concrete evidence per item, run before delivering

> `antislop.md` is a **filter, not a style guide**. It does not impose an aesthetic: no prescribed colors, fonts, or layouts. It does not ban visual techniques; it rejects technique without purpose and requires liveliness (Part 3). Design preferences and brand direction are yours.
>
> `antislop.md` is the **filter** in a 3-file setup: `DESIGN.md` (yours) supplies direction and makes results feel alive, `AGENTS.md` (yours) routes the agent to read both. This file alone prevents slop but cannot invent direction; a sterile result means the direction was missing or liveliness was not added, not that the filter failed.

---

## Setup: The 3-File System

`antislop.md` works together with two files that you own:

```
Project root/
├── AGENTS.md (or CLAUDE.md, GEMINI.md, etc.)    # router: tells the agent what to read
├── DESIGN.md                                    # direction: the soul of your UI (yours)
└── antislop.md                                  # filter: this repo
```

- **`AGENTS.md`** (or `CLAUDE.md`, `GEMINI.md`, etc.) is the entry-point file the agent **always** reads at the start of a session. It routes the agent to the files it needs per task.
- **`DESIGN.md`** is your style direction: identity, personality, palette, typography, mood. It is what makes a result feel alive and specific. How you fill it is your business: write it yourself, or build it from visual references you find online, whatever matches your style and taste.
- **`antislop.md`** is the filter. It stops the slop patterns on top of whatever direction `DESIGN.md` sets. It cannot invent direction on its own; a sterile result means the direction was missing or liveliness was not added, not that the filter failed.

Keep `antislop.md` wherever your other rules files live (project root, `.agent/`, `.ai/`, etc.), and add a **single pointer block** to your entry-point file (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, etc.):

```md
## Design & UI
If the task involves building or editing UI/UX, read `DESIGN.md`
(style direction) then `antislop.md` (filter). Before starting,
ask the user when antislop applies (during the work, or after it
is done) and do not start until they answer.
```

Why this pattern beats merging everything in:

- **Saves context:** hundreds of lines of design rules only get loaded when actually relevant, instead of bloating every non-UI/backend task
- **Easier to maintain:** updating `antislop.md` or `DESIGN.md` never requires touching the project's entry-point file
- **Portable:** the same `antislop.md` can be reused across projects by just copying the file and adding one pointer block

### Direction and liveliness

`DESIGN.md` sets the direction; Part 3 of `antislop.md` sets the liveliness target. You can optionally include a dial line in `DESIGN.md`, for example `Dial: ENERGY 2 / RHYTHM 3 / MOTION 1`, and the agent will design to it. Without a dial line, the agent infers the dials from your brief and asks one question if the direction is ambiguous.

This pattern is **generic and tool-agnostic**. The pointer block above is a plain natural-language instruction that the agent executes using its own file-read tool, so it works identically in Claude Code, Codex, Cursor, Windsurf, or any other agent capable of reading a referenced file.

### Manual / one-off prompt

Don't want to set up any file? Copy the full contents of `antislop.md` and paste it at the start of your prompt before asking the agent to design something.

> **Warning:** This approach is less reliable than the 3-file setup. When a long block of rules is pasted into a chat rather than loaded as a native context file, agents are more likely to partially ignore or hallucinate past the instructions, especially as the conversation grows longer. Use it as a quick fallback, not a primary setup.

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

## How to Get the File

Download `antislop.md` directly from the command line:

```bash
curl -o antislop.md https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/main/antislop.md
```

Then place the file wherever your other agent rules files live. To use the 3-file setup, also create a `DESIGN.md` with your own style direction; its contents are entirely yours to define.

---

## File Structure

```
Project root/
├── AGENTS.md (or CLAUDE.md, GEMINI.md, etc.)    # router: yours
├── DESIGN.md                                    # direction: yours
└── antislop.md                                  # filter: from this repo

antislop.md internals:
├── What This Is               # a filter, part of a 3-file setup
├── Core Principle             # purpose test: technique without purpose is rejected
├── Craftsmanship Standard     # 5 quality criteria (C-1..C-5)
├── Part 1: Slop Patterns      # warning signs (diagnostic scan, not a ban list)
├── Part 2: Mandatory Rules    # R-01 to R-38, in 3 tiers (Hard / Purpose-Gate / Quality)
├── Part 3: Liveliness Toolkit # dials, levers, Design Read
├── Functional Patterns        # what "works" means for interactive elements
└── Delivery Gate              # mandatory PASS/FAIL report, 4 blocks
```

---

## Contributing

PRs are welcome for adding new AI slop patterns, clarifying ambiguous rules, or reporting checklist items that are out of sync with their corresponding rule.

---

## License

MIT: [LICENSE](LICENSE)
