import { fetchGetProduct, Product } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type ProductContextProps = {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  handleFilter: ({
    locations,
    minPrice,
    maxPrice,
  }: {
    locations: string[];
    minPrice: number;
    maxPrice: number;
  }) => void;
};

const ProductContext = createContext<ProductContextProps>(null!);

export function ProductProvider({ children }: { children: ReactNode }) {
  const { data } = useQuery(["products"], fetchGetProduct, {
    select: ({ data }) => data,
  });

  const [products, setProducts] = useState<Product[]>([]);

  const handleFilter: ProductContextProps["handleFilter"] = ({
    locations,
    minPrice,
    maxPrice,
  }) => {
    if (!data) throw new Error("no data");
    setProducts(
      data.filter(
        ({ spaceCategory, price }) =>
          price > minPrice &&
          price < maxPrice &&
          (locations.length === 0 || locations.includes(spaceCategory))
      )
    );
  };

  useEffect(() => {
    if (data) setProducts(data);
  }, [data]);

  return (
    <ProductContext.Provider value={{ products, setProducts, handleFilter }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  if (!ProductContext) throw new Error("No Product Context");
  return useContext(ProductContext);
}
