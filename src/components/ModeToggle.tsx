import * as React from 'react';
import { RiMoonLine, RiSunLine } from '@remixicon/react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Theme = 'theme-light' | 'dark' | 'system';

function storedToState(stored: string | null): Theme {
  if (stored === 'dark') return 'dark';
  if (stored === 'system') return 'system';
  return 'theme-light';
}

function applyClass(theme: Theme) {
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
}

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<Theme>('theme-light');

  React.useEffect(() => {
    setThemeState(storedToState(localStorage.getItem('theme')));
  }, []);

  function setTheme(next: Theme) {
    localStorage.setItem('theme', next === 'theme-light' ? 'light' : next);
    setThemeState(next);
    applyClass(next);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
        <RiSunLine className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <RiMoonLine className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('theme-light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
