import { Flex } from '@chakra-ui/react';

import Header from '../components/Header';
import Product from '../components/Product';

function Main() {
  return (
    <Flex flexDirection={'column'} margin={10}>
      <Header />
      <Product />
    </Flex>
  );
}

export default Main;
