import { Flex } from '@chakra-ui/react';

import Filter from '../components/Filter';
import Header from '../components/Header';
import Product from '../components/Product';

function Main() {
  return (
    <Flex flexDirection={'column'} mx={20} my={10}>
      <Header />
      <Flex w="full" flexDirection={'column'} mt={10}>
        <Filter />
        <Product />
      </Flex>
    </Flex>
  );
}

export default Main;
