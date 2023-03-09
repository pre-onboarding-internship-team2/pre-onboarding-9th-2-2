import {
  Button,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import { useProduct } from "@/components/ProductContext";
import { useState } from "react";

const PRICE_MAX = 999_999_999;

export default function Filter() {
  const { handleFilter } = useProduct();
  const [locations, setLocations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, PRICE_MAX]);

  const addLocation = (location: string) => {
    if (locations.includes(location)) {
      setLocations(locations.filter((e) => e !== location));
    } else {
      setLocations([...locations, location]);
    }
  };

  const convertPriceRange = ([min, max]: [number, number]) => {
    setPriceRange([min * 2000, max === 100 ? PRICE_MAX : max * 2000]);
  };

  return (
    <>
      <RangeSlider
        aria-label={["min", "max"]}
        onChangeEnd={convertPriceRange}
        step={5}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      {locations.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
      <Button onClick={() => addLocation("서울")}>서울</Button>
      <Button onClick={() => addLocation("강원")}>강원</Button>
      <Button onClick={() => addLocation("부산")}>부산</Button>
      <Button
        onClick={() =>
          handleFilter({
            locations,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
          })
        }
      >
        gogo
      </Button>
    </>
  );
}
