import { Card } from './ui/card';

type ContactCardProps = React.PropsWithChildren<{
  method: string;
  url: string;
  prefix?: string;
  value: string;
  suffix?: string;
}>;

export function ContactCard(p: ContactCardProps) {
  return (
    <Card className="relative">
      <Card.Header className="flex-row items-center gap-2 space-y-0 pb-2 text-muted-foreground">
        {p.children}

        <Card.Title>{p.method}</Card.Title>
      </Card.Header>

      <Card.Content className="text-lg">
        {p.prefix && <span className="text-muted-foreground">{p.prefix}</span>}
        <span>{p.value}</span>
        {p.suffix && <span className="text-muted-foreground">{p.suffix}</span>}
      </Card.Content>

      <a
        className="absolute inset-0"
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
      />
    </Card>
  );
}
