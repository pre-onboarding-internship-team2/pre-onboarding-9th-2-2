import React from "react";
import { ItemType } from "../../types/Item.type";
import {
  addToReserVation,
  removeFromReserVation,
  subtractReserVation,
} from "../../store/reservation/reservationSlice";
import { Box, Text, Button, Image, Tr, Td, useToast } from "@chakra-ui/react";
import { formatCurrency } from "../../utils/formatCurrency";
import { useAppDispatch } from "../../hooks/useRedux";

const SavedItem = ({ item }: { item: ItemType }) => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const handleRemoveFromReservation = (item: ItemType) => {
    dispatch(removeFromReserVation(item));
    toast({
      title: "상품이 장바구니에서 삭제되었습니다.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Tr key={item.idx}>
      <Td display="flex" flexDirection="row" alignItems="center">
        <Image src={item.mainImage} width="100px" mr="20px" />
        <Text fontWeight="600">{item.name}</Text>
      </Td>
      <Td>
        <Text>{formatCurrency(item.price)}</Text>
      </Td>
      <Td>
        <Box>
          <Button
            onClick={() => {
              dispatch(subtractReserVation(item));
            }}
          >
            -
          </Button>
          <label>{item.quantity}</label>
          <Button
            onClick={() => {
              dispatch(addToReserVation(item));
            }}
          >
            +
          </Button>
        </Box>
      </Td>
      <Td>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Text
            fontWeight="600"
            display="inline-block"
            mr="20px"
            lineHeight="40px"
          >
            {formatCurrency(item.price * item.quantity)}
          </Text>
          <Button
            onClick={() => {
              handleRemoveFromReservation(item);
            }}
          >
            X
          </Button>
        </Box>
      </Td>
    </Tr>
  );
};

export default SavedItem;
