import { ItemType, toSavedItemType } from "../../types/Item.type";
import { useAppDispatch } from "../../hooks/useRedux";
import { addToRV } from "../../store/reservation/reservationSlice";
import { Button, useToast } from "@chakra-ui/react";

const AddButton = ({ item }: { item: ItemType }) => {
  const toast = useToast();

  const dispatch = useAppDispatch();
  const handleAddToRV = (item: toSavedItemType) => {
    dispatch(addToRV(item));
    toast({
      title: "상품이 성공적으로 장바구니에 담겼습니다.",
      description: "장바구니를 확인해주세요",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Button
      backgroundColor="#C0D1FF"
      borderRadius="5"
      onClick={() => {
        handleAddToRV(item);
      }}
    >
      예약하기
    </Button>
  );
};

export default AddButton;
