import type {
  ExperienceEntry,
  Project,
  SkillGroup,
  SocialLink,
  Testimonial,
} from '@/types/portfolio';

export const profile = {
  name: 'Hannan Yousuf',
  initials: 'HY',
  role: 'Software Developer',
  roles: ['Full-stack developer', 'Interface tinkerer', 'Performance nerd', 'Design-minded coder'],
  tagline: 'I build fast, friendly products for the web.',
  pitch:
    'Six years turning fuzzy ideas into shipped software — mostly TypeScript, always with a soft spot for delightful details.',
  location: 'Lisbon, Portugal',
  email: 'hello@hannanyousuf.dev',
  availability: 'Open to freelance work',
};

export const aboutParagraphs = [
  "I'm a developer who genuinely enjoys the messy middle — the part where a rough sketch turns into something people can actually click. I care about how fast it loads, how it feels on a phone, and whether the fifth-time user still smiles.",
  'Most of my work lives in the space between design and engineering: design systems, thoughtful interactions, and the boring-but-vital plumbing that keeps everything quick and reliable.',
  'When I am not shipping, I am usually mentoring juniors, rewriting my terminal config for no good reason, or chasing good light with an old film camera.',
];

export const funFacts: string[] = [
  '☕ Flat white, no sugar',
  '🎹 Plays synths badly',
  '📷 Film photography',
  '🌍 Remote since 2019',
  '🐙 400+ open-source commits',
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    emoji: '🎨',
    accent: 'mango',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Accessibility', 'Framer Motion'],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    accent: 'grape',
    skills: ['Node.js', 'PostgreSQL', 'REST & tRPC', 'Redis', 'Prisma', 'Edge Functions'],
  },
  {
    title: 'Tooling & Craft',
    emoji: '🧰',
    accent: 'mint',
    skills: ['Git', 'Docker', 'CI/CD', 'Playwright', 'Figma', 'Web Vitals'],
  },
];

export const projects: Project[] = [
  {
    title: 'Nimbus Analytics',
    blurb:
      'A real-time dashboard that crunches millions of events a day and still renders in under a second.',
    tech: ['React', 'TypeScript', 'WebSockets', 'Postgres'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    accent: 'grape',
    emoji: '📊',
    year: '2024',
  },
  {
    title: 'Pocket Recipes',
    blurb:
      'An offline-first cooking app with step timers, smart shopping lists and a very opinionated pasta section.',
    tech: ['React', 'IndexedDB', 'PWA', 'Vite'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    accent: 'mango',
    emoji: '🍝',
    year: '2024',
  },
  {
    title: 'Chroma UI',
    blurb:
      'An open-source component library with accessible primitives and themes you can actually customise.',
    tech: ['TypeScript', 'Radix', 'Tailwind', 'Storybook'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    accent: 'mint',
    emoji: '🧩',
    year: '2023',
  },
  {
    title: 'Trailhead',
    blurb:
      'Route planning for hikers with elevation profiles, offline maps and shareable trip cards.',
    tech: ['React', 'Mapbox', 'Node.js', 'Redis'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    accent: 'lemon',
    emoji: '🥾',
    year: '2023',
  },
  {
    title: 'Studio Sync',
    blurb:
      'Booking and invoicing for small creative studios — replaced three spreadsheets and a group chat.',
    tech: ['Next-gen SPA', 'Stripe', 'Postgres'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    accent: 'bubble',
    emoji: '🎬',
    year: '2022',
  },
  {
    title: 'Tiny Deploy',
    blurb:
      'A CLI that ships static sites to your own server in one command, with rollbacks that actually work.',
    tech: ['Node.js', 'Docker', 'CI/CD'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    accent: 'grape',
    emoji: '🚀',
    year: '2022',
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Northwind Labs',
    period: '2022 — Present',
    accent: 'mango',
    highlights: [
      'Led the rebuild of the customer dashboard, cutting load time by 62%.',
      'Built and maintain the design system used by four product teams.',
      'Mentor three engineers through weekly craft sessions.',
    ],
  },
  {
    role: 'Full-stack Developer',
    company: 'Foxglove Studio',
    period: '2020 — 2022',
    accent: 'grape',
    highlights: [
      'Shipped twelve client products end to end, from schema to CSS.',
      'Introduced automated testing that dropped release bugs by half.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Bright Harbour',
    period: '2018 — 2020',
    accent: 'mint',
    highlights: [
      'Rebuilt the marketing site and lifted conversion by 28%.',
      'Owned accessibility work that took the app to WCAG AA.',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Copper & Co.',
    period: '2017 — 2018',
    accent: 'lemon',
    highlights: [
      'Started on bug duty, ended up owning the checkout flow.',
      'Learned that naming things really is the hard part.',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Hannan has the rare ability to make a complicated product feel obvious. Half our roadmap got simpler after they joined.',
    name: 'Priya Raman',
    role: 'Product Lead, Northwind Labs',
    accent: 'mango',
  },
  {
    quote:
      'Genuinely the most thoughtful engineer I have worked with. Ships fast, leaves the codebase tidier than they found it.',
    name: 'Tomás Silva',
    role: 'CTO, Foxglove Studio',
    accent: 'grape',
  },
  {
    quote:
      'We handed over a rough Figma file and got back something better than we imagined, two weeks early.',
    name: 'Hannah Boyd',
    role: 'Founder, Trailhead',
    accent: 'mint',
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'Read.cv', url: 'https://read.cv' },
  { label: 'Bluesky', url: 'https://bsky.app' },
];

export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Kind words' },
];
