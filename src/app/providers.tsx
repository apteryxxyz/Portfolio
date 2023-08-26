import { ServerThemeProvider } from 'next-themes';
import { TooltipProvider } from '@/components/ui/tooltip';
import { PreferredProvider } from '@/contexts/preferred';

export function HTMLProviders(p: React.PropsWithChildren) {
  return (
    <ServerThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {p.children}
    </ServerThemeProvider>
  );
}

export function BodyProviders(p: React.PropsWithChildren) {
  return (
    <TooltipProvider>
      <PreferredProvider>{p.children}</PreferredProvider>
    </TooltipProvider>
  );
}
