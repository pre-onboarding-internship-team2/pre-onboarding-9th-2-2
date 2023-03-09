import { fetchGetReserve } from "@/services/reserve";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function ReservationBill() {
  const { data: reservations, isSuccess } = useQuery(
    ["reserve"],
    fetchGetReserve,
    {
      select: ({ data }) => data,
    }
  );
  return (
    <>
      {!isSuccess ? (
        "error"
      ) : reservations.length === 0 ? null : (
        <Flex
          direction={{ base: "row", md: "column" }}
          justifyContent="space-around"
          alignItems="center"
          py={{ md: "30px" }}
          position="sticky"
          top={41}
          bottom={0}
          textAlign="center"
          width="100%"
          height="100%"
          backgroundColor="white"
          borderTop="1px solid #e8e8e8"
          fontWeight="bold"
          fontSize="20px"
        >
          <Text>
            총 금액 :
            {reservations
              .reduce((acc, cur) => {
                acc += cur.productInfo.price * cur.quantity;
                return acc;
              }, 0)
              .toLocaleString("ko")}
            원
          </Text>
          <Button w={{ md: "80%" }}>결제하기</Button>
        </Flex>
      )}
    </>
  );
}
