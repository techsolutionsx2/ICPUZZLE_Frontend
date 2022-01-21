import type { AppProps } from "next/app";
import "styles/globals.css";

import AppLayout from "layouts/app-layout/app-layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
