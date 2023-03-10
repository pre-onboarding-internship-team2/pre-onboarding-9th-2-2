import {
  Badge,
  Box,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useAppDispatch } from '../redux/hook/redux.hook';
import { useAppSelector } from '../redux/hook/redux.hook';
import { IProduct } from '../redux/redux.interface';
import { increase } from '../redux/slice/cartslice';
import { formatCurrency } from '../utils/formatCurrency';
import ProductModal from './Modal';

function Product() {
  const productList = useAppSelector((state) => state.product.products);
  const locationFilter = useAppSelector((state) => state.product.locationFilter);
  const priceFilter = useAppSelector((state) => state.product.priceFilter);

  const clickedLoaction = locationFilter
    .filter((location) => location.clicked == true)
    .map((target) => target.location);

  const [showProducts, setShowProducts] = useState<IProduct[]>(productList);
  useEffect(() => {
    setShowProducts((prev) => {
      const locationFiltered = productList.filter((product) =>
        clickedLoaction.includes(product.spaceCategory)
      );
      const finalFiltered = locationFiltered.filter(
        (product) => product.price >= priceFilter.min && product.price <= priceFilter.max
      );
      return finalFiltered;
    });
  }, [locationFilter, priceFilter]);

  const dispatch = useAppDispatch();
  const onClickHandle = (item: IProduct) => {
    dispatch(increase(item));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clicked, setClicked] = useState<IProduct>();

  return (
    <Flex>
      <SimpleGrid mb={20} spacing={10} templateColumns="repeat(4, minmax(280px, 1fr))">
        {showProducts.map((item, index) => (
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
    </Flex>
  );
}

export default Product;
