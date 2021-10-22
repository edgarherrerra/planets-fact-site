import "styles/globals.css";

import type { AppProps } from "next/app";

import { appWithTranslation } from "next-i18next";
import { wrapper } from "~/redux/store";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(appWithTranslation(MyApp));
