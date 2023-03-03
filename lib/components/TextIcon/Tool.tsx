import {
    SiDocker,
    SiGit,
    SiGithub,
    SiNginx,
    SiPm2,
    SiPostman,
} from 'react-icons/si';
import { Icon } from './Icon';

export namespace Tool {
    export function Docker() {
        return <Icon text="Docker" icon={SiDocker} />;
    }

    export function Git() {
        return <Icon text="Git" icon={SiGit} />;
    }

    export function GitHub() {
        return <Icon text="GitHub" icon={SiGithub} />;
    }

    export function GitHubActions() {
        return <Icon text="GitHub Actions" icon={SiGithub} />;
    }

    export function NGINX() {
        return <Icon text="NGINX" icon={SiNginx} />;
    }

    export function PM2() {
        return <Icon text="PM2" icon={SiPm2} />;
    }

    export function Postman() {
        return <Icon text="Postman" icon={SiPostman} />;
    }
}
