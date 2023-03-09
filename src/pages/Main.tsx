import { Flex } from '@chakra-ui/react';

import Filter from '../components/Filter';
import Header from '../components/Header';
import Product from '../components/Product';

function Main() {
  return (
    <Flex flexDirection={'column'} margin={10}>
      <Header />
      <Filter />
      <Product />
    </Flex>
  );
}

export default Main;
