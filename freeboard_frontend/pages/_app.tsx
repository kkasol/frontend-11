// import '../styles/globals.css'

import { AppProps } from "next/app";
import ApolloSetting from "../src/commons/apollo";
import LayoutPage from "../src/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />

        <LayoutPage>
          <Component {...pageProps} />;
        </LayoutPage>
      </>
    </ApolloSetting>
  );
}
