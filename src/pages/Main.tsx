import { Flex } from '@chakra-ui/react';

import Cart from '../components/Cart';
import Header from '../components/Header';
import Product from '../components/Product';
import LocationFilter from '../components/filters/LocationFilter';
import PriceFilter from '../components/filters/PriceFilter';

function Main() {
  return (
    <Flex flexDirection={'column'} m={10}>
      <Header />
      <Flex flexDirection={'column'} mx={10}>
        <Flex my={10} justifyContent={'space-between'}>
          <LocationFilter />
          <PriceFilter />
          <Cart />
        </Flex>
        <Product />
      </Flex>
    </Flex>
  );
}

export default Main;
