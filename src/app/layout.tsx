import '@/styles/tailwind.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Apteryx | Software Developer',
    description:
        'Software developer making websites, games, apps, and bots. I specialise in TypeScript and C#, along with React.js, Next.js, Unity and many many more.',
    icons: { icon: 'favicon-32x32.png' },
    openGraph: {
        type: 'website',
        url: 'https://apteryx.xyz',
        title: 'Apteryx | Software Developer',
        description:
            'Software developer making websites, games, apps, and bots. I specialise in TypeScript and C#, along with React.js, Next.js, Unity and many many more.',
        siteName: 'Apteryx',
    },
    twitter: {
        creator: '@apteryxxyz',
    },
};

export default function Layout({ children }: PropsWithChildren) {
    return <html lang="en" className={inter.className}>
        <body key="body" className="min-h-[100dvh] bg-green-950 text-white/90">
            <main>{children}</main>
        </body>
    </html>;
}
