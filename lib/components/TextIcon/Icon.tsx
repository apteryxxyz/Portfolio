import type { IconType } from 'react-icons';
import { HighlightText } from '../Effects/HighlightText';

export function Icon(props: Icon.Props) {
    return <HighlightText>
        {props.icon && <props.icon className="inline mb-1" />} {props.text}
    </HighlightText>;
}

export namespace Icon {
    export interface Props {
        icon: IconType;
        text: string;
    }
}
