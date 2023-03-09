import { useState } from "react";
import Image from "next/image";
import {
  Flex,
  SimpleGrid,
  useDisclosure,
  Stack,
  Text,
  Badge,
  Box,
} from "@chakra-ui/react";
import { ProductType } from "@/types/product.type";
import ProductItem from "./product-item";
import ModalBox from "../modal/modal";

interface ProductsListProps {
  products: ProductType[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [matchedProduct, setMatchedProduct] = useState<ProductType | null>(
    null,
  );

  const showModalHandler = (product: ProductType) => {
    onOpen();
    setMatchedProduct(product);
  };

  return (
    <Flex p="10px" justify="center">
      <ModalBox
        isOpen={isOpen}
        onClose={onClose}
        title={matchedProduct?.name as string}
        buttonText={"취소하기"}
      >
        <Stack pos={"relative"} w="full" h="250px">
          <Image
            fill
            src={matchedProduct?.mainImage as string}
            alt={matchedProduct?.name as string}
          />
        </Stack>
        <Stack>
          <Box>
            <Badge mr="0.5rem" maxW="max-content" color="white" bg="green">
              번호 : {matchedProduct?.idx}
            </Badge>
            <Badge maxW="max-content" color="white" bg="green">
              카테고리 : {matchedProduct?.spaceCategory}
            </Badge>
          </Box>
          <Text>이름 : {matchedProduct?.name}</Text>
          <Text>가격 : {matchedProduct?.price}</Text>
          <Text>최대 수량 : {matchedProduct?.maximumPurchases}</Text>
          <Text>등록일 : {matchedProduct?.registrationDate}</Text>
        </Stack>
      </ModalBox>
      <SimpleGrid p={5} gap={10} templateColumns="repeat(2, 1fr)">
        {products?.map((product) => (
          <ProductItem
            key={product.idx}
            product={product}
            showModal={showModalHandler}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductsList;
