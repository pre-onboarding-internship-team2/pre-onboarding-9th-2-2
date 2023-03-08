import { useFilterContext } from "@/contexts/Filter.context";
import { SpaceCategory } from "@/types/travelItem.type";
import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import PriceFilter from "./PriceFilter";

function Filter() {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
      gap={3}
    >
      <SpaceFilter />
      <PriceFilter />
      <ResetAllFilterButton />
    </Flex>
  );
}

export default Filter;

function ResetAllFilterButton() {
  const { resetAll } = useFilterContext();
  return <Button onClick={resetAll}>전체 필터 해제</Button>;
}

const fullSpaceList: SpaceCategory[] = ["서울", "강원", "부산", "대구", "제주"];

function SpaceFilter() {
  const { spaces, addSpace, removeSpace } = useFilterContext();
  const handleClick = (space: SpaceCategory) => {
    const handlerFunction = spaces.includes(space) ? removeSpace : addSpace;
    handlerFunction(space);
  };
  return (
    <ButtonGroup variant="outline" spacing="2">
      {fullSpaceList.map((space) => (
        <Button
          key={space}
          colorScheme="blue"
          onClick={() => handleClick(space)}
          variant={spaces.includes(space) ? "solid" : "outline"}
        >
          {space}
        </Button>
      ))}
    </ButtonGroup>
  );
}
