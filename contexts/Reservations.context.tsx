import { TravelItem } from "@/types/travelItem.type";
import { createContext, useCallback, useContext, useState } from "react";

interface ReservationContextType {
  reservations: TravelItem[];
}

interface ReservationChangeContextType {
  add(newItem: TravelItem): void;
  remove(idx: TravelItem["idx"]): void;
  checkExist(newItem: TravelItem): boolean;
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

  const checkExist = useCallback(
    (newItem: TravelItem) => {
      const exist = reservations.find((item) => item.idx === newItem.idx);
      return !!exist;
    },
    [reservations]
  );

  const add = useCallback((newItem: TravelItem) => {
    setReservations((prevReservations) => [...prevReservations, newItem]);
  }, []);

  const remove = useCallback((idx: TravelItem["idx"]) => {
    setReservations((prevReservations) =>
      prevReservations.filter((item) => item.idx === idx)
    );
  }, []);

  return (
    <ReservationContext.Provider value={{ reservations }}>
      <ReservationsChangeContext.Provider value={{ add, remove, checkExist }}>
        {children}
      </ReservationsChangeContext.Provider>
    </ReservationContext.Provider>
  );
}
