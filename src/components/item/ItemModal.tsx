import ReservationButton from "./ReservationButton";
import { ItemType } from "../../types/Item.type";
import { formatCurrency } from "../../utils/formatCurrency";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import {
  Modal as ModalUI,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Box,
  Tag,
  Divider,
  List,
  ListItem,
  ListIcon,
  Text,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  targetItem: ItemType;
}

const Modal = ({ isOpen, onClose, targetItem }: Props) => {
  return (
    <ModalUI size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p="40px">
          <Box display="flex" justifyContent="space-between" mb="20px">
            <Image
              src={targetItem.mainImage}
              alt={targetItem.name}
              width="50%"
            />

            <Box
              width="45%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Tag mr="12px">{targetItem.spaceCategory}</Tag>
                <Text fontSize="1.5rem" fontWeight="800">
                  {targetItem.name}
                </Text>
              </Box>

              <Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                  mb="12px"
                >
                  <Text fontSize="1rem" fontWeight="500" mr="12px">
                    가격
                  </Text>
                  <Text fontSize="1.6rem" fontWeight="600">
                    {formatCurrency(targetItem.price)}
                  </Text>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                  mb="20px"
                >
                  <Tag>
                    1인당 최대 구매 개수
                    <Text fontSize="18px" fontWeight="500" ml="12px">
                      {targetItem.maximumPurchases}
                    </Text>
                  </Tag>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <ReservationButton item={targetItem} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider mb="10px" />
          <Box mb="16px">
            <Text fontSize="1.1rem" fontWeight="600">
              상품설명
            </Text>
            <Text>{targetItem.description}</Text>
          </Box>
          <Box>
            <List spacing={3} fontSize=".85rem">
              <ListItem>
                <ListIcon as={HiOutlineExclamationCircle} color="green.500" />
                상품번호: {targetItem.idx}
              </ListItem>
              <ListItem>
                <ListIcon as={HiOutlineExclamationCircle} color="green.500" />
                상품 등록일: {targetItem.registrationDate}
              </ListItem>
            </List>
          </Box>
        </ModalBody>
      </ModalContent>
    </ModalUI>
  );
};

export default Modal;
