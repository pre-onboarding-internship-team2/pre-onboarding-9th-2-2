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
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import { formatCurrency } from '../utils/formatCurrency';

function Reservation() {
  const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);

  return (
    <Flex flexDir="column" justifyContent={'center'} alignItems={'center'} marginTop="10">
      <Heading marginBottom="5">예약 내역</Heading>
      {cartProducts.map((item, index) => (
        <Card
          key={index}
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
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
              <Heading size="md">{item.name}</Heading>
              <Text py="2">{item.description}</Text>
              <Text fontWeight="extrabold">{formatCurrency(item.count * item.price)}원</Text>
            </CardBody>

            <CardFooter justifyContent="center" alignItems="center">
              <Button variant="solid" colorScheme="blue">
                -
              </Button>
              <Text marginInline="8">{item.count}</Text>
              <Button variant="solid" colorScheme="blue">
                +
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Flex>
  );
}

export default Reservation;
