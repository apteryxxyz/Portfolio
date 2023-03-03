import React from 'react';

export function HighlightText(props: HighlightText.Props) {
    return <span className="text-orange-300 [&>*]:!fill-orange-300">
        {props.children}
    </span>;
}

export namespace HighlightText {
    export interface Props {
        children: string | React.ReactNode;
    }
}
