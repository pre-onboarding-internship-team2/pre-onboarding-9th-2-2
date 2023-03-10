import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import PriceRangeSlider from './PriceRangeSlider';

const PriceFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button ml={5} onClick={onOpen}>
        가격 범위
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="28px" fontWeight="800" mb="2px" mt="30px">
            가격 범위 설정
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex mx={10} mb={5} flexDir={'column'}>
              <Text mb={5}>선택하신 가격 범위</Text>
              <PriceRangeSlider />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default PriceFilter;
