import React from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { ItemType } from "../../types/Item.type";
import SavedItem from "./SavedItem";

const SavedItemsList = ({
  reservation_list,
}: {
  reservation_list: ItemType[];
}) => {
  return (
    <TableContainer mb="40px">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontSize="1rem">제품</Th>
            <Th fontSize="1rem">가격</Th>
            <Th fontSize="1rem">수량</Th>
            <Th fontSize="1rem">총액</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reservation_list.map((item: ItemType) => (
            <SavedItem key={item.idx} item={item} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SavedItemsList;
