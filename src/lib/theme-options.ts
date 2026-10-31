import { RiMacLine, RiMoonLine, RiSunLine } from '@remixicon/react';

import type { Theme } from '@/lib/theme';

export const THEME_OPTIONS = [
  { value: 'theme-light' satisfies Theme, label: 'Light', icon: RiSunLine },
  { value: 'dark' satisfies Theme, label: 'Dark', icon: RiMoonLine },
  { value: 'system' satisfies Theme, label: 'System', icon: RiMacLine },
] as const;

export function themeOption(theme: Theme) {
  return THEME_OPTIONS.find((option) => option.value === theme)!;
}
