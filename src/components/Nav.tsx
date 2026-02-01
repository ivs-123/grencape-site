import { useState } from 'react';
import type { ThemeName } from '../visuals/scenes';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'AIS AI', href: '#ais' },
  { label: 'Data Science', href: '#data' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Outsourcing', href: '#outsourcing' },
  { label: 'Contact', href: '#contact' }
];

interface NavProps {
  theme: ThemeName;
  onToggleTheme: () => void;
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-xl">
      <div className="max-container safe-area flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="GRENCAPE"
            className="brand-logo"
            loading="eager"
            onError={(event) => {
              const target = event.currentTarget;
              target.style.display = 'none';
            }}
          />
          <span className="text-sm font-semibold uppercase tracking-[0.4em]">GRENCAPE</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[var(--muted)] transition hover:text-[var(--text)]">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-[var(--border)] px-3 py-2 text-xs uppercase tracking-[0.2em] focus-ring"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-nav" className="border-t border-[var(--border)] bg-[var(--card)]/90 backdrop-blur-xl md:hidden">
          <div className="max-container flex flex-col gap-3 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
