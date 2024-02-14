import CPlusPlusIcon from 'devicons-react/icons/CplusplusOriginal';
import CSharpIcon from 'devicons-react/icons/CsharpOriginal';
import Css3Icon from 'devicons-react/icons/Css3Original';
import DockerIcon from 'devicons-react/icons/DockerOriginal';
import FigmaIcon from 'devicons-react/icons/FigmaOriginal';
import GitIcon from 'devicons-react/icons/GitOriginal';
import GitHubIcon from 'devicons-react/icons/GithubOriginal';
import Html5Icon from 'devicons-react/icons/Html5Original';
import JavaScriptIcon from 'devicons-react/icons/JavascriptOriginal';
import MongoDbIcon from 'devicons-react/icons/MongodbOriginal';
import NextJsIcon from 'devicons-react/icons/NextjsOriginal';
import NginxIcon from 'devicons-react/icons/NginxOriginal';
import NodeJsIcon from 'devicons-react/icons/NodejsOriginal';
import PrismaIcon from 'devicons-react/icons/PrismaOriginal';
import RaspberryPiIcon from 'devicons-react/icons/RaspberrypiOriginal';
import ReactIcon from 'devicons-react/icons/ReactOriginal';
import TailwindCssIcon from 'devicons-react/icons/TailwindcssOriginal';
import TypeScriptIcon from 'devicons-react/icons/TypescriptOriginal';
import UnityIcon from 'devicons-react/icons/UnityOriginal';
import UnrealEngineIcon from 'devicons-react/icons/UnrealengineOriginal';
import VercelIcon from 'devicons-react/icons/VercelOriginal';

import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/ui/tooltip';
import { cn } from '~/utilities/class-name';

export function TechnologiesCard(
  p: React.ComponentPropsWithoutRef<typeof Card>,
) {
  return (
    <Card {...p} className={cn('bg-glow', p.className)}>
      <CardHeader className="gap-2">
        <CardTitle className="text-3xl">Technologies I Use</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2">
        {/* Languages */}
        <TechnologyItem name="TypeScript" icon={TypeScriptIcon} />
        <TechnologyItem name="JavaScript" icon={JavaScriptIcon} />
        <TechnologyItem name="HTML5" icon={Html5Icon} />
        <TechnologyItem name="CSS3" icon={Css3Icon} />
        <TechnologyItem name="C++" icon={CPlusPlusIcon} />
        <TechnologyItem name="C#" icon={CSharpIcon} />

        {/* Runtimes */}
        <TechnologyItem name="Node.js" icon={NodeJsIcon} />

        {/* Frontend Frameworks */}
        <TechnologyItem name="React" icon={ReactIcon} />
        <TechnologyItem name="Next.js" icon={NextJsIcon} />
        <TechnologyItem name="TailwindCSS" icon={TailwindCssIcon} />

        {/* Mobile Frameworks */}
        <TechnologyItem name="React Native" icon={ReactIcon} />
        {/* <TechnologyItem name="Expo" icon={ExpoOriginal} /> */}

        {/* Databases */}
        <TechnologyItem name="Prisma" icon={PrismaIcon} />
        <TechnologyItem name="MongoDB" icon={MongoDbIcon} />
        {/* <TechnologyItem name="CockroachDB" icon={CockroachDbOriginal} /> */}

        {/* DevOps */}
        <TechnologyItem name="Docker" icon={DockerIcon} />
        <TechnologyItem name="Raspberry Pi" icon={RaspberryPiIcon} />
        <TechnologyItem name="Nginx" icon={NginxIcon} />
        <TechnologyItem name="Vercel" icon={VercelIcon} />
        <TechnologyItem name="Git" icon={GitIcon} />
        <TechnologyItem name="GitHub" icon={GitHubIcon} />

        {/* Game Development */}
        <TechnologyItem name="Unity" icon={UnityIcon} />
        <TechnologyItem name="Unreal Engine" icon={UnrealEngineIcon} />

        {/* Design */}
        <TechnologyItem name="Figma" icon={FigmaIcon} />
      </CardContent>
    </Card>
  );
}

export function TechnologyItem(p: {
  name: string;
  icon: React.FC<
    React.ComponentPropsWithoutRef<'svg'> & { size?: number | string }
  >;
}) {
  return (
    <Tooltip>
      <TooltipTrigger className="cursor-default">
        <p.icon size={48} className="grayscale" />
      </TooltipTrigger>

      <TooltipContent>{p.name}</TooltipContent>
    </Tooltip>
  );
}
