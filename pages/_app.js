import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/responsive.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Explore Future</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
