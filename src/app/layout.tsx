import '@/styles/reset.css';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next/types';
import { GoogleAnalytics } from '@/components/google-analytics';
import { HeaderBar } from '@/components/header-bar';
import { LayoutProps } from '@/types';
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
        <head>
          <GoogleAnalytics />
        </head>

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
