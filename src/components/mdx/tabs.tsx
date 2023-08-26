import { usePreferred } from '@/contexts/preferred';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface MdxTabsProps {
  identifier: string;
  children: React.ReactElement<MdxTabsOptionProps>[];
}

export function MdxTabs(p: MdxTabsProps) {
  const [value, setValue] = usePreferred(p.identifier);
  const values = p.children.map((child) => child.props.value);

  return (
    <Tabs
      value={value ?? values[0]}
      onValueChange={(value) => setValue(value)}
      className="mt-8"
    >
      <TabsList>
        {values.map((value) => (
          <TabsTrigger key={value} value={value}>
            {value}
          </TabsTrigger>
        ))}
      </TabsList>

      {p.children}
    </Tabs>
  );
}

interface MdxTabsOptionProps {
  value: string;
  children: React.ReactNode;
}

export function MdxTabsOption(p: MdxTabsOptionProps) {
  return <TabsContent {...p} />;
}
