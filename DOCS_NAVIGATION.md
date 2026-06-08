# Documentation Navigation

This document defines the recommended reading path for `sito-documentazione-microbot`.

The purpose is to make the MicroBot documentation understandable to an external viewer without forcing them to read every internal file, PDF, archive inventory or technical note.

## Navigation Goal

A good public documentation site should answer:

1. What is MicroBot?
2. What exists now?
3. What is still planned?
4. What is simulated?
5. What is hardware-ready?
6. What has real evidence?
7. Where should I go next?

## Recommended First Reading Path

| Order | Page/File | Purpose |
|---:|---|---|
| 1 | `README.md` | Basic repository identity and public-site purpose. |
| 2 | `CURRENT_STATUS.md` | Real current status and publication warning. |
| 3 | `KNOWN_LIMITATIONS.md` | Privacy, content, redistribution and claim boundaries. |
| 4 | `PUBLICATION_CHECKLIST.md` | Review criteria for public content. |
| 5 | `DOCS_NAVIGATION.md` | This navigation file. |
| 6 | Main site homepage | Public-facing entry point. |
| 7 | MicroBot overview page | Simple explanation of the project. |
| 8 | Architecture page | System structure and repositories. |
| 9 | Simulation page | Links to simulation concepts and `Microbot-Simulation-Core`. |
| 10 | Hardware path page | Links to `microbot-labs` and future hardware evidence. |
| 11 | Presentation page | Links to `microbot-presentation-lab`. |
| 12 | References page | Bibliography and external references without unsafe redistribution. |

## Public Viewer Path

For someone who has never seen MicroBot, the site should follow this path:

```text
Overview -> Architecture -> Current Status -> Simulation -> Hardware Roadmap -> Evidence -> Related Repositories
```

The first experience should not be:

```text
Huge archive inventory -> raw PDFs -> unexplained internal files
```

## Repository Relationship Map

| Related repository | What it provides |
|---|---|
| `github-ecosystem-atlas` | Maturity map and repository inventory. |
| `microbot-labs` | Main technical/hardware-readiness lab. |
| `Microbot-Simulation-Core` | Computational simulation baseline. |
| `MICROBOT-ULTRA-WEBSITE` | Visual web-demo layer. |
| `microbot-presentation-lab` | Pitch, demo narration and audience-specific explanations. |
| `primoPrototipo` | Future physical prototype evidence path. |

## Suggested Site Sections

The public documentation site should eventually contain these sections:

| Section | Purpose |
|---|---|
| Home | Short introduction and current status. |
| Overview | What MicroBot is and what it is not. |
| Architecture | System layers and repository map. |
| Roadmap | Staged development milestones. |
| Simulation | Computational simulation and synthetic telemetry. |
| Hardware Path | ESP32 and bench-validation path. |
| Web Demo | Dashboard/visual interface layer. |
| Presentation | Pitch/demo material and audience versions. |
| Evidence | Reviewed evidence only. |
| References | Bibliography and external learning references. |
| Limitations | Privacy, content, claim and publication boundaries. |

## What To Put First

Put these first:

- simple project summary;
- current status;
- roadmap;
- repository map;
- safe links;
- selected diagrams;
- reviewed documentation.

## What Not To Put First

Do not put these first:

- raw archive inventories;
- huge file lists;
- private notes;
- full unreviewed PDFs;
- unclear copied material;
- speculative future claims;
- hardware claims without evidence.

## Evidence Navigation

Evidence should be linked only after review.

Use this maturity sequence:

```text
planned -> prepared -> mocked -> runnable-baseline prepared -> validated-offline -> hardware-ready -> hardware-validated
```

A documentation page should always say which status applies.

## Recommended Public Homepage Message

A safe homepage message is:

```text
MicroBot is a staged modular robotics ecosystem. This documentation site organizes selected public-facing material about the project: architecture, simulation, web demo, hardware roadmap, presentation material and future evidence. The project is under development and does not yet claim a completed physical swarm.
```

## Final Navigation Rule

The public site should guide, not overwhelm.

Every page should help the viewer understand the project more clearly and should preserve the difference between vision, documentation, simulation, prepared work and validated evidence.
