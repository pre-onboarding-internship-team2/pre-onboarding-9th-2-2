import { Stack, Flex, Text, Button } from "@chakra-ui/react";
import { ProductType } from "@/types/product-type";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

interface ReservationItemProps {
  reservedItem: ProductType;
}

const ReservationItem = ({ reservedItem }: ReservationItemProps) => {
  const queryClient = useQueryClient();

  const deleteReservedItemHandler = async () => {
    const deletedId = reservedItem.idx;
    await fetch(`/api/reservations`, {
      method: "DELETE",
      body: JSON.stringify({
        deletedId,
      }),
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
