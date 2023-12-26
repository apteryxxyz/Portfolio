import type { Metadata } from 'next/types';
import Balancer from 'react-wrap-balancer';
import { LibrarySection } from '~/components/library-section';

export const metadata: Metadata = {
  title: 'Libraries by Apteryx',
  description: "A full-stack web and mobile app developer's library gallery.",
};

export default function Page() {
  return (
    <>
      <div className="mx-auto my-44 w-2/3 space-y-4 text-center">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          <Balancer>My Library Gallery.</Balancer>
        </h1>

        <p className="text-center font-semibold text-muted-foreground md:text-lg">
          <Balancer>
            I've made a lot of node modules and such over the years, here are
            some of the ones I use and maintain the most. I have many more on my{' '}
            <a
              className="text-blue-500 hover:underline"
              href="https://github.com/apteryxxyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            , so be sure to check them out!
          </Balancer>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-24 lg:grid-cols-2">
        <LibrarySection
          name="Builders"
          description="Build your features faster with Builders. Use this collection of type-safe JavaScript builders for your applications."
          developmentNotes="Custom built auto-generated documentation using API Extractor, along with Next.js and Tailwind CSS for the website."
          links={{
            GitHub: 'https://github.com/apteryxxyz/builders',
            Documentation: 'https://builders.js.org',
          }}
          themeHex="#2B2B2B"
        />

        <LibrarySection
          name="Next WS"
          description="Next.js plugin designed to seamlessly integrate WebSocket server functionality into API routes within the app directory."
          links={{ GitHub: 'https://github.com/apteryxxyz/next-ws' }}
          themeHex="#2B2B2B"
        />

        <LibrarySection
          name="Enhanced MS"
          description="Convert human readable time-frame strings to milliseconds and vice versa, with support for i10n and operators!"
          links={{ GitHub: 'https://github.com/apteryxxyz/enhanced-ms' }}
          themeHex="#00B7FF"
        />

        <LibrarySection
          name="JSWhat"
          description="Identify anything. Easily identify emails, IP addresses, and more. Works in Node, the browser and the command line."
          links={{ GitHub: 'https://github.com/apteryxxyz/jswhat' }}
          themeHex="#FFFF00"
        />
      </div>
    </>
  );
}
