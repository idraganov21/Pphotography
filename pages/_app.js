import CavaniState from "@/src/Context";
import CavaniHead from "@/src/layout/CavaniHead";
import "@/styles/globals.css";
import { appWithTranslation } from 'next-i18next'

 function App({ Component, pageProps }) {
  return (
    <CavaniState>
      <CavaniHead />
      <Component {...pageProps} />
    </CavaniState>
  );
}

export default appWithTranslation(App);
