import {
  Archive,
  Calendar,
  Clock,
  Download,
  PauseCircle,
  PlayCircle,
  Star,
} from 'lucide-icons';
import { type Project, ProjectStatus } from '../functions/projects.ts';
import { Badge } from './ui/badge.tsx';
import { Button } from './ui/button.tsx';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card.tsx';

export async function ProjectCard(project: Project) {
  const links = project.providers.filter((p) => p.url);

  let installs = 0;
  let likes = 0;
  for (const provider of project.providers) {
    if (typeof provider.installs === 'number') installs += provider.installs;
    if (typeof provider.installs === 'function')
      installs += await provider.installs();
    if (typeof provider.likes === 'number') likes += provider.likes;
    if (typeof provider.likes === 'function') likes += await provider.likes();
  }

  return (
    <Card
      id={project.id}
      className="border-t-4"
      style={{ borderTopColor: project.colour }}
    >
      <CardHeader className="flex flex-wrap items-center gap-1">
        <CardTitle className="mr-1 font-semibold text-2xl">
          {project.name}
        </CardTitle>

        {project.featured && <Badge variant="secondary">Featured</Badge>}
        {project.types.map((t) => (
          <Badge key={t} variant="outline">
            {t}
          </Badge>
        ))}
        {project.roles[0] && <Badge>{project.roles[0]}</Badge>}
      </CardHeader>

      <CardContent className="mb-auto inline">
        <p className="inline leading-none">{project.description}</p>{' '}
        <span className="space-x-1">
          {project.technologies.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </span>
      </CardContent>

      <CardContent className="flex flex-wrap gap-3">
        <span className="flex items-center gap-1">
          {project.status === ProjectStatus.Active && (
            <PlayCircle className="size-4 text-green-500" />
          )}
          {project.status === ProjectStatus.Passive && (
            <Clock className="size-4 text-amber-500" />
          )}
          {project.status === ProjectStatus.OnHold && (
            <PauseCircle className="size-4 text-orange-500" />
          )}
          {project.status === ProjectStatus.Archived && (
            <Archive className="size-4 text-gray-500" />
          )}
          {project.status}
        </span>

        {project.timeline && (
          <span className="flex items-center gap-1">
            <Calendar className="size-4" />
            <span>{project.timeline.start.toLocaleDateString('en-NZ')}</span>
            <span className="text-muted-foreground">
              {' – '}
              {project.timeline.end
                ? project.timeline.end.toLocaleDateString('en-NZ')
                : 'Present'}
            </span>
          </span>
        )}

        {installs > 30 && (
          <span className="flex items-center gap-1">
            <Download className="size-4" />
            <span>{installs.toLocaleString()} Installs</span>
          </span>
        )}

        {likes > 3 && (
          <span className="flex items-center gap-1">
            <Star className="size-4" />
            <span>{likes.toLocaleString()} Stars</span>
          </span>
        )}
      </CardContent>

      <CardFooter className="flex flex-wrap gap-1">
        {links.map(({ icon: Icon, name, url }) => (
          <Button key={url} asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {Icon && <Icon className="grayscale" />} {name}
            </a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
