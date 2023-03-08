import { useState, useEffect } from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/types/product-type";
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
          maximumPurchases: carts[key].maximumPurchases,
        });
      }
      setReservationItems(revalidatedItems);
    }
  }, [carts]);

  return (
    <Container>
      <SimpleGrid templateColumns="repeat(2, 1fr)" gap={4}>
        {reservationItems?.map((item) => (
          <ReservationItem key={item.idx} reservedItem={item} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ReservationsList;
