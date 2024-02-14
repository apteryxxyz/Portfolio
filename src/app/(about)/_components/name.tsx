import GitHubIcon from 'devicons-react/icons/GithubOriginal';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Card, CardHeader, CardTitle } from '~/components/ui/card';
import { cn } from '~/utilities/class-name';

export function NameCard(p: React.ComponentPropsWithoutRef<typeof Card>) {
  return (
    <Card {...p} className={cn('bg-glow', p.className)}>
      <CardHeader className="h-full items-center justify-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/apteryxxyz.png" alt="Apteryx" />
          <AvatarFallback>K</AvatarFallback>
        </Avatar>

        <CardTitle className="text-3xl">
          Kodie{' '}
          <a
            className="inline-flex items-center justify-center"
            href="/github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="inline dark:[&>*]:!fill-white" size={24} />
          </a>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
