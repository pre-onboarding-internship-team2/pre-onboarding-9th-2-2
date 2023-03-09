import { Badge, Button, Flex, Image, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hook/redux.hook";
import { ADD, DELETE, REMOVE } from "../redux/slice/cartSlice";
import { cartState, RootState } from "../redux/types";
import Header from "../components/Header";
import EmptyBox from "../components/reservations/EmptyBox";

const ReservationsPage = () => {
  const dispatch = useDispatch();
  const { cart } = useAppSelector((state: RootState) => {
    return state.cart;
  });

  const toast = useToast();

  return (
    <>
      <Header />
      {cart.length !== 0 ? (
        <Flex direction="column" justify="center" align="center" minH="100vh">
          <Flex direction="column">
            {cart.map((item: cartState) => (
              <Flex key={item.idx} my="3" rounded="lg" shadow="lg" p="4">
                <Image
                  src={item.mainImage}
                  alt={item.name}
                  w="36"
                  h="36"
                  rounded="lg"
                />
                <Flex direction="column" w="md">
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
                <Flex
                  direction="column"
                  justify="center"
                  align="center"
                  gap="4"
                >
                  <Text fontSize="xl" fontWeight="bold">
                    {item.count}
                  </Text>
                  <Flex flexWrap="nowrap">
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
                      onClick={() =>
                        item.count === item.maximumPurchases
                          ? toast({
                              title: "한도를 초과하였습니다.",
                              status: "error",
                              isClosable: true,
                            })
                          : dispatch(ADD(item))
                      }
                    >
                      +
                    </Button>
                  </Flex>
                </Flex>
                <CloseIcon
                  cursor="pointer"
                  onClick={() => dispatch(DELETE(item))}
                />
              </Flex>
            ))}
          </Flex>
          <Flex justify="space-between" align="center" w="50%" my="4">
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
        </Flex>
      ) : (
        <EmptyBox />
      )}
    </>
  );
};

export default ReservationsPage;
