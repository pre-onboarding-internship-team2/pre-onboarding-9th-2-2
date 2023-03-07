import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import mockData from '@assets/mock_data.json';

import { IData } from './types';

function TravelProduct() {
  const dataList: IData[] = mockData.travelInfo; // idx, name, mainImage, price, spaceCategory

  return (
    <SimpleGrid mx={10} mb={20} spacing={4} templateColumns="repeat(4, minmax(300px, 1fr))">
      {dataList.map((item, index) => (
        <Card key={index}>
          <Image objectFit="cover" src={item.mainImage}></Image>
          <CardHeader>
            <Heading size="md">{item.name}</Heading>
          </CardHeader>
          <CardBody>
            <Text>가격: {item.price}원</Text>
            <Text>카테고리: {item.spaceCategory}</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default TravelProduct;
