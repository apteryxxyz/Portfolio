import { MapPin } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '~/components/ui/card';

export function LocationCard({
  style,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card
      {...props}
      style={{
        ...(style && style),
        background: "url('/assets/location.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CardHeader className="flex h-full items-center justify-center">
        <CardTitle className="mt-12 align-top text-3xl">
          <MapPin className="inline" size={36} /> New Zealand
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
