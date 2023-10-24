import Head from "next/head";
import "@/styles/external.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Explore Future</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
