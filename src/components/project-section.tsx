import chroma from 'chroma-js';
import { useMemo } from 'react';
import Balancer from 'react-wrap-balancer';
import { Button } from './ui/button';

// LIGHT YELLOW
// rgba(255, 246, 122, 0.4)
// rgba(99, 104, 26, 0.4)
// DARK YELLOW

// LIGHT GREEN
// rgb(33, 255, 145)
// rgb(25, 217, 109)
// DARK GREEN

// LIGHT BLUE
// rgb(43, 31, 230)
// rgb(25, 18, 133)
// DARK BLUE

type ProjectSectionProps = {
  title: string;
  tags: string[];
  description: string;
  themeHex: `#${string}`;
  externalLink?: string;
} & (
  | {
      phoneImageUrl: string | [string, string];
      desktopImageUrl?: never;
    }
  | {
      desktopImageUrl: string;
      phoneImageUrl?: string;
    }
);

function generateGradient(hex: `#${string}`) {
  return {
    same: hex,
    dark: chroma(hex).darken().hex(),
    light: chroma(hex).brighten().hex(),
  };
}

export function ProjectSection(p: ProjectSectionProps) {
  const colours = useMemo(() => generateGradient(p.themeHex), [p.themeHex]);
  const gradient = `linear-gradient(15deg, ${colours.dark} 0%, ${colours.light} 100%)`;

  return (
    <section className="relative flex w-full items-center">
      <div
        className="w-full rounded-xl md:min-h-[25rem]"
        style={{ background: gradient }}
      >
        <div className="flex h-full flex-col justify-center gap-4 p-10 text-white md:min-h-[25rem] md:w-[45%] lg:p-20">
          <h1 className="text-3xl font-extrabold md:text-4xl">{p.title}.</h1>

          <div className="flex gap-2 text-sm">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-sm">
            <Balancer>{p.description}</Balancer>
          </p>

          <div>
            {p.externalLink && (
              <Button className="w-full" asChild>
                <a
                  href={p.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project -&gt;
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="absolute right-0 hidden h-[50rem] w-[50rem] md:block">
        <div className="relative h-full w-full">
          {/* One phone, no desktop */}
          {typeof p.phoneImageUrl === 'string' && !p.desktopImageUrl && (
            <img
              src={p.phoneImageUrl}
              className="absolute right-[1rem] top-1/2 h-[35rem] -translate-y-1/2 transform lg:right-[5rem] xl:right-[10rem]"
            />
          )}

          {/* Two phones */}
          {Array.isArray(p.phoneImageUrl) && !p.desktopImageUrl && (
            <>
              <img
                src={p.phoneImageUrl[0]}
                className="absolute right-[0rem] top-1/2 h-[30rem] -translate-y-1/2 transform lg:right-[5rem] xl:right-[8rem]"
              />
              <img
                src={p.phoneImageUrl[1]}
                className="absolute right-[10rem] top-1/2 h-[30rem] -translate-y-1/2 transform lg:right-[15rem] xl:right-[18rem]"
              />
            </>
          )}

          {/* One desktop no phone */}
          {p.desktopImageUrl && !p.phoneImageUrl && (
            <img
              src={p.desktopImageUrl}
              className="absolute -right-[2rem] top-1/2 h-[20rem] -translate-y-1/2 transform lg:right-[2rem] lg:h-[30rem]"
            />
          )}

          {/* One phone one desktop */}
          {p.phoneImageUrl && p.desktopImageUrl && (
            <>
              <img
                src={p.desktopImageUrl}
                className="absolute right-0 top-1/2 mt-6 h-[20rem] -translate-y-1/2 transform lg:right-[4rem] lg:h-[25rem]"
              />
              <img
                src={p.phoneImageUrl}
                className="absolute -right-[2rem] top-1/2 h-[25rem] -translate-y-1/2 transform md:h-[30rem] lg:right-[2rem]"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
