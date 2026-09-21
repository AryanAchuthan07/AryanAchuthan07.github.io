# Gambit — Personal Portfolio Design System

Gambit is the design system for a **personal portfolio site belonging to a product designer who plays chess**. It is a small, opinionated system: warm earth palette, printed-page typography, near-square geometry, and one recurring motif — the board.

## Sources

**None were provided.** No codebase, Figma file, .fig export, deck, logo, or font binaries were attached to this project. The brief was two lines: *"Personal Portfolio. Earth Color Palette. I'm a chess player so maybe something fun/niche with that."*

Everything here was authored from that brief. Consequences worth knowing:

- **There is no logo.** The brand mark is a checker square set beside the owner's name in Young Serif. `assets/` holds no logo file, and none was invented. See *Brand → Wordmark lockup*.
- **Fonts are Google Fonts originals**, loaded from the Google CDN in `tokens/fonts.css` — not substitutions for licensed files, because no licensed files exist yet. If you own display type, swap it in there.
- **Icons are Lucide**, loaded from CDN, because no icon set was supplied. Flagged as a substitution.
- **All copy is placeholder** ("Maya Oduya", Lagos, fictional projects). Replace it with the real person's writing.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The one file consumers link. `@import` list only. |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `radius-borders`, `elevation`, `motion`, `patterns` |
| `components/` | React primitives — see below |
| `guidelines/` | 20 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/portfolio-site/` | Five-screen click-through recreation of the portfolio |
| `assets/` | Empty of logos by design; see *Iconography* |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-skill wrapper for use outside this project |

### Components

**core** — `Button`, `IconButton`, `Icon`, `PieceGlyph`, `Badge`, `Tag`, `Card`
**forms** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**navigation** — `NavBar`, `Tabs`, `Footer`
**feedback** — `Dialog`, `Tooltip`, `Toast`
**brand** — `Chessboard`, `MoveList`, `ProjectCard`, `SectionHeading`

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, plus a usage example).

#### Intentional additions
No source defined a component inventory, so the standard primitive set was authored. Four additions exist because a chess player's portfolio needs them, and each earns its place:
- `Chessboard` — the hero motif and a real position display.
- `MoveList` — algebraic notation, paired with the board.
- `ProjectCard` — the work grid's unit; every portfolio has one.
- `SectionHeading` — carries the checker eyebrow that ties pages together.

---

## Content fundamentals

**Voice: first person, past tense, specific.** This is one person's site, so the copy says *I*, never *we*. It addresses the reader as *you* only in direct invitations ("if you are in Lagos"). No corporate plural, no "we're passionate about."

**Casing: sentence case everywhere** — headings, buttons, labels. The only uppercase is the mono eyebrow/label style, which is tracked out at 0.14em and never longer than four words ("SELECTED WORK", "ROLE", "NOTE — MOVE 3").

**Sentences are short and land on a fact.** Numbers beat adjectives: "Retention at four weeks went from 31% to 68%," not "dramatically improved retention." Where a claim can't be measured, the copy admits it: "Beautiful, barely useful."

**Admit the misses.** The work index filters to *Archived* on purpose. Case studies name what did not work. This is the single strongest tonal rule — the confidence comes from candour, not from polish.

**Chess vocabulary is used sparingly and literally.** Opening/endgame metaphors appear at most once per page, and only where they carry real meaning ("what a product commits to early, and what it has left when the board thins out"). Notation (`1. e4 e5`, `C53`, `½–½`) is always real and always in mono. Never "checkmate your competition."

**Buttons are verbs with an object**: "See the work", "Send", "CV (PDF)", "Say hello". Never "Learn more", "Submit", "Click here".

**Errors are plain and blameless**: "That address looks incomplete." Not "Invalid input."

**No emoji. Ever.** The brand's only pictographs are Unicode chess pieces, and those are decorative, not conversational.

Example paragraph, for calibration:

> I interviewed eleven club players between 1400 and 2100. All of them had abandoned at least one trainer. The reason was never difficulty — it was that a missed move felt like a failed exam rather than a position to understand.

---

## Visual foundations

**Palette.** A single earth ramp from bone (`#FBF8F2`) to ink (`#231C15`) carries every neutral; nothing in the system is grey. Three accents: **clay** `#B4552D` (primary actions, links, eyebrows), **ochre** `#C98A2B` (focus rings, highlighted squares, stats on ink), **moss** `#5F7048` (success, switches). Oxblood and slate exist only for error and info. One accent dominates any given view; clay and moss never sit side by side as equals. Pages are `--surface-page` (bone-100), cards are one step lighter (bone-50) — light-on-light, separated by hairlines rather than shadows.

