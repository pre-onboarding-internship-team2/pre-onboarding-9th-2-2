import Empty from "@/components/Empty";
import { Product } from "@/services/product";
import {
  fetchDeleteReserve,
  fetchGetReserve,
  fetchPutReserve,
} from "@/services/reserve";
import {
  Button,
  CloseButton,
  Flex,
  Text,
  useToast,
  Icon,
  Box,
  Center,
} from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import LayoutRoot from "../_layout";

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
      <LayoutRoot>
        {!isSuccess ? (
          <div>error</div>
        ) : reservations.length === 0 ? (
          <Empty text="예약한 상품이 없습니다" />
        ) : (
          <>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Box>
                {reservations.map(({ productInfo, quantity }) => (
                  <Flex
                    width="360px"
                    key={productInfo.idx}
                    justifyContent="space-between"
                    margin={10}
                  >
                    <Image
                      src={productInfo.mainImage}
                      alt={productInfo.name}
                      width={100}
                      height={100}
                      style={{ marginRight: 10 }}
                    />
                    <Flex
                      flexDirection="column"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Flex justifyContent="space-between">
                        <Text fontSize="14px" mr="10px" wordBreak="keep-all">
                          {productInfo.name}
                        </Text>
                        <Icon
                          as={CloseButton}
                          aria-label="Cancel Reserve"
                          onClick={() => deleteReserve(productInfo.idx)}
                        />
                      </Flex>
                      <Flex justifyContent="space-between">
                        <Flex justifyContent="space-between">
                          <Button
                            size="xs"
                            onClick={() =>
                              handleQuantity({
                                productInfo,
                                quantity: quantity + 1,
                              })
                            }
                          >
                            +
                          </Button>
                          <Text textAlign="center" w="35px">
                            {quantity}
                          </Text>
                          <Button
                            size="xs"
                            onClick={() =>
                              handleQuantity({
                                productInfo,
                                quantity: quantity - 1,
                              })
                            }
                          >
                            -
                          </Button>
                        </Flex>
                        <Text fontWeight="bold">
                          {(productInfo.price * quantity).toLocaleString("ko")}
                          원
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                ))}
              </Box>
              <Center
                width="100%"
                position="sticky"
                bottom={0}
                backgroundColor="white"
                borderTop={"1px solid #e8e8e8"}
              >
                <Text fontWeight="bold" fontSize="30px">
                  총 금액 :
                  {reservations
                    .reduce((acc, cur) => {
                      acc += cur.productInfo.price * cur.quantity;
                      return acc;
                    }, 0)
                    .toLocaleString("ko")}
                  원
                </Text>
              </Center>
            </Flex>
          </>
        )}
      </LayoutRoot>
    </>
  );
}
