import { useReservationsChange } from "@/contexts/Reservations.context";
import { TravelItem } from "@/types/travelItem.type";
import { Button, useToast } from "@chakra-ui/react";
import { MouseEventHandler, useCallback } from "react";

const ReserveButton = ({ travelItem }: { travelItem: TravelItem }) => {
  const { add: addToReservationList, checkExist } = useReservationsChange();
  const toast = useToast();
  const handleReservationButton: MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (e) => {
        e.stopPropagation();
        const hasSameReservation = checkExist(travelItem);
        if (hasSameReservation) {
          toast({
            title: "동일한 상품이 장바구니에 담겨 있습니다",
            status: "warning",
          });
          return;
        }
        addToReservationList(travelItem);
        toast({
          title: `'${travelItem.name}'을 장바구니에 담았습니다`,
          status: "success",
        });
      },
      [addToReservationList, checkExist, toast, travelItem]
    );
  return (
    <Button variant="solid" colorScheme="red" onClick={handleReservationButton}>
      예약하기
    </Button>
  );
};

export default ReserveButton;
