import { TravelItem } from "@/types/travelItem.type";
import { createContext, useCallback, useContext, useState } from "react";

interface ReservationContextType {
  reservations: TravelItem[];
}

interface ReservationChangeContextType {
  add(newItem: TravelItem): void;
  remove(idx: TravelItem["idx"]): void;
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
  const [reservations, setReservations] = useState<TravelItem[]>([]);

  const add = useCallback(
    (newItem: TravelItem) => {
      const existReservation = reservations.find(
        (item) => item.idx === newItem.idx
      );
      if (existReservation) {
        throw new Error("이미 예약한 상품입니다.");
      }
      setReservations((prevReservations) => [...prevReservations, newItem]);
    },
    [reservations]
  );

  const remove = useCallback((idx: TravelItem["idx"]) => {
    setReservations((prevReservations) =>
      prevReservations.filter((item) => item.idx === idx)
    );
  }, []);

  return (
    <ReservationContext.Provider value={{ reservations }}>
      <ReservationsChangeContext.Provider value={{ add, remove }}>
        {children}
      </ReservationsChangeContext.Provider>
    </ReservationContext.Provider>
  );
}
