import "../css/main.css";
import "../css/bootstrap.css";
import "../css/magnific-popup.css";
import "../css/fonts.css";

import { AppProps } from "next/app";
import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const TinaWrapper = dynamic(() => import("../components/TinaWrapper"));

const App = ({ Component, pageProps }: AppProps): any => {
  const { route } = useRouter();

  if (route.startsWith("/admin")) {
    return (
      <TinaWrapper>
        <Component {...pageProps} />
      </TinaWrapper>
    );
  }

  return <Component {...pageProps} />;
};
export default App;
