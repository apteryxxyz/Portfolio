import '#/styles/common.css';
import 'animate.css/animate.min.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { MouseLight } from '#/components/Effects/MouseLight';
import { injectEventEmitters } from '#/hooks/useEventListener';

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => injectEventEmitters(), []);

    return <apteryx className="">
        <main className="flex flex-col [&>*]:z-[2]">
            <Component {...pageProps} />
        </main>

        <MouseLight />
    </apteryx>;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            apteryx: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}
