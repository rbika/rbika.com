export type Theme = 'theme-light' | 'dark' | 'system';

export function storedToState(stored: string | null): Theme {
  if (stored === 'dark') return 'dark';
  if (stored === 'light') return 'theme-light';
  return 'system';
}

export function applyThemeClass(theme: Theme) {
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
}

export function persistTheme(theme: Theme) {
  localStorage.setItem('theme', theme === 'theme-light' ? 'light' : theme);
}
