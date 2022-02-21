import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter, Router } from "next/router";

// Style
import "styles/globals.css";

//Layout
import AppLayout from "layouts/app-layout/app-layout";

//loading
import { Loading } from "components/Loading";

//Swiper
import "swiper/css/bundle";

//Data
import { NoLayoutData } from "utils/Data/NoLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath, pathname } = useRouter();
  const [showLayout, setShowLayout] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    if (NoLayoutData.includes(pathname)) {
      setShowLayout(true);
    }
  }, [pathname]);

  Router.events.on("routeChangeStart", () => setShowLoading(true));
  Router.events.on("routeChangeComplete", () => setShowLoading(false));
  Router.events.on("routeChangeError", () => setShowLoading(false));

  return showLoading ? (
    <Loading />
  ) : showLayout ? (
    <Component {...pageProps} />
  ) : (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
