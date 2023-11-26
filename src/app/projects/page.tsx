import type { Metadata } from 'next/types';
import Balancer from 'react-wrap-balancer';
import { ProjectSection } from '@/components/project-section';

export const metadata: Metadata = {
  title: 'Projects by Apteryx',
  description: "A full-stack web and mobile app developer's project gallery.",
};

export default function Page() {
  return (
    <>
      <div className="mx-auto my-44 w-2/3 space-y-4 text-center">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          <Balancer>My Project Gallery.</Balancer>
        </h1>

        <p className="text-center font-semibold text-muted-foreground md:text-lg">
          <Balancer>
            These are some of my favourites projects that I have worked on. I'm
            always looking for new opportunities to learn and grow, so feel free
            to reach out if you have any ideas!
          </Balancer>
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-56">
        <ProjectSection
          name="Evaluate"
          description="Quickly evaluate code snippets in any programming language, with optional input and command-line arguments or identify unknown programming languages effortlessly using AI."
          links={{ Website: 'https://evaluate.apteryx.xyz' }}
          developmentNotes="Built with Next.js and Tailwind CSS, uses OpenAI for language identification."
          builtWith={['TypeScript', 'Next.js', 'Tailwind CSS', 'OpenAI']}
          themeHex="#2FC086"
          phoneImageUrl="/projects/evaluate-phone.png"
          desktopImageUrl="/projects/evaluate-desktop.png"
        />

        <ProjectSection
          name="DarkViperAU Soundboard"
          description="A soundboard app featuring many of the great phrases the content creator DarkViperAU has said, from questions to insults and even some strange noises."
          links={{
            'Google Play':
              'https://play.google.com/store/apps/details?id=com.blackbox.darkviperau',
          }}
          builtWith={['TypeScript', 'React Native', 'Expo']}
          themeHex="#242448"
          phoneImageUrl="/projects/darkviperau-phone.png"
        />

        <ProjectSection
          name="JackSucksAtLife Soundboard"
          description="A soundboard app featuring many of the great phrases the content creator JackSucksAtLife has said, from questions to insults and even some strange noises."
          links={{ 'Coming Soon': null }}
          builtWith={['TypeScript', 'React Native', 'Expo']}
          themeHex="#39add8"
          phoneImageUrl="/projects/jacksucksatlife-phone.png"
        />
      </div>
    </>
  );
}
