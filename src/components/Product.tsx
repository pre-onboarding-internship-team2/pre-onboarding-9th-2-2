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
import Modal from './Modal';

function Product() {
  const spaceFilter = useAppSelector((state) => state.product.spaceFilter);
  const clickedSpace = spaceFilter
    .filter((space) => space.clicked == true)
    .map((target) => target.space);

  const [showProducts, setShowProducts] = useState<IProduct[]>(productList);

  useEffect(() => {
    console.log('spaces:', clickedSpace);
    setShowProducts(productList.filter((product) => clickedSpace.includes(product.spaceCategory)));
  }, [spaceFilter]);

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
                <Tag size="sm" height="10px" backgroundColor="#FFF0E3" width="-webkit-fit-content">
                  {item.spaceCategory}
                </Tag>
              </Stack>
            </CardBody>
            <CardFooter flexGrow={1} justifyContent="space-between">
              <Text color="gray.200" fontSize="xl" fontWeight="bold" alignContent="center">
                ₩{formatCurrency(item.price)}
              </Text>
              <Button onClick={() => onClickHandle(item)}>예약</Button>
            </CardFooter>
            <Modal selected={clicked!} isOpen={isOpen} onClose={onClose} />
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default Product;
