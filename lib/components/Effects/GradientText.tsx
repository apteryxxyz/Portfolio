import React from 'react';

export function GradientText(props: GradientText.Props) {
    return <span
        className="font-bold bg-[length:200%] [&>*]:!fill-orange-500
            animate-bg-gradient bg-gradient-to-r
            from-orange-500 via-red-500 to-orange-500"
        style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }}
    >
        {props.children}
    </span>;
}

export namespace GradientText {
    export interface Props {
        children: string | React.ReactNode;
    }
}
