# HX Monogram Logo -- Design Logic

## Overview

The HX monogram is a personal brand mark for Hao Xin. It combines two letterforms -- **H** and **X** -- inside a broken circle, each carrying distinct visual language and symbolic meaning.

```
    viewBox: 0 0 40 40
    circle:  center (20,20), radius 16
    render:  64 x 64 px
```

All elements are contained within the broken circle boundary. The H and X tips stay inside the radius-16 ring, reinforcing the circle as the unifying frame.

---

## The Broken Circle

Three cyan arc segments form an incomplete ring around the monogram. The gaps between arcs reference the Japanese art of **kintsugi** -- repairing broken pottery with gold -- celebrating imperfection and the beauty of what is unfinished. The circle provides visual containment without closure, echoing the H's theme of an open-ended journey.

**Implementation:** Three `<path>` arcs (radius 16 from center 20,20, stroke-width 1.8) with deliberate gaps between them. Colored via `currentColor` inheriting `var(--neon-cyan)`.

---

## The H -- Forward Path

### Concept

The H is rendered as two converging lines in perspective, like a road stretching toward a vanishing point on the horizon. The two legs start wide at the base and narrow toward the top, aiming at the same distant point -- but they **never meet**. A deliberate gap remains between the two tips.

This represents:
- **Never stopping** -- the path always continues forward, there is always further to go
- **Never giving up** -- the destination may be unreachable but the pursuit itself defines the journey
- **Perpetual forward motion** -- the H is not a static letter but a direction, always pointing ahead

The horizontal crossbar connects the two legs, grounding the structure and forming the recognizable H letterform.

### Boundary Constraint

All H geometry stays within the broken circle (radius 16, center 20,20):
- Base points (11,32) and (29,32) are ~13.4 units from center -- inside the circle
- Tips (18.5,8) and (21.5,8) are ~12.2 units from center -- inside the circle
- Crossbar endpoints (14,23) and (26,23) are ~6.7 units from center -- well inside

This ensures the H never pierces the outer ring, keeping all elements visually contained.

### Geometry

```
Left leg:   (11, 32) --> (18.5, 8)
Right leg:  (21.5, 8) --> (29, 32)
Gap at top: 3 units between tips (18.5 to 21.5)
Crossbar:   (14, 23) --> (26, 23)
```

The vanishing point would be at (20, ~1) if the lines were extended, but they stop short at y=8. The gap is the symbol: the goal is approached but never fully reached, because the act of striving matters more than arrival.

### Rendering

- Stroke: `currentColor` (cyan), width 2.2
- Crossbar: `currentColor` (cyan), width 2.0
- `stroke-linecap: round` for clean terminations

---

## The X -- Metallic Hex-Gem Crystal

### Concept

The X is built from **four independent hex-prism crystal shards** -- sharp, blade-like arms radiating from a central kite-shaped hub. Each arm is a faceted gem rendered with multi-stop metallic gold gradients that simulate light reflecting off polished cut metal and gemstone faces.

This represents:
- **Sharp brilliance** -- the razor-thin blades convey precision, intellect, and cutting clarity
- **Metallic radiance** -- the deep metallic gold palette evokes forged metal, refined excellence, and something inherently precious
- **The X factor** -- a talent and quality that makes extraordinary things happen; the indefinable edge that turns potential into impact
- **On target** -- the center hub is a kite shape pointing upward toward the H's vanishing point, symbolizing focus, forward aim, and hitting the mark

### Architecture: Four Components

Each arm is an independent crystal shard with **three facets** (hex-prism cutting):

1. **Top face (a)** -- the brightest facet, catching direct light. 7-stop gradient from metallic gold (#C8A840) through warm highlights (#E8D888, #F0E8B0) to a soft specular peak (#F8F0C8) and back. No pure white -- the peak remains within the gold family for a polished-metal feel rather than a glassy one.

2. **Left bevel (b)** -- medium-tone facet angled away from primary light. 4-stop gradient from metallic gold (#C8A840) to deep bronze (#806020).

3. **Right bevel (c)** -- the shadow facet catching the least light. 4-stop gradient from antique gold (#A08830) to dark patina (#605010).

The ridge line between bevels runs from the arm's tip to the midpoint of its hub edge, creating the illusion of a three-dimensional prism face.

### The Four Arms

```
Arm 1 (upper-left):   tip at (4, 4)   --> hub edge (17,18)-(20,14)
Arm 2 (upper-right):  tip at (36, 4)  --> hub edge (20,14)-(23,18)
Arm 3 (lower-right):  tip at (36, 32) --> hub edge (23,18)-(20,20)
Arm 4 (lower-left):   tip at (4, 32)  --> hub edge (20,20)-(17,18)
```

Tips are pulled inward to (4,4)/(36,4)/(36,32)/(4,32) -- inside the circle boundary -- so the X blades don't pierce the outer ring.

Each arm's gradient directions are **unique** -- rotated to match the arm's orientation so light appears to fall consistently from a single source. No two arms share the same gradient definition.

### The Center Hub

A **kite shape** (not a symmetric diamond) at the intersection where all four arms meet. The top vertex is pulled higher than the bottom, creating a directional pointer:

```
Vertices: (20,14) top -- (23,18) right -- (20,20) bottom -- (17,18) left
Top-to-center: 4 units above midline
Bottom-to-center: 2 units below midline
```

The hub points **upward toward the H's vanishing point**, reinforcing the "on target, moving forward" symbolism. The kite's elongated top vertex aligns with the direction of convergence.

The hub uses a **vertical linear gradient** (`dHub`) flowing from dark bronze (#907828) at the bottom to warm gold (#E8D888) at the top. This bottom-to-top brightening:
- Creates a natural sense of upward motion (light = direction)
- Blends seamlessly with the surrounding arm facets (no bright hotspot)
- Reinforces the forward/upward orientation of the entire mark

### Color Palette

The metallic palette is designed to evoke polished forged metal and cut gemstone:

| Role | Color | Hex |
|------|-------|-----|
| Bright metallic gold | Polished gold | `#C8A840` |
| Warm gold | Brushed gold | `#D8C060` |
| Light highlight | Champagne metal | `#E8D888` |
| Soft highlight | Warm sheen | `#F0E8B0` |
| Specular peak | Metallic gleam | `#F8F0C8` |
| Medium gold | Antique gold | `#B09030` |
| Deep gold | Old bronze | `#987828` |
| Dark bronze | Weathered metal | `#806020` |
| Shadow | Dark patina | `#706018` |
| Deepest shadow | Deep patina | `#605010` |

Edge strokes use `#806020` at 0.2-0.3px to define facet boundaries -- darker than before, matching the metallic tone and avoiding visible seam lines.

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
| `dHub` | Center kite | linear | 5 | bottom to top (vertical) |

---

## CSS Integration

The logo is rendered at 64x64px with a cyan neon glow applied to the H and broken circle via CSS `drop-shadow`. The metallic X facets are colored by their fill gradients and are **not** affected by the cyan glow -- the metal stands on its own.

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
| X arms | 4 sharp metallic crystal blades | Brilliance, precision, the X factor |
| X hub | Kite pointing toward vanishing point | On target, forward focus, moving ahead |
| Cyan color | H + circle glow | Technical, futuristic identity |
| Metallic gold | X facets | Excellence, forged strength, precious talent |
| Containment | All elements within circle | Unity, cohesion, everything held together |
