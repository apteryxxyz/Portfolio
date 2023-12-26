import { cn } from '~/utilities/class-name';

type HighlightTextProps = React.PropsWithChildren<{
  backgroundClassName?: `bg-${string}/20`;
  decorationClassName?: `decoration-${string}`;
}>;

export function HighlightText(p: HighlightTextProps) {
  return (
    <span
      className={cn(
        'text-foreground',
        p.backgroundClassName && p.backgroundClassName,
        p.decorationClassName &&
          cn('underline decoration-4', p.decorationClassName),
      )}
    >
      {p.children}
    </span>
  );
}
