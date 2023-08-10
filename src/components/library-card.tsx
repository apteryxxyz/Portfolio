import { Code2Icon } from 'lucide-react';
import { Card } from './ui/card';

interface LibraryCardProps {
  name: string;
  description: string;

  createdOn: Date;

  sourceUrl?: string;

  isMaintained?: boolean;
}

export function LibraryCard(p: LibraryCardProps) {
  return (
    <Card className="flex flex-col">
      <Card.Header className="flex-row items-center gap-2 space-y-0">
        <Card.Title className="mr-auto">{p.name}</Card.Title>

        {p.sourceUrl && (
          <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
            <Code2Icon />
          </a>
        )}
      </Card.Header>

      <Card.Content>
        <Card.Description>{p.description}</Card.Description>
      </Card.Content>

      <Card.Footer className="mt-auto flex-col items-start">
        <Card.Description className="space-x-1">
          <time dateTime={p.createdOn.toISOString()}>
            {p.createdOn.toLocaleDateString()}
          </time>

          {p.isMaintained && (
            <>
              {' '}
              - <strong className="text-foreground">Maintained</strong>
            </>
          )}
        </Card.Description>
      </Card.Footer>
    </Card>
  );
}
