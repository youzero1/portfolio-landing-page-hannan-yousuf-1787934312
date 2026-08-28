import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { accents } from '@/lib/accents';
import { skillGroups } from '@/lib/content';

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit I reach for"
          description="Deep in the TypeScript ecosystem, comfortable everywhere between the database and the design file."
          align="center"
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => {
          const accent = accents[group.accent];
          return (
            <Reveal key={group.title} delay={index * 110} className="h-full">
              <div
                className={`group h-full rounded-[1.75rem] border-2 border-ink bg-white/85 p-7 transition-all duration-300 hover:-translate-y-1.5 ${accent.shadow}`}
              >
                <span
                  className={`grid size-14 place-items-center rounded-2xl text-2xl ${accent.bgSoft}`}
                >
                  {group.emoji}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold">{group.title}</h3>
                <div aria-hidden className={`mt-3 h-1 w-12 rounded-full ${accent.bg}`} />
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-ink/12 bg-cream px-3 py-1.5 text-sm font-medium text-ink-soft"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
