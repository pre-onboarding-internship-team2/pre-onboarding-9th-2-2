import { Badge, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hook/redux.hook";
import { ADD, REMOVE } from "../redux/slice/cartSlice";
import { cartState, RootState } from "../redux/types";

const ReservationsPage = () => {
  const dispatch = useDispatch();
  const { cart } = useAppSelector((state: RootState) => {
    return state.cart;
  });

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <section>
      <Flex direction="column">
        {cart.map((item: cartState) => (
          <Flex key={item.idx} my="3">
            <Image
              src={item.mainImage}
              alt={item.name}
              w="36"
              h="36"
              rounded="lg"
            />
            <Flex direction="column" minW="md">
              <Flex gap="2">
                <Badge
                  borderRadius="full"
                  bg="whatsapp.600"
                  maxW="max-content"
                  color="white"
                  px="2"
                  ml="2"
                >
                  {item.spaceCategory}
                </Badge>
                <Text fontSize="xs" fontWeight="semibold" color="gray.500">
                  상품번호 : {item.idx}
                </Text>
              </Flex>
              <Text fontSize="md" fontWeight="bold" m="2">
                {item.name}
              </Text>
              <Text fontSize="sm" mx="2">
                ₩ {item.price}
              </Text>
            </Flex>
            <Flex direction="column" justify="center" align="center" gap="4">
              <Text fontSize="xl" fontWeight="bold">
                {item.count}
              </Text>
              <Box>
                <Button
                  fontSize="xl"
                  roundedLeft="full"
                  bg="red.400"
                  onClick={() => dispatch(REMOVE(item))}
                >
                  -
                </Button>
                <Button
                  fontSize="xl"
                  roundedRight="full"
                  bg="green.300"
                  onClick={() => dispatch(ADD(item))}
                >
                  +
                </Button>
              </Box>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex justify="space-between" align="center" w="2xl">
        <Text fontSize="xl" fontWeight="bold">
          Total : ₩{" "}
          {cart.reduce(
            (acc: number, cur: cartState) => (acc += cur.count * cur.price),
            0
          )}
        </Text>
        <Button
          roundedLeft="full"
          roundedRight="full"
          bg="whatsapp.600"
          color="white"
        >
          결제하기
        </Button>
      </Flex>
    </section>
  );
};

export default ReservationsPage;
