import { Card, CardHeader, CardTitle } from '~/components/ui/card';
import { cn } from '~/utilities/class-name';

export function TitleCard(p: React.ComponentPropsWithoutRef<typeof Card>) {
  return (
    <Card {...p} className={cn('bg-glow', p.className)}>
      <CardHeader className="h-full items-center justify-center gap-2">
        <CardTitle className="text-3xl">Software Developer</CardTitle>
      </CardHeader>
    </Card>
  );
}
