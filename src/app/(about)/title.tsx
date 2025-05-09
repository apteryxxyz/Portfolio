import { Card, CardHeader, CardTitle } from '~/components/ui/card';

export function TitleCard(props: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader className="flex h-full items-center justify-center">
        <CardTitle className="text-3xl">Software Developer</CardTitle>
      </CardHeader>
    </Card>
  );
}
