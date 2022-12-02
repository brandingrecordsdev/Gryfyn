/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
