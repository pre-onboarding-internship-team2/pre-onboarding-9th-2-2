import React from "react";
import { ItemType } from "../../types/Item.type";
import {
  Modal as ModalUI,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Box,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { formatCurrency } from "../../utils/formatCurrency";
import AddButton from "./SaveItemButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  targetItem: ItemType;
}

const Modal = ({ isOpen, onClose, targetItem }: Props) => {
  return (
    <ModalUI size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex">
          <Text
            w="30px"
            h="30px"
            borderRadius="50%"
            backgroundColor="#789BFB"
            color="#fff"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mr="10px"
          >
            {targetItem.idx}
          </Text>
          [{targetItem.spaceCategory}] {targetItem.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Image src={targetItem.mainImage} alt={targetItem.name} mr="20px" />
          <Box display="flex" flexDirection="column">
            <Text mb="16px">{targetItem.description}</Text>

            <Text fontSize="24px" fontWeight="600" mb="12px">
              {formatCurrency(targetItem.price)}
            </Text>
            <Box display="flex" alignItems="center">
              잔여
              <Text fontSize="18px" fontWeight="500" ml="12px">
                {targetItem.maximumPurchases}
              </Text>
            </Box>
            <Text>{targetItem.registrationDate}</Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <AddButton item={targetItem} />
        </ModalFooter>
      </ModalContent>
    </ModalUI>
  );
};

export default Modal;
