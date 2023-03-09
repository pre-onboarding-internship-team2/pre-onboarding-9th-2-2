import { fetchGetProduct, Product } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ProductContextProps = {
  products: Product[];
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
  const { data: productOrigin } = useQuery(["products"], fetchGetProduct, {
    select: ({ data }) => data,
  });

  const [products, setProducts] = useState<Product[]>([]);

  const handleFilter: ProductContextProps["handleFilter"] = ({
    locations,
    minPrice,
    maxPrice,
  }) => {
    if (!productOrigin) throw new Error("no data");
    setProducts(
      productOrigin.filter(
        ({ spaceCategory, price }) =>
          price >= minPrice &&
          price <= maxPrice &&
          (locations.length === 0 || locations.includes(spaceCategory))
      )
    );
  };

  useEffect(() => {
    if (productOrigin) setProducts(productOrigin);
  }, [productOrigin]);

  return (
    <ProductContext.Provider value={{ products, handleFilter }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  if (!ProductContext) throw new Error("No Product Context");
  return useContext(ProductContext);
}
