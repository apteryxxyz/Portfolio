import GitHub from 'devicons-react/icons/GithubOriginal';
import { Discord } from '~/components/icons/discord';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Card, CardHeader, CardTitle } from '~/components/ui/card';

export function NameCard({
  ...props
}: React.ComponentPropsWithoutRef<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader className="flex h-full flex-col items-center justify-center gap-2">
        <Avatar className="size-14">
          <AvatarImage src="https://github.com/apteryxxyz.png" alt="Apteryx" />
          <AvatarFallback>K</AvatarFallback>
        </Avatar>

        <CardTitle className="space-x-2 text-3xl">
          <span>Kodie</span>

          <a
            className="inline-flex items-center justify-center"
            href="https://github.com/apteryxxyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="[&>*]:!fill-foreground inline" size={24} />
          </a>

          <a
            className="inline-flex items-center justify-center"
            href="https://discord.gg/k6HWWM565z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord className="[&>*]:!fill-foreground inline" size={24} />
          </a>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
