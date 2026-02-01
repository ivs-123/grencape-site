import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
}

export function Button({ children, href, onClick, variant = 'primary' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition focus-ring';
  const styles =
    variant === 'primary'
      ? 'bg-[var(--accent)] text-[var(--bg)] shadow-soft hover:opacity-90'
      : 'border border-[var(--border)] text-[var(--text)] hover:bg-[var(--card)]';
  const className = `${base} ${styles}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
