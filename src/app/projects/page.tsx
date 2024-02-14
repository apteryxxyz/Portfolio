import { ProjectSection } from './_components/project';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-20 pt-8 pb-12">
      <ProjectSection
        name="Evaluate"
        description="Explore a diverse range of programming languages and tools with our comprehensive online platform. Evaluate is the ultimate code evaluation tool, quickly evaluate code snippets in any programming language, with optional input and command-line arguments."
        technologies={[
          'TypeScript',
          'React',
          'Next.js',
          'TailwindCSS',
          'Plasmo',
        ]}
        links={{ 'Visit Website': 'https://evaluate.run/' }}
        themeColour="#2fc186"
        videoId="evaluate"
      />

      <ProjectSection
        name="Qwaroo"
        description="A website that offers a variety of fun and challenging games based on comparing different aspects of the world, such as population, area, age, and more. Created using Next.js and wrote custom scripts to fetch game data from various sources, often by web scraping."
        technologies={['TypeScript', 'React', 'Next.js', 'TailwindCSS']}
        links={{ 'Visit Website': 'https://qwaroo.vercel.app/' }}
        themeColour="#3399ff"
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
