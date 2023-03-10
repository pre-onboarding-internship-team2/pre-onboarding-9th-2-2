import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import LayoutRoot from "../_layout";
import ReservationBill from "@/components/ReservationBill";
import ReservationList from "@/components/ReservationList";

export default function ReservationsPage() {
  return (
    <>
      <Head>
        <title>List and Cart | reservation</title>
        <meta name="description" content="list and cart reservation page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutRoot>
        <Flex justifyContent="center" direction={{ base: "column", md: "row" }}>
          <ReservationList />
          <ReservationBill />
        </Flex>
      </LayoutRoot>
    </>
  );
}
