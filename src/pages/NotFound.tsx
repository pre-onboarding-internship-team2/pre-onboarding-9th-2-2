import { Flex, Heading } from '@chakra-ui/react';

function NotFound() {
  return (
    <Flex flexDir="column" justifyContent={'center'} alignItems={'center'} marginTop="10">
      <Heading marginBottom="5">404</Heading>

      <Heading marginBottom="5">Not Found</Heading>
    </Flex>
  );
}

export default NotFound;
