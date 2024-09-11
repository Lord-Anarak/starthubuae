import "@/styles/globals.css";
import { Poppins } from "next/font/google";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "700"] });

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotivescroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className={poppins.className}>
      <Header />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </main>
  );
}
