import { useState, useEffect } from "react";
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
    <section>
      <ul>
        {reservationItems?.map((item) => (
          <ReservationItem key={item.idx} reservedItem={item} />
        ))}
      </ul>
    </section>
  );
};

export default ReservationsList;
