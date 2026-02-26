# HX Monogram Logo -- Design Logic

## Overview

The HX monogram is a personal brand mark for Hao Xin. It combines two letterforms -- **H** and **X** -- inside a broken circle, each carrying distinct visual language and symbolic meaning.

```
    viewBox: 0 0 40 40
    center:  ~(20, 18)
    render:  64 x 64 px
```

---

## The Broken Circle

Three cyan arc segments form an incomplete ring around the monogram. The gaps between arcs reference the Japanese art of **kintsugi** -- repairing broken pottery with gold -- celebrating imperfection and the beauty of what is unfinished. The circle provides visual containment without closure, echoing the H's theme of an open-ended journey.

**Implementation:** Three `<path>` arcs (radius 16, stroke-width 1.8) with deliberate gaps between them. Colored via `currentColor` inheriting `var(--neon-cyan)`.

---

## The H -- Forward Path

### Concept

The H is rendered as two converging lines in perspective, like a road stretching toward a vanishing point on the horizon. The two legs start wide at the base and narrow toward the top, aiming at the same distant point -- but they **never meet**. A deliberate gap remains between the two tips.

This represents:
- **Never stopping** -- the path always continues forward, there is always further to go
- **Never giving up** -- the destination may be unreachable but the pursuit itself defines the journey
- **Perpetual forward motion** -- the H is not a static letter but a direction, always pointing ahead

The horizontal crossbar connects the two legs, grounding the structure and forming the recognizable H letterform.

### Geometry

```
Left leg:   (8, 33) --> (18.5, 7)
Right leg:  (21.5, 7) --> (32, 33)
Gap at top: 3 units between tips (18.5 to 21.5)
Crossbar:   (12, 23) --> (28, 23)
```

The vanishing point would be at (20, ~3) if the lines were extended, but they stop short. The gap is the symbol: the goal is approached but never fully reached, because the act of striving matters more than arrival.

### Rendering

- Stroke: `currentColor` (cyan), width 2.2
- Crossbar: `currentColor` (cyan), width 2.0
- `stroke-linecap: round` for clean terminations

---

## The X -- Golden Crystal

### Concept

The X is built from **four independent hex-prism crystal shards** -- sharp, blade-like arms radiating from a central diamond hub. Each arm is a faceted gem rendered with multi-stop gold gradients that simulate sunlight reflecting off cut crystal faces.

This represents:
- **Sharp brilliance** -- the razor-thin blades convey precision, intellect, and cutting clarity
- **Golden radiance** -- the warm gold palette evokes sunlight, excellence, and something inherently precious
- **The X factor** -- a talent and quality that makes extraordinary things happen; the indefinable edge that turns potential into impact
- **On target** -- the four arms converging on the central hub suggest focus, accuracy, and hitting the mark

### Architecture: Four Components

Each arm is an independent crystal shard with **three facets** (hex-prism cutting):

