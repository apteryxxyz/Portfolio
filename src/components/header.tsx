'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex z-40 w-full items-center justify-center p-8 sticky top-0 inset-x-0 backdrop-blur-lg">
      <Tabs defaultValue={pathname}>
        <TabsList>
          <TabsTrigger value="/" asChild>
            <Link href="/">About</Link>
          </TabsTrigger>
          <TabsTrigger value="/projects" asChild>
            <Link href="/projects">Projects</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </header>
  );
}
