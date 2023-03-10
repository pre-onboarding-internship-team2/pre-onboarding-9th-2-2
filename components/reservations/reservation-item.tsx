import React from "react";
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
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { ProductType } from "@/types/product.type";
import {
  deleteReservedItem,
  updateReservedItem,
} from "@/helpers/reserve-action";

interface ReservationItemProps {
  reservedItem: ProductType;
}

const ReservationItem = ({ reservedItem }: ReservationItemProps) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const deleteMutation = useMutation({
    mutationFn: (data: { deletedId: number }) => {
      return deleteReservedItem(data);
    },
    onSettled: () => queryClient.invalidateQueries(["carts"]),
  });
  const updateMutation = useMutation({
    mutationFn: (data: { idx: number; quantity: number }) => {
      return updateReservedItem(data);
    },
    onSettled: () => queryClient.invalidateQueries(["carts"]),
  });

  const deleteReservedItemHandler = async () => {
    const deletedId = reservedItem.idx;
    await deleteMutation.mutateAsync({ deletedId }).then((res) => {
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
  };

  const updateReservedItemHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation();
    const { name } = e.currentTarget;
    if (name === "count-up") {
      await updateMutation.mutateAsync({
        idx: reservedItem.idx,
        quantity: reservedItem.quantity + 1,
      });
    } else {
      await updateMutation.mutateAsync({
        idx: reservedItem.idx,
        quantity: reservedItem.quantity - 1,
      });
    }
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
          isDisabled={reservedItem.quantity === 1}
        >
          -
        </Button>
        <Text>{reservedItem.quantity}</Text>
        <Button
          name="count-up"
          onClick={(e) => updateReservedItemHandler(e)}
          variant="outline"
          colorScheme="teal"
          isDisabled={reservedItem.quantity === reservedItem.maximumPurchases}
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
