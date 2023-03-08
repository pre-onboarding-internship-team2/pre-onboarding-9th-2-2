import { Flex } from '@chakra-ui/react';

import Header from '@components/Header';
import TravelProduct from '@components/TravelProduct';

function Main() {
  return (
    <Flex flexDirection={'column'} margin={10}>
      <Header />
      <TravelProduct />
    </Flex>
  );
}

export default Main;
