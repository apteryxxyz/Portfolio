import { Inter } from 'next/font/google';
import type { Metadata } from 'next/types';
import { HeaderBar } from '~/components/header-bar';
import '~/styles/globals.css';
import '~/styles/reset.css';
import { LayoutProps } from '~/types';
import { BodyProviders, HTMLProviders } from './providers';

// Use the Inter font from Google Fonts
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apteryx',
  description: 'A full-stack web and mobile app developer.',
};

export default function Layout(p: LayoutProps) {
  return (
    <HTMLProviders>
      <html lang="en" className={inter.className}>
        <body className="flex flex-col gap-8 py-8">
          <BodyProviders>
            <HeaderBar className="container" />

            {/* Use "flex-1" to push the footer down */}
            <main key="main" className="container flex-1">
              {p.children}
            </main>
          </BodyProviders>
        </body>
      </html>
    </HTMLProviders>
  );
}
