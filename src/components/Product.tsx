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
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { shoppingList } from '../redux/cart.interface';
import { IProduct } from '../redux/cart.interface';
import { add } from '../redux/slice/cartslice';
import Modal from './Modal';

function Product() {
  const dispatch = useDispatch();

  const onClickHandle = (item: IProduct) => {
    dispatch(add(item));
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clicked, setClicked] = useState<IProduct>();

  return (
    <Flex>
      <SimpleGrid mb={20} spacing={4} templateColumns="repeat(4, minmax(300px, 1fr))">
        {shoppingList.map((item, index) => (
          <Card key={index}>
            <Image objectFit="cover" src={item.mainImage} />
            <CardHeader>
              <Heading size="md">{item.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>가격: {item.price}원</Text>
              <Text>카테고리: {item.spaceCategory}</Text>
            </CardBody>
            <CardFooter flexDir="column" flexGrow={1}>
              <Button onClick={() => onClickHandle(item)}>예약</Button>
              <Button
                onClick={() => {
                  onOpen();
                  setClicked(item);
                }}
              >
                여행 상품 정보
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
