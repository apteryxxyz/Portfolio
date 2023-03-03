import {
    SiCplusplus,
    SiCsharp,
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiTypescript,
    SiVisualstudio,
} from 'react-icons/si';
import { Icon } from './Icon';

export namespace Language {
    export function CPlusPlus() {
        return <Icon text="C++" icon={SiCplusplus} />;
    }

    export function CSS() {
        return <Icon text="CSS" icon={SiCss3} />;
    }

    export function CSharp() {
        return <Icon text="C#" icon={SiCsharp} />;
    }

    export function HTML() {
        return <Icon text="HTML" icon={SiHtml5} />;
    }

    export function JavaScript() {
        return <Icon text="JavaScript" icon={SiJavascript} />;
    }

    export function TypeScript() {
        return <Icon text="TypeScript" icon={SiTypescript} />;
    }

    export function VisualBasic() {
        return <Icon text="Visual Basic" icon={SiVisualstudio} />;
    }
}
