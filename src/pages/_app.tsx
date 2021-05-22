import "src/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>nomount-grouping</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <RecoilRoot>
        <props.Component {...props.pageProps} />
      </RecoilRoot>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
