import type { Metadata } from 'next/types';
import Balancer from 'react-wrap-balancer';
import { ProjectSection } from '@/components/project-section';

export const metadata: Metadata = {
  title: "Apteryx's Blog",
  description: "A full-stack web and mobile app developer's project gallery.",
};

export default function Page() {
  return (
    <>
      <div className="mx-auto my-44 w-[66%] space-y-4 text-center">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          <Balancer>My Project Gallery.</Balancer>
        </h1>

        <p className="text-center font-semibold text-muted-foreground md:text-lg">
          <Balancer>
            There are some of my favourite active projects. I have many more on
            my GitHub, so feel free to check that out too! I'm always looking
            for new opportunities to learn and grow, so feel free to reach out
            if you have any ideas!
          </Balancer>
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-56">
        <ProjectSection
          title="Evaluate"
          description="Quickly evaluate code snippets in any programming language, with optional input and command-line arguments or identify unknown programming languages effortlessly using AI."
          tags={['TypeScript', 'React', 'Next.js', 'OpenAI']}
          phoneImageUrl="/projects/evaluate-phone.png"
          desktopImageUrl="/projects/evaluate-desktop.png"
          externalLink="https://evaluate.apteryx.xyz"
          themeHex="#2FC086"
        />
      </div>
    </>
  );
}
