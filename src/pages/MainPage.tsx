import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hook/redux.hook";
import { RootState } from "../redux/types";
import fetchData from "../redux/function/fetchData";
import { ADD } from "../redux/slice/cartSlice";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Flex, Box, Image, Text, Badge } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { dataState } from "../redux/types";
import { useDispatch } from "react-redux";

const MainPage = () => {
  const [selected, setSelected] = useState<dataState>();
  const thunkDispatch = useAppDispatch();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useAppSelector((state: RootState) => {
    return state.data;
  });

  const { cart } = useAppSelector((state: RootState) => {
    return state.cart;
  });

  // chakraUI handle modal hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    thunkDispatch(fetchData());
  }, [thunkDispatch]);

  return (
    <Box minH="100vh">
      <Flex flexWrap="wrap" justify="center" align="center" minH="inherit">
        {data.map((product: dataState) => (
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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selected?.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={selected?.mainImage}
                minW="full"
                maxH="48"
                borderRadius="lg"
              />
              <Flex align="center" justify="space-between" marginTop="2">
                <Badge
                  borderRadius="full"
                  bg="whatsapp.600"
                  maxW="max-content"
                  color="white"
                  px="2"
                >
                  {selected?.spaceCategory}
                </Badge>
                <Text fontSize="xs" fontWeight="semibold" color="gray.500">
                  상품번호 : {selected?.idx}
                </Text>
              </Flex>
              <Text fontSize="md" fontWeight="semibold" marginTop="2">
                {selected?.description}
              </Text>
              <Text fontSize="sm">₩ {selected?.price}</Text>
              <Text fontSize="xs" color="gray.600">
                최대 수량 : {selected?.maximumPurchases}
              </Text>
              <Text fontSize="sm" color="gray.700">
                등록일자 : {selected?.registrationDate}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button
                marginX="1"
                borderLeftRadius="full"
                borderRightRadius="full"
              >
                예약하기
              </Button>
              <Button
                onClick={onClose}
                marginX="1"
                borderLeftRadius="full"
                borderRightRadius="full"
              >
                취소하기
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};

export default MainPage;
