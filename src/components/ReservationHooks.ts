import { Product } from "@/services/product";
import {
  fetchDeleteReserve,
  fetchGetReserve,
  fetchPutReserve,
} from "@/services/reserve";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useReservation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { data: reservations, isSuccess } = useQuery(
    ["reserve"],
    fetchGetReserve,
    {
      select: ({ data }) =>
        data.sort((a, b) => Number(b.reserveDate) - Number(a.reserveDate)),
    }
  );

  const { mutate: putReserve } = useMutation(fetchPutReserve, {
    onSuccess: () => {
      queryClient.invalidateQueries(["reserve"]);
    },
  });

  const { mutate: deleteReserve } = useMutation(fetchDeleteReserve, {
    onSuccess: (props) => {
      queryClient.invalidateQueries(["reserve"]);

      toast({
        title: "요청에 성공했습니다.",
        description: `삭제 완료 : ${props.data[0].productInfo.name}`,
        status: "success",
        duration: 1500,
        position: "bottom-right",
        isClosable: true,
      });
    },
  });

  const handleReserveQuantity = ({
    productInfo,
    quantity,
  }: {
    productInfo: Product;
    quantity: number;
  }) => {
    if (quantity === 0) {
      toast({
        title: "요청에 실패했습니다.",
        description: "0개 이하로 설정할 수 없습니다.",
        status: "error",
        duration: 1500,
        position: "bottom-right",
        isClosable: true,
      });
      return;
    }
    if (quantity > productInfo.maximumPurchases) {
      toast({
        title: "요청에 실패했습니다.",
        description: `1인당 최대 구매 개수 이상 담을 수 없습니다.`,
        status: "error",
        duration: 1500,
        position: "bottom-right",
        isClosable: true,
      });
      return;
    }
    putReserve({
      idx: productInfo.idx,
      props: { productInfo, quantity },
    });
  };

  return { reservations, isSuccess, handleReserveQuantity, deleteReserve };
};
