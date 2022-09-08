import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
