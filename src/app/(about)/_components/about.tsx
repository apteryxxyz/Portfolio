import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { cn } from '~/utilities/class-name';

export function AboutCard(p: React.ComponentPropsWithoutRef<typeof Card>) {
  return (
    <Card {...p} className={cn('bg-glow', p.className)}>
      <CardHeader className="gap-2">
        <CardTitle className="text-3xl">Who am I?</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className="text-sm">
          I am a software developer with a passion for creating and building
          things. Before my diploma, I started my journey as a self-taught
          programmer in 2020, since immersing myself in diverse projects,
          ranging from web development and game design to both desktop and
          mobile applications. My current focus is on web development using
          technologies such as React and Next.js, but I am always looking for
          new opportunities to learn and grow as a developer.
        </p>
      </CardContent>
    </Card>
  );
}
