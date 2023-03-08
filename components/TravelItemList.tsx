import { TravelItem } from "@/types/travelItem.type";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { TravelItem as TravelItemComponent } from "./TravelItem";

export default function TravelItemList({
  travelItems,
}: {
  travelItems: TravelItem[];
}) {
  return (
    <SimpleGrid
      spacing={{ base: 4, md: 8 }}
      templateColumns={{
        base: "1fr 1fr",
        md: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {!travelItems.length ? (
        <Text>여행 상품이 없습니다</Text>
      ) : (
        travelItems.map((travelItem) => (
          <TravelItemComponent travelItem={travelItem} key={travelItem.idx} />
        ))
      )}
    </SimpleGrid>
  );
}
