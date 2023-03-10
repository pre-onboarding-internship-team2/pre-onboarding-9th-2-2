import { useState, useEffect } from "react";
import {
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Flex,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/types/product.type";
import ReservationItem from "./reservation-item";

interface ReservationsListProps {
  data: ProductType[];
}

const ReservationsList = ({ data }: ReservationsListProps) => {
  const [reservationItems, setReservationItems] = useState(data);

  const { data: carts } = useQuery<ProductType[]>(
    ["carts"],
    () =>
      fetch(`/api/reservations`)
        .then((res) => res.json())
        .then((data) => data.cart),
    { staleTime: Infinity },
  );

  useEffect(() => {
    if (carts) {
      const revalidatedItems = [];
      for (const key in carts) {
        revalidatedItems.push({
          idx: carts[key].idx,
          name: carts[key].name,
          mainImage: carts[key].mainImage,
          price: carts[key].price,
          spaceCategory: carts[key].spaceCategory,
          maximumPurchases: carts[key].maximumPurchases,
          quantity: carts[key].quantity,
        });
      }
      setReservationItems(revalidatedItems);
    }
  }, [carts]);

  const totalQuantity =
    reservationItems.length > 0
      ? reservationItems
          .map((item) => item.quantity)
          .reduce((acc, cur) => acc + cur, 0)
      : 0;

  const totalPrice =
    reservationItems.length > 0
      ? reservationItems
          .map((item) => item.price * item.quantity)
          .reduce((acc, cur) => acc + cur, 0)
      : 0;

  return (
    <>
      <StatGroup>
        <Stat mr={4} display="flex" justifyContent="flex-end">
          <StatLabel>총 개수</StatLabel>
          <StatNumber>{totalQuantity}</StatNumber>
        </Stat>
        <Stat ml={4}>
          <StatLabel>총 비용</StatLabel>
          <StatNumber>{totalPrice}</StatNumber>
        </Stat>
      </StatGroup>
      <Flex p="10px" justify="center">
        {reservationItems.length === 0 ? (
          <Heading pt="50px" as="h2" size="xl">
            예약된 상품이 없습니다.
          </Heading>
        ) : (
          <SimpleGrid templateColumns="repeat(2, 1fr)" gap={4}>
            {reservationItems?.map((item) => (
              <ReservationItem key={item.idx} reservedItem={item} />
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </>
  );
};

export default ReservationsList;
