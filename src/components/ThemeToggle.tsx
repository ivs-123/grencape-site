import type { ThemeName } from '../visuals/scenes';

interface ThemeToggleProps {
  theme: ThemeName;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const label = theme === 'light' ? 'White Cosmos' : 'Dark Space';

  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-full border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text)] transition hover:bg-[var(--card)] focus-ring"
      aria-label="Toggle theme"
    >
      {label}
    </button>
  );
}
