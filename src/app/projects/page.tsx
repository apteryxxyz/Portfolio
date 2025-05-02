import { ProjectSection } from './_components/project';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-20 pt-8 pb-12">
      <ProjectSection
        name="Evaluate"
        description="Test code in any programming language with Evaluate! Quickly run snippets with optional input and command-line arguments using our easy online platform. Created using a multitude of technologies, including Next.js on the web and Plasmo for the browser extension, powered by the Piston execution engine."
        technologies={[
          'TypeScript',
          'React',
          'Next.js',
          'TailwindCSS',
          'Plasmo',
          'Carbon',
        ]}
        links={{
          'Visit Website': 'https://go.evaluate.run/ICBGhgK',
          'Add Extension': 'https://go.evaluate.run/EaAxey3',
          'Add Discord App': 'https://go.evaluate.run/ekVqFMh',
        }}
        themeColour="#2fc186"
        imageId="evaluate"
      />

      <ProjectSection
        name="Qwaroo"
        description="A website that offers a variety of fun and challenging games based on comparing different aspects of the world, such as population, area, age, and more. Created using Next.js and wrote custom scripts to fetch game data from various sources, often by web scraping."
        technologies={['TypeScript', 'React', 'Next.js', 'TailwindCSS']}
        links={{
          'Visit Website': 'https://qwaroo.vercel.app/',
          'Source Code': 'https://github.com/apteryxxyz/qwaroo',
        }}
        themeColour="#3399ff"
        imageId="qwaroo"
      />

      <ProjectSection
        name="JackSucksAtLife Soundboard"
        description="A soundboard app featuring many of the great phrases the content creator JackSucksAtLife has said, from questions to insults and even some strange noises."
        technologies={['TypeScript', 'React Native', 'Expo', 'TailwindCSS']}
        links={{
          'Google Play':
            'https://play.google.com/store/apps/details?id=xyz.apteryx.jacksucksatlife',
        }}
        themeColour="#39add8"
      />

      <ProjectSection
        name="DarkViperAU Soundboard"
        description="A soundboard app featuring many of the great phrases the content creator DarkViperAU has said, from questions to insults and even some strange noises."
        technologies={['TypeScript', 'React Native', 'Expo', 'TailwindCSS']}
        links={{
          'Google Play':
            'https://play.google.com/store/apps/details?id=com.blackbox.darkviperau',
        }}
        themeColour="#242448"
      />
    </div>
  );
}
