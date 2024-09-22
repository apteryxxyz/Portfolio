'use client';

import { colord } from 'colord';
import { animate, inView } from 'motion';
import { useEffect } from 'react';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

export function ProjectSection(p: {
  name: string;
  description: string;
  technologies: string[];
  links: Record<string, string>;
  themeColour: `#${string}`;
  videoId?: string;
  imageId?: string;
}) {
  const textColour =
    colord(p.themeColour).brightness() > 0.6 ? 'black' : 'white';

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    if (!mq.matches) return;

    doAnimation('.TitleSection', 'translateX(-100px)', 0.1);
    doAnimation('.VideoSection', 'translateX(-100px)', 0.2);
    doAnimation('.DescriptionCard', 'translateY(-100px)', 0.4);
    doAnimation('.LinksSection', 'translateX(100px)', 0.5);
  }, []);

  return (
    <section className="flex flex-col lg:grid gap-5 grid-cols-2">
      <h2 className="TitleSection lg:opacity-0 block lg:hidden font-semibold leading-none tracking-tight text-3xl">
        {p.name}
      </h2>

      <div className="VideoSection w-full h-full lg:opacity-0 rounded-xl border border-border">
        {p.videoId ? (
          <video
            className="object-cover rounded-xl"
            poster={`/projects/${p.videoId}.png`}
            src={`/projects/${p.videoId}.mp4`}
            autoPlay
            playsInline
            muted
            loop
          />
        ) : p.imageId ? (
          <img
            className="object-cover rounded-xl"
            src={`/projects/${p.imageId}.png`}
            alt={p.name}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Preview not yet available</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <Card className="DescriptionCard lg:opacity-0 bg-glow lg:h-full">
          <CardHeader className="gap-2 h-full">
            <CardTitle className="hidden lg:block text-3xl">{p.name}</CardTitle>
            <CardDescription className="h-full">
              {p.description}
            </CardDescription>
            <span className="flex flex-wrap gap-2">
              {p.technologies.map((tech) => (
                <Badge
                  key={tech}
                  style={{ backgroundColor: p.themeColour, color: textColour }}
                >
                  {tech}
                </Badge>
              ))}
            </span>
          </CardHeader>
        </Card>

        <div className="LinksSection lg:opacity-0 flex flex-wrap gap-2">
          {Object.entries(p.links).map(([text, href]) => (
            <Button
              key={href}
              className="w-min h-min rounded-xl"
              style={{ backgroundColor: p.themeColour, color: textColour }}
              asChild
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                {text} →
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

function doAnimation(
  elements: NodeListOf<Element> | string,
  transform: `translate${'X' | 'Y'}(${number}px)` | null,
  delay: number,
) {
  inView(
    elements,
    ({ target }) =>
      void animate(
        target,
        {
          opacity: [0, 0.2, 0.8, 1],
          transform: transform ? [transform, 'none'] : undefined,
        },
        { duration: 0.5, delay },
      ),
  );
}
