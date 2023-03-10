import React, { useState } from "react";
import Image from "next/image";
import {
  Flex,
  Text,
  Button,
  useToast,
  Stack,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { ProductType } from "@/types/product.type";
import {
  deleteReservedItem,
  updateReservedItem,
} from "@/helpers/reserve-action";

interface ReservationItemProps {
  reservedItem: ProductType;
}

const ReservationItem = ({ reservedItem }: ReservationItemProps) => {
  const [count, setCount] = useState(reservedItem.quantity as number);
  const queryClient = useQueryClient();
  const toast = useToast();

  const deleteReservedItemHandler = async () => {
    const deletedId = reservedItem.idx;
    await deleteReservedItem({ deletedId }).then((res) => {
      if (res.status === 200) {
        toast({
          title: "Product Removed.",
          description: "Product has well removed from your cart.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    });
    queryClient.invalidateQueries({ queryKey: ["carts"] });
  };

  const updateReservedItemHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation();
    const { name } = e.currentTarget;
    if (name === "count-up") {
      setCount((prev) => prev + 1);
      await updateReservedItem({ idx: reservedItem.idx, quantity: count + 1 });
    } else {
      setCount((prev) => prev - 1);
      await updateReservedItem({ idx: reservedItem.idx, quantity: count - 1 });
    }
    queryClient.invalidateQueries({ queryKey: ["carts"] });
  };

  return (
    <Flex
      pb="0.8rem"
      minW="20rem"
      direction="column"
      boxShadow="dark-lg"
      borderRadius="10px"
    >
      <Stack mb="2px" pos="relative" w="full" h="250px">
        <Image
          style={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
          fill
          src={reservedItem.mainImage}
          alt=""
        />
      </Stack>
      <Stack mb="10px" px="10px">
        <Badge color="white" maxW="max-content" bg="green">
          {reservedItem.spaceCategory}
        </Badge>
        <Text>이름 : {reservedItem.name}</Text>
        <Text>등록 번호 : {reservedItem.idx}</Text>
        <Text>최대 수량 : {reservedItem.maximumPurchases}</Text>
        <Text>가격 : {reservedItem.price}</Text>
      </Stack>
      <HStack mb={5} placeSelf="center" spacing={5}>
        <Button
          name="count-down"
          onClick={(e) => updateReservedItemHandler(e)}
          variant="outline"
          colorScheme="teal"
          isDisabled={count === 1}
        >
          -
        </Button>
        <Text>{count}</Text>
        <Button
          name="count-up"
          onClick={(e) => updateReservedItemHandler(e)}
          variant="outline"
          colorScheme="teal"
          isDisabled={count === reservedItem.maximumPurchases}
        >
          +
        </Button>
      </HStack>
      <Button w="10rem" placeSelf="center" onClick={deleteReservedItemHandler}>
        삭제
      </Button>
    </Flex>
  );
};

export default React.memo(ReservationItem);
