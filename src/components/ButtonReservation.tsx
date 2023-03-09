import { Product } from "@/services/product";
import { fetchGetReserve, fetchPostReserve } from "@/services/reserve";
import { Button, useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function ButtonReservation({ product }: { product: Product }) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { data: reservations } = useQuery(["reserve"], fetchGetReserve, {
    select: ({ data }) => data,
  });

  const isReserved = reservations?.some(
    (e) => e.productInfo.idx === product.idx
  );
  const { mutate: postReserve } = useMutation(fetchPostReserve, {
    onSuccess: () => {
      queryClient.invalidateQueries(["reserve"]);
      toast({
        title: "요청에 성공했습니다.",
        description: "장바구니를 확인해주세요",
        status: "success",
        duration: 1500,
        position: "bottom-right",
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: "요청에 실패했습니다",
        description: "장바구니에 이미 담겨있거나 재고가 없습니다",
        status: "error",
        duration: 1500,
        position: "bottom-right",
        isClosable: true,
      });
    },
  });

  return (
    <>
      {!isReserved ? (
        <Button
          variant="outline"
          colorScheme={"blue"}
          width={"100%"}
          onClick={() => {
            postReserve({ productInfo: product, quantity: 1 });
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
            postReserve({ productInfo: product, quantity: 0 });
          }}
        >
          예약취소
        </Button>
      )}
    </>
  );
}
