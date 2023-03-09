import Head from "next/head";
import ProductList from "@/components/ProductList";
import Filter from "@/components/ProductFilter";
import { GetStaticProps } from "next";
import { fetchGetProduct } from "@/services/product";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ProductProvider } from "@/components/ProductContext";
import LayoutRoot from "../_layout";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>List and Cart</title>
        <meta name="description" content="list and cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutRoot>
        <ProductProvider>
          <Filter />
          <ProductList />
        </ProductProvider>
      </LayoutRoot>
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
