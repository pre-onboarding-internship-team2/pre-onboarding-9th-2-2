import {
  ReservationItem,
  useReservationsChange,
} from "@/contexts/Reservations.context";
import { Button } from "@chakra-ui/react";

export function CountButton({
  type,
  idx,
}: {
  type: "increase" | "decrease";
  idx: ReservationItem["idx"];
}) {
  const { increaseCount, decreaseCount } = useReservationsChange();

  const fn = type === "increase" ? increaseCount : decreaseCount;
  const label = type === "increase" ? "+" : "-";
  return (
    <Button
      variant="outline"
      colorScheme="blue"
      size="sm"
      onClick={() => {
        fn(idx);
      }}
    >
      {label}
    </Button>
  );
}
