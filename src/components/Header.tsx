import { Flex, Heading } from '@chakra-ui/react';

import Cart from './cart/Cart';

function Header() {
  return (
    <Flex
      px={5}
      flexDirection="row"
      alignItems={'center'}
      backgroundColor="brand.main"
      justifyContent={'space-between'}
    >
      <Heading my={3} color="brand.main" textColor={'white'}>
        Like a LOCAL
      </Heading>
      <Cart />
    </Flex>
  );
}

export default Header;
