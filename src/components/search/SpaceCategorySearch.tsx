import { Stack, Checkbox, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ItemType } from "../../types/Item.type";

type Props = {
  item_list: ItemType[];
  setCategoryFilter: (option: string[]) => void;
};

const SpaceCategorySearch = ({ item_list, setCategoryFilter }: Props) => {
  const categoryArr = new Set<string>(
    item_list.map((item) => item.spaceCategory)
  );

  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);

  const checkedPlaceHandler = (targetPlace: string) => {
    selectedPlaces.includes(targetPlace)
      ? setSelectedPlaces(selectedPlaces.filter((e) => e !== targetPlace))
      : setSelectedPlaces([...selectedPlaces, targetPlace]);
  };

  useEffect(() => {
    setCategoryFilter(selectedPlaces);
  }, [selectedPlaces, setSelectedPlaces]);

  return (
    <Stack display="flex" flexDirection="row" width="fit-content">
      {[...categoryArr].sort().map((item: string) => {
        return (
          <Checkbox
            marginTop="0 !important"
            key={item}
            value={item}
            onChange={() => checkedPlaceHandler(item)}
          >
            <Text width="50px"> {item}</Text>
          </Checkbox>
        );
      })}
    </Stack>
  );
};

export const OptionComponent = ({ item }: { item: string }) => {
  return <option value={item}>{item}</option>;
};

export default SpaceCategorySearch;
