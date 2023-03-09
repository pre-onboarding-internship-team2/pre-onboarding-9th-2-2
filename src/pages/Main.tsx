import { Flex } from '@chakra-ui/react';

import Cart from '../components/Cart';
import Header from '../components/Header';
import Product from '../components/Product';
import SpaceFilter from '../components/SpaceFilter';

function Main() {
  return (
    <Flex flexDirection={'column'} m={10}>
      <Header />
      <Flex flexDirection={'column'} mx={10}>
        <Flex my={10} justifyContent={'space-between'}>
          <SpaceFilter />
          <Cart />
        </Flex>
        <Product />
      </Flex>
    </Flex>
  );
}

export default Main;
