import type { useMDXComponent } from 'next-contentlayer/hooks';
import { cn } from '~/utilities/class-name';

export type Components = Exclude<
  (ReturnType<typeof useMDXComponent> extends React.FunctionComponent<infer P>
    ? P
    : never)['components'],
  undefined
>;

export const nativeComponents: Components = {
  h1: ({ className, ...p }) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className,
      )}
      {...p}
    />
  ),
  h2: ({ className, ...p }) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...p}
    />
  ),
  h3: ({ className, ...p }) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...p}
    />
  ),
  h4: ({ className, ...p }) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...p}
    />
  ),
  h5: ({ className, ...p }) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className,
      )}
      {...p}
    />
  ),
  h6: ({ className, ...p }) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className,
      )}
      {...p}
    />
  ),

  p: ({ className, ...p }) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...p}
    />
  ),
  a: ({ className, ...p }) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      target="_blank"
      rel="noopener noreferrer"
      {...p}
    />
  ),
  hr: ({ className, ...p }) => (
    <hr className={cn('my-4 md:my-8', className)} {...p} />
  ),

  ul: ({ className, ...p }) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...p} />
  ),
  ol: ({ className, ...p }) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...p} />
  ),
  li: ({ className, ...p }) => <li className={cn('mt-2', className)} {...p} />,

  blockquote: ({ className, ...p }) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground',
        className,
      )}
      {...p}
    />
  ),

  table: ({ className, ...p }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...p} />
    </div>
  ),
  tr: ({ className, ...p }) => (
    <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...p} />
  ),
  th: ({ className, ...p }) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...p}
    />
  ),
  td: ({ className, ...p }) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...p}
    />
  ),

  img: ({ className, ...p }) => (
    // biome-ignore lint/a11y/useAltText: Passed via p
    <img className={cn('rounded-md border', className)} {...p} />
  ),
};
