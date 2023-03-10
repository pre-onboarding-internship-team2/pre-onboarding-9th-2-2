import { Flex, Heading } from '@chakra-ui/react';

function EmptyCart() {
  return (
    <Flex flexDir="column" justifyContent={'center'} alignItems={'center'} marginTop="10">
      <Heading size={'md'} marginBottom="5">
        장바구니가 비어있습니다.
      </Heading>
    </Flex>
  );
}

export default EmptyCart;
