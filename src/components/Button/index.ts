import dynamic from "next/dynamic";

export { default as ScrollTop } from "./ScrollTop/ScrollTop";
// export { default as WalletConnect } from "./WalletConnect/WalletConnect";

export const WalletConnect = dynamic(
  () => import("./WalletConnect/WalletConnect"),
  {
    ssr: false,
  }
);
