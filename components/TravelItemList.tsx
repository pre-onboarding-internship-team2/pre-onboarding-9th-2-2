import useFilteredItems from "@/hooks/useFilteredItems";
import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import TravelItemComponent from "./TravelItem";

export default function TravelItemList() {
  const filteredItems = useFilteredItems();
  return (
    <SimpleGrid
      py={4}
      spacing={{ base: 4, md: 8 }}
      templateColumns={{
        base: "1fr 1fr",
        md: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {!filteredItems.length ? (
        <Text>여행 상품이 없습니다</Text>
      ) : (
        filteredItems.map((travelItem) => (
          <TravelItemComponent travelItem={travelItem} key={travelItem.idx} />
        ))
      )}
    </SimpleGrid>
  );
}
