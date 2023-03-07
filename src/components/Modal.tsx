import React from "react";
import { ItemType } from "../api/Item.type";
import {
  Modal as ModalUI,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";
import { formatCurrency } from "../utils/formatCurrency";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  targetItem: ItemType;
}

const Modal = ({ isOpen, onClose, targetItem }: Props) => {
  return (
    <ModalUI isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {targetItem.idx}. {targetItem.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={targetItem.mainImage} alt={targetItem.name} />
          <Text>{targetItem.description}</Text>
          <Text>{targetItem.spaceCategory}</Text>
          <Text>{formatCurrency(targetItem.price)}</Text>
          <Text>{targetItem.maximumPurchases}</Text>

          <Text>{targetItem.registrationDate}</Text>
        </ModalBody>
        <ModalFooter>
          <Button>예약하기</Button>
        </ModalFooter>
      </ModalContent>
    </ModalUI>
  );
};

export default Modal;
