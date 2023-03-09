import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../redux/hook/redux.hook";
import { RootState } from "../redux/types";
import { dataState } from "../redux/types";
import fetchData from "../redux/function/fetchData";
import { ADD } from "../redux/slice/cartSlice";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Flex, Box, Image, Text, Badge } from "@chakra-ui/react";
import ModalBox from "../components/ModalBox";
import FilterBox from "../components/FilterBox";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { data, status, error } = useAppSelector((state: RootState) => {
    return state.data;
  });
  const { cart } = useAppSelector((state: RootState) => {
    return state.cart;
  });

  const thunkDispatch = useAppDispatch();
  const dispatch = useDispatch();
  const [products, setProducts] = useState<dataState[]>(data);
  const [selected, setSelected] = useState<dataState>({
    idx: "",
    description: "",
    mainImage: "",
    spaceCategory: "",
    maximumPurchases: 0,
    price: 0,
    name: "",
    registrationDate: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    thunkDispatch(fetchData());
  }, [thunkDispatch]);

  useEffect(() => {
    if (status === "fulfilled") {
      setProducts(data);
    }
  }, [status]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Box>
      <Button>
        <Link to="/reservations">장바구니</Link>
      </Button>
      <FilterBox data={data} setProducts={setProducts} />
      <Flex flexWrap="wrap" justify="center" align="center">
        {products.map((product: dataState) => (
          <Box
            key={product.idx}
            onClick={(event: React.MouseEvent) => {
              setSelected(product);
              if ((event.target as Element).tagName !== "BUTTON") {
                onOpen();
              }
            }}
            w="xs"
            minH="24"
            borderRadius="2xl"
            boxShadow="lg"
            margin="3"
          >
            <Image
              src={product.mainImage}
              alt={product.name}
              w="full"
              h="48"
              borderTopRadius="2xl"
            />
            <Flex
              flexDirection="column"
              bg="gray.50"
              p="3"
              borderBottomRadius="2xl"
            >
              <Flex align="center" justify="space-between">
                <Badge
                  borderRadius="full"
                  bg="whatsapp.600"
                  maxW="max-content"
                  color="white"
                  px="2"
                >
                  {product.spaceCategory}
                </Badge>
                <Text fontSize="xs" fontWeight="semibold" color="gray.500">
                  상품번호 : {product.idx}
                </Text>
              </Flex>
              <Text fontSize="md" fontWeight="bold">
                {product.name}
              </Text>
              <Text fontSize="sm">₩ {product.price}</Text>
              <Box alignSelf="flex-end">
                <Button
                  onClick={() => dispatch(ADD(product))}
                  borderLeftRadius="full"
                  borderRightRadius="full"
                  minW="20"
                  bg="blackAlpha.50"
                >
                  예약
                </Button>
              </Box>
            </Flex>
          </Box>
        ))}
        <ModalBox selected={selected} isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
};

export default MainPage;