1. **Top face (a)** -- the brightest facet, catching direct light. 7-stop gradient from warm gold (#F0D050) through champagne (#F8E888), cream (#FFF6CC), and near-white (#FFFFFF) back to gold. This creates the sunlit specular highlight.

2. **Left bevel (b)** -- medium-tone facet angled away from primary light. 4-stop gradient from bright gold to medium gold (#C49A30).

3. **Right bevel (c)** -- the shadow facet catching less light. 4-stop gradient from medium gold (#D4AD42) to deep gold (#9A7518).

The ridge line between bevels runs from the arm's tip to the midpoint of its hub edge, creating the illusion of a three-dimensional prism face.

### The Four Arms

```
Arm 1 (upper-left):   tip at (3, 3)   --> hub edge (17,18)-(20,15)
Arm 2 (upper-right):  tip at (37, 3)  --> hub edge (20,15)-(23,18)
Arm 3 (lower-right):  tip at (37, 33) --> hub edge (23,18)-(20,21)
Arm 4 (lower-left):   tip at (3, 33)  --> hub edge (20,21)-(17,18)
```

Each arm's gradient directions are **unique** -- rotated to match the arm's orientation so light appears to fall consistently from a single source. No two arms share the same gradient definition.

### The Center Hub

A diamond shape at the intersection where all four arms meet:

```
Vertices: (20,15) top -- (23,18) right -- (20,21) bottom -- (17,18) left
```

The hub uses a **radial gradient** (`dHub`) with warm golden tones (`#FFF6CC` center to `#E0C040` edge) that blends smoothly into the surrounding arm facets. The hub is deliberately **not white** -- it matches the golden palette to avoid harsh contrast with the crystal arms, creating a unified jewel appearance.

### Color Palette

The golden palette is designed to evoke sunlight, not metallic coldness:

| Role | Color | Hex |
|------|-------|-----|
| Bright gold (base) | Warm sunflower | `#F0D050` |
| Light gold | Champagne | `#F8E888` |
| Pale gold | Cream | `#FFF6CC` |
| Near-white | Ivory | `#FFFEF5` |
| Specular peak | Pure white | `#FFFFFF` |
| Medium gold | Harvest | `#E0C040` |
| Deep gold | Antique | `#D4AD42` |
| Shadow gold | Amber | `#C49A30` |
| Dark gold | Bronze | `#B08820` |
| Deepest shadow | Old gold | `#9A7518` |

Edge strokes use `#B08820` at 0.2-0.3px to define facet boundaries without creating harsh lines.

---

## Gradient Reference

| ID | Element | Type | Stops | Direction |
|----|---------|------|-------|-----------|
| `d1a` | Arm 1 top face | linear | 7 | bottom-right to top-left |
| `d1b` | Arm 1 left bevel | linear | 4 | top-left to bottom-right |
| `d1c` | Arm 1 right bevel | linear | 4 | bottom-left to top-right |
| `d2a` | Arm 2 top face | linear | 7 | bottom-left to top-right |
| `d2b` | Arm 2 left bevel | linear | 4 | top-right to bottom-left |
| `d2c` | Arm 2 right bevel | linear | 4 | bottom-right to top-left |
| `d3a` | Arm 3 top face | linear | 7 | top-left to bottom-right |
| `d3b` | Arm 3 left bevel | linear | 4 | bottom-left to top-right |
| `d3c` | Arm 3 right bevel | linear | 4 | top-right to bottom-left |
| `d4a` | Arm 4 top face | linear | 7 | top-right to bottom-left |
| `d4b` | Arm 4 left bevel | linear | 4 | bottom-right to top-left |
| `d4c` | Arm 4 right bevel | linear | 4 | top-left to bottom-right |
| `dHub` | Center diamond | radial | 5 | center outward |

---

## CSS Integration

The logo is rendered at 64x64px with a cyan neon glow applied to the H and broken circle via CSS `drop-shadow`. The golden X facets are colored by their fill gradients and are **not** affected by the cyan glow -- the gold stands on its own.

```css
.logo-mark {
    width: 64px;
    height: 64px;
    color: var(--neon-cyan);       /* Inherited by H + circle via currentColor */
    filter: drop-shadow(0 0 6px var(--cyan-text-glow))
            drop-shadow(0 0 20px var(--cyan-glow-md));
}
```

On hover, the glow intensifies and the mark scales up 8%:

```css
.logo:hover .logo-mark {
    filter: drop-shadow(0 0 10px var(--neon-cyan))
            drop-shadow(0 0 20px var(--cyan-glow-lg));
    transform: scale(1.08);
}
```

---

## Files

The SVG is inlined in three HTML files to avoid extra HTTP requests and enable `currentColor` inheritance:

| File | Logo links to |
|------|--------------|
| `index.html` | `#home` (same page) |
| `blog/index.html` | `../index.html` |
| `blog/posts/score-matching-explained.html` | `../../index.html` |

All three contain identical SVG markup (only the `<a href>` differs).

---

## Design Summary

| Element | Visual | Symbolism |
|---------|--------|-----------|
| Broken circle | 3 cyan arcs with gaps | Kintsugi -- beauty in imperfection |
| H legs | Two converging lines that never meet | Perpetual forward motion, never giving up |
| H crossbar | Horizontal connecting bar | Structural identity, the letter H |
| X arms | 4 sharp golden crystal blades | Brilliance, precision, the X factor |
| X hub | Central golden diamond | Focus, convergence, being on target |
| Cyan color | H + circle glow | Technical, futuristic identity |
| Gold color | X facets | Excellence, radiance, precious talent |
