import Link from 'next/link';
import type { IconType } from 'react-icons';

export function InlineLink(props: InlineLink.Props) {
    const isOnlyIcon = props.icon && !props.children;

    return <Link
        className={`duration-200
            text-red-500 hover:text-red-400
            ${isOnlyIcon ? 'hover:scale-110' : ''}`.replaceAll(/\s+/g, ' ')}
        href={props.to}
        target={
            props.target ?? props.to.startsWith('http') ? '_blank' : undefined
        }
    >
        {props.icon && <props.icon className="inline-block mr-2" />}

        {props.children}
    </Link>;
}

export namespace InlineLink {
    export interface Props {
        to: string;
        children?: string | React.ReactNode;
        icon?: IconType;
        target?: string;
    }
}
