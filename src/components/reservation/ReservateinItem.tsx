import React from 'react';
import {
  Card,
  CardBody,
  Image,
  Flex,
  Text,
  Stack,
  HStack,
  Button,
  Input,
  useNumberInput,
} from '@chakra-ui/react';

export default function ReservationItem() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 5,
    });

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();


  return (
    <Card shadow="md" border="1px solid" borderColor="gray.400" rounded="lg">
      <CardBody>
        <Flex>
          <Image
            borderRadius="lg"
            height="300"
            width="300"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          ></Image>
          <Stack ml="5" minW="sm" spacing="auto" maxH="300px">
            <Flex justifyContent="space-between" alignItems="center">
              <Text as="b" fontSize="xl">
                상품이름이다 메롱
              </Text>
              <Text fontSize="0.8rem" color="gray.500">
                상품번호 : 777
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text as="b">내용</Text>
              <Text>메롱메롱</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text as="b">가격</Text>
              <Text>메롱메롱</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text as="b">구매수량</Text>
              <HStack maxW="150px">
                <Button size="sm" {...dec}>
                  -
                </Button>
                <Input size="sm" {...input} />
                <Button size="sm" {...inc}>
                  +
                </Button>
              </HStack>
            </Flex>
            <Button w="full" colorScheme="red" variant="outline">
              삭제
            </Button>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
}
