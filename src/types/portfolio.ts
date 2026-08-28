export type AccentName = 'mango' | 'grape' | 'mint' | 'lemon' | 'bubble';

export type Project = {
  title: string;
  blurb: string;
  tech: string[];
  demoUrl: string;
  sourceUrl: string;
  accent: AccentName;
  emoji: string;
  year: string;
};

export type SkillGroup = {
  title: string;
  emoji: string;
  accent: AccentName;
  skills: string[];
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  accent: AccentName;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  accent: AccentName;
};

export type SocialLink = {
  label: string;
  url: string;
};
