import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
// Style
import "styles/globals.css";

//Layout
import AppLayout from "layouts/app-layout/app-layout";

//Swiper
import "swiper/css/bundle";

//Data
import { NoLayoutData } from "utils/Data/NoLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath, pathname } = useRouter();
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    NoLayoutData.forEach((Layoutdata) => {
      console.log(Layoutdata.path);
      if (Layoutdata.path === pathname) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    });
  }, [pathname]);

  return flag ? (
    <Component {...pageProps} />
  ) : (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
