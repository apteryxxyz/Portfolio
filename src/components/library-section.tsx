import { colord } from 'colord';
import { Button } from './ui/button';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type LibrarySectionProps = {
  name: string;
  description: string;

  developmentNotes?: string;
  sourceUrl?: string;
  documentationUrl?: string;
  themeHex: `#${string}`;
};

export function LibrarySection(p: LibrarySectionProps) {
  const startColour = colord(p.themeHex).darken(0.2).toHex();
  const endColour = colord(p.themeHex).lighten(0.3).toHex();
  const backgroundGradient = `linear-gradient(15deg, ${startColour} 0%, ${endColour} 100%)`;
  const textColour = colord(p.themeHex).brightness() > 0.7 ? 'black' : 'white';

  return (
    <section
      className="flex flex-col justify-center gap-4 rounded-xl p-5 md:p-10"
      style={{ background: backgroundGradient, color: textColour }}
    >
      <h1 className="text-3xl font-extrabold md:text-4xl">{p.name}.</h1>

      <p className="text-sm">{p.description}</p>

      <div className="flex flex-col gap-2 md:flex-row">
        {p.sourceUrl && (
          <Button variant="always-dark" className="w-full" asChild>
            <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
              Source Code →
            </a>
          </Button>
        )}

        {p.documentationUrl && (
          <Button variant="always-dark" className="w-full" asChild>
            <a
              href={p.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation →
            </a>
          </Button>
        )}
      </div>
    </section>
  );
}
