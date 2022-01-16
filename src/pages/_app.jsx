import '../styles/index.css';
import Head from 'next/head';

export default function _App({ Component, pageProps }) {
    return <>
        <Head>
            <title>Apteryx</title>
            <link rel="shortcut icon" href="/gunglasses.png" />
        </Head>
        <Component {...pageProps} />
    </>
}
