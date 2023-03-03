import Head from 'next/head';

export function Seo(props: Seo.Props) {
    return <Head>
        {/* Basic */}
        <title>{props.title}</title>
        <meta name="theme-color" content="#3884f8" />

        {/* Third party */}
        <meta name="darkreader-lock" />
        <meta name="robots" content={props.noIndex ? 'noindex' : 'index'} />

        {/* Branding */}
        <link
            rel="apple-touch-icon"
            sizes="140x140"
            href="/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {props.children}
    </Head>;
}

export namespace Seo {
    export interface Props {
        title: string;
        noIndex?: boolean;
        children?: React.ReactNode | React.ReactNode[];
    }
}
