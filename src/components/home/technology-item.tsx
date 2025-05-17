import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function TechnologyItem({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.FC<
    React.ComponentPropsWithoutRef<'svg'> & { size?: number | string }
  >;
}) {
  return (
    <Tooltip>
      <TooltipTrigger className="cursor-default">
        <Icon size={48} className="grayscale" />
      </TooltipTrigger>

      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  );
}
