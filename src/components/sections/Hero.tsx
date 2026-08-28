import { useEffect, useState } from 'react';
import { profile } from '@/lib/content';

const badges = [
  { label: 'React', className: 'top-2 -left-4 bg-grape text-white animate-float-slow' },
  {
    label: 'TypeScript',
    className: '-top-4 right-6 bg-lemon text-ink animate-float-slower [animation-delay:-2s]',
  },
  {
    label: 'Node.js',
    className: 'bottom-10 -left-8 bg-mint text-white animate-float-slower [animation-delay:-4s]',
  },
  {
    label: 'Tailwind',
    className: 'bottom-0 right-0 bg-bubble text-white animate-float-slow [animation-delay:-1s]',
  },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-32 pb-20 sm:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white/70 px-4 py-2 text-sm font-medium text-ink-soft">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-mint" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[0.95] font-black tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Hey, I&apos;m{' '}
            <span className="relative inline-block">
              <span className="relative z-10">{profile.name.split(' ')[0]}</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 rounded-full bg-lemon/70 sm:h-5"
              />
            </span>{' '}
            <span className="inline-block">👋</span>
          </h1>

          <p
            aria-live="polite"
            className="mt-5 h-8 font-display text-2xl font-semibold text-mango sm:text-3xl"
          >
            <span key={roleIndex} className="inline-block animate-rise">
              {profile.roles[roleIndex]}
            </span>
          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{profile.pitch}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-7 py-3 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              View my work
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-full border-2 border-ink px-7 py-3 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Get in touch
            </a>
          </div>

          <p className="mt-7 text-sm font-medium text-ink-soft">
            📍 {profile.location} · Working remotely
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square">
            <div
              aria-hidden
              className="absolute inset-0 animate-blob bg-gradient-to-br from-mango to-bubble opacity-90"
            />
            <div className="absolute inset-6 grid animate-blob place-items-center overflow-hidden bg-cream [animation-delay:-3s]">
              <span className="font-display text-7xl font-black text-ink sm:text-8xl">
                {profile.initials}
              </span>
            </div>

            {badges.map((badge) => (
              <span
                key={badge.label}
                className={`absolute rounded-full px-4 py-2 text-sm font-semibold shadow-[0_8px_20px_-8px_rgba(28,26,41,0.5)] ${badge.className}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
