# UI Kit — Fashion Cognition Lab Website

An interactive, high-fidelity recreation of the FCL marketing site, composing the
design-system component primitives (`Button`, `Badge`, `Card`, `EyebrowLabel`, `StatBlock`,
`SpecBar`, `SquiggleUnderline`, `Marquee`, `Field`).

## Run
Open `index.html`. It links the global `styles.css`, loads the compiled `_ds_bundle.js`,
exposes the components on `window`, then mounts the section files.

## Files
- `index.html` — page shell, fonts/tokens, component globals, and `<App>` composition.
- `Nav.jsx` — sticky translucent nav + logo lockup + CTA.
- `Hero.jsx` — hero (tagline + "Active finding" specimen panel), full-bleed `Marquee`, `Manifesto`.
- `Studies.jsx` — research results: collaborator logo marquee + three `StudyRow`s (Rilke, Lamelu, Olas).
- `ValueModel.jsx` — the "stężenie wartości" concentration pyramid (4 tiers) on the powder-blue section.
- `Offer.jsx` — three offer protocols, each an intro block + offer cards.
- `Contact.jsx` — `Researchers` (dark section, 3 founder specimen cards), `Contact` (intake form, interactive),
  `Footer`.

## Interactions
- Contact form submits (fake) → button label confirms receipt.
- Nav anchors smooth-scroll to sections; study rows + cards have hover states; logos grayscale→color.

## Notes
- Copy is Polish (the real site language). Imagery from `assets/`. Collaborator logos load from the
  Wix CDN used by the source site; they may not render offline.
