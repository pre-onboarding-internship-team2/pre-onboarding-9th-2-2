import React, { useEffect } from 'react';
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { getProduct } from 'apis/api';
import { ProductType } from 'components/product/PtoductItem.Type';

interface ProductContextProps {
  productList: ProductType[];
};

export const ProductContext = createContext<ProductContextProps>(null!);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [productList, setProductList] = useState<ProductType[]>([]);

  useEffect(() => {
    getProduct().then(({ data }) => setProductList(data));
  }, []);

  return <ProductContext.Provider value={{ productList }}>{children}</ProductContext.Provider>;
}