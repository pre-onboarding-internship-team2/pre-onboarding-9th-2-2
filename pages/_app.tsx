import PageLayout from "@/components/PageLayout";
import { ReservationsProvider } from "@/contexts/Reservations.context";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ReservationsProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ReservationsProvider>
    </ChakraProvider>
  );
}
