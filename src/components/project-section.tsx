/* eslint-disable @next/next/no-img-element */

import { colord } from 'colord';
import Balancer from 'react-wrap-balancer';
import { Button } from './ui/button';

type ProjectSectionProps = {
  name: string;
  description: string;
  links?: Record<string, string | null>;

  developmentNotes?: string;
  builtWith: string[];
  themeHex: `#${string}`;
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

export function ProjectSection(p: ProjectSectionProps) {
  const startColour = colord(p.themeHex).darken(0.2).toHex();
  const endColour = colord(p.themeHex).lighten(0.3).toHex();
  const backgroundGradient = `linear-gradient(15deg, ${startColour} 0%, ${endColour} 100%)`;
  const textColour = colord(p.themeHex).brightness() > 0.7 ? 'black' : 'white';

  return (
    <section className="relative flex w-full items-center">
      <div
        className="w-full rounded-xl md:min-h-[25rem]"
        style={{ background: backgroundGradient, color: textColour }}
      >
        <div className="flex h-full flex-col justify-center gap-4 p-10 text-white md:min-h-[25rem] md:w-[45%] lg:p-20">
          <h1 className="text-3xl font-extrabold md:text-4xl">{p.name}.</h1>

          <div className="flex flex-wrap gap-1 text-sm">
            {p.builtWith.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white px-1.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-sm">{p.description}</p>

          {p.links && (
            <div className="flex flex-col gap-2 md:flex-row">
              {Object.entries(p.links).map(([name, url]) => (
                <Button
                  key={name}
                  variant="always-dark"
                  className="w-full"
                  disabled={url === null}
                  asChild
                >
                  <a
                    href={url ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name} →
                  </a>
                </Button>
              ))}
            </div>
          )}

          {p.developmentNotes && (
            <p className="text-sm">
              <Balancer>{p.developmentNotes}</Balancer>
            </p>
          )}
        </div>
      </div>

      <div className="absolute right-0 hidden h-[50rem] w-[50rem] md:block">
        <div className="relative h-full w-full">
          {/* One phone, no desktop */}
          {typeof p.phoneImageUrl === 'string' && !p.desktopImageUrl && (
            <img
              src={p.phoneImageUrl}
              alt={`Phone screenshot of ${p.name}`}
              className="absolute right-[1rem] top-1/2 h-[35rem] -translate-y-1/2 transform lg:right-[5rem] xl:right-[10rem]"
            />
          )}

          {/* Two phones */}
          {Array.isArray(p.phoneImageUrl) && !p.desktopImageUrl && (
            <>
              <img
                src={p.phoneImageUrl[0]}
                alt={`Phone screenshot of ${p.name}`}
                className="absolute right-[0rem] top-1/2 h-[30rem] -translate-y-1/2 transform lg:right-[5rem] xl:right-[8rem]"
              />
              <img
                src={p.phoneImageUrl[1]}
                alt={`Phone screenshot of ${p.name}`}
                className="absolute right-[10rem] top-1/2 h-[30rem] -translate-y-1/2 transform lg:right-[15rem] xl:right-[18rem]"
              />
            </>
          )}

          {/* One desktop no phone */}
          {p.desktopImageUrl && !p.phoneImageUrl && (
            <img
              src={p.desktopImageUrl}
              alt={`Desktop screenshot of ${p.name}`}
              className="absolute -right-[2rem] top-1/2 h-[20rem] -translate-y-1/2 transform lg:right-[2rem] lg:h-[30rem]"
            />
          )}

          {/* One phone one desktop */}
          {p.phoneImageUrl && p.desktopImageUrl && (
            <>
              <img
                src={p.desktopImageUrl}
                alt={`Desktop screenshot of ${p.name}`}
                className="absolute right-0 top-1/2 mt-6 h-[20rem] -translate-y-1/2 transform lg:right-[4rem] lg:h-[25rem]"
              />
              <img
                src={p.phoneImageUrl}
                alt={`Phone screenshot of ${p.name}`}
                className="absolute -right-[2rem] top-1/2 h-[25rem] -translate-y-1/2 transform md:h-[30rem] lg:right-[2rem]"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
