import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch } from '../redux/hook/redux.hook';
import { useAppSelector } from '../redux/hook/redux.hook';
import { IProduct } from '../redux/redux.interface';
import { increase } from '../redux/slice/cartslice';
import { formatCurrency } from '../utils/formatCurrency';
import ProductModal from './Modal';

function Product() {
  const productList = useAppSelector((state) => state.product);
  const cartList = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const onClickHandle = (item: IProduct) => {
    const product = cartList.find((product) => product.idx == item.idx);
    if (product && product?.count == item.maximumPurchases) {
      toast.error('예약 가능 수량을 초과하였습니다.');
      return;
    }
    toast.success('상품을 장바구니에 담았습니다.');
    dispatch(increase(item));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clicked, setClicked] = useState<IProduct>();

  return (
    <Flex>
      <SimpleGrid mb={20} spacing={10} templateColumns="repeat(4, minmax(280px, 1fr))">
        {productList.map((item, index) => (
          <Box
            display={'flex'}
            flexDir={'column'}
            rounded="lg"
            backgroundImage={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("${item.mainImage}")`}
            key={index}
            maxW="sm"
            _hover={{
              boxShadow: 'dark-lg',
            }}
          >
            <Box
              onClick={() => {
                onOpen();
                setClicked(item);
              }}
              _hover={{
                cursor: 'pointer',
              }}
            >
              <Badge ml={'5'} mt={'5'} size={'sm'} width={'-webkit-fit-content'}>
                상품번호: {item.idx}
              </Badge>
              <Flex p="5" w="full">
                <Stack spacing="3">
                  <Heading size="sm" color="white">
                    {item.name}
                  </Heading>
                  <Flex>
                    <Tag
                      size="sm"
                      backgroundColor="brand.main"
                      color="white"
                      width="-webkit-fit-content"
                    >
                      {item.spaceCategory}
                    </Tag>
                  </Flex>
                </Stack>
              </Flex>
            </Box>
            <Flex p="5" w="full" justifyContent="space-between" alignContent={'center'}>
              <Text color="gray.200" fontSize="xl" fontWeight="bold" alignContent="center">
                ₩{formatCurrency(item.price)}
              </Text>
              <Button
                onClick={() => onClickHandle(item)}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                예약
              </Button>
            </Flex>
            <ProductModal selected={clicked!} isOpen={isOpen} onClose={onClose} />
          </Box>
        ))}
      </SimpleGrid>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={2}
      />
    </Flex>
  );
}

export default Product;
