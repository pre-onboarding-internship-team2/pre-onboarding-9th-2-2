import Image from "next/image";
import { Flex, Text, Button, useToast } from "@chakra-ui/react";
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
    <Flex direction="column">
      <Image src={reservedItem.mainImage} alt="" width={300} height={200} />
      <Text>이름 : {reservedItem.name}</Text>
      <Text>가격 : {reservedItem.price}</Text>
      <Button onClick={deleteReservedItemHandler}>삭제</Button>
    </Flex>
  );
};

export default ReservationItem;
