import { useEffect, useState } from 'react';
import type { ThemeName } from '../visuals/scenes';

const STORAGE_KEY = 'grencape-theme';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeName>('light');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeName | null;
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return { theme, setTheme, toggle };
}
