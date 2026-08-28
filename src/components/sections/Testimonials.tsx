import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { accents } from '@/lib/accents';
import { testimonials } from '@/lib/content';

function initialsOf(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Kind words"
            title="What people say"
            description="A few notes from teammates and clients I've built things with."
            align="center"
          />
        </Reveal>
      </div>

      {/* Desktop grid / mobile swipeable row */}
      <div className="mt-14">
        <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:px-8 md:mx-auto md:grid md:max-w-6xl md:grid-cols-3 md:overflow-visible md:pb-0">
          {testimonials.map((testimonial, index) => {
            const accent = accents[testimonial.accent];
            return (
              <li
                key={testimonial.name}
                className="w-[85%] shrink-0 snap-center md:w-auto md:shrink"
              >
                <Reveal delay={index * 110} className="h-full">
                  <figure
                    className={`relative flex h-full flex-col rounded-[1.75rem] border-2 border-ink bg-white/90 p-7 transition-transform duration-300 hover:-translate-y-1.5 ${accent.shadow}`}
                  >
                    <span
                      aria-hidden
                      className={`font-display text-6xl leading-none font-black ${accent.text}`}
                    >
                      &ldquo;
                    </span>
                    <blockquote className="-mt-3 flex-1 text-lg leading-relaxed text-ink">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t-2 border-dashed border-ink/12 pt-5">
                      <span
                        className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${accent.bg}`}
                      >
                        {initialsOf(testimonial.name)}
                      </span>
                      <span>
                        <span className="block font-semibold">{testimonial.name}</span>
                        <span className="block text-sm text-ink-soft">{testimonial.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div aria-hidden className="mt-2 flex justify-center gap-2 md:hidden">
          {testimonials.map((testimonial) => (
            <span key={testimonial.name} className="size-2 rounded-full bg-ink/25" />
          ))}
        </div>
      </div>
    </section>
  );
}
