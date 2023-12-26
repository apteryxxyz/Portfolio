import Link from 'next/link';
import { cn } from '~/utilities/class-name';
import { ThemeSwitcher } from './theme-switcher';

interface HeaderBarProps {
  className?: string;
}

export function HeaderBar(p: HeaderBarProps) {
  return (
    <header className={cn('flex items-center gap-6', p.className)}>
      <Link href="/" className="text-xl font-bold">
        Apteryx
      </Link>

      <Link
        href="/projects"
        className="font-semibold text-muted-foreground transition-colors duration-200 hover:text-foreground"
      >
        Projects
      </Link>

      <Link
        href="/libraries"
        className="font-semibold text-muted-foreground transition-colors duration-200 hover:text-foreground"
      >
        Libraries
      </Link>

      {/* <Link
        href="/blog"
        className="font-semibold text-muted-foreground transition-colors duration-200 hover:text-foreground"
      >
        Blog
      </Link> */}

      <ThemeSwitcher />
    </header>
  );
}
