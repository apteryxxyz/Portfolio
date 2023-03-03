import { SiRider, SiVisualstudio, SiVisualstudiocode } from 'react-icons/si';
import { Icon } from './Icon';

export namespace IDE {
    export function Rider() {
        return <Icon text="Rider" icon={SiRider} />;
    }

    export function VisualStudio() {
        return <Icon text="Visual Studio" icon={SiVisualstudio} />;
    }

    export function VisualStudioCode() {
        return <Icon text="Visual Studio Code" icon={SiVisualstudiocode} />;
    }
}
