/** @jsxImportSource @emotion/react */
import { Product } from "@/services/product";
import { Badge, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Image from "next/image";
import ButtonReservation from "./ButtonReservation";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <>
      <SimpleGrid
        minChildWidth={"300px"}
        gap={4}
        css={css`
          & > div {
            justify-self: center;
          }
        `}
      >
        {products.map((product) => {
          const { idx, name, price, spaceCategory, mainImage } = product;
          return (
            <div
              key={idx}
              css={css`
                width: 300px;
                :hover {
                  cursor: pointer;
                }
              `}
            >
              <div
                css={css`
                  font-size: 12px;
                  color: gray;
                `}
              >
                상품번호: {idx}
              </div>
              <div
                css={css`
                  position: relative;
                  width: 300px;
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
                  `}
                />
                <Badge variant="solid" colorScheme="blue" marginLeft={1}>
                  {spaceCategory}
                </Badge>
              </div>
              <Heading size="sm" py={1}>
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
              <ButtonReservation product={product} />
            </div>
          );
        })}
      </SimpleGrid>
    </>
  );
}
