import { useState } from 'react';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';
import { cn } from 'cn';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useTheme } from '@/hooks/useTheme';
import { NAV_ITEMS, isCurrentPath, navItemClass } from '@/lib/nav';
import { THEME_OPTIONS } from '@/lib/theme';

const wordmarkClass =
  'text-[22px] font-bold tracking-widest text-zinc-800 dark:text-white';

type MobileNavProps = {
  pathname: string;
};

export function MobileNav({ pathname }: MobileNavProps) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <Drawer swipeDirection="up" open={open} onOpenChange={setOpen}>
        <DrawerTrigger render={<Button variant="ghost" size="icon-sm" />}>
          <RiMenuLine />
          <span className="sr-only">Open menu</span>
        </DrawerTrigger>
        <DrawerContent className="bg-background rounded-none border-0 text-inherit [--drawer-bleed-background:var(--color-background)] data-[swipe-direction=up]:rounded-none data-[swipe-direction=up]:border-0 dark:bg-zinc-900 dark:[--drawer-bleed-background:var(--color-zinc-900)]">
          <DrawerTitle className="sr-only">Menu</DrawerTitle>
          <DrawerDescription className="sr-only">
            Site navigation and theme
          </DrawerDescription>
          <div className="mx-auto w-full max-w-screen-sm px-6">
            <div className="flex items-center justify-between py-7">
              <a
                href="/"
                className={wordmarkClass}
                onClick={() => setOpen(false)}
              >
                R Bika(s)
              </a>
              <DrawerClose render={<Button variant="ghost" size="icon-sm" />}>
                <RiCloseLine />
                <span className="sr-only">Close menu</span>
              </DrawerClose>
            </div>
            <nav className="flex flex-col gap-4 text-[15px]">
              {NAV_ITEMS.map(({ href, label }) => {
                const current = isCurrentPath(pathname, href);
                return (
                  <a
                    key={href}
                    href={href}
                    className={navItemClass(current)}
                    aria-current={current ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
            <div className="mt-8 flex flex-col gap-4 pb-7 text-[15px]">
              <p className="opacity-50">Theme</p>
              {THEME_OPTIONS.map(({ value, label }) => {
                const current = theme === value;
                return (
                  <button
                    key={value}
                    type="button"
                    className={cn(
                      'bg-transparent p-0 text-left text-[15px]',
                      navItemClass(current),
                    )}
                    onClick={() => setTheme(value)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
