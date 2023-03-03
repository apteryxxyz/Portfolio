import { SiRaspberrypi, SiWindows } from 'react-icons/si';
import { Icon } from './Icon';

export namespace Platform {
    export function RaspberryPi() {
        return <Icon text="Raspberry Pi" icon={SiRaspberrypi} />;
    }

    export function Windows11() {
        return <Icon text="Windows 11" icon={SiWindows} />;
    }
}
