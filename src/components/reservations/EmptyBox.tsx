import { Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EmptyBox = () => {
  return (
    <Flex
      minH="100vh"
      direction="column"
      justify="center"
      align="center"
      gap="10"
    >
      <Text fontSize="4xl" fontWeight="bold" color="gray.400">
        장바구니에 담긴 상품이 없습니다.
      </Text>
      <Button
        rounded="full"
        w="24"
        bg="whatsapp.500"
        color="white"
        fontWeight="bold"
      >
        <Link to="/main">홈으로</Link>
      </Button>
    </Flex>
  );
};

export default EmptyBox;
