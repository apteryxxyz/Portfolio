import { MapPinIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '~/components/ui/card';

export function LocationCard(p: React.ComponentPropsWithoutRef<typeof Card>) {
  return (
    <Card
      {...p}
      style={{
        background: "url('/images/photo.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CardHeader className="flex h-full items-center justify-center backdrop-blur-[1px]">
        <CardTitle className="text-3xl align-top">
          <MapPinIcon className="inline" size={36} /> New Zealand
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
