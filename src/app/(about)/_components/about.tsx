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
          things. Since 2020, I have been immersing myself in diverse projects,
          ranging from web development and game design to both desktop and
          mobile applications. My current focus is on web development, and I am
          always looking for new opportunities to learn and grow as a developer.
        </p>

        {/* <p className="text-sm">
          I am a strong advocate for open-source software and the free exchange
          of knowledge. I believe that the best way to learn is by doing and
          sharing what you have learned with others. I am always looking for
          ways to contribute to the open-source community and to help others
          learn and grow as developers.
        </p> */}
      </CardContent>
    </Card>
  );
}
