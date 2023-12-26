'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import 'next-themes/dist/server';

/**
 * A button that toggles the theme.
 */
export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle Theme"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {/* Use dark: to hide/show icons based on theme */}
      <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

      {/* Screen reader only */}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
