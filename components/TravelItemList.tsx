import { TravelItem } from "@/types/travelItem.type";
import { SimpleGrid, Text } from "@chakra-ui/react";
import TravelItemCard from "./TravelItemCard";

export default function TravelItemList({
  travelItems,
}: {
  travelItems: TravelItem[];
}) {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {!travelItems.length ? (
        <Text>여행 상품이 없습니다</Text>
      ) : (
        travelItems.map((travelItem) => (
          <TravelItemCard travelItem={travelItem} key={travelItem.idx} />
        ))
      )}
    </SimpleGrid>
  );
}
