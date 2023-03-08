import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { shoppingList } from '../redux/cart.interface';
import { IProduct } from '../redux/cart.interface';
import { add } from '../redux/slice/cartslice';
import { formatCurrency } from '../utils/formatCurrency';
import Modal from './Modal';

function Product() {
  const dispatch = useDispatch();

  const onClickHandle = (item: IProduct) => {
    dispatch(add(item));
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clicked, setClicked] = useState<IProduct>();

  return (
    <Flex justifyContent={'center'}>
      <SimpleGrid mb={20} spacing={10} templateColumns="repeat(4, minmax(280px, 1fr))">
        {shoppingList.map((item, index) => (
          <Card
            backgroundImage={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("${item.mainImage}")`}
            key={index}
            w="300px"
            onClick={() => {
              onOpen();
              setClicked(item);
            }}
          >
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="sm" color="white">
                  {item.name}
                </Heading>
                <Text color="gray.200" fontSize="xs" fontWeight="bold">
                  {formatCurrency(item.price)}원
                </Text>
                <Text>카테고리: {item.spaceCategory}</Text>
              </Stack>
            </CardBody>
            <CardFooter flexDir="column" flexGrow={1}>
              <Button
                position={'absolute'}
                bottom="3"
                right="3"
                onClick={() => onClickHandle(item)}
              >
                예약
              </Button>
            </CardFooter>
            <Modal selected={clicked!} isOpen={isOpen} onClose={onClose} />
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default Product;
