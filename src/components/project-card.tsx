import { GithubIcon, LinkIcon } from 'lucide-react';

interface ProjectProps {
    name: string;
    description: string;
    colour: readonly [number, number, number];
    technologies: string[];
    url?: string;
    githubUrl?: string;
}

export default function ProjectCard(props: ProjectProps) {
    const primary = `hsl(${props.colour[0]} ${props.colour[1]}% ${props.colour[2]}%)`;
    const tinted = `hsl(${props.colour[0]} ${props.colour[1]}% ${props.colour[2]}% / .1)`;

    return <div
        className="flex flex-col border-2 rounded-md px-5 py-4"
        style={{
            borderColor: primary,
            backgroundColor: tinted,
        }}
    >
        <div className="flex items-center gap-1" style={{ color: primary }}>
            <h3 className="font-medium text-lg mr-1">{props.name}</h3>

            {props.url && <a
                className="transition-transform hover:scale-105"
                href={props.url}
                target="_blank"
            >
                <LinkIcon />
                <span className="sr-only">Link to project</span>
            </a>}

            {props.githubUrl && <a
                className="transition-transform hover:scale-105"
                href={props.githubUrl}
                target="_blank"
            >
                <GithubIcon />
                <span className="sr-only">
                    Link to projects Github repository
                </span>
            </a>}
        </div>

        <p className="text-sm mb-auto">{props.description}</p>

        <p className="text-sm text-white/70 italic">
            {props.technologies.join(', ')}
        </p>
    </div>;
}
