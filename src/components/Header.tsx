import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../redux/hook/redux.hook';

function Header() {
  return (
    <Flex mx={10} flexDirection="row" justifyContent={'center'} alignItems={'center'}>
      <Heading my={3} mx={3} color="brand.main" justifyContent={'center'}>
        Like a LOCAL
      </Heading>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}></Flex>
    </Flex>
  );
}

export default Header;
