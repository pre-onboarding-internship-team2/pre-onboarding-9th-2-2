import Filter from "@/components/filter/Filter";
import TravelItemList from "@/components/TravelItemList";
import { FilterProvider } from "@/contexts/Filter.context";
import { TravelItemsProvider } from "@/contexts/TravelItems.context";
import { loadTravelItems } from "@/lib/loadTravelItems";
import { TravelItem } from "@/types/travelItem.type";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

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
      <TravelItemsProvider travelItems={travelItems}>
        <FilterProvider>
          <Filter />
          <TravelItemList />
        </FilterProvider>
      </TravelItemsProvider>
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
