import "@/styles/globals.css";
import "../styles/layout.module.scss";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../authContext/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />;
    </AuthContextProvider>
  );
}
