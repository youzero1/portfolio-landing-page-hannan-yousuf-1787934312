---
status: implemented
title: Playful Developer Portfolio Landing Page
---

# Playful Developer Portfolio Landing Page

A single-scroll landing page for a software developer's portfolio with a playful, creative visual style: warm accent colors, rounded shapes, subtle floating/blob background decorations, hand-drawn-feeling highlights, and light hover/scroll animations.

Sections, in order: Hero → About → Skills → Featured Projects → Experience Timeline → Testimonials → closing footer.

## Steps

1. **Set up the project foundation**
   Create the base Vite + React + TypeScript app entry files: `index.html`, `src/main.tsx`, `vite.config.ts`, `tsconfig.json`, `package.json`.
   - `vite.config.ts` registers the Tailwind CSS v4 Vite plugin and the TanStack Router Vite plugin, and defines the `@/` alias pointing at `src/`.
   - `package.json` includes react, react-dom, @tanstack/react-router, @tanstack/router-plugin, tailwindcss, @tailwindcss/vite, vite, typescript.
   - Expected outcome: `npm run dev` boots a blank app with no console errors.

2. **Create the global stylesheet**
   Create `src/styles/global.css` starting with exactly `@import "tailwindcss";`, then define the playful design tokens as CSS custom properties via Tailwind v4 theme configuration: a warm primary accent, a secondary contrast accent, a soft cream page background, deep ink text color, and two display/body font families loaded from a font CDN link in `index.html`.
   - Also define reusable keyframe animations (slow float, gentle blob morph, fade-and-rise on entry).
   - Import this file once in `src/main.tsx`.
   - Expected outcome: Tailwind utilities work; brand colors and fonts are available as utility classes across the app.

3. **Create shared content types**
   Create `src/types/portfolio.ts` with types for a project card, a skill group, an experience entry, and a testimonial.
   - Expected outcome: all section components consume consistently typed data.

4. **Create the editable content file**
   Create `src/lib/content.ts` holding all page copy and data in one place: name, role, tagline, about paragraphs, skill groups, 4–6 featured projects (title, blurb, tech tags, links, accent color), 3–4 experience entries, 3 testimonials, and footer contact details.
   - Expected outcome: the user can change every word and project on the page by editing this single file.

5. **Build the app shell route**
   Create `src/routes/__root.tsx` with the page background, decorative floating blob layer, and a slot for page content. It renders the sticky top navigation and the footer around the outlet.
   - Expected outcome: consistent playful background and chrome on every route.

6. **Build the navigation bar**
   Create `src/components/NavBar.tsx`: a floating pill-shaped sticky header with the developer's initials/logo mark, anchor links to each section (About, Skills, Projects, Experience, Testimonials), and a primary "Get in touch" button.
   - Behavior: becomes slightly opaque with a soft shadow after scrolling; collapses into a hamburger menu with a slide-down panel on mobile; active section link is highlighted while scrolling.
   - Expected outcome: clicking a link smooth-scrolls to the matching section on desktop and mobile.

7. **Build the hero section**
   Create `src/components/sections/Hero.tsx`: oversized greeting with the name, an animated rotating role/tagline line, a short one-sentence pitch, two call-to-action buttons ("View my work", "Get in touch"), and a playful illustrated avatar/shape cluster with floating tech badges that drift slowly.
   - Expected outcome: full-viewport-height opening screen that reads clearly at mobile and desktop widths.

8. **Build the about section**
   Create `src/components/sections/About.tsx`: two-column layout with a photo/shape frame on one side (tilted card with a colored offset border) and 2–3 paragraphs plus a few quick "fun fact" chips on the other.
   - Expected outcome: personal, scannable intro that stacks vertically on mobile.

9. **Build the skills section**
   Create `src/components/sections/Skills.tsx`: grouped skill cards (e.g. Frontend, Backend, Tooling) as rounded tiles with playful icons and pill-shaped tags, each tile using a different accent color and lifting slightly on hover.
   - Expected outcome: skills readable at a glance in a responsive grid.

10. **Build the featured projects section**
    Create `src/components/sections/Projects.tsx` and `src/components/ProjectCard.tsx`: a responsive card grid where each card shows a preview image area, title, short blurb, tech tags, and links to live demo and source.
    - Cards tilt/lift on hover with a colored glow drawn from the project's accent color.
    - Expected outcome: the strongest projects are visually dominant and each card's links open in a new tab.

11. **Build the experience timeline**
    Create `src/components/sections/Experience.tsx`: a vertical timeline with a playful dashed connector line, alternating left/right entry cards on desktop and a single left-aligned column on mobile. Each entry shows role, company, date range, and 2–3 bullet highlights.
    - Expected outcome: career history is easy to follow chronologically.

12. **Build the testimonials section**
    Create `src/components/sections/Testimonials.tsx`: quote cards with a large decorative quotation mark, quote text, author avatar initials, name and role. Desktop shows a 3-up grid; mobile shows a horizontal swipeable row with dot indicators.
    - Expected outcome: social proof displays cleanly at all widths.

13. **Build the closing footer**
    Create `src/components/Footer.tsx`: a bold closing call-to-action band ("Let's build something"), an email link as the primary action, a small row of social/profile links, and a copyright line.
    - Expected outcome: the page ends with a clear way to reach out.

14. **Assemble the landing page route**
    Create `src/routes/index.tsx` composing all sections in order, each wrapped with a matching anchor id used by the navigation.
    - Expected outcome: visiting the home URL renders the complete portfolio page top to bottom.

15. **Add scroll-reveal animation**
    Create `src/hooks/useInView.ts` returning a ref and a visibility flag using an intersection observer, and apply it to each section wrapper so content fades and rises into view once as the user scrolls.
    - Respect the reduced-motion preference: skip animations when the user has it enabled.
    - Expected outcome: subtle, non-distracting entrance animations that never hide content.

16. **Polish and responsive pass**
    Review every section at mobile, tablet, and desktop widths: consistent section padding and max width, readable heading scale, tap targets at least 44px, visible keyboard focus rings, and correct heading order for accessibility. Add page title and meta description in `index.html`.
    - Expected outcome: the page looks intentional on a phone, has no horizontal scrolling, and is fully keyboard navigable.
