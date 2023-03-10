import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../redux/hook/redux.hook';
import { ICart } from '../redux/redux.interface';
import { decrease, increase, remove } from '../redux/slice/cartslice';
import { formatCurrency } from '../utils/formatCurrency';

function Reservation() {
  const cartProducts = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const increaseProduct = (item: ICart) => {
    dispatch(increase(item));
  };

  const decreaseProduct = (item: ICart) => {
    if (item.count == 1) {
      dispatch(remove(item.idx));
    }
    dispatch(decrease(item));
  };

  const deleteProduct = (idx: number) => {
    dispatch(remove(idx));
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Flex flexDir="column" justifyContent={'center'} alignItems={'center'} marginTop="10">
        <Flex marginBottom="5">
          <Button onClick={goBack} position={'absolute'} left={60}>
            돌아가기
          </Button>
          <Heading>예약 내역</Heading>
        </Flex>
        {cartProducts.map((item, index) => (
          <Card
            key={index}
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidxden"
            variant="outline"
            width="600px"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src={item.mainImage}
              alt="Caffe Latte"
            />
            <Stack width="100%">
              <CardBody>
                <Flex flexDir="row" justifyContent="space-between" alignItems="center">
                  <Heading size="md">{item.name}</Heading>
                  <Button
                    onClick={() => deleteProduct(item.idx)}
                    colorScheme="teal"
                    variant="ghost"
                  >
                    X
                  </Button>
                </Flex>
                <Text py="2">{item.description}</Text>
                <Text fontWeight="extrabold">{formatCurrency(item.count * item.price)}원</Text>
              </CardBody>

              <CardFooter justifyContent="center" alignItems="center">
                <Button onClick={() => decreaseProduct(item)} variant="solidx" colorScheme="gray">
                  -
                </Button>
                <Text marginInline="8">{item.count}</Text>
                <Button onClick={() => increaseProduct(item)} variant="solidx" colorScheme="gray">
                  +
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </Flex>
      <Outlet />
    </>
  );
}

export default Reservation;
