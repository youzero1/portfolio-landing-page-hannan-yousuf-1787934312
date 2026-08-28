import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

type RevealProps = {
  children: ReactNode;
  /** Delay in milliseconds before the content rises into view. */
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
