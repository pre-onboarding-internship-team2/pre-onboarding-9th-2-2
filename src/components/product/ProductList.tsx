import React, { useContext, useState } from 'react';
import ProductItem from './ProductItem';
import { Flex } from '@chakra-ui/react';
import {ProductContext} from 'context/ProductContext'

export default function ProductList() {
  const { productList } = useContext(ProductContext);

  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" mt={10}>
      {productList.map((product: any) => {
        return <ProductItem key={product.idx} product={product} />;
      })}
    </Flex>
  );
};

