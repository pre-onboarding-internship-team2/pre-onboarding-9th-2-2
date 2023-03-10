import { ItemType } from "../types/Item.type";
import { PriceRange } from "../types/priceRange.type";

function filterFunc({
  categoryFilter,
  priceFilter,
  item_list,
}: {
  categoryFilter: string[];
  priceFilter: number[];
  item_list: ItemType[];
}): ItemType[] {
  const startPoint = PriceRange.find(
    (val) => val.range === priceFilter[0]
  )?.price;
  const endPoint = PriceRange.find(
    (val) => val.range === priceFilter[1]
  )?.price;

  if (categoryFilter.length === 0) {
    const priceFilterd = item_list?.filter((item: ItemType) => {
      return (
        item.price >= (startPoint ? startPoint : 0) &&
        item.price <= (endPoint ? endPoint : 0)
      );
    });
    return priceFilterd;
  } else {
    const placePriceFilterd = item_list
      ?.filter((item: ItemType) => categoryFilter.includes(item.spaceCategory))
      ?.filter((item: ItemType) => {
        return (
          item.price >= (startPoint ? startPoint : 0) &&
          item.price <= (endPoint ? endPoint : 0)
        );
      });
    return placePriceFilterd;
  }
}
export default filterFunc;
