import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { IProduct } from '../redux/cart.interface';

const TravelModal = ({
  selected,
  isOpen,
  onClose,
}: {
  selected: IProduct;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="28px" fontWeight="800" marginBottom="2px" marginTop="30px">
          {selected?.name}
        </ModalHeader>
        <ModalCloseButton />
        <Image boxSize="300px" src={selected?.mainImage} objectFit="cover" />
        <ModalBody>
          <Text fontSize="20px" fontWeight="700">
            가격: {selected?.price}원
          </Text>
          <Text fontSize="15px">예약 가능 수: {selected?.maximumPurchases}</Text>
          <Text fontSize="15px">{selected?.description}</Text>
          <Text fontSize="15px">예약 날짜: {selected?.registrationDate}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            닫기
          </Button>
          <Link to="/reservation">
            <Button variant="ghost">예약</Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default TravelModal;
