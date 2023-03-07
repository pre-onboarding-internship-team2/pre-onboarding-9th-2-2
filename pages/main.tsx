import { loadTravelItems } from "@/lib/loadTravelItems";
import { TravelItem } from "@/types/travelItem.type";
import { Link } from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import NextLink from "next/link";

const Main = ({
  travelItems,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>여행 상품 목록</title>
        <meta name="description" content="여행 상품 목록 페이지" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        여행 상품 목록
        <Link as={NextLink} href="/reservations">
          장바구니
        </Link>
        {JSON.stringify(travelItems)}
      </main>
    </>
  );
};

export default Main;

export const getStaticProps: GetStaticProps<{
  travelItems: TravelItem[];
}> = async (context) => {
  const travelItems = await loadTravelItems();

  return {
    props: {
      travelItems,
    },
  };
};
