import type { AccentName } from '@/types/portfolio';

type AccentStyle = {
  text: string;
  bg: string;
  bgSoft: string;
  border: string;
  ring: string;
  shadow: string;
  hex: string;
};

// Full literal class strings — Tailwind needs to see them to generate the CSS.
export const accents: Record<AccentName, AccentStyle> = {
  mango: {
    text: 'text-mango',
    bg: 'bg-mango',
    bgSoft: 'bg-mango/12',
    border: 'border-mango',
    ring: 'ring-mango',
    shadow: 'shadow-[10px_10px_0_0_var(--color-mango)]',
    hex: '#ff7043',
  },
  grape: {
    text: 'text-grape',
    bg: 'bg-grape',
    bgSoft: 'bg-grape/12',
    border: 'border-grape',
    ring: 'ring-grape',
    shadow: 'shadow-[10px_10px_0_0_var(--color-grape)]',
    hex: '#6c4ef2',
  },
  mint: {
    text: 'text-mint',
    bg: 'bg-mint',
    bgSoft: 'bg-mint/12',
    border: 'border-mint',
    ring: 'ring-mint',
    shadow: 'shadow-[10px_10px_0_0_var(--color-mint)]',
    hex: '#14b8a6',
  },
  lemon: {
    text: 'text-lemon',
    bg: 'bg-lemon',
    bgSoft: 'bg-lemon/15',
    border: 'border-lemon',
    ring: 'ring-lemon',
    shadow: 'shadow-[10px_10px_0_0_var(--color-lemon)]',
    hex: '#fbbf24',
  },
  bubble: {
    text: 'text-bubble',
    bg: 'bg-bubble',
    bgSoft: 'bg-bubble/12',
    border: 'border-bubble',
    ring: 'ring-bubble',
    shadow: 'shadow-[10px_10px_0_0_var(--color-bubble)]',
    hex: '#ec4899',
  },
};
