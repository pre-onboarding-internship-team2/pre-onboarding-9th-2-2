import { Box, Button } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../redux/hook/redux.hook';

function Cart() {
  const cartProducts = useAppSelector((state) => state.cart);
  const totalQuant = cartProducts.reduce((cnt, object) => {
    return cnt + object.count;
  }, 0);

  return (
    <Link to="/reservation">
      <Button outline="none" boxShadow="none" rightIcon={<AiOutlineShoppingCart />}>
        장바구니
      </Button>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        right="90px"
        top="8px"
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
  );
}
export default Cart;
