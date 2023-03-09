import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { fetchItems } from "../store/item/itemSlice";
import {
  clearReservations,
  getTotalPrice,
} from "../store/reservation/reservationSlice";
import { formatCurrency } from "../utils/formatCurrency";
import { Heading, Box, Text, Button, useToast, Icon } from "@chakra-ui/react";
import { HiArrowLongLeft } from "react-icons/hi2";
import SavedItemsList from "../components/reservation/SavedItemsList";

const ReservationPage = () => {
  const reservation_list = useAppSelector(
    (state) => state.reservation.savedItems
  );
  const totalPrice = useAppSelector((state) => state.reservation.totalAmount);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(getTotalPrice(""));
  }, [dispatch, reservation_list]);

  const handlerClearReservations = () => {
    const confirmed = window.confirm("전체 상품을 삭제하시겠습니까?");
    if (confirmed) {
      dispatch(clearReservations(""));
      toast({
        title: "모든 상품을 삭제하였습니다.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Heading py="30px" textAlign="center">
        장바구니
      </Heading>
      {reservation_list.length !== 0 ? (
        <>
          <SavedItemsList reservation_list={reservation_list} />
          <Box display="flex" justifyContent="space-between">
            <Button onClick={handlerClearReservations}>전체삭제</Button>
            <Box
              display="flex"
              justifyContent="flex-end"
              flexDirection="column"
              width="200px"
            >
              <Box display="flex" justifyContent={"space-between"}>
                <Text textAlign="right" fontSize="1.1rem" mb="20px">
                  총 상품가격
                </Text>
                <Text
                  textAlign="right"
                  fontSize="1.2rem"
                  fontWeight="800"
                  mb="24px"
                >
                  {formatCurrency(totalPrice)}
                </Text>
              </Box>
              <Button textAlign="right" bgColor="#000" color="#fff" px="60px">
                구매하기
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          py="100px"
        >
          <Text fontSize="1.2rem" fontWeight="700" mb="4px">
            장바구니에 담긴 상품이 없습니다.
          </Text>
          <Text mb="14px">원하는 상품을 담아보세요</Text>
          <Button
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            color="#999"
            onClick={() => {
              navigate("/main");
            }}
          >
            <Icon as={HiArrowLongLeft} w={6} h={6} color="#999" mr="10px" />
            <Text>상품 보러가기</Text>
          </Button>
        </Box>
      )}
    </>
  );
};

export default ReservationPage;
