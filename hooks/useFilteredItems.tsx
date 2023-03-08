import { useFilterContext } from "@/contexts/Filter.context";
import { useTravelItems } from "@/contexts/TravelItems.context";

const useFilteredItems = () => {
  const { price, spaces } = useFilterContext();
  const { travelItems } = useTravelItems();
  const filteredItems = travelItems.filter((item) => {
    const conditions = [];
    if (price.start) {
      conditions.push(item.price >= price.start);
    }
    if (price.end) {
      conditions.push(item.price <= price.end);
    }
    if (spaces.length > 0) {
      conditions.push(spaces.includes(item.spaceCategory));
    }
    return (
      conditions.length === 0 || conditions.every((value) => value === true)
    );
  });

  return filteredItems;
};

export default useFilteredItems;
