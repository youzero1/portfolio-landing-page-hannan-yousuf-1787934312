import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { aboutParagraphs, funFacts, profile } from '@/lib/content';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="About me"
          title="A developer who sweats the small stuff"
        />
      </Reveal>

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal delay={80}>
          <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-ink bg-grape/25"
            />
            <div className="relative -rotate-2 overflow-hidden rounded-[2rem] border-2 border-ink bg-gradient-to-br from-cream-deep to-white transition-transform duration-500 hover:rotate-0">
              <div className="grid aspect-4/5 place-items-center">
                <div className="text-center">
                  <span className="block text-6xl">🧑‍💻</span>
                  <span className="mt-4 block font-display text-2xl font-bold">{profile.name}</span>
                  <span className="mt-1 block text-sm font-medium text-ink-soft">
                    {profile.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={index} delay={120 + index * 90}>
              <p className="mb-5 text-lg leading-relaxed text-ink-soft">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={420}>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {funFacts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-full border-2 border-ink/12 bg-white/80 px-4 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:border-mango"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
