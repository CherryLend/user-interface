import "@/styles/globals.css";
import "react-tooltip/dist/react-tooltip.css";

import type { AppProps } from "next/app";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  );
}
