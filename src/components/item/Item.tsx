import React from "react";
import Modal from "./Modal";
import { ItemType } from "../../types/Item.type";
import { formatCurrency } from "../../utils/formatCurrency";
import { Text, Image, GridItem, Box, useDisclosure } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/useRedux";
import ReservationButton from "./ReservationButton";

const Item = ({ item }: { item: ItemType }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const savedItems = useAppSelector((state) => state.reservation.savedItems);

  return (
    <GridItem>
      <Box onClick={onOpen} cursor="pointer" mb="10px">
        <Box width="100%" position="relative" mb="10px">
          <Box
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
            top="0"
            left="0"
            width="40px"
            height="40px"
            backgroundColor="#000"
            borderTopLeftRadius="8"
            borderBottomRightRadius="8"
          >
            <Text color="#fff" fontWeight="600">
              {item.idx}
            </Text>
          </Box>
          <Image
            src={item.mainImage}
            alt={item.name}
            width="100%"
            borderRadius="8"
            m="0"
            p="0"
          />

          <Box
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bottom="0"
            right="0"
            width="60px"
            height="40px"
            backgroundColor="rgba(0,0,0,0.5)"
            borderTopLeftRadius="8"
            borderBottomRightRadius="8"
          >
            <Text color="#fff" fontWeight="600">
              {item.spaceCategory}
            </Text>
          </Box>
        </Box>

        <Text fontSize="16px" fontWeight="500">
          {item.name}
        </Text>
        <Text fontSize="24px" fontWeight="700">
          {formatCurrency(item.price)}
        </Text>
      </Box>

      <ReservationButton item={item} />

      <Modal isOpen={isOpen} onClose={onClose} targetItem={item} />
    </GridItem>
  );
};

export default Item;
