import HeroCard from '@/components/hero-card';
import ProjectCard from '@/components/project-card';

const projects = [
    {
        name: 'Qwaroo',
        description:
            'Higher or Lower on a whole new level, play one of the many games we have to offer, or create your own and share it with your friends!',
        colour: [216, 93, 60] as const,
        technologies: [
            'TypeScript',
            'React.js',
            'Next.js',
            'Tailwind CSS',
            'MongoDB',
        ],
        url: 'https://qwaroo.com/',
    },
    {
        name: 'Evaluate',
        description:
            'Execute, capture, identify, save code, and conquer challenges with Evaluate - the ultimate programming bot for Discord!',
        colour: [156, 61, 47] as const,
        technologies: ['TypeScript', 'Node.js', 'Discord.js', 'SQLite'],
    },
    {
        name: 'Enhanced MS',
        description:
            'Convert human readable time-frame strings to milliseconds and back to strings.',
        colour: [0, 0, 100] as const,
        technologies: ['TypeScript'],
        githubUrl: 'https://github.com/apteryxxyz/enhanced-ms',
    },
    {
        name: 'Next WS',
        description: 'Add support for WebSockets in Next.js 13 app directory.',
        colour: [0, 0, 100] as const,
        technologies: ['TypeScript'],
        githubUrl: 'https://github.com/apteryxxyz/next-ws',
    },
    {
        name: 'Next SA',
        description:
            'Improved Next.js 13 server actions, with type-safe validation, caching and timeout.',
        colour: [0, 0, 100] as const,
        technologies: ['TypeScript'],
        githubUrl: 'https://github.com/apteryxxyz/next-sa',
    },
    {
        name: 'JSWhat',
        description:
            'Identify anything. JSWhat - based on PyWhat - lets you easily identify emails, IP addresses, and more. Works in Node, the browser and the command line.',
        colour: [53, 93, 54] as const,
        technologies: ['TypeScript'],
        githubUrl: 'https://github.com/apteryxxyz/jswhat',
    },
];

export default function Projects() {
    return <>
        <div className="flex items-center justify-center">
            <HeroCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(project => <ProjectCard
                key={project.name}
                {...project}
            />)}
        </div>
    </>;
}
