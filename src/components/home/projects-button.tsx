import { twMerge as cn } from 'tailwind-merge';
import { Button } from '~/components/ui/button';

export default function QuoteCard({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  return (
    <Button
      className={cn('h-full cursor-pointer', className)}
      {...props}
      asChild
    >
      <a href="/projects" className="!text-3xl font-semibold">
        Projects →
      </a>
    </Button>
  );
}
