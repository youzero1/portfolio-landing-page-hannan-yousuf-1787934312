import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { accents } from '@/lib/accents';
import { experience } from '@/lib/content';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been"
          description="Agencies, startups and one very patient e-commerce team."
          align="center"
        />
      </Reveal>

      <div className="relative mt-16">
        {/* Dashed connector line */}
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-3 w-0 border-l-4 border-dashed border-ink/20 md:left-1/2 md:-translate-x-1/2"
        />

        <ol className="space-y-10">
          {experience.map((entry, index) => {
            const accent = accents[entry.accent];
            const alignRight = index % 2 === 1;

            return (
              <li key={`${entry.company}-${entry.period}`} className="relative">
                <Reveal delay={index * 90}>
                  <div
                    className={`grid md:grid-cols-2 md:gap-12 ${
                      alignRight ? 'md:[&>*:first-child]:col-start-2' : ''
                    }`}
                  >
                    <div className={`pl-12 md:pl-0 ${alignRight ? '' : 'md:text-right'}`}>
                      <div
                        className={`rounded-[1.5rem] border-2 border-ink bg-white/90 p-6 transition-transform duration-300 hover:-translate-y-1 ${accent.shadow}`}
                      >
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-bold text-white ${accent.bg}`}
                        >
                          {entry.period}
                        </span>
                        <h3 className="mt-3 font-display text-2xl font-bold">{entry.role}</h3>
                        <p className={`mt-1 font-semibold ${accent.text}`}>{entry.company}</p>
                        <ul
                          className={`mt-4 space-y-2 text-ink-soft ${
                            alignRight ? '' : 'md:text-right'
                          }`}
                        >
                          {entry.highlights.map((highlight) => (
                            <li key={highlight} className="leading-relaxed">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Timeline dot */}
                <span
                  aria-hidden
                  className={`absolute top-7 left-3 size-5 -translate-x-1/2 rounded-full border-4 border-cream md:left-1/2 ${accent.bg}`}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
