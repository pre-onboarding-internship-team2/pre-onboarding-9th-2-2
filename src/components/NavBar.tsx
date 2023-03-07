import { Link } from "react-router-dom";
import { Box, Icon, Text } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
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
          <Icon as={CiShoppingCart} w={8} h={8} />
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
