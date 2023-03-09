import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store/store';
import { getProducts } from 'store/modules/product.slice';
import { Box, Flex } from '@chakra-ui/react';

import ProductItem from 'components/product/ProductItem';
import SpaceFilter from 'components/product/SpaceFilter';
import PriceFilter from 'components/product/PriceFilter';

export default function Main() {
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector((state: any) => state.product.productsList);
  const [selectSpace, setSelectSpace] = useState<string[]>([]);
  const [selectPrice, setselectPrice] = useState<number[]>([0, 100000]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleSelectSpace = (e: React.ChangeEvent<HTMLInputElement>) => {
    const space = e.target;
    if (space.checked) {
      setSelectSpace([...selectSpace, space.value]);
    } else {
      setSelectSpace(selectSpace.filter((data) => data !== space.value));
    }
  };

  const handleSelectPrice = (value: number[]) => {
    setselectPrice(value);
  };

  const filterProducts = (product: any) => {
    const SelectedSpace = selectSpace.length === 0 || selectSpace.includes(product.spaceCategory);
    const SelectedPrice = product.price >= selectPrice[0] && product.price <= selectPrice[1];
    return SelectedSpace && SelectedPrice;
  };

  return (
    <>
      <Box mt="5" flexWrap="wrap" justifyContent="center" alignItems="center">
        <PriceFilter selectPrice={selectPrice} handleSelectPrice={handleSelectPrice} />
        <SpaceFilter handleSelectSpace={handleSelectSpace} />
      </Box>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" mt={10}>
        {productList &&
          productList.filter(filterProducts).map((product: any) => {
            return <ProductItem key={product.idx} product={product} />;
          })}
      </Flex>
    </>
  );
}
