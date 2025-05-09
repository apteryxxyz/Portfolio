// import VercelIcon from 'devicons-react/icons/VercelOriginal';
import BunIcon from 'devicons-react/icons/BunPlain';
// import CPlusPlusIcon from 'devicons-react/icons/CplusplusOriginal';
import CSharpIcon from 'devicons-react/icons/CsharpOriginal';
import Css3Icon from 'devicons-react/icons/Css3Original';
import DockerIcon from 'devicons-react/icons/DockerOriginal';
import FigmaIcon from 'devicons-react/icons/FigmaOriginal';
import GitIcon from 'devicons-react/icons/GitOriginal';
// import GitHubIcon from 'devicons-react/icons/GithubOriginal';
import Html5Icon from 'devicons-react/icons/Html5Original';
// import JavaScriptIcon from 'devicons-react/icons/JavascriptOriginal';
import MongoDbIcon from 'devicons-react/icons/MongodbOriginal';
import NextJsIcon from 'devicons-react/icons/NextjsOriginal';
// import NginxIcon from 'devicons-react/icons/NginxOriginal';
import NodeJsIcon from 'devicons-react/icons/NodejsOriginal';
import PrismaIcon from 'devicons-react/icons/PrismaOriginal';
import RaspberryPiIcon from 'devicons-react/icons/RaspberrypiOriginal';
import ReactIcon from 'devicons-react/icons/ReactOriginal';
import TailwindCssIcon from 'devicons-react/icons/TailwindcssOriginal';
import TypeScriptIcon from 'devicons-react/icons/TypescriptOriginal';
import UnityIcon from 'devicons-react/icons/UnityOriginal';
import UnrealEngineIcon from 'devicons-react/icons/UnrealengineOriginal';

import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/ui/tooltip';

export function TechnologiesCard(props: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader className="gap-2">
        <CardTitle className="text-3xl">Technologies I Use</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2">
        {/* Languages */}
        <TechnologyItem name="TypeScript" Icon={TypeScriptIcon} />
        {/* <TechnologyItem name="JavaScript" Icon={JavaScriptIcon} /> */}
        <TechnologyItem name="HTML" Icon={Html5Icon} />
        <TechnologyItem name="CSS" Icon={Css3Icon} />
        {/* <TechnologyItem name="C++" Icon={CPlusPlusIcon} /> */}
        <TechnologyItem name="C#" Icon={CSharpIcon} />

        <br />

        {/* Runtimes */}
        <TechnologyItem name="Node.js" Icon={NodeJsIcon} />
        <TechnologyItem name="Bun" Icon={BunIcon} />

        {/* Frontend Frameworks */}
        <TechnologyItem name="React" Icon={ReactIcon} />
        <TechnologyItem name="Next.js" Icon={NextJsIcon} />
        <TechnologyItem name="TailwindCSS" Icon={TailwindCssIcon} />

        {/* Mobile Frameworks */}
        <TechnologyItem name="React Native" Icon={ReactIcon} />
        {/* <TechnologyItem name="Expo" Icon={ExpoOriginal} /> */}

        {/* Databases */}
        <TechnologyItem name="Prisma" Icon={PrismaIcon} />
        <TechnologyItem name="MongoDB" Icon={MongoDbIcon} />
        {/* <TechnologyItem name="CockroachDB" Icon={CockroachDbOriginal} /> */}

        {/* DevOps */}
        <TechnologyItem name="Docker" Icon={DockerIcon} />
        <TechnologyItem name="Raspberry Pi" Icon={RaspberryPiIcon} />
        {/* <TechnologyItem name="Nginx" Icon={NginxIcon} /> */}
        {/* <TechnologyItem name="Vercel" Icon={VercelIcon} /> */}
        <TechnologyItem name="Git" Icon={GitIcon} />
        {/* <TechnologyItem name="GitHub" Icon={GitHubIcon} /> */}

        {/* Game Development */}
        <TechnologyItem name="Unity" Icon={UnityIcon} />
        <TechnologyItem name="Unreal Engine" Icon={UnrealEngineIcon} />

        {/* Design */}
        <TechnologyItem name="Figma" Icon={FigmaIcon} />
      </CardContent>
    </Card>
  );
}

export function TechnologyItem({
  name,
  Icon,
}: {
  name: string;
  Icon: React.FC<
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
