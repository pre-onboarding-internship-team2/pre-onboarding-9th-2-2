import { Product } from "@/services/product";
import {
  fetchDeleteReserve,
  fetchGetReserve,
  fetchPutReserve,
} from "@/services/reserve";
import { Button, useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Head from "next/head";

export default function ReservationsPage() {
  const queryClient = useQueryClient();
  const toast = useToast();
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

  const handleQuantity = ({
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

  return (
    <>
      <Head>
        <title>List and Cart | reservation</title>
        <meta name="description" content="list and cart reservation page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isSuccess ? (
        <div>error</div>
      ) : reservations.length === 0 ? (
        <div>no reservation</div>
      ) : (
        <>
          {reservations.map(({ productInfo, quantity }) => (
            <>
              <div key={productInfo.idx}>{productInfo.name}</div>
              <Button
                onClick={() =>
                  handleQuantity({ productInfo, quantity: quantity + 1 })
                }
              >
                +
              </Button>
              <span>{quantity}</span>
              <Button
                onClick={() =>
                  handleQuantity({ productInfo, quantity: quantity - 1 })
                }
              >
                -
              </Button>
              <div>금액 : {productInfo.price} </div>
              <div>합산 : {productInfo.price * quantity} </div>
              <Button onClick={() => deleteReserve(productInfo.idx)}>
                삭제
              </Button>
            </>
          ))}
          <div>
            총 금액 :
            {reservations.reduce((acc, cur) => {
              acc += cur.productInfo.price * cur.quantity;
              return acc;
            }, 0)}
          </div>
        </>
      )}
    </>
  );
}
