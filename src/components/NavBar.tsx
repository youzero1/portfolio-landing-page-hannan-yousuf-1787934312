import { useEffect, useState } from 'react';
import { navSections, profile } from '@/lib/content';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navSections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border-2 border-ink/10 px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled
            ? 'border-ink/15 bg-cream/90 shadow-[0_10px_30px_-12px_rgba(28,26,41,0.35)] backdrop-blur-md'
            : 'bg-cream/60 backdrop-blur-sm'
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full py-1 pr-2 pl-1 text-ink"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-full bg-ink text-sm font-bold text-cream">
            {profile.initials}
          </span>
          <span className="hidden font-display text-base font-semibold sm:block">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active === section.id
                    ? 'bg-ink/8 text-ink'
                    : 'text-ink-soft hover:bg-ink/5 hover:text-ink'
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden min-h-11 items-center rounded-full bg-mango px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-mango/90 sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-11 place-items-center rounded-full border-2 border-ink/15 text-ink transition-colors hover:bg-ink/5 md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-ink transition-transform duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-ink transition-transform duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border-2 border-ink/10 bg-cream/95 shadow-[0_16px_40px_-18px_rgba(28,26,41,0.45)] backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 border-transparent opacity-0'
        }`}
      >
        <ul className="flex flex-col p-3">
          {navSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-2xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-ink/5"
              >
                {section.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 flex min-h-11 items-center justify-center rounded-2xl bg-mango px-4 py-3 text-base font-semibold text-white"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
