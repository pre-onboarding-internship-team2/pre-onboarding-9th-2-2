import Image from "next/image";
import { Flex, Text, Button, useToast, Stack, Badge } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { ProductType } from "@/types/product-type";

interface ReservationItemProps {
  reservedItem: ProductType;
}

const ReservationItem = ({ reservedItem }: ReservationItemProps) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const deleteReservedItemHandler = async () => {
    const deletedId = reservedItem.idx;
    await fetch(`/api/reservations`, {
      method: "DELETE",
      body: JSON.stringify({
        deletedId,
      }),
    }).then((res) => {
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
        <Text>가격 : {reservedItem.price}</Text>
      </Stack>
      <Button w="10rem" placeSelf="center" onClick={deleteReservedItemHandler}>
        삭제
      </Button>
    </Flex>
  );
};

export default ReservationItem;
