import "src/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

const App = (props: AppProps) => {
  return (
    <RecoilRoot>
      <Head>
        <title>nomount-grouping</title>
      </Head>
      <props.Component {...props.pageProps} />
    </RecoilRoot>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
