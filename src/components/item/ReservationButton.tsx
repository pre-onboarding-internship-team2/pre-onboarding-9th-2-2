import { ItemType } from "../../types/Item.type";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import {
  addToReserVation,
  removeFromReserVation,
} from "../../store/reservation/reservationSlice";
import { Button, useToast } from "@chakra-ui/react";

const ReservationButton = ({ item }: { item: ItemType }) => {
  const toast = useToast();
  const savedItems = useAppSelector((state) => state.reservation.savedItems);

  const dispatch = useAppDispatch();
  const handleAddToReservation = (item: ItemType) => {
    dispatch(addToReserVation(item));
    toast({
      title: "상품이 성공적으로 장바구니에 담겼습니다.",
      description: "장바구니를 확인해주세요",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  const handleRemoveFromReservation = (item: ItemType) => {
    dispatch(removeFromReserVation(item));
    toast({
      title: "상품 예약을 취소하였습니다.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      {savedItems.some((savedItem) => savedItem.idx === item.idx) ? (
        <Button
          backgroundColor="#C0D1FF"
          borderRadius="5"
          onClick={() => {
            handleRemoveFromReservation(item);
          }}
        >
          예약취소
        </Button>
      ) : (
        <Button
          backgroundColor="#C0D1FF"
          borderRadius="5"
          onClick={() => {
            handleAddToReservation(item);
          }}
        >
          예약하기
        </Button>
      )}
    </>
  );
};

export default ReservationButton;
