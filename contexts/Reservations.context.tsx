import { TravelItem } from "@/types/travelItem.type";
import { createContext, useCallback, useContext, useState } from "react";

interface ReservationItem extends TravelItem {
  count: number;
}

interface ReservationContextType {
  reservations: ReservationItem[];
}

interface ReservationChangeContextType {
  add(newItem: TravelItem): void;
  remove(idx: TravelItem["idx"]): void;
  checkExist(newItem: TravelItem): boolean;
  increaseCount(idx: number): void;
  decreaseCount(idx: number): void;
  totalAmount: number;
}

const ReservationContext = createContext<ReservationContextType | null>(null);
const ReservationsChangeContext =
  createContext<ReservationChangeContextType | null>(null);

export const useReservations = () => {
  const reservationContext = useContext(ReservationContext);
  if (!reservationContext) {
    throw new Error(
      "useReservations should be used within <ReservationContext.Provider>"
    );
  }
  return reservationContext;
};

export const useReservationsChange = () => {
  const reservationChangeContext = useContext(ReservationsChangeContext);

  if (!reservationChangeContext) {
    throw new Error(
      "useReservationsChange should be used within <reservationChangeContext.Provider>"
    );
  }
  return reservationChangeContext;
};

export function ReservationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [reservations, setReservations] = useState<ReservationItem[]>([]);

  const totalAmount = reservations.reduce<number>((sum, reservationItem) => {
    return sum + reservationItem.price * reservationItem.count;
  }, 0);

  const checkExist = useCallback(
    (newItem: TravelItem) => {
      const exist = reservations.find((item) => item.idx === newItem.idx);
      return !!exist;
    },
    [reservations]
  );

  const add = useCallback((newItem: TravelItem) => {
    setReservations((prevReservations) => [
      ...prevReservations,
      { ...newItem, count: 1 },
    ]);
  }, []);

  const remove = useCallback((idx: TravelItem["idx"]) => {
    setReservations((prevReservations) =>
      prevReservations.filter((item) => item.idx === idx)
    );
  }, []);

  const increaseCount = useCallback(
    (idx: number) => {
      const item = reservations.find((_item) => _item.idx === idx);
      if (!item) return;
      if (item.maximumPurchases === item.count) return;
      setReservations((prevList) => {
        return prevList.map((listItem) => {
          if (listItem.idx === idx) {
            return { ...listItem, count: listItem.count + 1 };
          }
          return listItem;
        });
      });
    },
    [reservations]
  );

  const decreaseCount = useCallback(
    (idx: number) => {
      const item = reservations.find((_item) => _item.idx === idx);
      if (!item) return;
      if (item.maximumPurchases === 1) return;
      setReservations((prevList) => {
        return prevList.map((listItem) => {
          if (listItem.idx === idx) {
            return { ...listItem, count: listItem.count - 1 };
          }
          return listItem;
        });
      });
    },
    [reservations]
  );

  return (
    <ReservationContext.Provider value={{ reservations }}>
      <ReservationsChangeContext.Provider
        value={{
          add,
          remove,
          checkExist,
          totalAmount,
          increaseCount,
          decreaseCount,
        }}
      >
        {children}
      </ReservationsChangeContext.Provider>
    </ReservationContext.Provider>
  );
}
