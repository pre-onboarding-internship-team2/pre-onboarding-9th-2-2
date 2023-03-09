import { Select } from "@chakra-ui/react";
import { ItemType } from "../../types/Item.type";

type Props = {
  item_list: ItemType[];
  setCategoryFilter: (option: string) => void;
};

const SpaceCategorySearch = ({ item_list, setCategoryFilter }: Props) => {
  const categoryArr = new Set<string>(
    item_list.map((item) => item.spaceCategory)
  );

  return (
    <Select
      placeholder="All"
      onChange={(e) => {
        setCategoryFilter(e.target.value);
      }}
    >
      {[...categoryArr].sort().map((item: string) => {
        return <OptionComponent key={item} item={item} />;
      })}
    </Select>
  );
};

export const OptionComponent = ({ item }: { item: string }) => {
  return <option value={item}>{item}</option>;
};

export default SpaceCategorySearch;
