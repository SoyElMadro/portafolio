---
name: Kinetic Cyber-Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#baccb0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#85967c'
  outline-variant: '#3c4b35'
  surface-tint: '#2ae500'
  primary: '#efffe3'
  on-primary: '#053900'
  primary-container: '#39ff14'
  on-primary-container: '#107100'
  inverse-primary: '#106e00'
  secondary: '#dcfdff'
  on-secondary: '#00373a'
  secondary-container: '#00f1fd'
  on-secondary-container: '#006a6f'
  tertiary: '#faf9ff'
  on-tertiary: '#263143'
  tertiary-container: '#d3def6'
  on-tertiary-container: '#576276'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#79ff5b'
  primary-fixed-dim: '#2ae500'
  on-primary-fixed: '#022100'
  on-primary-fixed-variant: '#095300'
  secondary-fixed: '#6ff6ff'
  secondary-fixed-dim: '#00dce6'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f53'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  code-accent:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style
This design system is engineered for a 2026 senior-level technical portfolio. The brand personality is "The Architect in the Machine"—authoritative, precise, and sophisticated. It moves away from "dirty" cyberpunk into a refined "Cyber-Noir" aesthetic that blends high-end glassmorphism with cinematic lighting.

The emotional response should be one of awe and trust. The UI feels alive through the use of ambient motion, subtle scanlines, and reactive glow effects that follow the user's cursor. We leverage a mix of **Glassmorphism** for depth and **Minimalism** for content clarity, ensuring the developer's work remains the focal point while the container feels like a futuristic OS interface.

## Colors
The palette is centered on absolute depth. The primary background is a deep, "Vantablack" inspired tone (`#050505`) to maximize the perceived luminance of the accent colors. 

- **Neon Green (#39FF14):** Used exclusively for success states, terminal prompts, and primary "Ready" indicators.
- **Electric Cyan (#00F3FF):** The primary interactive color. Used for links, active states, and "data-flow" animations.
- **Subtle Blue Glow (#1E293B):** Used for ambient background textures and large-radius blurs to prevent the UI from feeling flatly black.
- **Graphite Gray (#1A1A1A):** The core surface color for cards and elevated containers, often used with varying levels of transparency (60-80%).

## Typography
The typographic hierarchy relies on a "Technical-Humanist" pairing. **Geist** provides a sharp, modular feel for headlines, reminiscent of modern developer tools. **Inter** is used for body copy to ensure maximum readability against dark backgrounds. 

**Space Mono** acts as the "Engine Room" font—it is used sparingly for labels, metadata, and decorative UI elements (like coordinates or version numbers) to reinforce the high-tech narrative. All headlines should utilize a slight "glow" text-shadow when appearing in Primary or Secondary colors.

## Layout & Spacing
This design system utilizes a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile. The spacing rhythm is based on an 8px base unit. 

The layout should feel "open" with generous vertical margins (`stack-lg`) to allow the ambient background glows to breathe. Elements are often grouped in "clusters" using a subtle tech-grid overlay (1px lines at 40px intervals) that becomes visible only upon interaction. Content reflow on mobile should prioritize single-column stacks with edge-to-edge glass cards.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Luminous Layering** rather than traditional shadows. 

- **Level 1 (Base):** Deep black background with a subtle dot-matrix grid.
- **Level 2 (Plates):** Glass cards with 60% opacity `#1A1A1A`, a 1px border of `glass_stroke`, and a `24px` backdrop blur.
- **Level 3 (Interactive):** Elements that are hovered gain an internal glow (box-shadow inset) and a secondary external bloom effect using the Electric Cyan color.

The use of "Light Leaks"—large, soft, low-opacity blurs of `#1E293B`—should be positioned behind primary content areas to create a sense of three-dimensional cinematic space.

## Shapes
We use **Rounded** corners to soften the aggressive tech aesthetic, making it feel premium rather than brutalist. 

Standard components (buttons, input fields) use a 0.5rem radius. Large layout containers (cards, hero sections) should use `rounded-xl` (1.5rem). A signature shape detail in this design system is the "Beveled Glass" effect: a subtle 45-degree clipped corner on the top-right of secondary badges or "tag" components to mimic hardware interfaces.

## Components
- **Buttons:** Primary buttons feature a solid Electric Cyan background with black text. On hover, they emit a 20px "bloom" glow. Secondary buttons are "Ghost" style with a 1px Cyan border and a glass-blur background.
- **Chips/Badges:** Small, pill-shaped elements with monochromatic fills. Use `Space Mono` for the text to indicate "System Status" or "Tech Stack."
- **Cards:** The workhorse of the portfolio. Must feature a 1px border that is slightly brighter at the top-left to simulate a light source. Backdrop blur is mandatory.
- **Input Fields:** Dark gray fills with no border, until focused. Upon focus, the bottom border glows Neon Green and a subtle scanline animation passes through the field once.
- **Interactive Tech Grid:** A background component that reacts to mouse movement, where the grid intersections light up within a 200px radius of the cursor.
- **Terminal Widget:** A specialized component for displaying "About Me" text, featuring a typing animation and a blinking Neon Green cursor.