import React from "react";
import Image from "next/image";
import {
  Flex,
  ButtonGroup,
  Button,
  Stack,
  Text,
  Badge,
  Box,
  useToast,
} from "@chakra-ui/react";
import { ProductType } from "@/types/product.type";
import { reserveItem } from "@/helpers/reserve-action";

interface ProductItemProps {
  product: ProductType;
  showModal: (product: ProductType) => void;
}

const ProductItem = ({ product, showModal }: ProductItemProps) => {
  const toast = useToast();

  const addToCart = async () => {
    await reserveItem(product).then((res) => {
      if (res.status === 201) {
        toast({
          title: "Product Reserved.",
          description: "Product has well reserved in your cart.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else if (res.status === 422) {
        toast({
          title: "Failed to Reserved.",
          description: "Product is already in your cart.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <Flex
      pb="0.8rem"
      minW="20rem"
      boxShadow="dark-lg"
      direction="column"
      borderRadius="10px"
    >
      <Stack mb="2px" pos="relative" w="full" h="250px">
        <Image
          style={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
          fill
          src={product.mainImage}
          alt={product.description as string}
        />
      </Stack>
      <Stack px="8px">
        <Badge color="white" maxW="max-content" bg="green">
          {product.spaceCategory}
        </Badge>
        <Box>
          <Text>이름 : {product.name}</Text>
          <Text>등록 번호 : {product.idx}</Text>
          <Text>가격 : {product.price}</Text>
        </Box>
      </Stack>
      <ButtonGroup display="flex" justifyContent="center">
        <Button type="button" onClick={() => showModal(product)}>
          더보기
        </Button>
        <Button type="button" onClick={addToCart}>
          예약
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default React.memo(ProductItem);
