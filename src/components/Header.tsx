import { Box, Button, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../redux/store';

function Header() {
  const cartProducts = useSelector((state: RootState) => state.cart);
  const totalQuant = cartProducts.totalQuant;

  return (
    <Flex flexDirection="row" justifyContent={'space-between'} alignItems={'center'}>
      <Heading my={3} mb={10} color="brand.main">
        Like a LOCAL
      </Heading>

      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link to="/cart">
          <Button outline="none" boxShadow="none" rightIcon={<AiOutlineShoppingCart />}>
            My Cart
          </Button>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            right="30px"
            top="20px"
            width="20px"
            background="#383e47"
            borderRadius="100%"
            borderColor="#dfe4ed"
            color="white"
            fontSize="12px"
          >
            {totalQuant}
          </Box>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
