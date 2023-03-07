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
  useDisclosure,
} from '@chakra-ui/react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';

import mockData from '@reducers/mock_data.json';

import { IData } from './types';

function TravelProduct() {
  const dataList: IData[] = mockData.travelInfo; // idx, name, mainImage, price, spaceCategory

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clicked, setClicked] = useState<IData>();

  return (
    <SimpleGrid mx={10} mb={20} spacing={4} templateColumns="repeat(4, minmax(300px, 1fr))">
      {dataList.map((item, index) => (
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
            <Button>예약</Button>
            <Button
              onClick={() => {
                onOpen();
                setClicked(item);
              }}
            >
              여행 상품 정보
            </Button>
          </CardFooter>
          <Modal key={index} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontSize="28px" fontWeight="800" marginBottom="2px" marginTop="30px">
                {clicked?.name}
              </ModalHeader>
              <ModalCloseButton />
              <Image boxSize="300px" src={clicked?.mainImage} objectFit="cover" />
              <ModalBody>
                <Text fontSize="20px" fontWeight="700">
                  가격: {clicked?.price}원
                </Text>
                <Text fontSize="15px">{clicked?.description}</Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default TravelProduct;
