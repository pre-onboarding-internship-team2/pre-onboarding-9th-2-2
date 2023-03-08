/** @jsxImportSource @emotion/react */
import { Product } from "@/services/product";
import {
  Badge,
  Heading,
  Text,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import Image from "next/image";
import ButtonReservation from "./ButtonReservation";

export default function ProductItem({ product }: { product: Product }) {
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div
              css={css`
                font-size: 12px;
                color: gray;
                text-align: right;
              `}
            >
              상품번호: {idx}
            </div>
            <div
              css={css`
                position: relative;
                width: 100%;
                height: 200px;
              `}
            >
              <Image
                src={mainImage}
                alt={name}
                fill
                css={css`
                  object-fit: cover;
                  z-index: -1;
                  border-radius: 3px;
                `}
              />
              <Badge variant="solid" colorScheme="blue" marginLeft={1}>
                {spaceCategory}
              </Badge>
            </div>
            <div
              css={css`
                width: 100%;
                text-align: right;
              `}
            >
              <Badge variant="outline" colorScheme="blue">
                1인당 최대 구매 개수: {maximumPurchases}개
              </Badge>
            </div>
            <h3
              css={css`
                font-weight: bold;
              `}
            >
              상세 설명
            </h3>
            <p
              css={css`
                font-size: 12px;
                color: gray;
                margin-bottom: 16px;
              `}
            >
              {description}
            </p>
            <h3
              css={css`
                font-weight: bold;
              `}
            >
              상품 등록 시간
            </h3>
            <p
              css={css`
                font-size: 12px;
                color: gray;
              `}
            >
              {registrationDate.toString()}
            </p>
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
      <div
        css={css`
          width: 300px;
          border: 1px solid #e8e8e8;
          border-radius: 5px;
          padding: 10px;
        `}
      >
        <div
          css={css`
            :hover {
              cursor: pointer;
            }
          `}
          onClick={onOpen}
        >
          <div
            css={css`
              text-align: right;
              font-size: 12px;
              color: gray;
            `}
          >
            상품번호: {idx}
          </div>
          <div
            css={css`
              position: relative;
              width: 100%;
              height: 150px;
            `}
          >
            <Image
              src={mainImage}
              alt={name}
              fill
              css={css`
                object-fit: cover;
                z-index: -1;
                border-radius: 3px;
              `}
            />
            <Badge variant="solid" colorScheme="blue" marginLeft={1}>
              {spaceCategory}
            </Badge>
          </div>
          <Heading
            size="sm"
            py={1}
            css={css`
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            `}
          >
            {name}
          </Heading>
          <Text
            css={css`
              text-align: right;
              font-weight: bold;
            `}
          >
            {price.toLocaleString("ko")}원
          </Text>
        </div>
        <ButtonReservation product={product} />
      </div>
    </>
  );
}
