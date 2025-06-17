export default function TechnologyItem({
  name: _name,
  icon: Icon,
}: {
  name: string;
  icon: React.FC<Record<string, unknown>>;
}) {
  return <Icon title={null} size={48} className="grayscale" />;
}
