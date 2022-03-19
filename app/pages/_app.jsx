import React, { useEffect } from 'react';
import { Head, Router } from 'blitz';
import 'app/styles/index.css';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        const scroll = () => window.scrollTo(0, 0);
        Router.events.on('routeChangeComplete', scroll);
        return () => Router.events.off('routeChangeComplete', scroll);
    }, []);

    return <>
        <Head>
            <title>Apteryx</title>
            <link rel="shortcut icon" href="/gunglasses.png" />
        </Head>
        <Component {...pageProps} />
    </>
}
