import '@/styles/reset.css';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import type { LayoutProps } from '@/types';
import { cn } from '@/utilities/class-name';

const inter = Inter({ subsets: ['latin'] });

export default function Layout(p: LayoutProps) {
  return (
    <html lang="en" className={cn(inter.className)}>
      <body key="body" className="flex flex-col bg-background text-foreground">
        <div className="h-4 animate-rolling-gradient bg-gradient-to-r from-me-secondary to-me-primary bg-[length:400%_400%]" />

        <main className="container flex-1 gap-6 py-10">{p.children}</main>

        <footer className="flex flex-shrink-0 flex-col items-center justify-center pb-8 text-foreground/30"></footer>
      </body>
    </html>
  );
}
