import { TravelItem } from "@/types/travelItem.type";
import { createContext, useContext } from "react";

interface TravelItemsContextType {
  travelItems: TravelItem[];
}
const TravelItemsContext = createContext<TravelItemsContextType | null>(null);

export const useTravelItems = () => {
  const travelItemsContext = useContext(TravelItemsContext);

  if (!travelItemsContext) {
    throw new Error(
      "useTravelItems should be used within TravelItemsContext provider"
    );
  }
  return travelItemsContext;
};

export function TravelItemsProvider({
  children,
  travelItems,
}: {
  children: React.ReactNode;
  travelItems: TravelItem[];
}) {
  return (
    <TravelItemsContext.Provider value={{ travelItems }}>
      {children}
    </TravelItemsContext.Provider>
  );
}
