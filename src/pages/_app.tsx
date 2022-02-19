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
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    NoLayoutData.forEach((Layoutdata) => {
      console.log(Layoutdata.path);
      console.log(pathname);
      if (Layoutdata.path === pathname) {
        setFlag(1);

        return;
      } else {
        setFlag(0);
      }
    });
  }, [pathname]);
  console.log(flag);

  return flag ? (
    <Component {...pageProps} />
  ) : (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
