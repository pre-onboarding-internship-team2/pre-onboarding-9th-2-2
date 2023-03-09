import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { fetchItems } from "../store/item/itemSlice";
import { ItemType } from "../types/Item.type";
import {
  addToReserVation,
  removeFromReserVation,
  subtractReserVation,
  clearReservations,
  getTotalPrice,
} from "../store/reservation/reservationSlice";
import { formatCurrency } from "../utils/formatCurrency";
import {
  Box,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useToast,
} from "@chakra-ui/react";

const ReservationPage = () => {
  const reservation_list = useAppSelector(
    (state) => state.reservation.savedItems
  );
  const totalPrice = useAppSelector((state) => state.reservation.totalAmount);
  const toast = useToast();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(getTotalPrice(""));
  }, [dispatch, reservation_list]);

  const handlerClearReservations = () => {
    const confirmed = window.confirm("전체 상품을 삭제하시겠습니까?");
    if (confirmed) {
      dispatch(clearReservations(""));
    }
  };
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
    <>
      <h2>장바구니</h2>
      {reservation_list.length !== 0 ? (
        <>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>제품</Th>
                  <Th>가격</Th>
                  <Th>수량</Th>
                  <Th>총액</Th>
                </Tr>
              </Thead>
              <Tbody>
                {reservation_list.map((item: ItemType) => (
                  <Tr key={item.idx}>
                    <Td>
                      <img src={item.mainImage} />
                      {item.name}
                    </Td>
                    <Td>
                      <p>{formatCurrency(item.price)}</p>
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
                      <Text>{formatCurrency(item.price * item.quantity)}</Text>
                      <Button
                        onClick={() => {
                          handleRemoveFromReservation(item);
                        }}
                      >
                        X
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Button onClick={handlerClearReservations}>전체삭제</Button>
          <Box>
            <Text>총 상품가격{formatCurrency(totalPrice)}</Text>
            <Button>구매하기</Button>
          </Box>
        </>
      ) : (
        <Box>
          <Text>장바구니에 아무것도 담겨있지 않습니다.</Text>
        </Box>
      )}
    </>
  );
};

export default ReservationPage;
