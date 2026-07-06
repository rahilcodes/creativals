# Creativals — FINAL DESIGN language (neo-brutalist)

Every page on this site follows this system. Reference implementations:
`src/pages/HomePage.jsx`, `src/components/home/*.jsx`, `src/pages/NotFoundPage.jsx`,
`src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/styles/theme.css`.

## Palette (ONLY these colors)
- Indigo `#4F46E5` — brand/primary section bg, accent on light bg
- Yellow `#FFD84D` — accent, badges, primary CTA, accent on dark bg
- Cream `#F4F2EC` — light section bg, text on dark bg
- Ink `#17151A` — dark section bg, text on light bg, borders
- White `#FFFFFF` — cards on cream sections
- Extras (sparing): `#FF5F57` red (alerts), `#3DDC84` green (status dots), `#FFF8E0` (highlight table cells)
- FORBIDDEN: the old purple `#7C3AED`, pinks, gradients, glassmorphism, navy `#0F172A`/`#080B14`.

## Section rhythm
Full-bleed background sections alternating indigo / cream / yellow / ink.
Page hero = indigo bg, cream text (like NotFoundPage). Never two same-bg sections adjacent.
Yellow sections get `borderTop/Bottom: '4px solid #17151A'`.

## Typography
- Headings: `className="cx-display cx-h2"` (page hero: `cx-h1`). Uppercase, Archivo 900 stretched.
- Two-line heading pattern: second line italic + accent color:
  `<h2 className="cx-display cx-h2">Line one.<br/><span style={{color:'#4F46E5',fontStyle:'italic'}}>line two.</span></h2>`
  (yellow `#FFD84D` accent on indigo/ink sections, indigo accent on cream/yellow sections)
- Body copy: Archivo 15–18px, lineHeight 1.6. Lead paragraphs: `className="cx-lead"` (add `cx-lead-light` styling on dark via inline color `rgba(244,242,236,.7)`).
- Mono labels/badges/CTAs: IBM Plex Mono, uppercase, letterspaced. Helper:
  `const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });`

## Building blocks (theme.css)
- Layout: `cx-wrap` (1400px container), `cx-section` (vertical padding), `cx-grid3`, `cx-grid2` (responsive collapse built in)
- Section chip: `<SecNum n="01" label="The label" />` (props: `dark` on ink/indigo bg, `yellow` on yellow bg)
- Buttons: `cx-btn` + size (`cx-btn-lg`/`cx-btn-sm`) + variant (`cx-btn-yellow`, `cx-btn-ink`, `cx-btn-cream`, `cx-btn-outline-cream`, `cx-btn-outline-ink`)
- Tags: `cx-tag cx-tag-yellow|indigo|ink` (tiny pills like POPULAR); `cx-badge` (bigger yellow pill)
- Cards: `cx-card` (white, 2px ink border, hover offset shadow; add `tilt-l`/`tilt-r`), `cx-card-invert` (white→indigo on hover), `cx-card-ink`, `cx-card-indigo`
- FAQ: `<details className="cx-faq"><summary>Q<span className="plus">+</span></summary><p>A</p></details>`
- Forms: `cx-label` + `cx-input`
- Comparison rows: `cx-cmp-row`

## Primitives (src/components/ui/primitives.jsx)
`Reveal` ({delay} ms — scroll-in stagger), `Marquee` ({speed, reverse, segStyle}), `SpinBadge`,
`ScrollProgress`, `SecNum`, `WA_INDIA`, `WA_USA`, `waLink(msg)`.

## Canonical section skeleton
```jsx
<section style={{ background: '#F4F2EC', color: '#17151A' }}>
  <div className="cx-wrap cx-section">
    <Reveal><SecNum n="01" label="The label" /></Reveal>
    <Reveal delay={60}>
      <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
        Line one.<br /><span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Line two.</span>
      </h2>
    </Reveal>
    <Reveal delay={140}><p className="cx-lead" style={{ maxWidth: 620 }}>Lead text.</p></Reveal>
    {/* content grid */}
  </div>
</section>
```

## Rules
- NO framer-motion. Use `Reveal` for entrances; CSS transitions for hover.
- NO gradients, NO glassmorphism, NO old CSS classes (`section-container`, `premium-card`, `btn-primary` etc. are deleted).
- Lucide icons only where functional (close buttons, form icons) — this design is typography-driven; prefer big numbers/mono labels over icon boxes.
- Primary CTA is always WhatsApp: `href={WA_INDIA}` label like "Get Free Audit →".
- Keep every page's `useSEO()` call and its content/copy — restyle, don't rewrite meaning.
- Buttons/links that navigate internally use `<Link to=...>` with `cx-btn` classes.
- All numbers/stats stay. Numbered `SecNum` chips per section (01, 02, …).
