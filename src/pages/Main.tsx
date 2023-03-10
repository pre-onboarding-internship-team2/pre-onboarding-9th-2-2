import { Flex } from '@chakra-ui/react';

import Header from '../components/Header';
import Product from '../components/Product';
import SideFilter from '../components/SideFilter';

function Main() {
  return (
    <Flex flexDirection={'column'} mx={20} my={10}>
      <Header />
      <Flex w="full" flexDirection={'column'} mt={10}>
        <SideFilter />
        <Product />
      </Flex>
    </Flex>
  );
}

export default Main;
