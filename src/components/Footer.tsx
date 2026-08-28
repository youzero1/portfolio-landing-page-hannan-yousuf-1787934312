import { profile, socialLinks } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative scroll-mt-28 px-6 pt-10 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink bg-ink px-7 py-16 text-cream sm:px-14">
          <span
            aria-hidden
            className="absolute -top-16 -left-10 size-64 animate-blob bg-mango/40 blur-3xl"
          />
          <span
            aria-hidden
            className="absolute -right-12 -bottom-20 size-72 animate-blob bg-grape/40 blur-3xl [animation-delay:-8s]"
          />

          <div className="relative text-center">
            <h2 className="font-display text-4xl font-black tracking-tight text-balance sm:text-6xl">
              Let&apos;s build something
              <span className="text-lemon">.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-cream/75">
              Got a project, a rough idea, or just want to talk shop? My inbox is always open.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-9 inline-flex min-h-13 items-center gap-2 rounded-full bg-lemon px-8 py-3.5 text-base font-bold text-ink transition-transform hover:-translate-y-0.5 sm:text-lg"
            >
              {profile.email}
              <span aria-hidden>→</span>
            </a>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-11 items-center rounded-full border-2 border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-sm text-ink-soft sm:flex-row">
          <p>
            © {year} {profile.name}. Built with too much coffee.
          </p>
          <a href="#top" className="font-semibold transition-colors hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
