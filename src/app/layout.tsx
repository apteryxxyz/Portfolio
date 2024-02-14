import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], display: 'swap' });
import { Glow } from '~/components/glow';
import { Header } from '~/components/header';
import { TooltipProvider } from '~/components/ui/tooltip';
import type { LayoutProps } from '~/types';
import './layout.css';

export default function RootLayout(p: LayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="dark">
        <Glow />

        <TooltipProvider>
          <Header />
          <main className="container">{p.children}</main>
        </TooltipProvider>
      </body>
    </html>
  );
}
