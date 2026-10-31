import * as React from 'react';

import {
  applyThemeClass,
  persistTheme,
  storedToState,
  type Theme,
} from '@/lib/theme';

export function useTheme() {
  const [theme, setThemeState] = React.useState<Theme>('system');

  React.useEffect(() => {
    setThemeState(storedToState(localStorage.getItem('theme')));
  }, []);

  function setTheme(next: Theme) {
    persistTheme(next);
    setThemeState(next);
    applyThemeClass(next);
  }

  return { theme, setTheme };
}
