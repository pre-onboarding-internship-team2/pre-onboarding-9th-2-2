import { useReservations } from "@/contexts/Reservations.context";
import { Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { ReservationListItem } from "../components/reservations/ReservationListItem";
import { TotalAmount } from "../components/reservations/TotalAmount";

export default function Reservations() {
  const { reservations } = useReservations();
  return (
    <>
      <Head>
        <title>장바구니</title>
        <meta name="description" content="장바구니 페이지" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Stack py={8} spacing={4}>
        {!reservations.length ? (
          <Text align="center">예약한 상품이 없습니다</Text>
        ) : (
          <>
            {reservations.map((item) => (
              <ReservationListItem
                itemData={item}
                key={item.idx}
              ></ReservationListItem>
            ))}
            <TotalAmount />
          </>
        )}
      </Stack>
    </>
  );
}
