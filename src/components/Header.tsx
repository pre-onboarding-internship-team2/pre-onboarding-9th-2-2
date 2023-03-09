import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useAppSelector } from "../redux/hook/redux.hook";
import { cartState, RootState } from "../redux/types";

const Header = () => {
  const { cart } = useAppSelector((state: RootState) => {
    return state.cart;
  });

  const totalItem = cart.reduce(
    (acc: number, cur: cartState) => (acc += cur.count),
    0
  );

  return (
    <Flex bg="whatsapp.500" h="12" justify="space-between" align="center">
      <Text
        ml="6"
        fontWeight="bold"
        fontSize="xl"
        color="white"
        cursor="pointer"
      >
        <Link to="/main">Trip Market</Link>
      </Text>
      <Box position="relative">
        <Text
          mr="6"
          fontWeight="bold"
          fontSize="xl"
          color="white"
          cursor="pointer"
        >
          <Link to="/reservations">Cart</Link>
        </Text>
        <Flex
          position="absolute"
          top="-1"
          right="3"
          bg="red.500"
          rounded="full"
          w="4"
          h="4"
          justify="center"
          align="center"
        >
          <Text fontSize="xs" fontWeight="semibold" color="white">
            {totalItem}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
