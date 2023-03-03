import { SiNodedotjs, SiQt, SiUnity } from 'react-icons/si';
import { Icon } from './Icon';

export namespace Engine {
    export function NodeJS() {
        return <Icon text="NodeJS" icon={SiNodedotjs} />;
    }

    export function Qt() {
        return <Icon text="Qt" icon={SiQt} />;
    }

    export function Unity() {
        return <Icon text="Unity" icon={SiUnity} />;
    }
}
