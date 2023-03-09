import { Product } from "@/services/product";
import { Badge, Heading, Text, useDisclosure, Box } from "@chakra-ui/react";
import Image from "next/image";
import ButtonReservation from "./ButtonReservation";
import ProductDetailModal from "./ProductDetailModal";

export default function ProductItem({ product }: { product: Product }) {
  const { idx, name, price, spaceCategory, mainImage } = product;
  const disclosure = useDisclosure();

  return (
    <>
      <ProductDetailModal disclosure={disclosure} product={product} />
      <Box
        w="300px"
        border="1px solid #e8e8e8"
        borderRadius="5px"
        p="10px"
        transition="all 0.2s"
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <Box _hover={{ cursor: "pointer" }} onClick={disclosure.onOpen}>
          <Box textAlign="right" fontSize="12px" color="gray">
            상품번호: {idx}
          </Box>
          <Box w="100%" h="150px" position="relative">
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
          <Heading
            size="sm"
            py={1}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {name}
          </Heading>
          <Text textAlign="right" fontWeight="bold">
            {price.toLocaleString("ko")}원
          </Text>
        </Box>
        <ButtonReservation product={product} />
      </Box>
    </>
  );
}
