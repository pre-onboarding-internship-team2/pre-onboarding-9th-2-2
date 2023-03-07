import React from "react";
import Modal from "./Modal";
import { ItemType } from "../types/Item.type";
import { formatCurrency } from "../utils/formatCurrency";
import { Image, Button, GridItem, Box, useDisclosure } from "@chakra-ui/react";

const Item = ({ item }: { item: ItemType }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

      <Button colorScheme="blue">예약하기</Button>
      <Modal isOpen={isOpen} onClose={onClose} targetItem={item} />
    </GridItem>
  );
};

export default Item;
