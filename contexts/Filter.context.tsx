import { SpaceCategory } from "@/types/travelItem.type";
import { useRouter } from "next/router";
import { createContext, useCallback, useContext, useState } from "react";

interface FilterState {
  price: { start: number | null; end: number | null };
  spaces: SpaceCategory[];
}

interface FilterContextType extends FilterState {
  addSpace: (newSpace: SpaceCategory) => void;
  removeSpace: (spaceRemoving: SpaceCategory) => void;
  changePrice: ({ start, end }: { start: number; end: number }) => void;
  resetAll: () => void;
}

const FilterContext = createContext<FilterContextType | null>(null);

export const useFilterContext = () => {
  const filterContext = useContext(FilterContext);
  if (!filterContext) {
    throw new Error(
      "useFilter should be used withing <FilterContext.provider>"
    );
  }
  return filterContext;
};

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [price, setPrice] = useState<FilterState["price"]>({
    start: null,
    end: null,
  });
  const [spaces, setSpaces] = useState<FilterState["spaces"]>([]);

  const changePrice = useCallback(
    ({ start, end }: { start: number; end: number }) => {
      setPrice({ start, end });
    },
    []
  );
  const addSpace = useCallback(
    (newSpace: SpaceCategory) => {
      if (spaces.includes(newSpace)) return;
      setSpaces((prev) => [...prev, newSpace]);
    },
    [spaces]
  );
  const removeSpace = useCallback((spaceRemoving: SpaceCategory) => {
    setSpaces((prev) => prev.filter((space) => space !== spaceRemoving));
  }, []);

  const resetAll = useCallback(() => {
    setPrice({ start: null, end: null });
    setSpaces([]);
  }, []);
  return (
    <FilterContext.Provider
      value={{
        price,
        spaces,
        changePrice,
        addSpace,
        removeSpace,
        resetAll,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
