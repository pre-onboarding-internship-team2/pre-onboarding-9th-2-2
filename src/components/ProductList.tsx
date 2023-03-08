/** @jsxImportSource @emotion/react */
import { Product } from "@/services/product";
import { SimpleGrid } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { Fragment } from "react";
import ProductItem from "./ProductItem";

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
          return (
            <Fragment key={product.idx}>
              <ProductItem product={product} />
            </Fragment>
          );
        })}
      </SimpleGrid>
    </>
  );
}
