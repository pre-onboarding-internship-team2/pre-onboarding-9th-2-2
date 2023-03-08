import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Badge,
  Tooltip,
  Image,
  Flex,
  chakra,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { ProductType } from './PtoductItem.Type';
import ProductModal from './ProductModal';

interface ProductProps {
  product: ProductType;
}

export default function ProductItem({ product }: ProductProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const IMAGE = product.mainImage;
  const PRICE = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <Center p="8" onClick={onOpen}>
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
            <Image rounded="lg" height="300" width="300" objectFit='cover' src={IMAGE} />
          </Box>
          <Box pt="5">
            <Flex justifyContent="space-between" alignItems="baseline">
              <Badge rounded="full" fontSize="1em" px="4">
                {product.spaceCategory}
              </Badge>
              <Text color='gray.500' rounded="full" px="2" fontSize="0.8em">
                상품번호 : {product.idx}
              </Text>
            </Flex>
            <Flex mt="3" justifyContent="space-between" alignContent="center">
              <Stack>
                <Box fontSize="lg" fontWeight="semibold" as="h4" lineHeight="tight" pr="5">
                  {product.name}
                </Box>
                <Box fontSize="md">{PRICE} 원</Box>
              </Stack>
              <Tooltip
                label="상품예약"
                bg="white"
                placement='top'
                color='gray.800'
                fontSize='1em'
              >
                <chakra.a href='reservations' display='flex'>
                  <Icon as={FiShoppingCart} h="8" w="8" alignSelf='center' />
                </chakra.a>
              </Tooltip>
            </Flex>
          </Box>
        </Box>
      </Center>

      <ProductModal isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
}
