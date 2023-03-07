import React from "react";
import Modal from "./Modal";
import { ItemType, toSavedItemType } from "../types/Item.type";
import { formatCurrency } from "../utils/formatCurrency";
import { Image, Button, GridItem, Box, useDisclosure } from "@chakra-ui/react";
import { useAppDispatch } from "../hooks/useRedux";
import { addToRV } from "../store/reservation/reservationSlice";

const Item = ({ item }: { item: ItemType }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  const handleAddToRV = (item: toSavedItemType) => {
    dispatch(addToRV(item));
  };

  return (
    <GridItem>
      <div onClick={onOpen}>
        <p>{item.idx}</p>
        <Box width="100%">
          <Image src={item.mainImage} alt={item.name} />
        </Box>
        <p>{item.name}</p>
        <p>{formatCurrency(item.price)}</p>
        <p>{item.spaceCategory}</p>
      </div>

      <Button
        colorScheme="blue"
        onClick={() => {
          handleAddToRV(item);
        }}
      >
        예약하기
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} targetItem={item} />
    </GridItem>
  );
};

export default Item;
