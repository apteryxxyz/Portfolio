import { Code2Icon, Link2Icon } from 'lucide-react';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

export enum ProjectType {
  WebApp = 'Web App',
  MobileApp = 'Mobile App',
  DesktopApp = 'Desktop App',
  Game = 'Game',
  DiscordBot = 'Discord Bot',
}

interface ProjectCardProps {
  type: ProjectType | ProjectType[];
  name: string;
  description: string;
  techologies: string[];

  createdOn: Date;
  discontinuedOn?: Date;

  iconUrl?: string;
  deployedUrl?: string;
  sourceUrl?: string;

  isContributor?: boolean;
}

export function ProjectCard(p: ProjectCardProps) {
  return (
    <Card className="flex flex-col">
      <Card.Header className="flex-row items-center gap-2 space-y-0">
        {p.iconUrl && (
          <Image
            src={p.iconUrl}
            width={25}
            height={25}
            alt=""
            className="rounded-full"
          />
        )}

        <Card.Title className="mr-auto">{p.name}</Card.Title>

        {p.deployedUrl && (
          <a href={p.deployedUrl} target="_blank" rel="noopener noreferrer">
            <Link2Icon />
          </a>
        )}

        {p.sourceUrl && (
          <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
            <Code2Icon />
          </a>
        )}
      </Card.Header>

      <Card.Content className="space-y-2">
        <Card.Description>{p.description}</Card.Description>

        <div className="flex flex-wrap gap-2">
          {[p.type].flat().map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}

          {p.techologies.map((t) => (
            <Badge key={t} className="bg-primary/80">
              {t}
            </Badge>
          ))}
        </div>
      </Card.Content>

      <Card.Footer className="mt-auto flex-col items-start">
        <Card.Description className="space-x-1">
          <>
            <time dateTime={p.createdOn.toISOString()}>
              {p.createdOn.toLocaleDateString('en-NZ')}
            </time>
            <span>to</span>
            {p.discontinuedOn ? (
              <time dateTime={p.discontinuedOn.toISOString()}>
                {p.discontinuedOn.toLocaleDateString('en-NZ')}
              </time>
            ) : (
              <strong className="text-foreground">Present</strong>
            )}
          </>

          {p.isContributor && (
            <>
              - <strong className="text-me-secondary">Contributor</strong>
            </>
          )}
        </Card.Description>
      </Card.Footer>
    </Card>
  );
}

/*
export function ProjectCard(p: ProjectCardProps) {
  return (
    <Card className="flex flex-col">
     
      <Card.Content className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {p.types.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}

          {p.techUsed?.map((b) => (
            <Badge key={b} className="bg-primary/80">
              {b}
            </Badge>
          ))}
        </div>

        <Card.Description className="mt-2 flex items-center gap-2">
          <time dateTime={p.createdOn.toISOString()}>
            {p.createdOn.toLocaleDateString()}
          </time>
          to
          {p.discontinuedOn ? (
            <time dateTime={p.discontinuedOn.toISOString()}>
              {p.discontinuedOn.toLocaleDateString()}
            </time>
          ) : (
            <strong className="text-foreground">Present</strong>
          )}
          {p.isContributor && (
            <>
              - <strong className="text-me-primary">Contributor</strong>
            </>
          )}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
*/
