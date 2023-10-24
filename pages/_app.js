import Head from "next/head";
import PagesLoaderContext from '@/context/usePagesLoaderContext';
import "@/styles/external.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";

export default function App({ Component, pageProps }) {
  return (
    <PagesLoaderContext.Provider>
      <Head>
        <title>Explore Future</title>
      </Head>
      <Component {...pageProps} />
    </PagesLoaderContext.Provider>
  );
}
