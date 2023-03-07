import TravelItemList from "@/components/TravelItemList";
import { loadTravelItems } from "@/lib/loadTravelItems";
import { TravelItem } from "@/types/travelItem.type";
import { Container, Link } from "@chakra-ui/react";
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
      <Container as="main" maxW="container.lg" py={4}>
        <TravelItemList travelItems={travelItems} />

        <Link as={NextLink} href="/reservations">
          장바구니
        </Link>
      </Container>
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
