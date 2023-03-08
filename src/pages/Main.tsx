import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store/store';
import { getProducts } from 'store/modules/product.slice';
import { Flex } from '@chakra-ui/react';

import ProductItem from 'components/product/ProductItem';

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector((state: any) => state.product.productsList);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" mt={10}>
      {productList &&
        productList.map((product: any) => {
          return <ProductItem key={product.idx} product={product} />;
        })}
    </Flex>
  );
}
