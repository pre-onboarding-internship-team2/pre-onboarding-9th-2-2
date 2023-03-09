import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useAppDispatch } from '../redux/hook/redux.hook';
import { useAppSelector } from '../redux/hook/redux.hook';
import { IProduct, productList } from '../redux/redux.interface';
import { increase } from '../redux/slice/cartslice';
import { formatCurrency } from '../utils/formatCurrency';
import ProductModal from './Modal';

function Product() {
  const locationFilter = useAppSelector((state) => state.product.locationFilter);
  const priceFilter = useAppSelector((state) => state.product.priceFilter);
  console.log(priceFilter);

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
    <Flex justifyContent={'center'}>
      <SimpleGrid mb={20} spacing={10} templateColumns="repeat(4, minmax(280px, 1fr))">
        {showProducts.map((item, index) => (
          <Card
            backgroundImage={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("${item.mainImage}")`}
            key={index}
            w="300px"
          >
            <CardBody
              onClick={() => {
                onOpen();
                setClicked(item);
              }}
            >
              <Stack mt="6" spacing="3">
                <Heading size="sm" color="white">
                  {item.name}
                </Heading>
                <Flex>
                  <Tag size={'sm'} width={'-webkit-fit-content'}>
                    상품번호: {item.idx}
                  </Tag>
                  <Tag
                    size="sm"
                    marginLeft={2}
                    backgroundColor="#FFF0E3"
                    width="-webkit-fit-content"
                  >
                    {item.spaceCategory}
                  </Tag>
                </Flex>
              </Stack>
            </CardBody>
            <CardFooter flexGrow={1} justifyContent="space-between">
              <Text color="gray.200" fontSize="xl" fontWeight="bold" alignContent="center">
                ₩{formatCurrency(item.price)}
              </Text>
              <Button onClick={() => onClickHandle(item)}>예약</Button>
            </CardFooter>
            <ProductModal selected={clicked!} isOpen={isOpen} onClose={onClose} />
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default Product;
