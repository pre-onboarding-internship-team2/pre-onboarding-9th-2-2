import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { addReservation } from 'store/modules/reservation.slice';
import { ProductType } from './PtoductItem.Type';
import {
  Box,
  Center,
  useColorModeValue,
  Badge,
  Tooltip,
  Image,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

import ProductModal from './ProductModal';

interface ProductProps {
  product: ProductType;
}

export default function ProductItem({ product }: ProductProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch<AppDispatch>();

  const IMAGE = product.mainImage;
  const PRICE = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const addProduct = () => {
    dispatch(addReservation(product)).then(() => {
      toast({
        title: '예약되었습니다.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    });
  };

  return (
    <>
      <Center m="8" onClick={onOpen}>
        <Box
          role="group"
          p="6"
          maxW="350px"
          minH="450px"
          w="full"
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow="2xl"
          rounded="lg"
          pos="relative"
          zIndex="1"
        >
          <Box
            rounded="lg"
            mt="-12"
            pos="relative"
            maxW="300px"
            height="300px"
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 1,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(5px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(10px)',
              },
            }}
          >
            <Image rounded="lg" height="300" width="300" objectFit="cover" src={IMAGE} />
          </Box>
          <Box pt="5">
            <Flex justifyContent="space-between" alignItems="baseline">
              <Badge rounded="full" fontSize="1em" px="4">
                {product.spaceCategory}
              </Badge>
              <Text color="gray.500" rounded="full" px="2" fontSize="0.8em">
                상품번호 : {product.idx}
              </Text>
            </Flex>
            <Flex mt="5" justifyContent="space-between" alignContent="center">
              <Stack>
                <Box fontSize="lg" fontWeight="semibold" as="h4" lineHeight="tight" pr="5">
                  {product.name}
                </Box>
                <Box fontSize="md">{PRICE} 원</Box>
              </Stack>
              <Box>
                <Tooltip
                  label="상품예약"
                  bg="white"
                  placement="bottom"
                  color="gray.800"
                  fontSize="1em"
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.100"
                >
                  <Box
                    cursor="pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      addProduct();
                    }}
                  >
                    <Icon as={FiShoppingCart} h="8" w="8" alignSelf="center" />
                  </Box>
                </Tooltip>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Center>

      <ProductModal isOpen={isOpen} onClose={onClose} product={product} addProduct={addProduct}/>
    </>
  );
}
