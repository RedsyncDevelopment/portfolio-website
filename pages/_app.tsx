import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col lg:flex-row flex-grow w-full ">
        <Navigation />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
