/** @jsxImportSource @emotion/react */
import Head from "next/head";
import Link from "next/link";
import ProductList from "@/components/ProductList";
import { css } from "@emotion/react";
import Filter from "@/components/ProductFilter";
import { GetStaticProps } from "next";
import { fetchGetProduct } from "@/services/product";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ProductProvider } from "@/components/ProductContext";

export default function MainPage() {
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
          <ProductProvider>
            <Filter />
            <ProductList />
          </ProductProvider>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products"], fetchGetProduct);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
