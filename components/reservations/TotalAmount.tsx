import { useReservations } from "@/contexts/Reservations.context";
import formatter from "@/lib/valueFormatter";
import { Text } from "@chakra-ui/react";

export function TotalAmount() {
  const { totalAmount } = useReservations();
  return (
    <Text textAlign="right" fontSize="2xl">
      합계 {formatter.price(totalAmount)}
    </Text>
  );
}
