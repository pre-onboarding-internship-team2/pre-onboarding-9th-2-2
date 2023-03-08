import React from 'react';
import { ProductType } from './PtoductItem.Type';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Button,
  Text,
  Box,
  Center,
  VStack,
  Flex,
  Badge,
} from '@chakra-ui/react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductType;
  addProduct: () => void;
}

export default function ProductModal({ isOpen, onClose, product, addProduct }: IProps) {
  const PRICE = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center mb="3">
            <Image rounded="lg" h="300" w="300" objectFit="cover" src={product.mainImage} />
          </Center>
          <VStack mb="5">
            <Flex w="100%" justifyContent="space-between" alignItems="baseline" mb="3">
              <Badge rounded="full" fontSize="1em" px="4" py="1">
                {product.spaceCategory}
              </Badge>
              <Text color="gray.500" rounded="full" fontSize="0.8em">
                상품번호 : {product.idx}
              </Text>
            </Flex>
            <Flex
              w="100%"
              justifyContent="space-between"
              borderBottom="1px"
              borderColor="gray.200"
              p="3"
            >
              <Text as="b" color="teal">
                가격
              </Text>
              <Text>{PRICE} 원</Text>
            </Flex>
            <Flex
              w="100%"
              justifyContent="space-between"
              borderBottom="1px"
              borderColor="gray.200"
              p="3"
            >
              <Text as="b" color="teal">
                1인 최대 구매 가능 갯수
              </Text>
              <Text>{product.maximumPurchases}</Text>
            </Flex>
            <Box w="100%" justifyContent="space-between" px="3">
              <Text as="b" color="teal">
                내용
              </Text>
              <Text mt="2">{product.description}</Text>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <Text color="gray.500">{product.registrationDate}</Text>
          <Box>
            <Button colorScheme="teal" mr="3" onClick={addProduct}>
              예약하기
            </Button>
            <Button colorScheme="gray" onClick={onClose}>
              Close
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
