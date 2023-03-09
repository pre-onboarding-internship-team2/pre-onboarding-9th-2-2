import { Link } from "react-router-dom";
import { Box, Icon, Text } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";
import { useAppSelector } from "../hooks/useRedux";

const NavBar = () => {
  const totalQuantity = useAppSelector((state) => state.reservation.savedItems);

  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#789BFB"
      color="#ffffff"
      px="40px"
      py="24px"
    >
      <Text fontSize="2xl" fontWeight="800" textTransform="uppercase">
        <Link to="/main">Like a local</Link>
      </Text>

      <Box pos="absolute" right="40px">
        <Link to="/reservations">
          <Text
            position="absolute"
            top="-5px"
            right="-5px"
            width="20px"
            height="20px"
            lineHeight="20px"
            borderRadius="50%"
            backgroundColor="#000"
            color="#fff"
            textAlign="center"
          >
            {totalQuantity.length}
          </Text>
          <Icon as={CiShoppingCart} w={10} h={10} />
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
