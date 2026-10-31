import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks/useTheme';
import { THEME_OPTIONS, themeOption } from '@/lib/theme-options';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const CurrentIcon = themeOption(theme).icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon-sm" />}>
        <CurrentIcon />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {THEME_OPTIONS.map(({ value, label, icon: Icon }) => (
          <DropdownMenuItem key={value} onClick={() => setTheme(value)}>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
