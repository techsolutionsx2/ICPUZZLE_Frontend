import type { AppProps } from "next/app";

// Style
import "styles/globals.css";

//Layout
import AppLayout from "layouts/app-layout/app-layout";

//Swiper
import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
