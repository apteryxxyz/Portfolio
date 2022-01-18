import React, { useEffect } from 'react';
import '../styles/index.css';
import Head from 'next/head';
import Router from 'next/router';

export default function _App({ Component, pageProps }) {
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
