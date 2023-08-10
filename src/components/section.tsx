type SectionProps = React.PropsWithChildren<{
  title: string;
  subtitle: string;
}>;

export function Section(p: SectionProps) {
  return (
    <section>
      <div className="relative flex items-center">
        <div className="absolute right-[calc(100%_+_1rem)] h-1 w-[50vw] animate-rolling-gradient rounded-full bg-gradient-to-r from-me-secondary to-me-primary bg-[length:400%_400%]"></div>

        <h3 className="font-semibold uppercase text-muted-foreground">
          {p.subtitle}
        </h3>
      </div>

      <h2 className="text-3xl font-bold">{p.title}</h2>

      {p.children}
    </section>
  );
}
