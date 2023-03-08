/** @jsxImportSource @emotion/react */
import Head from "next/head";
import { fetchGetProduct, Product } from "../services/product";
import { GetServerSideProps } from "next";
import Link from "next/link";
import ProductList from "@/components/ProductList";
import { css } from "@emotion/react";

export default function MainPage({ products }: { products: Product[] }) {
  return (
    <>
      <Head>
        <title>List and Cart</title>
        <meta name="description" content="list and cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100vw;
        `}
      >
        <div
          css={css`
            width: 100%;
            max-width: 1028px;
            padding: 0 15px;
          `}
        >
          <Link href={"reservations"}>장바구니</Link>
          <ProductList products={products} />
        </div>
      </main>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: products } = await fetchGetProduct();

  return {
    props: {
      products,
    },
  };
};
