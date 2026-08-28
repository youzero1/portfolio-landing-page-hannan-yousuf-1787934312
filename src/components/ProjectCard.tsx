import { accents } from '@/lib/accents';
import type { Project } from '@/types/portfolio';

export function ProjectCard({ project }: { project: Project }) {
  const accent = accents[project.accent];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border-2 border-ink bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:rotate-[-0.6deg] hover:shadow-[0_26px_50px_-22px_rgba(28,26,41,0.45)]">
      <div
        className={`relative grid h-40 place-items-center overflow-hidden border-b-2 border-ink ${accent.bgSoft}`}
      >
        <span
          aria-hidden
          className={`absolute -top-10 -right-8 size-28 rounded-full opacity-40 blur-xl ${accent.bg}`}
        />
        <span className="relative text-5xl transition-transform duration-500 group-hover:scale-110">
          {project.emoji}
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-cream/90 px-2.5 py-1 text-xs font-bold text-ink-soft">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold">{project.title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{project.blurb}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-ink/12 bg-cream px-2.5 py-1 text-xs font-semibold text-ink-soft"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={`inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 ${accent.bg}`}
          >
            Live demo <span aria-hidden>↗</span>
          </a>
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-ink px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Code
          </a>
        </div>
      </div>
    </article>
  );
}
