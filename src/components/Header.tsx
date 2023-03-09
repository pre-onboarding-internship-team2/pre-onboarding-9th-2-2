import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../redux/hook/redux.hook';

function Header() {
  const cartProducts = useAppSelector((state) => state.cart);
  const totalQuant = cartProducts.reduce((cnt, object) => {
    return cnt + object.count;
  }, 0);

  return (
    <Flex mx={5} flexDirection="row" justifyContent={'space-between'} alignItems={'center'}>
      <Heading my={3} mb={10} mx={3} color="brand.main">
        Like a LOCAL
      </Heading>

      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link to="/reservation">
          <Button outline="none" boxShadow="none" rightIcon={<AiOutlineShoppingCart />}>
            My Cart
          </Button>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            right="50px"
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
