import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import './layout.css';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body className="black">
        <main className="container mx-auto flex min-h-screen items-center">
          {children}
        </main>

        <SpeedInsights />
      </body>
    </html>
  );
}
