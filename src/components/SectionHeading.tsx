type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="inline-flex items-center rounded-full border-2 border-ink/10 bg-white/70 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-ink-soft uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{description}</p>
      ) : null}
    </div>
  );
}
