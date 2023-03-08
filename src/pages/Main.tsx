import { Flex } from '@chakra-ui/react';

import TestTravelProduct from '@components//TestTravelProduct';
import Header from '@components/Header';
import TravelProduct from '@components/TravelProduct';

function Main() {
  return (
    <Flex flexDirection={'column'} margin={10}>
      <Header />
      {/* <TravelProduct /> */}
      <TestTravelProduct />
    </Flex>
  );
}

export default Main;
