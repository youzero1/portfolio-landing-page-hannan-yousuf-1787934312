---
status: pending
title: Recolor closing CTA buttons to match the hero avatar ring
---

## Finding: what the hero "ring" color actually is

In `src/components/sections/Hero.tsx` the ring/glow around the avatar blob is the outer
animated layer using `bg-gradient-to-br from-mango to-bubble opacity-90`. So it is a
**two-color gradient**, not a single color:

- `--color-mango` = `#ff7043` (gradient start, top-left — visually dominant)
- `--color-bubble` = `#ec4899` (gradient end, bottom-right)

Both tokens are defined in `src/styles/global.css` under `@theme`.

**Decision needed (default recommended):** use **mango (`#ff7043`)** as the single button
color — it is the gradient's starting/dominant tone and reads as the ring's main color.
If the user prefers the pinker end of the ring, swap every `mango` below for `bubble`
(`#ec4899`); no other part of the plan changes.

## Finding: the buttons that will change

Both live in `src/components/Footer.tsx`, inside the dark `bg-ink` "Let's build something" band:

1. **Email button** — currently `bg-lemon` with `text-ink`, hover is a lift only.
2. **Social links list** (`socialLinks`) — currently outlined: `border-cream/25`, `text-cream`,
   hover `border-cream hover:bg-cream hover:text-ink`.

## Steps

1. In `src/components/Footer.tsx`, change the email button's background from `bg-lemon` to
   `bg-mango`. Keep `text-ink` (dark text on `#ff7043` keeps contrast comfortably readable —
   do **not** switch it to `text-cream`/white, which would be too low-contrast at this size).
   Keep the existing `hover:-translate-y-0.5` lift and add a slight hover tone shift using
   `hover:bg-mango/90` so hover feels intentional rather than static.
   *Outcome:* the primary CTA now matches the hero ring's dominant color.

2. In the same file, restyle the social link anchors to pick up the same accent on interaction
   only: keep the resting state as-is (`border-cream/25`, `text-cream`) so the band stays calm,
   and change the hover state from cream-fill to `hover:border-mango hover:bg-mango hover:text-ink`.
   *Outcome:* social pills visibly relate to the new CTA color without competing with it.

3. Add an explicit focus treatment to both the email button and the social links so keyboard
   users still see a visible ring against the dark band: `focus-visible:outline-cream` (or an
   equivalent light outline utility) on these elements. This is needed because the global
   `*:focus-visible` outline in `src/styles/global.css` is `--color-grape`, which is dim against
   `bg-ink` now that the button itself is warm-toned. Do **not** edit the global rule — override
   locally on these two elements only.
   *Outcome:* focus remains clearly visible; no global style is touched.

4. Leave the decorative blurred blobs in the footer band (`bg-mango/40`, `bg-grape/40`) and the
   `text-lemon` period in the heading unchanged — they are background/typographic accents, not
   buttons. Confirm the yellow full stop still reads fine next to the new mango button; if it
   clashes badly, report back rather than changing it unilaterally.
   *Outcome:* change stays scoped to the two interactive elements.

5. Verify: run `npm run typecheck`, then visually check the closing band in the preview —
   email button reads mango with dark text, hover lifts and darkens slightly, social pills fill
   mango on hover, keyboard focus is visible on both, and the rest of the band is unchanged.
   *Outcome:* clean typecheck and a correct closing band.

## Explicitly NOT changing

- `src/styles/global.css` — no token edits, no global focus-outline change.
- `src/lib/accents.ts` — untouched.
- Hero buttons ("View my work", "Get in touch"), Skills tiles, Projects cards and their
  Live/Code links, Experience timeline, Testimonials, NavBar.
- The footer's decorative blobs, heading, body copy, and the bottom copyright / "Back to top" row.
