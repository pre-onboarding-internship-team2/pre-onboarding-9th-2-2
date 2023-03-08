import { Product } from "@/services/product";
import { reservationStorage } from "@/utils/storage";
import { Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

export default function ButtonReservation({ product }: { product: Product }) {
  const toast = useToast();
  const [isReserved, setIsReserved] = useState(
    reservationStorage.include(product)
  );

  const handleReserve = () => {
    const isSuccess = reservationStorage.set(product);
    if (isSuccess)
      toast({
        title: "예약되었습니다",
        description: "장바구니를 확인해주세요",
        status: "success",
        duration: 1500,
        position: "bottom-right",
        isClosable: true,
      });
    else
      toast({
        title: "예약에 실패했습니다",
        description: "장바구니에 이미 담겨있거나 재고가 없습니다",
        status: "error",
        duration: 1500,
        position: "bottom-right",
        isClosable: true,
      });
  };

  const handleCancelReserve = () => {
    const isSuccess = reservationStorage.remove(product);
    if (isSuccess)
      toast({
        title: "예약이 취소되었습니다",
        description: "장바구니를 확인해주세요",
        status: "warning",
        duration: 1500,
        position: "bottom-right",
        isClosable: true,
      });
    else
      toast({
        title: "예약 취소에 실패했습니다",
        description: "관리자에게 문의해주세요",
        status: "error",
        duration: 1500,
        position: "bottom-right",
        isClosable: true,
      });
  };

  return (
    <>
      {!isReserved ? (
        <Button
          variant="solid"
          width={"100%"}
          onClick={() => {
            handleReserve();
            setIsReserved(true);
          }}
        >
          예약하기
        </Button>
      ) : (
        <Button
          variant="outline"
          width={"100%"}
          colorScheme="red"
          onClick={() => {
            handleCancelReserve();
            setIsReserved(false);
          }}
        >
          예약취소
        </Button>
      )}
    </>
  );
}
