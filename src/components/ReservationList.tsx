import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, CloseButton, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import Empty from "./Empty";
import { useReservation } from "./ReservationHooks";

export default function ReservationList() {
  const { reservations, isSuccess, handleReserveQuantity, deleteReserve } =
    useReservation();
  return (
    <>
      {!isSuccess || reservations === undefined ? (
        "error"
      ) : reservations.length === 0 ? (
        <Empty text="예약한 상품이 없습니다" />
      ) : (
        <Box>
          {reservations.map(({ productInfo, quantity }) => (
            <Flex
              minWidth={{ base: "360px", md: "420px" }}
              key={productInfo.idx}
              justifyContent="space-between"
              p="40px"
              _notFirst={{
                borderTop: "1px solid #e8e8e8",
              }}
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
                  <CloseButton
                    aria-label="Cancel Reserve"
                    onClick={() => deleteReserve(productInfo.idx)}
                  />
                </Flex>
                <Flex justifyContent="space-between">
                  <Flex justifyContent="space-between">
                    <IconButton
                      icon={<AddIcon />}
                      aria-label="add item"
                      size="xs"
                      onClick={() =>
                        handleReserveQuantity({
                          productInfo,
                          quantity: quantity + 1,
                        })
                      }
                    />
                    <Text textAlign="center" w="35px">
                      {quantity}
                    </Text>
                    <IconButton
                      icon={<MinusIcon />}
                      aria-label="minus item"
                      size="xs"
                      onClick={() =>
                        handleReserveQuantity({
                          productInfo,
                          quantity: quantity - 1,
                        })
                      }
                    >
                      -
                    </IconButton>
                  </Flex>
                  <Text fontWeight="bold">
                    {(productInfo.price * quantity).toLocaleString("ko")}원
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Box>
      )}
    </>
  );
}
