import { cn } from 'cn';

export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/uses', label: 'Uses' },
] as const;

export function isCurrentPath(pathname: string, href: string) {
  return href === '/'
    ? pathname === '/'
    : pathname === href || pathname.startsWith(`${href}/`);
}

export function navItemClass(current: boolean) {
  return cn(
    'duration-300 hover:opacity-100',
    current ? 'underline underline-offset-4 opacity-100' : 'opacity-80',
  );
}
