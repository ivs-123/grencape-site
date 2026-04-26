import { useEffect, useState } from 'react';
import type { ThemeName } from '../visuals/scenes';

const STORAGE_KEY = 'grencape-theme';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeName | null;
    return saved === 'light' || saved === 'dark' ? saved : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return { theme, setTheme, toggle };
}
