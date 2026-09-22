# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, single-page personal portfolio website for Rachel Davis (business operations / project management / customer success). No build tooling, no package manager, no framework — plain HTML, CSS, and vanilla JS served as-is.

## Running locally

There is no dev server or build step. Open `index.html` directly in a browser, or serve the directory with any static file server, e.g.:

```
python -m http.server 8000
```

There are no lint, test, or build commands configured in this repo.

## Structure

The course this site was built for requires exactly these three files at the project root: `index.html`, `style.css`, `app.js`. Do not reintroduce subfolders (e.g. `css/`, `js/`) for these.

- `index.html` — the entire site. One page with anchor-linked sections, in order: hero (`#top`), `#about`, `#skills`, `#technologies`, `#accomplishments`, `#work-experience`, `#education`, `#contact`. Section background alternates between `.section` and `.section-alt` down the page — when inserting or removing a section, rebalance the alternation on the sections that follow it.
- `style.css` — all styling, including responsive nav behavior (mobile menu breakpoint at 640px).
- `app.js` — two small behaviors: sets the footer year, and toggles the mobile nav menu open/closed.
- `about.md` — source content for the About/Skills/Technologies/Accomplishments/Work Experience/Education/Contact sections, kept as a plain-text reference. When updating bio content, update `about.md` first, then the corresponding section in `index.html` (they are not auto-synced — `index.html` is hand-written from this content, not generated from it).
- `assets/` — image assets referenced by `index.html` (e.g. the hero headshot). Only images belong here; it does not hold markup, styles, or scripts.

## Content notes

- `Skills` holds professional capabilities (e.g. Process Improvement, CRM Administration, Workflow Design). Specific named software/tools live in `Technologies` instead, organized into category cards (CRM/ERP & Business Systems, AI & Development Tools, Microsoft & Productivity, Google Workspace, Collaboration, Currently Learning). Keep that split when adding new items — a named product goes in Technologies, a capability goes in Skills.
- Do not invent employers, job titles, dates, education, or accomplishments when editing `Work Experience` or `Education & Professional Development` — if information is missing, add a clearly marked placeholder instead of guessing.
- The Contact section uses icon-only labels (📍 location, ✉️ email, 🔗 LinkedIn) with the text labels kept as screen-reader-only spans (`.sr-only`) rather than removed, for accessibility.
