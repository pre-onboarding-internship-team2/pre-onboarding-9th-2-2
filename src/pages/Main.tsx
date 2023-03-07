import { Container } from '@chakra-ui/react';

import Header from '@components/Header';
import TravelProduct from '@components/TravelProduct';

function Main() {
  return (
    <Container centerContent>
      <Header />
      <TravelProduct />
    </Container>
  );
}

export default Main;
