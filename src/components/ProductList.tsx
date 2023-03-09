/** @jsxImportSource @emotion/react */
import { useProduct } from "@/components/ProductContext";
import { SimpleGrid } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Fragment } from "react";
import Empty from "./Empty";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const { products } = useProduct();
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
        {products.length === 0 ? (
          <Empty text="조건에 맞는 상품이 없습니다" />
        ) : (
          products.map((product) => {
            return (
              <Fragment key={product.idx}>
                <ProductItem product={product} />
              </Fragment>
            );
          })
        )}
      </SimpleGrid>
    </>
  );
}
