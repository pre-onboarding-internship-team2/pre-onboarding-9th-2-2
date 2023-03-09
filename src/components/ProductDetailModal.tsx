import { Product } from "@/services/product";
import {
  Badge,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import ButtonReservation from "./ButtonReservation";

export default function ProductDetailModal({
  disclosure,
  product,
}: {
  disclosure: { isOpen: boolean; onOpen: () => void; onClose: () => void };
  product: Product;
}) {
  const { isOpen, onClose } = disclosure;
  const {
    idx,
    name,
    price,
    spaceCategory,
    mainImage,
    description,
    maximumPurchases,
    registrationDate,
  } = product;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box fontSize="12px" color="gray" textAlign="right">
              상품번호: {idx}
            </Box>
            <Box position="relative" w="100%" h="200px">
              <Image
                src={mainImage}
                alt={name}
                fill
                style={{ objectFit: "cover", borderRadius: "3px" }}
              />
              <Badge variant="solid" colorScheme="blue" marginLeft={1}>
                {spaceCategory}
              </Badge>
            </Box>
            <Box w="100%">
              <Badge variant="outline" colorScheme="blue">
                1인당 최대 구매 개수: {maximumPurchases}개
              </Badge>
            </Box>
            <Text fontWeight="bold" fontSize="24px" textAlign="right">
              {price.toLocaleString("ko")}원
            </Text>
            <Text fontWeight="bold">상세 설명</Text>
            <Text fontSize="12px" color="gray" mt="8px">
              {description}
            </Text>
            <Text fontWeight="bold">상품 등록 시간</Text>
            <Text fontSize="12px" color="gray" mt="8px">
              {registrationDate.toString()}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blackAlpha"
              mr={3}
              w={"100%"}
              onClick={onClose}
            >
              Close
            </Button>
            <ButtonReservation product={product} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