**The duotone.** `--square-light` (#EAE1D1) and `--square-dark` (#7A6349) are the board pair and appear nowhere else. They are the one place the system allows a big flat area of colour.

**Type.** Young Serif for display (headlines, card titles, quotes) at tight leading and −0.018em tracking; Work Sans for everything a person reads or clicks; JetBrains Mono for notation, eyebrows, labels, and metadata. Long-form prose is 17px / 1.68 / 64ch, ragged right, never justified. The scale runs 11 → 84px at roughly a 1.35 ratio.

**Spacing.** One square = 8px. Every gap, pad, and gutter is a multiple: card padding 24 (40 for feature cards), stack gap 16, section gap 96, page gutter 48. Content maxes at 1180px; prose at 680px.

**Corners.** Nearly square: 5px on buttons, inputs, and cards; 8px on dialogs; 2–3px on badges and checkboxes. Pills (999px) are reserved for `Tag` and the switch track — nothing else. A board has no round squares.

**Borders.** A 1px hairline in `--line-hairline` (#DCCFB9) does most of the structural work. `--line-strong` (walnut-700) marks focus and emphasis; a 1px ink border belongs to the offset card and the board frame only.

**Shadows.** Warm and short, tinted with ink rather than black or blue: `--shadow-card` is a 1px contact edge plus a 14px lift; `--shadow-raised` doubles it on hover. The signature is `--shadow-offset` — a hard 4px ink block with no blur, borrowed from letterpress. Use it once per screen, never on a grid of cards. Inputs carry a faint `--inset-sunken`, the only inner shadow in the system.

**Backgrounds.** No photography is shipped and no imagery is invented. Three ground treatments: flat bone; `--pattern-grain` (a 2% warm dot noise, used on the hero and long sections — never over photography); and `--pattern-checker`, the repeating board field, scalable via `--checker-size`. Image slots in the UI kit are checker plates with a labelled placeholder so nobody mistakes them for finished art. Full-bleed is reserved for the ink stat strip, which runs edge to edge.

**Imagery, when the owner supplies it.** Warm, slightly underexposed, natural light, visible grain. No cool/blue grading, no heavy saturation, no duotone filters. Black-and-white is acceptable for portraits.

**Animation.** Pieces are placed, not floated: 90ms press, 140ms hover, 200ms default state change, 320ms for anything entering. Easing is always `--ease-place` = `cubic-bezier(.2,.8,.3,1)` — quick out, settled landing. No bounce, no spring, no parallax, no scroll-triggered reveals. Motion is limited to colour, shadow, and a 2px translate.

**Hover states.** Filled buttons darken one step (clay-500 → clay-600). Outline and ghost controls fill with bone-200 rather than changing their text colour. Cards lift 2px and deepen to `--shadow-raised`. Links go from clay to ink — darker, never lighter, never underlined on hover if they were not underlined at rest.

**Press states.** Translate down 2px (`--press-translate`), keep the hover colour. No scale-down, no ripple.

**Focus.** A 3px ochre glow (`--ring-focus`, rgba(201,138,43,.45)) plus a walnut border. Never removed, never the browser default blue.

**Disabled.** 42% opacity, `not-allowed` cursor, no colour change.

**Transparency and blur.** Almost never. The two exceptions: the dialog scrim (ink at 42% with a 2px backdrop blur) and the shadows. No frosted panels, no translucent headers, no protection gradients — text sits on solid ground, so no scrim capsules are needed.

**Layout rules.** Nothing is fixed or sticky; the header scrolls away with the page. Single-column prose with an optional right rail of facts. Grids are `auto-fit, minmax(280px, 1fr)` so they reflow rather than break. The board is the only element allowed to be visually heavier than the headline next to it.

**Cards.** Bone-50 fill, 1px hairline, 5px radius, 24px padding, no shadow at rest inside grids (`elevation="flat"`), `elevation="card"` when standalone, `elevation="offset"` for the one thing on the page that should look printed.

---

## Iconography

**Set: Lucide, outline, 2px stroke, 18px box.** No icon set was provided with the brief, so Lucide is a flagged substitution — it matches the system's hairline weight and square terminals better than filled or duotone sets. It loads from CDN (`unpkg.com/lucide-static@0.454.0/icons/<name>.svg`) and is masked to `currentColor` inside the `Icon` component, so an icon always inherits its parent's colour. No SVGs are hand-drawn anywhere in this system.

Common names in use: `arrow-right`, `arrow-up-right`, `arrow-left`, `chevron-left/right`, `chevrons-left`, `mail`, `github`, `link`, `copy`, `download`, `play`, `search`, `info`, `external-link`, `file-text`, `calendar`.

**Sizes.** 15px beside 13px text, 16px in buttons and icon buttons, 18px default, 22px in specimen rows. Never above 24px — a bigger pictograph should be a piece glyph instead.

**Chess pieces are Unicode, not images.** U+265A–265F (`♚♛♜♝♞♟`), exposed as `PieceGlyph` and used inside `Chessboard`. White pieces are the outline glyph filled bone-50 with a 1px ink text-shadow; Black pieces are ink. This is deliberate: the glyphs come from the reader's font stack, scale to any size, and require no assets.

**Emoji are never used** — not in UI, not in copy, not in commit-message-style microcopy.

**Unicode characters as UI** are allowed in exactly three places: `×` for dismiss, `▾` for the select chevron, and `½–½` / `1–0` for game results. Everything else is Lucide.

**`assets/` is intentionally empty of brand marks.** When the owner supplies a logo, drop the SVG in `assets/logo.svg` and replace the checker square in `NavBar` and `thumbnail.html`.
