import { Container, Heading } from '@chakra-ui/react';
import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { useReducer } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { shoppingInitState, shoppingReducer } from 'store/reducers/shopping.reducer';

function Header() {
  const [state, cartDispatch] = useReducer(shoppingReducer, shoppingInitState);
  const { totalQuant } = state;

  return (
    <Container flexDirection="row" centerContent justifyContent={'space-between'}>
      <Heading my={10} mb={10} color="brand.main">
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
            right="21px"
            top="12px"
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
    </Container>
  );
}

export default Header;
