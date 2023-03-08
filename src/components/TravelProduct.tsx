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
import { CartState, IProduct } from 'store/reducers/shopping.interface';
import { shoppingList } from 'store/reducers/shopping.interface';

import TravelModal from './TravelModal';

function TravelProduct() {
  const cartInitState: CartState = {
    cart: [],
    totalQuant: 0,
  };
  const [cartList, setCartList] = useState<CartState>(cartInitState);

  const onClickHandle = (item: IProduct) => {
    const newItem = cartList?.cart.find((product) => product.product.idx == item.idx);
    setCartList((oldCart) => {
      if (newItem) {
        console.log('exists');
        const itemIndex = cartList?.cart.findIndex((product) => product.product.idx == item.idx);
        return {
          ...oldCart,
          cart: cartList?.cart.map((product, index) => ({
            ...product,
            count: product.count + (itemIndex === index ? 1 : 0),
          })),
          totalQuant: cartList?.totalQuant + 1,
        };
      } else {
        return {
          cart: [
            ...oldCart.cart,
            {
              count: 1,
              product: item,
            },
          ],
          totalQuant: cartList?.totalQuant + 1,
        };
      }
    });
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
            <TravelModal selected={clicked!} isOpen={isOpen} onClose={onClose} />
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default TravelProduct;
