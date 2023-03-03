import { SiExpo, SiNextdotjs, SiReact } from 'react-icons/si';
import { Icon } from './Icon';

export namespace Framework {
    export function Expo() {
        return <Icon text="Expo" icon={SiExpo} />;
    }

    export function NextJS() {
        return <Icon text="NextJS" icon={SiNextdotjs} />;
    }

    export function React() {
        return <Icon text="React" icon={SiReact} />;
    }

    export function ReactNative() {
        return <Icon text="React Native" icon={SiReact} />;
    }
}
