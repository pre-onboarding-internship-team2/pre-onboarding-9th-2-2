import {
  ReservationItem,
  useReservationsChange,
} from "@/contexts/Reservations.context";
import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export function DeleteButton({ idx }: { idx: ReservationItem["idx"] }) {
  const { remove } = useReservationsChange();
  return (
    <IconButton
      onClick={() => remove(idx)}
      aria-label="삭제"
      color="red"
      icon={<DeleteIcon />}
      variant="unstyled"
      fontSize="2xl"
      size="lg"
    />
  );
}
